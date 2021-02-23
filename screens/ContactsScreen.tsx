import * as React from 'react';
import {FlatList, View} from 'react-native';
import users from "../data/Users";
import ContactListItem from "../components/ContactListItem";

export default function ContactsScreen() {
    return (
        <View>
            <FlatList
                data={users}
                renderItem={({item}) => <ContactListItem user={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
