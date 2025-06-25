### Why Heavy Modularization is the Solution to the C-Suite AI Push
This post assumes you are being forced to heavily implement AI. Heavy means 80% percent of pushed code being AI generated. If you work in such a situation heavy modularization is the only solution, likely in the form of a microservice esque setup.

Studies repeatedly show that the developer who wrote the code fixes the bugs faster and more thoroughly. If AI writes the code and can't fix it that means slower, more complicated, and less thorough bug fixes.

The way around this is heavy modularization so the AI can't mix in other code. If it only has access to one folder then it can only create a certain level of confusion. Additionally, clearly defined outputs and inputs, single purpose groupings, and other basic CS principles will be even more important than before. If you don't modularize well it will blow up in your face worse than before.

One response is that you can jsut create modular tasks and only ask the AI to write modular code. But if AI is writing 80% of your code then you will inevitably miss something. This means after one, two, three years the code will be a mess. 

The solution to this is a hard "physical" barrier, like a microservice type container. Folders could also play a role if AI could be constrained to the folder level. Hard barriers force developers to clearly define inputs and outputs, allowing them to use heavily AI generated code, playing legos with the results, and saving themselves from taking days to solve bugs in a nightmare codebase.

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
