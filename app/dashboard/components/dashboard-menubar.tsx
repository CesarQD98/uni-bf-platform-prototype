import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export default function DashboardMenuBar() {
  return (
    <Menubar className="px-5">
      <Link href="/dashboard" className="mr-5">
        <h1 className="font-bold">UNI BF</h1>
      </Link>
      <MenubarMenu>
        <MenubarTrigger>Ingresos</MenubarTrigger>
        <MenubarContent>
          <Link passHref href="/dashboard/ingresos/nuevo-ingreso">
            <MenubarItem>Nuevo ingreso de BF</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
