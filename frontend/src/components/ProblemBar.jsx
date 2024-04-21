// This page will have the problem bar
import { useDispatch } from "react-redux";
import { deleteProblem } from "../slices/problem/problemSlice";
function ProblemBar({ problem }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bar">
        <div className="bar-content">
          <h2>{problem.title}</h2>
          <button
            onClick={() => {
              dispatch(deleteProblem(problem.title));
            }}
            className="close"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default ProblemBar;
