import { StyleSheet } from 'react-native';
import colors from '../../../utilities/colors';
import Constants from '../../../utilities/constants';
import { heightInPercent, widthInPercent } from '../../../utilities/helpers';

const SHEET_RADIUS = Constants.BUTTON_BORDER_RADIUS * 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBG,
    },
    mapArea: {
        flex: 1,
        backgroundColor: colors.borderColor,
    },
    backButton: {
        width: 48,
        height: 48,
        margin: Constants.APP_PADDING,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: Constants.BUTTON_BORDER_RADIUS,
    },
    backIcon: {
        width: widthInPercent(4),
        height: widthInPercent(4),
        resizeMode: 'contain',
    },
    bannerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: Constants.APP_PADDING,
    },
    sheet: {
        height: heightInPercent(62),
        backgroundColor: colors.white,
        borderTopLeftRadius: SHEET_RADIUS,
        borderTopRightRadius: SHEET_RADIUS,
        overflow: 'hidden',
    },
    handle: {
        alignSelf: 'center',
        width: 40,
        height: 4,
        marginTop: 10,
        borderRadius: 2,
        backgroundColor: colors.borderColor,
    },
    // Keeps the last step clear of the absolutely positioned footer button
    sheetContent: {
        padding: Constants.APP_PADDING,
        paddingBottom: 140,
        gap: Constants.APP_PADDING,
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
});

export default styles;
