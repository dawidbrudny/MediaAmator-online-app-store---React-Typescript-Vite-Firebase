//  Firebase
import { db } from './firebase-config.ts';
import { collection, getDocs } from 'firebase/firestore';

import { ProductProps } from '../components/pages/ShopList/Product.tsx';

export async function getProductsData(): Promise<object[]> {
    try {
        const snapshot = await getDocs(collection(db, 'products'));
        const data: ProductProps[] = snapshot.docs.map(doc => ({
            id: doc.id,
            image: doc.data().image,
            name: doc.data().name,
            price: doc.data().price
        }) as ProductProps);
        return data;
    } catch (error) {
        throw new Error(error as string);
        return [];
    }
}