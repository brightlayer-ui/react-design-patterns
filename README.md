# React Design Patterns

[![](https://img.shields.io/circleci/project/github/brightlayer-ui/react-design-patterns/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/react-design-patterns/tree/master)

This repository holds the source code examples for [Brightlayer UI design patterns](https://brightlayer-ui.github.io/patterns), written in React. The code is organized to make it easy to copy and paste the examples into your own projects.

## Current Patterns

| Pattern                                                                                       | Description                                                                                                                                                                                                           | Interactive Demo                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Account Menu In A Navigation Drawer](https://brightlayer-ui.github.io/patterns/account-menu) | This involves placing an avatar in the drawer header along with basic information about the user (e.g., their name, username, email address, job title and / or organization affiliation)                             | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/account-menu/in-a-drawer/index.tsx&initialpath=/in-a-drawer)                                         |
| [Account Menu In An App Bar](https://brightlayer-ui.github.io/patterns/account-menu)          | The user menu appears as an Avatar in the App Bar which opens a menu with the user-related content.                                                                                                                   | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/account-menu/in-an-app-bar/index.tsx&initialpath=/in-an-app-bar)                                     |
| [Action List](https://brightlayer-ui.github.io/patterns/lists)                                | A list with actions available on individual list items.                                                                                                                                                               | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/action-list/index.tsx&initialpath=/action-list)                                                |
| [Action List In Button Panel](https://brightlayer-ui.github.io/patterns/lists)                | A list with global actions in its own button panel.                                                                                                                                                                   | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/action-list/action-list-button-panel/index.tsx&initialpath=/action-list-button-panel)          |
| [Action List In Panel Header](https://brightlayer-ui.github.io/patterns/lists)                | A list with global actions in the panel header.                                                                                                                                                                       | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/action-list/action-list-panel-header/index.tsx&initialpath=/action-list-panel-header)          |
| [Action List With Inline Actions](https://brightlayer-ui.github.io/patterns/lists)            | A list with inline actions available on individual list items.                                                                                                                                                        | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/action-list/action-list-inline/index.tsx&initialpath=/action-list-inline)                      |
| [Action List With Local Actions](https://brightlayer-ui.github.io/patterns/lists)             | A list with local actions available on individual list items.                                                                                                                                                         | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/action-list/action-list-local-actions/index.tsx&initialpath=/action-list-local-actions)        |
| [Basic Bottom Sheet](https://brightlayer-ui.github.io/patterns/overlay)                       | At the top of the page, the app bar has a 3dot icon on right. When clicking on 3dot icon bottomsheet slides up from bottom of the page, revealing global actions that affect the whole page.                          | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/overlays/basic-bottom-sheet/index.tsx&initialpath=/basic-bottom-sheet)                               |
| [Collapsible App Bar](https://brightlayer-ui.github.io/patterns/appbar)                       | At the top of the page, the appbar is large, but as you scroll, it changes to a standard appbar.                                                                                                                      | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/app-bar/collapsible-app-bar/index.tsx&initialpath=/collapsible)                                      |
| [Complex Bottom Sheet](https://brightlayer-ui.github.io/patterns/overlay)                     | At the top of the page, the app bar has a 3dot icon on right. When clicking on 3dot icon bottomsheet slides up from bottom of the page, revealing filters that affect the whole page.                                 | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/overlays/complex-bottom-sheet/index.tsx&initialpath=/complex-bottom-sheet)                           |
| [Contextual Action Bar](https://brightlayer-ui.github.io/patterns/appbar)                     | Contextual action bar to provide contextual actions to selected items.                                                                                                                                                | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/app-bar/contextual-action/index.tsx&initialpath=/contextual-action)                                  |
| [Contextual Spinners](https://brightlayer-ui.github.io/patterns/loading)                      | If you need to wait for a server response to validate inputs in a form (after clicking the submit button), you should disable the submit button and replace its label with a spinner.                                 | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/loading-waiting-states/contextual-spinner/ContextualSpinner.tsx&initialpath=/contextual-spinner)     |
| [Data List](https://brightlayer-ui.github.io/patterns/lists)                                  | A basic list dynamically built from a JSON data object.                                                                                                                                                               | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/data-list/index.tsx&initialpath=/data-list)                                                    |
| [Dropdown Toolbar](https://brightlayer-ui.github.io/patterns/appbar)                          | Dropdown Toolbar transforms the simple text subtitle of the app bar into a dropdown menu that can be used to configure the page.                                                                                      | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/app-bar/dropdown-toolbar/index.tsx&initialpath=/dropdown-toolbar)                                    |
| [Dynamic Stepper](https://brightlayer-ui.github.io/patterns/steppers)                         | A dynamic stepper that allows the user to create an arbitrary number of steps for a procedure.                                                                                                                        | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/dynamic-stepper/index.tsx&initialpath=/dynamic-stepper)                                              |
| [Fixed Length Passcode](https://brightlayer-ui.github.io/patterns/forms)                      | Form validation starts after specific length of passcode                                                                                                                                                              | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/form-validation/fixed-length-passcode/index.tsx&initialpath=/fixed-length-passcode)                  |
| [Forms In a List](https://brightlayer-ui.github.io/patterns/forms)                            | Input validations in a list                                                                                                                                                                                           | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/form-validation/list/index.tsx&initialpath=/in-a-list)                                               |
| [Forms In a Table](https://brightlayer-ui.github.io/patterns/forms)                           | Validate inputs inside table which works on larger screens and collapse the data into list at mobile size.                                                                                                            | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/form-validation/table/index.tsx&initialpath=/in-a-table)                                             |
| [Internationalization](https://brightlayer-ui.github.io/patterns/internationalization)        | A simple shopping app that allows the user to switch between the different languages including the languages that are right to left.                                                                                  | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/i18n/index.tsx&initialpath=/i18n)                                                                    |
| [List As A Tree Structure](https://brightlayer-ui.github.io/patterns/lists)                   | A list that navigates a tree-like structure.                                                                                                                                                                          | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/tree-structure-list/index.tsx&initialpath=/tree-structure-list)                                |
| [Multiselect List](https://brightlayer-ui.github.io/patterns/lists)                           | A multiselect list with group actions.                                                                                                                                                                                | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/multiselect-list/index.tsx&initialpath=/multiselect-list)                                      |
| [Page-Wide Search](https://brightlayer-ui.github.io/patterns/appbar)                          | Page-wide search can be placed below the primary app bar when searching content on a single page or screen.                                                                                                           | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/app-bar/page-wide-search/index.tsx&initialpath=/page-wide-search)                                    |
| [Password](https://brightlayer-ui.github.io/patterns/forms)                                   | Form Validation such as verifying phone number.                                                                                                                                                                       | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/form-validation/password/index.tsx&initialpath=/password)                                            |
| [Phone Number Format](https://brightlayer-ui.github.io/patterns/forms)                        | Validate phone number as per format.                                                                                                                                                                                  | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/form-validation/phone-number-format/index.tsx&initialpath=/phone-number-format)                      |
| [Progress Bars](https://brightlayer-ui.github.io/patterns/loading)                            | Use progress bar where progress is discrete / measurable                                                                                                                                                              | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/loading-waiting-states/progress-bar/index.tsx&initialpath=/progress-bar)                             |
| [Progress Bars (Indeterminate)](https://brightlayer-ui.github.io/patterns/loading)            | Use Progress bar with indeterminate variation                                                                                                                                                                         | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/loading-waiting-states/progress-bar-indeterminate/index.tsx&initialpath=/progress-bar-indeterminate) |
| [Responsive Table](https://brightlayer-ui.github.io/patterns/lists)                           | A responsive table that works on larger screens and collapse the data into list at mobile size.                                                                                                                       | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/responsive-table/index.tsx&initialpath=/responsive-table)                                      |
| [Search Bar](https://brightlayer-ui.github.io/patterns/appbar)                                | At the top of the page, the app bar has a search icon on the right. After clicking on the search icon, the search bar slides in from the right of the app bar.                                                        | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/app-bar/search-bar/index.tsx&initialpath=/search)                                                    |
| [Sectioned Form](https://brightlayer-ui.github.io/patterns/forms)                             | Validate form once you submit complete form.                                                                                                                                                                          | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/form-validation/sectioned-form/index.tsx&initialpath=/in-a-sectioned-form)                           |
| [Skeleton Loader](https://brightlayer-ui.github.io/patterns/loading)                          | When your application is loading structured data, use skeletons that mimic the data that will eventually be loaded.                                                                                                   | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/loading-waiting-states/skeletons/Skeletons.tsx&initialpath=/skeletons)                               |
| [Sortable List](https://brightlayer-ui.github.io/patterns/lists)                              | A sortable list with drag handles.                                                                                                                                                                                    | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/sortable-list/index.tsx&initialpath=/sortable-list)                                            |
| [Spinner Overlay](https://brightlayer-ui.github.io/patterns/loading)                          | Spinner overlays make use of a semi-transparent overlay with a large, centered spinner. It is useful when you want to block user interaction with the screen (or a section of the screen) while processing occurs.    | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/loading-waiting-states/spinner-overlays/index.tsx&initialpath=/spinner-overlays)                     |
| [Status List](https://brightlayer-ui.github.io/patterns/lists)                                | A basic list with status stripes for list items.                                                                                                                                                                      | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/lists/status-list/index.tsx&initialpath=/status-list)                                                |
| [Verify on Submit](https://brightlayer-ui.github.io/patterns/forms)                           | This type of verification is common when the checks cannot be performed on the client, such as making an API call to verify a registration code, check user login credentials, or search for a device on the network. | [CodeSandbox](https://codesandbox.io/s/github/brightlayer-ui/react-design-patterns/tree/master?file=/src/pages/form-validation/verify-on-submit/index.tsx&initialpath=/verify-on-submit)                            |

## Running Locally

To run this project (with all patterns) locally, first clone the repository:

```
git clone https://github.com/brightlayer-ui/react-design-patterns.git
cd react-design-patterns
```

Then you may run `yarn && yarn start` to start a local server.

## Folder Structure

All our design patterns are located inside `/src/pages`.

```
└── /src
    |── index.tsx                           // the root file that renders the application
    |── App.tsx                             // the file for the global layout
    |── LandingPage.tsx                     // the landing page
    |── style.css                           // global css stylesheet
    |── /assets                             // constants used by the global layout
    |── /router                             // the main application router
    |── /redux                              // actions, reducers, and store
    └── /pages                              // individual design patterns
```
