import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Scan({ navigation }) {
    const [randomProduct, setRandomProduct] = useState(null);

    useEffect(() => {
        // Fetch a random product from the API
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                // Randomly select a product from the array
                const randomIndex = Math.floor(Math.random() * data.length);
                setRandomProduct(data[randomIndex]);
            })
            .catch(error => console.error('Error fetching product:', error));
    }, []);

    const addToCart = async () => {
        try {
            const existingCart = await AsyncStorage.getItem('cart');
            const cart = existingCart ? JSON.parse(existingCart) : [];

            const existingProductIndex = cart.findIndex(
                item => item.productName === randomProduct.title
            );

            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                const newProduct = {
                    productName: randomProduct.title,
                    quantity: 1,
                    price: randomProduct.price,
                    image: { uri: randomProduct.image },
                };
                cart.push(newProduct);
            }

            await AsyncStorage.setItem('cart', JSON.stringify(cart));
            navigation.navigate('Cart');
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    if (!randomProduct) {
        return <Text style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop:400
        }}>Loading...</Text>;
    }

    return (
        <View style={styles.container} key={randomProduct.id}>
            <ImageBackground source={{ uri: randomProduct.image }}
                resizeMode="contain" style={styles.image}>
                <View style={{}}>
                    <View >
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                            backgroundColor: 'white',
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            marginLeft: 30,
                            marginTop: 120,
                        }}>
                            <Image
                                style={{}}
                                source={require('../img/ArrowBack.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    marginBottom: 50,
                }}>
                    <Image
                        style={{
                            marginTop: 30
                        }}
                        source={require('../img/border.png')}
                    />
                </View>
                <View style={{
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        padding: 20,
                        width: '80%',
                        borderRadius: 10,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        elevation: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            gap: 10,
                            alignItems: 'center'
                        }}>
                            <Image style={styles.img_demo} source={{ uri: randomProduct.image }} />
                            <View>
                                <Text style={{
                                    color: '#C2C2C2',
                                    fontWeight: '300'
                                }}>
                                    Lauren’s
                                </Text>
                                <Text style={{
                                    fontWeight: '500',
                                    maxWidth: 150
                                }}>
                                    {randomProduct.title}
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#5A6CF3',
                            padding: 10,
                            borderRadius: 10
                        }}>
                            <TouchableOpacity onPress={addToCart}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../img/Add.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    image: {
        flex: 1,
        marginTop: -80
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    img_demo: {
        width: 50,
        height: 50,
        borderRadius: 10
    }
})