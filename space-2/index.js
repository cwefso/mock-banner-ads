// /*BANNER ANIMATION SCRIPT */

// gsap.to("img", 10, { delay: 0.5, y: -30 });

gsap.from(".text", 1, {
	delay: 0.5,
	scale: 0.01,
	yoyo: true,
	ease: "power1.inOut",
});

gsap.from(
	"li",
	0.5,
	{
		delay: 1.5,
		opacity: 0,
		y: -30,
		ease: Back.easeOut,
		stagger: {
			amount: 0.5,
		},
	},
	1
);

gsap.to([".text", "li"], 1, { delay: 3, opacity: 0 });

gsap.from(".rocket", 4, { delay: 4.5, y: 350, x: -400 });

gsap.from(".blast-off", 1, { delay: 6.5, opacity: 0 });

gsap.to(".blast-off", 1, { delay: 9.5, opacity: 0 });

gsap.to(".logo-container", 1, { delay: 10, opacity: 0.9 });

gsap.from(".logo", 1, { delay: 10.5, opacity: 0 });

gsap.from("button", 1, { delay: 11.5, scale: 0 });
