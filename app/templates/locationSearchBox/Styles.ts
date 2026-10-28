import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';
import { widthInPercent } from '../../utilities/helpers';

const DOT_SIZE = 16;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.borderColor,
		borderRadius: Constants.BUTTON_BORDER_RADIUS * 2,
		padding: Constants.APP_PADDING,
		gap: 12,
	},
	indicatorColumn: {
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingVertical: 8,
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
		borderRadius: 4,
		backgroundColor: COLORS.appText,
	},
	line: {
		flex: 1,
		width: 4,
		marginVertical: 4,
		borderRadius: 2,
		backgroundColor: COLORS.borderColor,
	},
	fields: {
		flex: 1,
	},
	field: {
		paddingVertical: 8,
		gap: 4,
	},
	fieldRow:{
		paddingVertical: 8,
		gap: 8,
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	divider: {
		alignSelf: 'stretch',
		height: 2,
		backgroundColor: COLORS.borderColor,
		marginVertical: 8,
	},
	swapButton: {
		alignSelf: 'flex-start',
		marginTop: 8,
		width: widthInPercent(10),
		height: widthInPercent(10),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: Constants.BUTTON_BORDER_RADIUS,
		backgroundColor: COLORS.appBG,
	},
	swapIcon: {
		width: widthInPercent(5),
		height: widthInPercent(5),
		resizeMode: 'contain',
	},
	clearButtonContainer:{
		padding: widthInPercent(2),
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.appBG,
	},
	clearButton:{
		width: widthInPercent(4),
		height: widthInPercent(4),
	}
});

export default styles;
