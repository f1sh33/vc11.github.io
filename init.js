var news;
fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    news = data;
})
var x = 0;
function them(){
    for (var i = 0;i < 10;i++){
        var newsid = news[x++];
        var newslink = "https://hacker-news.firebaseio.com/v0/item/" + newsid + ".json"
        fetch(newslink)
        .then((response) => {return response.json()})
        .then((data) => {
            var div = document.createElement("div");
        var a = document.createElement("a")
        a.innerHTML = data.title;
        a.href = data.url;
        div.classList.add("lists")
        div.append(a);
        document.getElementById("container").append(div);
        })
    }
}
