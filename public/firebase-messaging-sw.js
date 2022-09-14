/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "FIREBASE_CONSOLE",
  authDomain: "FIREBASE_CONSOLE",
  projectId: "FIREBASE_CONSOLE",
  storageBucket: "FIREBASE_CONSOLE",
  messagingSenderId: "FIREBASE_CONSOLE",
  appId: "FIREBASE_CONSOLE",
  measurementId: "FIREBASE_CONSOLE", // unneed
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
