import { LoaderCircle } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex gap-2 items-center">
      <LoaderCircle size={14} className="animate-spin" />
      <h1>Cargando...</h1>
    </div>
  );
}
