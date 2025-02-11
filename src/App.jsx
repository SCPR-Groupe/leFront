import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Page_ACCES_PUBLIC/login";
import Incription from "./page/Page_ACCES_PUBLIC/inscription";
import LayooutSimple from "./composant/layoutSimple";
import { SnackbarProvider } from "notistack";

function App() {


  return (
    <>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <Routes>
            <Route path="/" element={<LayooutSimple />}>
              <Route index element={<Login />} />
              <Route path="/inscription" element={<Incription />} />
            </Route>
          </Routes>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
