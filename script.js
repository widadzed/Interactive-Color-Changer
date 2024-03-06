
document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    function getRandomColor() {
        const colors = ['#FF5733', '#33FFA8', '#336DFF', '#FF33C5', '#FF3377', '#33FF45', '#FFFF33', '#8A33FF'];
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
    
    changeColorBtn.addEventListener('click', function() {
        
        colorBox.style.backgroundColor = getRandomColor();
    });
});
 