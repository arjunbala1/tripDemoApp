import { View } from 'react-native';
import CustomText from '../customText/CustomText';
import styles from './Styles';
import COLORS from '../../utilities/colors';

type AlertCardProps = {
	text: string;
};

export default function AlertCard({ text }: AlertCardProps) {
	return (
		<View style={styles.container}>
			<CustomText color={COLORS.appTextDarkGrey} text={text} variant="medium" />
		</View>
	);
}
