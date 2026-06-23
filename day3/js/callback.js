const btn = document.getElementById("btn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

btn.addEventListener("click", () => {

    loading.innerHTML = "Processing data... ⏳";
    result.style.display = "none";
    processData(() => {
        loading.innerHTML = "";
        result.style.display = "block";
        result.innerHTML = "✔ Data processed successfully!";
    });

});


function processData(callback) {

    setTimeout(() => {
        callback();
    }, 3000);

}


