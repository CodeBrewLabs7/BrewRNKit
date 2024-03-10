import React, { useState } from "react";
import { WrapperContainer } from "@components/atoms";
import CustomButton from "@components/atoms/ButtonContainer";
import { CustomTextInput } from "@components/molecules";
import AuthHeader from "@components/molecules/AuthHeader";
import RememberMe from "@components/molecules/RememberMe";
import imagePath from "@constants/imagePath";
import type { AuthStackParamList } from "@navigations/AuthStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { signup } from "@redux/actions/auth";
import { useSelector } from "@redux/hooks";
import type { AppDispatch } from "@redux/store";
import { moderateScale, verticalScale } from "@utils/scaling";
import validate from "@utils/validations";

import { Alert, Platform, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useDispatch } from "react-redux";

// no user before defined
const stylesheet = createStyleSheet(() => ({
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
}));

function Signup(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { isLoading } = useSelector((state) => state.auth);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { styles } = useStyles(stylesheet);

  const dispatch: AppDispatch = useDispatch();

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

  const onSignup = async () => {
    const isValid = validate({
      name,
      email,
      password,
    });

    if (isValid === true) {
      const res = await dispatch(
        signup({
          name,
          email,
          username: "xyz",
          password,
          deviceType: Platform.OS,
        }),
      );
      // console.log("res+++", res);
      if (res.meta.requestStatus === "fulfilled") {
        navigation.goBack();
      } else {
        // @ts-expect-error : will handle later
        alertFunction("Success", res.payload?.response.data.error || "");
      }
      return;
    }
    // @ts-expect-error : will handle later
    alertFunction("Error", isValid);
  };

  return (
    <WrapperContainer>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <AuthHeader title="CREATE_AN_ACCOUNT" description="WELCOME_PLEASE_ENTER_YOUR_DETAILS" />

          <CustomTextInput
            leftImage={imagePath.icUser}
            label="NAME"
            placeholder="ENTER_YOUR_NAME"
            style={{ marginBottom: verticalScale(24) }}
            onChangeText={setName}
          />
          <CustomTextInput
            leftImage={imagePath.icEmail}
            label="EMAIL"
            placeholder="ENTER_YOUR_EMAIL"
            style={{ marginBottom: verticalScale(24) }}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <CustomTextInput
            leftImage={imagePath.icLock}
            rightImage={secureTextEntry ? imagePath.icPassword : imagePath.icPasswordShow}
            label="PASSWORD"
            placeholder="ENTER_YOUR_PASSWORD"
            style={{ marginBottom: verticalScale(24) }}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            onPressRight={() => setSecureTextEntry(!secureTextEntry)}
          />
          <RememberMe onPressForgot={() => alertFunction("Password", "Forgot Password")} />
          <CustomButton isLoading={isLoading} label="SIGNUP" onPress={onSignup} />
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
}

export default Signup;
