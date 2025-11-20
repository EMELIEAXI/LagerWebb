import { useAuth } from "../context/AuthContext";

export default function PartsPage() {
  const { isAdmin } = useAuth();

  return (
    <>
    <h1>Partspage fungerar!</h1>

    {isAdmin && (
      <button>Lägg till reservdelar (endast admin)</button>
    )}
    </>
  );
}