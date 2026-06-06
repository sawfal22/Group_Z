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
