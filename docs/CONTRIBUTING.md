# Contributing to Good for PoC

We’re so happy to have your help! Thank you. If you haven't already, [join us on Gitter](https://gitter.im/GoodForPoC/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link). We would love to have an active community of people contributing to this project! Remember to [view our code of conduct](https://github.com/GoodForPoC/website/blob/master/docs/CODE_OF_CONDUCT.md) before participating.

## What we need help with
Please [view the roadmap](https://github.com/GoodForPoC/website/projects/1) to see what contributions are needed and in progress before modifying code. We want this project to continue growing and help support people of color in tech around the globe! If your idea doesn't exist on the roadmap yet, open an issue using the [Issues](https://github.com/GoodForPoC/website/issues) tab. Make sure to describe the feature you would like to see, why you need it, and how it should work. Always tag your feature ideas with the `enhancements` tag.

## Bugs
You can report bugs using the [Issues](https://github.com/GoodForPoC/website/issues) tab. Please make sure your bug has yet to be reported before opening a new one. If you need to file a new bug, be sure to include a title and clear description, as much relevant information as possible, and a screenshot or code sample showing the bug. Always tag your bug reports with the `bug` tag. **If you find a security vulnerability, do NOT open an issue. [Email hello@goodforpocin.tech](mailto:hello@goodforpocin.tech?Subject=[Security%20vulnerability]%20description%20here) instead.**

In order to determine whether you are dealing with a security issue, ask yourself these two questions:

- Can I access something that's not mine, or something I shouldn't have access to?
- Can I disable something for other people?

If the answer to either of those two questions are "yes", then you're probably dealing with a security issue. Note that even if you answer "no" to both questions, you may still be dealing with a security issue, so if you're unsure, just [email us at hello@goodforpocin.tech](mailto:hello@goodforpocin.tech?Subject=[Security%20vulnerability]%20description%20here).

## How to create your changes
- Once you’ve identified an area that needs help, make a new branch on your local copy of this repository. [Read more about branching in the git documentation](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).
- Make all of your changes in that branch.
- Test your code and ensure that it aligns with the standards below.
- Commit the relevant changes and push your branch to the remote repository.

## Coding conventions
- Please indent using two spaces (soft tabs).
- When writing CSS, add a new line between brackets and CSS rule definitions. This also applies to JavaScript function definitions.
- We ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and between CSS identifiers and brackets (`.example {`).
- Please consider those who will be reading your code. We hope beginners and experts will both contribute to this project.

### Committing code
It is a recommended best practice to keep your changes as logically grouped as possible within individual commits. There is no limit to the number of commits any single Pull Request may have, and many contributors find it easier to review changes that are split across multiple commits.

Include relevant descriptions of your changes in commit messages. Use 50 words or less for your commit title and make sure verbs are in the present tense. For example, `POST form data to database` is a helpful commit title. If you want to add a longer description beyond the title, keep the second line blank and wrap all other lines around 72 characters.

Here is a full commit message template, taken from [node.js's contribution guidelines](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md#commit-message-guidelines):

```txt
subsystem: explain the commit in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way, `git log` will show things
nicely even when it is indented.

Fixes: https://github.com/nodejs/node/issues/1337
Refs: http://eslint.org/docs/rules/space-in-parens.html
```

## Testing & quality assurance (QA)

We strongly believe in test-driven development and would like help implementing testing as part of our development process. In the meantime, here are two things you can do to make contribution easy for everyone:

- Comment your code so other contributors can understand what it does.
- Make sure you use a [linter](https://en.wikipedia.org/wiki/Lint_(software)) to fix any and all JavaScript and CSS errors.

## Submitting changes
When you're ready to merge your changes into the master branch, open a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) in the project via GitHub. Make sure it has a clear list of what you've done and screenshots – we've created a handy template to make the submission process as easy as possible. Please make sure your submissions follow our coding conventions (above).

Sometimes, reviewers will provide feedback on your project changes. Please include any feedback you receive from peers during the review process and update your pull request appropriately. Once approved, your pull request will be approved and deployed.

## Thank you!
