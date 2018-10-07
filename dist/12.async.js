(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [12],
    {
        G7wS: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-category\\-list\\index-table',
                tableAlert: 'sn\\pages\\-category\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-category\\-list\\index-actions',
                delete: 'sn\\pages\\-category\\-list\\index-delete',
                update: 'sn\\pages\\-category\\-list\\index-update',
            };
        },
        KyQA: function(e, t, a) {
            e.exports = { header: 'sn\\pages\\-category\\index-header' };
        },
        Tx6E: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var o = n(a('kLXV'));
            a('5Dmo');
            var r = n(a('3S7+'));
            a('Pwec');
            var d = n(a('CtXQ')),
                u = n(a('lwsE')),
                i = n(a('W8MJ')),
                c = n(a('a1gu')),
                f = n(a('Nsbk')),
                s = n(a('7W2i')),
                p = n(a('PJYZ')),
                y = l(a('q1tI')),
                g = n(a('CkN6')),
                h = n(a('G7wS')),
                m = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, u.default)(this, t),
                            (a = (0, c.default)(this, (0, f.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, p.default)((0, p.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, p.default)((0, p.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, s.default)(t, e),
                        (0, i.default)(t, [
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
                                        n = l.onShowModalEdit,
                                        u = l.onDelete,
                                        i = l.dataSource,
                                        c = l.loadingAll,
                                        f = [
                                            { title: 'Nombre', dataIndex: 'name', key: 'name' },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    return y.default.createElement(
                                                        'div',
                                                        { className: h.default.actions },
                                                        y.default.createElement(
                                                            r.default,
                                                            { title: 'Editar' },
                                                            y.default.createElement(d.default, {
                                                                type: 'edit',
                                                                className: h.default.update,
                                                                onClick: function() {
                                                                    return n('update', e);
                                                                },
                                                            })
                                                        ),
                                                        y.default.createElement(
                                                            r.default,
                                                            { title: 'Eliminar' },
                                                            y.default.createElement(d.default, {
                                                                type: 'delete',
                                                                className: h.default.delete,
                                                                onClick: function() {
                                                                    o.default.confirm({
                                                                        title:
                                                                            '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                        content: e.name,
                                                                        okText: 'SI',
                                                                        okType: 'danger',
                                                                        cancelText: 'NO',
                                                                        onOk: function() {
                                                                            u({ id: e.id });
                                                                        },
                                                                    });
                                                                },
                                                            })
                                                        )
                                                    );
                                                },
                                            },
                                        ];
                                    return y.default.createElement(g.default, {
                                        columns: f,
                                        dataSource: i,
                                        loading: c,
                                        pagination: !1,
                                        onChange: this.onChange,
                                        minWidth: 800,
                                        rowKey: function(e) {
                                            return e.id;
                                        },
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(y.Component),
                v = m;
            t.default = v;
        },
        zk6L: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var o = n(a('bx4M'));
            a('+L6B');
            var r = n(a('2/Rp')),
                d = n(a('lwsE')),
                u = n(a('W8MJ')),
                i = n(a('a1gu')),
                c = n(a('Nsbk')),
                f = n(a('7W2i')),
                s = n(a('PJYZ')),
                p = l(a('q1tI')),
                y = a('MuoO'),
                g = n(a('KyQA')),
                h = n(a('Tx6E')),
                m = n(a('sP1z')),
                v = n(a('zHco')),
                E = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, i.default)(this, (0, c.default)(t).call(this, e))),
                            (a.onQueryAll = a.onQueryAll.bind((0, s.default)((0, s.default)(a)))),
                            a
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.onQueryAll();
                                },
                            },
                            {
                                key: 'onQueryAll',
                                value: function() {
                                    var e = this.props.dispatch;
                                    e({ type: 'category/all', payload: { tree: !0 } });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        l = t.category,
                                        n = t.loadingAll,
                                        d = (t.loadingUpdate, l.list),
                                        u = {
                                            dataSource: d,
                                            loadingAll: n,
                                            onShowModalEdit: function(e, t) {
                                                i(e, t);
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'category/delete', payload: e });
                                            },
                                        },
                                        i = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'category/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            }),
                                                a({ type: 'category/all', payload: { tree: !1 } });
                                        };
                                    return p.default.createElement(
                                        v.default,
                                        { title: 'Categorias' },
                                        p.default.createElement(
                                            o.default,
                                            { bordered: !1 },
                                            p.default.createElement(
                                                'div',
                                                { className: g.default.header },
                                                p.default.createElement(
                                                    r.default,
                                                    {
                                                        icon: 'plus',
                                                        type: 'primary',
                                                        onClick: function() {
                                                            return i('create');
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
                                                p.default.createElement(m.default, null)
                                            ),
                                            p.default.createElement(h.default, u)
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.Component),
                k = function(e) {
                    var t = e.category,
                        a = e.loading;
                    return {
                        category: t,
                        loadingAll: a.effects['category/all'],
                        loadingUpdate: a.effects['category/update'],
                    };
                },
                A = (0, y.connect)(k)(E);
            t.default = A;
        },
    },
]);
