import React from 'react';
import {Button, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={{paddingTop: 50, paddingLeft: 20, paddingRight: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center'}}>
        <TextInput placeholder={"Course goal"}
                   style={{
                     borderColor: '#000000',
                     borderWidth: 1,
                     padding: 10,
                   }}/>
        <Button title={"Add"} onPress={() => {
}}/>
      </View>
    </View>
  );
}
