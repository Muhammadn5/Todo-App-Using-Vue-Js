const app = new Vue({
    el: "#todoapp",
    data: {
        heading: "Todo App Using Vue JS",
        id: 1,
        todotext: '',
        done: false,
        allitems: []
    },
    methods: {
        //function to reset data variables
        reset(){
            this.id++,
            this.todotext = '',
            this.done = false
        },

        //function to add todo
        addTodo(){
            //todo jason boject
            let todo =  {
            id: this.id,
            todotext: this.todotext,
            done: this.done
            }
            this.allitems.push(todo)
            this.reset()
        },

        //function to delete todo
        deleteTodo(todo){
            const idx = this.allitems.indexOf(todo)
            this.allitems.splice(idx, 1)
        }
    }
})