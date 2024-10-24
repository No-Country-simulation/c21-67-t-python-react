import { propsProduct } from "@/types/product";
import { API_URL } from "@/utils/config";

export async function getProducts(): Promise<propsProduct[]> {
  try {
    const response = await fetch(`${API_URL}/character`);

    if (!response.ok) {
      throw new Error("Failed to fetch app");
    }

    const data = await response.json();
    console.log(data);

    const products = data.results.map((ele: any) => ({
      id: ele.id,
      name: ele.name,
      description: ele.species + ele.gender,
      image: ele.image,
      price: "50",
      stock: "100",
      created_at: ele.created,
      updated_at: ele.created,
      category_id: 2,
    }));

    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Error at getting courses");
  }
}
