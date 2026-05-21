import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCK-NK430SzcwNidkJvlaLt5bGSRMfLdPc",
  authDomain: "cv-jcuevaas.firebaseapp.com",
  projectId: "cv-jcuevaas",
  storageBucket: "cv-jcuevaas.firebasestorage.app",
  messagingSenderId: "374779778197",
  appId: "1:374779778197:web:18b6bb927dc1d2ce3b379c"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const auth = getAuth(app);

export default auth;