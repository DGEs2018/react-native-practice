import React from 'react';
import About from './allscreens/About';
import Details from './allscreens/Details';
import Home from './allscreens/Home';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Home />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	padding: 24
});
