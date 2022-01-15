
user = localStorage.getItem('user');
user = JSON.parse(user);

for (i = 0; i < user.length; i++) {
    console.log(user[i]);
}

university = localStorage.getItem('university');
university = JSON.parse(university);

for (i = 0; i < university.length; i++) {
    console.log(university[i]);
}

function login () {
    username = $('#username').val();
    password = $('#password').val();
    check_login = 0;

    if (username == '' || password == '') {
        message = 'WRONG PASSWORD';
        alert(message);
        throw new Error(message);
    }

    for (i = 0; i < user.length; i++) {
        if (user[i][0] == username && user[i][1] == password) {
            check_login = 1;
            if (user[i][2] == 'admin') {
                window.location.replace('manage.html');
            }
            if (user[i][2] == 'user') {
                window.location.replace('rating.html');
            }
            break;
        }
    }

    if (check_login == 0) {
        alert('PLEASE TRY AGAIN');
    }
}
