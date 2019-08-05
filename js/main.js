const fill = document.querySelector(".fill");
const emptyBoxes = document.querySelectorAll(".empty");

// Fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// loop through empties and call drag event 
console.log("emptyBoxes", emptyBoxes)
for (const empty of emptyBoxes) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", drop);
}

// Drag functions
function dragStart() {
    this.className += " hold";
    setTimeout(() => this.className += " invisible", 0)
}
function dragEnd() {
    this.className = "fill";
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered"
}
function dragLeave() {
    this.className = "empty";
}
function drop() {
    this.className = "empty";
    this.append(fill);
}