import styles from './createNewFood.module.css';
import Header from '@/component/Header/page';
import Link from "next/link";

export default async function createNewFood ({}) {
    return(
        <main className={styles.main}>
            <Header />
            <section className={styles.contentContainer}>
                <div className={styles.inputContainer}>
                    <label className={styles.labelField} htmlFor='nameInputField'>Name</label>
                    <input type="text" className={`${styles.dataField}`} id="nameInputField" />
                </div>
            </section>
            <section className={styles.contentContainer}>
                <div className={styles.inputContainer}>
                    <label className={styles.labelField} htmlFor='typeField'>Type</label>
                    <select className={`${styles.dataField} ${styles.selectField}`} id="typeField">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </section>
            <section className={styles.contentContainer}>
                <button className={styles.doneButton} type="button">Done</button>
            </section>
        </main>
    )
}