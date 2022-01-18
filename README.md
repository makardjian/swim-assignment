# Shortly

A lightweight application that allows you to shorten links with one click of a button.

## Instructions for running the application

Navigate to the root of the project directory and run the following commands:

### `yarn install`

Wait for packages to be installed...

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

Once the app is running in the browser, paste any Web URL into the Input Field. To generate a shortened link from the URL, click the `Shorten It!` button, or push the `Enter` key.

Notice that when the page loads, three static links always appear in order to demonstrate the user interface. 

## Possibilities for the Future

If I had more time, I would continue developing the application in the following order:
1. Spend time to make sure that the application works flawlessly across devices of all sizes. As the application stands now, the UX is poor when the width of the screen is less than 1000px.
2. Implement a way for the data to persist once the user reloads the page. I could achieve this either by using the browser's local storage sytem, or by implementing a SQL database using a tool like Prisma. Alongside this feature, I would make sure the user had the ability to clean their list of links by deleting old, unwanted links.
3. Create a pagination container for the links such that if the user were to have more than ten links, the links would auto-paginatie in ten-link increments.
4. Rather than implementing a traditional username / passsword authentication layer, I would explore making Shortly a Web3 application that allows a user to access their previously generated links by connecting the application to their Metamask wallet.
5. Write a series of unit tests to provide a reasonable amount of test coverage for the application.


### Frameworks Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Author Information

**Developer:** Michael Kardjian
**Date Sumbmitted:** January 17, 2022
