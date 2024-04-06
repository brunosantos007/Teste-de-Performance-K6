import http from 'k6/http';
import { check, sleep, group } from 'k6';

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '3m', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: '5m', target: 200 }, // stay at higher 200 users for 30 minutes
    { duration: '1m', target: 0 }, // ramp-down to 0 users
  ],
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