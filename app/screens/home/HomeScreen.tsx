import { Button, StyleSheet, Text, View } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../utilities/navigation/HomeNavigator';
import type { RootStackParamList } from '../../utilities/navigation/RootNavigator';
import colors from '../../utilities/colors';
import { t } from '../../utilities/localization';
import FooterButton from '../../components/footerButton/FooterButton';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

function HomeScreen({ navigation }: Props) {
  // Placeholder logout: swap back to the auth flow, which opens on Login.
  const handleLogout = () => {
    navigation.replace('AuthStack');
  };

  const onFooterAction = () => {
    // Placeholder action for the footer button.
    console.log('Footer button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('home')}</Text>
      <Button title={t('logout')} onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    color: colors.text,
  },
});

export default HomeScreen;
