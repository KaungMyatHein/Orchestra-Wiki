---
sidebar_position: 8
---


# Supported Features

Orchestra Sync is built to handle the core building blocks of a modern Design System. Here is what it supports out of the box.

## 1. Variable Types
It fluently speaks the three main dialects of UI design:
*   **🎨 Colors:** Extracts hex codes and RGBA values with transparency.
*   **📏 Spacing (Float/Numbers):** Extracts pixel values for margins, padding, and sizing.
*   **📝 Typography (Strings):** While less common as variables, it supports String variables which can be used for font-family names or content.

## 2. Multi-Platform Code Syntax
It doesn't just export raw data; it teaches Figma how to speak to different platforms. When you sync, it automatically populates the "Code Syntax" field in Figma for:
*   **Web (CSS):** Generates `var(--kebab-case-names)`.
*   **Android (XML/Kotlin):** Generates `Theme.colors.snake_case_names`.
*   **iOS (Swift):** Generates `Color.PascalCase.Names`.

## 3. Variable Reference Resolution (Aliasing)
It understands relationships.
*   If your `Button/Primary` variable points to another variable like `Blue/500`, Orchestra Sync preserves this relationship where possible or resolves it to the correct value `{Blue/500}` in the output JSON, allowing styling dictionaries to understand the hierarchy.

## 4. Multi-Mode Support
It fully embraces Figma's Variable Modes.
*   If you have a collection with "Light", "Dark", and "High Contrast" modes, the plugin will generate a structured JSON object containing values for *every single mode* organized under the variable name.
