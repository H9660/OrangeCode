// This page will have the problem bar
import { useDispatch, useSelector } from "react-redux";
import { deleteProblem } from "../slices/problem/problemSlice";
import { useNavigate } from "react-router-dom";
function ProblemBar({ problem }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const showProblemContext = () => {
    navigate(`/problems/${problem.title}`);
  };
  return (
    <>
      <div className="bar">
        <div className="bar-content">
          <h2 onClick={showProblemContext}>{problem.title}</h2>
          {user && user.isAdmin == true && (
            <button
              onClick={() => {
                dispatch(deleteProblem(problem.title));
              }}
              className="close"
            >
              X
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProblemBar;
