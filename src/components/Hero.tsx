import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const parallaxElements = Array.from(
      document.querySelectorAll(".parallax")
    ) as HTMLElement[];

    const handleMouseMove = (e: MouseEvent) => {
      if (tl.isActive()) return;

      const xValue = e.clientX - window.innerWidth / 2;
      const yValue = e.clientY - window.innerHeight / 2;

      parallaxElements.forEach((el) => {
        const speedx = parseFloat(el.dataset.speedx || "1");
        const speedy = parseFloat(el.dataset.speedy || "1");

        if (el.classList.contains("trees")) {
          el.style.transform = `translateX(calc(0 + ${
            -xValue * speedx
          }px)) translateY(calc(0 + ${-yValue * speedy}px))`;
        } else {
          el.style.transform = `translateX(calc(-50% + ${
            -xValue * speedx
          }px)) translateY(calc(-50% + ${-yValue * speedy}px))`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const title = document.querySelector(".text h1") as HTMLElement;

    let tl = gsap.timeline();
    Array.from(parallaxElements)
      .filter((el) => !el.classList.contains("text"))
      .forEach((el) => {
        tl.from(
          el,
          {
            opacity: el.classList.contains("trees") ? 0 : 1,
            top: `${el.offsetHeight / 2 + +(el.dataset.distance ?? 0)}px`,
            duration: el.classList.contains("trees") ? 4 : 3.5,
            ease: "power3.inOut",
          },
          "0"
        );
      });

    tl.from(
      ".text h1",
      {
        y: window.innerHeight - title.getBoundingClientRect().top + 200,
        duration: 2,
        ease: "power2.inOut",
      },
      "1.7"
    )
      .from(
        ".text h2",
        {
          y: -150,
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "2.5"
      )
      .from(
        ".hide",
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "2.5"
      );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      <main>
        <div className="vignette hide"></div>
        <img
          src="/images/sky.png"
          alt="parallaximg"
          className="parallax bg-img"
          data-speedx="0.2"
          data-speedy="0.20"
          data-distance="0"
        />
        <img
          src="/images/mountains.png"
          alt="parallaximg"
          className="parallax mountains"
          data-speedx="0.11"
          data-speedy="0.16"
          data-distance="1100"
        />
        <img
          src="/images/back_fog.png"
          alt="parallaximg"
          className="parallax fog-1 hide"
          data-speedx="0.1"
          data-speedy="0.1"
        />
        <img
          src="/images/moon.png"
          alt="parallaximg"
          className="parallax moon"
          data-speedx="0.15"
          data-speedy="0.12"
          data-distance="900"
        />
        <div
          className="text parallax"
          data-speedx="0.13"
          data-speedy="0.12"
          data-distance="-200"
        >
          <h2>Awakening</h2>
          <h1>Vengeance</h1>
        </div>
        <img
          src="/images/far_building.png"
          alt="parallaximg"
          className="parallax tower-1"
          data-speedx="0.14"
          data-speedy="0.1"
          data-distance="1400"
        />
        <img
          src="/images/back_left_house.png"
          alt="parallaximg"
          className="parallax house-1"
          data-speedx="0.11"
          data-speedy="0.08"
          data-distance="1500"
        />
        <img
          src="/images/back_right_house.png"
          alt="parallaximg"
          className="parallax house-2"
          data-speedx="0.1"
          data-speedy="0.08"
          data-distance="1500"
        />
        <img
          src="/images/tower_building.png"
          alt="parallaximg"
          className="parallax tower-2"
          data-speedx="0.11"
          data-speedy="0.07"
          data-distance="1600"
        />
        <img
          src="/images/front_house.png"
          alt="parallaximg"
          className="parallax house-3"
          data-speedx="0.05"
          data-speedy="0.04"
          data-distance="1700"
        />
        <img
          src="/images/trees.png"
          alt="parallaximg"
          className="trees"
          data-speedx="0.02"
          data-speedy="0.04"
          data-distance="-200"
        />
        <img
          src="/images/stones.png"
          alt="parallaximg"
          className="parallax stones"
          data-speedx="0.03"
          data-speedy="0.02"
          data-distance="1800"
        />
        <img
          src="/images/front_fog.png"
          alt="parallaximg"
          className="fog-2 hide"
        />
        <img
          src="/images/samurai.png"
          alt="parallaximg"
          className="parallax samurai"
          data-speedx="0.04"
          data-speedy="0.02"
          data-distance="1800"
        />
      </main>
    </>
  );
};

export default Hero;
