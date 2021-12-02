import React, { FC } from 'react';
import { style, classes } from './key-viewer.st.css';

export type KeyViewerProps = React.HTMLAttributes<HTMLDivElement>;

export const KeyViewer: FC<KeyViewerProps> = (props) => {
    return <div {...props} className={style(classes.root, props.className)}>
        <h1>Test</h1>
    </div>;
};
