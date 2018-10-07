(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [13],
    {
        AZLW: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-company\\-list\\index-table',
                tableAlert: 'sn\\pages\\-company\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-company\\-list\\index-actions',
                delete: 'sn\\pages\\-company\\-list\\index-delete',
                update: 'sn\\pages\\-company\\-list\\index-update',
            };
        },
        Gqzq: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DjyN');
            var r = l(a('NUBc'));
            a('qVdP');
            var d = l(a('jsC+'));
            a('2qtc');
            var o = l(a('kLXV'));
            a('lUTK');
            var u = l(a('BvKs'));
            a('Pwec');
            var c = l(a('CtXQ'));
            a('BoS7');
            var i = l(a('Sdc0')),
                f = l(a('lwsE')),
                s = l(a('W8MJ')),
                p = l(a('a1gu')),
                m = l(a('Nsbk')),
                y = l(a('7W2i')),
                h = l(a('PJYZ')),
                g = n(a('q1tI')),
                v = (l(a('17x9')), l(a('CkN6'))),
                E = (l(a('AZLW')), l(a('oDxf'))),
                k = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, h.default)((0, h.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, h.default)((0, h.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, y.default)(t, e),
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
                                        f = n.onUpdate,
                                        s = n.onShowModalEdit,
                                        p = n.onDelete,
                                        m = n.onDetail,
                                        y = n.dataSource,
                                        h = n.loadingAll,
                                        k = n.loadingUpdate,
                                        C = n.total,
                                        b = n.pageSize,
                                        x = n.current,
                                        I = [
                                            { title: 'Nombre', dataIndex: 'name', key: 'name' },
                                            { title: 'Clave', dataIndex: 'key', key: 'key' },
                                            {
                                                title: 'Conductor',
                                                dataIndex: 'driver',
                                                key: 'driver',
                                            },
                                            {
                                                title: 'ST',
                                                key: 'state',
                                                width: '40px',
                                                render: function(e, t) {
                                                    return g.default.createElement(i.default, {
                                                        size: 'small',
                                                        loading: k,
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
                                                    var a = g.default.createElement(
                                                        u.default,
                                                        null,
                                                        g.default.createElement(
                                                            u.default.Item,
                                                            {
                                                                key: '1',
                                                                onClick: function() {
                                                                    return s('update', e);
                                                                },
                                                            },
                                                            g.default.createElement(c.default, {
                                                                type: 'edit',
                                                            }),
                                                            'Editar'
                                                        ),
                                                        g.default.createElement(
                                                            u.default.Item,
                                                            {
                                                                key: '2',
                                                                onClick: function() {
                                                                    o.default.confirm({
                                                                        title:
                                                                            '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                        content: e.name,
                                                                        okText: 'SI',
                                                                        okType: 'danger',
                                                                        cancelText: 'NO',
                                                                        onOk: function() {
                                                                            p({ id: e.id });
                                                                        },
                                                                    });
                                                                },
                                                            },
                                                            g.default.createElement(c.default, {
                                                                type: 'delete',
                                                            }),
                                                            'Eliminar'
                                                        )
                                                    );
                                                    return g.default.createElement(
                                                        d.default.Button,
                                                        {
                                                            onClick: function() {
                                                                return m(e.id);
                                                            },
                                                            overlay: a,
                                                        },
                                                        'Detalles'
                                                    );
                                                },
                                            },
                                        ];
                                    return g.default.createElement(
                                        'div',
                                        null,
                                        g.default.createElement(v.default, {
                                            columns: I,
                                            dataSource: y,
                                            loading: h,
                                            pagination: !1,
                                            onChange: this.onChange,
                                            minWidth: 800,
                                            rowKey: function(e) {
                                                return e.id;
                                            },
                                        }),
                                        g.default.createElement(E.default, null),
                                        g.default.createElement(r.default, {
                                            showQuickJumper: !0,
                                            total: C,
                                            pageSize: b,
                                            defaultCurrent: 1,
                                            current: x,
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
                })(g.Component),
                C = k;
            t.default = C;
        },
        WfX8: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
            var r = l(a('2/Rp')),
                d = l(a('lwsE')),
                o = l(a('W8MJ')),
                u = l(a('a1gu')),
                c = l(a('Nsbk')),
                i = l(a('7W2i')),
                f = l(a('PJYZ'));
            a('ozfa');
            var s = l(a('MJZm')),
                p = n(a('q1tI')),
                m = a('MuoO'),
                y = l(a('sP1z')),
                h = l(a('oDxf')),
                g = s.default.TreeNode,
                v = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, u.default)(this, (0, c.default)(t).call(this, e))),
                            (a.state = {
                                expandedKeys: [],
                                autoExpandParent: !0,
                                checkedKeys: [],
                                selectedKeys: [],
                            }),
                            (a.onExpand = a.onExpand.bind((0, f.default)((0, f.default)(a)))),
                            (a.onCheck = a.onCheck.bind((0, f.default)((0, f.default)(a)))),
                            (a.onSelect = a.onSelect.bind((0, f.default)((0, f.default)(a)))),
                            (a.renderTreeNodes = a.renderTreeNodes.bind(
                                (0, f.default)((0, f.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, i.default)(t, e),
                        (0, o.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var e = this.props.dispatch;
                                    e({ type: 'category/all', payload: { tree: !0 } });
                                },
                            },
                            {
                                key: 'onExpand',
                                value: function(e) {
                                    console.log('onExpand', e),
                                        this.setState({ expandedKeys: e, autoExpandParent: !1 });
                                },
                            },
                            {
                                key: 'onCheck',
                                value: function(e) {
                                    console.log('onCheck', e), this.setState({ checkedKeys: e });
                                },
                            },
                            {
                                key: 'onSelect',
                                value: function(e, t) {
                                    console.log('onSelect', t), this.setState({ selectedKeys: e });
                                },
                            },
                            {
                                key: 'renderTreeNodes',
                                value: function(e) {
                                    var t = this;
                                    return e.map(function(e) {
                                        return e.children
                                            ? p.default.createElement(
                                                  g,
                                                  { title: e.name, key: e.id, dataRef: e },
                                                  t.renderTreeNodes(e.children)
                                              )
                                            : p.default.createElement(g, e);
                                    });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.category,
                                        a = e.dispatch;
                                    return p.default.createElement(
                                        p.Fragment,
                                        null,
                                        p.default.createElement(
                                            r.default.Group,
                                            null,
                                            p.default.createElement(r.default, {
                                                icon: 'plus',
                                                onClick: function() {
                                                    a({
                                                        type: 'category/showModal',
                                                        payload: {
                                                            currentItem: {},
                                                            modalType: 'create',
                                                        },
                                                    }),
                                                        a({
                                                            type: 'category/all',
                                                            payload: { tree: !1 },
                                                        });
                                                },
                                            }),
                                            p.default.createElement(y.default, null),
                                            p.default.createElement(r.default, {
                                                icon: 'reload',
                                                onClick: function() {
                                                    a({ type: 'category/tree' });
                                                },
                                            })
                                        ),
                                        p.default.createElement(h.default, null),
                                        p.default.createElement(
                                            s.default,
                                            {
                                                checkable: !0,
                                                onExpand: this.onExpand,
                                                expandedKeys: this.state.expandedKeys,
                                                autoExpandParent: this.state.autoExpandParent,
                                                onCheck: this.onCheck,
                                                checkedKeys: this.state.checkedKeys,
                                                onSelect: this.onSelect,
                                                selectedKeys: this.state.selectedKeys,
                                            },
                                            this.renderTreeNodes(t.list)
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.default.Component),
                E = function(e) {
                    var t = e.category,
                        a = (e.global, e.loading);
                    return { category: t, loadingPaginate: a.effects['category/all'] };
                },
                k = (0, m.connect)(E)(v);
            t.default = k;
        },
        eRjF: function(e, t, a) {
            e.exports = {
                header: 'sn\\pages\\-company\\index-header',
                container: 'sn\\pages\\-company\\index-container',
                left: 'sn\\pages\\-company\\index-left',
                right: 'sn\\pages\\-company\\index-right',
            };
        },
        iMm1: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var r = l(a('MVZn')),
                d = l(a('PJYZ'));
            a('2qtc');
            var o = l(a('kLXV'));
            a('sRBo');
            var u = l(a('kaz8')),
                c = l(a('pVnL'));
            a('5NDa');
            var i = l(a('5rEg')),
                f = l(a('lwsE')),
                s = l(a('W8MJ')),
                p = l(a('a1gu')),
                m = l(a('Nsbk')),
                y = l(a('7W2i'));
            a('y8nQ');
            var h = l(a('Vl3Y'));
            a('OaEy');
            var g = l(a('2fM7')),
                v = n(a('q1tI')),
                E = a('MuoO'),
                k = g.default.Option,
                C = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                b = h.default.create()(
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
                            (0, y.default)(t, e),
                            (0, s.default)(t, [
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.visible,
                                            a = e.onCancel,
                                            n = e.onOk,
                                            l = e.form,
                                            r = e.confirmLoading,
                                            d = e.categories,
                                            f = e.data,
                                            s = l.getFieldDecorator;
                                        return v.default.createElement(
                                            o.default,
                                            {
                                                title: 'Empresa',
                                                okText: 'Guardar',
                                                confirmLoading: r,
                                                onCancel: a,
                                                onOk: n,
                                                visible: t,
                                            },
                                            v.default.createElement(
                                                h.default,
                                                { layout: 'horizontal' },
                                                v.default.createElement(
                                                    h.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Nombre',
                                                    }),
                                                    s('name', {
                                                        initialValue: f.name,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message: '\xa1Por favor un nombre!',
                                                            },
                                                        ],
                                                    })(
                                                        v.default.createElement(i.default, {
                                                            placeholder: 'Nombre',
                                                        })
                                                    )
                                                ),
                                                v.default.createElement(
                                                    h.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'RUC',
                                                    }),
                                                    s('ruc', {
                                                        initialValue: f.ruc,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor ingrese un RUC!',
                                                            },
                                                        ],
                                                    })(
                                                        v.default.createElement(i.default, {
                                                            placeholder: 'RUC',
                                                        })
                                                    )
                                                ),
                                                v.default.createElement(
                                                    h.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Categoria',
                                                    }),
                                                    s('category_id', {
                                                        initialValue: f.category_id,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    'Por favor elija una categoria',
                                                            },
                                                        ],
                                                    })(
                                                        v.default.createElement(
                                                            g.default,
                                                            { placeholder: 'Categoria' },
                                                            d.map(function(e, t) {
                                                                return v.default.createElement(
                                                                    k,
                                                                    { key: e.id, value: e.id },
                                                                    e.name
                                                                );
                                                            })
                                                        )
                                                    )
                                                ),
                                                v.default.createElement(
                                                    h.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Gerente',
                                                    }),
                                                    s('manager', { initialValue: f.manager })(
                                                        v.default.createElement(i.default, {
                                                            placeholder: 'Gerente',
                                                        })
                                                    )
                                                ),
                                                v.default.createElement(
                                                    h.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Due\xf1o',
                                                    }),
                                                    s('owner', { initialValue: f.owner })(
                                                        v.default.createElement(i.default, {
                                                            placeholder: 'Due\xf1o',
                                                        })
                                                    )
                                                ),
                                                v.default.createElement(
                                                    h.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Direcci\xf3n',
                                                    }),
                                                    s('address', { initialValue: f.address })(
                                                        v.default.createElement(i.default, {
                                                            placeholder: 'Direcci\xf3n',
                                                        })
                                                    )
                                                ),
                                                v.default.createElement(
                                                    h.default.Item,
                                                    (0, c.default)({}, C, { label: 'Estado' }),
                                                    s('state', {
                                                        valuePropName: 'checked',
                                                        initialValue: f.state,
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
                x = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, d.default)((0, d.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, d.default)((0, d.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, y.default)(t, e),
                        (0, s.default)(t, [
                            {
                                key: 'handleConfirm',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        n = t.company.currentItem,
                                        l = this.formRef.props.form;
                                    l.validateFields(function(t, d) {
                                        t ||
                                            (a({
                                                type: 'company/'.concat(e),
                                                payload: (0, r.default)({}, d, { id: n.id }),
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
                                        r = n.company,
                                        d = n.category,
                                        o = n.loading,
                                        u = r.currentItem,
                                        i = r.modalType,
                                        f = r.modalVisible,
                                        s = {
                                            categories: d.categories,
                                            data: 'create' == i ? { state: !0 } : u,
                                            disabled: 'detail' == i,
                                            type: i,
                                            visible: f,
                                            confirmLoading: o,
                                            onOk: function() {
                                                t(i);
                                            },
                                            onCancel: function() {
                                                l({ type: 'company/resetcompany' }), a();
                                            },
                                        };
                                    return v.default.createElement(
                                        b,
                                        (0, c.default)({}, s, {
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
                I = function(e) {
                    var t = e.company,
                        a = e.category,
                        n = e.loading;
                    return {
                        company: t,
                        category: a,
                        loading: n.effects['company/create'] || n.effects['company/update'],
                    };
                },
                S = (0, E.connect)(I)(x);
            t.default = S;
        },
        kS0l: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var r = l(a('bx4M'));
            a('14J3');
            var d = l(a('BMrR'));
            a('+L6B');
            var o = l(a('2/Rp'));
            a('jCWc');
            var u = l(a('kPKH')),
                c = l(a('lwsE')),
                i = l(a('W8MJ')),
                f = l(a('a1gu')),
                s = l(a('Nsbk')),
                p = l(a('7W2i')),
                m = l(a('PJYZ'));
            a('5NDa');
            var y = l(a('5rEg')),
                h = n(a('q1tI')),
                g = a('MuoO'),
                v = a('7DNP'),
                E = l(a('eRjF')),
                k = l(a('Gqzq')),
                C = l(a('iMm1')),
                b = l(a('WfX8')),
                x = l(a('zHco')),
                I = y.default.Search,
                S = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, c.default)(this, t),
                            (a = (0, f.default)(this, (0, s.default)(t).call(this, e))),
                            (a.onQueryAll = a.onQueryAll.bind((0, m.default)((0, m.default)(a)))),
                            a
                        );
                    }
                    return (
                        (0, p.default)(t, e),
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
                                        n = t.company.searchText;
                                    a({ type: 'company/all', payload: { search: e ? '' : n } });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        n = t.setting,
                                        l = t.company,
                                        c = t.loadingAll,
                                        i = t.loadingUpdate,
                                        f = this.onQueryAll,
                                        s = l.list,
                                        p = l.total,
                                        m = l.current,
                                        y = l.searchText,
                                        g = (l.currentItem,
                                        {
                                            current: m,
                                            total: p,
                                            pageSize: n.item,
                                            dataSource: s,
                                            loadingAll: c,
                                            loadingUpdate: i,
                                            onPageChange: function(e) {
                                                a({
                                                    type: 'company/all',
                                                    payload: { current_page: e, search: y },
                                                });
                                            },
                                            onClear: function() {
                                                a({ type: 'company/setSearchText', payload: '' }),
                                                    f(!0);
                                            },
                                            onUpdate: function(e) {
                                                a({ type: 'company/update', payload: e });
                                            },
                                            onShowModalEdit: function(e, t) {
                                                S(e, t);
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'company/delete', payload: e });
                                            },
                                            onDetail: function(e) {
                                                a(
                                                    v.routerRedux.push(
                                                        '/companies/detail/'.concat(e)
                                                    )
                                                );
                                            },
                                        }),
                                        S = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'company/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            }),
                                                a({ type: 'category/all', payload: { tree: !1 } });
                                        },
                                        w = function(e) {
                                            a({ type: 'company/setSearchText', payload: e });
                                        };
                                    return h.default.createElement(
                                        x.default,
                                        { title: 'Categorias' },
                                        h.default.createElement(
                                            r.default,
                                            { bordered: !1 },
                                            h.default.createElement(
                                                d.default,
                                                { gutter: 24 },
                                                h.default.createElement(
                                                    u.default,
                                                    { xs: 9, sm: 7, md: 6, lg: 5, xl: 4 },
                                                    h.default.createElement(b.default, null)
                                                ),
                                                h.default.createElement(
                                                    u.default,
                                                    { xs: 15, sm: 17, md: 18, lg: 19, xl: 20 },
                                                    h.default.createElement(
                                                        'div',
                                                        { className: E.default.header },
                                                        h.default.createElement(
                                                            o.default,
                                                            {
                                                                icon: 'plus',
                                                                type: 'primary',
                                                                onClick: function() {
                                                                    return S('create');
                                                                },
                                                            },
                                                            'Nuevo'
                                                        ),
                                                        h.default.createElement(o.default, {
                                                            icon: 'reload',
                                                            onClick: function() {
                                                                return e.onQueryAll();
                                                            },
                                                        }),
                                                        h.default.createElement(I, {
                                                            placeholder: 'Buscar empresa',
                                                            value: y,
                                                            onChange: function(e) {
                                                                return w(e.target.value);
                                                            },
                                                            onSearch: function(t) {
                                                                return e.onQueryAll();
                                                            },
                                                            style: { width: 200 },
                                                        }),
                                                        h.default.createElement(C.default, null)
                                                    ),
                                                    h.default.createElement(k.default, g)
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(h.Component),
                w = function(e) {
                    var t = e.company,
                        a = e.global,
                        n = e.loading;
                    return {
                        company: t,
                        setting: a.setting,
                        loadingAll: n.effects['company/all'],
                        loadingUpdate: n.effects['company/update'],
                    };
                },
                T = (0, g.connect)(w)(S);
            t.default = T;
        },
    },
]);
