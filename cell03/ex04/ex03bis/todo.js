$(document).ready(function() {
    $('#newtask').click(function() {
        let todo = prompt('อยากทำไรก็กรอกมา');
        if (todo.trim() === "") return;
        let id = new Date().getTime();
        document.cookie = id + "=" + todo + ";";
        insert_new_todo(id, todo);
    });
});

function insert_new_todo(id, text) {
    let todoo = $("<div></div>").text(text);
    todoo.click(function () {
        let confr = confirm("You sure you wanna delete this?");
        if (confr) {
            todoo.remove();
            document.cookie = id + "=; expires=Wed, 31 Oct 2012 00:00:30 UTC;";
        }
    });
    $('#to_list').prepend(todoo);
}

let todo_cookies = document.cookie;
if (todo_cookies.length !== 0) {
    todo_cookies = todo_cookies.split(";");
    todo_cookies.forEach((text) => {
        text = text.split("=");
        insert_new_todo(text[0], text[1]);
    });
}

/*
function setCookie(cname, cvalue) {
    document.cookie = cname + '=' + cvalue;
    var date = new Date();
    date.setMonth(date.getYear() + 1);
    document.cookie += ('; expires=' + date.toUTCString());
}


function delete_cookie(cname, value) {
    console.log(cname + "=" + value);
    document.cookie = cname + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
}
*/