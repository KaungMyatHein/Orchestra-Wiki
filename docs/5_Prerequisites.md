---
sidebar_position: 5
---


# Prerequisites

Before you can begin conducting your design system with Orchestra Sync, you must ensure the stage is set. There are a few non-negotiable requirements.

## 1. A GitHub Account & Repository
You cannot send mail without an address.
*   You must have an active **GitHub account**.
*   You must have access to a **Repository** (a project folder) where you have permission to write code.

## 2. The Golden Key: A Personal Access Token (PAT)
You need a specific key from GitHub to allow the plugin to enter.
*   **Classic Token:** Just check the `repo` scope. This gives full access to private repositories.
*   **Fine-Grained Token:** If you prefer stricter security, create a specific token for your repository and grant it **Read and Write** access to **Contents** and **Pull Requests**.

## 3. Figma Variables
Orchestra Sync speaks the language of **Variables**, not Styles.
*   Your Figma file must be using the modern **Variables** feature for Colors, Numbers (Spacing), or Strings.
*   Old-school "Styles" (Paint Styles, Grid Styles) are the ancestors of this system and are *not* supported. You must migrate them to Variables first.

## 4. Internet Connection
It sounds obvious, but the plugin acts as a bridge. It requires an active internet connection to talk to both Figma's servers and GitHub's API.
