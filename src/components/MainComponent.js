import React,{ Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './contactComponent';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutUsComponent';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { LEADERS } from '../shared/leaders';
// import { PROMOTIONS } from '../shared/promotion';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())}
});


class   Main extends Component {

  constructor(props){
    super(props);

    // this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   leaders: LEADERS,
    //   promotions: PROMOTIONS
    //   // selectedDish: null
    // };      
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
  }

  render() {
    const HomePage= () => {
      return(
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} 
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]} 
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishdetailComponent dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}          
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrMess={this.props.comments.errMess}          
          postComment={this.props.postComment}
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
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
      <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
          <Route path = "/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
// import { Form } from 'reactstrap';

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));