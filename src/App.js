import './App.css';
import AppRoutes from './routes';
import Layout from './components/layout';


function App() {
  return (
    <div className="App">
      <Layout>
        <AppRoutes/>
      </Layout>
    </div>
  );
}

export default App;
