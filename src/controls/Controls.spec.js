// Test away!
import React from 'react';
import { render, fireEvent, cleanup, getByTitle } from 'react-testing-library';
import 'jest-dom/extend-expect';
import banana from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';

afterEach(cleanup);

describe ('Display Component', () => {

    it('buttons are there ?', () => {
        const { getByText } = render(<Controls />);

        const button1 = getByText('Lock Gate');
        const button2 = getByText('Close Gate');

        expect(button2).toBeInTheDocument();
        expect(button1).toBeInTheDocument();
    })

    it('buttons are there AND toggele?', () => {
        const { getByText, queryByText, rerender } = render(<Controls closed={false} locked={false} />);

        const button1 = getByText('Lock Gate');
        const button2 = getByText('Close Gate');

        rerender(<Controls closed={true} locked={false} />)
        
        const button4 = getByText('Open Gate');
        
        expect(button2).toBe(button4);
        
        rerender(<Controls closed={true} locked={true} />)

        const button3 = getByText('Unlock Gate');
        
        expect(button1).toBe(button3);
        
    })

    it('closed button disabled if the gate closed / and vice versa', () => {
        const { getByText, queryByText, rerender } = render(<Controls closed={false} locked={false} />);

        const button = getByText('Close Gate');
        expect(button).toBeInTheDocument();

        rerender(<Controls closed={true} locked={false} />)

        const buttonB = getByText('Open Gate');

        expect(button).toBe(buttonB);
    })
    
})

