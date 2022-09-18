







// //função que cria as mensagens
// function createmessage(user) {

//   let messages = cText.value;

//   sendMessage.onsubmit = function (event) {
//     event.preventDefault();
//     user = auth.currentUser;
//     var person = {
//       id: user.uid,
//       photo: "",
//       name: user.displayName,
//       email: user.email,
//       voice: [],
//       created: firebase.firestore.FieldValue.serverTimestamp(),
//     };
//      person.voice.push(messages);
//     dbSala1.add(person).then('deu')

//     cText.value = "";
//   };
// }

// // função que exibe as mensagens
// function showUserMessage(user) {
//   dbSala1.get().then(function (snapshot){
//     let display;
//     snapshot.forEach((doc)=>{
//       // dbSala1
//       // .orderBy("created", "asc")
//       // .limit(50)
//       // .onSnapshot((dataSnapshot) => {
//       //   showUserMessage(dataSnapshot, user);
//       // });
//       let msg = doc.data()
//       console.log(msg)
      
//     })
//   })





// }

/*********************************************************** */
function showUserMessage(dataSnapshot, user) {
  let display = "";
  dataSnapshot.forEach(function (mssg) {
    let msg1 = mssg.data();
    let data = msg1.voice;
    let nm = msg1.name
    let uid = msg1.photo;
    let ph = uid ? uid : '../../assets/img/unknownUser.png'
    userName.innerHTML = nm;
    userImage.src = uid ? uid : "../../assets/img/unknownUser.png";
    userImage.style.marginTop = "30px";
    userImage.style.height = "100px";
    // userImage.src = uid
    //
    let displaychat = `
    <div class="">
    <p class="text-center">
      <span class="mr-2" id="">
        <p class="mb-1 ">${nm ? nm : 'User'} <br>
        <img src="${ph}" alt="userimage">

      </span>
      ${data}</p>
  </div>

    `;
    display += displaychat;
  });

  chat.innerHTML = display;
}

// coias a fazer
/*

*/
