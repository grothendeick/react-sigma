import React, { CSSProperties, ReactNode } from "react";
import { Settings } from "sigma/settings";
import { GraphOptions } from "graphology-types";
interface SigmaContainerProps {
    graphOptions?: GraphOptions;
    initialSettings?: Settings;
    id?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
export declare const SigmaContainer: React.FC<SigmaContainerProps>;
export {};
