import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from '../styles/NavMenu.module.css'
import { Home, Wrench, History, Menu, X } from "lucide-react"
import { useState } from "react";

export default function NavMenu() {
  const { logout } = useAuth();
  const [ open, setOpen ] = useState(false);

  return (
    <>
    <button onClick={logout} className={styles["logout-btn"]}>Logga ut</button>

    <nav className={styles["nav-wrapper"]}>
      <Link to="/home" className={styles["nav-link"]}><Home size={24}/>Home</Link>
      <Link to="/parts" className={styles["nav-link"]}><Wrench size={24}/>Reservdelar</Link>
      <Link to="/historik" className={styles["nav-link"]}><History size={24}/>Historik</Link>
      <button className={styles["nav-link"]} onClick={() => setOpen(true)}><Menu size={28} /></button>
    </nav>
    </>
  );
}