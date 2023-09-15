import React, { useEffect } from 'react' // importing all
import { Text, StyleSheet } from 'react-native' // importing small compoents

export default function ComponentsScreen({ gretting }) {
    // let gretting = "rajas bhgatkar"

    return <Text style={styles.textStyle}>Made with ❤ {gretting}</Text>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

