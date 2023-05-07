<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="images/SocialPlan-it-logo-Square.png" alt="Logo">
  </a>
  
  <div align="center">
<a href="https://github.com/social-plan-it/plan-it-social-web/network/members">
  <img height="28px" src="https://img.shields.io/github/forks/social-plan-it/plan-it-social-web?color=6ca4cc" alt="Forks"/>
</a>
<a href="https://github.com/social-plan-it/plan-it-social-web/graphs/contributors">
  <img height="28px" src="https://img.shields.io/github/contributors/social-plan-it/plan-it-social-web?color=88bc10&logo=github&logoColor=white" alt="Contributors"/>
</a>
<a href="https://github.com/social-plan-it/plan-it-social-web/issues">
  <img height="28px" src="https://img.shields.io/github/issues/social-plan-it/plan-it-social-web" alt="Issues"/>
</a>
  <a  href="https://plan-it-social-web.vercel.app/">
    <img height="28px" src="https://plan-it-social-web.vercel.app/?app=plan-it-social-web" />
  </a>
</div>
<div align="center">
</div>

  <h3 align="center"></h3>
  Social Plan It
  <p align="center">
    Your one and only meet up solution!
    <br />
    <a href=""><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://plan-it-social-web.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/social-plan-it/plan-it-social-web/issues">Report Bug</a>
    ·
    <a href="https://github.com/social-plan-it/plan-it-social-web/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open="true">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#design">Design</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#gettingstarted">Getting started</a></li>
      </ul>
    </li>
    <li><a href="#what-i-have-learned">What we have learned</a></li>
    <li><a href="#what-issues-have-i-faced-and-how-i-resolved-them">What issues have I faced and how I resolved them</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DESIGN -->

## Design

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

### Installation

## What we have learned

## What issues have I faced and how I resolved them

<!-- ROADMAP -->

## Roadmap

- [] MVP
  - [ ] Example...

See the [open issues](https://github.com/social-plan-it/plan-it-social-web/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

## How Do I Contribute Using Git?

1. Clone the repository with this command if you don't have it:

   ```shell
   git clone https://github.com/social-plan-it/plan-it-social-web.git
   ```

2. Run the following command to make sure you have the latest changes on the main branch

   ```shell
   git pull
   ```

3. Create a new feature branch with a descriptive name and only make your changes here. For example, to add this README documentation I would call this branch `add-git-workflow`.

   ```shell
   git checkout -b <your feature branch name>
   ```

4. Make as many changes as you need in your feature branch. You can use the following commands per commit message - or add the individual files instead of using the **.**

   ```shell
   git add .
   git status
   git commit -m <your commit message>
   ```

5. Once your feature is ready and you're ready to merge into the main branch first make sure to push your local branch changes to GitHub.

   ```shell
   git push --set-upstream origin <your feature branch name>
   ```

6. Go to https://github.com/social-plan-it/plan-it-social-web/branches and you should see your newly pushed feature branch. Find and click the button, "New pull request", to request that your changes be "pulled" into the main branch.

7. When you click the button, complete the form required for each pull request and click "Create pull request".

8. In the top right corner, click "Reviewers" and add one person on the team as the Reviewer for the pull request.

9. Once the Reviewer has looked at your pull request and verified that everything is OK, they will merge your pull request into the main branch.

<br/>

## What if I have a Conflict?

1. From within your feature branch, fetch the latest changes from the main branch

   ```sh
   git fetch origin main
   ```

2. Rebase so that your feature branch history is stacked on top of the latest main branch history

   ```sh
   git rebase origin/main
   ```

3. Now resolve the conflicts manually in your code editor one at a time. Git will tell you which files have a conflict. Once you've resolved the conflicts run the following commands:

   ```sh
   git add .
   git rebase --continue
   ```

4. Write and save a commit message if all conflicts are resolved.

5. Push your rebased feature branch changes to GitHub's computers.

   ```sh
   git push -f origin <your feature branch name>
   ```

6. Go back to your pull request on Github your pull request should have no conflicts and you can merge into the main branch!

Also, don't forget the most important rule of rebasing:

> _NEVER REBASE ON A REMOTE BRANCH_ > <br />

## How Do I Write Good Commit Message?

Why do we care to write a good commit message? A well-crafted Git commit message is the best way to communicate context about a change to other developers working on that project, and indeed, to your future self.

A commit has two parts: a subject (max 50 characters) and a description.
Use the following command to separate a subject from the description.

```sh
git commit -m "Subject" -m "Description..."
```

In each commit message:

1. Specify the type of commit in the subject. Example: `Feat: create landing page`.

   - feat: The new feature you're adding to a particular application
   - fix: A bug fix
   - style: Feature and updates related to styling
   - refactor: Refactoring a specific section of the codebase
   - test: Everything related to testing
   - docs: Everything related to documentation
   - chore: Regular code maintenance.

2. Separate the subject from the body
3. Remove whitespace errors
4. Remove unnecessary punctuation marks
5. Do not end the subject line with a period
6. Capitalize the subject line and each paragraph
7. Use the body to explain what changes you have made and why you made them.
8. Do not assume the reviewer understands what the original problem was, ensure you add it.
9. Do not think your code is self-explanatory

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FILE STRUCTURE -->

## File Structure

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LINTING -->

## Linting

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE]() for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<p align="right">(<a href="#readme-top">back to top</a>)</p>
