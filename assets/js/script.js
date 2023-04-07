"use stric"



// getAllPosts()

// function getAllPosts(){

//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         let str = "";
//         posts.forEach(post =>{
//             str += `<tr>
//             <th>${post.id}</th>
//             <td>${post.userId}</td>
//             <td>${post.title}</td>
//             <td>${post.body}</td>
//           </tr>`

//         });
//         clickRow()

//         document.querySelector("tbody").innerHTML = str;
//     })
// }

// tr = document.querySelectorAll("tbody tr")
// setTimeout(() => {

// }, 5000);

// function clickRow(){
//     tr.forEach(element => {
//         element.addEventListener("click",function (e) {
//            console.log("isleyir"); 
//         });
//     });

// }


// let students = [
//     {
//         name: "Murad",
//         surname: "Jafarov",
//         age: "18"
//     },

//     {
//         name: "Musa",
//         surname: "Afandiyev",
//         age: "25"
//     },

//     {
//         name: "Cavid",
//         surname: "Basirov",
//         age: "30"
//     }
// ]


// //<li class="list-group-item">An item</li>

// //getStudents();

// ul = document.querySelector(".list-group")

// function getStudents() {
//     setTimeout(() => {
//         let str = "";
//         students.forEach(stu => {
//             str = `<li class="list-group-item">${stu.name} ${stu.surname} ${stu.age}</li>`
//             console.log(stu);

//             ul.innerHTML += str;


//         });

//     }, 0);
// }


// function createStudent(student) {

//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             students.push(student);

//             let err = false;

//             if (!err) {
//                 resolved(students)
//             } else {
//                 rejected("Error")
//             }


//         }, 0);
//     })
// }

// createStudent({name: "Anar", surname: "Huseynov", age: "18"}).then(response=>{
//     console.log(response);
// }).catch(err => {
//     console.log(err);
// })




function getAllPosts(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let str = "";
        posts.forEach(post =>{
            str += `<tr>
            <th>${post.id}</th>
            <td>${post.userId}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
          </tr>`

        });
        document.querySelector("tbody").innerHTML = str;
    })
}



let button = document.querySelector("button");

button.addEventListener("click", function (e) {
    getAllPosts()

})























