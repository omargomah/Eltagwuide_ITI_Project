// import Chart from './../node_modules/chart.js/auto/auto';
let date = new Date();
let footerYear = document.querySelector('footer p span');
footerYear.innerText = `${date.getFullYear()}`
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