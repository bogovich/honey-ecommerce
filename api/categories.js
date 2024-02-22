import db from '../firebaseInit';
import { collection, getDocs } from 'firebase/firestore/lite';
export default async (req, res) => {
    if (req.method === 'GET') {
      const q = collection(db, "categories");
      const data = await getDocs(q);
      const categoriesArray = data.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      res.status(200).json(categoriesArray);
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };