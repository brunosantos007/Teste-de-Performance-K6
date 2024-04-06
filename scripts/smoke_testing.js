import http from 'k6/http';
import { check, sleep, group } from 'k6';
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1m', // This can be shorter or just a few iterations
  thresholds:{
    checks: ['rate > 0.95'],
    http_req_duration: ['p(95) < 2000']
  }
};

export default function () {
    const BASE_URL = 'https://test-api.k6.io';
    const id = 5;
    
    group('GET Crocodiles', function () {
        const res = http.get(`${BASE_URL}/public/crocodiles`);
    
        check(res,{
            'Status Code 200': (r) => r.status === 200
        })
    });

    group('GET Crocodiles ID', function () {
        const res = http.get(`${BASE_URL}/public/crocodiles/${id}`);
    
        check(res,{
            'Status Code 200': (r) => r.status === 200
        })
    });

};

export function handleSummary(data) {
   return {
     "Relatorio_k6.html": htmlReport(data),
   };
};