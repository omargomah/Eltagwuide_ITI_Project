let date = new Date();
let footerYear = document.querySelector('footer p span');
footerYear.innerText = `${date.getFullYear()}`
if (localStorage.getItem('id')) {
    alert('You are already logged in.');
    document.location.href = '/Html/Home.html';
}
async function getStudents() {
    let response = await fetch('/Json/studentsEmailPassword.json');
    let data = await response.json();
    return data;
}

async function checkEmailPassword(email, password) {
    let students = await getStudents();
    
    for (const student of students) {
        if (student.email === email && student.password === password) {
            return {isValid:true , id: student.id};
        }
    }
    return {isValid:false , id: 0};;
}

let form = document.querySelector('main .login-form form > :last-child');
form.onclick = async function(ev) {
    ev.preventDefault();    
    let p = document.querySelector('main .login-form form p');
    let inputs = document.querySelectorAll('.login-form form div:not(:last-child) input');
    p.innerText = '';
    if (!inputs[0].value || !inputs[1].value) {
        p.innerText = 'يجب أن تدخل البريد و كلمة السر لتسجيل الدخول';
        return;
    }
    
    let ans = await checkEmailPassword(inputs[0].value, inputs[1].value);
    
    if (ans.isValid) {
        document.location.href = '/Html/Home.html';
        localStorage.setItem('id',ans.id);
    } else {
        p.innerText = 'البريد أو كلمة السر خطاء حاول مرة أخرى'
        form.appendChild()
        return;
    }
};