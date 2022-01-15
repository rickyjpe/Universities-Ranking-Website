
university = localStorage.getItem('university');
university = JSON.parse(university);
html = '';

for (i = 0; i < university.length; i++) {
    html += '<tr>';
    html += '<td>' + university[i][0] + '</td>';
    html += '<td><div id="' + university[i][0] + '"></div></td>';
    html += '</tr>';
    console.log(university[i]);
}

$('tbody').html(html);

for (i = 0; i < university.length; i++) {
    $('#' + university[i][0]).raty({
        starType: 'i',
        number: 5,
        score: university[i][1],
        click: function (score, evt) {
            // alert('ID: ' + this.id + "\nscore: " + score + "\nevent: " + evt);
            for (i = 0; i < university.length; i++) {
                if (university[i][0] == this.id) {
                    university[i][1] = score;
                    break;
                }
            }

            localStorage.setItem('university', JSON.stringify(university));
            alert('VOTE COMPLETE');
        }
    });
}