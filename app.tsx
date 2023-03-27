import { Button } from './src/components'

import { StyleSheet, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Button p={30} fw={'700'} color='#FFF' label='ISOLOVE' styles={{ root: { backgroundColor: 'red' } }} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
