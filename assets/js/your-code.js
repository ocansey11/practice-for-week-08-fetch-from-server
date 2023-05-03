export function getAllDogs() {
    // Your code here
   return fetch("/dogs")  
}

export function getDogNumberTwo() {
    // Your code here
   return fetch("/dogs/2");
}

export function postNewDog() {
    // Your code here
    const url = "/dogs"
    const headers = {"Content-Type": "application/x-www-form-urlencoded"}
    const body = new URLSearchParams({
        name: 'elka',
        age : 4
    }); 
    const options = {
        method : "POST",
        headers: headers,
        body: body
    }

   return fetch(url, options)
}

export function postNewDogV2(name, age) {
     // Your code here

    const url = "/dogs"
    const headers = {"Content-Type": "application/x-www-form-urlencoded"}
    const body = new URLSearchParams({
        name: `${name}`,
        age : `${age}`
    }); 
    const options = {
        method : "POST",
        headers: headers,
        body: body
    }
 
    return fetch(url, options)

}

export function deleteDog(id) {
      // Your code here
      const url = `/dogs/${id}/delete`;
      const headers = {"AUTH": "ckyut5wau0000jyv5bsrud90y"};
      const body = "";
      const options = {
          method: "POST",
          headers: headers,
          body: body
      };
  
      return fetch(url, options);
}