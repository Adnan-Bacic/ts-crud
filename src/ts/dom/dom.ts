const results = document.querySelector('#results') as HTMLDivElement
const addUserForm = document.querySelector('#addUserForm') as HTMLFormElement
const postName = document.querySelector('#post_name') as HTMLInputElement
const postEmail = document.querySelector('#post_email') as HTMLInputElement

import * as request from '../requests/requests.js'
import * as Interfaces from '../Interfaces'

const setUI = (res: object[]) => {

    const usersUI: string = res.map((item: Interfaces.User) => {
        return (
        `
        <div>
        <p>${item.id}</p>
        <p>
        ${item.name} - ${item.email}
        </p>
        </div>

        <div>
        <button class="btn btn-info putBtn" id=${item.id}>Put</button>
        <button class="btn btn-info patchBtn" id=${item.id}>Patch</button>
        <button class="btn btn-danger deleteBtn" id=${item.id}>Delete</button>
        </div>
        <br>
        `
        )
        //join() to remove comma from map()
    }).join('')
    
    results.innerHTML = usersUI
}

export const getUsers = async () => {

    const res: object[] = await request.getUsers()

    setUI(res)
}

addUserForm.addEventListener(('submit'), async (e: Event) => {
    e.preventDefault()
    console.log('input', postName.value, postEmail.value)

    const res: string = await request.addUser(postName.value, postEmail.value)
    const parsed: object = JSON.parse(res)

    //get the users
    const res2: object[] = await request.getUsers()

    //create new array from the users array and add the new user object
    const arr: object[] = [...res2]
    arr.push(parsed)

    setUI(arr)
})

window.addEventListener(('load'), async () => {
    const deleteBtns = document.querySelectorAll('.deleteBtn')

    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener(('click'), async () => {
            //sending a delete request returns an empty object, so it doesnt actually do anything here
            const res: object[] = await request.deleteUser(parseInt(deleteBtn.id))
    
            const res2: object[] = await request.getUsers()
    
            const filtered: object[] = res2.filter((item: Interfaces.User) => {
                //better to use user id instead of trashcan id???
                return item.id !== parseInt(deleteBtn.id)
            })    
    
            setUI(filtered)
        })
    })
})

window.addEventListener(('load'), () => {
    const putBtns = document.querySelectorAll('.putBtn')

    putBtns.forEach((putBtn, i) => {
        putBtn.addEventListener(('click'), async () => {
            const res = await request.putUser(parseInt(putBtn.id))
            console.log('2', res)

            const res2: object[] = await request.getUsers()

            const filtered: object[] = res2.filter((item: Interfaces.User) => {
                //better to use user id instead of putBtn id???
                return item.id !== parseInt(putBtn.id)
            })

            const newArr: object[] = [...filtered]
            //insert into specific index
            //delete 0 items first
            //insert res
            newArr.splice(i, 0, res)

            setUI(newArr)
        })
    })

})

window.addEventListener(('load'), () => {
    const patchBtns = document.querySelectorAll('.patchBtn')

    patchBtns.forEach((patchBtn, i) => {
        patchBtn.addEventListener(('click'), async () => {
            const res = await request.patchUser(parseInt(patchBtn.id))

            const res2: object[] = await request.getUsers()

            const filtered: object[] = res2.filter((item: Interfaces.User) => {
                //better to use user id instead of patchBtn id???
                return item.id !== parseInt(patchBtn.id)
            })

            const newArr: object[] = [...filtered]
            //insert into specific index
            //delete 0 items first
            //insert res
            newArr.splice(i, 0, res)

            setUI(newArr)
        })
    })

})