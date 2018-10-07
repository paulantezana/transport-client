import React, { Component } from 'react';
import { Modal, Form, Input, InputNumber, Checkbox } from 'antd';
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
                    title="Ruta"
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
                        <Form.Item hasFeedback {...formItemLayout} label="Origen">
                            {getFieldDecorator('origin', {
                                initialValue: data.origin,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Origen" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Destino">
                            {getFieldDecorator('destination', {
                                initialValue: data.destination,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Destino" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Distancia">
                            {getFieldDecorator('distance', {
                                initialValue: data.distance,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Distancia" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Frecuencia">
                            {getFieldDecorator('frequency', {
                                initialValue: data.frequency,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<InputNumber placeholder="Nombre" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Velocidad comercial">
                            {getFieldDecorator('commercial_speed', {
                                initialValue: data.commercial_speed,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<InputNumber placeholder="Velocidad comercial" />)}
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
            journey: { currentItem },
        } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            dispatch({
                type: `journey/${modalType}`,
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

        const { dispatch, journey, loading } = this.props;

        // Recuperando stados y datos desde el modelo journey
        const { currentItem, modalType, modalVisible } = journey;

        const journeyModal = {
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
                    type: 'journey/resetJourney',
                });
                handleCancel();
            },
        };

        return (
            <AddForm {...journeyModal} wrappedComponentRef={formRef => (this.formRef = formRef)} />
        );
    }
}

const mapStateToProps = ({ journey, loading }) => {
    return {
        journey,
        loading: loading.effects['journey/create'] || loading.effects['journey/update'],
    };
};

export default connect(mapStateToProps)(ModalForm);
