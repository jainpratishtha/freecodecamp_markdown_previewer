import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component{
  state={
    keys:['Q','W','E','A','S','D','Z','X','C']
  }
  render(){
    const { keys }= this.state;
    return <div id="drum-machine">
      <div id="display">
    {keys.map((key,id)=>(
        <Box text={key} key={id} /> 
        ))}    
    </div></div>
  }
  
}
 
const Box=(props)=>(
  <div className="box">{props.text}</div>
);

ReactDOM.render(<App/>, document.getElementById("root"));