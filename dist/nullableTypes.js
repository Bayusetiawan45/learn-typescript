"use strict";
function great(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("hallo");
}
great(undefined);
