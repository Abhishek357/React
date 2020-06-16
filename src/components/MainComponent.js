import React,{ Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './contactComponent';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutUsComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion';
import {Switch, Route, Redirect } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

class   Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      // selectedDish: null
    };      
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }


  render() {
    const HomePage= () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
        leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    return (
      <div>
        <Header />
        {/* <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path = "/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
// import { Form } from 'reactstrap';

export default Main;
