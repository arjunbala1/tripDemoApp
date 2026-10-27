import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

export type RootStackParamList = {
  AuthStack: undefined;
  HomeStack: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AuthStack" component={AuthNavigator} />
        <Stack.Screen name="HomeStack" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
