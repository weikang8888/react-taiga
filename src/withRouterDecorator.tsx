import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
const withRouterDecorator = (story) => <Router>{story()}</Router>;
export default withRouterDecorator;
