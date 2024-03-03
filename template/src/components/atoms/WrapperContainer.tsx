//import liraries
import Colors from '@constants/colors';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native';

type SectionProps = PropsWithChildren<{
    style?: object,
    isSafeAreaView?: boolean
}>;

const WrapperContainer = ({
    children,
    style = {},
    isSafeAreaView = true
}: SectionProps): React.JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    if (isSafeAreaView) {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
                    ...style
                }}
            >
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                {children}
            </SafeAreaView>
        );
    } else {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
                    ...style
                }}
            >
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                {children}
            </View>
        )
    }
};

export default React.memo(WrapperContainer);
