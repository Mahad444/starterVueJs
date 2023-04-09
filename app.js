console.log("Hello Vue")

// creating the first vue app
const app = Vue.createApp({
    // template:"<h1>This Is the template Controlled By Vue</h1>"
    data() {
        return {
            showBooks : true,
            title:"The Doom's Day",
            name:"Mahad Said",
            age:23,
            X : 0,
            Y:0
        }
    },
    methods: {
    changeTitle(title){
        // this.title ="Blossoms Of The Savannah" this is the passed title on clicking 
        this.title = title //this is the argument passed in the function 
    },
    toggleBooks(){
        this.showBooks = !this.showBooks
    },
    // handling events
    handleEvent(e,datae){
        console.log(e,e.type)
        if (datae) {
            console.log(datae)
        }
    },
    handleMouseMove(e)
    {
        console.log(e)
        this.X = e.offsetX
        this.Y = e.offsetY

    }

},
})

app.mount('#app')