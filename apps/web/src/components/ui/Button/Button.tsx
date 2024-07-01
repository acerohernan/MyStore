import React, { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
	return (
		<button className="px-4 py-2 bg-red-400 rounded-xl text-white transition-all ease-in-out duration-500 hover:scale-105 dark:text-black dark:bg-red-100">
			{children}
		</button>
	);
};
