---
name: openspec-verify
description: Verify project health - check builds, types, linting, and tests. Use when the user wants to validate that the project is in a healthy state after implementation.
allowed-tools: Bash(npm:*, yarn:*, pnpm:*)
license: MIT
metadata:
  author: custom
  version: "1.0"
---

Verify project health by running build, type checking, linting, and tests.

---

**Steps**

1. **Read package.json to identify available scripts**
   - Check for: typecheck, lint, build, test scripts
   - Determine the package manager (npm, yarn, or pnpm)

2. **Run verification checks in order**
   - TypeScript type checking (if script exists)
   - ESLint linting (if script exists)
   - Build validation (if script exists)
   - Tests (if script exists)

3. **Capture and analyze results**
   - For each check, capture stdout and stderr
   - Determine pass/fail status based on exit code

4. **Summarize results**
   - Show which checks passed/failed
   - Provide error details for failures
   - Suggest fixes if applicable

---

**Output**

Show a verification report with:
- ✅ Passed checks
- ❌ Failed checks with error details
- Summary of project health

**Guardrails**
- Skip checks that don't have corresponding scripts
- Handle errors gracefully - continue running other checks even if one fails
- Provide clear, actionable error messages