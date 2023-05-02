import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ChefDetails.css'


const ChefDetails = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);

  const { id } = useParams();
  console.log(id);
  const match = chef.find((c) => c.id === Number(id));

  const handleAddToFavorites = (index) => {
    // Update the state of the clicked recipe card to indicate that it has been favorited
    const updatedChef = [...chef];
    updatedChef.find((c) => c.id === Number(id)).recipes[
      index
    ].isFavorited = true;
    setChef(updatedChef);

    // Show a toast message indicating that the recipe has been added to favorites
    toast.success("Recipe added to favorites!");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <img
              src={match?.chef_picture}
              alt={match?.chef_name}
              className="img-fluid rounded"
            />
          </Col>
          <Col xs={12} md={8}>
            <h1>{match?.chef_name}</h1>
            <p>{match?.description}</p>
            <p>
              <strong>Likes:</strong> {match?.num_of_likes}
            </p>
            <p>
              <strong>Number of recipes:</strong> {match?.num_of_recipes}
            </p>
            <p>
              <strong>Years of experience:</strong> {match?.years_of_experience}
            </p>
          </Col>
          <div>
            <Row className="" xs={1} sm={2} md={3} lg={3} xl={3}>
              {" "}
              {/* set number of cards per row */}
              {match?.recipes.map((recipe, index) => (
                <Col key={index}>
                  <Card className="mb-5">
                    <Card.Body>
                      <img className="img-fluid rounded" src={recipe.picture} alt="" />
                      <h6>Name: {recipe.recipe_name}</h6>
                      <p>{recipe.vitamins[0]} {recipe.vitamins[1]}</p>
                      <p>{recipe.cooking_method.slice(0,100)}</p>
                      <button 
                        className="btn"
                        disabled={recipe.isFavorited} // Disable the button if the recipe has already been favorited
                        onClick={() => handleAddToFavorites(index)}
                      >
                        {recipe.isFavorited ? "Added to favorites" : "Add to favorites"}
                      </button>
                    </Card.Body>
                  </Card>
                  
                </Col>
              ))}
            </Row>
          </div>
        </Row>
        <Link to="/">Back to Home</Link>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default ChefDetails;
