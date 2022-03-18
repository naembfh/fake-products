import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

const ReactModal = (props) => {
    // console.log(props.product)
    const { title, image, price, description } = props.product;
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>


                <Modal.Header closeButton>
                    <img className='w-50' src={image} alt="" srcset="" />
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <h1>{price} RM</h1>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Buy Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;