import doggyLogo from '../../public/dog_logo.png';

// Header Component
export function Header() {
  return (
    <header>
      {/* Logo */}
      <a className="group" href="/">
        <div className="inline-flex items-center gap-4">
          <img
            src={doggyLogo}
            alt="doggyLogo"
            className="h-16 transition group-hover:scale-105 group-hover:rotate-6 md:h-20 lg:h-24"
          />
          <p className="text-lg font-semibold">Doggy</p>
        </div>
      </a>
      {/* Hero copy */}
      <div className="mt-6">
        <h1 className="text-lg font-bold">We've got the best doggies!</h1>
        <p className="text-slate-600">
          Let the visuals speak louder than words.
        </p>
      </div>
    </header>
  );
}
