// firebase-messaging-sw.js — FCM service worker สำหรับ Flutter web
// ดึง config ให้ตรงกับ firebase_options.dart (project mr-restaurants)
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBz9_QqztBkUqsiyttpZxBf8H4gkIajF0Q',
  authDomain: 'mr-restaurants.firebaseapp.com',
  projectId: 'mr-restaurants',
  storageBucket: 'mr-restaurants.firebasestorage.app',
  messagingSenderId: '639576913969',
  appId: '1:639576913969:web:f3310ba591d36a39c83d10',
  measurementId: 'G-RVHLLQ54BX',
});

try {
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage((payload) => {
    console.log('PUSH-BG', payload);
  });
} catch (e) {
  console.warn('FCM sw init failed', e);
}
