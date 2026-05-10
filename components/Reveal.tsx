"use client";

import { createElement, useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Stagger delay in ms when this Reveal is one of many siblings */
  delay?: number;
  /** Element tag to render */
  as?: "div" | "section" | "article" | "li" | "ul";
  className?: string;
};

/**
 * Wraps children in a fade-in-on-scroll container.
 * SSR/no-JS-friendly: content renders visible by default. JS hides it
 * after mount (only if below the fold) and shows it on intersect.
 * Respects prefers-reduced-motion via globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  // mounted=false means SSR/first paint: render visible.
  // Once mounted, we may flip to hidden if not yet on screen.
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setMounted(true);
      setVisible(true);
      return;
    }

    // If the element is already on screen at mount, don't bother hiding it.
    const rect = node.getBoundingClientRect();
    const onScreen =
      rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (onScreen) {
      setMounted(true);
      setVisible(true);
      return;
    }

    setMounted(true);
    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = delay && mounted ? { transitionDelay: `${delay}ms` } : undefined;
  // data-visible="false" only when JS has mounted AND the element is off-screen.
  // SSR + no-JS = no attribute = visible by default per globals.css.
  const dataVisible = mounted && !visible ? "false" : undefined;

  return createElement(
    as,
    {
      ref,
      "data-visible": dataVisible,
      style,
      className: `reveal ${className}`,
    },
    children
  );
}
