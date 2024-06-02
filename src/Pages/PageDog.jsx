import { useParams , Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
// import { fonctionPromessesCat } from "../Controller";
import { useState, useEffect } from "react";

export default function PageDog(props) {

    let {dogName} = useParams('dogName');

    const [dogBreed, setDogBreed] = useState({});

    // useEffect(
    //     () => { 
    //     fonctionPromessesDog(name).then(result => setDogBreed(result));
    //     }
    // ,[dogName]);

    useEffect( 
        () => {
            setDogBreed(props.dogBreeds.find(elm => elm.name === dogName));
        }
    ,[dogName, props.dogBreeds]);

    return (
        <>
            <Container fluid id="containerDog">
                <Row id="cardBg">
                    <Col xs={12} md={12} lg={12} xl={12}>
                        <div id="cardImgUS"
                            style={{
                                backgroundImage: 'url(' + dogBreed.img + ')', 
                                height: '75vh',
                                backgroundAttachment: 'fixed',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}
                        >
                        </div>
                    </Col>
                    
                    <Col xs={12} md={10} lg={8} xl={8} className="container-fluid">
                        <Card id="cardDS">

                            <h1 className="p-5 text-center">{dogBreed.name}</h1>

                            <Table striped bordered hover id="table">

                                <tbody className="text-center">
                                    <tr>
                                        <td className="col">
                                        Weight (Male)
                                        </td>
                                        <td className="col">
                                        {dogBreed.min_weight_male ? dogBreed.min_weight_male : "-"}{dogBreed.max_weight_male ? (dogBreed.max_weight_male == dogBreed.min_weight_male ? "" : " - " + dogBreed.max_weight_male) : "-"} lb
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Weight (Female)
                                        </td>
                                        <td className="col">
                                        {dogBreed.min_weight_female ? dogBreed.min_weight_female : "-"}{dogBreed.max_weight_female ? (dogBreed.max_weight_female == dogBreed.min_weight_female ? "" : " - " + dogBreed.max_weight_female) : "-"} lb
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Height (Male)
                                        </td>
                                        <td className="col">
                                        {dogBreed.min_height_male ? dogBreed.min_height_male : "-"}{dogBreed.max_height_male ? (dogBreed.max_height_male == dogBreed.min_height_male ? "" : " - " + dogBreed.max_height_male) : "-"} in
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Height (Female)
                                        </td>
                                        <td className="col">
                                        {dogBreed.min_height_female ? dogBreed.min_height_female : "-"}{dogBreed.max_height_female ? (dogBreed.max_height_female == dogBreed.min_height_female ? "" : " - " + dogBreed.max_height_female) : "-"} in
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Life expectancy
                                        </td>
                                        <td className="col">
                                        {dogBreed.min_life_expectancy ? dogBreed.min_life_expectancy : "-"}{dogBreed.max_life_expectancy ? (dogBreed.max_life_expectancy == dogBreed.min_life_expectancy ? "" : " - " + dogBreed.max_life_expectancy) : "-"} yrs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Grooming
                                        </td>
                                        <td className="col">
                                        {dogBreed.grooming ? dogBreed.grooming : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Shedding
                                        </td>
                                        <td className="col">
                                        {dogBreed.shedding ? dogBreed.shedding : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Drooling
                                        </td>
                                        <td className="col">
                                        {dogBreed.drooling ? dogBreed.drooling : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Playfulness
                                        </td>
                                        <td className="col">
                                        {dogBreed.playfulness ? dogBreed.playfulness : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Barking
                                        </td>
                                        <td className="col">
                                        {dogBreed.barking ? dogBreed.barking : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Coat length
                                        </td>
                                        <td className="col">
                                        {dogBreed.coat_length ? dogBreed.coat_length : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Good with children
                                        </td>
                                        <td className="col">
                                        {dogBreed.good_with_children ? dogBreed.good_with_children : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Good with strangers
                                        </td>
                                        <td className="col">
                                        {dogBreed.good_with_strangers ? dogBreed.good_with_strangers : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col">
                                        Good with other dogs
                                        </td>
                                        <td className="col">
                                        {dogBreed.good_with_other_dogs ? dogBreed.good_with_other_dogs : "-"}
                                        </td>
                                    </tr>
                                </tbody>

                            </Table>

                        </Card>
                    </Col>
                </Row>
            </Container>

            <footer className="row g-0 align-items-center text-center">
                <Link to={"/Dogs/"} className="d-grid gap-2 text-decoration-none">
                    <Button id="myBtn">
                        ↤ Return to Previous Page ⇤
                    </Button>
                </Link>
            </footer>
        </>
    );

}
