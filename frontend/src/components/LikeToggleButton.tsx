import { Heart, LoaderCircle } from 'lucide-react';
import { Doggy } from '../types';
import { useLiked } from '../context/LikedContext';
import { useState } from 'react';

export function LikeToggleButton({ id }: { id: Doggy['id'] }) {
  // called context to stay the logic here from button
  const { liked, setLiked } = useLiked();

  const [pending, setPending] = useState(false);

  return (
    <button
      className="group"
      onClick={() => {
        setPending(true);
        setTimeout(() => {
          if (liked.includes(id)) {
            setLiked(liked.filter((dogId) => dogId != id));
          } else {
            setLiked([...liked, id]);
          }
          setPending(false);
        }, 1500);
      }}
    >
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            liked.includes(id)
              ? 'fill-red-500 stroke-none' //ternary operator
              : 'stroke-slate-200 group-hover:stroke-slate-300'
          }
        />
      )}
    </button>
  );
}

// 3mins and 36secs from video in laracast video
