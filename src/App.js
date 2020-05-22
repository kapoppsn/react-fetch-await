import React from 'react';
import axios from 'axios';

export default class App extends React.Component {

  state = {
    billionaires: [],
  }

  async componentDidMount() {

    try{
      const billionaires = (await axios.get(
        'https://v11v9.sse.codesandbox.io/billionaires')
      ) .data
      // console.log(billionaires);
      this.setState({
          billionaires,
        })
      
      // const response = await fetch (
      //   'https://v11v9.sse.codesandbox.io/billionaires'
      // )
      // const billionaires = await response.json()
      //   this.setState({
      //         billionaires,
      //       })
    } catch(err) {
    }
    // fetch('https://v11v9.sse.codesandbox.io/billionaires')
    // .then(resonse => {
    //     return resonse.json()
    // }).then(result => {
    //   this.setState({
    //     billionaires: result
    //   })
    //     console.log(result);
    // });
    
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.billionaires.map((person) => {
          return <li>{person.name}</li>})}
        </ol>
      </div>
    ) 
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;