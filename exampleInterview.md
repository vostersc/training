## INTRO
- My history, culture. California - hard work, Oregon - work live play; Philosophy - value questioning, self taught into programming - value persistence, perfection not necessary to pass.
- Give me an idea of your non-work background. For example, what hobbies do you have, how did you start the hobby? Why do you like about it?

## RESUME/CULTURE QUESTIONS
- At XXX we are solving XXX, to do that we present a dashboard to our users. In order to present the dashboard, we use React, Node, Postgres, AWS, Docker.
  - Tell me about the last place you worked. What was the problem they were solving, and how did they use the tech stack to solve that issue?
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
  - FE
    - You have a slow dashboard. How would you go about improving performance? (cloudfront, caching, memoize, simplify data storage, cookies)
    - How do you decide between SSR and standard FE/BE separate setup?
  - BE
    - How do you decide what logic gets handled in the backend vs SQL?
    - What design patterns do you find yourself using in the backend code? (Eg decorators adding info to headers, lenses decouple db from getters)
  - You have a slow query. How would you address that slowness?
     - What tools exist to help you address slowness? (Explain analyze)
     - What kinds of things are you going to see if your query needs an index? (full table scans)

## QUESTIONS
