// File: /app/admin_dashboard/page.js
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AdminDashboardPageComponent from "../../components/Pages/student-dashboard-page";
import { NEXT_AUTH } from '../api/auth/[...nextauth]/route';

export default async function AdminDashboardPage() {

  // Redirect if not logged in or not an admin
//   if (!session || session.user?.role !== 'admin') {
//     redirect('/signin');
//   }



  return <AdminDashboardPageComponent />;
}
