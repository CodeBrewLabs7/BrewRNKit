import { WrapperContainer } from '@components/atoms';
import { TextContainer } from '@components/atoms';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { changeLanguage } from '@utils/i18nHelpers';
import { changeTheme } from '@utils/themeHelpers';
import React from 'react';
import { Button, Image, StyleSheet, View, useColorScheme } from 'react-native';
import imagePath from 'src/constants/imagePath';

import { AuthStackParamList } from 'src/navigations/Routes';
import { get } from 'src/services/apiService';


const Settings = (): React.JSX.Element => {
    const navigation = useNavigation<NavigationProp<AuthStackParamList, 'Signup'>>()

    const isDarkMode = useColorScheme() === 'dark';

    const hitApi = async () => {
        try {
            const res = await get('fetchUserss')
            console.log("res++++", res.data)
        } catch (error) {
            console.log("error+++", error)
        }
    }
    return (
        <WrapperContainer key={'2'}>
            <View style={styles.container}>

                <Image
                    resizeMode='contain'
                    source={isDarkMode ? imagePath.icDarkOct : imagePath.icLightOct}
                    style={{ height: 300, width: 300, alignSelf: 'center' }}
                />
                <TextContainer text={'title'} />
                <TextContainer text={'description'} style={{ marginVertical: 16 }} />

                <Button title='English' onPress={() => changeLanguage('en')} />
                <Button title='Arabic' onPress={() => changeLanguage('ar')} />
                <Button title='French' onPress={() => changeLanguage('fr')} />

                <Button title= {isDarkMode? 'Light': 'Dark'} onPress={() => changeTheme(isDarkMode ? 'light' : 'dark')} />
                <Button title='Signup' onPress={() => navigation.navigate('Signup', { name: 'Surinder', userId: 1 })} />

                <Button title='Hit Api' onPress={hitApi} />

            </View>
        </WrapperContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16

    },
});

//make this component available to the app
export default Settings;
