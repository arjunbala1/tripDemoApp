import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 12,
	},
	option: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 14,
		backgroundColor: COLORS.white,
		borderRadius: Constants.BUTTON_BORDER_RADIUS,
		borderWidth: 1,
		borderColor: COLORS.borderColor,
	},
	selectedOption: {
		backgroundColor: COLORS.appPrimaryLight,
		borderColor: COLORS.appPrimary,
	},
});

export default styles;
