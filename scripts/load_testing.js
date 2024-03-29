import http from 'k6/http';
import { check } from 'k6';

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: '5s', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: '30s', target: 100 }, // stay at 100 users for 30 minutes
    { duration: '5s', target: 0 }, // ramp-down to 0 users
  ],
};

export default function(){

    const res = http.get('https://mockapi.io/projects/648cf7d98620b8bae7ed81b8/Users');

    group('visit product listing page', function () {
        // ...

        check(res,{
            'Status Code 200': (r) => r.status === 200,
        });
    });
};
