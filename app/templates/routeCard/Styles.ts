import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';

const DOT_SIZE = 14;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 12,
		padding: Constants.APP_PADDING,
		backgroundColor: COLORS.appBG,
		borderRadius: Constants.BUTTON_BORDER_RADIUS,
	},
	indicatorColumn: {
		alignItems: 'center',
		paddingVertical: 4,
	},
	pickupDot: {
		width: DOT_SIZE,
		height: DOT_SIZE,
		borderRadius: DOT_SIZE / 2,
		backgroundColor: COLORS.appPrimary,
	},
	dropoffSquare: {
		width: DOT_SIZE,
		height: DOT_SIZE,
		borderRadius: 3,
		backgroundColor: COLORS.appText,
	},
	line: {
		flex: 1,
		width: 3,
		marginVertical: 4,
		borderRadius: 2,
		backgroundColor: COLORS.borderColor,
	},
	fields: {
		flex: 1,
		gap: 16,
	},
});

export default styles;
