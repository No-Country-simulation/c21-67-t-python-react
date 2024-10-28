import { DataContact } from "./form/FormUser";
import { Location } from "./Location";

export const Contact = () => {
  return (
    <main className="mx-auto">
      <div className="grid grid-cols-1 content-center items-center m-auto w-4/5 gap-x-8 gap-y-16 px-4 py-8  lg:grid-cols-2 ">
        <div>
          <div className="w-3/5 m-auto">
            <h1 className="text-center uppercase lg:text-lg sm:text-md font-semibold text-primary mb-2">
              ¿DÓNDE ESTAMOS?
            </h1>
          </div>
          <Location />
        </div>
        <div className="p-4 border-solid border-2 border-primary">
          <h2 className=" text-center text-2xl font-semibold w-full text-primary">
            Contactanos
          </h2>
          <DataContact />
        </div>
      </div>
    </main>
  );
};
