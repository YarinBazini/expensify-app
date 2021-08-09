import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnBxQSZa5jo3rCImeyJypUpKiSmXlD6eg",
    authDomain: "expensify-1abdd.firebaseapp.com",
    databaseURL: "https://expensify-1abdd-default-rtdb.firebaseio.com",
    projectId: "expensify-1abdd",
    storageBucket: "expensify-1abdd.appspot.com",
    messagingSenderId: "567987880031",
    appId: "1:567987880031:web:ed5110aa9f070954991bea",
    measurementId: "G-R05SPLLLKG"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export {firebase,googleAuthProvider, database as default};













/* //child removed
database.ref('expenses').on('child_removed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

  database.ref('expenses').push({
       description:'rent',
       note:'',
       amount:15000,
       createdAt:1651651
   });

/*   database.ref('expenses').once('value').then((snapshot)=>{
      const expenses = [];
      snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id:childSnapshot.key,
                ...childSnapshot.val()
            })
      })
      console.log(expenses);
  }) */

  /* database.ref('expenses').on('value', (snapshot)=>{
    const expenses = [];
    snapshot.forEach((childSnapshot)=>{
          expenses.push({
              id:childSnapshot.key,
              ...childSnapshot.val()
          })
    })
    console.log(expenses);
  }) */

  /*   const onValChange =  database.ref().on('value', (snapshot)=>{
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`);
}); */






 // database.ref('note/-MgZuhHPJTtd00a9e-bP').remove();

/*   database.ref('note').push({
      title:'course',
      body:'react, angular'
  }) */


/*   const firebaseNotes = {
      notes:{
        12:{
            title:'First note',
            body:'Body1'
        },
        a61ase:{
            title:'sec note',
            body:'Body2'
        }
      }
  }

const note = [{
    id:'12',
    title:'First note',
    body:'Body1'
},{
    id:'761ase',
    title:'sec note',
    body:'Body2'
}];

database.ref('notes').set(note); */







/*   const database = firebase.database();

 const onValChange =  database.ref().on('value', (snapshot)=>{
        console.log(snapshot.val());
  });

  setTimeout(() => {
      database.ref('age').set(29);
  }, 3500);

  setTimeout(() => {
    database.ref().off(onValChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500); */


/*   database.ref('location/city').once('value')
  .then((snapshot)=>{
     const val=  snapshot.val();
     console.log(val);
  })
  .catch((e)=>{
      console.log(e);
  }) */

  /* database.ref().set({
      name:'Yarin Bazini',
      age:22,
      stressLevel:6,
      job:{
          title:'Software developer',
          company:'Google'
      },
      location:{
          city:'bat-yam',
          country:'Israel'

      }
  }).then(()=>{
      console.log('data saved');
  }).catch((e)=>{
    console.log(e);
  }); 


//  database.ref().update({
//      job:'Maneger',
//      'location/city': 'Tel-Aviv'
//  })

database.ref().update({
    stressLevel:9,
    'job/company':'Amazon',
    'location/city': 'Seatel'
}) */

/*   firebase.database().ref().remove().then(()=>{
      console.log("Remove succeeded.")
  }).catch((e)=> {
    console.log("Remove failed: " + e);
  }); */ 