var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import 'react-bottom-sheet-booungi/dist/components/styles.css';
var MyModal = function (_a) {
    var trigger = _a.trigger, children = _a.children;
    var _b = useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var handleOpenModal = function () {
        setIsModalOpen(true);
    };
    var handleCloseModal = function () {
        setIsModalOpen(false);
    };
    return (_jsxs(_Fragment, { children: [React.cloneElement(trigger, { onClick: handleOpenModal }), isModalOpen && (_jsx("div", __assign({ className: "modal-overlay", onClick: handleCloseModal }, { children: _jsx("div", __assign({ className: "modal", onClick: function (e) { return e.stopPropagation(); } }, { children: children })) })))] }));
};
export default MyModal;
