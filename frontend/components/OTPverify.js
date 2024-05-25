import React,{useState} from 'react'
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
import {useNavigation , useRoute} from '@react-navigation/native';
import api from "./api";

const OTPverify = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {email,otp} = route.params;
    const [inputOtp,setInputOtp]=useState('');

    const handleVerifyOtp = async()=>{
        try
        {
            const res = await api.post('/verify-otp',{email,otp:inputOtp});
            if(res.data.success)
                {
                    Alert.alert("Otp Verified Successfully");
                    navigation.navigate('main');
                }
            else
            {
                console.log("OTP Verification failed! ");
            } 
        }
        catch(err)
        {
            console.log("Email OTP Verification Error!",err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Enter OTP</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                    value={inputOtp}
                    onChangeText={setInputOtp}
                />
                <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '80%'
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    input: {
        borderWidth: 1,
        padding: 8,
        marginBottom: 16
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 12,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    }
});

export default OTPverify