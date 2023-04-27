import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.from("#logo",{duration:2.5, alpha:0, delay:0.5, x:"-=200"})
// gsap.from("nav li",{duration:1, alpha:0, stagger:0.2, y:"-=25", delay:0.5,x:"+=200"})

// gsap.from("#hero article",{duration:3, alpha:0, delay:0.5})
// gsap.from("#hero h1",{duration:.75, alpha:0, stagger:0.2,y:"-=200", delay:3})
// gsap.from("#hero h2",{duration:.5, alpha:0, stagger:0.,y:"-=200", delay:3})
// gsap.from("#hero button",{duration:.5, alpha:0, stagger:0.2, y:"+=200", delay:3})

// gsap.from("#content h1", {scrollTrigger: {trigger: "content h1",toggleActions:"restart pause reverse none"}, duration:.5, alpha:0, x:"-=50", delay:1})
// gsap.from("#content p",{scrollTrigger:{trigger: "content p", toggleActions:"restart pause reverse none"}, stagger:0.2, duration:.5, alpha:0, x:"-=50", delay:.5})

