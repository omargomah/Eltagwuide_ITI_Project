let date = new Date();
let footerYear = document.querySelector('footer p span');
footerYear.innerText = `${date.getFullYear()}`
let studentTable = document.querySelector('.student-section table tbody')
async function getTopStudents(){
    let response = await fetch('../Json/TopStudents.json');
    let data = await response.json();
    data.forEach(element => {
    let values = Object.values(element)
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

let logout = document.querySelector('.navbar .container-fluid .collapse ul li:nth-child(2) a')
let login = document.querySelector('.navbar .container-fluid .collapse ul li:nth-child(1) a')
let MyPage = document.querySelector('.navbar .container-fluid .collapse ul li:nth-child(5) a')
let ErrorMessage = document.querySelector('.alert')
logout.onclick = function(){
    localStorage.removeItem('id')
}
login.onclick = function(ev){
    ev.preventDefault();
    if(localStorage.getItem('id')){
        ErrorMessage.innerText = `لتسجيل الدخول بحساب أخر يجب تسجيل الخروج أولا`
        ErrorMessage.classList.remove('d-none')
        setTimeout(()=>{
            ErrorMessage.classList.add('d-none')
        },4000)
    }else{
            document.location.href = '/Html/Login.html';
    }
}
MyPage.onclick = function(ev){
    ev.preventDefault();
    if(!localStorage.getItem('id')){
        ErrorMessage.innerText=`يجب أن تقوم بتسجيل الدخول أولا لعرض صفحتك`
        ErrorMessage.classList.remove('d-none')
        setTimeout(()=>{
            ErrorMessage.classList.add('d-none')
        },4000)
    }else{
        console.log('MyPage')
            // document.location.href = '/Html/Login.html';
    }
}


