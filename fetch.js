const requestURL = 'https://jsonplaceholder.typicode.com/users';

async function request(method,url,search = '',body=null){
    try{
        const headers={
            'Content-Type':'application/json'
        }
        if(method === 'GET'){
            const response = await fetch(url);
            const data = await response.json().catch(error=>{console.error(error)})
            
            if(search!=''){
                createCards(data.filter(user=>user['name'].includes(search)))
            }else{
                createCards(data);
            }
            console.log(data);
           
            
        }else{
            const response = await fetch(url,{
                method:method,
                headers:headers,
                body:body
            });
            const data = await response.json().catch(error=>console.error(error));
            console.log(data);
            return data;
        }
    }catch(e){
        console.error(e);
    }
}


request('GET',requestURL)