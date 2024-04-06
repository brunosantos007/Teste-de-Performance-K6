import http from 'k6/http';
import { check } from 'k6';
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '5s', // This can be shorter or just a few iterations
};

export default function () {
    const url = 'https://648cf7d98620b8bae7ed81b7.mockapi.io/Users';
    const payload = JSON.stringify({
        nome: "Maurice",
        sobrenome: "Schuster",
        email: "Jules82@gmail.com",
        telefone: "470-456-2707",
    });

  
        const headers ={
            'Content-Type': 'application/json',
        };
   


    const res = http.post(url, payload, { headers });

    check(res,{
        'Status Code 200': (r) => r.status === 200,
        'is res body has username': (r) => r.body.includes('teste'),
    });

};