import Constants from './Constants';

const GameLoop = (entities, { touches, dispatch, events }) =>{
    
    let head = entities.head;

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
            // Game over :(
                dispatch({
                    type:"game-over"
                })
        } else{

            head.position[0] += head.xspeed;
            head.position[1] += head.yspeed;
    
        }

    }

    return entities
}

export {GameLoop}; 