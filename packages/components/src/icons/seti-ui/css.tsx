import React, { memo } from 'react';
import type { IconProps } from '../types';
import { style, classes } from './seti-icon.st.css';

export const CssIcon = memo<IconProps>((props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
        className={style(classes.root, {}, props.className)}
    >
        <path
            fill="#529BBA"
            d="M10.3 23.3l.8-4H8.6v-2.1h3l.5-2.5H9.5v-2.1h3.1l.8-3.9h2.8l-.8 3.9h2.8l.8-3.9h2.8l-.8 3.9h2.5v2.1h-2.9l-.6 2.5h2.6v2.1h-3l-.8 4H16l.8-4H14l-.8 4h-2.9zm6.9-6.1l.5-2.5h-2.8l-.5 2.5h2.8z"
        />
    </svg>
));

CssIcon.displayName = 'CssIcon';
