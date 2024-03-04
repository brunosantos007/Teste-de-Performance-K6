import http from "k6/http";
import { check, group } from "k6";

export const options = {
    vus: 1,
    duration: '3s'
}

export default function(){
    group('users', function(){
        const response1 = http.get("https://648cf7d98620b8bae7ed81b7.mockapi.io/users");
        const response2 = http.get("https://648cf7d98620b8bae7ed81b7.mockapi.io/users/1");
        check(response1,{
            'Status Code: 200': (r) => r.status === 200
        });
        check(response2,{
            'Status Code: 200': (r) => r.status === 200
        });
    });
}