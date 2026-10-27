import { StyleSheet } from 'react-native';
import { widthInPercent } from '../../utilities/helpers';
import Constants from '../../utilities/constants';
import colors from '../../utilities/colors';
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        padding: Constants.APP_PADDING,
        flexDirection: 'row',
        alignItems: 'center',
        gap: Constants.APP_PADDING,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
    },
    textContainer:{
        gap: 6,
    },
    backIcon:{
        width: widthInPercent(4),
        height: widthInPercent(4),
        resizeMode: 'contain',
    }
});

export default styles;