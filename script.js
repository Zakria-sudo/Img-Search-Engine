
const searchForm = document.querySelector('#search-form') ;
const searchBox =  document.querySelector('#search-box');
const searchBtn =  document.querySelector('#search-btn');
const searchResult =  document.querySelector('#search-result');
const smBtn =  document.querySelector('#show-more-btn');    
const footer =  document.querySelector('#footer');    

const accessKey =  "0aicsO9I4DqkblKOEzwLynTN1_9mVMIQNyWTIXbaawo";
let keyword ="";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if( page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;
   results.map((result)=>{
    const image = document.createElement('img');
    image.src = result.urls.small;
    const imagelink = document.createElement('a');
    imagelink.href = result.links.html;
    imagelink.target = '_blank';

    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
   })
   smBtn.style.display = "block";
   footer.style.display = "block"
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

smBtn.addEventListener('click',()=>{
    page++;
    searchImages();
})

