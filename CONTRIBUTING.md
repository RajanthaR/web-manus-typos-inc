# Contributing to Typos_Inc

Thank you for your interest in contributing to Typos_Inc! This guide will help you get started.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/web-manus-typos-inc.git
   cd web-manus-typos-inc
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Development Workflow

### Code Style

- Use TypeScript for all new code
- Follow the existing code style (enforced by Prettier)
- Use meaningful variable and function names
- Add comments for complex logic

### Component Guidelines

- Place new components in `client/src/components/`
- Use the existing UI components from `@/components/ui/`
- Follow the brutalist design aesthetic
- Ensure components are responsive

### Testing

- Test your changes thoroughly
- Check TypeScript compilation: `pnpm check`
- Test in both development and production modes

## 🐛 Bug Reports

When reporting bugs, please include:

1. A clear description of the issue
2. Steps to reproduce
3. Expected vs actual behavior
4. Screenshots if applicable
5. Browser and OS information

## ✨ Feature Requests

Feature requests are welcome! Please:

1. Check if the feature already exists or is planned
2. Provide a clear use case
3. Consider if it fits the project's vision

## 📤 Submitting Changes

1. Ensure your code follows the style guidelines
2. Run `pnpm format` to format your code
3. Run `pnpm check` to ensure TypeScript compilation
4. Commit your changes with a clear message
5. Push to your fork
6. Open a pull request

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested in development
- [ ] Tested in production
- [ ] TypeScript compilation passes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
```

## 🎨 Design Contributions

When contributing to the design:

- Maintain the brutalist "Analog Bureaucracy" aesthetic
- Use monospace fonts consistently
- Keep high contrast and low saturation colors
- Ensure tactile feedback on interactions

## 📝 Documentation

- Update README.md for significant changes
- Add comments to complex code
- Document new components or utilities

## 🤝 Community

Be respectful and constructive in all interactions. We're here to create something unique together!

## 📄 License

By contributing, you agree that your contributions will be licensed under the same terms as the project.
