import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Context } from '../context/AuthContext';
import Spacer2 from '../components/Spacer2';
import Spacer from '../components/Spacer';

const DetailScreen = ({ navigation }) => {
	const { state, submit } = useContext(Context);
	const [dataDetail, setDataDetail] = useState({
		name: '',
		age: null,
		phone: null,
		gender: '',
		email: '',
	});
	return (
		<View style={styles.container}>
			<Spacer2>
				<Input
					label='Name'
					value={dataDetail.name}
					onChangeText={(newName) => {
						setDataDetail({ ...dataDetail, name: newName });
					}}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer2>
			<Spacer2>
				<Input
					label='Age'
					value={dataDetail.age}
					onChangeText={(newAge) => {
						setDataDetail({ ...dataDetail, age: newAge });
					}}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer2>
			<Spacer2>
				<Input
					label='Phone'
					value={dataDetail.phone}
					onChangeText={(newPhone) => {
						setDataDetail({ ...dataDetail, phone: newPhone });
					}}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer2>
			<Spacer2>
				<Input
					label='Gender'
					value={dataDetail.gender}
					onChangeText={(newGender) => {
						setDataDetail({ ...dataDetail, gender: newGender });
					}}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer2>
			<Spacer2>
				<Input
					label='Email'
					value={dataDetail.email}
					onChangeText={(newEmail) => {
						setDataDetail({ ...dataDetail, email: newEmail });
					}}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer2>
			<Spacer>
				<Button title='Submit' onPress={() => submit({ ...dataDetail })} />
			</Spacer>
		</View>
	);
};

DetailScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 50,
		paddingTop: 100,
	},
});

export default DetailScreen;
