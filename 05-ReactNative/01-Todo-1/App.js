import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = { data: ["Clean Home"], text: '' }

  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.data;
    arr.push(newTodo);
    this.setState({data: arr, text: ""});
  }

  renderTodos = () => {
    return this.state.data.map( (x) => { return (<Text key={x} >{x}</Text>) } )
  }

  render() {

    return (
      <View style={styles.container}>

        <Text>Edxael Todo App 1.1</Text>
        <TextInput style={styles.myinput} onChange={ (e) => { this.setState({ text: e.target.value }) } } />
        <Button title="Add To-Do" onPress={this.addTodo} />
        { this.renderTodos() }
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 247, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  myinput: {
    height: 40,
    width: 200,
    borderColor: "black",
    borderWidth: 1
  }
});
