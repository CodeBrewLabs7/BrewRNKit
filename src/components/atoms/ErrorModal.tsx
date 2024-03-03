//import liraries
import React, { useReducer, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";

interface NotificationProps {
  message?: string;
  onClose?: () => void;
}

// create a component

// userReducer.ts
export interface UserState {
  notification: string | null;
}



type UserAction =
  | { type: "SHOW_NOTIFICATION"; payload: string }
  | { type: "CLOSE_NOTIFICATION" };

export const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notification: action.payload,
      };
    case "CLOSE_NOTIFICATION":
      return {
        ...state,
        notification: null,
      };
    default:
      return state;
  }
};


export const myFun = () => {};
const ErrorModal: React.FC<NotificationProps> = ({ message, onClose }) => {

  const initialState: UserState = {
    notification: null,
  };
;

  const [state, dispatch] = useReducer(userReducer, initialState);



  if (state.notification) {
    return (
      <SafeAreaView style={styles.notification}>
        <TouchableOpacity onPress={onClose}>
          <Text>{state.notification}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  return <></>;
};

// define your styles
const styles = StyleSheet.create({
  notification: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#696969",
    margin: 20,
    borderRadius: 10,

  },
});

//make this component available to the app
export default React.memo(ErrorModal);
