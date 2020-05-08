import React from 'react';
import logo from './logo.svg';
import './App.css';
import Partial from './components/Partial';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import General from './components/General';
import SelectPartials from './components/SelectPartials';

// pobranie danych i próba wyswietlenia w state
class App extends React.Component
{
  state={
    covid:{
      "infected":null,
      "deceased":null,
      "infectedByRegion": [
      ],
      "sourceUrl": "https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2",
      "lastUpdatedAtApify": "2020-05-03T13:50:00.000Z",
      "readMe": "https://apify.com/vaclavrut/covid-pl"
    },
    visible:false,
    dead:0,
    ill:0,
    healtyCount:0,
    allCountries:
    {
      "countrydata": [
        {
          "info": {
            "ourid": 126,
            "title": "Poland",
            "code": "PL",
            "source": "https://thevirustracker.com/poland-coronavirus-information-pl"
          },
          "total_cases": 15047,
          "total_recovered": 54,
          "total_unresolved": 0,
          "total_deaths": 755,
          "total_new_cases_today": 0,
          "total_new_deaths_today": 0,
          "total_active_cases": 9108,
          "total_serious_cases": 160,
          "total_danger_rank": 33
        }
      ],
      "stat": "ok"
    }

    

  
  }
  componentDidMount() {
    console.log("mount")
    fetch("https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true")
      .then(data =>data.json())
      .then(json => this.setState({covid:json}));

      fetch("https://api.thevirustracker.com/free-api?countryTotal=PL")
      .then(data =>data.json())
      .then(json => this.setState({allCountries:json}));



  }
  getValueName = (id) =>
  {
    console.log("get name")
   let dead=0;
   let ill=0;
   const array=this.state.covid.infectedByRegion.filter(i=>i.region==id).map(i=>dead=i.deceasedCount);
   const array1=this.state.covid.infectedByRegion.filter(i=>i.region==id).map(i=>ill=i.infectedCount)
    

    this.setState({dead:dead, ill:ill,visible:true})
    
    
  }

  

  

 render()
 {
   let healthy=0;
   let new_cases=0;
   let new_death=0;
  const state=this.state.allCountries.countrydata.map(p=>healthy=p.total_recovered);
  const state1=this.state.allCountries.countrydata.map(p=>new_cases=p.total_new_cases_today)
  const state2=this.state.allCountries.countrydata.map(p=>new_death=p.total_new_deaths_today)

 

   return(
     
    <React.Fragment>
      <div className="general">
           
           <div className="title"> <h1 style={{fontSize: 20}}>COVID-19 in POLAND</h1></div>
           <General inf={this.state.covid.infected} dec={this.state.covid.deceased} healthy={healthy} newCases={new_cases} newDeath={new_death}></General>

        </div>
        <h4>Podział na województwa</h4>
     <Partial method={this.getValueName} visible={this.state.visible} ></Partial>
    
    
     <div className="partialss">
       {this.state.visible ? <SelectPartials dead={this.state.dead} ill={this.state.ill}></SelectPartials>:null}
     </div>
     <footer>Copyright © Smolec Bartłomiej</footer>
     </React.Fragment>
     )
   
     
 }
}
export default App