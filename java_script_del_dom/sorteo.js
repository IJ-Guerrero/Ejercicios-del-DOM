const d = document;
// let prueba = [1,2,3,4,5,6,7,8,9]
    //  let randomIndex =Math.floor( Math.random() * prueba.length )
    //  console.log(prueba[randomIndex])

export default function sorteo(btn, selector) {   
    const result = (selector)=>  {
        const $participantes = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $participantes.length),
            winner = $participantes[random];
        return `El ganador es ${winner.textContent}`
    }

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)){
            let theWinner = result(selector);
            alert(theWinner); 
        }
    })
    let countOne=0,
    countTwo = 0;


    function loopOne() {
        while (countOne < 4 || (countOne > 4 && countOne < 7)) {
            console.log(countOne)
            countOne++
        }
        loopTwo()
    }
    
    function loopTwo() {
        while (countOne === 4 ) {
        while (countTwo < 4) {
            console.log(countTwo)
            countTwo++

        }
         countOne++ 
        loopOne()
              
    }
    }
    loopOne()
    
}
//<>

const result = (selector)=>  {
    const $participantes = document.querySelectorAll(selector),
        random = Math.floor(Math.random() * $participantes.length),
        winner = $participantes[random];
    return `El ganador es ${winner.textContent}`
}

