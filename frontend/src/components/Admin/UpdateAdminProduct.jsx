

// import React, { Fragment, useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   clearErrors,
//   updateProduct,
//   getProductDetails,
// } from "../../actions/productAction";
// import { useAlert } from "react-alert";
// import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
// import AccountTreeIcon from "@material-ui/icons/AccountTree";
// import DescriptionIcon from "@material-ui/icons/Description";
// import StorageIcon from "@material-ui/icons/Storage";
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import SideBar from "./Sidebar";
// import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";

// const UpdateProduct = ({ history, match }) => {
//   const dispatch = useDispatch();
//   const alert = useAlert();

//   const { error, product } = useSelector((state) => state.productDetails);

//   const {
//     loading,
//     error: updateError,
//     isUpdated,
//   } = useSelector((state) => state.product);

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [Stock, setStock] = useState(0);
//   const [images, setImages] = useState([]);
//   const [oldImages, setOldImages] = useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);

//   const categories = [
//     "Laptop",
//     "Footwear",
//     "Bottom",
//     "Tops",
//     "Attire",
//     "Camera",
//     "SmartPhones",
//   ];

//   const productId = match.params.id;

//   useEffect(() => {
//     if (product && product._id !== productId) {
//       dispatch(getProductDetails(productId));
//     } else {
//       setName(product.name);
//       setDescription(product.description);
//       setPrice(product.price);
//       setCategory(product.category);
//       setStock(product.Stock);
//       setOldImages(product.images);
//     }
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     if (updateError) {
//       alert.error(updateError);
//       dispatch(clearErrors());
//     }

//     if (isUpdated) {
//       alert.success("Product Updated Successfully");
//       history.push("/admin/products");
//       dispatch({ type: UPDATE_PRODUCT_RESET });
//     }
//   }, [
//     dispatch,
//     alert,
//     error,
//     history,
//     isUpdated,
//     productId,
//     product,
//     updateError,
//   ]);

//   const updateProductSubmitHandler = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("name", name);
//     myForm.set("price", price);
//     myForm.set("description", description);
//     myForm.set("category", category);
//     myForm.set("Stock", Stock);

//     images.forEach((image) => {
//       myForm.append("images", image);
//     });
//     dispatch(updateProduct(productId, myForm));
//   };

//   const updateProductImagesChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);
//     setImagesPreview([]);
//     setOldImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview((old) => [...old, reader.result]);
//           setImages((old) => [...old, reader.result]);
//         }
//       };

//       reader.readAsDataURL(file);
//     });
//   };

//   return (
//     <Fragment>
//       <MetaData title="Create Product" />
//       <div className="dashboard">
//         <SideBar />
//         <div className="newProductContainer">
//           <form
//             className="createProductForm"
//             encType="multipart/form-data"
//             onSubmit={updateProductSubmitHandler}
//           >
//             <h1>Create Product</h1>

//             <div>
//               <SpellcheckIcon />
//               <input
//                 type="text"
//                 placeholder="Product Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <AttachMoneyIcon />
//               <input
//                 type="number"
//                 placeholder="Price"
//                 required
//                 onChange={(e) => setPrice(e.target.value)}
//                 value={price}
//               />
//             </div>

//             <div>
//               <DescriptionIcon />

//               <textarea
//                 placeholder="Product Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 cols="30"
//                 rows="1"
//               ></textarea>
//             </div>

//             <div>
//               <AccountTreeIcon />
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">Choose Category</option>
//                 {categories.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <StorageIcon />
//               <input
//                 type="number"
//                 placeholder="Stock"
//                 required
//                 onChange={(e) => setStock(e.target.value)}
//                 value={Stock}
//               />
//             </div>

//             <div id="createProductFormFile">
//               <input
//                 type="file"
//                 name="avatar"
//                 accept="image/*"
//                 onChange={updateProductImagesChange}
//                 multiple
//               />
//             </div>

//             <div id="createProductFormImage">
//               {oldImages &&
//                 oldImages.map((image, index) => (
//                   <img key={index} src={image.url} alt="Old Product Preview" />
//                 ))}
//             </div>

//             <div id="createProductFormImage">
//               {imagesPreview.map((image, index) => (
//                 <img key={index} src={image} alt="Product Preview" />
//               ))}
//             </div>

//             <Button
//               id="createProductBtn"
//               type="submit"
//               disabled={loading ? true : false}
//             >
//               Create
//             </Button>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default UpdateProduct;



import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productDetails,updateProduct } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";
import {  useParams } from "react-router-dom";

const AdminProductUpdate = ({data}) => {

    // const {success,error} = useSelector((state)=>state.products);
    const {product} = useSelector((state)=>state.producttDetails);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [images,setImages]= useState([])
    const [name,setName] = useState()
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [originalPrice, setOriginalPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [stock, setStock] = useState();

    // const {id} = match.params.id;
    const productId  = useParams();
    // const {id} = useParams();
  
    useEffect(()=>{
      if (product && product._id !== productId) {
        
       dispatch(productDetails(productId))
       } else{
        //  setImages(product && product.images)
        //  setName(product &&product.name)
        //  setDescription(product&&product.description)
        //  setCategory(product&&product.category)
        //  setTags(product&&product.tags)
        //  setOriginalPrice(product&&product.originalPrice)
        //  setDiscountPrice(product&&product.discountPrice)
        //  setStock(product&&product.stock)
         setImages(data && data.images)
         setName(data && data.name)
         setDescription(data && data.description)
         setCategory(data && data.category)
         setTags(data && data.tags)
         setOriginalPrice(data && data.originalPrice)
         setDiscountPrice(data && data.discountPrice)
         setStock(data && data.stock)
       }
       
      
    },[dispatch,navigate, productId ,product,data]) 

    const handleImageChange = (e)=>{
        const files = Array.from(e.target.files);
        setImages([]);

        files.forEach((file)=>{
            const reader = new FileReader();

            reader.onload = () =>{
                if(reader.readyState === 2){
                    setImages((old)=>[...old,reader.result]);
                }
            }
            reader.readAsDataURL(file)
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newForm = new FormData();
    
        images.forEach((image) => {
          newForm.set("images", image);
        });

        newForm.append("name",name);
        newForm.append("description",description)
        newForm.append("category",category)
        newForm.append("tags",tags)
        newForm.append("originalPrice",originalPrice)
        newForm.append("discountPrice",discountPrice)
        newForm.append("stock",stock);
         
        dispatch(
            updateProduct(productId ,newForm)

            
        )
    }


  return (
    
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
        <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
        <form onSubmit={handleSubmit}>
            <br />
            <div>
                <label className="">Name<span className="text-red-500">*</span>
                </label>
                <input 
                type="name"
                name="name"
                value={name}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your product name..."
                 />
            </div>
            <br />
            <div>
            <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
          cols="30"
          required
          rows="8"
          type='text'
          name="description"
          value={description}
          className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your product description..."
          > 
            </textarea> 
            </div>
            <br />
            <div>
            <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select className="" value={category}
          onChange={(e) => setCategory(e.target.value)}>
            <option value="Choose a category">
            Choose a category
            </option>
            {categoriesData && categoriesData.map((i)=>(
              <option value={i.title} key={i.title}>{i.title}</option>  
            ))}
          </select>
            </div>
            <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter your product tags..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Enter your product price..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder="Enter your product price with discount..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter your product stock..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={i}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        </form>

    
    </div>
  )
}

export default AdminProductUpdate
