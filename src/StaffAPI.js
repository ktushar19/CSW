export default{
    getStaff: ()=>{
        return fetch('/app')
                .then(Response => Response.json())
                .then(data => data);
    },
    deleteStaff: (_id)=>{
        return fetch(`/app/${_id}`,
                {method : 'delete'})
                .then(Response => Response.json())
                .then(data => data);
    },
    updateStaff: (staffroutes)=>{
        return fetch(`/app/${staffroutes._id}`,
            {method: 'put',
            body: JSON.stringify(staffroutes),
            headers:{
                "Content-Type": "application/json"
            }})
            .then(Response => Response.json())
            .then(data => data);
    },
    createStaff:(staffroutes)=>{
        return fetch(`/app`,
                    {method: 'post',
                body: JSON.stringify(staffroutes),
                headers:{
                    "Content-Type": "application/json"
                }})
                .then(Response => Response.json())
                .then(data => data);
    }
}