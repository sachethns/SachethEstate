// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Use environment variable for API key
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, // Use environment variable for auth domain
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // Use environment variable for project ID
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // Use environment variable for storage bucket
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // Use environment variable for messaging sender ID
  appId: import.meta.env.VITE_FIREBASE_APP_ID, // Use environment variable for app ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
