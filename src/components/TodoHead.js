import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #323a40;
    }

    .day {
        margin-top: 4px;
        font-size: 21px;
        color: #868e96;
    }

    .tasks-left {
        margin-top: 18px;
        font-size: 18px;
        font-weight: bold;
        color: #20c997;
    }
`;

function TodoHead() {
    return(
        <TodoHeadBlock>
            <h1>2020년 10월 28일</h1>
            <div className="day">수요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    )
} 

export default TodoHead;
