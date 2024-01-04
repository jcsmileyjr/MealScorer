import styles from "./ctaButton.module.css";
export default async function CTAButton ({title, link}) {
    return(
        <button className={styles.container}>
            {title}
        </button>
    )
}