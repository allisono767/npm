// import style from './App.module.css';
import {Menu} from './components/menu';


function App() {
  return (
    <>
      <Menu option01='sessão 1' option02='sessão 2' option03='sessão 3' option04='sessão 4' />
      <main>
        <section id='s1'>
          <h1>sessão 1</h1>
        </section>
        <section id='s2'>
          <h1>sessão 2</h1>
        </section>
        <section id='s3'>
           <h1>sessão 3</h1>
        </section>
        <section id='s4'>
          <h1>sessão 4</h1>
        </section>
      </main>
    </>
  );
}


export default App