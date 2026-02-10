// Centralized Firebase Configuration using Environment Variables
// This file loads configuration from .env file

export const firebaseConfigAuth = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_AUTH,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_AUTH,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL_AUTH,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID_AUTH,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_AUTH,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID_AUTH,
  appId: import.meta.env.VITE_FIREBASE_APP_ID_AUTH,
};

export const firebaseConfigDB = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_DB,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_DB,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL_DB,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID_DB,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_DB,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID_DB,
  appId: import.meta.env.VITE_FIREBASE_APP_ID_DB,
};

export const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
export const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const appEnv = import.meta.env.VITE_APP_ENV;
export const appUrl = import.meta.env.VITE_APP_URL;
