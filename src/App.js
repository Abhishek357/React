import React,{ Component } from 'react';
// import logo from './logo.svg';
// import { Navbar, NavbarBrand, Form } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
// import { DISHES } from './shared/dishes';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

class App extends Component {

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     dishes: DISHES
  //   }
  // }
  render() {
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}
        {/* <Menu dishes={this.state.dishes} /> */}
        <Main />
      </div>
    );
  }
}

export default App;
