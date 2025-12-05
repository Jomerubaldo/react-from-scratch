// Main Wrap of my Application
// Using props inside the PageWrapper Component render the Container and Header Component
export function PageWrapper({ children }) {
  return (
    <div className="min-h-dvh bg-linear-to-b from-cyan-200 to-white to-[60vh]">
      {children}
    </div>
  );
}
