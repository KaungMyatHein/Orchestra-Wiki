---
sidebar_position: 8
---


# Limitations (What is Not Supported)

To use a tool effectively, you must know its boundaries. Here are the things Orchestra Sync does *not* currently handle.

## 1. Old-School Styles
*   **No Paint Styles:** It cannot see or export the old grid of color styles.
*   **No Text Styles:** It does not export complex typography compound styles (Font size + Line height + Weight). It only supports individual variables.

## 2. Assets and Images
*   This is a code-sync tool, not an asset manager. It will not export your icons, PNGs, or SVGs. Those should still be handled via your standard asset pipeline.

## 3. Two-Way Syncing (Import)
*   The road goes one way: **Figma ➔ GitHub**.
*   You cannot edit the JSON file in GitHub and expect it to update your Figma file. Figma is the Source of Truth. Any changes made manually to the JSON in the repo will be overwritten the next time you sync.

## 4. Complex Token Transformations
*   While it generates Code Syntax, it exports a raw, structured JSON file. It does not run "Style Dictionary" or other build transforms *inside* the plugin to generate `.css` or `.xml` files directly.
*   It provides the *source* JSON. Your engineering team usually needs a small build script (using a tool like Style Dictionary) to turn that JSON into the final files used by the app.

## 5. Boolean Variables
*   Currently, the plugin focuses on visual tokens (Color, Spacing). Boolean logic variables are generally not synced as they rarely map directly to design tokens in the same way.
