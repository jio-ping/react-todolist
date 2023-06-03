import "../css/TodoHome.scss";
import { useParams } from "react-router-dom";
function TodoHome() {
  const { user } = useParams();
  return (
    <div className="todo-home">
      <div className="todo-board">
        <li></li>
      </div>
      <div className="app-container">
        <div className="app-icon">
          <img src="https://cdn.jim-nielsen.com/ios/512/photos-2022-09-26.png"></img>
        </div>
      </div>
    </div>
  );
}
export default TodoHome;
