import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomText from '../customText/CustomText';
import styles from './Styles';

type FooterButtonProps = {
	title: string;
	iconName?: string;
	onPress: () => void;
	disabled?: boolean;
	extraContent?: React.ReactNode;
};

const defaultData: FooterButtonProps = {
	title: 'Continue',
	onPress: () => {},
	disabled: false,
	extraContent: null,
};

export default function FooterButton({ title, iconName, onPress, disabled, extraContent }: FooterButtonProps) {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.mainContainer, { paddingBottom: Constants.APP_PADDING + insets.bottom}]}>
			<TouchableOpacity activeOpacity={!disabled && 0.7}  onPress={onPress} style={[styles.button, disabled && styles.disabledButton]} disabled={disabled}>
				{iconName && <Image source={{ uri: iconName }} style={{ width: 20, height: 20, marginRight: 8 }} />}
				<CustomText variant='mediumBold' color={COLORS.white} text={title} />
			</TouchableOpacity>
			{extraContent}
		</View>
	);
}
