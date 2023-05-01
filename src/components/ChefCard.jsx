import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRegHeart } from 'react-icons/fa'
import { Link } from "react-router-dom";

const ChefCard = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setChef(data.slice(0, 6))) // limit to first 6 chefs
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h1 className="text-center py-5">Our Top Chefs</h1>
      <Row className="" xs={1} sm={2} md={3} lg={3} xl={3}> {/* set number of cards per row */}
        {chef.map((c, index) => (
          <Col key={index}>
            <Card className="mb-5">
              <Card.Body>
                <img className="img-fluid" src={c.chef_picture} alt="" />
                <h5>{c.chef_name}</h5>
                <p>Experience: {c.years_of_experience}</p>
                <p>Recipes: {c.num_of_recipes}</p>
                <p><FaRegHeart/>{c.num_of_likes}</p>
                <Link to={`/details/${c.id}`}>View Recipes</Link>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ChefCard;
