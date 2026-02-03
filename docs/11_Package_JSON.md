---
sidebar_position: 11
---

# The Control Center

## What is this?
The `package.json` file is the heart of any Node.js project. It lists the tools we need and the commands we run. For Orchestra Sync to work, we need to add a few lines here.

## 1. Scripts
We need a command to tell the computer: "Hey, run that `build.js` translation engine for me."

Add this inside your `"scripts"` section:

```json
"scripts": {
  "tokens": "node build.js"
}
```

Now, when the GitHub Action runs `npm run tokens`, it knows exactly what to do.

## 2. Dependencies
Our build script is lightweight and only uses built-in tools (`fs`, `path`). However, if you expanded your script to use other libraries (like `style-dictionary`), you would list them here.

For the standard `build.js` setup, you typically **do not** need to add extra dependencies unless you customized the script.

## Example File
Here is what a minimal `package.json` might look like:

```json
{
  "name": "my-design-system",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "tokens": "node build.js"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

:::tip Note on "type": "module"
If your `build.js` uses `import` / `export` syntax (modern Javascript), make sure to add `"type": "module"` to your package.json, or name your script `build.mjs`.
:::
