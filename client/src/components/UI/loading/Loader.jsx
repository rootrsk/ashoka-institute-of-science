import React from "react";

const Loader = React.memo(({ isInline }) => {
  if (isInline)
    return (
        <section className="d-flex align-items-center justify-content-center">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
    return (
        <div className="loader-wrapper">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
});

export default Loader;