import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: Constants.BUTTON_BORDER_RADIUS,
        paddingVertical: 24,
        borderRadius: Constants.BUTTON_BORDER_RADIUS,
    },
});

export default styles;
