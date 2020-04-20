# STARZPLAY Javascript developer challenge

So you made it up to this step. Welcome to the STARZPLAY coding challenge. Good Luck!

## STARZPLAY Landing page

This project is about the new landing page STARZPLAY wants to show to their customers. It's actually the real design
with the same technologies used in the real word landing page. The idea with this is that you get a realistic picture
of the designs and development tools you will use if you finally join us. Maybe you have never used some of the tools
we are using in this project, so just take into account that you will have to read some docs before telling us how much
time you will need to complete the challenge.

Unfortunately, our developers couldn't complete it and that's why we need your help here.

## Your tasks

- The What's Trending image is not properly implemented. Currently the image URL from which the browser should download
and paint it is not provided to the component. There is a super primitive server in this project that returns the URL to
the caller. The app should make a call to get the image and use it so that the What's Trending part is displayed as
expected. The problem is that the server is too slow so the app will have to wait until the response is ready. Do
whatever you think it's needed to ensure a proper user experience for this.
- In general we want to try to make the page fast. For example, in the Tabs component there is a computation need when
clicking each tab. In this project this computation is simulated with a timer. Given that the computation can't be
removed, think on a way to improve the user experience as much as possible from both UI feedback and speed perspectives.
The only requirement for this point is that you can't just remove the call to the `calculateTabToShow` function when a
tab is clicked. It's important to note that each tab will always have the same content.
- We want to implement a limited version of the landing page with less features that normal. We call this the Mini
Mode. In the header there is a link with the text 'Toggle Mini Mode'. When clicking on this, the landing page should stop
showing the following components, and when clicking back they should appear again:
    - Explore link in the header
    - Language selector in the header
    - Facebook button in the sticky banner
    - Devices tab in the Tabs component, but not the others
    - Apple App Store and Google Play icons in the footer.
- Take the tabs component and write a ticket describing the requirements to implement it from scratch. You can write
the ticket in a README file, for example. Think of this ticket as the document where you will describe the tabs
component for a developer who will work on it later. Feel free to add all the details you want from functional,
implementation or any other level. The only requirement for this is that the ticket must describe the implementation of
the tabs component as a React.js component.

## Time

We understand that you are currently working and you have your life. We don't want to be a problem for that so once
you have read this README and you think you have all the tasks clear, please let us know how long it will take for you
to complete them and send the challenge back to us. Just tell us one date and we will wait until then.

## Development

### Setting up the development environment

This project requires Node.js to be installed, any not-too-old version should work. Once you satisfy this requirement,
you can run the app by running:

```
npm install
npm start
```

If you want to build the app for production, you can do:

```
npm run build
```

For the part that requires the simple server, run the following in a separate terminal:
```
node server.js
```

### Some tips around the implementation

- You can find a storybook documentation for a list of components in .out/index.html. If you open it in a browser, you
will be able to know about them.
ignore it even if it appears in the docs.
- As a rule of thumb, it's better to limit the amount of third party libraries we add to our projects. However for this
challenge it's fine if you think you need some. Just use the ones you think you need but please justify our decision. 
    
### Process

- The final deliverable should be one of these:
    - A zip file with your results.
    - (Preferred but won't negatively evaluate if not done this way) A link to a git repo with one or more pull requests
    in the repository.
- If you have any questions, let us know, we'd be happy to help you as you need.

### Tools used in the challenge

- [Create React App](https://create-react-app.dev/): An app bootstrapper that makes it much easier to start creating React apps.
- [Styled Components](https://www.styled-components.com/): Library used to style our React components.
- [Storybook](https://storybook.js.org/): You shouldn't need to know anything about it, but present here for reference.

## What to pay attention to besides the tasks

- You have received an existing project. Try to follow the file organization and code style that is present on it.

# What not to pay too much attention to

- In the project you will find several links without a valid href. These, in the real word landing page, are meant to
link to external websites. Just leave those links as you find them (and ignore the linter warnings), we won't need any
functional link in this challenge.
- We know browser support is something to be taken into account. For this challenge, feel free to use any new technology
you find appropriate, but please let us know if you use anything that requires certain version of a given browser.

# Issue Description for Tabs component

## Summary
To implement a React Component that realises a custom container with tabs. Each tab has a separate content linked to it, but only the selected one must be rendered. When the user toggles between the selected tab, the related content must be updated. The Component is planned to be integarated into the Landing Page, this would allow the content creators to communicate large volume of information in the same location and provide the users with an easier access to the data they are looking for.

## User story
As a **Project Owner**
I'd like to add a component with clickable tabs to the **Landing Page** 
So that **we can categorize and disribute information**
into separate tabs and the user can select and see only the pieces of information they might be interested in.

## Acceptance Criteria
- [ ] The component is implemented in `src/components/Tabs`
- [ ] The component realises the following modern React component implementation structure
```
const Tabs = props => (
  const [selectedTab, setSelectedTab] = useState();
  ...
  return (
    <>
      ...
    </>
  )
);
```
- [ ] The implementation follows the our code style guide and matches the file and folder structure of other live components
```
/Tabs
  /styles
    Styled.js
  index.js
  Tabs.js
```
- [ ] All updated code has been passed the build flow in practice
  * eslint
  * unit tests
- [ ] The component does not introduce technical debt
- [ ] The component is manually tested

## BDD Scenarios
- [ ] **Rendered on the Landing Page:**
GIVEN Tabs component is added to the Landing Page
WHEN the page loads
THEN Tabs component must be rendered

- [ ] **Default Content:**
GIVEN The Tabs component is rendered
WHEN the Tabs component is at default state
THEN it should display the content of the first tab
AND the first tab header should be active
 
- [ ] **Tab Selection:**
GIVEN The user clicks on a the tab header
WHEN tab header is not active (selected)
THEN The selected tab content should be updated 
AND the selected tab header should activate
AND the previously selected tab header should deactivate

- [ ] **Async Content:**
GIVEN The tab content is not immediately available and requires the execution of an async process
WHEN the user selects the new tab 
THEN an animated spinner should be shown in place of the content
AND the selected tab header should activate
AND the previously selected tab header should deactivate

- [ ] **Async Content Cont.:**
GIVEN The Tab content is being fetched and the animated spinner rendered
WHEN the async operation completes
THEN the content must be updated
