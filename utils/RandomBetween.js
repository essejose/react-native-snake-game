export default RandomBetween = (min, max)=>{
    return Math.floor(Math.random()*(max-min +1)+ min);
}
