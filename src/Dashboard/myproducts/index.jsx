import { useQuery } from "@tanstack/react-query";
import React from "react";
import { data } from "react-router-dom";

const api = import.meta.env.VITE_API;
const fetchCategories = async () => {
  const { data } = await axios.get(`
    ${api}/user/account-details?access_token=67e51c1d2802b2864782f773`);
  return data;
};

const MyProducts = () => {
  return (
    <>
      <div>
        <form id="complex-form" className=" w-full">
          <div className="ant-row ant-form-item-row css-k7429z">
            <div className="ant-col ant-form-item-label css-k7429z">
              <label className="ant-form-item-required" title="First name">
                First name
              </label>
            </div>
            <div className="ant-col ant-form-item-control css-k7429z">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <input
                    placeholder="Type your first name..."
                    id="complex-form_name"
                    aria-required="true"
                    className="ant-input ant-input-lg css-k7429z"
                    type="text"
                    // value="farrux"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="display: inline-block; width: calc(50% - 8px);">
            <div className="ant-row ant-form-item-row css-k7429z">
              <div className="ant-col ant-form-item-label css-k7429z">
                <label className="ant-form-item-required" title="Email address">
                  Email address
                </label>
              </div>
              <div className="ant-col ant-form-item-control css-k7429z">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <input
                      placeholder="Your email address..."
                      id="complex-form_email"
                      aria-required="true"
                      className="ant-input ant-input-lg css-k7429z"
                      type="text"
                      // value="farruxtorayev590@gmail.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ant-col ant-form-item-label css-k7429z">
            <label className="ant-form-item-required" title="Phone Number">
              Phone Number
            </label>
          </div>
          <div className="ant-form-item-control-input-content">
            <span className="ant-input-group-wrapper ant-input-group-wrapper-lg css-k7429z">
              <span className="ant-input-wrapper ant-input-group css-k7429z">
                <span className="ant-input-group-addon">+998</span>
                <input
                  placeholder="Your phone number..."
                  id="complex-form_phone_number"
                  aria-required="true"
                  className="ant-input ant-input-lg css-k7429z"
                  type="text"
                  // value=""
                />
              </span>
            </span>
          </div>
          <div className="ant-row ant-form-item-row css-k7429z">
            <div className="ant-col ant-form-item-label css-k7429z">
              <label className="ant-form-item-required" title="Last name">
                Last name
              </label>
            </div>
            <div className="ant-col ant-form-item-control css-k7429z">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <input
                    placeholder="Type your last name..."
                    id="complex-form_surname"
                    aria-required="true"
                    className="ant-input ant-input-lg css-k7429z"
                    type="text"
                    // value="farrux"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ant-row ant-form-item-row css-k7429z">
            <div className="ant-col ant-form-item-label css-k7429z">
              <label className="ant-form-item-required" title="Username">
                Username
              </label>
            </div>
            <div className="ant-col ant-form-item-control css-k7429z">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <input
                    placeholder="Your username..."
                    id="complex-form_username"
                    aria-required="true"
                    className="ant-input ant-input-lg css-k7429z"
                    type="text"
                    // value=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ant-col ant-form-item-label css-k7429z">
            <label className="" title="Profile photo">
              Profile photo
            </label>
          </div>
          <div className="ant-form-item-control-input-content">
            <span className="ant-upload-wrapper css-k7429z">
              <div className="ant-upload ant-upload-select">
                <span tabindex="0" className="ant-upload" role="button">
                  <input
                    id="complex-form_profile_photo"
                    type="file"
                    accept=".png,.jpg,.jpeg"
                    className="display: none;"
                  />
                  <button
                    type="button"
                    className="ant-btn css-k7429z ant-btn-default ant-btn-lg"
                  >
                    <span className="ant-btn-icon">
                      <span
                        role="img"
                        aria-label="upload"
                        className="anticon anticon-upload"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="upload"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                      </span>
                    </span>
                    <span>Upload</span>
                  </button>
                </span>
              </div>
              <div className="ant-upload-list ant-upload-list-picture"></div>
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[15px]"
          >
            Save changes
          </button>
        </form>
      </div>
    </>
  );
};

export default MyProducts;
