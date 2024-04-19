import { ButtonContainer, TextContainer, WrapperContainer } from "@components/atoms";
import { AuthHeader, CustomTextInput, RememberMe } from "@components/molecules";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { useCustomPost } from "@hooks/useMutationQuery";
import type { AuthStackParamList } from "@navigations/AuthStack";
import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "@redux/hooks";
import { saveUserData } from "@redux/reducers/auth";
import { moderateScale, verticalScale } from "@utils/scaling";
import validate from "@utils/validations";
import React, { useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import LoginResponse, { LoginRequestData } from "./types";

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(16),
    justifyContent: "space-between",
  },
  bottomView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
}));

const alertFunction = (title: string, message: string) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      { text: "OK", onPress: () => {} },
    ],
    { cancelable: false },
  );
};

const Login = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [username, setUsername] = useState<string>("kminchelle");
  const [password, setPassword] = useState<string>("0lelplR");

  const { styles } = useStyles(stylesheet);

  const dispatch = useDispatch();

  const { mutate, isPending } = useCustomPost<LoginResponse, Error, LoginRequestData>(
    "/auth/login",
    {
      onSuccess: ({ data }) => {
        // @ts-expect-error : will fix later
        dispatch(saveUserData(data));
      },
      onError: () => {
        alertFunction("Error", "An error occurred");
      },
    },
  );

  const onLogin = async () => {
    const isValid = validate({
      name: username,
      password,
    });

    if (isValid === true) {
      mutate({ username, password });
    }
  };

  return (
    <WrapperContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <AuthHeader
              title="LOG_IN_TO_YOUR_ACCOUNT"
              description="WELCOME_BACK_PLEASE_ENTER_YOUR_DETAILS"
            />
            <CustomTextInput
              value={username}
              leftImage={imagePath.icUser}
              label="NAME"
              placeholder="ENTER_YOUR_NAME"
              style={{ marginBottom: verticalScale(16) }}
              onChangeText={setUsername}
            />
            <CustomTextInput
              value={password}
              leftImage={imagePath.icLock}
              label="PASSWORD"
              placeholder="ENTER_YOUR_PASSWORD"
              style={{ marginBottom: verticalScale(42) }}
              keyboardType="email-address"
              onChangeText={setPassword}
            />

            <RememberMe onPressForgot={() => alertFunction("Password", "Forgot Password")} />
            <ButtonContainer isLoading={isPending} label="LOG_IN" onPress={onLogin} />
          </View>

          <View style={styles.bottomView}>
            <TextContainer text="DONT_HAVE_ACCOUNT" />
            <TextContainer
              onPress={() => navigation.navigate("Signup", { username })}
              text="SIGNUP"
              style={{
                marginLeft: moderateScale(4),
                fontFamily: fontFamily.semiBold,
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </WrapperContainer>
  );
};

export default Login;
