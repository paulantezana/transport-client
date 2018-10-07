import React, { Component } from 'react';
import { Modal, Form, Input, Checkbox } from 'antd';
import { connect } from 'dva';

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};

const AddForm = Form.create()(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            const { visible, onCancel, onOk, form, confirmLoading, data } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    title="Empresa"
                    okText="Guardar"
                    confirmLoading={confirmLoading}
                    onCancel={onCancel}
                    onOk={onOk}
                    visible={visible}
                >
                    <Form layout="horizontal">
                        <Form.Item hasFeedback {...formItemLayout} label="Nombre">
                            {getFieldDecorator('name', {
                                initialValue: data.name,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Nombre" />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="Estado">
                            {getFieldDecorator('state', {
                                valuePropName: 'checked',
                                initialValue: data.state,
                            })(<Checkbox />)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    }
);

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleConfirm(modalType) {
        const {
            dispatch,
            vehicle: { currentItem },
        } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            dispatch({
                type: `vehicle/${modalType}`,
                payload: { ...values, id: currentItem.id },
            });
            form.resetFields();
        });
    }

    handleCancel() {
        const form = this.formRef.props.form;
        form.resetFields();
    }

    render() {
        const { handleConfirm, handleCancel } = this;

        const { dispatch, vehicle, loading } = this.props;

        // Recuperando stados y datos desde el modelo vehicle
        const { currentItem, modalType, modalVisible } = vehicle;

        const vehicleModal = {
            data: modalType == 'create' ? { state: true } : currentItem,
            disabled: modalType == 'detail',
            type: modalType,
            visible: modalVisible,
            confirmLoading: loading,
            onOk() {
                handleConfirm(modalType);
            },
            onCancel() {
                dispatch({
                    type: 'vehicle/resetVehicle',
                });
                handleCancel();
            },
        };

        return (
            <AddForm {...vehicleModal} wrappedComponentRef={formRef => (this.formRef = formRef)} />
        );
    }
}

const mapStateToProps = ({ vehicle, loading }) => {
    return {
        vehicle,
        loading: loading.effects['vehicle/create'] || loading.effects['vehicle/update'],
    };
};

export default connect(mapStateToProps)(ModalForm);
