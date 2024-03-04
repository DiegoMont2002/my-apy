import React from "react";
import BarraMenu from "../components/BarraMenu";

function Layout({ children }) {
    return (  
        <div>
            <div className="container-fluid">
                <BarraMenu/>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
