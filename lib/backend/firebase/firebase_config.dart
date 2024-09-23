import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';

Future initFirebase() async {
  if (kIsWeb) {
    await Firebase.initializeApp(
        options: const FirebaseOptions(
            apiKey: "AIzaSyBYotivTuTTLicwf0OGR8DyX9Wz8wp5w6U",
            authDomain: "todo-61e65.firebaseapp.com",
            projectId: "todo-61e65",
            storageBucket: "todo-61e65.appspot.com",
            messagingSenderId: "632447850424",
            appId: "1:632447850424:web:82170bd4f8589ef8e1a14d",
            measurementId: "G-392QRVQXL2"));
  } else {
    await Firebase.initializeApp();
  }
}
