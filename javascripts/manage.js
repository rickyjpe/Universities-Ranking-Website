
university = localStorage.getItem('university');
university = JSON.parse(university);
html = '';

for (i = 0; i < university.length; i++) {
    html += '<tr>';
    html += '<td>' + university[i][0] + '</td>';
    html += '<td><div id="' + university[i][0] + '"></div></td>';
    html += '<td>';
    html += '<a class="btn btn-primary" href="update.html?name=' + university[i][0] + '">UPDATE</a>';
    html += '<a class="btn btn-danger" href="#" onclick="delete_university(\'' + university[i][0] + '\')">DELETE</a>';
    html += '</td>';
    html += '</tr>';
    console.log(university[i]);
}

$('tbody').html(html);

for (i = 0; i < university.length; i++) {
    $('#' + university[i][0]).raty({
        starType: 'i',
        number: 5,
        score: university[i][1],
        readOnly: true
    });
}

function delete_university (name) {
    message = 'Do you really want to delete?\n';
    message += 'The action cannot be undone.';

    if (confirm(message) == true) {
        find = 0;

        for (i = 0; i < university.length; i++) {
            if (university[i][0] == name) {
                find = i;
                break;
            }
        }

        university.splice(find, 1);
        localStorage.setItem('university', JSON.stringify(university));
        window.location.replace('manage.html');
    }
}