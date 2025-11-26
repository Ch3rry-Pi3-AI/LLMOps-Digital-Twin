/**
 * PostCSS configuration for the frontend.
 *
 * This file enables PostCSS to work with TailwindCSS in a Next.js project.
 * The plugin '@tailwindcss/postcss' processes Tailwind’s utilities, directives,
 * and generated classes during the build step.
 *
 * No additional plugins are required at this stage, but more can be added
 * later if needed (e.g., autoprefixer, nested syntax support, etc.).
 */

export default {
    plugins: {
        '@tailwindcss/postcss': {},   // Enables Tailwind processing via PostCSS
    },
};
