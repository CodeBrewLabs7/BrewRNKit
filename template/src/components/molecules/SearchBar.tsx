import { ImageContainer, TextContainer } from "@components/atoms";
import Colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale } from "@screens/Onboarding/scaling";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

type SectionProps = PropsWithChildren<{
    title: string;
    style?: object,
    textStyle?: object
}>;

function SearchBar({title, style, textStyle}:SectionProps): React.JSX.Element {
    return (
        <View
            style={{...styles.container, ...style}}
        >
            <ImageContainer source={imagePath.icSearch} />
            <TextContainer style={{...styles.titleStyle, ...textStyle}} text={title} />
        </View>
    );
}
export default React.memo(SearchBar)

const styles = StyleSheet.create({

    container: {
        height: moderateScale(56),
        borderWidth: moderateScale(1.2),
        borderColor: Colors.borderColor,
        borderRadius: moderateScale(36),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(12)
    },
    titleStyle: {
        fontSize: scale(14),
        fontFamily: fontFamily.regular,
        color: Colors.black50,
        marginLeft: moderateScale(16)
    },
});
