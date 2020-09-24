import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCc-W_3IyWUeqBHBoNZeMCpQD-1hZku18U",
	authDomain: "clone-5724c.firebaseapp.com",
	databaseURL: "https://clone-5724c.firebaseio.com",
	projectId: "clone-5724c",
	storageBucket: "clone-5724c.appspot.com",
	messagingSenderId: "322025247761",
	appId: "1:322025247761:web:23aff78202ec6485004db0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
