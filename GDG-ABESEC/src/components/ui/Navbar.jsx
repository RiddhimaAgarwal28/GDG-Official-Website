"use client";
import React, { useRef, useState } from "react";
import {
  IconHome,
  IconInfoCircle,
  IconCalendarEvent,
  IconUsers,
  IconHelpCircle,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// -------------------- Floating Dock Navbar --------------------

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// -------------------- Mobile Hamburger Dock --------------------

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("fixed top-4 right-4 z-50 block lg:hidden", className)}>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-shadow"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconX className="h-6 w-6 text-neutral-700 dark:text-neutral-200" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconMenu2 className="h-6 w-6 text-neutral-700 dark:text-neutral-200" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Menu Items */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-0 w-48 rounded-2xl bg-gray-50 dark:bg-neutral-900 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col">
              {items.map((item, idx) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors border-b border-gray-200 dark:border-neutral-800 last:border-b-0"
                >
                  <div className="h-5 w-5">{item.icon}</div>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    {item.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// -------------------- Desktop Dock with Glass Effect --------------------

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed mx-auto top-14 left-1/2 z-50 -translate-x-1/2 transform h-16 items-end gap-4 rounded-2xl px-4 pb-3 hidden lg:flex shadow-2xl backdrop-blur-md bg-white/5 border border-white/10",
        className
      )}
      style={{
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
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
        className="relative flex aspect-square items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-white/20 bg-black/80 backdrop-blur-md px-2 py-0.5 text-xs whitespace-pre text-white shadow-md"
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

// -------------------- Navbar Component --------------------

export default function Navbar() {
  const items = [
    {
      title: "Home",
      icon: <IconHome className="w-full h-full text-blue-400" />,
      href: "/",
    },
    {
      title: "About",
      icon: <IconInfoCircle className="w-full h-full text-green-400" />,
      href: "#about",
    },
    {
      title: "Events",
      icon: <IconCalendarEvent className="w-full h-full text-pink-400" />,
      href: "/events",
    },
    {
      title: "Team",
      icon: <IconUsers className="w-full h-full text-orange-400" />,
      href: "/team",
    },
    {
      title: "Help",
      icon: <IconHelpCircle className="w-full h-full text-yellow-400" />,
      href: "#help",
    },
  ];

  return (
    <div className="relative">
      <FloatingDock items={items} />
    </div>
  );
}