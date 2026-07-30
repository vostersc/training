## INTRO
- My history, culture. California - hard work, Oregon - work live play; Philosophy - value questioning, self taught into programming - value persistence, perfection not necessary to pass.
- Give me an idea of your non-work background. For example, what hobbies do you have, how did you start the hobby? Why do you like about it?

## RESUME/CULTURE QUESTIONS
- At OP we help apartment complexes understand how their residents feel about them, to do that we present a dashboard to our users that shows things like reviews about the complex. In order to present the dashboard, we use Vue/React, Node, Postgres/Mongo, AWS, Docker. (lambda auth, CRONS, Dash, Deploy, Docker local dev)
  - Tell me about the last place you worked. What has the tech stack they were on and what did each piece do?
- Tell me about a time when you were given a vague or poorly defined task task?
- What do you look for when you review another person's code?
- What was the last big mistake that you made and what did you learn?

## PRACTICAL
- Build the resident word describing component on the dashboard.
  - What tech/tooling would you use to build this and why? (Eg Angular, Node, Mongo)
  - Describe the flow of data from the UI to the database and back.
  - What performance problems would happen if you just dumped 1m users on the platform? What if we increased the reviews to 100b?
  - A new developer comes onto this project. What are the areas with the most technical risk? Where are they likely to break something?

## ARCHITECTURE
  - Beginning at your computer, explain how a request to a website works. Start at when you enter the website name into the browser.
  - FE
    - You have a slow dashboard. How would you go about improving performance? (cloudfront, caching, memoize, simplify data storage, cookies)
    - How do you decide between SSR and standard FE/BE separate setup?
  - BE
    - How do you decide what logic gets handled in the backend vs SQL?
    - What design patterns do you find yourself using in the backend code? (Eg decorators adding info to headers, lenses decouple db from getters)
    - When would you use something like micro-services versus more of a monolith setup?
    - Horizontal v. Vertical Scaling?
  - CLOUD/DEVOPS
    - Give me an example of how a typical CICD system is set up.
    - What AWS services are you familiar with and what problem did each service solve?
  - You have a slow query. How would you address that slowness?
     - What tools exist to help you address slowness? (Explain analyze)
     - What kinds of things are you going to see if your query needs an index? (full table scans)

## QUESTIONS
