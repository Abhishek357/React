import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'; 

    function RenderComments({dish}) {
        if (dish != null) {
          return (
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <ul className="list-unstyled">
                {dish.comments.map((comment) => {
                  return (
                    <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>
                        --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        } else {
          return <div></div>;
        }
      }

    function RenderDish({dish}){
      if(dish!=null)
      {
        return(
            <div className="col-12 col-md-5 mt-1">
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
      }
      else{
        return (
          <div></div>      
        );
      }
    }
  
    const DishdetailComponent = (props) => {
      return ( 
        <div className="container">
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments dish={props.dish} />
          </div>
        </div>
      );
    }
  
  export default DishdetailComponent;








































// import React, { Component } from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'; 
// class DishdetailComponent extends Component {

//     componentDidMount() {
//       console.log('Dishdetail Component componentDidMount is invoked');
//     }
  
//     componentDidUpdate(){
//       console.log('Dishdetail Component componentDidUpdate is invoked');

//     }
//     renderComments(dish) {
//         if (dish != null) {
//           return (
//             <div className="col-12 col-md-5 m-1">
//               <h4>Comments</h4>
//               <ul className="list-unstyled">
//                 {dish.comments.map((comment) => {
//                   return (
//                     <li key={comment.id}>
//                       <p>{comment.comment}</p>
//                       <p>
//                         --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
//                       </p>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           );
//         } else {
//           return <div></div>;
//         }
//       }

//     renderDish(dish){
//       if(dish!=null)
//       {
//         return(
//             <div className="col-12 col-md-5 mt-1">
//                 <Card>
//                     <CardImg width="100%" object src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         )
//       }
//       else{
//         return (
//           <div></div>      
//         );
//       }
//     }
  
//     render(){
//       console.log('Dishdetail Component render  is invoked');
//       return ( 
//         <div className="container">
//           <div className="row">
//             {this.renderDish(this.props.dish)}
//             {this.renderComments(this.props.dish)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default DishdetailComponent;