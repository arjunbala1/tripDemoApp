import { Text, type TextProps, type TextStyle } from 'react-native';

export type CustomTextVariant =
	| 'large'
	| 'medium'
	| 'small'
	| 'largeBold'
	| 'mediumBold'
	| 'smallBold';

const variantStyles: Record<CustomTextVariant, TextStyle> = {
	large: { fontSize: 20, fontWeight: '400' },
	medium: { fontSize: 16, fontWeight: '400' },
	small: { fontSize: 12, fontWeight: '400' },
	largeBold: { fontSize: 20, fontWeight: '800' },
	mediumBold: { fontSize: 16, fontWeight: '800' },
	smallBold: { fontSize: 12, fontWeight: '800' },
};

type CustomTextProps = TextProps & {
	text: string;
	color?: string;
	variant?: CustomTextVariant;
};

export default function CustomText({ text, color, variant = 'medium', style, ...props }: CustomTextProps) {
	return (
		<Text {...props} style={[variantStyles[variant], style, { color }]}>
			{text}
		</Text>
	);
}
