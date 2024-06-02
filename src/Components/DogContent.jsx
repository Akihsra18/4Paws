import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DogContent(props) {

    const [searchName, setSearchName] = useState("");

    const handleChange = (event) =>{
        setSearchName(event.target.value);
    }

    let dogFound = false;
  
    return (
        <>
            <Container fluid className="mt-3 mb-3">
                <Row className="me-4">
                    <input 
                        id="searchBar" 
                        type="search" 
                        onChange={handleChange}
                        className="col-xl-2 offset-xl-10 col-lg-3 offset-lg-9 col-md-4 offset-md-8 col-5 offset-7"
                        placeholder="Search.."
                    />
                    {props.dogBreeds.map(dog => {
                        if(dog.name.toLowerCase().includes(searchName.toLowerCase())){
                            dogFound = true;
                            return ( 
                                <Col key={dog.name} xs={12} md={6} lg={4} xl={3}>
                                    
                                    <Card id="cardContainer" className='align-items-center text-center m-5 mb-3 border-0'>
                                        <Link to={"/Dogs/" + dog.name}>
                                            <Card.Img 
                                                id='cardImg2'
                                                variant="top" 
                                                src={dog.img} 
                                                alt={dog.name} 
                                                className="border border-2 border-dark"
                                            />
                                        </Link>
                                        <Card.Body className='text-center border-0'>
                                            <Card.Title id="cardName">
                                                {dog.name}
                                            </Card.Title>
                                        </Card.Body>
                                        <ListGroup id="cardItem" className="list-group-flush">
                                            <ListGroup.Item id="cardContainer">
                                                Protectiveness : {dog.protectiveness}
                                            </ListGroup.Item>
                                            <ListGroup.Item id="cardContainer">
                                                Trainability : {dog.trainability}
                                            </ListGroup.Item>
                                            <ListGroup.Item id="cardContainer">
                                                Energy : {dog.energy}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                    
                                </Col>
                            )
                        }
                    })}
                </Row>
                {dogFound ? null : 
                            <Col>
                                <Card id="cardContainer" className='text-center border-0'>
                                    <Card.Title id="cardName" className="text-dark m-5">
                                        No results
                                    </Card.Title>
                                </Card>
                            </Col>
                        }  
            </Container>

            <footer className="row g-0 align-items-center text-center">
                <p>©Copyright 4Paws 2024</p>
            </footer>
        </>
    );

}
