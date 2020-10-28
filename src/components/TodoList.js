import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px 32px 48px;
    background: gray;
`;

function TodoList() {
    return(
        <TodoListBlock>Todo</TodoListBlock>
    );
}

export default TodoList;