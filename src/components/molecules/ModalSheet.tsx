import { ImageContainer, TextContainer } from "@components/atoms";
import Colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { useDispatch, useSelector } from "@redux/hooks";
import types from "@redux/types";
import { moderateScale, verticalScale } from "@screens/Onboarding/scaling";
import { changeLanguage } from "@utils/i18nHelpers";
import { changeTheme } from "@utils/themeHelpers";
import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import {
  Modal,
  ModalProps,
  Pressable,
  StyleSheet,
  Switch,
  View,
  useColorScheme,
} from "react-native";
import { storage } from "src/services/apiService";

interface ModalSheetProps extends ModalProps {
  children?: ReactNode;
}

export interface ModalSheetRef {
  toggleSheet: () => void;
}

const ModalSheet = forwardRef<ModalSheetRef, ModalSheetProps>((props, ref) => {
  const [isVisible, setVisible] = useState(false);

  const isDarkMode = useColorScheme() === "dark";
  const { languages, defaultLanguage } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    toggleSheet() {
      setVisible(!isVisible);
    },
  }));

  const onPressLogout = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      //need time to close modal
      storage.clearAll();
      dispatch({ type: types.CLEAR_REDUX_STATE });
    }, 800);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      {...props}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: isDarkMode ? Colors.dark : Colors.light,
        }}
      >
        <View style={styles.headerView}>
          <View />
          <View
            style={{
              ...styles.horizontalLine,
              backgroundColor: isDarkMode ? Colors.white50 : Colors.gray2,
            }}
          />
          <Pressable onPress={() => setVisible(!isVisible)}>
            <ImageContainer source={imagePath.icClose} />
          </Pressable>
        </View>
        <>
          <View style={styles.modalView}>
            <View>
              <TextContainer
                style={{
                  fontFamily: fontFamily.semiBold,
                }}
                text="CHANGE_LANGUAGE"
              />

              {languages.map((val, i) => {
                return (
                  <Pressable
                    style={{
                      marginTop: verticalScale(8),
                    }}
                    key={String(i)}
                    onPress={() => changeLanguage(val)}
                  >
                    <TextContainer
                      text={val.name}
                      isDynamicText={true}
                      style={{
                        fontFamily:
                          defaultLanguage.sort_name == val.sort_name
                            ? fontFamily.semiBold
                            : fontFamily.regular,
                        color:
                          defaultLanguage.sort_name == val.sort_name
                            ? Colors.danger
                            : isDarkMode
                              ? Colors.white
                              : Colors.black,
                      }}
                    />
                  </Pressable>
                );
              })}
            </View>

            <View>
              <TextContainer
                style={{
                  fontFamily: fontFamily.semiBold,
                }}
                text="CHANGE_THEME"
              />
              <Switch
                value={isDarkMode}
                onChange={(val) => changeTheme(isDarkMode ? "light" : "dark")}
                style={{
                  marginVertical: verticalScale(8),
                  alignSelf: "flex-end",
                }}
              />
            </View>
          </View>

          <Pressable
            style={{ alignSelf: "center", marginVertical: verticalScale(16) }}
          >
            <TextContainer
              onPress={onPressLogout}
              text="LOGOUT"
              style={{
                color: Colors.danger,
                fontFamily: fontFamily.semiBold,
              }}
            />
          </Pressable>
        </>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    minHeight: "25%",
    marginTop: "auto",
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontalLine: {
    height: moderateScale(6),
    width: moderateScale(80),
    borderRadius: moderateScale(8),
    backgroundColor: "grey",
    alignSelf: "center",
  },
  modalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(8),
  },
});

export default ModalSheet;
