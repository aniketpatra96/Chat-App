import { ChatSharp } from "@mui/icons-material";

export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Smith Jane",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Smith Jane",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Smith Jane",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "sample message",
    _id: "kgyudyedtyfyjvbulk",
    sender: {
      _id: "user._id",
      name: "Chaman ",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdasd 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "kgyudyedtyfyjvbulkhjg",
    sender: {
      _id: "hjgjg",
      name: "Chaman 2",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Aniket Patra",
      avatar:
        "https://i.pinimg.com/originals/e5/7b/8c/e57b8cf9a9ffeeeddf5adacfdcebbfa3.jpg",
      _id: "1",
      username: "aniket26",
      friends: 20,
      groups: 5,
    },
    {
      name: "Jonathan Behera",
      avatar:
        "https://i.pinimg.com/originals/e5/7b/8c/e57b8cf9a9ffeeeddf5adacfdcebbfa3.jpg",
      _id: "2",
      username: "jonathon",
      friends: 50,
      groups: 12,
    },
  ],
  chats: [
    {
      name: "MERN GROUP",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Jonathon Panda",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Labdo Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        { _id: "3", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "4", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "5", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 3,
      totalMessages: 35,
      creator: {
        name: "Hrusikesh dutta",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [{
        id:"1",
        name:'attachment',
        url:'https://www.w3schools.com/howto/img_avatar.png'
      }],
      content: "Hello from all how are all??",
      _id: "jkhkhkucajkhbkcj",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-04-23T10:41:30.630Z",
    },
    {
      attachments: [],
      content: "Hey pickup my phone?",
      _id: "jkhers",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Aditya",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-04-23T10:41:30.630Z",
    },
  ],
};
