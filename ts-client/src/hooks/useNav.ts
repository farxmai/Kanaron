import { useNavigate } from "react-router-dom";
import { routes } from "router/routes";

type ID = string | number;

export const useNav = () => {
  const navigate = useNavigate();

  return {
    goBack: () => navigate(-1),
    // DASHBOARD
    viewHome: () => navigate(`/${routes.dashboard.home}`),
    viewRaces: () => navigate(`/${routes.dashboard.races}`),
    viewRace: (id: ID) => navigate(`/${routes.dashboard.races}/${id}`),
    viewClasses: () => navigate(`/${routes.dashboard.classes}`),
    viewClass: (id: ID) => navigate(`/${routes.dashboard.classes}/${id}`),
  };
};
