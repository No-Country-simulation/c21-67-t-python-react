import { propsCategory } from "@/types/category";
import { API_URL } from "@/utils/config";

export async function getCategory(): Promise<propsCategory[]> {
  try {
    const response = await fetch(`${API_URL}/episode`);

    if (!response.ok) {
      throw new Error("Failed to fetch app");
    }

    const data = await response.json();
    console.log(data);

    const categorys = data.results.map((ele: any) => ({
      id: ele.id,
      name: ele.name, //(max_length:255)
      description: ele.episode,
      status: true, //(default:True)
    }));

    return categorys;
  } catch (error) {
    console.error(error);
    throw new Error("Error at getting courses");
  }
}
