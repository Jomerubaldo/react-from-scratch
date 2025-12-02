// Container Component
// Using props inside the Container Component render the Header Component
export function Container({ children }) {
  return <div className="mx-auto max-w-5xl p-4 md:p-8">{children}</div>;
}
