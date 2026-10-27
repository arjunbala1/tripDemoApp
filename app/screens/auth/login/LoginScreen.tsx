import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../../utilities/navigation/AuthNavigator';
import type { RootStackParamList } from '../../../utilities/navigation/RootNavigator';
import FooterButton from '../../../components/footerButton/FooterButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import ICONS from '../../../utilities/Images';
import styles from './Styles';
import CustomText from '../../../components/customText/CustomText';
import CustomInput from '../../../components/customInput/CustomInput';
import { isValidEmail, isValidPassword, MIN_PASSWORD_LENGTH } from '../../../utilities/helpers';
import colors from '../../../utilities/colors';

type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'Login'>,
  NativeStackScreenProps<RootStackParamList>
>;

function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'Email is required';
    } else if (!isValidEmail(value)) {
      error = 'Enter a valid email address';
    }
    setEmailError(error);
    return error === '';
  };

  const validatePassword = (value: string) => {
    let error = '';
    if (!value) {
      error = 'Password is required';
    } else if (!isValidPassword(value)) {
      error = `Password must be at least ${MIN_PASSWORD_LENGTH} characters with a letter and a number`;
    }
    setPasswordError(error);
    return error === '';
  };

  const onFooterAction = () => {
    // Run both so every error shows at once.
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    navigation.replace('HomeStack');
    // Placeholder action for the footer button.
    console.log('Footer button pressed');
  }
  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={ICONS.APP_ICON}
          style={styles.logo}
        />
        <CustomText text="Welcome back" variant="largeBold" style={styles.title} />
        <CustomText text="Log in to plan a trip and follow your route turn by turn." />
        <CustomInput
          title="Email"
          placeholder="you@example.com"
          errorMessage={emailError}
          onChangeText={(text) => {
            setEmail(text);
            if (emailError) {
              setEmailError('');
            }
          }}
          onBlur={() => validateEmail(email)}
        />
        <CustomInput
          title="Password"
          placeholder="Enter your password"
          secureTextEntry
          errorMessage={passwordError}
          onChangeText={(text) => {
            setPassword(text);
            if (passwordError) {
              setPasswordError('');
            }
          }}
          onBlur={() => validatePassword(password)}
        />
        <CustomText color={colors.appPrimary} text="Forgot your password?" variant='mediumBold' onPress={() => navigation.navigate('ForgotPassword')} />
      </View>
      <FooterButton
        title={'Log In'}
        onPress={onFooterAction}
        extraContent={
          <View style={styles.footerTextContainer}>
            <CustomText text="New to Wayfare?" />
            <CustomText variant='mediumBold' text="Create an account" onPress={() => navigation.navigate('Signup')} />
          </View>
        }
      />

    </SafeAreaView>
  );
}



export default LoginScreen;
