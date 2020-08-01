import React from 'react';
import { 
  MDBBtn, 
  MDBCard,
  MDBCardBody, 
  MDBCardImage, 
  MDBCardTitle, 
  MDBCardText, 
  MDBCol,
  MDBRow
} from 'mdbreact';

import NoRecipe from "./NoRecipe";

const ListItems = (props) => {
  let list;
  if (props.data.length === 0) {
    list = <NoRecipe />
  } else {
    list = props.data.map((item, index) => 
      <MDBCol lg="4" md="4" sm="6" key={index}>
        <MDBCard className="recipe-card">
          <MDBCardImage className="img-fluid list-image" src={item.recipeImage}/>
          <MDBCardBody>
            <MDBCardTitle>{item.name}</MDBCardTitle>
            <p>By {item.userId.name}</p>
            <MDBCardText className="ingredients">
              Ingredients: {item.ingredients.replace(/\s/g,' ')}
            </MDBCardText>
            <MDBBtn href={`/${item._id}`}>Detail</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
  
  return (
    <MDBRow>
      {list}
    </MDBRow>
  ); 
}

export default ListItems;