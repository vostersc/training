### Quotes
- "So here’s a sign that you’ve hired the wrong people: you have to start making stupid rules. All of a sudden you're like, 'I can’t believe I have to tell people to stop watching Netflix on the job, or don’t steal each other’s food, or don’t show up to a work event drunk.' It’s like, these are obvious things. And then you wonder, 'Man, these people are so dumb.' The only person dumber than that would be the person who’s hiring them." - Alex Hormozi

### Why You Should Enter Every Conversation With the Awareness that You Could Be Wrong
[The new and improved Gas Tesla.](https://www.youtube.com/shorts/pXVwt3BPPlE)

### Why Heavy Modularization with a "contract" focus is the solution to the AI push
This post assumes you are being asked to heavily implement AI. Heavy means most code pushed is AI generated. If you work in such a situation heavy modularization (and other CS principles applied) is the solution, likely in the form of a microservice-esque setup. This is because of memory and AI’s “creativity.”

Studies repeatedly show that the developer who wrote the code fixes the bugs faster and more thoroughly. If AI writes the code and can't fix it that means slower, more complicated, and less thorough bug fixes. Human attention moves to the interfaces/contracts, just like when two companies work together and each wants to guarantee performance with out micro-managing.

The way around this is heavy modularization so the AI can't mix in other code. If it only has access to one folder then it can only create a certain level of confusion. Additionally, clearly defined outputs and inputs, single purpose groupings, and other basic CS principles will be even more important than before. If you don't modularize well it will blow up in your face worse than before.

One response is that you can just create modular tasks and only ask the AI to write modular code. But if AI is writing most of your code then you will inevitably miss something. This means after one, two, three years the code will be a mess. 

The solution to this is a hard "physical" barrier, like a microservice type container. Folders could also play a role if AI could be constrained to the folder level. Hard barriers force developers to clearly define inputs and outputs, allowing them to use heavily AI generated code, playing legos with the results, and saving themselves from taking days to solve bugs in a nightmare codebase. The downside is you'll see increased switching costs.

- Another way of saying this that is more technical would be to say that "the emphasis will move to the interfaces and the types," because they are simple enough to understand, yet still have control over the actual outcome.
- The necessity of modularization is directly related to the memory and conceptual ability of the AI. As each improves, the size of the codebase it can operate in, before requiring a separate “chunk” increases. as I am writing this one of my chunks has reached 10k lines.
- Other concepts like TDD are going to be important, as they help clearly define and enforce the contract. I believe this is where most of the “product” definitions will end up.This means that good product people (while they survive as a separate department) will be the ones essentially writing the tests. Why have a separate “product spec” if you can have them just write certain parts of the tests?
- Contrarians will also be important. This means quality codebases will have a second set of eyes criticizing the work of that AI. The context of the criticizing (PR review) AI should be created differently, albeit with all the necessary information, so that it generates a different opinion. Diversity of opinion and perspective will become necessary to preventing bugs. The more important each line of code is, the higher the number of dedicated “validating” agents will be. This means areas like law and surgical healthcare will spend more on reviewing agents than areas like general marketing and sales saas.
- Well written MD files that include things like architectural rules are table stakes. 
- Tiny and well defined tasks are also necessary. (Let’s all rediscover decomposition!)
- Hot take - the best developers will NEED to talk directly to the customer. Product as a separate department will become an unnecessary bottleneck that under-communicates and mystifies what the customer wants. No matter how well they do their job there will always be something left out in the “this is to what the customer wants” discussion. This means the best engineers will be “product engineers,” engineers with social skills that must speak to customers, not the mouth breathing dungeon dwellers of prior decades.

### The Anti-Motivation Motivational Message
Don’t focus on motivation. Motivation is like a sensitive test. Sometimes it works, sometimes it doesn’t, and sometimes it depends on your QA environment.

A ways back I stopped trying to squash the "I'm not feeling motivated today" bug. I noticed that even if you eventually achieve a motivated state, the victory is ephemeral, slipping through your fingers like sand the moment something bad happens.

In contrast, I've found that focusing on habits gives me a more stable platform for achieving my goals. Habits work when you are sad. Habits work when you are happy. Habits even work when you didn't remember to run your tests in docker.

If you want to know how to create a powerful habit, consider implementing the principle of Kaizen. To create a habit, kaizen says to ask "what is the most ridiculously small step I can take towards my goal," and then just do that

### How to Avoid Finger Pointing in Retrospectives
How do you have a Retro/Meeting where you discuss issues while avoiding finger pointing? 

Avoid finger pointing by focusing on sociological questions, topics, not psychological ones. E.g. "how can we reduce the likelihood that this mistake happens"? Sociological problems focus on fixing processes, cultures, and environments, not the individuals that operate therin.

In contrast, psychological questions dig into individual issues. They typically do not belong in public meetings. Psychological questions often become accusatory in public meetings. E.g. "why did you do X and not Y?"


### (NOT COMPLETE IN PROGRESS) Creating a Culture where Mistakes and Lack of Knowledge isn't Covered Up
How do you create a culture where engineers don't hide mistakes or lack of knowledge?

Engineers hide things because they are protecting their egos or their careers, because they don't belive admitting would change anything, or because admitting a mistake or lack of knowledge would slow things down.

Some solutions are:
- eliminate hero prestige culture
- normalize saying I don't know (model this)
- treat pointing out problems as a sign of technical maturity, because it is
- normalize leadership and other devs making mistakes (mistake of the week)
- stop fast/hot fixes as much as possible
- stop focusing on verbal commitments and instead on days where they demonstrate what they've done
- shift the focus from perfection to effort, asking people to be adaptable, learn quickly, and try hard, not to create something perfect
