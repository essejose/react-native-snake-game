import Constants from './Constants';

const GameLoop = (entities, { touches, dispatch, events }) =>{
    
    let head = entities.head;

    head.nextMove -=1;
    if(head.nextMove === 0){
        head.nextMove = head.updateFrequency;
        head.position[0] += head.xspeed;
        head.position[1] += head.yspeed;
    }

    return entities
}

export {GameLoop}; 