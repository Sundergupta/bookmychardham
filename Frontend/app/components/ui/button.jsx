import * as React from "react";
import clsx from "clsx";

export function Button({
    children,
    className,
    variant = "default",
    ...props
}) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        default:
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline:
            "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white focus:ring-blue-400",
        ghost:
            "bg-transparent text-blue-400 hover:bg-blue-400/10 focus:ring-blue-400",
    };

    return (
        <button
            className={clsx(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
