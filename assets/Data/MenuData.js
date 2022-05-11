import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function MenuData() {

    const Menu_API = "https://mocki.io/v1/c84a09e9-fd8c-449c-abcc-85b33f1df29e";

    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(Menu_API)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, []);

    return (
        console.log("Data", Data),
        <View style={{}}>
            {
                Loading ? <Text>Hello</Text> :
                    <View>
                        <Text style={{ color: '#000' }}>{Data.description}</Text>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({})