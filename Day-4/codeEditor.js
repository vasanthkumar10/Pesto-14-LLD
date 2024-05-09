// Memento Pattern -> Undo and redo

// originator -> provider
class TextFile {
  constructor() {
    this.content = "";
  }

  getContent() {
    return this.content;
  }

  setContent(newContent) {
    this.content = newContent;
  }
}

// Memento -> represents the snapshot of particular instance
class Memento {
  constructor(content) {
    this.state = content;
    this.savedTime = Date.now();
  }

  getState() {
    return this.state;
  }
}

// caretaker -> manages memento
class CodeEditor {
  constructor() {
    this.history = [new Memento("")];
    this.currentIndex = 0;
  }

  save(file) {
    this.history.push(new Memento(file.getContent()));
    this.currentIndex++;
  }

  undo(file) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const currentSnapshot = this.history[this.currentIndex];
      const currentContent = currentSnapshot.getState();
      file.setContent(currentContent);
    }
  }

  redo(file) {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      const currentSnapshot = this.history[this.currentIndex];
      const currentContent = currentSnapshot.getState();
      file.setContent(currentContent);
    }
  }
}

const vscode = new CodeEditor();
const file = new TextFile();
file.setContent("V");
vscode.save(file);
file.setContent("VA");
vscode.save(file);
console.log(vscode);

console.log("before undo", file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);
// console.log(vscode);
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());

console.log(vscode);

vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
