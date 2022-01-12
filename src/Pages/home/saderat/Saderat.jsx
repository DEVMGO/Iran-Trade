import React from "react";
import Chart from "../chart/Chart";
import './saderat.css';

export default function Saderat() {

    return (
        <div id="saderat">
            <div className="title">
                <hr />
                <h4>صادرات و واردات ایران</h4>
                <hr />
            </div>
            <div class="tarikh">
                <div className="container">
                    <div className="tarikh-header">
                        <div>&#9776;</div>
                        <div className="tarikh-select">
                            <label for="inputState" class="form-label">تاریخ: </label>
                            <select id="inputState" class="form-select">
                                <option selected>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                            </select>
                        </div>
                    </div>
                    <div className="charts">
                        <div className="row">
                            <div className="col-lg-6 chart">
                                <h4>واردات به ایران</h4>
                                <Chart />
                            </div>
                            <div className="col-lg-6 chart">
                                <h4>صادرات به ایران</h4>
                                <Chart backgroundColor='rgba(0, 0, 0, 1)' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}