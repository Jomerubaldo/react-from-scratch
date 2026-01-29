import { Delete } from 'lucide-react';
import { Dispatch, SetStateAction, useRef } from 'react';

export function Search({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
  // declared userRef tapos gamitin sa input as ref={inputRef variable called}
  const inputRef = useRef(null);

  return (
    <div>
      <label htmlFor="search" className="font-medium">
        Search for a character trait
      </label>
      <div className="mt-2 flex items-center gap-4">
        <input
          ref={inputRef} // called
          placeholder="Playful..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          name="search"
          type="text"
          className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/50 focus:ring-1
           focus:ring-cyan-500 focus:outline-none"
        />
        {/* inputRef for every delete user focus on input text */}
        {/** kaya may inputRef.current.focus na dito kasi para
             kada click ng button na delete actumatic mag fofocus
             agad sa input field. **/}
        <button
          onClick={() => {
            setSearchQuery('');
            inputRef.current.focus(); //used focus for input field
          }}
          className="inline-block rounded bg-cyan-300 px-4 py-2 pr-3! pl-2.5! font-medium 
          text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        >
          <Delete />
        </button>
      </div>
    </div>
  );
}
