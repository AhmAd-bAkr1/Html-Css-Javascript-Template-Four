let theInput = document.querySelector(".get-repos input")
let theButton = document.querySelector(".get-button")
let reposShow = document.querySelector(".show-data") 



theButton.addEventListener("click" , function (params) {
    getRepos()
})

function getRepos() {
   if (theInput.value === "") {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Write Github Username.",
   })
}else{
  
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
  
    .then((res) => res.json())
    
    .then((data) => {
    
        reposShow.innerHTML = ""
        data.forEach(repo => {
            console.log(repo)
            let mainDiv = document.createElement("div")
            
            let theUrl = document.createElement("a")

            theUrl.innerHTML = repo.name
            
            theUrl.href = `https://github.com/${theInput.value}/${repo.name}`
            
            theUrl.setAttribute("target" , "_blank")
            
            theUrl.classList.add("repo-box")
            
            mainDiv.appendChild(theUrl)
            
            reposShow.appendChild(mainDiv)
        });
    })
}
}