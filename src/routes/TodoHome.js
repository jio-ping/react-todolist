import "../css/TodoHome.scss";
import { useParams } from "react-router-dom";
function TodoHome() {
  const { user } = useParams();
  return (
    <div>
      <div className="app-container">
        <ul>
          <img></img>
        </ul>
      </div>
      <div className="todo-board"></div>
    </div>
  );
}
export default TodoHome;
