export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Kamera: undefined;
  Sohbetler: undefined;
  Aramalar: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
    id: String;
    name:String;
    imageUri:String;
};

export type Message = {
    id: String;
    content: String;
    createdAt:String;
};

export type ChatRoom = {
  id: String;
  users:[User];
  lastMessage:Message;
};

