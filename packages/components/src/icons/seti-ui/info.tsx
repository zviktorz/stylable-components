import React, { memo } from 'react';
import type { IconProps } from '../types';
import { style, classes } from './seti-icon.st.css';

export const InfoIcon = memo<IconProps>((props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
        className={style(classes.root, {}, props.className)}
    >
        <path d="M26 15.1c-.1-1.7-.7-3.2-1.6-4.6C23 8.4 21 7 18.6 6.4c-.7-.2-1.4-.3-2-.3H15c-2 .2-3.7.9-5.3 2.1-1.8 1.5-3 3.3-3.5 5.6-.1.5-.2 1.1-.2 1.6V17c.2 1.7.7 3.3 1.7 4.7 1.1 1.6 2.6 2.9 4.4 3.6 1.1.4 2.2.7 3.3.8H17c2.4-.2 4.5-1.2 6.2-3 1.4-1.4 2.3-3.1 2.7-5 .1-.5.1-.9.2-1.4v-1.1c-.1-.2-.1-.3-.1-.5zm-10 9.4c-4.7 0-8.4-3.8-8.4-8.5s3.8-8.5 8.6-8.5c4.6.1 8.4 3.8 8.4 8.5-.1 4.7-3.9 8.5-8.6 8.5z" />
        <path d="M18.4 21.4c-.2 0-.3 0-.5-.1-.2 0-.2-.2-.3-.3v-6.5c-1.6.1-3.1.1-4.7.2v.8h1c.4 0 .6.3.6.7v4.6c0 .4-.2.6-.6.6H13v.8h6v-.8h-.6zm-2.6-8.1c1 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7-1 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7z" />
    </svg>
));

InfoIcon.displayName = 'InfoIcon';
