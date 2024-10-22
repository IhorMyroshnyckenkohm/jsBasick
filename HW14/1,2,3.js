class TodoItem {

    #empty_note = "Назва нотатки не може бути порожньою.";

    constructor(name) {
        this.if_empty_error(name, this.#empty_note)
        this.name = name;
        this.isCompleted = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    if_empty_error(param, error_message) {
        try {
            param.trim();
        }catch (error){
            throw new Error(error_message);
        }
    }


    edit(newName) {
        this.if_empty_error(newName, this.#empty_note)
        this.name = newName;
        this.updatedAt = new Date();
    }

    markCompleted() {
        this.isCompleted = true;
        this.updatedAt = new Date();
    }

    getInfo() {
        return {
            name: this.name, isCompleted: this.isCompleted, createdAt: this.createdAt, updatedAt: this.updatedAt,
        };
    }
}

class TodoList {
    constructor() {
        this.items = [];
    }

    addItem(name) {
        const item = new TodoItem(name);
        this.items.push(item);
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    }

    editItem(name, newName) {
        const item = this.findItemByName(name);
        if (item) {
            item.edit(newName);
        } else {
            throw new Error("Нотатку не знайдено.");
        }
    }

    findItemByName(name) {
        return this.items.find(item => item.name === name);
    }

    getAllItems() {
        return this.items.map(item => item.getInfo());
    }

    getCompletedItems() {
        return this.items.filter(item => item.isCompleted);
    }

    getIncompleteItems() {
        return this.items.filter(item => !item.isCompleted);
    }

    getSummary() {
        return {
            total: this.items.length,
            completed: this.getCompletedItems().length,
            incomplete: this.getIncompleteItems().length,
        };
    }

    sortByStatus() {
        this.items.sort((a, b) => a.isCompleted - b.isCompleted);
    }

    sortByDate(field = 'createdAt', ascending = true) {
        this.items.sort((a, b) => {
            const dateA = a[field].getTime();
            const dateB = b[field].getTime();
            return ascending ? dateA - dateB : dateB - dateA;
        });
    }

    searchByDate(targetDate) {
        const searchDate = new Date(targetDate).setHours(0, 0, 0, 0);
        return this.items.filter(item => item.createdAt.setHours(0, 0, 0, 0) === searchDate);
    }
}

const todoList = new TodoList();
todoList.addItem("Зробити домашнє завдання");
todoList.addItem("Купити продукти");
todoList.addItem("Прочитати книгу");

todoList.editItem("Купити продукти", "Купити овочі");
todoList.findItemByName("Прочитати книгу").markCompleted();

console.log(todoList.getAllItems());
console.log("Невиконані нотатки:", todoList.getIncompleteItems());
console.log("Зведення:", todoList.getSummary());

todoList.sortByStatus();
console.log("Список після сортування за статусом:", todoList.getAllItems());

todoList.sortByDate('updatedAt', false);
console.log("Список після сортування за датою:", todoList.getAllItems());

const notesOnDate = todoList.searchByDate(new Date());
console.log("Нотатки на сьогодні:", notesOnDate);
