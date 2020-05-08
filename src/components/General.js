import React from 'react';


const General = (props) =>
(
 <React.Fragment>
{/* <div className="partials">
    
 
<h1>Zarażenia: <h2 ><b>{props.inf}  </b><h3>dzial</h3></h2></h1>
        <h1>Zgony: <h2><b >{props.dec}</b></h2></h1>
        <h1>Ozdrowienia: <h2 style={{color: "green"}}><b>{props.healthy}</b></h2></h1>
        

        </div> */}
       <div style={{marginBottom: 25}}>
        <h1 style={{fontSize: 30}}>Zarażenia: </h1>
    <h2 style={{fontSize: 30,display:'inline',fontWeight: 'bold'}}>{props.inf} </h2><h2 style={{fontSize: 25,display:'inline',color:'grey'}}>(dziś <h2 style={{fontSize: 25,display:'inline',color:'red'}}>{props.newCases}</h2>)</h2>
    </div>
    

    <div style={{marginBottom: 25}}>
    <h1 style={{fontSize: 30}}>Zgony: </h1>
    <h2 style={{fontSize: 30,display:'inline',fontWeight: 'bold'}}>{props.dec} </h2><h2 style={{fontSize: 25,display:'inline',color:'grey'}}>(dziś <h2 style={{fontSize: 25,display:'inline',color:'red'}}>{props.newDeath}</h2>)</h2>
   
    </div>
    <h1  style={{fontSize: 30}}>Ozdrowienia: <h2 style={{color: "green"}}><b>{props.healthy}</b></h2></h1>

      
    </React.Fragment>

)

export default General