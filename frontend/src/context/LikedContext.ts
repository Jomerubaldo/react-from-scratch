import { createContext, Dispatch, SetStateAction, use } from 'react';
import { Doggy } from '../types';

export const LikedContext = createContext<{
  liked: Doggy['id'][];
  setLiked: Dispatch<SetStateAction<Doggy['id'][]>> | null;
}>(null);

// custom hook you can export and use in other component
export function useLiked() {
  const context = use(LikedContext);
  if (!context) {
    throw new Error(
      'The useLiked hook must to be used within a LikeContext wrapper.'
    );
  }
  return context;
}
