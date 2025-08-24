// Load list from localStorage (or start as empty array)
let mylist = JSON.parse(localStorage.getItem("mylistinl")) || [];

window.onload = function() {
    document.getElementById('mylistis').innerHTML = mylist.join(", ");
};

// Add item
function addtolist(tta) {
    mylist.push(tta);
    localStorage.setItem("mylistinl", JSON.stringify(mylist));
    document.getElementById('mylistis').innerHTML = mylist.join(", ");
}

// Delete item by index
function deletelist(ttd) {
    mylist.splice(ttd, 1); // delete 1 item at index ttd
    localStorage.setItem("mylistinl", JSON.stringify(mylist));
    document.getElementById('mylistis').innerHTML = mylist.join(", ");
}

// Reset list
function resetmylist() {
    mylist = [];
    localStorage.setItem("mylistinl", JSON.stringify(mylist));
    document.getElementById('mylistis').innerHTML = "";
}
