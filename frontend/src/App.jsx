import { PageWrapper } from './components/PageWrapper';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Shortlist } from './components/Shortlist';
import { Doggieslist } from './components/Doggieslist';
import { DoggiesForm } from './components/DoggyForm';
import { doggies } from './data/doggies';

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
      {/* doggies data */}
      {/* in Doggieslist component need props to recieve it data */}
      {/* but need destructuring props to readable */}
      <Doggieslist doggies={doggies} />
      {/* Dog Form */}
      <DoggiesForm />
    </main>
  );
}
