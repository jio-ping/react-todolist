import "../css/TodoHome.scss";
import { useParams } from "react-router-dom";
function TodoHome() {
  const { user } = useParams();
  return (
    <div className="todo-home">
      <div className="user-profile">
        <div className="user-photo">z</div>
        <h3 className="user-name">{user}</h3>
      </div>
      <div className="todo-board">
        <li></li>
      </div>
      <div className="app-container">
        <div className="app-icon"></div>
      </div>
    </div>
  );
}
export default TodoHome;
