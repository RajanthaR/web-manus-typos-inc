# API Documentation

This document describes the API endpoints and internal APIs used in Typos_Inc.

## 🌐 Public Endpoints

Typos_Inc primarily serves static files in production. The following endpoints are available:

### GET /*
Serves the React application for client-side routing.

**Response:**
- HTML file with the React app
- Status: 200 OK

### Static Assets
All static files are served from the `dist/public` directory in production.

## 📝 Internal APIs

### humanizeText()

The core text humanization function located in `client/src/lib/humanizer.ts`.

```typescript
function humanizeText(text: string, options: HumanizeOptions): string
```

**Parameters:**
- `text` (string): The input text to humanize
- `options` (HumanizeOptions): Configuration options
  - `intensity` (number): Error density from 0 to 1

**Returns:**
- `string`: The humanized text with added errors

**Error Types Applied:**
1. **Character Substitution**: Common keyboard adjacency errors
2. **Word Omission**: Random word drops
3. **Double Characters**: Repeated letters
4. **Capitalization Errors**: Random case changes
5. **Punctuation Variations**: Missing or extra punctuation
6. **Spacing Issues**: Double spaces or missing spaces

## 🏗️ Component Props

### Home Component

No external props required. Manages internal state for:
- `input` (string): Source text
- `output` (string): Processed text
- `intensity` (number[]): Error density array
- `isProcessing` (boolean): Loading state

### UI Components

#### Button
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}
```

#### Card
```typescript
interface CardProps {
  children: React.ReactNode
  className?: string
}
```

#### Slider
```typescript
interface SliderProps {
  value: number[]
  onValueChange: (value: number[]) => void
  max: number
  min?: number
  step?: number
  disabled?: boolean
}
```

#### Textarea
```typescript
interface TextareaProps {
  value?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  className?: string
}
```

## 🎨 Theme API

### ThemeContext
```typescript
interface ThemeContextValue {
  theme: 'light' | 'dark'
  setTheme?: (theme: 'light' | 'dark') => void
}
```

### ThemeProvider
```typescript
interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: 'light' | 'dark'
  switchable?: boolean
}
```

## 🔧 Configuration API

### Environment Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `NODE_ENV` | string | 'development' | Environment mode |
| `PORT` | number | 3000 | Server port |
| `VITE_ANALYTICS_ENDPOINT` | string | - | Analytics script URL |
| `VITE_ANALYTICS_WEBSITE_ID` | string | - | Analytics website ID |

### Vite Configuration

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, "client", "src"),
      '@shared': path.resolve(import.meta.dirname, "shared"),
      '@assets': path.resolve(import.meta.dirname, "attached_assets"),
    }
  },
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ]
  }
})
```

## 📊 Analytics API

If configured, the application uses Umami for analytics:

```html
<script
  defer
  src="%VITE_ANALYTICS_ENDPOINT%/umami"
  data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"
></script>
```

## 🔄 Error Handling

### Error Boundary

The application includes an ErrorBoundary component that catches React errors and displays a fallback UI.

### Toast Notifications

Using Sonner for toast notifications:

```typescript
toast.success(message: string, options?: ToastOptions)
toast.error(message: string, options?: ToastOptions)
toast.info(message: string, options?: ToastOptions)
```

## 🎯 Custom Hooks

### useTheme (if switchable)

```typescript
function useTheme(): ThemeContextValue
```

Returns the current theme and setter function if theme switching is enabled.

## 📦 Package Scripts API

```json
{
  "dev": "vite --host",           // Start development server
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "preview": "vite preview --host",
  "check": "tsc --noEmit",        // Type checking
  "format": "prettier --write ."  // Code formatting
}
```

## 🔒 Security Headers

In production, appropriate security headers are served:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 📐 TypeScript Types

Key type definitions are exported from various components:
- Component props interfaces
- Theme types
- Utility function types
- Configuration types
