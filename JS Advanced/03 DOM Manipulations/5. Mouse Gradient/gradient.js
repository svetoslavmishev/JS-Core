function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box');
    gradient.addEventListener('mousemove', mouseInside);
    gradient.addEventListener('mouseleave', mouseOutside);

    function mouseInside(event) {
        let result = Math.floor((event.offsetX / (event.target.clientWidth - 1))*100);
        document.getElementById('result').textContent = result + '%';
    }

    function mouseOutside(event) {
        document.getElementById('result').textContent = '';
    }
}