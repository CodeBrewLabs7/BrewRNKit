import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ApplicationStackParamList = {
	Startup: undefined;
	Example: undefined;
};

export type ApplicationScreenProps = NativeStackScreenProps<ApplicationStackParamList>;
