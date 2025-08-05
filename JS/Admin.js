// import Chart from './../node_modules/chart.js/auto/auto';
let date = new Date();
let footerYear = document.querySelector('footer p span');
footerYear.innerText = `${date.getFullYear()}`

let ShowFormButton = document.querySelector('.add-lesson .button button');
let AddFormButton = document.querySelector('.add-lesson form:last-child button');
let pError = document.querySelector('.add-lesson form p');
let AddSuccessalert = document.querySelector('.alert');
let form = document.forms[0];
ShowFormButton.onclick = function (){
    form.classList.remove('d-none')
    if(!pError.classList.contains('d-none'))
        pError.classList.add('d-none')
}

if(AddFormButton)
{
    AddFormButton.addEventListener('click', (ev)=>{
        ev.preventDefault();        
        let titel = document.getElementById('titel') , content = document.getElementById('content'); 
        let Q1 = document.getElementById('question1') , Q2 = document.getElementById('question2') , Q3 = document.getElementById('question3');
        let d1 = document.getElementById('degree1') ,d2 = document.getElementById('degree2'),d3 = document.getElementById('degree3');
        if(!titel.value  ||  !content.value  || !Q1.value || !Q2.value || !Q3.value || !d1.value || !d2.value || !d3.value){
            if(pError.classList.contains('d-none'))
                pError.classList.remove('d-none')
        }else{
            form.classList.add('d-none')
            AddSuccessalert.classList.remove('d-none');
            setTimeout(()=>{
                AddSuccessalert.classList.add('d-none');
            },4000)
        }
    })
}





const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
    labels: labels,      
    datasets: [{
        label: 'New Students: ',
        data: [12, 19, 3, 5, 2, 3 , 12, 19, 3, 5, 2, 3],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
        borderWidth: 1
    }]
    },
    
    options: {
    scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



let studentTable = document.querySelector('.student-section table tbody')
async function getTopStudents(){
    let response = await fetch('../Json/StudentToShowInAdmin.json');
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