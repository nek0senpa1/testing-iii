// Test away
import React from 'react';
import { render, fireEvent, cleanup, getByTitle } from 'react-testing-library';
import 'jest-dom/extend-expect';
import banana from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

afterEach(cleanup);

describe ('Display Component', () => {

    // it('displays gate open/closed if locked or unlocked', () => {
    //     const { getByText, queryByText } = render(<Display />);

    //     const lockey = getByTitle
        
    //     const closed = getByText(/closed/i);
    //     const unlocked = getByText(/unlocked/i);

    //     expect(closed).toBeTruthy();
    //     expect(unlocked).toBeInTheDocument();

    // })

    it('if displays closed is red', () => {
        const { getByText, queryByText } = render(<Display  closed={true}/>);
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass('led red-led');
    })

    it('if displays open is green', () => {
        const { getByText, queryByText } = render(<Display  closed={false}/>);
        const open = getByText(/open/i);
        expect(open).toHaveClass('led green-led');
    })

    it('display closed if prop is true', () => {
        const { getByText, queryByText } = render(<Display  closed={true}/>);
        const closed = getByText(/closed/i);
        expect(closed).toBeTruthy();
    })

    it('display open if prop is false', () => {
        const { getByText, queryByText } = render(<Display  closed={false}/>);
        const open = getByText(/open/i);
        expect(open).toBeTruthy();
    })

    it('display locked if prop is false', () => {
        const { getByText, queryByText } = render(<Display  locked={false}/>);
        const unlocked = getByText(/unlocked/i);
        expect(unlocked).toBeTruthy();
    })

    it('display unlocked if prop is true', () => {
        const { getByText, queryByText } = render(<Display  locked={true}/>);
        const locked = getByText(/locked/i);
        expect(locked).toBeInTheDocument();
    })

    it('display gat open if unlocked', ()=> {
        const { getByText, queryByText } = render(<Display  locked={false} closed={false}/>);
        const open = getByText(/open/i);
        expect(open).toBeTruthy();
    })

})