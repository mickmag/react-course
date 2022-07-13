import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
