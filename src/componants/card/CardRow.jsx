// import React from "react";
// import Card from "./Card";
// import styles from "../../style/common/card.module.css";
// import Title from "../common/Title";

// function CardRow() {
//   const data = [
//     {
//       src: "/toy-images/01.png",
//       title: "Spider-Man No Way-Home",
//       desc: "₹1,79,944.94",
//     },
//     {
//       src: "/toy-images/02.png",
//       title: "Iron-Man",
//       desc: "₹1,15,704.60",
//     },
//     {
//       src: "/toy-images/03.png",
//       title: "Captain America",
//       desc: "₹1,25,871.49",
//     },
//     {
//       src: "/toy-images/04.png",
//       title: "Black Panther",
//       desc: "₹35,719.07",
//     },
//     {
//       src: "/toy-images/05.png",
//       title: "Thunder Thor",
//       desc: "₹8,421.74 + Tax",
//     },
//     {
//       src: "/toy-images/06.png",
//       title: "Hulk",
//       desc: "₹47,145.57",
//     },
//     {
//       src: "/toy-images/07.png",
//       title: "Dr.Strange",
//       desc: "₹13,899.00",
//     },
//     {
//       src: "/toy-images/08.png",
//       title: "Thenos",
//       desc: "₹29,241.05",
//     },
//   ];

//   const tshirts = [
//     {
//       src: "/toy-images/10.png",
//       title: "BearBrick x Mastermind",
//       desc: "₹14,34,556.47",
//     },
//     {
//       src: "/toy-images/11.png",
//       title: "Fools Paradise Legend",
//       desc: "₹1,25,665.55",
//     },
//     {
//       src: "/toy-images/12.png",
//       title: "Transformers Masterpiece",
//       desc: "₹25,566.19 + tax",
//     },
//     {
//       src: "/toy-images/13.png",
//       title: "Master Mind",
//       desc: "₹9,34,543.65",
//     },
//   ];

//   const sweatshirts = [
//     {
//       src: "/toy-images/14.jpg",
//       title: "Bahubali Lightning Sward",
//       desc: "₹1,299.99",
//     },
//     {
//       src: "/toy-images/15.png",
//       title: "Frozen Scooter Giant",
//       desc: "₹4,399.67",
//     },
//     {
//       src: "/toy-images/16.jpg",
//       title: "Superman Double Barrel Shotgun PVC Bag",
//       desc: "₹799.00",
//     },
//     {
//       src: "/toy-images/17.jpg",
//       title: "Batman Cricket Bag",
//       desc: "₹2,345.45",
//     },
//   ];

//   return (
//     <div>
//       <Title title="Marvel" />
//       <div className={styles.map1}>
//         {data.map((value, index) => {
//           return (
//             <Card
//               key={index}
//               src={value.src}
//               title={value.title}
//               desc={value.desc}
//             />
//           );
//         })}
//       </div>

//       {/* T-Shirts */}

//       <Title title="Expensive" />
//       <div className={styles.map3}>
//         {tshirts.map((value, index) => {
//           return (
//             <Card
//               key={index}
//               src={value.src}
//               title={value.title}
//               desc={value.desc}
//             />
//           );
//         })}
//       </div>
//       {/* Sweatshirts */}

//       <Title title="Kid'S TOY" />
//       <div className={styles.map2}>
//         {sweatshirts.map((value, index) => {
//           return (
//             <Card
//               key={index}
//               src={value.src}
//               title={value.title}
//               desc={value.desc}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CardRow;
