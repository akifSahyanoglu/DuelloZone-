import React from 'react';
import {
    View,
    StyleSheet,
    Button,
} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,

} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../components/contex';

export function DrawerContent(props) {

    const paperTheme = useTheme();

   const { signOut, toggleTheme } = React.useContext(AuthContext)

   
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://scontent.fist4-1.fna.fbcdn.net/v/t1.0-9/56917748_2291931497756329_794374911727501312_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=kbsMdvQGTwIAX-5g9bv&_nc_ht=scontent.fist4-1.fna&oh=66dc1c54fb374bf180c98744ba0700c5&oe=6047EA53'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Ako Baba</Title>
                                <Caption style={styles.caption}>@akfshyno</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="people-circle-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Profil"
                    onPress={() => {props.navigation.navigate('Profile')}}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="information-circle-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Gizlilik"
                    onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                />
                
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="help-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Yardım"
                    onPress={() => {props.navigation.navigate('YardimScreen')}}
                />
                    </Drawer.Section>
                    <Drawer.Section title="Tercihler">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Gece Modu</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Çıkış Yap"
                    onPress={() => {signOut() }}
                />
            </Drawer.Section>

        </View>
    );
};
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontFamily: 'Roboto-Regular',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
