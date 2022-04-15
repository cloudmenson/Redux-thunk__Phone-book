import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../store/actions/contacts";
import "./List.css";

export default function List() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  return (
    <div className="App__user-list">
      {contacts.map((item) => {
        return (
          <div key={item.id} className="App__user-list--wrapper">
            <table>
              <tbody className="App__user-list--tbody">
                <tr>
                  <th>Id</th>
                  <td className="App__user-list--id">{item.id}</td>
                </tr>
                <tr>
                  <th>Name:</th>
                  <td className="App__user-list--name">{item.name}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td className="App__user-list--email">{item.email}</td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td className="App__user-list--phone">{item.phone}</td>
                </tr>
                <tr>
                  <th>Delete:</th>
                  <td>
                    <button
                      className="App__btn-delete-user waves-effect waves-light btn red"
                      onClick={() => dispatch(deleteContact(item.id))}
                    >
                      <i className="material-icons">close</i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
