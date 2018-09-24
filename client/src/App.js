import React, { Component } from 'react';
import dice from './rpg_dice-percentage.png';
import './App.css';
import Api from './Api';
import 'bootstrap/dist/css/bootstrap.css';
import {Table} from 'reactstrap';


class App extends Component {

      state = {
          result: null,
          results: []
      };

      getResultData = () => {
          Api().get("dice")
              .then((response)=> {
                  this.setState({results: response.data});
                  console.log(response.error)
              })
              .catch((err)=> {
                  console.log(err)
              })
      };

      componentDidMount(){
          this.getResultData();
      }

      handleGenerateDiceResult(){
          let random = Math.floor(Math.random() * 100) + 1;
          this.setState({result: random});

          Api().post("dice/create", {result: random})
               .then((response)=>{
                  console.log(response);
               })
              .then(()=> {
                  this.getResultData();
              })
              .catch((error)=> {
                   if (!error.response) {
                       // network error
                       console.log('Error: Network Error');
                   } else {
                       console.log(error.response.data.message);
                   }
              });


      };

      render() {
        const {results} = this.state;

        return (
          <div className="App">
            <header className="App-header">
              <img src={dice} className="App-logo" alt="logo" />
              <h1 className="App-title mt-2">Vítejte v aplikaci Dice!</h1>
            </header>
            <main>
                <div className="layer">
            <div className="percent-result">
                  <p>{this.state.result === null ? "Hoďte kostkou" : this.state.result + "%"}</p>
            </div>
            <p className="App-intro">
              <button className="btn-effect btn" onClick={() => this.handleGenerateDiceResult()}>Hoď kostkou</button>
            </p>
              {
                  results.length === 0 ?
                      <p>Zatím žádné výsledky. Prosím hoďte kostkou.</p> :
                      <Table dark size="sm" className="optimized-table">
                          <thead>
                          <tr>
                              <th>#</th>
                              <th>Výsledek</th>
                              <th>Vytvořeno</th>
                          </tr>
                          </thead>
                          <tbody>
                          {results.map((result, key)=> {
                              return (
                                  <tr key={key}>
                                      <th scope="row">{result.id}</th>
                                      <td>{result.result}%</td>
                                      <td>
                                          {`${new Date(result.created).toLocaleDateString()}
                                            ${new Date(result.created).toLocaleTimeString()}`}
                                      </td>
                                  </tr>
                              )
                          })}
                          </tbody>
                      </Table>
              }
                </div>
            </main>
          </div>

        );
      }
}

export default App;
