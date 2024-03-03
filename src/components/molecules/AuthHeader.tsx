import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale, verticalScale } from "@screens/Onboarding/scaling";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

type SectionProps = PropsWithChildren<{
    title: string;
    description: string,
    style?: object,
}>;

function AuthHeader(props: SectionProps): React.JSX.Element {
    return (
        <>
            <View style={{ ...styles.headerStyle, ...props.style }}>
                <ImageContainer source={imagePath.icStar} />
                <ImageContainer 
                style={{ marginLeft: moderateScale(16), width: '100%' }} 
                source={imagePath.icLine} 
                resizeMode="cover"
                />
            </View>
            <TextContainer style={styles.titleStyle} text={props.title} />
            <TextContainer style={styles.descStyle} text={props.description} />
        </>
    );
}
export default React.memo(AuthHeader)

const styles = StyleSheet.create({

    headerStyle: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: verticalScale(32)
    },
    titleStyle: {
        fontSize: scale(27),
        fontFamily:fontFamily.semiBold
    },
    descStyle: {
        fontSize: scale(14),
        lineHeight: scale(27),
        marginTop: verticalScale(8),
        opacity: 0.5,
        marginBottom: verticalScale(24),
        fontFamily:fontFamily.regular
    }
});
