import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class App extends React.Component {
    state = {
        placeName: ""
    };
    placeNameChangedHandler = (input) => {
        this.setState({placeName: input})
    };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={{borderColor: "blue", width: 300, borderWidth: 1, paddingLeft: 10}}
            placeholder={"Enter Text"}
            onChangeText={this.placeNameChangedHandler}
            value={this.state.placeName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30
  },
});
