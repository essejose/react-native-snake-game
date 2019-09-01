import Constants from './Constants';
import RandomBetween from './utils/RandomBetween';

const GameLoop = (entities, { touches, dispatch, events }) =>{
    
    let {head, food, tail } = entities
 

    if(events.length){
        for (let i = 0; i < events.length; i++) {
            const evl = events[i];
            
            if(evl.type ==="move-up" && head.yspeed !== 1){
                head.yspeed = -1;
                head.xspeed = 0;
            } else if (evl.type ==="move-down" && head.yspeed !== -1){
                head.yspeed = 1;
                head.xspeed = 0;
            }
            else if (evl.type ==="move-left" && head.xspeed !== 1){
                head.xspeed = -1; 
                head.yspeed = 0;
            }
            else if (evl.type ==="move-right" && head.xspeed !== -1){
                head.xspeed = 1;
                head.yspeed = 0;
            }
        }
    }
    head.nextMove -=1;
    if(head.nextMove === 0){
        head.nextMove = head.updateFrequency;


        if( 
            head.position[0]  + head.xspeed < 0 ||
            head.position[0]  + head.xspeed >=  Constants.GRID_SIZE ||
            head.position[1]  + head.yspeed < 0 ||
            head.position[1]  + head.yspeed >= Constants.GRID_SIZE
        ){
            //Game over :(
                dispatch({
                    type:"game-over"
                })
        } else{ 

            //follow
            tail.elements = [[head.position[0], head.position[1]]].concat(tail.elements).slice(0,-1);

            head.position[0] += head.xspeed;
            head.position[1] += head.yspeed;


            for (let ih = 0; ih < tail.elements.length; ih++) {
                const tailElement = tail.elements[ih];
                
                if(head.position[0] === tailElement[0] && head.position[1] === tailElement[1] ){
                         dispatch({
                            type:"game-over"
                        })
                }
            }
 

            if(head.position[0] === food.position[0] && head.position[1] === food.position[1] ){
                //colision
                
                //push tail
                tail.elements = [[food.position[0], food.position[1]]].concat(tail.elements); 

                food.position[0] = RandomBetween(0, Constants.GRID_SIZE - 1)
                food.position[1] = RandomBetween(0, Constants.GRID_SIZE - 1)
            }
    
        }

    }

    return entities
}

export {GameLoop}; 