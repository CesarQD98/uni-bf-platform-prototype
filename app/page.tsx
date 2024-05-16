import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-12 items-center justify-center">
      <h1 className="text-5xl font-bold">This is a public page</h1>

      <section>
        <h1 className="text-xl">Quick links</h1>
        <ul>
          <li>
            <Link
              href="/dashboard/ingresos/nuevo-ingreso"
              className="underline"
            >
              Formulario de nuevo ingreso
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
