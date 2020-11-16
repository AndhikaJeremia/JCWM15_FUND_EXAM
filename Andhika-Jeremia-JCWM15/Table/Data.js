function ShowUsers(index) {
    console.log("hello")
    let table = document.getElementById("UserData")
    let tbody = table.getElementsByTagName("tbody")[0]
    let tr = ''
    for (let a = 0; a < database.length; a++) {
        if (index === a) {
            tr += `
                <tr>
                <td>${a + 1}</td>
                <td><input id="edit-username" type="text" value="${database[a].username}"></td>
                <td><input id="edit-email" type="text" value="${database[a].email}"></td>
                <td>
                    <select id="s2">
                        <option>admin</option>
                        <option>user</option>
                    </select>
                </td>
                <td>
                <button onclick="SaveButton(${a})">Save</button>
                <button onclick="CancelButton()">Cancel</button>
                </td>
                </tr>
                `
            }
                else {
                    tr += `
                    <tr>
                    <td>${a + 1}</td>
                    <td>${database[a].username}</td>
                    <td>${database[a].email}</td>
                    <td>${database[a].role}</td>
                    <td>
                    <button onclick="EditButton(${a})">Edit</button>
                    <button onclick="DeleteButton(${a})">Delete</button>
                    </td>
                    </tr>
                    `
            
        }
        
    }
    tbody.innerHTML = tr
}
ShowUsers()

function EditButton(index) {
    ShowUsers(index)
}
function DeleteButton(index) {
    database.splice(index, 1)
    ShowUsers()
}
function SaveButton(index) {
    let editNama = document.getElementById('edit-username').value
    let editEmail = document.getElementById('edit-email').value
    let roleSelect = document.getElementById('s2')
    database[index].username = editNama
    database[index].email = editEmail
    if (roleSelect[0].selected) {
        database[index].role = roleSelect[0].value
    }else {
        database[index].role = roleSelect[1].value
    }
    ShowUsers()
}
function CancelButton() {
    ShowUsers()
}
function RegisterForm(event) {
    event.preventDefault()
    let form = document.getElementById('Formx1')
    let role = document.getElementById('s1')
    
    
    let username = form['username'].value
    let email = form['email'].value
    if (username === '' || email === '') {
        alert('tidak boleh kosong')
    }else {
        if (role[0].selected){
            database.push(new Data(
                database.length + 1,
                form['username'].value,
                form['email'].value,
                role[0].value,
            ))
        }else {
            database.push(new Data(
                database.length + 1,
                form['username'].value,
                form['email'].value,
                role[1].value,
            ))
        }

        ShowUsers()
        form['username'].value = ''
        form['email'].value = ''
    }
}