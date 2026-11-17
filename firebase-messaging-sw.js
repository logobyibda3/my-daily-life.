importScripts("https://www.gstatic.com/firebasejs/13.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.4.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDbnI1u1GmYthIwcJSui9uHR4XrAuNCNu0",
  authDomain: "my-daily-life-77fbc.firebaseapp.com",
  projectId: "my-daily-life-77fbc",
  storageBucket: "my-daily-life-77fbc.firebasestorage.app",
  messagingSenderId: "497301936208",
  appId: "1:497301936208:web:4b5230bc7c0596a123d955"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "منظم حياتي 🌙";

  self.registration.showNotification(title, {
    body: payload.notification?.body || "عندك تذكير جديد",
    icon: "/icon.png"
  });
});