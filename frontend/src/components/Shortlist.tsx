import { useLiked } from '../context/LikedContext';
import { Doggy } from '../types';
import { Heart, X } from 'lucide-react';

export function Shortlist({ doggies }: { doggies: Doggy[] }) {
  // called context here to stay at logic from button and iterate the map
  const { liked, setLiked } = useLiked();

  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        Your shortlist:
        <Heart className="fill-red-500 stroke-red-500" />
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        {doggies
          .filter((dog) => liked.includes(dog.id))
          .map((doggy) => (
            <li
              key={doggy.id}
              className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
            >
              <img
                height={32}
                width={32}
                alt={doggy.name}
                className="aspect-square w-8 object-cover"
                src={doggy.imagePath}
              />
              <p className="px-3 text-sm text-slate-800">{doggy.name}</p>
              <button
                onClick={() => setLiked(liked.filter((id) => id !== doggy.id))}
                className="group h-full border border-slate-100 px-2 hover:bg-slate-100"
              >
                <X className="size-4 stroke-slate-400 group-hover:stroke-red-500" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
