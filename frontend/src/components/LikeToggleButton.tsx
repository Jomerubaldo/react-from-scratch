import { Heart } from 'lucide-react';
import { Doggy } from '../types';
import { useLiked } from '../context/LikedContext';

export function LikeToggleButton({ id }: { id: Doggy['id'] }) {
  // called context to stay the logic here from button
  const { liked, setLiked } = useLiked();

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
      {/* maganda si lucide-react kasi pwede ka mag apply ng logic mismo sa loob ng component nya */}
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
