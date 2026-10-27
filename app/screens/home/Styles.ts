import { StyleSheet } from 'react-native';
import colors from '../../utilities/colors';
import Constants from '../../utilities/constants';
import { widthInPercent } from '../../utilities/helpers';
import COLORS from '../../utilities/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.appBG,
    },
    content: {
        flex: 1,
    },
    searchBox: {
        padding: Constants.APP_PADDING,
    },
    // Keeps the last rows clear of the absolutely positioned footer button
    listContent: {
        paddingBottom: 100,
    },
    title: {
        fontSize: 24,
        color: colors.appText,
    },
    icon: {
        width: widthInPercent(6),
        height: widthInPercent(6),
    },
    iconContainer:{
        padding: 6,
        backgroundColor: COLORS.appBG,
        borderRadius: 50,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Constants.APP_PADDING,
        gap: 12,
    },
    // Style for render Items
    listItemHeader: {
        paddingVertical: Constants.APP_PADDING,
    },
    listItem: {
        width: '100%',
        gap: Constants.APP_PADDING,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: Constants.APP_PADDING,
        backgroundColor: colors.white,
        borderBottomColor: colors.borderColor,
    },
    remainingListItem: {
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.borderColor,
    },
    firstItemStyle:{
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderTopLeftRadius: Constants.BUTTON_BORDER_RADIUS,
        borderTopRightRadius: Constants.BUTTON_BORDER_RADIUS,
    },
    listFooterSpace: {
        height: 30,
    },
    emptyContent:{
       top: 10
    }
});

export default styles;