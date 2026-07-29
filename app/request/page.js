import ProtectedRoute from "@/components/ProtectedRoute";
import RequestForm from "@/components/RequestForm";

export default function RequestPage() {
  return (
    <ProtectedRoute>
      <RequestForm />
    </ProtectedRoute>
  );
}
