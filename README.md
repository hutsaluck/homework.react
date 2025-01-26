```markdown
# React Components Tree with Theme Switcher

## Description

This project involves creating a component tree in React, with deep nesting to showcase a well-structured component hierarchy. Additionally, the project includes a **context-based theme switcher** to toggle between light and dark themes. The deeper the component tree, the better the implementation demonstrates your understanding of React architecture.

---

## Requirements

1. **Component Tree**:  
   - Create a component tree with multiple levels of nesting.
   - Demonstrate proper structuring and reusability of components.

2. **Context**:  
   - Implement React Context to manage the application’s theme state.
   - Provide access to the theme state across the component tree.

3. **Theme Switcher**:  
   - Add a button to toggle between light and dark themes.
   - Apply themes dynamically to the UI (e.g., background and text colors).

---

## Project Structure

### Suggested Component Tree
```plaintext
App
├── Header
│   ├── Logo
│   └── Navigation
├── Main
│   ├── Content
│   │   ├── Article
│   │   └── Sidebar
│   │       ├── Widget1
│   │       └── Widget2
└── Footer
    ├── FooterLinks
    └── SocialMedia
```

### Theme Context
- **ThemeProvider**: Wraps the entire app and provides theme context.
- **useTheme**: Custom hook for accessing and toggling the theme.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hutsaluck/homework.react/tree/hw/hw7/task1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-theme-switcher
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Features

1. **Dynamic Theme Switching**:
    - Toggle between light and dark themes with a single button click.
    - Themes are applied across all components using React Context.

2. **Well-Structured Component Tree**:
    - Clear hierarchy with reusable components.

3. **Custom Styling**:
    - Add light and dark theme styles for colors, backgrounds, and fonts.

---

## Usage

1. Start the app:
   ```bash
   npm start
   ```
2. Explore the component tree and observe the nested structure.
3. Use the **theme toggle button** to switch themes.

## Technologies Used

- **React**: Component-based UI library.
- **CSS Modules**: For applying light and dark theme styles.
- **Context API**: For state management.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
```

Let me know if you need further assistance with the implementation or examples!