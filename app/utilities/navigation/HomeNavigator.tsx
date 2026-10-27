import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/homescreen/HomeScreen';

export type HomeStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Navigation" component={Navigation} /> */}
    </Stack.Navigator>
  );
}

export default HomeNavigator;
