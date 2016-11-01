# Locally

## Minimum Viable Product

Locally is a web application inspired by Eventbrite built using Ruby on Rails
and React/Redux.  

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] EventsAPI/model/components
- [ ] Registering Events
- [ ] User Show Page
- [ ] Saving Interested Events
- [ ] Sorting Events based on criteria
- [ ] Infinite Scroll/ Pagination
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End user Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Event Model, API, and Components (2 days)

**Objective:** Events can be created, read, edited and destroyed through API.

### Phase 3: Attending Events (1 day)

**Objective:** User can view event and mark "attending" on events. The list of attending events will show up on user's show page.

### Phase 4: User show page (1 day)

**Objective:** Style user show page and display event list based on date order.

### Phase 5: Bookmark (1 day)

**objective:**  User can view event and mark "bookmark" on events. The list of interested events will show up on user's show page.

### Phase 6: - Sort by Category/ Event Date (1 day)

**objective:** Display list of Events matching category query and/or date range

### Phase 7: - Pagination/ infinite scrolling Event Index (1day) (1 day)

**objective:** Display pagination option on all pages with event list and add infinite scrolling option

### Phase 8: - Complex Styling in Event pages (1 day)

**objective:** Adjust/ fix styling on all event pages

### Bonus Features (TBD)
- [ ] Map integration
- [ ] Search Feature based on Event Title/ description
- [ ] Notification reminder for upcoming events
- [ ] Add event to Calendar
