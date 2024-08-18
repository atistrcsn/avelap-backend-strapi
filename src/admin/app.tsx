export default {
  config: {
    locales: ["hu", "en"],
    translations: {
      hu: {
        "Settings.application.customization.menu-logo.carousel-hint":
          "Cserélje le a logót a navigáció felett",
        "app.components.LeftMenu.navbrand.title": "AVE Admin",
        "app.components.LeftMenu.navbrand.workplace": "Tartalomkezelő felület",
      },
    },
    tutorials: false,
    notifications: {
      releases: false,
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
