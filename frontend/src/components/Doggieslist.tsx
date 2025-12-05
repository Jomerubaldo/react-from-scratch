// import type from types folder to used the type for this component
import { type Doggy } from '../types/index';

// need pass props to render the data
//called type annotation here but different syntax
export function Doggieslist({ doggies }: { doggies: Doggy[] }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* iterating using map() like dito niya ibabato yung data */}
      {doggies.map((doggy) => (
        <DoggyCard key={doggy.id} doggy={doggy} />
      ))}
    </ul>
  );
}

// type annotation
// make doggy name props and Doggy we export earlier but its have allready types value
type DoggyCardProps = {
  doggy: Doggy; //resuasble Doggy
};

// called DoggyCardProps
function DoggyCard({ doggy }: DoggyCardProps) {
  return (
    <li
      key={doggy.id}
      className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
    >
      <img
        className="aspect-square object-cover h-[415px]"
        alt={doggy.name}
        src={doggy.image}
      />
      <div className="gap flex items-center justify-between p-4 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{doggy.name}</p>
          <span className="text-slate-300">.</span>
          <p className="text-slate-500">{doggy.trait}</p>
        </div>
        <button>
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
            className={
              doggy.id === 2
                ? 'fill-red-500 stroke-none' //ternary operator
                : 'stroke-slate-200 group-hover:stroke-slate-300'
            }
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7Z" />
          </svg>
        </button>
      </div>
    </li>
  );
}
