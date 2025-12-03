import Beagle from '../../public/Beagle.jpg';
import Bichon from '../../public/Bichon.jpg';

export function Shortlist() {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">Your shortlist:</h2>
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
