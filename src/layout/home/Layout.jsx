import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";


function Layout() {
  const [scroll, setScroll] = useState(window.scrollY);

  function moveToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    // Clean-up function
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <>
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center", position: "fixed",
        right: "50px",
        bottom: "50px",
        padding: "16px",
        height: "50px",
        width: "200px"
      }}>
        {scroll > 500 && (
          <button
            style={{

            }}
            onClick={moveToTop}
          >
            Scroll to Top ☝🏻
          </button>
        )}
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
