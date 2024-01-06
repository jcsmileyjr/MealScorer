import styles from './header.module.css'
import Link from "next/link";


export default function header({}) {
    return (
        <Link className={styles.container} href="/">            
            <h1>Meal Planner and Scorer</h1>
        </Link>
    )
}
