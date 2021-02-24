// ========Learn页面========

// 用户点击将页面上的图片标题，在下方呈现对应图片
function showPicture(whichPic) {
    console.log("下方placeHolder显现图片")
    if (!document.getElementById("placeHolder")) return false;
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeHolder");
    if (placeHolder.nodeName != "IMG") return false;
    placeHolder.setAttribute("src", source);

    console.log("placeHolder下方显示图片描述")
    var description = document.getElementById("description");
    if (description) {
        console.log("存在描述的节点")
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function showPictureOrginal(whichPic) {
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeHolder");
    placeHolder.setAttribute("src", source);

    var description = document.getElementById("description");
    var text = whichPic.getAttribute("title");
    description.firstChild.nodeValue = text;
}


// 弹出一个320*200的小窗口，名称为"popup"，网址为winURL
function popUp(winURL) {
    window.open(winURL, "popup", "width=320, height=200")
}


// 页面加载完成后，清点body内节点数量
//window.onload = function () {
//    var bodyElement = document.getElementsByTagName("body")[0]
//    alert(bodyElement.childNodes.length)
//}


//找出class是popup的所有元素，在页面加载完毕后，绑定上onclick popUp事件
//window.onload = prepareLinks
function prepareLinks() {
    // 如果浏览器不理解getElementsByTagName，就不会进行以下操作。getElementsByTagName后面没有()，如果有，返回的是结果。
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a")
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            console.log(links[i])
            links[i].onclick = function () {
                popUp(this.getAttribute("href"))
                return false
            }
        }
    }
}


//在上面的方法中，查找“整个网页”的<a>来为它们一一添加上事件，下面是查找id来为其中的子元素添加事件
function prepareGallery() {
    console.log("正在为id为imageGallery的ul的内部li添加onclick")
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imageGallery")) return false;
    console.log("浏览器支持")
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPicture(this);
            return false;
        }
    }
}


// 页面加载完有两个事件，简单方案
//window.onload = function () {
//    //alert("加载完毕");
//    prepareLinks();
//    prepareGallery();
//}


// 页面加载完有多个事件，推荐方案
// 把现有的window.onload事件处理函数的值存入变量oldOnload
// 如果这个处理函数还没有绑定任何函数，就像平时那样把新函数添加给它
// 如果在这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾
function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        }
    }
}

addLoadEvent(prepareLinks);
addLoadEvent(prepareGallery);