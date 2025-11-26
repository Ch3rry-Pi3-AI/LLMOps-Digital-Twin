# 🧠 Backend API Overview

The `backend` directory contains the core API logic for the **llmops-digital-twin** project. This layer exposes a FastAPI service that communicates with the OpenAI API, processes user messages, and prepares the foundations for future conversational memory. The backend interacts with the frontend cleanly and is designed to scale as new components are added.

## Backend Files and Their Roles

### `requirements.txt`

A list of all necessary Python dependencies for running the backend service. It ensures reproducibility and easy installation across environments.

It includes:

* fastapi for serving the API
* uvicorn as the ASGI server
* openai for model communication
* python-dotenv for loading environment variables
* python-multipart for handling form and file inputs

This file supports the entire backend stack, making deployment and development consistent.

### .env

Stores sensitive environment variables such as your OpenAI API key and allowed frontend origins. This file is loaded automatically by `python-dotenv` within `server.py`.

Typical example:

```
OPENAI_API_KEY=...
CORS_ORIGINS=http://localhost:3000
```

It is excluded from version control using `.gitignore` so secrets never leave your machine.

### `.gitignore`

Located in the project root, this file ensures `.env` and other sensitive or unwanted files are not committed to GitHub.

Keeping this clean and minimal helps prevent accidental exposure of API keys and local machine configurations.

### `me.txt`

Defines the Digital Twin’s personality, tone, background, and behavioural guidance. The backend loads this file on startup and passes its content as the system message to OpenAI.

This ensures the conversational responses reflect:

* your voice
* your professional identity
* your background and interests

It is a simple but powerful component that shapes how the AI represents you.

### `server.py`

The main FastAPI application responsible for:

* Loading the personality from `me.txt`
* Handling CORS configuration
* Initialising the OpenAI client
* Defining request and response models
* Providing endpoints (`/`, `/health`, `/chat`)
* Generating AI responses using the OpenAI API

At this stage, the chat endpoint works **without memory**, meaning each message is processed independently. A session ID is generated and returned, preparing the structure for future memory integration within the upcoming `memory` module.

## How the Backend Supports the Digital Twin

The backend acts as the processing engine of the llmops-digital-twin system:

* The frontend sends user questions to the backend
* The backend applies your personality and system instructions
* The OpenAI API generates the response
* The backend returns structured results for the frontend UI

This clear separation of concerns keeps the system maintainable, scalable, and ready for enhancements such as persistent user memory, improved session handling, analytics, and advanced retrieval modules.

## Current Project Structure

```text
llmops-digital-twin/
├── .gitignore                 # Root ignore rules (keeps .env and sensitive files private)
├── backend/
│   ├── .env                   # Environment configuration (secrets, CORS settings)
│   ├── me.txt                 # Digital Twin personality profile
│   ├── requirements.txt       # Backend Python dependencies
│   └── server.py              # FastAPI backend (chat logic, personality loading, no memory yet)
├── frontend/
│   ├── app/                   # Next.js App Router structure
│   ├── components/            # Reusable UI components
│   ├── public/                # Static assets
│   └── (Next.js config files) # tsconfig, next.config, package.json, etc.
└── memory/
    └── (reserved for future memory and session modules to enhance chat continuity)
```