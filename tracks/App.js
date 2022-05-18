import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import DetailScreen from './src/screens/DetailScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen,
	}),
	mainFlow: createStackNavigator({
		TrackList: DetailScreen,
	}),
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<AuthProvider>
			<SafeAreaProvider>
				<App
					ref={(navigator) => {
						setNavigator(navigator);
					}}
				/>
			</SafeAreaProvider>
		</AuthProvider>
	);
};
