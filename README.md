# Marketing-Page - Lambda School build week

Co-make is an app startup looking for some help making their website. They want a new navigation, new header, and new buttons on the home page. They also want a mobile version of their site styled. Use your preprocessing knowledge to accomplish their tasks.

## Task 1: Set Up The Project With Git
* [x] Create a forked copy of this project.
* [x] Add your team lead as collaborator on Github.
* [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [x] Create a new branch: `git checkout -b <firstName-lastName>`.
* [x] Implement the project on your newly created <firstName-lastName> branch, committing changes regularly.
* [x] Push commits: `git push origin <firstName-lastName>`.

## Task 2: Create index.html and css/index.css
* [x] Create index.html 
* [x] Create css and less folders

## Task 3: Set up your preprocessor
* [x] Verify that you have LESS installed correctly by running lessc -v in your terminal, if you don't 
 get a version message back, reach out to your team lead for help.
* [x] Open your terminal and navigate to your preprocessing project by using the cd command
* [x] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`
* [x] Verify your compiler is working correctly by changing the background-color on the html selector to red in your index.less file.
* [x] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 4: Import LESS Files

* [x] Populate your less folder make sure that it includes the following. 

1. `index.less`
2. `variables.less`
3. `mixins.less`
4. `reset.less`
5. `global.less`
6. `navigation.less`
7. `footer.less`
8. `home-page.less`

## Task 5: Design a desktop focused website
* [x] Using modern design elements make a marketing website including navigation, header, and buttons
* [x] Navigation: Use the `navigation.less` file for all your navigation styling
* [x] Main Header: Use the `home-page.less` file for the header styling.

## Task 6: Responsive Mobile view
* [x] Use escaping to create a variable named `@mobile` that contains this value: `(max-width: 500px)`.  Use the `variables.less` file to house your variables.
* [x] Make a mobile view that looks good and is easy to use

Rubric Item 1: HTML/CSS

Student did not deploy HTML/CSS marketing site. Did not demonstrate firm understanding CSS and HTML fundamentals. Student can not demonstrate individual contribution of HTML/CSS for site. 

HTML/CSS site is deployed. Student laid out all elements of the design. Note: there may be visible user interface inconsistencies across the project, but all elements are on the page. 

Student laid out the design that matches the example perfectly. CSS fundamentals such as: box model, flexbox, and positioning were used appropriately.

Rubric Item 2: Responsiveness

Deployed site does not have any responsiveness to width of browser. Items fall off the screen or do not work at all widths. Student can not demonstrate individual contribution of responsiveness for site. 

Deployed site is responsive to width of browser. All elements are visible at any width of the screen. There is a usable layout at desktop 1000px+ and mobile 500px-.

Phone views look professional at 500px and below and Desktop views look professional at 1000px and above. No horizontal scrollbars exist. Tablet views look professional at 800px and above. Responsive units are used for font-sizing.

Rubric Item 3: PreProcessing

Student does not have any less files or less is not complied to CSS. Student can not demonstrate

Student has appropriate less files, has used variables and mixins appropriately has nested styles appropriately and has imported their files into index.less in the correct order

Student's code is easy to read, they have used different less files for different portions of the site and they have imported them successful into the index.less file, student uses mixins and variables, student has used escaping for media queries, student writes DRY code and as used reusable parametric mixins with parameter names that make sense