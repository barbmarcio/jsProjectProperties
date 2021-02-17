class App {
  constructor() {
    this.selectedImmobile = null
  }
    
  immobileCreate() {
    event.preventDefault()
    console.clear()
    let pType   = document.querySelector("input[name='immobile-type']:checked").value
    let pArea   = Number(document.querySelector("input[name='immobile-area']").value)
    let pRented = document.querySelector("input[name='immobile-isRented']").checked
    
    this.selectedImmobile = new Immobile(pType, pArea, pRented)
    this.immobileListAdd(this.selectedImmobile)
    this.formClear()  
  }

  immobileListAdd(immobile) {    
    let btnDelImmobile              = this.immobileDelete()
    let newImmobile                 = document.createElement("li")    
    let immobileInfo                = "Type: " + immobile.type + " | " +
                                      "Area: " + immobile.area + " m²"
    if (immobile.isRented) {
      let rentedTag = this.immobileRented() 
      console.log('Hello from rentedTag')
      newImmobile.appendChild(rentedTag)
    }
    newImmobile.innerHTML += " | " + immobileInfo
    newImmobile.appendChild(btnDelImmobile)

    document.getElementById('createdImmobile').appendChild(newImmobile)    
  }

  immobileRented() {
    let rentedTag                   = document.createElement("span")
    rentedTag.style.color           = "white"
    rentedTag.style.backgroundColor = "red"
    rentedTag.innerText             = "ALUGADO"
    return rentedTag
  }

  immobileDelete() {
    let btnDelImmobile              = document.createElement("button")
    btnDelImmobile.type             = "button"
    btnDelImmobile.innerText        = "Delete"
    btnDelImmobile.setAttribute("onclick", "app.immobileListDelete(this)")
    return btnDelImmobile
  }

  immobileListDelete(immobile) {
    let pParent = immobile.parentNode 
    document.getElementById('createdImmobile').removeChild(pParent)
  }

  formClear() {
    document.querySelector("input[name='immobile-area']").value       = ""
    document.querySelector("input[name='immobile-isRented']").checked = false
    document.getElementById("isNotRented").checked                    = true
    document.querySelector("input[name='immobile-type']").checked     = false
    document.getElementById("apartment").checked                      = true
    console.log('Form successfully cleaned')
  }
}

const app = new App()