import db from './firebaseInit';
import { collection, getDocs, query, orderBy } from 'firebase/firestore/lite';

export default async (req, res) => {
    if (req.method === 'GET') {
      // Handle GET request
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
      // Handle any other HTTP method
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };