import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App
    colorPalattes={[
      { colors: ["#ff9a8b", "#fad0c4"], name: "Sunset" },
      { colors: ["#00c9ff", "#92fe9d"], name: "Ocean Breeze" },
      { colors: ["#b993d6", "#8ca6db"], name: "Lavender Fields" },
      { colors: ["#f6d365", "#fda085"], name: "Citrus Burst" },
      { colors: ["#a1ffce", "#faffd1"], name: "Minty Fresh" },
      { colors: ["#fcb69f", "#ffecd2"], name: "Blush Bloom" },
      { colors: ["#76b2fe", "#b69efe"], name: "Skyline" },
      { colors: ["#ffecd2", "#fcb69f"], name: "Peach Punch" },
      { colors: ["#a18cd1", "#fbc2eb"], name: "Royal Violet" },
      { colors: ["#a8edea", "#fed6e3"], name: "Mossy Creek" },
      { colors: ["#bdc3c7", "#2c3e50"], name: "Cool Ash" },
      { colors: ["#f6f9d4", "#e0c3fc"], name: "Lemon Ice" },
      { colors: ["#f83600", "#f9d423"], name: "Tangerine Twist" },
      { colors: ["#89f7fe", "#66a6ff"], name: "Calm Water" },
      { colors: ["#e8cbc0", "#636fa4"], name: "Rosé Smoke" },
      { colors: ["#ff9a9e", "#fad0c4"], name: "Tropical Kiss" },
      { colors: ["#2b5876", "#4e4376"], name: "Deep Space" },
      { colors: ["#e0c3fc", "#8ec5fc"], name: "Berry Smoothie" },
      { colors: ["#c1dfc4", "#deecdd"], name: "Green Tea" },
      { colors: ["#d7d2cc", "#304352"], name: "Stormy Sky" },
    ]}
  />
);
