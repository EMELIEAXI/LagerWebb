import styles from "../styles/Dashboard.module.css"
import { Link } from "react-router-dom";

export default function LowStockList() {
  const dummyLowStock = [
    { id: 1, name: "Järnrör", qty: 2 },
    { id: 2, name: "Skruv M8", qty: 6 },
    { id: 3, name: "Plastbelägg", qty: 3 },
    { id: 4, name: "Mätstock", qty: 9 },
    { id: 5, name: "Lasermätare", qty: 5 },
  ];

  return (
    <section className={styles["dashboard-section"]}>
      <h3>Varning</h3>
        <h4>Produkter med lågt lagersaldo</h4>
          <ul className={styles["list"]}>
            {dummyLowStock.map(item => (
              <Link to="./product.id" key={item.id}>
                {item.name} <span className={styles["warnQty"]}>{item.qty} kvar</span>
              </Link>
            ))}  
          </ul>
    </section>
  );
}

            // <Link to="/parts/product.id" className={styles["dash-link"]}>Produkt</Link>
            // <Link to="{./product.id}" className={styles["dash-link"]}>Produkt</Link>
            // <Link to="{./product.id}" className={styles["dash-link"]}>Produkt</Link>