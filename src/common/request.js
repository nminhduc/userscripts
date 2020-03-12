export const request = (url, options) =>
  new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: 'GET',
      ...options,
      url,
      onload: function(response) {
        if (response.readyState === 4 && response.status === 200) {
          resolve(JSON.parse(response.responseText));
        } else {
          reject(new Error(`Cannot load url ${url}`));
        }
      },
    });
  });
