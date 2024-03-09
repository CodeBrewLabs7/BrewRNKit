import { TextContainer, WrapperContainer } from "@components/atoms";
import CustomButton from "@components/atoms/ButtonContainer";
import { CustomTextInput } from "@components/molecules";
import AuthHeader from "@components/molecules/AuthHeader";
import RememberMe from "@components/molecules/RememberMe";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import type { AuthStackParamList } from "@navigations/AuthStack";
import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { login } from "@redux/actions/auth";
import { useDispatch, useSelector } from "@redux/hooks";
import { moderateScale, verticalScale } from "@utils/scaling";
import validate from "@utils/validations";
import React, { useState } from "react";
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Login = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [username, setUsername] = useState<string>("kminchelle");
  const [password, setPassword] = useState<string>("0lelplR");

  const { styles } = useStyles(stylesheet);

  const { isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onLogin = async () => {
    const isValid = validate({
      name: username,
      password,
    });

    if (isValid === true) {
      const res = await dispatch(
        login({ username, password, deviceType: Platform.OS })
      );
      // @ts-ignore
      res.meta.requestStatus === "rejected" ? alert(res.payload.error) : alert(isValid);
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

            <RememberMe onPressForgot={() => alert("Forgot password")} />
            <CustomButton
              isLoading={isLoading}
              label="LOG_IN"
              onPress={onLogin}
            />
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
