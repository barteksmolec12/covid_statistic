import React from 'react';
import './Partial.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';


//display all partials
const Partial = (props) =>
{
  
  return(
<React.Fragment>

    {/* <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ techCompanies } />
      </div>
      <div className="col-md-4"></div>
    </div> */}
    <div className="options">
       <div class="form-row align-items-center">
        <div class="col-auto my-1">
  
         <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={()=>props.method(document.getElementById("inlineFormCustomSelect").value)}>
        <option selected>Wybierz województwo ...</option>
        <option value="malopolskie">Małopolskie</option>
        <option value="slaskie">Śląskie</option>
        <option value="dolnoslaskie">Dolnośląskie</option>
        <option value="kujawsko-pomorskie">Kujawsko-pomorskie</option>
        <option value="lubelskie">Lubelskie</option>
        <option value="lubuskie">Lubuskie</option>
        <option value="lodzkie">Łodzkie</option>
        <option value="mazowieckie">Mazowieckie</option>
        <option value="opolskie">Opolskie</option>
        <option value="podkarpackie">Podkarpackie</option>
        <option value="pomorskie">Pomorskie</option>
        <option value="swietokrzyskie">Świętokrzyskie</option>
        <option value="warminsko-mazurskie">Warmińsko-mazurskie</option>
        <option value="wielkopolskie">Wielkopolskie</option>
        <option value="zachodniopomorskie">Zachodniopomorskie</option>
        

        
         </select>
    </div>
    </div>
    </div>
         
  
    </React.Fragment>
  )

  }

export default Partial