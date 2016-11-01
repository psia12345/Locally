## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - HeaderNav
 - Footer

**IndexRoot**
- About
- CategorySearch

**EventsContainer**
 - SortingSidebar
 - EventIndex
  + EventItemList
- Pagination

**EventItemContainer**
 - EventDetail

**EventForm**
 - NewEvent

**CategorySearch**
 - SearchCriteria
 - EventIndex

**UserContainer**
 - UserInfo
 - AttendingEvents
 - InterestedEvents

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/events" | "EventsContainer" |
| "/events/:eventId" | "EventDetail" |
| "/events/new-event" | "EventForm" |
| "/events/category-search" | "CategorySearch" |
| "/users/:userId" | "UserContainer"
| "/users/:userId/interested-events" | "InterestedEvents" |
| "/users/:userId/attending-events" | "AttendingEvents" |
