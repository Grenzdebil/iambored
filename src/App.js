import './App.css';
import {Button} from "react-bootstrap";
import React from 'react';

// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {

    const firebaseConfig = {
        apiKey: "AIzaSyCY2bT9V6C8W9FuooaX9Mty1ZnbxvgdcKw",
        authDomain: "iambored-3bb4f.firebaseapp.com",
        projectId: "iambored-3bb4f",
        storageBucket: "iambored-3bb4f.appspot.com",
        messagingSenderId: "159778339497",
        appId: "1:159778339497:web:aba580020f2eba22bb07b8",
        measurementId: "G-HD788608P9"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    return (
        <div className="App">
            <header className="App-header">
                <Button size={"lg"} variant="primary">I am bored</Button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
