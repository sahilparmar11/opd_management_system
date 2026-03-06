import Link from "next/link";

export default function DashboardNavbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Dashboard</h1>

      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/reports">Reports</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}
