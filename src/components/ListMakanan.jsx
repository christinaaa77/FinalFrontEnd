import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { ambilData } from '../firebase/crudFirebase';
import MyNavbar from './Navbar';

const ListMakanan = () => {
  const [dataMakanan, setDataMakanan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await ambilData();
      setDataMakanan(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      // Handle the error (show an error message, etc.)
    }
  };

  const renderCards = (kota) => {
    const filteredData = dataMakanan.filter((makanan) => makanan.asal === kota);

    return (
      <Row>
        {filteredData.map((makanan) => (
          <Col key={makanan.id} md={4}>
            <Card className="mb-3">
              <Card.Img variant="top" src={makanan.foto} style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body>
                <Card.Title>{makanan.nama}</Card.Title>
                <Card.Text>{makanan.deskripsi}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <MyNavbar/>
    <div className="mt-3">
      <h4><b>Aneka Makanan</b></h4>
      {['Manado', 'Tomohon', 'Bitung', 'Kotamobagu', 'Airmadidi', 'Langowan', 'Tondano', 'Ratahan', 'Kotanopan', 'Amurang'].map((kota) => (
        <div key={kota}>
          <h5>{`Kota:  ${kota}`}</h5>
          {renderCards(kota)}
        </div>
      ))}
    </div>
    </>
  );
};

export default ListMakanan;
