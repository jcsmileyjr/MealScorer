import styles from './header.module.css'

/**
 * 
 * @returns 
 */
export default async function header({}) {
    return (
        <div className={styles.container}>            
            <h1>Meal Planner and Scorer</h1>
        </div>
    )
}
