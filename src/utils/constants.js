export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON =
  "https://occ-0-490-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const PHOTO_URL = "https://example.com/jane-q-user/profile.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_API_OPTIONS_KEY,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const Netflix_BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/242447b0-bdfd-4235-8288-58d84366f0dc/US-en-20240827-TRIFECTA-perspective_WEB_d7dc1add-9eaf-4d94-88f4-2e2cf381a362_small.jpg";

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
