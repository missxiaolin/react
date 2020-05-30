import React from 'react'
import { connect } from 'react-redux'
import { PageHeader, Button, Tag } from 'antd'

class Task extends React.Component {
    render() {
        return <div className="container">
            <PageHeader title="TASK-OA任务管理系统">
                <Button>新增</Button>
            </PageHeader>
            <Tag color="blue">全部</Tag>
            <Tag>未完成</Tag>
            <Tag>已完成</Tag>
        </div>
    }
}

export default connect(null, null)(Task)