import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";

import { Select } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actioncreators } from "../state";
import { bindActionCreators } from "redux";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css";

const Postalsearch = () => {
  const state = useSelector((state) => state.postal);
  const dispatch = useDispatch();
  const { getpostalcodedetails } = bindActionCreators(actioncreators, dispatch);

  const [value, setvalue] = useState(); // Holds input text value

  useEffect(() => {
    getpostalcodedetails(state, value);
  }, [value]);

  return (
    <>
      <div>
        <div
          className="field col-12 md:col-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
          }}
        >
          <h1 style={{ color: "red" }}>Enter Postal Code :</h1>
          <InputText
            placeholder="Enter Postal Code"
            style={{ marginLeft: "0.8rem", width: "35vw" }}
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
        </div>
        <div>
          {!state.loading && !state.error ? (
            <div>
              <div
                style={{
                  margin: "auto",
                  width: "55vw",
                  height: "0vh",
                  border: "1px solid black",
                  marginTop: "2rem",
                  borderRadius: "1rem",
                }}
              >
                <table>
                  <tr>
                    <th>Field</th>
                    <th>Data</th>
                  </tr>
                  <tr>
                    <td>Country Name</td>
                    <td>{state.postal.country}</td>{" "}
                  </tr>
                  <tr>
                    <td>Place Name</td>{" "}
                    <td>
                      {state.postal.places
                        ? state.postal.places[0]["place name"]
                        : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td>State</td>{" "}
                    <td>
                      {state.postal.places
                        ? state.postal.places[0].state
                        : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td>Longitude</td>{" "}
                    <td>
                      {state.postal.places
                        ? state.postal.places[0].longitude
                        : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td>Latitude</td>{" "}
                    <td>
                      {state.postal.places
                        ? state.postal.places[0].latitude
                        : "N/A"}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          ) : (
            <>
              <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
                No Info for this Postal Code Based on the API
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Postalsearch;
