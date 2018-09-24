import React, { Component } from 'react';
import { Modal, Form, Input, Checkbox, Select } from 'antd';
import { connect } from 'dva';

const Option = Select.Option;

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};

const AddForm = Form.create()(
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = {}
        }
        render(){
            const { visible, onCancel, onOk, form, confirmLoading, categories, data } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal 
                    title="Empresa"
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
                        <Form.Item hasFeedback {...formItemLayout} label="RUC">
                            {
                                getFieldDecorator('ruc', {
                                    initialValue: data.ruc,
                                    rules: [
                                        { required: true, message: '¡Por favor ingrese un RUC!' },
                                    ],
                                })(
                                    <Input placeholder="RUC"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Categoria">
                            {
                                getFieldDecorator('category_id', {
                                    initialValue: data.category_id,
                                    rules: [
                                        { required: true, message: 'Por favor elija una categoria' },
                                    ],
                                })(
                                    <Select placeholder="Categoria">
                                        {
                                            categories.map((category, key)=>
                                                <Option key={category.id} value={category.id}>{category.name}</Option>
                                            )
                                        }
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Gerente">
                            {
                                getFieldDecorator('manager', {
                                    initialValue: data.manager,
                                })(
                                    <Input placeholder="Gerente"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Dueño">
                            {
                                getFieldDecorator('owner', {
                                    initialValue: data.owner,
                                })(
                                    <Input placeholder="Dueño"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Dirección">
                            {
                                getFieldDecorator('address', {
                                    initialValue: data.address,
                                })(
                                    <Input placeholder="Dirección"/>
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
        const { dispatch, company: {currentItem} } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            dispatch({
                type: `company/${modalType}`,
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

        const { dispatch, company, category, loading } = this.props;

        // Recuperando stados y datos desde el modelo company
        const {
            currentItem,
            modalType,
            modalVisible
        } = company;

        const companyModal = {
            categories: category.categories,
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
                    type: 'company/resetcompany'
                });
                handleCancel();
            }
        };

        return (
            <AddForm
                {...companyModal}
                wrappedComponentRef={(formRef) => this.formRef = formRef}/>
        )
    }
}

const mapStateToProps = ({company, category, loading}) => {
    return {
        company,
        category,
        loading: loading.effects['company/create'] || loading.effects['company/update'],
    }
}

export default connect(mapStateToProps)(ModalForm);