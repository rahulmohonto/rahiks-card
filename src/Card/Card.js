import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Card.css';
import bitcoin from '../images/images-5.png';
import payeer from '../images/maxresdefault (1).jpg';
import paypal from '../images/pp_h_rgb.jpg';

const RahikCard = () => {
    return (
        <section className="card-holder">
            <div className="container">
                <div className="row card-row">
                    <div className="col-md-4 col-lg-3">
                        <Card className="card" style={{ width: '14rem', height: '25rem' }}>
                            <Card.Img variant="top" className="img-fluid card-image" src={bitcoin} />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Bitcoin</Card.Title>
                                <Card.Text className="card-text">
                                    <span className>From</span> <br />
                                    <h4 className=""><b>1,000</b></h4>
                                </Card.Text >
                                <Button style={{ height: '2rem' }} className="text-center card-button" variant="primary">Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <Card style={{ width: '14rem', height: '25rem' }}>
                            <Card.Img variant="top" className="img-fluid card-image" src={paypal} />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Card Title</Card.Title>
                                <Card.Text className="card-text">
                                    <span class>From</span> <br />
                                    <h4 className=""><b>1,000</b></h4>
                                </Card.Text>
                                <Button style={{ height: '2rem' }} className="text-center card-button" variant="primary">Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <Card style={{ width: '14rem', height: '25rem' }}>
                            <Card.Img className="img-fluid card-image" variant="top" src={payeer} />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Paypal</Card.Title>
                                <Card.Text className="card-text">
                                    <span class>From</span> <br />
                                    <h4 className=""><b>1,000</b></h4>
                                </Card.Text>
                                <Button style={{ height: '2rem' }} className="text-center  card-button" variant="primary">Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <Card style={{ width: '14rem', height: '25rem' }}>
                            <Card.Img className="img-fluid card-image" variant="top" src={payeer} />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Paypal</Card.Title>
                                <Card.Text className="card-text">
                                    <span class>From</span> <br />
                                    <h4 className=""><b>1,000</b></h4>
                                </Card.Text>
                                <Button style={{ height: '2rem' }} className="text-center  card-button" variant="primary">Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div >
        </section>
    );
};

export default RahikCard;