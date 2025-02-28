# GitHub User Theme Switcher - A React Application with Light/Dark Theme Support

This React application provides a simple and intuitive interface for viewing GitHub user information with dynamic theme switching capabilities. Built with TypeScript and Vite, it features a responsive design that allows users to toggle between light and dark themes while searching and displaying GitHub user profiles.

The application demonstrates modern React development practices including context-based theme management, component composition, and responsive styling using Styled Components. It leverages React Router for navigation and implements a clean, maintainable architecture that separates concerns between components, contexts, and themes.

## Repository Structure
```
.
├── src/                          # Source code directory
│   ├── components/              # Reusable UI components
│   │   └── UserCard/           # User profile card component
│   ├── contexts/               # React context definitions
│   │   └── ThemeContext.tsx    # Theme management context
│   ├── pages/                  # Application pages
│   │   └── Home/              # Main page component
│   ├── routes/                 # Routing configuration
│   │   └── AppRoutes.tsx      # Application route definitions
│   ├── themes/                 # Theme definitions
│   │   ├── dark.ts            # Dark theme configuration
│   │   └── light.ts           # Light theme configuration
│   ├── App.tsx                # Root application component
│   └── main.tsx               # Application entry point
├── vite.config.ts             # Vite build configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd <project-directory>

# Install dependencies
npm install
```

### Quick Start
1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. Enter a GitHub username in the input field to view their profile

4. Click the theme toggle button to switch between light and dark themes

### More Detailed Examples

#### Theme Switching
```typescript
// Using the theme context in a component
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
}
```

#### User Search
```typescript
// Example of user search implementation
function UserSearch() {
  const [userName, setUserName] = useState('');
  
  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite o nome de um usuário" 
        onChange={(e) => setUserName(e.target.value)}
      />
      <User userName={userName} />
    </div>
  );
}
```

### Troubleshooting

#### Common Issues

1. **White Screen on Application Load**
   - Problem: Application shows blank screen
   - Solution: Check if the root element with id 'root' exists in index.html
   - Debug: Open browser console for error messages

2. **Theme Not Updating**
   - Problem: Theme toggle doesn't change the appearance
   - Solution: Verify ThemeContext is properly wrapped around components
   - Debug: Add console.log in theme toggle function to verify it's being called

#### Development Mode
Enable development mode for detailed error messages:
```bash
# Start in development mode with debugging
npm run dev -- --debug
```

## Data Flow
The application follows a unidirectional data flow pattern for theme management and user data display.

```ascii
+----------------+     +-----------------+     +------------------+
|   ThemeContext |     |    UserInput    |     |    UserCard      |
|  (Theme State) | --> | (Search Field)  | --> | (Display Data)   |
+----------------+     +-----------------+     +------------------+
        ^                                             |
        |                                             |
        +---------------------------------------------+
                    Theme Toggle Event
```

Key Component Interactions:
1. ThemeContext provides theme state to all child components
2. Home component manages user search state and theme toggling
3. UserCard component receives username and displays user information
4. Theme toggle button triggers theme context update
5. Styled components automatically apply theme-specific styles
6. Router handles navigation and component mounting
7. Theme changes trigger re-renders with new styles