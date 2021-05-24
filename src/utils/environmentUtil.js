// Assume the React app will make decisions based on environment rather than its own URL

const getBackendBaseDomain = () => {
  // NODE_ENV has three preset values of 'development', 'test', and 'production'
  // that cannot be expanded or modified. Therefore, we are going to use a custom
  // environment variable of our own to set the URLs so that we can have many
  // different potential environments.
  const env = process.env.REACT_APP_ENV;
  let domain = "";
  switch (env) {
    case "production":
      domain = process.env.REACT_APP_PROD_API_DOMAIN || "production.pokeapi.co";
      break;
    case "staging":
      domain =
        process.env.REACT_APP_STAGING_API_DOMAIN || "staging.pokeapi.co";
      break;
    case "development":
      domain = process.env.REACT_APP_DEV_API_DOMAIN || "pokeapi.co";
      break;
    default:
      domain = process.env.REACT_APP_DEV_API_DOMAIN || "pokeapi.co";
      break;
  }
  return domain;
};

const getBackendBaseUrl = () => {
  const domain = getBackendBaseDomain();
  if (domain.includes("localhost")) {
    return `http://${domain}`;
  }

  return `https://${domain}`;
};

const buildURL = (src) => {
  if (src.indexOf("blob:") < 0) {
    return `${getBackendBaseUrl()}${src[0] === "/" ? "" : "/"}${src}`;
  }

  return src;
};

export default () => ({
  baseDomain: getBackendBaseDomain(),
  baseURL: getBackendBaseUrl(),
  get: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === "production",
  buildURL: (src) => buildURL(src),
  responseType: "json",
});
