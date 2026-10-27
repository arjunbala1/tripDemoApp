import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import colors from '../colors';

export type RootStackParamList = {
  AuthStack: undefined;
  HomeStack: undefined;
};

const AppTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.white },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.white },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="AuthStack" component={AuthNavigator} />
        <Stack.Screen name="HomeStack" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
