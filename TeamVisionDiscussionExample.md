## Problem:
Backend bugs are harming credibility, internally and with customers. Sources of the issue, in no particular order:
(1) Mongo database issues - fix in progress.
(2) Unclear ownership - fix in progress at the management/structural level.
(3) **Poor edge case awareness.** SWEs make a change but break something else. - This document will resolve this issue.
(4) **Poor PR review processes** - This document will partially resolve this issue.

## Solution Concepts to Discuss:
- Tests document ALL edge cases clearly and effectively: "when no files are uploaded, and error is passed describing the issue"
- possibly institute code coverage requirements? is this necessary/ideal?
- track function use across codebase (POSSIBLY NOTATE IT?)
- Better code comments/naming (why is this returning here, why is <3 lenght making an API call, what happens if removed)
- possible TL ownership of certain central files
- delete dead code
- Better PR reviews from teammates, ensuring ^above are happening, smaller COMMIT by COMMIT work so PRs are easier to digest.
- PUSH DECOMPOSITION (large functions need to be smaller ones)
- push typescript
- in PR process -> focus on asking first, WHAT ELSE BREAKS?

## Details: 
