import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    Dimensions,
    StyleSheet,
    StatusBar,
    Alert,
    Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SocialButton from '../components/SocialButton';
import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/contex';

import Users from '../model/users';


const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        userName: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,

    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                userName: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        }
        else {
            setData({
                ...data,
                userName: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    }
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                isValidUser: false,
            });
        }
    }
    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.userName.length == 0 || data.password.length == 0 ) {
            Alert.alert('Hatalı Giriş!', 'Kullanıcı adı veya şifre boş bırakılamaz.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Hatalı Giriş!', 'Kullanıcı adı veya şifre hatalı.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#B376F5' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}>
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Kullanıcı Adı</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='Kullanıcı Adı Giriniz'
                        placeholderTextColor= "#666666"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize= "none"
                        
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>

                        : null}
                </View>
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Kullanıcı adı en az 4 karakterden oluşmalıdır!</Text>
                    </Animatable.View>
                }
                <Text style={[styles.text_footer, { 
                    color: colors.text,
                    marginTop: 35 }]}>Şifre</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='Şifre Giriniz'
                        placeholderTextColor= "#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize= "none"
                        onChangeText={(val) => handlePasswordChange(val)}

                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />}
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Şifre en az 8 karakterden oluşmalıdır!</Text>
                    </Animatable.View>
                }

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { loginHandle(data.userName, data.password) }}
                    >
                        <LinearGradient
                            colors={['#B376F5', '#B376F5']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Giriş Yap</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: '#B376F5',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={styles.textSignUp}>Kayıt ol</Text>
                    </TouchableOpacity>

                   <SocialButton 
                    buttonTitle= "Facebook ile giriş yap"
                    btnType= "facebook"
                    color='#4867aa'
                    backgroundColor="#e6eaf4"
                    onPress= {() => {}}
                   /> 
                    <SocialButton 
                    buttonTitle= "Google ile giriş yap"
                    btnType= "google"
                    color='#de4d41'
                    backgroundColor="#f5e7ea"
                    onPress= {() => {}}
                   /> 
                </View>
            </Animatable.View>
        </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B376F5'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#B376F5',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,

        fontWeight: 'bold',
        fontFamily: 'Roboto-Regular.ttf',
        color: '#fff'
    },
    textSignUp: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular.ttf',
        color: '#B376F5'
    },
});