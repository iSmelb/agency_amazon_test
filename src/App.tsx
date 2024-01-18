import { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/scenes/HomePage";
import Layout from "@/components/Layout/Layout";
import CampingPage from "@/scenes/CampingPage";
import ProfilePage from "@/scenes/ProfilePage";

const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="accounts/:id/profiles" element={<ProfilePage />} />
          <Route
            path="accounts/:id/profiles/:idProfile/campings"
            element={<CampingPage />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
