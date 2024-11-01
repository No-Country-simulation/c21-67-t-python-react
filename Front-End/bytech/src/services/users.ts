import { dataBaseUser, dataUser, propsUser, userCreate } from "@/types/user";
import { API_URL } from "@/utils/config";

export async function getUsers(): Promise<dataUser[]> {
  try {
    const response = await fetch("/users/", {
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
    throw new Error("Error at getting users");
  }
}

export async function getUserById(idUser: number): Promise<dataUser> {
  try {
    const response = await fetch(`${API_URL}/users/${idUser}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store", // Esto asegura que se obtengan datos frescos en cada solicitud.
    });

    if (!response.ok) {
      throw new Error("Failed to get user");
    }

    const user = await response.json();

    return user;
  } catch (error) {
    console.error("Error al obtener detalles del usuario:", error);
    throw new Error("Failed to get user");
  }
}

export async function createUser(
  user: propsUser,
  iSeller: boolean
): Promise<dataBaseUser> {
  try {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    const data: userCreate = {
      address: user.address,
      created_at: hoy.toISOString(),
      email: user.email,
      is_active: true,
      is_seller: iSeller,
      password: user.password,
      phone_number: user.cellphone,
      updated_at: hoy.toISOString(),
      username: user.name.concat(user.lastname.substring(0, 2)),
    };

    const response = await fetch(`${API_URL}/users/create/`, {
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
      throw new Error("Failed to create user");
    }
    const dataApi = response.json();

    return dataApi;
  } catch (error) {
    console.error("Error al obtener detalles del usuario:", error);
    throw new Error("Failed to create user");
  }
}
