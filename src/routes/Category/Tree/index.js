import React, {Component, Fragment} from 'react';
import { Tree, Divider, Button } from 'antd';
import { connect } from "dva";

const TreeNode = Tree.TreeNode;

import ModalForm from '../Form';
import Spacing from 'components/Spacing';

class CategoryTree extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expandedKeys: [],
            autoExpandParent: true,
            checkedKeys: [],
            selectedKeys: [],
        }
        this.onExpand = this.onExpand.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.renderTreeNodes = this.renderTreeNodes.bind(this);
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({type: 'category/tree'});
    }

    onExpand(expandedKeys){
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }

    onCheck(checkedKeys){
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    }

    onSelect(selectedKeys, info){
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    }

    renderTreeNodes(data){
        return data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode title={item.name} key={item.id} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
    }

    render() {
        const { category, dispatch } = this.props;
        return (
            <Fragment>
                <Button.Group>
                    <Button icon="plus" onClick={()=>{
                        dispatch({
                            type: 'category/showModal',
                            payload: { currentItem: {}, modalType: 'create' },
                        });
                        dispatch({
                            type: 'category/all',
                        });
                    }}/>
                    <ModalForm/>
                    <Button icon="reload" onClick={()=>{
                        dispatch({type: 'category/tree'});
                    }} />
                </Button.Group>
                <Spacing/>
                <Tree
                    checkable
                    onExpand={this.onExpand}
                    expandedKeys={this.state.expandedKeys}
                    autoExpandParent={this.state.autoExpandParent}
                    onCheck={this.onCheck}
                    checkedKeys={this.state.checkedKeys}
                    onSelect={this.onSelect}
                    selectedKeys={this.state.selectedKeys}
                >
                    {this.renderTreeNodes(category.tree)}
                </Tree>
            </Fragment>
        );
    }
}

const mapStateToProps = ({category, global, loading}) => {
    return {
        category,
        loadingPaginate: loading.effects['category/all'],
    }
}

export default connect(mapStateToProps)(CategoryTree);