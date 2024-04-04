# Training
## PR Review
### Basics
1. Have you reviewed your own code? Are there comments, explanations, questions, and notes on your PR?
2. Have you QA'd your own code? Consider making a screen recording to attach to your QA request.
3. How well are your functions, variables, commits, branches named? Are functions action oriented and descriptive? Could someone new figure out what a function is doing with out reading the code?
4. How verbose is your code? Does the verbosity make it easier or harder to understand? Can you eliminate code with out making it less readable? Are you duplicating unnecessarily?
5. Too many or too few tests? Are you handling edge conditions like objects that are null, undefined, or an incorrect datatype?
6. Are you mutating and reassigning unnecessarily? Both make the codebase difficult, do these as little as possible.
7. Are you following code patterns established by code already in the area?
8. Are you using prebuilt utility type functions in the app?
### Client Side
1. Have you checked how your component looks in mobile and desktop mode?
2. Are you allowing SQL injection? (Look for things like innerHtml where someone could pass in an image with an onload function.)
### Server Side
1. Are you properly structuring service/controller/other files?
2. Are you mananging security concerns like SQL injection? Are you validating inputs?
### Big Picture
1. How is this PR an improvement on your last one?
2. Are you committing the repo/team/company to repos/patterns that will make things difficult in the long run?
3. Did you leave the section of better then you found it? Are you just tossing in conditionals to catch the issue you are fixing for or are you resolving the core issue?
4. If you had to argue that your code is bad, what would you say? What area in this PR is most likely to get you [Dunning Krugered](https://www.britannica.com/science/Dunning-Kruger-effect)?
### Political
1. How does this task support a high visibility organization agenda item?
  - For example: this PR reduces new customer churn by eliminating setup bugs.
