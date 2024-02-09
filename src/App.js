import { state } from "./state/state";
import { PageLayout } from "./components/page-layout/page-layout";

function App() {
  return (
    <>
      <PageLayout data={state}/>
    </>
  );
}

export default App;
