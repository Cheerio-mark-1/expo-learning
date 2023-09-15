import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ImageDetail({ title, img }) {
    function handlePress() {
        console.log('handlepress');
    }
    return (
        <TouchableOpacity onPress={handlePress} key={title}>
            <View style={ImageDetailStyle.imageContainer} key={title} >
                <Image

                    style={ImageDetailStyle.image}
                    source={{ uri: img }}
                />
                <View>
                    <Text style={ImageDetailStyle.text}>{title}</Text>
                    <Text>{Date(Date.now())}</Text>
                </View>


            </View>
        </TouchableOpacity>
    )
}

const ImageDetailStyle = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        // alignItems: 'center'
    },
    image: {
        width: 150,
        height: 120,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        marginTop: 10
    }
})