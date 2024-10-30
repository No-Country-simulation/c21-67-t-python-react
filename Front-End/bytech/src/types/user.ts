export interface propsUser {
  name: string;
  lastname: string;
  address: string;
  cellphone: number;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface userCreate {
  username: string;
  password: string;
  email: string;
  phone_number: number;
  address: string;
  is_seller: boolean;
  is_active: boolean;
  created_at: string | Date;
  updated_at: string | Date;
}

export interface dataUser {
  id: number;
  username: string;
  email: string;
  phone_number: number;
  address: number;
  is_seller: boolean;
  is_active: boolean;
  created_at: string | Date;
  updated_at: string | Date;
}

export interface dataBaseUser {
  username: string;
  email: string;
}
