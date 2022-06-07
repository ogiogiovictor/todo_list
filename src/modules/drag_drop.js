import getTodos from "./get_todo.js";

class dragDrop {

    static handleDragStart = (e) => {
        this.style.opacity = '0.4';
    }

    static handleDragEnd = (e) => {
        this.style.opacity = '1';
    }
}

export default dragDrop;