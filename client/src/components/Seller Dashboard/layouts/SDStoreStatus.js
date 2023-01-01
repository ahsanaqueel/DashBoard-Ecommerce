import CurrentStore from "./CurrentStore";
const StoreStatus = () => {
   
  let currentStore=CurrentStore()
 
   console.log(currentStore)
    
       return(
         <> 
          { currentStore.storeStatus=="pending" ? <h1>Store Request Pending</h1>
          : currentStore.storeStatus=="block" ?<h1>Store is Block Please Contact to Admin</h1>
          : <h1> null </h1>
          }
        </>
       )
  
}

export default StoreStatus;

 
 