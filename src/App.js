import './App.css';
import { ListArticle, TestComponent } from './Components'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const fakeData = [
  { name: '4 saisons', price: 15 },
  { name: '4 frommage', price: 10 },
  { name: 'Marguarita', price: 8 }
]
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Routes>
            <Route path='/List' element={<ListArticle articles={fakeData} />} />
            <Route path='/Pomme' element={<h1>Pourquoi des pommes sur une pizza?</h1>} />
            <Route path='/Test' element={<TestComponent />} />
          </Routes>
        </header>
        <main>
          <h1>Coucou J'ai fais la modification via mon mac!!</h1>
        </main>
      </div>
    </Router>
  );
}

export default App;
