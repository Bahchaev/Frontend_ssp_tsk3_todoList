import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const database = () => {
    let dB = firebase.database();

    //добавление нового пользователя в базу данных
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            let email = user.email;
            let userId = user.uid;
            let todoList = [];
            dB.ref(`${userId}/`).on('value', function (snapshot) {
                if (!snapshot.val()) {
                    dB.ref(`${userId}/`).set({
                        email: email,
                        todoList: []
                    }).then()
                }
            })
        }
    })
};

export default database