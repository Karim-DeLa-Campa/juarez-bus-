import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
      
    })
  }

  onPress2 = () => {
    this.setState({
      count: this.state.count - 1
      
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Ingresar personal </Text>
        </TouchableOpacity>
        <View style={styles.countContainer}>
        
          <Text>
            personal en el camion  { this.state.count } 
          </Text>

          <TouchableOpacity
         style={styles.button}
         onPress={this.onPress2}
        >
         <Text>restar personal </Text>
        </TouchableOpacity>
          
        </View>
      </View>

      
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top:250,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    top:80,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 20,
    marginBottom: 10
  }
})
export default App;
