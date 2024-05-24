import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";
import api from "./api";

const logo = require('../assets/applogo.jpg')
const SignUp = ({ navigation }) => {
    const [form, setForm] = useState({
        email: '',
        username: '',
        phone: '',
        password: '',
    });
    const handleSignup = async()=>{
        const {email,username,phone,password} = form;
        try {
            const res= await api.post('/signup',{
                email,username,phone,password
            });
            console.log('Signup Successful',res.data);
            Alert.alert("Success Signup Successful");
            navigation.navigate('login');
        } catch (error) {
            console.error('Signup Error!'); 
        }
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <View style={styles.header}>
                        <Image
                            alt="App Logo"
                            resizeMode="contain"
                            style={styles.headerImg}
                            source={logo}
                        />
                        <Text style={styles.title}>
                            Almost There!
                        </Text>

                        <Text style={styles.subtitle}>
                            Please fill the details
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Email</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={email => setForm({ ...form, email })}
                                keyboardType="email-address"
                                placeholder="Email"
                                placeholderTextColor='#6b7280'
                                style={styles.inputControl}
                                value={form.email}
                            />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Username</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={username => setForm({ ...form, username })}
                                keyboardType="default"
                                placeholder="Username"
                                placeholderTextColor='#6b7280'
                                style={styles.inputControl}
                                value={form.username}
                            />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Phone</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={phone => setForm({ ...form, phone })}
                                keyboardType="default"
                                placeholder="Phone"
                                placeholderTextColor='#6b7280'
                                style={styles.inputControl}
                                value={form.phone}
                            />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Password</Text>

                            <TextInput
                                autoCorrect={false}
                                onChangeText={password => setForm({ ...form, password })}
                                placeholder="Password"
                                placeholderTextColor='#6b7280'
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={form.password}
                            />
                        </View>

                        <View>
                            <TouchableOpacity
                                onPress={handleSignup}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>SignUp</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>

                <TouchableOpacity
                    onPress={() => (navigation.navigate('login'))}
                    style={{ marginTop: 'auto' }}
                >
                    <Text style={styles.formFooter}>
                        Already have an account?{' '}
                        <Text style={{ textDecorationLine: 'underline' }}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    title: {
        fontSize: 31,
        fontWeight: '700',
        color: 'black',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292'
    },
    // Header
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 36,
    },

    // Form
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#075eec',
        textAlign: 'center',
    },
    formFooter: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },

    //   Input
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
    },
    // Button 
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: 'black',
        borderColor: '#075eec',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },

})
export default SignUp;