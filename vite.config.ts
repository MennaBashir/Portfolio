import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Portfolio/",
});
// "homepage": "https://mennabashir.github.io/Portfolio", if add add in package.jscon
