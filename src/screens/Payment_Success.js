import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Payment_Success({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SafeAreaView>
                <View style={styles.headerPayment}>
                    <TouchableOpacity style={styles.goBackCart} onPress={() => navigation.navigate('CheckOut')} >
                        <Image source={require('../img/ArrowBack.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentPayment}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                        <ImageBackground style={styles.Silder} source={require('../img/Vector.png')} resizeMode='contain' >
                            <Image source={require('../img/ioe4.png')} />
                        </ImageBackground>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
                            Payment Success, Yayy!
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                            <Text style={{ textAlign: 'center', width: '80%', color: '#7A7A7A' }}>
                                we will send order details and invoice in
                                your contact no. and registered email
                            </Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40, gap: 20 }}>
                            <Text style={{ color: '#5A6CF3', fontWeight: 'bold', fontSize: 16 }}>
                                Check Details
                            </Text>
                            <Image source={require('../img/Arrow_3.png')} />

                        </View>
                        <TouchableOpacity style={{
                            marginTop: 40,
                            backgroundColor: '#5A6CF3',
                            padding: 20,
                            width: '100%',
                            borderRadius: 15
                        }} onPress={() => navigation.navigate('Payment_Success')}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: '500',
                                fontSize: 18,
                            }}>
                                Download Invoice
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerPayment: {
        padding: 20,

    },
    goBackCart: {
        borderRadius: 10,
        width: 50,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8FB'
    },
    Silder: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    contentPayment: {
        padding: 20,

    },
})