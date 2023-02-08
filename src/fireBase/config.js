// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDL1r2FEIIwNjAhvb4oJuva31h_rPMxviE',
    authDomain: 'eledevo-blog.firebaseapp.com',
    projectId: 'eledevo-blog',
    storageBucket: 'eledevo-blog.appspot.com',
    messagingSenderId: '94945059160',
    appId: '1:94945059160:web:28a7dc5acb4bb86502c52d',
    measurementId: 'G-J2YV5VPJRD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
