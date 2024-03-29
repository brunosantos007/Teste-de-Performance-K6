# Types of Load Testing

## Smoke Testing

- Smoke tests are a type of load testing characterized by minimal load. They serve to verify system functionality under minimal load conditions and establish baseline performance metrics. Typically, smoke testing involves running tests with a small number of Virtual Users (VUs). Using more than 5 VUs may transition the test into a mini-load test. Tests should execute for a brief period, either through a low number of iterations or a duration ranging from seconds to a few minutes at most.
## Average-load testing:
- An average-load test is a type of load testing that assesses how the system performs under typical load. Typical load might be a regular day in production or an average moment. Average-load tests simulate the number of concurrent users and requests per second that reflect average behaviors in the production environment. This type of test typically increases the throughput or VUs gradually and keeps that average load for some time. Depending on the system’s characteristics, the test may stop suddenly or have a short ramp-down period.
## Stress testing: 
- Stress testing assesses how the system performs when loads are heavier than usual. The load pattern of a stress test resembles that of an average-load test. The main difference is higher load. To account for higher load, the ramp-up period takes longer in proportion to the load increase. Similarly, after the test reaches the desired load, it might last for slightly longer than it would in the average-load test.
## Soak testing:
- Soak testing is another variation of load testing that is similar to the average-load test. It focuses on extended periods, analyzing the following:
  - The system’s degradation of performance and resource consumption over extended periods.
  - The system’s availability and stability during extended periods.
## Spike testing:
- A spike test is a type of load testing that verifies whether the system survives and performs under sudden and massive rushes of utilization.
## Breakpoint testing:
- Breakpoint testing is a type of load testing that aims to find system limits. Reasons you might want to know the limits include:
  - To tune or care for the system’s weak spots to relocate those higher limits at higher levels.
  - To help plan remediation steps in those cases and prepare for when the system nears those limits.
