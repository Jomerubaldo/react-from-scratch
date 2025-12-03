import Akita from '../../public/Akita.jpg';
import Alaskan from '../../public/Alaskan.jpg';
import Affenpinscher from '../../public/Affenpinscher.jpg';
import Beagle from '../../public/Beagle.jpg';
import Bichon from '../../public/Bichon.jpg';
import Bloodhound from '../../public/Bloodhound.jpg';

export function Doggylist() {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* 1 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover h-[415px]"
          alt="Akita"
          src={Akita}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Akita</p>
            <span className="text-slate-300">.</span>
            <p className="text-slate-500">So Sweet</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 2 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover h-[415px]"
          alt="Alaskan"
          src={Alaskan}
        />
        <div className="gap- flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Alaskan</p>
            <span className="text-slate-300">.</span>
            <p className="text-slate-500">Very good boi</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 3 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover h-[415px]"
          alt="Affenpinscher"
          src={Affenpinscher}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Affenpinscher</p>
            <span className="text-slate-300">.</span>
            <p className="text-slate-500">Enjoys naps</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 4 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover h-[455px]"
          alt="Beagle"
          src={Beagle}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Beagle</p>
            <span className="text-slate-500">.</span>
            <p className="text-slate-500">Loves cheese</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 5 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img className="aspect-square object-cover" alt="Bichon" src={Bichon} />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Bichon</p>
            <span className="text-slate-500">.</span>
            <p className="text-slate-500">Readt to save the world</p>
          </div>
          <button>x</button>
        </div>
      </li>
      {/* 6 */}
      <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
        <img
          className="aspect-square object-cover h-[455px]"
          alt="Bloodhound"
          src={Bloodhound}
        />
        <div className="gap flex items-center justify-between p-4 text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Bloodhound</p>
            <span className="text-slate-500">.</span>
            <p className="text-slate-500">Readty for anything</p>
          </div>
          <button>x</button>
        </div>
      </li>
    </ul>
  );
}
