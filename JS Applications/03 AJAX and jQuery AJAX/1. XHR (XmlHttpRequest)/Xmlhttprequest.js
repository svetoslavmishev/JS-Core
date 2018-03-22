function loadRepos() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('res').textContent = this.responseText;
        }
    };
    request.open("GET", "https://api.github.com/users/testnakov/repos");
    request.send();
}