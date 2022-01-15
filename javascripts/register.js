
function register() {
    username = $('#username').val();
    password = $('#password').val();
    confirm = $('#confirm').val();
    role = $('input[name="role"]:checked').val();

    if (username == '' || password == '' || confirm == '') {
        message = 'Please enter all data.';
        alert(message);
        throw new Error(message);
    }

    if (password != confirm) {
        message = 'The password does not match with the confirm password.';
        alert(message);
        throw new Error(message);
    }

    array = [username, password, role];
    user = localStorage.getItem('user');
    user = JSON.parse(user);

    if (user == null) {
        user = JSON.stringify([array]);
    } else {
        for (i = 0; i < user.length; i++) {
            if (user[i][0] == username) {
                message = 'USERNAME DUPLCATION FOUND.';
                alert(message);
                throw new Error(message);
            }
        }

        user.push(array);
        user = JSON.stringify(user);
    }

    localStorage.setItem('user', user);
    alert('REGISTRATION COMPLETE.');
    window.location.replace('index.html');
}