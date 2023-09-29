import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: "https://picsum.photos/200/300?grayscale",
    user: USERS[0].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theqazman",
        comment: "Wow! This build looks",
      },
      {
        user: "amaanth.dev",
        comment: "once i wake up!",
      },
    ],
  },
  {
    imageUrl: "https://picsum.photos/200/300?grayscale",
    user: USERS[0].user,
    likes: 3500,
    caption:
      "A generic class has a similar shape to a generic interface. Generic classes have a generic",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "chilly",
        comment: "Wow! This build looks",
      },
      {
        user: "king",
        comment: "once i wake up!",
      },
    ],
  },
];
