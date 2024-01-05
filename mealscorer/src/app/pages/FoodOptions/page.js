import styles from './foodOptions.module.css';
import Header from '@/component/Header/page';
import CTAButton from '@/component/CTAButton/page';

async function getFoodItems () {
    const response = await fetch('http://localhost:8080/getFoodItems', { cache: 'no-store' });
    const data = await response.json();
    return data;
}

export default async function FoodOptions () {
    const data = await getFoodItems();
    
    return(
        <main className={styles.main}>
            <Header />
            <section className={styles.container}>
                <CTAButton link="/pages/CreateNewFood" title="Create Food Item" />
            </section>
            <section className={styles.container}><p>OR</p></section>
            
            <section className={styles.container}>
                <CTAButton link="/" title="Design Meal" />
            </section>
            <section className={styles.container}>
                <p className={styles.contentTitle}>Food Options</p>
                <div className={styles.contentContainer}>
                    {data && data.map( (item, index) => (
                        <p className={styles.contentItem} key={`item-${index}`}>{item.name}</p>
                    ))
                    }
                    {data=== undefined &&
                        <p>No data</p>
                    }
                </div>
            </section>
        </main>
    )
}