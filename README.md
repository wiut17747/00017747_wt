# Notes app, Student ID: 00017747

Nodejs/Express based Notes app. It can read, write, edit, delete user data. For data persistence, it uses json mock db. After user inputs new data, node write user data to json file and stores it until user explicitly deletes the data. Error handling and user input validation is handled with try catch, no third party libraries involved. All application logic is handled on the server side, Node.

For styling, i used vanilla css and used Inter font which is available on (https://rsms.me/inter/). I implemented white, dark theme which respects user preference (easy on the eyes) and sets as how OS's default theme has been set, which means if OS's default theme is white mode, it defualts to white mode, if it is dark mode, it fallbacks to dark mode, automatically, no need to manually switch.

For handling backend logic, I used Express, Ejs for generating dynamic templates. During developement, nodemon was also used for hot module replacement, DX.

I followed given task project structure that is logic separated into data, controller, routes, services and views. Variable names and project structure is easy to follow through, no surprises there.

I used git for tracking my code and published to github. .gitgnore file is setted so for ignoring node_modules and .DS_Store (mac only) files/folders.

Also, I implemented search functionality on the app.

## Step by step instructions on how to view the project locally

1. git clone this repo to the machine
2. install node if not installed
3. on the terminal, run 'npm i' to install npm packages
4. on the terminal, run 'npm run devStart' to start the devser and it shows which port the app is running

## Dependencies

- Express 4.18
- Ejs 3.1
- DevDep, nodemon 3.0

## Repo link

(<img width="735" alt="Screenshot 2024-03-14 at 22 57 56" src="https://github.com/wiut17747/00017747_wt/assets/145759300/6e407bf9-22e7-49a9-a322-4ad5656a0f7b">)

- (https://github.com/wiut17747/00017747_wt)

## Deployment

I tried all the deployment platforms (Netlify, Vercel, Render, Glitch) but for some reason I couldn't deploy it, maybe the issues on their side or mine but can't seem to wrap my head around it. 2 times Render messed up my app so I have to rebuild it 2 times, 2 times so I gave up. I tried to follow seminar tutorial on how to deploy the app but AWS asked for credit card for deploying and I don't have one so. Thank you!
