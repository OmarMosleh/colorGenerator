import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  
  const [color, setColor] = useState('')
  const [error,setError] = useState(false);
  const [list,setList]= useState([]);

  function submitHandler(e){
    e.preventDefault();
    try{

      let colors = new Values(color).all(10);
      console.log("submitHandler");
      console.log("color now is " + color)
      console.log(colors);
      setList(colors);
    }
    catch(err){
        console.log("omar there is an error" + err);
        setError(true);
    }
  }
  return (
    <>
      <section className="container">
        <form onSubmit={submitHandler}>
          <h3>desired color !</h3>
          <input type="text" name="color"
          className={error?"error":null} 
          id="" value={color}
          placeholder='#222222'
          onChange={(e)=>setColor(e.target.value)} />
          <button type="submit" className="btn">create Range</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((e,index)=><SingleColor key={index} {...e} index={index}/>)
        }
      </section>
    </>
  )
}

export default App
