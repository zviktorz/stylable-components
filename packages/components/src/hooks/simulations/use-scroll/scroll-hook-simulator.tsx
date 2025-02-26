import React from 'react';
import { useRef } from 'react';
import { useScroll } from '../../use-scroll';

export const ScrollHookSimulator: React.FC<{
    isHorizontal?: boolean;
    useWindowScroll?: boolean;
}> = ({ isHorizontal = false, useWindowScroll = true }) => {
    const ref = useRef<HTMLDivElement>(null);
    const res = useScroll(isHorizontal, useWindowScroll ? undefined : ref);
    return useWindowScroll ? (
        <div>
            <div style={{ position: 'fixed', top: '50%', left: '50%' }} id="res">
                {res}
            </div>
        </div>
    ) : (
        <div
            style={{
                background: 'blue',
                height: '100%',
                overflow: 'auto',
            }}
            ref={ref}
            id="scroll-div"
        >
            <div style={{ position: 'fixed', top: '50%', left: '50%' }} id="res">
                {res}
            </div>
            <div style={{ position: 'relative', top: '2000px', left: '0px' }}>_____________</div>
        </div>
    );
};
