import "./style.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Example() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <>
      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
