

  import data from "../data/data.json"
 
  //data = array con los productos//


const  getProducts =  () => {

  return new Promise ( (resolve) => {
   setTimeout( () => {
    
            resolve(data)

             }, 1000);
  });  
};


const getProductById = (productId) =>  {

  return new Promise((resolve) => {
    
       setTimeout( () => {

        const product = data.find( (productData) => productData.id === Number(productId)  );

        resolve(product);


    }, 1000);
  });
}






export {getProducts, getProductById} 





