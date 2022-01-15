
var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name'); 
$('#name').val(name);
old_name = name;

function update () {
    name = $('#name').val();
    university = localStorage.getItem('university');
    university = JSON.parse(university);

    for (i = 0; i < university.length; i++) {
        if (university[i][0] == old_name) {
            university[i][0] = $('#name').val();
            break;
        }
    }

    localStorage.setItem('university', JSON.stringify(university));
    window.location.replace('manage.html');
}