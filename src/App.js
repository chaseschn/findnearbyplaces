import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Menu from "./components/Menu";

import { useState } from "react";
import { useParams } from "react-router-dom";

function App() {

    const [customer, setCustomer] = useState(localStorage.getItem("customer"));

    let customerLoggedInHandler = (customerEmail) => {
        localStorage.setItem("customer", customerEmail);
    }

    let customerLoggedOutHandler = () => {
        localStorage.removeItem("customer");
    }

    return (
        <div className="App">
            <HashRouter>
                <Container>
                    <Row>
                        <Col>
                            <Menu user={customer} customerLoggedOut={customerLoggedOutHandler}/>
                        </Col>
                    </Row>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login/:from" element={<Login customerLoggedIn={customerLoggedInHandler} />}></Route>
                        <Route path="/login" element={<Login customerLoggedIn={customerLoggedInHandler} />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </Routes>

                </Container>
            </HashRouter>
        </div>
    );
}


export default App;
