import React, { Component } from 'react';
import { Modal, Form, Input, Checkbox } from 'antd';
import { connect } from 'dva';

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};

const AddForm = Form.create()(
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
    
            }
        }
        render(){
            const { visible, onCancel, onOk, form, confirmLoading, data } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal 
                    title="categoryo"
                    okText="Guardar"
                    confirmLoading={confirmLoading}
                    onCancel={onCancel}
                    onOk={onOk}
                    visible={visible}>
                    <Form layout="horizontal">
                        <Form.Item hasFeedback {...formItemLayout} label="Nombre">
                            {
                                getFieldDecorator('name', {
                                    initialValue: data.name,
                                    rules: [
                                        { required: true, message: '¡Por favor un nombre!' },
                                    ],
                                })(
                                    <Input placeholder="Nombre"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Conductor">
                            {
                                getFieldDecorator('driver', {
                                    initialValue: data.driver,
                                })(
                                    <Input placeholder="Conductor"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Clave">
                            {
                                getFieldDecorator('key', {
                                    initialValue: data.key,
                                })(
                                    <Input placeholder="Clave"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item  {...formItemLayout} label="Estado">
                            {
                                getFieldDecorator('state',{
                                    valuePropName: 'checked',
                                    initialValue: data.state,
                                })(
                                    <Checkbox/>
                                )
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            )
        }
    }
)

class ModalForm extends Component{
    constructor(props){
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleConfirm(modalType){
        const { dispatch, category: {currentItem} } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            dispatch({
                type: `category/${modalType}`,
                payload: {...values, id: currentItem.id},
            });
            form.resetFields();
        });
    }    

    handleCancel(){
        const form = this.formRef.props.form;
        form.resetFields();
    }

    render(){

        const { handleConfirm, handleCancel } = this;

        const { dispatch, category, loading } = this.props;

        // Recuperando stados y datos desde el modelo category
        const {
            currentItem,
            modalType,
            modalVisible
        } = category;

        const categoryModal = {
            data: modalType == 'create' ? { state: true } : currentItem,
            disabled: modalType == 'detail',
            type: modalType,
            visible: modalVisible,
            confirmLoading: loading,
            onOk(){
                handleConfirm(modalType);
            },
            onCancel(){
                dispatch({
                    type: 'category/resetcategory'
                });
                handleCancel();
            }
        };

        return (
            <AddForm
                {...categoryModal}
                wrappedComponentRef={(formRef) => this.formRef = formRef}/>
        )
    }
}

const mapStateToProps = ({category, loading}) => {
    return {
        category,
        loading: loading.effects['category/create'] || loading.effects['category/update'],
    }
}

export default connect(mapStateToProps)(ModalForm);