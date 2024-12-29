The solution involves ensuring that you access the document data only after the `get()` promise resolves successfully. Use `.then()` to handle the promise or async/await:

```javascript
// Using .then()
db.collection('users').doc('someId').get().then(doc => {
  if (doc.exists) {
    console.log(doc.data().name);
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});

// Using async/await
async function getData() {
  try {
    const doc = await db.collection('users').doc('someId').get();
    if (doc.exists) {
      console.log(doc.data().name);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

getData();
```
This corrected code first checks if the document exists (`doc.exists`) before accessing its data.  It also includes error handling using `.catch()` or a `try...catch` block.