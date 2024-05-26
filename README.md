<h1 align="center" style="font-weight: bold;">Text Analyzer</h1>

<p align="center">A simple text analyzer api.</p>

## 💻 Technologies

- NestJs
- NodeJs
- TypeScript

## 🚀 Getting started

## Docker

```bash
docker compose up --build
```

Use the following for production build.

```bash
docker compose -f docker-compose.prod.yml up --build
```

## 📍 API Endpoints

List of available endpoints.

#### GET

- http://localhost:3000/text-analyzer

#### POST

- http://localhost:3000/text-analyzer/word-count
- http://localhost:3000/text-analyzer/character-count
- http://localhost:3000/text-analyzer/sentence-count
- http://localhost:3000/text-analyzer/paragraph-count
- http://localhost:3000/text-analyzer/longest-words

Send the text in the body of the post.

Curl example.

```bash
curl -X POST \
      -H "Content-Type: application/json" \
      -d '{"text": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun."}' \
      http://localhost:3000/text-analyzer/word-count
```

## 🧪 Running Tests

Have the [development container running](#docker).

```bash
docker exec -i -t <CONTAINER_NAME/ID> bash
```

```bash
npm run test
npm run test:e2e
npm run test:cov
```
