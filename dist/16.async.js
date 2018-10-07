(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [16],
    {
        '6IZh': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var o = n(a('bx4M'));
            a('+L6B');
            var r = n(a('2/Rp')),
                d = n(a('lwsE')),
                i = n(a('W8MJ')),
                u = n(a('a1gu')),
                f = n(a('Nsbk')),
                c = n(a('7W2i')),
                s = n(a('PJYZ'));
            a('5NDa');
            var m = n(a('5rEg')),
                p = l(a('q1tI')),
                h = a('MuoO'),
                b = n(a('IlGw')),
                v = n(a('m6xo')),
                y = n(a('JMmb')),
                g = n(a('zHco')),
                k = m.default.Search,
                C = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, u.default)(this, (0, f.default)(t).call(this, e))),
                            (a.onQueryAll = a.onQueryAll.bind((0, s.default)((0, s.default)(a)))),
                            a
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, i.default)(t, [
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
                                        l = t.mobile.searchText;
                                    a({ type: 'mobile/all', payload: { search: e ? '' : l } });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        l = t.setting,
                                        n = t.mobile,
                                        d = t.loadingAll,
                                        i = t.loadingUpdate,
                                        u = this.onQueryAll,
                                        f = n.list,
                                        c = n.total,
                                        s = n.current,
                                        m = n.searchText,
                                        h = (n.currentItem,
                                        {
                                            current: s,
                                            total: c,
                                            pageSize: l.item,
                                            dataSource: f,
                                            loadingAll: d,
                                            loadingUpdate: i,
                                            onPageChange: function(e) {
                                                a({
                                                    type: 'mobile/all',
                                                    payload: { current_page: e, search: m },
                                                });
                                            },
                                            onClear: function() {
                                                a({ type: 'mobile/setSearchText', payload: '' }),
                                                    u(!0);
                                            },
                                            onUpdate: function(e) {
                                                a({ type: 'mobile/update', payload: e });
                                            },
                                            onShowModalEdit: function(e, t) {
                                                C(e, t);
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'mobile/delete', payload: e });
                                            },
                                        }),
                                        C = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'mobile/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            });
                                        },
                                        E = function(e) {
                                            a({ type: 'mobile/setSearchText', payload: e });
                                        };
                                    return p.default.createElement(
                                        g.default,
                                        { title: 'Mobil' },
                                        p.default.createElement(
                                            o.default,
                                            { bordered: !1 },
                                            p.default.createElement(
                                                'div',
                                                { className: b.default.header },
                                                p.default.createElement(
                                                    r.default,
                                                    {
                                                        icon: 'plus',
                                                        type: 'primary',
                                                        onClick: function() {
                                                            return C('create');
                                                        },
                                                    },
                                                    'Nuevo'
                                                ),
                                                p.default.createElement(r.default, {
                                                    icon: 'reload',
                                                    onClick: function() {
                                                        return e.onQueryAll();
                                                    },
                                                }),
                                                p.default.createElement(k, {
                                                    placeholder: 'Buscar mobileo',
                                                    value: m,
                                                    onChange: function(e) {
                                                        return E(e.target.value);
                                                    },
                                                    onSearch: function(t) {
                                                        return e.onQueryAll();
                                                    },
                                                    style: { width: 200 },
                                                }),
                                                p.default.createElement(y.default, null)
                                            ),
                                            p.default.createElement(v.default, h)
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.Component),
                E = function(e) {
                    var t = e.mobile,
                        a = e.global,
                        l = e.loading;
                    return {
                        mobile: t,
                        setting: a.setting,
                        loadingAll: l.effects['mobile/all'],
                        loadingUpdate: l.effects['mobile/update'],
                    };
                },
                I = (0, h.connect)(E)(C);
            t.default = I;
        },
        IlGw: function(e, t, a) {
            e.exports = { header: 'sn\\pages\\-mobile\\index-header' };
        },
        JMmb: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var o = n(a('MVZn'));
            a('2qtc');
            var r = n(a('kLXV'));
            a('sRBo');
            var d = n(a('kaz8'));
            a('Pwec');
            var i = n(a('CtXQ')),
                u = n(a('pVnL'));
            a('5NDa');
            var f = n(a('5rEg')),
                c = n(a('lwsE')),
                s = n(a('W8MJ')),
                m = n(a('a1gu')),
                p = n(a('Nsbk')),
                h = n(a('7W2i')),
                b = n(a('PJYZ'));
            a('y8nQ');
            var v = n(a('Vl3Y')),
                y = l(a('q1tI')),
                g = a('MuoO'),
                k = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                C = v.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, c.default)(this, t),
                                (a = (0, m.default)(this, (0, p.default)(t).call(this, e))),
                                (a.state = {}),
                                (a.generateKey = a.generateKey.bind(
                                    (0, b.default)((0, b.default)(a))
                                )),
                                a
                            );
                        }
                        return (
                            (0, h.default)(t, e),
                            (0, s.default)(t, [
                                {
                                    key: 'generateKey',
                                    value: function() {
                                        var e = Math.random()
                                            .toString(36)
                                            .slice(-8);
                                        this.props.form.setFieldsValue({ key: e.toUpperCase() });
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.visible,
                                            a = e.onCancel,
                                            l = e.onOk,
                                            n = e.form,
                                            o = e.confirmLoading,
                                            c = e.data,
                                            s = n.getFieldDecorator;
                                        return y.default.createElement(
                                            r.default,
                                            {
                                                title: 'Mobil',
                                                okText: 'Guardar',
                                                confirmLoading: o,
                                                onCancel: a,
                                                onOk: l,
                                                visible: t,
                                            },
                                            y.default.createElement(
                                                v.default,
                                                { layout: 'horizontal' },
                                                y.default.createElement(
                                                    v.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, k, {
                                                        label: 'Nombre',
                                                    }),
                                                    s('name', {
                                                        initialValue: c.name,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        y.default.createElement(f.default, {
                                                            placeholder: 'Nombre',
                                                        })
                                                    )
                                                ),
                                                y.default.createElement(
                                                    v.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, k, {
                                                        label: 'Conductor',
                                                    }),
                                                    s('driver', { initialValue: c.driver })(
                                                        y.default.createElement(f.default, {
                                                            placeholder: 'Conductor',
                                                        })
                                                    )
                                                ),
                                                y.default.createElement(
                                                    v.default.Item,
                                                    (0, u.default)({}, k, { label: 'Clave' }),
                                                    s('key', { initialValue: c.key })(
                                                        y.default.createElement(f.default, {
                                                            addonAfter: y.default.createElement(
                                                                i.default,
                                                                {
                                                                    type: 'lock',
                                                                    onClick: this.generateKey,
                                                                }
                                                            ),
                                                            placeholder: 'Clave',
                                                        })
                                                    )
                                                ),
                                                y.default.createElement(
                                                    v.default.Item,
                                                    (0, u.default)({}, k, { label: 'Estado' }),
                                                    s('state', {
                                                        valuePropName: 'checked',
                                                        initialValue: c.state,
                                                    })(y.default.createElement(d.default, null))
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(y.default.Component)
                ),
                E = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, c.default)(this, t),
                            (a = (0, m.default)(this, (0, p.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, b.default)((0, b.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, b.default)((0, b.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, h.default)(t, e),
                        (0, s.default)(t, [
                            {
                                key: 'handleConfirm',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        l = t.mobile.currentItem,
                                        n = this.formRef.props.form;
                                    n.validateFields(function(t, r) {
                                        t ||
                                            (a({
                                                type: 'mobile/'.concat(e),
                                                payload: (0, o.default)({}, r, { id: l.id }),
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
                                        o = l.mobile,
                                        r = l.loading,
                                        d = o.currentItem,
                                        i = o.modalType,
                                        f = o.modalVisible,
                                        c = {
                                            data: 'create' == i ? { state: !0 } : d,
                                            disabled: 'detail' == i,
                                            type: i,
                                            visible: f,
                                            confirmLoading: r,
                                            onOk: function() {
                                                t(i);
                                            },
                                            onCancel: function() {
                                                n({ type: 'mobile/resetmobile' }), a();
                                            },
                                        };
                                    return y.default.createElement(
                                        C,
                                        (0, u.default)({}, c, {
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
                })(y.Component),
                I = function(e) {
                    var t = e.mobile,
                        a = e.loading;
                    return {
                        mobile: t,
                        loading: a.effects['mobile/create'] || a.effects['mobile/update'],
                    };
                },
                x = (0, g.connect)(I)(E);
            t.default = x;
        },
        O4YI: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-mobile\\-list\\index-table',
                tableAlert: 'sn\\pages\\-mobile\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-mobile\\-list\\index-actions',
                delete: 'sn\\pages\\-mobile\\-list\\index-delete',
                update: 'sn\\pages\\-mobile\\-list\\index-update',
            };
        },
        m6xo: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DjyN');
            var o = n(a('NUBc'));
            a('2qtc');
            var r = n(a('kLXV'));
            a('5Dmo');
            var d = n(a('3S7+'));
            a('Pwec');
            var i = n(a('CtXQ'));
            a('BoS7');
            var u = n(a('Sdc0')),
                f = n(a('lwsE')),
                c = n(a('W8MJ')),
                s = n(a('a1gu')),
                m = n(a('Nsbk')),
                p = n(a('7W2i')),
                h = n(a('PJYZ')),
                b = l(a('q1tI')),
                v = (n(a('17x9')), n(a('CkN6'))),
                y = n(a('O4YI')),
                g = n(a('oDxf')),
                k = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, s.default)(this, (0, m.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, h.default)((0, h.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, h.default)((0, h.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, p.default)(t, e),
                        (0, c.default)(t, [
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
                                        f = l.onUpdate,
                                        c = l.onShowModalEdit,
                                        s = l.onDelete,
                                        m = l.dataSource,
                                        p = l.loadingAll,
                                        h = l.loadingUpdate,
                                        k = l.total,
                                        C = l.pageSize,
                                        E = l.current,
                                        I = [
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
                                                    return b.default.createElement(u.default, {
                                                        size: 'small',
                                                        loading: h,
                                                        checked: e.state,
                                                        onChange: function(t) {
                                                            return f({ id: e.id, state: t });
                                                        },
                                                    });
                                                },
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    return b.default.createElement(
                                                        'div',
                                                        { className: y.default.actions },
                                                        b.default.createElement(
                                                            d.default,
                                                            { title: 'Editar' },
                                                            b.default.createElement(i.default, {
                                                                type: 'edit',
                                                                className: y.default.update,
                                                                onClick: function() {
                                                                    return c('update', e);
                                                                },
                                                            })
                                                        ),
                                                        b.default.createElement(
                                                            d.default,
                                                            { title: 'Eliminar' },
                                                            b.default.createElement(i.default, {
                                                                type: 'delete',
                                                                className: y.default.delete,
                                                                onClick: function() {
                                                                    r.default.confirm({
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
                                    return b.default.createElement(
                                        'div',
                                        null,
                                        b.default.createElement(v.default, {
                                            columns: I,
                                            dataSource: m,
                                            loading: p,
                                            pagination: !1,
                                            onChange: this.onChange,
                                            minWidth: 800,
                                            rowKey: function(e) {
                                                return e.id;
                                            },
                                        }),
                                        b.default.createElement(g.default, null),
                                        b.default.createElement(o.default, {
                                            showQuickJumper: !0,
                                            total: k,
                                            pageSize: C,
                                            defaultCurrent: 1,
                                            current: E,
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
                })(b.Component),
                C = k;
            t.default = C;
        },
    },
]);
