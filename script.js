// SPDX-License-Identifier: AGPL-3.0-or-later

document.getElementById('alert-nojs').remove();

document.getElementById('search').addEventListener('click', function () {
    var a = document.createElement('a');
    var query = document.getElementById('query').value;
    var inputs = document.getElementsByTagName('input');
    var needsOr = false;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute('type') === 'checkbox' && inputs[i].checked) {
            if (needsOr) {
                query += ' OR';
            }

            query += ' site:' + inputs[i].dataset.site;
            needsOr = true;
        }
    }

    a.setAttribute('target', '_blank');
    a.setAttribute('href', 'https://duckduckgo.com?q=' + encodeURIComponent(query));
    a.click();
    a.remove();
});
