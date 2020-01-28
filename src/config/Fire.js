import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyATzTOIUH4Wym1SdQ806O_LuJguYvCmeAc",
  authDomain: "karthik-baskaran.firebaseapp.com",
  databaseURL: "https://karthik-baskaran.firebaseio.com",
  projectId: "karthik-baskaran",
  storageBucket: "karthik-baskaran.appspot.com",
  messagingSenderId: "738694629886",
  appId: "1:738694629886:web:fa33fe09694c09457998af"
};
const fire = firebase.initializeApp(config);
export default fire;
