# CLAUDE.md — OpenSpec 工作流规则

## 核心纪律

1. **先读后做**：执行任何 OpenSpec 命令前，先读取：
   - openspec/config.yaml（项目约束）
   - openspec/specs/ 目录下相关域的规范（当前系统行为）
   - openspec/changes/ 当前活跃的变更（如果存在）

2. **不要猜测需求**：如果 spec 中没有明确定义某个行为，问我，不要自行补充。

3. **out-of-scope 是红线**：proposal.md 中标注为 out-of-scope 的功能，严禁实现。

## Apply 阶段规则

1. 每完成一个 tasks.md 中的 Phase，停下来。
2. 总结当前阶段的代码变更（改了什么文件、为什么这么改）。
3. 等待我 review 并确认后，再继续下一 Phase。
4. 严禁一次性实现所有任务。

## 代码标准

- 所有组件使用 TypeScript + 函数式组件
- 样式全部使用 Tailwind CSS，禁止内联 style
- 支持暗色模式（dark: 前缀）
- 所有图片使用 lazy loading
- 组件文件名使用 PascalCase

## 归档验证规则

每次执行 `/OPSX: Archive` 后，必须执行以下验证步骤：

### 验证步骤

1. **归档文件完整性检查**
   - 检查归档目录是否包含以下文件：
     - `.openspec.yaml`（元数据文件）
     - `proposal.md`（变更提案）
     - `design.md`（技术设计）
     - `tasks.md`（任务清单）
     - `specs/` 目录（规格文档）
   - 如果任何文件缺失，立即修复

2. **主规格同步验证**
   - 检查 `openspec/specs/` 目录中是否包含归档中的所有规格文件
   - 对比主规格与归档中的 spec.md 内容是否一致

3. **活跃变更清理验证**
   - 检查 `openspec/changes/` 目录中是否还存在已归档的变更目录
   - 如果存在，说明归档失败，需要重新执行

4. **归档顺序验证**
   - 检查归档目录是否按创建顺序排列
   - 使用序号前缀（01-, 02-, 03-...）确保正确顺序

### 验证工具

可以使用以下 PowerShell 命令快速验证：

```powershell
# 检查所有归档是否完整
$archives = Get-ChildItem -Path "openspec/changes/archive" -Directory
foreach ($a in $archives) {
    $files = (Get-ChildItem $a.FullName -File).Name
    $dirs = (Get-ChildItem $a.FullName -Directory).Name
    Write-Output "$($a.Name): Files=$files, Dirs=$dirs"
}

# 检查主规格是否完整
Get-ChildItem -Path "openspec/specs" -Directory | ForEach-Object {
    $spec = Get-ChildItem $_.FullName -File
    Write-Output "$($_.Name): $($spec.Name)"
}
```

### 失败处理

如果验证失败：
1. 立即停止后续操作
2. 报告缺失的文件或不一致的内容
3. 在继续之前修复所有问题