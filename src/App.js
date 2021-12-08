import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';

function App() {
  return (
    <div className="App">
      <div className="container">
        <PostForm />
        <AllPost />
      </div>

    </div>
  );
}

export default App;
