import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { getProblem, submitCode } from "../slices/problem/problemSlice";
import { FaExclamationCircle } from "react-icons/fa";

function ProblemContext({ title: title }) {
  const [codedata, setcodeData] = useState({
    code: "",
    language: "",
  });

  const { code, language } = codedata;
  const solveSuccess = false;
  const compilerError = false;
  const failure = false;
  const dispatch = useDispatch();

  const { problem, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.problems
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getProblem(title));
  }, [isSuccess, dispatch, isError]);

  const onChange = (e) => {
    setcodeData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitcode = (e) => {
    console.log("done")
    const submitData = {
      code: code,
      language: language,
      title: title,
    };
    dispatch(submitCode(submitData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {problem ? (
        <div id="main">
          <div id="problem">
            <ul id="problem-heading">
              <li>{problem.title}</li>
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
                <div id="problem-statement">{problem.statement}</div>
                <ul id="problem-specs">
                  {problem.testcases.length > 0 ? (
                    <li>
                      Input: {problem.testcases[0].input}
                      <br></br>
                      Output: {problem.testcases[0].input}
                    </li>
                  ) : (
                    <div></div>
                  )}

                  {problem.testcases.length > 1 ? (
                    <li>
                      Input: {problem.testcases[1].input}
                      <br></br>
                      Output: {problem.testcases[1].input}
                    </li>
                  ) : (
                    <div></div>
                  )}

                  <li>{problem.constraints}</li>
                </ul>
              </>
            )}
          </div>

          <div id="editor">
            <ul id="editor-heading">
              <li>
                <select
                  name="language"
                  value={language}
                  id="langauge-select"
                  onChange={onChange}
                >
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="javascript">Javascript</option>
                </select>
              </li>
              <ul>
                <li>Run</li>
                <li onClick={submitcode}>Submit</li>
              </ul>
            </ul>

            <textarea
              type="textarea"
              id="codepad"
              placeholder="Enter your code here"
              onChange={onChange}
              name="code"
              value={code}
            ></textarea>

            <div
              id="code-reset"
              onClick={() => {
                setcodeData({
                  code: "",
                });
              }}
            >
              Reset
            </div>
          </div>
        </div>
      ) : (
        <>
          <div id="not-found">
            <FaExclamationCircle
              id="exclaim"
              size="120px"
            ></FaExclamationCircle>
          </div>
          <div id="not-found">Problem not found</div>
        </>
      )}
    </>
  );
}

export default ProblemContext;
