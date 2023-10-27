import React from 'react';
import './signup.css';

export function Signup(){
    return(
        <div class="container">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo">Chatbot</h2>
        </div>
        </div>
    
        <div className="form">
            <h2>SignUp Here</h2>
            <input type="text" name="" placeholder="Username"/>
            <input type="email" name="email" placeholder="Enter your email-id"/>
            <input type="password" name="" placeholder="Enter password"/>
            <input type="password" name="" placeholder="Confirm password"/>
            <button class="btn"><a href="#">SIGN IN</a></button>
        </div >
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </div>
    );

}

