import { state } from "./state/state";
import { PageLayout } from "./components/page-layout/page-layout";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageLayout data={state}/>
    </BrowserRouter>
  );
}

export default App;
