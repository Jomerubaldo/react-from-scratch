import { PageWrapper } from './components/PageWrapper';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Shortlist } from './components/Shortlist';
import { Doggylist } from './components/Doggylist';
import { DoggyForm } from './components/DoggyForm';

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
  return (
    <main>
      {/* Search & Shortlist */}
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        {/* Search Component */}
        <Search />
        {/* Shortlist */}
        <Shortlist />
      </div>
      {/* Dogs list */}
      <Doggylist />
      {/* Dog Form */}
      <DoggyForm />
    </main>
  );
}
