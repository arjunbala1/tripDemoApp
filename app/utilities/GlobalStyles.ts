import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	// iOS uses shadow*, Android uses elevation; both are set so it renders on either platform.
	shadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 14,
	},
});

export default GlobalStyles;
