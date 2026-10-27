import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';

const styles = StyleSheet.create({
	container: {
	},
	title: {
		marginBottom: 6,
	},
	input: {
		borderWidth: 1,
		borderColor: COLORS.borderColor,
		borderRadius: Constants.BUTTON_BORDER_RADIUS,
		padding: 16,
        color: COLORS.appText,
        backgroundColor: COLORS.white,
	},
	inputBorderless: {
		borderWidth: 0,
		borderRadius: 0,
		padding: 0,
		backgroundColor: 'transparent',
	},
	inputError: {
		borderColor: '#D32F2F',
	},
	error: {
		marginTop: 4,
		color: '#D32F2F',
		fontSize: 12,
	},
});

export default styles;