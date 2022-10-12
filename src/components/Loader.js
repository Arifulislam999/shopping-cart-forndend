import React from "react";

import { Rings } from "react-loader-spinner";
function Loader() {
    return (
        <div className="loader">
            <Rings
                height="180"
                width="180"
                color="#4fa94d"
                radius="15"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    );
}

export default Loader;
