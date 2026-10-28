import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';

const ICON_SIZE = 20;

const styles = StyleSheet.create({
	container: {
		alignSelf: 'flex-start',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingVertical: 12,
		paddingHorizontal: Constants.APP_PADDING,
		backgroundColor: COLORS.appText,
		borderRadius: Constants.BUTTON_BORDER_RADIUS * 2,
	},
	icon: {
		width: ICON_SIZE,
		height: ICON_SIZE,
		lineHeight: ICON_SIZE - 2,
		textAlign: 'center',
		borderWidth: 1.5,
		borderColor: COLORS.white,
		borderRadius: ICON_SIZE / 2,
		overflow: 'hidden',
	},
});

export default styles;
