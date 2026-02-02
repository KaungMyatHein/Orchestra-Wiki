---
slug: /
sidebar_position: 1
---

# 🎻 Introduction

## What is Orchestra Syncs?

**Orchestra Syncs** is an automated design system pipeline that bridges the gap between Figma Variables and your codebases. It treats your design tokens as **Live Data**, eliminating the need for manual handoff.

Instead of designers sending screenshots or hex codes, the "Orchestra" coordinates the delivery of tokens directly to Web, iOS, and Android repositories.

### The Lifecycle of a Token

1.  **Design:** Designers update variables in Figma.
2.  **Sync:** The Orchestra Plugin pushes these changes to GitHub as JSON.
3.  **Build:** A GitHub Action triggers a specialized `build.js` script.
4.  **Deploy:** The script transforms JSON into CSS, Swift, or Kotlin and commits it back to the repo.

### Key Benefits
* **Single Source of Truth:** Manage everything in Figma; let the code follow.
* **Multi-Platform Native:** High-performance code for Web, iOS, and Android.
* **Intelligent Automation:** Built-in protection against race conditions and name collisions.

### How It Works

Designers update variables in Figma. The Orchestra Plugin pushes these changes to GitHub as JSON. A GitHub Action triggers a specialized `build.js` script. The script transforms JSON into CSS, Swift, or Kotlin and commits it back to the repo.

### Prerquities

We need the following things to set up the Orchestra Syncs.
* [Figma Account](https://www.figma.com/)
* Fine Structured Variables In Figma
* [GitHub Personal Access Token](https://github.com/settings/tokens)
   Github Personal Access Tokens need to give read/write permissions for content and pull request.


### Who should use this plugin?

Currently, this plugin is designed for **Small Teams** who want to use design tokens in their projects. It is intended to add more automations for the **Production** level projects in the near future.