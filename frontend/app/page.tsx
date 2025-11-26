/**
 * Home page for the Digital Twin interface.
 *
 * This page:
 * - Provides the main layout and styling for the frontend
 * - Displays the project title and supporting text
 * - Renders the Twin component inside a fixed-height container
 * - Includes a simple footer showing the current module/week
 *
 * The <Twin /> component contains all chat logic and backend communication.
 */

import Twin from '@/components/twin';

export default function Home() {
  return (
    // Main content wrapper with full-screen gradient background
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Page title */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            AI in Production
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 mb-8">
            Deploy your Digital Twin to the cloud
          </p>

          {/* Chat container with fixed height */}
          <div className="h-[600px]">
            <Twin />
          </div>

          {/* Footer section */}
          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>Week 2: Building Your Digital Twin</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
