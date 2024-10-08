export default [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "script-src": [
            "'self'",
            "unsafe-inline"
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com"
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com"
          ],
          "frame-src": [
            "'self'",
            "youtube.com",
            "www.youtube.com",
            "vimeo.com",
            "*.vimeo.com",
            "facebook.com",
            "www.facebook.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
