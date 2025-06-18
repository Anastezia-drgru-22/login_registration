window.onload = function () {

    let form = document.getElementById("form");
    let fullName = document.getElementById("full-name");
    let userName = document.getElementById("username");
    let checkbox = document.getElementById("agreement");
    let password = document.getElementById('password');

    form.submit = function (e) {
        e.preventDefault();
    };


    fullName.onkeydown = function (e) {
        if (e.key >= '0' && e.key <= '9') {
            e.preventDefault();
        }
    };

    userName.onkeydown = function (e) {
        if (e.key === '.' || e.key === ',') {
            e.preventDefault();
        }
    };

    checkbox.onchange = function () {
        if (checkbox.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен')
        }
    }

    document.getElementById('sign-up').onclick = function () {
        let email = document.getElementById('email');
        let passwordRepeat = document.getElementById('repeat-password');

        if (!fullName.value) {
            alert('Заполните поле Full Name');
            return;
        }
        if (!userName.value) {
            alert('Заполните поле Your username');
            return;
        }
        if (!email.value) {
            alert('Заполните поле E-mail');
            return;
        }
        if (!password.value) {
            alert('Заполните поле Password');
            return;
        }
        if (!passwordRepeat.value) {
            alert('Заполните поле Your username');
            return;
        }

        if (password.value !== passwordRepeat.value) {
            alert('Пароли не совпадают');
            return;
        }

        if (!checkbox.checked) {
            alert('Вы должны согласиться с условиями.');
        }

        let popup = document.getElementById('success-popup');
        popup.classList.add('show');

        let popupBtn = document.getElementById('btn-popup');
        popupBtn.onclick = function () {
            popup.classList.remove('show');
            form.reset();
            loginMode();
        }
    }

    let loginLink = document.getElementById('login-link');
    loginLink.onclick = function (e) {
        e.preventDefault();
        loginMode();
    }

    function loginMode() {
        document.getElementsByClassName('account-title')[0].innerText = "Log in to the system";

        document.getElementsByClassName('form-full-name')[0].remove();
        document.getElementsByClassName('form-email')[0].remove();
        document.getElementsByClassName('form-re-password')[0].remove();
        document.getElementsByClassName('agree-police')[0].remove();
        document.getElementsByClassName('have-an-account')[0].remove();

        let btnSignIn = document.getElementById('sign-up');
        btnSignIn.innerText = 'Sign In';
        btnSignIn.onclick = function () {

            if (!userName.value) {
                alert('Заполните поле Your username');
            } else if (!password.value) {
                alert('Заполните поле Password');
            } else {
                alert('Добро пожаловать, ' + userName.value + '!');
            }
        }
    }

}