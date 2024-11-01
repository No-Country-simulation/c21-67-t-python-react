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
