import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap'; 
import { Link } from 'react-router-dom';

    function RenderComments({comments}) {
          return(
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {comments.map((comment) => {
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
      }

    function RenderDish({dish}){
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
  
    const DishdetailComponent = (props) => {
      if(props.dish!=null)
      {
        return ( 
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
              </div>
            </div>            
            <div className="row">
              <RenderDish dish={props.dish} />
              <RenderComments comments={props.comments} />
            </div>
          </div>
        );
      }
      else
      {
        return(
          <div></div>
        );
      }
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