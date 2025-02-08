async function ajax(objectAPI) {
    const {endpoint, method, typeHeader, data, success} = objectAPI;
  try {
    let response = await fetch(endpoint, {
        method: method,
        
        body: JSON.stringify(data)//json
    });
    if(!response.ok) throw response;
    let json = await response.json();
    success(json);
   
  } catch (error) {
    console.log(error);
  }
}


ajax({
    endpoint: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success:function(response){
        response.forEach(r=>{
            console.log(r);
        })
    } 
});
