import { PageWrapper } from './components/PageWrapper';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Shortlist } from './components/Shortlist';
import { Doggieslist } from './components/Doggieslist';
import { DoggiesForm } from './components/DoggyForm';
import { doggies } from './data/doggies';
import { useState } from 'react';
import { Doggy } from './types';
import { LikedContext } from './context/likedContext';

export default function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  const [liked, setLiked] = useState<Doggy['id'][]>([1, 3]);

  return (
    <main>
      <LikedContext.Provider value={{ liked, setLiked }}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <Shortlist doggies={doggies} />
        </div>
        <Doggieslist doggies={doggies} />
      </LikedContext.Provider>
      <DoggiesForm />
    </main>
  );
}
