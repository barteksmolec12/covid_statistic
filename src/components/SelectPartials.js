import React from 'react';


const SelectPartials = (props) =>
(
 <React.Fragment>

 
<h1 style={{fontSize: 25}}>Zarażeni: <h2 style={{fontSize: 25}}>{props.ill}</h2></h1>
        <h1 style={{fontSize: 25}}>Zgony: <h2 style={{fontSize: 25}}>{props.dead}</h2></h1>
  
    </React.Fragment>

)

export default SelectPartials