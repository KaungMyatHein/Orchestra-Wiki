---
sidebar_position: 10
---

# Possible Errors You Will Face

When working with Orchestra Sync, you may encounter various errors. This guide helps you diagnose and resolve the most common ones.

---

## Authentication Errors

### "Not authenticated. Please go to Settings to connect GitHub."

**Cause:** No Personal Access Token has been saved in the plugin settings.

**Solution:**
1. Navigate to the **Settings** tab
2. Enter a valid GitHub Personal Access Token
3. Click **Save**
4. Return to the **Sync Tokens** tab and try again

---

### "Token missing permissions."

**Cause:** Your GitHub Personal Access Token doesn't have the required scopes.

**Solution:**

**For Classic Tokens:**
- Ensure the `repo` scope is enabled

**For Fine-grained Tokens:**
- Enable **Contents** (Read and Write)
- Enable **Pull requests** (Read and Write)

**Steps to fix:**
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Edit or create a new token with the required permissions
3. Copy the new token
4. Update it in the plugin's Settings tab

---

## Repository Errors

### "Repository 'owner/repo' not found."

**Possible causes:**
- Typo in the Owner or Repository name
- Repository is private and your token doesn't have access
- Repository doesn't exist

**Solution:**
1. Verify the repository exists on GitHub
2. Double-check spelling of both owner and repo names (case-sensitive)
3. For private repos, ensure your token has `repo` scope
4. Test by visiting `https://github.com/owner/repo` in your browser

---

### "Branch 'branch-name' not found."

**Cause:** The specified branch doesn't exist in the repository.

**Solution:**
1. Verify the branch exists in your repository
2. Common branch names: `main`, `master`, `develop`, `design-tokens`
3. Create the branch in GitHub if it doesn't exist
4. Update the branch name in Settings to match an existing branch

---

## Variable Collection Errors

### "No collections found."

**Cause:** Your Figma file doesn't contain any variable collections.

**Solution:**
1. Create variable collections in Figma first
2. Go to Figma → Local variables (or press **Ctrl/Cmd + /**) 
3. Create collections with variables of type COLOR, FLOAT, or STRING
4. Refresh the plugin

---

### "No compatible collections for this type."

**Cause:** None of your collections contain variables of the selected type.

**Example:** You selected "Color" but all your variables are FLOAT (spacing).

**Solution:**
- Choose a different token type that matches your variables
- Or create variables of the required type in Figma

---

## Sync Errors

### "Failed to create Pull Request."

**Possible causes:**
- Network connectivity issues
- GitHub API rate limiting
- Invalid file path
- Insufficient permissions

**Solution:**
1. Check your internet connection
2. Verify the file path in Settings (e.g., `tokens/design-tokens.json`)
3. Ensure your token has PR creation permissions
4. Wait a few minutes if rate-limited, then try again

---

### "Diff could not be generated."

**Cause:** The current file in GitHub has an invalid JSON format or encoding issues.

**Solution:**
1. Manually check the file in GitHub
2. Validate the JSON format using a JSON validator
3. Fix any syntax errors
4. Try syncing again

---

## File Path Errors

### "Invalid file path."

**Cause:** The file path contains invalid characters or format.

**Solution:**
- Use forward slashes: `tokens/design-tokens.json` ✓
- Don't use backslashes: `tokens\design-tokens.json` ✗
- Don't start with `/`: `/tokens/design-tokens.json` ✗
- File extension must be `.json`

---

## Network Errors

### "Network request failed."

**Cause:** Connection to GitHub API was interrupted.

**Solution:**
1. Check your internet connection
2. Verify GitHub is accessible (check status.github.com)
3. Check if your firewall/proxy is blocking requests
4. Try again after a few moments

---

### "Request timeout."

**Cause:** The request to GitHub took too long.

**Solution:**
- Large repositories may take longer
- Check your network speed
- Try again with a better connection
- Consider reducing the number of variables being synced

---

## Data Format Errors

### "Variable name contains invalid characters."

**Cause:** Variable names in Figma contain characters that can't be converted to the JSON path.

**Solution:**
1. Rename variables in Figma to use:
   - Letters, numbers, underscores, hyphens
   - Forward slashes `/` for grouping
2. Avoid special characters: `@`, `#`, `$`, `%`, `*`, etc.

---

### "Circular reference detected."

**Cause:** A variable references another variable which references back to the original.

**Example:**
```
Color A = {Color B}
Color B = {Color A}
```

**Solution:**
1. Identify the circular reference in Figma
2. Break the chain by setting one variable to a concrete value
3. Rebuild the reference hierarchy correctly

---

## Plugin UI Errors

### Plugin screen is blank or frozen

**Cause:** Plugin state corruption or Figma rendering issue.

**Solution:**
1. Close and reopen the plugin
2. If that doesn't work, close and reopen Figma
3. Clear browser cache if using Figma in browser
4. Reinstall the plugin if issue persists

---

### "Settings not saved."

**Cause:** Plugin storage quota exceeded or write permissions issue.

**Solution:**
1. Clear old/unused data from plugin storage
2. Close other Figma plugins
3. Restart Figma
4. Try saving settings again

---

## Best Practices to Avoid Errors

### 1. Test with a Dummy Repository First
Before syncing to your production repository, test with a throwaway repo to familiarize yourself with the process.

### 2. Use Descriptive Variable Names
- Keep names clear and consistent
- Use the `/` separator for grouping (e.g., `Colors/Primary/Blue500`)
- Avoid special characters

### 3. Verify Permissions Early
Test your GitHub token immediately after creation to ensure it has the correct permissions.

### 4. Start Small
- Begin with a small collection
- Verify the output
- Gradually add more collections

### 5. Keep Token Secure
- Never share your Personal Access Token
- Store it in a password manager
- Regenerate if compromised

---

## Still Having Issues?

If you encounter an error not listed here:

1. **Check the console:** Right-click → Inspect → Console tab for detailed error messages
2. **Review recent changes:** What changed since it last worked?
3. **Simplify setup:** Test with minimal configuration
4. **Contact support:** Provide error messages, screenshots, and steps to reproduce

---

## Error Message Reference

| Error Message | Quick Fix |
|---------------|-----------|
| Not authenticated | Add GitHub token in Settings |
| Repository not found | Check owner/repo spelling |
| Branch not found | Verify branch exists or create it |
| Token missing permissions | Update token scopes |
| No collections found | Create variables in Figma |
| Invalid file path | Use format: `folder/file.json` |
| Network request failed | Check internet connection |
| Circular reference detected | Fix variable references in Figma |

---

Remember: Most errors are quick to fix once you understand the cause. Take a moment to read the error message carefully—it often contains the solution!
