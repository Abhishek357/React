import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap'; 

  function RenderMenuItem({dish,onClick}){
    return(
      <Card onClick={() => onClick(dish.id)}>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardImgOverlay body className="ml-5">
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card> 
    );
  }

  const Menu = (props) => {
    const menu = props.dishes.map((dish) =>{
      return(
        <div key={dish.id} className="col-12 col-md-5 mt-1">
          <RenderMenuItem dish={dish} onClick={props.onClick} />
        </div>
      );
    });

    console.log('Menu Component render is invoked');

    return ( 
      <div className="container">
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