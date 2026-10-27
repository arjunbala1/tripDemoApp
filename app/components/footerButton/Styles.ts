import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';

const styles = StyleSheet.create({
	mainContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		padding: Constants.APP_PADDING,
		backgroundColor: COLORS.white,
		borderTopWidth: 1,
		borderTopColor: COLORS.borderColor,
	},
	button: {
		alignItems: 'center',
		backgroundColor: COLORS.appPrimary,
		borderRadius: Constants.BUTTON_BORDER_RADIUS,
		padding: Constants.APP_PADDING,
	},
	title: {
		color: COLORS.white,
		fontSize: 16,
		fontWeight: '600',
	},
    disabledButton: {
        backgroundColor: COLORS.appTextGrey,
    }
});

export default styles;
