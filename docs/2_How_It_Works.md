---
sidebar_position: 2
---

# How It Works

So, how does the magic happen? Let's peek behind the curtain. Orchestra Sync functions as a translator and a courier between Figma and GitHub.

The process flows in a simple, linear storytelling arc:

## 1. The Connection
First, the plugin establishes a secure line of communication. It uses the GitHub API to "shake hands" with your code repository. It asks for permission to read and write files, ensuring it has a place to deliver its packages.

## 2. The Collection
Once connected, the plugin looks at your Figma file. It doesn't just see shapes and pixels; it sees **Variables**. It scans your "Variable Collections"—the organized sets of Primitives (raw values) and Tokens (semantic values).

You, the conductor, tell the plugin which collections matter. You group them into "Sync Groups" like *Colors*, *Spacing*, or *Typography*. This tells the plugin: "Take these specific design decisions and package them up."

## 3. The Translation
This is the core intelligence of Orchestra Sync. Before leaving Figma, the plugin translates your variable names into the dialects spoken by developers:
*   **For the Web:** It converts `Button/Primary` into CSS Variables like `var(--button-primary)`.
*   **For Android:** It translates them into dot-notation like `Theme.colors.button_primary`.
*   **For iOS:** It structures them as Swift-friendly `Color.Button.Primary`.

It writes these translations directly into the "Code Syntax" field of your Figma variables, so even developers inspecting the file manually see the correct code name.

## 4. The Delivery
Finally, the plugin packages all these values—names, values, hex codes, pixel values—into a clean, structured **JSON** file. 

It then creates a "Commit"—a digital package sealing these changes—and pushes it directly to your specified branch on GitHub. It's like sending a package via express mail: "Here are the new colors for the Summer update."

The developers receive this file, their build system reads it, and your app updates automatically.
