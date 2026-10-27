import React from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from './Styles';
import CustomText from '../../components/customText/CustomText';
import CustomInput from '../../components/customInput/CustomInput';
import COLORS from '../../utilities/colors';
import ICONS from '../../utilities/Images';
import GlobalStyles from '../../utilities/GlobalStyles';

type LocationSearchBoxProps = {
    pickup: string;
    dropoff: string;
    onPickupChange: (value: string) => void;
    onDropoffChange: (value: string) => void;
    onSwap: () => void;
};

const LocationSearchBox = ({
    pickup,
    dropoff,
    onPickupChange,
    onDropoffChange,
    onSwap,
}: LocationSearchBoxProps) => (
    <View style={styles.container}>
        <View style={styles.indicatorColumn}>
            <View style={styles.pickupDot} />
            <View style={styles.line} />
            <View style={styles.dropoffSquare} />
        </View>
        <View style={styles.fields}>
            <View style={styles.fieldRow}>
                <CustomInput
                    title='Pickup'
                    variant='mediumBold'
                    titleColor={COLORS.appPrimary}
                    borderless
                    value={pickup}
                    onChangeText={onPickupChange}
                    placeholder='Choose a starting point'
                    style={GlobalStyles.flex}
                />
                <Pressable onPress={() => onPickupChange('')} style={styles.clearButtonContainer}>
                    <Image resizeMode='contain' source={ICONS.CLOSE} style={styles.clearButton} />
                </Pressable>
            </View>
            <View style={styles.divider} />
            <View style={styles.fieldRow}>
                <CustomInput
                    title='Drop-off'
                    variant='mediumBold'
                    titleColor={COLORS.appTextGrey}
                    borderless
                    value={dropoff}
                    onChangeText={onDropoffChange}
                    placeholder='Choose a destination'
                    style={GlobalStyles.flex}
                />
                <Pressable onPress={() => onDropoffChange('')} style={styles.clearButtonContainer}>
                    <Image resizeMode='contain' source={ICONS.CLOSE} style={styles.clearButton} />
                </Pressable>
            </View>
        </View>
        <Pressable onPress={onSwap} style={styles.swapButton}>
            <Image source={ICONS.ARROWS} style={styles.swapIcon} />
        </Pressable>
    </View>
);

export default LocationSearchBox;
