import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getUserStats, reset } from "../slices/stats/statSlice";
function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  // This useSelector is used for js but the useapp slector is used for TS
  const { stats, isLoading, isError, message } = useSelector(
    (state) => state.userStats // This is a reducer
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getUserStats(user));
    console.log(stats);
  }, [isError, message, dispatch]); // The useEffect will execute the function again whenever any of the values isError, message, or dispatch gets changed

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>{user.name}</h1>
      </section>

      {(
        <section className="content">
          <>
            <div className="bar">
              <div className="bar-content">Problems solved: {stats.solved}</div>
            </div>
            <div className="bar">
              <div className="bar-content">
                Problems attempted: {stats.attempted}
              </div>
            </div>
            <div className="bar">
              <div className="bar-content">
                Fastest solve: {stats.fastestSolve}
              </div>
            </div>
            <div className="bar">
              <div className="bar-content">
                Slowest solve: {stats.slowestSolve}
              </div>
            </div>
          </>
        </section>
      )}
    </>
  );
}

export default Profile;
