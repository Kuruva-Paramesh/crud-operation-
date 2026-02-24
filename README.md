CRUD Operations Theory 

CRUD stands for Create, Read, Update, Delete — the four basic operations for managing data. In a React-only project, CRUD is handled entirely on the frontend using state management (useState or useReducer) and optionally localStorage for persistence.

1. Create

Adds new data to the application state.

Example: Adding a new user to a list.

Implemented by updating the state array with a new item.

2. Read

Retrieves and displays data from the application state.

Example: Showing a list of users in a table or card view.

Implemented by mapping through the state array and rendering components.

3. Update

Modifies existing data in the state.

Example: Editing a user's name or details.

Implemented by updating the specific item in the state array using map().

4. Delete

Removes data from the state.

Example: Deleting a user from the list.

Implemented by filtering out the specific item from the state array.

Frontend Persistence (Optional)

Use localStorage to save state across page reloads.

Example: Saving and retrieving the list of users in localStorage.
