import { createSlice } from "@reduxjs/toolkit";
import io from 'socket.io-client';

const socket = io("https://chat-app-0pfc.onrender.com");
// const socket = io('https://chat-app-socket.onrender.com')

// const socket = io("http://localhost:5000");

const initialState = {
  socket,
  activeChat: {
    id: null,
    name: null,
    admin: null,
    members: []
  },
  messages: [],
  isMessagesActive: false
};

const chat = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateActiveChat: (state, { payload }) => {
      state.activeChat = payload;
    },
    updateMessages: (state, { payload }) => {
      state.messages = payload;
    },
    updateIsMessagesActive: (state, { payload }) => {
      state.isMessagesActive = payload.active;
    },
    addMessage: (state, { payload }) => {
      state.messages.push(payload);
    },
  },
});

export const { updateActiveChat, updateMessages, addMessage, updateIsMessagesActive } = chat.actions;
export default chat.reducer;
