import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
    <section className={styles.summary}>
        <h2> Delicious food... Delivered to you!</h2>
        <p>
            Choose your favourite meal from our broad selection of and
            enjoy a delicious lunch!
        </p>
        <p>
            All our meals are cooked.
        </p>
    </section>
    );
};

export default MealsSummary;