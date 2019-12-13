import React from "react";
import {
    Card, CardText, CardText2, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';

  

const CardStyle = {
    boxShadpw: "1px 3px 1px 9E9E9E"
}


  
  function CharCard (props) {
    return (
   <Col xs="6" sm="4" key ={props.id}>
    <Card style={{backgroundColor: '#f1f1f1'}, {CardStyle}}>
      
        <CardBody>
          <CardTitle style={{color: 'red'}}>{props.name}</CardTitle>
          <CardSubtitle>Born: {props.birth}</CardSubtitle>
          <CardText>Height: {props.height}cm</CardText>
          <CardText>Weight: {props.mass}kg</CardText>

        </CardBody>
      </Card>
    </Col>
        
        
    )

 }

 export default CharCard;
  
  
  
  
  





