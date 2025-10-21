const notesContainer = document.getElementById("notes-container");
let notes = document.querySelectorAll(".input-box");

function createNote() {
    let inputBox = document.createElement("p");
    let deleteIcon = document.createElement("img");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("oninput", "updateStorage()");
    deleteIcon.src = "images/trash-list.png";
    deleteIcon.className = "delete-icon";
    deleteIcon.height = "448";
    deleteIcon.width = "512";
    deleteIcon.alt = "delete-icon";
    deleteIcon.loading = "eager";
    deleteIcon.setAttribute("onclick", "deleteNote(this)");
    notesContainer.appendChild(inputBox).appendChild(deleteIcon);
    updateStorage();
}

function updateNote() {
    updateStorage();
}

function deleteNote(btn) {
    btn.parentElement.remove();
    updateStorage();
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

window.addEventListener("load", () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
});
