import { useState } from 'react';
import { Image, Pressable, ScrollView, StatusBar, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { HomeStackParamList } from '../../../utilities/navigation/HomeNavigator';
import colors from '../../../utilities/colors';
import ICONS from '../../../utilities/Images';
import GlobalStyles from '../../../utilities/GlobalStyles';
import CustomText from '../../../components/customText/CustomText';
import FooterButton from '../../../components/footerButton/FooterButton';
import ModeSelector from '../../../components/modeSelector/ModeSelector';
import InfoBanner from '../../../components/infoBanner/InfoBanner';
import StepItem from '../../../components/stepItem/StepItem';
import RouteCard from '../../../templates/routeCard/RouteCard';
import { ROUTE_STEPS, ROUTE_SUMMARY, TRAVEL_MODES, type TravelMode } from '../../../mockData';
import styles from './Styles';

type Props = NativeStackScreenProps<HomeStackParamList, 'RoutePreview'>;

function RoutePreviewScreen({ navigation, route }: Props) {
  const { pickup, dropoff } = route.params;
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState<TravelMode>('Drive');

  const onStartNavigation = () => {
    console.log('Start navigation', { pickup, dropoff, mode });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Map placeholder: swap this View for a MapView later */}
      <View style={[styles.mapArea]}>
        <Pressable
          onPress={navigation.goBack}
          style={[styles.backButton, GlobalStyles.shadow]}
        >
          <Image source={ICONS.BACK} style={styles.backIcon} />
        </Pressable>
        <View style={styles.bannerContainer}>
          <InfoBanner text={ROUTE_SUMMARY.alert} />
        </View>
      </View>

      <View style={styles.sheet}>
        <View style={styles.handle} />
        <ScrollView
          contentContainerStyle={styles.sheetContent}
          showsVerticalScrollIndicator={false}
        >
          <CustomText variant="mediumBold" text="Fastest route" color={colors.appTextGrey} />
          <View style={styles.summaryRow}>
            <CustomText variant="extraLargeBold" text={ROUTE_SUMMARY.duration} color={colors.appText} />
            <CustomText
              variant="medium"
              text={`${ROUTE_SUMMARY.distance} · arrive ${ROUTE_SUMMARY.arrival}`}
              color={colors.appTextGrey}
            />
          </View>

          <ModeSelector options={TRAVEL_MODES} selected={mode} onSelect={setMode} />
          <RouteCard pickup={pickup} dropoff={dropoff} />

          <CustomText variant="mediumBold" text="Turn by turn" color={colors.appTextGrey} />
          <View>
            {ROUTE_STEPS.map((step, index) => (
              <StepItem key={step.id} step={step} isLast={index === ROUTE_STEPS.length - 1} />
            ))}
          </View>
        </ScrollView>
      </View>

      <FooterButton title="Start navigation" onPress={onStartNavigation} />
    </SafeAreaView>
  );
}

export default RoutePreviewScreen;
