function addNewTask() {
    let list = document.getElementById("list");
    let text = document.getElementById("task_name").value;
    if (text.length === 0) {
        alert("Tarefa Inválida!");
        return;
    } 
    let listItem = document.createElement("li");
    listItem.className = "list-item";
    
    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
        
}
