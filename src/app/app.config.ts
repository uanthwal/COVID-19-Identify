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
  LOGOUT:'/logout'
};

export function getConfigs() {
  if (protocol == 'http://localhost:4200') {
    return {
      BASE_URL: 'http://localhost:5000',
    };
  } else {
    return {
      BASE_URL:
        'http://travel-canada-elb-1597027388.us-east-1.elb.amazonaws.com',
    };
  }
}
