# Typos_Inc

A web application that humanizes AI-generated text by strategically adding realistic human errors and imperfections. Built with React, TypeScript, and Express.

## 🎯 Purpose

In an era of perfect AI-generated content, Typos_Inc adds authentic human imperfections to make text appear more naturally written. The application simulates common typing errors, grammatical mistakes, and stylistic inconsistencies that humans typically make.

## ✨ Features

- **Adjustable Error Density**: Control the intensity of humanization from subtle to chaotic
- **Realistic Error Types**: 
  - Typographical errors (typos)
  - Grammatical inconsistencies
  - Common spelling mistakes
  - Punctuation variations
- **Bureaucratic Aesthetic**: Brutalist design inspired by analog paperwork and redacted documents
- **Instant Processing**: Fast text transformation with visual feedback
- **Copy to Clipboard**: Easy export of processed text

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Wouter** - Lightweight routing
- **Framer Motion** - Animations
- **React Hook Form** - Form handling

### Backend
- **Express.js** - Web server framework
- **Node.js** - JavaScript runtime

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **pnpm** - Package manager

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/RajanthaR/web-manus-typos-inc.git
cd web-manus-typos-inc
```

2. Install dependencies:
```bash
pnpm install
```

## 🚀 Usage

### Development Mode

Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Production Build

1. Build the application:
```bash
pnpm build
```

2. Start the production server:
```bash
pnpm start
```

### Other Scripts

- `pnpm preview` - Preview production build locally
- `pnpm check` - Type checking without emitting files
- `pnpm format` - Format code with Prettier

## 🎨 Design Philosophy

Typos_Inc embraces a brutalist "Analog Bureaucracy" aesthetic:

- **Raw Authenticity**: Interface feels like a tool used in a backroom office
- **Monospace Typography**: All text uses monospace fonts (Courier Prime, JetBrains Mono)
- **High Contrast**: Stark blacks, whites, and paper-like off-whites
- **Tactile Interactions**: Visual feedback mimics physical buttons and switches
- **Paper Texture**: Subtle grain and noise effects

## 🔧 Configuration

The application uses environment variables for configuration:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint URL
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID

## 📁 Project Structure

```
web-manus-typos-inc/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   └── src/               # Source code
│       ├── components/    # UI components
│       ├── contexts/      # React contexts
│       ├── hooks/         # Custom hooks
│       ├── lib/           # Utility functions
│       └── pages/         # Page components
├── server/                # Backend Express server
│   └── index.ts          # Server entry point
├── shared/                # Shared code between client and server
├── attached_assets/       # Static assets
└── patches/              # Package patches
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is proprietary software. All rights are reserved by the copyright owner.

## 📧 Contact

- **Author**: Rajantha R Ambegala
- **Email**: rajantha.rc@gmail.com
- **GitHub**: https://github.com/RajanthaR/

## © Copyright

2025 Rajantha R Ambegala. All rights reserved.
