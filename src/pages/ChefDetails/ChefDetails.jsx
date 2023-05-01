import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

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
      </Row>
        <Link to="/">Back to Home</Link>
      </Container>
    </div>
  );
};

export default ChefDetails;
