import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App
    colorPalattes={[
      { name: "Sunset", colors: ["#ff9b8a", "#fad1c5"] },
      { name: "Ocean Breeze", colors: ["#00c9ff", "#93fe9f"] },
      { name: "Lavender Feilds", colors: ["#b992d7", "#8ca6db"] },
      { name: "Citrus Burst", colors: ["#f6d365", "#fda187"] },
      { name: "Minty Fresh", colors: ["#a2fece", "#fbffd0"] },
      { name: "Blush Bloom", colors: ["#fcb79e", "#feedd3"] },
      { name: "Skyline", colors: ["#76b3ff", "#b69efe"] },
      { name: "Peach Punch", colors: ["#feedd3", "#fcb79e"] },
      { name: "Royal Violet", colors: ["#a38cd3", "#fcb79e"] },
      { name: "Mossy Creek", colors: ["#a8edea", "#ffd7e3"] },
      { name: "Coal Ash", colors: ["#bcc3c6", "#2d3f51"] },
      { name: "Lemon ice", colors: ["#f7f9d5", "#e0c2fd"] },
      { name: "Tangerine Twist", colors: ["#f83601", "#fbd525"] },
      { name: "Clam Water", colors: ["#8af9ff", "#66a7fe"] },
      { name: "Rosè Smoke", colors: ["#e8cac0", "#6271a4"] },
      { name: "Stromy Sky", colors: ["#d6d2cd", "#314353"] },
    ]}
  />
);
