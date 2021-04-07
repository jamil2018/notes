import { BrowserRouter, Route, Switch } from "react-router-dom";
import "boxicons";

import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen";
import EditNoteScreen from "./screens/EditNoteScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/addnote" component={CreateNoteScreen} />
          <Route path="/notes/:id" component={EditNoteScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
