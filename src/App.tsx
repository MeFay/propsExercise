import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Fay" age={21} isStudent={true} />
      <Student name="Leo" age={99} isStudent={false} />
      <Student name="David" age={26} isStudent={true} />
      <Student name="Maria" age={22} isStudent={false} />
      <Student />
    </>
  );
}

export default App;
