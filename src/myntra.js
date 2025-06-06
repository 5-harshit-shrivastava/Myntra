import React from "react";
import ReactDOM from "react-dom/client";

import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";

import arr from "./utilis/dummy.js";
import {greet,meet} from "./utilis/dummy.js";
// header
// body
// footer

function App(){
    return (<>
        {/* header */}
         <Header />
        <button>Sort By Price</button>

        {/* body */}
        <div className="middle" style={{display:"flex",gap:"10px" , flexWrap:"wrap"}}>
            {/* hard code  */}
            <Card cloth="Tshirt" offer="20-80% off" price="100" img="https://5.imimg.com/data5/ECOM/Default/2024/11/465831718/ZL/YP/ED/199136748/uagdf-512-1000x1000.webp"/>
            <Card cloth="Jeans" offer="20-80% off" price="200" img="https://www.urbanofashion.com/cdn/shop/files/jeanloose-black.png?v=1725767024"/>
            <Card cloth="Shoes" offer="10-40% off" price="1000" img="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9904a515-9702-4924-9f7f-7aa7377323bd/AIR+JORDAN+1+RETRO+HIGH+OG+GS.png"/>
            <Card cloth="Watch" offer="8-16% off" price="1100" img="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=800&sh=800"/>
            <Card cloth="Pant" offer="10-50% off" price="1300" img="https://www.jiomart.com/images/product/original/rvr9fnrhim/loofon-mens-lycra-peanut-fabric-trouser-pant-product-images-rvr9fnrhim-0-202303260247.jpg?im=Resize=(500,630)"/>
            <Card cloth="Boxers" offer="20-60% off" price="200" img="https://img.damensch.com/products/cover-img-ds-t-tropical_black.jpg?fm=webp&h=1050&w=700"/>
            <Card cloth="Underwear" offer="10-40% off" price="100" img="https://img.damensch.com/products/cover-img-dc-t-colonial_blue.jpg?fm=webp&h=1050&w=700"/>
            <Card cloth="Belts" offer="40-60% off" price="400" img="https://www.mytheresa.com/media/1094/1238/100/fc/P00709455.jpg"/>
            <Card cloth="Shirt" offer="34-50% off" price="500" img="https://www.mytheresa.com/media/1094/1238/100/61/P00893335.jpg"/>
            <Card cloth="Sunglasses" offer="33-55% off" price="2000" img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqGwE-8sBA7ODO6mQjN1kt2SWxN2ffxLw2MYXmU_Ctn9OAnIMYyn3d_23aQAQyMhEyqRCD2WzNXrsoZ-6DPOOE-AwkVTuYJIkXC4fIrt4adMfiCmBvY7dC"/>
            <Card cloth="Trousers" offer="30-50% off" price="400" img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFQHy8z8SHnBXPlDafK4LcczvsIUjgkCau642yyPhFTLZ5l4TRG6NznzJbelmAabKYze7CBOLd802ANjk94DsFPAH65x_R_WgAo9OQ6zLfWvAJZiYm7C0p"/>
            <Card cloth="Slippers" offer="25-50% off" price="200" img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlXil4IGDKyp63vP5niPal1CZnFDzeaBcys70xDWyWsCcxozGf7XNZgCL_P43t4Nvh62vkoAA4fHTYhJ3jzG4k-xto1bDdFzHH5sZ07cZaegfjD8JXzMV0SA"/>
            
            {
                arr.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.offer} price={value.price} img={value.img}/>)
            }
        </div>

        {/* footer */}
        <Footer/>
        </>
    );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);





