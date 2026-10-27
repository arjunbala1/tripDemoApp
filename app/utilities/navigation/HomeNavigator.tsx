import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/homescreen/HomeScreen';
import RoutePreviewScreen from '../../screens/home/routepreview/RoutePreviewScreen';
import colors from '../colors';

export type HomeStackParamList = {
  Home: undefined;
  RoutePreview: { pickup: string; dropoff: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.white } }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RoutePreview" component={RoutePreviewScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
