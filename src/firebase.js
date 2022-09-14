import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "FIREBASE_CONSOLE",
  authDomain: "FIREBASE_CONSOLE",
  projectId: "FIREBASE_CONSOLE",
  storageBucket: "FIREBASE_CONSOLE",
  messagingSenderId: "FIREBASE_CONSOLE",
  appId: "FIREBASE_CONSOLE",
  measurementId: "FIREBASE_CONSOLE", // unneed
};
const vapidKey = "FIREBASE_CONSOLE";

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
