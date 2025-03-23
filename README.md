![Chatbot Banner](./qulang-banner-rounded.png)

# Chatbot

Chatbot is a Next.js application that provides a simple API to retrieve provider information (model name, picture path, and provider description) loaded directly from environment variables.

## Features

- **API Endpoint**  
  The API is accessible via `/api` and returns a JSON with the following information:
  - `provider_name`: The model name.
  - `picture_path`: The path to the image.
  - `provider_description`: The description of the provider.

- **Docker Deployment with GitHub Actions**  
  The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yaml`) for automatically deploying the application on a self-hosted server. The deployment script updates the code, rebuilds the Docker image, and restarts the container.

## Prerequisites

- Node.js
- pnpm
- Next.js
- Docker and Docker Compose (for deployment)

## Installation

1. Clone the repository:

   ```bash
   git clone https://your-repository-url.git
   cd qubic-madrid/openaichat
   ```

2. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and configure the environment variables:

   ```env
   PROVIDER_NAME=YourModelName
   PICTURE_PATH=/path/to/your/image.png
   PROVIDER_DESCRIPTION=Your provider description
   ```

## Running in Development

To start the development server, run:

```bash
pnpm dev
```

The API will be accessible at [http://localhost:3000/api](http://localhost:3000/api).

## Deployment

The deployment is managed via GitHub Actions. The workflow in `.github/workflows/deploy.yaml`:

- Triggers on every push to the `main` branch.
- Connects to a self-hosted server.
- Executes a script to update the code, rebuild the Docker image, and restart the container.

Ensure the server has the necessary permissions to execute `docker-compose` commands.

## Project Structure

- `app/`: Contains the Next.js application code.
  - `api/route.ts`: GET API endpoint that returns information from environment variables.
- `.github/workflows/deploy.yaml`: GitHub Actions workflow for deployment.
- `README.md`: This file.


