import { categoryCreate, propsCategory } from "@/types/category";
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

export async function createCategory(
  data: categoryCreate
): Promise<propsCategory> {
  try {
    const response = await fetch(`${API_URL}/category/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "no-cache", // Esto asegura que se obtengan datos frescos en cada solicitud.
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create category");
    }

    const category: propsCategory = await response.json();
    return category;
  } catch (error) {
    console.error(error);
    throw new Error("Error to create category");
  }
}

export async function deleteCategoryById(id: number): Promise<string> {
  try {
    const response = await fetch(`${API_URL}/category/${id}/`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "no-cache", // Esto asegura que se obtengan datos frescos en cada solicitud.
    });

    if (!response.ok) {
      throw new Error("Failed to delete category");
    }

    const isDelete: string = await response.json();
    return isDelete;
  } catch (error) {
    console.error(error);
    throw new Error("Error to delete category");
  }
}

// export async function categoryName(id: number): Promise<propsCategory[]> {
//   try {
//     const response = await fetch(`${API_URL}/category`);

//     if (!response.ok) {
//       throw new Error("Failed to fetch app");
//     }

//     const categorys = await response.json();

//     const name = (id: number) =>
//       categorys.filter((ele: propsCategory) => {
//         if (ele.id == id) {
//           return ele.name;
//         }
//       });

//     const isname = name(2);

//     return isname[0].name;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error at getting courses");
//   }
// }
