# Firebase Data Access Before Load Completion

This repository demonstrates a common error in Firebase applications: attempting to access document data before the asynchronous data loading operation has completed. This leads to errors because the properties you're trying to access might be undefined.

The `bug.js` file shows the incorrect implementation that causes the error.  The `bugSolution.js` file provides the corrected code that uses promises correctly to handle the asynchronous nature of Firebase data retrieval.

## How to reproduce
1. Clone the repository.
2. Set up a Firebase project and configure the `firebase.json` file.
3. Add some sample data to your Firebase database.
4. Run `bug.js`. Observe the error.
5. Run `bugSolution.js`. Observe the successful data retrieval.