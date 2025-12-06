import { Heart } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { Doggy } from '../types';

export function LikeToggleButton({
  id,
  liked,
  setLiked,
}: {
  id: Doggy['id'];
  liked: Doggy['id'][];
  setLiked: Dispatch<SetStateAction<Doggy['id'][]>>;
}) {    
  return (
    <button
      className="group"
      onClick={() => {
        if (liked.includes(id)) {
          setLiked(liked.filter((dogId) => dogId != id));
        } else {
          setLiked([...liked, id]);
        }
      }}
    >
      {/* maganda si lucide-react kasi pwede ka mag apply ng logic mismo sa component nya */}
      <Heart
        className={
          liked.includes(id)
            ? 'fill-red-500 stroke-none' //ternary operator
            : 'stroke-slate-200 group-hover:stroke-slate-300'
        }
      />
    </button>
  );
}
