const canvas = document.querySelector('canvas')
const screen = canvas.getContext('2d')

const labelElements = {
    l1 : document.getElementById('l1'),
    l2 : document.getElementById('l2'),
    l3 : document.getElementById('l3'),
    l4 : document.getElementById('l4'),
    l5 : document.getElementById('l5'), 
}
const playerMove = []
const mainPlayer = []
const elements = [
    players = [],
    fruits = []
]

var fruitI = 0
var playerI = 0
var gameElementState = true
var points = 0


renderAll()

function renderAll(){
    //console.log('rendering')
    screen.clearRect(0,0,50,50)

    for(const fruit in elements[1]){
        const fruitElement = elements[1][fruit]
        screen.fillStyle = 'green'
        screen.fillRect(fruitElement.x, fruitElement.y, 1, 1)
    }
    for(const player in elements[0]){
        const playerElement = elements[0][player]
        screen.fillStyle = 'black'
        screen.fillRect(playerElement.x,playerElement.y,1,1)
        screen.fillStyle = 'purple'
        screen.fillRect(playerElement.x + 1, playerElement.y, 1, 1)
        screen.fillRect(playerElement.x - 1, playerElement.y, 1, 1)
        screen.fillRect(playerElement.x, playerElement.y + 1, 1, 1)
        screen.fillRect(playerElement.x, playerElement.y - 1, 1, 1)

        screen.fillStyle = 'pink'
        screen.fillRect(playerElement.x + 1, playerElement.y + 1, 1, 1)
        screen.fillRect(playerElement.x - 1, playerElement.y + 1, 1, 1)
        screen.fillRect(playerElement.x + 1, playerElement.y - 1, 1, 1)
        screen.fillRect(playerElement.x - 1, playerElement.y - 1, 1, 1)

        

    }
    //console.log(true, elements)
}
add(0, elementName(0),  Math.floor(Math.random() * (48 - 1)) + 2, Math.floor(Math.random() * (48 - 1)) + 2)
if(gameElementState == true)
setInterval(() => {
    add(1, elementName(1), Math.floor(Math.random() * (50 - 0)) + 0, Math.floor(Math.random() * (50 - 0)) + 0)
}, 2500);

ranking()
function add(element,name, locationX, locationY){

    switch(element){
        case 0:{
            elements[0].push(
                {
                    id: name,
                    x: locationX,
                    y: locationY 
                }
            );
            //console.log(elements);
            renderAll();
            return
        }
        case 1: {
            elements[1].push(
                {
                    id: name,
                    x: locationX,
                    y: locationY
                }
                
            );
            renderAll();
            return
        }
        
    }

}
function elementName(int){
    switch(int){
        case 0: {
            playerI = playerI + 1
            const playerID = 'player' + playerI
            mainPlayer.push(playerID)
            console.log(mainPlayer)
            
            return(playerID)
        }
        case 1: {
            fruitI = fruitI + 1
            return('fruit' + fruitI)
        }
    }
}

document.addEventListener('keypress', (event) =>{
    //console.log(event)
    switch(event.key){
        case 'w':{
            for(const player in elements[0]){
                const playerElement = elements[0][player]

                if(playerElement.id == mainPlayer[0]){
                    if(screenRules('w',playerElement) == true){
                        playerElement.y = playerElement.y - 1
                        //console.log(playerElement.y)s
                        pointVerifier()
                        renderAll()
                    }

                }
                
            }
            return
        }
        case 's':{
            for(const player in elements[0]){
                const playerElement = elements[0][player]

                if(playerElement.id == mainPlayer[0]){
                    if(screenRules('s',playerElement) == true){
                        playerElement.y = playerElement.y + 1
                        //console.log(playerElement.y)
                        pointVerifier()
                        renderAll()
                    }

                }
                
            }
            return
        }
        case 'a':{
            for(const player in elements[0]){
                const playerElement = elements[0][player]

                if(playerElement.id == mainPlayer[0]){
                    if(screenRules('a',playerElement) == true){
                        playerElement.x = playerElement.x - 1
                        //console.log(playerElement.x)
                        pointVerifier()
                        renderAll()
                    }

                }
                
            }
            return
        }
        case 'd':{
            for(const player in elements[0]){
                const playerElement = elements[0][player]

                if(playerElement.id == mainPlayer[0]){
                    if(screenRules('d',playerElement) == true){
                        playerElement.x = playerElement.x + 1
                        //console.log(playerElement.x)
                        pointVerifier()
                        renderAll()
                    }

                }
                
            }
            return
        }
    }
})

function screenRules(who,value){
    switch(who){
        case 'w':{
            if(value.y == 1){
                
                return(false)
                
            }else{
                return(true)
            }
        }
        case 's':{
            if(value.y == 48){
                return(false)
            }else{
                return(true)
            }
        }
        case 'a':{
            if(value.x == 1){
                return(false)
            }else{
                return(true)
            }
        }
        case 'd':{
            if(value.x == 48){
                return(false)
            }else{
                return(true)
            }
        }
    }
}
function pointVerifier(){
    for(const player in elements[0]){
        const playerElement = elements[0][player]
        for(const fruit in elements[1]){
            const fruitElement = elements[1][fruit]
            if((playerElement.x == fruitElement.x && playerElement.y == fruitElement.y)||(playerElement.x + 1 == fruitElement.x && playerElement.y + 1 == fruitElement.y)||(playerElement.x - 1 == fruitElement.x && playerElement.y + 1 == fruitElement.y)||(playerElement.x + 1 == fruitElement.x && playerElement.y - 1 == fruitElement.y)||(playerElement.x - 1 == fruitElement.x && playerElement.y - 1 == fruitElement.y)){

                delete elements[1][fruit]
                renderAll()
            }
            

            

            

            //screen.fillRect(, 1, 1)
        }
    }

}
function ranking(){
    points = points + 1
    
    if(labelElements.l1.hasAttribute('in_use') != true){
        //console.log(mainPlayer[0])
        //labelElements.l1.textContent = mainPlayer[0]
    }
    if(labelElements.l2.hasAttribute('in_use') != true){
        
    }
    if(labelElements.l3.hasAttribute('in_use') != true){
        
    }
    if(labelElements.l4.hasAttribute('in_use') != true){
        
    }
    if(labelElements.l5.hasAttribute('in_use') != true){
        
    }
}