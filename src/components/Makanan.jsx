// Makanan.jsx
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Makanan = ({ kota, dataMakanan }) => {
  const filteredMakanan = dataMakanan.filter((makanan) => makanan.asal === kota);

  return (
    <div>
      <h2>Kota {kota}</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredMakanan.map((makanan) => (
          <Col key={makanan.id}>
            <Card>
              <Card.Img variant="top" src={makanan.foto} alt={makanan.nama} />
              <Card.Body>
                <Card.Title>{makanan.nama}</Card.Title>
                <Card.Text>{makanan.deskripsi}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Makanan;