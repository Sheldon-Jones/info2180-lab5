//lookup country button

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lookup').addEventListener('click', function() { // addd click event to lookup button
        const country = document.getElementById('country').value;
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) { //if request is sent to the server and the server responds OK
                document.getElementById('result').innerHTML = xhr.responseText;
            }
        };
        
        xhr.open('GET', `world.php?country=${encodeURIComponent(country)}`, true);
        xhr.send();
    });


//lookup cities button
 document.getElementById('lookupcities').addEventListener('click', function() {
        const country = document.getElementById('country').value;
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) { //if request is sent to the server and the server responds OK
                document.getElementById('result').innerHTML = xhr.responseText;
            }
        };
        
        xhr.open('GET', `world.php?country=${encodeURIComponent(country)}&lookup=cities`, true);
        xhr.send();
    });
});