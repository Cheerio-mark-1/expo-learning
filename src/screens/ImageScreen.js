import React from 'react'
import { Text, View } from 'react-native'
import ImageDetail from '../component/ImageDetail'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export const ImageScreen = () => {
    const ImageDetails = [
        { title: "Safed Kapda", img: 'https://images.unsplash.com/photo-1694284028434-2872aa51337b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
        { title: "Beutiful girl", img: "https://images.unsplash.com/photo-1694675856558-bc858408e60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" },
        { title: "Cosmos", img: 'https://plus.unsplash.com/premium_photo-1679355750936-77b24a624ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80' },
    ]
    return (
        <ScrollView>

            <View>
                {
                    ImageDetails.map(item => (
                        <ImageDetail title={item.title} img={item.img} />
                    ))

                }
            </View>
        </ScrollView>
    )
}
