import React from "react";
import firebase from 'firebase/app'
import 'firebase/auth'

import TodoListContainer from "../../Containers/TodoListContainer";
import TaskListContainer from "../../Containers/TaskListContainer";
import database from "../../firebase";

const Auth = () => {
    /**
     * Handles the sign in button press.
     */
    const toggleSignIn = () => {
        if (firebase.auth().currentUser) {
            firebase.auth().signOut()

        } else {
            let email = emailInput.value;
            let password = passwordInput.value;
            firebase.auth().signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        }
    };

    /**
     * Sends an email verification to the user.
     */
    const handleSignUp = () => {
        let email = emailInput.value;
        let password = passwordInput.value;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error)
            })
    };

    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    const initAuth = () => {
        // Listening for auth state changes.
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                let displayName = user.displayName;
                let email = user.email;
                let emailVerified = user.emailVerified;
                let photoURL = user.photoURL;
                let isAnonymous = user.isAnonymous;
                let uid = user.uid;
                let providerData = user.providerData;

                signInButton.textContent = 'Sign out';
                userInfo.textContent = email;
                signUpButton.disabled = true;
                emailInput.disabled = true;
                passwordInput.disabled = true;
                emailInput.value = "";
                passwordInput.value = "";

            } else {
                // User is signed out.
                signInButton.textContent = 'Sign in';
                userInfo.textContent = null;
                signUpButton.disabled = false;
                emailInput.disabled = false;
                passwordInput.disabled = false;
                emailInput.value = "";
                passwordInput.value = "";
            }

            signInButton.addEventListener('click', toggleSignIn, false);
            signUpButton.addEventListener('click', handleSignUp, false);

        })
    };

    window.onload = function() {
        initAuth();
        database()
    };

    let emailInput;
    let passwordInput;
    let signInButton;
    let userInfo;
    let signUpButton;



    return (
        <div>
            <input type="email" placeholder="Email" ref={node => (emailInput = node)}/>
            &nbsp;&nbsp;&nbsp;
            <input type="password" placeholder="Password" ref={node => (passwordInput = node)}/>
            &nbsp;&nbsp;&nbsp;
            <button ref={node => (signInButton = node)}>Sign In</button>
            &nbsp;&nbsp;&nbsp;
            <button ref={node => (signUpButton = node)}>Sign Up</button>
            &nbsp;&nbsp;&nbsp;
            <p ref={node => (userInfo = node)}/>
            <div>
                {/*<TodoListContainer/>*/}
                {/*<TaskListContainer/>*/}
            </div>
        </div>
    )
};

export default Auth