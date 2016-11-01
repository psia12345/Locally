# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:userId`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Events

- `GET /api/events`
  - Event index
  - accepts `category` query param to list events by category
  - accepts pagination params for event list
- `POST /api/events`
- `GET /api/events/:eventId`
- `PATCH /api/events/:eventId`
- `DELETE /api/events/:eventId`

### Category

- `GET /api/categories`
