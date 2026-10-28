import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ICONS from '../../utilities/Images';
import CustomText from '../customText/CustomText';
import COLORS from '../../utilities/colors';
import styles from './Styles';
import GlobalStyles from '../../utilities/GlobalStyles';

type AppButtonProps = {
    text: string;
    icon?: keyof typeof ICONS;
    variant?: string;
    onPress: () => void;
};
const AppButton = ({
	text,
	icon,
    variant,
    onPress
}: AppButtonProps) => (

    <Pressable onPress={onPress} style={[styles.button, GlobalStyles.shadow]}>
        {icon && <Image source={icon} style={styles.icon} />}
      <CustomText variant='mediumBold' text={text} color={COLORS.appText} />
    </Pressable>
  ) 


export default AppButton

