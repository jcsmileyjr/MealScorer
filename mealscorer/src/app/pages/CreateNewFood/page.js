"use client"
import styles from './createNewFood.module.css';
import Header from '@/component/Header/page';
import Link from "next/link";
import { useState} from 'react';
import { useRouter } from 'next/navigation'

const CreateNewFood = () => {
    const router = useRouter() //  Use to relocate user to another page

    const [name, setFoodname] = useState("");
    const [type, setFoodType] = useState("");

    const createFoodItem = () => {
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'name': name, 'type' : type})
        }
        console.log(`Name: ${name} is of type ${type} as: `, requestOptions);

        fetch('http://localhost:8080/createFoodItem', requestOptions);
        router.push('/pages/FoodOptions')         
    }

    return(
        <main className={styles.main}>
            <Header />
            <section className={styles.contentContainer}>
                <div className={styles.inputContainer}>
                    <label className={styles.labelField} htmlFor='nameInputField'>Name</label>
                    <input onChange={(e) => setFoodname(e.target.value)} type="text" className={`${styles.dataField}`} id="nameInputField" />
                </div>
            </section>
            <section className={styles.contentContainer}>
                <div className={styles.inputContainer}>
                    <label className={styles.labelField} htmlFor='typeField'>Type</label>
                    <select onChange={(e) => setFoodType(e.target.value)} className={`${styles.dataField} ${styles.selectField}`} id="typeField">
                        <option value="meat">Meat</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="bread">Bread</option>
                        <option value="fruit">Fruit</option>
                        <option value="dessert">Dessert</option>
                    </select>
                </div>
            </section>
            <section className={styles.contentContainer}>
                <button onClick={() => createFoodItem()} className={styles.doneButton} type="button">Done</button>
            </section>
        </main>
    )
}

export default CreateNewFood;