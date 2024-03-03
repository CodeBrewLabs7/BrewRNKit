//import liraries
import { ImageContainer, TextContainer, WrapperContainer } from '@components/atoms';
import CustomButton from '@components/atoms/ButtonContainer';
import { CustomTextInput } from '@components/molecules';
import AuthHeader from '@components/molecules/AuthHeader';
import imagePath from '@constants/imagePath';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { verticalScale } from '@screens/Onboarding/scaling';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AuthStackParamList } from 'src/navigations/Routes';

const Signup = (): React.JSX.Element => {
    const navigation = useNavigation<NavigationProp<AuthStackParamList>>()

    const [email, setEmail] = useState('')
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [rememberMe, setRememberMe] = useState(true)

    return (
        <WrapperContainer>
        
                <View style={styles.container}>
                    <AuthHeader
                        title='CREATE_AN_ACCOUNT'
                        description='WELCOME_PLEASE_ENTER_YOUR_DETAILS'
                    />
                    <CustomTextInput
                        leftImage={imagePath.icUser}
                        label='NAME'
                        placeholder='ENTER_YOUR_NAME'
                        style={{ marginBottom: verticalScale(16) }}
                        onChangeText={setEmail}
                    />
                    <CustomTextInput
                        leftImage={imagePath.icEmail}
                        label='EMAIL'
                        placeholder='ENTER_YOUR_EMAIL'
                        style={{ marginBottom: verticalScale(16) }}
                        keyboardType='email-address'
                        onChangeText={setEmail}
                    />
                    <CustomTextInput
                        leftImage={imagePath.icLock}
                        rightImage={secureTextEntry ? imagePath.icPassword : imagePath.icPasswordShow}
                        label='PASSWORD'
                        placeholder='ENTER_YOUR_PASSWORD'
                        style={{ marginBottom: verticalScale(16) }}
                        keyboardType='email-address'
                        onChangeText={setEmail}
                        secureTextEntry={secureTextEntry}
                        onPressRight={() => setSecureTextEntry(!secureTextEntry)}
                    />
                    <View style={styles.flexRow}>
                        <Pressable onPress={()=>setRememberMe(!rememberMe)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ImageContainer
                                source={rememberMe? imagePath.icCheck: imagePath.icUnchek}
                                style={{ marginRight: verticalScale(12) }}
                            />
                            <TextContainer text={'REMEBER_ME'} />
                        </Pressable>
                        <TextContainer text={'FORGOT_PASSWORD'} />
                    </View>
                    <CustomButton label='SIGNUP' onPress={() => navigation.navigate('Signup', { email })} />
                </View>

        </WrapperContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(24)
    }
});

export default Signup;
