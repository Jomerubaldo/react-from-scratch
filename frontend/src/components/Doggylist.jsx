import buranday from '../../public/Shih Tzu Puppy Pictures and Facts.jpg';
import kulit from '../../public/She Grew Old In A Shelter Waiting For A Family — Then Everything Changed.jpg';
export function Doggylist() {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* 1 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover"
          alt="Buranday"
          src={buranday}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Buranday</p>
            <span className="text-slate-300">.</span>
            <p className="text-slate-500">Mother of all dogs</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 2 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover h-[415px]"
          alt="Kulit"
          src={kulit}
        />
        <div className="gap- flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Kulit</p>
            <span className="text-slate-300">.</span>
            <p className="text-slate-500">Very good boi</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 3 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover"
          alt="Buranday"
          src={buranday}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Buranday</p>
            <span className="text-slate-300">.</span>
            <p className="text-slate-500">Enjoys naps</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 4 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover h-[415px]"
          alt="Kulit"
          src={kulit}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Kulit</p>
            <span className="text-slate-500">.</span>
            <p className="text-slate-500">Loves cheese</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 5 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover"
          alt="Buranday"
          src={buranday}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Buranday</p>
            <span className="text-slate-500">.</span>
            <p className="text-slate-500">Readt to save the world</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 6 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover h-[415px]"
          alt="Kulit"
          src={kulit}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Kulit</p>
            <span className="text-slate-500">.</span>
            <p className="text-slate-500">Readt for anything</p>
          </div>
          <button>x</button>
        </div>
      </li>
    </ul>
  );
}
