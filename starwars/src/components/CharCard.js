import React from "react";
import {
    Card, CardText, CardText2, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';

  
  
  function CharCard (props) {
    return (
   <Col xs="6" sm="4" key ={props.id}>
    <Card  size="md" style={{backgroundColor: '#f1f1f1'}}>
      
        <CardBody>
          <CardTitle style={{color: 'red'}}>{props.name}</CardTitle>
          <CardSubtitle>born: {props.birth}</CardSubtitle>
          <CardText>Height: {props.height}cm</CardText>
          <CardText>Weight: {props.mass}kg</CardText>

        </CardBody>
      </Card>
    </Col>
        
        
    )

 }

 export default CharCard;
  
  
  
  
  





