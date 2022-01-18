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

If I had more time, I would choose to continue developing this application in the following order:
1. I would spend time to make sure that the application works flawlessly across devices of all sizes. As the application stands now, the UX is poor when the width of the screen is less than 1000px.
2. I would implement a way for the data to persist upon realoading the page. This could be achieved either by leveraging the browser's local storage, or, the more robust option would be to implement a SQL database using a tool like Prisma.
3. I would create a pagination container for the links such that if the user has more than 10 links, only ten links would be viewable per page.
4. Rather than implementing a traditional Username / Passsword authentication layer, I would explore making Shortly a Web3 application that allows a user to access their links by connecting the application to their Metamask browser wallet.
5. I would write a series of unit tests to provide a reasonable amount of test coverage for the application.


### Frameworks Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Author Information

**Developer:** Michael Kardjian\
**Date Sumbmitted:** January 17, 2022
