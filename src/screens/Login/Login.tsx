import { TextContainer, WrapperContainer } from "@components/atoms";
import CustomButton from "@components/atoms/ButtonContainer";
import { CustomTextInput } from "@components/molecules";
import AuthHeader from "@components/molecules/AuthHeader";
import RememberMe from "@components/molecules/RememberMe";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { AuthStackParamList } from "@navigations/AuthStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { login } from "@redux/actions/auth";
import { useDispatch, useSelector } from "@redux/hooks";
import { moderateScale, verticalScale } from "@screens/Onboarding/scaling";
import validate from "@utils/validations";
import React, { useState } from "react";
import {
  Keyboard,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Login = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [email, setEmail] = useState<string>("Test5@gmail.com");
  const [password, setPassword] = useState<string>("123456");

  const { isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onLogin = async () => {
    let isValid = validate({
      email,
      password,
    });

    if (isValid == true) {
      let res = await dispatch(login({ email, password, deviceType: Platform.OS }))
      if (res.meta.requestStatus == "rejected") {
        //@ts-ignore
        alert(res.payload.error);
      }
    } else {
      //@ts-ignore
      alert(isValid);
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
              value={email}
              leftImage={imagePath.icEmail}
              label="EMAIL"
              placeholder="ENTER_YOUR_EMAIL"
              style={{ marginBottom: verticalScale(16) }}
              keyboardType="email-address"
              onChangeText={setEmail}
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
              onPress={() => navigation.navigate("Signup", { email })}
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

const styles = StyleSheet.create({
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
});

export default Login;
