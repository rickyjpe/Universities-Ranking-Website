
function add () {
    name = $('#name').val();
    array = [name, 0];
    university = localStorage.getItem('university');
    university_a = JSON.parse(university);
    
    if (university_a == null) {
        university = JSON.stringify([array]);
    } else {
        university_a = JSON.parse(university);
        for (i = 0; i < university_a.length; i++) {
            if (university_a[i][0] == name) {
                message = 'University DUPLCATION FOUND.';
                alert(message);
                throw new Error(message);
            }
        }

        university_a.push(array);
        university = JSON.stringify(university_a);
    }

    localStorage.setItem('university', university);
    window.location.replace('manage.html');
}
