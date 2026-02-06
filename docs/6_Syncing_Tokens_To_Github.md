---
sidebar_position: 6
---

# Syncing Tokens To Github

Once your Settings are configured, you're ready to sync. Switch to the **Sync Tokens** tab.

### Step 1: Create Sync Groups

Design tokens come in different flavors—colors, spacing, typography. Sync Groups let you organize which Figma Variable Collections map to which token types.

**To create a group:**
1. Click **+ Add Group**
2. A new card appears with three options: **Color**, **Spacing**, **Typography**
3. Choose the type that matches your intent

**What each type does:**
- **Color** → Syncs `COLOR` type variables from Figma
- **Spacing** → Syncs `FLOAT` type variables (typically used for spacing, sizing, radii)
- **Typography** → Syncs `STRING` type variables (font families, font weights)

### Step 2: Select Collections

After choosing a type, you'll see a list of your Figma Variable Collections filtered by compatibility.

**What you see:**
- Only collections containing variables of the matching type appear
- Each collection shows its name and variable count (e.g., "Primitives • 24 vars")

**To select:**
- Check the boxes for all collections you want to include in this group
- You can select multiple collections per group
- Collections can only belong to one group at a time (enforced by type filtering)

**Example setup:**
```
Group 1: Color
  ✓ Primitives (24 vars)
  ✓ Semantic Colors (12 vars)

Group 2: Spacing
  ✓ Spacing Scale (16 vars)
```

### Step 3: Sync to GitHub

When you're ready, click **Sync to GitHub**.

#### What Happens Behind the Scenes

**Phase 1: Variable Processing**

The plugin iterates through all variables in your selected collections and:
1. **Filters WIP tokens:** Skips variables hidden from publishing or starting with `_` or `.`
2. **Resolves aliases:** If a variable references another (e.g., `Primary = {Blue.500}`), it exports the reference as `{Blue/500}`
3. **Converts colors:** RGB values are converted to hex format (e.g., `#3B82F6`)
4. **Applies code syntax:** For each variable, the plugin sets platform-specific code syntax:
   - **WEB:** `var(--button-bg-primary)`
   - **ANDROID:** `Theme.colors.button_bg_primary`
   - **iOS:** `Color.Button.Bg.Primary`

**Phase 2: GitHub Validation**

The plugin verifies:
1. The repository exists and you have access
2. The specified branch exists
3. The file path is valid (creates it if needed)

If the file already exists, it fetches the current content to show you a diff.

**Phase 3: Diff Review Modal**

A modal appears showing:
- **Left column:** Current content in GitHub
- **Right column:** New content from Figma
- **Color coding:**
  - 🟢 Green = Additions
  - 🔴 Red = Removals
  - White = Unchanged

**Commit message field:** Pre-filled with "Update tokens from Figma" (you can customize this)

**Phase 4: Pull Request Creation**

When you click **Confirm & Push**:

1. **Create a new branch:** `orchestra-update-<timestamp>`
2. **Commit the file:** Your token JSON is committed to this branch
3. **Open a Pull Request:**
   - **Title:** Your commit message
   - **Body:** "Automated token update from Figma via Orchestra Plugin."
   - **Base:** The branch you specified in Settings
   - **Head:** The newly created branch

**Phase 5: Success**

The status message shows: 
```
✅ PR Created Successfully! View PR #42
```

The link is clickable and opens the PR in your browser.

---

## Understanding the Output Format

The synced JSON follows this structure:

```json
{
  "Primitives": {
    "Light": {
      "Blue": {
        "500": "#3B82F6"
      }
    },
    "Dark": {
      "Blue": {
        "500": "#60A5FA"
      }
    }
  },
  "Semantic Colors": {
    "Light": {
      "Button": {
        "Bg": {
          "Primary": "{Blue/500}"
        }
      }
    }
  }
}
```

**Structure breakdown:**
- **Top level:** Collection names
- **Second level:** Mode names (e.g., "Light", "Dark")
- **Nested levels:** Variable path split by `/` separators
- **Values:** Resolved colors, numbers, or alias references

---

## Token Merging Strategy

If the target file already exists, Orchestra Sync uses an **intelligent merge**:
- New collections and variables are added
- Existing values are updated
- **Collections not managed by your sync groups are preserved**

This means you can manually add tokens or have multiple Figma files syncing to the same JSON without conflicts.

---

