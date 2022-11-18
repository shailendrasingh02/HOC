
import './App.css';
import React, {useState} from 'react'

function App() {
  return (
    <div className="App">
     <h1>Hoc</h1>
    <HOCRed cmp={Counter}/>
    <HOCGreen cmp={Counter}/>
    <HOCBlue cmp={Counter}/>
     

    </div>
  );
}
function HOCRed(props){
  return( <div>
    <h1 style={{backgroundColor:"red",width:100}}> Red <props.cmp /> </h1>
  </div>
  );
}
function HOCGreen(props){
  return( <div>
    <h1 style={{backgroundColor:"green",width:100}}>Green <props.cmp /> </h1>
  </div>
  );
}

function HOCBlue(props){
  return( <div>
    <h1 style={{backgroundColor:"blue",width:100}}> Blue<props.cmp /> </h1>
  </div>
  );
}
function Counter(){
  const [count,setCount]=useState(0)
  return(
  <div>
    <h3>
          {count}
    </h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
  )
}
export default App;
