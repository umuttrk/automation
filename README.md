# YouTube Shorts Automation Pipeline

Monorepo for the YouTube Shorts automation pipeline. It is split into two
independently runnable applications:

| Directory    | Stack                                              | Port |
| ------------ | -------------------------------------------------- | ---- |
| `./backend`  | Java 21 · Spring Boot 3.4 · Maven · PostgreSQL/JPA | 8080 |
| `./frontend` | React 18 · Vite · TypeScript · Tailwind CSS        | 5173 |

> This repository currently contains the project **infrastructure and
> boilerplate** only. Business logic for the automation pipeline is not yet
> implemented.

## Prerequisites

- Java 17+ (21 recommended)
- Node.js 18+ (22 recommended)
- A PostgreSQL instance (for running the backend)

## Backend (`./backend`)

Spring Boot service exposing a REST API.

### Configuration

`src/main/resources/application.yml` configures:

- Server port `8080`
- PostgreSQL datasource (override via env vars below)
- Multipart upload limits up to **500MB**

| Env var       | Default                                              |
| ------------- | ---------------------------------------------------- |
| `DB_URL`      | `jdbc:postgresql://localhost:5432/youtube_automation`|
| `DB_USERNAME` | `postgres`                                           |
| `DB_PASSWORD` | `postgres`                                           |

### Run

```bash
cd backend
./mvnw spring-boot:run
```

Health check: `GET http://localhost:8080/api/health`

### Build

```bash
cd backend
./mvnw clean package
```

## Frontend (`./frontend`)

React + Vite single-page app. The dev server proxies all `/api` requests to the
backend at `http://localhost:8080`.

### Install & run

```bash
cd frontend
npm install
npm run dev      # start dev server on http://localhost:5173
npm run build    # type-check + production build
npm run lint     # run ESLint
```
