import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBtLz13kiWZAXKVvBkDe4xHcCV35j1Iqqw",
  authDomain: "finalfrontend-5a26f.firebaseapp.com",
  databaseURL: "https://finalfrontend-5a26f-default-rtdb.firebaseio.com",
  projectId: "finalfrontend-5a26f",
  storageBucket: "finalfrontend-5a26f.appspot.com",
  messagingSenderId: "533361255099",
  appId: "1:533361255099:web:de1486d8f2bbec27113f9e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
