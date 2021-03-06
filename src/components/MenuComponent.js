import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap'; 
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent'; 
import { baseUrl } from '../shared/baseUrl';

  function RenderMenuItem({dish,onClick}){
    return(
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />
          <CardImgOverlay body className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card> 
    );
  }

  const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) =>{
      return(
        <div key={dish.id} className="col-12 col-md-5 mt-1">
          <RenderMenuItem dish={dish} onClick={props.onClick} />
        </div>
      );
    });

    console.log('Menu Component render is invoked');

    if(props.dishes.isLoading){
      return(
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
    else if(props.dishes.errMess){
      return(
        <div className="container">
          <div className="row">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      );
    }    
    else
      return ( 
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            {menu}
          </div>
        </div>
      );
  }


export default Menu;












































// import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap'; 

// class Menu extends Component {

//   constructor(props) {
//     super(props);

//     console.log('Menu Component constructor is invoked');
//   }

//   componentDidMount() {
//     console.log('Menu Component componentDidMount is invoked');
//   }


//   // renderDish(dish){
//   //   if(dish!=null)
//   //   {
//   //     return(
//   //       <Card>
//   //           <CardImg width="100%" object src={dish.image} alt={dish.name} />
//   //           <CardBody>
//   //             <CardTitle>{dish.name}</CardTitle>
//   //             <CardText>{dish.description}</CardText>
//   //           </CardBody>
//   //       </Card>
//   //     )
//   //   }
//   //   else{
//   //     return (
//   //       <div></div>
//   //     );
//   //   }
//   // }

//   render(){

//     const menu = this.props.dishes.map((dish) =>{
//       return(
//         <div key={dish.id} className="col-12 col-md-5 mt-1">
//           <Card onClick={() => this.props.onClick(dish.id)}>
//             <CardImg width="100%" object src={dish.image} alt={dish.name} />
//             <CardImgOverlay body className="ml-5">
//               <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>   
//         </div>
//       );
//     });

//     console.log('Menu Component render is invoked');

//     return ( 
//       <div className="container">
//         <div className="row">
//           {menu}
//         </div>
//         {/* <div className="row"> */}
//           {/* {this.renderDish(this.state.selectedDish)} */}
//           {/* <DishdetailComponent dish={this.state.selectedDish} /> */}
//         {/* </div> */}
//       </div>
//     );

//   }
// }

// export default Menu;