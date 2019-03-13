// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import banana from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

afterEach(cleanup);

describe ('Dashboard Comp', () => {

    it('should show the controls', () => {
        const { getByText } = render(<Dashboard/>);
        
        const control1 = getByText(/close gate/i);
        const control2 = getByText(/lock gate/i);

        expect(control1).toBeInTheDocument();
        expect(control2).toBeInTheDocument();
        
    })

    it('defaults to ulocked and open', () => {
        const { getByText, queryByText } = render (<Dashboard/>);

        expect(getByText(/unlocked/i)).toBeTruthy();
        expect(getByText(/open/i)).toBeTruthy()
    });

    it('cannot be closed or opened if locked', () => {
        const { getByText, queryByText } = render (<Dashboard/>);

        const button = getByText(/lock gate/i);
        const button2 = getByText(/close gate/i);

        fireEvent.click(button2);
        fireEvent.click(button);

        const locked = getByText(/locked/i);
        const unlock = getByText(/unlock gate/i);

        expect(locked).toBeInTheDocument();
        expect(unlock).toBeInTheDocument();
        expect(queryByText(/close gate/i)).toBeFalsy();
        expect(queryByText(/unlock gate/i)).toBeTruthy();
        
    })
    

})
