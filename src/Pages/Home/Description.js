import { faClipboardList, faCoffee, faGlobe, faHandPaper, faPeopleGroup, faThermometer4, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from './Button';

const Description = () => {
    return (
        <div className="discription-container">
            <div className="discription my-5 container pt-5">
                <div class="p-3">
                    <div class="hero-content">
                        <div class="">
                            <h2 className='text-success text-center'>Millions of people are with us</h2>
                            <h5>We try to understand as clients. only for good service</h5>
                            <hr style={{ padding: "2px", background: "#198754e7" }} className='w-50 mx-auto mt-4' />
                        </div>
                    </div>
                </div>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4 container mx-auto text-center">
                <Col>
                    <Card className='border-0 shadow pt-2'>
                        <FontAwesomeIcon icon={faPeopleGroup} size="6x" color='#198754e7' />
                        <Card.Body>
                            <h5>Happy clients</h5>
                            <h2 className="text-h1 text-success">550+</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow pt-2'>
                        <FontAwesomeIcon icon={faThumbsUp} size="6x" color='#198754e7' />
                        <Card.Body>
                            <h5>feedback</h5>
                            <h2 className="text-h1 text-success">400+</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow pt-2'>
                        <FontAwesomeIcon icon={faClipboardList} size="6x" color='#198754e7' />
                        <Card.Body>
                            <h5>Finished project</h5>
                            <h2 className="text-success">700+</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow pt-2'>
                        <FontAwesomeIcon icon={faGlobe} size="6x" color='#198754e7' />
                        <Card.Body>
                            <h5>Countries</h5>
                            <h2 className="text-h1 text-success">150+</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="">
                <div style={{ height: "45vh" }} className="bg-success start">
                    <div className="" id='description'>
                        <div className="p-4">
                            <h2>Get start wite us,,</h2>
                            <h6 className="mb-4">We pray that your business will improve a lot.</h6>
                            <a href="#contuctContainer">
                                <button className='btn btn-warning'>Contuct us</button>
                            </a>
                            <svg className='drow' viewBox="0 0 1695 68">
                                <path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z" fill="#ffff" ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;