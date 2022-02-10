# Welcome to Frontend Design Ops!

Hey dev, how u doin'?

Please check this react code and feel free to send me feedbacks about this ones.

## How to run

Easy. Check it out:

1. First, **clone** this project
2. Open the project folder on terminal
3. And then run this complex command below:

```sh
\$ yarn
```

Wait to complete, and run:

```sh
\$ yarn run dev
```

WOW, the app is runnig.

Done! Just open this folder on your favorite editor and take a look or, try it on on your favorite browser.

## Getting Started

### Dev Dependencies (recommended)

- Yarn - 1.19+ (<https://yarnpkg.com/>)
- Node - 12 + (<https://nodejs.org/>)

### Libs, Frameworks & Tools

- React and React DOM - 17+ (<https://reactjs.org/>)
- Next - 10+ (<https://nextjs.org/>)
- ManyPKG (<https://github.com/Thinkmill/manypkg>)
- TurboRepo (<https://turborepo.org/>)

## Plugins on the road

To support to build the app, I've used the follows:

| Plugin   | Package Name    |
| -------- | --------------- |
| axios    | axios           |
| Stitches | @stitches/react |

## Project Structure

Main folders: /design-system and /news-app

As available on the original README file, I have just used the **/news-app** folder to create the design-system using Stitches. So, here we go:

| Folder             | Purpose                                                                                |
| ------------------ | -------------------------------------------------------------------------------------- |
| /pages             | where my pages (and routes) are. Responsible for populate the components.              |
| /public            | responsible for store my public files, such as images, icons, documents, this kind of. |
| /shared            | where my shared code for the entire application is.                                    |
| /shared/components | where are the app components.                                                          |
| /shared/constants  | where are my constants values, such as translation, for example.                       |
| /shared/helpers    | where are helpers to suport the entire code.                                           |
| /shared/hooks      | where are my custom hooks                                                              |
| /shared/services   | where are my APIs configuration                                                        |
| /shared/store      | where are my context API configuration                                                 |

And a important file here: **/news-app/stitches.config.js** where are all the design systems configuration, themes, utils and more. Base to compound the entire components and pages.

## Improvements

Check below some code improvements that should be done soon:

- Accessibility
- Unit Tests
- Loading and errors treatments for API response
- Configure the API response to save data into context API to avoid many requests

And I guess that is all. I really appreciate the opportunity and I'm glad to be part of this challenge. I learned to many things in the last couple of days. That was my first time using Stitches and I really will continue studying this lib.

So thank very much, you and If you have any suggestions, questions, doubts, please do not hesitate to contact me.

Cheers!
