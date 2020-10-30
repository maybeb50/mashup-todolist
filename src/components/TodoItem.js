import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
    opacity: 0;
    cursor: pointer;
    display: flex;
    align-itemps: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    &:hover {
        color: #ff6b6b;
    }
`;
const CheckCircle = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    font-size: 24px;

    ${props => props.done && css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done && css`
        color: #ced4da;
    `}
`;
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;

function TodoItem({ id, done, text }) {
    return(
        <TodoItemBlock>
            <CheckCircle done={done}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>
                { text }
            </Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;