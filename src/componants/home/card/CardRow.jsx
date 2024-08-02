import React from "react";
import Card from "./CardHome";
import styles from "../../../style/common/CardHome.module.css";
import Title from "../../common/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CardRow() {
    const data = [
        {
            src: "/toy-images/pro1.jpg",
            title: "Varuna Missile Launcher Truck",
            desc: "Rs. 149.00",
            RealPrise: "Rs. 299.00",
            icon: <FontAwesomeIcon icon="fa-solid fa-star" />

        },
        {
            src: "/toy-images/pro2.jpg",
            title: "Food Fest",
            desc: "Rs. 399.00",
            RealPrise: "Rs. 599.00",

        },
        {
            src: "/toy-images/pro5.jpg",
            title: "Fashion Queen",
            desc: "Rs. 399.00",
            RealPrise: "Rs. 599.00",


        },
        {
            src: "/toy-images/pro4.jpg",
            title: "Fast Cargo",
            desc: "Rs. 399.00",
            RealPrise: "Rs. 599.00"


        },

    ];



    return (
        <div>
            <Title title="NEW LAUNCH" />
            <div className={styles.map1}>
                {data.map((value, index) => {
                    return (
                        <Card
                            key={index}
                            src={value.src}
                            title={value.title}
                            desc={value.desc}
                            RealPrise={value.RealPrise}
                            icon={value.icon}
                        />
                    );
                })}
            </div>

            {/* T-Shirts */}


        </div>
    );
}

export default CardRow;
