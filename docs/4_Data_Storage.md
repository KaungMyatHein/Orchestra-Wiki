---
sidebar_position: 4
---


# How the Data are Stored

In the world of software, trust is built on knowing where your data lives. Orchestra Sync treats your data with two distinct levels of residence.

## 1. The Local Vault (Client Storage)
Your secrets stay with you. 
*   **Your GitHub Token (PAT):** This sensitive key is stored in your local `figma.clientStorage`. This means it lives in your specific browser or desktop app instance. It is **never** saved to the Figma file itself. Other designers opening the file cannot see or use your token. They must provide their own.
*   **Personal Preferences:** Global default settings for the Repo Owner and Name are also cached here for convenience.

## 2. The Shared Manuscript (Plugin Data)
The configuration of the *connection* itself lives within the Figma file.
*   **Sync Settings:** The details of which Collections map to which Groups, the target Branch, and the generic Repo names are stored in `figma.root.getPluginData`.
*   **Shared Contex:** This means if you set up the project and hand the file to a teammate, they will see the same configuration (Repo, Path, Groups). They only need to provide their own Auth Token to start syncing.

## 3. The Final Archive (GitHub)
Ultimately, the *output* data—the JSON design tokens—is stored in your GitHub Repository.
*   It is a standard text file (JSON).
*   It becomes a permanent part of your codebase history.
*   Every time you sync, a new "Commit" is created, leaving a permanent paper trail of exactly what changed, when, and by whom.
