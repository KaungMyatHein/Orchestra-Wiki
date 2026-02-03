---
sidebar_position: 10
---

# The Bridge Between Figma and Code

Figma is an island. Your Codebase is an island. **Design Syncs** builds the bridge between them. It acts as an **Automated Courier** that delivers design updates to your engineering team without you ever having to leave Figma.

## The Problem
"Did you update the colors?" 
"Which file is the latest?"
"I forgot to push the new spacing."

Manual handoffs are messy. They rely on human memory and emails. If a designer changes a color but forgets to tell a developer, the product breaks.

## The Solution
**Design Syncs** automates the delivery. When you push changes from the Orchestra Sync plugin, this workflow wakes up, picks up your new tokens, translates them, and safely delivers them to your GitHub repository.

## The Workflow

### 1. The Trigger
The process starts the moment a designer pushes updates.
*   **Designer Action**: Updates styles in Figma -> Clicks "Push to GitHub".
*   **System Action**: The "Robot" wakes up.

### 2. Safety First (Concurrency)
If you push 3 times in 10 seconds, the system is smart. It cancels the first two attempts and only processes the final, latest version. This prevents conflicts and saves energy.

### 3. The Automation
The "Robot" performs a checklist:
1.  **Preparation**: Downloads the latest code.
2.  **Tool Setup**: Installs Node.js.
3.  **Translation**: Runs the **Build.JS** engine to convert your tokens.
4.  **Verification**: Checks that new files (CSS, Swift, etc.) were actually created.

### 4. The Delivery
Finally, it bundles everything up and creates a **Commit** with the message: `🎨 Design Token Updates`. Your developers can now simply "Pull" the changes and see the new design live in their code.

## GitHub Workflow Code
Add this YAML file to your repository at `.github/workflows/design-syncs.yml`.

```yaml
# .github/workflows/build-tokens.yml
name: Orchestra Design System Sync

on:
  push:
    paths:
      - 'tokens/**/*.json'

# --- FIX 2: CONCURRENCY ---
# If you push 3 times in a row, this cancels the first 2 runs
# so only the latest (most important) one finishes.
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build-tokens:
    runs-on: ubuntu-latest
    permissions:
      contents: write # Required to push changes back

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        with:
          # Fetch full history so rebase works correctly
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          # style-dictionary@5 requires Node >= 22
          node-version: '22'

      - name: Install Dependencies
        run: npm ci

      # Pull latest main first (before generating untracked files)
      - name: Pull latest changes
        run: git pull origin main --rebase

      - name: Run Build Script
        run: npm run tokens

      - name: Debug generated outputs
        run: |
          echo "--- src/styles ---"
          ls -la src/styles || true
          echo "--- git status ---"
          git status --porcelain

      - name: Commit React Styles
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "🎨 Design Token Updates"
          file_pattern: 'src/styles/*.css src/styles/*.ts'
          skip_dirty_check: false
```
