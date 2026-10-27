import { View } from 'react-native';
import CustomText from '../customText/CustomText';
import COLORS from '../../utilities/colors';
import type { routeStepProps } from '../../mockData';
import styles from './Styles';

type StepItemProps = {
	step: routeStepProps;
	isLast?: boolean;
};

export default function StepItem({ step, isLast }: StepItemProps) {
	return (
		<View style={[styles.container, !isLast && styles.divider]}>
			<View style={styles.iconContainer}>
				<CustomText variant="largeBold" text={'↱'} color={COLORS.appText} />
			</View>
			<View style={styles.textContainer}>
				<CustomText variant="mediumBold" text={step.title} color={COLORS.appText} />
				<CustomText variant="medium" text={step.subtitle} color={COLORS.appTextGrey} />
			</View>
			<CustomText variant="mediumBold" text={step.distance} color={COLORS.appTextGrey} />
		</View>
	);
}
