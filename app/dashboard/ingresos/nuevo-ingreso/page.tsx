import { fetchBFTypes, getLastEntryNumber } from "@/app/lib/data";
import { Separator } from "@/components/ui/separator";
import BasicInfoForm from "./components/basic-info-form";
import { BFTypesFormatter } from "@/app/lib/data-parsers";

const dummyTypes = [
  {
    _id: "6625ee92171af2b0f766133c",
    id: 1,
    descripcion: "Orden de Compra",
    __v: 0,
  },
  {
    _id: "6625ee92171af2b0f766133e",
    id: 3,
    descripcion: "Caja Chica",
    __v: 0,
  },
  {
    _id: "6625ee92171af2b0f766133d",
    id: 2,
    descripcion: "Donacion",
    __v: 0,
  },
  {
    _id: "6625ee92171af2b0f766133f",
    id: 4,
    descripcion: "Sin Especificar",
    __v: 0,
  },
];

export default async function NewInboundFormPage() {
  // const typesList = await fetchBFTypes();
  const lastEntryNumber = await getLastEntryNumber();
  const formattedTypes = BFTypesFormatter(dummyTypes);

  return (
    <main>
      <section className="p-8 max-w-screen-lg mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Ingreso de BF</h1>
          <p className="text-muted-foreground">
            En esta sección se registran los ingresos de bienes fiscalizados
            (BF) adquiridos
          </p>
        </div>
        <Separator />
        {/* {JSON.stringify(typesList)} */}

        <BasicInfoForm
          typesList={formattedTypes}
          lastEntryNumber={lastEntryNumber}
        />
      </section>
    </main>
  );
}
