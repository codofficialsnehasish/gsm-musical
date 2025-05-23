! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(x, e) {
    "use strict";
    var t = [],
        E = x.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        s = m.toString,
        u = s.call(Object),
        v = {},
        y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        _ = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var i, r, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (i in c)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var h = "3.4.1",
        T = function(e, t) {
            return new T.fn.init(e, t)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !y(e) && !_(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    T.fn = T.prototype = {
        jquery: h,
        constructor: T,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, T.extend = T.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, s[t] = T.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, T.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof(n = m.call(t, "constructor") && t.constructor) || s.call(n) !== u))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (d(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                s = [];
            if (d(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return g.apply([], s)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, d, b, o, r, p, h, g, w, l, u, C, x, s, E, m, a, c, v, T = "sizzle" + 1 * new Date,
            y = n.document,
            S = 0,
            i = 0,
            f = le(),
            _ = le(),
            A = le(),
            D = le(),
            N = function(e, t) {
                return e === t && (u = !0), 0
            },
            I = {}.hasOwnProperty,
            t = [],
            k = t.pop,
            O = t.push,
            L = t.push,
            j = t.slice,
            R = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + M + "*(" + P + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + M + "*\\]",
            W = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            U = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            V = new RegExp(M + "|>"),
            $ = new RegExp(W),
            X = new RegExp("^" + P + "$"),
            Q = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                C()
            },
            se = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(t = j.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: t.length ? function(e, t) {
                    O.apply(e, j.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, n, i) {
            var r, o, s, a, l, u, c, h = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== x && C(t), t = t || x, E)) {
                if (11 !== f && (l = Z.exec(e)))
                    if (r = l[1]) {
                        if (9 === f) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (h && (s = h.getElementById(r)) && v(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && d.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(r)), n
                    } if (d.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e, h = t, 1 === f && V.test(e)) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ie, re) : t.setAttribute("id", a = T), o = (u = p(e)).length; o--;) u[o] = "#" + a + " " + _e(u[o]);
                        c = u.join(","), h = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return L.apply(n, h.querySelectorAll(c)), n
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        a === T && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(B, "$1"), t, n, i)
        }

        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ue(e) {
            return e[T] = !0, e
        }

        function ce(e) {
            var t = x.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function he(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function fe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function me(s) {
            return ue(function(o) {
                return o = +o, ue(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = ae.support = {}, r = ae.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !K.test(t || n && n.nodeName || "HTML")
            }, C = ae.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : y;
                return i !== x && 9 === i.nodeType && i.documentElement && (s = (x = i).documentElement, E = !r(x), y !== x && (n = x.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(x.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = J.test(x.getElementsByClassName), d.getById = ce(function(e) {
                    return s.appendChild(e).id = T, !x.getElementsByName || !x.getElementsByName(T).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, a = [], m = [], (d.qsa = J.test(x.querySelectorAll)) && (ce(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = x.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (d.matchesSelector = J.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", W)
                }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = J.test(s.compareDocumentPosition), v = t || J.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, N = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === x || e.ownerDocument === y && v(y, e) ? -1 : t === x || t.ownerDocument === y && v(y, t) ? 1 : l ? R(l, e) - R(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === x ? -1 : t === x ? 1 : r ? -1 : o ? 1 : l ? R(l, e) - R(l, t) : 0;
                    if (r === o) return fe(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? fe(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
                }), x
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== x && C(e), d.matchesSelector && E && !D[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    D(t, !0)
                }
                return 0 < ae(t, x, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== x && C(e), v(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== x && C(e);
                var n = b.attrHandle[t.toLowerCase()],
                    i = n && I.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== i ? i : d.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, re)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (u = !d.detectDuplicates, l = !d.sortStable && e.slice(0), e.sort(N), u) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, o = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (b = ae.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = f[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && f(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = ae.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(F, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            _ = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, o, s, a, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                h = _ && e.nodeName.toLowerCase(),
                                f = !n && !_,
                                d = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (s = e; s = s[u];)
                                            if (_ ? s.nodeName.toLowerCase() === h : 1 === s.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && f) {
                                    for (d = (a = (i = (r = (o = (s = c)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (d = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++d && s === e) {
                                            r[p] = [S, a, d];
                                            break
                                        }
                                } else if (f && (d = a = (i = (r = (o = (s = e)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === d)
                                    for (;
                                        (s = ++a && s && s[u] || (d = a = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++d || (f && ((r = (o = s[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, d]), s !== e)););
                                return (d -= m) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[T] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                            for (var n, i = s(e, o), r = i.length; r--;) e[n = R(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var i = [],
                            r = [],
                            a = h(e.replace(B, "$1"));
                        return a[T] ? ue(function(e, t, n, i) {
                            for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: ue(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: ue(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: ue(function(n) {
                        return X.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = pe(e);

        function ye() {}

        function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function be(a, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                h = t && "parentNode" === c,
                f = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || h) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, o, s = [S, f];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || h) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || h)
                            if (r = (o = e[T] || (e[T] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = r[c]) && i[0] === S && i[1] === f) return s[2] = i[2];
                                if ((r[c] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function we(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function Ce(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function xe(d, p, g, m, v, e) {
            return m && !m[T] && (m = xe(m)), v && !v[T] && (v = xe(v, e)), ue(function(e, t, n, i) {
                var r, o, s, a = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    h = !d || !e && p ? c : Ce(c, a, d, n, i),
                    f = g ? v || (e ? d : u || m) ? [] : t : h;
                if (g && g(h, f, n, i), m)
                    for (r = Ce(f, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (f[l[o]] = !(h[l[o]] = s));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (r = [], o = f.length; o--;)(s = f[o]) && r.push(h[o] = s);
                            v(null, f = [], r, i)
                        }
                        for (o = f.length; o--;)(s = f[o]) && -1 < (r = v ? R(e, s) : a[o]) && (e[r] = !(t[r] = s))
                    }
                } else f = Ce(f === t ? f.splice(u, f.length) : f), v ? v(null, t, f, i) : L.apply(t, f)
            })
        }

        function Ee(e) {
            for (var r, t, n, i = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = be(function(e) {
                    return e === r
                }, s, !0), u = be(function(e) {
                    return -1 < R(r, e)
                }, s, !0), c = [function(e, t, n) {
                    var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                    return r = null, i
                }]; a < i; a++)
                if (t = b.relative[e[a].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[T]) {
                        for (n = ++a; n < i && !b.relative[e[n].type]; n++);
                        return xe(1 < a && we(c), 1 < a && _e(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, a < n && Ee(e.slice(a, n)), n < i && Ee(e = e.slice(n)), n < i && _e(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, p = ae.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, u = _[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, a = [], l = b.preFilter; s;) {
                for (o in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length)), b.filter) !(i = Q[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : _(e, a).slice(0)
        }, h = ae.compile = function(e, t) {
            var n, m, v, y, _, i, r = [],
                o = [],
                s = A[e + " "];
            if (!s) {
                for (t || (t = p(e)), n = t.length; n--;)(s = Ee(t[n]))[T] ? r.push(s) : o.push(s);
                (s = A(e, (m = o, y = 0 < (v = r).length, _ = 0 < m.length, i = function(e, t, n, i, r) {
                    var o, s, a, l = 0,
                        u = "0",
                        c = e && [],
                        h = [],
                        f = w,
                        d = e || _ && b.find.TAG("*", r),
                        p = S += null == f ? 1 : Math.random() || .1,
                        g = d.length;
                    for (r && (w = t === x || t || r); u !== g && null != (o = d[u]); u++) {
                        if (_ && o) {
                            for (s = 0, t || o.ownerDocument === x || (C(o), n = !E); a = m[s++];)
                                if (a(o, t || x, n)) {
                                    i.push(o);
                                    break
                                } r && (S = p)
                        }
                        y && ((o = !a && o) && l--, e && c.push(o))
                    }
                    if (l += u, y && u !== l) {
                        for (s = 0; a = v[s++];) a(c, h, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--;) c[u] || h[u] || (h[u] = k.call(i));
                            h = Ce(h)
                        }
                        L.apply(i, h), r && !e && 0 < h.length && 1 < l + v.length && ae.uniqueSort(i)
                    }
                    return r && (S = p, w = f), c
                }, y ? ue(i) : i))).selector = e
            }
            return s
        }, g = ae.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                c = !i && p(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(te, ne), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = Q.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);)
                    if ((l = b.find[a]) && (i = l(s.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && _e(o))) return L.apply(n, i), n;
                        break
                    }
            }
            return (u || h(e, c))(i, t, !E, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, d.sortStable = T.split("").sort(N).join("") === T, d.detectDuplicates = !!u, C(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(x.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || he("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || he("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || he(H, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(x);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;
    var C = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && T(e).is(n)) break;
                    i.push(e)
                } return i
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        A = T.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, n, i) {
        return y(n) ? T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? T.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? T.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : T.filter(n, e, i)
    }
    T.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, T.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (T.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
        }
    });
    var k, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || k, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(i[1]) && T.isPlainObject(t))
                for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = E.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }).prototype = T.fn, k = T(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function R(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && T(e);
            if (!A.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(T(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function(e) {
            return R(e, "nextSibling")
        },
        prev: function(e) {
            return R(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
        }
    }, function(i, r) {
        T.fn[i] = function(e, t) {
            var n = T.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (j[i] || T.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function P(e) {
        throw e
    }

    function q(e, t, n, i) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    T.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, T.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }), n) : T.extend({}, i);
        var r, t, o, s, a = [],
            l = [],
            u = -1,
            c = function() {
                for (s = s || i.once, o = r = !0; l.length; u = -1)
                    for (t = l.shift(); ++u < a.length;) !1 === a[u].apply(t[0], t[1]) && i.stopOnFalse && (u = a.length, t = !1);
                i.memory || (t = !1), r = !1, s && (a = t ? [] : "")
            },
            h = {
                add: function() {
                    return a && (t && !r && (u = a.length - 1, l.push(t)), function n(e) {
                        T.each(e, function(e, t) {
                            y(t) ? i.unique && h.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !r && c()), this
                },
                remove: function() {
                    return T.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = T.inArray(t, a, n));) a.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < T.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = l = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], t || r || (a = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || c()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return h
    }, T.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return T.Deferred(function(i) {
                            T.each(o, function(e, t) {
                                var n = y(r[t[4]]) && r[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function u(r, o, s, a) {
                            return function() {
                                var n = this,
                                    i = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, u(l, o, M, a), u(l, o, P, a)) : (l++, t.call(e, u(l, o, M, a), u(l, o, P, a), u(l, o, M, o.notifyWith))) : (s !== M && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
                                        }
                                    },
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== P && (n = void 0, i = [e]), o.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()), x.setTimeout(t))
                            }
                        }
                        return T.Deferred(function(e) {
                            o[0][3].add(u(0, e, y(i) ? i : M, e.notifyWith)), o[1][3].add(u(0, e, y(t) ? t : M)), o[2][3].add(u(0, e, y(n) ? n : P))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, s) : s
                    }
                },
                a = {};
            return T.each(o, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                i = Array(t),
                r = a.call(arguments),
                o = T.Deferred(),
                s = function(t) {
                    return function(e) {
                        i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(i, r)
                    }
                };
            if (n <= 1 && (q(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || y(r[t] && r[t].then))) return o.then();
            for (; t--;) q(r[t], s(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(e, t) {
        x.console && x.console.warn && e && W.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, T.readyException = function(e) {
        x.setTimeout(function() {
            throw e
        })
    };
    var F = T.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), x.removeEventListener("load", B), T.ready()
    }
    T.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            T.readyException(e)
        }), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || F.resolveWith(E, [T])
        }
    }), T.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? x.setTimeout(T.ready) : (E.addEventListener("DOMContentLoaded", B), x.addEventListener("load", B));
    var U = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === w(n))
                for (a in r = !0, n) U(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, y(i) || (s = !0), u && (t = s ? (t.call(e, i), null) : (u = t, function(e, t, n) {
                    return u.call(T(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        z = /^-ms-/,
        V = /-([a-z])/g;

    function $(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(z, "ms-").replace(V, $)
    }
    var Q = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function K() {
        this.expando = T.expando + K.uid++
    }
    K.uid = 1, K.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[X(t)] = n;
            else
                for (i in t) r[X(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(H) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
        }
    };
    var Y = new K,
        G = new K,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    T.extend({
        hasData: function(e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), T.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : U(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = X(i.slice(5)), ee(o, i, r[i]));
                Y.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), T.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, T.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = T._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                T.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = T.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        oe = function(e) {
            return T.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    re.getRootNode && (oe = function(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === T.css(e, "display")
        },
        le = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

    function ue(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return T.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (T.cssNumber[t] || "px" !== u && +l) && ne.exec(T.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) T.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, T.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var ce = {};

    function he(e, t) {
        for (var n, i, r, o, s, a, l, u = [], c = 0, h = e.length; c < h; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (u[c] = Y.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && ae(i) && (u[c] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = ce[a]) || (o = s.body.appendChild(s.createElement(a)), l = T.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ce[a] = l)))) : "none" !== n && (u[c] = "none", Y.set(i, "display", n)));
        for (c = 0; c < h; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    T.fn.extend({
        show: function() {
            return he(this, !0)
        },
        hide: function() {
            return he(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? T.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, _e, be = /<|&#?\w+;/;

    function we(e, t, n, i, r) {
        for (var o, s, a, l, u, c, h = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) T.merge(f, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            for (s = s || h.appendChild(t.createElement("div")), a = (de.exec(o) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            T.merge(f, s.childNodes), (s = h.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (h.textContent = "", d = 0; o = f[d++];)
            if (i && -1 < T.inArray(o, i)) r && r.push(o);
            else if (u = oe(o), s = me(h.appendChild(o), "script"), u && ve(s), n)
            for (c = 0; o = s[c++];) pe.test(o.type || "") && n.push(o);
        return h
    }
    ye = E.createDocumentFragment().appendChild(E.createElement("div")), (_e = E.createElement("input")).setAttribute("type", "radio"), _e.setAttribute("checked", "checked"), _e.setAttribute("name", "t"), ye.appendChild(_e), v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ce = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ae(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function De(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) De(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return T().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = T.guid++)), e.each(function() {
            T.event.add(this, t, r, i, n)
        })
    }

    function Ne(e, r, o) {
        o ? (Y.set(e, r, !1), T.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = Y.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (i.length)(T.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (i = a.call(arguments), Y.set(this, r, i), t = o(this, r), this[r](), i !== (n = Y.get(this, r)) || t ? Y.set(this, r, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else i.length && (Y.set(this, r, {
                    value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, r) && T.event.add(e, r, Te)
    }
    T.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, h, f, d, p, g, m = Y.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(re, r), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(H) || [""]).length; u--;) d = g = (a = Ee.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), d && (h = T.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = T.event.special[d] || {}, c = T.extend({
                    type: d,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && T.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (f = l[d]) || ((f = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), T.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, h, f, d, p, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(H) || [""]).length; u--;)
                    if (d = g = (a = Ee.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                        for (h = T.event.special[d] || {}, f = l[d = (i ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(e, c));
                        s && !f.length && (h.teardown && !1 !== h.teardown.call(e, p, m.handle) || T.removeEvent(e, d, m.handle), delete l[d])
                    } else
                        for (d in l) T.event.remove(e, d + t[u], n, i, !0);
                T.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = T.event.fix(e),
                l = new Array(arguments.length),
                u = (Y.get(this, "events") || {})[a.type] || [],
                c = T.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = T.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < T(r, this).index(u) : T.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && D(t, "input") && Ne(t, "click", Te), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && D(t, "input") && Ne(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && D(t, "input") && Y.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, T.Event = function(e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, T.event.addProp), T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        T.event.special[e] = {
            setup: function() {
                return Ne(this, e, Ae), !1
            },
            trigger: function() {
                return Ne(this, e), !0
            },
            delegateType: t
        }
    }), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        T.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), T.fn.extend({
        on: function(e, t, n, i) {
            return De(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return De(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                T.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }

    function Re(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), s = Y.set(t, o), u = o.events))
                for (r in delete s.handle, s.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) T.event.add(t, r, u[r][n]);
            G.hasData(e) && (a = G.access(e), l = T.extend({}, a), G.set(t, l))
        }
    }

    function Pe(n, i, r, o) {
        i = g.apply([], i);
        var e, t, s, a, l, u, c = 0,
            h = n.length,
            f = h - 1,
            d = i[0],
            p = y(d);
        if (p || 1 < h && "string" == typeof d && !v.checkClone && Oe.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = d.call(this, e, t.html())), Pe(t, i, r, o)
        });
        if (h && (t = (e = we(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = T.map(me(e, "script"), Re)).length; c < h; c++) l = e, c !== f && (l = T.clone(l, !0, !0), a && T.merge(s, me(l, "script"))), r.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, T.map(s, He), c = 0; c < a; c++) l = s[c], pe.test(l.type || "") && !Y.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : b(l.textContent.replace(Le, ""), l, u))
        }
        return n
    }

    function qe(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(me(i)), i.parentNode && (n && oe(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ie, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, u, c = e.cloneNode(!0),
                h = oe(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (s = me(c), i = 0, r = (o = me(e)).length; i < r; i++) a = o[i], "input" === (u = (l = s[i]).nodeName.toLowerCase()) && fe.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), s = s || me(c), i = 0, r = o.length; i < r; i++) Me(o[i], s[i]);
                else Me(e, c);
            return 0 < (s = me(c, "script")).length && ve(s, !h && me(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Q(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), T.fn.extend({
        detach: function(e) {
            return qe(this, e, !0)
        },
        remove: function(e) {
            return qe(this, e)
        },
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(me(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        T.fn[e] = function(e) {
            for (var t, n = [], i = T(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), T(i[o])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var We = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = x), t.getComputedStyle(e)
        },
        Be = new RegExp(ie.join("|"), "i");

    function Ue(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = T.style(e, t)), !v.pixelBoxStyles() && We.test(s) && Be.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(a).appendChild(l);
                var e = x.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 12 === t(l.offsetWidth / 3), re.removeChild(a), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, r, o, s, a = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(v, {
            boxSizingReliable: function() {
                return e(), i
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), r
            }
        }))
    }();
    var Ve = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        Xe = {};

    function Qe(e) {
        return T.cssProps[e] || Xe[e] || (e in $e ? e : Xe[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                if ((e = Ve[n] + t) in $e) return e
        }(e) || e)
    }
    var Ke = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function et(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += T.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= T.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= T.css(e, "border" + ie[s] + "Width", !0, r))) : (l += T.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += T.css(e, "border" + ie[s] + "Width", !0, r) : a += T.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
    }

    function tt(e, t, n) {
        var i = Fe(e),
            r = (!v.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
            o = r,
            s = Ue(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (We.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!v.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === T.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function nt(e, t, n, i, r) {
        return new nt.prototype.init(e, t, n, i, r)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ue(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = X(t),
                    l = Ye.test(t),
                    u = e.style;
                if (l || (t = Qe(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ue(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = X(t);
            return Ye.test(t) || (t = Qe(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ue(e, t, i)), "normal" === r && t in Je && (r = Je[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), T.each(["height", "width"], function(e, l) {
        T.cssHooks[l] = {
            get: function(e, t, n) {
                if (t) return !Ke.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, l, n) : le(e, Ge, function() {
                    return tt(e, l, n)
                })
            },
            set: function(e, t, n) {
                var i, r = Fe(e),
                    o = !v.scrollboxSize() && "absolute" === r.position,
                    s = (o || n) && "border-box" === T.css(e, "boxSizing", !1, r),
                    a = n ? et(e, l, n, s, r) : 0;
                return s && o && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - et(e, l, "border", !1, r) - .5)), a && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = T.css(e, l)), Ze(0, t, a)
            }
        }
    }), T.cssHooks.marginLeft = ze(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        T.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== r && (T.cssHooks[r + o].set = Ze)
    }), T.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Fe(e), r = t.length; s < r; s++) o[t[s]] = T.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((T.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, T.fx = nt.prototype.init, T.fx.step = {};
    var it, rt, ot, st, at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ut() {
        rt && (!1 === E.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(ut) : x.setTimeout(ut, T.fx.interval), T.fx.tick())
    }

    function ct() {
        return x.setTimeout(function() {
            it = void 0
        }), it = Date.now()
    }

    function ht(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ft(e, t, n) {
        for (var i, r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function dt(o, e, t) {
        var n, s, i = 0,
            r = dt.prefilters.length,
            a = T.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = it || ct(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return a.notifyWith(o, [u, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
            },
            u = a.promise({
                elem: o,
                props: T.extend({}, e),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: it || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = T.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = X(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = T.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(c, u.opts.specialEasing); i < r; i++)
            if (n = dt.prefilters[i].call(u, o, c, u.opts)) return y(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return T.map(c, ft, u), y(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    T.Animation = T.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = y(e) ? (t = e, ["*"]) : e.match(H)).length; i < r; i++) n = e[i], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, u, c, h = "width" in t || "height" in t,
                f = this,
                d = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = Y.get(e, "fxshow");
            for (i in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, f.always(function() {
                    f.always(function() {
                        s.unqueued--, T.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[i], at.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    d[i] = m && m[i] || T.style(e, i)
                } if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
                for (i in h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Y.get(e, "display")), "none" === (c = T.css(e, "display")) && (u ? c = u : (he([e], !0), u = e.style.display || u, c = T.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (f.done(function() {
                        p.display = u
                    }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                    display: u
                }), o && (m.hidden = !g), g && he([e], !0), f.done(function() {
                    for (i in g || he([e]), Y.remove(e, "fxshow"), d) T.style(e, i, d[i])
                })), l = ft(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), T.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
    }, T.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = T.isEmptyObject(t),
                o = T.speed(e, n, i),
                s = function() {
                    var e = dt(this, T.extend({}, t), o);
                    (r || Y.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = T.timers,
                    i = Y.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && lt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || T.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = T.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function(e, i) {
        var r = T.fn[i];
        T.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ht(i, !0), e, t, n)
        }
    }), T.each({
        slideDown: ht("show"),
        slideUp: ht("hide"),
        slideToggle: ht("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        T.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), T.timers = [], T.fx.tick = function() {
        var e, t = 0,
            n = T.timers;
        for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), it = void 0
    }, T.fx.timer = function(e) {
        T.timers.push(e), T.fx.start()
    }, T.fx.interval = 13, T.fx.start = function() {
        rt || (rt = !0, ut())
    }, T.fx.stop = function() {
        rt = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(i, e) {
        return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = x.setTimeout(e, i);
            t.stop = function() {
                x.clearTimeout(n)
            }
        })
    }, ot = E.createElement("input"), st = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", v.checkOn = "" !== ot.value, v.optSelected = st.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", v.radioValue = "t" === ot.value;
    var pt, gt = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return U(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }), T.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(H);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = gt[t] || T.find.attr;
        gt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = gt[o], gt[o] = i, i = null != s(e, t, n) ? o : null, gt[o] = r), i
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(H) || []).join(" ")
    }

    function _t(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return U(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }), T.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) {
                T(this).addClass(t.call(this, e, _t(this)))
            });
            if ((e = bt(t)).length)
                for (; n = this[l++];)
                    if (r = _t(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = yt(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) {
                T(this).removeClass(t.call(this, e, _t(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                for (; n = this[l++];)
                    if (r = _t(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = yt(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(r, t) {
            var o = typeof r,
                s = "string" === o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                T(this).toggleClass(r.call(this, e, _t(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = T(this), i = bt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" !== o || ((e = _t(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + yt(_t(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    T.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = T.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : yt(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = T.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        }, v.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in x;
    var Ct = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    T.extend(T.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, u, c, h, f = [n || E],
                d = m.call(e, "type") ? e.type : e,
                p = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = h = s = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(d + T.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, (e = e[T.expando] ? e : new T.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), c = T.event.special[d] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !_(n)) {
                    for (a = c.delegateType || d, Ct.test(a + d) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (n.ownerDocument || E) && f.push(s.defaultView || s.parentWindow || x)
                }
                for (r = 0;
                    (o = f[r++]) && !e.isPropagationStopped();) h = o, e.type = 1 < r ? a : c.bindType || d, (u = (Y.get(o, "events") || {})[e.type] && Y.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && Q(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !Q(n) || l && y(n[d]) && !_(n) && ((s = n[l]) && (n[l] = null), T.event.triggered = d, e.isPropagationStopped() && h.addEventListener(d, xt), n[d](), e.isPropagationStopped() && h.removeEventListener(d, xt), T.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(i, null, t)
        }
    }), T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0)
        }
    }), v.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            T.event.simulate(i, e.target, T.event.fix(e))
        };
        T.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, i);
                t || e.addEventListener(n, r, !0), Y.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, i) - 1;
                t ? Y.access(e, i, t) : (e.removeEventListener(n, r, !0), Y.remove(e, i))
            }
        }
    });
    var Et = x.location,
        Tt = Date.now(),
        St = /\?/;
    T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new x.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var At = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;

    function kt(n, e, i, r) {
        var t;
        if (Array.isArray(e)) T.each(e, function(e, t) {
            i || At.test(n) ? r(n, t) : kt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== w(e)) r(n, e);
        else
            for (t in e) kt(n + "[" + t + "]", e[t], i, r)
    }
    T.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = y(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) kt(n, e[n], t, r);
        return i.join("&")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && It.test(this.nodeName) && !Nt.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Ot = /%20/g,
        Lt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        Pt = {},
        qt = {},
        Wt = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(H) || [];
            if (y(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Ut(t, r, o, s) {
        var a = {},
            l = t === qt;

        function u(e) {
            var i;
            return a[e] = !0, T.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
            }), i
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function zt(e, t) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && T.extend(!0, e, i), e
    }
    Ft.href = Et.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, T.ajaxSettings), t) : zt(T.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(Pt),
        ajaxTransport: Bt(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, h, f, n, d, i, p, g, r, o, m = T.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                _ = T.Deferred(),
                b = T.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Rt.exec(f);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? f : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) C.always(e[C.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (_.promise(C), m.url = ((e || m.url || Et.href) + "").replace(Mt, Et.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(H) || [""], null == m.crossDomain) {
                i = E.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = Ft.protocol + "//" + Ft.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), Ut(Pt, m, t, C), p) return C;
            for (r in (g = T.event && m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ht.test(m.type), h = m.url.replace(Lt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ot, "+")) : (o = m.url.slice(h.length), m.data && (m.processData || "string" == typeof m.data) && (h += (St.test(h) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (h = h.replace(jt, "$1"), o = (St.test(h) ? "&" : "?") + "_=" + Tt++ + o), m.url = h + o), m.ifModified && (T.lastModified[h] && C.setRequestHeader("If-Modified-Since", T.lastModified[h]), T.etag[h] && C.setRequestHeader("If-None-Match", T.etag[h])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && C.setRequestHeader("Content-Type", m.contentType), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : m.accepts["*"]), m.headers) C.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || p)) return C.abort();
            if (l = "abort", b.add(m.complete), C.done(m.success), C.fail(m.error), c = Ut(qt, m, t, C)) {
                if (C.readyState = 1, g && y.trigger("ajaxSend", [C, m]), p) return C;
                m.async && 0 < m.timeout && (d = x.setTimeout(function() {
                    C.abort("timeout")
                }, m.timeout));
                try {
                    p = !1, c.send(s, u)
                } catch (e) {
                    if (p) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, i) {
                var r, o, s, a, l, u = t;
                p || (p = !0, d && x.clearTimeout(d), c = void 0, f = i || "", C.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, C, n)), a = function(e, t, n, i) {
                    var r, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, C, r), r ? (m.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (T.lastModified[h] = l), (l = C.getResponseHeader("etag")) && (T.etag[h] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, r = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || u) + "", r ? _.resolveWith(v, [o, u, C]) : _.rejectWith(v, [C, u, s]), C.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [C, m, r ? o : s]), b.fireWith(v, [C, u]), g && (y.trigger("ajaxComplete", [C, m]), --T.active || T.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }), T.each(["get", "post"], function(e, r) {
        T[r] = function(e, t, n, i) {
            return y(t) && (i = i || n, n = t, t = void 0), T.ajax(T.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, T.isPlainObject(e) && e))
        }
    }), T._evalUrl = function(e, t) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                T.globalEval(e, t)
            }
        })
    }, T.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                T(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = T(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }, T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, T.ajaxSettings.xhr = function() {
        try {
            return new x.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        $t = T.ajaxSettings.xhr();
    v.cors = !!$t && "withCredentials" in $t, v.ajax = $t = !!$t, T.ajaxTransport(function(r) {
        var o, s;
        if (v.cors || $t && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Vt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && x.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), T.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e), e
            }
        }
    }), T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), T.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                i = T("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var Xt, Qt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Qt.pop() || T.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), T.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return o || T.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = x[i], x[i] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === r ? T(x).removeProp(i) : x[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Qt.push(i)), o && y(r) && r(o[0]), o = r = void 0
        }), "script"
    }), v.createHTMLDocument = ((Xt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), T.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(i)) : t = E), o = !n && [], (r = N.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
        var i, r, o
    }, T.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = yt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && T.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), T.expr.pseudos.animated = function(t) {
        return T.grep(T.timers, function(e) {
            return t === e.elem
        }).length
    }, T.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = T.css(e, "position"),
                c = T(e),
                h = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = T.css(e, "top"), l = T.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), y(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, T.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                T.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0), r.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - T.css(i, "marginTop", !0),
                    left: t.left - r.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        T.fn[t] = function(e) {
            return U(this, function(e, t, n) {
                var i;
                if (_(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), T.each(["top", "left"], function(e, n) {
        T.cssHooks[n] = ze(v.pixelPosition, function(e, t) {
            if (t) return t = Ue(e, n), We.test(t) ? T(e).position()[n] + "px" : t
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        T.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            T.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return U(this, function(e, t, n) {
                    var i;
                    return _(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(e, t, r) : T.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), T.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || T.guid++, r
    }, T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = D, T.isFunction = y, T.isWindow = _, T.camelCase = X, T.type = w, T.now = Date.now, T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var Yt = x.jQuery,
        Gt = x.$;
    return T.noConflict = function(e) {
        return x.$ === T && (x.$ = Gt), e && x.jQuery === T && (x.jQuery = Yt), T
    }, e || (x.jQuery = x.$ = T), T
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, p) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))), t.forEach(function(e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var t = "transitionend";
    var g = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = p(e).css("transition-duration"),
                n = p(e).css("transition-delay"),
                i = parseFloat(t),
                r = parseFloat(n);
            return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        s = o && g.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                } var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    p.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return p(this).one(g.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || g.triggerTransitionEnd(t)
        }, e), this
    }, p.event.special[g.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var n = "alert",
        r = "bs.alert",
        o = "." + r,
        a = p.fn[n],
        u = {
            CLOSE: "close" + o,
            CLOSED: "closed" + o,
            CLICK_DATA_API: "click" + o + ".data-api"
        },
        c = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function() {
                p.removeData(this._element, r), this._element = null
            }, e._getRootElement = function(e) {
                var t = g.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = p(e).closest(".alert")[0]), n
            }, e._triggerCloseEvent = function(e) {
                var t = p.Event(u.CLOSE);
                return p(e).trigger(t), t
            }, e._removeElement = function(t) {
                var n = this;
                if (p(t).removeClass("show"), p(t).hasClass("fade")) {
                    var e = g.getTransitionDurationFromElement(t);
                    p(t).one(g.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function(e) {
                p(e).detach().trigger(u.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data(r);
                    t || (t = new i(this), e.data(r, t)), "close" === n && t[n](this)
                })
            }, i._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', c._handleDismiss(new c)), p.fn[n] = c._jQueryInterface, p.fn[n].Constructor = c, p.fn[n].noConflict = function() {
        return p.fn[n] = a, c._jQueryInterface
    };
    var h = "button",
        f = "bs.button",
        d = "." + f,
        m = ".data-api",
        v = p.fn[h],
        y = "active",
        _ = '[data-toggle^="button"]',
        b = {
            CLICK_DATA_API: "click" + d + m,
            FOCUS_BLUR_DATA_API: "focus" + d + m + " blur" + d + m
        },
        w = function() {
            function n(e) {
                this._element = e
            }
            var e = n.prototype;
            return e.toggle = function() {
                var e = !0,
                    t = !0,
                    n = p(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var i = this._element.querySelector('input:not([type="hidden"])');
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(y)) e = !1;
                            else {
                                var r = n.querySelector(".active");
                                r && p(r).removeClass(y)
                            } if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(y), p(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), e && p(this._element).toggleClass(y)
            }, e.dispose = function() {
                p.removeData(this._element, f), this._element = null
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data(f);
                    e || (e = new n(this), p(this).data(f, e)), "toggle" === t && e[t]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), n
        }();
    p(document).on(b.CLICK_DATA_API, _, function(e) {
        e.preventDefault();
        var t = e.target;
        p(t).hasClass("btn") || (t = p(t).closest(".btn")), w._jQueryInterface.call(p(t), "toggle")
    }).on(b.FOCUS_BLUR_DATA_API, _, function(e) {
        var t = p(e.target).closest(".btn")[0];
        p(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), p.fn[h] = w._jQueryInterface, p.fn[h].Constructor = w, p.fn[h].noConflict = function() {
        return p.fn[h] = v, w._jQueryInterface
    };
    var C = "carousel",
        x = "bs.carousel",
        E = "." + x,
        T = ".data-api",
        S = p.fn[C],
        A = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        D = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        N = "next",
        I = "prev",
        k = {
            SLIDE: "slide" + E,
            SLID: "slid" + E,
            KEYDOWN: "keydown" + E,
            MOUSEENTER: "mouseenter" + E,
            MOUSELEAVE: "mouseleave" + E,
            TOUCHSTART: "touchstart" + E,
            TOUCHMOVE: "touchmove" + E,
            TOUCHEND: "touchend" + E,
            POINTERDOWN: "pointerdown" + E,
            POINTERUP: "pointerup" + E,
            DRAG_START: "dragstart" + E,
            LOAD_DATA_API: "load" + E + T,
            CLICK_DATA_API: "click" + E + T
        },
        O = "active",
        L = ".active.carousel-item",
        j = {
            TOUCH: "touch",
            PEN: "pen"
        },
        R = function() {
            function o(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var e = o.prototype;
            return e.next = function() {
                this._isSliding || this._slide(N)
            }, e.nextWhenVisible = function() {
                !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide(I)
            }, e.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(L);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) p(this._element).one(k.SLID, function() {
                        return t.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = n < e ? N : I;
                        this._slide(i, this._items[e])
                    }
            }, e.dispose = function() {
                p(this._element).off(E), p.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(e) {
                return e = l({}, A, e), g.typeCheckConfig(C, e, D), e
            }, e._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && p(this._element).on(k.KEYDOWN, function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && p(this._element).on(k.MOUSEENTER, function(e) {
                    return t.pause(e)
                }).on(k.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                }), this._config.touch && this._addTouchEventListeners()
            }, e._addTouchEventListeners = function() {
                var n = this;
                if (this._touchSupported) {
                    var t = function(e) {
                            n._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
                        },
                        i = function(e) {
                            n._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) {
                                return n.cycle(e)
                            }, 500 + n._config.interval))
                        };
                    p(this._element.querySelectorAll(".carousel-item img")).on(k.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (p(this._element).on(k.POINTERDOWN, function(e) {
                        return t(e)
                    }), p(this._element).on(k.POINTERUP, function(e) {
                        return i(e)
                    }), this._element.classList.add("pointer-event")) : (p(this._element).on(k.TOUCHSTART, function(e) {
                        return t(e)
                    }), p(this._element).on(k.TOUCHMOVE, function(e) {
                        var t;
                        (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                    }), p(this._element).on(k.TOUCHEND, function(e) {
                        return i(e)
                    }))
                }
            }, e._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, e._getItemByDirection = function(e, t) {
                var n = e === N,
                    i = e === I,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + (e === I ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(L)),
                    r = p.Event(k.SLIDE, {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    });
                return p(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    p(t).removeClass(O);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && p(n).addClass(O)
                }
            }, e._slide = function(e, t) {
                var n, i, r, o = this,
                    s = this._element.querySelector(L),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    u = this._getItemIndex(l),
                    c = Boolean(this._interval);
                if (r = e === N ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right"), l && p(l).hasClass(O)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var h = p.Event(k.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: u
                    });
                    if (p(this._element).hasClass("slide")) {
                        p(l).addClass(i), g.reflow(l), p(s).addClass(n), p(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                        var d = g.getTransitionDurationFromElement(s);
                        p(s).one(g.TRANSITION_END, function() {
                            p(l).removeClass(n + " " + i).addClass(O), p(s).removeClass(O + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                                return p(o._element).trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else p(s).removeClass(O), p(l).addClass(O), this._isSliding = !1, p(this._element).trigger(h);
                    c && this.cycle()
                }
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = p(this).data(x),
                        t = l({}, A, p(this).data());
                    "object" == typeof i && (t = l({}, t, i));
                    var n = "string" == typeof i ? i : t.slide;
                    if (e || (e = new o(this, t), p(this).data(x, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && t.ride && (e.pause(), e.cycle())
                })
            }, o._dataApiClickHandler = function(e) {
                var t = g.getSelectorFromElement(this);
                if (t) {
                    var n = p(t)[0];
                    if (n && p(n).hasClass("carousel")) {
                        var i = l({}, p(n).data(), p(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(p(n), i), r && p(n).data(x).to(r), e.preventDefault()
                    }
                }
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return A
                }
            }]), o
        }();
    p(document).on(k.CLICK_DATA_API, "[data-slide], [data-slide-to]", R._dataApiClickHandler), p(window).on(k.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            R._jQueryInterface.call(i, i.data())
        }
    }), p.fn[C] = R._jQueryInterface, p.fn[C].Constructor = R, p.fn[C].noConflict = function() {
        return p.fn[C] = S, R._jQueryInterface
    };
    var H = "collapse",
        M = "bs.collapse",
        P = "." + M,
        q = p.fn[H],
        W = {
            toggle: !0,
            parent: ""
        },
        F = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        B = {
            SHOW: "show" + P,
            SHOWN: "shown" + P,
            HIDE: "hide" + P,
            HIDDEN: "hidden" + P,
            CLICK_DATA_API: "click" + P + ".data-api"
        },
        U = "show",
        z = "collapse",
        V = "collapsing",
        $ = "collapsed",
        X = '[data-toggle="collapse"]',
        Q = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(X)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = g.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                            return e === t
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = a.prototype;
            return e.toggle = function() {
                p(this._element).hasClass(U) ? this.hide() : this.show()
            }, e.show = function() {
                var e, t, n = this;
                if (!(this._isTransitioning || p(this._element).hasClass(U) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(z)
                    })).length && (e = null), e && (t = p(e).not(this._selector).data(M)) && t._isTransitioning))) {
                    var i = p.Event(B.SHOW);
                    if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                        e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(M, null));
                        var r = this._getDimension();
                        p(this._element).removeClass(z).addClass(V), this._element.style[r] = 0, this._triggerArray.length && p(this._triggerArray).removeClass($).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = g.getTransitionDurationFromElement(this._element);
                        p(this._element).one(g.TRANSITION_END, function() {
                            p(n._element).removeClass(V).addClass(z).addClass(U), n._element.style[r] = "", n.setTransitioning(!1), p(n._element).trigger(B.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, e.hide = function() {
                var e = this;
                if (!this._isTransitioning && p(this._element).hasClass(U)) {
                    var t = p.Event(B.HIDE);
                    if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), p(this._element).addClass(V).removeClass(z).removeClass(U);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var r = 0; r < i; r++) {
                                var o = this._triggerArray[r],
                                    s = g.getSelectorFromElement(o);
                                null !== s && (p([].slice.call(document.querySelectorAll(s))).hasClass(U) || p(o).addClass($).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var a = g.getTransitionDurationFromElement(this._element);
                        p(this._element).one(g.TRANSITION_END, function() {
                            e.setTransitioning(!1), p(e._element).removeClass(V).addClass(z).trigger(B.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, e.setTransitioning = function(e) {
                this._isTransitioning = e
            }, e.dispose = function() {
                p.removeData(this._element, M), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(e) {
                return (e = l({}, W, e)).toggle = Boolean(e.toggle), g.typeCheckConfig(H, e, F), e
            }, e._getDimension = function() {
                return p(this._element).hasClass("width") ? "width" : "height"
            }, e._getParent = function() {
                var e, n = this;
                g.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t));
                return p(i).each(function(e, t) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                }), e
            }, e._addAriaAndCollapsedClass = function(e, t) {
                var n = p(e).hasClass(U);
                t.length && p(t).toggleClass($, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(e) {
                var t = g.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data(M),
                        n = l({}, W, e.data(), "object" == typeof i && i ? i : {});
                    if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(M, t)), "string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return W
                }
            }]), a
        }();
    p(document).on(B.CLICK_DATA_API, X, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this),
            t = g.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this),
                t = e.data(M) ? "toggle" : n.data();
            Q._jQueryInterface.call(e, t)
        })
    }), p.fn[H] = Q._jQueryInterface, p.fn[H].Constructor = Q, p.fn[H].noConflict = function() {
        return p.fn[H] = q, Q._jQueryInterface
    };
    for (var K = "undefined" != typeof window && "undefined" != typeof document, Y = ["Edge", "Trident", "Firefox"], G = 0, J = 0; J < Y.length; J += 1)
        if (K && 0 <= navigator.userAgent.indexOf(Y[J])) {
            G = 1;
            break
        } var Z = K && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e()
            }))
        }
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e()
            }, G))
        }
    };

    function ee(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function te(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function ne(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function ie(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = te(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : ie(ne(e))
    }
    var re = K && !(!window.MSInputMethodContext || !document.documentMode),
        oe = K && /MSIE 10/.test(navigator.userAgent);

    function se(e) {
        return 11 === e ? re : 10 === e ? oe : re || oe
    }

    function ae(e) {
        if (!e) return document.documentElement;
        for (var t = se(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === te(n, "position") ? ae(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function le(e) {
        return null !== e.parentNode ? le(e.parentNode) : e
    }

    function ue(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && ae(s.firstElementChild) !== s ? ae(l) : l;
        var u = le(e);
        return u.host ? ue(u.host, t) : ue(e, le(t).host)
    }

    function ce(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" !== n && "HTML" !== n) return e[t];
        var i = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || i)[t]
    }

    function he(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function fe(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], se(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function de(e) {
        var t = e.body,
            n = e.documentElement,
            i = se(10) && getComputedStyle(n);
        return {
            height: fe("Height", t, n, i),
            width: fe("Width", t, n, i)
        }
    }
    var pe = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        }(),
        ge = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        me = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

    function ve(e) {
        return me({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function ye(e) {
        var t = {};
        try {
            if (se(10)) {
                t = e.getBoundingClientRect();
                var n = ce(e, "top"),
                    i = ce(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? de(e.ownerDocument) : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            u = e.offsetHeight - a;
        if (l || u) {
            var c = te(e);
            l -= he(c, "x"), u -= he(c, "y"), r.width -= l, r.height -= u
        }
        return ve(r)
    }

    function _e(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = se(10),
            r = "HTML" === t.nodeName,
            o = ye(e),
            s = ye(t),
            a = ie(e),
            l = te(t),
            u = parseFloat(l.borderTopWidth, 10),
            c = parseFloat(l.borderLeftWidth, 10);
        n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var h = ve({
            top: o.top - s.top - u,
            left: o.left - s.left - c,
            width: o.width,
            height: o.height
        });
        if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var f = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            h.top -= u - f, h.bottom -= u - f, h.left -= c - d, h.right -= c - d, h.marginTop = f, h.marginLeft = d
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (h = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = ce(t, "top"),
                r = ce(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(h, t)), h
    }

    function be(e) {
        if (!e || !e.parentElement || se()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === te(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function we(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            s = r ? be(e) : ue(e, t);
        if ("viewport" === i) o = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = _e(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : ce(n),
                a = t ? 0 : ce(n, "left");
            return ve({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = ie(ne(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = _e(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === te(t, "position")) return !0;
                    var i = ne(t);
                    return !!i && e(i)
                }(s)) o = l;
            else {
                var u = de(e.ownerDocument),
                    c = u.height,
                    h = u.width;
                o.top += l.top - l.marginTop, o.bottom = c + l.top, o.left += l.left - l.marginLeft, o.right = h + l.left
            }
        }
        var f = "number" == typeof(n = n || 0);
        return o.left += f ? n : n.left || 0, o.top += f ? n : n.top || 0, o.right -= f ? n : n.right || 0, o.bottom -= f ? n : n.bottom || 0, o
    }

    function Ce(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = we(i, n, o, r),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(e) {
                return me({
                    key: e
                }, a[e], {
                    area: (t = a[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            u = l.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            c = 0 < u.length ? u[0].key : l[0].key,
            h = e.split("-")[1];
        return c + (h ? "-" + h : "")
    }

    function xe(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return _e(n, i ? be(t) : ue(t, n), i)
    }

    function Ee(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function Te(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function Se(e, t, n) {
        n = n.split("-")[0];
        var i = Ee(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[Te(a)], r
    }

    function Ae(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function De(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e.name === n
            });
            var i = Ae(e, function(e) {
                return e.name === n
            });
            return e.indexOf(i)
        }(e, 0, t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && ee(t) && (n.offsets.popper = ve(n.offsets.popper), n.offsets.reference = ve(n.offsets.reference), n = t(n, e))
        }), n
    }

    function Ne(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function Ie(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function ke(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function Oe(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Le(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && Oe(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }
    var je = K && /Firefox/i.test(navigator.userAgent);

    function Re(e, t, n) {
        var i = Ae(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var He = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Me = He.slice(3);

    function Pe(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = Me.indexOf(e),
            i = Me.slice(n + 1).concat(Me.slice(0, n));
        return t ? i.reverse() : i
    }
    var qe = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                u = a ? "width" : "height",
                                c = {
                                    start: ge({}, l, o[l]),
                                    end: ge({}, l, o[l] + o[u] - s[u])
                                };
                            e.offsets.popper = me({}, s, c[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n, i = t.offset,
                            r = e.placement,
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = r.split("-")[0];
                        return n = Oe(+i) ? [+i, 0] : function(e, r, o, t) {
                            var s = [0, 0],
                                a = -1 !== ["right", "left"].indexOf(t),
                                n = e.split(/(\+|\-)/).map(function(e) {
                                    return e.trim()
                                }),
                                i = n.indexOf(Ae(n, function(e) {
                                    return -1 !== e.search(/,|\s/)
                                }));
                            n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                u = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
                            return (u = u.map(function(e, t) {
                                var n = (1 === t ? !a : a) ? "height" : "width",
                                    i = !1;
                                return e.reduce(function(e, t) {
                                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
                                }, []).map(function(e) {
                                    return function(e, t, n, i) {
                                        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            o = +r[1],
                                            s = r[2];
                                        if (!o) return e;
                                        if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? o : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                        var a = void 0;
                                        switch (s) {
                                            case "%p":
                                                a = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                a = i
                                        }
                                        return ve(a)[t] / 100 * o
                                    }(e, n, r, o)
                                })
                            })).forEach(function(n, i) {
                                n.forEach(function(e, t) {
                                    Oe(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
                                })
                            }), s
                        }(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || ae(e.instance.popper);
                        e.instance.reference === t && (t = ae(t));
                        var n = Ie("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = we(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                        var u = i.priority,
                            c = e.offsets.popper,
                            h = {
                                primary: function(e) {
                                    var t = c[e];
                                    return c[e] < l[e] && !i.escapeWithReference && (t = Math.max(c[e], l[e])), ge({}, e, t)
                                },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = c[t];
                                    return c[e] > l[e] && !i.escapeWithReference && (n = Math.min(c[t], l[e] - ("right" === e ? c.width : c.height))), ge({}, t, n)
                                }
                            };
                        return u.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            c = me({}, c, h[t](e))
                        }), e.offsets.popper = c, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            u = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!Re(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            u = l ? "height" : "width",
                            c = l ? "Top" : "Left",
                            h = c.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = Ee(i)[u];
                        a[d] - p < s[h] && (e.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (e.offsets.popper[h] += a[h] + p - s[d]), e.offsets.popper = ve(e.offsets.popper);
                        var g = a[h] + a[u] / 2 - p / 2,
                            m = te(e.instance.popper),
                            v = parseFloat(m["margin" + c], 10),
                            y = parseFloat(m["border" + c + "Width"], 10),
                            _ = g - e.offsets.popper[h] - v - y;
                        return _ = Math.max(Math.min(s[u] - p, _), 0), e.arrowElement = i, e.offsets.arrow = (ge(n = {}, h, Math.round(_)), ge(n, f, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(p, g) {
                        if (Ne(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var m = we(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
                            v = p.placement.split("-")[0],
                            y = Te(v),
                            _ = p.placement.split("-")[1] || "",
                            b = [];
                        switch (g.behavior) {
                            case "flip":
                                b = [v, y];
                                break;
                            case "clockwise":
                                b = Pe(v);
                                break;
                            case "counterclockwise":
                                b = Pe(v, !0);
                                break;
                            default:
                                b = g.behavior
                        }
                        return b.forEach(function(e, t) {
                            if (v !== e || b.length === t + 1) return p;
                            v = p.placement.split("-")[0], y = Te(v);
                            var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                s = "left" === v && o(i.right) > o(r.left) || "right" === v && o(i.left) < o(r.right) || "top" === v && o(i.bottom) > o(r.top) || "bottom" === v && o(i.top) < o(r.bottom),
                                a = o(i.left) < o(m.left),
                                l = o(i.right) > o(m.right),
                                u = o(i.top) < o(m.top),
                                c = o(i.bottom) > o(m.bottom),
                                h = "left" === v && a || "right" === v && l || "top" === v && u || "bottom" === v && c,
                                f = -1 !== ["top", "bottom"].indexOf(v),
                                d = !!g.flipVariations && (f && "start" === _ && a || f && "end" === _ && l || !f && "start" === _ && u || !f && "end" === _ && c);
                            (s || h || d) && (p.flipped = !0, (s || h) && (v = b[t + 1]), d && (_ = "end" === (n = _) ? "start" : "start" === n ? "end" : n), p.placement = v + (_ ? "-" + _ : ""), p.offsets.popper = me({}, p.offsets.popper, Se(p.instance.popper, p.offsets.reference, p.placement)), p = De(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = Te(t), e.offsets.popper = ve(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!Re(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = Ae(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = Ae(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, a, l, u, c, h, f, d, p, g, m, v, y, _, b, w, C = void 0 !== o ? o : t.gpuAcceleration,
                            x = ae(e.instance.popper),
                            E = ye(x),
                            T = {
                                position: r.position
                            },
                            S = (s = e, a = window.devicePixelRatio < 2 || !je, u = (l = s.offsets).popper, c = l.reference, h = Math.round, f = Math.floor, d = function(e) {
                                return e
                            }, p = h(c.width), g = h(u.width), m = -1 !== ["left", "right"].indexOf(s.placement), v = -1 !== s.placement.indexOf("-"), _ = a ? h : d, {
                                left: (y = a ? m || v || p % 2 == g % 2 ? h : f : d)(p % 2 == 1 && g % 2 == 1 && !v && a ? u.left - 1 : u.left),
                                top: _(u.top),
                                bottom: _(u.bottom),
                                right: y(u.right)
                            }),
                            A = "bottom" === n ? "top" : "bottom",
                            D = "right" === i ? "left" : "right",
                            N = Ie("transform");
                        if (w = "bottom" === A ? "HTML" === x.nodeName ? -x.clientHeight + S.bottom : -E.height + S.bottom : S.top, b = "right" === D ? "HTML" === x.nodeName ? -x.clientWidth + S.right : -E.width + S.right : S.left, C && N) T[N] = "translate3d(" + b + "px, " + w + "px, 0)", T[A] = 0, T[D] = 0, T.willChange = "transform";
                        else {
                            var I = "bottom" === A ? -1 : 1,
                                k = "right" === D ? -1 : 1;
                            T[A] = w * I, T[D] = b * k, T.willChange = A + ", " + D
                        }
                        var O = {
                            "x-placement": e.placement
                        };
                        return e.attributes = me({}, O, e.attributes), e.styles = me({}, T, e.styles), e.arrowStyles = me({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return Le(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && Le(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, i, r) {
                        var o = xe(r, t, e, n.positionFixed),
                            s = Ce(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), Le(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        We = function() {
            function o(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(e, t) {
                    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
                }(this), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = Z(this.update.bind(this)), this.options = me({}, o.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(me({}, o.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = me({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return me({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && ee(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return pe(o, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = xe(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Ce(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Se(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = De(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, Ne(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Ie("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = function(e, t, n, i) {
                            n.updateBound = i, ke(e).addEventListener("resize", n.updateBound, {
                                passive: !0
                            });
                            var r = ie(e);
                            return function e(t, n, i, r) {
                                var o = "BODY" === t.nodeName,
                                    s = o ? t.ownerDocument.defaultView : t;
                                s.addEventListener(n, i, {
                                    passive: !0
                                }), o || e(ie(s.parentNode), n, i, r), r.push(s)
                            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                        }(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return function() {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ke(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.updateBound)
                        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }.call(this)
                }
            }]), o
        }();
    We.Utils = ("undefined" != typeof window ? window : global).PopperUtils, We.placements = He, We.Defaults = qe;
    var Fe = "dropdown",
        Be = "bs.dropdown",
        Ue = "." + Be,
        ze = ".data-api",
        Ve = p.fn[Fe],
        $e = new RegExp("38|40|27"),
        Xe = {
            HIDE: "hide" + Ue,
            HIDDEN: "hidden" + Ue,
            SHOW: "show" + Ue,
            SHOWN: "shown" + Ue,
            CLICK: "click" + Ue,
            CLICK_DATA_API: "click" + Ue + ze,
            KEYDOWN_DATA_API: "keydown" + Ue + ze,
            KEYUP_DATA_API: "keyup" + Ue + ze
        },
        Qe = "disabled",
        Ke = "show",
        Ye = "dropdown-menu-right",
        Ge = '[data-toggle="dropdown"]',
        Je = ".dropdown-menu",
        Ze = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        et = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        tt = function() {
            function u(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = u.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !p(this._element).hasClass(Qe)) {
                    var e = u._getParentFromElement(this._element),
                        t = p(this._menu).hasClass(Ke);
                    if (u._clearMenus(), !t) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = p.Event(Xe.SHOW, n);
                        if (p(e).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === We) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = e : g.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(e).addClass("position-static"), this._popper = new We(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === p(e).closest(".navbar-nav").length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(Ke), p(e).toggleClass(Ke).trigger(p.Event(Xe.SHOWN, n))
                        }
                    }
                }
            }, e.show = function() {
                if (!(this._element.disabled || p(this._element).hasClass(Qe) || p(this._menu).hasClass(Ke))) {
                    var e = {
                            relatedTarget: this._element
                        },
                        t = p.Event(Xe.SHOW, e),
                        n = u._getParentFromElement(this._element);
                    p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(Ke), p(n).toggleClass(Ke).trigger(p.Event(Xe.SHOWN, e)))
                }
            }, e.hide = function() {
                if (!this._element.disabled && !p(this._element).hasClass(Qe) && p(this._menu).hasClass(Ke)) {
                    var e = {
                            relatedTarget: this._element
                        },
                        t = p.Event(Xe.HIDE, e),
                        n = u._getParentFromElement(this._element);
                    p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(Ke), p(n).toggleClass(Ke).trigger(p.Event(Xe.HIDDEN, e)))
                }
            }, e.dispose = function() {
                p.removeData(this._element, Be), p(this._element).off(Ue), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function() {
                var t = this;
                p(this._element).on(Xe.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function(e) {
                return e = l({}, this.constructor.Default, p(this._element).data(), e), g.typeCheckConfig(Fe, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = u._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(Je))
                }
                return this._menu
            }, e._getPlacement = function() {
                var e = p(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? (t = "top-start", p(this._menu).hasClass(Ye) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : p(this._menu).hasClass(Ye) && (t = "bottom-end"), t
            }, e._detectNavbar = function() {
                return 0 < p(this._element).closest(".navbar").length
            }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = l({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, e._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, u._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data(Be);
                    if (e || (e = new u(this, "object" == typeof t ? t : null), p(this).data(Be, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, u._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Ge)), n = 0, i = t.length; n < i; n++) {
                        var r = u._getParentFromElement(t[n]),
                            o = p(t[n]).data(Be),
                            s = {
                                relatedTarget: t[n]
                            };
                        if (e && "click" === e.type && (s.clickEvent = e), o) {
                            var a = o._menu;
                            if (p(r).hasClass(Ke) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(r, e.target))) {
                                var l = p.Event(Xe.HIDE, s);
                                p(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), p(a).removeClass(Ke), p(r).removeClass(Ke).trigger(p.Event(Xe.HIDDEN, s)))
                            }
                        }
                    }
            }, u._getParentFromElement = function(e) {
                var t, n = g.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, u._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(Je).length)) : $e.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !p(this).hasClass(Qe))) {
                    var t = u._getParentFromElement(this),
                        n = p(t).hasClass(Ke);
                    if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                        var i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== i.length) {
                            var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t.querySelector(Ge);
                            p(o).trigger("focus")
                        }
                        p(this).trigger("click")
                    }
                }
            }, s(u, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ze
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return et
                }
            }]), u
        }();
    p(document).on(Xe.KEYDOWN_DATA_API, Ge, tt._dataApiKeydownHandler).on(Xe.KEYDOWN_DATA_API, Je, tt._dataApiKeydownHandler).on(Xe.CLICK_DATA_API + " " + Xe.KEYUP_DATA_API, tt._clearMenus).on(Xe.CLICK_DATA_API, Ge, function(e) {
        e.preventDefault(), e.stopPropagation(), tt._jQueryInterface.call(p(this), "toggle")
    }).on(Xe.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), p.fn[Fe] = tt._jQueryInterface, p.fn[Fe].Constructor = tt, p.fn[Fe].noConflict = function() {
        return p.fn[Fe] = Ve, tt._jQueryInterface
    };
    var nt = "modal",
        it = "bs.modal",
        rt = "." + it,
        ot = p.fn[nt],
        st = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        at = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        lt = {
            HIDE: "hide" + rt,
            HIDDEN: "hidden" + rt,
            SHOW: "show" + rt,
            SHOWN: "shown" + rt,
            FOCUSIN: "focusin" + rt,
            RESIZE: "resize" + rt,
            CLICK_DISMISS: "click.dismiss" + rt,
            KEYDOWN_DISMISS: "keydown.dismiss" + rt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + rt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + rt,
            CLICK_DATA_API: "click" + rt + ".data-api"
        },
        ut = "modal-open",
        ct = "fade",
        ht = "show",
        ft = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        dt = ".sticky-top",
        pt = function() {
            function r(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var e = r.prototype;
            return e.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    p(this._element).hasClass(ct) && (this._isTransitioning = !0);
                    var n = p.Event(lt.SHOW, {
                        relatedTarget: e
                    });
                    p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(lt.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                        return t.hide(e)
                    }), p(this._dialog).on(lt.MOUSEDOWN_DISMISS, function() {
                        p(t._element).one(lt.MOUSEUP_DISMISS, function(e) {
                            p(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, e.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = p.Event(lt.HIDE);
                    if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = p(this._element).hasClass(ct);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(lt.FOCUSIN), p(this._element).removeClass(ht), p(this._element).off(lt.CLICK_DISMISS), p(this._dialog).off(lt.MOUSEDOWN_DISMISS), i) {
                            var r = g.getTransitionDurationFromElement(this._element);
                            p(this._element).one(g.TRANSITION_END, function(e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return p(e).off(rt)
                }), p(document).off(lt.FOCUSIN), p.removeData(this._element, it), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(e) {
                return e = l({}, st, e), g.typeCheckConfig(nt, e, at), e
            }, e._showElement = function(e) {
                var t = this,
                    n = p(this._element).hasClass(ct);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, n && g.reflow(this._element), p(this._element).addClass(ht), this._config.focus && this._enforceFocus();
                var i = p.Event(lt.SHOWN, {
                        relatedTarget: e
                    }),
                    r = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(i)
                    };
                if (n) {
                    var o = g.getTransitionDurationFromElement(this._dialog);
                    p(this._dialog).one(g.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, e._enforceFocus = function() {
                var t = this;
                p(document).off(lt.FOCUSIN).on(lt.FOCUSIN, function(e) {
                    document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? p(this._element).on(lt.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || p(this._element).off(lt.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? p(window).on(lt.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : p(window).off(lt.RESIZE)
            }, e._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    p(document.body).removeClass(ut), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(lt.HIDDEN)
                })
            }, e._removeBackdrop = function() {
                this._backdrop && (p(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(e) {
                var t = this,
                    n = p(this._element).hasClass(ct) ? ct : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(lt.CLICK_DISMISS, function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                        }), n && g.reflow(this._backdrop), p(this._backdrop).addClass(ht), !e) return;
                    if (!n) return void e();
                    var i = g.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    p(this._backdrop).removeClass(ht);
                    var r = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (p(this._element).hasClass(ct)) {
                        var o = g.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(g.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else e && e()
            }, e._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(ft)),
                        t = [].slice.call(document.querySelectorAll(dt));
                    p(e).each(function(e, t) {
                        var n = t.style.paddingRight,
                            i = p(t).css("padding-right");
                        p(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), p(t).each(function(e, t) {
                        var n = t.style.marginRight,
                            i = p(t).css("margin-right");
                        p(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = p(document.body).css("padding-right");
                    p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                p(document.body).addClass(ut)
            }, e._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(ft));
                p(e).each(function(e, t) {
                    var n = p(t).data("padding-right");
                    p(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + dt));
                p(t).each(function(e, t) {
                    var n = p(t).data("margin-right");
                    void 0 !== n && p(t).css("margin-right", n).removeData("margin-right")
                });
                var n = p(document.body).data("padding-right");
                p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var e = p(this).data(it),
                        t = l({}, st, p(this).data(), "object" == typeof n && n ? n : {});
                    if (e || (e = new r(this, t), p(this).data(it, e)), "string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else t.show && e.show(i)
                })
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return st
                }
            }]), r
        }();
    p(document).on(lt.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var t, n = this,
            i = g.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = p(t).data(it) ? "toggle" : l({}, p(t).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = p(t).one(lt.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(lt.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        pt._jQueryInterface.call(p(t), r, this)
    }), p.fn[nt] = pt._jQueryInterface, p.fn[nt].Constructor = pt, p.fn[nt].noConflict = function() {
        return p.fn[nt] = ot, pt._jQueryInterface
    };
    var gt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        mt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        vt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function yt(e, s, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) {
                var n = l[e],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var r = [].slice.call(n.attributes),
                    o = [].concat(s["*"] || [], s[i] || []);
                r.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === gt.indexOf(n) || Boolean(e.nodeValue.match(mt) || e.nodeValue.match(vt));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    })(e, o) || n.removeAttribute(e.nodeName)
                })
            }, r = 0, o = l.length; r < o; r++) i(r);
        return n.body.innerHTML
    }
    var _t = "tooltip",
        bt = "bs.tooltip",
        wt = "." + bt,
        Ct = p.fn[_t],
        xt = "bs-tooltip",
        Et = new RegExp("(^|\\s)" + xt + "\\S+", "g"),
        Tt = ["sanitize", "whiteList", "sanitizeFn"],
        St = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        At = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Dt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        Nt = "show",
        It = {
            HIDE: "hide" + wt,
            HIDDEN: "hidden" + wt,
            SHOW: "show" + wt,
            SHOWN: "shown" + wt,
            INSERTED: "inserted" + wt,
            CLICK: "click" + wt,
            FOCUSIN: "focusin" + wt,
            FOCUSOUT: "focusout" + wt,
            MOUSEENTER: "mouseenter" + wt,
            MOUSELEAVE: "mouseleave" + wt
        },
        kt = "fade",
        Ot = "show",
        Lt = "hover",
        jt = "focus",
        Rt = function() {
            function i(e, t) {
                if (void 0 === We) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = i.prototype;
            return e.enable = function() {
                this._isEnabled = !0
            }, e.disable = function() {
                this._isEnabled = !1
            }, e.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = p(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (p(this.getTipElement()).hasClass(Ot)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() {
                clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function() {
                var t = this;
                if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = p.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    p(this.element).trigger(e);
                    var n = g.findShadowRoot(this.element),
                        i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !i) return;
                    var r = this.getTipElement(),
                        o = g.getUID(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && p(r).addClass(kt);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    p(r).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(r).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new We(this.element, r, {
                        placement: a,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), p(r).addClass(Ot), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                    var u = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (p(this.tip).hasClass(kt)) {
                        var c = g.getTransitionDurationFromElement(this.tip);
                        p(this.tip).one(g.TRANSITION_END, u).emulateTransitionEnd(c)
                    } else u()
                }
            }, e.hide = function(e) {
                var t = this,
                    n = this.getTipElement(),
                    i = p.Event(this.constructor.Event.HIDE),
                    r = function() {
                        t._hoverState !== Nt && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), p(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (p(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (p(n).removeClass(Ot), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger.click = !1, this._activeTrigger[jt] = !1, this._activeTrigger[Lt] = !1, p(this.tip).hasClass(kt)) {
                        var o = g.getTransitionDurationFromElement(n);
                        p(n).one(g.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, e.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function() {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass(xt + "-" + e)
            }, e.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(p(e.querySelectorAll(".tooltip-inner")), this.getTitle()), p(e).removeClass(kt + " " + Ot)
            }, e.setElementContent = function(e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = yt(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
            }, e.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = l({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, e._getContainer = function() {
                return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
            }, e._getAttachment = function(e) {
                return At[e.toUpperCase()]
            }, e._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    });
                    else if ("manual" !== e) {
                        var t = e === Lt ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = e === Lt ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p(i.element).on(t, i.config.selector, function(e) {
                            return i._enter(e)
                        }).on(n, i.config.selector, function(e) {
                            return i._leave(e)
                        })
                    }
                }), p(this.element).closest(".modal").on("hide.bs.modal", function() {
                    i.element && i.hide()
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? jt : Lt] = !0), p(t.getTipElement()).hasClass(Ot) || t._hoverState === Nt ? t._hoverState = Nt : (clearTimeout(t._timeout), t._hoverState = Nt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    t._hoverState === Nt && t.show()
                }, t.config.delay.show) : t.show())
            }, e._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? jt : Lt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function(e) {
                var t = p(this.element).data();
                return Object.keys(t).forEach(function(e) {
                    -1 !== Tt.indexOf(e) && delete t[e]
                }), "number" == typeof(e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), g.typeCheckConfig(_t, e, this.constructor.DefaultType), e.sanitize && (e.template = yt(e.template, e.whiteList, e.sanitizeFn)), e
            }, e._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(Et);
                null !== t && t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (p(e).removeClass(kt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data(bt),
                        t = "object" == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(bt, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Dt
                }
            }, {
                key: "NAME",
                get: function() {
                    return _t
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return bt
                }
            }, {
                key: "Event",
                get: function() {
                    return It
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return wt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return St
                }
            }]), i
        }();
    p.fn[_t] = Rt._jQueryInterface, p.fn[_t].Constructor = Rt, p.fn[_t].noConflict = function() {
        return p.fn[_t] = Ct, Rt._jQueryInterface
    };
    var Ht = "popover",
        Mt = "bs.popover",
        Pt = "." + Mt,
        qt = p.fn[Ht],
        Wt = "bs-popover",
        Ft = new RegExp("(^|\\s)" + Wt + "\\S+", "g"),
        Bt = l({}, Rt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Ut = l({}, Rt.DefaultType, {
            content: "(string|element|function)"
        }),
        zt = {
            HIDE: "hide" + Pt,
            HIDDEN: "hidden" + Pt,
            SHOW: "show" + Pt,
            SHOWN: "shown" + Pt,
            INSERTED: "inserted" + Pt,
            CLICK: "click" + Pt,
            FOCUSIN: "focusin" + Pt,
            FOCUSOUT: "focusout" + Pt,
            MOUSEENTER: "mouseenter" + Pt,
            MOUSELEAVE: "mouseleave" + Pt
        },
        Vt = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass(Wt + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = p(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(Ft);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data(Mt),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(Mt, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Bt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ht
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Mt
                }
            }, {
                key: "Event",
                get: function() {
                    return zt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Pt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ut
                }
            }]), i
        }(Rt);
    p.fn[Ht] = Vt._jQueryInterface, p.fn[Ht].Constructor = Vt, p.fn[Ht].noConflict = function() {
        return p.fn[Ht] = qt, Vt._jQueryInterface
    };
    var $t = "scrollspy",
        Xt = "bs.scrollspy",
        Qt = "." + Xt,
        Kt = p.fn[$t],
        Yt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Gt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Jt = {
            ACTIVATE: "activate" + Qt,
            SCROLL: "scroll" + Qt,
            LOAD_DATA_API: "load" + Qt + ".data-api"
        },
        Zt = "active",
        en = ".nav, .list-group",
        tn = ".nav-link",
        nn = ".list-group-item",
        rn = "position",
        on = function() {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + tn + "," + this._config.target + " " + nn + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(Jt.SCROLL, function(e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : rn,
                    r = "auto" === this._config.method ? e : this._config.method,
                    o = r === rn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var t, n = g.getSelectorFromElement(e);
                    if (n && (t = document.querySelector(n)), t) {
                        var i = t.getBoundingClientRect();
                        if (i.width || i.height) return [p(t)[r]().top + o, n]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function() {
                p.removeData(this._element, Xt), p(this._scrollElement).off(Qt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(e) {
                if ("string" != typeof(e = l({}, Yt, "object" == typeof e && e ? e : {})).target) {
                    var t = p(e.target).attr("id");
                    t || (t = g.getUID($t), p(e.target).attr("id", t)), e.target = "#" + t
                }
                return g.typeCheckConfig($t, e, Gt), e
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map(function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    }),
                    n = p([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(Zt), n.addClass(Zt)) : (n.addClass(Zt), n.parents(en).prev(tn + ", " + nn).addClass(Zt), n.parents(en).prev(".nav-item").children(tn).addClass(Zt)), p(this._scrollElement).trigger(Jt.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(Zt)
                }).forEach(function(e) {
                    return e.classList.remove(Zt)
                })
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data(Xt);
                    if (e || (e = new n(this, "object" == typeof t && t), p(this).data(Xt, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Yt
                }
            }]), n
        }();
    p(window).on(Jt.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = p(e[t]);
            on._jQueryInterface.call(n, n.data())
        }
    }), p.fn[$t] = on._jQueryInterface, p.fn[$t].Constructor = on, p.fn[$t].noConflict = function() {
        return p.fn[$t] = Kt, on._jQueryInterface
    };
    var sn = "bs.tab",
        an = "." + sn,
        ln = p.fn.tab,
        un = {
            HIDE: "hide" + an,
            HIDDEN: "hidden" + an,
            SHOW: "show" + an,
            SHOWN: "shown" + an,
            CLICK_DATA_API: "click" + an + ".data-api"
        },
        cn = "active",
        hn = ".active",
        fn = "> li > .active",
        dn = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(cn) || p(this._element).hasClass("disabled"))) {
                    var e, i, t = p(this._element).closest(".nav, .list-group")[0],
                        r = g.getSelectorFromElement(this._element);
                    if (t) {
                        var o = "UL" === t.nodeName || "OL" === t.nodeName ? fn : hn;
                        i = (i = p.makeArray(p(t).find(o)))[i.length - 1]
                    }
                    var s = p.Event(un.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = p.Event(un.SHOW, {
                            relatedTarget: i
                        });
                    if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, t);
                        var l = function() {
                            var e = p.Event(un.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                t = p.Event(un.SHOWN, {
                                    relatedTarget: i
                                });
                            p(i).trigger(e), p(n._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function() {
                p.removeData(this._element, sn), this._element = null
            }, e._activate = function(e, t, n) {
                var i = this,
                    r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(hn) : p(t).find(fn))[0],
                    o = n && r && p(r).hasClass("fade"),
                    s = function() {
                        return i._transitionComplete(e, r, n)
                    };
                if (r && o) {
                    var a = g.getTransitionDurationFromElement(r);
                    p(r).removeClass("show").one(g.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, e._transitionComplete = function(e, t, n) {
                if (t) {
                    p(t).removeClass(cn);
                    var i = p(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && p(i).removeClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (p(e).addClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), g.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && p(e.parentNode).hasClass("dropdown-menu")) {
                    var r = p(e).closest(".dropdown")[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        p(o).addClass(cn)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data(sn);
                    if (t || (t = new i(this), e.data(sn, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    p(document).on(un.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), dn._jQueryInterface.call(p(this), "show")
    }), p.fn.tab = dn._jQueryInterface, p.fn.tab.Constructor = dn, p.fn.tab.noConflict = function() {
        return p.fn.tab = ln, dn._jQueryInterface
    };
    var pn = "toast",
        gn = "bs.toast",
        mn = "." + gn,
        vn = p.fn[pn],
        yn = {
            CLICK_DISMISS: "click.dismiss" + mn,
            HIDE: "hide" + mn,
            HIDDEN: "hidden" + mn,
            SHOW: "show" + mn,
            SHOWN: "shown" + mn
        },
        _n = "show",
        bn = "showing",
        wn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Cn = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        xn = function() {
            function i(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var e = i.prototype;
            return e.show = function() {
                var e = this;
                p(this._element).trigger(yn.SHOW), this._config.animation && this._element.classList.add("fade");
                var t = function() {
                    e._element.classList.remove(bn), e._element.classList.add(_n), p(e._element).trigger(yn.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(bn), this._config.animation) {
                    var n = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, e.hide = function(e) {
                var t = this;
                this._element.classList.contains(_n) && (p(this._element).trigger(yn.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    t._close()
                }, this._config.delay))
            }, e.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(_n) && this._element.classList.remove(_n), p(this._element).off(yn.CLICK_DISMISS), p.removeData(this._element, gn), this._element = null, this._config = null
            }, e._getConfig = function(e) {
                return e = l({}, Cn, p(this._element).data(), "object" == typeof e && e ? e : {}), g.typeCheckConfig(pn, e, this.constructor.DefaultType), e
            }, e._setListeners = function() {
                var e = this;
                p(this._element).on(yn.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                    return e.hide(!0)
                })
            }, e._close = function() {
                var e = this,
                    t = function() {
                        e._element.classList.add("hide"), p(e._element).trigger(yn.HIDDEN)
                    };
                if (this._element.classList.remove(_n), this._config.animation) {
                    var n = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data(gn);
                    if (t || (t = new i(this, "object" == typeof n && n), e.data(gn, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return wn
                }
            }, {
                key: "Default",
                get: function() {
                    return Cn
                }
            }]), i
        }();
    p.fn[pn] = xn._jQueryInterface, p.fn[pn].Constructor = xn, p.fn[pn].noConflict = function() {
            return p.fn[pn] = vn, xn._jQueryInterface
        },
        function() {
            if (void 0 === p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = g, e.Alert = c, e.Button = w, e.Carousel = R, e.Collapse = Q, e.Dropdown = tt, e.Modal = pt, e.Popover = Vt, e.Scrollspy = on, e.Tab = dn, e.Toast = xn, e.Tooltip = Rt, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}),
function(e, t) {
    if ("function" == typeof define && define.amd) define(["jquery"], t);
    else if ("undefined" != typeof exports) t(require("jquery"));
    else {
        t(e.jquery), e.metisMenu = {}
    }
}(this, function(e) {
    "use strict";
    var t;
    (t = e) && t.__esModule;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    var s, n, a, i, r, l, u, c, h = function(i) {
        var t = !1,
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };

        function e(e) {
            var t = this,
                n = !1;
            return i(this).one(r.TRANSITION_END, function() {
                n = !0
            }), setTimeout(function() {
                n || r.triggerTransitionEnd(t)
            }, e), this
        }
        var r = {
            TRANSITION_END: "mmTransitionEnd",
            triggerTransitionEnd: function(e) {
                i(e).trigger(t.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(t)
            }
        };
        return t = function() {
            if (window.QUnit) return !1;
            var e = document.createElement("mm");
            for (var t in n)
                if (void 0 !== e.style[t]) return {
                    end: n[t]
                };
            return !1
        }(), i.fn.emulateTransitionEnd = e, r.supportsTransitionEnd() && (i.event.special[r.TRANSITION_END] = {
            bindType: t.end,
            delegateType: t.end,
            handle: function(e) {
                if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }), r
    }(jQuery);
    s = jQuery, i = "." + (a = n = "metisMenu"), r = s.fn[n], l = {
        toggle: !0,
        preventDefault: !0,
        activeClass: "active",
        collapseClass: "collapse",
        collapseInClass: "in",
        collapsingClass: "collapsing",
        triggerElement: "a",
        parentTrigger: "li",
        subMenu: "ul"
    }, u = {
        SHOW: "show" + i,
        SHOWN: "shown" + i,
        HIDE: "hide" + i,
        HIDDEN: "hidden" + i,
        CLICK_DATA_API: "click" + i + ".data-api"
    }, c = function() {
        function r(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), this._element = e, this._config = this._getConfig(t), this._transitioning = null, this.init()
        }
        return r.prototype.init = function() {
            var o = this;
            s(this._element).find(this._config.parentTrigger + "." + this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr("aria-expanded", !0).addClass(this._config.collapseClass + " " + this._config.collapseInClass), s(this._element).find(this._config.parentTrigger).not("." + this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr("aria-expanded", !1).addClass(this._config.collapseClass), s(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).on(u.CLICK_DATA_API, function(e) {
                var t = s(this),
                    n = t.parent(o._config.parentTrigger),
                    i = n.siblings(o._config.parentTrigger).children(o._config.triggerElement),
                    r = n.children(o._config.subMenu);
                o._config.preventDefault && e.preventDefault(), "true" !== t.attr("aria-disabled") && (n.hasClass(o._config.activeClass) ? (t.attr("aria-expanded", !1), o._hide(r)) : (o._show(r), t.attr("aria-expanded", !0), o._config.toggle && i.attr("aria-expanded", !1)), o._config.onTransitionStart && o._config.onTransitionStart(e))
            })
        }, r.prototype._show = function(e) {
            if (!this._transitioning && !s(e).hasClass(this._config.collapsingClass)) {
                var t = this,
                    n = s(e),
                    i = s.Event(u.SHOW);
                if (n.trigger(i), !i.isDefaultPrevented()) {
                    n.parent(this._config.parentTrigger).addClass(this._config.activeClass), this._config.toggle && this._hide(n.parent(this._config.parentTrigger).siblings().children(this._config.subMenu + "." + this._config.collapseInClass).attr("aria-expanded", !1)), n.removeClass(this._config.collapseClass).addClass(this._config.collapsingClass).height(0), this.setTransitioning(!0);
                    var r = function() {
                        n.removeClass(t._config.collapsingClass).addClass(t._config.collapseClass + " " + t._config.collapseInClass).height("").attr("aria-expanded", !0), t.setTransitioning(!1), n.trigger(u.SHOWN)
                    };
                    h.supportsTransitionEnd() ? n.height(n[0].scrollHeight).one(h.TRANSITION_END, r).emulateTransitionEnd(350) : r()
                }
            }
        }, r.prototype._hide = function(e) {
            if (!this._transitioning && s(e).hasClass(this._config.collapseInClass)) {
                var t = this,
                    n = s(e),
                    i = s.Event(u.HIDE);
                if (n.trigger(i), !i.isDefaultPrevented()) {
                    n.parent(this._config.parentTrigger).removeClass(this._config.activeClass), n.height(n.height())[0].offsetHeight, n.addClass(this._config.collapsingClass).removeClass(this._config.collapseClass).removeClass(this._config.collapseInClass), this.setTransitioning(!0);
                    var r = function() {
                        t._transitioning && t._config.onTransitionEnd && t._config.onTransitionEnd(), t.setTransitioning(!1), n.trigger(u.HIDDEN), n.removeClass(t._config.collapsingClass).addClass(t._config.collapseClass).attr("aria-expanded", !1)
                    };
                    h.supportsTransitionEnd() ? 0 == n.height() || "none" == n.css("display") ? r() : n.height(0).one(h.TRANSITION_END, r).emulateTransitionEnd(350) : r()
                }
            }
        }, r.prototype.setTransitioning = function(e) {
            this._transitioning = e
        }, r.prototype.dispose = function() {
            s.removeData(this._element, a), s(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).off("click"), this._transitioning = null, this._config = null, this._element = null
        }, r.prototype._getConfig = function(e) {
            return e = s.extend({}, l, e)
        }, r._jQueryInterface = function(i) {
            return this.each(function() {
                var e = s(this),
                    t = e.data(a),
                    n = s.extend({}, l, e.data(), "object" === (void 0 === i ? "undefined" : o(i)) && i);
                if (!t && /dispose/.test(i) && this.dispose(), t || (t = new r(this, n), e.data(a, t)), "string" == typeof i) {
                    if (void 0 === t[i]) throw new Error('No method named "' + i + '"');
                    t[i]()
                }
            })
        }, r
    }(), s.fn[n] = c._jQueryInterface, s.fn[n].Constructor = c, s.fn[n].noConflict = function() {
        return s.fn[n] = r, c._jQueryInterface
    }
}),
function(E, B, U) {
    var e;
    e = function(R) {
        "use strict";
        var e, t, v, H, b, M, P, q, c, C, n, o, h, W, f, i, r, k, F, a, s, l, u, w, d, p, g, m, y, _ = {},
            x = 0;
        e = function() {
            return {
                common: {
                    type: "line",
                    lineColor: "#00f",
                    fillColor: "#cdf",
                    defaultPixelsPerValue: 3,
                    width: "auto",
                    height: "auto",
                    composite: !1,
                    tagValuesAttribute: "values",
                    tagOptionsPrefix: "spark",
                    enableTagOptions: !1,
                    enableHighlight: !0,
                    highlightLighten: 1.4,
                    tooltipSkipNull: !0,
                    tooltipPrefix: "",
                    tooltipSuffix: "",
                    disableHiddenCheck: !1,
                    numberFormatter: !1,
                    numberDigitGroupCount: 3,
                    numberDigitGroupSep: ",",
                    numberDecimalMark: ".",
                    disableTooltips: !1,
                    disableInteraction: !1
                },
                line: {
                    spotColor: "#f80",
                    highlightSpotColor: "#5f5",
                    highlightLineColor: "#f22",
                    spotRadius: 1.5,
                    minSpotColor: "#f80",
                    maxSpotColor: "#f80",
                    lineWidth: 1,
                    normalRangeMin: U,
                    normalRangeMax: U,
                    normalRangeColor: "#ccc",
                    drawNormalOnTop: !1,
                    chartRangeMin: U,
                    chartRangeMax: U,
                    chartRangeMinX: U,
                    chartRangeMaxX: U,
                    tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                },
                bar: {
                    barColor: "#3366cc",
                    negBarColor: "#f44",
                    stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                    zeroColor: U,
                    nullColor: U,
                    zeroAxis: !0,
                    barWidth: 4,
                    barSpacing: 1,
                    chartRangeMax: U,
                    chartRangeMin: U,
                    chartRangeClip: !1,
                    colorMap: U,
                    tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                },
                tristate: {
                    barWidth: 4,
                    barSpacing: 1,
                    posBarColor: "#6f6",
                    negBarColor: "#f44",
                    zeroBarColor: "#999",
                    colorMap: {},
                    tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                    tooltipValueLookups: {
                        map: {
                            "-1": "Loss",
                            0: "Draw",
                            1: "Win"
                        }
                    }
                },
                discrete: {
                    lineHeight: "auto",
                    thresholdColor: U,
                    thresholdValue: 0,
                    chartRangeMax: U,
                    chartRangeMin: U,
                    chartRangeClip: !1,
                    tooltipFormat: new v("{{prefix}}{{value}}{{suffix}}")
                },
                bullet: {
                    targetColor: "#f33",
                    targetWidth: 3,
                    performanceColor: "#33f",
                    rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
                    base: U,
                    tooltipFormat: new v("{{fieldkey:fields}} - {{value}}"),
                    tooltipValueLookups: {
                        fields: {
                            r: "Range",
                            p: "Performance",
                            t: "Target"
                        }
                    }
                },
                pie: {
                    offset: 0,
                    sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                    borderWidth: 0,
                    borderColor: "#000",
                    tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                },
                box: {
                    raw: !1,
                    boxLineColor: "#000",
                    boxFillColor: "#cdf",
                    whiskerColor: "#000",
                    outlierLineColor: "#333",
                    outlierFillColor: "#fff",
                    medianColor: "#f00",
                    showOutliers: !0,
                    outlierIQR: 1.5,
                    spotRadius: 1.5,
                    target: U,
                    targetColor: "#4a2",
                    chartRangeMax: U,
                    chartRangeMin: U,
                    tooltipFormat: new v("{{field:fields}}: {{value}}"),
                    tooltipFormatFieldlistKey: "field",
                    tooltipValueLookups: {
                        fields: {
                            lq: "Lower Quartile",
                            med: "Median",
                            uq: "Upper Quartile",
                            lo: "Left Outlier",
                            ro: "Right Outlier",
                            lw: "Left Whisker",
                            rw: "Right Whisker"
                        }
                    }
                }
            }
        }, t = function() {
            var e, t;
            return e = function() {
                this.init.apply(this, arguments)
            }, 1 < arguments.length ? (arguments[0] ? (e.prototype = R.extend(new arguments[0], arguments[arguments.length - 1]), e._super = arguments[0].prototype) : e.prototype = arguments[arguments.length - 1], 2 < arguments.length && ((t = Array.prototype.slice.call(arguments, 1, -1)).unshift(e.prototype), R.extend.apply(R, t))) : e.prototype = arguments[0], e.prototype.cls = e
        }, R.SPFormatClass = v = t({
            fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
            precre: /(\w+)\.(\d+)/,
            init: function(e, t) {
                this.format = e, this.fclass = t
            },
            render: function(e, t, n) {
                var i, r, o, s, a, l = this,
                    u = e;
                return this.format.replace(this.fre, function() {
                    return r = arguments[1], o = arguments[3], (i = l.precre.exec(r)) ? (a = i[2], r = i[1]) : a = !1, (s = u[r]) === U ? "" : o && t && t[o] ? t[o].get ? t[o].get(s) || s : t[o][s] || s : (c(s) && (s = n.get("numberFormatter") ? n.get("numberFormatter")(s) : h(s, a, n.get("numberDigitGroupCount"), n.get("numberDigitGroupSep"), n.get("numberDecimalMark"))), s)
                })
            }
        }), R.spformat = function(e, t) {
            return new v(e, t)
        }, H = function(e, t, n) {
            return e < t ? t : n < e ? n : e
        }, b = function(e, t) {
            var n;
            return 2 === t ? (n = B.floor(e.length / 2), e.length % 2 ? e[n] : (e[n - 1] + e[n]) / 2) : e.length % 2 ? (n = (e.length * t + t) / 4) % 1 ? (e[B.floor(n)] + e[B.floor(n) - 1]) / 2 : e[n - 1] : (n = (e.length * t + 2) / 4) % 1 ? (e[B.floor(n)] + e[B.floor(n) - 1]) / 2 : e[n - 1]
        }, M = function(e) {
            var t;
            switch (e) {
                case "undefined":
                    e = U;
                    break;
                case "null":
                    e = null;
                    break;
                case "true":
                    e = !0;
                    break;
                case "false":
                    e = !1;
                    break;
                default:
                    e == (t = parseFloat(e)) && (e = t)
            }
            return e
        }, P = function(e) {
            var t, n = [];
            for (t = e.length; t--;) n[t] = M(e[t]);
            return n
        }, q = function(e, t) {
            var n, i, r = [];
            for (n = 0, i = e.length; n < i; n++) e[n] !== t && r.push(e[n]);
            return r
        }, c = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, h = function(e, t, n, i, r) {
            var o, s;
            for (e = (!1 === t ? parseFloat(e).toString() : e.toFixed(t)).split(""), (o = (o = R.inArray(".", e)) < 0 ? e.length : o) < e.length && (e[o] = r), s = o - n; 0 < s; s -= n) e.splice(s, 0, i);
            return e.join("")
        }, C = function(e, t, n) {
            var i;
            for (i = t.length; i--;)
                if ((!n || null !== t[i]) && t[i] !== e) return !1;
            return !0
        }, o = function(e) {
            return R.isArray(e) ? e : [e]
        }, n = function(e) {
            var t, n;
            if (E.createStyleSheet) try {
                return void(E.createStyleSheet().cssText = e)
            } catch (e) {
                n = !0
            }(t = E.createElement("style")).type = "text/css", E.getElementsByTagName("head")[0].appendChild(t), n ? E.styleSheets[E.styleSheets.length - 1].cssText = e : t["string" == typeof E.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = e
        }, R.fn.simpledraw = function(e, t, n, i) {
            var r, o;
            if (n && (r = this.data("_jqs_vcanvas"))) return r;
            if (!1 === R.fn.sparkline.canvas) return !1;
            if (R.fn.sparkline.canvas === U) {
                var s = E.createElement("canvas");
                if (s.getContext && s.getContext("2d")) R.fn.sparkline.canvas = function(e, t, n, i) {
                    return new g(e, t, n, i)
                };
                else {
                    if (!E.namespaces || E.namespaces.v) return R.fn.sparkline.canvas = !1;
                    E.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), R.fn.sparkline.canvas = function(e, t, n, i) {
                        return new m(e, t, n)
                    }
                }
            }
            return e === U && (e = R(this).innerWidth()), t === U && (t = R(this).innerHeight()), r = R.fn.sparkline.canvas(e, t, this, i), (o = R(this).data("_jqs_mhandler")) && o.registerCanvas(r), r
        }, R.fn.cleardraw = function() {
            var e = this.data("_jqs_vcanvas");
            e && e.reset()
        }, R.RangeMapClass = W = t({
            init: function(e) {
                var t, n, i = [];
                for (t in e) e.hasOwnProperty(t) && "string" == typeof t && -1 < t.indexOf(":") && ((n = t.split(":"))[0] = 0 === n[0].length ? -1 / 0 : parseFloat(n[0]), n[1] = 0 === n[1].length ? 1 / 0 : parseFloat(n[1]), n[2] = e[t], i.push(n));
                this.map = e, this.rangelist = i || !1
            },
            get: function(e) {
                var t, n, i, r = this.rangelist;
                if ((i = this.map[e]) !== U) return i;
                if (r)
                    for (t = r.length; t--;)
                        if ((n = r[t])[0] <= e && n[1] >= e) return n[2];
                return U
            }
        }), R.range_map = function(e) {
            return new W(e)
        }, f = t({
            init: function(e, t) {
                var n = R(e);
                this.$el = n, this.options = t, this.currentPageX = 0, this.currentPageY = 0, this.el = e, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !t.get("disableTooltips"), this.highlightEnabled = !t.get("disableHighlight")
            },
            registerSparkline: function(e) {
                this.splist.push(e), this.over && this.updateDisplay()
            },
            registerCanvas: function(e) {
                var t = R(e.canvas);
                this.canvas = e, (this.$canvas = t).mouseenter(R.proxy(this.mouseenter, this)), t.mouseleave(R.proxy(this.mouseleave, this)), t.click(R.proxy(this.mouseclick, this))
            },
            reset: function(e) {
                this.splist = [], this.tooltip && e && (this.tooltip.remove(), this.tooltip = U)
            },
            mouseclick: function(e) {
                var t = R.Event("sparklineClick");
                t.originalEvent = e, t.sparklines = this.splist, this.$el.trigger(t)
            },
            mouseenter: function(e) {
                R(E.body).unbind("mousemove.jqs"), R(E.body).bind("mousemove.jqs", R.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = e.pageX, this.currentPageY = e.pageY, this.currentEl = e.target, !this.tooltip && this.displayTooltips && (this.tooltip = new i(this.options), this.tooltip.updatePosition(e.pageX, e.pageY)), this.updateDisplay()
            },
            mouseleave: function() {
                R(E.body).unbind("mousemove.jqs");
                var e, t = this.splist,
                    n = t.length,
                    i = !1;
                for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), e = 0; e < n; e++) t[e].clearRegionHighlight() && (i = !0);
                i && this.canvas.render()
            },
            mousemove: function(e) {
                this.currentPageX = e.pageX, this.currentPageY = e.pageY, this.currentEl = e.target, this.tooltip && this.tooltip.updatePosition(e.pageX, e.pageY), this.updateDisplay()
            },
            updateDisplay: function() {
                var e, t, n, i, r = this.splist,
                    o = r.length,
                    s = !1,
                    a = this.$canvas.offset(),
                    l = this.currentPageX - a.left,
                    u = this.currentPageY - a.top;
                if (this.over) {
                    for (t = 0; t < o; t++)(n = r[t].setRegionHighlight(this.currentEl, l, u)) && (s = !0);
                    if (s) {
                        if ((i = R.Event("sparklineRegionChange")).sparklines = this.splist, this.$el.trigger(i), this.tooltip) {
                            for (e = "", t = 0; t < o; t++) e += r[t].getCurrentRegionTooltip();
                            this.tooltip.setContent(e)
                        }
                        this.disableHighlight || this.canvas.render()
                    }
                    null === n && this.mouseleave()
                }
            }
        }), i = t({
            sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
            init: function(e) {
                var t, n = e.get("tooltipClassname", "jqstooltip"),
                    i = this.sizeStyle;
                this.container = e.get("tooltipContainer") || E.body, this.tooltipOffsetX = e.get("tooltipOffsetX", 10), this.tooltipOffsetY = e.get("tooltipOffsetY", 12), R("#jqssizetip").remove(), R("#jqstooltip").remove(), this.sizetip = R("<div/>", {
                    id: "jqssizetip",
                    style: i,
                    class: n
                }), this.tooltip = R("<div/>", {
                    id: "jqstooltip",
                    class: n
                }).appendTo(this.container), t = this.tooltip.offset(), this.offsetLeft = t.left, this.offsetTop = t.top, this.hidden = !0, R(window).unbind("resize.jqs scroll.jqs"), R(window).bind("resize.jqs scroll.jqs", R.proxy(this.updateWindowDims, this)), this.updateWindowDims()
            },
            updateWindowDims: function() {
                this.scrollTop = R(window).scrollTop(), this.scrollLeft = R(window).scrollLeft(), this.scrollRight = this.scrollLeft + R(window).width(), this.updatePosition()
            },
            getSize: function(e) {
                this.sizetip.html(e).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
            },
            setContent: function(e) {
                if (!e) return this.tooltip.css("visibility", "hidden"), void(this.hidden = !0);
                this.getSize(e), this.tooltip.html(e).css({
                    width: this.width,
                    height: this.height,
                    visibility: "visible"
                }), this.hidden && (this.hidden = !1, this.updatePosition())
            },
            updatePosition: function(e, t) {
                if (e === U) {
                    if (this.mousex === U) return;
                    e = this.mousex - this.offsetLeft, t = this.mousey - this.offsetTop
                } else this.mousex = e -= this.offsetLeft, this.mousey = t -= this.offsetTop;
                this.height && this.width && !this.hidden && (t -= this.height + this.tooltipOffsetY, e += this.tooltipOffsetX, t < this.scrollTop && (t = this.scrollTop), e < this.scrollLeft ? e = this.scrollLeft : e + this.width > this.scrollRight && (e = this.scrollRight - this.width), this.tooltip.css({
                    left: e,
                    top: t
                }))
            },
            remove: function() {
                this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = U, R(window).unbind("resize.jqs scroll.jqs")
            }
        }), R(function() {
            n('.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}')
        }), y = [], R.fn.sparkline = function(u, n) {
            return this.each(function() {
                var e, t, a = new R.fn.sparkline.options(this, n),
                    l = R(this);
                if (e = function() {
                        var e, t, n, i, r, o, s;
                        e = "html" === u || u === U ? ((s = this.getAttribute(a.get("tagValuesAttribute"))) !== U && null !== s || (s = l.html()), s.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : u, t = "auto" === a.get("width") ? e.length * a.get("defaultPixelsPerValue") : a.get("width"), "auto" === a.get("height") ? a.get("composite") && R.data(this, "_jqs_vcanvas") || ((i = E.createElement("span")).innerHTML = "a", l.html(i), n = R(i).innerHeight() || R(i).height(), R(i).remove(), i = null) : n = a.get("height"), a.get("disableInteraction") ? r = !1 : (r = R.data(this, "_jqs_mhandler")) ? a.get("composite") || r.reset() : (r = new f(this, a), R.data(this, "_jqs_mhandler", r)), !a.get("composite") || R.data(this, "_jqs_vcanvas") ? ((o = new(R.fn.sparkline[a.get("type")])(this, e, a, t, n)).render(), r && r.registerSparkline(o)) : R.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), R.data(this, "_jqs_errnotify", !0))
                    }, R(this).html() && !a.get("disableHiddenCheck") && R(this).is(":hidden") || !R(this).parents("body").length) {
                    if (!a.get("composite") && R.data(this, "_jqs_pending"))
                        for (t = y.length; t; t--) y[t - 1][0] == this && y.splice(t - 1, 1);
                    y.push([this, e]), R.data(this, "_jqs_pending", !0)
                } else e.call(this)
            })
        }, R.fn.sparkline.defaults = e(), R.sparkline_display_visible = function() {
            var e, t, n, i = [];
            for (t = 0, n = y.length; t < n; t++) e = y[t][0], R(e).is(":visible") && !R(e).parents().is(":hidden") ? (y[t][1].call(e), R.data(y[t][0], "_jqs_pending", !1), i.push(t)) : R(e).closest("html").length || R.data(e, "_jqs_pending") || (R.data(y[t][0], "_jqs_pending", !1), i.push(t));
            for (t = i.length; t; t--) y.splice(i[t - 1], 1)
        }, R.fn.sparkline.options = t({
            init: function(e, t) {
                var n, i, r, o;
                this.userOptions = t = t || {}, this.tag = e, this.tagValCache = {}, r = (i = R.fn.sparkline.defaults).common, this.tagOptionsPrefix = t.enableTagOptions && (t.tagOptionsPrefix || r.tagOptionsPrefix), n = (o = this.getTagSetting("type")) === _ ? i[t.type || r.type] : i[o], this.mergedOptions = R.extend({}, r, n, t)
            },
            getTagSetting: function(e) {
                var t, n, i, r, o = this.tagOptionsPrefix;
                if (!1 === o || o === U) return _;
                if (this.tagValCache.hasOwnProperty(e)) t = this.tagValCache.key;
                else {
                    if ((t = this.tag.getAttribute(o + e)) === U || null === t) t = _;
                    else if ("[" === t.substr(0, 1))
                        for (n = (t = t.substr(1, t.length - 2).split(",")).length; n--;) t[n] = M(t[n].replace(/(^\s*)|(\s*$)/g, ""));
                    else if ("{" === t.substr(0, 1))
                        for (i = t.substr(1, t.length - 2).split(","), t = {}, n = i.length; n--;) t[(r = i[n].split(":", 2))[0].replace(/(^\s*)|(\s*$)/g, "")] = M(r[1].replace(/(^\s*)|(\s*$)/g, ""));
                    else t = M(t);
                    this.tagValCache.key = t
                }
                return t
            },
            get: function(e, t) {
                var n, i = this.getTagSetting(e);
                return i !== _ ? i : (n = this.mergedOptions[e]) === U ? t : n
            }
        }), R.fn.sparkline._base = t({
            disabled: !1,
            init: function(e, t, n, i, r) {
                this.el = e, this.$el = R(e), this.values = t, this.options = n, this.width = i, this.height = r, this.currentRegion = U
            },
            initTarget: function() {
                var e = !this.options.get("disableInteraction");
                (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), e)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
            },
            render: function() {
                return !this.disabled || (this.el.innerHTML = "", !1)
            },
            getRegion: function(e, t) {},
            setRegionHighlight: function(e, t, n) {
                var i, r = this.currentRegion,
                    o = !this.options.get("disableHighlight");
                return t > this.canvasWidth || n > this.canvasHeight || t < 0 || n < 0 ? null : r !== (i = this.getRegion(e, t, n)) && (r !== U && o && this.removeHighlight(), (this.currentRegion = i) !== U && o && this.renderHighlight(), !0)
            },
            clearRegionHighlight: function() {
                return this.currentRegion !== U && (this.removeHighlight(), !(this.currentRegion = U))
            },
            renderHighlight: function() {
                this.changeHighlight(!0)
            },
            removeHighlight: function() {
                this.changeHighlight(!1)
            },
            changeHighlight: function(e) {},
            getCurrentRegionTooltip: function() {
                var e, t, n, i, r, o, s, a, l, u, c, h, f, d, p = this.options,
                    g = "",
                    m = [];
                if (this.currentRegion === U) return "";
                if (e = this.getCurrentRegionFields(), c = p.get("tooltipFormatter")) return c(this, p, e);
                if (p.get("tooltipChartTitle") && (g += '<div class="jqs jqstitle">' + p.get("tooltipChartTitle") + "</div>\n"), !(t = this.options.get("tooltipFormat"))) return "";
                if (R.isArray(t) || (t = [t]), R.isArray(e) || (e = [e]), s = this.options.get("tooltipFormatFieldlist"), a = this.options.get("tooltipFormatFieldlistKey"), s && a) {
                    for (l = [], o = e.length; o--;) u = e[o][a], -1 != (d = R.inArray(u, s)) && (l[d] = e[o]);
                    e = l
                }
                for (n = t.length, f = e.length, o = 0; o < n; o++)
                    for ("string" == typeof(h = t[o]) && (h = new v(h)), i = h.fclass || "jqsfield", d = 0; d < f; d++) e[d].isNull && p.get("tooltipSkipNull") || (R.extend(e[d], {
                        prefix: p.get("tooltipPrefix"),
                        suffix: p.get("tooltipSuffix")
                    }), r = h.render(e[d], p.get("tooltipValueLookups"), p), m.push('<div class="' + i + '">' + r + "</div>"));
                return m.length ? g + m.join("\n") : ""
            },
            getCurrentRegionFields: function() {},
            calcHighlightColor: function(e, t) {
                var n, i, r, o, s = t.get("highlightColor"),
                    a = t.get("highlightLighten");
                if (s) return s;
                if (a && (n = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e))) {
                    for (r = [], i = 4 === e.length ? 16 : 1, o = 0; o < 3; o++) r[o] = H(B.round(parseInt(n[o + 1], 16) * i * a), 0, 255);
                    return "rgb(" + r.join(",") + ")"
                }
                return e
            }
        }), r = {
            changeHighlight: function(e) {
                var t, n = this.currentRegion,
                    i = this.target,
                    r = this.regionShapes[n];
                r && (t = this.renderRegion(n, e), R.isArray(t) || R.isArray(r) ? (i.replaceWithShapes(r, t), this.regionShapes[n] = R.map(t, function(e) {
                    return e.id
                })) : (i.replaceWithShape(r, t), this.regionShapes[n] = t.id))
            },
            render: function() {
                var e, t, n, i, r = this.values,
                    o = this.target,
                    s = this.regionShapes;
                if (this.cls._super.render.call(this)) {
                    for (n = r.length; n--;)
                        if (e = this.renderRegion(n))
                            if (R.isArray(e)) {
                                for (t = [], i = e.length; i--;) e[i].append(), t.push(e[i].id);
                                s[n] = t
                            } else e.append(), s[n] = e.id;
                    else s[n] = null;
                    o.render()
                }
            }
        }, R.fn.sparkline.line = k = t(R.fn.sparkline._base, {
            type: "line",
            init: function(e, t, n, i, r) {
                k._super.init.call(this, e, t, n, i, r), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
            },
            getRegion: function(e, t, n) {
                var i, r = this.regionMap;
                for (i = r.length; i--;)
                    if (null !== r[i] && t >= r[i][0] && t <= r[i][1]) return r[i][2];
                return U
            },
            getCurrentRegionFields: function() {
                var e = this.currentRegion;
                return {
                    isNull: null === this.yvalues[e],
                    x: this.xvalues[e],
                    y: this.yvalues[e],
                    color: this.options.get("lineColor"),
                    fillColor: this.options.get("fillColor"),
                    offset: e
                }
            },
            renderHighlight: function() {
                var e, t, n = this.currentRegion,
                    i = this.target,
                    r = this.vertices[n],
                    o = this.options,
                    s = o.get("spotRadius"),
                    a = o.get("highlightSpotColor"),
                    l = o.get("highlightLineColor");
                r && (s && a && (e = i.drawCircle(r[0], r[1], s, U, a), this.highlightSpotId = e.id, i.insertAfterShape(this.lastShapeId, e)), l && (t = i.drawLine(r[0], this.canvasTop, r[0], this.canvasTop + this.canvasHeight, l), this.highlightLineId = t.id, i.insertAfterShape(this.lastShapeId, t)))
            },
            removeHighlight: function() {
                var e = this.target;
                this.highlightSpotId && (e.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (e.removeShapeId(this.highlightLineId), this.highlightLineId = null)
            },
            scanValues: function() {
                var e, t, n, i, r, o = this.values,
                    s = o.length,
                    a = this.xvalues,
                    l = this.yvalues,
                    u = this.yminmax;
                for (e = 0; e < s; e++) t = o[e], n = "string" == typeof o[e], i = "object" == typeof o[e] && o[e] instanceof Array, r = n && o[e].split(":"), n && 2 === r.length ? (a.push(Number(r[0])), l.push(Number(r[1])), u.push(Number(r[1]))) : i ? (a.push(t[0]), l.push(t[1]), u.push(t[1])) : (a.push(e), null === o[e] || "null" === o[e] ? l.push(null) : (l.push(Number(t)), u.push(Number(t))));
                this.options.get("xvalues") && (a = this.options.get("xvalues")), this.maxy = this.maxyorg = B.max.apply(B, u), this.miny = this.minyorg = B.min.apply(B, u), this.maxx = B.max.apply(B, a), this.minx = B.min.apply(B, a), this.xvalues = a, this.yvalues = l, this.yminmax = u
            },
            processRangeOptions: function() {
                var e = this.options,
                    t = e.get("normalRangeMin"),
                    n = e.get("normalRangeMax");
                t !== U && (t < this.miny && (this.miny = t), n > this.maxy && (this.maxy = n)), e.get("chartRangeMin") !== U && (e.get("chartRangeClip") || e.get("chartRangeMin") < this.miny) && (this.miny = e.get("chartRangeMin")), e.get("chartRangeMax") !== U && (e.get("chartRangeClip") || e.get("chartRangeMax") > this.maxy) && (this.maxy = e.get("chartRangeMax")), e.get("chartRangeMinX") !== U && (e.get("chartRangeClipX") || e.get("chartRangeMinX") < this.minx) && (this.minx = e.get("chartRangeMinX")), e.get("chartRangeMaxX") !== U && (e.get("chartRangeClipX") || e.get("chartRangeMaxX") > this.maxx) && (this.maxx = e.get("chartRangeMaxX"))
            },
            drawNormalRange: function(e, t, n, i, r) {
                var o = this.options.get("normalRangeMin"),
                    s = this.options.get("normalRangeMax"),
                    a = t + B.round(n - n * ((s - this.miny) / r)),
                    l = B.round(n * (s - o) / r);
                this.target.drawRect(e, a, i, l, U, this.options.get("normalRangeColor")).append()
            },
            render: function() {
                var e, t, n, i, r, o, s, a, l, u, c, h, f, d, p, g, m, v, y, _, b, w, C, x, E = this.options,
                    T = this.target,
                    S = this.canvasWidth,
                    A = this.canvasHeight,
                    D = this.vertices,
                    N = E.get("spotRadius"),
                    I = this.regionMap;
                if (k._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), w = this.xvalues, C = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
                    for (i = r = 0, e = this.maxx - this.minx == 0 ? 1 : this.maxx - this.minx, t = this.maxy - this.miny == 0 ? 1 : this.maxy - this.miny, n = this.yvalues.length - 1, N && (S < 4 * N || A < 4 * N) && (N = 0), N && (((_ = E.get("highlightSpotColor") && !E.get("disableInteraction")) || E.get("minSpotColor") || E.get("spotColor") && C[n] === this.miny) && (A -= B.ceil(N)), (_ || E.get("maxSpotColor") || E.get("spotColor") && C[n] === this.maxy) && (A -= B.ceil(N), i += B.ceil(N)), (_ || (E.get("minSpotColor") || E.get("maxSpotColor")) && (C[0] === this.miny || C[0] === this.maxy)) && (r += B.ceil(N), S -= B.ceil(N)), (_ || E.get("spotColor") || E.get("minSpotColor") || E.get("maxSpotColor") && (C[n] === this.miny || C[n] === this.maxy)) && (S -= B.ceil(N))), A--, E.get("normalRangeMin") === U || E.get("drawNormalOnTop") || this.drawNormalRange(r, i, A, S, t), a = [s = []], f = d = null, p = C.length, x = 0; x < p; x++) l = w[x], c = w[x + 1], u = C[x], d = (h = r + B.round((l - this.minx) * (S / e))) + ((x < p - 1 ? r + B.round((c - this.minx) * (S / e)) : S) - h) / 2, I[x] = [f || 0, d, x], f = d, null === u ? x && (null !== C[x - 1] && (s = [], a.push(s)), D.push(null)) : (u < this.miny && (u = this.miny), u > this.maxy && (u = this.maxy), s.length || s.push([h, i + A]), o = [h, i + B.round(A - A * ((u - this.miny) / t))], s.push(o), D.push(o));
                    for (g = [], m = [], v = a.length, x = 0; x < v; x++)(s = a[x]).length && (E.get("fillColor") && (s.push([s[s.length - 1][0], i + A]), m.push(s.slice(0)), s.pop()), 2 < s.length && (s[0] = [s[0][0], s[1][1]]), g.push(s));
                    for (v = m.length, x = 0; x < v; x++) T.drawShape(m[x], E.get("fillColor"), E.get("fillColor")).append();
                    for (E.get("normalRangeMin") !== U && E.get("drawNormalOnTop") && this.drawNormalRange(r, i, A, S, t), v = g.length, x = 0; x < v; x++) T.drawShape(g[x], E.get("lineColor"), U, E.get("lineWidth")).append();
                    if (N && E.get("valueSpots"))
                        for ((y = E.get("valueSpots")).get === U && (y = new W(y)), x = 0; x < p; x++)(b = y.get(C[x])) && T.drawCircle(r + B.round((w[x] - this.minx) * (S / e)), i + B.round(A - A * ((C[x] - this.miny) / t)), N, U, b).append();
                    N && E.get("spotColor") && null !== C[n] && T.drawCircle(r + B.round((w[w.length - 1] - this.minx) * (S / e)), i + B.round(A - A * ((C[n] - this.miny) / t)), N, U, E.get("spotColor")).append(), this.maxy !== this.minyorg && (N && E.get("minSpotColor") && (l = w[R.inArray(this.minyorg, C)], T.drawCircle(r + B.round((l - this.minx) * (S / e)), i + B.round(A - A * ((this.minyorg - this.miny) / t)), N, U, E.get("minSpotColor")).append()), N && E.get("maxSpotColor") && (l = w[R.inArray(this.maxyorg, C)], T.drawCircle(r + B.round((l - this.minx) * (S / e)), i + B.round(A - A * ((this.maxyorg - this.miny) / t)), N, U, E.get("maxSpotColor")).append())), this.lastShapeId = T.getLastShapeId(), this.canvasTop = i, T.render()
                }
            }
        }), R.fn.sparkline.bar = F = t(R.fn.sparkline._base, r, {
            type: "bar",
            init: function(e, t, n, i, r) {
                var o, s, a, l, u, c, h, f, d, p, g, m, v, y, _, b, w, C, x, E, T, S = parseInt(n.get("barWidth"), 10),
                    A = parseInt(n.get("barSpacing"), 10),
                    D = n.get("chartRangeMin"),
                    N = n.get("chartRangeMax"),
                    I = n.get("chartRangeClip"),
                    k = 1 / 0,
                    O = -1 / 0;
                for (F._super.init.call(this, e, t, n, i, r), c = 0, h = t.length; c < h; c++)((o = "string" == typeof(E = t[c]) && -1 < E.indexOf(":")) || R.isArray(E)) && (_ = !0, o && (E = t[c] = P(E.split(":"))), E = q(E, null), (s = B.min.apply(B, E)) < k && (k = s), O < (a = B.max.apply(B, E)) && (O = a));
                this.stacked = _, this.regionShapes = {}, this.barWidth = S, this.barSpacing = A, this.totalBarWidth = S + A, this.width = i = t.length * S + (t.length - 1) * A, this.initTarget(), I && (v = D === U ? -1 / 0 : D, y = N === U ? 1 / 0 : N), u = [], l = _ ? [] : u;
                var L = [],
                    j = [];
                for (c = 0, h = t.length; c < h; c++)
                    if (_)
                        for (b = t[c], t[c] = x = [], L[c] = 0, l[c] = j[c] = 0, w = 0, C = b.length; w < C; w++) null !== (E = x[w] = I ? H(b[w], v, y) : b[w]) && (0 < E && (L[c] += E), k < 0 && 0 < O ? E < 0 ? j[c] += B.abs(E) : l[c] += E : l[c] += B.abs(E - (E < 0 ? O : k)), u.push(E));
                    else E = I ? H(t[c], v, y) : t[c], null !== (E = t[c] = M(E)) && u.push(E);
                this.max = m = B.max.apply(B, u), this.min = g = B.min.apply(B, u), this.stackMax = O = _ ? B.max.apply(B, L) : m, this.stackMin = k = _ ? B.min.apply(B, u) : g, n.get("chartRangeMin") !== U && (n.get("chartRangeClip") || n.get("chartRangeMin") < g) && (g = n.get("chartRangeMin")), n.get("chartRangeMax") !== U && (n.get("chartRangeClip") || n.get("chartRangeMax") > m) && (m = n.get("chartRangeMax")), this.zeroAxis = d = n.get("zeroAxis", !0), p = g <= 0 && 0 <= m && d ? 0 : 0 == d ? g : 0 < g ? g : m, this.xaxisOffset = p, f = _ ? B.max.apply(B, l) + B.max.apply(B, j) : m - g, this.canvasHeightEf = d && g < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, g < p ? (T = ((_ && 0 <= m ? O : m) - p) / f * this.canvasHeight) !== B.ceil(T) && (this.canvasHeightEf -= 2, T = B.ceil(T)) : T = this.canvasHeight, this.yoffset = T, R.isArray(n.get("colorMap")) ? (this.colorMapByIndex = n.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = n.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === U && (this.colorMapByValue = new W(this.colorMapByValue))), this.range = f
            },
            getRegion: function(e, t, n) {
                var i = B.floor(t / this.totalBarWidth);
                return i < 0 || i >= this.values.length ? U : i
            },
            getCurrentRegionFields: function() {
                var e, t, n = this.currentRegion,
                    i = o(this.values[n]),
                    r = [];
                for (t = i.length; t--;) e = i[t], r.push({
                    isNull: null === e,
                    value: e,
                    color: this.calcColor(t, e, n),
                    offset: n
                });
                return r
            },
            calcColor: function(e, t, n) {
                var i, r, o = this.colorMapByIndex,
                    s = this.colorMapByValue,
                    a = this.options;
                return i = this.stacked ? a.get("stackedBarColor") : t < 0 ? a.get("negBarColor") : a.get("barColor"), 0 === t && a.get("zeroColor") !== U && (i = a.get("zeroColor")), s && (r = s.get(t)) ? i = r : o && o.length > n && (i = o[n]), R.isArray(i) ? i[e % i.length] : i
            },
            renderRegion: function(e, t) {
                var n, i, r, o, s, a, l, u, c, h, f = this.values[e],
                    d = this.options,
                    p = this.xaxisOffset,
                    g = [],
                    m = this.range,
                    v = this.stacked,
                    y = this.target,
                    _ = e * this.totalBarWidth,
                    b = this.canvasHeightEf,
                    w = this.yoffset;
                if (l = (f = R.isArray(f) ? f : [f]).length, u = f[0], o = C(null, f), h = C(p, f, !0), o) return d.get("nullColor") ? (r = t ? d.get("nullColor") : this.calcHighlightColor(d.get("nullColor"), d), n = 0 < w ? w - 1 : w, y.drawRect(_, n, this.barWidth - 1, 0, r, r)) : U;
                for (s = w, a = 0; a < l; a++) {
                    if (u = f[a], v && u === p) {
                        if (!h || c) continue;
                        c = !0
                    }
                    i = 0 < m ? B.floor(b * (B.abs(u - p) / m)) + 1 : 1, u < p || u === p && 0 === w ? (n = s, s += i) : (n = w - i, w -= i), r = this.calcColor(a, u, e), t && (r = this.calcHighlightColor(r, d)), g.push(y.drawRect(_, n, this.barWidth - 1, i - 1, r, r))
                }
                return 1 === g.length ? g[0] : g
            }
        }), R.fn.sparkline.tristate = a = t(R.fn.sparkline._base, r, {
            type: "tristate",
            init: function(e, t, n, i, r) {
                var o = parseInt(n.get("barWidth"), 10),
                    s = parseInt(n.get("barSpacing"), 10);
                a._super.init.call(this, e, t, n, i, r), this.regionShapes = {}, this.barWidth = o, this.barSpacing = s, this.totalBarWidth = o + s, this.values = R.map(t, Number), this.width = i = t.length * o + (t.length - 1) * s, R.isArray(n.get("colorMap")) ? (this.colorMapByIndex = n.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = n.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === U && (this.colorMapByValue = new W(this.colorMapByValue))), this.initTarget()
            },
            getRegion: function(e, t, n) {
                return B.floor(t / this.totalBarWidth)
            },
            getCurrentRegionFields: function() {
                var e = this.currentRegion;
                return {
                    isNull: this.values[e] === U,
                    value: this.values[e],
                    color: this.calcColor(this.values[e], e),
                    offset: e
                }
            },
            calcColor: function(e, t) {
                var n, i = this.values,
                    r = this.options,
                    o = this.colorMapByIndex,
                    s = this.colorMapByValue;
                return s && (n = s.get(e)) ? n : o && o.length > t ? o[t] : i[t] < 0 ? r.get("negBarColor") : 0 < i[t] ? r.get("posBarColor") : r.get("zeroBarColor")
            },
            renderRegion: function(e, t) {
                var n, i, r, o, s, a, l = this.values,
                    u = this.options,
                    c = this.target;
                if (n = c.pixelHeight, r = B.round(n / 2), o = e * this.totalBarWidth, i = l[e] < 0 ? (s = r) - 1 : 0 < l[e] ? (s = 0, r - 1) : (s = r - 1, 2), null !== (a = this.calcColor(l[e], e))) return t && (a = this.calcHighlightColor(a, u)), c.drawRect(o, s, this.barWidth - 1, i - 1, a, a)
            }
        }), R.fn.sparkline.discrete = s = t(R.fn.sparkline._base, r, {
            type: "discrete",
            init: function(e, t, n, i, r) {
                s._super.init.call(this, e, t, n, i, r), this.regionShapes = {}, this.values = t = R.map(t, Number), this.min = B.min.apply(B, t), this.max = B.max.apply(B, t), this.range = this.max - this.min, this.width = i = "auto" === n.get("width") ? 2 * t.length : this.width, this.interval = B.floor(i / t.length), this.itemWidth = i / t.length, n.get("chartRangeMin") !== U && (n.get("chartRangeClip") || n.get("chartRangeMin") < this.min) && (this.min = n.get("chartRangeMin")), n.get("chartRangeMax") !== U && (n.get("chartRangeClip") || n.get("chartRangeMax") > this.max) && (this.max = n.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === n.get("lineHeight") ? B.round(.3 * this.canvasHeight) : n.get("lineHeight"))
            },
            getRegion: function(e, t, n) {
                return B.floor(t / this.itemWidth)
            },
            getCurrentRegionFields: function() {
                var e = this.currentRegion;
                return {
                    isNull: this.values[e] === U,
                    value: this.values[e],
                    offset: e
                }
            },
            renderRegion: function(e, t) {
                var n, i, r, o, s = this.values,
                    a = this.options,
                    l = this.min,
                    u = this.max,
                    c = this.range,
                    h = this.interval,
                    f = this.target,
                    d = this.canvasHeight,
                    p = this.lineHeight,
                    g = d - p;
                return i = H(s[e], l, u), o = e * h, n = B.round(g - g * ((i - l) / c)), r = a.get("thresholdColor") && i < a.get("thresholdValue") ? a.get("thresholdColor") : a.get("lineColor"), t && (r = this.calcHighlightColor(r, a)), f.drawLine(o, n, o, n + p, r)
            }
        }), R.fn.sparkline.bullet = l = t(R.fn.sparkline._base, {
            type: "bullet",
            init: function(e, t, n, i, r) {
                var o, s, a;
                l._super.init.call(this, e, t, n, i, r), this.values = t = P(t), (a = t.slice())[0] = null === a[0] ? a[2] : a[0], a[1] = null === t[1] ? a[2] : a[1], o = B.min.apply(B, t), s = B.max.apply(B, t), o = n.get("base") === U ? o < 0 ? o : 0 : n.get("base"), this.min = o, this.max = s, this.range = s - o, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = i = "auto" === n.get("width") ? "4.0em" : i, this.target = this.$el.simpledraw(i, r, n.get("composite")), t.length || (this.disabled = !0), this.initTarget()
            },
            getRegion: function(e, t, n) {
                var i = this.target.getShapeAt(e, t, n);
                return i !== U && this.shapes[i] !== U ? this.shapes[i] : U
            },
            getCurrentRegionFields: function() {
                var e = this.currentRegion;
                return {
                    fieldkey: e.substr(0, 1),
                    value: this.values[e.substr(1)],
                    region: e
                }
            },
            changeHighlight: function(e) {
                var t, n = this.currentRegion,
                    i = this.valueShapes[n];
                switch (delete this.shapes[i], n.substr(0, 1)) {
                    case "r":
                        t = this.renderRange(n.substr(1), e);
                        break;
                    case "p":
                        t = this.renderPerformance(e);
                        break;
                    case "t":
                        t = this.renderTarget(e)
                }
                this.valueShapes[n] = t.id, this.shapes[t.id] = n, this.target.replaceWithShape(i, t)
            },
            renderRange: function(e, t) {
                var n = this.values[e],
                    i = B.round(this.canvasWidth * ((n - this.min) / this.range)),
                    r = this.options.get("rangeColors")[e - 2];
                return t && (r = this.calcHighlightColor(r, this.options)), this.target.drawRect(0, 0, i - 1, this.canvasHeight - 1, r, r)
            },
            renderPerformance: function(e) {
                var t = this.values[1],
                    n = B.round(this.canvasWidth * ((t - this.min) / this.range)),
                    i = this.options.get("performanceColor");
                return e && (i = this.calcHighlightColor(i, this.options)), this.target.drawRect(0, B.round(.3 * this.canvasHeight), n - 1, B.round(.4 * this.canvasHeight) - 1, i, i)
            },
            renderTarget: function(e) {
                var t = this.values[0],
                    n = B.round(this.canvasWidth * ((t - this.min) / this.range) - this.options.get("targetWidth") / 2),
                    i = B.round(.1 * this.canvasHeight),
                    r = this.canvasHeight - 2 * i,
                    o = this.options.get("targetColor");
                return e && (o = this.calcHighlightColor(o, this.options)), this.target.drawRect(n, i, this.options.get("targetWidth") - 1, r - 1, o, o)
            },
            render: function() {
                var e, t, n = this.values.length,
                    i = this.target;
                if (l._super.render.call(this)) {
                    for (e = 2; e < n; e++) t = this.renderRange(e).append(), this.shapes[t.id] = "r" + e, this.valueShapes["r" + e] = t.id;
                    null !== this.values[1] && (t = this.renderPerformance().append(), this.shapes[t.id] = "p1", this.valueShapes.p1 = t.id), null !== this.values[0] && (t = this.renderTarget().append(), this.shapes[t.id] = "t0", this.valueShapes.t0 = t.id), i.render()
                }
            }
        }), R.fn.sparkline.pie = u = t(R.fn.sparkline._base, {
            type: "pie",
            init: function(e, t, n, i, r) {
                var o, s = 0;
                if (u._super.init.call(this, e, t, n, i, r), this.shapes = {}, this.valueShapes = {}, this.values = t = R.map(t, Number), "auto" === n.get("width") && (this.width = this.height), 0 < t.length)
                    for (o = t.length; o--;) s += t[o];
                this.total = s, this.initTarget(), this.radius = B.floor(B.min(this.canvasWidth, this.canvasHeight) / 2)
            },
            getRegion: function(e, t, n) {
                var i = this.target.getShapeAt(e, t, n);
                return i !== U && this.shapes[i] !== U ? this.shapes[i] : U
            },
            getCurrentRegionFields: function() {
                var e = this.currentRegion;
                return {
                    isNull: this.values[e] === U,
                    value: this.values[e],
                    percent: this.values[e] / this.total * 100,
                    color: this.options.get("sliceColors")[e % this.options.get("sliceColors").length],
                    offset: e
                }
            },
            changeHighlight: function(e) {
                var t = this.currentRegion,
                    n = this.renderSlice(t, e),
                    i = this.valueShapes[t];
                delete this.shapes[i], this.target.replaceWithShape(i, n), this.valueShapes[t] = n.id, this.shapes[n.id] = t
            },
            renderSlice: function(e, t) {
                var n, i, r, o, s, a = this.target,
                    l = this.options,
                    u = this.radius,
                    c = l.get("borderWidth"),
                    h = l.get("offset"),
                    f = 2 * B.PI,
                    d = this.values,
                    p = this.total,
                    g = h ? 2 * B.PI * (h / 360) : 0;
                for (o = d.length, r = 0; r < o; r++) {
                    if (i = n = g, 0 < p && (i = g + f * (d[r] / p)), e === r) return s = l.get("sliceColors")[r % l.get("sliceColors").length], t && (s = this.calcHighlightColor(s, l)), a.drawPieSlice(u, u, u - c, n, i, U, s);
                    g = i
                }
            },
            render: function() {
                var e, t, n = this.target,
                    i = this.values,
                    r = this.options,
                    o = this.radius,
                    s = r.get("borderWidth");
                if (u._super.render.call(this)) {
                    for (s && n.drawCircle(o, o, B.floor(o - s / 2), r.get("borderColor"), U, s).append(), t = i.length; t--;) i[t] && (e = this.renderSlice(t).append(), this.valueShapes[t] = e.id, this.shapes[e.id] = t);
                    n.render()
                }
            }
        }), R.fn.sparkline.box = w = t(R.fn.sparkline._base, {
            type: "box",
            init: function(e, t, n, i, r) {
                w._super.init.call(this, e, t, n, i, r), this.values = R.map(t, Number), this.width = "auto" === n.get("width") ? "4.0em" : i, this.initTarget(), this.values.length || (this.disabled = 1)
            },
            getRegion: function() {
                return 1
            },
            getCurrentRegionFields: function() {
                var e = [{
                    field: "lq",
                    value: this.quartiles[0]
                }, {
                    field: "med",
                    value: this.quartiles[1]
                }, {
                    field: "uq",
                    value: this.quartiles[2]
                }];
                return this.loutlier !== U && e.push({
                    field: "lo",
                    value: this.loutlier
                }), this.routlier !== U && e.push({
                    field: "ro",
                    value: this.routlier
                }), this.lwhisker !== U && e.push({
                    field: "lw",
                    value: this.lwhisker
                }), this.rwhisker !== U && e.push({
                    field: "rw",
                    value: this.rwhisker
                }), e
            },
            render: function() {
                var e, t, n, i, r, o, s, a, l, u, c, h = this.target,
                    f = this.values,
                    d = f.length,
                    p = this.options,
                    g = this.canvasWidth,
                    m = this.canvasHeight,
                    v = p.get("chartRangeMin") === U ? B.min.apply(B, f) : p.get("chartRangeMin"),
                    y = p.get("chartRangeMax") === U ? B.max.apply(B, f) : p.get("chartRangeMax"),
                    _ = 0;
                if (w._super.render.call(this)) {
                    if (p.get("raw")) p.get("showOutliers") && 5 < f.length ? (t = f[0], e = f[1], i = f[2], r = f[3], o = f[4], s = f[5], a = f[6]) : (e = f[0], i = f[1], r = f[2], o = f[3], s = f[4]);
                    else if (f.sort(function(e, t) {
                            return e - t
                        }), i = b(f, 1), r = b(f, 2), n = (o = b(f, 3)) - i, p.get("showOutliers")) {
                        for (e = s = U, l = 0; l < d; l++) e === U && f[l] > i - n * p.get("outlierIQR") && (e = f[l]), f[l] < o + n * p.get("outlierIQR") && (s = f[l]);
                        t = f[0], a = f[d - 1]
                    } else e = f[0], s = f[d - 1];
                    this.quartiles = [i, r, o], this.lwhisker = e, this.rwhisker = s, this.loutlier = t, this.routlier = a, c = g / (y - v + 1), p.get("showOutliers") && (_ = B.ceil(p.get("spotRadius")), c = (g -= 2 * B.ceil(p.get("spotRadius"))) / (y - v + 1), t < e && h.drawCircle((t - v) * c + _, m / 2, p.get("spotRadius"), p.get("outlierLineColor"), p.get("outlierFillColor")).append(), s < a && h.drawCircle((a - v) * c + _, m / 2, p.get("spotRadius"), p.get("outlierLineColor"), p.get("outlierFillColor")).append()), h.drawRect(B.round((i - v) * c + _), B.round(.1 * m), B.round((o - i) * c), B.round(.8 * m), p.get("boxLineColor"), p.get("boxFillColor")).append(), h.drawLine(B.round((e - v) * c + _), B.round(m / 2), B.round((i - v) * c + _), B.round(m / 2), p.get("lineColor")).append(), h.drawLine(B.round((e - v) * c + _), B.round(m / 4), B.round((e - v) * c + _), B.round(m - m / 4), p.get("whiskerColor")).append(), h.drawLine(B.round((s - v) * c + _), B.round(m / 2), B.round((o - v) * c + _), B.round(m / 2), p.get("lineColor")).append(), h.drawLine(B.round((s - v) * c + _), B.round(m / 4), B.round((s - v) * c + _), B.round(m - m / 4), p.get("whiskerColor")).append(), h.drawLine(B.round((r - v) * c + _), B.round(.1 * m), B.round((r - v) * c + _), B.round(.9 * m), p.get("medianColor")).append(), p.get("target") && (u = B.ceil(p.get("spotRadius")), h.drawLine(B.round((p.get("target") - v) * c + _), B.round(m / 2 - u), B.round((p.get("target") - v) * c + _), B.round(m / 2 + u), p.get("targetColor")).append(), h.drawLine(B.round((p.get("target") - v) * c + _ - u), B.round(m / 2), B.round((p.get("target") - v) * c + _ + u), B.round(m / 2), p.get("targetColor")).append()), h.render()
                }
            }
        }), d = t({
            init: function(e, t, n, i) {
                this.target = e, this.id = t, this.type = n, this.args = i
            },
            append: function() {
                return this.target.appendShape(this), this
            }
        }), p = t({
            _pxregex: /(\d+)(px)?\s*$/i,
            init: function(e, t, n) {
                e && (this.width = e, this.height = t, this.target = n, this.lastShapeId = null, n[0] && (n = n[0]), R.data(n, "_jqs_vcanvas", this))
            },
            drawLine: function(e, t, n, i, r, o) {
                return this.drawShape([
                    [e, t],
                    [n, i]
                ], r, o)
            },
            drawShape: function(e, t, n, i) {
                return this._genShape("Shape", [e, t, n, i])
            },
            drawCircle: function(e, t, n, i, r, o) {
                return this._genShape("Circle", [e, t, n, i, r, o])
            },
            drawPieSlice: function(e, t, n, i, r, o, s) {
                return this._genShape("PieSlice", [e, t, n, i, r, o, s])
            },
            drawRect: function(e, t, n, i, r, o) {
                return this._genShape("Rect", [e, t, n, i, r, o])
            },
            getElement: function() {
                return this.canvas
            },
            getLastShapeId: function() {
                return this.lastShapeId
            },
            reset: function() {
                alert("reset not implemented")
            },
            _insert: function(e, t) {
                R(t).html(e)
            },
            _calculatePixelDims: function(e, t, n) {
                var i;
                i = this._pxregex.exec(t), this.pixelHeight = i ? i[1] : R(n).height(), i = this._pxregex.exec(e), this.pixelWidth = i ? i[1] : R(n).width()
            },
            _genShape: function(e, t) {
                var n = x++;
                return t.unshift(n), new d(this, n, e, t)
            },
            appendShape: function(e) {
                alert("appendShape not implemented")
            },
            replaceWithShape: function(e, t) {
                alert("replaceWithShape not implemented")
            },
            insertAfterShape: function(e, t) {
                alert("insertAfterShape not implemented")
            },
            removeShapeId: function(e) {
                alert("removeShapeId not implemented")
            },
            getShapeAt: function(e, t, n) {
                alert("getShapeAt not implemented")
            },
            render: function() {
                alert("render not implemented")
            }
        }), g = t(p, {
            init: function(e, t, n, i) {
                g._super.init.call(this, e, t, n), this.canvas = E.createElement("canvas"), n[0] && (n = n[0]), R.data(n, "_jqs_vcanvas", this), R(this.canvas).css({
                    display: "inline-block",
                    width: e,
                    height: t,
                    verticalAlign: "top"
                }), this._insert(this.canvas, n), this._calculatePixelDims(e, t, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = i, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = U, R(this.canvas).css({
                    width: this.pixelWidth,
                    height: this.pixelHeight
                })
            },
            _getContext: function(e, t, n) {
                var i = this.canvas.getContext("2d");
                return e !== U && (i.strokeStyle = e), i.lineWidth = n === U ? 1 : n, t !== U && (i.fillStyle = t), i
            },
            reset: function() {
                this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = U
            },
            _drawShape: function(e, t, n, i, r) {
                var o, s, a = this._getContext(n, i, r);
                for (a.beginPath(), a.moveTo(t[0][0] + .5, t[0][1] + .5), o = 1, s = t.length; o < s; o++) a.lineTo(t[o][0] + .5, t[o][1] + .5);
                n !== U && a.stroke(), i !== U && a.fill(), this.targetX !== U && this.targetY !== U && a.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = e)
            },
            _drawCircle: function(e, t, n, i, r, o, s) {
                var a = this._getContext(r, o, s);
                a.beginPath(), a.arc(t, n, i, 0, 2 * B.PI, !1), this.targetX !== U && this.targetY !== U && a.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = e), r !== U && a.stroke(), o !== U && a.fill()
            },
            _drawPieSlice: function(e, t, n, i, r, o, s, a) {
                var l = this._getContext(s, a);
                l.beginPath(), l.moveTo(t, n), l.arc(t, n, i, r, o, !1), l.lineTo(t, n), l.closePath(), s !== U && l.stroke(), a && l.fill(), this.targetX !== U && this.targetY !== U && l.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = e)
            },
            _drawRect: function(e, t, n, i, r, o, s) {
                return this._drawShape(e, [
                    [t, n],
                    [t + i, n],
                    [t + i, n + r],
                    [t, n + r],
                    [t, n]
                ], o, s)
            },
            appendShape: function(e) {
                return this.shapes[e.id] = e, this.shapeseq.push(e.id), this.lastShapeId = e.id, e.id
            },
            replaceWithShape: function(e, t) {
                var n, i = this.shapeseq;
                for (this.shapes[t.id] = t, n = i.length; n--;) i[n] == e && (i[n] = t.id);
                delete this.shapes[e]
            },
            replaceWithShapes: function(e, t) {
                var n, i, r, o = this.shapeseq,
                    s = {};
                for (i = e.length; i--;) s[e[i]] = !0;
                for (i = o.length; i--;) s[n = o[i]] && (o.splice(i, 1), delete this.shapes[n], r = i);
                for (i = t.length; i--;) o.splice(r, 0, t[i].id), this.shapes[t[i].id] = t[i]
            },
            insertAfterShape: function(e, t) {
                var n, i = this.shapeseq;
                for (n = i.length; n--;)
                    if (i[n] === e) return i.splice(n + 1, 0, t.id), void(this.shapes[t.id] = t)
            },
            removeShapeId: function(e) {
                var t, n = this.shapeseq;
                for (t = n.length; t--;)
                    if (n[t] === e) {
                        n.splice(t, 1);
                        break
                    } delete this.shapes[e]
            },
            getShapeAt: function(e, t, n) {
                return this.targetX = t, this.targetY = n, this.render(), this.currentTargetShapeId
            },
            render: function() {
                var e, t, n = this.shapeseq,
                    i = this.shapes,
                    r = n.length;
                for (this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), t = 0; t < r; t++) this["_draw" + (e = i[n[t]]).type].apply(this, e.args);
                this.interact || (this.shapes = {}, this.shapeseq = [])
            }
        }), m = t(p, {
            init: function(e, t, n) {
                var i;
                m._super.init.call(this, e, t, n), n[0] && (n = n[0]), R.data(n, "_jqs_vcanvas", this), this.canvas = E.createElement("span"), R(this.canvas).css({
                    display: "inline-block",
                    position: "relative",
                    overflow: "hidden",
                    width: e,
                    height: t,
                    margin: "0px",
                    padding: "0px",
                    verticalAlign: "top"
                }), this._insert(this.canvas, n), this._calculatePixelDims(e, t, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, i = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", i), this.group = R(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
            },
            _drawShape: function(e, t, n, i, r) {
                var o, s, a, l, u, c, h = [];
                for (c = 0, u = t.length; c < u; c++) h[c] = t[c][0] + "," + t[c][1];
                return o = h.splice(0, 1), r = r === U ? 1 : r, s = n === U ? ' stroked="false" ' : ' strokeWeight="' + r + 'px" strokeColor="' + n + '" ', a = i === U ? ' filled="false"' : ' fillColor="' + i + '" filled="true" ', l = h[0] === h[h.length - 1] ? "x " : "", '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + e + '" ' + s + a + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + o + " l " + h.join(", ") + " " + l + 'e"> </v:shape>'
            },
            _drawCircle: function(e, t, n, i, r, o, s) {
                return '<v:oval  id="jqsshape' + e + '" ' + (r === U ? ' stroked="false" ' : ' strokeWeight="' + s + 'px" strokeColor="' + r + '" ') + (o === U ? ' filled="false"' : ' fillColor="' + o + '" filled="true" ') + ' style="position:absolute;top:' + (n -= i) + "px; left:" + (t -= i) + "px; width:" + 2 * i + "px; height:" + 2 * i + 'px"></v:oval>'
            },
            _drawPieSlice: function(e, t, n, i, r, o, s, a) {
                var l, u, c, h, f, d, p;
                if (r === o) return "";
                if (o - r == 2 * B.PI && (r = 0, o = 2 * B.PI), u = t + B.round(B.cos(r) * i), c = n + B.round(B.sin(r) * i), h = t + B.round(B.cos(o) * i), f = n + B.round(B.sin(o) * i), u === h && c === f) {
                    if (o - r < B.PI) return "";
                    u = h = t + i, c = f = n
                }
                return u === h && c === f && o - r < B.PI ? "" : (l = [t - i, n - i, t + i, n + i, u, c, h, f], d = s === U ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + s + '" ', p = a === U ? ' filled="false"' : ' fillColor="' + a + '" filled="true" ', '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + e + '" ' + d + p + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + t + "," + n + " wa " + l.join(", ") + ' x e"> </v:shape>')
            },
            _drawRect: function(e, t, n, i, r, o, s) {
                return this._drawShape(e, [
                    [t, n],
                    [t, n + r],
                    [t + i, n + r],
                    [t + i, n],
                    [t, n]
                ], o, s)
            },
            reset: function() {
                this.group.innerHTML = ""
            },
            appendShape: function(e) {
                var t = this["_draw" + e.type].apply(this, e.args);
                return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", t) : this.prerender += t, this.lastShapeId = e.id, e.id
            },
            replaceWithShape: function(e, t) {
                var n = R("#jqsshape" + e),
                    i = this["_draw" + t.type].apply(this, t.args);
                n[0].outerHTML = i
            },
            replaceWithShapes: function(e, t) {
                var n, i = R("#jqsshape" + e[0]),
                    r = "",
                    o = t.length;
                for (n = 0; n < o; n++) r += this["_draw" + t[n].type].apply(this, t[n].args);
                for (i[0].outerHTML = r, n = 1; n < e.length; n++) R("#jqsshape" + e[n]).remove()
            },
            insertAfterShape: function(e, t) {
                var n = R("#jqsshape" + e),
                    i = this["_draw" + t.type].apply(this, t.args);
                n[0].insertAdjacentHTML("afterEnd", i)
            },
            removeShapeId: function(e) {
                var t = R("#jqsshape" + e);
                this.group.removeChild(t[0])
            },
            getShapeAt: function(e, t, n) {
                return e.id.substr(8)
            },
            render: function() {
                this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0)
            }
        })
    }, "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.sparkline && e(jQuery)
}(document, Math);
var List = function(n) {
    var i = {};

    function r(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }
    return r.m = n, r.c = i, r.i = function(e) {
        return e
    }, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 11)
}([function(e, t, n) {
    var i = n(4),
        r = /\s+/;
    Object.prototype.toString;

    function o(e) {
        if (!e || !e.nodeType) throw new Error("A DOM element reference is required");
        this.el = e, this.list = e.classList
    }
    e.exports = function(e) {
        return new o(e)
    }, o.prototype.add = function(e) {
        if (this.list) return this.list.add(e), this;
        var t = this.array();
        return ~i(t, e) || t.push(e), this.el.className = t.join(" "), this
    }, o.prototype.remove = function(e) {
        if (this.list) return this.list.remove(e), this;
        var t = this.array(),
            n = i(t, e);
        return ~n && t.splice(n, 1), this.el.className = t.join(" "), this
    }, o.prototype.toggle = function(e, t) {
        return this.list ? void 0 !== t ? t !== this.list.toggle(e, t) && this.list.toggle(e) : this.list.toggle(e) : void 0 !== t ? t ? this.add(e) : this.remove(e) : this.has(e) ? this.remove(e) : this.add(e), this
    }, o.prototype.array = function() {
        var e = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(r);
        return "" === e[0] && e.shift(), e
    }, o.prototype.has = o.prototype.contains = function(e) {
        return this.list ? this.list.contains(e) : !!~i(this.array(), e)
    }
}, function(e, t, n) {
    var o = window.addEventListener ? "addEventListener" : "attachEvent",
        s = window.removeEventListener ? "removeEventListener" : "detachEvent",
        a = "addEventListener" !== o ? "on" : "",
        l = n(5);
    t.bind = function(e, t, n, i) {
        e = l(e);
        for (var r = 0; r < e.length; r++) e[r][o](a + t, n, i || !1)
    }, t.unbind = function(e, t, n, i) {
        e = l(e);
        for (var r = 0; r < e.length; r++) e[r][s](a + t, n, i || !1)
    }
}, function(e, t) {
    e.exports = function(o) {
        return function(e, t, n) {
            var r = this;
            this._values = {}, this.found = !1, this.filtered = !1;
            this.values = function(e, t) {
                    if (void 0 === e) return r._values;
                    for (var n in e) r._values[n] = e[n];
                    !0 !== t && o.templater.set(r, r.values())
                }, this.show = function() {
                    o.templater.show(r)
                }, this.hide = function() {
                    o.templater.hide(r)
                }, this.matching = function() {
                    return o.filtered && o.searched && r.found && r.filtered || o.filtered && !o.searched && r.filtered || !o.filtered && o.searched && r.found || !o.filtered && !o.searched
                }, this.visible = function() {
                    return !(!r.elm || r.elm.parentNode != o.list)
                },
                function(e, t, n) {
                    if (void 0 === t) n ? r.values(e, n) : r.values(e);
                    else {
                        r.elm = t;
                        var i = o.templater.get(r, e);
                        r.values(i)
                    }
                }(e, t, n)
        }
    }
}, function(e, t) {
    e.exports = function(e, t, n, i) {
        return (i = i || {}).test && i.getElementsByClassName || !i.test && document.getElementsByClassName ? (s = e, a = t, n ? s.getElementsByClassName(a)[0] : s.getElementsByClassName(a)) : i.test && i.querySelector || !i.test && document.querySelector ? (r = e, o = "." + (o = t), n ? r.querySelector(o) : r.querySelectorAll(o)) : function(e, t, n) {
            for (var i = [], r = e.getElementsByTagName("*"), o = r.length, s = new RegExp("(^|\\s)" + t + "(\\s|$)"), a = 0, l = 0; a < o; a++)
                if (s.test(r[a].className)) {
                    if (n) return r[a];
                    i[l] = r[a], l++
                } return i
        }(e, t, n);
        var r, o, s, a
    }
}, function(e, t) {
    var i = [].indexOf;
    e.exports = function(e, t) {
        if (i) return e.indexOf(t);
        for (var n = 0; n < e.length; ++n)
            if (e[n] === t) return n;
        return -1
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) return [];
        if (null === e) return [null];
        if (e === window) return [window];
        if ("string" == typeof e) return [e];
        if (t = e, "[object Array]" === Object.prototype.toString.call(t)) return e;
        var t;
        if ("number" != typeof e.length) return [e];
        if ("function" == typeof e && e instanceof Function) return [e];
        for (var n = [], i = 0; i < e.length; i++)(Object.prototype.hasOwnProperty.call(e, i) || i in e) && n.push(e[i]);
        return n.length ? n : []
    }
}, function(e, t) {
    e.exports = function(e) {
        return e = (e = null === (e = void 0 === e ? "" : e) ? "" : e).toString()
    }
}, function(e, t) {
    e.exports = function(e) {
        for (var t, n = Array.prototype.slice.call(arguments, 1), i = 0; t = n[i]; i++)
            if (t)
                for (var r in t) e[r] = t[r];
        return e
    }
}, function(e, t) {
    e.exports = function(r) {
        var o = function(e, t, n) {
            var i = e.splice(0, 50);
            n = (n = n || []).concat(r.add(i)), 0 < e.length ? setTimeout(function() {
                o(e, t, n)
            }, 1) : (r.update(), t(n))
        };
        return o
    }
}, function(e, t) {
    e.exports = function(o) {
        return o.handlers.filterStart = o.handlers.filterStart || [], o.handlers.filterComplete = o.handlers.filterComplete || [],
            function(e) {
                if (o.trigger("filterStart"), o.i = 1, o.reset.filter(), void 0 === e) o.filtered = !1;
                else {
                    o.filtered = !0;
                    for (var t = o.items, n = 0, i = t.length; n < i; n++) {
                        var r = t[n];
                        e(r) ? r.filtered = !0 : r.filtered = !1
                    }
                }
                return o.update(), o.trigger("filterComplete"), o.visibleItems
            }
    }
}, function(e, t, n) {
    n(0);
    var i = n(1),
        r = n(7),
        a = n(6),
        u = n(3),
        c = n(19);
    e.exports = function(o, s) {
        s = r({
            location: 0,
            distance: 100,
            threshold: .4,
            multiSearch: !0,
            searchClass: "fuzzy-search"
        }, s = s || {});
        var l = {
            search: function(e, t) {
                for (var n = s.multiSearch ? e.replace(/ +$/, "").split(/ +/) : [e], i = 0, r = o.items.length; i < r; i++) l.item(o.items[i], t, n)
            },
            item: function(e, t, n) {
                for (var i = !0, r = 0; r < n.length; r++) {
                    for (var o = !1, s = 0, a = t.length; s < a; s++) l.values(e.values(), t[s], n[r]) && (o = !0);
                    o || (i = !1)
                }
                e.found = i
            },
            values: function(e, t, n) {
                if (e.hasOwnProperty(t)) {
                    var i = a(e[t]).toLowerCase();
                    if (c(i, n, s)) return !0
                }
                return !1
            }
        };
        return i.bind(u(o.listContainer, s.searchClass), "keyup", function(e) {
                var t = e.target || e.srcElement;
                o.search(t.value, l.search)
            }),
            function(e, t) {
                o.search(e, t, l.search)
            }
    }
}, function(e, t, o) {
    var s = o(18),
        c = o(3),
        h = o(7),
        f = o(4),
        d = o(1),
        p = o(6),
        g = o(0),
        m = o(17),
        v = o(5);
    e.exports = function(e, n, t) {
        var i, a = this,
            l = o(2)(a),
            u = o(8)(a),
            r = o(12)(a);
        i = {
            start: function() {
                a.listClass = "list", a.searchClass = "search", a.sortClass = "sort", a.page = 1e4, a.i = 1, a.items = [], a.visibleItems = [], a.matchingItems = [], a.searched = !1, a.filtered = !1, a.searchColumns = void 0, a.handlers = {
                    updated: []
                }, a.valueNames = [], a.utils = {
                    getByClass: c,
                    extend: h,
                    indexOf: f,
                    events: d,
                    toString: p,
                    naturalSort: s,
                    classes: g,
                    getAttribute: m,
                    toArray: v
                }, a.utils.extend(a, n), a.listContainer = "string" == typeof e ? document.getElementById(e) : e, a.listContainer && (a.list = c(a.listContainer, a.listClass, !0), a.parse = o(13)(a), a.templater = o(16)(a), a.search = o(14)(a), a.filter = o(9)(a), a.sort = o(15)(a), a.fuzzySearch = o(10)(a, n.fuzzySearch), this.handlers(), this.items(), this.pagination(), a.update())
            },
            handlers: function() {
                for (var e in a.handlers) a[e] && a.on(e, a[e])
            },
            items: function() {
                a.parse(a.list), void 0 !== t && a.add(t)
            },
            pagination: function() {
                if (void 0 !== n.pagination) {
                    !0 === n.pagination && (n.pagination = [{}]), void 0 === n.pagination[0] && (n.pagination = [n.pagination]);
                    for (var e = 0, t = n.pagination.length; e < t; e++) r(n.pagination[e])
                }
            }
        }, this.reIndex = function() {
            a.items = [], a.visibleItems = [], a.matchingItems = [], a.searched = !1, a.filtered = !1, a.parse(a.list)
        }, this.toJSON = function() {
            for (var e = [], t = 0, n = a.items.length; t < n; t++) e.push(a.items[t].values());
            return e
        }, this.add = function(e, t) {
            if (0 !== e.length) {
                if (!t) {
                    var n = [],
                        i = !1;
                    void 0 === e[0] && (e = [e]);
                    for (var r = 0, o = e.length; r < o; r++) {
                        var s;
                        i = a.items.length > a.page, s = new l(e[r], void 0, i), a.items.push(s), n.push(s)
                    }
                    return a.update(), n
                }
                u(e, t)
            }
        }, this.show = function(e, t) {
            return this.i = e, this.page = t, a.update(), a
        }, this.remove = function(e, t, n) {
            for (var i = 0, r = 0, o = a.items.length; r < o; r++) a.items[r].values()[e] == t && (a.templater.remove(a.items[r], n), a.items.splice(r, 1), o--, r--, i++);
            return a.update(), i
        }, this.get = function(e, t) {
            for (var n = [], i = 0, r = a.items.length; i < r; i++) {
                var o = a.items[i];
                o.values()[e] == t && n.push(o)
            }
            return n
        }, this.size = function() {
            return a.items.length
        }, this.clear = function() {
            return a.templater.clear(), a.items = [], a
        }, this.on = function(e, t) {
            return a.handlers[e].push(t), a
        }, this.off = function(e, t) {
            var n = a.handlers[e],
                i = f(n, t);
            return -1 < i && n.splice(i, 1), a
        }, this.trigger = function(e) {
            for (var t = a.handlers[e].length; t--;) a.handlers[e][t](a);
            return a
        }, this.reset = {
            filter: function() {
                for (var e = a.items, t = e.length; t--;) e[t].filtered = !1;
                return a
            },
            search: function() {
                for (var e = a.items, t = e.length; t--;) e[t].found = !1;
                return a
            }
        }, this.update = function() {
            var e = a.items,
                t = e.length;
            a.visibleItems = [], a.matchingItems = [], a.templater.clear();
            for (var n = 0; n < t; n++) e[n].matching() && a.matchingItems.length + 1 >= a.i && a.visibleItems.length < a.page ? (e[n].show(), a.visibleItems.push(e[n]), a.matchingItems.push(e[n])) : (e[n].matching() && a.matchingItems.push(e[n]), e[n].hide());
            return a.trigger("updated"), a
        }, i.start()
    }
}, function(e, t, n) {
    var m = n(0),
        i = n(1),
        r = n(11);
    e.exports = function(d) {
        var n = function(e, t) {
                var n, i = d.matchingItems.length,
                    r = d.i,
                    o = d.page,
                    s = Math.ceil(i / o),
                    a = Math.ceil(r / o),
                    l = t.innerWindow || 2,
                    u = t.left || t.outerWindow || 0,
                    c = t.right || t.outerWindow || 0;
                c = s - c, e.clear();
                for (var h = 1; h <= s; h++) {
                    var f = a === h ? "active" : "";
                    p.number(h, u, c, a, l) ? (n = e.add({
                        page: h,
                        dotted: !1
                    })[0], f && m(n.elm).add(f), g(n.elm, h, o)) : p.dotted(e, h, u, c, a, l, e.size()) && (n = e.add({
                        page: "...",
                        dotted: !0
                    })[0], m(n.elm).add("disabled"))
                }
            },
            p = {
                number: function(e, t, n, i, r) {
                    return this.left(e, t) || this.right(e, n) || this.innerWindow(e, i, r)
                },
                left: function(e, t) {
                    return e <= t
                },
                right: function(e, t) {
                    return t < e
                },
                innerWindow: function(e, t, n) {
                    return t - n <= e && e <= t + n
                },
                dotted: function(e, t, n, i, r, o, s) {
                    return this.dottedLeft(e, t, n, i, r, o) || this.dottedRight(e, t, n, i, r, o, s)
                },
                dottedLeft: function(e, t, n, i, r, o) {
                    return t == n + 1 && !this.innerWindow(t, r, o) && !this.right(t, i)
                },
                dottedRight: function(e, t, n, i, r, o, s) {
                    return !e.items[s - 1].values().dotted && (t == i && !this.innerWindow(t, r, o) && !this.right(t, i))
                }
            },
            g = function(e, t, n) {
                i.bind(e, "click", function() {
                    d.show((t - 1) * n + 1, n)
                })
            };
        return function(e) {
            var t = new r(d.listContainer.id, {
                listClass: e.paginationClass || "pagination",
                item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
                valueNames: ["page", "dotted"],
                searchClass: "pagination-search-that-is-not-supposed-to-exist",
                sortClass: "pagination-sort-that-is-not-supposed-to-exist"
            });
            d.on("updated", function() {
                n(t, e)
            }), n(t, e)
        }
    }
}, function(e, t, n) {
    e.exports = function(r) {
        var o = n(2)(r),
            i = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++) r.items.push(new o(t, e[n]))
            },
            s = function(e, t) {
                var n = e.splice(0, 50);
                i(n, t), 0 < e.length ? setTimeout(function() {
                    s(e, t)
                }, 1) : (r.update(), r.trigger("parseComplete"))
            };
        return r.handlers.parseComplete = r.handlers.parseComplete || [],
            function() {
                var e = function(e) {
                        for (var t = e.childNodes, n = [], i = 0, r = t.length; i < r; i++) void 0 === t[i].data && n.push(t[i]);
                        return n
                    }(r.list),
                    t = r.valueNames;
                r.indexAsync ? s(e, t) : i(e, t)
            }
    }
}, function(e, t) {
    e.exports = function(n) {
        var i, r, o, t, s = {
                resetList: function() {
                    n.i = 1, n.templater.clear(), t = void 0
                },
                setOptions: function(e) {
                    2 == e.length && e[1] instanceof Array ? r = e[1] : 2 == e.length && "function" == typeof e[1] ? (r = void 0, t = e[1]) : 3 == e.length ? (r = e[1], t = e[2]) : r = void 0
                },
                setColumns: function() {
                    0 !== n.items.length && void 0 === r && (r = void 0 === n.searchColumns ? s.toArray(n.items[0].values()) : n.searchColumns)
                },
                setSearchString: function(e) {
                    e = (e = n.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), o = e
                },
                toArray: function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t
                }
            },
            a = {
                list: function() {
                    for (var e = 0, t = n.items.length; e < t; e++) a.item(n.items[e])
                },
                item: function(e) {
                    e.found = !1;
                    for (var t = 0, n = r.length; t < n; t++)
                        if (a.values(e.values(), r[t])) return void(e.found = !0)
                },
                values: function(e, t) {
                    return !!(e.hasOwnProperty(t) && (i = n.utils.toString(e[t]).toLowerCase(), "" !== o && -1 < i.search(o)))
                },
                reset: function() {
                    n.reset.search(), n.searched = !1
                }
            },
            l = function(e) {
                return n.trigger("searchStart"), s.resetList(), s.setSearchString(e), s.setOptions(arguments), s.setColumns(), "" === o ? a.reset() : (n.searched = !0, t ? t(o, r) : a.list()), n.update(), n.trigger("searchComplete"), n.visibleItems
            };
        return n.handlers.searchStart = n.handlers.searchStart || [], n.handlers.searchComplete = n.handlers.searchComplete || [], n.utils.events.bind(n.utils.getByClass(n.listContainer, n.searchClass), "keyup", function(e) {
            var t = e.target || e.srcElement;
            "" === t.value && !n.searched || l(t.value)
        }), n.utils.events.bind(n.utils.getByClass(n.listContainer, n.searchClass), "input", function(e) {
            "" === (e.target || e.srcElement).value && l("")
        }), l
    }
}, function(e, t) {
    e.exports = function(o) {
        var s = {
                els: void 0,
                clear: function() {
                    for (var e = 0, t = s.els.length; e < t; e++) o.utils.classes(s.els[e]).remove("asc"), o.utils.classes(s.els[e]).remove("desc")
                },
                getOrder: function(e) {
                    var t = o.utils.getAttribute(e, "data-order");
                    return "asc" == t || "desc" == t ? t : o.utils.classes(e).has("desc") ? "asc" : o.utils.classes(e).has("asc") ? "desc" : "asc"
                },
                getInSensitive: function(e, t) {
                    var n = o.utils.getAttribute(e, "data-insensitive");
                    t.insensitive = "false" !== n
                },
                setOrder: function(e) {
                    for (var t = 0, n = s.els.length; t < n; t++) {
                        var i = s.els[t];
                        if (o.utils.getAttribute(i, "data-sort") === e.valueName) {
                            var r = o.utils.getAttribute(i, "data-order");
                            "asc" == r || "desc" == r ? r == e.order && o.utils.classes(i).add(e.order) : o.utils.classes(i).add(e.order)
                        }
                    }
                }
            },
            e = function() {
                o.trigger("sortStart");
                var i = {},
                    e = arguments[0].currentTarget || arguments[0].srcElement || void 0;
                e ? (i.valueName = o.utils.getAttribute(e, "data-sort"), s.getInSensitive(e, i), i.order = s.getOrder(e)) : ((i = arguments[1] || i).valueName = arguments[0], i.order = i.order || "asc", i.insensitive = void 0 === i.insensitive || i.insensitive), s.clear(), s.setOrder(i);
                var t, n = i.sortFunction || o.sortFunction || null,
                    r = "desc" === i.order ? -1 : 1;
                t = n ? function(e, t) {
                    return n(e, t, i) * r
                } : function(e, t) {
                    var n = o.utils.naturalSort;
                    return n.alphabet = o.alphabet || i.alphabet || void 0, !n.alphabet && i.insensitive && (n = o.utils.naturalSort.caseInsensitive), n(e.values()[i.valueName], t.values()[i.valueName]) * r
                }, o.items.sort(t), o.update(), o.trigger("sortComplete")
            };
        return o.handlers.sortStart = o.handlers.sortStart || [], o.handlers.sortComplete = o.handlers.sortComplete || [], s.els = o.utils.getByClass(o.listContainer, o.sortClass), o.utils.events.bind(s.els, "click", e), o.on("searchStart", s.clear), o.on("filterStart", s.clear), e
    }
}, function(e, t) {
    var n = function(l) {
        var n, u = this;
        this.clearSourceItem = function(e, t) {
            for (var n = 0, i = t.length; n < i; n++) {
                var r;
                if (t[n].data)
                    for (var o = 0, s = t[n].data.length; o < s; o++) e.setAttribute("data-" + t[n].data[o], "");
                else t[n].attr && t[n].name ? (r = l.utils.getByClass(e, t[n].name, !0)) && r.setAttribute(t[n].attr, "") : (r = l.utils.getByClass(e, t[n], !0)) && (r.innerHTML = "");
                r = void 0
            }
            return e
        }, this.getItemSource = function(e) {
            if (void 0 === e) {
                for (var t = l.list.childNodes, n = 0, i = t.length; n < i; n++)
                    if (void 0 === t[n].data) return t[n].cloneNode(!0)
            } else {
                if (/<tr[\s>]/g.exec(e)) {
                    var r = document.createElement("tbody");
                    return r.innerHTML = e, r.firstChild
                }
                if (-1 !== e.indexOf("<")) {
                    var o = document.createElement("div");
                    return o.innerHTML = e, o.firstChild
                }
                var s = document.getElementById(l.item);
                if (s) return s
            }
        }, this.get = function(e, t) {
            u.create(e);
            for (var n = {}, i = 0, r = t.length; i < r; i++) {
                var o;
                if (t[i].data)
                    for (var s = 0, a = t[i].data.length; s < a; s++) n[t[i].data[s]] = l.utils.getAttribute(e.elm, "data-" + t[i].data[s]);
                else t[i].attr && t[i].name ? (o = l.utils.getByClass(e.elm, t[i].name, !0), n[t[i].name] = o ? l.utils.getAttribute(o, t[i].attr) : "") : (o = l.utils.getByClass(e.elm, t[i], !0), n[t[i]] = o ? o.innerHTML : "");
                o = void 0
            }
            return n
        }, this.set = function(r, e) {
            var t = function(e, t) {
                var n, i = function(e) {
                    for (var t = 0, n = l.valueNames.length; t < n; t++)
                        if (l.valueNames[t].data) {
                            for (var i = l.valueNames[t].data, r = 0, o = i.length; r < o; r++)
                                if (i[r] === e) return {
                                    data: e
                                }
                        } else {
                            if (l.valueNames[t].attr && l.valueNames[t].name && l.valueNames[t].name == e) return l.valueNames[t];
                            if (l.valueNames[t] === e) return e
                        }
                }(e);
                i && (i.data ? r.elm.setAttribute("data-" + i.data, t) : i.attr && i.name ? (n = l.utils.getByClass(r.elm, i.name, !0)) && n.setAttribute(i.attr, t) : (n = l.utils.getByClass(r.elm, i, !0)) && (n.innerHTML = t), n = void 0)
            };
            if (!u.create(r))
                for (var n in e) e.hasOwnProperty(n) && t(n, e[n])
        }, this.create = function(e) {
            if (void 0 !== e.elm) return !1;
            if (void 0 === n) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
            var t = n.cloneNode(!0);
            return t.removeAttribute("id"), e.elm = t, u.set(e, e.values()), !0
        }, this.remove = function(e) {
            e.elm.parentNode === l.list && l.list.removeChild(e.elm)
        }, this.show = function(e) {
            u.create(e), l.list.appendChild(e.elm)
        }, this.hide = function(e) {
            void 0 !== e.elm && e.elm.parentNode === l.list && l.list.removeChild(e.elm)
        }, this.clear = function() {
            if (l.list.hasChildNodes())
                for (; 1 <= l.list.childNodes.length;) l.list.removeChild(l.list.firstChild)
        }, (n = u.getItemSource(l.item)) && (n = u.clearSourceItem(n, l.valueNames))
    };
    e.exports = function(e) {
        return new n(e)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var n = e.getAttribute && e.getAttribute(t) || null;
        if (!n)
            for (var i = e.attributes.length, r = 0; r < i; r++) void 0 !== t[r] && t[r].nodeName === t && (n = t[r].nodeValue);
        return n
    }
}, function(e, t, n) {
    "use strict";
    var i, d, p = 0;

    function g(e) {
        return 48 <= e && e <= 57
    }

    function r(e, t) {
        for (var n = (e += "").length, i = (t += "").length, r = 0, o = 0; r < n && o < i;) {
            var s = e.charCodeAt(r),
                a = t.charCodeAt(o);
            if (g(s)) {
                if (!g(a)) return s - a;
                for (var l = r, u = o; 48 === s && ++l < n;) s = e.charCodeAt(l);
                for (; 48 === a && ++u < i;) a = t.charCodeAt(u);
                for (var c = l, h = u; c < n && g(e.charCodeAt(c));) ++c;
                for (; h < i && g(t.charCodeAt(h));) ++h;
                var f = c - l - h + u;
                if (f) return f;
                for (; l < c;)
                    if (f = e.charCodeAt(l++) - t.charCodeAt(u++)) return f;
                r = c, o = h
            } else {
                if (s !== a) return s < p && a < p && -1 !== d[s] && -1 !== d[a] ? d[s] - d[a] : s - a;
                ++r, ++o
            }
        }
        return n - i
    }
    r.caseInsensitive = r.i = function(e, t) {
        return r(("" + e).toLowerCase(), ("" + t).toLowerCase())
    }, Object.defineProperties(r, {
        alphabet: {
            get: function() {
                return i
            },
            set: function(e) {
                d = [];
                var t = 0;
                if (i = e)
                    for (; t < i.length; t++) d[i.charCodeAt(t)] = t;
                for (p = d.length, t = 0; t < p; t++) void 0 === d[t] && (d[t] = -1)
            }
        }
    }), e.exports = r
}, function(e, t) {
    e.exports = function(e, r, t) {
        var n = t.location || 0,
            o = t.distance || 100,
            i = t.threshold || .4;
        if (r === e) return !0;
        if (32 < r.length) return !1;
        var s = n,
            a = function() {
                var e, t = {};
                for (e = 0; e < r.length; e++) t[r.charAt(e)] = 0;
                for (e = 0; e < r.length; e++) t[r.charAt(e)] |= 1 << r.length - e - 1;
                return t
            }();

        function l(e, t) {
            var n = e / r.length,
                i = Math.abs(s - t);
            return o ? n + i / o : i ? 1 : n
        }
        var u = i,
            c = e.indexOf(r, s); - 1 != c && (u = Math.min(l(0, c), u), -1 != (c = e.lastIndexOf(r, s + r.length)) && (u = Math.min(l(0, c), u)));
        var h, f, d = 1 << r.length - 1;
        c = -1;
        for (var p, g = r.length + e.length, m = 0; m < r.length; m++) {
            for (h = 0, f = g; h < f;) l(m, s + f) <= u ? h = f : g = f, f = Math.floor((g - h) / 2 + h);
            g = f;
            var v = Math.max(1, s - f + 1),
                y = Math.min(s + f, e.length) + r.length,
                _ = Array(y + 2);
            _[y + 1] = (1 << m) - 1;
            for (var b = y; v <= b; b--) {
                var w = a[e.charAt(b - 1)];
                if (_[b] = 0 === m ? (_[b + 1] << 1 | 1) & w : (_[b + 1] << 1 | 1) & w | (p[b + 1] | p[b]) << 1 | 1 | p[b + 1], _[b] & d) {
                    var C = l(m, b - 1);
                    if (C <= u) {
                        if (u = C, !(s < (c = b - 1))) break;
                        v = Math.max(1, 2 * s - c)
                    }
                }
            }
            if (l(m + 1, s) > u) break;
            p = _
        }
        return !(c < 0)
    }
}]);