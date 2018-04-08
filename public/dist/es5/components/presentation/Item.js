"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    //THIS IS NEW

    return React.createElement(
        "div",
        { className: "col-lg-3 col-sm-6" },
        React.createElement(
            "div",
            { className: "card" },
            React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-5" },
                        React.createElement(
                            "div",
                            { className: "icon-big icon-success text-center" },
                            React.createElement("i", { className: "ti-wallet" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-7" },
                        React.createElement(
                            "div",
                            { className: "numbers" },
                            React.createElement(
                                "p",
                                null,
                                "Revenue"
                            ),
                            "$1,345"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "footer" },
                    React.createElement("hr", null),
                    React.createElement(
                        "div",
                        { className: "stats" },
                        React.createElement("i", { className: "ti-calendar" }),
                        " Last day"
                    )
                )
            )
        )
    );
};