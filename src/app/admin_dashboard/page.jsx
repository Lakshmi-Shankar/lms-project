// File: /app/admin_dashboard/page.js
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import AdminDashboardPageComponent from "../../components/Pages/Student-Dashboard";
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function AdminDashboardPage() {

  const session = await getServerSession(authOptions);

  // Redirect if not logged in or not an admin
  if (!session || session.user?.role !== 'admin') {
    console.log(session)
    redirect('/signin');
  }



  return <AdminDashboardPageComponent />;
}
