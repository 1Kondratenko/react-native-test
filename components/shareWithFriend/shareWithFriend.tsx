import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
export default function ShareWithFriend(): React.JSX.Element {
  const share = () => {
    const url = 'https://simplestudy.ie/signup?referral_code=DszCPZIUrb';
    const description =
      'Signup to try SimpleStudy for your Exams! - Access Essays, Notes, Quizzes, and Exam Papers all for free! ' +
      url;
    const options = {
      message: description,
      url
    };
    Share.open(options)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.boldText}>Give Friends 20% Off Premium</Text>
        <Text style={styles.simpleText}>
          Earn <Text style={styles.decorated}>5€</Text> for every referral
        </Text>
        <Text style={styles.shareParagraph}>
          Earn on every referral, monthly payouts via PayPal, Revolut or Bank
          Transfer.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => share()}>
          <Text style={styles.buttonText}>Share with Friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  simpleText: {
    width: '100%',
    fontSize: 19,
    maxWidth: 313,
    marginBottom: 10,
  },
  shareParagraph: {
    fontSize: 12,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: '700',
    width: '100%',
    fontSize: 21,
    maxWidth: 313,
  },

  decorated: {
    textDecorationLine: 'underline',
    borderBottomColor: 'black',
  },
  button: {
    maxWidth: 160,
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});
