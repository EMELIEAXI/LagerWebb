import type { JSX } from "react";
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) return <Navigate to ="/" replace />;
  if (!isAdmin) return <Navigate to="/home" />;

  return children;
}