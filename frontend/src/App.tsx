import { PageWrapper } from './components/PageWrapper';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Shortlist } from './components/Shortlist';
import { Doggieslist } from './components/Doggieslist';
import { DoggiesForm } from './components/DoggyForm';
import { doggies as doggiesData } from './data/doggies';
import { useState } from 'react';
import { Doggy } from './types';
import { LikedContext } from './context/LikedContext';

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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [doggies, setDoggies] = useState<Doggy[]>(doggiesData);

  return (
    <main>
      <LikedContext.Provider value={{ liked, setLiked }}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Shortlist doggies={doggies} />
        </div>
        <Doggieslist searchQuery={searchQuery} doggies={doggies} />
      </LikedContext.Provider>
      <DoggiesForm setDoggies={setDoggies} doggies={doggies} />
    </main>
  );
}
