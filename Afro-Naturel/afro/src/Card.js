import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductData from "./Product";
import Nom from "./components/Nom";
import Prix from "./components/Prix";
import Image from "./components/Image";
import Description from "./components/Description";

function CardItem() {
  return (
    <div className="card-container">
      <h3 style={{ textAlign: "center", marginTop: "5px" }}>EN VEDETTE</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "30px",
        }}
        className="card-row"
      >
        {ProductData.map((prod) => (
          <Card key={prod.id} style={{ width: "18rem" }}>
            <Image image={prod.image} />
            <Card.Body>
              <Nom nom={prod.nom} />
              <Prix prix={prod.prix} />
              <Description description={prod.description} />
              <Button variant="primary">Acheter</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
