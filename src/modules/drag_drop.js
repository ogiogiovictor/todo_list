import getTodos from "./get_todo.js";



class dragDrop {

    static dragStartIndex;
    // Store listitems
    static listItems = [];

    static handleDragStart = (e) => {
        console.log("drag start")
        this.dragStartIndex = +e.target.closest('li').getAttribute('datali-id');
        console.log(this.dragStartIndex)
    }

    static handleDragEnd = (e) => {
        console.log('drag end');
    }

    static handleDragOver = (e) => {
        e.preventDefault();
        console.log('drag over')
    }

    static handleDragDrop = (e) => {
        console.log('drag drop');
        const dragEndIndex = +e.target.getAttribute('datali-id');
        this.swapItems(this.dragStartIndex, dragEndIndex);
        //console.log(this.dragStartIndex, dragEndIndex);
        e.target.classList.remove('over')
    }

    static swapItems = (fromIndex, toIndex) => {
        //console.log(fromIndex, toIndex);
        const listItems = [];
        const itemOne = listItems[fromIndex];
        const itemTwo = listItems[toIndex];

        console.log(itemOne, itemTwo)
    }

    static handleDragEnter = (e) => {
       // console.log('drag enter')
      e.target.classList.add('over');
    }
    
    static handleDragLeave = (e) => {
        //console.log('drag leave')
        e.target.classList.remove('over');
    }

   
}

export default dragDrop;