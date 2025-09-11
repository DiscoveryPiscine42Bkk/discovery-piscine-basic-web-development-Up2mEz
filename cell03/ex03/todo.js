function setCookie(cookid, cookvalue) {
    document.cookie = cookid + '=' + cookvalue;
    var d = new Date();
    d.setMonth(d.getYear() + 1000 );
    document.cookie +=('; expires=' + d.toUTCString());
}

function deleteList(cookid) {
    var d =  new Date();
    d.setMonth(d.getYear());
    document.cookie = cookid + '=; expires=Thu, 18 Dec 2013 12:00:00 UTC'
}

function addTask() {
    var data = prompt("จะทำอะไรก็กรอกมา")
    let id = Date.now();
    if (data != '' && data != null) {
        addList(data,id);
        setCookie(id,data);
    }

function addList(value, id = "None") {
    var list = document.getElementById("to_list");
    var task = document.createTextNode(value);
    var div = document.createElement("div");
    div.appendChild(task); div.id = id;
    if (value === '' && id === 'None') {
        alert('กรอกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก');
    }
    else {
        list.prepend(div);
    }
    div.onclick = function(e) {
        if (confirm(`${this.id}, Are you sure you want to delete this task?`)) {
            deleteList(this.id);
            this.remove();
        }
    }

function checkList() {
    let data = document.cookie.split(";");
    console.log(data);
    if (!(data[0] == '' && data.length === 1)) {
        for(let i = 0; i <data.length ; i++) {
            let part_cookie = data[i].split("=");
            addList(part_cookie[1], part_cookie[0])
        }
    }
}
}
}