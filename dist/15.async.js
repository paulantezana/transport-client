(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [15],
    {
        '8cv/': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var r = n(a('bx4M'));
            a('+L6B');
            var i = n(a('2/Rp')),
                d = n(a('lwsE')),
                o = n(a('W8MJ')),
                u = n(a('a1gu')),
                c = n(a('Nsbk')),
                f = n(a('7W2i')),
                s = n(a('PJYZ'));
            a('5NDa');
            var h = n(a('5rEg')),
                p = l(a('q1tI')),
                v = a('MuoO'),
                m = n(a('IKL8')),
                g = n(a('9+BK')),
                y = n(a('KUxa')),
                k = n(a('zHco')),
                C = h.default.Search,
                E = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, u.default)(this, (0, c.default)(t).call(this, e))),
                            (a.onQueryAll = a.onQueryAll.bind((0, s.default)((0, s.default)(a)))),
                            a
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, o.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.onQueryAll();
                                },
                            },
                            {
                                key: 'onQueryAll',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        l = t.vehicle.searchText;
                                    a({ type: 'vehicle/all', payload: { search: e ? '' : l } });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        l = t.setting,
                                        n = t.vehicle,
                                        d = t.loadingAll,
                                        o = t.loadingUpdate,
                                        u = this.onQueryAll,
                                        c = n.list,
                                        f = n.total,
                                        s = n.current,
                                        h = n.searchText,
                                        v = (n.currentItem,
                                        {
                                            current: s,
                                            total: f,
                                            pageSize: l.item,
                                            dataSource: c,
                                            loadingAll: d,
                                            loadingUpdate: o,
                                            onPageChange: function(e) {
                                                a({
                                                    type: 'vehicle/all',
                                                    payload: { current_page: e, search: h },
                                                });
                                            },
                                            onClear: function() {
                                                a({ type: 'vehicle/setSearchText', payload: '' }),
                                                    u(!0);
                                            },
                                            onUpdate: function(e) {
                                                a({ type: 'vehicle/update', payload: e });
                                            },
                                            onShowModalEdit: function(e, t) {
                                                E(e, t);
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'vehicle/delete', payload: e });
                                            },
                                        }),
                                        E = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'vehicle/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            });
                                        },
                                        b = function(e) {
                                            a({ type: 'vehicle/setSearchText', payload: e });
                                        };
                                    return p.default.createElement(
                                        k.default,
                                        { title: 'Vehiculos' },
                                        p.default.createElement(
                                            r.default,
                                            { bordered: !1 },
                                            p.default.createElement(
                                                'div',
                                                { className: m.default.header },
                                                p.default.createElement(
                                                    i.default,
                                                    {
                                                        icon: 'plus',
                                                        type: 'primary',
                                                        onClick: function() {
                                                            return E('create');
                                                        },
                                                    },
                                                    'Nuevo'
                                                ),
                                                p.default.createElement(i.default, {
                                                    icon: 'reload',
                                                    onClick: function() {
                                                        return e.onQueryAll();
                                                    },
                                                }),
                                                p.default.createElement(C, {
                                                    placeholder: 'Buscar vehicleo',
                                                    value: h,
                                                    onChange: function(e) {
                                                        return b(e.target.value);
                                                    },
                                                    onSearch: function(t) {
                                                        return e.onQueryAll();
                                                    },
                                                    style: { width: 200 },
                                                }),
                                                p.default.createElement(y.default, null)
                                            ),
                                            p.default.createElement(g.default, v)
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.Component),
                b = function(e) {
                    var t = e.vehicle,
                        a = e.global,
                        l = e.loading;
                    return {
                        vehicle: t,
                        setting: a.setting,
                        loadingAll: l.effects['vehicle/all'],
                        loadingUpdate: l.effects['vehicle/update'],
                    };
                },
                x = (0, v.connect)(b)(E);
            t.default = x;
        },
        '9+BK': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DjyN');
            var r = n(a('NUBc'));
            a('2qtc');
            var i = n(a('kLXV'));
            a('5Dmo');
            var d = n(a('3S7+'));
            a('Pwec');
            var o = n(a('CtXQ'));
            a('BoS7');
            var u = n(a('Sdc0')),
                c = n(a('lwsE')),
                f = n(a('W8MJ')),
                s = n(a('a1gu')),
                h = n(a('Nsbk')),
                p = n(a('7W2i')),
                v = n(a('PJYZ')),
                m = l(a('q1tI')),
                g = (n(a('17x9')), n(a('CkN6'))),
                y = n(a('QgsC')),
                k = n(a('oDxf')),
                C = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, c.default)(this, t),
                            (a = (0, s.default)(this, (0, h.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, v.default)((0, v.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, v.default)((0, v.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, p.default)(t, e),
                        (0, f.default)(t, [
                            {
                                key: 'onChange',
                                value: function(e, t, a) {
                                    this.setState({ sortedInfo: a, filteredInfo: t });
                                },
                            },
                            {
                                key: 'clearAllFilters',
                                value: function() {
                                    this.setState({ sortedInfo: null, filteredInfo: null }),
                                        this.props.onClear();
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.state,
                                        t = e.sortedInfo,
                                        a = e.filteredInfo;
                                    (t = t || {}), (a = a || {});
                                    var l = this.props,
                                        n = l.onPageChange,
                                        c = l.onUpdate,
                                        f = l.onShowModalEdit,
                                        s = l.onDelete,
                                        h = l.dataSource,
                                        p = l.loadingAll,
                                        v = l.loadingUpdate,
                                        C = l.total,
                                        E = l.pageSize,
                                        b = l.current,
                                        x = [
                                            { title: 'Nombre', dataIndex: 'name', key: 'name' },
                                            { title: 'Clave', dataIndex: 'key', key: 'key' },
                                            {
                                                title: 'Conductor',
                                                dataIndex: 'driver',
                                                key: 'driver',
                                            },
                                            {
                                                title: 'Estado',
                                                key: 'state',
                                                width: '60px',
                                                render: function(e, t) {
                                                    return m.default.createElement(u.default, {
                                                        size: 'small',
                                                        loading: v,
                                                        checked: e.state,
                                                        onChange: function(t) {
                                                            return c({ id: e.id, state: t });
                                                        },
                                                    });
                                                },
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    return m.default.createElement(
                                                        'div',
                                                        { className: y.default.actions },
                                                        m.default.createElement(
                                                            d.default,
                                                            { title: 'Editar' },
                                                            m.default.createElement(o.default, {
                                                                type: 'edit',
                                                                className: y.default.update,
                                                                onClick: function() {
                                                                    return f('update', e);
                                                                },
                                                            })
                                                        ),
                                                        m.default.createElement(
                                                            d.default,
                                                            { title: 'Eliminar' },
                                                            m.default.createElement(o.default, {
                                                                type: 'delete',
                                                                className: y.default.delete,
                                                                onClick: function() {
                                                                    i.default.confirm({
                                                                        title:
                                                                            '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                        content: e.name,
                                                                        okText: 'SI',
                                                                        okType: 'danger',
                                                                        cancelText: 'NO',
                                                                        onOk: function() {
                                                                            s({ id: e.id });
                                                                        },
                                                                    });
                                                                },
                                                            })
                                                        )
                                                    );
                                                },
                                            },
                                        ];
                                    return m.default.createElement(
                                        'div',
                                        null,
                                        m.default.createElement(g.default, {
                                            columns: x,
                                            dataSource: h,
                                            loading: p,
                                            pagination: !1,
                                            onChange: this.onChange,
                                            minWidth: 800,
                                            rowKey: function(e) {
                                                return e.id;
                                            },
                                        }),
                                        m.default.createElement(k.default, null),
                                        m.default.createElement(r.default, {
                                            showQuickJumper: !0,
                                            total: C,
                                            pageSize: E,
                                            defaultCurrent: 1,
                                            current: b,
                                            showTotal: function(e) {
                                                return 'Total '.concat(e, ' items');
                                            },
                                            onChange: n,
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component),
                E = C;
            t.default = E;
        },
        IKL8: function(e, t, a) {
            e.exports = { header: 'sn\\pages\\-vehicle\\index-header' };
        },
        KUxa: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var r = n(a('MVZn')),
                i = n(a('PJYZ'));
            a('2qtc');
            var d = n(a('kLXV'));
            a('sRBo');
            var o = n(a('kaz8')),
                u = n(a('pVnL'));
            a('5NDa');
            var c = n(a('5rEg')),
                f = n(a('lwsE')),
                s = n(a('W8MJ')),
                h = n(a('a1gu')),
                p = n(a('Nsbk')),
                v = n(a('7W2i'));
            a('y8nQ');
            var m = n(a('Vl3Y')),
                g = l(a('q1tI')),
                y = a('MuoO'),
                k = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                C = m.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, f.default)(this, t),
                                (a = (0, h.default)(this, (0, p.default)(t).call(this, e))),
                                (a.state = {}),
                                a
                            );
                        }
                        return (
                            (0, v.default)(t, e),
                            (0, s.default)(t, [
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.visible,
                                            a = e.onCancel,
                                            l = e.onOk,
                                            n = e.form,
                                            r = e.confirmLoading,
                                            i = e.data,
                                            f = n.getFieldDecorator;
                                        return g.default.createElement(
                                            d.default,
                                            {
                                                title: 'Empresa',
                                                okText: 'Guardar',
                                                confirmLoading: r,
                                                onCancel: a,
                                                onOk: l,
                                                visible: t,
                                            },
                                            g.default.createElement(
                                                m.default,
                                                { layout: 'horizontal' },
                                                g.default.createElement(
                                                    m.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, k, {
                                                        label: 'Nombre',
                                                    }),
                                                    f('name', {
                                                        initialValue: i.name,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(c.default, {
                                                            placeholder: 'Nombre',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    m.default.Item,
                                                    (0, u.default)({}, k, { label: 'Estado' }),
                                                    f('state', {
                                                        valuePropName: 'checked',
                                                        initialValue: i.state,
                                                    })(g.default.createElement(o.default, null))
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(g.default.Component)
                ),
                E = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, h.default)(this, (0, p.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, i.default)((0, i.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, i.default)((0, i.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, v.default)(t, e),
                        (0, s.default)(t, [
                            {
                                key: 'handleConfirm',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        l = t.vehicle.currentItem,
                                        n = this.formRef.props.form;
                                    n.validateFields(function(t, i) {
                                        t ||
                                            (a({
                                                type: 'vehicle/'.concat(e),
                                                payload: (0, r.default)({}, i, { id: l.id }),
                                            }),
                                            n.resetFields());
                                    });
                                },
                            },
                            {
                                key: 'handleCancel',
                                value: function() {
                                    var e = this.formRef.props.form;
                                    e.resetFields();
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.handleConfirm,
                                        a = this.handleCancel,
                                        l = this.props,
                                        n = l.dispatch,
                                        r = l.vehicle,
                                        i = l.loading,
                                        d = r.currentItem,
                                        o = r.modalType,
                                        c = r.modalVisible,
                                        f = {
                                            data: 'create' == o ? { state: !0 } : d,
                                            disabled: 'detail' == o,
                                            type: o,
                                            visible: c,
                                            confirmLoading: i,
                                            onOk: function() {
                                                t(o);
                                            },
                                            onCancel: function() {
                                                n({ type: 'vehicle/resetVehicle' }), a();
                                            },
                                        };
                                    return g.default.createElement(
                                        C,
                                        (0, u.default)({}, f, {
                                            wrappedComponentRef: function(t) {
                                                return (e.formRef = t);
                                            },
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(g.Component),
                b = function(e) {
                    var t = e.vehicle,
                        a = e.loading;
                    return {
                        vehicle: t,
                        loading: a.effects['vehicle/create'] || a.effects['vehicle/update'],
                    };
                },
                x = (0, y.connect)(b)(E);
            t.default = x;
        },
        QgsC: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-vehicle\\-list\\index-table',
                tableAlert: 'sn\\pages\\-vehicle\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-vehicle\\-list\\index-actions',
                delete: 'sn\\pages\\-vehicle\\-list\\index-delete',
                update: 'sn\\pages\\-vehicle\\-list\\index-update',
            };
        },
    },
]);
