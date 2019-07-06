import * as firebase from 'firebase';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCzA8SOQSrL2x2WIO3NFd8ESq-vHxyJdRs",
  authDomain: "fooddeliveryappreactjs.firebaseapp.com",
  databaseURL: "https://fooddeliveryappreactjs.firebaseio.com",
  projectId: "fooddeliveryappreactjs",
  storageBucket: "fooddeliveryappreactjs.appspot.com",
  messagingSenderId: "1052700272989",
  appId: "1:1052700272989:web:000f46a38f5aec3f"
};
export default firebase.initializeApp(firebaseConfig)
