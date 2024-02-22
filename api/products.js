import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default async (req, res) => {
    if (req.method === 'GET') {
      const q = query(collection(db, "products"), orderBy("created_at", "desc"));
      const data = await getDocs(q);
      const productsArray = await Promise.all(data.docs.map(async (doc) => {
          const docData = doc.data();
          return {
                  ...docData,
                  id: doc.id,
                  created_at: docData.created_at.toDate().toISOString(),
                  category: {id: docData.category.id},
          }
      }));
      res.status(200).json(productsArray);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };