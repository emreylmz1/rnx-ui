import { StyleSheet, Text, View } from 'react-native'
import { CButtonProps } from './types'

function Button({ label, ...props }: CButtonProps) {
	return (
		<View style={style(props).root}>
			<Text style={style(props).text}>{label}</Text>
		</View>
	)
}

export default Button

const style = (props: Omit<CButtonProps, 'borderRadius'>) =>
	StyleSheet.create({
		root: {
			borderRadius: props.radius || 12,
			paddingLeft: props.p || props.pl || props.px || 0,
			paddingRight: props.p || props.pr || props.px || 0,
			paddingTop: props.p || props.pt || props.py || 0,
			paddingBottom: props.p || props.pb || props.py || 0,
			marginLeft: props.m || props.ml || props.mx || 0,
			marginRight: props.m || props.mr || props.mx || 0,
			marginTop: props.m || props.mt || props.my || 0,
			marginBottom: props.m || props.mb || props.my || 0,
			backgroundColor: props.bg || '#FFF',
			...props?.styles?.root,
		} as CButtonProps,
		text: {
			borderRadius: 12,
			color: props.color || '#000',
			fontWeight: props.fw || '400',
		},
	})
