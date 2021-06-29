import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCQgbXb72t64LdJO3oIzQdSDDsxrxpy0w4',
  authDomain: 'fir-auth-55677.firebaseapp.com',
  databaseURL:
    'https://fir-auth-55677-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'fir-auth-55677',
  storageBucket: 'fir-auth-55677.appspot.com',
  messagingSenderId: '399439626204',
  appId: '1:399439626204:web:de188a5b8dcb5893f2d919',
  measurementId: 'G-ELSLPX35KR',
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
