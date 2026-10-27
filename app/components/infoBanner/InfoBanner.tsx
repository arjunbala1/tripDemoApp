import { View } from 'react-native';
import CustomText from '../customText/CustomText';
import COLORS from '../../utilities/colors';
import styles from './Styles';

type InfoBannerProps = {
	text: string;
};

export default function InfoBanner({ text }: InfoBannerProps) {
	return (
		<View style={styles.container}>
			<CustomText variant="mediumBold" text="!" color={COLORS.white} style={styles.icon} />
			<CustomText variant="mediumBold" text={text} color={COLORS.white} />
		</View>
	);
}
