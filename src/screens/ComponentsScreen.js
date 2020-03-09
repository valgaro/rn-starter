import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ComponentsScreen = () => {
    const myName = 'Gonzalo';
    const list = [
        { name: 'Pikachu', key: '1' },
        { name: 'Bulbasaur', key: '2' },
        { name: 'Charmander', key: '3' },
        { name: 'Squirtle', key: '4' },
    ];
    return  (
        <View>
            <Text style={styles.titleStyle}>Getting started with React Native!</Text>
            <Text style={styles.textStyle}>My name is {myName}</Text>
            <FlatList 
                //keyextractor = {(pokemons) => {}}
                data={list} 
                renderItem={({item}) => {
                    // element => { item: { name: 'Pikachu' }, index: 0 }
                    console.log(item);
                    return (
                        <Text>{item.name}</Text>
                    );
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45,
        color: 'blue'
    },
    textStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;