import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { expect } from 'chai';
import {
    expectElement,
    expectElementText,
    maxScroll,
    scenarioMixin,
    scrollAction,
} from '../../../simulation-mixins/scenario';
import { ScrollHookSimulator } from './scroll-hook-simulator';

export default createDemo({
    demo: () => <ScrollHookSimulator />,
    name: 'use scroll window vertical',
    environmentProps: {
        canvasWidth: 200,
        canvasHeight: 2000,
        windowWidth: 500,
        windowHeight: 640,
    },
    plugins: [
        scenarioMixin.use({
            events: [
                scrollAction(300),
                expectElementText('#res', '300'),
                scrollAction(200),
                expectElementText('#res', '200'),
                scrollAction(-1),
                expectElement('#res', (el: HTMLElement) => {
                    expect(Math.round(parseFloat(el.innerText))).to.equal(Math.round(maxScroll(window, true)));
                }),
                scrollAction(0),
                expectElementText('#res', '0'),
            ],
        }),
    ],
});
