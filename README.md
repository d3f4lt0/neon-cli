# neon-cli

A colorful developer CLI with lightweight AI workflow helpers.

## why

`neon-cli` is made for developers who like clean terminal tools and fast idea-to-action workflows.
It mixes small CLI utilities with practical AI-friendly helpers.

## features

- colorful terminal output
- `init` command to scaffold a tiny starter project
- `brainstorm` command for quick project ideas
- `commit` command for clean commit message suggestions
- `prompt` command for AI-ready build prompts
- `studio` interactive mode for guided usage
- optional `--save` output export
- simple, hackable structure

## install

```bash
git clone https://github.com/d3f4lt0/neon-cli.git
cd neon-cli
npm install
npm link
```

## usage

```bash
neon hello d3f4lt
neon init my-app
neon brainstorm portfolio tools
neon brainstorm portfolio tools --save ideas.txt
neon commit feat onboarding flow
neon prompt build a calm productivity app --save prompt.txt
neon studio
```

## interactive mode

```bash
neon studio
```

`studio` lets you pick a mode and generate output without remembering every argument.

## commands

- `hello` — friendly terminal greeting
- `init` — create a starter project folder
- `brainstorm` — generate starter ideas around a topic
- `commit` — suggest commit message variants
- `prompt` — output a clean AI build prompt
- `studio` — interactive launcher for the main workflows

## roadmap

- [x] create first commands
- [x] scaffold starter folder
- [x] add AI-flavored helper commands
- [x] add interactive studio mode
- [x] support saving output to files
- [ ] add richer project templates
- [ ] add prompt presets for different workflows
- [ ] support better terminal styling and selection

## stack

- Node.js
- JavaScript (ESM)

## status

Early version, built in public.
