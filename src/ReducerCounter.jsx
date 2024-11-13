import { useReducer } from "react";
import reducer from "./Reducer";
function ReducerCounter(){
     let InitialState=0;
     const[count,dispatch] = useReducer(reducer,InitialState)
    
    return (
        <>
        <div>Hi..hello</div>
        <button onClick={()=>dispatch("increse")}>increse</button>
        <h3>{count}</h3>
        <button onClick={()=>dispatch("decrese")}>decrese</button>
        </>
    )
}
export default ReducerCounter;