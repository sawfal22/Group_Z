# International Student Assistant

> A web app that helps new students navigate essential steps for arriving in Germany.

## Team

| Role | Name |
|---|---|
| Product Owner | Safal Karki |
| Scrum Master | Sameen |
| Developer |Saksham |
| Developer | Jagadish |
| Developer | Shahid |

## Project Overview

_The International Student Assistant (Germany) is a web-based platform designed to help international students navigate essential steps when studying and living in Germany. It provides a centralized system where users can explore universities and courses, understand accommodation options and average rents, and follow step-by-step guides for important administrative processes such as visa extensions, city registration (Anmeldung), bank account setup, and SIM card activation. The platform also includes a basic German language learning section to help students adapt to daily life more easily._ (Need to modify)

## Architecture

_Add your architecture diagram here (C4 Context or Container diagram). Update this as the project evolves._

```
service-a  ──►  service-b
    │
    ▼
  database
```

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | |
| Backend | |
| Database | |
| Deployment | |

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose installed
- Git

### Run locally

```bash
git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>
cp .env.example .env   # fill in your values
docker compose up --build
```

The app will be available at `http://localhost:3000`.

## Repository Structure

```
├── README.md
├── .gitignore
├── docs/
│   └── vision.md            # Product vision, personas, user stories
├── services/
│   ├── service-a/           # First microservice
│   └── service-b/           # Second microservice
└── docker-compose.yml
```

## Documentation

- [Vision Document](docs/vision.md)


## License

MIT
