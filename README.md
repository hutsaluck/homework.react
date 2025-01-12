# Simpsons Characters App

This project demonstrates the implementation of a simple React application to render a list of Simpsons characters. The app showcases component-based design and basic styling. Below are the details of the task and its implementation.

## Task Description

### Requirements
1. Extract the `simpsons` array from `data.tsx`.
2. Create a root component named `App`.
3. Build the following components:

#### `CharacterComponent`
- Displays all information about a single character from the `simpsons` array.
- The character's description should be passed via `children`.
- Styling should be minimal but functional (at least one working style must be applied).

#### `FamilyComponent`
- Iterates over the `simpsons` array and renders a list of `CharacterComponent`.

## Implementation

### Components Structure

#### 1. `App`
The root component of the application. It imports the `FamilyComponent` and renders it.

#### 2. `FamilyComponent`
- Accepts the `simpsons` array as props or imports it directly.
- Iterates over the array using `.map()`.
- For each character, renders a `CharacterComponent`.

#### 3. `CharacterComponent`
- Displays the details of a single character.
- Accepts props like `name`, `surname`, `age`, and `info`.
- The `info` field is passed as `children`.

### Styling
- A basic CSS file is included to style the components minimally.
- Example: Each character card has a border, padding, and some margin.

### File Structure
```
project-folder/
├── src/
│   ├── components/
│   │   ├── family-component/
│   │   │   ├── FamilyComponent.js
│   │   ├── character-component/
│   │   ├── CharacterComponent.js
│   ├── data/
│   │   ├── data.ts
├── ├── App.tsx
│   ├── main.tsx
├── package.json
├── README.md
```

### Example Code

#### `data.ts`
```javascript
export const simpsons = [
  {
    id: 1,
    name: "Homer",
    surname: "Simpson",
    age: 39,
    info: "Homer is the father of the Simpson family. He works at a nuclear power plant.",
  },
  {
    id: 2,
    name: "Marge",
    surname: "Simpson",
    age: 36,
    info: "Marge is the mother of the Simpson family and is known for her blue hair.",
  },
  // Add more characters as needed
];
```

### Running the Application

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app in your browser at `http://localhost:3000`.

## Future Improvements
- Add routing for detailed character view.
- Improve styling and responsiveness.
- Fetch character data dynamically from an API.

## License
This project is licensed under the MIT License.
