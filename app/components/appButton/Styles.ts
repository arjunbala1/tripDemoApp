import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';
import { widthInPercent } from '../../utilities/helpers';

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        padding: 10,
        gap: 8,
        borderRadius: Constants.BUTTON_BORDER_RADIUS,
        borderWidth: 1,
        borderColor: COLORS.borderColor,
    },
    icon:{
        width: widthInPercent(6),
        height: widthInPercent(6),
    }
})

export default styles;