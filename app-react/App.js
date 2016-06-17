import React from "react";
import ReactDOM from "react-dom";
import AppContent  from "./components/content";
import AppHeaderContent  from "./components/headerContent";

ReactDOM.render(
    <div>
        <AppHeaderContent />
        <AppContent />
    </div>,
    document.getElementById('root')
);




