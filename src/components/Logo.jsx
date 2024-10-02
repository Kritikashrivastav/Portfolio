import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Logo = () => {
  return (
    <section className="flex flex-col items-center justify-start bg-white rounded-full px-1 py-4 md:px-1 md:py-4 font-monoton">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-pink-300 text-neutral-900" fontSize="3em">
            K
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-neutral-900" fontSize="3em">
            R
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-neutral-900" fontSize="3em">
            I
          </LogoItem>,
          <LogoItem key={4} className="bg-yellow-200 text-black" fontSize="3em">
            T
          </LogoItem>,
          <LogoItem key={5} className="bg-purple-300 text-neutral-900" fontSize="3em">
            I
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-7 w-16 md:w-20 shrink-0 rounded-xl "
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className, fontSize }) => {
  return (
    <div
      className={twMerge(
        "grid h-12 w-16 md:h-15 md:w-20 place-content-center rounded-full bg-neutral-700 text-5xl md:text-6xl text-neutral-50",
        className
      )}
      style={{ fontSize: fontSize }}
    >
      {children}
    </div>
  );
};