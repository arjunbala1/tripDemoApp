import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Constants.APP_PADDING,
		paddingVertical: Constants.APP_PADDING,
	},
	divider: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.borderColor,
	},
	iconContainer: {
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.appBG,
		borderRadius: 20,
	},
	textContainer: {
		flex: 1,
		gap: 4,
	},
});

export default styles;
