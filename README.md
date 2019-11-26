# To Do List

A To-do List application with React.

This application is hosted at [`https://www.oliverwilson.dev/to-do-list/`](https://www.oliverwilson.dev/to-do-list/).

## Technical Implementation
- Css modules, afforded by postCSS.
- Redux is used for state management.
- Static typing through the use of PropTypes.
- 100% unit test code coverage.
- Adheres to W3C accessability guides.

## Features
This to-do list allows the user to:
- Add a to-do.
- Edit a to-do.
- Remove a to-do.
- Mark it as done

Additionally, any action that is performed by the user is written to a cookie. This enables the user to create a task and close the browser and when they return to the application (assuming in the same browser) then they will see their task remain in the list. This behaviour is the same for marking a task as complete, deleting a task and editing a task.

The application will provide five tasks by default as an example - feel free to edit these or delete them or... do them! (Remember to walk the dog!)

## Accessability
Opinionated focusing on textareas is enforced for accessability purposes. Aria-labels have been used where appropriate (on the actions of each task - delete, update and mark as complete). However, there is room for improvement e.g. more detailed aria-labels on traditionally bland elements like each `<li />`.

## How to run the app
The app is deployed at [`https://www.oliverwilson.dev/to-do-list/`](https://www.oliverwilson.dev/to-do-list/), so please feel free to head there and view the production build.

If you would like to run the app locally
1. clone the repository
```console
git clone https://github.com/oliver-wilson-dev/to-do-list.git
```

2. change directory into the directory that the repository has been cloned into
```console
cd to-do-list
```

3. install the dependencies
```console
yarn
```

4. run the application
```console
yarn dev
```

5. run the tests (optional - this is opinionated and will run in watch mode)
```console
yarn test
```

6. check code coverage
```console
yarn coverage
```

7. do a production build (optional)
```console
yarn build
```

## Deployments
This app is hosted via githiub pages - this means that the convention of building bundle assets to either the root of the project or to the `<root>/docs` directory is enforces. I've opted for the latter option because the assets are at lest neatly sectioned somewhere rather than just sitting in the root.

# Known issues
- the user can add an empty task
- the user can edit a task to have no text

