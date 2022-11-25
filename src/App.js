import {Button, Container} from "react-bootstrap";
// import {useState} from 'react';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// Own Components
import Signup from "./components/Signup";
import {AuthProvider} from "./contexts/AuthContext";

function App() {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('')

    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <h1 className="text-center">I am bored</h1>
                    <Routes>
                        <Route path='/' element={
                            <Container
                                className="d-flex align-items justify-content-center"
                                style={{minHeight: "100vh"}}
                            >
                                <div className="w-100" style={{maxWidth: "400px"}}>
                                    <Signup/>
                                </div>
                            </Container>
                        }/>
                        <Route path='/app' element={
                            <Button size={"lg"} variant="primary" disabled={true}>I am bored</Button>
                        }/>
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
