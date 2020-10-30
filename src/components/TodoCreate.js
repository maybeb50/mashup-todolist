import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }
    
    z-index: 5;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border: none;
    outline: none;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);

    font-size: 60px;
    color: #fff;

    transition: 0.123s all ease-in;

    ${props => props.open && css`
        background: #ff6b6b;
        &:hover {
            background: #ff8787;

        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const InsertForm = styled.div`
    background: #f8f9fa;
    padding: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate() {
    // 상태 관리 Hooks -> useState
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return(
        <>
            { open && 
                <InsertFormPositioner>
                    <InsertForm>
                        <Input placeholder="할 일 입력 후, Enter를 누르세요." />
                    </InsertForm>
                </InsertFormPositioner>
            }
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default TodoCreate;