import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Forms() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className='m-5'>

                <Form.Group className='col' controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        First name not valid!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='col' controlId="validationCustom02">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Last name not valid!
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>

            <Row className='m-5'>

                <Form.Group className='col' controlId="validationCustom03">
                    <Form.Control 
                        required
                        type="email" 
                        placeholder="Email address" 
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Email address not valid!
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>

            <Row className='m-5'>

                <Form.Group className='col' controlId="validationCustom04">
                    <Form.Control 
                        required
                        type="tel" 
                        pattern="[0-9]{10}" 
                        placeholder="Phone number" 
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Phone number not valid!
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>

            <Row className='m-5'>

                <Form.Group className="mb-3 d-flex">
                    <Form.Check 
                        required
                        className='justify-content-start' 
                        label="I agree to receive emails on latest news"
                    />
                </Form.Group>

            </Row>

            <Row className='m-5'>

                <Button id='myBtn' className='col-10 mx-auto' type="submit">SUBSCRIBE</Button>

            </Row>

        </Form>
  );
}
