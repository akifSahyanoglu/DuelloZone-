import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfileScreen = () => {

    const [image, setImage] = useState('https://scontent.fist4-1.fna.fbcdn.net/v/t1.0-9/56917748_2291931497756329_794374911727501312_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=kbsMdvQGTwIAX-5g9bv&_nc_ht=scontent.fist4-1.fna&oh=66dc1c54fb374bf180c98744ba0700c5&oe=6047EA53');
    const {colors} = useTheme();

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true, 
            compressImageQuality: 0.7
          }).then(image => {
            console.log(image);
            setImage(image.path);
            this.bs.current.snapTo(1)
          });
    }
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
          }).then(image => {
            console.log(image);
            setImage(image.path);
            this.bs.current.snapTo(1)
          });
    }
    
    renderInner = () => (
       <View style={styles.panel}>
           <View style={{alignItems:'center'}}>
            <Text style={styles.panelTitle}>Fotoğraf yükleyin</Text>
            <Text style={styles.panelSubtitle}>Profil Fotoğrafı seçin</Text>
           </View>
           <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
               <Text style={styles.panelButtonTitle}>Fotoğraf Çek</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
               <Text style={styles.panelButtonTitle}>Galeriden Seç</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.panelButton}
           onPress={() => this.bs.current.snapTo(1)}
           >
               <Text style={styles.panelButtonTitle}>Iptal</Text>
           </TouchableOpacity>
       </View>
    );
    renderHeader = () => (
        <View style={styles.header}>
           <View style={styles.panelHeader}>
               <View style={styles.panelHandle} />
            </View> 
        </View>
    );

    bs = React.createRef();
    fall = new Animated.Value(1);
    
    return (
        <View style={styles.container}>
            <BottomSheet 
            ref={this.bs}
            snapPoints= {[330, 0]}
            initialSnap={1}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            
            callbackNode={this.fall}
            enabledGestureInteraction={true}
            />
            <Animated.View style={{ margin: 20 ,
            opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
            
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground
                                source={{
                                    uri: image,
                                }}
                                style={{height:80 , width:80}}
                                imageStyle={{borderRadius: 15}}
                                >
                                    <View style={{
                                        flex: 1,
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}>
                                        <Icon name="camera" size={25} color="#fff" style={{
                                            opacity: 0.4,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }}
                                        
                                        />
                                    </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{marginTop:10, fontSize:18}}> 
                        Akif Sahyanğlu
                    </Text>
                </View>
                <View style={styles.action}>
                   <FontAwesome 
                   name="user-o"
                   color={colors.text}
                   size= {20}
                   />
                   <TextInput 
                   placeholder="İsim"
                   placeholderTextColor="#666666"
                   style={[styles.textInput, {
                       color: colors.text
                   }]}
                   autoCorrect={false}
                   />                           
                </View>
                <View style={styles.action}>
                   <FontAwesome 
                   name="user-o"
                   color={colors.text}
                   size= {20}
                   />
                   <TextInput 
                   placeholder="Soy İsim"
                   placeholderTextColor="#666666"
                   style={[styles.textInput, {
                       color: colors.text
                   }]}
                   autoCorrect={false}
                   />                           
                </View>
                <View style={styles.action}>
                   <Feather 
                   name="phone"
                   color={colors.text}
                   size= {20}
                   />
                   <TextInput 
                   placeholder="Telefon Numarası"
                   placeholderTextColor="#666666"
                   keyboardType='number-pad'
                   style={[styles.textInput, {
                       color: colors.text
                   }]}
                   autoCorrect={false}
                   />                           
                </View>
                <View style={styles.action}>
                   <FontAwesome 
                   name="envelope-o"
                   color={colors.text}
                   size= {20}
                   />
                   <TextInput 
                   placeholder="Email"
                   placeholderTextColor="#666666"
                   keyboardType='email-address'
                   style={[styles.textInput, {
                       color: colors.text
                   }]}
                   autoCorrect={false}
                   />                           
                </View>
                <View style={styles.action}>
                   <Icon
                   name="map-marker-outline"
                   color={colors.text}
                   size= {20}
                   />
                   <TextInput 
                   placeholder="Şehir"
                   placeholderTextColor="#666666"
                   style={[styles.textInput, {
                       color: colors.text
                   }]}
                   autoCorrect={false}
                   />                           
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                    <Text style={styles.panelButtonTitle}>Profili Güncelle</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};


export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#B376F5',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});
