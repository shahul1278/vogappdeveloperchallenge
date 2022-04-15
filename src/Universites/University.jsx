import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Select } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actioncreators } from "../state";
import { bindActionCreators } from "redux";
const { Option } = Select;

const University = () => {
  const state = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { getcountrieslist, getselectedcountry } = bindActionCreators(
    actioncreators,
    dispatch
  );

  function handleChange(value) {
    getselectedcountry(state, value);
  }

  useEffect(() => {
    getcountrieslist(state);
  }, []);

  return (
    <>
      <div>
        {!state.universityloading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3rem",
            }}
          >
            <span>
              <h1 style={{ color: "red" }}>Country List:</h1>
            </span>
            <Select
              placeholder="Select a Country"
              style={{ width: 300, marginLeft: "2rem" }}
              onChange={handleChange}
            >
              {state.country.map((item) => {
                return (
                  <Option value={item.name.common}>{item.name.common}</Option>
                );
              })}
            </Select>{" "}
          </div>
        ) : (
          <></>
        )}
      </div>
      {!state.universityloading ? (
        <div>
          {state.selectedcountrydata.length > 0 ? (
            <div className="conatiner">
              <table>
                <tr>
                  <th>University Name</th>

                  <th>Wen Page</th>
                  <th>Domains</th>
                </tr>

                {state.selectedcountrydata.map((item, idx) => {
                  return (
                    <tr>
                      <td>{item.name}</td>

                      <td>
                        {item.web_pages
                          ? item.web_pages.map((item) => <h3>{item}</h3>)
                          : "N/A"}
                      </td>
                      <td>
                        {item.domains
                          ? item.domains.map((item) => <h3>{item}</h3>)
                          : "N/A"}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          ) : (
            <>
              <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
                No Universities for this Country Based on the API
              </h1>
            </>
          )}
        </div>
      ) : (
        <></>
      )}

      <div></div>
    </>
  );
};

export default University;
