# Tuesday 02-06-2026
## Jagadish
**What I worked on:**
- I connected my react frontend to the new FastAPI task endpoints.
- Kept all fetch calls inside api.js for clean seperation.
- Added a create from with the a text inout and Add button to post new tasks in App.jsx
- Also Added Delete button next to each task to call the delete endpoint.
- Configured CORS in backend main.py to allow my frontend origin http://localhost:5173, so browser requests are not blocked.

**What I learned:**
- Learned how to connect React with FastAPI.
- How to fetch calls inside frontend for clean seperation.
- Learned to create a form to add task and delete button next to each task.
- Learned to create list, create, and delete tasks correctly and re-fetch the task list so the UI always matches server state.

**Blockers / Questions:**
-  Got some issues while displaying the UI on the local browser.
- While Creating button it didn't load the services in app.jsx and resolved with the professor's help.  

# Tuesday 02-06-2026
## Safal
**What I worked on:**
- Integrated the React frontend with the newly developed FastAPI task endpoints and verified the API communication flow
- Implemented task creation and deletion features in the user interface while keeping API-related logic centralized in api.js
- Updated backend CORS settings to allow frontend requests and ensure proper communication between both applications 
- Established CORS permissions in the FastAPI backend at http://localhost:5173 to facilitate successful API requests from the frontend interface 

**What I learned:**
- Learned how React applications interact with FastAPI services through API requests
- Improved my understanding of structuring frontend projects by separating service logic from UI components
- Gained practical experience managing application state and refreshing data to reflect backend changes in real time

**Blockers / Questions:**
- Experienced difficulties displaying parts of the UI correctly during local development
- Encountered an issue where service functions were not being recognized in App.jsx while implementing the create task feature 
