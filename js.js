// /* controle mot de passe pag accueil */
// function validate() { 
//   var msg; 
//   var str = document.getElementById("mdp").value; 
  
//   if (str.match( /[0-9]/g)==null || 
//          str.match( /[A-Z]/g)==null || 
//           str.match(/[a-z]/g)==null || 
//           str.match( /[^a-zA-Z\d]/g)==null || 
//          str.length <= 10
//       ) 
//      msg = "<p> mot de passe invalide </p>"; 
//   else 
//      msg =" <p> mot de passe valide</p>"; 
//     document.getElementById("msg").innerHTML= msg; 
// } 

// /* boutons page accueil*/
// function myFunction1() {
//   location.replace("Reglement.html");
// }

// function myFunction2() {
//   location.replace("Oeuvresinscrites.html");
// }

// function myFunction3() {
//   location.replace("BBiblioIndex.html");
// }
// function myFunction4() {
//   location.replace("FormulaireContact.html");
// }

// function myFunction5() {
//   location.replace("FormulairedemandeJury.html");
// }

// function myFunction6() {
//   location.replace("FormulairedemandeAuteur.html");
// }




// /*page note données .. affichage note données par catégorie */

// let btn1 = document.getElementById("btn_notes");
// let btn2 = document.getElementById("btn_categorie");
// let tab1 = document.getElementById("tableau2");
// let tab2 = document.getElementById("tableau3");

// btn1.addEventListener("click",() =>{
//     tab1.style.display = "block";
//     tab2.style.display = "none";  

// })

// function afficher(){
//     tab2.style.display = "block";
//     tab1.style.display = "none";  
// };
// btn2.onclick = afficher;

// /* compte à rebours */

// var compte_a_rebours = document.getElementById("counter");
// var date_actuelle = new Date();
// var date_evenement = new Date ("Feb 4 00:00:00 2022");
// var total_secondes = (date_evenement - date_actuelle) / 1000;
// var jours = Math.floor(total_secondes / (60 * 60 * 24));


// if (total_secondes < 0)
// {
//   counter.innerHTML = "0J";
 
// }
// else
// {
//   counter.innerHTML = jours+" jours avant délibérations";
// }


// /* reinitialisation mot de passe*/

// function validate() { 
//     var message; 
//     var str1 = document.getElementById("mdp1").value; 
//     var str2 = document.getElementById ("mdp2").value;
    

//   /*vérifier si le mot de passe privoisire corresponds  à celui envoyé par mail*/

//     if (str1.match( /[0-9]/g)==null ||
//             str1.match( /[A-Z]/g)==null ||
//             str1.match(/[a-z]/g) ==null ||
//             str1.match( /[^a-zA-Z\d]/g) ==null ||
//            str1.length <= 10
//            )
//            {
//             message = "<p>mot de passse invalide merci de recommencer.</p>";
//            }
          
       
//     else  if (str1 != str2)
//     {
//     message = "<p> les deux mots de passe ne sont pas identiques</p>";
//     document.getElementById("msg2").innerHTML= message; 
// }
//     else
//         message = "<p> Votre nouveau mot de passse est enregistré</p>";  
 
//    document.getElementById("msg2").innerHTML= message; 
// }
// /* page palmares */
// function myFunction7() {
//   location.replace("serge.html");
// }
// /*page serge*/
// function myFunction8() {
//   location.replace("https://www.amazon.fr/Serge-Litt%C3%A9rature-fran%C3%A7aise-Yasmina-Reza-ebook/dp/B08QZ6PGK3/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=serge+yasmina+reza&qid=1629874525&sr=8-1");
// }

// /* affichage comptes page Admin*/
// /*
// var divs = ["Section1", "Section2", "Section3"];
// var visibleId = null;
// function show(id) {
//   if (visibleId !== id) {
//     visibleId = id;
//   }
//   hide();
// }
// function hide() {
//   var div, i, id;
//   for (i = 0; i < divs.length; i++) {
//     id = divs[i];
//     div = document.getElementById(id);
//     if (visibleId === id) {
//       div.style.display = "block";
//     } else {
//       div.style.display = "none";
//     }
//   }
// }*/
