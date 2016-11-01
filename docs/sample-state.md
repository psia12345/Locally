```js
{
  currentUser: {
    id: 1,
    email: "test@gmail.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createEvent: {errors: ["body can't be blank"]}
  },
  events: {
    1: {
      name: "Test Event",
      host_id: 1,
      description: "This is a test",
      image_url: "",
      date: "2016-10-30",
      start_time: "23:04:55",
      end_time: "23:05:00",
      categories: {
        1:{
          id: 1,
          name: "Test"
        }
      },
      participant: {
        1: {
          id: 2,
          email: "testFriend@gmail.com",
          bookmark: true,
          attending: false
        }
      }
    }
  }
}
```
