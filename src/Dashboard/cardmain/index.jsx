import React from "react";
import Card from "./card";

const api = import.meta.env.VITE_API;

const CardMain = async () => {
  const res = await axios.post(
    `${api}/flower/category/house-plants/66d09a759fa7aef6c5d0012f?access_token=67e51c1d2802b2864782f773`
  );
  const data = await res.data.data;
  console.log(data);

  return (
    <div>
       
      <Card data={data} />
    </div>
  );
};

export default CardMain;
