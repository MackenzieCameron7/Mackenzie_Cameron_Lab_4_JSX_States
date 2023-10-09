import { useState } from "react";

export default function ColorBox(colors){
    const [color, setColor] = useState(0);
    const handleClick =()=>{
        // color is equal to the color at a random index in the colors array
        let randomColor = (Math.random() * colors.length());
        // Set Color
        setColor(colors[randomColor]);
    }
    
    return(
        // Changing background color of div on click
        <div onClick={handleClick}
            style={{ backgroundColor: color, width: 50, height: 50}}>
        </div>
    )

}