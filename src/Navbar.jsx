import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import "./App.css"

function Navbar() {
    const {theme,setTheme} =useContext(ThemeContext);
    const chngeTheme=()=>{
        if(theme=="black"){
            setTheme("white")
        }else{
            setTheme("black")
        }
        console.log(theme)
    }
  return (
    <  div className={theme=="white" ? "style1" : "style2"} style={{backgroundColor:theme} }>
    <button onClick={chngeTheme}>Change theme</button>
    <div>Navbar : 4{theme}</div>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint, pariatur commodi dolore est qui nostrum obcaecati praesentium non quo magni. Obcaecati quae ex mollitia laudantium velit minus provident quos.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus maiores earum iure eius tempore assumenda numquam voluptatum nulla distinctio modi cumque quia officiis aliquam asperiores, esse quibusdam temporibus dolore ducimus!
    </div>
 
  )
}

export default Navbar