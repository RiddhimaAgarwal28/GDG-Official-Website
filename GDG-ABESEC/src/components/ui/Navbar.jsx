"use client";
import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils";
import {
  IconHome,
  IconUser,
  IconMovie,
  IconSettings,
  IconLayoutNavbarCollapse,
  IconCalendarEvent,
  IconHelpCircle,
  IconInfoCircle,
  IconUsers,
} from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { FaTeamspeak } from "react-icons/fa";

// -------------------- Floating Dock Navbar --------------------

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <img
        className="bg-red"
        src="GDG-ABESEC/public/google-developers-svgrepo-com.svg"
        alt=""
      />
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// -------------------- Mobile Dock --------------------

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("fixed  top-4 right-4 z-50 block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 shadow-md"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// -------------------- Desktop Dock --------------------

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed mx-auto top-14 left-1/2 z-50  -translate-x-1/2 transform h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 flex dark:bg-neutral-900 shadow-lg",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

// -------------------- Icon Animation Logic --------------------

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white shadow-md"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

// -------------------- Landing Page Component --------------------

export default function Navbar() {
  const items = [
    {
      title: "Home",
      icon: <IconHome className="w-full h-full text-blue-500" />,
      href: "/",
    },
    {
      title: "About",
      icon: <IconInfoCircle className="w-full h-full text-green-500" />,

      href: "#about",
    },
    {
      title: "Events",
      icon: <IconCalendarEvent className="w-full h-full text-pink-500" />,
      href: "/events",
    },
    {
      title: "Team",
      icon: <IconUsers className="w-full h-full text-orange-500" />,
      href: "/team",
    },
    {
      title: "Help",
      icon: <IconHelpCircle className="w-full h-full text-yellow-500" />,
      href: "#help",
    },
  ];

  return (
    <div className="relative  bg-linear-to-br from-gray-100 to-gray-300 dark:from-neutral-900 dark:to-neutral-950 flex items-center justify-center text-center">
      <FloatingDock
        items={items}
        desktopClassName="bottom-6"
        mobileClassName="bottom-4 right-4"
      />
    </div>
  );
}
function Image() {
  return (
    <div className=" flex justify-center items-center   h-20 w-20 rounded-full">
      <div>
        <img
          src="https://www.svgrepo.com/show/353810/google-developers.svg"
          alt="Logo"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
}
