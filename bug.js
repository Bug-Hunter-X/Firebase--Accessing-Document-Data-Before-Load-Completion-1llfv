The Firebase SDK might throw an error if you try to access a property of a document snapshot before the data has fully loaded. This can happen if you use the data from the snapshot in a callback function that is called before the asynchronous operation to fetch the data has completed.  For example:

```javascript
db.collection('users').doc('someId').get().then(doc => {
  console.log(doc.data().name); // Error if data isn't loaded yet
});
```