import ProtectedRoute from "@/components/ProtectedRoute";
import AdminPanel from "@/components/AdminPanel";

export default function AdminPage() {
  return (
    <ProtectedRoute adminOnly>
      <AdminPanel />
    </ProtectedRoute>
  );
}
