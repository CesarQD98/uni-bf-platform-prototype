import DashboardMenuBar from "./components/dashboard-menubar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <DashboardMenuBar />
      {children}
    </>
  );
}
