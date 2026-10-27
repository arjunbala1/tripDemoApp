import { StyleSheet } from 'react-native';
import colors from '../../../utilities/colors';
import Constants from '../../../utilities/constants';
import { widthInPercent } from '../../../utilities/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBG,
    padding: Constants.APP_PADDING,
  },
  contentContainer: {
    marginTop: widthInPercent(10),
    gap: Constants.APP_PADDING,
  },
  logo: {
    width: widthInPercent(14),
    height: widthInPercent(14),
    // alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    color: colors.appText,
  },
  footerTextContainer:{
    marginTop: widthInPercent(2),
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 4,
  }
});

export default styles;