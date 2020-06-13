import React, {useState} from 'react';
import './Roomlit.css';

function Roomlit() {
    const [isLit, setLit] = useState(true);
    let [isTemp, setTemp] = useState(72);
    return (
    <div className = {`room ${isLit? "on":"off"}`}>
        The Room Light is: {isLit? "On": "Off"}
        <br />
        The temperature is: {isTemp}
        <br />
        <br />
        <button onClick = {() => setLit(true)}>ON</button>  
        <button onClick = {() => setLit(false)}>OFF</button>
        <div>
            <button onClick = {()=> setTemp(++isTemp)}>+</button>
            <button onClick = {()=> setTemp(--isTemp)}>-</button>
        </div>
    </div>

    );
}
export default Roomlit;


// import React,{useState} from 'react';


// function Roomlit() {
//     const [isLit,setLit]=useState(true);
//     let [iTemp,setTemp] = useState(72);
//   return (
//     <div>
//         This Room light is: {isLit? "ON" : "OFF"}
//         <br></br>
//         The room temperature is: {iTemp}
//         <br /><br />
//         <button onclick={()=>setLit(true)}>ON</button>
//         <button onclick={()=>setLit(false)}>OFF</button>
//         <br /><br />
//         <button onclick={()=>setTemp(++iTemp)}>+</button>
//         <button onclick={()=>setTemp(--iTemp)}>-</button>
    
//     </div>
//   );
// }

// export default Roomlit;