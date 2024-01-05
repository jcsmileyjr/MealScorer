import styles from './foodOptions.module.css';
import Header from '@/component/Header/page';
import CTAButton from '@/component/CTAButton/page';

const fakeData = [{"name":"Chicken", "type":"meat"}, {"name":"Rolls", "type":"bread"}, {"name":"Apple", "type":"fruit"}, {"name":"Chicken", "type":"meat"}, {"name":"Rolls", "type":"bread"}, {"name":"Apple", "type":"fruit"}, {"name":"Chicken", "type":"meat"}, {"name":"Rolls", "type":"bread"}, {"name":"Apple", "type":"fruit"} ]

const FoodOptions = () => {
    return(
        <main className={styles.main}>
            <Header />
            <section className={styles.container}>
                <CTAButton link="/" title="Create Food Item" />
            </section>
            <section className={styles.container}><p>OR</p></section>
            
            <section className={styles.container}>
                <CTAButton link="/" title="Design Meal" />
            </section>
            <section className={styles.container}>
                <p className={styles.contentTitle}>Food Options</p>
                <div className={styles.contentContainer}>
                    {fakeData && fakeData.map( (item, index) => (
                        <p className={styles.contentItem} key={`item-${index}`}>{item.name}</p>
                    ))
                    }
                </div>
            </section>
        </main>
    )
}

export default FoodOptions;