import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";


export const addUserAPI = async (user)=>{ 
    return await commonAPI("POST",`${SERVER_URL}/user`,user)
}

export const getUserAPI = async ()=>{ 
    return await commonAPI("GET",`${SERVER_URL}/user`,"")
}
export const removeUserAPI  = async (userId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/user/${userId}`,{})

}
export const updateUserAPI = async (userDetails )=>{ 
    return await commonAPI("PUT",`${SERVER_URL}/user/${userDetails.id}`, userDetails);
}


export const addGarageAPI = async (Gdetails)=>{ 
    return await commonAPI("POST",`${SERVER_URL}/vehicleGarage`,Gdetails)
}


export const getGarageAPI = async ()=>{ 
    return await commonAPI("GET",`${SERVER_URL}/vehicleGarage`,"")
}

export const removeDataAPI  = async (employeeId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/vehicleGarage/${employeeId}`,{})

}
export const updateDataAPI = async (dataDetails )=>{ 
    return await commonAPI("PUT",`${SERVER_URL}/vehicleGarage/${dataDetails.id}`, dataDetails);
}