import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
import { GameEngine } from "react-native-game-engine"
import Constants from './Constants'


export default class App extends Component {  
  constructor(props){
    super(props);
    this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    this.engine = null;
  }

  render(){
    return(
      <View style={styles.container}>
          <GameEngine
            ref={(ref)=> { this.engine=ref}}
            style={{
              width:this.boardSize,
              height:this.boardSize,
              flex:null,
              backgroundColor:'#fff' 
            }}
          />

          
      </View>
    )
  }

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
    justifyContent:"center",
    alignItems:'center'
  } 
}); 