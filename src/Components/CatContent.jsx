import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CatContent(props) {

    const [searchName, setSearchName] = useState("");

    const handleChange = (event) =>{
        setSearchName(event.target.value);
    }

    let catFound = false;
  
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
                    {props.catBreeds.map(cat => {
                        if(cat.name.toLowerCase().includes(searchName.toLowerCase())){
                            catFound = true;
                            return ( 
                                <Col key={cat.name} xs={12} md={6} lg={4} xl={3}>
                                    <Card id="cardContainer" className='align-items-center text-center m-5 mb-3 border-0'>
                                        <Link to={"/Cats/" + cat.name}>
                                            <Card.Img 
                                                id='cardImg'
                                                variant="top" 
                                                src={cat.img} 
                                                alt={cat.name} 
                                            />
                                        </Link>
                                    </Card>
                                    <Card id="cardContainer" className='text-center border-0'>
                                        <Card.Title id="cardName">
                                            {cat.name}
                                        </Card.Title>
                                    </Card>
                                </Col>
                            )
                        }
                    })}
                </Row>  
                {catFound ? null : 
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
