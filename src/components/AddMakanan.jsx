import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { tambahData, ambilData } from '../firebase/crudFirebase';
import Makanan from './Makanan';

const TambahMakanan = () => {
    const [nama, setNama] = useState('');
    const [asal, setAsal] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [foto, setFoto] = useState('');
    const [kategori, setKategori] = useState('');
    const [dataMakanan, setDataMakanan] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await ambilData();
            setDataMakanan(data);
        };
        fetchData();
    }, []);

    const handleTambahMakanan = async () => {
        const newFood = {
            nama,
            asal: kategori, // Menggunakan kategori sebagai asal
            deskripsi,
            foto,
        };

        await tambahData(newFood);

        // Setelah menambahkan data, ambil data terbaru dari Firebase
        const updatedData = await ambilData();
        setDataMakanan(updatedData);

        // Bersihkan formulir setelah menambahkan data
        setNama('');
        setAsal('');
        setDeskripsi('');
        setFoto('');
        setKategori('');
    };

    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formNama">
                                    <Form.Label>Nama Makanan</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Masukkan nama makanan"
                                        value={nama}
                                        onChange={(e) => setNama(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formAsal">
                                    <Form.Label>Kategori Kota</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={kategori}
                                        onChange={(e) => setKategori(e.target.value)}
                                    >
                                        <option value="">Pilih kategori kota</option>
                                        <option value="Manado">Manado</option>
                                        <option value="Tomohon">Tomohon</option>
                                        <option value="Bitung">Bitung</option>
                                        <option value="Kotamobagu">Kotamobagu</option>
                                        <option value="Airmadidi">Airmadidi</option>
                                        <option value="Langowan">Talaud</option>
                                        <option value="Tondano">Tondano</option>
                                        <option value="Ratahan">Ratahan</option>
                                        <option value="Kotanopan">Sangihe</option>
                                        <option value="Amurang">Amurang</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formDeskripsi">
                                    <Form.Label>Deskripsi Makanan</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Masukkan deskripsi makanan"
                                        value={deskripsi}
                                        onChange={(e) => setDeskripsi(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formFoto">
                                    <Form.Label>URL Foto Makanan</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Masukkan URL foto makanan"
                                        value={foto}
                                        onChange={(e) => setFoto(e.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="primary" onClick={handleTambahMakanan}>
                                    Tambah Makanan
                                </Button>
                            </Form>
                        </Card.Body>

                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <h4>Data Makanan</h4>
                            {['Manado', 'Tomohon', 'Bitung', 'Kotamobagu', 'Airmadidi', 'Langowan', 'Tondano', 'Ratahan', 'Kotanopan', 'Amurang'].map((kota) => (
                                <Makanan key={kota} kota={kota} dataMakanan={dataMakanan} snapshotcallback={() => { /* Define your callback logic here */ }} />
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TambahMakanan;
