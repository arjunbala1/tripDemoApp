import { Image, View } from 'react-native'
import React from 'react'
import styles from './Styles'
import ICONS from '../../utilities/Images'
import CustomText from '../customText/CustomText'

const HeaderComponent = () => {
    return (
        <View style={styles.container}>
            <Image source={ICONS.BACK} style={styles.backIcon} />
            <View style={styles.textContainer}>
                <CustomText text={'Where are you going?'} variant="largeBold" style={styles.title} />
                <CustomText text={'Step 1 of 2 · Set pickup and drop-off'} variant="medium" style={styles.title} />
            </View>
        </View>
    )
}

export default HeaderComponent

