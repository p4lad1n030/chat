auth.languageCode = "pt-BR";



// // Função que trata a submissão do formulário de autenticação
// form.onsubmit = function (event) {
//   event.preventDefault();
//   show(loading);
//   if (btnLogin.innerHTML == "Acessar") {
//     auth
//       .signInWithEmailAndPassword(form.email.value, form.password.value)
//       .then(function (user) {
//         window.location.href = "../../salas.html";
//         console.log(user);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   } else {
//     /*criação de usuários*/
//     show(loading);
//     auth
//       .createUserWithEmailAndPassword(form.email.value, form.password.value)
//       .then((user) => {
//         if (user) {
//           window.location.href = "../../salas.html";
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         hide(loading);
//       });
//   }
// };

// // função que observa usuários autenticados ou não
// auth.onAuthStateChanged(function (user) {

//   createmessage(user)
//   showUserMessage(user);
// })






auth.languageCode = "pt-BR";
// Função que trata a submissão do formulário de autenticação
form.onsubmit = function (event) {
  event.preventDefault();
  show(loading);
  if (btnLogin.innerHTML == "Acessar") {
    auth
      .signInWithEmailAndPassword(form.email.value, form.password.value)
      .then(function (user) {
        window.location.href = "../../salas.html";
        console.log(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    /*criação de usuários*/
    show(loading);
    auth
      .createUserWithEmailAndPassword(form.email.value, form.password.value)
      .then((user) => {
        if (user) {
          window.location.href = "../../salas.html";
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hide(loading);
      });
  }
};

/*================================================== */
// função que observa usuários autenticados ou não
auth.onAuthStateChanged(function (user) {
  // userImage.src = user.photoURL
  //   ? user.photoURL
  //   : "../../assets/img/unknownUser.png";
  let userId = auth.currentUser.uid;

  sendMessage.onsubmit = function (event) {
    chat.scrollIntoView({ behavior: "smooth" });
    event.preventDefault();
    if (cText.value != "") {
      let userId = auth.currentUser.uid;
      speaker = {
        id: userId,
        photo: '',
        name: user.displayName,
        email: user.email,
        voice: [cText.value],
        created: firebase.firestore.FieldValue.serverTimestamp(),
      };

      dbSala1.add(speaker).then(() => {});
    } else {
      return;
    }

    cText.value = "";
  };
  // console.log(userId)
  dbSala1
    .orderBy("created", "asc")
    .limit(50)
    .onSnapshot((dataSnapshot) => {
      showUserMessage(dataSnapshot, user);
    });
  fileImg.onchange = function (e) {
    let arquive = e.target.files[0];
    if (arquive) {
      if (arquive.type.includes("image")) {
        let userId = auth.currentUser.uid;
        let imgName = database.ref().push().key + "-" + arquive.name; //nome da imagem
        let imgPath = `usersImage/${userId}/${imgName}`; //caminho da imagem
        //let pic = 
        storageRef.ref(imgPath).put(arquive)//aqui manda a foto pro storage
        .then((e) => {
          e.ref.getDownloadURL().then((downloadURL)=>{
            console.log(downloadURL)
          })
        } )
      }
    }
    fileImg.value = ''
  };
});

// atualizar nome de usuário logado com email apenas
function updateUserName() {
  let user = auth.currentUser;
  let name1 = prompt("Digite o nome", user.displayName);
  if (name1 && name1 != "") {
    user
      .updateProfile({
        displayName: name1,
      })
      .catch((error) => {
        showError("Falha ao atualizar nome", error);
        console.log(error);
      });
  } else {
    alert("Nome não informado");
  }
}

function updatePic(user, picture) {
userdbSala1.doc(user.currentUser).update({photo: pic})
console.log(pic)



  user.updateProfile({
    photoURL: picture,
  });
}

/*================================================== */
// função para deslogar o usuário
function signOut() {
  auth.signOut().catch(function (error) {
    console.log(error);
  });
}

// fileImg.onchange = function (e) {
//   let arquive = e.target.files[0];
//   // console.log(user.photoURL);
//   if (arquive) {
//         if (arquive.type.includes("image")) {
//           let userId = auth.currentUser.uid;
//           let imgName = database.ref().push().key + "-" + arquive.name;//nome da imagem
//           let imgPath = `usersImage/${userId}/${imgName}`;//caminho da imagem
//           // console.log(storageRef)
//           storageRef.ref(imgPath);
//            storageRef.ref(imgPath).put(arquive); //aqui manda a foto pro storage

//           // função pra setar a foto do usuário
//           ()=> {
//             storageRef.ref(imgPath)
//               .getDownloadURL()
//               .then(function (url) {
//                 userImage.src = url
//                 changePicture(url,user);
//               })
//               .catch(function (error) {

//                console.log('Erro ao setar a foto do usuário', error)
//               })
//           };
//         }
//       } else {
//         alert("O arquivo precisa ser uma imagem, ou foi cancelado pelo usuário");
//       }
// };

// /*abaixo codigo pra prgara url vinda do user */
// userImage.src = user.photoURL
//   ? user.photoURL
//   : ".././assets/img/unknownUser.png";
// userImage.style.marginTop = "30px";
// userImage.style.height = "100px";
// userName.innerHTML = user.displayName;
// userEmail.innerHTML = user.email;
// };

// função para redefinir a senha dos usuários

// função que observa usuários autenticados ou não
// auth.onAuthStateChanged(function(user) {
//   let userId = auth.currentUser.uid
//   // console.log(userId)
//   if(user){
//     dbSala1.doc(userId).collection('msg1')
//     // .orderBy('createdAt').limit(50)
//     .onSnapshot((dataSnapshot) => {
//       showUserMessage(dataSnapshot, user),
//       // showOtherUserMessage(dataSnapshot,user)
//       console.log('usuário autenticado')
//     })
//   } else {
//     console.log('usuário não autenticado')
//   }
// })
