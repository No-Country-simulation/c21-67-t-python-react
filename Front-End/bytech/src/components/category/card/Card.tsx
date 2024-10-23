import { propsCategory } from "@/types/category";

export const Card = ({ name, id, description }: propsCategory) => {
  return (
    <div
      key={id}
      className="h-40 flex flex-col justify-center items-center bg-background rounded-lg drop-shadow-lg hover:opacity-45"
    >
      <h3 className="ml-2 mb-0 text-primary font-semibold">{name}</h3>
      <p className="text-textCard  ml-2 mt-0">
        {description.substring(0, 30)}...
      </p>
    </div>
  );
};
