import React,{ Component } from 'react';
// import logo from './logo.svg';
// import { Navbar, NavbarBrand, Form } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Form } from 'reactstrap';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


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
      <Provider store={store}>
        <BrowserRouter>
        <div>
          {/* <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar> */}
          {/* <Menu dishes={this.state.dishes} /> */}
          <Main />
          
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
