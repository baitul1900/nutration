import axios from "axios";
import React, { useEffect, useState } from "react";

const CounterSection = () => {
  const [counterData, setCounterData] = useState([]);

  useEffect(() => {
    axios
      .get("/public/data.json")
      .then((response) => {
        setCounterData(response.data.counterTable);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fig-number");

    function inViewport(el, cb) {
      const rect = el.getBoundingClientRect();
      return cb(rect.top < window.innerHeight && rect.bottom >= 0);
    }

    function startCounting(element) {
      const target = parseInt(element.getAttribute("data-to"));
      let counter = 0;

      function animateNumbers() {
        counter += target / 100; // Adjust the speed as needed

        if (counter >= target) {
          counter = target;
        }

        element.innerText = Math.ceil(counter);

        if (counter < target) {
          requestAnimationFrame(animateNumbers);
        }
      }

      animateNumbers();
    }

    function handleScroll() {
      elements.forEach((el) => {
        inViewport(el, (inView) => {
          if (inView && !el.initNumAnim) {
            el.initNumAnim = true;
            startCounting(el);
          }
        });
      });
    }

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the section is already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counterData]); // Add counterData as a dependency to trigger the effect when it changes

  return (
    <div className="container-fluid counter-container">
      <div className="container">
        <div className="row gy-4">
          {counterData.map((item, id) => (
            <div
              className="col-sm-12 col-md-3 col-lg-4 col-xl-4"
              key={id}
            >
              <div className="card border-0">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 align-self-center text-center">
                    <img src={item['icon']} className="img-fluid" alt="" />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 align-self-center text-center">
                    <div className="text-center">
                      <span
                        className="timer counter alt-font appear fig-number"
                        data-to={item['number']}
                        data-speed="1000"
                      >
                        {item['number']}  % 
                      </span>
                      <span></span>
                      <p className="counter-title m-0">{item['short-description']}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
