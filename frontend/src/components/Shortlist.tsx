import Beagle from '../assets/Beagle.jpg';
import Bichon from '../assets/Bichon.jpg';

export function Shortlist() {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        Your shortlist:
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-red-500 stroke-none"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7Z" />
        </svg>
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
          <img
            height={32}
            width={32}
            alt="Buranday"
            className="aspect-square w-8 object-cover"
            src={Bichon}
          />
          <p className="px-3 text-sm text-slate-800">Bichon</p>
          <button className="group h-full border border-slate-100 px-2 hover:bg-slate-100">
            x
          </button>
        </li>
        <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
          <img
            height={32}
            width={32}
            alt="Kulit"
            className="aspect-square w-8 object-cover"
            src={Beagle}
          />
          <p className="px-3 text-sm text-slate-800">Beagle</p>
          <button className="group h-full border border-slate-100 px-2 hover:bg-slate-100">
            x
          </button>
        </li>
      </ul>
    </div>
  );
}
