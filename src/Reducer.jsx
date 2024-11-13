const reducer=(state,action)=>{
    console.log(action)
   switch(action){
    case "increse":
        return state+1;
    case "decrese":
        return state-1;
    default:
        return state;
   }
}
export default reducer;