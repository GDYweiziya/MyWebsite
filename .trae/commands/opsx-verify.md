---
name: "OPSX: Verify"
description: Verify project health - check builds, types, linting, and tests
---

Verify project health by running build, type checking, linting, and tests.

---

**Steps**

1. **Check package.json for available scripts**
   - Look for: build, typecheck, lint, test, etc.

2. **Run verification checks**
   - TypeScript type checking
   - ESLint linting
   - Build validation
   - Tests (if available)

3. **Summarize results**
   - Show which checks passed/failed
   - Provide error details for failures
   - Suggest fixes if applicable

---

**Output**

Show a verification report with:
- ✅ Passed checks
- ❌ Failed checks with error details
- Summary of project health