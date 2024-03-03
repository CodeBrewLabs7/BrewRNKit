import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale, verticalScale } from "@screens/Onboarding/scaling";
import React, { PropsWithChildren, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type SectionProps = PropsWithChildren<{
    onPressForgot: () => void,
}>;

function RememberMe(props: SectionProps): React.JSX.Element {
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    return (
        <>
            <View style={styles.flexRow}>
                <Pressable onPress={() => setRememberMe(!rememberMe)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ImageContainer
                        source={rememberMe ? imagePath.icCheck : imagePath.icUnchek}
                        style={{ 
                            marginRight: moderateScale(12),
                            height: moderateScale(14),
                            width:moderateScale(14)
                         }}
                         resizeMode="contain"
                        
                    />
                    <TextContainer style={styles.textStyle} text={'REMEBER_ME'} />
                </Pressable>
                <TextContainer style={styles.textStyle} onPress={props.onPressForgot} text={'FORGOT_PASSWORD'} />
            </View>
        </>
    );
}
export default React.memo(RememberMe)

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(24)
    },

    headerStyle: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: verticalScale(32)
    },
    textStyle: {
        fontSize: scale(12),
        fontFamily: fontFamily.medium,
        opacity: 0.6
    },

});
