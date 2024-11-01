import { propsCategory } from "@/types/category";
import { API_URL } from "@/utils/config";

export async function getCategory(): Promise<propsCategory[]> {
  try {
    const response = await fetch(`${API_URL}/category`);

    if (!response.ok) {
      throw new Error("Failed to fetch app");
    }

    const categorys = await response.json();

    return categorys;
  } catch (error) {
    console.error(error);
    throw new Error("Error at getting courses");
  }
}
