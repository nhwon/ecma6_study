var nodes = document.querySelector("ul");
for (let k = 0; k < nodes.children.length; k++) {   //k의 Scope는 block
    var el = nodes.children[k];
    el.onclick = function(event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k);
    }
};