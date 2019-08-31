import React, {Component} from 'react';
import {  
  View, 
} from 'react-native'; 

export default class Head extends Component {  
  constructor(props){
    super(props);
  }

  render(){
      const { position, size } = this.props;
      const x = position[0];
      const y = position[1];

    return(
        <View style={{
            width: size,
            height: size,
            left: x * size,
            top: y * size,
            position:'absolute',
            backgroundColor:'red' 
        }}>

        </View>
    )
  }

};

 