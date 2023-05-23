const timeNodes=[...document.querySelectorAll("[data-time]")]

const seconds=timeNodes
.map(node=>node.dataset.time)
.map(time=>{
    const [mins, secs]=time.split(":").map(parseFloat)
    return (mins * 60) + secs
})

console.log(seconds)
