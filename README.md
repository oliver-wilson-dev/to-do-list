# To Do List

A To-do List application with React.

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

2. install the dependencies
```console
yarn
```

3. run the application
```console
yarn dev
```

4. run the tests (optional - this is opinionated and will run in watch mode)
```console
yarn test
```

5. check code coverage
```console
yarn coverage
```

6. do a production build (optional)
```console
yarn build
```

# Known issues
- the user can add an empty task
- the user can edit a task to have no text

