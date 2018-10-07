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
                    title="Vehiculo"
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
                        <Form.Item hasFeedback {...formItemLayout} label="Placa">
                            {getFieldDecorator('license_plate', {
                                initialValue: data.license_plate,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Nombre" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Año fabricacion">
                            {getFieldDecorator('fabrication_year', {
                                initialValue: data.fabrication_year,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Año fabricacion" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Marca">
                            {getFieldDecorator('brand', {
                                initialValue: data.brand,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Marca" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Modelo">
                            {getFieldDecorator('model', {
                                initialValue: data.model,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Modelo" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Combustible">
                            {getFieldDecorator('combustible', {
                                initialValue: data.combustible,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Combustible" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Carroceria">
                            {getFieldDecorator('bodywork', {
                                initialValue: data.bodywork,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Carroceria" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Eje">
                            {getFieldDecorator('axis', {
                                initialValue: data.axis,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Eje" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Color">
                            {getFieldDecorator('color', {
                                initialValue: data.color,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Color" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Wheel">
                            {getFieldDecorator('wheel', {
                                initialValue: data.wheel,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Wheel" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Motor">
                            {getFieldDecorator('motors', {
                                initialValue: data.motors,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Motor" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Cilindros">
                            {getFieldDecorator('cylinders', {
                                initialValue: data.cylinders,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Cilindros" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Nº de serie chasis">
                            {getFieldDecorator('chassis_series', {
                                initialValue: data.chassis_series,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Nº de serie chasis" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Asientos">
                            {getFieldDecorator('seating', {
                                initialValue: data.seating,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Asientos" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Peso seco">
                            {getFieldDecorator('dry_weight', {
                                initialValue: data.dry_weight,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Peso seco" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Peso bruto">
                            {getFieldDecorator('gross_weight', {
                                initialValue: data.gross_weight,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Peso bruto" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Carga util">
                            {getFieldDecorator('useful_load', {
                                initialValue: data.useful_load,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Carga util" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Longitud">
                            {getFieldDecorator('length', {
                                initialValue: data.length,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Longitud" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Alto">
                            {getFieldDecorator('height', {
                                initialValue: data.height,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Alto" />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Ancho">
                            {getFieldDecorator('width', {
                                initialValue: data.width,
                                rules: [{ required: true, message: '¡Por favor un nombre!' }],
                            })(<Input placeholder="Ancho" />)}
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
