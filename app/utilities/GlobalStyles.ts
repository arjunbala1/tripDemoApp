import { StyleSheet } from 'react-native';
import COLORS from './colors';

const GlobalStyles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	// iOS uses shadow*, Android uses elevation; both are set so it renders on either platform.
	shadow: {
		shadowColor: COLORS.appText,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 10,
		elevation: 1,
	},
});

export default GlobalStyles;
