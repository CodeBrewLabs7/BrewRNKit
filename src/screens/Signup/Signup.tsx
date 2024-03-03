//import liraries
import { WrapperContainer } from "@components/atoms";
import CustomButton from "@components/atoms/ButtonContainer";
import { CustomTextInput } from "@components/molecules";
import AuthHeader from "@components/molecules/AuthHeader";
import RememberMe from "@components/molecules/RememberMe";
import imagePath from "@constants/imagePath";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { moderateScale, verticalScale } from "@screens/Onboarding/scaling";
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthStackParamList } from "@navigations/AuthStack";
import { AppDispatch } from "@redux/store";
import { useDispatch } from "react-redux";
import validate from "@utils/validations";
import { signup } from "@redux/actions/auth";
import { useSelector } from "@redux/hooks";

const Signup = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { isLoading } = useSelector((state) => state.auth);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const dispatch: AppDispatch = useDispatch();

  const onSignup = async () => {
    let isValid = validate({
      name,
      email,
      password,
    });

    if (isValid == true) {
      let res = await dispatch(
        signup({ name, email, username, password, deviceType: Platform.OS })
      );
      console.log("res+++", res);
      if (res.meta.requestStatus == "fulfilled") {
        //@ts-expect-error
        alert("User created successfully...!!");
        navigation.goBack()
      } else {
               //@ts-expect-error
        alert(res.payload.response.data.error);
      }
    } else {
      //@ts-expect-error
      alert(isValid);
    }
  };

  return (
    <WrapperContainer>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <AuthHeader
            title="CREATE_AN_ACCOUNT"
            description="WELCOME_PLEASE_ENTER_YOUR_DETAILS"
          />

          <CustomTextInput
            leftImage={imagePath.icUser}
            label="NAME"
            placeholder="ENTER_YOUR_NAME"
            style={{ marginBottom: verticalScale(24) }}
            onChangeText={setName}
            // returnKeyType='next'
          />
          <CustomTextInput
            leftImage={imagePath.icEmail}
            label="EMAIL"
            placeholder="ENTER_YOUR_EMAIL"
            style={{ marginBottom: verticalScale(24) }}
            keyboardType="email-address"
            onChangeText={setEmail}
            // returnKeyType='next'
          />
          <CustomTextInput
            leftImage={imagePath.icLock}
            rightImage={
              secureTextEntry ? imagePath.icPassword : imagePath.icPasswordShow
            }
            label="PASSWORD"
            placeholder="ENTER_YOUR_PASSWORD"
            style={{ marginBottom: verticalScale(24) }}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            onPressRight={() => setSecureTextEntry(!secureTextEntry)}
          />
          <RememberMe
            //@ts-ignore
            onPressForgot={() => alert("Forgot password")}
          />
          <CustomButton
            isLoading={isLoading}
            label="SIGNUP"
            onPress={onSignup}
          />
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(16),
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: moderateScale(24),
  },
});

export default Signup;
