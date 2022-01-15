import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../../App";
import Onboarding from "../Onboarding";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />}>
          {/* <Route index element={<App />} />
          <Route path="teams" element={<div>team</div>}> */}
          {/* <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
