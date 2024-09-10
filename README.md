# DSpot frontend test

## Getting the project

Clone the repository

```bash
git clone git@github.com:reinier-millo/dspot-frontend.git
cd dspot-frontend
```

## Installing dependencies

Install the required dependencies with:

```bash
npm install
```

## Running the Service

### Run Locally

To run the service locally:

```bash
npm run start
```

By default, the service listens on local interface on port **3000**.

### Running with Docker

To run the service using Docker, build the image:

```bash
docker build -t dspot-frontend .
```

Run the container:

```bash
docker run -d -p 8000:8000 dspot-frontend
```

## Linting

To run linting:

```bash
npm run lint
```

To fix automatic fixable linting errors:

```bash
npm run lint -- --fix
```

## Testing

To run the tests you need to run first the web page and then:

```bash
npm run test
```

Tests can be executed directly from Cypress:

```bash
npm run cypress:open
```
