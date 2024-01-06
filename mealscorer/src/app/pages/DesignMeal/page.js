"use client"
import styles from "./designMeal.module.css";
import Header from '@/component/Header/page';
import Link from "next/link";
import { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';

const DesignMeal = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [selectedFood, setSelectedFood] = useState("");
    const [mealScore, setMealScore] = useState("");
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        async function getData () {
            const response = await fetch('http://localhost:8080/getFoodItems', { cache: 'no-store' });
            const data = await response.json();
            setFoodItems(data);
        }
        getData();        
    }, [])

    const createMeal = async () => {
        let foundFoodItem;

        foodItems.forEach( (item) => {
            if(item.name === selectedFood) {
                foundFoodItem = item
            }
        })

        setMeal([...meal, foundFoodItem.name]);
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(foundFoodItem)
        }

        const response = await fetch('http://localhost:8080/createMeal', requestOptions);
        const data = await response.json();
        setMealScore(data);
    }

    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.contentContainer}>
                <div className={styles.inputContainer}>
                    <label className={styles.labelField}>Add Food Item</label>
                    <select onChange={(e) => setSelectedFood(e.target.value)} className={`${styles.dataField}`}>
                        {foodItems && foodItems.map( (item, index) => (
                            <option key={`${item.name}-${index}`} value={item.name}>{item.name}</option>
                        ))
                        }
                    </select>
                </div>
                <div className={styles.addButtonContainer}>
                    <label className={styles.labelField}>Add</label>
                    <button onClick={() => createMeal()} className={`${styles.dataField}`}>Add</button>
                </div>
            </section>
            <section className={styles.resultsContainer}>
                <div className={styles.leftContent}>
                    <p className={`${styles.labelField} ${styles.title}`}>Menu</p>
                    <div className={styles.mealContainer}>
                        {meal && meal.map( (foodName, index) => (
                            <p key={`food-${index}`}>{foodName}</p>
                        ))
                        }
                    </div>
                </div>
                <div className={styles.rightContent}>
                     <p className={`${styles.labelField} ${styles.title}`}>Score</p>
                     <div className={styles.scoreContainer}>
                        <p>{mealScore}</p>
                     </div>
                </div>
            </section>
        </main>
    )
}

export default DesignMeal;

