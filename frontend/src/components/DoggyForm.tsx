import { Dispatch, SetStateAction } from 'react';
import { Doggy } from '../types';
import { useFormStatus } from 'react-dom';

export function DoggiesForm({
  doggies,
  setDoggies,
}: {
  doggies: Doggy[];
  setDoggies: Dispatch<SetStateAction<Doggy[]>>;
}) {
  return (
    <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/50">
      <form
        //buildin preventDefault
        action={async (formData: FormData) => {
          // sleep(1.5s)
          await new Promise((resolve) => setTimeout(resolve, 1500));
          const newDoggy: Doggy = {
            id: doggies.length + 1,
            name: formData.get('name') as string,
            trait: formData.get('trait') as string,
            imagePath: `/public/${Math.floor(Math.random() * 16) + 7}.jpg`, //random image from 7-22
          };
          setDoggies([...doggies, newDoggy]);
        }}
        className="mt-4 flex w-full flex-col items-start gap-4"
      >
        <div className="grid w-full gap-6 md:grid-cols-3">
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring
             ring-black/50 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              required
              id="name"
              type="text"
              name="name"
            />
          </fieldset>
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="trait">Personality trait</label>
            <input
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring
             ring-black/50 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              required
              id="trait"
              type="text"
              name="trait"
            />
          </fieldset>
          <fieldset
            disabled
            className="col-span-2 flex w-full cursor-not-allowed flex-col gap-1 opacity-50"
          >
            <label>Profile Picture</label>
            <input
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/90 focus:ring-2 focus:ring-cyan-500
              focus:outline-none"
              id="avatar_url"
              type="file"
              name="avatar_url"
            />
          </fieldset>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium ring ring-black/50 text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none disabled:bg-slate-200 disabled:cursor-not-allowed"
      type="submit"
      disabled={status.pending} //disable button kapag pending
    >
      {status.pending
        ? `Adding ${status?.data?.get('name') || 'doggy'}...` //dynamic value
        : 'Add doggy'}
    </button>
  );
}
