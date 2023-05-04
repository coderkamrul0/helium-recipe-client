import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ChefDetails.css";
import LazyLoad from "react-lazy-load";
import { FaStar,FaStarHalf } from "react-icons/fa";




const ChefDetails = () => {
  const [chef, setChef] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://chef-hunter-server-coderkamrul0.vercel.app/`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);

  const { id } = useParams();
  const match = chef.find((c) => c.id === Number(id));
  if(!match){
    navigate('*')
  }
  

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
      <div className="bg-image">
        <Container>
        <div className="content">
            <div className="images">
              <LazyLoad>
              <img src={match?.chef_picture} alt="your-image-alt" />
              </LazyLoad>
            </div>
            <div className="text">
            <h2>{match?.chef_name}</h2>
            <p>{match?.description}</p>
            
            <p>
              <strong>Likes:</strong> {match?.num_of_likes}
            </p>
            <p>
              <strong>Total Recipes:</strong> {match?.num_of_recipes}
            </p>
            <p>
              <strong>Experience:</strong> {match?.years_of_experience}
            </p>
            </div>
          </div>
        </Container>
      </div>
      <Container className="card-main-container">
        <Row>
          
          <div>
          <h1 className="recipes">{match?.chef_name} All Recipes</h1>
            <Row className="" xs={1} sm={2} md={3} lg={3} xl={3}>
              
              {/* set number of cards per row */}
              {match?.recipes.map((recipe, index) => (
                <Col key={index}>
                  <Card className="mb-5">
                    <Card.Body>
                      <img
                        className="img-fluid rounded"
                        src={recipe.picture}
                        alt=""
                      />
                      
                      <p style={{fontSize: '18px'}}><span style={{fontWeight: 'bold'}}>Name:</span> {recipe.recipe_name}</p>
                      <div className="rating">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf/>
                        {recipe.rating}
                      </div>
                      <p style={{fontWeight: 'bold'}}>Ingredients: </p>
                      {
                        recipe.ingredients.map(ingredient => <ul style={{margin: '0'}}>
      
                          <li>{ingredient}</li>
                        </ul>)
                      }
                      <p><span style={{fontWeight: 'bold'}}>Cooking Method:</span> {recipe.cooking_method.slice(0, 100)}</p>
                      <button
                        className="btn"
                        disabled={recipe.isFavorited} // Disable the button if the recipe has already been favorited
                        onClick={() => handleAddToFavorites(index)}
                      >
                        {recipe.isFavorited
                          ? "Added"
                          : "Add to favorites"}
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Row>
        <Link to="/"><button>Back to Home</button></Link>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default ChefDetails;
