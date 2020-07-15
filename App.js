import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.content}>
				{/* To Do Form */}
				<View style={styles.list}>
					<FlatList></FlatList>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
