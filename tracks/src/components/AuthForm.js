import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Spacer>
				<Text h2>{headerText}</Text>
			</Spacer>
			<Spacer>
				<Input
					label='Email'
					value={email}
					onChangeText={(newEmail) => {
						setEmail(newEmail);
					}}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer>

			<Spacer>
				<Input
					secureTextEntry
					label='Password'
					value={password}
					onChangeText={(newPassword) => {
						setPassword(newPassword);
					}}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer>
			{errorMessage ? (
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title={submitButtonText}
					onPress={() => {
						onSubmit({ email, password });
					}}
				/>
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 30,
	},
});

export default AuthForm;
