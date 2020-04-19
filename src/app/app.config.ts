let protocol = location.protocol + '//' + location.host;

export var APP_CONFIG = {};

export var ,Z
};

export function getConfigs() {
  if (protocol == 'http://localhost:4200') {
    return {
      BASE_URL:  'http://localhost:5000'
    };
  } else {
    return {
      BASE_URL:
        'http://3.86.171.251:5000',
    };
  }
}
