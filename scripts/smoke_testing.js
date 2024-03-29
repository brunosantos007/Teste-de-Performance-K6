import http from 'k6/http';
import { check, sleep, group } from 'k6';
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 5, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1m', // This can be shorter or just a few iterations
};

export default function () {
    const BASE_URL = 'https://mockapi.io/projects/648cf7d98620b8bae7ed81b8';
    const id = 1;

    group('GET Users', function () {
        const res = http.get(`${BASE_URL}/Users`);
    
        check(res,{
            'Status Code 200': (r) => r.status === 200
        })
    });

    group('GET Users Id', function () {
      const res = http.get(`${BASE_URL}/Users/${id}`);
  
      check(res,{
          'Status Code 200': (r) => r.status === 200
      })
    });

    group('PUT Users', function () {
      const url = `https://mockapi.io/projects/648cf7d98620b8bae7ed81b8/Users/5`;

      const headers = { 'Content-Type': 'application/json' };
      const data = { "Nome": "Bert" };

      const res = http.put(url, JSON.stringify(data), { headers: headers });
  
      check(res,{
          'Status Code 200': (r) => r.status === 200
      })
    });
};

// export function handleSummary(data) {
//     return {
//       "Relatorio_k6.html": htmlReport(data),
//     };
// }