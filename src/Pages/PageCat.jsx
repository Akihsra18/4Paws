import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { fonctionPromessesCat } from "../Controller";
import { useState, useEffect } from "react";

export default function PageCat(props) {

    let {catName} = useParams('catName');

    const [catBreed, setCatBreed] = useState({});

    // useEffect(
    //     () => { 
    //     fonctionPromessesCat(name).then(result => setCatBreed(result));
    //     }
    // ,[catName]);

    useEffect( 
        () => {
            setCatBreed(props.catBreeds.find(elm => elm.name === catName));
        }
    ,[catName, props.catBreeds]);

    return (
        <>
            <Container fluid id="containerCat">
                <Row>
                    <Col id="cardContainer" xs={12} md={6} lg={6} xl={6}>
                        <Card.Img 
                            id='cardImgRS'
                            variant="top" 
                            src={catBreed.img} 
                            alt={catBreed.name} 
                            className="text-center border-5"
                        />
                    </Col>
                    
                    <Col  id="cardContainer" xs={12} md={6} lg={6} xl={6}>
                        <div id="cardLS">
                            <h1 className="p-5">
                                {catBreed.name}
                            </h1>
                            <h5 className="p-2 ps-5">
                                Length : {catBreed.length ? catBreed.length : "-"}
                            </h5>
                            <h5 className="p-2 ps-5">
                                Origin : {catBreed.origin ? catBreed.origin : "-"}
                            </h5>
                            <h5 className="p-2 ps-5">
                                Weight : {catBreed.min_weight ? catBreed.min_weight : "-"}
                                {catBreed.max_weight ? (catBreed.max_weight == catBreed.min_weight ? "" : " - " + catBreed.max_weight) : "-"} lb
                            </h5>
                            <h5 className="p-2 ps-5">
                                Life expectancy : {catBreed.min_life_expectancy ? catBreed.min_life_expectancy : "-"}
                                {catBreed.max_life_expectancy ? (catBreed.max_life_expectancy == catBreed.min_life_expectancy ? "" : " - " + catBreed.max_life_expectancy) : "-"} yrs
                            </h5>
                            <h5 className="p-2 pe-5 text-end">
                                Playfulness : {catBreed.playfulness ? catBreed.playfulness : "-"}
                            </h5> 
                            <h5 className="p-2 pe-5 text-end">
                                Family friendly : {catBreed.family_friendly ? catBreed.family_friendly : "-"}
                            </h5>
                            <h5 className="p-2 pe-5 text-end">
                                Children friendly : {catBreed.children_friendly ? catBreed.children_friendly : "-"}
                            </h5>
                            <h5 className="p-2 pe-5 text-end">
                                Other pets friendly : {catBreed.other_pets_friendly ? catBreed.other_pets_friendly : "-"}
                            </h5>
                        </div>
                    </Col>
                </Row>
            </Container>

            <footer className="row g-0 align-items-end text-center">
                <Link to={"/Cats/"} className="d-grid gap-2 text-decoration-none">
                    <Button id="myBtn">
                        ↤ Return to Previous Page ⇤
                    </Button>
                </Link>
            </footer>
        </>
    );

}
