import React from 'react';
import './ChooseSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faFaceSmile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

function ChooseSection() {
  return (
    <div className='choose-section'>
        <div className="container">
            <h2 className='text-center mb-5'>Why choose FIZTEX?</h2>
            <div className='row g-4'>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                Lorem Ipsum 
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                We do not keep our students happy
                            </Card.Title>
                            <Card.Text className='text-center'>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                3 Lorem Ipsum
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseSection;