// import type from types folder to used the type for this component
import { type Doggy } from '../types/index';
import { LikeToggleButton } from './LikeToggleButton';

// need pass props to render the data
//called type annotation here but different syntax
export function Doggieslist({
  doggies,
  searchQuery,
}: {
  doggies: Doggy[];
  searchQuery: string;
}) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* iterating using map() like dito niya ibabato yung data */}
      {doggies
        .filter((dog) =>
          dog.trait.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((doggy) => (
          <DoggyCard key={doggy.id} doggy={doggy} />
        ))}
    </ul>
  );
}

// type annotation
// make doggy name props and Doggy we export earlier but its have allready types value
type DoggyCardProps = {
  doggy: Doggy;
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
        <LikeToggleButton id={doggy.id} />
      </div>
    </li>
  );
}
