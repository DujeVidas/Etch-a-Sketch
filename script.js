const container = document.createElement('div')
const buttonContainer = document.createElement('div')
const button = document.createElement('button')

container.classList = 'container'
buttonContainer.classList = 'buttonContainer'
button.textContent = 'Change Size'
buttonContainer.appendChild(button)


for(i=0;i<16;i++) {
    const row = document.createElement('div')
    row.className = 'row';
    for(j=0;j<16;j++){
        const element = document.createElement('div');
        element.style.cssText = 'height: 40px; width: 40px; border: 1px solid black;'
        row.appendChild(element)
        element.addEventListener('mouseover', ()=> {
            element.classList = 'toColor'
        })
    }
    container.appendChild(row)
}

document.body.appendChild(buttonContainer)
document.body.appendChild(container)



const erase = () => {
    container.innerHTML = '';
}

const draw = (gridSize) => {
    erase()
    for(i=0;i<gridSize;i++) {
        const row = document.createElement('div')
        row.className = 'row';
        for(j=0;j<gridSize;j++){
            const element = document.createElement('div');
            element.style.cssText = 'height: 40px; width: 40px; border: 1px solid black;'
            row.appendChild(element)
            element.addEventListener('mouseover', ()=> {
                element.classList = 'toColor'
            })
        }
        container.appendChild(row)
    }
    document.body.appendChild(container)
}



button.addEventListener('click', () => {
    let gridSize = prompt("Enter the size of the grid (less than 100)")

    if(gridSize <=100) draw(gridSize)
})