import { propsProduct } from "@/types/product";
import { API_URL } from "@/utils/config";

export async function getProducts(): Promise<propsProduct[]> {
  try {
    const response = await fetch(`${API_URL}/products/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch app");
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error at getting products");
  }
}

export async function getProductById(productId: number): Promise<propsProduct> {
  try {
    const response = await fetch(`${API_URL}/products/${productId}/`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch app");
    }

    const productData = await response.json();

    return productData;
  } catch (error) {
    console.error("Error al obtener detalles del producto:", error);
    throw new Error("Failed to fetch app");
  }
}

export async function createProduct(
  producto: propsProduct
): Promise<propsProduct> {
  try {
    const response = await fetch(`${API_URL}/products/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "no-cache", // Esto asegura que se obtengan datos frescos en cada solicitud.
      body: JSON.stringify(producto),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch app");
    }

    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error("Error al obtener los detalles del producto:", error);
    throw new Error("Failed to fetch app");
  }
}

// Api Fictisia
// export async function getProducts(): Promise<propsProduct[]> {
//   try {
//     const response = await fetch(`https://rickandmortyapi.com/api/character`);

//     if (!response.ok) {
//       throw new Error("Failed to fetch app");
//     }

//     const data = await response.json();
//     console.log(data);

//     const products: propsProduct[] = data.results.map((ele: any) => ({
//       id: ele.id,
//       name: ele.name,
//       description: ele.species + ele.gender,
//       images: ele.image,
//       price: "50",
//       stock: "100",
//       created_at: ele.created,
//       updated_at: ele.created,
//       category_id: 2,
//     }));

//     return products;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error at getting courses");
//   }
// }

// export async function getProductById(
//   productId: number
// ): Promise<propsProduct | null> {
//   try {
//     const response = await fetch(
//       `https://rickandmortyapi.com/api/character/${productId}`,
//       {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         cache: "no-store", // Esto asegura que se obtengan datos frescos en cada solicitud.
//       }
//     );

//     if (!response.ok) {
//       return null;
//     }

//     const productData = await response.json();

//     const product: propsProduct = {
//       id: productData.id,
//       name: productData.name,
//       description: productData.species + productData.gender,
//       images: productData.image,
//       price: "50",
//       stock: 100,
//       created_at: productData.created,
//       updated_at: productData.created,
//       category_id: 2,
//     };

//     return product;
//   } catch (error) {
//     console.error("Error al obtener los detalles del producto:", error);
//     return null;
//   }
// }
