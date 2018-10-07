(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [14],
    {
        '8rKM': function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-company-detail\\-vehicle\\-list\\index-table',
                tableAlert: 'sn\\pages\\-company-detail\\-vehicle\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-company-detail\\-vehicle\\-list\\index-actions',
                delete: 'sn\\pages\\-company-detail\\-vehicle\\-list\\index-delete',
                update: 'sn\\pages\\-company-detail\\-vehicle\\-list\\index-update',
            };
        },
        Aq5h: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var o = l(a('bx4M'));
            a('Znn+');
            var r = l(a('ZTPi'));
            a('Pwec');
            var i = l(a('CtXQ')),
                u = l(a('lwsE')),
                d = l(a('W8MJ')),
                c = l(a('a1gu')),
                f = l(a('Nsbk')),
                s = l(a('7W2i')),
                p = n(a('q1tI')),
                m = a('MuoO'),
                h = (l(a('s4on')), a('Aeqt'), l(a('Fadk'))),
                y = l(a('YE2w')),
                v = l(a('zHco')),
                g = (function(e) {
                    function t(e) {
                        return (
                            (0, u.default)(this, t),
                            (0, c.default)(this, (0, f.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, s.default)(t, e),
                        (0, d.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.companyDetail,
                                        a = (e.setting, e.dispatch, t.currentCompany);
                                    return p.default.createElement(
                                        v.default,
                                        { title: 'Empresa: '.concat(a.name) },
                                        p.default.createElement(
                                            o.default,
                                            { bordered: !1 },
                                            p.default.createElement(
                                                r.default,
                                                { defaultActiveKey: '1' },
                                                p.default.createElement(
                                                    r.default.TabPane,
                                                    {
                                                        tab: p.default.createElement(
                                                            'span',
                                                            null,
                                                            p.default.createElement(i.default, {
                                                                type: 'user',
                                                            }),
                                                            'Vehiculos'
                                                        ),
                                                        key: '1',
                                                    },
                                                    p.default.createElement(h.default, null)
                                                ),
                                                p.default.createElement(
                                                    r.default.TabPane,
                                                    {
                                                        tab: p.default.createElement(
                                                            'span',
                                                            null,
                                                            p.default.createElement(i.default, {
                                                                type: 'user',
                                                            }),
                                                            'Ruta'
                                                        ),
                                                        key: '2',
                                                    },
                                                    p.default.createElement(y.default, null)
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.default.Component),
                k = function(e) {
                    var t = e.companyDetail,
                        a = e.global;
                    e.loading;
                    return { setting: a.setting, companyDetail: t };
                },
                E = (0, m.connect)(k)(g);
            t.default = E;
        },
        BwaT: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var o = l(a('MVZn')),
                r = l(a('PJYZ'));
            a('2qtc');
            var i = l(a('kLXV'));
            a('sRBo');
            var u = l(a('kaz8')),
                d = l(a('pVnL'));
            a('5NDa');
            var c = l(a('5rEg')),
                f = l(a('lwsE')),
                s = l(a('W8MJ')),
                p = l(a('a1gu')),
                m = l(a('Nsbk')),
                h = l(a('7W2i'));
            a('y8nQ');
            var y = l(a('Vl3Y')),
                v = n(a('q1tI')),
                g = a('MuoO'),
                k = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                E = y.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, f.default)(this, t),
                                (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
                                (a.state = {}),
                                a
                            );
                        }
                        return (
                            (0, h.default)(t, e),
                            (0, s.default)(t, [
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.visible,
                                            a = e.onCancel,
                                            n = e.onOk,
                                            l = e.form,
                                            o = e.confirmLoading,
                                            r = e.data,
                                            f = l.getFieldDecorator;
                                        return v.default.createElement(
                                            i.default,
                                            {
                                                title: 'Empresa',
                                                okText: 'Guardar',
                                                confirmLoading: o,
                                                onCancel: a,
                                                onOk: n,
                                                visible: t,
                                            },
                                            v.default.createElement(
                                                y.default,
                                                { layout: 'horizontal' },
                                                v.default.createElement(
                                                    y.default.Item,
                                                    (0, d.default)({ hasFeedback: !0 }, k, {
                                                        label: 'Nombre',
                                                    }),
                                                    f('name', {
                                                        initialValue: r.name,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        v.default.createElement(c.default, {
                                                            placeholder: 'Nombre',
                                                        })
                                                    )
                                                ),
                                                v.default.createElement(
                                                    y.default.Item,
                                                    (0, d.default)({}, k, { label: 'Estado' }),
                                                    f('state', {
                                                        valuePropName: 'checked',
                                                        initialValue: r.state,
                                                    })(v.default.createElement(u.default, null))
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(v.default.Component)
                ),
                C = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, r.default)((0, r.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, r.default)((0, r.default)(a))
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
                                        n = t.vehicle.currentItem,
                                        l = this.formRef.props.form;
                                    l.validateFields(function(t, r) {
                                        t ||
                                            (a({
                                                type: 'vehicle/'.concat(e),
                                                payload: (0, o.default)({}, r, { id: n.id }),
                                            }),
                                            l.resetFields());
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
                                        n = this.props,
                                        l = n.dispatch,
                                        o = n.vehicle,
                                        r = n.loading,
                                        i = o.currentItem,
                                        u = o.modalType,
                                        c = o.modalVisible,
                                        f = {
                                            data: 'create' == u ? { state: !0 } : i,
                                            disabled: 'detail' == u,
                                            type: u,
                                            visible: c,
                                            confirmLoading: r,
                                            onOk: function() {
                                                t(u);
                                            },
                                            onCancel: function() {
                                                l({ type: 'vehicle/resetVehicle' }), a();
                                            },
                                        };
                                    return v.default.createElement(
                                        E,
                                        (0, d.default)({}, f, {
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
                })(v.Component),
                b = function(e) {
                    var t = e.vehicle,
                        a = e.loading;
                    return {
                        vehicle: t,
                        loading: a.effects['vehicle/create'] || a.effects['vehicle/update'],
                    };
                },
                I = (0, g.connect)(b)(C);
            t.default = I;
        },
        DC8a: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-company-detail\\-journey\\-list\\index-table',
                tableAlert: 'sn\\pages\\-company-detail\\-journey\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-company-detail\\-journey\\-list\\index-actions',
                delete: 'sn\\pages\\-company-detail\\-journey\\-list\\index-delete',
                update: 'sn\\pages\\-company-detail\\-journey\\-list\\index-update',
            };
        },
        Fadk: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
            var o = l(a('2/Rp')),
                r = l(a('lwsE')),
                i = l(a('W8MJ')),
                u = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = l(a('PJYZ'));
            a('5NDa');
            var s = l(a('5rEg')),
                p = n(a('q1tI')),
                m = a('MuoO'),
                h = l(a('hGHv')),
                y = l(a('Haih')),
                v = l(a('BwaT')),
                g = s.default.Search,
                k = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, r.default)(this, t),
                            (a = (0, u.default)(this, (0, d.default)(t).call(this, e))),
                            (a.onQueryPaginateByCompanyID = a.onQueryPaginateByCompanyID.bind(
                                (0, f.default)((0, f.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, i.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.onQueryPaginateByCompanyID();
                                },
                            },
                            {
                                key: 'onQueryPaginateByCompanyID',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        n = t.vehicle.searchText;
                                    a({
                                        type: 'vehicle/paginateByCompanyID',
                                        payload: { search: e ? '' : n },
                                    });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        n = t.setting,
                                        l = t.vehicle,
                                        r = t.loadingPaginateByCompanyID,
                                        i = t.loadingUpdate,
                                        u = this.onQueryPaginateByCompanyID,
                                        d = l.list,
                                        c = l.total,
                                        f = l.current,
                                        s = l.searchText,
                                        m = (l.currentItem,
                                        {
                                            current: f,
                                            total: c,
                                            pageSize: n.item,
                                            dataSource: d,
                                            loadingPaginateByCompanyID: r,
                                            loadingUpdate: i,
                                            onPageChange: function(e) {
                                                a({
                                                    type: 'vehicle/paginateByCompanyID',
                                                    payload: { current_page: e, search: s },
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
                                                k(e, t);
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'vehicle/delete', payload: e });
                                            },
                                        }),
                                        k = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'vehicle/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            });
                                        },
                                        E = function(e) {
                                            a({ type: 'vehicle/setSearchText', payload: e });
                                        };
                                    return p.default.createElement(
                                        p.Fragment,
                                        null,
                                        p.default.createElement(
                                            'div',
                                            { className: h.default.header },
                                            p.default.createElement(
                                                o.default,
                                                {
                                                    icon: 'plus',
                                                    type: 'primary',
                                                    onClick: function() {
                                                        return k('create');
                                                    },
                                                },
                                                'Nuevo'
                                            ),
                                            p.default.createElement(o.default, {
                                                icon: 'reload',
                                                onClick: function() {
                                                    return e.onQueryPaginateByCompanyID();
                                                },
                                            }),
                                            p.default.createElement(g, {
                                                placeholder: 'Buscar vehicleo',
                                                value: s,
                                                onChange: function(e) {
                                                    return E(e.target.value);
                                                },
                                                onSearch: function(t) {
                                                    return e.onQueryPaginateByCompanyID();
                                                },
                                                style: { width: 200 },
                                            }),
                                            p.default.createElement(v.default, null)
                                        ),
                                        p.default.createElement(y.default, m)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.Component),
                E = function(e) {
                    var t = e.vehicle,
                        a = e.global,
                        n = e.loading;
                    return {
                        vehicle: t,
                        setting: a.setting,
                        loadingPaginateByCompanyID: n.effects['vehicle/paginateByCompanyID'],
                        loadingUpdate: n.effects['vehicle/update'],
                    };
                },
                C = (0, m.connect)(E)(k);
            t.default = C;
        },
        Haih: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DjyN');
            var o = l(a('NUBc'));
            a('qVdP');
            var r = l(a('jsC+'));
            a('lUTK');
            var i = l(a('BvKs'));
            a('Pwec');
            var u = l(a('CtXQ'));
            a('2qtc');
            var d = l(a('kLXV'));
            a('Awhp');
            var c = l(a('KrTs')),
                f = l(a('lwsE')),
                s = l(a('W8MJ')),
                p = l(a('a1gu')),
                m = l(a('Nsbk')),
                h = l(a('7W2i')),
                y = l(a('PJYZ')),
                v = n(a('q1tI')),
                g = (l(a('17x9')), l(a('CkN6'))),
                k = (l(a('8rKM')), l(a('oDxf'))),
                E = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, y.default)((0, y.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, y.default)((0, y.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, h.default)(t, e),
                        (0, s.default)(t, [
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
                                    var n = this.props,
                                        l = n.onPageChange,
                                        f = (n.onUpdate, n.onShowModalEdit),
                                        s = n.onDelete,
                                        p = n.dataSource,
                                        m = n.loadingPaginateByCompanyID,
                                        h = (n.loadingUpdate, n.total),
                                        y = n.pageSize,
                                        E = n.current,
                                        C = [
                                            {
                                                title: 'Estado',
                                                key: 'authorized',
                                                width: '60px',
                                                render: function(e, t) {
                                                    return e.authorized
                                                        ? v.default.createElement(c.default, {
                                                              status: 'success',
                                                          })
                                                        : v.default.createElement(c.default, {
                                                              status: 'error',
                                                          });
                                                },
                                            },
                                            { title: 'Nombre', dataIndex: 'name', key: 'name' },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    var a = v.default.createElement(
                                                        i.default,
                                                        null,
                                                        v.default.createElement(
                                                            i.default.Item,
                                                            {
                                                                key: '2',
                                                                onClick: function() {
                                                                    d.default.confirm({
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
                                                            },
                                                            v.default.createElement(u.default, {
                                                                type: 'delete',
                                                            }),
                                                            'Eliminar'
                                                        )
                                                    );
                                                    return v.default.createElement(
                                                        r.default.Button,
                                                        {
                                                            onClick: function() {
                                                                return f('update', e);
                                                            },
                                                            overlay: a,
                                                        },
                                                        'Editar'
                                                    );
                                                },
                                            },
                                        ];
                                    return v.default.createElement(
                                        'div',
                                        null,
                                        v.default.createElement(g.default, {
                                            columns: C,
                                            dataSource: p,
                                            loading: m,
                                            pagination: !1,
                                            onChange: this.onChange,
                                            minWidth: 800,
                                            rowKey: function(e) {
                                                return e.id;
                                            },
                                        }),
                                        v.default.createElement(k.default, null),
                                        v.default.createElement(o.default, {
                                            showQuickJumper: !0,
                                            total: h,
                                            pageSize: y,
                                            defaultCurrent: 1,
                                            current: E,
                                            showTotal: function(e) {
                                                return 'Total '.concat(e, ' items');
                                            },
                                            onChange: l,
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(v.Component),
                C = E;
            t.default = C;
        },
        O6o0: function(e, t, a) {
            e.exports = { header: 'sn\\pages\\-company-detail\\-journey\\index-header' };
        },
        OkzQ: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var o = l(a('MVZn')),
                r = l(a('PJYZ'));
            a('2qtc');
            var i = l(a('kLXV'));
            a('sRBo');
            var u = l(a('kaz8'));
            a('giR+');
            var d = l(a('fyUT')),
                c = l(a('pVnL'));
            a('5NDa');
            var f = l(a('5rEg')),
                s = l(a('lwsE')),
                p = l(a('W8MJ')),
                m = l(a('a1gu')),
                h = l(a('Nsbk')),
                y = l(a('7W2i'));
            a('y8nQ');
            var v = l(a('Vl3Y')),
                g = n(a('q1tI')),
                k = a('MuoO'),
                E = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                C = v.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, s.default)(this, t),
                                (a = (0, m.default)(this, (0, h.default)(t).call(this, e))),
                                (a.state = {}),
                                a
                            );
                        }
                        return (
                            (0, y.default)(t, e),
                            (0, p.default)(t, [
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.visible,
                                            a = e.onCancel,
                                            n = e.onOk,
                                            l = e.form,
                                            o = e.confirmLoading,
                                            r = e.data,
                                            s = l.getFieldDecorator;
                                        return g.default.createElement(
                                            i.default,
                                            {
                                                title: 'Ruta',
                                                okText: 'Guardar',
                                                confirmLoading: o,
                                                onCancel: a,
                                                onOk: n,
                                                visible: t,
                                            },
                                            g.default.createElement(
                                                v.default,
                                                { layout: 'horizontal' },
                                                g.default.createElement(
                                                    v.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Nombre',
                                                    }),
                                                    s('name', {
                                                        initialValue: r.name,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(f.default, {
                                                            placeholder: 'Nombre',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    v.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Origen',
                                                    }),
                                                    s('origin', {
                                                        initialValue: r.origin,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(f.default, {
                                                            placeholder: 'Origen',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    v.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Destino',
                                                    }),
                                                    s('destination', {
                                                        initialValue: r.destination,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(f.default, {
                                                            placeholder: 'Destino',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    v.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Distancia',
                                                    }),
                                                    s('distance', {
                                                        initialValue: r.distance,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(f.default, {
                                                            placeholder: 'Distancia',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    v.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Frecuencia',
                                                    }),
                                                    s('frequency', {
                                                        initialValue: r.frequency,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(d.default, {
                                                            placeholder: 'Nombre',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    v.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Velocidad comercial',
                                                    }),
                                                    s('commercial_speed', {
                                                        initialValue: r.commercial_speed,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(d.default, {
                                                            placeholder: 'Velocidad comercial',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    v.default.Item,
                                                    (0, c.default)({}, E, { label: 'Estado' }),
                                                    s('state', {
                                                        valuePropName: 'checked',
                                                        initialValue: r.state,
                                                    })(g.default.createElement(u.default, null))
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
                b = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, s.default)(this, t),
                            (a = (0, m.default)(this, (0, h.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, r.default)((0, r.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, r.default)((0, r.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, y.default)(t, e),
                        (0, p.default)(t, [
                            {
                                key: 'handleConfirm',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        n = t.journey.currentItem,
                                        l = this.formRef.props.form;
                                    l.validateFields(function(t, r) {
                                        t ||
                                            (a({
                                                type: 'journey/'.concat(e),
                                                payload: (0, o.default)({}, r, { id: n.id }),
                                            }),
                                            l.resetFields());
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
                                        n = this.props,
                                        l = n.dispatch,
                                        o = n.journey,
                                        r = n.loading,
                                        i = o.currentItem,
                                        u = o.modalType,
                                        d = o.modalVisible,
                                        f = {
                                            data: 'create' == u ? { state: !0 } : i,
                                            disabled: 'detail' == u,
                                            type: u,
                                            visible: d,
                                            confirmLoading: r,
                                            onOk: function() {
                                                t(u);
                                            },
                                            onCancel: function() {
                                                l({ type: 'journey/resetJourney' }), a();
                                            },
                                        };
                                    return g.default.createElement(
                                        C,
                                        (0, c.default)({}, f, {
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
                I = function(e) {
                    var t = e.journey,
                        a = e.loading;
                    return {
                        journey: t,
                        loading: a.effects['journey/create'] || a.effects['journey/update'],
                    };
                },
                D = (0, k.connect)(I)(b);
            t.default = D;
        },
        YE2w: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
            var o = l(a('2/Rp')),
                r = l(a('lwsE')),
                i = l(a('W8MJ')),
                u = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = l(a('PJYZ')),
                s = n(a('q1tI')),
                p = a('MuoO'),
                m = l(a('O6o0')),
                h = l(a('pegG')),
                y = l(a('OkzQ')),
                v = l(a('lRnk')),
                g = l(a('oDxf')),
                k = l(a('hKKi')),
                E = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, r.default)(this, t),
                            (a = (0, u.default)(this, (0, d.default)(t).call(this, e))),
                            (a.onQueryAllByCompanyID = a.onQueryAllByCompanyID.bind(
                                (0, f.default)((0, f.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, i.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.onQueryAllByCompanyID();
                                },
                            },
                            {
                                key: 'onQueryAllByCompanyID',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        n = t.journey.searchText;
                                    a({
                                        type: 'journey/allByCompanyID',
                                        payload: { search: e ? '' : n },
                                    });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        n = t.setting,
                                        l = t.journey,
                                        r = t.loadingAllByCompanyID,
                                        i = t.loadingUpdate,
                                        u = this.onQueryAllByCompanyID,
                                        d = l.list,
                                        c = l.total,
                                        f = l.current,
                                        p = l.searchText,
                                        E = (l.currentItem,
                                        {
                                            current: f,
                                            total: c,
                                            pageSize: n.item,
                                            dataSource: d,
                                            loadingAllByCompanyID: r,
                                            loadingUpdate: i,
                                            onPageChange: function(e) {
                                                a({
                                                    type: 'journey/allByCompanyID',
                                                    payload: { current_page: e, search: p },
                                                });
                                            },
                                            onClear: function() {
                                                a({ type: 'journey/setSearchText', payload: '' }),
                                                    u(!0);
                                            },
                                            onUpdate: function(e) {
                                                a({ type: 'journey/update', payload: e });
                                            },
                                            onShowModalEdit: function(e, t) {
                                                C(e, t);
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'journey/delete', payload: e });
                                            },
                                        }),
                                        C = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'journey/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            });
                                        },
                                        b = function() {
                                            a({
                                                type: 'journeyDetail/toggleModalUpload',
                                                payload: !0,
                                            });
                                        };
                                    return s.default.createElement(
                                        s.Fragment,
                                        null,
                                        s.default.createElement(h.default, E),
                                        s.default.createElement(
                                            'div',
                                            { className: m.default.header },
                                            s.default.createElement(
                                                o.default,
                                                {
                                                    icon: 'plus',
                                                    type: 'primary',
                                                    onClick: function() {
                                                        return C('create');
                                                    },
                                                },
                                                'Nuevo'
                                            ),
                                            s.default.createElement(o.default, {
                                                icon: 'reload',
                                                onClick: function() {
                                                    return e.onQueryAllByCompanyID();
                                                },
                                            }),
                                            s.default.createElement(y.default, null)
                                        ),
                                        s.default.createElement(v.default, null),
                                        s.default.createElement(g.default, null),
                                        s.default.createElement(
                                            o.default,
                                            {
                                                type: 'primary',
                                                icon: 'cloud-upload',
                                                onClick: function() {
                                                    return b();
                                                },
                                            },
                                            'Upload'
                                        ),
                                        s.default.createElement(k.default, null)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                C = function(e) {
                    var t = e.journey,
                        a = e.global,
                        n = e.loading;
                    return {
                        journey: t,
                        setting: a.setting,
                        loadingAllByCompanyID: n.effects['journey/allByCompanyID'],
                        loadingUpdate: n.effects['journey/update'],
                    };
                },
                b = (0, p.connect)(C)(E);
            t.default = b;
        },
        hGHv: function(e, t, a) {
            e.exports = { header: 'sn\\pages\\-company-detail\\-vehicle\\index-header' };
        },
        hKKi: function(e, t, a) {
            'use strict';
            var n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var l = n(a('kLXV'));
            a('Pwec');
            var o = n(a('CtXQ'));
            a('+L6B');
            var r = n(a('2/Rp'));
            a('/zsF');
            var i = n(a('PArb'));
            a('fOrg');
            var u = n(a('+KLJ')),
                d = n(a('lwsE')),
                c = n(a('W8MJ')),
                f = n(a('a1gu')),
                s = n(a('Nsbk')),
                p = n(a('7W2i'));
            a('DZo9');
            var m = n(a('8z0m')),
                h = n(a('q1tI')),
                y = a('MuoO'),
                v = m.default.Dragger,
                g = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, f.default)(this, (0, s.default)(t).call(this, e))),
                            (a.state = { file: null }),
                            a
                        );
                    }
                    return (
                        (0, p.default)(t, e),
                        (0, c.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.journeyDetail,
                                        n = t.dispatch,
                                        d = t.loading,
                                        c = a.modalUploadVisible,
                                        f = function() {
                                            n({
                                                type: 'journeyDetail/toggleModalUpload',
                                                payload: !1,
                                            });
                                        },
                                        s = {
                                            name: 'filestidents',
                                            uploading: d,
                                            accept:
                                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
                                            showUploadList: !1,
                                            beforeUpload: function(t) {
                                                return e.setState({ file: t }), !1;
                                            },
                                        },
                                        p = function() {
                                            n({
                                                type: 'journeyDetail/uploadJourneyDetail',
                                                payload: { file: e.state.file },
                                            });
                                        },
                                        m = function() {
                                            e.setState({ file: null });
                                        };
                                    return h.default.createElement(
                                        'div',
                                        null,
                                        h.default.createElement(
                                            l.default,
                                            {
                                                title: 'Basic Modal',
                                                visible: c,
                                                footer: null,
                                                onCancel: f,
                                            },
                                            this.state.file
                                                ? h.default.createElement(
                                                      'div',
                                                      null,
                                                      h.default.createElement(u.default, {
                                                          message: this.state.file.name,
                                                          type: 'info',
                                                          closable: !0,
                                                          onClose: function() {
                                                              return m();
                                                          },
                                                      }),
                                                      h.default.createElement(i.default, {
                                                          dashed: !0,
                                                      }),
                                                      h.default.createElement(
                                                          r.default,
                                                          {
                                                              type: 'primary',
                                                              loading: d,
                                                              icon: 'upload',
                                                              onClick: function() {
                                                                  return p();
                                                              },
                                                          },
                                                          ' Subir archivo'
                                                      )
                                                  )
                                                : h.default.createElement(
                                                      v,
                                                      s,
                                                      h.default.createElement(
                                                          'p',
                                                          { className: 'ant-upload-drag-icon' },
                                                          h.default.createElement(o.default, {
                                                              type: 'inbox',
                                                          })
                                                      ),
                                                      h.default.createElement(
                                                          'p',
                                                          { className: 'ant-upload-text' },
                                                          'Haga clic o arrastre el archivo a esta \xe1rea para cargar'
                                                      ),
                                                      h.default.createElement(
                                                          'p',
                                                          { className: 'ant-upload-hint' },
                                                          'Soporte para subir un solo archivo '
                                                      )
                                                  )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(h.default.Component),
                k = function(e) {
                    var t = e.journeyDetail,
                        a = (e.global, e.loading);
                    return {
                        journeyDetail: t,
                        loading: a.effects['journeyDetail/uploadjourneyDetails'],
                    };
                },
                E = (0, y.connect)(k)(g);
            t.default = E;
        },
        lRnk: function(e, t, a) {
            'use strict';
            var n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var l = n(a('lwsE')),
                o = n(a('W8MJ')),
                r = n(a('a1gu')),
                i = n(a('Nsbk')),
                u = n(a('7W2i')),
                d = n(a('PJYZ')),
                c = n(a('q1tI')),
                f = a('MnCE'),
                s = a('PQp+'),
                p = a('A8Wn'),
                m = (0, f.compose)(
                    (0, f.withProps)({
                        googleMapURL:
                            'https://maps.googleapis.com/maps/api/js?key=AIzaSyABQyZQtbDS8rDSrcR7ikMTBz_Rtv8pNv4&v=3.exp&libraries=geometry,drawing,places',
                        loadingElement: c.default.createElement('div', {
                            style: { height: '100%' },
                        }),
                        containerElement: c.default.createElement('div', {
                            style: { height: '75vh' },
                        }),
                        mapElement: c.default.createElement('div', { style: { height: '100%' } }),
                    }),
                    s.withScriptjs,
                    s.withGoogleMap,
                    (0, f.lifecycle)({
                        componentDidMount: function() {
                            var e = this,
                                t = new google.maps.DirectionsService();
                            t.route(
                                {
                                    origin: new google.maps.LatLng(-14.236181, -71.231494),
                                    destination: new google.maps.LatLng(-14.282332, -71.219851),
                                    travelMode: google.maps.TravelMode.DRIVING,
                                    waypoints: [
                                        {
                                            location: new google.maps.LatLng(
                                                -14.248244,
                                                -71.238827
                                            ),
                                            stopover: !1,
                                        },
                                        {
                                            location: new google.maps.LatLng(
                                                -14.258107,
                                                -71.228346
                                            ),
                                            stopover: !1,
                                        },
                                        {
                                            location: new google.maps.LatLng(
                                                -14.271588,
                                                -71.226526
                                            ),
                                            stopover: !1,
                                        },
                                        {
                                            location: new google.maps.LatLng(
                                                -14.277884,
                                                -71.229287
                                            ),
                                            stopover: !1,
                                        },
                                        {
                                            location: new google.maps.LatLng(
                                                -14.278513,
                                                -71.226337
                                            ),
                                            stopover: !1,
                                        },
                                        {
                                            location: new google.maps.LatLng(
                                                -14.278305,
                                                -71.225125
                                            ),
                                            stopover: !1,
                                        },
                                    ],
                                },
                                function(t, a) {
                                    a === google.maps.DirectionsStatus.OK
                                        ? e.setState({ directions: t })
                                        : console.error('error fetching directions '.concat(t));
                                }
                            );
                        },
                    })
                )(function(e) {
                    return c.default.createElement(
                        s.GoogleMap,
                        {
                            defaultZoom: 17,
                            defaultCenter: {
                                lat: e.locations[0].latitude,
                                lng: e.locations[0].longitude,
                            },
                        },
                        e.isMarkerShown &&
                            e.locations.map(function(e, t) {
                                return c.default.createElement(
                                    s.Marker,
                                    { key: t, position: { lat: e.latitude, lng: e.longitude } },
                                    c.default.createElement(
                                        p.InfoBox,
                                        null,
                                        c.default.createElement(
                                            'div',
                                            {
                                                style: {
                                                    backgroundColor: 'yellow',
                                                    opacity: 0.75,
                                                    padding: '4px',
                                                    width: '100px',
                                                },
                                            },
                                            c.default.createElement(
                                                'div',
                                                {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontColor: '#08233B',
                                                    },
                                                },
                                                e.name
                                            )
                                        )
                                    )
                                );
                            }),
                        ',',
                        e.directions &&
                            c.default.createElement(s.DirectionsRenderer, {
                                directions: e.directions,
                            })
                    );
                }),
                h = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, l.default)(this, t),
                            (a = (0, r.default)(this, (0, i.default)(t).call(this, e))),
                            (a.state = {
                                isMarkerShown: !1,
                                locations: [{ latitude: -14.253026, longitude: -71.230565 }],
                            }),
                            (a.handleMarkerClick = a.handleMarkerClick.bind(
                                (0, d.default)((0, d.default)(a))
                            )),
                            (a.delayedShowMarker = a.delayedShowMarker.bind(
                                (0, d.default)((0, d.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, u.default)(t, e),
                        (0, o.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.delayedShowMarker();
                                },
                            },
                            {
                                key: 'delayedShowMarker',
                                value: function() {
                                    var e = this;
                                    setTimeout(function() {
                                        e.setState({ isMarkerShown: !0 });
                                    }, 3e3);
                                },
                            },
                            {
                                key: 'handleMarkerClick',
                                value: function() {
                                    this.setState({ isMarkerShown: !1 }), this.delayedShowMarker();
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    return c.default.createElement(
                                        'div',
                                        null,
                                        c.default.createElement(m, {
                                            isMarkerShown: this.state.isMarkerShown,
                                            onMarkerClick: this.handleMarkerClick,
                                            locations: this.state.locations,
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(c.default.PureComponent),
                y = h;
            t.default = y;
        },
        pegG: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('qVdP');
            var o = l(a('jsC+'));
            a('lUTK');
            var r = l(a('BvKs'));
            a('Pwec');
            var i = l(a('CtXQ'));
            a('2qtc');
            var u = l(a('kLXV')),
                d = l(a('lwsE')),
                c = l(a('W8MJ')),
                f = l(a('a1gu')),
                s = l(a('Nsbk')),
                p = l(a('7W2i')),
                m = l(a('PJYZ')),
                h = n(a('q1tI')),
                y = (l(a('17x9')), l(a('CkN6'))),
                v = (l(a('DC8a')), l(a('oDxf'))),
                g = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, f.default)(this, (0, s.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, m.default)((0, m.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, m.default)((0, m.default)(a))
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
                                    var n = this.props,
                                        l = n.onShowModalEdit,
                                        d = n.onDelete,
                                        c = n.dataSource,
                                        f = n.loadingAllByCompanyID,
                                        s = [
                                            { title: 'Nombre', dataIndex: 'name', key: 'name' },
                                            { title: 'Origen', dataIndex: 'origin', key: 'origin' },
                                            {
                                                title: 'Destino',
                                                dataIndex: 'destination',
                                                key: 'destination',
                                            },
                                            {
                                                title: 'Distancia',
                                                dataIndex: 'distance',
                                                key: 'distance',
                                            },
                                            {
                                                title: 'Frecuencia',
                                                dataIndex: 'frequency',
                                                key: 'frequency',
                                            },
                                            {
                                                title: 'Velocidad comercial',
                                                dataIndex: 'commercial_speed',
                                                key: 'commercial_speed',
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    var a = h.default.createElement(
                                                        r.default,
                                                        null,
                                                        h.default.createElement(
                                                            r.default.Item,
                                                            {
                                                                key: '2',
                                                                onClick: function() {
                                                                    u.default.confirm({
                                                                        title:
                                                                            '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                        content: e.name,
                                                                        okText: 'SI',
                                                                        okType: 'danger',
                                                                        cancelText: 'NO',
                                                                        onOk: function() {
                                                                            d({ id: e.id });
                                                                        },
                                                                    });
                                                                },
                                                            },
                                                            h.default.createElement(i.default, {
                                                                type: 'delete',
                                                            }),
                                                            'Eliminar'
                                                        )
                                                    );
                                                    return h.default.createElement(
                                                        o.default.Button,
                                                        {
                                                            onClick: function() {
                                                                return l('update', e);
                                                            },
                                                            overlay: a,
                                                        },
                                                        'Editar'
                                                    );
                                                },
                                            },
                                        ];
                                    return h.default.createElement(
                                        'div',
                                        null,
                                        h.default.createElement(y.default, {
                                            columns: s,
                                            dataSource: c,
                                            loading: f,
                                            pagination: !1,
                                            onChange: this.onChange,
                                            minWidth: 800,
                                            rowKey: function(e) {
                                                return e.id;
                                            },
                                        }),
                                        h.default.createElement(v.default, null)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(h.Component),
                k = g;
            t.default = k;
        },
        s4on: function(e, t, a) {},
    },
]);
