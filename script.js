// Carousel Logic
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function changeSlide(direction) {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + items.length) % items.length;
    items[currentIndex].classList.add('active');
}

// To-Do List Logic
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task} <button onclick="this.parentElement.remove()">Remove</button>`;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});
