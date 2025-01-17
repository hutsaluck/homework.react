# Routing Task

This project demonstrates a simple routing implementation with two pages: `UsersPage` and `PostsPage`. Both pages fetch data from the `dummyjson.com` API and display it in a basic format.

## Features
- **UsersPage**: Displays user information fetched from the `dummyjson.com/users` endpoint.
- **PostsPage**: Displays posts fetched from the `dummyjson.com/posts` endpoint.
- Each page renders only the first set of objects returned by the API (up to 30 objects).
- Simple routing to switch between `UsersPage` and `PostsPage`.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
project-root/
├── src/
│   ├── components/
│   │   ├── UsersComponent.tsx
│   │   ├── PostsComponent.tsx
│   ├── pages/
│   │   ├── UsersPage.tsx
│   │   ├── PostsPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│
├── public/
├── package.json
└── README.md
```

## API Details
### Users Endpoint
- URL: `https://dummyjson.com/users`
- Fetches a list of users.

### Posts Endpoint
- URL: `https://dummyjson.com/posts`
- Fetches a list of posts.

## Implementation Notes
- Each page uses a simple fetch request to retrieve data from the respective endpoint.
- Only the first set of results (up to 30 objects) from each API is displayed.
- No pagination or additional API calls for remaining data are implemented.

## Example Usage
### UsersPage
Displays a list of users with relevant details such as name, email, or other attributes from the API.

### PostsPage
Displays a list of posts with details such as title, body, or other attributes from the API.

## Technologies Used
- React
- React Router
- Fetch API
- DummyJSON API

## Future Improvements
- Add pagination to display more data beyond the initial 30 objects.
- Improve UI/UX with better styling and layout.
- Add error handling for API requests.

---

Feel free to modify and expand this project as needed!
