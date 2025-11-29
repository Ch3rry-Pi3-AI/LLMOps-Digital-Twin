# 🤖 **LLMOps Digital Twin — Main Project Overview**

The **LLMOps Digital Twin** is a full end-to-end AI system designed to create a persistent, context-aware, personality-driven digital representation of yourself.

The Digital Twin:

* Holds long-term **memory** across sessions
* Behaves according to your **communication style** and **structured personal facts**
* Is powered by **AWS Bedrock** models
* Runs on a production-ready **FastAPI backend**
* Serves a lightweight, responsive **frontend interface**
* Stores persistent memory using **S3**
* Deploys serverlessly using **AWS Lambda** + **API Gateway** + **CloudFront**

This project demonstrates modern LLMOps principles:

* Context engineering
* Memory persistence
* Full AWS serverless deployment
* Model abstraction and transition management (OpenAI → Bedrock)
* Clean backend architecture
* Secure environment variable and IAM management
* Production-ready CI-style packaging

It is a complete, cloud-deployed Digital Twin system.

## 🎥 **Digital Twin Demo**

<div align="center">
  <img src="img/demo/twin_demo.gif" width="100%" alt="Digital Twin Demo">
</div>

## 🧩 **Grouped Stages**

Your project contained **12 sequential stages**, several of which naturally cluster together.
Below is a clean, intuitive, 3-column grouped table in the exact style you prefer:

| Stage Group | Category                      | Description                                                                                                                  |
| :---------: | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
|    **00**   | Project Setup                 | Repository creation, initial folder structure, environment prep, base configuration                                          |
|  **01–05**  | Core Digital Twin Development | Backend API, frontend UI, early testing without memory, adding persistent memory, context engineering                        |
|  **06–11**  | AWS Cloud Deployment          | AWS account setup, Lambda packaging, S3 buckets for memory, API Gateway configuration, frontend deployment, CloudFront setup |
|    **12**   | Model Transition to Bedrock   | Full migration from OpenAI models to AWS Bedrock, including IAM permissions, environment updates, and backend overhauls      |

This table reflects the natural lifecycle of your system:
local development → memory + persona → AWS infrastructure → final Bedrock transition.

## 🗂️ **Project Structure**

```
LLMOps-Digital-Twin/
├── backend/
│   ├── server.py
│   ├── lambda_handler.py
│   ├── context.py
│   ├── resources.py
│   ├── deploy.py
│   ├── data/
│   │   ├── facts.json
│   │   ├── summary.txt
│   │   ├── style.txt
│   │   └── LinkedIn.pdf
│   ├── requirements.txt
│   └── README.md
├── frontend/
│   ├── app/
│   │   └── page.tsx
│   ├── components/
│   │   └── twin.tsx
│   ├── node_modules/
│   ├── out/
│   ├── public/
│   ├── .gitignore
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── README.md
│   └── tsconfig.json
├── img/
│   └── demo/
│       └── twin_demo.gif
├── .env
├── .gitignore
└── README.md
```

## 🧠 **Key Architectural Components**

### 🐍 FastAPI Backend (server.py)

* Acts as the Digital Twin’s central intelligence
* Provides chat, memory, and health endpoints
* Integrates with **AWS Bedrock** for inference
* Handles conversation sessions
* Performs memory reads/writes (local or S3)
* Built with clean Pydantic models
* Robust error handling for Bedrock

### 🧠 Context Engineering (`context.py`)

* Loads structured personal information
* Generates a unified behavioural profile
* Encodes tone, personality, goals, identity, and guardrails
* Entirely replaces prompt engineering with **rich context construction**

### 🗄️ Persistent Memory System (local or S3)

* Memory saved as JSON per session
* S3-backed memory enables:

  * multi-device continuity
  * long-term persistence
  * serverless scalability

### 🌐 Frontend Interface

* Clean HTML/CSS/JS chat UI
* Makes POST requests to Lambda/API Gateway
* Displays streaming or static model responses
* Integrates seamlessly with CloudFront deployment

### ☁️ AWS Serverless Deployment

From Stages 06–11, the project transitions fully into AWS infrastructure:

* IAM configuration
* Lambda deployment (via `deploy.py`)
* S3 memory bucket
* API Gateway routing
* CloudFront global CDN for frontend
* Strict CORS and environment configuration
* Fully serverless with zero ongoing maintenance

### 🔄 Model Transition (Stage 12)

* Removed OpenAI dependencies
* Introduced Bedrock Runtime (`boto3.client("bedrock-runtime")`)
* New message formatting via Bedrock’s `converse` API
* Updated environment variables (`BEDROCK_MODEL_ID`, region)
* Renewed IAM permissions for Bedrock access
* Significant backend overhaul to unify OpenAI-like behaviour with Bedrock capabilities

This stage transformed the project into a **fully AWS-native Digital Twin**.

## 💻 **Local Development**

Install backend dependencies:

```bash
pip install -r backend/requirements.txt
```

Run the backend locally:

```bash
cd backend
uvicorn server:app --reload
```

Open the local frontend:

```
frontend/index.html
```

Memory will be stored under `backend/memory/` unless `USE_S3=true`.

## 🧪 **Local Testing (No Memory → Memory)**

Stage 03 tests the system without memory.
Stage 04 tests full memory, verifying:

* message persistence
* session continuity
* long-term recall

This staged transition ensures correctness before deploying to AWS.

## 🚀 **Deploying to AWS**

Your deployment flow mirrors best-practice LLMOps pipelines:

1. Package the backend using **deploy.py**
2. Upload via AWS CLI or S3
3. Configure Lambda environment variables
4. Set up API Gateway routes
5. Create memory and deployment buckets in S3
6. Deploy the frontend to a static S3 bucket
7. Add CloudFront distribution
8. Test end-to-end through CloudFront

The Bedrock migration reuses the same pipeline with updated backend logic.

## 🎉 **Project Complete**

You have successfully built, enhanced, tested, and deployed a fully serverless **LLMOps Digital Twin** across:

* Context engineering
* Persistent memory
* Bedrock inference
* FastAPI backend
* Frontend UI
* S3 memory and static storage
* Lambda + API Gateway
* CloudFront global CDN

This project now represents a fully AWS-native, production-ready Digital Twin that mirrors your personality, background, and communication style — with persistent memory and world-class model inference.
