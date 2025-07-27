let date = new Date();
let footerYear = document.querySelector('footer p span');
footerYear.innerText = `${date.getFullYear()}`
let studentTable = document.querySelector('.student-section table tbody')
async function getTopStudents(){
    let response = await fetch('../Json/TopStudents.json');
    let data = await response.json();
    data.forEach(element => {
    let values = Object.values(element)
    console.log(element)
    let tr = document.createElement('tr');
    values.forEach(e=>{
        let td = document.createElement('td');
        td.innerText = e;
        tr.appendChild(td);
    })
    studentTable.appendChild(tr);
    });
    return data;
}
window.onload =  getTopStudents;







