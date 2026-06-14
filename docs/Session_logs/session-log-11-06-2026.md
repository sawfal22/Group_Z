# Thursday 11-06-2026
## Sameen
**What I worked on:**
- Continued working on the ORM functionality implemented in the previous session and extended its usage within the application.
- Added new functionalities to the Task Manager application and implemented create, list, and delete operations through the React user interface.
- Configured the application so that task data persists even after restarting the backend using Docker Compose.
- Ensured that all backend modifications were integrated without requiring any changes to the existing React frontend structure.
- Tested the application to verify that task operations and data persistence worked correctly across container restarts.

**What I learned:**
- Improved my understanding of how ORM simplifies interactions between application models and the database.
- Learned how to implement and connect create, list, and delete functionalities through React and FastAPI while maintaining a clean separation of concerns.
- Gained experience in configuring persistent storage so that data survives Docker Compose backend restarts.
- Learned how to extend backend functionality while ensuring that the existing React frontend remains untouched and existing routes continue to behave as expected.
- Strengthened my understanding of integrating frontend and backend components in a maintainable full-stack architecture.

**Blockers / Questions:**
- Encountered some challenges while configuring persistent storage for the database within Docker containers.
- Required additional troubleshooting to ensure that task data remained available after restarting the backend service.
- Faced minor integration issues while connecting the new functionalities with the existing ORM setup, which were resolved through testing and debugging.