# Branch Protection Setup Guide

## Overview

This guide provides step-by-step instructions for setting up branch protection rules for the `main` branch to ensure code quality and prevent accidental changes.

## Prerequisites

- Repository admin access
- GitHub repository settings access

## Step 1: Access Branch Protection Settings

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Branches**
4. Click **Add rule** or **Add branch protection rule**

## Step 2: Configure Branch Protection Rule

### Basic Settings

- **Branch name pattern**: `main`
- **Description**: "Protect main branch - require CI checks, reviews, and branch naming"

### Protection Options

#### ✅ Branch Rules (All Required)

- ✅ **Restrict creations** - Only allow users with bypass permission to create matching refs
- ✅ **Restrict updates** - Only allow users with bypass permission to update matching refs
- ✅ **Restrict deletions** - Only allow users with bypass permissions to delete matching refs
- ✅ **Require linear history** - Prevent merge commits from being pushed to matching refs
- ✅ **Block force pushes** - Prevent users with push access from force pushing to refs

#### ✅ Require a pull request before merging

- ✅ **Require a pull request before merging** - Require all commits be made to a non-target branch and submitted via a pull request before they can be merged
- ✅ **Additional settings:**
  - ✅ **Require pull request reviews before merging**
  - ✅ **Required approving reviews**: `1` (minimum)
  - ✅ **Dismiss stale PR approvals when new commits are pushed**
  - ✅ **Require review from code owners**

#### ✅ Require status checks to pass before merging

- ✅ **Require status checks to pass** - Choose which status checks must pass before the ref is updated
- ✅ **Require branches to be up to date before merging**
- ✅ **Status checks that are required:**
  - `eslint-check` ✅ (GitHub Actions)
  - `playwright-tests` ✅ (GitHub Actions)
  - `validate-branch-name` ✅ (Any source)
  - `Build Project (Demo)` ✅ (GitHub Actions)
  - `Check Code Formatting` ✅ (GitHub Actions)
  - `Type Check` ✅ (GitHub Actions)
  - `Comprehensive Security Scan` ✅ (GitHub Actions)
  - `Security Audit` ✅ (GitHub Actions)

#### ✅ Security Features

- ✅ **Require signed commits** - Commits pushed to matching refs must have verified signatures

#### ❌ Optional Features (Not Enabled)

- ❌ **Require deployments to succeed** - Not enabled (optional for testing projects)
- ❌ **Require code scanning results** - Not enabled (optional for testing projects)

## Step 3: Branch Naming Enforcement

### Automatic Enforcement

The `branch-naming-check.yml` workflow will automatically validate:

- Branch naming convention: `feature/ARC-<number>--<name>`
- ARC number format and range (1900+)
- Duplicate ARC number detection

### Manual Validation

Before creating branches, ensure they follow:

```
feature/ARC-1901--add-branch-protection
bugfix/ARC-1902--fix-login-test
hotfix/ARC-1903--critical-security-fix
```

## Step 4: Security Features Setup

### Enable Security & Analysis

1. Go to **Settings → Security & analysis**
2. Enable:
   - ✅ **Dependency graph**
   - ✅ **Dependabot alerts**
   - ✅ **Dependabot security updates**
   - ✅ **Secret scanning**
   - ✅ **Secret scanning push protection**

### Configure Dependabot

The `.github/dependabot.yml` file is already configured for:

- Weekly npm dependency updates
- Weekly GitHub Actions updates
- Weekly Docker updates (if applicable)

## Step 5: Code Review Process

### Review Requirements

- **Minimum reviewers**: 1
- **Code owner review**: Required
- **Stale approval dismissal**: Enabled
- **Conversation resolution**: Required

### Bypass Permissions

- **Restrict creations/updates/deletions**: These options give repository owners bypass permissions
- **Solo project workflow**: You can create/update/delete branches and merge your own PRs
- **Future team collaboration**: Remove yourself from bypass list when adding team members

### Review Guidelines

1. **Check code quality**: Ensure linting and formatting pass
2. **Verify tests**: Confirm new tests are added for new functionality
3. **Review security**: Check for potential security issues
4. **Validate naming**: Ensure branch and commit naming conventions
5. **Test functionality**: Verify the changes work as expected

## Step 6: Merge Strategy

### Recommended Merge Strategy

- **Merge method**: Squash and merge
- **Commit message**: Use PR title with ARC number
- **Branch cleanup**: Delete branch after merge

### Commit Message Format

```
ARC-1901: Add branch protection and governance rules
```

## Step 7: Monitoring and Maintenance

### Regular Checks

- Monitor failed status checks
- Review security alerts
- Update dependencies regularly
- Maintain documentation

### Troubleshooting

- **Failed checks**: Check CI/CD logs for details
- **Branch conflicts**: Rebase or merge main into feature branch
- **Security issues**: Address vulnerabilities promptly
- **Naming violations**: Rename branch to follow convention

## Benefits

### Code Quality

- Ensures all code is reviewed
- Prevents broken builds from merging
- Maintains consistent code style

### Security

- Prevents unauthorized changes
- Enforces security scanning
- Requires signed commits

### Process

- Enforces consistent naming
- Maintains clean git history
- Provides audit trail

### Collaboration

- Clear review process
- Defined ownership
- Structured communication

## Emergency Procedures

### Bypassing Protection (Admin Only)

1. Go to branch protection settings
2. Temporarily disable protection
3. Make necessary changes
4. Re-enable protection immediately
5. Document the bypass reason

### Hotfix Process

1. Create hotfix branch: `hotfix/ARC-XXXX--description`
2. Make minimal changes
3. Create PR with expedited review
4. Merge and deploy immediately
5. Create follow-up issue for proper fix

## Conclusion

Branch protection ensures:

- ✅ **Code quality** through mandatory reviews and checks
- ✅ **Security** through scanning and signed commits
- ✅ **Process consistency** through naming conventions
- ✅ **Team collaboration** through clear ownership and review process

This setup transforms your repository into a production-grade, secure, and well-governed codebase.
