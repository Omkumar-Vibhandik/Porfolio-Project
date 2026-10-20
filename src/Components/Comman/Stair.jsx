import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stair = (props) => {
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    function () {
      const t1 = gsap.timeline();

      t1.to(stairParentRef.current, {
        display: "block",
      });

      t1.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });
      t1.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      t1.to(stairParentRef.current, {
        display: "none",
      });
      t1.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.2,
      });
    },
    [currentPath]
  );  
  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-screen w-full flex">
          <div className="stair h-full w-1/5 bg-[black]"></div>
          <div className="stair h-full w-1/5 bg-[#0a0a0a] "></div>
          <div className="stair h-full w-1/5 bg-[#121111] "></div>
          <div className="stair h-full w-1/5 bg-[#292828] "></div>
          <div className="stair h-full w-1/5 bg-[#343333] "></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stair;
