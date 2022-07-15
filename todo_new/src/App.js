import Input from './components/SignUpForm/Input';
import './App.css';


function App() {


  return (
    <div className="App">
      <div className="wrapper">
        <Input id="text"
          type="text"
          label="Ввод ніка"
          placeholder="Введіть нікнейм"
          maxLength="6"
          onChange={() => { }}
          error='Довжина має бути не більше 6'
        />
      </div>
    </div >
  );
}

export default App;
