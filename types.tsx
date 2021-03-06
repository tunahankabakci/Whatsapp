export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom:undefined;
  Contacts:undefined;
};

export type MainTabParamList = {
  Kamera: undefined;
  Sohbetler: undefined;
  Aramalar: undefined;
};

export type User = {
    id: String;
    name:String;
    imageUri:String;
    status:String;
};

export type Message = {
    id: String;
    content: String;
    createdAt:String;
    user:User;
};

export type ChatRoom = {
  id: String;
  users:User[];
  lastMessage:Message;
};

