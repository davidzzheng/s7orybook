import resolveConfig from "tailwindcss/resolveConfig";

import tw from "tailwind-config";

export const { theme } = resolveConfig(tw);

export const colors = Object.entries({ ...theme?.colors }).filter(([, shades]) => typeof shades !== "string");

export const typography = Object.entries({ ...theme?.fontSize });
