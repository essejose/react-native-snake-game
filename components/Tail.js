import React, {Component} from 'react';
import {  
  View, 
} from 'react-native'; 
import Constants from './../Constants';

export default class Tail extends Component {  
  constructor(props){
    super(props);
  }

  render(){
      const { size, elements } = this.props; 
      let tailList =  elements.map((el,idx) =>{

          return (
          <View style={{
            width: size,
            height: size,
            left: el[0],
            top: el[1],
            position:'absolute',
            backgroundColor:'#888' 
          }}/>
        )

      })

    return(
        <View style={{
            width: Constants.GRID_SIZE * size,
            height: Constants.GRID_SIZE * size, 
        }}>
          {tailList}
        </View>
    )
  }

};

 