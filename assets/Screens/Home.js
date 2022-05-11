import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, LogBox, Button } from 'react-native'
import Swiper from 'react-native-swiper';
import React, { useState, useEffect } from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').height;

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.']);
LogBox.ignoreAllLogs();


export default function Home() {

    const Category_Data = [
        {
            "title": "Joint Care",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains"
        },
        {
            "title": "Joint Care",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains"
        },
        {
            "title": "Joint Care",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains"
        },
        {
            "title": "Joint Care",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains"
        }
    ]

    const OnCategory = ({ item }) => {
        return <View style={styles.Categorys}>

            <View style={styles.Categorybody}>

                <View style={styles.imagebody}>
                    <Image source={require('../Images/menu.png')} style={styles.categoryimage} />
                </View>

                <View style={styles.CategoryTextbody}>
                    <Text style={styles.CategoryTitle}>{item.title} {'\n'}
                        <Text style={styles.CategoryBodyText}>{item.body}</Text>
                    </Text>
                    <Text style={styles.CategoryLM}>Learn More</Text>
                </View>
            </View>

        </View>
    }

    const Featured_Product = [
        {
            "title": "Cephalgo",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains",
            "price": "₹214.00",
            "Capsules": "40 Capsules",
        },
        {
            "title": "Stress Care",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains",
            "price": "₹850.00",
            "Capsules": "40 Capsules",
        },
        {
            "title": "Rishtpusht lmmuno",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains",
            "price": "₹2500.00",
            "Capsules": "40 Capsules",
        },
    ]

    const OnFeatured = ({ item }) => {
        return <View style={styles.ProductView}>

            <View style={styles.ImageView}>
                <Image source={require('../Images/bottle1.png')} style={styles.ProductImage} />
                <Text style={styles.CapsuleText}>{item.Capsules}</Text>
            </View>

            <Image source={require('../Images/line.png')} style={styles.Line} />

            <View style={styles.ProductTextView}>
                <Text style={styles.ProductTitle}>{item.title}</Text>
                <Text style={styles.ProductBodyText}>{item.body}</Text>
                <Text style={styles.ProductPrice}>{item.price}</Text>

                <TouchableOpacity style={styles.ProductBottom}>
                    <Text style={styles.Addtocart}>ADD TO CART</Text>
                    <Image source={require('../Images/share.png')} style={styles.Share} />
                </TouchableOpacity>
            </View>
        </View>
    }

    const Most_Purchased_Product = [
        {
            "title": "Cephalgo",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains",
            "price": "₹214.00",
            "Capsules": "40 Capsules",
        },
        {
            "title": "Stress Care",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains",
            "price": "₹850.00",
            "Capsules": "40 Capsules",
        },
        {
            "title": "Rishtpusht lmmuno",
            "body": "Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains",
            "price": "₹2500.00",
            "Capsules": "40 Capsules",
        },
    ]

    const OnMostPurchased = ({ item }) => {
        return <View style={styles.ProductView}>

            <View style={styles.ImageView}>
                <Image source={require('../Images/bottle.png')} style={styles.ProductImage} />
                <Text style={styles.CapsuleText}>{item.Capsules}</Text>
            </View>

            <Image source={require('../Images/line.png')} style={styles.Line} />

            <View style={styles.ProductTextView}>
                <Text style={styles.ProductTitle}>{item.title}</Text>
                <Text style={styles.ProductBodyText}>{item.body}</Text>
                <Text style={styles.ProductPrice}>{item.price}</Text>

                <TouchableOpacity style={styles.ProductBottom}>
                    <Text style={styles.Addtocart}>ADD TO CART</Text>
                    <Image source={require('../Images/share.png')} style={styles.Share} />
                </TouchableOpacity>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>

            {/* Header Section */}

            <>
                <View style={styles.Header}>
                    <Image source={require('../Images/Placeholder.jpg')} style={styles.logo} />
                    <Image source={require('../Images/menu.png')} style={styles.logo} />
                </View>
            </>

            <>
                <ScrollView style={styles.body}>

                    {/* Greeting */}

                    <>
                        <View style={styles.gretting}>
                            <Text style={styles.grettingmaintext}>Hello there,</Text>
                            <Text style={styles.grettingsubtext}>how we can <Text style={{ color: '#166486', fontWeight: '600' }}>serve</Text> you today</Text>
                        </View>
                    </>

                    {/* Product Images View */}

                    <>
                        <View style={styles.productimages}>
                            <Swiper
                                horizontal={true}
                                dotColor={'#ffffff'}
                                dotStyle={{ top: 50, borderWidth: 2, borderColor: '#2c6975', width: 10, height: 10, borderRadius: 50 / 2 }}
                                activeDotStyle={{ top: 50, borderWidth: 2, borderColor: '#2c6975', width: 10, height: 10, borderRadius: 50 / 2 }} >

                                <View style={styles.slide}>
                                    <Image source={require('../Images/Placeholder.jpg')}
                                        style={{

                                            height: '100%',
                                            width: '100%',
                                            borderRadius: 20
                                        }}
                                    />
                                </View>

                                <View style={styles.slide}>
                                    <Image source={require('../Images/Placeholder.jpg')}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: 20
                                        }}
                                    />
                                </View>
                            </Swiper>

                        </View>
                    </>

                    {/* Menu's */}

                    <>

                        <View style={styles.menubox}>
                            <FlatList
                                numColumns={3}

                                data={[
                                    { name: "My Order", images: require('../Images/list.png') },
                                    { name: "Track Order", images: require('../Images/order.png') },
                                    { name: "Best Offers", images: require('../Images/offers.png') },
                                    { name: "Chat", images: require('../Images/chat.png') },
                                    { name: "Refer Patient", images: require('../Images/refer.png') },
                                    { name: "Make Payment", images: require('../Images/payment.png') },]}

                                keyExtractor={(x, i) => i}
                                renderItem={({ item }) =>

                                    <View style={{ width: 100, height: 100, margin: 10, backgroundColor: '#5ca497', borderRadius: 10, padding: 10, shadowColor: '#dbdbdb', elevation: 5 }}>
                                        <Image style={{ width: 30, height: 30, alignContent: 'center', alignSelf: 'center', top: 5 }} source={item.images} />
                                        <Text style={{ alignContent: 'center', alignSelf: 'center', fontWeight: 'bold', textAlign: 'center', color: '#fff' }}> {"\n"} {item.name}</Text>
                                    </View>
                                }
                            />
                        </View>
                    </>

                    {/* Categories */}

                    <>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: '600' }}>Categories</Text>
                                <Text style={{ fontSize: 15, color: '#146588', fontWeight: 'bold' }}>VIEW ALL</Text>
                            </View>

                            {/* With Same Design */}

                            <FlatList
                                data={Category_Data}
                                renderItem={OnCategory}
                            />

                            {/* With Different Design */}

                            <>
                                {/* <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                padding: 20,
                            }}>

                                <View style={{ width: '100%', height: 130, alignSelf: 'center', borderTopLeftRadius: 50, borderBottomLeftRadius: 50, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, elevation: 5, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.4, shadowRadius: 10, shadowColor: '#171717', }}>

                                    <View style={{ width: '25%', alignSelf: 'center', left: 20 }}>
                                        <Image source={require('../Images/menu.png')} style={{ width: 70, height: 70, }} />
                                    </View>

                                    <View style={{ width: '75%', padding: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000', padding: 10, textAlign: 'left' }}>Joint Care {'\n'}
                                            <Text style={{ fontWeight: '500', fontSize: 12, color: '#000', }}>Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains</Text>
                                        </Text>
                                        <Text style={{ textAlign: 'right', paddingRight: 10, color: '#146588', letterSpacing: 2, bottom: 2 }}>Learn More</Text>
                                    </View>
                                </View>

                                <View style={{ width: '100%', height: 130, alignSelf: 'center', borderTopRightRadius: 50, borderBottomRightRadius: 50, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, elevation: 5, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.4, shadowRadius: 10, shadowColor: '#171717', }}>

                                    <View style={{ width: '75%', padding: 10 }}>

                                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000', padding: 10, textAlign: 'left' }}>Joint Care {'\n'}
                                            <Text style={{ fontWeight: '500', fontSize: 12, color: '#000', }}>Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains</Text>
                                        </Text>

                                        <Text style={{ textAlign: 'left', paddingLeft: 10, color: '#146588', letterSpacing: 2, bottom: 2 }}>Learn More</Text>
                                    </View>

                                    <View style={{ width: '25%', alignSelf: 'center' }}>
                                        <Image source={require('../Images/menu.png')} style={{ width: 70, height: 70, }} />
                                    </View>

                                </View>

                                <View style={{ width: '100%', height: 130, alignSelf: 'center', borderTopLeftRadius: 50, borderBottomLeftRadius: 50, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, elevation: 5, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.4, shadowRadius: 10, shadowColor: '#171717', }}>

                                    <View style={{ width: '25%', alignSelf: 'center', left: 20 }}>
                                        <Image source={require('../Images/menu.png')} style={{ width: 70, height: 70, }} />
                                    </View>

                                    <View style={{ width: '75%', padding: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000', padding: 10, textAlign: 'left' }}>Joint Care {'\n'}
                                            <Text style={{ fontWeight: '500', fontSize: 12, color: '#000', }}>Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains</Text>
                                        </Text>
                                        <Text style={{ textAlign: 'right', paddingRight: 10, color: '#146588', letterSpacing: 2, bottom: 2 }}>Learn More</Text>
                                    </View>
                                </View>

                                <View style={{ width: '100%', height: 130, alignSelf: 'center', borderTopRightRadius: 50, borderBottomRightRadius: 50, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, elevation: 5, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.4, shadowRadius: 10, shadowColor: '#171717', }}>

                                    <View style={{ width: '75%', padding: 10 }}>

                                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000', padding: 10, textAlign: 'left' }}>Joint Care {'\n'}
                                            <Text style={{ fontWeight: '500', fontSize: 12, color: '#000', }}>Joint pain can have causes that aren't due to underlying disease. Examples include overuse such as heavy physical activity, lack of use, sprains or strains</Text>
                                        </Text>

                                        <Text style={{ textAlign: 'left', paddingLeft: 10, color: '#146588', letterSpacing: 2, bottom: 2 }}>Learn More</Text>
                                    </View>

                                    <View style={{ width: '25%', alignSelf: 'center' }}>
                                        <Image source={require('../Images/menu.png')} style={{ width: 70, height: 70, }} />
                                    </View>
                                </View>

                            </View> */}

                            </>

                        </View>

                    </>

                    {/* Featured */}

                    <>
                        <View style={{ padding: 20 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: '600' }}>Featured Products</Text>
                            </View>

                            <FlatList
                                data={Featured_Product}
                                renderItem={OnFeatured}
                            />

                        </View>
                    </>

                    {/* Most Purchased Products */}

                    <>
                        <View style={{ padding: 20 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: '600' }}>Most Purchased Products</Text>
                            </View>

                            <FlatList
                                data={Most_Purchased_Product}
                                renderItem={OnMostPurchased}
                            />
                        </View>
                    </>

                    {/* Media */}

                    <>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                            <Text style={{ fontSize: 18, color: '#000', fontWeight: '600' }}>Our Media Associates</Text>
                        </View>

                        <View style={styles.menubox}>
                            <FlatList
                                numColumns={3}

                                data={[
                                    { images: require('../Images/ajjtak.png') },
                                    { images: require('../Images/news1.png') },
                                    { images: require('../Images/news2.png') },
                                    { images: require('../Images/news3.png') },
                                    { images: require('../Images/ajjtak.png') },
                                    { images: require('../Images/ajjtak.png') },]}

                                keyExtractor={(x, i) => i}
                                renderItem={({ item }) =>

                                    <View style={{ width: 100, height: 100, margin: 10, backgroundColor: '#e0ecde', borderRadius: 10, padding: 10, shadowColor: '#dbdbdb', elevation: 5, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 35, }} source={item.images} />
                                    </View>
                                }
                            />
                        </View>
                    </>


                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                        <Text style={{ color: '#000' }}>© ND, Care Nirogam Pav, Ltd - All rights Reserved</Text>
                    </View>

                </ScrollView>
            </>

            <TouchableOpacity style={{ position: 'absolute', bottom: 20, right: 20, alignSelf: 'flex-end', backgroundColor: '#2c6975', width: 55, height: 55, borderRadius: 50 * 2, }}>
                <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require('../Images/bag.png')} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Header: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        elevation: 10,
        padding: 10,
        shadowColor: '#ff8c00',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    gretting: {
        top: 10,
        padding: 20,
    },
    grettingmaintext: {
        fontSize: 20,
        color: "#24607a",
    },
    grettingsubtext: {
        fontSize: 18,
        color: "#24607a",
    },
    productimages: {
        width: 350,
        height: 170,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        margin: 25
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    //Menu Boxs

    menubox: {
        padding: 20,
    },

    //Categorys

    Categorys: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    Categorybody: {
        width: '100%',
        height: 130,
        alignSelf: 'center',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        flexDirection: 'row',
        elevation: 5,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowColor: '#171717',
    },
    imagebody: {
        width: '25%',
        alignSelf: 'center',
        left: 20
    },
    categoryimage: {
        width: 70,
        height: 70,
    },
    CategoryTextbody: {
        width: '75%',
        padding: 10
    },
    CategoryTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        padding: 10,
        textAlign: 'left'
    },
    CategoryBodyText: {
        fontWeight: '500',
        fontSize: 12,
        color: '#000',
    },
    CategoryLM: {
        textAlign: 'right',
        paddingRight: 10,
        color: '#146588',
        letterSpacing: 2,
        bottom: 2,
    },

    //Product

    ProductView: {
        width: '100%',
        height: 250,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        elevation: 2,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowColor: '#171717',
        borderColor: 1
    },
    ImageView: {
        width: '20%',
        alignSelf: 'center',
        left: 20,
    },
    ProductImage: {
        width: 60,
        height: 120,
    },
    CapsuleText: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        top: 15,
        right: 5,
        color: '#000'
    },
    Line: {
        width: 1,
        height: 200,
        alignSelf: 'center',
        left: 10
    },
    ProductTextView: {
        width: '75%',
        paddingTop: 10
    },
    ProductTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        textAlign: 'left',
        paddingTop: 15,
        paddingLeft: 10,
    },
    ProductBodyText: {
        fontWeight: '500',
        fontSize: 12,
        color: '#000',
        padding: 10,
        textAlign: 'left'
    },
    ProductPrice: {
        fontWeight: '500',
        fontSize: 18,
        color: '#146588',
        padding: 10,
        textAlign: 'left'
    },
    Addtocart: {
        color: "#146588",
        fontWeight: 'bold',
        fontSize: 15
    },
    Share: {
        width: 20,
        height: 20,
        right: 15
    },
    ProductBottom: {
        paddingTop: 25,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})