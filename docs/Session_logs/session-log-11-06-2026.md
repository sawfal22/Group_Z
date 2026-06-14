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

# Thursday 11-06-2026
## Safal
**What I worked on:**
- Enhanced the application's data management layer by refining how information is processed and stored throughout the system
- Expanded the task handling capabilities and ensured users could interact with records efficiently through the web interface
- Improved the deployment setup to maintain application data consistently across service restarts and environment changes
- Verified system reliability by performing functional checks and validating that newly introduced features integrated smoothly with the existing application

**What I learned:**
- Developed a stronger understanding of designing backend components that promote code reusability and easier maintenance
- Learned effective methods for connecting user-facing features with server-side functionality while preserving a clear separation of responsibilities
- Gained practical experience in managing application state and storage within containerized development environments
- Improved my knowledge of implementing enhancements in a way that minimizes disruption to existing modules and workflows

**Blockers / Questions:**
- Required additional investigation into configuration settings to ensure long-term stability of stored application data
- Faced challenges validating interactions between newly added functionality and existing components, requiring further testing and refinement


# Thursday 11-06-2026
## Jagadish
**What I worked on:**
- Continued integrating SQLAlchemy ORM into the Task Manager backend and connected it with the service and repository layers.
- Implemented task creation, retrieval, and deletion operations and verified that they were accessible from the React interface.
- Configured database persistence using Docker volumes so task records remain available after backend container restarts.
- Refactored backend components to support the new functionality without requiring modifications to existing React pages or API routes.
- Performed end-to-end testing between React, FastAPI, and the database to validate application behavior.

**What I Learned:**
- Gained a better understanding of how SQLAlchemy ORM manages database records through Python models.
- Learned how dependency injection in FastAPI helps separate controllers, services, and repositories.
- Improved my knowledge of connecting React frontend requests with FastAPI endpoints while maintaining clean architecture principles.
- Learned how Docker volumes are used to preserve application data independently of container lifecycles.
- Strengthened my debugging skills while tracing issues across the frontend, backend, and database layers.

**Blockers / Questions:**
- Faced issues while configuring persistent database storage inside Docker containers.
- Needed additional testing to verify that stored tasks remained available after multiple backend restarts.
- Encountered minor ORM integration and import-related issues that required debugging and code restructuring.