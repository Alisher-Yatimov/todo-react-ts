import React from "react";

export interface ICustomRoute {
    path: string;
    component: React.ElementType;
    exact?: boolean;
    isAuthenticated: boolean;
    [key: string]: any;
}