export function getConfig() {
   return {
      mode: import.meta.env.MODE,
      hostname: window.location.hostname,
      env: import.meta.env
   }
}
export function nate_request(TableName) {
   const { MODE: mode, BASE_URL } = import.meta.env;
   const host = window.location.hostname;
   console.log('mode:', mode, 'BASE_URL:', BASE_URL, 'host:', host, import.meta.env, 'aaa:', getConfig());
   let api = 'http://localhost:9001/items/' + TableName;
   if (host != 'localhost') api = BASE_URL + 'public/data/' + TableName + '.json';
   return fetch(api).then(res => {
      return res.json()
   }).then(res => {
      console.log(TableName, res);
      return res.data ? res.data : res;
   })
}