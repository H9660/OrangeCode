import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function ProblemContext({ title: title }) {
  const [codedata, setcodeData] = useState({
    code: "",
    langauge: "",
  });

  const { code, language } = codedata;
  const solveSuccess = false;
  const compilerError = false;
  const failure = false;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setcodeData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div id="main">
        <div id="problem">
          <ul id="problem-heading">
            <li>{title}</li>
            <ul>
              <li>Hard</li>
              <li>✔Solved</li>
            </ul>
          </ul>
          {solveSuccess ? (
            <>
              <div id="success-solve">Success</div>
              <ul id="navigate-buttons">
                <li>◀◀ Previous</li>
                <li>Next ▶▶</li>
              </ul>
            </>
          ) : compilerError ? (
            <>
              <div id="compiler-error">Compiler Error</div>
              <ul id="navigate-buttons">
                <li>◀◀ Previous</li>
                <li>Next ▶▶</li>
              </ul>
            </>
          ) : failure ? (
            <>
              <div id="failure-solve">Failure</div>
              <ul id="navigate-buttons">
                <li>◀◀ Previous</li>
                <li>Next ▶▶</li>
              </ul>
            </>
          ) : (
            <>
              <div id="problem-statement">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                rerum error incidunt. Similique consequuntur consequatur quaerat
                quasi eius deserunt pariatur ea amet tempora quae minima
                laudantium, rerum odit animi beatae quos voluptatum unde
                voluptates nulla cum earum est omnis corrupti voluptatibus.
                Doloremque a dolorem voluptatem quis ratione modi fuga. Animi.
              </div>
              <ul id="problem-specs">
                <li>Testcase 1</li>
                <li>Testcase 2</li>
                <li>Constraints</li>
              </ul>
            </>
          )}
        </div>

        <div id="editor">
          <ul id="editor-heading">
            <li>
              <select id="langauge-select">
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="javascript">Javascript</option>
              </select>
            </li>
            <ul>
              <li>Run</li>
              <li>Submit</li>
            </ul>
          </ul>

          <textarea
            id="codepad"
            placeholder="Enter your code here"
            onchange={onChange}
          ></textarea>

          <div id="code-reset">Reset</div>
        </div>
      </div>
    </>
  );
}

export default ProblemContext;
