const student = {
    name: "Agnes",
    courses: ["Webbteknik 3", "Interaktionsdesign 1", "Webbteknik 2", "Digitala Medier"]
}

// localStorage.setItem("student", student);
// console.log(localStorage.getItem("student"));
// localStorage.removeItem("student");

const studentString = JSON.stringify(student);
console.log(studentString);
const studentParsed = JSON.parse(studentString);
console.log(studentParsed);
console.log(studentParsed.name);
console.log(studentParsed.courses);

function saveStudent() {
    localStorage.setItem("student", studentString);
}

function loadStudent() {
    const savedStudent = localStorage.getItem("student");
    return JSON.parse(savedStudent);
}

saveStudent();
loadStudent();


// A
const jsonA = '{"name": "Ada", "age": 36}';
const jsonAParsed = JSON.parse(jsonA);
// B 
// const jsonB = "{'name': 'Ada', 'age': 36}";
// const jsonBParsed = JSON.parse(jsonB);
// C
// const jsonC = '{"name": "Ada", "age": 36,}';
// const jsonCParsed = JSON.parse(jsonC);
// D
const jsonD = '{"name": "Ada", "hobbies": ["math", "coding"], "active": true}';
const jsonDParsed = JSON.parse(jsonD);

// { Manuell JSON
//     "title": "iPhone15",
//         "price": 12999,
//             "inStock": true,
//                 "colors": ["svart", "vit", "blå"],
//                     "specs": {
//         "storage": "128GB",
//             "camera": "48MP"
//     }
// }