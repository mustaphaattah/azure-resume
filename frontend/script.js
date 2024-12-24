window.addEventListener('DOMContentLoaded', (event) => {
    getVisitorCount();
})

const functionApi = '';

const getVisitorCount = () => {
    let count = 0;
    fetch(functionApi).then(Response => {
        return Response.json()
    }).then(Response => {
        console.log("functionApi was called");
        count = Response.count;
        document.getElementById("counter").innerText = count+1;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
