import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct =
  (
    productData
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "productCreateRequest",
      });

      

      const { data } = await axios.post(
        `${server}/product/create-product`,
        productData,
      
        
      );
      dispatch({
        type: "productCreateSuccess",
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: "productCreateFail",
        payload: error.response.data.message,
      });
    }
  };

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response.data.message,
    });
  }
};

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsFailed",
      payload: error.response.data.message,
    });
  }
};
 


export const updateProduct =( id,productData ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "productUpdateRequest",
      });
      // const config = {
      //   headers: { "Content-Type": "application/json" },
      // };

      const { data } = await axios.put(
        // `${server}/admin-update-product/:id`,
        `${server}/product/admin-update-product/${id}`,
        productData,
      // config
      );
      dispatch({
        type: "productUpdateSuccess",
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: "productUpdateFail",
        payload: error.response.data.message,
      });
    }
  };



  export const productDetails = (id)=> async(dispatch)=>{
   try{
    dispatch({
      type:"productDetailsRequest"
    });
    const { data } = await axios.put(
      // `${server}/admin-update-product/:id`,
      `${server}/product/product/${id}` 
    );

    dispatch({
      type:"productDetailsSuccess",
      payload:data.product,
    })

    

   }catch(error){
    dispatch({
      type:"productDetailsFail",
      payload:error.response.data.message
    })
   }
  }








