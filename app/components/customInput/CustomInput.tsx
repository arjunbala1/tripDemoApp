import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './Styles';
import CustomText from '../customText/CustomText';
import GlobalStyles from '../../utilities/GlobalStyles';
import COLORS from '../../utilities/colors';

type CustomInputProps = {
	title: string;
	placeholder?: string;
	errorMessage?: string;
	onChangeText: (text: string) => void;
	onBlur?: () => void;
	secureTextEntry?: boolean;
};

const CustomInput = ({
	title,
	placeholder,
	errorMessage,
	onChangeText,
	onBlur,
	secureTextEntry,
}: CustomInputProps) => (
	<View style={[styles.container, GlobalStyles.shadow]}>
		<CustomText text={title} variant='mediumBold' style={styles.title} />
		<TextInput
			style={[styles.input, errorMessage ? styles.inputError : null]}
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
