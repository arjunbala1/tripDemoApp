import { StyleSheet } from 'react-native';
import colors from '../../../utilities/colors';
import Constants from '../../../utilities/constants';
import { widthInPercent } from '../../../utilities/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBG,
  },
  title: {
    fontSize: 24,
    color: colors.appText,
  },
});

export default styles;