import React from 'react';
import { View, Text} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import GecmisScreen from './GecmisScreen';
import EditProfileScreen from './EditProfileScreen';
import {useTheme} from 'react-native-paper';

const HomeStack = createStackNavigator();
const GecmisStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Ana Sayfa',
          tabBarColor: '#B376F5',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Gecmis"
        component={GecmisStackScreen}
        options={{
          tabBarLabel: 'Geçmiş',
          tabBarColor: '#B376F5',
          tabBarIcon: ({ color }) => (
            <Icon name="hourglass-outline" color={color} size={26} />
          ),
        }}
      /> 
     <Tab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Bildirimler',
          tabBarColor: '#B376F5',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
        }}
      />
     <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: '#B376F5',
          tabBarIcon: ({ color }) => (
            <Icon name="people-circle-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return(
<HomeStack.Navigator screenOptions={{
         headerStyle: {
          backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
          fontWeight: 'bold'
          }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Ana Sayfa',
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <Icon.Button name="ios-menu" 
            size={25} 
            color={colors.text}
            backgroundColor={colors.background}
            onPress={() => navigation.openDrawer()}></Icon.Button>
        </View>
        )
        }} />
</HomeStack.Navigator>
  )};
const NotificationStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return(
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
    <NotificationStack.Screen
      name="Bildirimler"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={colors.background} 
            color={colors.text}
            onPress={() => navigation.openDrawer()}
          />
          </View>
        ),
      }}
    />
  </NotificationStack.Navigator>
)};

 const GecmisStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return(
<GecmisStack.Navigator screenOptions={{
       headerStyle: {
        backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <GecmisStack.Screen name="Geçmiş Turnuvalar" component={GecmisScreen} options={{
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <Icon.Button name="ios-menu" 
            size={25} 
            backgroundColor={colors.background} 
            color={colors.text}
            onPress={() => navigation.openDrawer()}></Icon.Button>
          </View>
        )
        }} />
</GecmisStack.Navigator>
      )}; 


  const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return(
  <ProfileStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
         <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor= {colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={30}
                backgroundColor= {colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: '',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  )};