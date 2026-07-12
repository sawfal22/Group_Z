# Tuesday 30-06-2026
## Sameen
**What I worked on:**
- Completed Exercises 3 and 4 of the Task Manager project.
- Implemented user authentication and tested protected API endpoints using Postman.
- Connected the application database with DBeaver to verify user and task records.
- Continued improving the authentication and authorization workflow within the backend.

**What I learned:**
- Strengthened my understanding of password handling and user authentication in the application.
- Learned how to authenticate API requests using Postman and validate protected endpoints.
- Gained more experience working with DBeaver to inspect and verify database records.
- Improved my understanding of implementing secure authentication in a FastAPI project.

**Blockers / Questions:**
- Encountered an authorization issue where a user authenticated as Alice was still able to edit Bob's tasks.
- Required further debugging to enforce proper access control and resource ownership.

# Tuesday 30-06-2026
## Safal
**What I worked on:**
- Progressed through Exercises 3 and 4 of the Task Manager backend by implementing the required functionality
- Configured and verified secure login features while testing protected API endpoints through Postman
- Examined user and task data in DBeaver and refined the backend authorization logic to improve access control

**What I learned:**
- Developed a better understanding of authentication mechanisms, password security, and API protection in FastAPI
- Gained practical experience validating endpoint behavior with Postman and confirming database changes using DBeaver
- Improved my knowledge of backend authorization by exploring how resource ownership should be enforced for different users

**Blockers / Questions:**
- Identified an authorization issue where a user logged in as Alice could still modify tasks owned by Bob
- Need to investigate and correct the ownership validation to ensure users can access only their own resources