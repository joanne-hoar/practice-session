# Front End Frameworks: Module 1: Practice Activity 1

## Angular CLI Setup and Project Structure

### Learning Objective
Master the Angular CLI and project structure needed for Assignment 1.

### Prerequisites
- Node.js installed on your system

### Step 1: Angular CLI Installation
- `npm install -g @angular/cli`
- `ng version` *(verify Angular CLI is installed)*

### Step 2: Create Practice Project
Create a project:
- `ng new practice-session`
- Configuration:
  - Routing  Yes
  - Stylesheet: CSS
  - SSR: No

### Step 3: Understand Modern Angular Structure
Explore the project structure:
- `cd practice-session`
- `src/app/app.ts` (main app component - standalone!)
- `src/app/app.routes.ts` (routing file)
- `angular.json` (project configuration)

### Step 4: Test Your Setup
- `ng serve`
- Open [http://localhost:4200](http://localhost:4200)
- Verify app loads successfully

### Step 5: Practice with ESLint
Angular projects come with ESLint for code quality and style checking.

- Run the linter:
  - `ng lint`
- Observe the output for any lint errors or warnings.

#### Create a Sample Lint Error
1. Open `src/app/app.ts`.
2. Add an unused variable at the top of the file:
   ```typescript
   const unused = 123;
   ```
3. Run `ng lint` again. You should see a warning or error about the unused variable.
4. Remove or use the variable to resolve the lint error.

### Step 6: Run Unit Tests with ng test
Angular projects include unit testing setup by default.

- Run the test suite:
  - `ng test`
- This will open a browser window and run all unit tests in the project.
- Observe the test results and coverage.

You can add or modify tests in the `src/app` directory to practice writing and running tests.

### Step 7: Create Header Component
Generate your first component using CLI:
- `ng generate component shared/header`
- Notice the generated files:
  - `header.ts` (standalone component)
  - `header.html` (template)
  - `header.css` (styles)
---

**Next Steps:** Practice Activity 2 will cover creating more reusable components and `@Input`/`@Output` for component communication.
