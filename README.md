# International Student Assistance

_A web app that supports international students in Germany by guiding them through universities, accommodation, visa and registration processes, banking, SIM setup, and basic German language learning for smoother transition.


## Team

| Role | Name |
|---|---|
| Product Owner | Safal Karki |
| Scrum Master | Sameen |
| Developer |Saksham |
| Developer | Jagadish |
| Developer | Shahid |

## Project Overview

_The International Student Assistant (Germany) is a web-based platform designed to help international students navigate essential steps when studying and living in Germany. It provides a centralized system where users can explore universities and courses, understand accommodation options and average rents, and follow step-by-step guides for important administrative processes such as visa extensions, city registration (Anmeldung), bank account setup, and SIM card activation.

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
| Frontend |HTML,CSS,SASS,JS |
| Backend |PHP + LMS SOFTWARE |
| Database |MySQL |
| Deployment |Shared Hosting via HostPapa (sub-domain)|

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose installed
- Git

### Run locally

```bash
git clone https://github.com/sawfal22/Group_Z.git
cd <Group_Z>
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
