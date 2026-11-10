import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// base "./" lets the build work under any GitHub Pages repo name
export default defineConfig({ plugins: [react()], base: "./" });
