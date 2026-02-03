---
sidebar_position: 12
---

# How To Set Setting For Figma Plugin

### The GitHub Configuration Panel

When you open the **Settings** tab, you'll see a clean form titled "GitHub Configuration." Every field here matters.

#### 1. Personal Access Token (PAT)

**What it is:** Your digital passport to GitHub.

**Why it matters:** Without this token, the plugin cannot write to your repository. GitHub requires authentication for all write operations.

**How to get it:**
1. Click the blue **"Create Token"** link in the Settings panel
2. This opens GitHub's token creation page with the required scopes pre-selected
3. For **Classic tokens**: Ensure the `repo` scope is checked
4. For **Fine-grained tokens**: Enable **Contents** (Read and Write) and **Pull requests** (Read and Write)
5. Give it a descriptive name like "Orchestra Sync - Design Tokens"
6. Copy the generated token (you'll only see it once!)

**How to save it:**
1. Paste the token into the **"Personal Access Token (PAT)"** field
2. Click **Save**
3. The status indicator changes from 🔴 **Not connected** to 🟢 **Connected**

> **Security Note:** The token is stored securely in Figma's client storage. It never leaves your machine except when making authenticated GitHub API calls.

#### 2. Repo Owner

**What it is:** The GitHub username or organization name that owns the repository.

**Examples:**
- For `https://github.com/facebook/react` → Owner is `facebook`
- For `https://github.com/your-username/design-system` → Owner is `your-username`

**Why it matters:** The plugin needs to know whose repository to target. Typos here will cause "Repository not found" errors.

#### 3. Repo Name

**What it is:** The specific repository name within the owner's account.

**Examples:**
- For `https://github.com/facebook/react` → Repo is `react`
- For `https://github.com/your-company/design-tokens` → Repo is `design-tokens`

#### 4. Branch

**What it is:** The Git branch where you want changes to land.

**Default:** `main`

**Common scenarios:**
- **Simple projects:** Use `main` directly if you have a small team and trust the automation
- **Production systems:** Use a dedicated branch like `design-tokens` or `figma-sync`, then review PRs before merging to `main`

**How the plugin uses it:** This becomes the **base branch** for pull requests. The plugin creates a new branch from here, commits changes, and opens a PR back to this branch.

#### 5. File Path (JSON)

**What it is:** The location in your repository where the token JSON file should be created or updated.

**Default:** `tokens/design-tokens.json`

**Format:** Always include the folder path and `.json` extension

**Examples:**
- `tokens/global.json`
- `src/theme/design-tokens.json`
- `packages/tokens/figma-variables.json`

**What happens:**
- If the file doesn't exist, the plugin creates it automatically
- If it exists, the plugin merges your new tokens with existing data, preserving keys you haven't modified
- If you're syncing for the first time, the plugin will prompt you to confirm this path

#### 6. Save Settings Button

After filling in all fields, click **Save Settings**. This persists your configuration to:
- **Document-level storage:** Settings are saved per Figma file
- **Global defaults:** Owner and Repo are also saved globally across all your Figma files for convenience