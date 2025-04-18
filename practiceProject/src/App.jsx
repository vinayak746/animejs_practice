import React, { useEffect, useRef } from "react";
import { createTimeline, stagger } from "animejs";
import "./App.css";

const AnimeComponent = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const navItemsRef = useRef(null);
  const navLinksRef = useRef(null);
  const contentRef = useRef(null);
  const contentTextRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    const logo = logoRef.current;
    const nav = navRef.current;
    const navItems = navItemsRef.current;
    const navLinks = navLinksRef.current;
    const content = contentRef.current;
    const contentText = contentTextRef.current;
    const timeline = createTimeline({
      targets: [header, logo, nav, navItems, navLinks, content, contentText],
      easing: "easeInOutExpo",
      duration: 1000,
      delay: stagger(100),
    });
    timeline
      .add({
        opacity: 0,
        translateY: -50,
      })
      .add({
        opacity: 1,
        translateY: 0,
      })
      .add({
        scale: 1.2,
        rotateZ: 360,
      })
      .add({
        scale: 1,
        rotateZ: 0,
      });
    timeline.play();
    // Animation for the dots
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.position = "absolute";
    container.style.top = "0";
    container.style.left = "0";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(10, 1fr)";
    container.style.gridTemplateRows = "repeat(10, 1fr)";
    container.style.gap = "10px";
    container.style.overflow = "hidden";
    container.style.zIndex = "-1";
    container.style.pointerEvents = "none";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    container.style.borderRadius = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.transformOrigin = "center center";
    container.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
      let dot = document.createElement("div");
      dot.classList.add("element");
      container.appendChild(dot);
    }

    let dotAll = container.querySelectorAll(".element");
    let animation = createTimeline({
      targets: dotAll,
      easing: "easeInOutExpo",
      loop: true,
      delay: stagger(1000, { grid: [10, 10], from: "center" }),
    });

    animation
      .add({
        rotateZ: 180,
        translateY: stagger(0, {
          grid: [10, 10],
          from: "center",
          axis: "y",
        }),
        translateX: stagger(0, {
          grid: [10, 10],
          from: "center",
          axis: "x",
        }),
        opacity: 1,
      })
      .add({
        borderRadius: 50,
      })
      .add({
        scale: 0.2,
        opacity: 0.2,
      })
      .add({
        rotateZ: 180,
        translateY: stagger(0, {
          grid: [10, 10],
          from: "center",
          axis: "y",
        }),
        translateX: stagger(0, {
          grid: [10, 10],
          from: "center",
          axis: "x",
        }),
        opacity: 1,
      })
      .add({
        scale: 1,
        borderRadius: 0,
      })
      .add({
        rotateZ: -90,
      });
  }, []);

  return (
    <div>
      <header>
        <a href="#" className="logo">
          Logo
        </a>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>

      <section>
        <div className="content">
          <h2>
            Level Up Your Website <b>Anime.js</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            possimus dolorem maiores vitae fuga. Fuga cumque voluptates vero
            commodi quia excepturi eligendi asperiores fugit hic ipsa, dolores
            explicabo consequuntur neque.
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
        <div className="container" ref={containerRef}></div>
      </section>
    </div>
  );
};

export default AnimeComponent;
