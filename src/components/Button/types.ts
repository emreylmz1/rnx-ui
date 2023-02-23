import { CSSProperties } from 'react'
import { ButtonProps, ViewProps } from 'react-native'
import { GenerelTypes } from '../../types'

export type CButtonProps = Omit<ButtonProps, 'title'> & {
	label?: string
	radius?: number
	styles?: {
		root: CSSProperties
	}
} & ViewProps &
	GenerelTypes
