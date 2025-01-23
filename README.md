# Routing Application

This project demonstrates routing in a React application with pagination. It fetches data from the `dummyjson.com` API and displays users on the `UsersPage`. The page includes pagination buttons (`Next` and `Previous`) for navigating through the user list.

## Features

- **UsersPage**: Displays a list of users fetched from the API.
- **Pagination**: Buttons to navigate between pages of users.

## Getting Started

Follow the instructions below to set up and run the project.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
src
├── components
│   ├── Pagination.jsx       // Handles pagination logic and UI
│   └── UsersPage.jsx        // Displays users fetched from the API
├── api
│   └── usersApi.js          // Contains API calls to dummyjson.com
├── App.js                   // Main application component
├── index.js                 // Entry point of the application
└── styles
    └── styles.css           // CSS styles
```

## API Integration

The application uses the `dummyjson.com` API to fetch user data. Below is an example API endpoint used in the project:

- **Get Users**: `https://dummyjson.com/users`

### Example Response

```json
{
  "users": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "age": 30
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Doe",
      "age": 28
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 10
}
```

## Pagination Logic

- The pagination buttons (`Next` and `Previous`) use the `skip` and `limit` query parameters to fetch the next or previous set of users.
- The `UsersPage` component manages the state for the current page and handles API calls.

### Example Pagination Query

- Fetch users on page 1:

  ```
  https://dummyjson.com/users?skip=0&limit=10
  ```

- Fetch users on page 2:

  ```
  https://dummyjson.com/users?skip=10&limit=10
  ```

## Development Notes

- Ensure that you handle edge cases such as when there are no more pages to navigate.
- Add error handling for API calls.

## Future Enhancements

- Add loading spinners for better user experience during API calls.
- Implement detailed user information on clicking a user.

## License

This project is licensed under the MIT License.
