import React, { useContext } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { signOut } from 'firebase/auth';

import { auth } from '../config';
import { AuthenticatedUserContext} from '../providers/AuthenticatedUserProvider'





export const HomeScreen = () => {
  const { user } = useContext(AuthenticatedUserContext);
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user.email}!</Text>
      <Button title='Sign Out' onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#8758FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
