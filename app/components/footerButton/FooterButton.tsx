import React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import { widthInPercent } from '../../utilities/helpers';
import COLORS from '../../utilities/colors';
import Constants from '../../utilities/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type FooterButtonProps = {
	title: string;
    iconName?: string;
	onPress: () => void;
	extraContent?: React.ReactNode;
};

export default function FooterButton({title, iconName, onPress, extraContent }: FooterButtonProps) {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.mainContainer, { paddingBottom: Constants.APP_PADDING + insets.bottom }]}>
            <Pressable onPress={onPress} style={styles.button}>
                {iconName && <Image source={{uri: iconName}} style={{width: 20, height: 20, marginRight: 8}} />}
                <Text style={styles.title}>{title}</Text>
            </Pressable>
            {extraContent}
        </View>
	);
}

const styles = StyleSheet.create({
    mainContainer:{
        width: widthInPercent(100),
        position: 'absolute',
        bottom: 0,
        padding: Constants.APP_PADDING,
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.borderColor,
    },
	button: {
		alignItems: 'center',
		backgroundColor: COLORS.appPrimary,
		borderRadius: Constants.BUTTON_BORDER_RADIUS,
		padding: Constants.APP_PADDING,
	},
	title: {
		color: COLORS.white,
		fontSize: 16,
		fontWeight: '600',
	},
});
