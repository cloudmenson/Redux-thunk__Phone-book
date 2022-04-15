import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/actions/contacts";
import "./Form.css";

export default function Form() {
  const [newData, setNewData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onHideForm = () => {
    setShow(false);
  };

  function onChangeHandler({ target }) {
    setNewData((prevState) => ({ ...prevState, [target.name]: target.value }));
  }

  function onAddContact(e) {
    e.preventDefault();
    dispatch(addContact(newData));
    onHideForm();
  }

  return (
    <div className="App__add-form--wrapper">
      <button
        className="App__add-user-form--btn btn-floating btn-large pulse purple darken-1"
        onClick={() => setShow(!show)}
      >
        <i className="material-icons">edit</i>
      </button>
      {show ? (
        <form className="App__add-user-form row" onSubmit={onAddContact}>
          <div className="col">
            <div className="input-field">
              <input
                type="text"
                name="name"
                value={newData.name}
                required
                placeholder="Name"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-field">
              <input
                type="text"
                name="email"
                value={newData.email}
                required
                placeholder="Email"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-field">
              <input
                type="text"
                name="phone"
                value={newData.phone}
                required
                placeholder="Phone"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="App__add-form-btns">
            <button className="App__add-form--btn-submit waves-effect waves-light btn green">
              Add
            </button>
            <button
              className="App__add-form--btn-cancel waves-effect waves-light btn red"
              onClick={() => setShow(!show)}
            >
              Close
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
