import React from "react";
import Loader from "react-loader-spinner";

const Spin = () => {
    return (
        <div className="overlay">
            <div className="loader">
                <Loader type="TailSpin" color="#0084E5" height={100} width={100} />
            </div>
        </div>
    );
};

export default Spin;