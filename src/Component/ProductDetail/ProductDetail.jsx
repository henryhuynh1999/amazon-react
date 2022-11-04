import React from "react";
import { useStateValue } from "../../Hook/StateProvider";
import { db, auth } from "../../firebase";
function ProductDetail() {
  console.log(db, auth);
  return <div>ProductDetail</div>;
}

export default ProductDetail;
