# International Student Assistance

_A web app that supports international students in Germany by guiding them through universities, accommodation, visa and registration processes, banking, SIM setup, and basic German language learning for smoother transition.


## Team

| Role | Name |
|---|---|
| Product Owner | Safal Karki |
| Scrum Master | Sameen Shrestha |
| Developer | Saksham Bikram Sha |
| Developer | Jagadish Pudasaini |
| Developer | Shahid Afreed Fajarudheen |

## Project Overview

_The International Student Assistant (Germany) is a web-based platform designed to help international students navigate essential steps when studying and living in Germany. It provides a centralized system where users can explore universities and courses, understand accommodation options and average rents, and follow step-by-step guides for important administrative processes such as visa extensions, city registration (Anmeldung), bank account setup, and SIM card activation.

## Architecture

<img src="/img/Architecture_Diagram.jpg" alt="International Student Assistant Architecture Diagram" width="500">

```
frontend  ──►  backend
                  │
                  ▼
                database
```

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React JS, Vite, Tailwind, TypeScript |
| Backend | Supabase + PostgreSQL +  Docker |
| Database | MySPostgreSQL |
| Deployment | Local Hosting |

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- Git

### Run locally

```bash
git clone https://github.com/sawfal22/Group_Z.git
cd Group_Z

Run Docker

For backend:
- Open a new terminal then:
- cd backend
- npx supabase start

For frontend:
- Open a new terminal then:
- cd backend
- npm install
- npm run dev
```

The app will be available at `http://localhost:5173`.

## Repository Structure

```
├── README.md
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.*
├── .env.example
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── lib/
│   ├── data/
│   └── assets/
├── public/
├── docs/
│   ├── vision.md
│   ├── Personas.md
│   ├── Scenarios.md
│   ├── User-Stories.md
│   └── Group-Debrief.md
└── docker-compose.yml
```

## Documentation

- [Vision Document](docs/vision.md)


## License

MIT
