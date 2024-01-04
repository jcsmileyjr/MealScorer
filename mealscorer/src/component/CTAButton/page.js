import styles from "./ctaButton.module.css";
import Link from "next/link";
export default async function CTAButton ({title, link}) {
    return(
        <Link className={styles.container} href={link}>
            <button className={styles.ctaButton} >
                {title}
            </button>
        </Link>
    )
}