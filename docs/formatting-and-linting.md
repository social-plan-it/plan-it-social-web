# Formatting and linting

## Motivation

Prettier and ESLint are introduced in [this PR](https://github.com/social-plan-it/plan-it-social-web/pull/10). You can find the motivation for the setup in the PR description and review comments.

## Commands

- `npm run lint` - reports all current formatting and linting violations.

## VS Code setup

Use the following VS Code workspace settings to set up ESLint and Prettier on save:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.lintTask.enable": true
}
```
