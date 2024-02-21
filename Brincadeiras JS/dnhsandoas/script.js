
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    
    if (title.trim() === '' || description.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${title}</span> - <span>${description}</span>
        <button class="complete-btn">Concluir</button>
        <button class="delete-btn">Excluir</button>
    `;
    
    taskList.appendChild(taskItem);
    
    taskForm.reset();
});

taskList.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target.classList.contains('complete-btn')) {
        const task = target.parentElement;
        task.classList.toggle('completed');
    } else if (target.classList.contains('delete-btn')) {
        const task = target.parentElement;
        task.remove();
    }
});
  