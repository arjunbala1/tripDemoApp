import { Pressable, View } from 'react-native';
import CustomText from '../customText/CustomText';
import COLORS from '../../utilities/colors';
import styles from './Styles';

type ModeSelectorProps<T extends string> = {
	options: readonly T[];
	selected: T;
	onSelect: (option: T) => void;
};

export default function ModeSelector<T extends string>({ options, selected, onSelect }: ModeSelectorProps<T>) {
	return (
		<View style={styles.container}>
			{options.map((option) => {
				const isSelected = option === selected;
				return (
					<Pressable
						key={option}
						onPress={() => onSelect(option)}
						style={[styles.option, isSelected && styles.selectedOption]}
					>
						<CustomText
							variant="mediumBold"
							text={option}
							color={isSelected ? COLORS.appPrimary : COLORS.appText}
						/>
					</Pressable>
				);
			})}
		</View>
	);
}
