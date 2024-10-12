// vite.config.js
import { defineConfig } from 'vite'; // Correct import for Vite
import react from '@vitejs/plugin-react'; // Correct import for the React plugin

// Exporting the configuration
export default defineConfig({
  plugins: [react()],
});
