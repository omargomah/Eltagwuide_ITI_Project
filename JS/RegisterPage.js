document.addEventListener("DOMContentLoaded", function () {
    fetch("../Json/countries.json")
        .then(response => response.json())
        .then(countries => {
            const select = document.getElementById("country");

            countries.forEach(country => {
                const option = document.createElement("option");
                option.value = country;
                option.textContent = country;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error("فشل في تحميل الدول:", error);
        });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const countryInput = document.getElementById("country");
    const errorParagraph = document.querySelector("form p");

    let existingEmails = [];
    fetch("../Json/studentsEmailPassword.json")
        .then(response => response.json())
        .then(users => {
            existingEmails = users.map(user => user.email.toLowerCase());
        })
        .catch(error => {
            console.error("فشل تحميل المستخدمين:", error);
        });

    form.addEventListener("submit", (e) => {
        errorParagraph.textContent = ""; 

        const email = emailInput.value.trim().toLowerCase();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const country = countryInput.value;
        if (!email || !password || !confirmPassword || !name || !phone || !country) {
            e.preventDefault();
            errorParagraph.textContent = "يرجى ملء جميع الحقول المطلوبة.";
            return;
        }
        if (password !== confirmPassword) {
            e.preventDefault();
            errorParagraph.textContent = "كلمة السر وتأكيدها غير متطابقين.";
            return;
        }
        if (existingEmails.includes(email)) {
            e.preventDefault();
            errorParagraph.textContent = "هذا البريد الإلكتروني مسجل مسبقًا.";
            return;
        }
    });
});
