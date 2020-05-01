let protocol = location.protocol + '//' + location.host;

export var APP_CONFIG = {};

export var URL_CONFIG = {
  BASE_URL: getConfigs()['BASE_URL'],
  LOGIN: '/login',
  SIGNUP: '/signup',
  GET_QUESTIONS_BY_DAY: '/get-questions-by-day',
  CREATE_NEW_TRACKER: '/create-new-tracker',
  GET_HEALTH_TRACKER: '/get-health-tracker',
  SAVE_DATA_FOR_DAY: '/save-data-for-day',
  GET_USER_INFO: '/get-user-info',
  LOGOUT: '/logout',
  GET_SYMPTOMS: '/get-symptoms',
  GET_ALL_ACTIVE_TRACKERS: '/get-active-trackers',
  GET_WORLD_MAP_DATA: 'https://corona.lmao.ninja/v2/countries?yesterday=true',
  GET_POSITIVE_CASES: '/positive-cases-graph'
};

export function getConfigs() {
  if (protocol == 'http://localhost:4200') {
    return {
      BASE_URL: 'http://3.86.171.251:5000',
    };
  } else {
    return {
      BASE_URL: 'http://3.86.171.251:5000',
    };
  }
}
