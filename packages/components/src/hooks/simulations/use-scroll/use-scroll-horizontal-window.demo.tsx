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
    name: 'use scroll window horizontal',
    demo: () => <ScrollHookSimulator isHorizontal={true} />,
    environmentProps: {
        canvasWidth: 2000,
        canvasHeight: 500,
        windowWidth: 500,
        windowHeight: 640,
    },
    plugins: [
        scenarioMixin.use({
            title: 'scrolls horizontally',
            events: [
                scrollAction(200, false),
                expectElementText('#res', '200'),
                scrollAction(-1, false),
                expectElement('#res', (el: HTMLElement) => {
                    expect(Math.round(parseFloat(el.innerText))).to.equal(Math.round(maxScroll(window, false)));
                }),
                scrollAction(0, false),
                expectElementText('#res', '0'),
            ],
            timeout: 3000,
        }),
    ],
});
