import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
function Profile() {
  const { user } = useSelector((state) => state.auth);
  useEffect(()=>{
  },[user])
  console.log(user)
  return (
    <>
      <section className="heading">
        <h1>{user.name}</h1>
      </section>

      <section className="content">
        <>
          <div className="bar">
            <div className="bar-content">
              Problems solved: {user && user.solvedProblems.length}
            </div>
          </div>
          <div className="bar">
            <div className="bar-content">
              Problems attempted: {user && user.solvedProblems.length}
            </div>
          </div>
          <div className="bar">
            <div className="bar-content">
              Fastest solve: {user && user.solvedProblems.length}
            </div>
          </div>
          <div className="bar">
            <div className="bar-content">
              Slowest solve: {user && user.solvedProblems.length}
            </div>
          </div>
        </>
      </section>
    </>
  );
}

export default Profile;
