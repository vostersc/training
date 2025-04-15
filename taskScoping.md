# A Guide on How to Assign Points
Note: scoping varies from team to team. These points probably won't map to yours. This is simply a starting guide. Much of scoping is situational and some teams purposefully don't even define points.
Ratings don't equal points. Ratings are 1 - 5. Points are derived from ratings meaning giving a task a 3 would give the task 5 points. Giving a task a 5 means giving the task 13 points. Points increase exponentially with ratings because larger tasks are more difficult to scope correctly. By exponentially increasing the number of points rewarded you give more leway for unforseen events.

## Relevant
1. Quantity of code can imply increased task complexity.
2. How much research it took.
3. How much coordination it took between people, systems, departments.
4. How spread across applications your code changes were.
5. Actions or changes that increase technical difficulty are relevant.
6. Level of risk.

## Not Relevant
1. How long it took you. Your experience level doesn't affect task complexity. You rate based on the "reasonably experienced engineeer."
2. Blockers are probably not relevant. You should switch to other tasks if you are regularly blocked while working on this task.

## Example
- .5? pts - Nusiance points. A very quick fix. Quick research and determined user error. Takes more time to test, PR, merge than to fix.

- 1 pts - Some research with minimal changes. Zero research and decent amount of code.
- 2 pts - Lots of research and minimal code. Minimal research and lots of code.

- 5 pts - A refactor or feature. Can also be a really complex bug.
- 8 pts - A new page with many components. Includes complex flows, logic. Full job refactors that include complex algorithm or database changes. Often includes unknowns.
  
- 13 pts - High risk. Lots of research POC. Large refactor that affects many aspects of the frontend/backend architecture. Likely includes many unknowns.
- 21 pts - A full rewrite or creation of massive undertaking. Eg metadata.

## Opiniion
[A guide to task complexity](https://docs.google.com/document/d/1MSuWYbNTBS00HmtQlOtJ_cKs13rszjKwHm9ejwXnj24/edit?tab=t.0)

**type of task**
- bug
- feature
- iteration

**risk**
- high - used everywhere, very critical
- medium - used by everyone but not critical, critical but a safe fix
- low - unlikely to break core functionality, low use

**unknowns**
- we need to connect to this API that has no documentation
- fix undefined rendering on the screen

**complexity of the code**
- reused code
- wrote new queries
- wrote new algorithms
- copy pasted
