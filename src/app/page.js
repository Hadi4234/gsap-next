"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger, CSSRulePlugin } from "gsap/all";
function Home() {
  const navRef = useRef();
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
  useGSAP(
    () => {
      const showAnim = gsap
        .from(navRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    },
    { scope: navRef },
  );

  return (
    <div className=" ">
      <div
        className=" bg-red-500 w-full h-24 text-white flex justify-center items-center left-0 top-0 transition fixed  main-nav-bar"
        ref={navRef}
      >
        {" "}
        navbar
      </div>
      <div className=" h-[200vh] flex justify-center items-center">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
    </div>
  );
}

export default Home;
