# Types of Load Testing

## Smoke Testing

- Smoke tests are a type of load testing characterized by minimal load. They serve to verify system functionality under minimal load conditions and establish baseline performance metrics. Typically, smoke testing involves running tests with a small number of Virtual Users (VUs). Using more than 5 VUs may transition the test into a mini-load test. Tests should execute for a brief period, either through a low number of iterations or a duration ranging from seconds to a few minutes at most.
## Average-load testing:
An average-load test is a type of load testing that assesses how the system performs under typical load. Typical load might be a regular day in production or an average moment. Average-load tests simulate the number of concurrent users and requests per second that reflect average behaviors in the production environment. This type of test typically increases the throughput or VUs gradually and keeps that average load for some time. Depending on the system’s characteristics, the test may stop suddenly or have a short ramp-down period.
