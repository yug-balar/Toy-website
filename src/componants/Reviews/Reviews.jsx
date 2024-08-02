import React from 'react'
import styles from '../../style/common/Reviews.module.css'
import Styles from "../../style/common/counterRow.module.css";
import Title from "../../componants/common/Title";
import Counter from "../counterRow/Counter";
function Reviews() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.title}>
                    <h1>Costomer Reviews</h1>
                </div>
                <div className={styles.container}>
                    <div className={styles.CardContainer}>
                        <div className={styles.first}>
                            <p>good build quality...lubricating the bearing will make it extra smooth to ride and more enjoyable for the kids...it is strong enough to bear my weight and my so n's together</p>
                        </div>
                        <div className={styles.second}>
                            <i class="fa-solid fa-user"
                                style={{ color: "#545959", cursor: "pointer", fontSize: "70px" }}
                            ></i>
                            <p>Kid's love it</p>
                        </div>
                    </div>
                    <div className={styles.CardContainer}>
                        <div className={styles.first}>
                            <p>My 18-month baby can handle it very easily....special feature of this vachile is its blance...this vehicle run without battery with the help of streeing....it is so easy to drive that my 18-month baby can drive it without using his feet with the help of steering.</p>
                        </div>
                        <div className={styles.second}>
                            <i class="fa-solid fa-user"
                                style={{ color: "#545959", cursor: "pointer", fontSize: "70px" }}
                            ></i>
                            <p>Useful to my child   </p>
                        </div>
                    </div>

                </div>

            </div>
            <div className={Styles.rowContainer}>
                <Title
                    title="Reviews Counter"
                />
                <div className={Styles.counterContainer}>
                    <Counter number={20} desc="Reviews in 2021." />
                    <Counter number={30} desc="Reviews in 2022." />
                    <Counter number={100} desc="Reviews in 2023." />
                </div>
            </div>
        </>

    )
}

export default Reviews