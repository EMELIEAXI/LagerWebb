import styles from "../styles/Dashboard.module.css"
import { Link } from "react-router-dom";

export default function RecentChanges() {
  const dummyChanges = [
    { id: 1, name: "Skruv M10", qtyChange: 2, date: "2025-11-19" },
    { id: 2, name: "Hydraulpump", qtyChange: 5, date: "2025-11-18" },
  ];

  return (
    <section className={styles["dashboard-section"]}>
        <h4>Senaste uttag</h4>
          <ul className={styles.list}>
            {dummyChanges.map(item => (
              <Link to="./history/productchange" key={item.id}>
                {item.name} 
                <span>{item.date}</span>
                <span className={styles.warnQty}> - {item.qtyChange} stycken</span>
              </Link>
            ))}  
          </ul>
    </section>
  );
}