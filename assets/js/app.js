document.addEventListener("DOMContentLoaded", () => {
  const parallax_el = document.querySelectorAll(".parallax");

  let xValue = 0,
    yValue = 0;

  window.addEventListener("mousemove", (e) => {
		if(tl.isActive()) return
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;

      el.style.transform = `translateX(calc(-50% + ${
        -xValue * speedx
      }px)) translateY(calc(-50% + ${-yValue * speedy}px))`;
    });
  });

  let tl = gsap.timeline();

  Array.from(parallax_el)
    .filter((el) => !el.classList.contains("text"))
    .forEach((el) => {
      tl.from(
        el,
        {
					opacity: el.classList.contains("trees") ? 0 : 1,
          top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
          duration: el.classList.contains("trees") ? 4 : 3.5,
          ease: "power3.inOut",
        },
        "0"
      );
    });

  tl.from(".text h1", {
    y:
      window.innerHeight -
      document.querySelector(".text h1").getBoundingClientRect().top + 200,
		duration: 2,
    ease: "power2.inOut",
  }, "1.7")
	.from(".text h2", {
		y: -150,
		opacity: 0,
		duration: 1.5,
    ease: "power2.inOut",
	}, "2.5")
	.from(".hide", {
		opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
	}, "2.5")
});
