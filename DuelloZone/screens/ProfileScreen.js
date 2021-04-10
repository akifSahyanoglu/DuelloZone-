import React from 'react';
import { View, SafeAreaView, StyleSheet, Button, StatusBar } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import Share from 'react-native-share';
import files from '../assets/filesBase64';

const ProfileScreen = () => {

const myCustomShare = async() => {
  const shareoptions = {
    message: ' tıkla uygulamayı indir sen de bizlere katıl',
    url: files.appLogo1
  }

  try {
    const ShareResponse = await Share.open(shareoptions);
  } catch(error) {
    console.log('Error => ', error)
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://scontent.fist4-1.fna.fbcdn.net/v/t1.0-9/56917748_2291931497756329_794374911727501312_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=kbsMdvQGTwIAX-5g9bv&_nc_ht=scontent.fist4-1.fna&oh=66dc1c54fb374bf180c98744ba0700c5&oe=6047EA53'
            }}
            size={70}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 5,
              marginBottom: 5,
            }]}>Akif Sahyanğlu</Title>
            <Caption style={styles.caption}>@akfshyno</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> Hatay, Türkiye</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> 05554446677</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>akfshyno@gmail.com</Text>
        </View>
      </View>

      
       <View style={styles.menuWrapper}>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Arkadaşlarınıza Önerin</Text>
          </View>
        </TouchableRipple>
          </View> 
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});




