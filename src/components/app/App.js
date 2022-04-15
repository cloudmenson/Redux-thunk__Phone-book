import List from "../list/List";
import Form from "../form/Form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../store/actions/contacts";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  return (
    <div className="App container">
      <h1 className="App__title">Contacts book</h1>
      <List />
      <Form />
    </div>
  );
}

export default App;
