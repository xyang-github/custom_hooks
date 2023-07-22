import FirstName from "./components/FirstName";
import LastName from "./components/LastName";
import "../node_modules/bulma/bulma.sass";

function App() {
  return (
    <>
      <div className="columns is-centered">
        <div className="column is-half">
          <form>
            <FirstName />
            <LastName />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
