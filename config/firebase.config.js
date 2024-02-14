// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, browserLocalPersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwnskQSGh5_KJ0_mpaCRs49A9li4Lavc4",
    authDomain: "stayease-88781.firebaseapp.com",
    projectId: "stayease-88781",
    storageBucket: "stayease-88781.appspot.com",
    messagingSenderId: "846557267475",
    appId: "1:846557267475:web:0c5b43bd2bd352b34ca1e6",
    measurementId: "G-6XR4LELB09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set persistence with AsyncStorage
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage) || browserLocalPersistence
});

// Get the Auth instance
const auth = getAuth(app);

export { auth };
