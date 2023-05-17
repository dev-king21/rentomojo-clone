
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/smartphones.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FilterContext } from "../context/FilterContext";
import LeftSidebar from "../common/LeftSidebar";
import { LoadingIndicator } from "../common/LoadingIndicator";

const SmartDevices = () => {
    const [smartdevicesData, setSmartdevicesData] = useState([]);
    const { sliderValue,category,isLoading,setIsLoading } = useContext(FilterContext);

  
    useEffect(() => {
      setIsLoading(true)
      fetch("https://graceful-panama-hat-ray.cyclic.app/electronics/smartdevices")
        .then((res) => res.json())
        .then((data) => setSmartdevicesData(data))
        .finally(()=>setIsLoading(false))
    }, []);
    return (
      <div>
      <LeftSidebar/>
      {isLoading ? <LoadingIndicator/> :
      <div className={styles.smartphones_container}>
        {smartdevicesData.map((item) => (
          <Link to={`/electronics/smartdevices/${item.id}`}>
            <div className={styles.smartphones_card} key={item.title}>
              <img 
                className={styles.smartphone_card_img}
                src={item.img}
                alt=""
              />
              <h2 className={styles.smartphone_title}>{item.title}</h2>
              <hr style={{ width: "90%", margin: "auto" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                }}
              >
                {sliderValue == 3 ? (
                  <p className={styles.smartphone_price}>{item.rent3}/mo</p>
                ) : (
                  <p className={styles.smartphone_price}>{item.rent6}/mo</p>
                )}

                <span style={{ display: "flex" }}>
                  <Icon
                    marginTop={"6px"}
                    marginRight={"7px"}
                    as={TbTruckDelivery}
                  ></Icon>
                  <p>3 days</p>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      }
    </div>
    );
}

export default SmartDevices