import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CheckOut({ navigation }) {
    const [Price, setPrice] = useState([]);
    useEffect(() => {
        const getPrice = async () => {
            try {
                const existingPrice = await AsyncStorage.getItem('cart');
                const parsedPrice = existingPrice ? JSON.parse(existingPrice) : [];
                setPrice(parsedPrice);
            } catch (error) {
                console.error('Lỗi khi lấy giỏ hàng:', error);
            }
        };
        getPrice();
    }, []);
    const getTotalPrice = () => {
        return Price.reduce((total, item) => total + item.quantity * item.price, 0);
    };
    return (
        <View style={{
            flex: 1,

        }}>
            <View style={{
                backgroundColor: 'red',
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                paddingBottom: 80,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
            }}>
                <View style={{
                    backgroundColor: '#F8F8FB',
                    margin: 20,
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginTop: 50
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Image
                            style={{}}
                            source={require('../img/Arr.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',

                }}>
                    <Text style={{
                        color: '#363636',
                        fontSize: 22,
                        fontWeight: '700'
                    }}>
                        Checkout 💳
                    </Text>
                    <View>
                        <Text style={{
                            color: '#25D482',
                            fontSize: 20,
                            fontWeight: '700'
                        }}>
                            ₹ {getTotalPrice().toFixed(2)}
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#B1B1B1'
                        }}>
                            Including GST (18%)
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: -40
            }}>
                <View>
                    <TouchableOpacity style={{
                        backgroundColor: '#25D482',
                        padding: 20,
                        borderRadius: 20,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        marginRight: -20,
                        zIndex: 5,
                    }}>
                        <Text style={{
                            color: '#3A3C3F',
                            fontSize: 18,
                            fontWeight: '700'
                        }}>
                            💳 Credit card
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{
                        backgroundColor: '#F8F8FB',
                        padding: 20,
                        borderRadius: 20,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                    }}>
                        <Text style={{
                            marginLeft: 20,
                            color: '#3A3C3F',
                            fontSize: 18,
                            fontWeight: '700'
                        }}>
                            🍎 Apple Pay
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentCheckOut}>
                <View>
                    <Text style={styles.titleCheckOut}>Card number</Text>
                   <View style={styles.inputCheckOut}>
                   <TextInput
                    placeholder='5261   4141   0151   8472'
                    style={styles.input}
                    />
                   <View style={{flexDirection:'row',paddingRight:10,gap:30,alignItems:'center '}}>
                   <Image source={require('../img/icon_order/Master_Card_Logo.png')}/>
                    <Image source={require('../img/icon_order/Card_Icon.png')}/>
                   </View>
                   </View>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={styles.titleCheckOut}>Cardholder name</Text>
                   <View style={styles.inputCheckOut}>
                   <TextInput
                    placeholder='Christie Doe'
                    style={styles.input}
                    />
                   </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,gap:10}}>
                    <View style={{flex:1}}>
                        <Text style={styles.titleCheckOut}>Expiry date</Text>
                        <View style={styles.inputDay}>
                            <TextInput
                            placeholder='06 / 2024'
                            />
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row',gap:30}}>
                            <Text style={styles.titleCheckOut}>CVV / CVC</Text>
                            <View style={{height:20,width:20,backgroundColor:'#25D482',opacity:0.1,borderRadius:20,flexDirection:'row',justifyContent:'center',
                        alignItems:'center'}}>
                            <Image source={require('../img/icon_order/question.png')}/>
                            </View>
                        </View>
                        <View style={styles.inputDay}>
                            <TextInput
                            placeholder='915'
                            style={styles.inputDate}
                            />
                        </View>
                    </View>
                </View>
                <View>
                   <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{textAlign:'center',paddingTop:50,width:'85%',color:'#B1B1B1'}}>We will send you an order details to your email after the successfull payment</Text>
                   </View>
                </View>

            </View>
            <View style={{
                flex: 1,
                alignItems: 'flex-end',
                marginBottom: 50,
                flexDirection: 'row',
                justifyContent: "center"
            }}>
                <TouchableOpacity style={{
                    backgroundColor: '#25D482',
                    padding: 20,
                    width: '80%',
                    borderRadius: 15
                }} onPress={() => navigation.navigate('Payment_Success')}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: 20,
                    }}>
                       🔒 Pay for the order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentCheckOut:{
        padding:30,
        marginTop:30
    },
    titleCheckOut:{
      fontWeight:'bold',
      paddingBottom:5
    },
    inputCheckOut:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#F8F8FB",
        padding:10,
        borderRadius:20
    },
    input:{
        
    },
    inputDay:{
      padding:10,
      backgroundColor:'#F8F8FB',
      borderRadius:20
    },
})