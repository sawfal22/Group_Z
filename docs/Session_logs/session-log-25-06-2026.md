# Thursday 25-06-2026
## Sameen
**What I worked on:**
- Completed the first exercise and made significant progress on the second exercise.
- Continued implementing authentication and authorization features within the application.
- Tested user authentication workflows and verified that protected routes functioned as expected.

**What I learned:**
- Strengthened my understanding of password management and authentication mechanisms.
- Learned how authentication integrates with application workflows to secure user access.
- Improved my knowledge of implementing secure login functionality within a FastAPI project.

**Blockers / Questions:**
- Encountered difficulties completing all requirements of the second exercise.
- Needed additional debugging and guidance to resolve the remaining implementation issues.

# Thursday 25-06-2026
## Safal
**What I worked on:**
- Finished the first exercise and completed most of the second exercise
- Continued developing the application's login and user access features
- Checked the authentication process to make sure users could log in and access protected pages
- Reviewed the backend code to ensure the authentication system was working as expected

**What I learned:**
- Learned more about how secure login systems verify user identities
- Improved my understanding of managing user access through authentication and authorization
- Gained more confidence working with authentication features in a FastAPI application
- Better understood how protected endpoints help keep application data secure

**Blockers / Questions:**
- Faced a few problems while finishing the second exercise and needed extra debugging to resolve them


# Thursday 25-06-2026
## Jagadish

**What I Worked On:**
- Implemented JWT-based authentication system for secure user login.
- Added secure password handling using bcrypt hashing (via passlib) to ensure passwords are not stored in plain text.
- Built full authentication flow: login → password verification → JWT token generation → token-based access.
- Integrated backend authentication modules (tokens.py, user_repository.py, auth_controller.py, main.py) and connected them with frontend login.
- Configured .env variables inside Docker Compose for secure backend setup.
- Verified user data storage and authentication flow using PostgreSQL and DBeaver.

**What I Learned:**
- Understood the fundamental difference between Authentication (who you are) and Authorization (what you are allowed to do).
- Learned why modern systems use hashed passwords instead of encryption or plain text storage.
- Gained hands-on understanding of secure password hashing using bcrypt via Passlib, including automatic salting and one-way verification.
- Learned how JWT works as a stateless authentication mechanism, where identity is embedded inside a signed token instead of session storage.
- Understood JWT structure (header, payload, signature) and how tampering invalidates the token.
- Gained deeper understanding of trade-offs in JWT systems, including statelessness vs token revocation challenges

**Blockers/Questions:**
- Initial complexity in understanding secure password hashing vs insecure approaches (plain text, fast hashes like SHA variants).
- Required careful debugging of token generation and validation flow during integration with backend services.
- Minor issues in aligning frontend token handling with backend authentication response structure, resolved through iterative testing.