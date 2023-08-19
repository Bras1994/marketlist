let fab = document.getElementById('fab')
let home = document.getElementById('home')
let addList = document.getElementById('addList')
let addBtn = document.getElementById('addBtn')
let list = document.getElementById('list')
let contList = document.getElementById('contList')
let btnList = document.getElementById('btnList')
let productoCompleto = document.getElementById('productoCompleto')
let lastPage = document.getElementById('lastPage')
let volverListado = document.getElementById('volver')

home.style.display ='flex'
addList.style.display = 'none'
list.style.display = 'none'
lastPage.style.display ='none'
contList.style.display='none'
productoCompleto.style.display='none'


btnList.addEventListener('click', function(){
    addList.style.display = 'flex'
    home.style.display ='none'
    list.style.display = 'none'
    lastPage.style.display ='none'
})

let agregar= document.getElementById('agregar')
let cancelar= document.getElementById('cancelar')

//Boton agregar 
agregar.addEventListener('click', function(){
    addList.style.display = 'flex'
    home.style.display ='none'
    list.style.display = 'none'
    lastPage.style.display ='none'
})

//Boton cancelar 
cancelar.addEventListener('click',()=>{
    if(desdeStorage!=''){
        home.style.display ='flex'
        addList.style.display = 'none'
        list.style.display = 'none'
    }else{
        list.style.display = 'flex'
        addList.style.display = 'none'
    }

})

let form= document.querySelector('.contPopUp')
let listadoGuardado= []

addBtn.addEventListener('click', function(event){
    event.preventDefault()
    let producto = document.getElementById('producto').value
    let categoria = document.getElementById('categoria').value
    let description = document.getElementById('description').value

        if (producto != '' && categoria !=''){
            /*let item =`<li class="list-group-item"> <span> ${producto} </span><button class="seguir" onclick= detalleFinal() >></button></li>`*/
            let item =`<li class="list-group-item"> <span> ${producto} </span><button class="seguir" onclick= "removeItem()" >x</button></li>`

            list.style.display = 'flex'
            home.style.display = 'none'
            addList.style.display = 'none'
            lastPage.style.display ='none'
            contList.style.display='flex'

            contList.innerHTML += item

            productoCompleto.style.display='none'

            //"detalleFinal('${categoria}', '${producto}', '${description}')"

            /*let detalleFinal= `<div id="detalle">
            <h4>${producto}</h4>
            <p>${description}</p>
            </div>`*/
            
            let btnVerMas = document.querySelector('.seguir')

            btnVerMas.addEventListener('click',()=>{
                list.style.display = 'none'
                lastPage.style.display ='flex'
                addList.style.display = 'none'
                productoCompleto.style.display='flex'
            })

            productoCompleto.innerHTML = detalleFinal

            listadoGuardado.push(item)
            localStorage.setItem('ListadoCompras',listadoGuardado)

            form.reset()

        }
        else{
            document.getElementById('mensaje').innerHTML = 'Completa producto y categoría para poder guardar.'
        }
})




//LocalStorage

let desdeStorage=localStorage.getItem('ListadoCompras')

if(desdeStorage){
    contList.style.display='flex'
    list.style.display = 'flex'
    home.style.display = 'none'
    contList.innerHTML += desdeStorage
}




btnList.addEventListener('click', function(e){
    e.preventDefault()
    addList.style.display = 'flex'
    home.style.display = 'none'
    list.style.display = 'none'
    lastPage.style.display = 'none'
    
})

//Volver desde la descripción


volverListado.addEventListener('click',()=>{
    volverListado.style.display='block'
    list.style.display = 'flex'
    lastPage.style.display ='none'
    productoCompleto.style.display='none'
})