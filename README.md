# neviditelna-univerzita.cz

Task from CZ.NIC

# Run in development mode in docker

1. Launch docker engine

2. Run `docker-compose -f docker-compose.dev.yml --env-file .env.docker-dev up --build`

3. Then access http://localhost:3000

# Run in development mode locally

1. Run `npm install`

2. Run `npm run dev`

3. Then access http://localhost:3000

# Run in production mode in docker

1. Launch docker engine

2. Run `docker-compose -f docker-compose.prod.yml --env-file .env.prod up --build`

3. Then access http://localhost:8080
