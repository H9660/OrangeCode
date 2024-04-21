import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProblemBar from "../components/ProblemBar";
import Spinner from "../components/Spinner";
import { getProblems } from "../slices/problem/problemSlice";
function Dashboard() {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  // console.log(user);
  // This useSelector is used for js but the useapp slector is used for TS
  const { problems, isLoading, isError, message } = useSelector(
    (state) => state.problems // This is a reducer
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getProblems());
    console.log(problems);
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Problems</h1>
      </section>

      <section className="content">
        {
          <>
            {problems.map((problem) => (
              <ProblemBar key={problem._id} problem={problem} />
            ))}
          </>
        }
      </section>
    </>
  );
}

export default Dashboard;
