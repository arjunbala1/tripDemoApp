import { Text, type TextProps, type TextStyle } from 'react-native';

export type CustomTextVariant =
	| 'large'
	| 'medium'
	| 'small'
    | 'extraLargeBold'
	| 'largeBold'
	| 'mediumBold'
	| 'smallBold';

export const variantStyles: Record<CustomTextVariant, TextStyle> = {
	large: { fontSize: 20, fontWeight: '400' },
	medium: { fontSize: 14, fontWeight: '400' },
	small: { fontSize: 12, fontWeight: '400' },
    extraLargeBold: { fontSize: 26, fontWeight: '900' },
	largeBold: { fontSize: 22, fontWeight: '900' },
	mediumBold: { fontSize: 14, fontWeight: '900' },
	smallBold: { fontSize: 12, fontWeight: '900' },
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
