import './App.css';
import Form from './components/Form';
import StudentSection from './components/StudentSection';

function App() {
  return (
    <div className="App">
      <div className="Form">
        <h1>Input Form</h1>
        <Form />
      </div>
      <div className="Student-section">
        <h2>List of All Students</h2>
        <StudentSection />
      </div>
    </div>
  );
}

export default App;
