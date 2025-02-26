import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { expectElementText, scenarioMixin } from '../../../simulation-mixins/scenario';
import { ElmentDimHookSimulator } from './element-rect-hook-simulator';

export default createDemo({
    name: 'use element dimenstion',
    demo: () => <ElmentDimHookSimulator isVertical={true} watchSize={true} width="100%" height="100%" />,
    environmentProps: {
        canvasWidth: 746,
        canvasHeight: 372,
        windowWidth: 1190,
        windowHeight: 640,
    },
    plugins: [
        scenarioMixin.use({
            events: [expectElementText('#res', '100')],
            timeout: 4000,
        }),
    ],
});
