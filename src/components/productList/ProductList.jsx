import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Training & Certifications</h1>
        <p className="pl-desc">
         Cloud Infrasscture • Cyber Security 	• BackUp and Recover 	• HPE Storage Fundamentals 	• AEC Autodesk 
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} info={item.info} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
