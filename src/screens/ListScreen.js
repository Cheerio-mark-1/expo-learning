import React from 'react'
import { Button, TouchableNativeFeedback } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function ListScreen() {
    const friends = [
        { name: "devildesk", },
        { name: "vard", },
        { name: "ani", },
        { name: "friend 1", },
        { name: "friend 2", },
        { name: "friend 3", },
        { name: "friend 4", },
        { name: "friend 5", },
        { name: "friend 6", },
        { name: "friend 7", },
    ]

    const newFriends = [
        { name: "friend 1", age: 20 },
        { name: "friend 2", age: 45 },
        { name: "friend 3", age: 32 },
        { name: "friend 4", age: 27 },
        { name: "friend 5", age: 53 },
        { name: "friend 6", age: 80 },
        { name: "friend 7", age: 40 },
        { name: "friend 8", age: 40 },
    ]

    return (
        <View>
            <Text>List Screen</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(friend) => friend.name}
                style={styles.firstList}
                data={friends}
                renderItem={({ item }) => (
                    <Text style={styles.list}>{item.name}</Text>
                )}
            />

            <FlatList
                style={styles.secondList}
                keyExtractor={(friends) => friends.name}
                data={newFriends}
                renderItem={({ item }) => (
                    // element-> {item: {name: "friend #1"}, index: 0}
                    <>
                        <Text style={styles.newFriendsList}>{item.name} - Age {item.age}</Text>
                    </>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        marginLeft: 20,
        textAlign: "center",
        color: '#fff',
        padding: 10,
    },
    firstList: {
        backgroundColor: "#380",
    },
    newFriendsList: {
        marginLeft: 20,
        marginBottom: 90,
        top: 20,
    }

})
