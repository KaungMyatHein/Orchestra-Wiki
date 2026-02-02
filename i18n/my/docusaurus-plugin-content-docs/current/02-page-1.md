---
sidebar_position: 2
---

# 🎨 ဒီဇိုင်နာများအတွက် လမ်းညွှန်

To make the Orchestra play perfectly, your Figma Variables must be structured logically.

## The Power of Columns
The automation script uses **Position-Based Mapping**. This means the script aligns tokens based on their column index, regardless of their name.

## Naming for Hierarchy
Use slashes `/` to create folders. This translates to dots in JavaScript or hyphens in CSS.
* `Button / Primary / Hover` → `--button-primary-hover`

## How to Sync
1.  Open the **Orchestra Syncs** plugin in Figma.
2.  Select your Repository and Branch.
3.  Click **Push to GitHub**.
4.  Check the "Actions" tab in GitHub to see your code being generated in real-time.