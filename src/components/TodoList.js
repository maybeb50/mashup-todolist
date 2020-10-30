import React  from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px 32px 48px;
`;

function TodoList() {
    return(
        <TodoListBlock>
            <TodoItem text="리액트 앱 만들기" done={true} />
            <TodoItem text="인터렉티브 웹 사이트 제작" done={true} />
            <TodoItem text="그룹웨어 즐겨찾기 UI 변경" done={false} />
            <TodoItem text="그룹웨어 시간 수정" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;