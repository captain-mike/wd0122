async function call(){

    const url:string = 'https://628f5a200e69410599dadd71.mockapi.io/api/v1/users';

    let response = await fetch(url);

    /**
     * let all = await Promise.All([
     *      fetch(urlUtenti).then(res => res.json()),
     *      fetch(urlIndirizzi).then(res => res.json()),
     *      fetch(urlnumeritelefono).then(res => res.json())
     * ])
     */

    let json =  await response.json();

    
    let {avatar,name} = json[0];
    
    console.log(avatar, name);
}

call();