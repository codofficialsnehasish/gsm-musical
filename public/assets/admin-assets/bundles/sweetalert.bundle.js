! function(C, S, x) {
    "use strict";
    ! function r(s, l, i) {
        function u(n, e) {
            if (!l[n]) {
                if (!s[n]) {
                    var t = "function" == typeof require && require;
                    if (!e && t) return t(n, !0);
                    if (c) return c(n, !0);
                    var o = new Error("Cannot find module '" + n + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                }
                var a = l[n] = {
                    exports: {}
                };
                s[n][0].call(a.exports, function(e) {
                    var t = s[n][1][e];
                    return u(t || e)
                }, a, a.exports, r, s, l, i)
            }
            return l[n].exports
        }
        for (var c = "function" == typeof require && require, e = 0; e < i.length; e++) u(i[e]);
        return u
    }({
        1: [function(e, t, n) {
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var d, f, a, p, m = e("./modules/handle-dom"),
                v = e("./modules/utils"),
                y = e("./modules/handle-swal-dom"),
                b = e("./modules/handle-click"),
                h = o(e("./modules/handle-key")),
                g = o(e("./modules/default-params")),
                w = o(e("./modules/set-params"));
            n.default = a = p = function() {
                function e(e) {
                    var t = n;
                    return t[e] === x ? g.default[e] : t[e]
                }
                var n = arguments[0];
                if (m.addClass(S.body, "stop-scrolling"), y.resetInput(), n === x) return v.logStr("SweetAlert expects at least 1 attribute!"), !1;
                var t = v.extend({}, g.default);
                switch (typeof n) {
                    case "string":
                        t.title = n, t.text = arguments[1] || "", t.type = arguments[2] || "";
                        break;
                    case "object":
                        if (n.title === x) return v.logStr('Missing "title" argument!'), !1;
                        for (var o in t.title = n.title, g.default) t[o] = e(o);
                        t.confirmButtonText = t.showCancelButton ? "Confirm" : g.default.confirmButtonText, t.confirmButtonText = e("confirmButtonText"), t.doneFunction = arguments[1] || null;
                        break;
                    default:
                        return v.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof n), !1
                }
                w.default(t), y.fixVerticalPosition(), y.openModal(arguments[1]);
                for (var a = y.getModal(), r = a.querySelectorAll("button"), s = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], l = function(e) {
                        return b.handleButton(e, t, a)
                    }, i = 0; i < r.length; i++)
                    for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        r[i][c] = l
                    }
                y.getOverlay().onclick = l, d = C.onkeydown;
                C.onkeydown = function(e) {
                    return h.default(e, t, a)
                }, C.onfocus = function() {
                    setTimeout(function() {
                        f !== x && (f.focus(), f = x)
                    }, 0)
                }, p.enableButtons()
            }, a.setDefaults = p.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                v.extend(g.default, e)
            }, a.close = p.close = function() {
                var t = y.getModal();
                m.fadeOut(y.getOverlay(), 5), m.fadeOut(t, 5), m.removeClass(t, "showSweetAlert"), m.addClass(t, "hideSweetAlert"), m.removeClass(t, "visible");
                var e = t.querySelector(".sa-icon.sa-success");
                m.removeClass(e, "animate"), m.removeClass(e.querySelector(".sa-tip"), "animateSuccessTip"), m.removeClass(e.querySelector(".sa-long"), "animateSuccessLong");
                var n = t.querySelector(".sa-icon.sa-error");
                m.removeClass(n, "animateErrorIcon"), m.removeClass(n.querySelector(".sa-x-mark"), "animateXMark");
                var o = t.querySelector(".sa-icon.sa-warning");
                return m.removeClass(o, "pulseWarning"), m.removeClass(o.querySelector(".sa-body"), "pulseWarningIns"), m.removeClass(o.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
                    var e = t.getAttribute("data-custom-class");
                    m.removeClass(t, e)
                }, 300), m.removeClass(S.body, "stop-scrolling"), C.onkeydown = d, C.previousActiveElement && C.previousActiveElement.focus(), f = x, clearTimeout(t.timeout), !0
            }, a.showInputError = p.showInputError = function(e) {
                var t = y.getModal(),
                    n = t.querySelector(".sa-input-error");
                m.addClass(n, "show");
                var o = t.querySelector(".sa-error-container");
                m.addClass(o, "show"), o.querySelector("p").innerHTML = e, setTimeout(function() {
                    a.enableButtons()
                }, 1), t.querySelector("input").focus()
            }, a.resetInputError = p.resetInputError = function(e) {
                if (e && 13 === e.keyCode) return !1;
                var t = y.getModal(),
                    n = t.querySelector(".sa-input-error");
                m.removeClass(n, "show");
                var o = t.querySelector(".sa-error-container");
                m.removeClass(o, "show")
            }, a.disableButtons = p.disableButtons = function() {
                var e = y.getModal(),
                    t = e.querySelector("button.confirm"),
                    n = e.querySelector("button.cancel");
                t.disabled = !0, n.disabled = !0
            }, a.enableButtons = p.enableButtons = function() {
                var e = y.getModal(),
                    t = e.querySelector("button.confirm"),
                    n = e.querySelector("button.cancel");
                t.disabled = !1, n.disabled = !1
            }, void 0 !== C ? C.sweetAlert = C.swal = a : v.logStr("SweetAlert is a frontend module!"), t.exports = n.default
        }, {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.default = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#007bff",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            }, t.exports = n.default
        }, {}],
        3: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var b = e("./utils"),
                h = (e("./handle-swal-dom"), e("./handle-dom")),
                g = function(e, t) {
                    var n = !0;
                    h.hasClass(e, "show-input") && ((n = e.querySelector("input").value) || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
                },
                w = function(e, t) {
                    var n = String(t.doneFunction).replace(/\s/g, "");
                    "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10) && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
                };
            n.default = {
                handleButton: function(e, t, n) {
                    function o(e) {
                        u && t.confirmButtonColor && (i.style.backgroundColor = e)
                    }
                    var a, r, s, l = e || C.event,
                        i = l.target || l.srcElement,
                        u = -1 !== i.className.indexOf("confirm"),
                        c = -1 !== i.className.indexOf("sweet-overlay"),
                        d = h.hasClass(n, "visible"),
                        f = t.doneFunction && "true" === n.getAttribute("data-has-done-function");
                    switch (u && t.confirmButtonColor && (a = t.confirmButtonColor, r = b.colorLuminance(a, -.04), s = b.colorLuminance(a, -.14)), l.type) {
                        case "mouseover":
                            o(r);
                            break;
                        case "mouseout":
                            o(a);
                            break;
                        case "mousedown":
                            o(s);
                            break;
                        case "mouseup":
                            o(r);
                            break;
                        case "focus":
                            var p = n.querySelector("button.confirm"),
                                m = n.querySelector("button.cancel");
                            u ? m.style.boxShadow = "none" : p.style.boxShadow = "none";
                            break;
                        case "click":
                            var v = n === i,
                                y = h.isDescendant(n, i);
                            if (!v && !y && d && !t.allowOutsideClick) break;
                            u && f && d ? g(n, t) : f && d || c ? w(n, t) : h.isDescendant(n, i) && "BUTTON" === i.tagName && sweetAlert.close()
                    }
                },
                handleConfirm: g,
                handleCancel: w
            }, t.exports = n.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = function(e, t) {
                    return new RegExp(" " + t + " ").test(" " + e.className + " ")
                },
                a = function(e) {
                    e.style.opacity = "", e.style.display = "block"
                },
                r = function(e) {
                    e.style.opacity = "", e.style.display = "none"
                };
            n.hasClass = o, n.addClass = function(e, t) {
                o(e, t) || (e.className += " " + t)
            }, n.removeClass = function(e, t) {
                var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (o(e, t)) {
                    for (; 0 <= n.indexOf(" " + t + " ");) n = n.replace(" " + t + " ", " ");
                    e.className = n.replace(/^\s+|\s+$/g, "")
                }
            }, n.escapeHtml = function(e) {
                var t = S.createElement("div");
                return t.appendChild(S.createTextNode(e)), t.innerHTML
            }, n._show = a, n.show = function(e) {
                if (e && !e.length) return a(e);
                for (var t = 0; t < e.length; ++t) a(e[t])
            }, n._hide = r, n.hide = function(e) {
                if (e && !e.length) return r(e);
                for (var t = 0; t < e.length; ++t) r(e[t])
            }, n.isDescendant = function(e, t) {
                for (var n = t.parentNode; null !== n;) {
                    if (n === e) return !0;
                    n = n.parentNode
                }
                return !1
            }, n.getTopMargin = function(e) {
                e.style.left = "-9999px", e.style.display = "block";
                var t, n = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
            }, n.fadeIn = function(e, t) {
                if (+e.style.opacity < 1) {
                    t = t || 16, e.style.opacity = 0, e.style.display = "block";
                    var n = +new Date,
                        o = function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function() {
                            e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(o, t)
                        });
                    o()
                }
                e.style.display = "block"
            }, n.fadeOut = function(e, t) {
                t = t || 16, e.style.opacity = 1;
                var n = +new Date,
                    o = function(e) {
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        }, t
                    }(function() {
                        e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, 0 < +e.style.opacity ? setTimeout(o, t) : e.style.display = "none"
                    });
                o()
            }, n.fireClick = function(e) {
                if ("function" == typeof MouseEvent) {
                    var t = new MouseEvent("click", {
                        view: C,
                        bubbles: !1,
                        cancelable: !0
                    });
                    e.dispatchEvent(t)
                } else if (S.createEvent) {
                    var n = S.createEvent("MouseEvents");
                    n.initEvent("click", !1, !1), e.dispatchEvent(n)
                } else S.createEventObject ? e.fireEvent("onclick") : "function" == typeof e.onclick && e.onclick()
            }, n.stopEventPropagation = function(e) {
                "function" == typeof e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : C.event && C.event.hasOwnProperty("cancelBubble") && (C.event.cancelBubble = !0)
            }
        }, {}],
        5: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var d = e("./handle-dom"),
                f = e("./handle-swal-dom");
            n.default = function(e, t, n) {
                var o = e || C.event,
                    a = o.keyCode || o.which,
                    r = n.querySelector("button.confirm"),
                    s = n.querySelector("button.cancel"),
                    l = n.querySelectorAll("button[tabindex]");
                if (-1 !== [9, 13, 32, 27].indexOf(a)) {
                    for (var i = o.target || o.srcElement, u = -1, c = 0; c < l.length; c++)
                        if (i === l[c]) {
                            u = c;
                            break
                        } 9 === a ? (i = -1 === u ? r : u === l.length - 1 ? l[0] : l[u + 1], d.stopEventPropagation(o), i.focus(), t.confirmButtonColor && f.setFocusStyle(i, t.confirmButtonColor)) : 13 === a ? ("INPUT" === i.tagName && (i = r).focus(), i = -1 === u ? r : x) : 27 === a && !0 === t.allowEscapeKey ? (i = s, d.fireClick(i, o)) : i = x
                }
            }, t.exports = n.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6: [function(e, t, n) {
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = e("./utils"),
                r = e("./handle-dom"),
                s = o(e("./default-params")),
                l = o(e("./injected-html")),
                i = function() {
                    var e = S.createElement("div");
                    for (e.innerHTML = l.default; e.firstChild;) S.body.appendChild(e.firstChild)
                },
                u = function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }(function() {
                    var e = S.querySelector(".sweet-alert");
                    return e || (i(), e = u()), e
                }),
                c = function() {
                    var e = u();
                    return e ? e.querySelector("input") : void 0
                },
                d = function() {
                    return S.querySelector(".sweet-overlay")
                },
                f = function(e) {
                    if (e && 13 === e.keyCode) return !1;
                    var t = u(),
                        n = t.querySelector(".sa-input-error");
                    r.removeClass(n, "show");
                    var o = t.querySelector(".sa-error-container");
                    r.removeClass(o, "show")
                };
            n.sweetAlertInitialize = i, n.getModal = u, n.getOverlay = d, n.getInput = c, n.setFocusStyle = function(e, t) {
                var n = a.hexToRgb(t);
                e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
            }, n.openModal = function(e) {
                var t = u();
                r.fadeIn(d(), 10), r.show(t), r.addClass(t, "showSweetAlert"), r.removeClass(t, "hideSweetAlert"), C.previousActiveElement = S.activeElement, t.querySelector("button.confirm").focus(), setTimeout(function() {
                    r.addClass(t, "visible")
                }, 500);
                var n = t.getAttribute("data-timer");
                if ("null" !== n && "" !== n) {
                    var o = e;
                    t.timeout = setTimeout(function() {
                        o && "true" === t.getAttribute("data-has-done-function") ? o(null) : sweetAlert.close()
                    }, n)
                }
            }, n.resetInput = function() {
                var e = u(),
                    t = c();
                r.removeClass(e, "show-input"), t.value = s.default.inputValue, t.setAttribute("type", s.default.inputType), t.setAttribute("placeholder", s.default.inputPlaceholder), f()
            }, n.resetInputError = f, n.fixVerticalPosition = function() {
                u().style.marginTop = r.getTopMargin(u())
            }
        }, {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.default = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>', t.exports = n.default
        }, {}],
        8: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var v = e("./utils"),
                y = e("./handle-swal-dom"),
                b = e("./handle-dom"),
                h = ["error", "warning", "info", "success", "input", "prompt"];
            n.default = function(a) {
                var r = y.getModal(),
                    e = r.querySelector("h2"),
                    t = r.querySelector("p"),
                    n = r.querySelector("button.cancel"),
                    o = r.querySelector("button.confirm");
                if (e.innerHTML = a.html ? a.title : b.escapeHtml(a.title).split("\n").join("<br>"), t.innerHTML = a.html ? a.text : b.escapeHtml(a.text || "").split("\n").join("<br>"), a.text && b.show(t), a.customClass) b.addClass(r, a.customClass), r.setAttribute("data-custom-class", a.customClass);
                else {
                    var s = r.getAttribute("data-custom-class");
                    b.removeClass(r, s), r.setAttribute("data-custom-class", "")
                }
                if (b.hide(r.querySelectorAll(".sa-icon")), a.type && !v.isIE8()) {
                    var l = function() {
                        for (var e = !1, t = 0; t < h.length; t++)
                            if (a.type === h[t]) {
                                e = !0;
                                break
                            } if (!e) return logStr("Unknown alert type: " + a.type), {
                            v: !1
                        };
                        var n = x; - 1 !== ["success", "error", "warning", "info"].indexOf(a.type) && (n = r.querySelector(".sa-icon.sa-" + a.type), b.show(n));
                        var o = y.getInput();
                        switch (a.type) {
                            case "success":
                                b.addClass(n, "animate"), b.addClass(n.querySelector(".sa-tip"), "animateSuccessTip"), b.addClass(n.querySelector(".sa-long"), "animateSuccessLong");
                                break;
                            case "error":
                                b.addClass(n, "animateErrorIcon"), b.addClass(n.querySelector(".sa-x-mark"), "animateXMark");
                                break;
                            case "warning":
                                b.addClass(n, "pulseWarning"), b.addClass(n.querySelector(".sa-body"), "pulseWarningIns"), b.addClass(n.querySelector(".sa-dot"), "pulseWarningIns");
                                break;
                            case "input":
                            case "prompt":
                                o.setAttribute("type", a.inputType), o.value = a.inputValue, o.setAttribute("placeholder", a.inputPlaceholder), b.addClass(r, "show-input"), setTimeout(function() {
                                    o.focus(), o.addEventListener("keyup", swal.resetInputError)
                                }, 400)
                        }
                    }();
                    if ("object" == typeof l) return l.v
                }
                if (a.imageUrl) {
                    var i = r.querySelector(".sa-icon.sa-custom");
                    i.style.backgroundImage = "url(" + a.imageUrl + ")", b.show(i);
                    var u = 80,
                        c = 80;
                    if (a.imageSize) {
                        var d = a.imageSize.toString().split("x"),
                            f = d[0],
                            p = d[1];
                        f && p ? (u = f, c = p) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + a.imageSize)
                    }
                    i.setAttribute("style", i.getAttribute("style") + "width:" + u + "px; height:" + c + "px")
                }
                r.setAttribute("data-has-cancel-button", a.showCancelButton), a.showCancelButton ? n.style.display = "inline-block" : b.hide(n), r.setAttribute("data-has-confirm-button", a.showConfirmButton), a.showConfirmButton ? o.style.display = "inline-block" : b.hide(o), a.cancelButtonText && (n.innerHTML = b.escapeHtml(a.cancelButtonText)), a.confirmButtonText && (o.innerHTML = b.escapeHtml(a.confirmButtonText)), a.confirmButtonColor && (o.style.backgroundColor = a.confirmButtonColor, o.style.borderLeftColor = a.confirmLoadingButtonColor, o.style.borderRightColor = a.confirmLoadingButtonColor, y.setFocusStyle(o, a.confirmButtonColor)), r.setAttribute("data-allow-outside-click", a.allowOutsideClick);
                var m = !!a.doneFunction;
                r.setAttribute("data-has-done-function", m), a.animation ? "string" == typeof a.animation ? r.setAttribute("data-animation", a.animation) : r.setAttribute("data-animation", "pop") : r.setAttribute("data-animation", "none"), r.setAttribute("data-timer", a.timer)
            }, t.exports = n.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.extend = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }, n.hexToRgb = function(e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
            }, n.isIE8 = function() {
                return C.attachEvent && !C.addEventListener
            }, n.logStr = function(e) {
                C.console && C.console.log("SweetAlert: " + e)
            }, n.colorLuminance = function(e, t) {
                (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                var n, o, a = "#";
                for (o = 0; o < 3; o++) n = parseInt(e.substr(2 * o, 2), 16), a += ("00" + (n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16))).substr(n.length);
                return a
            }
        }, {}]
    }, {}, [1]), "function" == typeof define && define.amd ? define(function() {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document);