const BackentURL="https://6638602e4253a866a24d833c.mockapi.io"

const BackentURLCompose="https://6638602e4253a866a24d833c.mockapi.io"


const Createdata=async(postdata)=>{
    try{
        const response=await fetch (`${BackentURL}/maindata`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(postdata),
        
              })
              const data=await response.json()
              return data

    }catch(e){
        console.log(e)
        alert("Somthing went wrong ")
    }
 
}


const Getdatas=async()=>{
    try{
        const response=await fetch(`${BackentURL}/maindata`)
    const data=await response.json()
    return data
    }catch(e){
        console.log(e)
    }
}


const replacedata = async (postData,postid) => {
    try {
      const response = await fetch(`${BackentURL}/maindata/${postid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.error("Error:", e);
      throw new Error("Something went wrong");
    }
  };

const Createcompose=async(composedata)=>{
  try{
    const response= await fetch(`${BackentURLCompose}/datas`,{
      method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(composedata),
  
     })
     const data=response.json();
     return data
  }catch(e){
    console.log(e)
  }
}

const Getcompose=async()=>{
  try{
    const response=  await fetch(`${BackentURLCompose}/datas`);
    const data=response.json();
    return data
  }
  catch(e){
    console.log(e)
  }
}

export {Createdata,Getdatas,replacedata,Createcompose,Getcompose}