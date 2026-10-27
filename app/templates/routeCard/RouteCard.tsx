import { View } from 'react-native';
import CustomText from '../../components/customText/CustomText';
import COLORS from '../../utilities/colors';
import styles from './Styles';

type RouteCardProps = {
	pickup: string;
	dropoff: string;
};

export default function RouteCard({ pickup, dropoff }: RouteCardProps) {
	return (
		<View style={styles.container}>
			<View style={styles.indicatorColumn}>
				<View style={styles.pickupDot} />
				<View style={styles.line} />
				<View style={styles.dropoffSquare} />
			</View>
			<View style={styles.fields}>
				<CustomText variant="mediumBold" text={pickup} color={COLORS.appText} />
				<CustomText variant="mediumBold" text={dropoff} color={COLORS.appText} />
			</View>
		</View>
	);
}
