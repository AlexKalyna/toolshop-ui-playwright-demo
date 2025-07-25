# Branch Naming Convention

## Overview

This document defines the standard branch naming convention for this repository to ensure consistency and clarity across all development work.

## Branch Naming Pattern

All feature branches must follow this pattern:

```
feature/ARC-<number>--<descriptive-name>
```

## Pattern Breakdown

- **`feature/`** - Prefix indicating this is a feature branch
- **`ARC-`** - Project prefix (Automated Regression & Continuous)
- **`<number>`** - Sequential issue/task number (e.g., 1900, 1901, 1902)
- **`--`** - Double dash separator
- **`<descriptive-name>`** - Kebab-case description of the feature/task

## Examples

✅ **Correct:**

- `feature/ARC-1900--Improve-github-workflow`
- `feature/ARC-1901--add-branch-protection`
- `feature/ARC-1902--implement-test-data-factory`
- `feature/ARC-1903--add-visual-regression-tests`

❌ **Incorrect:**

- `feature/improve-workflow` (missing ARC prefix and number)
- `feature/ARC-1900-improve-workflow` (single dash instead of double)
- `ARC-1900--improve-workflow` (missing feature/ prefix)
- `feature/arc-1900--improve-workflow` (lowercase ARC)

## Branch Types

- **`feature/ARC-<number>--<name>`** - New features and improvements
- **`bugfix/ARC-<number>--<name>`** - Bug fixes
- **`hotfix/ARC-<number>--<name>`** - Critical production fixes
- **`release/ARC-<number>--<name>`** - Release preparation

## Numbering System

- Start from **1900** for this project
- Increment sequentially for each new task
- Use the same number in:
  - Branch name
  - Commit messages
  - Pull request titles
  - Issue references

## Commit Message Convention

When committing to these branches, reference the ARC number:

```
git commit -m "ARC-1901: Add branch protection rules"
git commit -m "ARC-1901: Implement CODEOWNERS file"
```

## Pull Request Convention

Pull request titles should follow:

```
ARC-1901: Add branch protection and governance rules
```

## Enforcement

- Branch protection rules will enforce this naming convention
- CI/CD pipeline will validate branch names
- Pull requests with incorrect naming will be blocked

## Migration

For existing branches that don't follow this convention:

1. Create new branch with correct naming
2. Cherry-pick commits or create new PR
3. Delete old branch after merge
