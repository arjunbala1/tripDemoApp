import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './Styles';
import CustomText, { variantStyles } from '../customText/CustomText';
import GlobalStyles from '../../utilities/GlobalStyles';
import COLORS from '../../utilities/colors';

type CustomInputProps = {
	title: string;
	value?: string;
	titleColor?: string;
	borderless?: boolean;
	placeholder?: string;
	errorMessage?: string;
	onChangeText: (text: string) => void;
	onBlur?: () => void;
	variant?: 'small' | 'medium' | 'large' | 'extraLargeBold' | 'smallBold' | 'mediumBold' | 'largeBold';
	secureTextEntry?: boolean;
	style?: object;
};

const CustomInput = ({
	title,
	value,
	titleColor,
	borderless,
	placeholder,
	errorMessage,
	onChangeText,
	onBlur,
	variant = 'medium',
	secureTextEntry,
	style,
}: CustomInputProps) => (
	<View style={[styles.container, !borderless && GlobalStyles.shadow, style]}>
		<CustomText text={title} variant='mediumBold' color={titleColor} style={styles.title} />
		<TextInput
			style={[
				styles.input,
				variantStyles[variant],
				borderless ? styles.inputBorderless : null,
				errorMessage ? styles.inputError : null,
			]}
			value={value}
			placeholder={placeholder}
			placeholderTextColor={COLORS.appTextGrey}
			onChangeText={onChangeText}
			onBlur={onBlur}
			secureTextEntry={secureTextEntry}
		/>
		{errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
	</View>
);



export default CustomInput;
