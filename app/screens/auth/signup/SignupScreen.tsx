import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../../utilities/navigation/AuthNavigator';
import styles from './Styles';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

function SignupScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Button title="Go to Login" onPress={() => navigation.goBack()} />
    </View>
  );
}



export default SignupScreen;
