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
neon commit feat onboarding flow
neon prompt build a calm productivity app
```

## example

```bash
$ neon brainstorm portfolio tools

────────────────────────────────────────
brainstorm
────────────────────────────────────────
topic: portfolio tools

1. signalboard
   A calm dashboard for tracking portfolio tools with visible progress and low clutter.

2. promptforge
   A tiny utility that turns rough portfolio tools ideas into clean AI prompts and action steps.
```

## commands

- `hello` — friendly terminal greeting
- `init` — create a starter project folder
- `brainstorm` — generate starter ideas around a topic
- `commit` — suggest commit message variants
- `prompt` — output a clean AI build prompt

## roadmap

- [x] create first commands
- [x] scaffold starter folder
- [x] add AI-flavored helper commands
- [ ] add interactive prompt selection
- [ ] export prompts to files
- [ ] support richer project templates

## stack

- Node.js
- JavaScript (ESM)

## status

Early version, built in public.
