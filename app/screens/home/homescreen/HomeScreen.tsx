import { useState } from 'react';
import { FlatList, Image, StatusBar, View } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../../utilities/navigation/HomeNavigator';
import type { RootStackParamList } from '../../../utilities/navigation/RootNavigator';
import colors from '../../../utilities/colors';
import FooterButton from '../../../components/footerButton/FooterButton';
import styles from './Styles';
import HeaderComponent from '../../../components/headerComponent/HeaderComponent';
import CustomText from '../../../components/customText/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import LocationSearchBox from '../../../templates/locationSearchBox/LocationSearchBox';
import AppButton from '../../../components/appButton/AppButton';
import ICONS from '../../../utilities/Images';

import { MOCKDATA, mockDataProps } from '../../../mockData';
import AlertCard from '../../../components/alertCard/AlertCard';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const renderItem = ({ item }: { item: mockDataProps }) => (
  <View style={[styles.listItem, item.id === 1 ? styles.firstItemStyle : styles.remainingListItem]}>
    <View style={styles.iconContainer}>
      <Image source={ICONS[item.tag]} style={styles.icon} />
    </View>
    <View>
      <CustomText variant='medium' text={item.name} color={colors.appText} />
      <CustomText variant='medium' text={item.address} color={colors.appText} />
    </View>

  </View>
);

function HomeScreen({ navigation }: Props) {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  const handleSwap = () => {
    setPickup(dropoff);
    setDropoff(pickup);
  };

  const onFooterAction = () => {
    console.log('Footer button pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <HeaderComponent />
        <FlatList
          style={styles.searchBox}
          contentContainerStyle={styles.listContent}
          data={MOCKDATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <>
              <LocationSearchBox
                pickup={pickup}
                dropoff={dropoff}
                onPickupChange={setPickup}
                onDropoffChange={setDropoff}
                onSwap={handleSwap}
              />
              <View style={styles.buttonContainer}>
                <AppButton
                  text="Use current"
                  icon={ICONS.LOCATION}
                  onPress={onFooterAction}
                />
                <AppButton
                  text="Pick on map"
                  icon={ICONS.MAP}
                  onPress={onFooterAction}
                />
              </View>
              <CustomText variant='mediumBold' text="Set as pickup" color={colors.appTextGrey} style={styles.listItemHeader} />
            </>
          }
          ListFooterComponent={() => (
            <View style={styles.listFooterSpace} />
          )}
          ListEmptyComponent={()=> (
            <View style={styles.emptyContent}>
              <AlertCard text='No saved places match that. Keep typing to use it as a custom address.'/>
              </View>
          )}
        />
      </View>
      <FooterButton disabled={!pickup || !dropoff} title={'Next'} onPress={onFooterAction} />
    </SafeAreaView>
  );
}



export default HomeScreen;
