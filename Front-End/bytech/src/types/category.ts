export interface propsCategory {
  id: number;
  name: string; //(max_length=255)
  description: string;
  status: boolean; //(default=True)
}
export interface categoryCreate {
  name: string; //(max_length=255)
  description: string;
}
