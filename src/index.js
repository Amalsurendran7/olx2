import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, {FirebaseContext} from './store/FirebaseContext'
import firebase from'./firebase/config'

ReactDOM.render(

    <Context>
    <FirebaseContext.Provider value={{firebase}}>
        <App /> 
    </FirebaseContext.Provider>
    </Context>,

document.getElementById('root'));
