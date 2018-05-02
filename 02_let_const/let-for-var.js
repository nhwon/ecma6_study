var nodes = document.querySelector("ul");
for (var k = 0; k < nodes.children.length; k++) {   //k의 Scope는 Global
    var el = nodes.children[k];
    el.onclick = function(event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k); //  3만 출력됨
    }
};
console.log(k);