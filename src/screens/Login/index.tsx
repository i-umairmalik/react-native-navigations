import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const Login = ({navigation}: any) => {
  const handleHomePress = () => {
    console.log('home button clicked');
    navigation.replace('DrawerNavigationRoutes');
  };
  const handleRegisterPress = () => {
    console.log('register button clicked');
    navigation.navigate('Register');
  };
  return (
    <View style={styles.mainBody}>
      <Text>Login</Text>
      <View style={styles.SectionStyle}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleRegisterPress}>
          <Text style={styles.registerTextStyle}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SectionStyle}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleHomePress}>
          <Text style={styles.registerTextStyle}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Login.propTypes = {};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    marginBottom: 50,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 80,
    width: 120,
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Login;
