---
sidebar_position: 6
---


# Things to Take Care Of (Best Practices)

With great power comes great responsibility. Orchestra Sync allows you to change production code from a design tool. Here is how to do it safely.

## 1. Naming is Everything
The plugin uses your Variable names to generate code.
*   **Use Slashes (`/`) wisely:** The plugin treats slashes as hierarchy. `Button / Bg / Primary` becomes a nested structure in the JSON. Be consistent.
*   **Avoid Special Characters:** Stick to letters, numbers, and slashes. Emojis or complex symbols in variable names might break the code generation or create invalid JSON.

## 2. Respect the Branch
Directly pushing to the `main` branch is like running on stage during a performance. It's risky.
*   **Best Practice:** Create a dedicated branch for design updates, such as `feat/design-tokens` or `update-tokens`.
*   **Why?** This allows developers to "Pull Request" your changes, review them, and ensure they don't accidentally break the app before merging them into the main product.

## 3. Token Security
Your GitHub Token is like a password.
*   If you are recording your screen or sharing your desktop, **hide the Settings tab**.
*   Although the token is masked (•••••), you should never share specifically generated tokens with others. Let every team member generate their own.

## 4. Variable Modes
If you are using Variable Modes (e.g., "Light" and "Dark"), ensure they are named clearly. The plugin will export *all* modes found in a collection. If you have a "Draft" mode you don't want in production, you might want to clean it up before syncing.
