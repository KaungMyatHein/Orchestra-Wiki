---
sidebar_position: 3
---


# How to Set Up Your Settings

Setting up Orchestra Sync is a one-time ritual to bind your design file to your code repository. Think of it as tuning your instrument before the concert.

## Step 1: Authentication (The Key)
The first door requires a key. You need a **GitHub Personal Access Token (PAT)**.
1.  Open the **Settings** tab in the plugin.
2.  You will see a field for the "Personal Access Token".
3.  This token is your digital ID card. It tells GitHub, "I am allowed to make changes here."
4.  Once entered, the status will turn to **🟢 Connected**.

## Step 2: The Destination
Now, tell the plugin where the music should go.
*   **Repo Owner:** The organization or username that owns the code (e.g., `facebook` or `your-company`).
*   **Repo Name:** The specific project folder (e.g., `react` or `design-system`).
*   **Branch:** The specific timeline in the multiverse of code where you want your changes to land. Usually, this is `main` for simple projects, or a dedicated `design-tokens` branch for safer workflows.

## Step 3: The File Path
Where exactly should the file live? You define the "File Path".
*   Example: `tokens/design-tokens.json`
*   This tells the plugin: "Go into the `tokens` folder and write everything into a file named `design-tokens.json`."

## Step 4: Grouping Your Instruments (Sync Groups)
Finally, in the **Sync Tokens** tab, you define *what* to send.
1.  Click **+ Add Group**.
2.  Choose a type: **Color**, **Spacing**, or **Typography**.
3.  Select which Figma Variable Collections belong to this group. For example, you might map your "Primitives" and "Tokens" collections to the "Color" group.

Once these steps are done, your orchestra is seated and ready to play.
