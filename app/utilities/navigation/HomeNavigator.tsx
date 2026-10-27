import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/HomeScreen';

export type HomeStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
