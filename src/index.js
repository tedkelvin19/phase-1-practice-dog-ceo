//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const lister = document.getElementById('dog-breeds')
let container = document.getElementById('dog-image-container')
let breedsObj;
let selectBreed = document.getElementById('breed-dropdown')

 function getImages(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(images => {
        let imgs = images.message
        // create a array of elemnts
        let imgsArray = createImgElement(imgs)
        renderImgs(imgsArray)
            
        })
 }

// create image
function createImgElement(imgs) {
   return imgs.map((img)=> {
        let image = `<img src=${img}>`
        return image
        })
        
}
// render images to the DOM
function renderImgs(imgsArray){
    imgsArray.forEach(element => {
        renderElement(element)
    }); 
}
function renderElement(element){
    container.innerHTML += element

}
getImages()
// challenge 2
function getBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
         breedsObj = Object.keys(breeds.message)
        let breedsList = createListElement(breedsObj)
        renderBreedList(breedsList)
            
        })
 }
 // create a list element
 function createListElement(breedsObj) {
    return breedsObj.map((breed)=> {
         let li = `<li>${breed}</li>`
         return li
         })
         
 }

 function renderBreedList (breedsList){
    breedsList.forEach(element => {
        renderListElement(element)
    }); 
}
function renderListElement(element){
    lister.innerHTML += element

}
// challenge 3
// change color when user clicks the breed name
lister.addEventListener('click',(e)=>{
    if(e.target.nodeName === 'LI'){
        if (e.target.style.color === "red") {
            e.target.style.color = "black"
        } else {
            e.target.style.color = "red"
        }
    }
   
    
})
// challenge 4
// filter on select
selectBreed.addEventListener('change',(e)=>{
    const letter = e.target.value
    let filteredList = breedsObj.filter(breed => breed.startsWith(letter))
    let filteredBreedList = createListElement(filteredList)
    lister.innerHTML = ''
    renderListElement(filteredBreedList)
})
getBreeds()