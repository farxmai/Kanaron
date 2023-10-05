export const routes = {
  auth: {
    root: "/auth",
    login: "login",
    register: "register",
  },
  dashboard: {
    root: "",
    home: "home",
    races: "races",
    race: "races/:id",
    classes: "classes",
    class: "classes/:id",
    skills: "skills",
    skill: "skills/:id",
    spells: "spells",
    spell: "spells/:id",
    items: "items",
    item: "items/:id",
  },
  profile: {
    root: "/profile",
    current: ":id",
    current_chars: ":id/characters",
  },
  admin: {
    root: "/admin",
  },
};
