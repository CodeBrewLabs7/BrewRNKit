import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { useDispatch, useSelector } from "@redux/hooks";
import types from "@redux/types";
import changeLanguage from "@utils/i18nHelpers";
import { moderateScale, verticalScale } from "@utils/scaling";
import changeTheme from "@utils/themeHelpers";
import React, { ReactNode, forwardRef, useImperativeHandle, useState } from "react";
import { Modal, ModalProps, Pressable, Switch, View } from "react-native";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { storage } from "src/services/apiService";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    minHeight: "25%",
    marginTop: "auto",
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
    shadowColor: theme.colors.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    backgroundColor: theme.colors.background,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontalLine: {
    height: moderateScale(6),
    width: moderateScale(80),
    borderRadius: moderateScale(8),
    alignSelf: "center",
    backgroundColor: theme.colors.opacity50,
  },
  modalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(8),
  },
  textStyle: (isSelected: boolean) => ({
    fontFamily: isSelected ? fontFamily.semiBold : fontFamily.regular,
    color: isSelected ? theme.colors.danger : theme.colors.typography,
  }),
  logoutText: {
    color: theme.colors.danger,
    fontFamily: fontFamily.semiBold,
  },
}));

interface ModalSheetProps extends ModalProps {
  children?: ReactNode;
}

export interface ModalSheetRef {
  toggleSheet: () => void;
}

const ModalSheet = forwardRef<ModalSheetRef, ModalSheetProps>((props, ref) => {
  const [isVisible, setVisible] = useState(false);
  const { languages, defaultLanguage } = useSelector((state) => state.settings);

  const isDarkMode = UnistylesRuntime.themeName === "dark";
  const dispatch = useDispatch();
  const { styles } = useStyles(stylesheet);

  useImperativeHandle(ref, () => ({
    toggleSheet: () => {
      setVisible(!isVisible);
    },
  }));

  const onPressLogout = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      // need time to close modal
      storage.clearAll();
      dispatch({ type: types.CLEAR_REDUX_STATE });
    }, 800);
  };

  return (
    <Modal animationType="slide" transparent visible={isVisible} {...props}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View />
          <View style={styles.horizontalLine} />
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
              {languages.map((val) => (
                <Pressable
                  style={{
                    marginTop: verticalScale(8),
                  }}
                  key={String(val.sortName)}
                  onPress={() => changeLanguage(val)}
                >
                  <TextContainer
                    text={val.name}
                    isDynamicText
                    style={styles.textStyle(defaultLanguage.sortName === val.sortName)}
                  />
                </Pressable>
              ))}
            </View>
            <View>
              <TextContainer style={{ fontFamily: fontFamily.semiBold }} text="CHANGE_THEME" />
              <Switch
                value={isDarkMode}
                onChange={() => changeTheme(isDarkMode ? "light" : "dark")}
                style={{
                  marginVertical: verticalScale(8),
                  alignSelf: "flex-end",
                }}
              />
            </View>
          </View>
          <Pressable style={{ alignSelf: "center", marginVertical: verticalScale(16) }}>
            <TextContainer onPress={onPressLogout} text="LOGOUT" style={styles.logoutText} />
          </Pressable>
        </>
      </View>
    </Modal>
  );
});

export default React.memo(ModalSheet);
