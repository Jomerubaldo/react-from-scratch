import buranday from '../../public/Shih Tzu Puppy Pictures and Facts.jpg';
import kulit from '../../public/She Grew Old In A Shelter Waiting For A Family — Then Everything Changed.jpg';

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
            src={buranday}
          />
          <p className="px-3 text-sm text-slate-800">Buranday</p>
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
            src={kulit}
          />
          <p className="px-3 text-sm text-slate-800">Kulit</p>
          <button className="group h-full border border-slate-100 px-2 hover:bg-slate-100">
            x
          </button>
        </li>
      </ul>
    </div>
  );
}
