# Contributing to Swiss Neutral

Thank you for your interest in contributing. This project values engineering rigor, aesthetic discipline, and a collaborative, respectful open source culture.

## Core Contributor Standards

### 1. Code Ownership & Responsibility
- **Know Your Code**: If you use AI assistants (copilots, chatbots, or code generators) to draft changes, you must review, comprehend, and take full personal responsibility for every single line before submitting.
- **No Unvetted Dumps**: Never open a pull request containing raw, unverified output. Explain why the code exists and how it works.
- **Preserve System Boundaries**: Respect the design system tokens, typography rules, and minimal styling conventions. Do not introduce speculative abstractions or unnecessary third-party packages.

### 2. Authentic, Concise Communication
- **State Intent Clearly**: When writing issue descriptions and pull request summaries, write in your own words. Clearly explain what broke, what changed, and how to verify it.
- **Respect Reviewer Attention**: Long, automated boilerplate summaries place an unnecessary cognitive load on maintainers. Keep communication brief, factual, and direct.

### 3. Verify Before Requesting Review
- **Static Analysis**: Always run `npm run lint` (`tsc --noEmit`) to verify zero type mismatches or undefined symbols.
- **Build Integrity**: Ensure `npm run build` succeeds cleanly without warnings.
- **Visual Integrity**: Inspect the layout across mobile, tablet, and desktop viewports to ensure hairline rails and margins align cleanly.

## Development Workflow

1. Fork the repository and create your feature branch:
   ```bash
   git checkout -b feature/your-improvement
   ```
2. Implement your changes following existing codebase conventions.
3. Validate typing and build:
   ```bash
   npm run lint
   npm run build
   ```
4. Commit your changes with clear, descriptive commit messages:
   ```bash
   git commit -m "fix(mockup): prevent canvas overflow on narrow viewports"
   ```
5. Push to your branch and open a Pull Request.

## Pull Request Checklist

When submitting a PR, ensure:
- [ ] You have personally read and tested all changed lines.
- [ ] All automated type checks pass (`npm run lint`).
- [ ] Design system tokens and spacing guidelines are strictly adhered to.
- [ ] The PR description concisely outlines the motivation, changes, and verification steps.
