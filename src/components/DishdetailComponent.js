import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Label, Row, Col, Modal, ModalBody, ModalHeader} from 'reactstrap'; 
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      toggleModal: null
    };      
    this.toggleTheModal = this.toggleTheModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.toggleTheModal();  
    this.props.addComment(this.props.dishId, values.contactType, values.yourName, values.message); 
    // console.log('Current State is: ' + JSON.stringify(values));
    // alert('Current State is: ' + JSON.stringify(values));
}

  toggleTheModal(){
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  }
  
  render(){
    return(
        <>
        <Button outline color="secondary" onClick={this.toggleTheModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

        <Modal isOpen={this.state.toggleModal} toggle={this.toggleTheModal}>
        <ModalHeader toggle={this.toggleTheModal}>Submit Comment</ModalHeader>
        <ModalBody>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
          <Label md={2}>Rating</Label>
            <Col md={{size: 12}}>
                <Control.select model=".contactType" name="contactType"
                    className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Control.select>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="yourName" col={12}>Your Name</Label>
            <Col md={{size: 12}}>
                <Control.text model=".yourName" id="yourName" name="yourName"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                        required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                      />
                <Errors
                    className="text-danger"
                    model=".yourName"
                    show="touched"
                    messages={{
                        required: 'Required',
                        minLength: 'Must be 3 characters or greater',
                        maxLength: 'Must be 15 characters or less'
                    }}
                  />
            </Col>
          </Row>
          <Row className="form-group">
              <Label htmlFor="message" md={2}>Comment</Label>
              <Col md={{size: 12}}>
                  <Control.textarea model=".message" id="message" name="message"
                      rows="6"
                      className="form-control" />
              </Col>
          </Row>
          <Row className="form-group">
              <Col md={2}>
                  <Button type="submit" color="primary">Submit</Button>
              </Col>
          </Row>
        </LocalForm>   
        </ModalBody>
        </Modal>
        </>
    );
  }
}

    function RenderComments({comments,addComment,dishId}) {
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
            <CommentForm dishId={dishId} addComment={addComment}/>
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
      if(props.isLoading){
        return(
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
      }
      if(props.errMess){
        return(
          <div className="container">
            <div className="row">
              <h4>{props.errMess}</h4>
            </div>
          </div>
        );
      }
      else if(props.dish!=null)
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
              <RenderComments comments={props.comments} 
                addComment={props.addComment}
                dishId={props.dish.id}
              />
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