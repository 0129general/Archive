! function(t, e) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (t.document) return e(t);
		throw new Error("jQuery requires a window with a document")
	} : e(t)
}("undefined" != typeof window ? window : this, function(k, X) {
	"use strict";

	function b(t) {
		return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
	}

	function N(t) {
		return null != t && t === t.window
	}
	var e = [],
		F = Object.getPrototypeOf,
		r = e.slice,
		R = e.flat ? function(t) {
			return e.flat.call(t)
		} : function(t) {
			return e.concat.apply([], t)
		},
		H = e.push,
		v = e.indexOf,
		Y = {},
		W = Y.toString,
		B = Y.hasOwnProperty,
		j = B.toString,
		V = j.call(Object),
		f = {},
		A = k.document,
		G = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function q(t, e, i) {
		var s, a, n = (i = i || A).createElement("script");
		if (n.text = t, e)
			for (s in G)(a = e[s] || e.getAttribute && e.getAttribute(s)) && n.setAttribute(s, a);
		i.head.appendChild(n).parentNode.removeChild(n)
	}

	function U(t) {
		return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[W.call(t)] || "object" : typeof t
	}
	var t = "3.7.1",
		Z = /HTML$/i,
		C = function(t, e) {
			return new C.fn.init(t, e)
		};

	function $(t) {
		var e = !!t && "length" in t && t.length,
			i = U(t);
		return !b(t) && !N(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
	}

	function y(t, e) {
		return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
	}
	C.fn = C.prototype = {
		jquery: t,
		constructor: C,
		length: 0,
		toArray: function() {
			return r.call(this)
		},
		get: function(t) {
			return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
		},
		pushStack: function(t) {
			t = C.merge(this.constructor(), t);
			return t.prevObject = this, t
		},
		each: function(t) {
			return C.each(this, t)
		},
		map: function(i) {
			return this.pushStack(C.map(this, function(t, e) {
				return i.call(t, e, t)
			}))
		},
		slice: function() {
			return this.pushStack(r.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(C.grep(this, function(t, e) {
				return (e + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(C.grep(this, function(t, e) {
				return e % 2
			}))
		},
		eq: function(t) {
			var e = this.length,
				t = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= t && t < e ? [this[t]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: H,
		sort: e.sort,
		splice: e.splice
	}, C.extend = C.fn.extend = function() {
		var t, e, i, s, a, n = arguments[0] || {},
			o = 1,
			r = arguments.length,
			l = !1;
		for ("boolean" == typeof n && (l = n, n = arguments[o] || {}, o++), "object" == typeof n || b(n) || (n = {}), o === r && (n = this, o--); o < r; o++)
			if (null != (t = arguments[o]))
				for (e in t) i = t[e], "__proto__" !== e && n !== i && (l && i && (C.isPlainObject(i) || (s = Array.isArray(i))) ? (a = n[e], a = s && !Array.isArray(a) ? [] : s || C.isPlainObject(a) ? a : {}, s = !1, n[e] = C.extend(l, a, i)) : void 0 !== i && (n[e] = i));
		return n
	}, C.extend({
		expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isPlainObject: function(t) {
			return !(!t || "[object Object]" !== W.call(t) || (t = F(t)) && ("function" != typeof(t = B.call(t, "constructor") && t.constructor) || j.call(t) !== V))
		},
		isEmptyObject: function(t) {
			for (var e in t) return !1;
			return !0
		},
		globalEval: function(t, e, i) {
			q(t, {
				nonce: e && e.nonce
			}, i)
		},
		each: function(t, e) {
			var i, s = 0;
			if ($(t))
				for (i = t.length; s < i && !1 !== e.call(t[s], s, t[s]); s++);
			else
				for (s in t)
					if (!1 === e.call(t[s], s, t[s])) break;
			return t
		},
		text: function(t) {
			var e, i = "",
				s = 0,
				a = t.nodeType;
			if (!a)
				for (; e = t[s++];) i += C.text(e);
			return 1 === a || 11 === a ? t.textContent : 9 === a ? t.documentElement.textContent : 3 === a || 4 === a ? t.nodeValue : i
		},
		makeArray: function(t, e) {
			e = e || [];
			return null != t && ($(Object(t)) ? C.merge(e, "string" == typeof t ? [t] : t) : H.call(e, t)), e
		},
		inArray: function(t, e, i) {
			return null == e ? -1 : v.call(e, t, i)
		},
		isXMLDoc: function(t) {
			var e = t && t.namespaceURI,
				t = t && (t.ownerDocument || t).documentElement;
			return !Z.test(e || t && t.nodeName || "HTML")
		},
		merge: function(t, e) {
			for (var i = +e.length, s = 0, a = t.length; s < i; s++) t[a++] = e[s];
			return t.length = a, t
		},
		grep: function(t, e, i) {
			for (var s = [], a = 0, n = t.length, o = !i; a < n; a++) !e(t[a], a) != o && s.push(t[a]);
			return s
		},
		map: function(t, e, i) {
			var s, a, n = 0,
				o = [];
			if ($(t))
				for (s = t.length; n < s; n++) null != (a = e(t[n], n, i)) && o.push(a);
			else
				for (n in t) null != (a = e(t[n], n, i)) && o.push(a);
			return R(o)
		},
		guid: 1,
		support: f
	}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = e[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
		Y["[object " + e + "]"] = e.toLowerCase()
	});
	var Q = e.pop,
		K = e.sort,
		J = e.splice,
		i = "[\\x20\\t\\r\\n\\f]",
		tt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
		et = (C.contains = function(t, e) {
			e = e && e.parentNode;
			return t === e || !(!e || 1 !== e.nodeType || !(t.contains ? t.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
		}, /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);

	function it(t, e) {
		return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
	}
	C.escapeSelector = function(t) {
		return (t + "").replace(et, it)
	};
	var st, w, at, nt, ot, S, s, T, u, rt, a = A,
		lt = H,
		L = lt,
		E = C.expando,
		P = 0,
		ct = 0,
		ht = Pt(),
		dt = Pt(),
		ut = Pt(),
		gt = Pt(),
		pt = function(t, e) {
			return t === e && (ot = !0), 0
		},
		ft = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		t = "(?:\\\\[\\da-fA-F]{1,6}" + i + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
		n = "\\[" + i + "*(" + t + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + i + "*\\]",
		o = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + n + ")*)|.*)\\)|)",
		xt = new RegExp(i + "+", "g"),
		mt = new RegExp("^" + i + "*," + i + "*"),
		bt = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
		vt = new RegExp(i + "|>"),
		yt = new RegExp(o),
		wt = new RegExp("^" + t + "$"),
		kt = {
			ID: new RegExp("^#(" + t + ")"),
			CLASS: new RegExp("^\\.(" + t + ")"),
			TAG: new RegExp("^(" + t + "|[*])"),
			ATTR: new RegExp("^" + n),
			PSEUDO: new RegExp("^" + o),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + ft + ")$", "i"),
			needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
		},
		At = /^(?:input|select|textarea|button)$/i,
		Ct = /^h\d$/i,
		St = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		Tt = /[+~]/,
		d = new RegExp("\\\\[\\da-fA-F]{1,6}" + i + "?|\\\\([^\\r\\n\\f])", "g"),
		g = function(t, e) {
			t = "0x" + t.slice(1) - 65536;
			return e || (t < 0 ? String.fromCharCode(65536 + t) : String.fromCharCode(t >> 10 | 55296, 1023 & t | 56320))
		},
		Lt = function() {
			Dt()
		},
		Et = Ft(function(t) {
			return !0 === t.disabled && y(t, "fieldset")
		}, {
			dir: "parentNode",
			next: "legend"
		});
	try {
		L.apply(e = r.call(a.childNodes), a.childNodes), e[a.childNodes.length].nodeType
	} catch (st) {
		L = {
			apply: function(t, e) {
				lt.apply(t, r.call(e))
			},
			call: function(t) {
				lt.apply(t, r.call(arguments, 1))
			}
		}
	}

	function _(t, e, i, s) {
		var a, n, o, r, l, c, h = e && e.ownerDocument,
			d = e ? e.nodeType : 9;
		if (i = i || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return i;
		if (!s && (Dt(e), e = e || S, T)) {
			if (11 !== d && (r = St.exec(t)))
				if (a = r[1]) {
					if (9 === d) {
						if (!(c = e.getElementById(a))) return i;
						if (c.id === a) return L.call(i, c), i
					} else if (h && (c = h.getElementById(a)) && _.contains(e, c) && c.id === a) return L.call(i, c), i
				} else {
					if (r[2]) return L.apply(i, e.getElementsByTagName(t)), i;
					if ((a = r[3]) && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(a)), i
				} if (!(gt[t + " "] || u && u.test(t))) {
				if (c = t, h = e, 1 === d && (vt.test(t) || bt.test(t))) {
					for ((h = Tt.test(t) && Ot(e.parentNode) || e) == e && f.scope || ((o = e.getAttribute("id")) ? o = C.escapeSelector(o) : e.setAttribute("id", o = E)), n = (l = Xt(t)).length; n--;) l[n] = (o ? "#" + o : ":scope") + " " + Nt(l[n]);
					c = l.join(",")
				}
				try {
					return L.apply(i, h.querySelectorAll(c)), i
				} catch (e) {
					gt(t, !0)
				} finally {
					o === E && e.removeAttribute("id")
				}
			}
		}
		return Bt(t.replace(tt, "$1"), e, i, s)
	}

	function Pt() {
		var s = [];
		return function t(e, i) {
			return s.push(e + " ") > w.cacheLength && delete t[s.shift()], t[e + " "] = i
		}
	}

	function I(t) {
		return t[E] = !0, t
	}

	function _t(t) {
		var e = S.createElement("fieldset");
		try {
			return !!t(e)
		} catch (t) {
			return !1
		} finally {
			e.parentNode && e.parentNode.removeChild(e)
		}
	}

	function It(e) {
		return function(t) {
			return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Et(t) === e : t.disabled === e : "label" in t && t.disabled === e
		}
	}

	function Mt(o) {
		return I(function(n) {
			return n = +n, I(function(t, e) {
				for (var i, s = o([], t.length, n), a = s.length; a--;) t[i = s[a]] && (t[i] = !(e[i] = t[i]))
			})
		})
	}

	function Ot(t) {
		return t && void 0 !== t.getElementsByTagName && t
	}

	function Dt(t) {
		var t = t ? t.ownerDocument || t : a;
		return t != S && 9 === t.nodeType && t.documentElement && (s = (S = t).documentElement, T = !C.isXMLDoc(S), rt = s.matches || s.webkitMatchesSelector || s.msMatchesSelector, s.msMatchesSelector && a != S && (t = S.defaultView) && t.top !== t && t.addEventListener("unload", Lt), f.getById = _t(function(t) {
			return s.appendChild(t).id = C.expando, !S.getElementsByName || !S.getElementsByName(C.expando).length
		}), f.disconnectedMatch = _t(function(t) {
			return rt.call(t, "*")
		}), f.scope = _t(function() {
			return S.querySelectorAll(":scope")
		}), f.cssHas = _t(function() {
			try {
				return S.querySelector(":has(*,:jqfake)"), 0
			} catch (t) {
				return 1
			}
		}), f.getById ? (w.filter.ID = function(t) {
			var e = t.replace(d, g);
			return function(t) {
				return t.getAttribute("id") === e
			}
		}, w.find.ID = function(t, e) {
			if (void 0 !== e.getElementById && T) return (e = e.getElementById(t)) ? [e] : []
		}) : (w.filter.ID = function(t) {
			var e = t.replace(d, g);
			return function(t) {
				t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
				return t && t.value === e
			}
		}, w.find.ID = function(t, e) {
			if (void 0 !== e.getElementById && T) {
				var i, s, a, n = e.getElementById(t);
				if (n) {
					if ((i = n.getAttributeNode("id")) && i.value === t) return [n];
					for (a = e.getElementsByName(t), s = 0; n = a[s++];)
						if ((i = n.getAttributeNode("id")) && i.value === t) return [n]
				}
				return []
			}
		}), w.find.TAG = function(t, e) {
			return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : e.querySelectorAll(t)
		}, w.find.CLASS = function(t, e) {
			if (void 0 !== e.getElementsByClassName && T) return e.getElementsByClassName(t)
		}, u = [], _t(function(t) {
			var e;
			s.appendChild(t).innerHTML = "<a id='" + E + "' href='' disabled='disabled'></a><select id='" + E + "-\r\\' disabled='disabled'><option selected=''></option></select>", t.querySelectorAll("[selected]").length || u.push("\\[" + i + "*(?:value|" + ft + ")"), t.querySelectorAll("[id~=" + E + "-]").length || u.push("~="), t.querySelectorAll("a#" + E + "+*").length || u.push(".#.+[+~]"), t.querySelectorAll(":checked").length || u.push(":checked"), (e = S.createElement("input")).setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), s.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && u.push(":enabled", ":disabled"), (e = S.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || u.push("\\[" + i + "*name" + i + "*=" + i + "*(?:''|\"\")")
		}), f.cssHas || u.push(":has"), u = u.length && new RegExp(u.join("|")), pt = function(t, e) {
			var i;
			return t === e ? (ot = !0, 0) : !t.compareDocumentPosition - !e.compareDocumentPosition || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === S || t.ownerDocument == a && _.contains(a, t) ? -1 : e === S || e.ownerDocument == a && _.contains(a, e) ? 1 : nt ? v.call(nt, t) - v.call(nt, e) : 0 : 4 & i ? -1 : 1)
		}), S
	}
	for (st in _.matches = function(t, e) {
			return _(t, null, null, e)
		}, _.matchesSelector = function(t, e) {
			if (Dt(t), T && !gt[e + " "] && (!u || !u.test(e))) try {
				var i = rt.call(t, e);
				if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
			} catch (t) {
				gt(e, !0)
			}
			return 0 < _(e, S, null, [t]).length
		}, _.contains = function(t, e) {
			return (t.ownerDocument || t) != S && Dt(t), C.contains(t, e)
		}, _.attr = function(t, e) {
			(t.ownerDocument || t) != S && Dt(t);
			var i = w.attrHandle[e.toLowerCase()],
				i = i && B.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !T) : void 0;
			return void 0 !== i ? i : t.getAttribute(e)
		}, _.error = function(t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, C.uniqueSort = function(t) {
			var e, i = [],
				s = 0,
				a = 0;
			if (ot = !f.sortStable, nt = !f.sortStable && r.call(t, 0), K.call(t, pt), ot) {
				for (; e = t[a++];) e === t[a] && (s = i.push(a));
				for (; s--;) J.call(t, i[s], 1)
			}
			return nt = null, t
		}, C.fn.uniqueSort = function() {
			return this.pushStack(C.uniqueSort(r.apply(this)))
		}, (w = C.expr = {
			cacheLength: 50,
			createPseudo: I,
			match: kt,
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
				ATTR: function(t) {
					return t[1] = t[1].replace(d, g), t[3] = (t[3] || t[4] || t[5] || "").replace(d, g), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				},
				CHILD: function(t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || _.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && _.error(t[0]), t
				},
				PSEUDO: function(t) {
					var e, i = !t[6] && t[2];
					return kt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && yt.test(i) && (e = (e = Xt(i, !0)) && i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function(t) {
					var e = t.replace(d, g).toLowerCase();
					return "*" === t ? function() {
						return !0
					} : function(t) {
						return y(t, e)
					}
				},
				CLASS: function(t) {
					var e = ht[t + " "];
					return e || (e = new RegExp("(^|" + i + ")" + t + "(" + i + "|$)")) && ht(t, function(t) {
						return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
					})
				},
				ATTR: function(e, i, s) {
					return function(t) {
						t = _.attr(t, e);
						return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === s : "!=" === i ? t !== s : "^=" === i ? s && 0 === t.indexOf(s) : "*=" === i ? s && -1 < t.indexOf(s) : "$=" === i ? s && t.slice(-s.length) === s : "~=" === i ? -1 < (" " + t.replace(xt, " ") + " ").indexOf(s) : "|=" === i && (t === s || t.slice(0, s.length + 1) === s + "-"))
					}
				},
				CHILD: function(g, t, e, p, f) {
					var x = "nth" !== g.slice(0, 3),
						m = "last" !== g.slice(-4),
						b = "of-type" === t;
					return 1 === p && 0 === f ? function(t) {
						return !!t.parentNode
					} : function(t, e, i) {
						var s, a, n, o, r, l = x != m ? "nextSibling" : "previousSibling",
							c = t.parentNode,
							h = b && t.nodeName.toLowerCase(),
							d = !i && !b,
							u = !1;
						if (c) {
							if (x) {
								for (; l;) {
									for (n = t; n = n[l];)
										if (b ? y(n, h) : 1 === n.nodeType) return !1;
									r = l = "only" === g && !r && "nextSibling"
								}
								return !0
							}
							if (r = [m ? c.firstChild : c.lastChild], m && d) {
								for (u = (o = (s = (a = c[E] || (c[E] = {}))[g] || [])[0] === P && s[1]) && s[2], n = o && c.childNodes[o]; n = ++o && n && n[l] || (u = o = 0, r.pop());)
									if (1 === n.nodeType && ++u && n === t) {
										a[g] = [P, o, u];
										break
									}
							} else if (!1 === (u = d ? o = (s = (a = t[E] || (t[E] = {}))[g] || [])[0] === P && s[1] : u))
								for (;
									(n = ++o && n && n[l] || (u = o = 0, r.pop())) && ((b ? !y(n, h) : 1 !== n.nodeType) || !++u || (d && ((a = n[E] || (n[E] = {}))[g] = [P, u]), n !== t)););
							return (u -= f) === p || u % p == 0 && 0 <= u / p
						}
					}
				},
				PSEUDO: function(t, n) {
					var e, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || _.error("unsupported pseudo: " + t);
					return o[E] ? o(n) : 1 < o.length ? (e = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? I(function(t, e) {
						for (var i, s = o(t, n), a = s.length; a--;) t[i = v.call(t, s[a])] = !(e[i] = s[a])
					}) : function(t) {
						return o(t, 0, e)
					}) : o
				}
			},
			pseudos: {
				not: I(function(t) {
					var s = [],
						a = [],
						r = Wt(t.replace(tt, "$1"));
					return r[E] ? I(function(t, e, i, s) {
						for (var a, n = r(t, null, s, []), o = t.length; o--;)(a = n[o]) && (t[o] = !(e[o] = a))
					}) : function(t, e, i) {
						return s[0] = t, r(s, null, i, a), s[0] = null, !a.pop()
					}
				}),
				has: I(function(e) {
					return function(t) {
						return 0 < _(e, t).length
					}
				}),
				contains: I(function(e) {
					return e = e.replace(d, g),
						function(t) {
							return -1 < (t.textContent || C.text(t)).indexOf(e)
						}
				}),
				lang: I(function(i) {
					return wt.test(i || "") || _.error("unsupported lang: " + i), i = i.replace(d, g).toLowerCase(),
						function(t) {
							var e;
							do {
								if (e = T ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var e = k.location && k.location.hash;
					return e && e.slice(1) === t.id
				},
				root: function(t) {
					return t === s
				},
				focus: function(t) {
					return t === function() {
						try {
							return S.activeElement
						} catch (t) {}
					}() && S.hasFocus() && !!(t.type || t.href || ~t.tabIndex)
				},
				enabled: It(!1),
				disabled: It(!0),
				checked: function(t) {
					return y(t, "input") && !!t.checked || y(t, "option") && !!t.selected
				},
				selected: function(t) {
					return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
				},
				empty: function(t) {
					for (t = t.firstChild; t; t = t.nextSibling)
						if (t.nodeType < 6) return !1;
					return !0
				},
				parent: function(t) {
					return !w.pseudos.empty(t)
				},
				header: function(t) {
					return Ct.test(t.nodeName)
				},
				input: function(t) {
					return At.test(t.nodeName)
				},
				button: function(t) {
					return y(t, "input") && "button" === t.type || y(t, "button")
				},
				text: function(t) {
					return y(t, "input") && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: Mt(function() {
					return [0]
				}),
				last: Mt(function(t, e) {
					return [e - 1]
				}),
				eq: Mt(function(t, e, i) {
					return [i < 0 ? i + e : i]
				}),
				even: Mt(function(t, e) {
					for (var i = 0; i < e; i += 2) t.push(i);
					return t
				}),
				odd: Mt(function(t, e) {
					for (var i = 1; i < e; i += 2) t.push(i);
					return t
				}),
				lt: Mt(function(t, e, i) {
					for (var s = i < 0 ? i + e : e < i ? e : i; 0 <= --s;) t.push(s);
					return t
				}),
				gt: Mt(function(t, e, i) {
					for (var s = i < 0 ? i + e : i; ++s < e;) t.push(s);
					return t
				})
			}
		}).pseudos.nth = w.pseudos.eq, {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) w.pseudos[st] = function(e) {
		return function(t) {
			return y(t, "input") && t.type === e
		}
	}(st);
	for (st in {
			submit: !0,
			reset: !0
		}) w.pseudos[st] = function(e) {
		return function(t) {
			return (y(t, "input") || y(t, "button")) && t.type === e
		}
	}(st);

	function zt() {}

	function Xt(t, e) {
		var i, s, a, n, o, r, l, c = dt[t + " "];
		if (c) return e ? 0 : c.slice(0);
		for (o = t, r = [], l = w.preFilter; o;) {
			for (n in i && !(s = mt.exec(o)) || (s && (o = o.slice(s[0].length) || o), r.push(a = [])), i = !1, (s = bt.exec(o)) && (i = s.shift(), a.push({
					value: i,
					type: s[0].replace(tt, " ")
				}), o = o.slice(i.length)), w.filter) !(s = kt[n].exec(o)) || l[n] && !(s = l[n](s)) || (i = s.shift(), a.push({
				value: i,
				type: n,
				matches: s
			}), o = o.slice(i.length));
			if (!i) break
		}
		return e ? o.length : o ? _.error(t) : dt(t, r).slice(0)
	}

	function Nt(t) {
		for (var e = 0, i = t.length, s = ""; e < i; e++) s += t[e].value;
		return s
	}

	function Ft(o, t, e) {
		var r = t.dir,
			l = t.next,
			c = l || r,
			h = e && "parentNode" === c,
			d = ct++;
		return t.first ? function(t, e, i) {
			for (; t = t[r];)
				if (1 === t.nodeType || h) return o(t, e, i);
			return !1
		} : function(t, e, i) {
			var s, a, n = [P, d];
			if (i) {
				for (; t = t[r];)
					if ((1 === t.nodeType || h) && o(t, e, i)) return !0
			} else
				for (; t = t[r];)
					if (1 === t.nodeType || h)
						if (a = t[E] || (t[E] = {}), l && y(t, l)) t = t[r] || t;
						else {
							if ((s = a[c]) && s[0] === P && s[1] === d) return n[2] = s[2];
							if ((a[c] = n)[2] = o(t, e, i)) return !0
						} return !1
		}
	}

	function Rt(a) {
		return 1 < a.length ? function(t, e, i) {
			for (var s = a.length; s--;)
				if (!a[s](t, e, i)) return !1;
			return !0
		} : a[0]
	}

	function Ht(t, e, i, s, a) {
		for (var n, o = [], r = 0, l = t.length, c = null != e; r < l; r++) !(n = t[r]) || i && !i(n, s, a) || (o.push(n), c && e.push(r));
		return o
	}

	function Yt(t) {
		for (var s, e, i, a = t.length, n = w.relative[t[0].type], o = n || w.relative[" "], r = n ? 1 : 0, l = Ft(function(t) {
				return t === s
			}, o, !0), c = Ft(function(t) {
				return -1 < v.call(s, t)
			}, o, !0), h = [function(t, e, i) {
				t = !n && (i || e != at) || ((s = e).nodeType ? l : c)(t, e, i);
				return s = null, t
			}]; r < a; r++)
			if (e = w.relative[t[r].type]) h = [Ft(Rt(h), e)];
			else {
				if ((e = w.filter[t[r].type].apply(null, t[r].matches))[E]) {
					for (i = ++r; i < a && !w.relative[t[i].type]; i++);
					return function t(g, p, f, x, m, e) {
						return x && !x[E] && (x = t(x)), m && !m[E] && (m = t(m, e)), I(function(t, e, i, s) {
							var a, n, o, r, l = [],
								c = [],
								h = e.length,
								d = t || function(t, e, i) {
									for (var s = 0, a = e.length; s < a; s++) _(t, e[s], i);
									return i
								}(p || "*", i.nodeType ? [i] : i, []),
								u = !g || !t && p ? d : Ht(d, l, g, i, s);
							if (f ? f(u, r = m || (t ? g : h || x) ? [] : e, i, s) : r = u, x)
								for (a = Ht(r, c), x(a, [], i, s), n = a.length; n--;)(o = a[n]) && (r[c[n]] = !(u[c[n]] = o));
							if (t) {
								if (m || g) {
									if (m) {
										for (a = [], n = r.length; n--;)(o = r[n]) && a.push(u[n] = o);
										m(null, r = [], a, s)
									}
									for (n = r.length; n--;)(o = r[n]) && -1 < (a = m ? v.call(t, o) : l[n]) && (t[a] = !(e[a] = o))
								}
							} else r = Ht(r === e ? r.splice(h, r.length) : r), m ? m(null, e, r, s) : L.apply(e, r)
						})
					}(1 < r && Rt(h), 1 < r && Nt(t.slice(0, r - 1).concat({
						value: " " === t[r - 2].type ? "*" : ""
					})).replace(tt, "$1"), e, r < i && Yt(t.slice(r, i)), i < a && Yt(t = t.slice(i)), i < a && Nt(t))
				}
				h.push(e)
			} return Rt(h)
	}

	function Wt(t, e) {
		var i, x, m, b, v, s, a = [],
			n = [],
			o = ut[t + " "];
		if (!o) {
			for (i = (e = e || Xt(t)).length; i--;)((o = Yt(e[i]))[E] ? a : n).push(o);
			(o = ut(t, (b = 0 < (m = a).length, v = 0 < (x = n).length, s = function(t, e, i, s, a) {
				var n, o, r, l = 0,
					c = "0",
					h = t && [],
					d = [],
					u = at,
					g = t || v && w.find.TAG("*", a),
					p = P += null == u ? 1 : Math.random() || .1,
					f = g.length;
				for (a && (at = e == S || e || a); c !== f && null != (n = g[c]); c++) {
					if (v && n) {
						for (o = 0, e || n.ownerDocument == S || (Dt(n), i = !T); r = x[o++];)
							if (r(n, e || S, i)) {
								L.call(s, n);
								break
							} a && (P = p)
					}
					b && ((n = !r && n) && l--, t) && h.push(n)
				}
				if (l += c, b && c !== l) {
					for (o = 0; r = m[o++];) r(h, d, e, i);
					if (t) {
						if (0 < l)
							for (; c--;) h[c] || d[c] || (d[c] = Q.call(s));
						d = Ht(d)
					}
					L.apply(s, d), a && !t && 0 < d.length && 1 < l + m.length && C.uniqueSort(s)
				}
				return a && (P = p, at = u), h
			}, b ? I(s) : s))).selector = t
		}
		return o
	}

	function Bt(t, e, i, s) {
		var a, n, o, r, l, c = "function" == typeof t && t,
			h = !s && Xt(t = c.selector || t);
		if (i = i || [], 1 === h.length) {
			if (2 < (n = h[0] = h[0].slice(0)).length && "ID" === (o = n[0]).type && 9 === e.nodeType && T && w.relative[n[1].type]) {
				if (!(e = (w.find.ID(o.matches[0].replace(d, g), e) || [])[0])) return i;
				c && (e = e.parentNode), t = t.slice(n.shift().value.length)
			}
			for (a = kt.needsContext.test(t) ? 0 : n.length; a-- && (o = n[a], !w.relative[r = o.type]);)
				if ((l = w.find[r]) && (s = l(o.matches[0].replace(d, g), Tt.test(n[0].type) && Ot(e.parentNode) || e))) {
					if (n.splice(a, 1), t = s.length && Nt(n)) break;
					return L.apply(i, s), i
				}
		}
		return (c || Wt(t, h))(s, e, !T, i, !e || Tt.test(t) && Ot(e.parentNode) || e), i
	}
	zt.prototype = w.filters = w.pseudos, w.setFilters = new zt, f.sortStable = E.split("").sort(pt).join("") === E, Dt(), f.sortDetached = _t(function(t) {
		return 1 & t.compareDocumentPosition(S.createElement("fieldset"))
	}), C.find = _, C.expr[":"] = C.expr.pseudos, C.unique = C.uniqueSort, _.compile = Wt, _.select = Bt, _.setDocument = Dt, _.tokenize = Xt, _.escape = C.escapeSelector, _.getText = C.text, _.isXML = C.isXMLDoc, _.selectors = C.expr, _.support = C.support, _.uniqueSort = C.uniqueSort;

	function jt(t, e, i) {
		for (var s = [], a = void 0 !== i;
			(t = t[e]) && 9 !== t.nodeType;)
			if (1 === t.nodeType) {
				if (a && C(t).is(i)) break;
				s.push(t)
			} return s
	}

	function Vt(t, e) {
		for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
		return i
	}
	var Gt = C.expr.match.needsContext,
		qt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function Ut(t, i, s) {
		return b(i) ? C.grep(t, function(t, e) {
			return !!i.call(t, e, t) !== s
		}) : i.nodeType ? C.grep(t, function(t) {
			return t === i !== s
		}) : "string" != typeof i ? C.grep(t, function(t) {
			return -1 < v.call(i, t) !== s
		}) : C.filter(i, t, s)
	}
	C.filter = function(t, e, i) {
		var s = e[0];
		return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === s.nodeType ? C.find.matchesSelector(s, t) ? [s] : [] : C.find.matches(t, C.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, C.fn.extend({
		find: function(t) {
			var e, i, s = this.length,
				a = this;
			if ("string" != typeof t) return this.pushStack(C(t).filter(function() {
				for (e = 0; e < s; e++)
					if (C.contains(a[e], this)) return !0
			}));
			for (i = this.pushStack([]), e = 0; e < s; e++) C.find(t, a[e], i);
			return 1 < s ? C.uniqueSort(i) : i
		},
		filter: function(t) {
			return this.pushStack(Ut(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(Ut(this, t || [], !0))
		},
		is: function(t) {
			return !!Ut(this, "string" == typeof t && Gt.test(t) ? C(t) : t || [], !1).length
		}
	});
	var Zt, $t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		Qt = ((C.fn.init = function(t, e, i) {
			if (t) {
				if (i = i || Zt, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : b(t) ? void 0 !== i.ready ? i.ready(t) : t(C) : C.makeArray(t, this);
				if (!(s = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : $t.exec(t)) || !s[1] && e) return (!e || e.jquery ? e || i : this.constructor(e)).find(t);
				if (s[1]) {
					if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : A, !0)), qt.test(s[1]) && C.isPlainObject(e))
						for (var s in e) b(this[s]) ? this[s](e[s]) : this.attr(s, e[s])
				} else(i = A.getElementById(s[2])) && (this[0] = i, this.length = 1)
			}
			return this
		}).prototype = C.fn, Zt = C(A), /^(?:parents|prev(?:Until|All))/),
		Kt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function Jt(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}
	C.fn.extend({
		has: function(t) {
			var e = C(t, this),
				i = e.length;
			return this.filter(function() {
				for (var t = 0; t < i; t++)
					if (C.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			var i, s = 0,
				a = this.length,
				n = [],
				o = "string" != typeof t && C(t);
			if (!Gt.test(t))
				for (; s < a; s++)
					for (i = this[s]; i && i !== e; i = i.parentNode)
						if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
							n.push(i);
							break
						} return this.pushStack(1 < n.length ? C.uniqueSort(n) : n)
		},
		index: function(t) {
			return t ? "string" == typeof t ? v.call(C(t), this[0]) : v.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), C.each({
		parent: function(t) {
			t = t.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(t) {
			return jt(t, "parentNode")
		},
		parentsUntil: function(t, e, i) {
			return jt(t, "parentNode", i)
		},
		next: function(t) {
			return Jt(t, "nextSibling")
		},
		prev: function(t) {
			return Jt(t, "previousSibling")
		},
		nextAll: function(t) {
			return jt(t, "nextSibling")
		},
		prevAll: function(t) {
			return jt(t, "previousSibling")
		},
		nextUntil: function(t, e, i) {
			return jt(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return jt(t, "previousSibling", i)
		},
		siblings: function(t) {
			return Vt((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return Vt(t.firstChild)
		},
		contents: function(t) {
			return null != t.contentDocument && F(t.contentDocument) ? t.contentDocument : (y(t, "template") && (t = t.content || t), C.merge([], t.childNodes))
		}
	}, function(s, a) {
		C.fn[s] = function(t, e) {
			var i = C.map(this, a, t);
			return (e = "Until" !== s.slice(-5) ? t : e) && "string" == typeof e && (i = C.filter(e, i)), 1 < this.length && (Kt[s] || C.uniqueSort(i), Qt.test(s)) && i.reverse(), this.pushStack(i)
		}
	});
	var M = /[^\x20\t\r\n\f]+/g;

	function te(t) {
		return t
	}

	function ee(t) {
		throw t
	}

	function ie(t, e, i, s) {
		var a;
		try {
			t && b(a = t.promise) ? a.call(t).done(e).fail(i) : t && b(a = t.then) ? a.call(t, e, i) : e.apply(void 0, [t].slice(s))
		} catch (t) {
			i.apply(void 0, [t])
		}
	}
	C.Callbacks = function(s) {
		var t, i;
		s = "string" == typeof s ? (t = s, i = {}, C.each(t.match(M) || [], function(t, e) {
			i[e] = !0
		}), i) : C.extend({}, s);

		function a() {
			for (r = r || s.once, o = n = !0; c.length; h = -1)
				for (e = c.shift(); ++h < l.length;) !1 === l[h].apply(e[0], e[1]) && s.stopOnFalse && (h = l.length, e = !1);
			s.memory || (e = !1), n = !1, r && (l = e ? [] : "")
		}
		var n, e, o, r, l = [],
			c = [],
			h = -1,
			d = {
				add: function() {
					return l && (e && !n && (h = l.length - 1, c.push(e)), function i(t) {
						C.each(t, function(t, e) {
							b(e) ? s.unique && d.has(e) || l.push(e) : e && e.length && "string" !== U(e) && i(e)
						})
					}(arguments), e) && !n && a(), this
				},
				remove: function() {
					return C.each(arguments, function(t, e) {
						for (var i; - 1 < (i = C.inArray(e, l, i));) l.splice(i, 1), i <= h && h--
					}), this
				},
				has: function(t) {
					return t ? -1 < C.inArray(t, l) : 0 < l.length
				},
				empty: function() {
					return l = l && [], this
				},
				disable: function() {
					return r = c = [], l = e = "", this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return r = c = [], e || n || (l = e = ""), this
				},
				locked: function() {
					return !!r
				},
				fireWith: function(t, e) {
					return r || (e = [t, (e = e || []).slice ? e.slice() : e], c.push(e), n) || a(), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return d
	}, C.extend({
		Deferred: function(t) {
			var n = [
					["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
					["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
				],
				a = "pending",
				o = {
					state: function() {
						return a
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					catch: function(t) {
						return o.then(null, t)
					},
					pipe: function() {
						var a = arguments;
						return C.Deferred(function(s) {
							C.each(n, function(t, e) {
								var i = b(a[e[4]]) && a[e[4]];
								r[e[1]](function() {
									var t = i && i.apply(this, arguments);
									t && b(t.promise) ? t.promise().progress(s.notify).done(s.resolve).fail(s.reject) : s[e[0] + "With"](this, i ? [t] : arguments)
								})
							}), a = null
						}).promise()
					},
					then: function(e, i, s) {
						var l = 0;

						function c(a, n, o, r) {
							return function() {
								function t() {
									var t, e;
									if (!(a < l)) {
										if ((t = o.apply(i, s)) === n.promise()) throw new TypeError("Thenable self-resolution");
										e = t && ("object" == typeof t || "function" == typeof t) && t.then, b(e) ? r ? e.call(t, c(l, n, te, r), c(l, n, ee, r)) : (l++, e.call(t, c(l, n, te, r), c(l, n, ee, r), c(l, n, te, n.notifyWith))) : (o !== te && (i = void 0, s = [t]), (r || n.resolveWith)(i, s))
									}
								}
								var i = this,
									s = arguments,
									e = r ? t : function() {
										try {
											t()
										} catch (t) {
											C.Deferred.exceptionHook && C.Deferred.exceptionHook(t, e.error), l <= a + 1 && (o !== ee && (i = void 0, s = [t]), n.rejectWith(i, s))
										}
									};
								a ? e() : (C.Deferred.getErrorHook ? e.error = C.Deferred.getErrorHook() : C.Deferred.getStackHook && (e.error = C.Deferred.getStackHook()), k.setTimeout(e))
							}
						}
						return C.Deferred(function(t) {
							n[0][3].add(c(0, t, b(s) ? s : te, t.notifyWith)), n[1][3].add(c(0, t, b(e) ? e : te)), n[2][3].add(c(0, t, b(i) ? i : ee))
						}).promise()
					},
					promise: function(t) {
						return null != t ? C.extend(t, o) : o
					}
				},
				r = {};
			return C.each(n, function(t, e) {
				var i = e[2],
					s = e[5];
				o[e[1]] = i.add, s && i.add(function() {
					a = s
				}, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), i.add(e[3].fire), r[e[0]] = function() {
					return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
				}, r[e[0] + "With"] = i.fireWith
			}), o.promise(r), t && t.call(r, r), r
		},
		when: function(t) {
			function e(e) {
				return function(t) {
					a[e] = this, n[e] = 1 < arguments.length ? r.call(arguments) : t, --i || o.resolveWith(a, n)
				}
			}
			var i = arguments.length,
				s = i,
				a = Array(s),
				n = r.call(arguments),
				o = C.Deferred();
			if (i <= 1 && (ie(t, o.done(e(s)).resolve, o.reject, !i), "pending" === o.state() || b(n[s] && n[s].then))) return o.then();
			for (; s--;) ie(n[s], e(s), o.reject);
			return o.promise()
		}
	});
	var se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
		ae = (C.Deferred.exceptionHook = function(t, e) {
			//k.console && k.console.warn && t && se.test(t.name) && k.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
		}, C.readyException = function(t) {
			k.setTimeout(function() {
				//throw t
			})
		}, C.Deferred());

	function ne() {
		A.removeEventListener("DOMContentLoaded", ne), k.removeEventListener("load", ne), C.ready()
	}
	C.fn.ready = function(t) {
		return ae.then(t).catch(function(t) {
			C.readyException(t)
		}), this
	}, C.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(t) {
			(!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0) !== t && 0 < --C.readyWait || ae.resolveWith(A, [C])
		}
	}), C.ready.then = ae.then, "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? k.setTimeout(C.ready) : (A.addEventListener("DOMContentLoaded", ne), k.addEventListener("load", ne));

	function h(t, e, i, s, a, n, o) {
		var r = 0,
			l = t.length,
			c = null == i;
		if ("object" === U(i))
			for (r in a = !0, i) h(t, e, r, i[r], !0, n, o);
		else if (void 0 !== s && (a = !0, b(s) || (o = !0), e = c ? o ? (e.call(t, s), null) : (c = e, function(t, e, i) {
				return c.call(C(t), i)
			}) : e))
			for (; r < l; r++) e(t[r], i, o ? s : s.call(t[r], r, e(t[r], i)));
		return a ? t : c ? e.call(t) : l ? e(t[0], i) : n
	}
	var oe = /^-ms-/,
		re = /-([a-z])/g;

	function le(t, e) {
		return e.toUpperCase()
	}

	function O(t) {
		return t.replace(oe, "ms-").replace(re, le)
	}

	function ce(t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	}

	function he() {
		this.expando = C.expando + he.uid++
	}
	he.uid = 1, he.prototype = {
		cache: function(t) {
			var e = t[this.expando];
			return e || (e = {}, ce(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
				value: e,
				configurable: !0
			}))), e
		},
		set: function(t, e, i) {
			var s, a = this.cache(t);
			if ("string" == typeof e) a[O(e)] = i;
			else
				for (s in e) a[O(s)] = e[s];
			return a
		},
		get: function(t, e) {
			return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][O(e)]
		},
		access: function(t, e, i) {
			return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
		},
		remove: function(t, e) {
			var i, s = t[this.expando];
			if (void 0 !== s) {
				if (void 0 !== e) {
					i = (e = Array.isArray(e) ? e.map(O) : (e = O(e)) in s ? [e] : e.match(M) || []).length;
					for (; i--;) delete s[e[i]]
				}
				void 0 !== e && !C.isEmptyObject(s) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
			}
		},
		hasData: function(t) {
			t = t[this.expando];
			return void 0 !== t && !C.isEmptyObject(t)
		}
	};
	var m = new he,
		l = new he,
		de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		ue = /[A-Z]/g;

	function ge(t, e, i) {
		var s, a;
		if (void 0 === i && 1 === t.nodeType)
			if (s = "data-" + e.replace(ue, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(s))) {
				try {
					i = "true" === (a = i) || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : de.test(a) ? JSON.parse(a) : a)
				} catch (t) {}
				l.set(t, e, i)
			} else i = void 0;
		return i
	}
	C.extend({
		hasData: function(t) {
			return l.hasData(t) || m.hasData(t)
		},
		data: function(t, e, i) {
			return l.access(t, e, i)
		},
		removeData: function(t, e) {
			l.remove(t, e)
		},
		_data: function(t, e, i) {
			return m.access(t, e, i)
		},
		_removeData: function(t, e) {
			m.remove(t, e)
		}
	}), C.fn.extend({
		data: function(i, t) {
			var e, s, a, n = this[0],
				o = n && n.attributes;
			if (void 0 !== i) return "object" == typeof i ? this.each(function() {
				l.set(this, i)
			}) : h(this, function(t) {
				var e;
				if (n && void 0 === t) return void 0 !== (e = l.get(n, i)) || void 0 !== (e = ge(n, i)) ? e : void 0;
				this.each(function() {
					l.set(this, i, t)
				})
			}, null, t, 1 < arguments.length, null, !0);
			if (this.length && (a = l.get(n), 1 === n.nodeType) && !m.get(n, "hasDataAttrs")) {
				for (e = o.length; e--;) o[e] && 0 === (s = o[e].name).indexOf("data-") && (s = O(s.slice(5)), ge(n, s, a[s]));
				m.set(n, "hasDataAttrs", !0)
			}
			return a
		},
		removeData: function(t) {
			return this.each(function() {
				l.remove(this, t)
			})
		}
	}), C.extend({
		queue: function(t, e, i) {
			var s;
			if (t) return s = m.get(t, e = (e || "fx") + "queue"), i && (!s || Array.isArray(i) ? s = m.access(t, e, C.makeArray(i)) : s.push(i)), s || []
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = C.queue(t, e),
				s = i.length,
				a = i.shift(),
				n = C._queueHooks(t, e);
			"inprogress" === a && (a = i.shift(), s--), a && ("fx" === e && i.unshift("inprogress"), delete n.stop, a.call(t, function() {
				C.dequeue(t, e)
			}, n)), !s && n && n.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return m.get(t, i) || m.access(t, i, {
				empty: C.Callbacks("once memory").add(function() {
					m.remove(t, [e + "queue", i])
				})
			})
		}
	}), C.fn.extend({
		queue: function(e, i) {
			var t = 2;
			return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? C.queue(this[0], e) : void 0 === i ? this : this.each(function() {
				var t = C.queue(this, e, i);
				C._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && C.dequeue(this, e)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				C.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			function i() {
				--a || n.resolveWith(o, [o])
			}
			var s, a = 1,
				n = C.Deferred(),
				o = this,
				r = this.length;
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(s = m.get(o[r], t + "queueHooks")) && s.empty && (a++, s.empty.add(i));
			return i(), n.promise(e)
		}
	});

	function pe(t, e) {
		return "none" === (t = e || t).style.display || "" === t.style.display && be(t) && "none" === C.css(t, "display")
	}
	var t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		fe = new RegExp("^(?:([+-])=|)(" + t + ")([a-z%]*)$", "i"),
		xe = ["Top", "Right", "Bottom", "Left"],
		me = A.documentElement,
		be = function(t) {
			return C.contains(t.ownerDocument, t)
		},
		ve = {
			composed: !0
		};
	me.getRootNode && (be = function(t) {
		return C.contains(t.ownerDocument, t) || t.getRootNode(ve) === t.ownerDocument
	});

	function ye(t, e, i, s) {
		var a, n, o = 20,
			r = s ? function() {
				return s.cur()
			} : function() {
				return C.css(t, e, "")
			},
			l = r(),
			c = i && i[3] || (C.cssNumber[e] ? "" : "px"),
			h = t.nodeType && (C.cssNumber[e] || "px" !== c && +l) && fe.exec(C.css(t, e));
		if (h && h[3] !== c) {
			for (c = c || h[3], h = +(l /= 2) || 1; o--;) C.style(t, e, h + c), (1 - n) * (1 - (n = r() / l || .5)) <= 0 && (o = 0), h /= n;
			C.style(t, e, (h *= 2) + c), i = i || []
		}
		return i && (h = +h || +l || 0, a = i[1] ? h + (i[1] + 1) * i[2] : +i[2], s) && (s.unit = c, s.start = h, s.end = a), a
	}
	var we = {};

	function ke(t, e) {
		for (var i, s, a, n, o, r, l = [], c = 0, h = t.length; c < h; c++)(s = t[c]).style && (i = s.style.display, e ? ("none" === i && (l[c] = m.get(s, "display") || null, l[c] || (s.style.display = "")), "" === s.style.display && pe(s) && (l[c] = (r = n = a = void 0, n = s.ownerDocument, o = s.nodeName, (r = we[o]) || (a = n.body.appendChild(n.createElement(o)), r = C.css(a, "display"), a.parentNode.removeChild(a), we[o] = r = "none" === r ? "block" : r)))) : "none" !== i && (l[c] = "none", m.set(s, "display", i)));
		for (c = 0; c < h; c++) null != l[c] && (t[c].style.display = l[c]);
		return t
	}
	C.fn.extend({
		show: function() {
			return ke(this, !0)
		},
		hide: function() {
			return ke(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				pe(this) ? C(this).show() : C(this).hide()
			})
		}
	});
	var Ae = /^(?:checkbox|radio)$/i,
		Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		Se = /^$|^module$|\/(?:java|ecma)script/i,
		n = A.createDocumentFragment().appendChild(A.createElement("div")),
		p = ((o = A.createElement("input")).setAttribute("type", "radio"), o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), n.appendChild(o), f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, n.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, n.innerHTML = "<option></option>", f.option = !!n.lastChild, {
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		});

	function x(t, e) {
		var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && y(t, e) ? C.merge([t], i) : i
	}

	function Te(t, e) {
		for (var i = 0, s = t.length; i < s; i++) m.set(t[i], "globalEval", !e || m.get(e[i], "globalEval"))
	}
	p.tbody = p.tfoot = p.colgroup = p.caption = p.thead, p.th = p.td, f.option || (p.optgroup = p.option = [1, "<select multiple='multiple'>", "</select>"]);
	var Le = /<|&#?\w+;/;

	function Ee(t, e, i, s, a) {
		for (var n, o, r, l, c, h = e.createDocumentFragment(), d = [], u = 0, g = t.length; u < g; u++)
			if ((n = t[u]) || 0 === n)
				if ("object" === U(n)) C.merge(d, n.nodeType ? [n] : n);
				else if (Le.test(n)) {
			for (o = o || h.appendChild(e.createElement("div")), r = (Ce.exec(n) || ["", ""])[1].toLowerCase(), r = p[r] || p._default, o.innerHTML = r[1] + C.htmlPrefilter(n) + r[2], c = r[0]; c--;) o = o.lastChild;
			C.merge(d, o.childNodes), (o = h.firstChild).textContent = ""
		} else d.push(e.createTextNode(n));
		for (h.textContent = "", u = 0; n = d[u++];)
			if (s && -1 < C.inArray(n, s)) a && a.push(n);
			else if (l = be(n), o = x(h.appendChild(n), "script"), l && Te(o), i)
			for (c = 0; n = o[c++];) Se.test(n.type || "") && i.push(n);
		return h
	}
	var Pe = /^([^.]*)(?:\.(.+)|)/;

	function _e() {
		return !0
	}

	function Ie() {
		return !1
	}

	function Me(t, e, i, s, a, n) {
		var o, r;
		if ("object" == typeof e) {
			for (r in "string" != typeof i && (s = s || i, i = void 0), e) Me(t, r, i, s, e[r], n);
			return t
		}
		if (null == s && null == a ? (a = i, s = i = void 0) : null == a && ("string" == typeof i ? (a = s, s = void 0) : (a = s, s = i, i = void 0)), !1 === a) a = Ie;
		else if (!a) return t;
		return 1 === n && (o = a, (a = function(t) {
			return C().off(t), o.apply(this, arguments)
		}).guid = o.guid || (o.guid = C.guid++)), t.each(function() {
			C.event.add(this, e, a, s, i)
		})
	}

	function Oe(t, s, e) {
		e ? (m.set(t, s, !1), C.event.add(t, s, {
			namespace: !1,
			handler: function(t) {
				var e, i = m.get(this, s);
				if (1 & t.isTrigger && this[s]) {
					if (i)(C.event.special[s] || {}).delegateType && t.stopPropagation();
					else if (i = r.call(arguments), m.set(this, s, i), this[s](), e = m.get(this, s), m.set(this, s, !1), i !== e) return t.stopImmediatePropagation(), t.preventDefault(), e
				} else i && (m.set(this, s, C.event.trigger(i[0], i.slice(1), this)), t.stopPropagation(), t.isImmediatePropagationStopped = _e)
			}
		})) : void 0 === m.get(t, s) && C.event.add(t, s, _e)
	}
	C.event = {
		global: {},
		add: function(e, t, i, s, a) {
			var n, o, r, l, c, h, d, u, g, p = m.get(e);
			if (ce(e))
				for (i.handler && (i = (n = i).handler, a = n.selector), a && C.find.matchesSelector(me, a), i.guid || (i.guid = C.guid++), r = (r = p.events) || (p.events = Object.create(null)), o = (o = p.handle) || (p.handle = function(t) {
						return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
					}), l = (t = (t || "").match(M) || [""]).length; l--;) d = g = (u = Pe.exec(t[l]) || [])[1], u = (u[2] || "").split(".").sort(), d && (c = C.event.special[d] || {}, d = (a ? c.delegateType : c.bindType) || d, c = C.event.special[d] || {}, g = C.extend({
					type: d,
					origType: g,
					data: s,
					handler: i,
					guid: i.guid,
					selector: a,
					needsContext: a && C.expr.match.needsContext.test(a),
					namespace: u.join(".")
				}, n), (h = r[d]) || ((h = r[d] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, s, u, o)) || e.addEventListener && e.addEventListener(d, o), c.add && (c.add.call(e, g), g.handler.guid || (g.handler.guid = i.guid)), a ? h.splice(h.delegateCount++, 0, g) : h.push(g), C.event.global[d] = !0)
		},
		remove: function(t, e, i, s, a) {
			var n, o, r, l, c, h, d, u, g, p, f, x = m.hasData(t) && m.get(t);
			if (x && (l = x.events)) {
				for (c = (e = (e || "").match(M) || [""]).length; c--;)
					if (g = f = (r = Pe.exec(e[c]) || [])[1], p = (r[2] || "").split(".").sort(), g) {
						for (d = C.event.special[g] || {}, u = l[g = (s ? d.delegateType : d.bindType) || g] || [], r = r[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = n = u.length; n--;) h = u[n], !a && f !== h.origType || i && i.guid !== h.guid || r && !r.test(h.namespace) || s && s !== h.selector && ("**" !== s || !h.selector) || (u.splice(n, 1), h.selector && u.delegateCount--, d.remove && d.remove.call(t, h));
						o && !u.length && (d.teardown && !1 !== d.teardown.call(t, p, x.handle) || C.removeEvent(t, g, x.handle), delete l[g])
					} else
						for (g in l) C.event.remove(t, g + e[c], i, s, !0);
				C.isEmptyObject(l) && m.remove(t, "handle events")
			}
		},
		dispatch: function(t) {
			var e, i, s, a, n, o = new Array(arguments.length),
				r = C.event.fix(t),
				t = (m.get(this, "events") || Object.create(null))[r.type] || [],
				l = C.event.special[r.type] || {};
			for (o[0] = r, e = 1; e < arguments.length; e++) o[e] = arguments[e];
			if (r.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, r)) {
				for (n = C.event.handlers.call(this, r, t), e = 0;
					(s = n[e++]) && !r.isPropagationStopped();)
					for (r.currentTarget = s.elem, i = 0;
						(a = s.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !1 !== a.namespace && !r.rnamespace.test(a.namespace) || (r.handleObj = a, r.data = a.data, void 0 !== (a = ((C.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, o)) && !1 === (r.result = a) && (r.preventDefault(), r.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, r), r.result
			}
		},
		handlers: function(t, e) {
			var i, s, a, n, o, r = [],
				l = e.delegateCount,
				c = t.target;
			if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
						for (n = [], o = {}, i = 0; i < l; i++) void 0 === o[a = (s = e[i]).selector + " "] && (o[a] = s.needsContext ? -1 < C(a, this).index(c) : C.find(a, this, null, [c]).length), o[a] && n.push(s);
						n.length && r.push({
							elem: c,
							handlers: n
						})
					} return c = this, l < e.length && r.push({
				elem: c,
				handlers: e.slice(l)
			}), r
		},
		addProp: function(e, t) {
			Object.defineProperty(C.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: b(t) ? function() {
					if (this.originalEvent) return t(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(t) {
			return t[C.expando] ? t : new C.Event(t)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(t) {
					t = this || t;
					return Ae.test(t.type) && t.click && y(t, "input") && Oe(t, "click", !0), !1
				},
				trigger: function(t) {
					t = this || t;
					return Ae.test(t.type) && t.click && y(t, "input") && Oe(t, "click"), !0
				},
				_default: function(t) {
					t = t.target;
					return Ae.test(t.type) && t.click && y(t, "input") && m.get(t, "click") || y(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, C.removeEvent = function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i)
	}, C.Event = function(t, e) {
		if (!(this instanceof C.Event)) return new C.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _e : Ie, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[C.expando] = !0
	}, C.Event.prototype = {
		constructor: C.Event,
		isDefaultPrevented: Ie,
		isPropagationStopped: Ie,
		isImmediatePropagationStopped: Ie,
		isSimulated: !1,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = _e, t && !this.isSimulated && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = _e, t && !this.isSimulated && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = _e, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, C.each({
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
		which: !0
	}, C.event.addProp), C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(s, a) {
		function n(t) {
			var e, i;
			A.documentMode ? (e = m.get(this, "handle"), (i = C.event.fix(t)).type = "focusin" === t.type ? "focus" : "blur", i.isSimulated = !0, e(t), i.target === i.currentTarget && e(i)) : C.event.simulate(a, t.target, C.event.fix(t))
		}
		C.event.special[s] = {
			setup: function() {
				var t;
				if (Oe(this, s, !0), !A.documentMode) return !1;
				(t = m.get(this, a)) || this.addEventListener(a, n), m.set(this, a, (t || 0) + 1)
			},
			trigger: function() {
				return Oe(this, s), !0
			},
			teardown: function() {
				var t;
				if (!A.documentMode) return !1;
				(t = m.get(this, a) - 1) ? m.set(this, a, t): (this.removeEventListener(a, n), m.remove(this, a))
			},
			_default: function(t) {
				return m.get(t.target, s)
			},
			delegateType: a
		}, C.event.special[a] = {
			setup: function() {
				var t = this.ownerDocument || this.document || this,
					e = A.documentMode ? this : t,
					i = m.get(e, a);
				i || (A.documentMode ? this.addEventListener(a, n) : t.addEventListener(s, n, !0)), m.set(e, a, (i || 0) + 1)
			},
			teardown: function() {
				var t = this.ownerDocument || this.document || this,
					e = A.documentMode ? this : t,
					i = m.get(e, a) - 1;
				i ? m.set(e, a, i) : (A.documentMode ? this.removeEventListener(a, n) : t.removeEventListener(s, n, !0), m.remove(e, a))
			}
		}
	}), C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, a) {
		C.event.special[t] = {
			delegateType: a,
			bindType: a,
			handle: function(t) {
				var e, i = t.relatedTarget,
					s = t.handleObj;
				return i && (i === this || C.contains(this, i)) || (t.type = s.origType, e = s.handler.apply(this, arguments), t.type = a), e
			}
		}
	}), C.fn.extend({
		on: function(t, e, i, s) {
			return Me(this, t, e, i, s)
		},
		one: function(t, e, i, s) {
			return Me(this, t, e, i, s, 1)
		},
		off: function(t, e, i) {
			var s, a;
			if (t && t.preventDefault && t.handleObj) s = t.handleObj, C(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler);
			else {
				if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Ie), this.each(function() {
					C.event.remove(this, t, i, e)
				});
				for (a in t) this.off(a, e, t[a])
			}
			return this
		}
	});
	var De = /<script|<style|<link/i,
		ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Xe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

	function Ne(t, e) {
		return y(t, "table") && y(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
	}

	function Fe(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function Re(t) {
		return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
	}

	function He(t, e) {
		var i, s, a, n;
		if (1 === e.nodeType) {
			if (m.hasData(t) && (n = m.get(t).events))
				for (a in m.remove(e, "handle events"), n)
					for (i = 0, s = n[a].length; i < s; i++) C.event.add(e, a, n[a][i]);
			l.hasData(t) && (t = l.access(t), t = C.extend({}, t), l.set(e, t))
		}
	}

	function Ye(i, s, a, n) {
		s = R(s);
		var t, e, o, r, l, c, h = 0,
			d = i.length,
			u = d - 1,
			g = s[0],
			p = b(g);
		if (p || 1 < d && "string" == typeof g && !f.checkClone && ze.test(g)) return i.each(function(t) {
			var e = i.eq(t);
			p && (s[0] = g.call(this, t, e.html())), Ye(e, s, a, n)
		});
		if (d && (e = (t = Ee(s, i[0].ownerDocument, !1, i, n)).firstChild, 1 === t.childNodes.length && (t = e), e || n)) {
			for (r = (o = C.map(x(t, "script"), Fe)).length; h < d; h++) l = t, h !== u && (l = C.clone(l, !0, !0), r) && C.merge(o, x(l, "script")), a.call(i[h], l, h);
			if (r)
				for (c = o[o.length - 1].ownerDocument, C.map(o, Re), h = 0; h < r; h++) l = o[h], Se.test(l.type || "") && !m.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
					nonce: l.nonce || l.getAttribute("nonce")
				}, c) : q(l.textContent.replace(Xe, ""), l, c))
		}
		return i
	}

	function We(t, e, i) {
		for (var s, a = e ? C.filter(e, t) : t, n = 0; null != (s = a[n]); n++) i || 1 !== s.nodeType || C.cleanData(x(s)), s.parentNode && (i && be(s) && Te(x(s, "script")), s.parentNode.removeChild(s));
		return t
	}
	C.extend({
		htmlPrefilter: function(t) {
			return t
		},
		clone: function(t, e, i) {
			var s, a, n, o, r, l, c, h = t.cloneNode(!0),
				d = be(t);
			if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
				for (o = x(h), s = 0, a = (n = x(t)).length; s < a; s++) r = n[s], "input" === (c = (l = o[s]).nodeName.toLowerCase()) && Ae.test(r.type) ? l.checked = r.checked : "input" !== c && "textarea" !== c || (l.defaultValue = r.defaultValue);
			if (e)
				if (i)
					for (n = n || x(t), o = o || x(h), s = 0, a = n.length; s < a; s++) He(n[s], o[s]);
				else He(t, h);
			return 0 < (o = x(h, "script")).length && Te(o, !d && x(t, "script")), h
		},
		cleanData: function(t) {
			for (var e, i, s, a = C.event.special, n = 0; void 0 !== (i = t[n]); n++)
				if (ce(i)) {
					if (e = i[m.expando]) {
						if (e.events)
							for (s in e.events) a[s] ? C.event.remove(i, s) : C.removeEvent(i, s, e.handle);
						i[m.expando] = void 0
					}
					i[l.expando] && (i[l.expando] = void 0)
				}
		}
	}), C.fn.extend({
		detach: function(t) {
			return We(this, t, !0)
		},
		remove: function(t) {
			return We(this, t)
		},
		text: function(t) {
			return h(this, function(t) {
				return void 0 === t ? C.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return Ye(this, arguments, function(t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, t).appendChild(t)
			})
		},
		prepend: function() {
			return Ye(this, arguments, function(t) {
				var e;
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = Ne(this, t)).insertBefore(t, e.firstChild)
			})
		},
		before: function() {
			return Ye(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return Ye(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(x(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map(function() {
				return C.clone(this, t, e)
			})
		},
		html: function(t) {
			return h(this, function(t) {
				var e = this[0] || {},
					i = 0,
					s = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !De.test(t) && !p[(Ce.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = C.htmlPrefilter(t);
					try {
						for (; i < s; i++) 1 === (e = this[i] || {}).nodeType && (C.cleanData(x(e, !1)), e.innerHTML = t);
						e = 0
					} catch (t) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var i = [];
			return Ye(this, arguments, function(t) {
				var e = this.parentNode;
				C.inArray(this, i) < 0 && (C.cleanData(x(this)), e) && e.replaceChild(t, this)
			}, i)
		}
	}), C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, o) {
		C.fn[t] = function(t) {
			for (var e, i = [], s = C(t), a = s.length - 1, n = 0; n <= a; n++) e = n === a ? this : this.clone(!0), C(s[n])[o](e), H.apply(i, e.get());
			return this.pushStack(i)
		}
	});

	function Be(t) {
		var e = t.ownerDocument.defaultView;
		return (e = e && e.opener ? e : k).getComputedStyle(t)
	}

	function je(t, e, i) {
		var s, a = {};
		for (s in e) a[s] = t.style[s], t.style[s] = e[s];
		for (s in i = i.call(t), e) t.style[s] = a[s];
		return i
	}
	var Ve, Ge, qe, Ue, Ze, $e, Qe, c, Ke = new RegExp("^(" + t + ")(?!px)[a-z%]+$", "i"),
		Je = /^--/,
		ti = new RegExp(xe.join("|"), "i");

	function ei(t, e, i) {
		var s, a = Je.test(e),
			n = t.style;
		return (i = i || Be(t)) && (s = i.getPropertyValue(e) || i[e], "" !== (s = a ? s && (s.replace(tt, "$1") || void 0) : s) || be(t) || (s = C.style(t, e)), !f.pixelBoxStyles()) && Ke.test(s) && ti.test(e) && (a = n.width, t = n.minWidth, e = n.maxWidth, n.minWidth = n.maxWidth = n.width = s, s = i.width, n.width = a, n.minWidth = t, n.maxWidth = e), void 0 !== s ? s + "" : s
	}

	function ii(t, e) {
		return {
			get: function() {
				if (!t()) return (this.get = e).apply(this, arguments);
				delete this.get
			}
		}
	}

	function si() {
		var t;
		c && (Qe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", me.appendChild(Qe).appendChild(c), t = k.getComputedStyle(c), Ve = "1%" !== t.top, $e = 12 === ai(t.marginLeft), c.style.right = "60%", Ue = 36 === ai(t.right), Ge = 36 === ai(t.width), c.style.position = "absolute", qe = 12 === ai(c.offsetWidth / 3), me.removeChild(Qe), c = null)
	}

	function ai(t) {
		return Math.round(parseFloat(t))
	}
	Qe = A.createElement("div"), (c = A.createElement("div")).style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(f, {
		boxSizingReliable: function() {
			return si(), Ge
		},
		pixelBoxStyles: function() {
			return si(), Ue
		},
		pixelPosition: function() {
			return si(), Ve
		},
		reliableMarginLeft: function() {
			return si(), $e
		},
		scrollboxSize: function() {
			return si(), qe
		},
		reliableTrDimensions: function() {
			var t, e, i;
			return null == Ze && (t = A.createElement("table"), e = A.createElement("tr"), i = A.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "box-sizing:content-box;border:1px solid", e.style.height = "1px", i.style.height = "9px", i.style.display = "block", me.appendChild(t).appendChild(e).appendChild(i), i = k.getComputedStyle(e), Ze = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === e.offsetHeight, me.removeChild(t)), Ze
		}
	}));
	var ni = ["Webkit", "Moz", "ms"],
		oi = A.createElement("div").style,
		ri = {};

	function li(t) {
		return C.cssProps[t] || ri[t] || (t in oi ? t : ri[t] = function(t) {
			for (var e = t[0].toUpperCase() + t.slice(1), i = ni.length; i--;)
				if ((t = ni[i] + e) in oi) return t
		}(t) || t)
	}
	var ci = /^(none|table(?!-c[ea]).+)/,
		hi = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		di = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function ui(t, e, i) {
		var s = fe.exec(e);
		return s ? Math.max(0, s[2] - (i || 0)) + (s[3] || "px") : e
	}

	function gi(t, e, i, s, a, n) {
		var o = "width" === e ? 1 : 0,
			r = 0,
			l = 0,
			c = 0;
		if (i === (s ? "border" : "content")) return 0;
		for (; o < 4; o += 2) "margin" === i && (c += C.css(t, i + xe[o], !0, a)), s ? ("content" === i && (l -= C.css(t, "padding" + xe[o], !0, a)), "margin" !== i && (l -= C.css(t, "border" + xe[o] + "Width", !0, a))) : (l += C.css(t, "padding" + xe[o], !0, a), "padding" !== i ? l += C.css(t, "border" + xe[o] + "Width", !0, a) : r += C.css(t, "border" + xe[o] + "Width", !0, a));
		return !s && 0 <= n && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - n - l - r - .5)) || 0), l + c
	}

	function pi(t, e, i) {
		var s = Be(t),
			a = (!f.boxSizingReliable() || i) && "border-box" === C.css(t, "boxSizing", !1, s),
			n = a,
			o = ei(t, e, s),
			r = "offset" + e[0].toUpperCase() + e.slice(1);
		if (Ke.test(o)) {
			if (!i) return o;
			o = "auto"
		}
		return (!f.boxSizingReliable() && a || !f.reliableTrDimensions() && y(t, "tr") || "auto" === o || !parseFloat(o) && "inline" === C.css(t, "display", !1, s)) && t.getClientRects().length && (a = "border-box" === C.css(t, "boxSizing", !1, s), n = r in t) && (o = t[r]), (o = parseFloat(o) || 0) + gi(t, e, i || (a ? "border" : "content"), n, s, o) + "px"
	}

	function D(t, e, i, s, a) {
		return new D.prototype.init(t, e, i, s, a)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) return "" === (e = ei(t, "opacity")) ? "1" : e
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageSlice: !0,
			columnCount: !0,
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
			scale: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0
		},
		cssProps: {},
		style: function(t, e, i, s) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var a, n, o, r = O(e),
					l = Je.test(e),
					c = t.style;
				if (l || (e = li(r)), o = C.cssHooks[e] || C.cssHooks[r], void 0 === i) return o && "get" in o && void 0 !== (a = o.get(t, !1, s)) ? a : c[e];
				"string" == (n = typeof i) && (a = fe.exec(i)) && a[1] && (i = ye(t, e, a), n = "number"), null != i && i == i && ("number" !== n || l || (i += a && a[3] || (C.cssNumber[r] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, s)) || (l ? c.setProperty(e, i) : c[e] = i))
			}
		},
		css: function(t, e, i, s) {
			var a, n = O(e);
			return Je.test(e) || (e = li(n)), "normal" === (a = void 0 === (a = (n = C.cssHooks[e] || C.cssHooks[n]) && "get" in n ? n.get(t, !0, i) : a) ? ei(t, e, s) : a) && e in di && (a = di[e]), ("" === i || i) && (n = parseFloat(a), !0 === i || isFinite(n)) ? n || 0 : a
		}
	}), C.each(["height", "width"], function(t, o) {
		C.cssHooks[o] = {
			get: function(t, e, i) {
				if (e) return !ci.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? pi(t, o, i) : je(t, hi, function() {
					return pi(t, o, i)
				})
			},
			set: function(t, e, i) {
				var s = Be(t),
					a = !f.scrollboxSize() && "absolute" === s.position,
					n = (a || i) && "border-box" === C.css(t, "boxSizing", !1, s),
					i = i ? gi(t, o, i, n, s) : 0;
				return n && a && (i -= Math.ceil(t["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(s[o]) - gi(t, o, "border", !1, s) - .5)), i && (n = fe.exec(e)) && "px" !== (n[3] || "px") && (t.style[o] = e, e = C.css(t, o)), ui(0, e, i)
			}
		}
	}), C.cssHooks.marginLeft = ii(f.reliableMarginLeft, function(t, e) {
		if (e) return (parseFloat(ei(t, "marginLeft")) || t.getBoundingClientRect().left - je(t, {
			marginLeft: 0
		}, function() {
			return t.getBoundingClientRect().left
		})) + "px"
	}), C.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, n) {
		C.cssHooks[a + n] = {
			expand: function(t) {
				for (var e = 0, i = {}, s = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[a + xe[e] + n] = s[e] || s[e - 2] || s[0];
				return i
			}
		}, "margin" !== a && (C.cssHooks[a + n].set = ui)
	}), C.fn.extend({
		css: function(t, e) {
			return h(this, function(t, e, i) {
				var s, a, n = {},
					o = 0;
				if (Array.isArray(e)) {
					for (s = Be(t), a = e.length; o < a; o++) n[e[o]] = C.css(t, e[o], !1, s);
					return n
				}
				return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
			}, t, e, 1 < arguments.length)
		}
	}), ((C.Tween = D).prototype = {
		constructor: D,
		init: function(t, e, i, s, a, n) {
			this.elem = t, this.prop = i, this.easing = a || C.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = n || (C.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var t = D.propHooks[this.prop];
			return (t && t.get ? t : D.propHooks._default).get(this)
		},
		run: function(t) {
			var e, i = D.propHooks[this.prop];
			return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (i && i.set ? i : D.propHooks._default).set(this), this
		}
	}).init.prototype = D.prototype, (D.propHooks = {
		_default: {
			get: function(t) {
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = C.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(t) {
				C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !C.cssHooks[t.prop] && null == t.elem.style[li(t.prop)] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}).scrollTop = D.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, C.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, C.fx = D.prototype.init, C.fx.step = {};
	var fi, xi, mi = /^(?:toggle|show|hide)$/,
		bi = /queueHooks$/;

	function vi() {
		xi && (!1 === A.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(vi) : k.setTimeout(vi, C.fx.interval), C.fx.tick())
	}

	function yi() {
		return k.setTimeout(function() {
			fi = void 0
		}), fi = Date.now()
	}

	function wi(t, e) {
		var i, s = 0,
			a = {
				height: t
			};
		for (e = e ? 1 : 0; s < 4; s += 2 - e) a["margin" + (i = xe[s])] = a["padding" + i] = t;
		return e && (a.opacity = a.width = t), a
	}

	function ki(t, e, i) {
		for (var s, a = (z.tweeners[e] || []).concat(z.tweeners["*"]), n = 0, o = a.length; n < o; n++)
			if (s = a[n].call(i, e, t)) return s
	}

	function z(a, t, e) {
		var i, n, s, o, r, l, c, h = 0,
			d = z.prefilters.length,
			u = C.Deferred().always(function() {
				delete g.elem
			}),
			g = function() {
				if (n) return !1;
				for (var t = fi || yi(), t = Math.max(0, p.startTime + p.duration - t), e = 1 - (t / p.duration || 0), i = 0, s = p.tweens.length; i < s; i++) p.tweens[i].run(e);
				return u.notifyWith(a, [p, e, t]), e < 1 && s ? t : (s || u.notifyWith(a, [p, 1, 0]), u.resolveWith(a, [p]), !1)
			},
			p = u.promise({
				elem: a,
				props: C.extend({}, t),
				opts: C.extend(!0, {
					specialEasing: {},
					easing: C.easing._default
				}, e),
				originalProperties: t,
				originalOptions: e,
				startTime: fi || yi(),
				duration: e.duration,
				tweens: [],
				createTween: function(t, e) {
					e = C.Tween(a, p.opts, t, e, p.opts.specialEasing[t] || p.opts.easing);
					return p.tweens.push(e), e
				},
				stop: function(t) {
					var e = 0,
						i = t ? p.tweens.length : 0;
					if (!n) {
						for (n = !0; e < i; e++) p.tweens[e].run(1);
						t ? (u.notifyWith(a, [p, 1, 0]), u.resolveWith(a, [p, t])) : u.rejectWith(a, [p, t])
					}
					return this
				}
			}),
			f = p.props,
			x = f,
			m = p.opts.specialEasing;
		for (s in x)
			if (r = m[o = O(s)], l = x[s], Array.isArray(l) && (r = l[1], l = x[s] = l[0]), s !== o && (x[o] = l, delete x[s]), (c = C.cssHooks[o]) && "expand" in c)
				for (s in l = c.expand(l), delete x[o], l) s in x || (x[s] = l[s], m[s] = r);
			else m[o] = r;
		for (; h < d; h++)
			if (i = z.prefilters[h].call(p, a, f, p.opts)) return b(i.stop) && (C._queueHooks(p.elem, p.opts.queue).stop = i.stop.bind(i)), i;
		return C.map(f, ki, p), b(p.opts.start) && p.opts.start.call(a, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), C.fx.timer(C.extend(g, {
			elem: a,
			anim: p,
			queue: p.opts.queue
		})), p
	}
	C.Animation = C.extend(z, {
		tweeners: {
			"*": [function(t, e) {
				var i = this.createTween(t, e);
				return ye(i.elem, t, fe.exec(e), i), i
			}]
		},
		tweener: function(t, e) {
			for (var i, s = 0, a = (t = b(t) ? (e = t, ["*"]) : t.match(M)).length; s < a; s++) i = t[s], z.tweeners[i] = z.tweeners[i] || [], z.tweeners[i].unshift(e)
		},
		prefilters: [function(t, e, i) {
			var s, a, n, o, r, l, c, h = "width" in e || "height" in e,
				d = this,
				u = {},
				g = t.style,
				p = t.nodeType && pe(t),
				f = m.get(t, "fxshow");
			for (s in i.queue || (null == (o = C._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, r = o.empty.fire, o.empty.fire = function() {
					o.unqueued || r()
				}), o.unqueued++, d.always(function() {
					d.always(function() {
						o.unqueued--, C.queue(t, "fx").length || o.empty.fire()
					})
				})), e)
				if (a = e[s], mi.test(a)) {
					if (delete e[s], n = n || "toggle" === a, a === (p ? "hide" : "show")) {
						if ("show" !== a || !f || void 0 === f[s]) continue;
						p = !0
					}
					u[s] = f && f[s] || C.style(t, s)
				} if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(u))
				for (s in h && 1 === t.nodeType && (i.overflow = [g.overflow, g.overflowX, g.overflowY], null == (c = f && f.display) && (c = m.get(t, "display")), "none" === (h = C.css(t, "display")) && (c ? h = c : (ke([t], !0), c = t.style.display || c, h = C.css(t, "display"), ke([t]))), "inline" === h || "inline-block" === h && null != c) && "none" === C.css(t, "float") && (l || (d.done(function() {
						g.display = c
					}), null == c && (h = g.display, c = "none" === h ? "" : h)), g.display = "inline-block"), i.overflow && (g.overflow = "hidden", d.always(function() {
						g.overflow = i.overflow[0], g.overflowX = i.overflow[1], g.overflowY = i.overflow[2]
					})), l = !1, u) l || (f ? "hidden" in f && (p = f.hidden) : f = m.access(t, "fxshow", {
					display: c
				}), n && (f.hidden = !p), p && ke([t], !0), d.done(function() {
					for (s in p || ke([t]), m.remove(t, "fxshow"), u) C.style(t, s, u[s])
				})), l = ki(p ? f[s] : 0, s, d), s in f || (f[s] = l.start, p && (l.end = l.start, l.start = 0))
		}],
		prefilter: function(t, e) {
			e ? z.prefilters.unshift(t) : z.prefilters.push(t)
		}
	}), C.speed = function(t, e, i) {
		var s = t && "object" == typeof t ? C.extend({}, t) : {
			complete: i || !i && e || b(t) && t,
			duration: t,
			easing: i && e || e && !b(e) && e
		};
		return C.fx.off ? s.duration = 0 : "number" != typeof s.duration && (s.duration in C.fx.speeds ? s.duration = C.fx.speeds[s.duration] : s.duration = C.fx.speeds._default), null != s.queue && !0 !== s.queue || (s.queue = "fx"), s.old = s.complete, s.complete = function() {
			b(s.old) && s.old.call(this), s.queue && C.dequeue(this, s.queue)
		}, s
	}, C.fn.extend({
		fadeTo: function(t, e, i, s) {
			return this.filter(pe).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, i, s)
		},
		animate: function(e, t, i, s) {
			function a() {
				var t = z(this, C.extend({}, e), o);
				(n || m.get(this, "finish")) && t.stop(!0)
			}
			var n = C.isEmptyObject(e),
				o = C.speed(t, i, s);
			return a.finish = a, n || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(a, t, n) {
			function o(t) {
				var e = t.stop;
				delete t.stop, e(n)
			}
			return "string" != typeof a && (n = t, t = a, a = void 0), t && this.queue(a || "fx", []), this.each(function() {
				var t = !0,
					e = null != a && a + "queueHooks",
					i = C.timers,
					s = m.get(this);
				if (e) s[e] && s[e].stop && o(s[e]);
				else
					for (e in s) s[e] && s[e].stop && bi.test(e) && o(s[e]);
				for (e = i.length; e--;) i[e].elem !== this || null != a && i[e].queue !== a || (i[e].anim.stop(n), t = !1, i.splice(e, 1));
				!t && n || C.dequeue(this, a)
			})
		},
		finish: function(o) {
			return !1 !== o && (o = o || "fx"), this.each(function() {
				var t, e = m.get(this),
					i = e[o + "queue"],
					s = e[o + "queueHooks"],
					a = C.timers,
					n = i ? i.length : 0;
				for (e.finish = !0, C.queue(this, o, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === o && (a[t].anim.stop(!0), a.splice(t, 1));
				for (t = 0; t < n; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete e.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function(t, s) {
		var a = C.fn[s];
		C.fn[s] = function(t, e, i) {
			return null == t || "boolean" == typeof t ? a.apply(this, arguments) : this.animate(wi(s, !0), t, e, i)
		}
	}), C.each({
		slideDown: wi("show"),
		slideUp: wi("hide"),
		slideToggle: wi("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(t, s) {
		C.fn[t] = function(t, e, i) {
			return this.animate(s, t, e, i)
		}
	}), C.timers = [], C.fx.tick = function() {
		var t, e = 0,
			i = C.timers;
		for (fi = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
		i.length || C.fx.stop(), fi = void 0
	}, C.fx.timer = function(t) {
		C.timers.push(t), C.fx.start()
	}, C.fx.interval = 13, C.fx.start = function() {
		xi || (xi = !0, vi())
	}, C.fx.stop = function() {
		xi = null
	}, C.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, C.fn.delay = function(s, t) {
		return s = C.fx && C.fx.speeds[s] || s, this.queue(t = t || "fx", function(t, e) {
			var i = k.setTimeout(t, s);
			e.stop = function() {
				k.clearTimeout(i)
			}
		})
	}, o = A.createElement("input"), n = A.createElement("select").appendChild(A.createElement("option")), o.type = "checkbox", f.checkOn = "" !== o.value, f.optSelected = n.selected, (o = A.createElement("input")).value = "t", o.type = "radio", f.radioValue = "t" === o.value;
	var Ai, Ci = C.expr.attrHandle,
		Si = (C.fn.extend({
			attr: function(t, e) {
				return h(this, C.attr, t, e, 1 < arguments.length)
			},
			removeAttr: function(t) {
				return this.each(function() {
					C.removeAttr(this, t)
				})
			}
		}), C.extend({
			attr: function(t, e, i) {
				var s, a, n = t.nodeType;
				if (3 !== n && 8 !== n && 2 !== n) return void 0 === t.getAttribute ? C.prop(t, e, i) : (1 === n && C.isXMLDoc(t) || (a = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? Ai : void 0)), void 0 !== i ? null === i ? void C.removeAttr(t, e) : a && "set" in a && void 0 !== (s = a.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : !(a && "get" in a && null !== (s = a.get(t, e))) && null == (s = C.find.attr(t, e)) ? void 0 : s)
			},
			attrHooks: {
				type: {
					set: function(t, e) {
						var i;
						if (!f.radioValue && "radio" === e && y(t, "input")) return i = t.value, t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			},
			removeAttr: function(t, e) {
				var i, s = 0,
					a = e && e.match(M);
				if (a && 1 === t.nodeType)
					for (; i = a[s++];) t.removeAttribute(i)
			}
		}), Ai = {
			set: function(t, e, i) {
				return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i), i
			}
		}, C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
			var o = Ci[e] || C.find.attr;
			Ci[e] = function(t, e, i) {
				var s, a, n = e.toLowerCase();
				return i || (a = Ci[n], Ci[n] = s, s = null != o(t, e, i) ? n : null, Ci[n] = a), s
			}
		}), /^(?:input|select|textarea|button)$/i),
		Ti = /^(?:a|area)$/i;

	function Li(t) {
		return (t.match(M) || []).join(" ")
	}

	function Ei(t) {
		return t.getAttribute && t.getAttribute("class") || ""
	}

	function Pi(t) {
		return Array.isArray(t) ? t : "string" == typeof t && t.match(M) || []
	}
	C.fn.extend({
		prop: function(t, e) {
			return h(this, C.prop, t, e, 1 < arguments.length)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[C.propFix[t] || t]
			})
		}
	}), C.extend({
		prop: function(t, e, i) {
			var s, a, n = t.nodeType;
			if (3 !== n && 8 !== n && 2 !== n) return 1 === n && C.isXMLDoc(t) || (e = C.propFix[e] || e, a = C.propHooks[e]), void 0 !== i ? a && "set" in a && void 0 !== (s = a.set(t, i, e)) ? s : t[e] = i : a && "get" in a && null !== (s = a.get(t, e)) ? s : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = C.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : Si.test(t.nodeName) || Ti.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), f.optSelected || (C.propHooks.selected = {
		get: function(t) {
			t = t.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(t) {
			t = t.parentNode;
			t && (t.selectedIndex, t.parentNode) && t.parentNode.selectedIndex
		}
	}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		C.propFix[this.toLowerCase()] = this
	}), C.fn.extend({
		addClass: function(e) {
			var t, i, s, a, n, o;
			return b(e) ? this.each(function(t) {
				C(this).addClass(e.call(this, t, Ei(this)))
			}) : (t = Pi(e)).length ? this.each(function() {
				if (s = Ei(this), i = 1 === this.nodeType && " " + Li(s) + " ") {
					for (n = 0; n < t.length; n++) a = t[n], i.indexOf(" " + a + " ") < 0 && (i += a + " ");
					o = Li(i), s !== o && this.setAttribute("class", o)
				}
			}) : this
		},
		removeClass: function(e) {
			var t, i, s, a, n, o;
			return b(e) ? this.each(function(t) {
				C(this).removeClass(e.call(this, t, Ei(this)))
			}) : arguments.length ? (t = Pi(e)).length ? this.each(function() {
				if (s = Ei(this), i = 1 === this.nodeType && " " + Li(s) + " ") {
					for (n = 0; n < t.length; n++)
						for (a = t[n]; - 1 < i.indexOf(" " + a + " ");) i = i.replace(" " + a + " ", " ");
					o = Li(i), s !== o && this.setAttribute("class", o)
				}
			}) : this : this.attr("class", "")
		},
		toggleClass: function(e, i) {
			var t, s, a, n, o = typeof e,
				r = "string" == o || Array.isArray(e);
			return b(e) ? this.each(function(t) {
				C(this).toggleClass(e.call(this, t, Ei(this), i), i)
			}) : "boolean" == typeof i && r ? i ? this.addClass(e) : this.removeClass(e) : (t = Pi(e), this.each(function() {
				if (r)
					for (n = C(this), a = 0; a < t.length; a++) s = t[a], n.hasClass(s) ? n.removeClass(s) : n.addClass(s);
				else void 0 !== e && "boolean" != o || ((s = Ei(this)) && m.set(this, "__className__", s), this.setAttribute && this.setAttribute("class", !s && !1 !== e && m.get(this, "__className__") || ""))
			}))
		},
		hasClass: function(t) {
			for (var e, i = 0, s = " " + t + " "; e = this[i++];)
				if (1 === e.nodeType && -1 < (" " + Li(Ei(e)) + " ").indexOf(s)) return !0;
			return !1
		}
	});

	function _i(t) {
		t.stopPropagation()
	}
	var Ii = /\r/g,
		Mi = (C.fn.extend({
			val: function(e) {
				var i, t, s, a = this[0];
				return arguments.length ? (s = b(e), this.each(function(t) {
					1 === this.nodeType && (null == (t = s ? e.call(this, t, C(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(t) {
						return null == t ? "" : t + ""
					})), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
				})) : a ? (i = C.valHooks[a.type] || C.valHooks[a.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(a, "value")) ? t : "string" == typeof(t = a.value) ? t.replace(Ii, "") : null == t ? "" : t : void 0
			}
		}), C.extend({
			valHooks: {
				option: {
					get: function(t) {
						var e = C.find.attr(t, "value");
						return null != e ? e : Li(C.text(t))
					}
				},
				select: {
					get: function(t) {
						for (var e, i = t.options, s = t.selectedIndex, a = "select-one" === t.type, n = a ? null : [], o = a ? s + 1 : i.length, r = s < 0 ? o : a ? s : 0; r < o; r++)
							if (((e = i[r]).selected || r === s) && !e.disabled && (!e.parentNode.disabled || !y(e.parentNode, "optgroup"))) {
								if (e = C(e).val(), a) return e;
								n.push(e)
							} return n
					},
					set: function(t, e) {
						for (var i, s, a = t.options, n = C.makeArray(e), o = a.length; o--;)((s = a[o]).selected = -1 < C.inArray(C.valHooks.option.get(s), n)) && (i = !0);
						return i || (t.selectedIndex = -1), n
					}
				}
			}
		}), C.each(["radio", "checkbox"], function() {
			C.valHooks[this] = {
				set: function(t, e) {
					if (Array.isArray(e)) return t.checked = -1 < C.inArray(C(t).val(), e)
				}
			}, f.checkOn || (C.valHooks[this].get = function(t) {
				return null === t.getAttribute("value") ? "on" : t.value
			})
		}), k.location),
		Oi = {
			guid: Date.now()
		},
		Di = /\?/,
		zi = (C.parseXML = function(t) {
			var e, i;
			if (!t || "string" != typeof t) return null;
			try {
				e = (new k.DOMParser).parseFromString(t, "text/xml")
			} catch (t) {}
			return i = e && e.getElementsByTagName("parsererror")[0], e && !i || C.error("Invalid XML: " + (i ? C.map(i.childNodes, function(t) {
				return t.textContent
			}).join("\n") : t)), e
		}, /^(?:focusinfocus|focusoutblur)$/),
		Xi = (C.extend(C.event, {
			trigger: function(t, e, i, s) {
				var a, n, o, r, l, c, h, d = [i || A],
					u = B.call(t, "type") ? t.type : t,
					g = B.call(t, "namespace") ? t.namespace.split(".") : [],
					p = h = n = i = i || A;
				if (3 !== i.nodeType && 8 !== i.nodeType && !zi.test(u + C.event.triggered) && (-1 < u.indexOf(".") && (u = (g = u.split(".")).shift(), g.sort()), r = u.indexOf(":") < 0 && "on" + u, (t = t[C.expando] ? t : new C.Event(u, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : C.makeArray(e, [t]), c = C.event.special[u] || {}, s || !c.trigger || !1 !== c.trigger.apply(i, e))) {
					if (!s && !c.noBubble && !N(i)) {
						for (o = c.delegateType || u, zi.test(o + u) || (p = p.parentNode); p; p = p.parentNode) d.push(p), n = p;
						n === (i.ownerDocument || A) && d.push(n.defaultView || n.parentWindow || k)
					}
					for (a = 0;
						(p = d[a++]) && !t.isPropagationStopped();) h = p, t.type = 1 < a ? o : c.bindType || u, (l = (m.get(p, "events") || Object.create(null))[t.type] && m.get(p, "handle")) && l.apply(p, e), (l = r && p[r]) && l.apply && ce(p) && (t.result = l.apply(p, e), !1 === t.result) && t.preventDefault();
					return t.type = u, s || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), e) || !ce(i) || r && b(i[u]) && !N(i) && ((n = i[r]) && (i[r] = null), C.event.triggered = u, t.isPropagationStopped() && h.addEventListener(u, _i), i[u](), t.isPropagationStopped() && h.removeEventListener(u, _i), C.event.triggered = void 0, n) && (i[r] = n), t.result
				}
			},
			simulate: function(t, e, i) {
				i = C.extend(new C.Event, i, {
					type: t,
					isSimulated: !0
				});
				C.event.trigger(i, null, e)
			}
		}), C.fn.extend({
			trigger: function(t, e) {
				return this.each(function() {
					C.event.trigger(t, e, this)
				})
			},
			triggerHandler: function(t, e) {
				var i = this[0];
				if (i) return C.event.trigger(t, e, i, !0)
			}
		}), /\[\]$/),
		Ni = /\r?\n/g,
		Fi = /^(?:submit|button|image|reset|file)$/i,
		Ri = /^(?:input|select|textarea|keygen)/i;
	C.param = function(t, e) {
		function i(t, e) {
			e = b(e) ? e() : e, a[a.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
		}
		var s, a = [];
		if (null == t) return "";
		if (Array.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function() {
			i(this.name, this.value)
		});
		else
			for (s in t) ! function i(s, t, a, n) {
				if (Array.isArray(t)) C.each(t, function(t, e) {
					a || Xi.test(s) ? n(s, e) : i(s + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, a, n)
				});
				else if (a || "object" !== U(t)) n(s, t);
				else
					for (var e in t) i(s + "[" + e + "]", t[e], a, n)
			}(s, t[s], e, i);
		return a.join("&")
	}, C.fn.extend({
		serialize: function() {
			return C.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = C.prop(this, "elements");
				return t ? C.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !C(this).is(":disabled") && Ri.test(this.nodeName) && !Fi.test(t) && (this.checked || !Ae.test(t))
			}).map(function(t, e) {
				var i = C(this).val();
				return null == i ? null : Array.isArray(i) ? C.map(i, function(t) {
					return {
						name: e.name,
						value: t.replace(Ni, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(Ni, "\r\n")
				}
			}).get()
		}
	});
	var Hi = /%20/g,
		Yi = /#.*$/,
		Wi = /([?&])_=[^&]*/,
		Bi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		ji = /^(?:GET|HEAD)$/,
		Vi = /^\/\//,
		Gi = {},
		qi = {},
		Ui = "*/".concat("*"),
		Zi = A.createElement("a");

	function $i(n) {
		return function(t, e) {
			"string" != typeof t && (e = t, t = "*");
			var i, s = 0,
				a = t.toLowerCase().match(M) || [];
			if (b(e))
				for (; i = a[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (n[i] = n[i] || []).unshift(e)) : (n[i] = n[i] || []).push(e)
		}
	}

	function Qi(e, s, a, n) {
		var o = {},
			r = e === qi;

		function l(t) {
			var i;
			return o[t] = !0, C.each(e[t] || [], function(t, e) {
				e = e(s, a, n);
				return "string" != typeof e || r || o[e] ? r ? !(i = e) : void 0 : (s.dataTypes.unshift(e), l(e), !1)
			}), i
		}
		return l(s.dataTypes[0]) || !o["*"] && l("*")
	}

	function Ki(t, e) {
		var i, s, a = C.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((a[i] ? t : s = s || {})[i] = e[i]);
		return s && C.extend(!0, t, s), t
	}
	Zi.href = Mi.href, C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Mi.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Mi.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ui,
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
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? Ki(Ki(t, C.ajaxSettings), e) : Ki(C.ajaxSettings, t)
		},
		ajaxPrefilter: $i(Gi),
		ajaxTransport: $i(qi),
		ajax: function(t, e) {
			"object" == typeof t && (e = t, t = void 0);
			var l, c, h, i, d, u, g, s, a, p = C.ajaxSetup({}, e = e || {}),
				f = p.context || p,
				x = p.context && (f.nodeType || f.jquery) ? C(f) : C.event,
				m = C.Deferred(),
				b = C.Callbacks("once memory"),
				v = p.statusCode || {},
				n = {},
				o = {},
				r = "canceled",
				y = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (u) {
							if (!i)
								for (i = {}; e = Bi.exec(h);) i[e[1].toLowerCase() + " "] = (i[e[1].toLowerCase() + " "] || []).concat(e[2]);
							e = i[t.toLowerCase() + " "]
						}
						return null == e ? null : e.join(", ")
					},
					getAllResponseHeaders: function() {
						return u ? h : null
					},
					setRequestHeader: function(t, e) {
						return null == u && (t = o[t.toLowerCase()] = o[t.toLowerCase()] || t, n[t] = e), this
					},
					overrideMimeType: function(t) {
						return null == u && (p.mimeType = t), this
					},
					statusCode: function(t) {
						if (t)
							if (u) y.always(t[y.status]);
							else
								for (var e in t) v[e] = [v[e], t[e]];
						return this
					},
					abort: function(t) {
						t = t || r;
						return l && l.abort(t), w(0, t), this
					}
				};
			if (m.promise(y), p.url = ((t || p.url || Mi.href) + "").replace(Vi, Mi.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""], null == p.crossDomain) {
				a = A.createElement("a");
				try {
					a.href = p.url, a.href = a.href, p.crossDomain = Zi.protocol + "//" + Zi.host != a.protocol + "//" + a.host
				} catch (t) {
					p.crossDomain = !0
				}
			}
			if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Qi(Gi, p, e, y), !u) {
				for (s in (g = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ji.test(p.type), c = p.url.replace(Yi, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Hi, "+")) : (a = p.url.slice(c.length), p.data && (p.processData || "string" == typeof p.data) && (c += (Di.test(c) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (c = c.replace(Wi, "$1"), a = (Di.test(c) ? "&" : "?") + "_=" + Oi.guid++ + a), p.url = c + a), p.ifModified && (C.lastModified[c] && y.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c]) && y.setRequestHeader("If-None-Match", C.etag[c]), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && y.setRequestHeader("Content-Type", p.contentType), y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ui + "; q=0.01" : "") : p.accepts["*"]), p.headers) y.setRequestHeader(s, p.headers[s]);
				if (p.beforeSend && (!1 === p.beforeSend.call(f, y, p) || u)) return y.abort();
				if (r = "abort", b.add(p.complete), y.done(p.success), y.fail(p.error), l = Qi(qi, p, e, y)) {
					if (y.readyState = 1, g && x.trigger("ajaxSend", [y, p]), u) return y;
					p.async && 0 < p.timeout && (d = k.setTimeout(function() {
						y.abort("timeout")
					}, p.timeout));
					try {
						u = !1, l.send(n, w)
					} catch (t) {
						if (u) throw t;
						w(-1, t)
					}
				} else w(-1, "No Transport")
			}
			return y;

			function w(t, e, i, s) {
				var a, n, o, r = e;
				u || (u = !0, d && k.clearTimeout(d), l = void 0, h = s || "", y.readyState = 0 < t ? 4 : 0, s = 200 <= t && t < 300 || 304 === t, i && (o = function(t, e, i) {
					for (var s, a, n, o, r = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
					if (s)
						for (a in r)
							if (r[a] && r[a].test(s)) {
								l.unshift(a);
								break
							} if (l[0] in i) n = l[0];
					else {
						for (a in i) {
							if (!l[0] || t.converters[a + " " + l[0]]) {
								n = a;
								break
							}
							o = o || a
						}
						n = n || o
					}
					if (n) return n !== l[0] && l.unshift(n), i[n]
				}(p, y, i)), !s && -1 < C.inArray("script", p.dataTypes) && C.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), o = function(t, e, i, s) {
					var a, n, o, r, l, c = {},
						h = t.dataTypes.slice();
					if (h[1])
						for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
					for (n = h.shift(); n;)
						if (t.responseFields[n] && (i[t.responseFields[n]] = e), !l && s && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = n, n = h.shift())
							if ("*" === n) n = l;
							else if ("*" !== l && l !== n) {
						if (!(o = c[l + " " + n] || c["* " + n]))
							for (a in c)
								if ((r = a.split(" "))[1] === n && (o = c[l + " " + r[0]] || c["* " + r[0]])) {
									!0 === o ? o = c[a] : !0 !== c[a] && (n = r[0], h.unshift(r[1]));
									break
								} if (!0 !== o)
							if (o && t.throws) e = o(e);
							else try {
								e = o(e)
							} catch (t) {
								return {
									state: "parsererror",
									error: o ? t : "No conversion from " + l + " to " + n
								}
							}
					}
					return {
						state: "success",
						data: e
					}
				}(p, o, y, s), s ? (p.ifModified && ((i = y.getResponseHeader("Last-Modified")) && (C.lastModified[c] = i), i = y.getResponseHeader("etag")) && (C.etag[c] = i), 204 === t || "HEAD" === p.type ? r = "nocontent" : 304 === t ? r = "notmodified" : (r = o.state, a = o.data, s = !(n = o.error))) : (n = r, !t && r || (r = "error", t < 0 && (t = 0))), y.status = t, y.statusText = (e || r) + "", s ? m.resolveWith(f, [a, r, y]) : m.rejectWith(f, [y, r, n]), y.statusCode(v), v = void 0, g && x.trigger(s ? "ajaxSuccess" : "ajaxError", [y, p, s ? a : n]), b.fireWith(f, [y, r]), g && (x.trigger("ajaxComplete", [y, p]), --C.active || C.event.trigger("ajaxStop")))
			}
		},
		getJSON: function(t, e, i) {
			return C.get(t, e, i, "json")
		},
		getScript: function(t, e) {
			return C.get(t, void 0, e, "script")
		}
	}), C.each(["get", "post"], function(t, a) {
		C[a] = function(t, e, i, s) {
			return b(e) && (s = s || i, i = e, e = void 0), C.ajax(C.extend({
				url: t,
				type: a,
				dataType: s,
				data: e,
				success: i
			}, C.isPlainObject(t) && t))
		}
	}), C.ajaxPrefilter(function(t) {
		for (var e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
	}), C._evalUrl = function(t, e, i) {
		return C.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(t) {
				C.globalEval(t, e, i)
			}
		})
	}, C.fn.extend({
		wrapAll: function(t) {
			return this[0] && (b(t) && (t = t.call(this[0])), t = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this
		},
		wrapInner: function(i) {
			return b(i) ? this.each(function(t) {
				C(this).wrapInner(i.call(this, t))
			}) : this.each(function() {
				var t = C(this),
					e = t.contents();
				e.length ? e.wrapAll(i) : t.append(i)
			})
		},
		wrap: function(e) {
			var i = b(e);
			return this.each(function(t) {
				C(this).wrapAll(i ? e.call(this, t) : e)
			})
		},
		unwrap: function(t) {
			return this.parent(t).not("body").each(function() {
				C(this).replaceWith(this.childNodes)
			}), this
		}
	}), C.expr.pseudos.hidden = function(t) {
		return !C.expr.pseudos.visible(t)
	}, C.expr.pseudos.visible = function(t) {
		return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
	}, C.ajaxSettings.xhr = function() {
		try {
			return new k.XMLHttpRequest
		} catch (t) {}
	};
	var Ji = {
			0: 200,
			1223: 204
		},
		ts = C.ajaxSettings.xhr();
	f.cors = !!ts && "withCredentials" in ts, f.ajax = ts = !!ts, C.ajaxTransport(function(a) {
		var n, o;
		if (f.cors || ts && !a.crossDomain) return {
			send: function(t, e) {
				var i, s = a.xhr();
				if (s.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (i in a.xhrFields) s[i] = a.xhrFields[i];
				for (i in a.mimeType && s.overrideMimeType && s.overrideMimeType(a.mimeType), a.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) s.setRequestHeader(i, t[i]);
				n = function(t) {
					return function() {
						n && (n = o = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? e(0, "error") : e(s.status, s.statusText) : e(Ji[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), o = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = o : s.onreadystatechange = function() {
					4 === s.readyState && k.setTimeout(function() {
						n && o()
					})
				}, n = n("abort");
				try {
					s.send(a.hasContent && a.data || null)
				} catch (t) {
					if (n) throw t
				}
			},
			abort: function() {
				n && n()
			}
		}
	}), C.ajaxPrefilter(function(t) {
		t.crossDomain && (t.contents.script = !1)
	}), C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(t) {
				return C.globalEval(t), t
			}
		}
	}), C.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), C.ajaxTransport("script", function(i) {
		var s, a;
		if (i.crossDomain || i.scriptAttrs) return {
			send: function(t, e) {
				s = C("<script>").attr(i.scriptAttrs || {}).prop({
					charset: i.scriptCharset,
					src: i.url
				}).on("load error", a = function(t) {
					s.remove(), a = null, t && e("error" === t.type ? 404 : 200, t.type)
				}), A.head.appendChild(s[0])
			},
			abort: function() {
				a && a()
			}
		}
	});
	var es = [],
		is = /(=)\?(?=&|$)|\?\?/,
		ss = (C.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var t = es.pop() || C.expando + "_" + Oi.guid++;
				return this[t] = !0, t
			}
		}), C.ajaxPrefilter("json jsonp", function(t, e, i) {
			var s, a, n, o = !1 !== t.jsonp && (is.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && is.test(t.data) && "data");
			if (o || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = b(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(is, "$1" + s) : !1 !== t.jsonp && (t.url += (Di.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
				return n || C.error(s + " was not called"), n[0]
			}, t.dataTypes[0] = "json", a = k[s], k[s] = function() {
				n = arguments
			}, i.always(function() {
				void 0 === a ? C(k).removeProp(s) : k[s] = a, t[s] && (t.jsonpCallback = e.jsonpCallback, es.push(s)), n && b(a) && a(n[0]), n = a = void 0
			}), "script"
		}), f.createHTMLDocument = ((t = A.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === t.childNodes.length), C.parseHTML = function(t, e, i) {
			return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (f.createHTMLDocument ? ((s = (e = A.implementation.createHTMLDocument("")).createElement("base")).href = A.location.href, e.head.appendChild(s)) : e = A), s = !i && [], (i = qt.exec(t)) ? [e.createElement(i[1])] : (i = Ee([t], e, s), s && s.length && C(s).remove(), C.merge([], i.childNodes)));
			var s
		}, C.fn.load = function(t, e, i) {
			var s, a, n, o = this,
				r = t.indexOf(" ");
			return -1 < r && (s = Li(t.slice(r)), t = t.slice(0, r)), b(e) ? (i = e, e = void 0) : e && "object" == typeof e && (a = "POST"), 0 < o.length && C.ajax({
				url: t,
				type: a || "GET",
				dataType: "html",
				data: e
			}).done(function(t) {
				n = arguments, o.html(s ? C("<div>").append(C.parseHTML(t)).find(s) : t)
			}).always(i && function(t, e) {
				o.each(function() {
					i.apply(this, n || [t.responseText, e, t])
				})
			}), this
		}, C.expr.pseudos.animated = function(e) {
			return C.grep(C.timers, function(t) {
				return e === t.elem
			}).length
		}, C.offset = {
			setOffset: function(t, e, i) {
				var s, a, n, o, r = C.css(t, "position"),
					l = C(t),
					c = {};
				"static" === r && (t.style.position = "relative"), n = l.offset(), s = C.css(t, "top"), o = C.css(t, "left"), r = ("absolute" === r || "fixed" === r) && -1 < (s + o).indexOf("auto") ? (a = (r = l.position()).top, r.left) : (a = parseFloat(s) || 0, parseFloat(o) || 0), null != (e = b(e) ? e.call(t, i, C.extend({}, n)) : e).top && (c.top = e.top - n.top + a), null != e.left && (c.left = e.left - n.left + r), "using" in e ? e.using.call(t, c) : l.css(c)
			}
		}, C.fn.extend({
			offset: function(e) {
				var t, i;
				return arguments.length ? void 0 === e ? this : this.each(function(t) {
					C.offset.setOffset(this, e, t)
				}) : (i = this[0]) ? i.getClientRects().length ? (t = i.getBoundingClientRect(), i = i.ownerDocument.defaultView, {
					top: t.top + i.pageYOffset,
					left: t.left + i.pageXOffset
				}) : {
					top: 0,
					left: 0
				} : void 0
			},
			position: function() {
				if (this[0]) {
					var t, e, i, s = this[0],
						a = {
							top: 0,
							left: 0
						};
					if ("fixed" === C.css(s, "position")) e = s.getBoundingClientRect();
					else {
						for (e = this.offset(), i = s.ownerDocument, t = s.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === C.css(t, "position");) t = t.parentNode;
						t && t !== s && 1 === t.nodeType && ((a = C(t).offset()).top += C.css(t, "borderTopWidth", !0), a.left += C.css(t, "borderLeftWidth", !0))
					}
					return {
						top: e.top - a.top - C.css(s, "marginTop", !0),
						left: e.left - a.left - C.css(s, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent; t && "static" === C.css(t, "position");) t = t.offsetParent;
					return t || me
				})
			}
		}), C.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, a) {
			var n = "pageYOffset" === a;
			C.fn[e] = function(t) {
				return h(this, function(t, e, i) {
					var s;
					if (N(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === i) return s ? s[a] : t[e];
					s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : t[e] = i
				}, e, t, arguments.length)
			}
		}), C.each(["top", "left"], function(t, i) {
			C.cssHooks[i] = ii(f.pixelPosition, function(t, e) {
				if (e) return e = ei(t, i), Ke.test(e) ? C(t).position()[i] + "px" : e
			})
		}), C.each({
			Height: "height",
			Width: "width"
		}, function(o, r) {
			C.each({
				padding: "inner" + o,
				content: r,
				"": "outer" + o
			}, function(s, n) {
				C.fn[n] = function(t, e) {
					var i = arguments.length && (s || "boolean" != typeof t),
						a = s || (!0 === t || !0 === e ? "margin" : "border");
					return h(this, function(t, e, i) {
						var s;
						return N(t) ? 0 === n.indexOf("outer") ? t["inner" + o] : t.document.documentElement["client" + o] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + o], s["scroll" + o], t.body["offset" + o], s["offset" + o], s["client" + o])) : void 0 === i ? C.css(t, e, a) : C.style(t, e, i, a)
					}, r, i ? t : void 0, i)
				}
			})
		}), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
			C.fn[e] = function(t) {
				return this.on(e, t)
			}
		}), C.fn.extend({
			bind: function(t, e, i) {
				return this.on(t, null, e, i)
			},
			unbind: function(t, e) {
				return this.off(t, null, e)
			},
			delegate: function(t, e, i, s) {
				return this.on(e, t, i, s)
			},
			undelegate: function(t, e, i) {
				return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
			},
			hover: function(t, e) {
				return this.on("mouseenter", t).on("mouseleave", e || t)
			}
		}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, i) {
			C.fn[i] = function(t, e) {
				return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
			}
		}), /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
		as = (C.proxy = function(t, e) {
			var i, s;
			if ("string" == typeof e && (s = t[e], e = t, t = s), b(t)) return i = r.call(arguments, 2), (s = function() {
				return t.apply(e || this, i.concat(r.call(arguments)))
			}).guid = t.guid = t.guid || C.guid++, s
		}, C.holdReady = function(t) {
			t ? C.readyWait++ : C.ready(!0)
		}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = y, C.isFunction = b, C.isWindow = N, C.camelCase = O, C.type = U, C.now = Date.now, C.isNumeric = function(t) {
			var e = C.type(t);
			return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
		}, C.trim = function(t) {
			return null == t ? "" : (t + "").replace(ss, "$1")
		}, "function" == typeof define && define.amd && define("jquery", [], function() {
			return C
		}), k.jQuery),
		ns = k.$;
	return C.noConflict = function(t) {
		return k.$ === C && (k.$ = ns), t && k.jQuery === C && (k.jQuery = as), C
	}, void 0 === X && (k.jQuery = k.$ = C), C
}),
function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function() {
	"use strict";
	const s = new Map,
		X = {
			set(t, e, i) {
				s.has(t) || s.set(t, new Map);
				t = s.get(t);
				t.has(e) || 0 === t.size ? t.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(t.keys())[0]}.`)
			},
			get: (t, e) => s.has(t) && s.get(t).get(e) || null,
			remove(t, e) {
				var i;
				s.has(t) && ((i = s.get(t)).delete(e), 0 === i.size) && s.delete(t)
			}
		},
		N = "transitionend",
		F = t => t = t && window.CSS && window.CSS.escape ? t.replace(/#([^\s"#']+)/g, (t, e) => "#" + CSS.escape(e)) : t,
		R = t => {
			t.dispatchEvent(new Event(N))
		},
		o = t => !(!t || "object" != typeof t) && void 0 !== (t = void 0 !== t.jquery ? t[0] : t).nodeType,
		a = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && 0 < t.length ? document.querySelector(F(t)) : null,
		n = t => {
			if (!o(t) || 0 === t.getClientRects().length) return !1;
			const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
				i = t.closest("details:not([open])");
			if (i && i !== t) {
				const e = t.closest("summary");
				if (e && e.parentNode !== i) return !1;
				if (null === e) return !1
			}
			return e
		},
		r = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
		H = t => {
			var e;
			return document.documentElement.attachShadow ? "function" == typeof t.getRootNode ? (e = t.getRootNode()) instanceof ShadowRoot ? e : null : t instanceof ShadowRoot ? t : t.parentNode ? H(t.parentNode) : null : null
		},
		Y = () => {},
		W = t => {
			t.offsetHeight
		},
		B = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
		j = [],
		l = () => "rtl" === document.documentElement.dir,
		t = s => {
			var t = () => {
				const t = B();
				if (t) {
					const e = s.NAME,
						i = t.fn[e];
					t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface)
				}
			};
			"loading" === document.readyState ? (j.length || document.addEventListener("DOMContentLoaded", () => {
				for (const t of j) t()
			}), j.push(t)) : t()
		},
		c = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
		V = (i, a, t = !0) => {
			if (t) {
				t = (() => {
					if (!a) return 0;
					let {
						transitionDuration: t,
						transitionDelay: e
					} = window.getComputedStyle(a);
					var i = Number.parseFloat(t),
						s = Number.parseFloat(e);
					return i || s ? (t = t.split(",")[0], e = e.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(e))) : 0
				})() + 5;
				let e = !1;
				const s = ({
					target: t
				}) => {
					t === a && (e = !0, a.removeEventListener(N, s), c(i))
				};
				a.addEventListener(N, s), setTimeout(() => {
					e || R(a)
				}, t)
			} else c(i)
		},
		G = (t, e, i, s) => {
			var a = t.length;
			let n = t.indexOf(e);
			return -1 === n ? !i && s ? t[a - 1] : t[0] : (n += i ? 1 : -1, s && (n = (n + a) % a), t[Math.max(0, Math.min(n, a - 1))])
		},
		q = /[^.]*(?=\..*)\.|.*/,
		U = /\..*/,
		Z = /::\d+$/,
		$ = {};
	let Q = 1;
	const K = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		},
		J = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

	function tt(t, e) {
		return e && e + "::" + Q++ || t.uidEvent || Q++
	}

	function et(t) {
		var e = tt(t);
		return t.uidEvent = e, $[e] = $[e] || {}, $[e]
	}

	function it(t, e, i = null) {
		return Object.values(t).find(t => t.callable === e && t.delegationSelector === i)
	}

	function st(t, e, i) {
		var s = "string" == typeof e,
			e = !s && e || i;
		let a = ot(t);
		return [s, e, a = J.has(a) ? a : t]
	}

	function at(s, a, n, o, r) {
		if ("string" == typeof a && s) {
			let [t, e, i] = st(a, n, o);
			if (a in K) {
				const s = e => function(t) {
					if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
				};
				e = s(e)
			}
			var o = et(s),
				o = o[i] || (o[i] = {}),
				l = it(o, e, t ? n : null);
			if (l) return l.oneOff = l.oneOff && r;
			var c, h, d, u, g, l = tt(e, a.replace(q, "")),
				a = t ? (d = s, u = n, g = e, function e(i) {
					var s = d.querySelectorAll(u);
					for (let t = i["target"]; t && t !== this; t = t.parentNode)
						for (const a of s)
							if (a === t) return rt(i, {
								delegateTarget: t
							}), e.oneOff && p.off(d, i.type, u, g), g.apply(t, [i])
				}) : (c = s, h = e, function t(e) {
					return rt(e, {
						delegateTarget: c
					}), t.oneOff && p.off(c, e.type, h), h.apply(c, [e])
				});
			a.delegationSelector = t ? n : null, a.callable = e, a.oneOff = r, o[a.uidEvent = l] = a, s.addEventListener(i, a, t)
		}
	}

	function nt(t, e, i, s, a) {
		s = it(e[i], s, a);
		s && (t.removeEventListener(i, s, Boolean(a)), delete e[i][s.uidEvent])
	}

	function ot(t) {
		return t = t.replace(U, ""), K[t] || t
	}
	const p = {
		on(t, e, i, s) {
			at(t, e, i, s, !1)
		},
		one(t, e, i, s) {
			at(t, e, i, s, !0)
		},
		off(t, e, i, s) {
			if ("string" == typeof e && t) {
				const [d, u, g] = st(e, i, s), p = g !== e, f = et(t), x = f[g] || {}, m = e.startsWith(".");
				if (void 0 === u) {
					if (m)
						for (const i of Object.keys(f)) {
							a = void 0;
							n = void 0;
							o = void 0;
							r = void 0;
							h = void 0;
							l = void 0;
							c = void 0;
							var a = t;
							var n = f;
							var o = i;
							var r = e.slice(1);
							var l, c, h = n[o] || {};
							for ([l, c] of Object.entries(h)) l.includes(r) && nt(a, n, o, c.callable, c.delegationSelector)
						}
					for (const [i, s] of Object.entries(x)) {
						const d = i.replace(Z, "");
						p && !e.includes(d) || nt(t, f, g, s.callable, s.delegationSelector)
					}
				} else Object.keys(x).length && nt(t, f, g, u, d ? i : null)
			}
		},
		trigger(t, e, i) {
			if ("string" != typeof e || !t) return null;
			var s = B();
			let a = null,
				n = !0,
				o = !0,
				r = !1;
			e !== ot(e) && s && (a = s.Event(e, i), s(t).trigger(a), n = !a.isPropagationStopped(), o = !a.isImmediatePropagationStopped(), r = a.isDefaultPrevented());
			s = rt(new Event(e, {
				bubbles: n,
				cancelable: !0
			}), i);
			return r && s.preventDefault(), o && t.dispatchEvent(s), s.defaultPrevented && a && a.preventDefault(), s
		}
	};

	function rt(t, e = {}) {
		for (const [i, s] of Object.entries(e)) try {
			t[i] = s
		} catch (e) {
			Object.defineProperty(t, i, {
				configurable: !0,
				get: () => s
			})
		}
		return t
	}

	function lt(e) {
		if ("true" === e) return !0;
		if ("false" === e) return !1;
		if (e === Number(e).toString()) return Number(e);
		if ("" === e || "null" === e) return null;
		if ("string" != typeof e) return e;
		try {
			return JSON.parse(decodeURIComponent(e))
		} catch (t) {
			return e
		}
	}

	function ct(t) {
		return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
	}
	const h = {
		setDataAttribute(t, e, i) {
			t.setAttribute("data-bs-" + ct(e), i)
		},
		removeDataAttribute(t, e) {
			t.removeAttribute("data-bs-" + ct(e))
		},
		getDataAttributes(e) {
			if (!e) return {};
			var i = {};
			for (const s of Object.keys(e.dataset).filter(t => t.startsWith("bs") && !t.startsWith("bsConfig"))) {
				let t = s.replace(/^bs/, "");
				i[t = t.charAt(0).toLowerCase() + t.slice(1, t.length)] = lt(e.dataset[s])
			}
			return i
		},
		getDataAttribute: (t, e) => lt(t.getAttribute("data-bs-" + ct(e)))
	};
	class ht {
		static get Default() {
			return {}
		}
		static get DefaultType() {
			return {}
		}
		static get NAME() {
			throw new Error('You have to implement the static method "NAME", for each component!')
		}
		_getConfig(t) {
			return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		_configAfterMerge(t) {
			return t
		}
		_mergeConfigObj(t, e) {
			var i = o(e) ? h.getDataAttribute(e, "config") : {};
			return {
				...this.constructor.Default,
				..."object" == typeof i ? i : {},
				...o(e) ? h.getDataAttributes(e) : {},
				..."object" == typeof t ? t : {}
			}
		}
		_typeCheckConfig(t, e = this.constructor.DefaultType) {
			for (var [i, s] of Object.entries(e)) {
				const e = t[i],
					n = o(e) ? "element" : null == (a = e) ? "" + a : Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
				if (!new RegExp(s).test(n)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${n}" but expected type "${s}".`)
			}
			var a
		}
	}
	class e extends ht {
		constructor(t, e) {
			super(), (t = a(t)) && (this._element = t, this._config = this._getConfig(e), X.set(this._element, this.constructor.DATA_KEY, this))
		}
		dispose() {
			X.remove(this._element, this.constructor.DATA_KEY), p.off(this._element, this.constructor.EVENT_KEY);
			for (const t of Object.getOwnPropertyNames(this)) this[t] = null
		}
		_queueCallback(t, e, i = !0) {
			V(t, e, i)
		}
		_getConfig(t) {
			return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		static getInstance(t) {
			return X.get(a(t), this.DATA_KEY)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
		}
		static get VERSION() {
			return "5.3.1"
		}
		static get DATA_KEY() {
			return "bs." + this.NAME
		}
		static get EVENT_KEY() {
			return "." + this.DATA_KEY
		}
		static eventName(t) {
			return "" + t + this.EVENT_KEY
		}
	}
	const dt = e => {
			let i = e.getAttribute("data-bs-target");
			if (!i || "#" === i) {
				let t = e.getAttribute("href");
				if (!t || !t.includes("#") && !t.startsWith(".")) return null;
				t.includes("#") && !t.startsWith("#") && (t = "#" + t.split("#")[1]), i = t && "#" !== t ? t.trim() : null
			}
			return F(i)
		},
		d = {
			find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
			findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
			children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
			parents(t, e) {
				var i = [];
				let s = t.parentNode.closest(e);
				for (; s;) i.push(s), s = s.parentNode.closest(e);
				return i
			},
			prev(t, e) {
				let i = t.previousElementSibling;
				for (; i;) {
					if (i.matches(e)) return [i];
					i = i.previousElementSibling
				}
				return []
			},
			next(t, e) {
				let i = t.nextElementSibling;
				for (; i;) {
					if (i.matches(e)) return [i];
					i = i.nextElementSibling
				}
				return []
			},
			focusableChildren(t) {
				var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => t + ':not([tabindex^="-"])').join(",");
				return this.find(e, t).filter(t => !r(t) && n(t))
			},
			getSelectorFromElement(t) {
				t = dt(t);
				return t && d.findOne(t) ? t : null
			},
			getElementFromSelector(t) {
				t = dt(t);
				return t ? d.findOne(t) : null
			},
			getMultipleElementsFromSelector(t) {
				t = dt(t);
				return t ? d.find(t) : []
			}
		},
		ut = (e, i = "hide") => {
			const t = "click.dismiss" + e.EVENT_KEY,
				s = e.NAME;
			p.on(document, t, `[data-bs-dismiss="${s}"]`, function(t) {
				["A", "AREA"].includes(this.tagName) && t.preventDefault(), r(this) || (t = d.getElementFromSelector(this) || this.closest("." + s), e.getOrCreateInstance(t)[i]())
			})
		};
	class gt extends e {
		static get NAME() {
			return "alert"
		}
		close() {
			var t;
			p.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"), t = this._element.classList.contains("fade"), this._queueCallback(() => this._destroyElement(), this._element, t))
		}
		_destroyElement() {
			this._element.remove(), p.trigger(this._element, "closed.bs.alert"), this.dispose()
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = gt.getOrCreateInstance(this);
				if ("string" == typeof e) {
					if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
					t[e](this)
				}
			})
		}
	}
	ut(gt, "close"), t(gt);
	const pt = '[data-bs-toggle="button"]';
	class ft extends e {
		static get NAME() {
			return "button"
		}
		toggle() {
			this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = ft.getOrCreateInstance(this);
				"toggle" === e && t[e]()
			})
		}
	}
	p.on(document, "click.bs.button.data-api", pt, t => {
		t.preventDefault();
		t = t.target.closest(pt);
		ft.getOrCreateInstance(t).toggle()
	}), t(ft);
	const i = ".bs.swipe",
		xt = (i, i, i, i, i, {
			endCallback: null,
			leftCallback: null,
			rightCallback: null
		}),
		mt = {
			endCallback: "(function|null)",
			leftCallback: "(function|null)",
			rightCallback: "(function|null)"
		};
	class bt extends ht {
		constructor(t, e) {
			super(), (this._element = t) && bt.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
		}
		static get Default() {
			return xt
		}
		static get DefaultType() {
			return mt
		}
		static get NAME() {
			return "swipe"
		}
		dispose() {
			p.off(this._element, i)
		}
		_start(t) {
			this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
		}
		_end(t) {
			this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), c(this._config.endCallback)
		}
		_move(t) {
			this._deltaX = t.touches && 1 < t.touches.length ? 0 : t.touches[0].clientX - this._deltaX
		}
		_handleSwipe() {
			var t = Math.abs(this._deltaX);
			t <= 40 || (t = t / this._deltaX, this._deltaX = 0, t && c(0 < t ? this._config.rightCallback : this._config.leftCallback))
		}
		_initEvents() {
			this._supportPointerEvents ? (p.on(this._element, "pointerdown.bs.swipe", t => this._start(t)), p.on(this._element, "pointerup.bs.swipe", t => this._end(t)), this._element.classList.add("pointer-event")) : (p.on(this._element, "touchstart.bs.swipe", t => this._start(t)), p.on(this._element, "touchmove.bs.swipe", t => this._move(t)), p.on(this._element, "touchend.bs.swipe", t => this._end(t)))
		}
		_eventIsPointerPenTouch(t) {
			return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
		}
		static isSupported() {
			return "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints
		}
	}
	const vt = ".bs.carousel",
		yt = "next",
		u = "prev",
		g = "left",
		wt = "right",
		kt = "slid" + vt,
		At = "carousel",
		Ct = "active",
		St = ".active",
		Tt = ".carousel-item",
		Lt = (St, Tt, {
			ArrowLeft: wt,
			ArrowRight: g
		}),
		Et = {
			interval: 5e3,
			keyboard: !0,
			pause: "hover",
			ride: !1,
			touch: !0,
			wrap: !0
		},
		Pt = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			pause: "(string|boolean)",
			ride: "(boolean|string)",
			touch: "boolean",
			wrap: "boolean"
		};
	class _t extends e {
		constructor(t, e) {
			super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = d.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === At && this.cycle()
		}
		static get Default() {
			return Et
		}
		static get DefaultType() {
			return Pt
		}
		static get NAME() {
			return "carousel"
		}
		next() {
			this._slide(yt)
		}
		nextWhenVisible() {
			!document.hidden && n(this._element) && this.next()
		}
		prev() {
			this._slide(u)
		}
		pause() {
			this._isSliding && R(this._element), this._clearInterval()
		}
		cycle() {
			this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
		}
		_maybeEnableCycle() {
			this._config.ride && (this._isSliding ? p.one(this._element, kt, () => this.cycle()) : this.cycle())
		}
		to(t) {
			var e, i = this._getItems();
			t > i.length - 1 || t < 0 || (this._isSliding ? p.one(this._element, kt, () => this.to(t)) : (e = this._getItemIndex(this._getActive())) !== t && (e = e < t ? yt : u, this._slide(e, i[t])))
		}
		dispose() {
			this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
		}
		_configAfterMerge(t) {
			return t.defaultInterval = t.interval, t
		}
		_addEventListeners() {
			this._config.keyboard && p.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (p.on(this._element, "mouseenter.bs.carousel", () => this.pause()), p.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && bt.isSupported() && this._addTouchEventListeners()
		}
		_addTouchEventListeners() {
			for (const t of d.find(".carousel-item img", this._element)) p.on(t, "dragstart.bs.carousel", t => t.preventDefault());
			const t = {
				leftCallback: () => this._slide(this._directionToOrder(g)),
				rightCallback: () => this._slide(this._directionToOrder(wt)),
				endCallback: () => {
					"hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval))
				}
			};
			this._swipeHelper = new bt(this._element, t)
		}
		_keydown(t) {
			var e;
			/input|textarea/i.test(t.target.tagName) || (e = Lt[t.key]) && (t.preventDefault(), this._slide(this._directionToOrder(e)))
		}
		_getItemIndex(t) {
			return this._getItems().indexOf(t)
		}
		_setActiveIndicatorElement(t) {
			var e;
			this._indicatorsElement && ((e = d.findOne(St, this._indicatorsElement)).classList.remove(Ct), e.removeAttribute("aria-current"), e = d.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement)) && (e.classList.add(Ct), e.setAttribute("aria-current", "true"))
		}
		_updateInterval() {
			var t = this._activeElement || this._getActive();
			t && (t = Number.parseInt(t.getAttribute("data-bs-interval"), 10), this._config.interval = t || this._config.defaultInterval)
		}
		_slide(e, t = null) {
			if (!this._isSliding) {
				const i = this._getActive(),
					s = e === yt,
					a = t || G(this._getItems(), i, s, this._config.wrap);
				if (a !== i) {
					const n = this._getItemIndex(a),
						o = t => p.trigger(this._element, t, {
							relatedTarget: a,
							direction: this._orderToDirection(e),
							from: this._getItemIndex(i),
							to: n
						});
					if (!o("slide.bs.carousel").defaultPrevented && i && a) {
						t = Boolean(this._interval);
						this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(n), this._activeElement = a;
						const r = s ? "carousel-item-start" : "carousel-item-end",
							l = s ? "carousel-item-next" : "carousel-item-prev";
						a.classList.add(l), W(a), i.classList.add(r), a.classList.add(r), this._queueCallback(() => {
							a.classList.remove(r, l), a.classList.add(Ct), i.classList.remove(Ct, l, r), this._isSliding = !1, o(kt)
						}, i, this._isAnimated()), t && this.cycle()
					}
				}
			}
		}
		_isAnimated() {
			return this._element.classList.contains("slide")
		}
		_getActive() {
			return d.findOne(".active.carousel-item", this._element)
		}
		_getItems() {
			return d.find(Tt, this._element)
		}
		_clearInterval() {
			this._interval && (clearInterval(this._interval), this._interval = null)
		}
		_directionToOrder(t) {
			return l() ? t === g ? u : yt : t === g ? yt : u
		}
		_orderToDirection(t) {
			return l() ? t === u ? g : wt : t === u ? wt : g
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = _t.getOrCreateInstance(this, e);
				if ("number" != typeof e) {
					if ("string" == typeof e) {
						if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
						t[e]()
					}
				} else t.to(e)
			})
		}
	}
	p.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(t) {
		var e = d.getElementFromSelector(this);
		e && e.classList.contains(At) && (t.preventDefault(), t = _t.getOrCreateInstance(e), (e = this.getAttribute("data-bs-slide-to")) ? t.to(e) : "next" === h.getDataAttribute(this, "slide") ? t.next() : t.prev(), t._maybeEnableCycle())
	}), p.on(window, "load.bs.carousel.data-api", () => {
		for (const t of d.find('[data-bs-ride="carousel"]')) _t.getOrCreateInstance(t)
	}), t(_t);
	const It = "show",
		f = "collapse",
		Mt = "collapsing",
		Ot = (f, f, '[data-bs-toggle="collapse"]'),
		Dt = {
			parent: null,
			toggle: !0
		},
		zt = {
			parent: "(null|element)",
			toggle: "boolean"
		};
	class Xt extends e {
		constructor(t, e) {
			super(t, e), this._isTransitioning = !1, this._triggerArray = [];
			const i = d.find(Ot);
			for (const t of i) {
				const e = d.getSelectorFromElement(t),
					i = d.find(e).filter(t => t === this._element);
				null !== e && i.length && this._triggerArray.push(t)
			}
			this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
		}
		static get Default() {
			return Dt
		}
		static get DefaultType() {
			return zt
		}
		static get NAME() {
			return "collapse"
		}
		toggle() {
			this._isShown() ? this.hide() : this.show()
		}
		show() {
			if (!this._isTransitioning && !this._isShown()) {
				let t = [];
				if (!((t = this._config.parent ? this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t => t !== this._element).map(t => Xt.getOrCreateInstance(t, {
						toggle: !1
					})) : t).length && t[0]._isTransitioning || p.trigger(this._element, "show.bs.collapse").defaultPrevented)) {
					for (const i of t) i.hide();
					const i = this._getDimension();
					this._element.classList.remove(f), this._element.classList.add(Mt), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
					var e = "scroll" + (i[0].toUpperCase() + i.slice(1));
					this._queueCallback(() => {
						this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(f, It), this._element.style[i] = "", p.trigger(this._element, "shown.bs.collapse")
					}, this._element, !0), this._element.style[i] = this._element[e] + "px"
				}
			}
		}
		hide() {
			if (!this._isTransitioning && this._isShown() && !p.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
				const e = this._getDimension();
				this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", W(this._element), this._element.classList.add(Mt), this._element.classList.remove(f, It);
				for (const e of this._triggerArray) {
					var t = d.getElementFromSelector(e);
					t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1)
				}
				this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(() => {
					this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(f), p.trigger(this._element, "hidden.bs.collapse")
				}, this._element, !0)
			}
		}
		_isShown(t = this._element) {
			return t.classList.contains(It)
		}
		_configAfterMerge(t) {
			return t.toggle = Boolean(t.toggle), t.parent = a(t.parent), t
		}
		_getDimension() {
			return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
		}
		_initializeChildren() {
			if (this._config.parent) {
				const t = this._getFirstLevelChildren(Ot);
				for (const e of t) {
					const t = d.getElementFromSelector(e);
					t && this._addAriaAndCollapsedClass([e], this._isShown(t))
				}
			}
		}
		_getFirstLevelChildren(t) {
			const e = d.find(":scope .collapse .collapse", this._config.parent);
			return d.find(t, this._config.parent).filter(t => !e.includes(t))
		}
		_addAriaAndCollapsedClass(t, e) {
			if (t.length)
				for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
		}
		static jQueryInterface(e) {
			const i = {};
			return "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), this.each(function() {
				var t = Xt.getOrCreateInstance(this, i);
				if ("string" == typeof e) {
					if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
					t[e]()
				}
			})
		}
	}
	p.on(document, "click.bs.collapse.data-api", Ot, function(t) {
		("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
		for (const t of d.getMultipleElementsFromSelector(this)) Xt.getOrCreateInstance(t, {
			toggle: !1
		}).toggle()
	}), t(Xt);
	var L = "top",
		E = "bottom",
		P = "right",
		_ = "left",
		Nt = "auto",
		I = [L, E, P, _],
		M = "start",
		v = "end",
		Ft = "clippingParents",
		Rt = "viewport",
		Ht = "popper",
		Yt = "reference",
		Wt = I.reduce(function(t, e) {
			return t.concat([e + "-" + M, e + "-" + v])
		}, []),
		Bt = [].concat(I, [Nt]).reduce(function(t, e) {
			return t.concat([e, e + "-" + M, e + "-" + v])
		}, []),
		jt = "beforeRead",
		Vt = "afterRead",
		Gt = "beforeMain",
		qt = "afterMain",
		Ut = "beforeWrite",
		Zt = "afterWrite",
		$t = [jt, "read", Vt, Gt, "main", qt, Ut, "write", Zt];

	function x(t) {
		return t ? (t.nodeName || "").toLowerCase() : null
	}

	function y(t) {
		var e;
		return null == t ? window : "[object Window]" !== t.toString() ? (e = t.ownerDocument) && e.defaultView || window : t
	}

	function m(t) {
		return t instanceof y(t).Element || t instanceof Element
	}

	function b(t) {
		return t instanceof y(t).HTMLElement || t instanceof HTMLElement
	}

	function Qt(t) {
		return "undefined" != typeof ShadowRoot && (t instanceof y(t).ShadowRoot || t instanceof ShadowRoot)
	}
	var Kt = {
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: function(t) {
			var a = t.state;
			Object.keys(a.elements).forEach(function(t) {
				var e = a.styles[t] || {},
					i = a.attributes[t] || {},
					s = a.elements[t];
				b(s) && x(s) && (Object.assign(s.style, e), Object.keys(i).forEach(function(t) {
					var e = i[t];
					!1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
				}))
			})
		},
		effect: function(t) {
			var s = t.state,
				a = {
					popper: {
						position: s.options.strategy,
						left: "0",
						top: "0",
						margin: "0"
					},
					arrow: {
						position: "absolute"
					},
					reference: {}
				};
			return Object.assign(s.elements.popper.style, a.popper), s.styles = a, s.elements.arrow && Object.assign(s.elements.arrow.style, a.arrow),
				function() {
					Object.keys(s.elements).forEach(function(t) {
						var e = s.elements[t],
							i = s.attributes[t] || {},
							t = Object.keys((s.styles.hasOwnProperty(t) ? s.styles : a)[t]).reduce(function(t, e) {
								return t[e] = "", t
							}, {});
						b(e) && x(e) && (Object.assign(e.style, t), Object.keys(i).forEach(function(t) {
							e.removeAttribute(t)
						}))
					})
				}
		},
		requires: ["computeStyles"]
	};

	function O(t) {
		return t.split("-")[0]
	}
	var T = Math.max,
		Jt = Math.min,
		te = Math.round;

	function ee() {
		var t = navigator.userAgentData;
		return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function(t) {
			return t.brand + "/" + t.version
		}).join(" ") : navigator.userAgent
	}

	function ie() {
		return !/^((?!chrome|android).)*safari/i.test(ee())
	}

	function se(t, e, i) {
		void 0 === e && (e = !1), void 0 === i && (i = !1);
		var s = t.getBoundingClientRect(),
			a = 1,
			n = 1,
			e = (e && b(t) && (a = 0 < t.offsetWidth && te(s.width) / t.offsetWidth || 1, n = 0 < t.offsetHeight && te(s.height) / t.offsetHeight || 1), (m(t) ? y(t) : window).visualViewport),
			t = !ie() && i,
			i = (s.left + (t && e ? e.offsetLeft : 0)) / a,
			t = (s.top + (t && e ? e.offsetTop : 0)) / n,
			e = s.width / a,
			a = s.height / n;
		return {
			width: e,
			height: a,
			top: t,
			right: i + e,
			bottom: t + a,
			left: i,
			x: i,
			y: t
		}
	}

	function ae(t) {
		var e = se(t),
			i = t.offsetWidth,
			s = t.offsetHeight;
		return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), {
			x: t.offsetLeft,
			y: t.offsetTop,
			width: i,
			height: s
		}
	}

	function ne(t, e) {
		var i = e.getRootNode && e.getRootNode();
		if (t.contains(e)) return !0;
		if (i && Qt(i)) {
			var s = e;
			do {
				if (s && t.isSameNode(s)) return !0
			} while (s = s.parentNode || s.host)
		}
		return !1
	}

	function w(t) {
		return y(t).getComputedStyle(t)
	}

	function k(t) {
		return ((m(t) ? t.ownerDocument : t.document) || window.document).documentElement
	}

	function oe(t) {
		return "html" === x(t) ? t : t.assignedSlot || t.parentNode || (Qt(t) ? t.host : null) || k(t)
	}

	function re(t) {
		return b(t) && "fixed" !== w(t).position ? t.offsetParent : null
	}

	function le(t) {
		for (var e, i = y(t), s = re(t); s && (e = s, 0 <= ["table", "td", "th"].indexOf(x(e))) && "static" === w(s).position;) s = re(s);
		return (!s || "html" !== x(s) && ("body" !== x(s) || "static" !== w(s).position)) && (s || function(t) {
			var e = /firefox/i.test(ee());
			if (!/Trident/i.test(ee()) || !b(t) || "fixed" !== w(t).position) {
				var i = oe(t);
				for (Qt(i) && (i = i.host); b(i) && ["html", "body"].indexOf(x(i)) < 0;) {
					var s = w(i);
					if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== ["transform", "perspective"].indexOf(s.willChange) || e && "filter" === s.willChange || e && s.filter && "none" !== s.filter) return i;
					i = i.parentNode
				}
			}
			return null
		}(t)) || i
	}

	function ce(t) {
		return 0 <= ["top", "bottom"].indexOf(t) ? "x" : "y"
	}

	function he(t, e, i) {
		return T(t, Jt(e, i))
	}

	function de(t) {
		return Object.assign({}, {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}, t)
	}

	function ue(i, t) {
		return t.reduce(function(t, e) {
			return t[e] = i, t
		}, {})
	}
	var ge = {
		name: "arrow",
		enabled: !0,
		phase: "main",
		fn: function(t) {
			var e, i, s, a, n = t.state,
				o = t.name,
				t = t.options,
				r = n.elements.arrow,
				l = n.modifiersData.popperOffsets,
				c = O(n.placement),
				h = ce(c),
				c = 0 <= [_, P].indexOf(c) ? "height" : "width";
			r && l && (t = de("number" != typeof(t = "function" == typeof(t = t.padding) ? t(Object.assign({}, n.rects, {
				placement: n.placement
			})) : t) ? t : ue(t, I)), e = ae(r), a = "y" === h ? L : _, s = "y" === h ? E : P, i = n.rects.reference[c] + n.rects.reference[h] - l[h] - n.rects.popper[c], l = l[h] - n.rects.reference[h], r = (r = le(r)) ? "y" === h ? r.clientHeight || 0 : r.clientWidth || 0 : 0, a = t[a], t = r - e[c] - t[s], a = he(a, s = r / 2 - e[c] / 2 + (i / 2 - l / 2), t), n.modifiersData[o] = ((r = {})[h] = a, r.centerOffset = a - s, r))
		},
		effect: function(t) {
			var e = t.state,
				t = t.options.element,
				t = void 0 === t ? "[data-popper-arrow]" : t;
			null != t && ("string" != typeof t || (t = e.elements.popper.querySelector(t))) && ne(e.elements.popper, t) && (e.elements.arrow = t)
		},
		requires: ["popperOffsets"],
		requiresIfExists: ["preventOverflow"]
	};

	function pe(t) {
		return t.split("-")[1]
	}
	var fe = {
		top: "auto",
		right: "auto",
		bottom: "auto",
		left: "auto"
	};

	function xe(t) {
		var e = t.popper,
			i = t.popperRect,
			s = t.placement,
			a = t.variation,
			n = t.offsets,
			o = t.position,
			r = t.gpuAcceleration,
			l = t.adaptive,
			c = t.roundOffsets,
			t = t.isFixed,
			h = n.x,
			h = void 0 === h ? 0 : h,
			d = n.y,
			d = void 0 === d ? 0 : d,
			u = "function" == typeof c ? c({
				x: h,
				y: d
			}) : {
				x: h,
				y: d
			},
			h = u.x,
			d = u.y,
			u = n.hasOwnProperty("x"),
			n = n.hasOwnProperty("y"),
			g = _,
			p = L,
			f = window;
		l && (m = "clientHeight", x = "clientWidth", (b = le(e)) === y(e) && "static" !== w(b = k(e)).position && "absolute" === o && (m = "scrollHeight", x = "scrollWidth"), s !== L && (s !== _ && s !== P || a !== v) || (p = E, d = (d - ((t && b === f && f.visualViewport ? f.visualViewport.height : b[m]) - i.height)) * (r ? 1 : -1)), s !== _ && (s !== L && s !== E || a !== v) || (g = P, h = (h - ((t && b === f && f.visualViewport ? f.visualViewport.width : b[x]) - i.width)) * (r ? 1 : -1)));
		var x, m = Object.assign({
				position: o
			}, l && fe),
			b = !0 === c ? (s = {
				x: h,
				y: d
			}, a = y(e), t = s.y, a = a.devicePixelRatio || 1, {
				x: te(s.x * a) / a || 0,
				y: te(t * a) / a || 0
			}) : {
				x: h,
				y: d
			};
		return h = b.x, d = b.y, r ? Object.assign({}, m, ((x = {})[p] = n ? "0" : "", x[g] = u ? "0" : "", x.transform = (f.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + d + "px)" : "translate3d(" + h + "px, " + d + "px, 0)", x)) : Object.assign({}, m, ((i = {})[p] = n ? d + "px" : "", i[g] = u ? h + "px" : "", i.transform = "", i))
	}
	var me = {
			name: "computeStyles",
			enabled: !0,
			phase: "beforeWrite",
			fn: function(t) {
				var e = t.state,
					t = t.options,
					i = t.gpuAcceleration,
					i = void 0 === i || i,
					s = t.adaptive,
					s = void 0 === s || s,
					t = t.roundOffsets,
					t = void 0 === t || t,
					i = {
						placement: O(e.placement),
						variation: pe(e.placement),
						popper: e.elements.popper,
						popperRect: e.rects.popper,
						gpuAcceleration: i,
						isFixed: "fixed" === e.options.strategy
					};
				null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, xe(Object.assign({}, i, {
					offsets: e.modifiersData.popperOffsets,
					position: e.options.strategy,
					adaptive: s,
					roundOffsets: t
				})))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, xe(Object.assign({}, i, {
					offsets: e.modifiersData.arrow,
					position: "absolute",
					adaptive: !1,
					roundOffsets: t
				})))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
					"data-popper-placement": e.placement
				})
			},
			data: {}
		},
		be = {
			passive: !0
		},
		ve = {
			name: "eventListeners",
			enabled: !0,
			phase: "write",
			fn: function() {},
			effect: function(t) {
				var e = t.state,
					i = t.instance,
					t = t.options,
					s = t.scroll,
					a = void 0 === s || s,
					s = t.resize,
					n = void 0 === s || s,
					o = y(e.elements.popper),
					r = [].concat(e.scrollParents.reference, e.scrollParents.popper);
				return a && r.forEach(function(t) {
						t.addEventListener("scroll", i.update, be)
					}), n && o.addEventListener("resize", i.update, be),
					function() {
						a && r.forEach(function(t) {
							t.removeEventListener("scroll", i.update, be)
						}), n && o.removeEventListener("resize", i.update, be)
					}
			},
			data: {}
		},
		ye = {
			left: "right",
			right: "left",
			bottom: "top",
			top: "bottom"
		};

	function we(t) {
		return t.replace(/left|right|bottom|top/g, function(t) {
			return ye[t]
		})
	}
	var ke = {
		start: "end",
		end: "start"
	};

	function Ae(t) {
		return t.replace(/start|end/g, function(t) {
			return ke[t]
		})
	}

	function Ce(t) {
		t = y(t);
		return {
			scrollLeft: t.pageXOffset,
			scrollTop: t.pageYOffset
		}
	}

	function Se(t) {
		return se(k(t)).left + Ce(t).scrollLeft
	}

	function Te(t) {
		var t = w(t),
			e = t.overflow,
			i = t.overflowX,
			t = t.overflowY;
		return /auto|scroll|overlay|hidden/.test(e + t + i)
	}

	function Le(t, e) {
		void 0 === e && (e = []);
		var i = function t(e) {
				return 0 <= ["html", "body", "#document"].indexOf(x(e)) ? e.ownerDocument.body : b(e) && Te(e) ? e : t(oe(e))
			}(t),
			t = i === (null == (t = t.ownerDocument) ? void 0 : t.body),
			s = y(i),
			s = t ? [s].concat(s.visualViewport || [], Te(i) ? i : []) : i,
			i = e.concat(s);
		return t ? i : i.concat(Le(oe(s)))
	}

	function Ee(t) {
		return Object.assign({}, t, {
			left: t.x,
			top: t.y,
			right: t.x + t.width,
			bottom: t.y + t.height
		})
	}

	function Pe(t, e, i) {
		return e === Rt ? Ee((a = i, o = y(s = t), r = k(s), o = o.visualViewport, l = r.clientWidth, r = r.clientHeight, h = c = 0, o && (l = o.width, r = o.height, (n = ie()) || !n && "fixed" === a) && (c = o.offsetLeft, h = o.offsetTop), {
			width: l,
			height: r,
			x: c + Se(s),
			y: h
		})) : m(e) ? ((a = se(n = e, !1, "fixed" === i)).top = a.top + n.clientTop, a.left = a.left + n.clientLeft, a.bottom = a.top + n.clientHeight, a.right = a.left + n.clientWidth, a.width = n.clientWidth, a.height = n.clientHeight, a.x = a.left, a.y = a.top, a) : Ee((o = k(t), l = k(o), r = Ce(o), c = null == (c = o.ownerDocument) ? void 0 : c.body, s = T(l.scrollWidth, l.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), h = T(l.scrollHeight, l.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0), o = -r.scrollLeft + Se(o), r = -r.scrollTop, "rtl" === w(c || l).direction && (o += T(l.clientWidth, c ? c.clientWidth : 0) - s), {
			width: s,
			height: h,
			x: o,
			y: r
		}));
		var s, a, n, o, r, l, c, h
	}

	function _e(t) {
		var e, i = t.reference,
			s = t.element,
			t = t.placement,
			a = t ? O(t) : null,
			t = t ? pe(t) : null,
			n = i.x + i.width / 2 - s.width / 2,
			o = i.y + i.height / 2 - s.height / 2;
		switch (a) {
			case L:
				e = {
					x: n,
					y: i.y - s.height
				};
				break;
			case E:
				e = {
					x: n,
					y: i.y + i.height
				};
				break;
			case P:
				e = {
					x: i.x + i.width,
					y: o
				};
				break;
			case _:
				e = {
					x: i.x - s.width,
					y: o
				};
				break;
			default:
				e = {
					x: i.x,
					y: i.y
				}
		}
		var r = a ? ce(a) : null;
		if (null != r) {
			var l = "y" === r ? "height" : "width";
			switch (t) {
				case M:
					e[r] = e[r] - (i[l] / 2 - s[l] / 2);
					break;
				case v:
					e[r] = e[r] + (i[l] / 2 - s[l] / 2)
			}
		}
		return e
	}

	function Ie(t, e) {
		var i, s, a, n, o, r, e = e = void 0 === e ? {} : e,
			l = e.placement,
			l = void 0 === l ? t.placement : l,
			c = e.strategy,
			c = void 0 === c ? t.strategy : c,
			h = e.boundary,
			h = void 0 === h ? Ft : h,
			d = e.rootBoundary,
			d = void 0 === d ? Rt : d,
			u = e.elementContext,
			u = void 0 === u ? Ht : u,
			g = e.altBoundary,
			g = void 0 !== g && g,
			e = e.padding,
			e = void 0 === e ? 0 : e,
			e = de("number" != typeof e ? e : ue(e, I)),
			p = t.rects.popper,
			g = t.elements[g ? u === Ht ? Yt : Ht : u],
			c = (i = m(g) ? g : g.contextElement || k(t.elements.popper), g = d, s = c, n = "clippingParents" === (d = h) ? (o = Le(oe(n = i)), m(a = 0 <= ["absolute", "fixed"].indexOf(w(n).position) && b(n) ? le(n) : n) ? o.filter(function(t) {
				return m(t) && ne(t, a) && "body" !== x(t)
			}) : []) : [].concat(d), o = [].concat(n, [g]), d = o[0], (g = o.reduce(function(t, e) {
				e = Pe(i, e, s);
				return t.top = T(e.top, t.top), t.right = Jt(e.right, t.right), t.bottom = Jt(e.bottom, t.bottom), t.left = T(e.left, t.left), t
			}, Pe(i, d, s))).width = g.right - g.left, g.height = g.bottom - g.top, g.x = g.left, g.y = g.top, g),
			h = se(t.elements.reference),
			d = _e({
				reference: h,
				element: p,
				strategy: "absolute",
				placement: l
			}),
			g = Ee(Object.assign({}, p, d)),
			p = u === Ht ? g : h,
			f = {
				top: c.top - p.top + e.top,
				bottom: p.bottom - c.bottom + e.bottom,
				left: c.left - p.left + e.left,
				right: p.right - c.right + e.right
			},
			d = t.modifiersData.offset;
		return u === Ht && d && (r = d[l], Object.keys(f).forEach(function(t) {
			var e = 0 <= [P, E].indexOf(t) ? 1 : -1,
				i = 0 <= [L, E].indexOf(t) ? "y" : "x";
			f[t] += r[i] * e
		})), f
	}
	var Me = {
		name: "flip",
		enabled: !0,
		phase: "main",
		fn: function(t) {
			var d = t.state,
				e = t.options,
				t = t.name;
			if (!d.modifiersData[t]._skip) {
				for (var i = e.mainAxis, s = void 0 === i || i, i = e.altAxis, a = void 0 === i || i, i = e.fallbackPlacements, u = e.padding, g = e.boundary, p = e.rootBoundary, n = e.altBoundary, o = e.flipVariations, f = void 0 === o || o, x = e.allowedAutoPlacements, o = d.options.placement, e = O(o), i = i || (e !== o && f ? O(i = o) === Nt ? [] : (e = we(i), [Ae(i), e, Ae(e)]) : [we(o)]), r = [o].concat(i).reduce(function(t, e) {
						return t.concat(O(e) === Nt ? (i = d, s = (t = t = void 0 === (t = {
							placement: e,
							boundary: g,
							rootBoundary: p,
							padding: u,
							flipVariations: f,
							allowedAutoPlacements: x
						}) ? {} : t).placement, a = t.boundary, n = t.rootBoundary, o = t.padding, r = t.flipVariations, l = void 0 === (t = t.allowedAutoPlacements) ? Bt : t, c = pe(s), t = c ? r ? Wt : Wt.filter(function(t) {
							return pe(t) === c
						}) : I, h = (s = 0 === (s = t.filter(function(t) {
							return 0 <= l.indexOf(t)
						})).length ? t : s).reduce(function(t, e) {
							return t[e] = Ie(i, {
								placement: e,
								boundary: a,
								rootBoundary: n,
								padding: o
							})[O(e)], t
						}, {}), Object.keys(h).sort(function(t, e) {
							return h[t] - h[e]
						})) : e);
						var i, s, a, n, o, r, l, c, h
					}, []), l = d.rects.reference, c = d.rects.popper, h = new Map, m = !0, b = r[0], v = 0; v < r.length; v++) {
					var y = r[v],
						w = O(y),
						k = pe(y) === M,
						A = 0 <= [L, E].indexOf(w),
						C = A ? "width" : "height",
						S = Ie(d, {
							placement: y,
							boundary: g,
							rootBoundary: p,
							altBoundary: n,
							padding: u
						}),
						A = A ? k ? P : _ : k ? E : L,
						k = (l[C] > c[C] && (A = we(A)), we(A)),
						C = [];
					if (s && C.push(S[w] <= 0), a && C.push(S[A] <= 0, S[k] <= 0), C.every(function(t) {
							return t
						})) {
						b = y, m = !1;
						break
					}
					h.set(y, C)
				}
				if (m)
					for (var T = f ? 3 : 1; 0 < T && "break" !== function(e) {
							var t = r.find(function(t) {
								t = h.get(t);
								if (t) return t.slice(0, e).every(function(t) {
									return t
								})
							});
							if (t) return b = t, "break"
						}(T); T--);
				d.placement !== b && (d.modifiersData[t]._skip = !0, d.placement = b, d.reset = !0)
			}
		},
		requiresIfExists: ["offset"],
		data: {
			_skip: !1
		}
	};

	function Oe(t, e, i) {
		return {
			top: t.top - e.height - (i = void 0 === i ? {
				x: 0,
				y: 0
			} : i).y,
			right: t.right - e.width + i.x,
			bottom: t.bottom - e.height + i.y,
			left: t.left - e.width - i.x
		}
	}

	function De(e) {
		return [L, P, E, _].some(function(t) {
			return 0 <= e[t]
		})
	}
	var ze = {
			name: "hide",
			enabled: !0,
			phase: "main",
			requiresIfExists: ["preventOverflow"],
			fn: function(t) {
				var e = t.state,
					t = t.name,
					i = e.rects.reference,
					s = e.rects.popper,
					a = e.modifiersData.preventOverflow,
					n = Ie(e, {
						elementContext: "reference"
					}),
					o = Ie(e, {
						altBoundary: !0
					}),
					n = Oe(n, i),
					i = Oe(o, s, a),
					o = De(n),
					s = De(i);
				e.modifiersData[t] = {
					referenceClippingOffsets: n,
					popperEscapeOffsets: i,
					isReferenceHidden: o,
					hasPopperEscaped: s
				}, e.attributes.popper = Object.assign({}, e.attributes.popper, {
					"data-popper-reference-hidden": o,
					"data-popper-escaped": s
				})
			}
		},
		Xe = {
			name: "offset",
			enabled: !0,
			phase: "main",
			requires: ["popperOffsets"],
			fn: function(t) {
				var o = t.state,
					e = t.options,
					t = t.name,
					e = e.offset,
					r = void 0 === e ? [0, 0] : e,
					e = Bt.reduce(function(t, e) {
						return t[e] = (e = e, i = o.rects, s = r, a = O(e), n = 0 <= [_, L].indexOf(a) ? -1 : 1, i = "function" == typeof s ? s(Object.assign({}, i, {
							placement: e
						})) : s, e = i[0] || 0, s = (i[1] || 0) * n, 0 <= [_, P].indexOf(a) ? {
							x: s,
							y: e
						} : {
							x: e,
							y: s
						}), t;
						var i, s, a, n
					}, {}),
					i = e[o.placement],
					s = i.x,
					i = i.y;
				null != o.modifiersData.popperOffsets && (o.modifiersData.popperOffsets.x += s, o.modifiersData.popperOffsets.y += i), o.modifiersData[t] = e
			}
		},
		Ne = {
			name: "popperOffsets",
			enabled: !0,
			phase: "read",
			fn: function(t) {
				var e = t.state,
					t = t.name;
				e.modifiersData[t] = _e({
					reference: e.rects.reference,
					element: e.rects.popper,
					strategy: "absolute",
					placement: e.placement
				})
			},
			data: {}
		},
		Fe = {
			name: "preventOverflow",
			enabled: !0,
			phase: "main",
			fn: function(t) {
				var e, i, s, a, n, o, r, l, c, h = t.state,
					d = t.options,
					t = t.name,
					u = d.mainAxis,
					u = void 0 === u || u,
					g = d.altAxis,
					g = void 0 !== g && g,
					p = d.boundary,
					f = d.rootBoundary,
					x = d.altBoundary,
					m = d.padding,
					b = d.tether,
					b = void 0 === b || b,
					d = d.tetherOffset,
					d = void 0 === d ? 0 : d,
					p = Ie(h, {
						boundary: p,
						rootBoundary: f,
						padding: m,
						altBoundary: x
					}),
					f = O(h.placement),
					m = pe(h.placement),
					x = !m,
					v = ce(f),
					y = "x" === v ? "y" : "x",
					w = h.modifiersData.popperOffsets,
					k = h.rects.reference,
					A = h.rects.popper,
					d = "function" == typeof d ? d(Object.assign({}, h.rects, {
						placement: h.placement
					})) : d,
					d = "number" == typeof d ? {
						mainAxis: d,
						altAxis: d
					} : Object.assign({
						mainAxis: 0,
						altAxis: 0
					}, d),
					C = h.modifiersData.offset ? h.modifiersData.offset[h.placement] : null,
					S = {
						x: 0,
						y: 0
					};
				w && (u && (u = "y" === v ? "height" : "width", o = (r = w[v]) + p[i = "y" === v ? L : _], l = r - p[c = "y" === v ? E : P], e = b ? -A[u] / 2 : 0, a = (m === M ? k : A)[u], m = m === M ? -A[u] : -k[u], n = h.elements.arrow, n = b && n ? ae(n) : {
					width: 0,
					height: 0
				}, i = (s = h.modifiersData["arrow#persistent"] ? h.modifiersData["arrow#persistent"].padding : {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				})[i], s = s[c], c = he(0, k[u], n[u]), n = x ? k[u] / 2 - e - c - i - d.mainAxis : a - c - i - d.mainAxis, a = x ? -k[u] / 2 + e + c + s + d.mainAxis : m + c + s + d.mainAxis, x = (i = h.elements.arrow && le(h.elements.arrow)) ? "y" === v ? i.clientTop || 0 : i.clientLeft || 0 : 0, m = r + a - (e = null != (u = null == C ? void 0 : C[v]) ? u : 0), c = he(b ? Jt(o, r + n - e - x) : o, r, b ? T(l, m) : l), w[v] = c, S[v] = c - r), g && (s = "y" == y ? "height" : "width", a = (i = w[y]) + p["x" === v ? L : _], u = i - p["x" === v ? E : P], n = -1 !== [L, _].indexOf(f), x = null != (e = null == C ? void 0 : C[y]) ? e : 0, o = n ? a : i - k[s] - A[s] - x + d.altAxis, m = n ? i + k[s] + A[s] - x - d.altAxis : u, r = b && n ? (c = he(o, i, l = m), l < c ? l : c) : he(b ? o : a, i, b ? m : u), w[y] = r, S[y] = r - i), h.modifiersData[t] = S)
			},
			requiresIfExists: ["offset"]
		};

	function Re(t) {
		var i = new Map,
			s = new Set,
			a = [];
		return t.forEach(function(t) {
			i.set(t.name, t)
		}), t.forEach(function(t) {
			s.has(t.name) || function e(t) {
				s.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
					s.has(t) || (t = i.get(t)) && e(t)
				}), a.push(t)
			}(t)
		}), a
	}
	var He = {
		placement: "bottom",
		modifiers: [],
		strategy: "absolute"
	};

	function Ye() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
		return !e.some(function(t) {
			return !(t && "function" == typeof t.getBoundingClientRect)
		})
	}

	function We(t) {
		var t = t = void 0 === t ? {} : t,
			e = t.defaultModifiers,
			l = void 0 === e ? [] : e,
			e = t.defaultOptions,
			c = void 0 === e ? He : e;
		return function(s, a, e) {
			void 0 === e && (e = c);
			var i, n, g = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign({}, He, c),
					modifiersData: {},
					elements: {
						reference: s,
						popper: a
					},
					attributes: {},
					styles: {}
				},
				o = [],
				p = !1,
				f = {
					state: g,
					setOptions: function(t) {
						t = "function" == typeof t ? t(g.options) : t;
						r(), g.options = Object.assign({}, c, g.options, t), g.scrollParents = {
							reference: m(s) ? Le(s) : s.contextElement ? Le(s.contextElement) : [],
							popper: Le(a)
						};
						t = [].concat(l, g.options.modifiers), e = t.reduce(function(t, e) {
							var i = t[e.name];
							return t[e.name] = i ? Object.assign({}, i, e, {
								options: Object.assign({}, i.options, e.options),
								data: Object.assign({}, i.data, e.data)
							}) : e, t
						}, {}), i = Re(Object.keys(e).map(function(t) {
							return e[t]
						}));
						var e, i, t = $t.reduce(function(t, e) {
							return t.concat(i.filter(function(t) {
								return t.phase === e
							}))
						}, []);
						return g.orderedModifiers = t.filter(function(t) {
							return t.enabled
						}), g.orderedModifiers.forEach(function(t) {
							var e = t.name,
								i = t.options,
								t = t.effect;
							"function" == typeof t && (t = t({
								state: g,
								name: e,
								instance: f,
								options: void 0 === i ? {} : i
							}), o.push(t || function() {}))
						}), f.update()
					},
					forceUpdate: function() {
						if (!p) {
							var t = g.elements,
								e = t.reference,
								t = t.popper;
							if (Ye(e, t)) {
								g.rects = {
									reference: (e = e, o = le(t), void 0 === (r = "fixed" === g.options.strategy) && (r = !1), l = b(o), c = b(o) && (d = (c = o).getBoundingClientRect(), h = te(d.width) / c.offsetWidth || 1, d = te(d.height) / c.offsetHeight || 1, 1 !== h || 1 !== d), h = k(o), d = se(e, c, r), e = {
										scrollLeft: 0,
										scrollTop: 0
									}, u = {
										x: 0,
										y: 0
									}, !l && r || ("body" === x(o) && !Te(h) || (e = (l = o) !== y(l) && b(l) ? {
										scrollLeft: l.scrollLeft,
										scrollTop: l.scrollTop
									} : Ce(l)), b(o) ? ((u = se(o, !0)).x += o.clientLeft, u.y += o.clientTop) : h && (u.x = Se(h))), {
										x: d.left + e.scrollLeft - u.x,
										y: d.top + e.scrollTop - u.y,
										width: d.width,
										height: d.height
									}),
									popper: ae(t)
								}, g.reset = !1, g.placement = g.options.placement, g.orderedModifiers.forEach(function(t) {
									return g.modifiersData[t.name] = Object.assign({}, t.data)
								});
								for (var i, s, a, n = 0; n < g.orderedModifiers.length; n++) !0 !== g.reset ? (i = (a = g.orderedModifiers[n]).fn, s = a.options, a = a.name, "function" == typeof i && (g = i({
									state: g,
									options: void 0 === s ? {} : s,
									name: a,
									instance: f
								}) || g)) : (g.reset = !1, n = -1)
							}
						}
						var o, r, l, c, h, d, u
					},
					update: (i = function() {
						return new Promise(function(t) {
							f.forceUpdate(), t(g)
						})
					}, function() {
						return n = n || new Promise(function(t) {
							Promise.resolve().then(function() {
								n = void 0, t(i())
							})
						})
					}),
					destroy: function() {
						r(), p = !0
					}
				};
			return Ye(s, a) && f.setOptions(e).then(function(t) {
				!p && e.onFirstUpdate && e.onFirstUpdate(t)
			}), f;

			function r() {
				o.forEach(function(t) {
					return t()
				}), o = []
			}
		}
	}
	var Be = We(),
		je = We({
			defaultModifiers: [ve, Ne, me, Kt]
		}),
		Ve = We({
			defaultModifiers: [ve, Ne, me, Kt, Xe, Me, Fe, ge, ze]
		});
	const Ge = Object.freeze(Object.defineProperty({
			__proto__: null,
			afterMain: qt,
			afterRead: Vt,
			afterWrite: Zt,
			applyStyles: Kt,
			arrow: ge,
			auto: Nt,
			basePlacements: I,
			beforeMain: Gt,
			beforeRead: jt,
			beforeWrite: Ut,
			bottom: E,
			clippingParents: Ft,
			computeStyles: me,
			createPopper: Ve,
			createPopperBase: Be,
			createPopperLite: je,
			detectOverflow: Ie,
			end: v,
			eventListeners: ve,
			flip: Me,
			hide: ze,
			left: _,
			main: "main",
			modifierPhases: $t,
			offset: Xe,
			placements: Bt,
			popper: Ht,
			popperGenerator: We,
			popperOffsets: Ne,
			preventOverflow: Fe,
			read: "read",
			reference: Yt,
			right: P,
			start: M,
			top: L,
			variationPlacements: Wt,
			viewport: Rt,
			write: "write"
		}, Symbol.toStringTag, {
			value: "Module"
		})),
		qe = "dropdown",
		Ue = ".bs.dropdown",
		Ze = ".data-api",
		$e = "ArrowDown",
		Qe = "click" + Ue + Ze,
		Ke = "keydown" + Ue + Ze,
		Je = "show",
		A = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
		ti = (A, ".dropdown-menu"),
		ei = l() ? "top-end" : "top-start",
		ii = l() ? "top-start" : "top-end",
		si = l() ? "bottom-end" : "bottom-start",
		ai = l() ? "bottom-start" : "bottom-end",
		ni = l() ? "left-start" : "right-start",
		oi = l() ? "right-start" : "left-start",
		ri = {
			autoClose: !0,
			boundary: "clippingParents",
			display: "dynamic",
			offset: [0, 2],
			popperConfig: null,
			reference: "toggle"
		},
		li = {
			autoClose: "(boolean|string)",
			boundary: "(string|element)",
			display: "string",
			offset: "(array|string|function)",
			popperConfig: "(null|object|function)",
			reference: "(string|element|object)"
		};
	class C extends e {
		constructor(t, e) {
			super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = d.next(this._element, ti)[0] || d.prev(this._element, ti)[0] || d.findOne(ti, this._parent), this._inNavbar = this._detectNavbar()
		}
		static get Default() {
			return ri
		}
		static get DefaultType() {
			return li
		}
		static get NAME() {
			return qe
		}
		toggle() {
			return this._isShown() ? this.hide() : this.show()
		}
		show() {
			if (!r(this._element) && !this._isShown()) {
				const t = {
					relatedTarget: this._element
				};
				if (!p.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
					if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
						for (const t of [].concat(...document.body.children)) p.on(t, "mouseover", Y);
					this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), p.trigger(this._element, "shown.bs.dropdown", t)
				}
			}
		}
		hide() {
			var t;
			!r(this._element) && this._isShown() && (t = {
				relatedTarget: this._element
			}, this._completeHide(t))
		}
		dispose() {
			this._popper && this._popper.destroy(), super.dispose()
		}
		update() {
			this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
		}
		_completeHide(t) {
			if (!p.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
				if ("ontouchstart" in document.documentElement)
					for (const t of [].concat(...document.body.children)) p.off(t, "mouseover", Y);
				this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), h.removeDataAttribute(this._menu, "popper"), p.trigger(this._element, "hidden.bs.dropdown", t)
			}
		}
		_getConfig(t) {
			if ("object" != typeof(t = super._getConfig(t)).reference || o(t.reference) || "function" == typeof t.reference.getBoundingClientRect) return t;
			throw new TypeError(qe.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')
		}
		_createPopper() {
			if (void 0 === Ge) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
			let t = this._element;
			"parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = a(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
			var e = this._getPopperConfig();
			this._popper = Ve(t, this._menu, e)
		}
		_isShown() {
			return this._menu.classList.contains(Je)
		}
		_getPlacement() {
			var t, e = this._parent;
			return e.classList.contains("dropend") ? ni : e.classList.contains("dropstart") ? oi : e.classList.contains("dropup-center") ? "top" : e.classList.contains("dropdown-center") ? "bottom" : (t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(), e.classList.contains("dropup") ? t ? ii : ei : t ? ai : si)
		}
		_detectNavbar() {
			return null !== this._element.closest(".navbar")
		}
		_getOffset() {
			const e = this._config["offset"];
			return "string" == typeof e ? e.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof e ? t => e(t, this._element) : e
		}
		_getPopperConfig() {
			var t = {
				placement: this._getPlacement(),
				modifiers: [{
					name: "preventOverflow",
					options: {
						boundary: this._config.boundary
					}
				}, {
					name: "offset",
					options: {
						offset: this._getOffset()
					}
				}]
			};
			return !this._inNavbar && "static" !== this._config.display || (h.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
				name: "applyStyles",
				enabled: !1
			}]), {
				...t,
				...c(this._config.popperConfig, [t])
			}
		}
		_selectMenuItem({
			key: t,
			target: e
		}) {
			var i = d.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(t => n(t));
			i.length && G(i, e, t === $e, !i.includes(e)).focus()
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = C.getOrCreateInstance(this, e);
				if ("string" == typeof e) {
					if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
					t[e]()
				}
			})
		}
		static clearMenus(t) {
			if (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)) {
				const s = d.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show');
				for (const a of s) {
					const s = C.getInstance(a);
					var e, i;
					s && !1 !== s._config.autoClose && (e = (i = t.composedPath()).includes(s._menu), i.includes(s._element) || "inside" === s._config.autoClose && !e || "outside" === s._config.autoClose && e || s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)) || (i = {
						relatedTarget: s._element
					}, "click" === t.type && (i.clickEvent = t), s._completeHide(i)))
				}
			}
		}
		static dataApiKeydownHandler(t) {
			var e = /input|textarea/i.test(t.target.tagName),
				i = "Escape" === t.key,
				s = ["ArrowUp", $e].includes(t.key);
			!s && !i || e && !i || (t.preventDefault(), e = this.matches(A) ? this : d.prev(this, A)[0] || d.next(this, A)[0] || d.findOne(A, t.delegateTarget.parentNode), i = C.getOrCreateInstance(e), s ? (t.stopPropagation(), i.show(), i._selectMenuItem(t)) : i._isShown() && (t.stopPropagation(), i.hide(), e.focus()))
		}
	}
	p.on(document, Ke, A, C.dataApiKeydownHandler), p.on(document, Ke, ti, C.dataApiKeydownHandler), p.on(document, Qe, C.clearMenus), p.on(document, "keyup.bs.dropdown.data-api", C.clearMenus), p.on(document, Qe, A, function(t) {
		t.preventDefault(), C.getOrCreateInstance(this).toggle()
	}), t(C);
	const ci = "backdrop",
		hi = "mousedown.bs." + ci,
		di = {
			className: "modal-backdrop",
			clickCallback: null,
			isAnimated: !1,
			isVisible: !0,
			rootElement: "body"
		},
		ui = {
			className: "string",
			clickCallback: "(function|null)",
			isAnimated: "boolean",
			isVisible: "boolean",
			rootElement: "(element|string)"
		};
	class gi extends ht {
		constructor(t) {
			super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
		}
		static get Default() {
			return di
		}
		static get DefaultType() {
			return ui
		}
		static get NAME() {
			return ci
		}
		show(t) {
			var e;
			this._config.isVisible ? (this._append(), e = this._getElement(), this._config.isAnimated && W(e), e.classList.add("show"), this._emulateAnimation(() => {
				c(t)
			})) : c(t)
		}
		hide(t) {
			this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
				this.dispose(), c(t)
			})) : c(t)
		}
		dispose() {
			this._isAppended && (p.off(this._element, hi), this._element.remove(), this._isAppended = !1)
		}
		_getElement() {
			var t;
			return this._element || ((t = document.createElement("div")).className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t), this._element
		}
		_configAfterMerge(t) {
			return t.rootElement = a(t.rootElement), t
		}
		_append() {
			var t;
			this._isAppended || (t = this._getElement(), this._config.rootElement.append(t), p.on(t, hi, () => {
				c(this._config.clickCallback)
			}), this._isAppended = !0)
		}
		_emulateAnimation(t) {
			V(t, this._getElement(), this._config.isAnimated)
		}
	}
	const pi = ".bs.focustrap",
		fi = (pi, pi, "backward"),
		xi = {
			autofocus: !0,
			trapElement: null
		},
		mi = {
			autofocus: "boolean",
			trapElement: "element"
		};
	class bi extends ht {
		constructor(t) {
			super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
		}
		static get Default() {
			return xi
		}
		static get DefaultType() {
			return mi
		}
		static get NAME() {
			return "focustrap"
		}
		activate() {
			this._isActive || (this._config.autofocus && this._config.trapElement.focus(), p.off(document, pi), p.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t)), p.on(document, "keydown.tab.bs.focustrap", t => this._handleKeydown(t)), this._isActive = !0)
		}
		deactivate() {
			this._isActive && (this._isActive = !1, p.off(document, pi))
		}
		_handleFocusin(t) {
			var e = this._config["trapElement"];
			t.target === document || t.target === e || e.contains(t.target) || (0 === (t = d.focusableChildren(e)).length ? e : this._lastTabNavDirection === fi ? t[t.length - 1] : t[0]).focus()
		}
		_handleKeydown(t) {
			"Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? fi : "forward")
		}
	}
	const vi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
		yi = ".sticky-top",
		wi = "padding-right",
		ki = "margin-right";
	class Ai {
		constructor() {
			this._element = document.body
		}
		getWidth() {
			var t = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - t)
		}
		hide() {
			const e = this.getWidth();
			this._disableOverFlow(), this._setElementAttributes(this._element, wi, t => t + e), this._setElementAttributes(vi, wi, t => t + e), this._setElementAttributes(yi, ki, t => t - e)
		}
		reset() {
			this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, wi), this._resetElementAttributes(vi, wi), this._resetElementAttributes(yi, ki)
		}
		isOverflowing() {
			return 0 < this.getWidth()
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
		}
		_setElementAttributes(t, i, s) {
			const a = this.getWidth();
			this._applyManipulationCallback(t, t => {
				var e;
				t !== this._element && window.innerWidth > t.clientWidth + a || (this._saveInitialAttribute(t, i), e = window.getComputedStyle(t).getPropertyValue(i), t.style.setProperty(i, s(Number.parseFloat(e)) + "px"))
			})
		}
		_saveInitialAttribute(t, e) {
			var i = t.style.getPropertyValue(e);
			i && h.setDataAttribute(t, e, i)
		}
		_resetElementAttributes(t, i) {
			this._applyManipulationCallback(t, t => {
				var e = h.getDataAttribute(t, i);
				null !== e ? (h.removeDataAttribute(t, i), t.style.setProperty(i, e)) : t.style.removeProperty(i)
			})
		}
		_applyManipulationCallback(t, e) {
			if (o(t)) e(t);
			else
				for (const i of d.find(t, this._element)) e(i)
		}
	}
	const S = ".bs.modal",
		Ci = (S, S, "hidden" + S),
		Si = "show" + S,
		Ti = (S, S, S, S, S, S, "modal-open"),
		Li = "modal-static",
		Ei = {
			backdrop: !0,
			focus: !0,
			keyboard: !0
		},
		Pi = {
			backdrop: "(boolean|string)",
			focus: "boolean",
			keyboard: "boolean"
		};
	class _i extends e {
		constructor(t, e) {
			super(t, e), this._dialog = d.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ai, this._addEventListeners()
		}
		static get Default() {
			return Ei
		}
		static get DefaultType() {
			return Pi
		}
		static get NAME() {
			return "modal"
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			this._isShown || this._isTransitioning || p.trigger(this._element, Si, {
				relatedTarget: t
			}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ti), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)))
		}
		hide() {
			!this._isShown || this._isTransitioning || p.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove("show"), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))
		}
		dispose() {
			p.off(window, S), p.off(this._dialog, S), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
		}
		handleUpdate() {
			this._adjustDialog()
		}
		_initializeBackDrop() {
			return new gi({
				isVisible: Boolean(this._config.backdrop),
				isAnimated: this._isAnimated()
			})
		}
		_initializeFocusTrap() {
			return new bi({
				trapElement: this._element
			})
		}
		_showElement(t) {
			document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
			var e = d.findOne(".modal-body", this._dialog);
			e && (e.scrollTop = 0), W(this._element), this._element.classList.add("show"), this._queueCallback(() => {
				this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, p.trigger(this._element, "shown.bs.modal", {
					relatedTarget: t
				})
			}, this._dialog, this._isAnimated())
		}
		_addEventListeners() {
			p.on(this._element, "keydown.dismiss.bs.modal", t => {
				"Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
			}), p.on(window, "resize.bs.modal", () => {
				this._isShown && !this._isTransitioning && this._adjustDialog()
			}), p.on(this._element, "mousedown.dismiss.bs.modal", e => {
				p.one(this._element, "click.dismiss.bs.modal", t => {
					this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
				})
			})
		}
		_hideModal() {
			this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
				document.body.classList.remove(Ti), this._resetAdjustments(), this._scrollBar.reset(), p.trigger(this._element, Ci)
			})
		}
		_isAnimated() {
			return this._element.classList.contains("fade")
		}
		_triggerBackdropTransition() {
			if (!p.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
				const t = this._element.scrollHeight > document.documentElement.clientHeight,
					e = this._element.style.overflowY;
				"hidden" === e || this._element.classList.contains(Li) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Li), this._queueCallback(() => {
					this._element.classList.remove(Li), this._queueCallback(() => {
						this._element.style.overflowY = e
					}, this._dialog)
				}, this._dialog), this._element.focus())
			}
		}
		_adjustDialog() {
			const t = this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._scrollBar.getWidth(),
				i = 0 < e;
			if (i && !t) {
				const t = l() ? "paddingLeft" : "paddingRight";
				this._element.style[t] = e + "px"
			}
			if (!i && t) {
				const t = l() ? "paddingRight" : "paddingLeft";
				this._element.style[t] = e + "px"
			}
		}
		_resetAdjustments() {
			this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
		}
		static jQueryInterface(e, i) {
			return this.each(function() {
				var t = _i.getOrCreateInstance(this, e);
				if ("string" == typeof e) {
					if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
					t[e](i)
				}
			})
		}
	}
	p.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t) {
		const e = d.getElementFromSelector(this);
		["A", "AREA"].includes(this.tagName) && t.preventDefault(), p.one(e, Si, t => {
			t.defaultPrevented || p.one(e, Ci, () => {
				n(this) && this.focus()
			})
		});
		t = d.findOne(".modal.show");
		t && _i.getInstance(t).hide(), _i.getOrCreateInstance(e).toggle(this)
	}), ut(_i), t(_i);
	const Ii = ".bs.offcanvas",
		Mi = "showing",
		Oi = ".offcanvas.show",
		Di = "hidePrevented" + Ii,
		zi = "hidden" + Ii,
		Xi = {
			backdrop: !0,
			keyboard: !0,
			scroll: !1
		},
		Ni = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			scroll: "boolean"
		};
	class D extends e {
		constructor(t, e) {
			super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
		}
		static get Default() {
			return Xi
		}
		static get DefaultType() {
			return Ni
		}
		static get NAME() {
			return "offcanvas"
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			this._isShown || p.trigger(this._element, "show.bs.offcanvas", {
				relatedTarget: t
			}).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Ai).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Mi), this._queueCallback(() => {
				this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add("show"), this._element.classList.remove(Mi), p.trigger(this._element, "shown.bs.offcanvas", {
					relatedTarget: t
				})
			}, this._element, !0))
		}
		hide() {
			!this._isShown || p.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add("hiding"), this._backdrop.hide(), this._queueCallback(() => {
				this._element.classList.remove("show", "hiding"), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Ai).reset(), p.trigger(this._element, zi)
			}, this._element, !0))
		}
		dispose() {
			this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
		}
		_initializeBackDrop() {
			var t = Boolean(this._config.backdrop);
			return new gi({
				className: "offcanvas-backdrop",
				isVisible: t,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				clickCallback: t ? () => {
					"static" !== this._config.backdrop ? this.hide() : p.trigger(this._element, Di)
				} : null
			})
		}
		_initializeFocusTrap() {
			return new bi({
				trapElement: this._element
			})
		}
		_addEventListeners() {
			p.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
				"Escape" === t.key && (this._config.keyboard ? this.hide() : p.trigger(this._element, Di))
			})
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = D.getOrCreateInstance(this, e);
				if ("string" == typeof e) {
					if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
					t[e](this)
				}
			})
		}
	}
	p.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
		var e = d.getElementFromSelector(this);
		["A", "AREA"].includes(this.tagName) && t.preventDefault(), r(this) || (p.one(e, zi, () => {
			n(this) && this.focus()
		}), (t = d.findOne(Oi)) && t !== e && D.getInstance(t).hide(), D.getOrCreateInstance(e).toggle(this))
	}), p.on(window, "load.bs.offcanvas.data-api", () => {
		for (const t of d.find(Oi)) D.getOrCreateInstance(t).show()
	}), p.on(window, "resize.bs.offcanvas", () => {
		for (const t of d.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && D.getOrCreateInstance(t).hide()
	}), ut(D), t(D);
	const Fi = {
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
			img: ["src", "srcset", "alt", "title", "width", "height"],
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
		},
		Ri = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
		Hi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
		Yi = {
			allowList: Fi,
			content: {},
			extraClass: "",
			html: !1,
			sanitize: !0,
			sanitizeFn: null,
			template: "<div></div>"
		},
		Wi = {
			allowList: "object",
			content: "object",
			extraClass: "(string|function)",
			html: "boolean",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			template: "string"
		},
		Bi = {
			entry: "(string|element|function|null)",
			selector: "(string|element)"
		};
	class ji extends ht {
		constructor(t) {
			super(), this._config = this._getConfig(t)
		}
		static get Default() {
			return Yi
		}
		static get DefaultType() {
			return Wi
		}
		static get NAME() {
			return "TemplateFactory"
		}
		getContent() {
			return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean)
		}
		hasContent() {
			return 0 < this.getContent().length
		}
		changeContent(t) {
			return this._checkContent(t), this._config.content = {
				...this._config.content,
				...t
			}, this
		}
		toHtml() {
			var t = document.createElement("div");
			t.innerHTML = this._maybeSanitize(this._config.template);
			for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
			const e = t.children[0],
				i = this._resolvePossibleFunction(this._config.extraClass);
			return i && e.classList.add(...i.split(" ")), e
		}
		_typeCheckConfig(t) {
			super._typeCheckConfig(t), this._checkContent(t.content)
		}
		_checkContent(t) {
			for (var [e, i] of Object.entries(t)) super._typeCheckConfig({
				selector: e,
				entry: i
			}, Bi)
		}
		_setContent(t, e, i) {
			i = d.findOne(i, t);
			i && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(a(e), i) : this._config.html ? i.innerHTML = this._maybeSanitize(e) : i.textContent = e : i.remove())
		}
		_maybeSanitize(t) {
			if (this._config.sanitize) {
				var e = t,
					i = this._config.allowList,
					s = this._config.sanitizeFn;
				if (!e.length) return e;
				if (s && "function" == typeof s) return s(e);
				const a = (new window.DOMParser).parseFromString(e, "text/html"),
					n = [].concat(...a.body.querySelectorAll("*"));
				for (const e of n) {
					const s = e.nodeName.toLowerCase();
					if (Object.keys(i).includes(s)) {
						const a = [].concat(...e.attributes),
							n = [].concat(i["*"] || [], i[s] || []);
						for (const i of a)((t, e) => {
							const i = t.nodeName.toLowerCase();
							return e.includes(i) ? !Ri.has(i) || Boolean(Hi.test(t.nodeValue)) : e.filter(t => t instanceof RegExp).some(t => t.test(i))
						})(i, n) || e.removeAttribute(i.nodeName)
					} else e.remove()
				}
				return a.body.innerHTML
			}
			return t
		}
		_resolvePossibleFunction(t) {
			return c(t, [this])
		}
		_putElementInTemplate(t, e) {
			this._config.html ? (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent
		}
	}
	const Vi = new Set(["sanitize", "allowList", "sanitizeFn"]),
		Gi = "fade",
		qi = "show",
		Ui = "hide.bs.modal",
		Zi = "hover",
		$i = "focus",
		Qi = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: l() ? "left" : "right",
			BOTTOM: "bottom",
			LEFT: l() ? "right" : "left"
		},
		Ki = {
			allowList: Fi,
			animation: !0,
			boundary: "clippingParents",
			container: !1,
			customClass: "",
			delay: 0,
			fallbackPlacements: ["top", "right", "bottom", "left"],
			html: !1,
			offset: [0, 6],
			placement: "top",
			popperConfig: null,
			sanitize: !0,
			sanitizeFn: null,
			selector: !1,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			title: "",
			trigger: "hover focus"
		},
		Ji = {
			allowList: "object",
			animation: "boolean",
			boundary: "(string|element)",
			container: "(string|element|boolean)",
			customClass: "(string|function)",
			delay: "(number|object)",
			fallbackPlacements: "array",
			html: "boolean",
			offset: "(array|string|function)",
			placement: "(string|function)",
			popperConfig: "(null|object|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			selector: "(string|boolean)",
			template: "string",
			title: "(string|element|function)",
			trigger: "string"
		};
	class ts extends e {
		constructor(t, e) {
			if (void 0 === Ge) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
			super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
		}
		static get Default() {
			return Ki
		}
		static get DefaultType() {
			return Ji
		}
		static get NAME() {
			return "tooltip"
		}
		enable() {
			this._isEnabled = !0
		}
		disable() {
			this._isEnabled = !1
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled
		}
		toggle() {
			this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
		}
		dispose() {
			clearTimeout(this._timeout), p.off(this._element.closest(".modal"), Ui, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
		}
		show() {
			if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
			if (this._isWithContent() && this._isEnabled) {
				const i = p.trigger(this._element, this.constructor.eventName("show")),
					s = (H(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
				if (!i.defaultPrevented && s) {
					this._disposePopper();
					var t = this._getTipElement(),
						e = (this._element.setAttribute("aria-describedby", t.getAttribute("id")), this._config)["container"];
					if (this._element.ownerDocument.documentElement.contains(this.tip) || (e.append(t), p.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(t), t.classList.add(qi), "ontouchstart" in document.documentElement)
						for (const i of [].concat(...document.body.children)) p.on(i, "mouseover", Y);
					this._queueCallback(() => {
						p.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
					}, this.tip, this._isAnimated())
				}
			}
		}
		hide() {
			if (this._isShown() && !p.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
				if (this._getTipElement().classList.remove(qi), "ontouchstart" in document.documentElement)
					for (const t of [].concat(...document.body.children)) p.off(t, "mouseover", Y);
				this._activeTrigger.click = !1, this._activeTrigger[$i] = !1, this._activeTrigger[Zi] = !1, this._isHovered = null, this._queueCallback(() => {
					this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), p.trigger(this._element, this.constructor.eventName("hidden")))
				}, this.tip, this._isAnimated())
			}
		}
		update() {
			this._popper && this._popper.update()
		}
		_isWithContent() {
			return Boolean(this._getTitle())
		}
		_getTipElement() {
			return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
		}
		_createTipElement(t) {
			t = this._getTemplateFactory(t).toHtml();
			if (!t) return null;
			t.classList.remove(Gi, qi), t.classList.add(`bs-${this.constructor.NAME}-auto`);
			var e = (t => {
				for (; t += Math.floor(1e6 * Math.random()), document.getElementById(t););
				return t
			})(this.constructor.NAME).toString();
			return t.setAttribute("id", e), this._isAnimated() && t.classList.add(Gi), t
		}
		setContent(t) {
			this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
		}
		_getTemplateFactory(t) {
			return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new ji({
				...this._config,
				content: t,
				extraClass: this._resolvePossibleFunction(this._config.customClass)
			}), this._templateFactory
		}
		_getContentForTemplate() {
			return {
				".tooltip-inner": this._getTitle()
			}
		}
		_getTitle() {
			return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
		}
		_initializeOnDelegatedTarget(t) {
			return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
		}
		_isAnimated() {
			return this._config.animation || this.tip && this.tip.classList.contains(Gi)
		}
		_isShown() {
			return this.tip && this.tip.classList.contains(qi)
		}
		_createPopper(t) {
			var e = c(this._config.placement, [this, t, this._element]),
				e = Qi[e.toUpperCase()];
			return Ve(this._element, t, this._getPopperConfig(e))
		}
		_getOffset() {
			const e = this._config["offset"];
			return "string" == typeof e ? e.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof e ? t => e(t, this._element) : e
		}
		_resolvePossibleFunction(t) {
			return c(t, [this._element])
		}
		_getPopperConfig(t) {
			t = {
				placement: t,
				modifiers: [{
					name: "flip",
					options: {
						fallbackPlacements: this._config.fallbackPlacements
					}
				}, {
					name: "offset",
					options: {
						offset: this._getOffset()
					}
				}, {
					name: "preventOverflow",
					options: {
						boundary: this._config.boundary
					}
				}, {
					name: "arrow",
					options: {
						element: `.${this.constructor.NAME}-arrow`
					}
				}, {
					name: "preSetPlacement",
					enabled: !0,
					phase: "beforeMain",
					fn: t => {
						this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
					}
				}]
			};
			return {
				...t,
				...c(this._config.popperConfig, [t])
			}
		}
		_setListeners() {
			const t = this._config.trigger.split(" ");
			for (const e of t)
				if ("click" === e) p.on(this._element, this.constructor.eventName("click"), this._config.selector, t => {
					this._initializeOnDelegatedTarget(t).toggle()
				});
				else if ("manual" !== e) {
				const t = e === Zi ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
					i = e === Zi ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
				p.on(this._element, t, this._config.selector, t => {
					var e = this._initializeOnDelegatedTarget(t);
					e._activeTrigger["focusin" === t.type ? $i : Zi] = !0, e._enter()
				}), p.on(this._element, i, this._config.selector, t => {
					var e = this._initializeOnDelegatedTarget(t);
					e._activeTrigger["focusout" === t.type ? $i : Zi] = e._element.contains(t.relatedTarget), e._leave()
				})
			}
			this._hideModalHandler = () => {
				this._element && this.hide()
			}, p.on(this._element.closest(".modal"), Ui, this._hideModalHandler)
		}
		_fixTitle() {
			var t = this._element.getAttribute("title");
			t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
		}
		_enter() {
			this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
				this._isHovered && this.show()
			}, this._config.delay.show))
		}
		_leave() {
			this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
				this._isHovered || this.hide()
			}, this._config.delay.hide))
		}
		_setTimeout(t, e) {
			clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
		}
		_isWithActiveTrigger() {
			return Object.values(this._activeTrigger).includes(!0)
		}
		_getConfig(t) {
			var e = h.getDataAttributes(this._element);
			for (const t of Object.keys(e)) Vi.has(t) && delete e[t];
			return t = {
				...e,
				..."object" == typeof t && t ? t : {}
			}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		_configAfterMerge(t) {
			return t.container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
				show: t.delay,
				hide: t.delay
			}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
		}
		_getDelegateConfig() {
			var t, e, i = {};
			for ([t, e] of Object.entries(this._config)) this.constructor.Default[t] !== e && (i[t] = e);
			return i.selector = !1, i.trigger = "manual", i
		}
		_disposePopper() {
			this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = ts.getOrCreateInstance(this, e);
				if ("string" == typeof e) {
					if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
					t[e]()
				}
			})
		}
	}
	t(ts);
	const es = {
			...ts.Default,
			content: "",
			offset: [0, 8],
			placement: "right",
			template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			trigger: "click"
		},
		is = {
			...ts.DefaultType,
			content: "(null|string|element|function)"
		};
	class ss extends ts {
		static get Default() {
			return es
		}
		static get DefaultType() {
			return is
		}
		static get NAME() {
			return "popover"
		}
		_isWithContent() {
			return this._getTitle() || this._getContent()
		}
		_getContentForTemplate() {
			return {
				".popover-header": this._getTitle(),
				".popover-body": this._getContent()
			}
		}
		_getContent() {
			return this._resolvePossibleFunction(this._config.content)
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = ss.getOrCreateInstance(this, e);
				if ("string" == typeof e) {
					if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
					t[e]()
				}
			})
		}
	}
	t(ss);
	const as = ".bs.scrollspy",
		ns = "click" + as,
		os = "active",
		rs = "[href]",
		ls = {
			offset: null,
			rootMargin: "0px 0px -25%",
			smoothScroll: !1,
			target: null,
			threshold: [.1, .5, 1]
		},
		cs = {
			offset: "(number|null)",
			rootMargin: "string",
			smoothScroll: "boolean",
			target: "element",
			threshold: "array"
		};
	class hs extends e {
		constructor(t, e) {
			super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
				visibleEntryTop: 0,
				parentScrollTop: 0
			}, this.refresh()
		}
		static get Default() {
			return ls
		}
		static get DefaultType() {
			return cs
		}
		static get NAME() {
			return "scrollspy"
		}
		refresh() {
			this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
			for (const t of this._observableSections.values()) this._observer.observe(t)
		}
		dispose() {
			this._observer.disconnect(), super.dispose()
		}
		_configAfterMerge(t) {
			return t.target = a(t.target) || document.body, t.rootMargin = t.offset ? t.offset + "px 0px -30%" : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(t => Number.parseFloat(t))), t
		}
		_maybeEnableSmoothScroll() {
			this._config.smoothScroll && (p.off(this._config.target, ns), p.on(this._config.target, ns, rs, t => {
				var e = this._observableSections.get(t.target.hash);
				e && (t.preventDefault(), t = this._rootElement || window, e = e.offsetTop - this._element.offsetTop, t.scrollTo ? t.scrollTo({
					top: e,
					behavior: "smooth"
				}) : t.scrollTop = e)
			}))
		}
		_getNewObserver() {
			var t = {
				root: this._rootElement,
				threshold: this._config.threshold,
				rootMargin: this._config.rootMargin
			};
			return new IntersectionObserver(t => this._observerCallback(t), t)
		}
		_observerCallback(t) {
			const e = t => this._targetLinks.get("#" + t.target.id),
				i = t => {
					this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
				},
				s = (this._rootElement || document.documentElement).scrollTop,
				a = s >= this._previousScrollData.parentScrollTop;
			this._previousScrollData.parentScrollTop = s;
			for (const n of t)
				if (n.isIntersecting) {
					const t = n.target.offsetTop >= this._previousScrollData.visibleEntryTop;
					if (a && t) {
						if (i(n), !s) return
					} else a || t || i(n)
				} else this._activeTarget = null, this._clearActiveClass(e(n))
		}
		_initializeTargetsAndObservables() {
			this._targetLinks = new Map, this._observableSections = new Map;
			const t = d.find(rs, this._config.target);
			for (const e of t)
				if (e.hash && !r(e)) {
					const t = d.findOne(decodeURI(e.hash), this._element);
					n(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t))
				}
		}
		_process(t) {
			this._activeTarget !== t && (this._clearActiveClass(this._config.target), (this._activeTarget = t).classList.add(os), this._activateParents(t), p.trigger(this._element, "activate.bs.scrollspy", {
				relatedTarget: t
			}))
		}
		_activateParents(t) {
			if (t.classList.contains("dropdown-item")) d.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(os);
			else
				for (const e of d.parents(t, ".nav, .list-group"))
					for (const t of d.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(os)
		}
		_clearActiveClass(t) {
			t.classList.remove(os);
			var e = d.find(rs + "." + os, t);
			for (const t of e) t.classList.remove(os)
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = hs.getOrCreateInstance(this, e);
				if ("string" == typeof e) {
					if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
					t[e]()
				}
			})
		}
	}
	p.on(window, "load.bs.scrollspy.data-api", () => {
		for (const t of d.find('[data-bs-spy="scroll"]')) hs.getOrCreateInstance(t)
	}), t(hs);
	const ds = "ArrowRight",
		us = "ArrowDown",
		gs = "Home",
		z = "active",
		ps = "show",
		fs = ":not(.dropdown-toggle)",
		xs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
		ms = `.nav-link${fs}, .list-group-item${fs}, [role="tab"]${fs}, ` + xs;
	z, z, z;
	class bs extends e {
		constructor(t) {
			super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), p.on(this._element, "keydown.bs.tab", t => this._keydown(t)))
		}
		static get NAME() {
			return "tab"
		}
		show() {
			var t, e, i = this._element;
			this._elemIsActive(i) || (e = (t = this._getActiveElem()) ? p.trigger(t, "hide.bs.tab", {
				relatedTarget: i
			}) : null, p.trigger(i, "show.bs.tab", {
				relatedTarget: t
			}).defaultPrevented) || e && e.defaultPrevented || (this._deactivate(t, i), this._activate(i, t))
		}
		_activate(t, e) {
			t && (t.classList.add(z), this._activate(d.getElementFromSelector(t)), this._queueCallback(() => {
				"tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), p.trigger(t, "shown.bs.tab", {
					relatedTarget: e
				})) : t.classList.add(ps)
			}, t, t.classList.contains("fade")))
		}
		_deactivate(t, e) {
			t && (t.classList.remove(z), t.blur(), this._deactivate(d.getElementFromSelector(t)), this._queueCallback(() => {
				"tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), p.trigger(t, "hidden.bs.tab", {
					relatedTarget: e
				})) : t.classList.remove(ps)
			}, t, t.classList.contains("fade")))
		}
		_keydown(e) {
			if (["ArrowLeft", ds, "ArrowUp", us, gs, "End"].includes(e.key)) {
				e.stopPropagation(), e.preventDefault();
				var i, s = this._getChildren().filter(t => !r(t));
				let t;
				(t = [gs, "End"].includes(e.key) ? s[e.key === gs ? 0 : s.length - 1] : (i = [ds, us].includes(e.key), G(s, e.target, i, !0))) && (t.focus({
					preventScroll: !0
				}), bs.getOrCreateInstance(t).show())
			}
		}
		_getChildren() {
			return d.find(ms, this._parent)
		}
		_getActiveElem() {
			return this._getChildren().find(t => this._elemIsActive(t)) || null
		}
		_setInitialAttributes(t, e) {
			this._setAttributeIfNotExists(t, "role", "tablist");
			for (const t of e) this._setInitialAttributesOnChild(t)
		}
		_setInitialAttributesOnChild(t) {
			t = this._getInnerElement(t);
			var e = this._elemIsActive(t),
				i = this._getOuterElement(t);
			t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
		}
		_setInitialAttributesOnTargetPanel(t) {
			var e = d.getElementFromSelector(t);
			e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id) && this._setAttributeIfNotExists(e, "aria-labelledby", "" + t.id)
		}
		_toggleDropDown(t, i) {
			const s = this._getOuterElement(t);
			s.classList.contains("dropdown") && ((t = (t, e) => {
				t = d.findOne(t, s);
				t && t.classList.toggle(e, i)
			})(".dropdown-toggle", z), t(".dropdown-menu", ps), s.setAttribute("aria-expanded", i))
		}
		_setAttributeIfNotExists(t, e, i) {
			t.hasAttribute(e) || t.setAttribute(e, i)
		}
		_elemIsActive(t) {
			return t.classList.contains(z)
		}
		_getInnerElement(t) {
			return t.matches(ms) ? t : d.findOne(ms, t)
		}
		_getOuterElement(t) {
			return t.closest(".nav-item, .list-group-item") || t
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = bs.getOrCreateInstance(this);
				if ("string" == typeof e) {
					if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
					t[e]()
				}
			})
		}
	}
	p.on(document, "click.bs.tab", xs, function(t) {
		["A", "AREA"].includes(this.tagName) && t.preventDefault(), r(this) || bs.getOrCreateInstance(this).show()
	}), p.on(window, "load.bs.tab", () => {
		for (const t of d.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) bs.getOrCreateInstance(t)
	}), t(bs);
	const vs = "show",
		ys = "showing",
		ws = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		ks = {
			animation: !0,
			autohide: !0,
			delay: 5e3
		};
	class As extends e {
		constructor(t, e) {
			super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
		}
		static get Default() {
			return ks
		}
		static get DefaultType() {
			return ws
		}
		static get NAME() {
			return "toast"
		}
		show() {
			p.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), W(this._element), this._element.classList.add(vs, ys), this._queueCallback(() => {
				this._element.classList.remove(ys), p.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
			}, this._element, this._config.animation))
		}
		hide() {
			!this.isShown() || p.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ys), this._queueCallback(() => {
				this._element.classList.add("hide"), this._element.classList.remove(ys, vs), p.trigger(this._element, "hidden.bs.toast")
			}, this._element, this._config.animation))
		}
		dispose() {
			this._clearTimeout(), this.isShown() && this._element.classList.remove(vs), super.dispose()
		}
		isShown() {
			return this._element.classList.contains(vs)
		}
		_maybeScheduleHide() {
			!this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
				this.hide()
			}, this._config.delay))
		}
		_onInteraction(t, e) {
			switch (t.type) {
				case "mouseover":
				case "mouseout":
					this._hasMouseInteraction = e;
					break;
				case "focusin":
				case "focusout":
					this._hasKeyboardInteraction = e
			}
			e ? this._clearTimeout() : (t = t.relatedTarget, this._element === t || this._element.contains(t) || this._maybeScheduleHide())
		}
		_setListeners() {
			p.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), p.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), p.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), p.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
		}
		_clearTimeout() {
			clearTimeout(this._timeout), this._timeout = null
		}
		static jQueryInterface(e) {
			return this.each(function() {
				var t = As.getOrCreateInstance(this, e);
				if ("string" == typeof e) {
					if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
					t[e](this)
				}
			})
		}
	}
	return ut(As), t(As), {
		Alert: gt,
		Button: ft,
		Carousel: _t,
		Collapse: Xt,
		Dropdown: C,
		Modal: _i,
		Offcanvas: D,
		Popover: ss,
		ScrollSpy: hs,
		Tab: bs,
		Toast: As,
		Tooltip: ts
	}
}),
function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ApexCharts = e()
}(this, function() {
	"use strict";

	function X(e, t) {
		var i, s = Object.keys(e);
		return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), t && (i = i.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable
		})), s.push.apply(s, i)), s
	}

	function P(e) {
		for (var t = 1; t < arguments.length; t++) {
			var i = null != arguments[t] ? arguments[t] : {};
			t % 2 ? X(Object(i), !0).forEach(function(t) {
				_(e, t, i[t])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : X(Object(i)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
			})
		}
		return e
	}

	function v(t) {
		return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function s(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function N(t, e) {
		for (var i = 0; i < e.length; i++) {
			var s = e[i];
			s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
		}
	}

	function t(t, e, i) {
		e && N(t.prototype, e), i && N(t, i)
	}

	function _(t, e, i) {
		return e in t ? Object.defineProperty(t, e, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = i, t
	}

	function e(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				writable: !0,
				configurable: !0
			}
		}), e && R(t, e)
	}

	function F(t) {
		return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function R(t, e) {
		return (R = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function i(i) {
		var s = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var t, e = F(i),
				e = (t = s ? (t = F(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), this);
			if (!t || "object" != typeof t && "function" != typeof t) {
				if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
				if (void 0 === (t = e)) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
			}
			return t
		}
	}

	function H(t, e) {
		return function(t) {
			if (Array.isArray(t)) return t
		}(t) || function(t, e) {
			var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
			if (null != i) {
				var s, a, n = [],
					o = !0,
					r = !1;
				try {
					for (i = i.call(t); !(o = (s = i.next()).done) && (n.push(s.value), !e || n.length !== e); o = !0);
				} catch (t) {
					r = !0, a = t
				} finally {
					try {
						o || null == i.return || i.return()
					} finally {
						if (r) throw a
					}
				}
				return n
			}
		}(t, e) || Y(t, e) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function b(t) {
		return function(t) {
			if (Array.isArray(t)) return W(t)
		}(t) || function() {
			if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
		}() || Y(t) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function Y(t, e) {
		var i;
		if (t) return "string" == typeof t ? W(t, e) : "Map" === (i = "Object" === (i = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? W(t, e) : void 0
	}

	function W(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
		return s
	}
	t(n, [{
		key: "shadeRGBColor",
		value: function(t, e) {
			var e = e.split(","),
				i = t < 0 ? 0 : 255,
				t = t < 0 ? -1 * t : t,
				s = parseInt(e[0].slice(4), 10),
				a = parseInt(e[1], 10),
				e = parseInt(e[2], 10);
			return "rgb(" + (Math.round((i - s) * t) + s) + "," + (Math.round((i - a) * t) + a) + "," + (Math.round((i - e) * t) + e) + ")"
		}
	}, {
		key: "shadeHexColor",
		value: function(t, e) {
			var e = parseInt(e.slice(1), 16),
				i = t < 0 ? 0 : 255,
				t = t < 0 ? -1 * t : t,
				s = e >> 16,
				a = e >> 8 & 255,
				e = 255 & e;
			return "#" + (16777216 + 65536 * (Math.round((i - s) * t) + s) + 256 * (Math.round((i - a) * t) + a) + (Math.round((i - e) * t) + e)).toString(16).slice(1)
		}
	}, {
		key: "shadeColor",
		value: function(t, e) {
			return n.isColorHex(e) ? this.shadeHexColor(t, e) : this.shadeRGBColor(t, e)
		}
	}], [{
		key: "bind",
		value: function(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		}
	}, {
		key: "isObject",
		value: function(t) {
			return t && "object" === v(t) && !Array.isArray(t) && null != t
		}
	}, {
		key: "is",
		value: function(t, e) {
			return Object.prototype.toString.call(e) === "[object " + t + "]"
		}
	}, {
		key: "listToArray",
		value: function(t) {
			for (var e = [], i = 0; i < t.length; i++) e[i] = t[i];
			return e
		}
	}, {
		key: "extend",
		value: function(e, i) {
			var s = this,
				a = ("function" != typeof Object.assign && (Object.assign = function(t) {
					if (null == t) throw new TypeError("Cannot convert undefined or null to object");
					for (var e = Object(t), i = 1; i < arguments.length; i++) {
						var s = arguments[i];
						if (null != s)
							for (var a in s) s.hasOwnProperty(a) && (e[a] = s[a])
					}
					return e
				}), Object.assign({}, e));
			return this.isObject(e) && this.isObject(i) && Object.keys(i).forEach(function(t) {
				s.isObject(i[t]) && t in e ? a[t] = s.extend(e[t], i[t]) : Object.assign(a, _({}, t, i[t]))
			}), a
		}
	}, {
		key: "extendArray",
		value: function(t, e) {
			var i = [];
			return t.map(function(t) {
				i.push(n.extend(e, t))
			}), i
		}
	}, {
		key: "monthMod",
		value: function(t) {
			return t % 12
		}
	}, {
		key: "clone",
		value: function(t) {
			if (n.is("Array", t)) {
				for (var e = [], i = 0; i < t.length; i++) e[i] = this.clone(t[i]);
				return e
			}
			if (n.is("Null", t)) return null;
			if (n.is("Date", t)) return t;
			if ("object" !== v(t)) return t;
			var s, a = {};
			for (s in t) t.hasOwnProperty(s) && (a[s] = this.clone(t[s]));
			return a
		}
	}, {
		key: "log10",
		value: function(t) {
			return Math.log(t) / Math.LN10
		}
	}, {
		key: "roundToBase10",
		value: function(t) {
			return Math.pow(10, Math.floor(Math.log10(t)))
		}
	}, {
		key: "roundToBase",
		value: function(t, e) {
			return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
		}
	}, {
		key: "parseNumber",
		value: function(t) {
			return null === t ? t : parseFloat(t)
		}
	}, {
		key: "stripNumber",
		value: function(t) {
			return parseFloat(t.toPrecision(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2))
		}
	}, {
		key: "randomId",
		value: function() {
			return (Math.random() + 1).toString(36).substring(4)
		}
	}, {
		key: "noExponents",
		value: function(t) {
			var e = String(t).split(/[eE]/);
			if (1 === e.length) return e[0];
			var i = "",
				t = t < 0 ? "-" : "",
				s = e[0].replace(".", ""),
				a = Number(e[1]) + 1;
			if (a < 0) {
				for (i = t + "0."; a++;) i += "0";
				return i + s.replace(/^-/, "")
			}
			for (a -= s.length; a--;) i += "0";
			return s + i
		}
	}, {
		key: "getDimensions",
		value: function(t) {
			var e = getComputedStyle(t, null),
				i = t.clientHeight,
				t = t.clientWidth;
			return i -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), [t -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i]
		}
	}, {
		key: "getBoundingClientRect",
		value: function(t) {
			var e = t.getBoundingClientRect();
			return {
				top: e.top,
				right: e.right,
				bottom: e.bottom,
				left: e.left,
				width: t.clientWidth,
				height: t.clientHeight,
				x: e.left,
				y: e.top
			}
		}
	}, {
		key: "getLargestStringFromArr",
		value: function(t) {
			return t.reduce(function(t, e) {
				return Array.isArray(e) && (e = e.reduce(function(t, e) {
					return t.length > e.length ? t : e
				})), t.length > e.length ? t : e
			}, 0)
		}
	}, {
		key: "hexToRgba",
		value: function() {
			for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "#999999", e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .6, i = (i = (t = "#" !== t.substring(0, 1) ? "#999999" : t).replace("#", "")).match(new RegExp("(.{" + i.length / 3 + "})", "g")), s = 0; s < i.length; s++) i[s] = parseInt(1 === i[s].length ? i[s] + i[s] : i[s], 16);
			return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")"
		}
	}, {
		key: "getOpacityFromRGBA",
		value: function(t) {
			return parseFloat(t.replace(/^.*,(.+)\)/, "$1"))
		}
	}, {
		key: "rgb2hex",
		value: function(t) {
			return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
		}
	}, {
		key: "isColorHex",
		value: function(t) {
			return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)
		}
	}, {
		key: "getPolygonPos",
		value: function(t, e) {
			for (var i = [], s = 2 * Math.PI / e, a = 0; a < e; a++) {
				var n = {};
				n.x = t * Math.sin(a * s), n.y = -t * Math.cos(a * s), i.push(n)
			}
			return i
		}
	}, {
		key: "polarToCartesian",
		value: function(t, e, i, s) {
			s = (s - 90) * Math.PI / 180;
			return {
				x: t + i * Math.cos(s),
				y: e + i * Math.sin(s)
			}
		}
	}, {
		key: "escapeString",
		value: function(t) {
			var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "x",
				t = t.toString().slice();
			return t.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e)
		}
	}, {
		key: "negToZero",
		value: function(t) {
			return t < 0 ? 0 : t
		}
	}, {
		key: "moveIndexInArray",
		value: function(t, e, i) {
			if (i >= t.length)
				for (var s = i - t.length + 1; s--;) t.push(void 0);
			return t.splice(i, 0, t.splice(e, 1)[0]), t
		}
	}, {
		key: "extractNumber",
		value: function(t) {
			return parseFloat(t.replace(/[^\d.]*/g, ""))
		}
	}, {
		key: "findAncestor",
		value: function(t, e) {
			for (;
				(t = t.parentElement) && !t.classList.contains(e););
			return t
		}
	}, {
		key: "setELstyles",
		value: function(t, e) {
			for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
		}
	}, {
		key: "isNumber",
		value: function(t) {
			return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
		}
	}, {
		key: "isFloat",
		value: function(t) {
			return Number(t) === t && t % 1 != 0
		}
	}, {
		key: "isSafari",
		value: function() {
			return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
		}
	}, {
		key: "isFirefox",
		value: function() {
			return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
		}
	}, {
		key: "isIE11",
		value: function() {
			if (-1 !== window.navigator.userAgent.indexOf("MSIE") || -1 < window.navigator.appVersion.indexOf("Trident/")) return !0
		}
	}, {
		key: "isIE",
		value: function() {
			var t = window.navigator.userAgent,
				e = t.indexOf("MSIE ");
			return 0 < e ? parseInt(t.substring(e + 5, t.indexOf(".", e)), 10) : 0 < t.indexOf("Trident/") ? (e = t.indexOf("rv:"), parseInt(t.substring(e + 3, t.indexOf(".", e)), 10)) : 0 < (e = t.indexOf("Edge/")) && parseInt(t.substring(e + 5, t.indexOf(".", e)), 10)
		}
	}]);
	var O = n,
		A = (t(tt, [{
			key: "setEasingFunctions",
			value: function() {
				var t;
				if (!this.w.globals.easing) {
					switch (this.w.config.chart.animations.easing) {
						case "linear":
							t = "-";
							break;
						case "easein":
							t = "<";
							break;
						case "easeout":
							t = ">";
							break;
						case "easeinout":
						default:
							t = "<>";
							break;
						case "swing":
							t = function(t) {
								return --t * t * (2.70158 * t + 1.70158) + 1
							};
							break;
						case "bounce":
							t = function(t) {
								return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
							};
							break;
						case "elastic":
							t = function(t) {
								return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
							}
					}
					this.w.globals.easing = t
				}
			}
		}, {
			key: "animateLine",
			value: function(t, e, i, s) {
				t.attr(e).animate(s).attr(i)
			}
		}, {
			key: "animateMarker",
			value: function(t, e, i, s, a, n) {
				t.attr({
					r: e = e || 0,
					width: e,
					height: e
				}).animate(s, a).attr({
					r: i,
					width: i.width,
					height: i.height
				}).afterAll(function() {
					n()
				})
			}
		}, {
			key: "animateCircle",
			value: function(t, e, i, s, a) {
				t.attr({
					r: e.r,
					cx: e.cx,
					cy: e.cy
				}).animate(s, a).attr({
					r: i.r,
					cx: i.cx,
					cy: i.cy
				})
			}
		}, {
			key: "animateRect",
			value: function(t, e, i, s, a) {
				t.attr(e).animate(s).attr(i).afterAll(function() {
					return a()
				})
			}
		}, {
			key: "animatePathsGradually",
			value: function(t) {
				var e = t.el,
					i = t.realIndex,
					s = t.j,
					a = t.fill,
					n = t.pathFrom,
					o = t.pathTo,
					r = t.speed,
					t = t.delay,
					l = this.w,
					c = 0;
				l.config.chart.animations.animateGradually.enabled && (c = l.config.chart.animations.animateGradually.delay), l.config.chart.animations.dynamicAnimation.enabled && l.globals.dataChanged && "bar" !== l.config.chart.type && (c = 0), this.morphSVG(e, i, s, "line" !== l.config.chart.type || l.globals.comboCharts ? a : "stroke", n, o, r, t * c)
			}
		}, {
			key: "showDelayedElements",
			value: function() {
				this.w.globals.delayedElements.forEach(function(t) {
					t = t.el;
					t.classList.remove("apexcharts-element-hidden"), t.classList.add("apexcharts-hidden-element-shown")
				})
			}
		}, {
			key: "animationCompleted",
			value: function(t) {
				var e = this.w;
				e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), "function" == typeof e.config.chart.events.animationEnd && e.config.chart.events.animationEnd(this.ctx, {
					el: t,
					w: e
				}))
			}
		}, {
			key: "morphSVG",
			value: function(t, e, i, s, a, n, o, r) {
				function l(t) {
					return "radar" === h.config.chart.type && (o = 1), "M 0 ".concat(h.globals.gridHeight)
				}
				var c = this,
					h = this.w;
				a = a || t.attr("pathFrom"), n = n || t.attr("pathTo");
				(!a || -1 < a.indexOf("undefined") || -1 < a.indexOf("NaN")) && (a = l()), (!n || -1 < n.indexOf("undefined") || -1 < n.indexOf("NaN")) && (n = l()), h.globals.shouldAnimate || (o = 1), t.plot(a).animate(1, h.globals.easing, r).plot(a).animate(o, h.globals.easing, r).plot(n).afterAll(function() {
					O.isNumber(i) ? i === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && c.animationCompleted(t) : "none" !== s && h.globals.shouldAnimate && (!h.globals.comboCharts && e === h.globals.series.length - 1 || h.globals.comboCharts) && c.animationCompleted(t), c.showDelayedElements()
				})
			}
		}]), tt),
		L = (t(J, [{
			key: "getDefaultFilter",
			value: function(t, e) {
				var i = this.w;
				t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
			}
		}, {
			key: "addNormalFilter",
			value: function(t, e) {
				var i = this.w;
				i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e)
			}
		}, {
			key: "addLightenFilter",
			value: function(t, i, e) {
				var s = this,
					a = this.w,
					n = e.intensity;
				t.unfilter(!0), new window.SVG.Filter, t.filter(function(t) {
					var e = a.config.chart.dropShadow;
					(e.enabled ? s.addShadow(t, i, e) : t).componentTransfer({
						rgb: {
							type: "linear",
							slope: 1.5,
							intercept: n
						}
					})
				}), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
			}
		}, {
			key: "addDarkenFilter",
			value: function(t, i, e) {
				var s = this,
					a = this.w,
					n = e.intensity;
				t.unfilter(!0), new window.SVG.Filter, t.filter(function(t) {
					var e = a.config.chart.dropShadow;
					(e.enabled ? s.addShadow(t, i, e) : t).componentTransfer({
						rgb: {
							type: "linear",
							slope: n
						}
					})
				}), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
			}
		}, {
			key: "applyFilter",
			value: function(t, e, i) {
				var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : .5;
				switch (i) {
					case "none":
						this.addNormalFilter(t, e);
						break;
					case "lighten":
						this.addLightenFilter(t, e, {
							intensity: s
						});
						break;
					case "darken":
						this.addDarkenFilter(t, e, {
							intensity: s
						})
				}
			}
		}, {
			key: "addShadow",
			value: function(t, e, i) {
				var s = i.blur,
					a = i.top,
					n = i.left,
					o = i.color,
					i = i.opacity,
					e = t.flood(Array.isArray(o) ? o[e] : o, i).composite(t.sourceAlpha, "in").offset(n, a).gaussianBlur(s).merge(t.source);
				return t.blend(t.source, e)
			}
		}, {
			key: "dropShadow",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
					s = e.top,
					a = e.left,
					n = e.blur,
					o = e.color,
					r = e.opacity,
					e = e.noUserSpaceOnUse,
					l = this.w;
				return t.unfilter(!0), O.isIE() && "radialBar" === l.config.chart.type || (o = Array.isArray(o) ? o[i] : o, t.filter(function(t) {
					var e = O.isSafari() || O.isFirefox() || O.isIE() ? t.flood(o, r).composite(t.sourceAlpha, "in").offset(a, s).gaussianBlur(n) : t.flood(o, r).composite(t.sourceAlpha, "in").offset(a, s).gaussianBlur(n).merge(t.source);
					t.blend(t.source, e)
				}), e || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t
			}
		}, {
			key: "setSelectionFilter",
			value: function(t, e, i) {
				var s = this.w;
				void 0 !== s.globals.selectedDataPoints[e] && -1 < s.globals.selectedDataPoints[e].indexOf(i) && (t.node.setAttribute("selected", !0), "none" !== (i = s.config.states.active.filter)) && this.applyFilter(t, e, i.type, i.value)
			}
		}, {
			key: "_scaleFilterSize",
			value: function(t) {
				var e, i = {
					width: "200%",
					height: "200%",
					x: "-50%",
					y: "-50%"
				};
				for (e in i) i.hasOwnProperty(e) && t.setAttribute(e, i[e])
			}
		}]), J),
		D = (t(K, [{
			key: "roundPathCorners",
			value: function(t, e) {
				function i(t, e, i) {
					var s = e.x - t.x,
						a = e.y - t.y,
						s = Math.sqrt(s * s + a * a);
					return n(t, e, Math.min(1, i / s))
				}

				function n(t, e, i) {
					return {
						x: t.x + (e.x - t.x) * i,
						y: t.y + (e.y - t.y) * i
					}
				}

				function s(t, e) {
					2 < t.length && (t[t.length - 2] = e.x, t[t.length - 1] = e.y)
				}

				function a(t) {
					return {
						x: parseFloat(t[t.length - 2]),
						y: parseFloat(t[t.length - 1])
					}
				}
				var o = (t = -1 < t.indexOf("NaN") ? "" : t).split(/[,\s]/).reduce(function(t, e) {
						var i = e.match("([a-zA-Z])(.+)");
						return i ? (t.push(i[1]), t.push(i[2])) : t.push(e), t
					}, []).reduce(function(t, e) {
						return parseFloat(e) == e && t.length ? t[t.length - 1].push(e) : t.push([e]), t
					}, []),
					r = [];
				if (1 < o.length) {
					var t = a(o[0]),
						l = null;
					"Z" == o[o.length - 1][0] && 2 < o[0].length && (l = ["L", t.x, t.y], o[o.length - 1] = l), r.push(o[0]);
					for (var c = 1; c < o.length; c++) {
						var h, d, u = r[r.length - 1],
							g = o[c],
							p = g == l ? o[1] : o[c + 1];
						p && u && 2 < u.length && "L" == g[0] && 2 < p.length && "L" == p[0] ? (u = a(u), h = a(g), p = a(p), u = i(h, u, e), p = i(h, p, e), s(g, u), g.origPoint = h, r.push(g), u = n(u, h, .5), d = n(h, p, .5), (u = ["C", u.x, u.y, d.x, d.y, p.x, p.y]).origPoint = h, r.push(u)) : r.push(g)
					}
					l && (t = a(r[r.length - 1]), r.push(["Z"]), s(r[0], t))
				} else r = o;
				return r.reduce(function(t, e) {
					return t + e.join(" ") + " "
				}, "")
			}
		}, {
			key: "drawLine",
			value: function(t, e, i, s) {
				var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
					n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
					o = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null,
					r = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : "butt";
				return this.w.globals.dom.Paper.line().attr({
					x1: t,
					y1: e,
					x2: i,
					y2: s,
					stroke: a,
					"stroke-dasharray": n,
					"stroke-width": o,
					"stroke-linecap": r
				})
			}
		}, {
			key: "drawRect",
			value: function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
					e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
					i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
					s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
					a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
					n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
					o = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 1,
					r = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null,
					l = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : null,
					c = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 0,
					h = this.w.globals.dom.Paper.rect();
				return h.attr({
					x: t,
					y: e,
					width: 0 < i ? i : 0,
					height: 0 < s ? s : 0,
					rx: a,
					ry: a,
					opacity: o,
					"stroke-width": null !== r ? r : 0,
					stroke: null !== l ? l : "none",
					"stroke-dasharray": c
				}), h.node.setAttribute("fill", n), h
			}
		}, {
			key: "drawPolygon",
			value: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1",
					i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
					s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "none";
				return this.w.globals.dom.Paper.polygon(t).attr({
					fill: s,
					stroke: e,
					"stroke-width": i
				})
			}
		}, {
			key: "drawCircle",
			value: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
					t = this.w.globals.dom.Paper.circle(2 * (t = t < 0 ? 0 : t));
				return null !== e && t.attr(e), t
			}
		}, {
			key: "drawPath",
			value: function(t) {
				var e = t.d,
					e = void 0 === e ? "" : e,
					i = t.stroke,
					i = void 0 === i ? "#a8a8a8" : i,
					s = t.strokeWidth,
					s = void 0 === s ? 1 : s,
					a = t.fill,
					n = t.fillOpacity,
					n = void 0 === n ? 1 : n,
					o = t.strokeOpacity,
					o = void 0 === o ? 1 : o,
					r = t.classes,
					l = t.strokeLinecap,
					l = void 0 === l ? null : l,
					t = t.strokeDashArray,
					t = void 0 === t ? 0 : t,
					c = this.w;
				return null === l && (l = c.config.stroke.lineCap), (-1 < e.indexOf("undefined") || -1 < e.indexOf("NaN")) && (e = "M 0 ".concat(c.globals.gridHeight)), c.globals.dom.Paper.path(e).attr({
					fill: a,
					"fill-opacity": n,
					stroke: i,
					"stroke-opacity": o,
					"stroke-linecap": l,
					"stroke-width": s,
					"stroke-dasharray": t,
					class: r
				})
			}
		}, {
			key: "group",
			value: function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
					e = this.w.globals.dom.Paper.group();
				return null !== t && e.attr(t), e
			}
		}, {
			key: "move",
			value: function(t, e) {
				return ["M", t, e].join(" ")
			}
		}, {
			key: "line",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
					s = null;
				return null === i ? s = [" L", t, e].join(" ") : "H" === i ? s = [" H", t].join(" ") : "V" === i && (s = [" V", e].join(" ")), s
			}
		}, {
			key: "curve",
			value: function(t, e, i, s, a, n) {
				return ["C", t, e, i, s, a, n].join(" ")
			}
		}, {
			key: "quadraticCurve",
			value: function(t, e, i, s) {
				return ["Q", t, e, i, s].join(" ")
			}
		}, {
			key: "arc",
			value: function(t, e, i, s, a, n, o) {
				var r = "A";
				return [r = 7 < arguments.length && void 0 !== arguments[7] && arguments[7] ? "a" : r, t, e, i, s, a, n, o].join(" ")
			}
		}, {
			key: "renderPaths",
			value: function(t) {
				var e = t.j,
					i = t.realIndex,
					s = t.pathFrom,
					a = t.pathTo,
					n = t.stroke,
					o = t.strokeWidth,
					r = t.strokeLinecap,
					l = t.fill,
					c = t.animationDelay,
					h = t.initialSpeed,
					d = t.dataChangeSpeed,
					u = t.className,
					g = t.shouldClipToGrid,
					g = void 0 === g || g,
					p = t.bindEventsOnPaths,
					p = void 0 === p || p,
					t = t.drawShadow,
					t = void 0 === t || t,
					f = this.w,
					x = new L(this.ctx),
					m = new A(this.ctx),
					b = this.w.config.chart.animations.enabled,
					v = b && this.w.config.chart.animations.dynamicAnimation.enabled,
					y = !!(b && !f.globals.resized || v && f.globals.dataChanged && f.globals.shouldAnimate),
					w = (y ? k = s : (k = a, f.globals.animationEnded = !0), f.config.stroke.dashArray),
					w = Array.isArray(w) ? w[i] : f.config.stroke.dashArray,
					k = this.drawPath({
						d: k,
						stroke: n,
						strokeWidth: o,
						fill: l,
						fillOpacity: 1,
						classes: u,
						strokeLinecap: r,
						strokeDashArray: w
					}),
					u = (k.attr("index", i), g && k.attr({
						"clip-path": "url(#gridRectMask".concat(f.globals.cuid, ")")
					}), "none" !== f.config.states.normal.filter.type ? x.getDefaultFilter(k, i) : f.config.chart.dropShadow.enabled && t && (!f.config.chart.dropShadow.enabledOnSeries || f.config.chart.dropShadow.enabledOnSeries && -1 !== f.config.chart.dropShadow.enabledOnSeries.indexOf(i)) && (n = f.config.chart.dropShadow, x.dropShadow(k, n, i)), p && (k.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, k)), k.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, k)), k.node.addEventListener("mousedown", this.pathMouseDown.bind(this, k))), k.attr({
						pathTo: a,
						pathFrom: s
					}), {
						el: k,
						j: e,
						realIndex: i,
						pathFrom: s,
						pathTo: a,
						fill: l,
						strokeWidth: o,
						delay: c
					});
				return !b || f.globals.resized || f.globals.dataChanged ? !f.globals.resized && f.globals.dataChanged || m.showDelayedElements() : m.animatePathsGradually(P(P({}, u), {}, {
					speed: h
				})), f.globals.dataChanged && v && y && m.animatePathsGradually(P(P({}, u), {}, {
					speed: d
				})), k
			}
		}, {
			key: "drawPattern",
			value: function(e, i, s) {
				var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
					n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0;
				return this.w.globals.dom.Paper.pattern(i, s, function(t) {
					"horizontalLines" === e ? t.line(0, 0, s, 0).stroke({
						color: a,
						width: n + 1
					}) : "verticalLines" === e ? t.line(0, 0, 0, i).stroke({
						color: a,
						width: n + 1
					}) : "slantedLines" === e ? t.line(0, 0, i, s).stroke({
						color: a,
						width: n
					}) : "squares" === e ? t.rect(i, s).fill("none").stroke({
						color: a,
						width: n
					}) : "circles" === e && t.circle(i).fill("none").stroke({
						color: a,
						width: n
					})
				})
			}
		}, {
			key: "drawGradient",
			value: function(t, e, i, s, a) {
				var n, o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
					r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null,
					l = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null,
					c = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : 0,
					h = this.w,
					d = (e.length < 9 && 0 === e.indexOf("#") && (e = O.hexToRgba(e, s)), i.length < 9 && 0 === i.indexOf("#") && (i = O.hexToRgba(i, a)), 0),
					u = 1,
					g = 1,
					p = null,
					r = (null !== r && (d = void 0 !== r[0] ? r[0] / 100 : 0, u = void 0 !== r[1] ? r[1] / 100 : 1, g = void 0 !== r[2] ? r[2] / 100 : 1, p = void 0 !== r[3] ? r[3] / 100 : null), !("donut" !== h.config.chart.type && "pie" !== h.config.chart.type && "polarArea" !== h.config.chart.type && "bubble" !== h.config.chart.type)),
					f = null === l || 0 === l.length ? h.globals.dom.Paper.gradient(r ? "radial" : "linear", function(t) {
						t.at(d, e, s), t.at(u, i, a), t.at(g, i, a), null !== p && t.at(p, e, s)
					}) : h.globals.dom.Paper.gradient(r ? "radial" : "linear", function(e) {
						(Array.isArray(l[c]) ? l[c] : l).forEach(function(t) {
							e.at(t.offset / 100, t.color, t.opacity)
						})
					});
				return r ? (r = h.globals.gridWidth / 2, n = h.globals.gridHeight / 2, "bubble" !== h.config.chart.type ? f.attr({
					gradientUnits: "userSpaceOnUse",
					cx: r,
					cy: n,
					r: o
				}) : f.attr({
					cx: .5,
					cy: .5,
					r: .8,
					fx: .2,
					fy: .2
				})) : "vertical" === t ? f.from(0, 0).to(0, 1) : "diagonal" === t ? f.from(0, 0).to(1, 1) : "horizontal" === t ? f.from(0, 1).to(1, 1) : "diagonal2" === t && f.from(1, 0).to(0, 1), f
			}
		}, {
			key: "getTextBasedOnMaxWidth",
			value: function(t) {
				var e = t.text,
					i = t.maxWidth,
					s = t.fontSize,
					t = t.fontFamily,
					s = this.getTextRects(e, s, t),
					t = s.width / e.length,
					t = Math.floor(i / t);
				return i < s.width ? e.slice(0, t - 3) + "..." : e
			}
		}, {
			key: "drawText",
			value: function(t) {
				var i = this,
					e = t.x,
					s = t.y,
					a = t.text,
					n = t.textAnchor,
					o = t.fontSize,
					r = t.fontFamily,
					l = t.fontWeight,
					c = t.foreColor,
					h = t.opacity,
					d = t.maxWidth,
					u = t.cssClass,
					u = void 0 === u ? "" : u,
					t = t.isPlainText,
					t = void 0 === t || t,
					g = this.w,
					p = a = void 0 === a ? "" : a,
					n = n || "start",
					r = (c && c.length || (c = g.config.chart.foreColor), r || g.config.chart.fontFamily),
					l = l || "regular",
					f = {
						maxWidth: d,
						fontSize: o = o || "11px",
						fontFamily: r
					},
					t = Array.isArray(a) ? g.globals.dom.Paper.text(function(t) {
						for (var e = 0; e < a.length; e++) p = a[e], d && (p = i.getTextBasedOnMaxWidth(P({
							text: a[e]
						}, f))), 0 === e ? t.tspan(p) : t.tspan(p).newLine()
					}) : (d && (p = this.getTextBasedOnMaxWidth(P({
						text: a
					}, f))), t ? g.globals.dom.Paper.plain(a) : g.globals.dom.Paper.text(function(t) {
						return t.tspan(p)
					}));
				return t.attr({
					x: e,
					y: s,
					"text-anchor": n,
					"dominant-baseline": "auto",
					"font-size": o,
					"font-family": r,
					"font-weight": l,
					fill: c,
					class: "apexcharts-text " + u
				}), t.node.style.fontFamily = r, t.node.style.opacity = h, t
			}
		}, {
			key: "drawMarker",
			value: function(t, e, i) {
				t = t || 0;
				var s, a, n = i.pSize || 0,
					o = null;
				return "square" === i.shape || "rect" === i.shape ? (a = void 0 === i.pRadius ? n / 2 : i.pRadius, null !== e && n || (a = n = 0), (a = this.drawRect(s = 1.2 * n + a, s, s, s, a)).attr({
					x: t - s / 2,
					y: e - s / 2,
					cx: t,
					cy: e,
					class: i.class || "",
					fill: i.pointFillColor,
					"fill-opacity": i.pointFillOpacity || 1,
					stroke: i.pointStrokeColor,
					"stroke-width": i.pointStrokeWidth || 0,
					"stroke-opacity": i.pointStrokeOpacity || 1
				}), o = a) : "circle" !== i.shape && i.shape || (O.isNumber(e) || (e = n = 0), o = this.drawCircle(n, {
					cx: t,
					cy: e,
					class: i.class || "",
					stroke: i.pointStrokeColor,
					fill: i.pointFillColor,
					"fill-opacity": i.pointFillOpacity || 1,
					"stroke-width": i.pointStrokeWidth || 0,
					"stroke-opacity": i.pointStrokeOpacity || 1
				})), o
			}
		}, {
			key: "pathMouseEnter",
			value: function(t, e) {
				var i = this.w,
					s = new L(this.ctx),
					a = parseInt(t.node.getAttribute("index"), 10),
					n = parseInt(t.node.getAttribute("j"), 10);
				"function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, {
					seriesIndex: a,
					dataPointIndex: n,
					w: i
				}), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx, {
					seriesIndex: a,
					dataPointIndex: n,
					w: i
				}]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" === i.config.states.hover.filter.type || i.globals.isTouchDevice || (e = i.config.states.hover.filter, s.applyFilter(t, a, e.type, e.value))
			}
		}, {
			key: "pathMouseLeave",
			value: function(t, e) {
				var i = this.w,
					s = new L(this.ctx),
					a = parseInt(t.node.getAttribute("index"), 10),
					n = parseInt(t.node.getAttribute("j"), 10);
				"function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, {
					seriesIndex: a,
					dataPointIndex: n,
					w: i
				}), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx, {
					seriesIndex: a,
					dataPointIndex: n,
					w: i
				}]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && s.getDefaultFilter(t, a)
			}
		}, {
			key: "pathMouseDown",
			value: function(t, e) {
				var i, s, a, n, o = this.w,
					r = new L(this.ctx),
					l = parseInt(t.node.getAttribute("index"), 10),
					c = parseInt(t.node.getAttribute("j"), 10),
					h = "false";
				"true" === t.node.getAttribute("selected") ? (t.node.setAttribute("selected", "false"), -1 < o.globals.selectedDataPoints[l].indexOf(c) && (a = o.globals.selectedDataPoints[l].indexOf(c), o.globals.selectedDataPoints[l].splice(a, 1))) : (!o.config.states.active.allowMultipleDataPointsSelection && 0 < o.globals.selectedDataPoints.length && (o.globals.selectedDataPoints = [], a = o.globals.dom.Paper.select(".apexcharts-series path").members, i = o.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, (s = function(t) {
					Array.prototype.forEach.call(t, function(t) {
						t.node.setAttribute("selected", "false"), r.getDefaultFilter(t, l)
					})
				})(a), s(i)), t.node.setAttribute("selected", "true"), h = "true", void 0 === o.globals.selectedDataPoints[l] && (o.globals.selectedDataPoints[l] = []), o.globals.selectedDataPoints[l].push(c)), "true" === h ? "none" !== (a = o.config.states.active.filter) ? r.applyFilter(t, l, a.type, a.value) : "none" === o.config.states.hover.filter || o.globals.isTouchDevice || (n = o.config.states.hover.filter, r.applyFilter(t, l, n.type, n.value)) : "none" !== o.config.states.active.filter.type && ("none" === o.config.states.hover.filter.type || o.globals.isTouchDevice ? r.getDefaultFilter(t, l) : (n = o.config.states.hover.filter, r.applyFilter(t, l, n.type, n.value))), "function" == typeof o.config.chart.events.dataPointSelection && o.config.chart.events.dataPointSelection(e, this.ctx, {
					selectedDataPoints: o.globals.selectedDataPoints,
					seriesIndex: l,
					dataPointIndex: c,
					w: o
				}), e && this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx, {
					selectedDataPoints: o.globals.selectedDataPoints,
					seriesIndex: l,
					dataPointIndex: c,
					w: o
				}])
			}
		}, {
			key: "rotateAroundCenter",
			value: function(t) {
				var e = {};
				return {
					x: (e = t && "function" == typeof t.getBBox ? t.getBBox() : e).x + e.width / 2,
					y: e.y + e.height / 2
				}
			}
		}, {
			key: "getTextRects",
			value: function(t, e, i, s) {
				var a = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
					n = this.w,
					t = this.drawText({
						x: -200,
						y: -200,
						text: t,
						textAnchor: "start",
						fontSize: e,
						fontFamily: i,
						foreColor: "#fff",
						opacity: 0
					}),
					e = (s && t.attr("transform", s), n.globals.dom.Paper.add(t), t.bbox());
				return a || (e = t.node.getBoundingClientRect()), t.remove(), {
					width: e.width,
					height: e.height
				}
			}
		}, {
			key: "placeTextWithEllipsis",
			value: function(t, e, i) {
				if ("function" == typeof t.getComputedTextLength && 0 < (t.textContent = e).length && t.getComputedTextLength() >= i / 1.1) {
					for (var s = e.length - 3; 0 < s; s -= 3)
						if (t.getSubStringLength(0, s) <= i / 1.1) return void(t.textContent = e.substring(0, s) + "...");
					t.textContent = "."
				}
			}
		}], [{
			key: "setAttrs",
			value: function(t, e) {
				for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
			}
		}]), K),
		I = (t(Q, [{
			key: "getStackedSeriesTotals",
			value: function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
					e = this.w,
					i = [];
				if (0 !== e.globals.series.length)
					for (var s = 0; s < e.globals.series[e.globals.maxValsInArrayIndex].length; s++) {
						for (var a = 0, n = 0; n < e.globals.series.length; n++) void 0 !== e.globals.series[n][s] && -1 === t.indexOf(n) && (a += e.globals.series[n][s]);
						i.push(a)
					}
				return i
			}
		}, {
			key: "getSeriesTotalByIndex",
			value: function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
				return null === t ? this.w.config.series.reduce(function(t, e) {
					return t + e
				}, 0) : this.w.globals.series[t].reduce(function(t, e) {
					return t + e
				}, 0)
			}
		}, {
			key: "isSeriesNull",
			value: function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
				return 0 === (null === t ? this.w.config.series.filter(function(t) {
					return null !== t
				}) : this.w.config.series[t].data.filter(function(t) {
					return null !== t
				})).length
			}
		}, {
			key: "seriesHaveSameValues",
			value: function(t) {
				return this.w.globals.series[t].every(function(t, e, i) {
					return t === i[0]
				})
			}
		}, {
			key: "getCategoryLabels",
			value: function(t) {
				var i = this.w,
					e = t.slice();
				return e = i.config.xaxis.convertedCatToNumeric ? t.map(function(t, e) {
					return i.config.xaxis.labels.formatter(t - i.globals.minX + 1)
				}) : e
			}
		}, {
			key: "getLargestSeries",
			value: function() {
				var t = this.w;
				t.globals.maxValsInArrayIndex = t.globals.series.map(function(t) {
					return t.length
				}).indexOf(Math.max.apply(Math, t.globals.series.map(function(t) {
					return t.length
				})))
			}
		}, {
			key: "getLargestMarkerSize",
			value: function() {
				var t = this.w,
					e = 0;
				return t.globals.markers.size.forEach(function(t) {
					e = Math.max(e, t)
				}), t.config.markers.discrete && t.config.markers.discrete.length && t.config.markers.discrete.forEach(function(t) {
					e = Math.max(e, t.size)
				}), 0 < e && (e += t.config.markers.hover.sizeOffset + 1), t.globals.markers.largestSize = e
			}
		}, {
			key: "getSeriesTotals",
			value: function() {
				var t = this.w;
				t.globals.seriesTotals = t.globals.series.map(function(t, e) {
					var i = 0;
					if (Array.isArray(t))
						for (var s = 0; s < t.length; s++) i += t[s];
					else i += t;
					return i
				})
			}
		}, {
			key: "getSeriesTotalsXRange",
			value: function(a, n) {
				var o = this.w;
				return o.globals.series.map(function(t, e) {
					for (var i = 0, s = 0; s < t.length; s++) o.globals.seriesX[e][s] > a && o.globals.seriesX[e][s] < n && (i += t[s]);
					return i
				})
			}
		}, {
			key: "getPercentSeries",
			value: function() {
				var r = this.w;
				r.globals.seriesPercent = r.globals.series.map(function(t, e) {
					var i = [];
					if (Array.isArray(t))
						for (var s = 0; s < t.length; s++) {
							var a = r.globals.stackedSeriesTotals[s],
								n = 0;
							a && (n = 100 * t[s] / a), i.push(n)
						} else {
							var o = 100 * t / r.globals.seriesTotals.reduce(function(t, e) {
								return t + e
							}, 0);
							i.push(o)
						}
					return i
				})
			}
		}, {
			key: "getCalculatedRatios",
			value: function() {
				var t, e, i, s, a = this.w.globals,
					n = [],
					o = 0,
					r = [],
					l = .1,
					c = 0;
				if (a.yRange = [], a.isMultipleYAxis)
					for (var h = 0; h < a.minYArr.length; h++) a.yRange.push(Math.abs(a.minYArr[h] - a.maxYArr[h])), r.push(0);
				else a.yRange.push(Math.abs(a.minY - a.maxY));
				a.xRange = Math.abs(a.maxX - a.minX), a.zRange = Math.abs(a.maxZ - a.minZ);
				for (var d = 0; d < a.yRange.length; d++) n.push(a.yRange[d] / a.gridHeight);
				if (e = a.xRange / a.gridWidth, i = Math.abs(a.initialMaxX - a.initialMinX) / a.gridWidth, t = a.yRange / a.gridWidth, s = a.xRange / a.gridHeight, o = (o = a.zRange / a.gridHeight * 16) || 1, a.minY !== Number.MIN_VALUE && 0 !== Math.abs(a.minY) && (a.hasNegs = !0), a.isMultipleYAxis)
					for (var r = [], u = 0; u < n.length; u++) r.push(-a.minYArr[u] / n[u]);
				else r.push(-a.minY / n[0]), a.minY !== Number.MIN_VALUE && 0 !== Math.abs(a.minY) && (l = -a.minY / t, c = a.minX / e);
				return {
					yRatio: n,
					invertedYRatio: t,
					zRatio: o,
					xRatio: e,
					initialXRatio: i,
					invertedXRatio: s,
					baseLineInvertedY: l,
					baseLineY: r,
					baseLineX: c
				}
			}
		}, {
			key: "getLogSeries",
			value: function(t) {
				var i = this,
					s = this.w;
				return s.globals.seriesLog = t.map(function(t, e) {
					return s.config.yaxis[e] && s.config.yaxis[e].logarithmic ? t.map(function(t) {
						return null === t ? null : i.getLogVal(s.config.yaxis[e].logBase, t, e)
					}) : t
				}), s.globals.invalidLogScale ? t : s.globals.seriesLog
			}
		}, {
			key: "getBaseLog",
			value: function(t, e) {
				return Math.log(e) / Math.log(t)
			}
		}, {
			key: "getLogVal",
			value: function(t, e, i) {
				var s, a;
				return 0 === e ? 0 : (s = 0 === (a = this.w).globals.minYArr[i] ? -1 : this.getBaseLog(t, a.globals.minYArr[i]), a = (0 === a.globals.maxYArr[i] ? 0 : this.getBaseLog(t, a.globals.maxYArr[i])) - s, e < 1 ? e / a : (this.getBaseLog(t, e) - s) / a)
			}
		}, {
			key: "getLogYRatios",
			value: function(t) {
				var n = this,
					o = this.w,
					r = this.w.globals;
				return r.yLogRatio = t.slice(), r.logYRange = r.yRange.map(function(t, e) {
					var i, s, a;
					if (o.config.yaxis[e] && n.w.config.yaxis[e].logarithmic) return s = -Number.MAX_VALUE, a = Number.MIN_VALUE, r.seriesLog.forEach(function(t, e) {
						t.forEach(function(t) {
							o.config.yaxis[e] && o.config.yaxis[e].logarithmic && (s = Math.max(t, s), a = Math.min(t, a))
						})
					}), i = Math.pow(r.yRange[e], Math.abs(a - s) / r.yRange[e]), r.yLogRatio[e] = i / r.gridHeight, i
				}), r.invalidLogScale ? t.slice() : r.yLogRatio
			}
		}], [{
			key: "checkComboSeries",
			value: function(t) {
				var e = !1,
					i = 0,
					s = 0;
				return t.length && void 0 !== t[0].type && t.forEach(function(t) {
					"bar" !== t.type && "column" !== t.type && "candlestick" !== t.type && "boxPlot" !== t.type || i++, void 0 !== t.type && s++
				}), {
					comboBarCount: i,
					comboCharts: e = 0 < s ? !0 : e
				}
			}
		}, {
			key: "extendArrayProps",
			value: function(t, e, i) {
				return e = (e = e.yaxis ? t.extendYAxis(e, i) : e).annotations && (e = (e = e.annotations.yaxis ? t.extendYAxisAnnotations(e) : e).annotations.xaxis ? t.extendXAxisAnnotations(e) : e).annotations.points ? t.extendPointAnnotations(e) : e
			}
		}]), Q),
		B = (t($, [{
			key: "setOrientations",
			value: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
					i = this.w;
				"vertical" === t.label.orientation && null !== (i = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(null !== e ? e : 0, "']"))) && (e = i.getBoundingClientRect(), i.setAttribute("x", parseFloat(i.getAttribute("x")) - e.height + 4), "top" === t.label.position ? i.setAttribute("y", parseFloat(i.getAttribute("y")) + e.width) : i.setAttribute("y", parseFloat(i.getAttribute("y")) - e.width), e = (t = this.annoCtx.graphics.rotateAroundCenter(i)).x, t = t.y, i.setAttribute("transform", "rotate(-90 ".concat(e, " ").concat(t, ")")))
			}
		}, {
			key: "addBackgroundToAnno",
			value: function(t, e) {
				var i, s, a, n, o, r, l = this.w;
				return !t || void 0 === e.label.text || void 0 !== e.label.text && !String(e.label.text).trim() ? null : (o = l.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), t = t.getBoundingClientRect(), i = e.label.style.padding.left, s = e.label.style.padding.right, a = e.label.style.padding.top, n = e.label.style.padding.bottom, "vertical" === e.label.orientation && (a = e.label.style.padding.left, n = e.label.style.padding.right, i = e.label.style.padding.top, s = e.label.style.padding.bottom), r = t.left - o.left - i, o = t.top - o.top - a, r = this.annoCtx.graphics.drawRect(r - l.globals.barPadForNumericAxis, o, t.width + i + s, t.height + a + n, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0), e.id && r.node.classList.add(e.id), r)
			}
		}, {
			key: "annotationsBackground",
			value: function() {
				function i(t, e, i) {
					var s;
					(i = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(i, "-annotations .apexcharts-").concat(i, "-annotation-label[rel='").concat(e, "']"))) && (e = i.parentNode, s = a.addBackgroundToAnno(i, t)) && (e.insertBefore(s.node, i), t.label.mouseEnter && s.node.addEventListener("mouseenter", t.label.mouseEnter.bind(a, t)), t.label.mouseLeave && s.node.addEventListener("mouseleave", t.label.mouseLeave.bind(a, t)), t.label.click) && s.node.addEventListener("click", t.label.click.bind(a, t))
				}
				var a = this,
					n = this.w;
				n.config.annotations.xaxis.map(function(t, e) {
					i(t, e, "xaxis")
				}), n.config.annotations.yaxis.map(function(t, e) {
					i(t, e, "yaxis")
				}), n.config.annotations.points.map(function(t, e) {
					i(t, e, "point")
				})
			}
		}, {
			key: "getY1Y2",
			value: function(t, e) {
				var i, s, t = "y1" === t ? e.y : e.y2,
					a = this.w;
				return this.annoCtx.invertAxis ? (i = a.globals.labels.indexOf(t), a.config.xaxis.convertedCatToNumeric && (i = a.globals.categoryLabels.indexOf(t)), (i = a.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (i + 1) + ")")) && (s = parseFloat(i.getAttribute("y")))) : (i = a.config.yaxis[e.yAxisIndex].logarithmic ? (t = new I(this.annoCtx.ctx).getLogVal(t, e.yAxisIndex)) / a.globals.yLogRatio[e.yAxisIndex] : (t - a.globals.minYArr[e.yAxisIndex]) / (a.globals.yRange[e.yAxisIndex] / a.globals.gridHeight), s = a.globals.gridHeight - i, !e.marker || void 0 !== e.y && null !== e.y || (s = 0), a.config.yaxis[e.yAxisIndex] && a.config.yaxis[e.yAxisIndex].reversed && (s = i)), s = "string" == typeof t && -1 < t.indexOf("px") ? parseFloat(t) : s
			}
		}, {
			key: "getX1X2",
			value: function(t, e) {
				var i = this.w,
					s = this.annoCtx.invertAxis ? i.globals.minY : i.globals.minX,
					a = this.annoCtx.invertAxis ? i.globals.maxY : i.globals.maxX,
					n = this.annoCtx.invertAxis ? i.globals.yRange[0] : i.globals.xRange,
					o = (e.x - s) / (n / i.globals.gridWidth),
					s = (this.annoCtx.inversedReversedAxis && (o = (a - e.x) / (n / i.globals.gridWidth)), "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (o = this.getStringX(e.x)), (e.x2 - s) / (n / i.globals.gridWidth));
				return this.annoCtx.inversedReversedAxis && (s = (a - e.x2) / (n / i.globals.gridWidth)), "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (s = this.getStringX(e.x2)), void 0 !== e.x && null !== e.x || !e.marker || (o = i.globals.gridWidth), "x1" === t && "string" == typeof e.x && -1 < e.x.indexOf("px") && (o = parseFloat(e.x)), "x2" === t && "string" == typeof e.x2 && -1 < e.x2.indexOf("px") && (s = parseFloat(e.x2)), "x1" === t ? o : s
			}
		}, {
			key: "getStringX",
			value: function(t) {
				var e = this.w,
					i = t,
					t = (e.config.xaxis.convertedCatToNumeric && e.globals.categoryLabels.length && (t = e.globals.categoryLabels.indexOf(t) + 1), e.globals.labels.indexOf(t)),
					e = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (t + 1) + ")");
				return i = e ? parseFloat(e.getAttribute("x")) : i
			}
		}]), $),
		j = (t(Z, [{
			key: "addXaxisAnnotation",
			value: function(t, e, i) {
				var s, a, n = this.w,
					o = this.helpers.getX1X2("x1", t),
					r = t.label.text,
					l = t.strokeDashArray;
				O.isNumber(o) && (null === t.x2 || void 0 === t.x2 ? (s = this.annoCtx.graphics.drawLine(o + t.offsetX, 0 + t.offsetY, o + t.offsetX, n.globals.gridHeight + t.offsetY, t.borderColor, l, t.borderWidth), e.appendChild(s.node), t.id && s.node.classList.add(t.id)) : ((s = this.helpers.getX1X2("x2", t)) < o && (a = o, o = s, s = a), (a = this.annoCtx.graphics.drawRect(o + t.offsetX, 0 + t.offsetY, s - o, n.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, l)).node.classList.add("apexcharts-annotation-rect"), a.attr("clip-path", "url(#gridRectMask".concat(n.globals.cuid, ")")), e.appendChild(a.node), t.id && a.node.classList.add(t.id)), s = this.annoCtx.graphics.getTextRects(r, parseFloat(t.label.style.fontSize)), l = "top" === t.label.position ? 4 : "center" === t.label.position ? n.globals.gridHeight / 2 + ("vertical" === t.label.orientation ? s.width / 2 : 0) : n.globals.gridHeight, (a = this.annoCtx.graphics.drawText({
					x: o + t.label.offsetX,
					y: l + t.label.offsetY - ("vertical" === t.label.orientation ? "top" === t.label.position ? s.width / 2 - 12 : -s.width / 2 : 0),
					text: r,
					textAnchor: t.label.textAnchor,
					fontSize: t.label.style.fontSize,
					fontFamily: t.label.style.fontFamily,
					fontWeight: t.label.style.fontWeight,
					foreColor: t.label.style.color,
					cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id || "")
				})).attr({
					rel: i
				}), e.appendChild(a.node), this.annoCtx.helpers.setOrientations(t, i))
			}
		}, {
			key: "drawXAxisAnnotations",
			value: function() {
				var i = this,
					t = this.w,
					s = this.annoCtx.graphics.group({
						class: "apexcharts-xaxis-annotations"
					});
				return t.config.annotations.xaxis.map(function(t, e) {
					i.addXaxisAnnotation(t, s.node, e)
				}), s
			}
		}]), Z),
		V = (t(U, [{
			key: "addYaxisAnnotation",
			value: function(t, e, i) {
				var s, a = this.w,
					n = t.strokeDashArray,
					o = this.helpers.getY1Y2("y1", t),
					r = t.label.text,
					n = (null === t.y2 || void 0 === t.y2 ? (l = this.annoCtx.graphics.drawLine(0 + t.offsetX, o + t.offsetY, this._getYAxisAnnotationWidth(t), o + t.offsetY, t.borderColor, n, t.borderWidth), e.appendChild(l.node), t.id && l.node.classList.add(t.id)) : ((s = this.helpers.getY1Y2("y2", t)) > o && (l = o, o = s, s = l), (l = this.annoCtx.graphics.drawRect(0 + t.offsetX, s + t.offsetY, this._getYAxisAnnotationWidth(t), o - s, 0, t.fillColor, t.opacity, 1, t.borderColor, n)).node.classList.add("apexcharts-annotation-rect"), l.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), e.appendChild(l.node), t.id && l.node.classList.add(t.id)), "right" === t.label.position ? a.globals.gridWidth : "center" === t.label.position ? a.globals.gridWidth / 2 : 0),
					l = this.annoCtx.graphics.drawText({
						x: n + t.label.offsetX,
						y: (null != s ? s : o) + t.label.offsetY - 3,
						text: r,
						textAnchor: t.label.textAnchor,
						fontSize: t.label.style.fontSize,
						fontFamily: t.label.style.fontFamily,
						fontWeight: t.label.style.fontWeight,
						foreColor: t.label.style.color,
						cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id || "")
					});
				l.attr({
					rel: i
				}), e.appendChild(l.node)
			}
		}, {
			key: "_getYAxisAnnotationWidth",
			value: function(t) {
				var e = this.w;
				return e.globals.gridWidth, (-1 < t.width.indexOf("%") ? e.globals.gridWidth * parseInt(t.width, 10) / 100 : parseInt(t.width, 10)) + t.offsetX
			}
		}, {
			key: "drawYAxisAnnotations",
			value: function() {
				var i = this,
					t = this.w,
					s = this.annoCtx.graphics.group({
						class: "apexcharts-yaxis-annotations"
					});
				return t.config.annotations.yaxis.map(function(t, e) {
					i.addYaxisAnnotation(t, s.node, e)
				}), s
			}
		}]), U),
		G = (t(q, [{
			key: "addPointAnnotation",
			value: function(t, e, i) {
				this.w;
				var s, a, n = this.helpers.getX1X2("x1", t),
					o = this.helpers.getY1Y2("y1", t);
				O.isNumber(n) && (a = {
					pSize: t.marker.size,
					pointStrokeWidth: t.marker.strokeWidth,
					pointFillColor: t.marker.fillColor,
					pointStrokeColor: t.marker.strokeColor,
					shape: t.marker.shape,
					pRadius: t.marker.radius,
					class: "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id || "")
				}, a = this.annoCtx.graphics.drawMarker(n + t.marker.offsetX, o + t.marker.offsetY, a), e.appendChild(a.node), s = t.label.text || "", (s = this.annoCtx.graphics.drawText({
					x: n + t.label.offsetX,
					y: o + t.label.offsetY - t.marker.size - parseFloat(t.label.style.fontSize) / 1.6,
					text: s,
					textAnchor: t.label.textAnchor,
					fontSize: t.label.style.fontSize,
					fontFamily: t.label.style.fontFamily,
					fontWeight: t.label.style.fontWeight,
					foreColor: t.label.style.color,
					cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id || "")
				})).attr({
					rel: i
				}), e.appendChild(s.node), t.customSVG.SVG && ((i = this.annoCtx.graphics.group({
					class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass
				})).attr({
					transform: "translate(".concat(n + t.customSVG.offsetX, ", ").concat(o + t.customSVG.offsetY, ")")
				}), i.node.innerHTML = t.customSVG.SVG, e.appendChild(i.node)), t.image.path && (s = t.image.width || 20, e = t.image.height || 20, a = this.annoCtx.addImage({
					x: n + t.image.offsetX - s / 2,
					y: o + t.image.offsetY - e / 2,
					width: s,
					height: e,
					path: t.image.path,
					appendTo: ".apexcharts-point-annotations"
				})), t.mouseEnter && a.node.addEventListener("mouseenter", t.mouseEnter.bind(this, t)), t.mouseLeave && a.node.addEventListener("mouseleave", t.mouseLeave.bind(this, t)), t.click) && a.node.addEventListener("click", t.click.bind(this, t))
			}
		}, {
			key: "drawPointAnnotations",
			value: function() {
				var i = this,
					t = this.w,
					s = this.annoCtx.graphics.group({
						class: "apexcharts-point-annotations"
					});
				return t.config.annotations.points.map(function(t, e) {
					i.addPointAnnotation(t, s.node, e)
				}), s
			}
		}]), q);

	function q(t) {
		s(this, q), this.w = t.w, this.annoCtx = t, this.helpers = new B(this.annoCtx)
	}

	function U(t) {
		s(this, U), this.w = t.w, this.annoCtx = t, this.helpers = new B(this.annoCtx)
	}

	function Z(t) {
		s(this, Z), this.w = t.w, this.annoCtx = t, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new B(this.annoCtx)
	}

	function $(t) {
		s(this, $), this.w = t.w, this.annoCtx = t
	}

	function Q(t) {
		s(this, Q), this.ctx = t, this.w = t.w
	}

	function K(t) {
		s(this, K), this.ctx = t, this.w = t.w
	}

	function J(t) {
		s(this, J), this.ctx = t, this.w = t.w
	}

	function tt(t) {
		s(this, tt), this.ctx = t, this.w = t.w, this.setEasingFunctions()
	}

	function n() {
		s(this, n)
	}

	function et(t) {
		var e = t.isTimeline,
			i = t.ctx,
			s = t.seriesIndex,
			a = t.dataPointIndex,
			n = t.y1,
			o = t.y2,
			r = (t = t.w).globals.seriesRangeStart[s][a],
			l = t.globals.seriesRangeEnd[s][a],
			c = t.globals.labels[a],
			h = t.config.series[s].name || "",
			d = t.globals.ttKeyFormatter,
			u = t.config.tooltip.y.title.formatter,
			g = {
				w: t,
				seriesIndex: s,
				dataPointIndex: a,
				start: r,
				end: l
			},
			u = ("function" == typeof u && (h = u(h, g)), null != (u = t.config.series[s].data[a]) && u.x && (c = t.config.series[s].data[a].x), e || "datetime" === t.config.xaxis.type && (c = new f(i).xLabelFormat(t.globals.ttKeyFormatter, c, c, {
				i: void 0,
				dateFormatter: new y(i).formatDate,
				w: t
			})), "function" == typeof d && (c = d(c, g)), Number.isFinite(n) && Number.isFinite(o) && (r = n, l = o), ""),
			a = "",
			e = t.globals.colors[s];
		return a = void 0 === t.config.tooltip.x.formatter ? "datetime" === t.config.xaxis.type ? (u = (d = new y(i)).formatDate(d.getDate(r), t.config.tooltip.x.format), d.formatDate(d.getDate(l), t.config.tooltip.x.format)) : (u = r, l) : (u = t.config.tooltip.x.formatter(r), t.config.tooltip.x.formatter(l)), {
			start: r,
			end: l,
			startVal: u,
			endVal: a,
			ylabel: c,
			color: e,
			seriesName: h
		}
	}

	function it(t) {
		var e = t.color,
			i = t.seriesName,
			s = t.ylabel,
			a = t.start,
			n = t.end,
			o = t.seriesIndex,
			r = t.dataPointIndex,
			a = (l = t.ctx.tooltip.tooltipLabels.getFormatters(o)).yLbFormatter(a),
			n = l.yLbFormatter(n),
			l = l.yLbFormatter(t.w.globals.series[o][r]),
			r = '<span class="value start-value">\n  '.concat(a, '\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(n, "\n  </span>");
		return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e + '">' + (i || "") + '</span></div><div> <span class="category">' + s + ": </span> " + (!t.w.globals.comboCharts || "rangeArea" === t.w.config.series[o].type || "rangeBar" === t.w.config.series[o].type ? r : "<span>".concat(l, "</span>")) + " </div></div>"
	}

	function st(t) {
		for (var e = "", i = 0; i < t.length; i++) {
			var s = t[i],
				a = s.length;
			4 < a ? e = (e = (e += "C".concat(s[0], ", ").concat(s[1])) + ", ".concat(s[2], ", ").concat(s[3])) + ", ".concat(s[4], ", ").concat(s[5]) : 2 < a && (e = (e += "S".concat(s[0], ", ").concat(s[1])) + ", ".concat(s[2], ", ").concat(s[3]))
		}
		return e
	}

	function at(t) {
		var e = function(t) {
				for (var e, i, s, a, n = function(t) {
						for (var e = [], i = t[0], s = t[1], a = e[0] = Je(i, s), n = 1, o = t.length - 1; n < o; n++) i = s, s = t[n + 1], e[n] = .5 * (a + (a = Je(i, s)));
						return e[n] = a, e
					}(t), o = t.length - 1, r = [], l = 0; l < o; l++) s = Je(t[l], t[l + 1]), Math.abs(s) < 1e-6 ? n[l] = n[l + 1] = 0 : 9 < (a = (e = n[l] / s) * e + (i = n[l + 1] / s) * i) && (a = 3 * s / Math.sqrt(a), n[l] = a * e, n[l + 1] = a * i);
				for (var c = 0; c <= o; c++) a = (t[Math.min(o, c + 1)][0] - t[Math.max(0, c - 1)][0]) / (6 * (1 + n[c] * n[c])), r.push([a || 0, n[c] * a || 0]);
				return r
			}(t),
			i = t[1],
			s = t[0],
			a = [],
			n = e[1],
			o = e[0];
		a.push(s, [s[0] + o[0], s[1] + o[1], i[0] - n[0], i[1] - n[1], i[0], i[1]]);
		for (var r = 2, l = e.length; r < l; r++) {
			var c = t[r],
				h = e[r];
			a.push([c[0] - h[0], c[1] - h[1], c[0], c[1]])
		}
		return a
	}
	var nt, ot, rt, lt, ct, ht = {
			name: "en",
			options: {
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				toolbar: {
					exportToSVG: "Download SVG",
					exportToPNG: "Download PNG",
					exportToCSV: "Download CSV",
					menu: "Menu",
					selection: "Selection",
					selectionZoom: "Selection Zoom",
					zoomIn: "Zoom In",
					zoomOut: "Zoom Out",
					pan: "Panning",
					reset: "Reset Zoom"
				}
			}
		},
		d = (t(Ke, [{
			key: "init",
			value: function() {
				return {
					annotations: {
						yaxis: [this.yAxisAnnotation],
						xaxis: [this.xAxisAnnotation],
						points: [this.pointAnnotation],
						texts: [],
						images: [],
						shapes: []
					},
					chart: {
						animations: {
							enabled: !0,
							easing: "easeinout",
							speed: 800,
							animateGradually: {
								delay: 150,
								enabled: !0
							},
							dynamicAnimation: {
								enabled: !0,
								speed: 350
							}
						},
						background: "transparent",
						locales: [ht],
						defaultLocale: "en",
						dropShadow: {
							enabled: !1,
							enabledOnSeries: void 0,
							top: 2,
							left: 2,
							blur: 4,
							color: "#000",
							opacity: .35
						},
						events: {
							animationEnd: void 0,
							beforeMount: void 0,
							mounted: void 0,
							updated: void 0,
							click: void 0,
							mouseMove: void 0,
							mouseLeave: void 0,
							xAxisLabelClick: void 0,
							legendClick: void 0,
							markerClick: void 0,
							selection: void 0,
							dataPointSelection: void 0,
							dataPointMouseEnter: void 0,
							dataPointMouseLeave: void 0,
							beforeZoom: void 0,
							beforeResetZoom: void 0,
							zoomed: void 0,
							scrolled: void 0,
							brushScrolled: void 0
						},
						foreColor: "#373d3f",
						fontFamily: "Helvetica, Arial, sans-serif",
						height: "auto",
						parentHeightOffset: 15,
						redrawOnParentResize: !0,
						redrawOnWindowResize: !0,
						id: void 0,
						group: void 0,
						offsetX: 0,
						offsetY: 0,
						selection: {
							enabled: !1,
							type: "x",
							fill: {
								color: "#24292e",
								opacity: .1
							},
							stroke: {
								width: 1,
								color: "#24292e",
								opacity: .4,
								dashArray: 3
							},
							xaxis: {
								min: void 0,
								max: void 0
							},
							yaxis: {
								min: void 0,
								max: void 0
							}
						},
						sparkline: {
							enabled: !1
						},
						brush: {
							enabled: !1,
							autoScaleYaxis: !0,
							target: void 0,
							targets: void 0
						},
						stacked: !1,
						stackType: "normal",
						toolbar: {
							show: !0,
							offsetX: 0,
							offsetY: 0,
							tools: {
								download: !0,
								selection: !0,
								zoom: !0,
								zoomin: !0,
								zoomout: !0,
								pan: !0,
								reset: !0,
								customIcons: []
							},
							export: {
								csv: {
									filename: void 0,
									columnDelimiter: ",",
									headerCategory: "category",
									headerValue: "value",
									dateFormatter: function(t) {
										return new Date(t).toDateString()
									}
								},
								png: {
									filename: void 0
								},
								svg: {
									filename: void 0
								}
							},
							autoSelected: "zoom"
						},
						type: "line",
						width: "100%",
						zoom: {
							enabled: !0,
							type: "x",
							autoScaleYaxis: !1,
							zoomedArea: {
								fill: {
									color: "#90CAF9",
									opacity: .4
								},
								stroke: {
									color: "#0D47A1",
									opacity: .4,
									width: 1
								}
							}
						}
					},
					plotOptions: {
						area: {
							fillTo: "origin"
						},
						bar: {
							horizontal: !1,
							columnWidth: "70%",
							barHeight: "70%",
							distributed: !1,
							borderRadius: 0,
							borderRadiusApplication: "around",
							borderRadiusWhenStacked: "last",
							rangeBarOverlap: !0,
							rangeBarGroupRows: !1,
							hideZeroBarsWhenGrouped: !1,
							isDumbbell: !1,
							dumbbellColors: void 0,
							isFunnel: !1,
							isFunnel3d: !0,
							colors: {
								ranges: [],
								backgroundBarColors: [],
								backgroundBarOpacity: 1,
								backgroundBarRadius: 0
							},
							dataLabels: {
								position: "top",
								maxItems: 100,
								hideOverflowingLabels: !0,
								orientation: "horizontal",
								total: {
									enabled: !1,
									formatter: void 0,
									offsetX: 0,
									offsetY: 0,
									style: {
										color: "#373d3f",
										fontSize: "12px",
										fontFamily: void 0,
										fontWeight: 600
									}
								}
							}
						},
						bubble: {
							zScaling: !0,
							minBubbleRadius: void 0,
							maxBubbleRadius: void 0
						},
						candlestick: {
							colors: {
								upward: "#00B746",
								downward: "#EF403C"
							},
							wick: {
								useFillColor: !0
							}
						},
						boxPlot: {
							colors: {
								upper: "#00E396",
								lower: "#008FFB"
							}
						},
						heatmap: {
							radius: 2,
							enableShades: !0,
							shadeIntensity: .5,
							reverseNegativeShade: !1,
							distributed: !1,
							useFillColorAsStroke: !1,
							colorScale: {
								inverse: !1,
								ranges: [],
								min: void 0,
								max: void 0
							}
						},
						treemap: {
							enableShades: !0,
							shadeIntensity: .5,
							distributed: !1,
							reverseNegativeShade: !1,
							useFillColorAsStroke: !1,
							dataLabels: {
								format: "scale"
							},
							colorScale: {
								inverse: !1,
								ranges: [],
								min: void 0,
								max: void 0
							}
						},
						radialBar: {
							inverseOrder: !1,
							startAngle: 0,
							endAngle: 360,
							offsetX: 0,
							offsetY: 0,
							hollow: {
								margin: 5,
								size: "50%",
								background: "transparent",
								image: void 0,
								imageWidth: 150,
								imageHeight: 150,
								imageOffsetX: 0,
								imageOffsetY: 0,
								imageClipped: !0,
								position: "front",
								dropShadow: {
									enabled: !1,
									top: 0,
									left: 0,
									blur: 3,
									color: "#000",
									opacity: .5
								}
							},
							track: {
								show: !0,
								startAngle: void 0,
								endAngle: void 0,
								background: "#f2f2f2",
								strokeWidth: "97%",
								opacity: 1,
								margin: 5,
								dropShadow: {
									enabled: !1,
									top: 0,
									left: 0,
									blur: 3,
									color: "#000",
									opacity: .5
								}
							},
							dataLabels: {
								show: !0,
								name: {
									show: !0,
									fontSize: "16px",
									fontFamily: void 0,
									fontWeight: 600,
									color: void 0,
									offsetY: 0,
									formatter: function(t) {
										return t
									}
								},
								value: {
									show: !0,
									fontSize: "14px",
									fontFamily: void 0,
									fontWeight: 400,
									color: void 0,
									offsetY: 16,
									formatter: function(t) {
										return t + "%"
									}
								},
								total: {
									show: !1,
									label: "Total",
									fontSize: "16px",
									fontWeight: 600,
									fontFamily: void 0,
									color: void 0,
									formatter: function(t) {
										return t.globals.seriesTotals.reduce(function(t, e) {
											return t + e
										}, 0) / t.globals.series.length + "%"
									}
								}
							}
						},
						pie: {
							customScale: 1,
							offsetX: 0,
							offsetY: 0,
							startAngle: 0,
							endAngle: 360,
							expandOnClick: !0,
							dataLabels: {
								offset: 0,
								minAngleToShowLabel: 10
							},
							donut: {
								size: "65%",
								background: "transparent",
								labels: {
									show: !1,
									name: {
										show: !0,
										fontSize: "16px",
										fontFamily: void 0,
										fontWeight: 600,
										color: void 0,
										offsetY: -10,
										formatter: function(t) {
											return t
										}
									},
									value: {
										show: !0,
										fontSize: "20px",
										fontFamily: void 0,
										fontWeight: 400,
										color: void 0,
										offsetY: 10,
										formatter: function(t) {
											return t
										}
									},
									total: {
										show: !1,
										showAlways: !1,
										label: "Total",
										fontSize: "16px",
										fontWeight: 400,
										fontFamily: void 0,
										color: void 0,
										formatter: function(t) {
											return t.globals.seriesTotals.reduce(function(t, e) {
												return t + e
											}, 0)
										}
									}
								}
							}
						},
						polarArea: {
							rings: {
								strokeWidth: 1,
								strokeColor: "#e8e8e8"
							},
							spokes: {
								strokeWidth: 1,
								connectorColors: "#e8e8e8"
							}
						},
						radar: {
							size: void 0,
							offsetX: 0,
							offsetY: 0,
							polygons: {
								strokeWidth: 1,
								strokeColors: "#e8e8e8",
								connectorColors: "#e8e8e8",
								fill: {
									colors: void 0
								}
							}
						}
					},
					colors: void 0,
					dataLabels: {
						enabled: !0,
						enabledOnSeries: void 0,
						formatter: function(t) {
							return null !== t ? t : ""
						},
						textAnchor: "middle",
						distributed: !1,
						offsetX: 0,
						offsetY: 0,
						style: {
							fontSize: "12px",
							fontFamily: void 0,
							fontWeight: 600,
							colors: void 0
						},
						background: {
							enabled: !0,
							foreColor: "#fff",
							borderRadius: 2,
							padding: 4,
							opacity: .9,
							borderWidth: 1,
							borderColor: "#fff",
							dropShadow: {
								enabled: !1,
								top: 1,
								left: 1,
								blur: 1,
								color: "#000",
								opacity: .45
							}
						},
						dropShadow: {
							enabled: !1,
							top: 1,
							left: 1,
							blur: 1,
							color: "#000",
							opacity: .45
						}
					},
					fill: {
						type: "solid",
						colors: void 0,
						opacity: .85,
						gradient: {
							shade: "dark",
							type: "horizontal",
							shadeIntensity: .5,
							gradientToColors: void 0,
							inverseColors: !0,
							opacityFrom: 1,
							opacityTo: 1,
							stops: [0, 50, 100],
							colorStops: []
						},
						image: {
							src: [],
							width: void 0,
							height: void 0
						},
						pattern: {
							style: "squares",
							width: 6,
							height: 6,
							strokeWidth: 2
						}
					},
					forecastDataPoints: {
						count: 0,
						fillOpacity: .5,
						strokeWidth: void 0,
						dashArray: 4
					},
					grid: {
						show: !0,
						borderColor: "#e0e0e0",
						strokeDashArray: 0,
						position: "back",
						xaxis: {
							lines: {
								show: !1
							}
						},
						yaxis: {
							lines: {
								show: !0
							}
						},
						row: {
							colors: void 0,
							opacity: .5
						},
						column: {
							colors: void 0,
							opacity: .5
						},
						padding: {
							top: 0,
							right: 10,
							bottom: 0,
							left: 12
						}
					},
					labels: [],
					legend: {
						show: !0,
						showForSingleSeries: !1,
						showForNullSeries: !0,
						showForZeroSeries: !0,
						floating: !1,
						position: "bottom",
						horizontalAlign: "center",
						inverseOrder: !1,
						fontSize: "12px",
						fontFamily: void 0,
						fontWeight: 400,
						width: void 0,
						height: void 0,
						formatter: void 0,
						tooltipHoverFormatter: void 0,
						offsetX: -20,
						offsetY: 4,
						customLegendItems: [],
						labels: {
							colors: void 0,
							useSeriesColors: !1
						},
						markers: {
							width: 12,
							height: 12,
							strokeWidth: 0,
							fillColors: void 0,
							strokeColor: "#fff",
							radius: 12,
							customHTML: void 0,
							offsetX: 0,
							offsetY: 0,
							onClick: void 0
						},
						itemMargin: {
							horizontal: 5,
							vertical: 2
						},
						onItemClick: {
							toggleDataSeries: !0
						},
						onItemHover: {
							highlightDataSeries: !0
						}
					},
					markers: {
						discrete: [],
						size: 0,
						colors: void 0,
						strokeColors: "#fff",
						strokeWidth: 2,
						strokeOpacity: .9,
						strokeDashArray: 0,
						fillOpacity: 1,
						shape: "circle",
						width: 8,
						height: 8,
						radius: 2,
						offsetX: 0,
						offsetY: 0,
						onClick: void 0,
						onDblClick: void 0,
						showNullDataPoints: !0,
						hover: {
							size: void 0,
							sizeOffset: 3
						}
					},
					noData: {
						text: void 0,
						align: "center",
						verticalAlign: "middle",
						offsetX: 0,
						offsetY: 0,
						style: {
							color: void 0,
							fontSize: "14px",
							fontFamily: void 0
						}
					},
					responsive: [],
					series: void 0,
					states: {
						normal: {
							filter: {
								type: "none",
								value: 0
							}
						},
						hover: {
							filter: {
								type: "lighten",
								value: .1
							}
						},
						active: {
							allowMultipleDataPointsSelection: !1,
							filter: {
								type: "darken",
								value: .5
							}
						}
					},
					title: {
						text: void 0,
						align: "left",
						margin: 5,
						offsetX: 0,
						offsetY: 0,
						floating: !1,
						style: {
							fontSize: "14px",
							fontWeight: 900,
							fontFamily: void 0,
							color: void 0
						}
					},
					subtitle: {
						text: void 0,
						align: "left",
						margin: 5,
						offsetX: 0,
						offsetY: 30,
						floating: !1,
						style: {
							fontSize: "12px",
							fontWeight: 400,
							fontFamily: void 0,
							color: void 0
						}
					},
					stroke: {
						show: !0,
						curve: "smooth",
						lineCap: "butt",
						width: 2,
						colors: void 0,
						dashArray: 0,
						fill: {
							type: "solid",
							colors: void 0,
							opacity: .85,
							gradient: {
								shade: "dark",
								type: "horizontal",
								shadeIntensity: .5,
								gradientToColors: void 0,
								inverseColors: !0,
								opacityFrom: 1,
								opacityTo: 1,
								stops: [0, 50, 100],
								colorStops: []
							}
						}
					},
					tooltip: {
						enabled: !0,
						enabledOnSeries: void 0,
						shared: !0,
						followCursor: !1,
						intersect: !1,
						inverseOrder: !1,
						custom: void 0,
						fillSeriesColor: !1,
						theme: "light",
						cssClass: "",
						style: {
							fontSize: "12px",
							fontFamily: void 0
						},
						onDatasetHover: {
							highlightDataSeries: !1
						},
						x: {
							show: !0,
							format: "dd MMM",
							formatter: void 0
						},
						y: {
							formatter: void 0,
							title: {
								formatter: function(t) {
									return t ? t + ": " : ""
								}
							}
						},
						z: {
							formatter: void 0,
							title: "Size: "
						},
						marker: {
							show: !0,
							fillColors: void 0
						},
						items: {
							display: "flex"
						},
						fixed: {
							enabled: !1,
							position: "topRight",
							offsetX: 0,
							offsetY: 0
						}
					},
					xaxis: {
						type: "category",
						categories: [],
						convertedCatToNumeric: !1,
						offsetX: 0,
						offsetY: 0,
						overwriteCategories: void 0,
						labels: {
							show: !0,
							rotate: -45,
							rotateAlways: !1,
							hideOverlappingLabels: !0,
							trim: !1,
							minHeight: void 0,
							maxHeight: 120,
							showDuplicates: !0,
							style: {
								colors: [],
								fontSize: "12px",
								fontWeight: 400,
								fontFamily: void 0,
								cssClass: ""
							},
							offsetX: 0,
							offsetY: 0,
							format: void 0,
							formatter: void 0,
							datetimeUTC: !0,
							datetimeFormatter: {
								year: "yyyy",
								month: "MMM 'yy",
								day: "dd MMM",
								hour: "HH:mm",
								minute: "HH:mm:ss",
								second: "HH:mm:ss"
							}
						},
						group: {
							groups: [],
							style: {
								colors: [],
								fontSize: "12px",
								fontWeight: 400,
								fontFamily: void 0,
								cssClass: ""
							}
						},
						axisBorder: {
							show: !0,
							color: "#e0e0e0",
							width: "100%",
							height: 1,
							offsetX: 0,
							offsetY: 0
						},
						axisTicks: {
							show: !0,
							color: "#e0e0e0",
							height: 6,
							offsetX: 0,
							offsetY: 0
						},
						tickAmount: void 0,
						tickPlacement: "on",
						min: void 0,
						max: void 0,
						range: void 0,
						floating: !1,
						decimalsInFloat: void 0,
						position: "bottom",
						title: {
							text: void 0,
							offsetX: 0,
							offsetY: 0,
							style: {
								color: void 0,
								fontSize: "12px",
								fontWeight: 900,
								fontFamily: void 0,
								cssClass: ""
							}
						},
						crosshairs: {
							show: !0,
							width: 1,
							position: "back",
							opacity: .9,
							stroke: {
								color: "#b6b6b6",
								width: 1,
								dashArray: 3
							},
							fill: {
								type: "solid",
								color: "#B1B9C4",
								gradient: {
									colorFrom: "#D8E3F0",
									colorTo: "#BED1E6",
									stops: [0, 100],
									opacityFrom: .4,
									opacityTo: .5
								}
							},
							dropShadow: {
								enabled: !1,
								left: 0,
								top: 0,
								blur: 1,
								opacity: .4
							}
						},
						tooltip: {
							enabled: !0,
							offsetY: 0,
							formatter: void 0,
							style: {
								fontSize: "12px",
								fontFamily: void 0
							}
						}
					},
					yaxis: this.yAxis,
					theme: {
						mode: "light",
						palette: "palette1",
						monochrome: {
							enabled: !1,
							color: "#008FFB",
							shadeTo: "light",
							shadeIntensity: .65
						}
					}
				}
			}
		}]), Ke),
		dt = (t(Qe, [{
			key: "drawAxesAnnotations",
			value: function() {
				var t = this.w;
				if (t.globals.axisCharts) {
					for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), s = this.pointsAnnotations.drawPointAnnotations(), a = t.config.chart.animations.enabled, n = [e, i, s], o = [i.node, e.node, s.node], r = 0; r < 3; r++) t.globals.dom.elGraphical.add(n[r]), !a || t.globals.resized || t.globals.dataChanged || "scatter" !== t.config.chart.type && "bubble" !== t.config.chart.type && 1 < t.globals.dataPoints && o[r].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push({
						el: o[r],
						index: 0
					});
					this.helpers.annotationsBackground()
				}
			}
		}, {
			key: "drawImageAnnos",
			value: function() {
				var i = this;
				this.w.config.annotations.images.map(function(t, e) {
					i.addImage(t, e)
				})
			}
		}, {
			key: "drawTextAnnos",
			value: function() {
				var i = this;
				this.w.config.annotations.texts.map(function(t, e) {
					i.addText(t, e)
				})
			}
		}, {
			key: "addXaxisAnnotation",
			value: function(t, e, i) {
				this.xAxisAnnotations.addXaxisAnnotation(t, e, i)
			}
		}, {
			key: "addYaxisAnnotation",
			value: function(t, e, i) {
				this.yAxisAnnotations.addYaxisAnnotation(t, e, i)
			}
		}, {
			key: "addPointAnnotation",
			value: function(t, e, i) {
				this.pointsAnnotations.addPointAnnotation(t, e, i)
			}
		}, {
			key: "addText",
			value: function(t, e) {
				var i = t.x,
					s = t.y,
					a = t.text,
					n = t.textAnchor,
					o = t.foreColor,
					r = t.fontSize,
					l = t.fontFamily,
					c = t.fontWeight,
					h = t.cssClass,
					d = t.backgroundColor,
					u = t.borderWidth,
					g = t.strokeDashArray,
					p = t.borderRadius,
					f = t.borderColor,
					x = t.appendTo,
					x = void 0 === x ? ".apexcharts-annotations" : x,
					m = t.paddingLeft,
					m = void 0 === m ? 4 : m,
					b = t.paddingRight,
					b = void 0 === b ? 4 : b,
					v = t.paddingBottom,
					v = void 0 === v ? 2 : v,
					t = t.paddingTop,
					t = void 0 === t ? 2 : t,
					y = this.w,
					i = this.graphics.drawText({
						x: i,
						y: s,
						text: a,
						textAnchor: n || "start",
						fontSize: r || "12px",
						fontWeight: c || "regular",
						fontFamily: l || y.config.chart.fontFamily,
						foreColor: o || y.config.chart.foreColor,
						cssClass: h
					}),
					s = y.globals.dom.baseEl.querySelector(x),
					n = (s && s.appendChild(i.node), i.bbox());
				a && (r = this.graphics.drawRect(n.x - m, n.y - t, n.width + m + b, n.height + v + t, p, d || "transparent", 1, u, f, g), s.insertBefore(r.node, i.node))
			}
		}, {
			key: "addImage",
			value: function(t, e) {
				var i = this.w,
					s = t.path,
					a = t.x,
					a = void 0 === a ? 0 : a,
					n = t.y,
					n = void 0 === n ? 0 : n,
					o = t.width,
					o = void 0 === o ? 20 : o,
					r = t.height,
					r = void 0 === r ? 20 : r,
					t = t.appendTo,
					t = void 0 === t ? ".apexcharts-annotations" : t,
					s = i.globals.dom.Paper.image(s),
					o = (s.size(o, r).move(a, n), i.globals.dom.baseEl.querySelector(t));
				return o && o.appendChild(s.node), s
			}
		}, {
			key: "addXaxisAnnotationExternal",
			value: function(t, e, i) {
				return this.addAnnotationExternal({
					params: t,
					pushToMemory: e,
					context: i,
					type: "xaxis",
					contextMethod: i.addXaxisAnnotation
				}), i
			}
		}, {
			key: "addYaxisAnnotationExternal",
			value: function(t, e, i) {
				return this.addAnnotationExternal({
					params: t,
					pushToMemory: e,
					context: i,
					type: "yaxis",
					contextMethod: i.addYaxisAnnotation
				}), i
			}
		}, {
			key: "addPointAnnotationExternal",
			value: function(t, e, i) {
				return void 0 === this.invertAxis && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({
					params: t,
					pushToMemory: e,
					context: i,
					type: "point",
					contextMethod: i.addPointAnnotation
				}), i
			}
		}, {
			key: "addAnnotationExternal",
			value: function(t) {
				var e = t.params,
					i = t.pushToMemory,
					s = t.context,
					a = t.type,
					t = t.contextMethod,
					n = s,
					o = n.w,
					r = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations")),
					l = r.childNodes.length + 1,
					c = new d,
					c = Object.assign({}, "xaxis" === a ? c.xAxisAnnotation : "yaxis" === a ? c.yAxisAnnotation : c.pointAnnotation),
					h = O.extend(c, e);
				switch (a) {
					case "xaxis":
						this.addXaxisAnnotation(h, r, l);
						break;
					case "yaxis":
						this.addYaxisAnnotation(h, r, l);
						break;
					case "point":
						this.addPointAnnotation(h, r, l)
				}
				c = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations .apexcharts-").concat(a, "-annotation-label[rel='").concat(l, "']")), a = this.helpers.addBackgroundToAnno(c, h);
				return a && r.insertBefore(a.node, c), i && o.globals.memory.methodsToExec.push({
					context: n,
					id: h.id || O.randomId(),
					method: t,
					label: "addAnnotation",
					params: e
				}), s
			}
		}, {
			key: "clearAnnotations",
			value: function(t) {
				var i = t.w,
					t = i.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
				i.globals.memory.methodsToExec.map(function(t, e) {
					"addText" !== t.label && "addAnnotation" !== t.label || i.globals.memory.methodsToExec.splice(e, 1)
				}), t = O.listToArray(t), Array.prototype.forEach.call(t, function(t) {
					for (; t.firstChild;) t.removeChild(t.firstChild)
				})
			}
		}, {
			key: "removeAnnotation",
			value: function(t, i) {
				var s = t.w,
					t = s.globals.dom.baseEl.querySelectorAll(".".concat(i));
				t && (s.globals.memory.methodsToExec.map(function(t, e) {
					t.id === i && s.globals.memory.methodsToExec.splice(e, 1)
				}), Array.prototype.forEach.call(t, function(t) {
					t.parentElement.removeChild(t)
				}))
			}
		}]), Qe),
		y = (t($e, [{
			key: "isValidDate",
			value: function(t) {
				return !isNaN(this.parseDate(t))
			}
		}, {
			key: "getTimeStamp",
			value: function(t) {
				return Date.parse(t) ? (this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toISOString().substr(0, 25)) : new Date(t)).getTime() : t
			}
		}, {
			key: "getDate",
			value: function(t) {
				return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toUTCString()) : new Date(t)
			}
		}, {
			key: "parseDate",
			value: function(t) {
				var e = Date.parse(t);
				return isNaN(e) ? (e = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " ")), this.getTimeStamp(e)) : this.getTimeStamp(t)
			}
		}, {
			key: "parseDateWithTimezone",
			value: function(t) {
				return Date.parse(t.replace(/-/g, "index-2.html").replace(/[a-z]+/gi, " "))
			}
		}, {
			key: "formatDate",
			value: function(t, e) {
				var i = this.w.globals.locale,
					s = this.w.config.xaxis.labels.datetimeUTC,
					a = ["\0"].concat(b(i.months)),
					n = [""].concat(b(i.shortMonths)),
					o = [""].concat(b(i.days)),
					i = [""].concat(b(i.shortDays));

				function r(t, e) {
					var i = t + "";
					for (e = e || 2; i.length < e;) i = "0" + i;
					return i
				}
				var l, c = s ? t.getUTCFullYear() : t.getFullYear(),
					c = (e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(/(^|[^\\])yy/g, "$1" + c.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + c), (s ? t.getUTCMonth() : t.getMonth()) + 1),
					h = (e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + a[0])).replace(/(^|[^\\])MMM/g, "$1" + n[0])).replace(/(^|[^\\])MM/g, "$1" + r(c))).replace(/(^|[^\\])M/g, "$1" + c), s ? t.getUTCDate() : t.getDate()),
					h = (e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + i[0])).replace(/(^|[^\\])dd/g, "$1" + r(h))).replace(/(^|[^\\])d/g, "$1" + h), s ? t.getUTCHours() : t.getHours()),
					d = 12 < h ? h - 12 : 0 === h ? 12 : h,
					d = (e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + r(h))).replace(/(^|[^\\])H/g, "$1" + h)).replace(/(^|[^\\])hh+/g, "$1" + r(d))).replace(/(^|[^\\])h/g, "$1" + d), s ? t.getUTCMinutes() : t.getMinutes()),
					d = (e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + r(d))).replace(/(^|[^\\])m/g, "$1" + d), s ? t.getUTCSeconds() : t.getSeconds()),
					d = (e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + r(d))).replace(/(^|[^\\])s/g, "$1" + d), s ? t.getUTCMilliseconds() : t.getMilliseconds()),
					h = (e = e.replace(/(^|[^\\])fff+/g, "$1" + r(d, 3)), d = Math.round(d / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + r(d)), d = Math.round(d / 10), h < 12 ? "AM" : "PM"),
					d = (e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + d)).replace(/(^|[^\\])TT+/g, "$1" + h)).replace(/(^|[^\\])T/g, "$1" + h.charAt(0)), h.toLowerCase()),
					h = (e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + d)).replace(/(^|[^\\])t/g, "$1" + d.charAt(0)), -t.getTimezoneOffset()),
					d = s || !h ? "Z" : 0 < h ? "+" : "-",
					h = (s || (l = (h = Math.abs(h)) % 60, d += r(Math.floor(h / 60)) + ":" + r(l)), e = e.replace(/(^|[^\\])K/g, "$1" + d), (s ? t.getUTCDay() : t.getDay()) + 1);
				return (e = (e = (e = (e = e.replace(new RegExp(o[0], "g"), o[h])).replace(new RegExp(i[0], "g"), i[h])).replace(new RegExp(a[0], "g"), a[c])).replace(new RegExp(n[0], "g"), n[c])).replace(/\\(.)/g, "$1")
			}
		}, {
			key: "getTimeUnitsfromTimestamp",
			value: function(t, e, i) {
				var s = this.w,
					s = (void 0 !== s.config.xaxis.min && (t = s.config.xaxis.min), void 0 !== s.config.xaxis.max && (e = s.config.xaxis.max), this.getDate(t)),
					t = this.getDate(e),
					e = this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" "),
					s = this.formatDate(t, "yyyy MM dd HH mm ss fff").split(" ");
				return {
					minMillisecond: parseInt(e[6], 10),
					maxMillisecond: parseInt(s[6], 10),
					minSecond: parseInt(e[5], 10),
					maxSecond: parseInt(s[5], 10),
					minMinute: parseInt(e[4], 10),
					maxMinute: parseInt(s[4], 10),
					minHour: parseInt(e[3], 10),
					maxHour: parseInt(s[3], 10),
					minDate: parseInt(e[2], 10),
					maxDate: parseInt(s[2], 10),
					minMonth: parseInt(e[1], 10) - 1,
					maxMonth: parseInt(s[1], 10) - 1,
					minYear: parseInt(e[0], 10),
					maxYear: parseInt(s[0], 10)
				}
			}
		}, {
			key: "isLeapYear",
			value: function(t) {
				return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
			}
		}, {
			key: "calculcateLastDaysOfMonth",
			value: function(t, e, i) {
				return this.determineDaysOfMonths(t, e) - i
			}
		}, {
			key: "determineDaysOfYear",
			value: function(t) {
				var e = 365;
				return e = this.isLeapYear(t) ? 366 : e
			}
		}, {
			key: "determineRemainingDaysOfYear",
			value: function(t, e, i) {
				i = this.daysCntOfYear[e] + i;
				return 1 < e && this.isLeapYear() && i++, i
			}
		}, {
			key: "determineDaysOfMonths",
			value: function(t, e) {
				var i = 30;
				return t = O.monthMod(t), !0 == -1 < this.months30.indexOf(t) ? 2 === t && (i = this.isLeapYear(e) ? 29 : 28) : (this.months31.indexOf(t), i = 31), i
			}
		}]), $e),
		f = (t(Ze, [{
			key: "xLabelFormat",
			value: function(t, e, i, s) {
				var a, n = this.w;
				return "datetime" === n.config.xaxis.type && void 0 === n.config.xaxis.labels.formatter && void 0 === n.config.tooltip.x.formatter ? (a = new y(this.ctx)).formatDate(a.getDate(e), n.config.tooltip.x.format) : t(e, i, s)
			}
		}, {
			key: "defaultGeneralFormatter",
			value: function(t) {
				return Array.isArray(t) ? t.map(function(t) {
					return t
				}) : t
			}
		}, {
			key: "defaultYFormatter",
			value: function(t, e, i) {
				var s = this.w;
				return t = O.isNumber(t) ? 0 !== s.globals.yValueDecimal ? t.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : s.globals.yValueDecimal) : s.globals.maxYArr[i] - s.globals.minYArr[i] < 5 ? t.toFixed(1) : t.toFixed(0) : t
			}
		}, {
			key: "setLabelFormatters",
			value: function() {
				var s = this,
					a = this.w;
				return a.globals.xaxisTooltipFormatter = function(t) {
					return s.defaultGeneralFormatter(t)
				}, a.globals.ttKeyFormatter = function(t) {
					return s.defaultGeneralFormatter(t)
				}, a.globals.ttZFormatter = function(t) {
					return t
				}, a.globals.legendFormatter = function(t) {
					return s.defaultGeneralFormatter(t)
				}, void 0 !== a.config.xaxis.labels.formatter ? a.globals.xLabelFormatter = a.config.xaxis.labels.formatter : a.globals.xLabelFormatter = function(t) {
					var e;
					return O.isNumber(t) ? a.config.xaxis.convertedCatToNumeric || "numeric" !== a.config.xaxis.type ? a.globals.isBarHorizontal && a.globals.maxY - a.globals.minYArr < 4 ? t.toFixed(1) : t.toFixed(0) : O.isNumber(a.config.xaxis.decimalsInFloat) ? t.toFixed(a.config.xaxis.decimalsInFloat) : 0 < (e = a.globals.maxX - a.globals.minX) && e < 100 ? t.toFixed(1) : t.toFixed(0) : t
				}, "function" == typeof a.config.tooltip.x.formatter ? a.globals.ttKeyFormatter = a.config.tooltip.x.formatter : a.globals.ttKeyFormatter = a.globals.xLabelFormatter, "function" == typeof a.config.xaxis.tooltip.formatter && (a.globals.xaxisTooltipFormatter = a.config.xaxis.tooltip.formatter), !Array.isArray(a.config.tooltip.y) && void 0 === a.config.tooltip.y.formatter || (a.globals.ttVal = a.config.tooltip.y), void 0 !== a.config.tooltip.z.formatter && (a.globals.ttZFormatter = a.config.tooltip.z.formatter), void 0 !== a.config.legend.formatter && (a.globals.legendFormatter = a.config.legend.formatter), a.config.yaxis.forEach(function(e, i) {
					void 0 !== e.labels.formatter ? a.globals.yLabelFormatters[i] = e.labels.formatter : a.globals.yLabelFormatters[i] = function(t) {
						return a.globals.xyCharts ? Array.isArray(t) ? t.map(function(t) {
							return s.defaultYFormatter(t, e, i)
						}) : s.defaultYFormatter(t, e, i) : t
					}
				}), a.globals
			}
		}, {
			key: "heatmapLabelFormatters",
			value: function() {
				var t, e = this.w;
				"heatmap" === e.config.chart.type && (e.globals.yAxisScale[0].result = e.globals.seriesNames.slice(), t = e.globals.seriesNames.reduce(function(t, e) {
					return t.length > e.length ? t : e
				}, 0), e.globals.yAxisScale[0].niceMax = t, e.globals.yAxisScale[0].niceMin = t)
			}
		}]), Ze),
		r = (t(Ue, [{
			key: "hideYAxis",
			value: function() {
				this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0
			}
		}, {
			key: "line",
			value: function() {
				return {
					chart: {
						animations: {
							easing: "swing"
						}
					},
					dataLabels: {
						enabled: !1
					},
					stroke: {
						width: 5,
						curve: "straight"
					},
					markers: {
						size: 0,
						hover: {
							sizeOffset: 6
						}
					},
					xaxis: {
						crosshairs: {
							width: 1
						}
					}
				}
			}
		}, {
			key: "sparkline",
			value: function(t) {
				return this.hideYAxis(), O.extend(t, {
					grid: {
						show: !1,
						padding: {
							left: 0,
							right: 0,
							top: 0,
							bottom: 0
						}
					},
					legend: {
						show: !1
					},
					xaxis: {
						labels: {
							show: !1
						},
						tooltip: {
							enabled: !1
						},
						axisBorder: {
							show: !1
						},
						axisTicks: {
							show: !1
						}
					},
					chart: {
						toolbar: {
							show: !1
						},
						zoom: {
							enabled: !1
						}
					},
					dataLabels: {
						enabled: !1
					}
				})
			}
		}, {
			key: "bar",
			value: function() {
				return {
					chart: {
						stacked: !1,
						animations: {
							easing: "swing"
						}
					},
					plotOptions: {
						bar: {
							dataLabels: {
								position: "center"
							}
						}
					},
					dataLabels: {
						style: {
							colors: ["#fff"]
						},
						background: {
							enabled: !1
						}
					},
					stroke: {
						width: 0,
						lineCap: "round"
					},
					fill: {
						opacity: .85
					},
					legend: {
						markers: {
							shape: "square",
							radius: 2,
							size: 8
						}
					},
					tooltip: {
						shared: !1,
						intersect: !0
					},
					xaxis: {
						tooltip: {
							enabled: !1
						},
						tickPlacement: "between",
						crosshairs: {
							width: "barWidth",
							position: "back",
							fill: {
								type: "gradient"
							},
							dropShadow: {
								enabled: !1
							},
							stroke: {
								width: 0
							}
						}
					}
				}
			}
		}, {
			key: "funnel",
			value: function() {
				return this.hideYAxis(), P(P({}, this.bar()), {}, {
					chart: {
						animations: {
							easing: "linear",
							speed: 800,
							animateGradually: {
								enabled: !1
							}
						}
					},
					plotOptions: {
						bar: {
							horizontal: !0,
							borderRadiusApplication: "around",
							borderRadius: 0,
							dataLabels: {
								position: "center"
							}
						}
					},
					grid: {
						show: !1,
						padding: {
							left: 0,
							right: 0
						}
					},
					xaxis: {
						labels: {
							show: !1
						},
						tooltip: {
							enabled: !1
						},
						axisBorder: {
							show: !1
						},
						axisTicks: {
							show: !1
						}
					}
				})
			}
		}, {
			key: "candlestick",
			value: function() {
				var s = this;
				return {
					stroke: {
						width: 1,
						colors: ["#333"]
					},
					fill: {
						opacity: 1
					},
					dataLabels: {
						enabled: !1
					},
					tooltip: {
						shared: !0,
						custom: function(t) {
							var e = t.seriesIndex,
								i = t.dataPointIndex,
								t = t.w;
							return s._getBoxTooltip(t, e, i, ["Open", "High", "", "Low", "Close"], "candlestick")
						}
					},
					states: {
						active: {
							filter: {
								type: "none"
							}
						}
					},
					xaxis: {
						crosshairs: {
							width: 1
						}
					}
				}
			}
		}, {
			key: "boxPlot",
			value: function() {
				var s = this;
				return {
					chart: {
						animations: {
							dynamicAnimation: {
								enabled: !1
							}
						}
					},
					stroke: {
						width: 1,
						colors: ["#24292e"]
					},
					dataLabels: {
						enabled: !1
					},
					tooltip: {
						shared: !0,
						custom: function(t) {
							var e = t.seriesIndex,
								i = t.dataPointIndex,
								t = t.w;
							return s._getBoxTooltip(t, e, i, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot")
						}
					},
					markers: {
						size: 5,
						strokeWidth: 1,
						strokeColors: "#111"
					},
					xaxis: {
						crosshairs: {
							width: 1
						}
					}
				}
			}
		}, {
			key: "rangeBar",
			value: function() {
				return {
					chart: {
						animations: {
							animateGradually: !1
						}
					},
					stroke: {
						width: 0,
						lineCap: "square"
					},
					plotOptions: {
						bar: {
							borderRadius: 0,
							dataLabels: {
								position: "center"
							}
						}
					},
					dataLabels: {
						enabled: !1,
						formatter: function(t, e) {
							e.ctx;

							function i() {
								var t = n.globals.seriesRangeStart[s][a];
								return n.globals.seriesRangeEnd[s][a] - t
							}
							var s = e.seriesIndex,
								a = e.dataPointIndex,
								n = e.w;
							return !n.globals.comboCharts || "rangeBar" === n.config.series[s].type || "rangeArea" === n.config.series[s].type ? i() : t
						},
						background: {
							enabled: !1
						},
						style: {
							colors: ["#fff"]
						}
					},
					markers: {
						size: 10
					},
					tooltip: {
						shared: !1,
						followCursor: !0,
						custom: function(t) {
							return t.w.config.plotOptions && t.w.config.plotOptions.bar && t.w.config.plotOptions.bar.horizontal ? (i = et(P(P({}, e = t), {}, {
								isTimeline: !0
							})), s = i.color, a = i.seriesName, n = i.ylabel, o = i.startVal, i = i.endVal, it(P(P({}, e), {}, {
								color: s,
								seriesName: a,
								ylabel: n,
								start: o,
								end: i
							}))) : (s = et(e = t), a = s.color, n = s.seriesName, o = s.ylabel, i = s.start, s = s.end, it(P(P({}, e), {}, {
								color: a,
								seriesName: n,
								ylabel: o,
								start: i,
								end: s
							})));
							var e, i, s, a, n, o
						}
					},
					xaxis: {
						tickPlacement: "between",
						tooltip: {
							enabled: !1
						},
						crosshairs: {
							stroke: {
								width: 0
							}
						}
					}
				}
			}
		}, {
			key: "dumbbell",
			value: function(t) {
				var e;
				return null != (e = t.plotOptions.bar) && e.barHeight || (t.plotOptions.bar.barHeight = 2), null != (e = t.plotOptions.bar) && e.columnWidth || (t.plotOptions.bar.columnWidth = 2), t
			}
		}, {
			key: "area",
			value: function() {
				return {
					stroke: {
						width: 4,
						fill: {
							type: "solid",
							gradient: {
								inverseColors: !1,
								shade: "light",
								type: "vertical",
								opacityFrom: .65,
								opacityTo: .5,
								stops: [0, 100, 100]
							}
						}
					},
					fill: {
						type: "gradient",
						gradient: {
							inverseColors: !1,
							shade: "light",
							type: "vertical",
							opacityFrom: .65,
							opacityTo: .5,
							stops: [0, 100, 100]
						}
					},
					markers: {
						size: 0,
						hover: {
							sizeOffset: 6
						}
					},
					tooltip: {
						followCursor: !1
					}
				}
			}
		}, {
			key: "rangeArea",
			value: function() {
				return {
					stroke: {
						curve: "straight",
						width: 0
					},
					fill: {
						type: "solid",
						opacity: .6
					},
					markers: {
						size: 0
					},
					states: {
						hover: {
							filter: {
								type: "none"
							}
						},
						active: {
							filter: {
								type: "none"
							}
						}
					},
					tooltip: {
						intersect: !1,
						shared: !0,
						followCursor: !0,
						custom: function(t) {
							return e = et(t = t), i = e.color, s = e.seriesName, a = e.ylabel, n = e.start, e = e.end, it(P(P({}, t), {}, {
								color: i,
								seriesName: s,
								ylabel: a,
								start: n,
								end: e
							}));
							var e, i, s, a, n
						}
					}
				}
			}
		}, {
			key: "brush",
			value: function(t) {
				return O.extend(t, {
					chart: {
						toolbar: {
							autoSelected: "selection",
							show: !1
						},
						zoom: {
							enabled: !1
						}
					},
					dataLabels: {
						enabled: !1
					},
					stroke: {
						width: 1
					},
					tooltip: {
						enabled: !1
					},
					xaxis: {
						tooltip: {
							enabled: !1
						}
					}
				})
			}
		}, {
			key: "stacked100",
			value: function(i) {
				i.dataLabels = i.dataLabels || {}, i.dataLabels.formatter = i.dataLabels.formatter || void 0;
				var t = i.dataLabels.formatter;
				return i.yaxis.forEach(function(t, e) {
					i.yaxis[e].min = 0, i.yaxis[e].max = 100
				}), "bar" === i.chart.type && (i.dataLabels.formatter = t || function(t) {
					return "number" == typeof t && t ? t.toFixed(0) + "%" : t
				}), i
			}
		}, {
			key: "stackedBars",
			value: function() {
				var t = this.bar();
				return P(P({}, t), {}, {
					plotOptions: P(P({}, t.plotOptions), {}, {
						bar: P(P({}, t.plotOptions.bar), {}, {
							borderRadiusApplication: "end",
							borderRadiusWhenStacked: "last"
						})
					})
				})
			}
		}, {
			key: "convertCatToNumeric",
			value: function(t) {
				return t.xaxis.convertedCatToNumeric = !0, t
			}
		}, {
			key: "convertCatToNumericXaxis",
			value: function(t, e, i) {
				t.xaxis.type = "numeric", t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function(t) {
					return O.isNumber(t) ? Math.floor(t) : t
				};
				var s = t.xaxis.labels.formatter,
					a = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
				return (a = i && i.length ? i.map(function(t) {
					return Array.isArray(t) ? t : String(t)
				}) : a) && a.length && (t.xaxis.labels.formatter = function(t) {
					return O.isNumber(t) ? s(a[Math.floor(t) - 1]) : s(t)
				}), t.xaxis.categories = [], t.labels = [], t.xaxis.tickAmount = t.xaxis.tickAmount || "dataPoints", t
			}
		}, {
			key: "bubble",
			value: function() {
				return {
					dataLabels: {
						style: {
							colors: ["#fff"]
						}
					},
					tooltip: {
						shared: !1,
						intersect: !0
					},
					xaxis: {
						crosshairs: {
							width: 0
						}
					},
					fill: {
						type: "solid",
						gradient: {
							shade: "light",
							inverse: !0,
							shadeIntensity: .55,
							opacityFrom: .4,
							opacityTo: .8
						}
					}
				}
			}
		}, {
			key: "scatter",
			value: function() {
				return {
					dataLabels: {
						enabled: !1
					},
					tooltip: {
						shared: !1,
						intersect: !0
					},
					markers: {
						size: 6,
						strokeWidth: 1,
						hover: {
							sizeOffset: 2
						}
					}
				}
			}
		}, {
			key: "heatmap",
			value: function() {
				return {
					chart: {
						stacked: !1
					},
					fill: {
						opacity: 1
					},
					dataLabels: {
						style: {
							colors: ["#fff"]
						}
					},
					stroke: {
						colors: ["#fff"]
					},
					tooltip: {
						followCursor: !0,
						marker: {
							show: !1
						},
						x: {
							show: !1
						}
					},
					legend: {
						position: "top",
						markers: {
							shape: "square",
							size: 10,
							offsetY: 2
						}
					},
					grid: {
						padding: {
							right: 20
						}
					}
				}
			}
		}, {
			key: "treemap",
			value: function() {
				return {
					chart: {
						zoom: {
							enabled: !1
						}
					},
					dataLabels: {
						style: {
							fontSize: 14,
							fontWeight: 600,
							colors: ["#fff"]
						}
					},
					stroke: {
						show: !0,
						width: 2,
						colors: ["#fff"]
					},
					legend: {
						show: !1
					},
					fill: {
						gradient: {
							stops: [0, 100]
						}
					},
					tooltip: {
						followCursor: !0,
						x: {
							show: !1
						}
					},
					grid: {
						padding: {
							left: 0,
							right: 0
						}
					},
					xaxis: {
						crosshairs: {
							show: !1
						},
						tooltip: {
							enabled: !1
						}
					}
				}
			}
		}, {
			key: "pie",
			value: function() {
				return {
					chart: {
						toolbar: {
							show: !1
						}
					},
					plotOptions: {
						pie: {
							donut: {
								labels: {
									show: !1
								}
							}
						}
					},
					dataLabels: {
						formatter: function(t) {
							return t.toFixed(1) + "%"
						},
						style: {
							colors: ["#fff"]
						},
						background: {
							enabled: !1
						},
						dropShadow: {
							enabled: !0
						}
					},
					stroke: {
						colors: ["#fff"]
					},
					fill: {
						opacity: 1,
						gradient: {
							shade: "light",
							stops: [0, 100]
						}
					},
					tooltip: {
						theme: "dark",
						fillSeriesColor: !0
					},
					legend: {
						position: "right"
					}
				}
			}
		}, {
			key: "donut",
			value: function() {
				return {
					chart: {
						toolbar: {
							show: !1
						}
					},
					dataLabels: {
						formatter: function(t) {
							return t.toFixed(1) + "%"
						},
						style: {
							colors: ["#fff"]
						},
						background: {
							enabled: !1
						},
						dropShadow: {
							enabled: !0
						}
					},
					stroke: {
						colors: ["#fff"]
					},
					fill: {
						opacity: 1,
						gradient: {
							shade: "light",
							shadeIntensity: .35,
							stops: [80, 100],
							opacityFrom: 1,
							opacityTo: 1
						}
					},
					tooltip: {
						theme: "dark",
						fillSeriesColor: !0
					},
					legend: {
						position: "right"
					}
				}
			}
		}, {
			key: "polarArea",
			value: function() {
				return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount || 6, {
					chart: {
						toolbar: {
							show: !1
						}
					},
					dataLabels: {
						formatter: function(t) {
							return t.toFixed(1) + "%"
						},
						enabled: !1
					},
					stroke: {
						show: !0,
						width: 2
					},
					fill: {
						opacity: .7
					},
					tooltip: {
						theme: "dark",
						fillSeriesColor: !0
					},
					legend: {
						position: "right"
					}
				}
			}
		}, {
			key: "radar",
			value: function() {
				return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY || 6, {
					dataLabels: {
						enabled: !1,
						style: {
							fontSize: "11px"
						}
					},
					stroke: {
						width: 2
					},
					markers: {
						size: 3,
						strokeWidth: 1,
						strokeOpacity: 1
					},
					fill: {
						opacity: .2
					},
					tooltip: {
						shared: !1,
						intersect: !0,
						followCursor: !0
					},
					grid: {
						show: !1
					},
					xaxis: {
						labels: {
							formatter: function(t) {
								return t
							},
							style: {
								colors: ["#a8a8a8"],
								fontSize: "11px"
							}
						},
						tooltip: {
							enabled: !1
						},
						crosshairs: {
							show: !1
						}
					}
				}
			}
		}, {
			key: "radialBar",
			value: function() {
				return {
					chart: {
						animations: {
							dynamicAnimation: {
								enabled: !0,
								speed: 800
							}
						},
						toolbar: {
							show: !1
						}
					},
					fill: {
						gradient: {
							shade: "dark",
							shadeIntensity: .4,
							inverseColors: !1,
							type: "diagonal2",
							opacityFrom: 1,
							opacityTo: 1,
							stops: [70, 98, 100]
						}
					},
					legend: {
						show: !1,
						position: "right"
					},
					tooltip: {
						enabled: !1,
						fillSeriesColor: !0
					}
				}
			}
		}, {
			key: "_getBoxTooltip",
			value: function(t, e, i, s, a) {
				var n = t.globals.seriesCandleO[e][i],
					o = t.globals.seriesCandleH[e][i],
					r = t.globals.seriesCandleM[e][i],
					l = t.globals.seriesCandleL[e][i],
					c = t.globals.seriesCandleC[e][i];
				return t.config.series[e].type && t.config.series[e].type !== a ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name || "series-" + (e + 1), ": <strong>").concat(t.globals.series[e][i], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type, '">') + "<div>".concat(s[0], ': <span class="value">') + n + "</span></div>" + "<div>".concat(s[1], ': <span class="value">') + o + "</span></div>" + (r ? "<div>".concat(s[2], ': <span class="value">') + r + "</span></div>" : "") + "<div>".concat(s[3], ': <span class="value">') + l + "</span></div>" + "<div>".concat(s[4], ': <span class="value">') + c + "</span></div></div>"
			}
		}]), Ue),
		p = (t(qe, [{
			key: "init",
			value: function(t) {
				var e, i, t = t.responsiveOverride,
					s = this.opts,
					a = new d,
					n = new r(s),
					a = (this.chartType = s.chart.type, s = this.extendYAxis(s), s = this.extendAnnotations(s), a.init()),
					o = {},
					t = (s && "object" === v(s) && (i = {}, i = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(s.chart.type) ? n[s.chart.type]() : n.line(), null != (e = s.plotOptions) && null != (e = e.bar) && e.isFunnel && (i = n.funnel()), s.chart.stacked && "bar" === s.chart.type && (i = n.stackedBars()), null != (e = s.chart.brush) && e.enabled && (i = n.brush(i)), null != (e = (s = s.chart.stacked && "100%" === s.chart.stackType ? n.stacked100(s) : s).plotOptions) && null != (e = e.bar) && e.isDumbbell && (s = n.dumbbell(s)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(s), s.xaxis = s.xaxis || window.Apex.xaxis || {}, t || (s.xaxis.convertedCatToNumeric = !1), (null != (e = (s = this.checkFBankrupttToNumericXAxis(this.chartType, i, s)).chart.sparkline) && e.enabled || null != (t = window.Apex.chart) && null != (e = t.sparkline) && e.enabled) && (i = n.sparkline(i)), o = O.extend(a, i)), O.extend(o, window.Apex)),
					a = O.extend(t, s);
				return this.handleUserInputErrors(a)
			}
		}, {
			key: "checkFBankrupttToNumericXAxis",
			value: function(t, e, i) {
				var s = new r(i),
					a = ("bar" === t || "boxPlot" === t) && (null == (a = i.plotOptions) || null == (a = a.bar) ? void 0 : a.horizontal),
					n = "datetime" !== i.xaxis.type && "numeric" !== i.xaxis.type,
					e = i.xaxis.tickPlacement || e.xaxis && e.xaxis.tickPlacement;
				return i = a || ("pie" === t || "polarArea" === t || "donut" === t || "radar" === t || "radialBar" === t || "heatmap" === t) || !n || "between" === e ? i : s.convertCatToNumeric(i)
			}
		}, {
			key: "extendYAxis",
			value: function(i, t) {
				var s = new d,
					e = ((void 0 === i.yaxis || !i.yaxis || Array.isArray(i.yaxis) && 0 === i.yaxis.length) && (i.yaxis = {}), i.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (i.yaxis = O.extend(i.yaxis, window.Apex.yaxis)), i.yaxis.constructor !== Array ? i.yaxis = [O.extend(s.yAxis, i.yaxis)] : i.yaxis = O.extendArray(i.yaxis, s.yAxis), !1),
					a = (i.yaxis.forEach(function(t) {
						t.logarithmic && (e = !0)
					}), i.series);
				return t && !a && (a = t.config.series), e && a.length !== i.yaxis.length && a.length && (i.yaxis = a.map(function(t, e) {
					return t.name || (a[e].name = "series-".concat(e + 1)), i.yaxis[e] ? (i.yaxis[e].seriesName = a[e].name, i.yaxis[e]) : ((t = O.extend(s.yAxis, i.yaxis[0])).show = !1, t)
				})), e && 1 < a.length && a.length !== i.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."), i
			}
		}, {
			key: "extendAnnotations",
			value: function(t) {
				return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), this.extendPointAnnotations(t)
			}
		}, {
			key: "extendYAxisAnnotations",
			value: function(t) {
				var e = new d;
				return t.annotations.yaxis = O.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation), t
			}
		}, {
			key: "extendXAxisAnnotations",
			value: function(t) {
				var e = new d;
				return t.annotations.xaxis = O.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation), t
			}
		}, {
			key: "extendPointAnnotations",
			value: function(t) {
				var e = new d;
				return t.annotations.points = O.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation), t
			}
		}, {
			key: "checkForDarkTheme",
			value: function(t) {
				t.theme && "dark" === t.theme.mode && (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.chart.background || (t.chart.background = "#424242"), t.theme.palette || (t.theme.palette = "palette4"))
			}
		}, {
			key: "handleUserInputErrors",
			value: function(t) {
				if (t.tooltip.shared && t.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
				if ("bar" === t.chart.type && t.plotOptions.bar.horizontal) {
					if (1 < t.yaxis.length) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
					t.yaxis[0].reversed && (t.yaxis[0].opposite = !0), t.xaxis.tooltip.enabled = !1, t.yaxis[0].tooltip.enabled = !1, t.chart.zoom.enabled = !1
				}
				return "bar" !== t.chart.type && "rangeBar" !== t.chart.type || t.tooltip.shared && "barWidth" === t.xaxis.crosshairs.width && 1 < t.series.length && (t.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== t.chart.type && "boxPlot" !== t.chart.type || t.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(t.chart.type, " chart is not supported.")), t.yaxis[0].reversed = !1), t
			}
		}]), qe),
		ut = (t(Ge, [{
			key: "initGlobalVars",
			value: function(t) {
				t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleM = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRange = [], t.seriesPercent = [], t.seriesGoals = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.seriesLog = [], t.seriesColors = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.hasXaxisGroups = !1, t.groups = [], t.hasSeriesGroups = !1, t.seriesGroups = [], t.categoryLabels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.isDataXYZ = !1, t.isMultiLineX = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialMaxX = -Number.MAX_VALUE, t.initialMinX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.barPadForNumericAxis = 0, t.padHorizontal = 0, t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0, t.xTickAmount = 0
			}
		}, {
			key: "globalVars",
			value: function(t) {
				return {
					chartID: null,
					cuid: null,
					events: {
						beforeMount: [],
						mounted: [],
						updated: [],
						clicked: [],
						selection: [],
						dataPointSelection: [],
						zoomed: [],
						scrolled: []
					},
					colors: [],
					clientX: null,
					clientY: null,
					fill: {
						colors: []
					},
					stroke: {
						colors: []
					},
					dataLabels: {
						style: {
							colors: []
						}
					},
					radarPolygons: {
						fill: {
							colors: []
						}
					},
					markers: {
						colors: [],
						size: t.markers.size,
						largestSize: 0
					},
					animationEnded: !1,
					isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
					isDirty: !1,
					isExecCalled: !1,
					initialConfig: null,
					initialSeries: [],
					lastXAxis: [],
					lastYAxis: [],
					columnSeries: null,
					labels: [],
					timescaleLabels: [],
					noLabelsProvided: !1,
					allSeriesCollapsed: !1,
					collapsedSeries: [],
					collapsedSeriesIndices: [],
					ancillaryCollapsedSeries: [],
					ancillaryCollapsedSeriesIndices: [],
					risingSeries: [],
					dataFormatXNumeric: !1,
					capturedSeriesIndex: -1,
					capturedDataPointIndex: -1,
					selectedDataPoints: [],
					goldenPadding: 35,
					invalidLogScale: !1,
					ignoreYAxisIndexes: [],
					yAxisSameScaleIndices: [],
					maxValsInArrayIndex: 0,
					radialSize: 0,
					selection: void 0,
					zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
					panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
					selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
					yaxis: null,
					mousedown: !1,
					lastClientPosition: {},
					visibleXRange: void 0,
					yValueDecimal: 0,
					total: 0,
					SVGNS: "http://www.w3.org/2000/svg",
					svgWidth: 0,
					svgHeight: 0,
					noData: !1,
					locale: {},
					dom: {},
					memory: {
						methodsToExec: []
					},
					shouldAnimate: !0,
					skipLastTimelinelabel: !1,
					skipFirstTimelinelabel: !1,
					delayedElements: [],
					axisCharts: !0,
					isDataXYZ: !1,
					resized: !1,
					resizeTimer: null,
					comboCharts: !1,
					dataChanged: !1,
					previousPaths: [],
					allSeriesHasEqualX: !0,
					pointsArray: [],
					dataLabelsRects: [],
					lastDrawnDataLabelsIndexes: [],
					hasNullValues: !1,
					easing: null,
					zoomed: !1,
					gridWidth: 0,
					gridHeight: 0,
					rotateXLabels: !1,
					defaultLabels: !1,
					xLabelFormatter: void 0,
					yLabelFormatters: [],
					xaxisTooltipFormatter: void 0,
					ttKeyFormatter: void 0,
					ttVal: void 0,
					ttZFormatter: void 0,
					LINE_HEIGHT_RATIO: 1.618,
					xAxisLabelsHeight: 0,
					xAxisGroupLabelsHeight: 0,
					xAxisLabelsWidth: 0,
					yAxisLabelsWidth: 0,
					scaleX: 1,
					scaleY: 1,
					translateX: 0,
					translateY: 0,
					translateYAxisX: [],
					yAxisWidths: [],
					translateXAxisY: 0,
					translateXAxisX: 0,
					tooltip: null
				}
			}
		}, {
			key: "init",
			value: function(t) {
				var e = this.globalVars(t);
				return this.initGlobalVars(e), e.initialConfig = O.extend({}, t), e.initialSeries = O.clone(t.series), e.lastXAxis = O.clone(e.initialConfig.xaxis), e.lastYAxis = O.clone(e.initialConfig.yaxis), e
			}
		}]), Ge),
		gt = (t(Ve, [{
			key: "init",
			value: function() {
				var t = new p(this.opts).init({
					responsiveOverride: !1
				});
				return {
					config: t,
					globals: (new ut).init(t)
				}
			}
		}]), Ve),
		C = (t(je, [{
			key: "clippedImgArea",
			value: function(t) {
				var e = this.w,
					i = e.config,
					s = parseInt(e.globals.gridWidth, 10),
					a = parseInt(e.globals.gridHeight, 10),
					s = a < s ? s : a,
					a = t.image,
					n = 0,
					o = 0,
					o = void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (n = i.fill.image.width + 1, i.fill.image.height) : (n = s + 1, s) : (n = t.width, t.height),
					i = document.createElementNS(e.globals.SVGNS, "pattern"),
					s = (D.setAttrs(i, {
						id: t.patternID,
						patternUnits: t.patternUnits || "userSpaceOnUse",
						width: n + "px",
						height: o + "px"
					}), document.createElementNS(e.globals.SVGNS, "image"));
				i.appendChild(s), s.setAttributeNS(window.SVG.xlink, "href", a), D.setAttrs(s, {
					x: 0,
					y: 0,
					preserveAspectRatio: "none",
					width: n + "px",
					height: o + "px"
				}), s.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(i)
			}
		}, {
			key: "getSeriesIndex",
			value: function(t) {
				var e = this.w,
					i = e.config.chart.type;
				return ("bar" === i || "rangeBar" === i) && e.config.plotOptions.bar.distributed || "heatmap" === i || "treemap" === i ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex
			}
		}, {
			key: "fillPath",
			value: function(t) {
				var e = this.w;
				this.opts = t;
				var i, s, a = this.w.config,
					n = (this.seriesIndex = this.getSeriesIndex(t), this.getFillColors()[this.seriesIndex]),
					o = ("function" == typeof(n = void 0 !== e.globals.seriesColors[this.seriesIndex] ? e.globals.seriesColors[this.seriesIndex] : n) && (n = n({
						seriesIndex: this.seriesIndex,
						dataPointIndex: t.dataPointIndex,
						value: t.value,
						w: e
					})), t.fillType || this.getFillType(this.seriesIndex)),
					r = Array.isArray(a.fill.opacity) ? a.fill.opacity[this.seriesIndex] : a.fill.opacity,
					l = n = t.color ? t.color : n;
				return -1 === n.indexOf("rgb") ? n.length < 9 && (l = O.hexToRgba(n, r)) : -1 < n.indexOf("rgba") && (r = O.getOpacityFromRGBA(n)), t.opacity && (r = t.opacity), "pattern" === o && (i = this.handlePatternFill({
					fillConfig: t.fillConfig,
					patternFill: i,
					fillColor: n,
					fillOpacity: r,
					defaultColor: l
				})), "gradient" === o && (s = this.handleGradientFill({
					fillConfig: t.fillConfig,
					fillColor: n,
					fillOpacity: r,
					i: this.seriesIndex
				})), r = "image" === o ? (n = a.fill.image.src, a = t.patternID || "", this.clippedImgArea({
					opacity: r,
					image: Array.isArray(n) ? t.seriesNumber < n.length ? n[t.seriesNumber] : n[0] : n,
					width: t.width || void 0,
					height: t.height || void 0,
					patternUnits: t.patternUnits,
					patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(a)
				}), "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(a, ")")) : "gradient" === o ? s : "pattern" === o ? i : l, r = t.solid ? l : r
			}
		}, {
			key: "getFillType",
			value: function(t) {
				var e = this.w;
				return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type
			}
		}, {
			key: "getFillColors",
			value: function() {
				var t = this.w,
					e = t.config,
					i = this.opts,
					s = [];
				return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? Array.isArray(t.globals.stroke.colors) ? s = t.globals.stroke.colors : s.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? s = t.globals.fill.colors : s.push(t.globals.fill.colors) : "line" === e.chart.type ? Array.isArray(t.globals.stroke.colors) ? s = t.globals.stroke.colors : s.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? s = t.globals.fill.colors : s.push(t.globals.fill.colors), void 0 !== i.fillColors && (s = [], Array.isArray(i.fillColors) ? s = i.fillColors.slice() : s.push(i.fillColors)), s
			}
		}, {
			key: "handlePatternFill",
			value: function(t) {
				var e = t.fillConfig,
					i = (t.patternFill, t.fillColor),
					s = t.fillOpacity,
					t = t.defaultColor,
					a = this.w.config.fill,
					e = (e && (a = e), this.opts),
					n = new D(this.ctx),
					o = Array.isArray(a.pattern.strokeWidth) ? a.pattern.strokeWidth[this.seriesIndex] : a.pattern.strokeWidth;
				return Array.isArray(a.pattern.style) ? void 0 !== a.pattern.style[e.seriesNumber] ? n.drawPattern(a.pattern.style[e.seriesNumber], a.pattern.width, a.pattern.height, i, o, s) : t : n.drawPattern(a.pattern.style, a.pattern.width, a.pattern.height, i, o, s)
			}
		}, {
			key: "handleGradientFill",
			value: function(t) {
				var e = t.fillColor,
					i = t.fillOpacity,
					s = t.fillConfig,
					t = t.i,
					a = this.w.config.fill;
				s && (a = P(P({}, a), s));
				var n, s = this.opts,
					o = new D(this.ctx),
					r = new O,
					l = a.gradient.type,
					c = e,
					h = void 0 === a.gradient.opacityFrom ? i : Array.isArray(a.gradient.opacityFrom) ? a.gradient.opacityFrom[t] : a.gradient.opacityFrom,
					i = (-1 < c.indexOf("rgba") && (h = O.getOpacityFromRGBA(c)), void 0 === a.gradient.opacityTo ? i : Array.isArray(a.gradient.opacityTo) ? a.gradient.opacityTo[t] : a.gradient.opacityTo);
				return void 0 === a.gradient.gradientToColors || 0 === a.gradient.gradientToColors.length ? n = "dark" === a.gradient.shade ? r.shadeColor(-1 * parseFloat(a.gradient.shadeIntensity), -1 < e.indexOf("rgb") ? O.rgb2hex(e) : e) : r.shadeColor(parseFloat(a.gradient.shadeIntensity), -1 < e.indexOf("rgb") ? O.rgb2hex(e) : e) : a.gradient.gradientToColors[s.seriesNumber] ? -1 < (n = r = a.gradient.gradientToColors[s.seriesNumber]).indexOf("rgba") && (i = O.getOpacityFromRGBA(r)) : n = e, a.gradient.gradientFrom && (c = a.gradient.gradientFrom), a.gradient.gradientTo && (n = a.gradient.gradientTo), a.gradient.inverseColors && (r = c, c = n, n = r), -1 < c.indexOf("rgb") && (c = O.rgb2hex(c)), -1 < n.indexOf("rgb") && (n = O.rgb2hex(n)), o.drawGradient(l, c, n, h, i, s.size, a.gradient.stops, a.gradient.colorStops, t)
			}
		}]), je),
		w = (t(Be, [{
			key: "setGlobalMarkerSize",
			value: function() {
				var e = this.w;
				if (e.globals.markers.size = Array.isArray(e.config.markers.size) ? e.config.markers.size : [e.config.markers.size], 0 < e.globals.markers.size.length) {
					if (e.globals.markers.size.length < e.globals.series.length + 1)
						for (var t = 0; t <= e.globals.series.length; t++) void 0 === e.globals.markers.size[t] && e.globals.markers.size.push(e.globals.markers.size[0])
				} else e.globals.markers.size = e.config.series.map(function(t) {
					return e.config.markers.size
				})
			}
		}, {
			key: "plotChartMarkers",
			value: function(t, e, i, s) {
				var a, n = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
					o = this.w,
					r = e,
					l = t,
					c = null,
					h = new D(this.ctx),
					d = o.config.markers.discrete && o.config.markers.discrete.length;
				if ((0 < o.globals.markers.size[e] || n || d) && (c = h.group({
						class: n || d ? "" : "apexcharts-series-markers"
					})).attr("clip-path", "url(#gridRectMarkerMask".concat(o.globals.cuid, ")")), Array.isArray(l.x))
					for (var u = 0; u < l.x.length; u++) {
						var g = 1 === i && 1 === u ? 1 : 1 === i && 0 === u ? 0 : i,
							p = "apexcharts-marker";
						"line" !== o.config.chart.type && "area" !== o.config.chart.type || o.globals.comboCharts || o.config.tooltip.intersect || (p += " no-pointer-events"), (Array.isArray(o.config.markers.size) ? 0 < o.globals.markers.size[e] : 0 < o.config.markers.size) || n || d ? (O.isNumber(l.y[u]) ? p += " w".concat(O.randomId()) : p = "apexcharts-nullpoint", p = this.getMarkerConfig({
							cssClass: p,
							seriesIndex: e,
							dataPointIndex: g
						}), o.config.series[r].data[g] && (o.config.series[r].data[g].fillColor && (p.pointFillColor = o.config.series[r].data[g].fillColor), o.config.series[r].data[g].strokeColor) && (p.pointStrokeColor = o.config.series[r].data[g].strokeColor), s && (p.pSize = s), (l.x[u] < 0 || l.x[u] > o.globals.gridWidth || l.y[u] < 0 || l.y[u] > o.globals.gridHeight) && (p.pSize = 0), (a = h.drawMarker(l.x[u], l.y[u], p)).attr("rel", g), a.attr("j", g), a.attr("index", e), a.node.setAttribute("default-marker-size", p.pSize), new L(this.ctx).setSelectionFilter(a, e, g), this.addEvents(a), c && c.add(a)) : (void 0 === o.globals.pointsArray[e] && (o.globals.pointsArray[e] = []), o.globals.pointsArray[e].push([l.x[u], l.y[u]]))
					}
				return c
			}
		}, {
			key: "getMarkerConfig",
			value: function(t) {
				var e = t.cssClass,
					i = t.seriesIndex,
					s = t.dataPointIndex,
					a = void 0 === s ? null : s,
					s = t.finishRadius,
					t = void 0 === s ? null : s,
					s = this.w,
					n = this.getMarkerStyle(i),
					o = s.globals.markers.size[i],
					s = s.config.markers;
				return null !== a && s.discrete.length && s.discrete.map(function(t) {
					t.seriesIndex === i && t.dataPointIndex === a && (n.pointStrokeColor = t.strokeColor, n.pointFillColor = t.fillColor, o = t.size, n.pointShape = t.shape)
				}), {
					pSize: null === t ? o : t,
					pRadius: s.radius,
					width: Array.isArray(s.width) ? s.width[i] : s.width,
					height: Array.isArray(s.height) ? s.height[i] : s.height,
					pointStrokeWidth: Array.isArray(s.strokeWidth) ? s.strokeWidth[i] : s.strokeWidth,
					pointStrokeColor: n.pointStrokeColor,
					pointFillColor: n.pointFillColor,
					shape: n.pointShape || (Array.isArray(s.shape) ? s.shape[i] : s.shape),
					class: e,
					pointStrokeOpacity: Array.isArray(s.strokeOpacity) ? s.strokeOpacity[i] : s.strokeOpacity,
					pointStrokeDashArray: Array.isArray(s.strokeDashArray) ? s.strokeDashArray[i] : s.strokeDashArray,
					pointFillOpacity: Array.isArray(s.fillOpacity) ? s.fillOpacity[i] : s.fillOpacity,
					seriesIndex: i
				}
			}
		}, {
			key: "addEvents",
			value: function(t) {
				var e = this.w,
					i = new D(this.ctx);
				t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), {
					passive: !0
				})
			}
		}, {
			key: "getMarkerStyle",
			value: function(t) {
				var e = this.w,
					i = e.globals.markers.colors,
					e = e.config.markers.strokeColor || e.config.markers.strokeColors;
				return {
					pointStrokeColor: Array.isArray(e) ? e[t] : e,
					pointFillColor: Array.isArray(i) ? i[t] : i
				}
			}
		}]), Be),
		pt = (t(We, [{
			key: "draw",
			value: function(t, e, i) {
				var s = this.w,
					a = new D(this.ctx),
					n = i.realIndex,
					o = i.pointsPos,
					r = i.zRatio,
					l = i.elParent,
					c = a.group({
						class: "apexcharts-series-markers apexcharts-series-".concat(s.config.chart.type)
					});
				if (c.attr("clip-path", "url(#gridRectMarkerMask".concat(s.globals.cuid, ")")), Array.isArray(o.x))
					for (var h = 0; h < o.x.length; h++) {
						var d = e + 1,
							u = !0,
							g = (0 === e && 0 === h && (d = 0), 0 === e && 1 === h && (d = 1), 0),
							p = s.globals.markers.size[n],
							f = (r !== 1 / 0 && (f = s.config.plotOptions.bubble, p = s.globals.seriesZ[n][d], f.zScaling && (p /= r), f.minBubbleRadius && p < f.minBubbleRadius && (p = f.minBubbleRadius), f.maxBubbleRadius) && p > f.maxBubbleRadius && (p = f.maxBubbleRadius), s.config.chart.animations.enabled || (g = p), o.x[h]),
							x = o.y[h],
							g = g || 0;
						(u = null !== x && void 0 !== s.globals.series[n][d] && u) && (u = this.drawPoint(f, x, g, p, n, d, e), c.add(u)), l.add(c)
					}
			}
		}, {
			key: "drawPoint",
			value: function(t, e, i, s, a, n, o) {
				var r = this.w,
					l = a,
					c = new A(this.ctx),
					h = new L(this.ctx),
					d = new C(this.ctx),
					u = new w(this.ctx),
					g = new D(this.ctx),
					p = u.getMarkerConfig({
						cssClass: "apexcharts-marker",
						seriesIndex: l,
						dataPointIndex: n,
						finishRadius: "bubble" === r.config.chart.type || r.globals.comboCharts && r.config.series[a] && "bubble" === r.config.series[a].type ? s : null
					});
				s = p.pSize;
				var f, d = d.fillPath({
					seriesNumber: a,
					dataPointIndex: n,
					color: p.pointFillColor,
					patternUnits: "objectBoundingBox",
					value: r.globals.series[a][o]
				});
				if ("circle" === p.shape ? f = g.drawCircle(i) : "square" !== p.shape && "rect" !== p.shape || (f = g.drawRect(0, 0, p.width - p.pointStrokeWidth / 2, p.height - p.pointStrokeWidth / 2, p.pRadius)), r.config.series[l].data[n] && r.config.series[l].data[n].fillColor && (d = r.config.series[l].data[n].fillColor), f.attr({
						x: t - p.width / 2 - p.pointStrokeWidth / 2,
						y: e - p.height / 2 - p.pointStrokeWidth / 2,
						cx: t,
						cy: e,
						fill: d,
						"fill-opacity": p.pointFillOpacity,
						stroke: p.pointStrokeColor,
						r: s,
						"stroke-width": p.pointStrokeWidth,
						"stroke-dasharray": p.pointStrokeDashArray,
						"stroke-opacity": p.pointStrokeOpacity
					}), r.config.chart.dropShadow.enabled && (i = r.config.chart.dropShadow, h.dropShadow(f, i, a)), !this.initialAnim || r.globals.dataChanged || r.globals.resized ? r.globals.animationEnded = !0 : (g = r.config.chart.animations.speed, c.animateMarker(f, 0, "circle" === p.shape ? s : {
						width: p.width,
						height: p.height
					}, g, r.globals.easing, function() {
						window.setTimeout(function() {
							c.animationCompleted(f)
						}, 100)
					})), r.globals.dataChanged && "circle" === p.shape)
					if (this.dynamicAnim) {
						var x, m, b, v = r.config.chart.animations.dynamicAnimation.speed;
						null != (l = r.globals.previousPaths[a] && r.globals.previousPaths[a][o]) && (x = l.x, m = l.y, b = void 0 !== l.r ? l.r : s);
						for (var y = 0; y < r.globals.collapsedSeries.length; y++) r.globals.collapsedSeries[y].index === a && (v = 1, s = 0);
						c.animateCircle(f, {
							cx: x,
							cy: m,
							r: b
						}, {
							cx: t,
							cy: e,
							r: s = 0 === t && 0 === e ? 0 : s
						}, v, r.globals.easing)
					} else f.attr({
						r: s
					});
				return f.attr({
					rel: n,
					j: n,
					index: a,
					"default-marker-size": s
				}), h.setSelectionFilter(f, a, n), u.addEvents(f), f.node.classList.add("apexcharts-marker"), f
			}
		}, {
			key: "centerTextInBubble",
			value: function(t) {
				var e = this.w;
				return {
					y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4
				}
			}
		}]), We),
		k = (t(Ye, [{
			key: "dataLabelsCorrection",
			value: function(t, e, i, s, a, n, o) {
				var r = this.w,
					l = !1,
					i = new D(this.ctx).getTextRects(i, o),
					o = i.width,
					c = i.height,
					c = ((e = e < 0 ? 0 : e) > r.globals.gridHeight + c && (e = r.globals.gridHeight + c / 2), void 0 === r.globals.dataLabelsRects[s] && (r.globals.dataLabelsRects[s] = []), r.globals.dataLabelsRects[s].push({
						x: t,
						y: e,
						width: o,
						height: c
					}), r.globals.dataLabelsRects[s].length - 2),
					h = void 0 !== r.globals.lastDrawnDataLabelsIndexes[s] ? r.globals.lastDrawnDataLabelsIndexes[s][r.globals.lastDrawnDataLabelsIndexes[s].length - 1] : 0;
				return void 0 !== r.globals.dataLabelsRects[s][c] && (t > (c = r.globals.dataLabelsRects[s][h]).x + c.width + 2 || e > c.y + c.height + 2 || t + o < c.x) && (l = !0), {
					x: t,
					y: e,
					textRects: i,
					drawnextLabel: l = 0 !== a && !n ? l : !0
				}
			}
		}, {
			key: "drawDataLabel",
			value: function(t) {
				var e = this,
					i = t.type,
					s = t.pos,
					a = t.i,
					n = t.j,
					o = t.isRangeStart,
					t = t.strokeWidth,
					r = void 0 === t ? 2 : t,
					l = this.w,
					t = new D(this.ctx),
					c = l.config.dataLabels,
					h = 0,
					d = n;
				if (!c.enabled || !Array.isArray(s.x)) return null;
				for (var u = t.group({
						class: "apexcharts-data-labels"
					}), g = 0; g < s.x.length; g++) {
					var p, f, x, m = s.x[g] + c.offsetX,
						h = s.y[g] + c.offsetY + r;
					isNaN(m) || (1 === n && 0 === g && (d = 0), 1 === n && 1 === g && (d = 1), p = l.globals.series[a][d], "rangeArea" === i && (p = (o ? l.globals.seriesRangeStart : l.globals.seriesRangeEnd)[a][d]), f = "", x = function(t) {
						return l.config.dataLabels.formatter(t, {
							ctx: e.ctx,
							seriesIndex: a,
							dataPointIndex: d,
							w: l
						})
					}, "bubble" === l.config.chart.type ? (f = x(p = l.globals.seriesZ[a][d]), h = s.y[g], h = new pt(this.ctx).centerTextInBubble(h, a, d).y) : void 0 !== p && (f = x(p)), this.plotDataLabelsText({
						x: m,
						y: h,
						text: f,
						i: a,
						j: d,
						parent: u,
						offsetCorrection: !0,
						dataLabelsConfig: l.config.dataLabels
					}))
				}
				return u
			}
		}, {
			key: "plotDataLabelsText",
			value: function(t) {
				var e, i = this.w,
					s = new D(this.ctx),
					a = t.x,
					n = t.y,
					o = t.i,
					r = t.j,
					l = t.text,
					c = t.textAnchor,
					h = t.fontSize,
					d = t.parent,
					u = t.dataLabelsConfig,
					g = t.color,
					p = t.alwaysDrawDataLabel,
					t = t.offsetCorrection;
				Array.isArray(i.config.dataLabels.enabledOnSeries) && i.config.dataLabels.enabledOnSeries.indexOf(o) < 0 || (e = {
					x: a,
					y: n,
					drawnextLabel: !0,
					textRects: null
				}, t && (e = this.dataLabelsCorrection(a, n, l, o, r, p, parseInt(u.style.fontSize, 10))), i.globals.zoomed || (a = e.x, n = e.y), e.textRects && (a < -10 - e.textRects.width || a > i.globals.gridWidth + e.textRects.width + 10) && (l = ""), t = i.globals.dataLabels.style.colors[o], "function" == typeof(t = ("bar" === i.config.chart.type || "rangeBar" === i.config.chart.type) && i.config.plotOptions.bar.distributed || i.config.dataLabels.distributed ? i.globals.dataLabels.style.colors[r] : t) && (t = t({
					series: i.globals.series,
					seriesIndex: o,
					dataPointIndex: r,
					w: i
				})), g && (t = g), p = u.offsetX, g = u.offsetY, "bar" !== i.config.chart.type && "rangeBar" !== i.config.chart.type || (g = p = 0), e.drawnextLabel && ((e = s.drawText({
					width: 100,
					height: parseInt(u.style.fontSize, 10),
					x: a + p,
					y: n + g,
					foreColor: t,
					textAnchor: c || u.textAnchor,
					text: l,
					fontSize: h || u.style.fontSize,
					fontFamily: u.style.fontFamily,
					fontWeight: u.style.fontWeight || "normal"
				})).attr({
					class: "apexcharts-datalabel",
					cx: a,
					cy: n
				}), u.dropShadow.enabled && (s = u.dropShadow, new L(this.ctx).dropShadow(e, s)), d.add(e), void 0 === i.globals.lastDrawnDataLabelsIndexes[o] && (i.globals.lastDrawnDataLabelsIndexes[o] = []), i.globals.lastDrawnDataLabelsIndexes[o].push(r)))
			}
		}, {
			key: "addBackgroundToDataLabel",
			value: function(t, e) {
				var i = this.w,
					s = i.config.dataLabels.background,
					a = s.padding,
					n = s.padding / 2,
					o = e.width,
					r = e.height,
					e = new D(this.ctx).drawRect(e.x - a, e.y - n / 2, o + 2 * a, r + n, s.borderRadius, "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background, s.opacity, s.borderWidth, s.borderColor);
				return s.dropShadow.enabled && new L(this.ctx).dropShadow(e, s.dropShadow), e
			}
		}, {
			key: "dataLabelsBackground",
			value: function() {
				var t = this.w;
				if ("bubble" !== t.config.chart.type)
					for (var e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < e.length; i++) {
						var s = e[i],
							a = s.getBBox(),
							n = null;
						(n = a.width && a.height ? this.addBackgroundToDataLabel(s, a) : n) && (s.parentNode.insertBefore(n.node, s), a = s.getAttribute("fill"), (!t.config.chart.animations.enabled || t.globals.resized || t.globals.dataChanged ? n : n.animate()).attr({
							fill: a
						}), s.setAttribute("fill", t.config.dataLabels.background.foreColor))
					}
			}
		}, {
			key: "bringForward",
			value: function() {
				for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), s = 0; s < e.length; s++) i && i.insertBefore(e[s], i.nextSibling)
			}
		}]), Ye),
		S = (t(He, [{
			key: "getAllSeriesEls",
			value: function() {
				return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")
			}
		}, {
			key: "getSeriesByName",
			value: function(t) {
				return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(O.escapeString(t), "']"))
			}
		}, {
			key: "isSeriesHidden",
			value: function(t) {
				var t = this.getSeriesByName(t),
					e = parseInt(t.getAttribute("data:realIndex"), 10);
				return {
					isHidden: t.classList.contains("apexcharts-series-collapsed"),
					realIndex: e
				}
			}
		}, {
			key: "addCollapsedClassToSeries",
			value: function(i, s) {
				var t = this.w;

				function e(t) {
					for (var e = 0; e < t.length; e++) t[e].index === s && i.node.classList.add("apexcharts-series-collapsed")
				}
				e(t.globals.collapsedSeries), e(t.globals.ancillaryCollapsedSeries)
			}
		}, {
			key: "toggleSeries",
			value: function(t) {
				t = this.isSeriesHidden(t);
				return this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, t.isHidden), t.isHidden
			}
		}, {
			key: "showSeries",
			value: function(t) {
				t = this.isSeriesHidden(t);
				t.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !0)
			}
		}, {
			key: "hideSeries",
			value: function(t) {
				t = this.isSeriesHidden(t);
				t.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !1)
			}
		}, {
			key: "resetSeries",
			value: function() {
				var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
					e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
					i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
					s = this.w,
					a = O.clone(s.globals.initialSeries);
				s.globals.previousPaths = [], i ? (s.globals.collapsedSeries = [], s.globals.ancillaryCollapsedSeries = [], s.globals.collapsedSeriesIndices = [], s.globals.ancillaryCollapsedSeriesIndices = []) : a = this.emptyCollapsedSeries(a), s.config.series = a, t && (e && (s.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(a, s.config.chart.animations.dynamicAnimation.enabled))
			}
		}, {
			key: "emptyCollapsedSeries",
			value: function(t) {
				for (var e = this.w, i = 0; i < t.length; i++) - 1 < e.globals.collapsedSeriesIndices.indexOf(i) && (t[i].data = []);
				return t
			}
		}, {
			key: "toggleSeriesOnHover",
			value: function(t, e) {
				var i = this.w,
					s = (e = e || t.target, i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels"));
				if ("mousemove" === t.type) {
					var e = parseInt(e.getAttribute("rel"), 10) - 1,
						a = null,
						n = null;
					i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? (a = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "']")), n = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(e, "']"))) : a = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(1 + e, "']")) : a = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(1 + e, "'] path"));
					for (var o = 0; o < s.length; o++) s[o].classList.add(this.legendInactiveClass);
					null !== a && (i.globals.axisCharts || a.parentNode.classList.remove(this.legendInactiveClass), a.classList.remove(this.legendInactiveClass), null !== n) && n.classList.remove(this.legendInactiveClass)
				} else if ("mouseout" === t.type)
					for (var r = 0; r < s.length; r++) s[r].classList.remove(this.legendInactiveClass)
			}
		}, {
			key: "highlightRangeInSeries",
			value: function(t, e) {
				function i(t) {
					for (var e = 0; e < n.length; e++) n[e].classList[t](s.legendInactiveClass)
				}
				var s = this,
					a = this.w,
					n = a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect");
				if ("mousemove" === t.type)
					for (var e = parseInt(e.getAttribute("rel"), 10) - 1, o = (i("add"), a.config.plotOptions.heatmap.colorScale.ranges[e]), r = 0; r < n.length; r++) {
						var l = parseInt(n[r].getAttribute("val"), 10);
						l >= o.from && l <= o.to && n[r].classList.remove(s.legendInactiveClass)
					} else "mouseout" === t.type && i("remove")
			}
		}, {
			key: "getActiveConfigSeriesIndex",
			value: function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "asc",
					i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
					s = this.w,
					e = 0;
				if (1 < s.config.series.length)
					for (var a = s.config.series.map(function(t, e) {
							return t.data && 0 < t.data.length && -1 === s.globals.collapsedSeriesIndices.indexOf(e) && (!s.globals.comboCharts || 0 === i.length || i.length && -1 < i.indexOf(s.config.series[e].type)) ? e : -1
						}), n = "asc" === t ? 0 : a.length - 1;
						"asc" === t ? n < a.length : 0 <= n;
						"asc" === t ? n++ : n--)
						if (-1 !== a[n]) {
							e = a[n];
							break
						} return e
			}
		}, {
			key: "getBarSeriesIndices",
			value: function() {
				return this.w.globals.comboCharts ? this.w.config.series.map(function(t, e) {
					return "bar" === t.type || "column" === t.type ? e : -1
				}).filter(function(t) {
					return -1 !== t
				}) : this.w.config.series.map(function(t, e) {
					return e
				})
			}
		}, {
			key: "getPreviousPaths",
			value: function() {
				var h = this.w;
				h.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(t) {
					for (var e = h.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series")), i = 0; i < e.length; i++) {
						s = void 0;
						a = void 0;
						n = void 0;
						r = void 0;
						l = void 0;
						c = void 0;
						o = void 0;
						var s = e;
						var a = i;
						var n = t;
						for (var o, r = s[a].childNodes, l = {
								type: n,
								paths: [],
								realIndex: s[a].getAttribute("data:realIndex")
							}, c = 0; c < r.length; c++) r[c].hasAttribute("pathTo") && (o = r[c].getAttribute("pathTo"), l.paths.push({
							d: o
						}));
						h.globals.previousPaths.push(l)
					}
				}), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
				var t = h.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(h.config.chart.type, " .apexcharts-series"));
				if (0 < t.length)
					for (var e = 0; e < t.length; e++) ! function(t) {
						for (var s = h.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(h.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(t, "'] rect")), a = [], e = 0; e < s.length; e++) ! function(e) {
							function t(t) {
								return s[e].getAttribute(t)
							}
							var i = {
								x: parseFloat(t("x")),
								y: parseFloat(t("y")),
								width: parseFloat(t("width")),
								height: parseFloat(t("height"))
							};
							a.push({
								rect: i,
								color: s[e].getAttribute("color")
							})
						}(e);
						h.globals.previousPaths.push(a)
					}(e);
				h.globals.axisCharts || (h.globals.previousPaths = h.globals.series)
			}
		}, {
			key: "handlePrevBubbleScatterPaths",
			value: function(t) {
				var e = this.w,
					i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series"));
				if (0 < i.length)
					for (var s = 0; s < i.length; s++) {
						for (var a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\:realIndex='").concat(s, "'] circle")), n = [], o = 0; o < a.length; o++) n.push({
							x: a[o].getAttribute("cx"),
							y: a[o].getAttribute("cy"),
							r: a[o].getAttribute("r")
						});
						e.globals.previousPaths.push(n)
					}
			}
		}, {
			key: "clearPreviousPaths",
			value: function() {
				var t = this.w;
				t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1
			}
		}, {
			key: "handleNoData",
			value: function() {
				var t = this.w,
					e = t.config.noData,
					i = new D(this.ctx),
					s = t.globals.svgWidth / 2,
					a = t.globals.svgHeight / 2,
					n = "middle";
				t.globals.noData = !0, t.globals.animationEnded = !0, "left" === e.align ? (s = 10, n = "start") : "right" === e.align && (s = t.globals.svgWidth - 10, n = "end"), "top" === e.verticalAlign ? a = 50 : "bottom" === e.verticalAlign && (a = t.globals.svgHeight - 50), s += e.offsetX, a = a + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, void 0 !== e.text && "" !== e.text && (i = i.drawText({
					x: s,
					y: a,
					text: e.text,
					textAnchor: n,
					fontSize: e.style.fontSize,
					fontFamily: e.style.fontFamily,
					foreColor: e.style.color,
					opacity: 1,
					class: "apexcharts-text-nodata"
				}), t.globals.dom.Paper.add(i))
			}
		}, {
			key: "setNullSeriesToZeroValues",
			value: function(t) {
				for (var e = this.w, i = 0; i < t.length; i++)
					if (0 === t[i].length)
						for (var s = 0; s < t[e.globals.maxValsInArrayIndex].length; s++) t[i].push(0);
				return t
			}
		}, {
			key: "hasAllSeriesEqualX",
			value: function() {
				for (var t = !0, e = this.w, i = this.filteredSeriesX(), s = 0; s < i.length - 1; s++)
					if (i[s][0] !== i[s + 1][0]) {
						t = !1;
						break
					} return e.globals.allSeriesHasEqualX = t
			}
		}, {
			key: "filteredSeriesX",
			value: function() {
				return this.w.globals.seriesX.map(function(t) {
					return 0 < t.length ? t : []
				})
			}
		}]), He),
		ft = (t(Re, [{
			key: "isMultiFormat",
			value: function() {
				return this.isFormatXY() || this.isFormat2DArray()
			}
		}, {
			key: "isFormatXY",
			value: function() {
				var t = this.w.config.series.slice(),
					e = new S(this.ctx);
				if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && 0 < t[this.activeSeriesIndex].data.length && null !== t[this.activeSeriesIndex].data[0] && void 0 !== t[this.activeSeriesIndex].data[0].x && null !== t[this.activeSeriesIndex].data[0]) return !0
			}
		}, {
			key: "isFormat2DArray",
			value: function() {
				var t = this.w.config.series.slice(),
					e = new S(this.ctx);
				if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && 0 < t[this.activeSeriesIndex].data.length && void 0 !== t[this.activeSeriesIndex].data[0] && null !== t[this.activeSeriesIndex].data[0] && t[this.activeSeriesIndex].data[0].constructor === Array) return !0
			}
		}, {
			key: "handleFormat2DArray",
			value: function(t, e) {
				for (var i, s = this.w.config, a = this.w.globals, n = "boxPlot" === s.chart.type || "boxPlot" === s.series[e].type, o = 0; o < t[e].data.length; o++) void 0 !== t[e].data[o][1] && (Array.isArray(t[e].data[o][1]) && 4 === t[e].data[o][1].length && !n ? this.twoDSeries.push(O.parseNumber(t[e].data[o][1][3])) : 5 <= t[e].data[o].length ? this.twoDSeries.push(O.parseNumber(t[e].data[o][4])) : this.twoDSeries.push(O.parseNumber(t[e].data[o][1])), a.dataFormatXNumeric = !0), "datetime" === s.xaxis.type ? (i = new Date(t[e].data[o][0]), i = new Date(i).getTime(), this.twoDSeriesX.push(i)) : this.twoDSeriesX.push(t[e].data[o][0]);
				for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r][2] && (this.threeDSeries.push(t[e].data[r][2]), a.isDataXYZ = !0)
			}
		}, {
			key: "handleFormatXY",
			value: function(t, e) {
				var i = this.w.config,
					s = this.w.globals,
					a = new y(this.ctx),
					n = e; - 1 < s.collapsedSeriesIndices.indexOf(e) && (n = this.activeSeriesIndex);
				for (var o = 0; o < t[e].data.length; o++) void 0 !== t[e].data[o].y && (Array.isArray(t[e].data[o].y) ? this.twoDSeries.push(O.parseNumber(t[e].data[o].y[t[e].data[o].y.length - 1])) : this.twoDSeries.push(O.parseNumber(t[e].data[o].y))), void 0 !== t[e].data[o].goals && Array.isArray(t[e].data[o].goals) ? (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(t[e].data[o].goals)) : (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(null));
				for (var r = 0; r < t[n].data.length; r++) {
					var l = "string" == typeof t[n].data[r].x,
						c = Array.isArray(t[n].data[r].x),
						h = !c && !!a.isValidDate(t[n].data[r].x.toString());
					l || h ? l || i.xaxis.convertedCatToNumeric ? (h = s.isBarHorizontal && s.isRangeData, "datetime" !== i.xaxis.type || h ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[n].data[r].x)) : this.twoDSeriesX.push(a.parseDate(t[n].data[r].x))) : "datetime" === i.xaxis.type ? this.twoDSeriesX.push(a.parseDate(t[n].data[r].x.toString())) : (s.dataFormatXNumeric = !0, s.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[n].data[r].x))) : (c ? this.fallbackToCategory = !0 : (s.isXNumeric = !0, s.dataFormatXNumeric = !0), this.twoDSeriesX.push(t[n].data[r].x))
				}
				if (t[e].data[0] && void 0 !== t[e].data[0].z) {
					for (var d = 0; d < t[e].data.length; d++) this.threeDSeries.push(t[e].data[d].z);
					s.isDataXYZ = !0
				}
			}
		}, {
			key: "handleRangeData",
			value: function(t, e) {
				var i = this.w.globals,
					s = {};
				return this.isFormat2DArray() ? s = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(s.start), i.seriesRangeEnd.push(s.end), i.seriesRange.push(s.rangeUniques), i.seriesRange.forEach(function(t, e) {
					t && t.forEach(function(o, t) {
						o.y.forEach(function(t, e) {
							for (var i, s, a, n = 0; n < o.y.length; n++) e !== n && (i = t.y1, s = t.y2, a = o.y[n].y1, i <= o.y[n].y2) && a <= s && (o.overlaps.indexOf(t.rangeName) < 0 && o.overlaps.push(t.rangeName), o.overlaps.indexOf(o.y[n].rangeName) < 0) && o.overlaps.push(o.y[n].rangeName)
						})
					})
				}), s
			}
		}, {
			key: "handleCandleStickBoxData",
			value: function(t, e) {
				var i = this.w.globals,
					s = {};
				return this.isFormat2DArray() ? s = this.handleCandleStickBoxDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleCandleStickBoxDataFormat("xy", t, e)), i.seriesCandleO[e] = s.o, i.seriesCandleH[e] = s.h, i.seriesCandleM[e] = s.m, i.seriesCandleL[e] = s.l, i.seriesCandleC[e] = s.c, s
			}
		}, {
			key: "handleRangeDataFormat",
			value: function(t, a, n) {
				var o = [],
					r = [],
					l = a[n].data.filter(function(e, t, i) {
						return t === i.findIndex(function(t) {
							return t.x === e.x
						})
					}).map(function(t, e) {
						return {
							x: t.x,
							overlaps: [],
							y: []
						}
					});
				if ("array" === t)
					for (var e = 0; e < a[n].data.length; e++) Array.isArray(a[n].data[e]) ? (o.push(a[n].data[e][1][0]), r.push(a[n].data[e][1][1])) : (o.push(a[n].data[e]), r.push(a[n].data[e]));
				else if ("xy" === t)
					for (var i = 0; i < a[n].data.length; i++) ! function(t) {
						var e = Array.isArray(a[n].data[t].y),
							i = O.randomId(),
							s = a[n].data[t].x,
							e = {
								y1: e ? a[n].data[t].y[0] : a[n].data[t].y,
								y2: e ? a[n].data[t].y[1] : a[n].data[t].y,
								rangeName: i
							},
							t = (a[n].data[t].rangeName = i, l.findIndex(function(t) {
								return t.x === s
							}));
						l[t].y.push(e), o.push(e.y1), r.push(e.y2)
					}(i);
				return {
					start: o,
					end: r,
					rangeUniques: l
				}
			}
		}, {
			key: "handleCandleStickBoxDataFormat",
			value: function(t, e, i) {
				var s = this.w,
					a = "boxPlot" === s.config.chart.type || "boxPlot" === s.config.series[i].type,
					n = [],
					o = [],
					r = [],
					l = [],
					c = [];
				if ("array" === t)
					if (a && 6 === e[i].data[0].length || !a && 5 === e[i].data[0].length)
						for (var h = 0; h < e[i].data.length; h++) n.push(e[i].data[h][1]), o.push(e[i].data[h][2]), a ? (r.push(e[i].data[h][3]), l.push(e[i].data[h][4]), c.push(e[i].data[h][5])) : (l.push(e[i].data[h][3]), c.push(e[i].data[h][4]));
					else
						for (var d = 0; d < e[i].data.length; d++) Array.isArray(e[i].data[d][1]) && (n.push(e[i].data[d][1][0]), o.push(e[i].data[d][1][1]), a ? (r.push(e[i].data[d][1][2]), l.push(e[i].data[d][1][3]), c.push(e[i].data[d][1][4])) : (l.push(e[i].data[d][1][2]), c.push(e[i].data[d][1][3])));
				else if ("xy" === t)
					for (var u = 0; u < e[i].data.length; u++) Array.isArray(e[i].data[u].y) && (n.push(e[i].data[u].y[0]), o.push(e[i].data[u].y[1]), a ? (r.push(e[i].data[u].y[2]), l.push(e[i].data[u].y[3]), c.push(e[i].data[u].y[4])) : (l.push(e[i].data[u].y[2]), c.push(e[i].data[u].y[3])));
				return {
					o: n,
					h: o,
					m: r,
					l: l,
					c: c
				}
			}
		}, {
			key: "parseDataAxisCharts",
			value: function(t) {
				var s, a, e = this,
					i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.ctx,
					n = this.w.config,
					o = this.w.globals,
					r = new y(i),
					l = (0 < n.labels.length ? n.labels : n.xaxis.categories).slice();
				o.isRangeBar = "rangeBar" === n.chart.type && o.isBarHorizontal, o.hasXaxisGroups = "category" === n.xaxis.type && 0 < n.xaxis.group.groups.length, o.hasXaxisGroups && (o.groups = n.xaxis.group.groups), o.hasSeriesGroups = null == (i = t[0]) ? void 0 : i.group, o.hasSeriesGroups && (s = [], a = b(new Set(t.map(function(t) {
					return t.group
				}))), t.forEach(function(t, e) {
					var i = a.indexOf(t.group);
					s[i] || (s[i] = []), s[i].push(t.name)
				}), o.seriesGroups = s);
				for (var c = 0; c < t.length; c++) {
					if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t[c].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
					if ("rangeBar" !== n.chart.type && "rangeArea" !== n.chart.type && "rangeBar" !== t[c].type && "rangeArea" !== t[c].type || (o.isRangeData = !0, o.isComboCharts ? "rangeBar" !== t[c].type && "rangeArea" !== t[c].type || this.handleRangeData(t, c) : "rangeBar" !== n.chart.type && "rangeArea" !== n.chart.type || this.handleRangeData(t, c)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, c) : this.isFormatXY() && this.handleFormatXY(t, c), "candlestick" !== n.chart.type && "candlestick" !== t[c].type && "boxPlot" !== n.chart.type && "boxPlot" !== t[c].type || this.handleCandleStickBoxData(t, c), o.series.push(this.twoDSeries), o.labels.push(this.twoDSeriesX), o.seriesX.push(this.twoDSeriesX), o.seriesGoals = this.seriesGoals, c !== this.activeSeriesIndex || this.fallbackToCategory || (o.isXNumeric = !0);
					else {
						if ("datetime" === n.xaxis.type) {
							o.isXNumeric = !0;
							{
								h = void 0;
								for (var h = 0; h < l.length; h++)
									if ("string" == typeof l[h]) {
										if (!r.isValidDate(l[h])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
										e.twoDSeriesX.push(r.parseDate(l[h]))
									} else e.twoDSeriesX.push(l[h])
							}
							o.seriesX.push(this.twoDSeriesX)
						} else "numeric" === n.xaxis.type && (o.isXNumeric = !0, 0 < l.length) && (this.twoDSeriesX = l, o.seriesX.push(this.twoDSeriesX));
						o.labels.push(this.twoDSeriesX);
						var d = t[c].data.map(function(t) {
							return O.parseNumber(t)
						});
						o.series.push(d)
					}
					o.seriesZ.push(this.threeDSeries), void 0 !== t[c].name ? o.seriesNames.push(t[c].name) : o.seriesNames.push("series-" + parseInt(c + 1, 10)), void 0 !== t[c].color ? o.seriesColors.push(t[c].color) : o.seriesColors.push(void 0)
				}
				return this.w
			}
		}, {
			key: "parseDataNonAxisCharts",
			value: function(t) {
				var e = this.w.globals,
					i = this.w.config;
				e.series = t.slice(), e.seriesNames = i.labels.slice();
				for (var s = 0; s < e.series.length; s++) void 0 === e.seriesNames[s] && e.seriesNames.push("series-" + (s + 1));
				return this.w
			}
		}, {
			key: "handleExternalLabelsData",
			value: function(t) {
				var e = this.w.config,
					i = this.w.globals;
				0 < e.xaxis.categories.length ? i.labels = e.xaxis.categories : 0 < e.labels.length ? i.labels = e.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRange.length && (i.seriesRange.map(function(t) {
					t.forEach(function(t) {
						i.labels.indexOf(t.x) < 0 && t.x && i.labels.push(t.x)
					})
				}), i.labels = Array.from(new Set(i.labels.map(JSON.stringify)), JSON.parse)), e.xaxis.convertedCatToNumeric && (new r(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t))) : this._generateExternalLabels(t)
			}
		}, {
			key: "_generateExternalLabels",
			value: function(t) {
				var e = this.w.globals,
					i = this.w.config,
					s = [];
				if (e.axisCharts) {
					if (0 < e.series.length)
						if (this.isFormatXY())
							for (var a = i.series.map(function(t, e) {
									return t.data.filter(function(e, t, i) {
										return i.findIndex(function(t) {
											return t.x === e.x
										}) === t
									})
								}), n = a.reduce(function(t, e, i, s) {
									return s[t].length > e.length ? t : i
								}, 0), o = 0; o < a[n].length; o++) s.push(o + 1);
						else
							for (var r = 0; r < e.series[e.maxValsInArrayIndex].length; r++) s.push(r + 1);
					e.seriesX = [];
					for (var l = 0; l < t.length; l++) e.seriesX.push(s);
					this.w.globals.isBarHorizontal || (e.isXNumeric = !0)
				}
				if (0 === s.length)
					for (var s = e.axisCharts ? [] : e.series.map(function(t, e) {
							return e + 1
						}), c = 0; c < t.length; c++) e.seriesX.push(s);
				e.labels = s, i.xaxis.convertedCatToNumeric && (e.categoryLabels = s.map(function(t) {
					return i.xaxis.labels.formatter(t)
				})), e.noLabelsProvided = !0
			}
		}, {
			key: "parseData",
			value: function(t) {
				var e = this.w,
					i = e.config,
					s = e.globals;
				this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), s.axisCharts ? (this.parseDataAxisCharts(t), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t), i.chart.stacked && (e = new S(this.ctx), s.series = e.setNullSeriesToZeroValues(s.series)), this.coreUtils.getSeriesTotals(), s.axisCharts && (s.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals()), this.coreUtils.getPercentSeries(), s.dataFormatXNumeric || s.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length) || this.handleExternalLabelsData(t);
				for (var a = this.coreUtils.getCategoryLabels(s.labels), n = 0; n < a.length; n++)
					if (Array.isArray(a[n])) {
						s.isMultiLineX = !0;
						break
					}
			}
		}, {
			key: "excludeCollapsedSeriesInYAxis",
			value: function() {
				var i = this,
					s = this.w;
				s.globals.ignoreYAxisIndexes = s.globals.collapsedSeries.map(function(t, e) {
					if (i.w.globals.isMultipleYAxis && !s.config.chart.stacked) return t.index
				})
			}
		}]), Re),
		T = (t(Fe, [{
			key: "getLabel",
			value: function(t, e, i, s) {
				var a, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [],
					o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "12px",
					r = !(6 < arguments.length && void 0 !== arguments[6]) || arguments[6],
					l = this.w,
					c = void 0 === t[s] ? "" : t[s],
					h = c,
					d = l.globals.xLabelFormatter,
					u = l.config.xaxis.labels.formatter,
					g = !1,
					p = new f(this.ctx),
					d = (r && (h = p.xLabelFormat(d, c, c, {
						i: s,
						dateFormatter: new y(this.ctx).formatDate,
						w: l
					}), void 0 !== u) && (h = u(c, t[s], {
						i: s,
						dateFormatter: new y(this.ctx).formatDate,
						w: l
					})), 0 < e.length ? (p = e[s].unit, a = null, e.forEach(function(t) {
						"month" === t.unit ? a = "year" : "day" === t.unit ? a = "month" : "hour" === t.unit ? a = "day" : "minute" === t.unit && (a = "hour")
					}), g = a === p, i = e[s].position, h = e[s].value) : "datetime" === l.config.xaxis.type && void 0 === u && (h = ""), void 0 === h && (h = ""), h = Array.isArray(h) ? h : h.toString(), new D(this.ctx)),
					c = l.globals.rotateXLabels && r ? d.getTextRects(h, parseInt(o, 10), null, "rotate(".concat(l.config.xaxis.labels.rotate, " 0 0)"), !1) : d.getTextRects(h, parseInt(o, 10)),
					t = !l.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
				return {
					x: i,
					text: h = !Array.isArray(h) && (0 === h.indexOf("NaN") || 0 === h.toLowerCase().indexOf("invalid") || 0 <= h.toLowerCase().indexOf("infinity") || 0 <= n.indexOf(h) && t) ? "" : h,
					textRect: c,
					isBold: g
				}
			}
		}, {
			key: "checkLabelBasedOnTickamount",
			value: function(t, e, i) {
				var s = this.w,
					a = s.config.xaxis.tickAmount;
				return i < (a = "dataPoints" === a ? Math.round(s.globals.gridWidth / 120) : a) || t % Math.round(i / (a + 1)) == 0 || (e.text = ""), e
			}
		}, {
			key: "checkForOverflowingLabels",
			value: function(t, e, i, s, a) {
				var n = this.w;
				return 0 === t && n.globals.skipFirstTimelinelabel && (e.text = ""), t === i - 1 && n.globals.skipLastTimelinelabel && (e.text = ""), n.config.xaxis.labels.hideOverlappingLabels && 0 < s.length && (t = a[a.length - 1], e.x < t.textRect.width / (n.globals.rotateXLabels ? Math.abs(n.config.xaxis.labels.rotate) / 12 : 1.01) + t.x) && (e.text = ""), e
			}
		}, {
			key: "checkForReversedLabels",
			value: function(t, e) {
				var i = this.w;
				return i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e
			}
		}, {
			key: "isYAxisHidden",
			value: function(t) {
				var e = this.w,
					i = new I(this.ctx);
				return !e.config.yaxis[t].show || !e.config.yaxis[t].showForNullSeries && i.isSeriesNull(t) && -1 === e.globals.collapsedSeriesIndices.indexOf(t)
			}
		}, {
			key: "getYAxisForeColor",
			value: function(t, e) {
				var i = this.w;
				return Array.isArray(t) && i.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t
			}
		}, {
			key: "drawYAxisTicks",
			value: function(t, e, i, s, a, n, o) {
				var r = this.w,
					l = new D(this.ctx),
					c = r.globals.translateY;
				if (s.show && 0 < e) {
					!0 === r.config.yaxis[a].opposite && (t += s.width);
					for (var h = e; 0 <= h; h--) {
						var d = c + e / 10 + r.config.yaxis[a].labels.offsetY - 1,
							d = (r.globals.isBarHorizontal && (d = n * h), "heatmap" === r.config.chart.type && (d += n / 2), l.drawLine(t + i.offsetX - s.width + s.offsetX, d + s.offsetY, t + i.offsetX + s.offsetX, d + s.offsetY, s.color));
						o.add(d), c += n
					}
				}
			}
		}]), Fe),
		xt = (t(Ne, [{
			key: "scaleSvgNode",
			value: function(t, e) {
				var i = parseFloat(t.getAttributeNS(null, "width")),
					s = parseFloat(t.getAttributeNS(null, "height"));
				t.setAttributeNS(null, "width", i * e), t.setAttributeNS(null, "height", s * e), t.setAttributeNS(null, "viewBox", "0 0 " + i + " " + s)
			}
		}, {
			key: "fixSvgStringForIe11",
			value: function(t) {
				var e;
				return O.isIE11() ? (e = 0, t.replace(/xmlns="my-contact.html\/\/www.w3.org\/2000\/svg"/g, function(t) {
					return 2 == ++e ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : t
				}).replace(/xmlns:NS\d+=""/g, "").replace(/NS\d+:(\w+:\w+=")/g, "$1")) : t.replace(/&nbsp;/g, "&#160;")
			}
		}, {
			key: "getSvgString",
			value: function(t) {
				null == t && (t = 1);
				var e, i = this.w.globals.dom.Paper.svg();
				return 1 !== t && (e = this.w.globals.dom.Paper.node.cloneNode(!0), this.scaleSvgNode(e, t), i = (new XMLSerializer).serializeToString(e)), this.fixSvgStringForIe11(i)
			}
		}, {
			key: "cleanup",
			value: function() {
				var t = this.w,
					e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),
					i = t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),
					t = t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
				Array.prototype.forEach.call(t, function(t) {
					t.setAttribute("width", 0)
				}), e && e[0] && (e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100))
			}
		}, {
			key: "svgUrl",
			value: function() {
				this.cleanup();
				var t = this.getSvgString(),
					t = new Blob([t], {
						type: "image/svg+xml;charset=utf-8"
					});
				return URL.createObjectURL(t)
			}
		}, {
			key: "dataURI",
			value: function(r) {
				var l = this;
				return new Promise(function(e) {
					var t, i, s = l.w,
						a = r ? r.scale || r.width / s.globals.svgWidth : 1,
						n = (l.cleanup(), document.createElement("canvas")),
						s = (n.width = s.globals.svgWidth * a, n.height = parseInt(s.globals.dom.elWrap.style.height, 10) * a, "transparent" === s.config.chart.background ? "#fff" : s.config.chart.background),
						o = n.getContext("2d"),
						s = (o.fillStyle = s, o.fillRect(0, 0, n.width * a, n.height * a), l.getSvgString(a));
					window.canvg && O.isIE11() ? ((a = window.canvg.Canvg.fromString(o, s, {
						ignoreClear: !0,
						ignoreDimensions: !0
					})).start(), t = n.msToBlob(), a.stop(), e({
						blob: t
					})) : (a = "data:image/svg+xml," + encodeURIComponent(s), (i = new Image).crossOrigin = "anonymous", i.onload = function() {
						var t;
						o.drawImage(i, 0, 0), n.msToBlob ? (t = n.msToBlob(), e({
							blob: t
						})) : (t = n.toDataURL("image/png"), e({
							imgURI: t
						}))
					}, i.src = a)
				})
			}
		}, {
			key: "exportToSVG",
			value: function() {
				this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg")
			}
		}, {
			key: "exportToPng",
			value: function() {
				var i = this;
				this.dataURI().then(function(t) {
					var e = t.imgURI,
						t = t.blob;
					t ? navigator.msSaveOrOpenBlob(t, i.w.globals.chartID + ".png") : i.triggerDownload(e, i.w.config.chart.toolbar.export.png.filename, ".png")
				})
			}
		}, {
			key: "exportToCSV",
			value: function(t) {
				var a = this,
					c = t.series,
					e = t.fileName,
					i = t.columnDelimiter,
					h = void 0 === i ? "," : i,
					i = t.lineDelimiter,
					t = void 0 === i ? "\n" : i,
					d = this.w,
					c = c || d.config.series,
					u = [],
					g = [],
					i = "",
					p = d.globals.series.map(function(t, e) {
						return -1 === d.globals.collapsedSeriesIndices.indexOf(e) ? t : []
					}),
					f = Math.max.apply(Math, b(c.map(function(t) {
						return t.data ? t.data.length : 0
					}))),
					x = new ft(this.ctx),
					n = new T(this.ctx),
					m = function(t) {
						var e, i, s = "";
						return d.globals.axisCharts ? ("category" !== d.config.xaxis.type && !d.config.xaxis.convertedCatToNumeric || (s = d.globals.isBarHorizontal ? (e = d.globals.yLabelFormatters[0], i = new S(a.ctx).getActiveConfigSeriesIndex(), e(d.globals.labels[t], {
							seriesIndex: i,
							dataPointIndex: t,
							w: d
						})) : n.getLabel(d.globals.labels, d.globals.timescaleLabels, 0, t).text), "datetime" === d.config.xaxis.type && (d.config.xaxis.categories.length ? s = d.config.xaxis.categories[t] : d.config.labels.length && (s = d.config.labels[t]))) : s = d.config.labels[t], Array.isArray(s) && (s = s.join(" ")), O.isNumber(s) ? s : s.split(h).join("")
					};
				u.push(d.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === d.config.chart.type ? (u.push("minimum"), u.push("q1"), u.push("median"), u.push("q3"), u.push("maximum")) : "candlestick" === d.config.chart.type ? (u.push("open"), u.push("high"), u.push("low"), u.push("close")) : "rangeBar" === d.config.chart.type ? (u.push("minimum"), u.push("maximum")) : c.map(function(t, e) {
					t = (t.name || "series-".concat(e)) + "";
					d.globals.axisCharts && u.push(t.split(h).join("") ? t.split(h).join("") : "series-".concat(e))
				}), d.globals.axisCharts || (u.push(d.config.chart.toolbar.export.csv.headerValue), g.push(u.join(h))), c.map(function(t, e) {
					if (d.globals.axisCharts) {
						var i, s = t,
							a = e;
						if (u.length && 0 === a && g.push(u.join(h)), s.data) {
							s.data = s.data.length && s.data || b(Array(f)).map(function() {
								return ""
							});
							for (var n = 0; n < s.data.length; n++) {
								u = [];
								var o = m(n);
								if (o || (x.isFormatXY() ? o = c[a].data[n].x : x.isFormat2DArray() && (o = c[a].data[n] ? c[a].data[n][0] : "")), 0 === a) {
									u.push((i = o, "datetime" === d.config.xaxis.type && 10 <= String(i).length ? d.config.chart.toolbar.export.csv.dateFormatter(o) : O.isNumber(o) ? o : o.split(h).join("")));
									for (var r, l = 0; l < d.globals.series.length; l++) x.isFormatXY() ? u.push(null == (r = c[l].data[n]) ? void 0 : r.y) : u.push(p[l][n])
								}("candlestick" === d.config.chart.type || s.type && "candlestick" === s.type) && (u.pop(), u.push(d.globals.seriesCandleO[a][n]), u.push(d.globals.seriesCandleH[a][n]), u.push(d.globals.seriesCandleL[a][n]), u.push(d.globals.seriesCandleC[a][n])), ("boxPlot" === d.config.chart.type || s.type && "boxPlot" === s.type) && (u.pop(), u.push(d.globals.seriesCandleO[a][n]), u.push(d.globals.seriesCandleH[a][n]), u.push(d.globals.seriesCandleM[a][n]), u.push(d.globals.seriesCandleL[a][n]), u.push(d.globals.seriesCandleC[a][n])), "rangeBar" === d.config.chart.type && (u.pop(), u.push(d.globals.seriesRangeStart[a][n]), u.push(d.globals.seriesRangeEnd[a][n])), u.length && g.push(u.join(h))
							}
						}
					} else(u = []).push(d.globals.labels[e].split(h).join("")), u.push(p[e]), g.push(u.join(h))
				}), i += g.join(t), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\ufeff" + i), e || d.config.chart.toolbar.export.csv.filename, ".csv")
			}
		}, {
			key: "triggerDownload",
			value: function(t, e, i) {
				var s = document.createElement("a");
				s.href = t, s.download = (e || this.w.globals.chartID) + i, document.body.appendChild(s), s.click(), document.body.removeChild(s)
			}
		}]), Ne),
		u = (t(Xe, [{
			key: "drawXaxis",
			value: function() {
				var t = this.w,
					e = new D(this.ctx),
					i = e.group({
						class: "apexcharts-xaxis",
						transform: "translate(".concat(t.config.xaxis.offsetX, ", ").concat(t.config.xaxis.offsetY, ")")
					}),
					s = e.group({
						class: "apexcharts-xaxis-texts-g",
						transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")")
					});
				i.add(s);
				for (var a = [], n = 0; n < this.xaxisLabels.length; n++) a.push(this.xaxisLabels[n]);
				if (this.drawXAxisLabelAndGroup(!0, e, s, a, t.globals.isXNumeric, function(t, e) {
						return e
					}), t.globals.hasXaxisGroups) {
					for (var o = t.globals.groups, a = [], r = 0; r < o.length; r++) a.push(o[r].title);
					var l = {};
					t.config.xaxis.group.style && (l.xaxisFontSize = t.config.xaxis.group.style.fontSize, l.xaxisFontFamily = t.config.xaxis.group.style.fontFamily, l.xaxisForeColors = t.config.xaxis.group.style.colors, l.fontWeight = t.config.xaxis.group.style.fontWeight, l.cssClass = t.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, e, s, a, !1, function(t, e) {
						return o[t].cols * e
					}, l)
				}
				return void 0 !== t.config.xaxis.title.text && (s = e.group({
					class: "apexcharts-xaxis-title"
				}), l = e.drawText({
					x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX,
					y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t.config.xaxis.position ? t.globals.xAxisLabelsHeight : -t.globals.xAxisLabelsHeight - 10) + t.config.xaxis.title.offsetY,
					text: t.config.xaxis.title.text,
					textAnchor: "middle",
					fontSize: t.config.xaxis.title.style.fontSize,
					fontFamily: t.config.xaxis.title.style.fontFamily,
					fontWeight: t.config.xaxis.title.style.fontWeight,
					foreColor: t.config.xaxis.title.style.color,
					cssClass: "apexcharts-xaxis-title-text " + t.config.xaxis.title.style.cssClass
				}), s.add(l), i.add(s)), t.config.xaxis.axisBorder.show && (l = t.globals.barPadForNumericAxis, s = e.drawLine(t.globals.padHorizontal + t.config.xaxis.axisBorder.offsetX - l, this.offY, this.xaxisBorderWidth + l, this.offY, t.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight), (this.elgrid && this.elgrid.elGridBorders && t.config.grid.show ? this.elgrid.elGridBorders : i).add(s)), i
			}
		}, {
			key: "drawXAxisLabelAndGroup",
			value: function(a, n, o, r, t, l) {
				var c, h = this,
					e = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : {},
					d = [],
					u = [],
					g = this.w,
					p = e.xaxisFontSize || this.xaxisFontSize,
					f = e.xaxisFontFamily || this.xaxisFontFamily,
					x = e.xaxisForeColors || this.xaxisForeColors,
					m = e.fontWeight || g.config.xaxis.labels.style.fontWeight,
					b = e.cssClass || g.config.xaxis.labels.style.cssClass,
					v = g.globals.padHorizontal,
					y = r.length,
					w = "category" === g.config.xaxis.type ? g.globals.dataPoints : y;
				0 === w && w < y && (w = y), v = t ? (e = 1 < w ? w - 1 : w, c = g.globals.gridWidth / e, v + l(0, c) / 2 + g.config.xaxis.labels.offsetX) : (c = g.globals.gridWidth / w, v + l(0, c) + g.config.xaxis.labels.offsetX);
				for (var i = 0; i <= y - 1; i++) ! function(i) {
					var t, e = v - l(i, c) / 2 + g.config.xaxis.labels.offsetX,
						e = (0 === i && 1 === y && c / 2 === v && 1 === w && (e = g.globals.gridWidth / 2), h.axesUtils.getLabel(r, g.globals.timescaleLabels, e, i, d, p, a)),
						s = 28;
					g.globals.rotateXLabels && a && (s = 22), g.config.xaxis.title.text && "top" === g.config.xaxis.position && (s += parseFloat(g.config.xaxis.title.style.fontSize) + 2), a || (s = s + parseFloat(p) + (g.globals.xAxisLabelsHeight - g.globals.xAxisGroupLabelsHeight) + (g.globals.rotateXLabels ? 10 : 0)), e = void 0 !== g.config.xaxis.tickAmount && "dataPoints" !== g.config.xaxis.tickAmount && "datetime" !== g.config.xaxis.type ? h.axesUtils.checkLabelBasedOnTickamount(i, e, y) : h.axesUtils.checkForOverflowingLabels(i, e, y, d, u), g.config.xaxis.labels.show && (s = n.drawText({
						x: e.x,
						y: h.offY + g.config.xaxis.labels.offsetY + s - ("top" === g.config.xaxis.position ? g.globals.xAxisHeight + g.config.xaxis.axisTicks.height - 2 : 0),
						text: e.text,
						textAnchor: "middle",
						fontWeight: e.isBold ? 600 : m,
						fontSize: p,
						fontFamily: f,
						foreColor: Array.isArray(x) ? a && g.config.xaxis.convertedCatToNumeric ? x[g.globals.minX + i - 1] : x[i] : x,
						isPlainText: !1,
						cssClass: (a ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + b
					}), o.add(s), s.on("click", function(t) {
						var e;
						"function" == typeof g.config.chart.events.xAxisLabelClick && (e = Object.assign({}, g, {
							labelIndex: i
						}), g.config.chart.events.xAxisLabelClick(t, h.ctx, e))
					}), a) && ((t = document.createElementNS(g.globals.SVGNS, "title")).textContent = Array.isArray(e.text) ? e.text.join(" ") : e.text, s.node.appendChild(t), "" !== e.text) && (d.push(e.text), u.push(e)), i < y - 1 && (v += l(i + 1, c))
				}(i)
			}
		}, {
			key: "drawXaxisInversed",
			value: function(o) {
				var r = this,
					l = this.w,
					c = new D(this.ctx),
					t = l.config.yaxis[0].opposite ? l.globals.translateYAxisX[o] : 0,
					e = c.group({
						class: "apexcharts-yaxis apexcharts-xaxis-inversed",
						rel: o
					}),
					h = c.group({
						class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
						transform: "translate(" + t + ", 0)"
					}),
					d = (e.add(h), []);
				if (l.config.yaxis[o].show)
					for (var i = 0; i < this.xaxisLabels.length; i++) d.push(this.xaxisLabels[i]);
				var u, g = -(u = l.globals.gridHeight / d.length) / 2.2,
					p = l.globals.yLabelFormatters[0],
					f = l.config.yaxis[0].labels;
				if (f.show)
					for (var s = 0; s <= d.length - 1; s++) ! function(i) {
						var t = void 0 === d[i] ? "" : d[i],
							t = p(t, {
								seriesIndex: o,
								dataPointIndex: i,
								w: l
							}),
							e = r.axesUtils.getYAxisForeColor(f.style.colors, o),
							s = 0,
							a = (Array.isArray(t) && (s = t.length / 2 * parseInt(f.style.fontSize, 10)), f.offsetX - 15),
							n = "end",
							a = (r.yaxis.opposite && (n = "start"), "left" === l.config.yaxis[0].labels.align ? (a = f.offsetX, n = "start") : "center" === l.config.yaxis[0].labels.align ? (a = f.offsetX, n = "middle") : "right" === l.config.yaxis[0].labels.align && (n = "end"), c.drawText({
								x: a,
								y: g + u + f.offsetY - s,
								text: t,
								textAnchor: n,
								foreColor: Array.isArray(e) ? e[i] : e,
								fontSize: f.style.fontSize,
								fontFamily: f.style.fontFamily,
								fontWeight: f.style.fontWeight,
								isPlainText: !1,
								cssClass: "apexcharts-yaxis-label " + f.style.cssClass,
								maxWidth: f.maxWidth
							})),
							s = (h.add(a), a.on("click", function(t) {
								var e;
								"function" == typeof l.config.chart.events.xAxisLabelClick && (e = Object.assign({}, l, {
									labelIndex: i
								}), l.config.chart.events.xAxisLabelClick(t, r.ctx, e))
							}), document.createElementNS(l.globals.SVGNS, "title"));
						s.textContent = Array.isArray(t) ? t.join(" ") : t, a.node.appendChild(s), 0 !== l.config.yaxis[o].labels.rotate && (n = c.rotateAroundCenter(a.node), a.node.setAttribute("transform", "rotate(".concat(l.config.yaxis[o].labels.rotate, " 0 ").concat(n.y, ")"))), g += u
					}(s);
				void 0 !== l.config.yaxis[0].title.text && (t = c.group({
					class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
					transform: "translate(" + t + ", 0)"
				}), a = c.drawText({
					x: l.config.yaxis[0].title.offsetX,
					y: l.globals.gridHeight / 2 + l.config.yaxis[0].title.offsetY,
					text: l.config.yaxis[0].title.text,
					textAnchor: "middle",
					foreColor: l.config.yaxis[0].title.style.color,
					fontSize: l.config.yaxis[0].title.style.fontSize,
					fontWeight: l.config.yaxis[0].title.style.fontWeight,
					fontFamily: l.config.yaxis[0].title.style.fontFamily,
					cssClass: "apexcharts-yaxis-title-text " + l.config.yaxis[0].title.style.cssClass
				}), t.add(a), e.add(t));
				var a = 0,
					t = (this.isCategoryBarHorizontal && l.config.yaxis[0].opposite && (a = l.globals.gridWidth), l.config.xaxis.axisBorder);
				return t.show && (t = c.drawLine(l.globals.padHorizontal + t.offsetX + a, 1 + t.offsetY, l.globals.padHorizontal + t.offsetX + a, l.globals.gridHeight + t.offsetY, t.color, 0), (this.elgrid && this.elgrid.elGridBorders && l.config.grid.show ? this.elgrid.elGridBorders : e).add(t)), l.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(a, d.length, l.config.yaxis[0].axisBorder, l.config.yaxis[0].axisTicks, 0, u, e), e
			}
		}, {
			key: "drawXaxisTicks",
			value: function(t, e, i) {
				var s, a = this.w,
					n = t;
				t < 0 || t - 2 > a.globals.gridWidth || (e = e + (s = this.offY + a.config.xaxis.axisTicks.offsetY) + a.config.xaxis.axisTicks.height, "top" === a.config.xaxis.position && (e = s - a.config.xaxis.axisTicks.height), a.config.xaxis.axisTicks.show && (t = new D(this.ctx).drawLine(t + a.config.xaxis.axisTicks.offsetX, s + a.config.xaxis.offsetY, n + a.config.xaxis.axisTicks.offsetX, e + a.config.xaxis.offsetY, a.config.xaxis.axisTicks.color), i.add(t), t.node.classList.add("apexcharts-xaxis-tick")))
			}
		}, {
			key: "getXAxisTicksPositions",
			value: function() {
				var t = this.w,
					e = [],
					i = this.xaxisLabels.length,
					s = t.globals.padHorizontal;
				if (0 < t.globals.timescaleLabels.length)
					for (var a = 0; a < i; a++) s = this.xaxisLabels[a].position, e.push(s);
				else
					for (var n = i, o = 0; o < n; o++) {
						var r = n;
						t.globals.isXNumeric && "bar" !== t.config.chart.type && --r, s += t.globals.gridWidth / r, e.push(s)
					}
				return e
			}
		}, {
			key: "xAxisLabelCorrections",
			value: function() {
				var e = this.w,
					i = new D(this.ctx),
					t = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
					s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),
					a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
					n = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
				if (e.globals.rotateXLabels || e.config.xaxis.labels.rotateAlways)
					for (var o = 0; o < s.length; o++) {
						var r = i.rotateAroundCenter(s[o]),
							r = (r.y = r.y - 1, r.x = r.x + 1, s[o].setAttribute("transform", "rotate(".concat(e.config.xaxis.labels.rotate, " ").concat(r.x, " ").concat(r.y, ")")), s[o].setAttribute("text-anchor", "end"), t.setAttribute("transform", "translate(0, ".concat(-10, ")")), s[o].childNodes);
						e.config.xaxis.labels.trim && Array.prototype.forEach.call(r, function(t) {
							i.placeTextWithEllipsis(t, t.textContent, e.globals.xAxisLabelsHeight - ("bottom" === e.config.legend.position ? 20 : 10))
						})
					} else
						for (var l = e.globals.gridWidth / (e.globals.labels.length + 1), c = 0; c < s.length; c++) {
							var h = s[c].childNodes;
							e.config.xaxis.labels.trim && "datetime" !== e.config.xaxis.type && Array.prototype.forEach.call(h, function(t) {
								i.placeTextWithEllipsis(t, t.textContent, l)
							})
						}
				if (0 < a.length) {
					var d = a[a.length - 1].getBBox(),
						u = a[0].getBBox();
					d.x < -20 && a[a.length - 1].parentNode.removeChild(a[a.length - 1]), u.x + u.width > e.globals.gridWidth && !e.globals.isBarHorizontal && a[0].parentNode.removeChild(a[0]);
					for (var g = 0; g < n.length; g++) i.placeTextWithEllipsis(n[g], n[g].textContent, e.config.yaxis[0].labels.maxWidth - (e.config.yaxis[0].title.text ? 2 * parseFloat(e.config.yaxis[0].title.style.fontSize) : 0) - 15)
				}
			}
		}]), Xe),
		mt = (t(ze, [{
			key: "drawGridArea",
			value: function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
					e = this.w,
					i = new D(this.ctx),
					s = (null === t && (t = i.group({
						class: "apexcharts-grid"
					})), i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent")),
					i = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
				return t.add(i), t.add(s), t
			}
		}, {
			key: "drawGrid",
			value: function() {
				var t = null;
				return this.w.globals.axisCharts && (t = this.renderGrid(), this.drawGridArea(t.el)), t
			}
		}, {
			key: "createGridMask",
			value: function() {
				var e, t = this.w,
					i = t.globals,
					s = new D(this.ctx),
					a = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width,
					n = (Array.isArray(t.config.stroke.width) && (e = 0, t.config.stroke.width.forEach(function(t) {
						e = Math.max(e, t)
					}), a = e), i.dom.elGridRectMask = document.createElementNS(i.SVGNS, "clipPath"), i.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(i.cuid)), i.dom.elGridRectMarkerMask = document.createElementNS(i.SVGNS, "clipPath"), i.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(i.cuid)), i.dom.elForecastMask = document.createElementNS(i.SVGNS, "clipPath"), i.dom.elForecastMask.setAttribute("id", "forecastMask".concat(i.cuid)), i.dom.elNonForecastMask = document.createElementNS(i.SVGNS, "clipPath"), i.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(i.cuid)), t.config.chart.type),
					o = 0,
					r = 0,
					n = (("bar" === n || "rangeBar" === n || "candlestick" === n || "boxPlot" === n || 0 < t.globals.comboBarCount) && t.globals.isXNumeric && !t.globals.isBarHorizontal && (o = t.config.grid.padding.left, r = t.config.grid.padding.right, i.barPadForNumericAxis > o) && (o = i.barPadForNumericAxis, r = i.barPadForNumericAxis), i.dom.elGridRect = s.drawRect(-a / 2 - o - 2, -a / 2, i.gridWidth + a + r + o + 4, i.gridHeight + a, 0, "#fff"), t.globals.markers.largestSize + 1),
					r = (i.dom.elGridRectMarker = s.drawRect(2 * -n, 2 * -n, i.gridWidth + 4 * n, i.gridHeight + 4 * n, 0, "#fff"), i.dom.elGridRectMask.appendChild(i.dom.elGridRect.node), i.dom.elGridRectMarkerMask.appendChild(i.dom.elGridRectMarker.node), i.dom.baseEl.querySelector("defs"));
				r.appendChild(i.dom.elGridRectMask), r.appendChild(i.dom.elForecastMask), r.appendChild(i.dom.elNonForecastMask), r.appendChild(i.dom.elGridRectMarkerMask)
			}
		}, {
			key: "_drawGridLines",
			value: function(t) {
				var e = t.i,
					i = t.x1,
					s = t.y1,
					a = t.x2,
					n = t.y2,
					o = t.xCount,
					t = t.parent,
					r = this.w;
				if (!(0 === e && r.globals.skipFirstTimelinelabel || e === o - 1 && r.globals.skipLastTimelinelabel && !r.config.xaxis.labels.formatter || "radar" === r.config.chart.type)) {
					r.config.grid.xaxis.lines.show && this._drawGridLine({
						i: e,
						x1: i,
						y1: s,
						x2: a,
						y2: n,
						xCount: o,
						parent: t
					});
					s = 0;
					if (r.globals.hasXaxisGroups && "between" === r.config.xaxis.tickPlacement) {
						var l = r.globals.groups;
						if (l) {
							for (var c = 0, h = 0; c < e && h < l.length; h++) c += l[h].cols;
							c === e && (s = .6 * r.globals.xAxisLabelsHeight)
						}
					}
					new u(this.ctx).drawXaxisTicks(i, s, r.globals.dom.elGraphical)
				}
			}
		}, {
			key: "_drawGridLine",
			value: function(t) {
				var e = t.i,
					i = t.x1,
					s = t.y1,
					a = t.x2,
					n = t.y2,
					o = t.xCount,
					t = t.parent,
					r = this.w,
					l = !1,
					c = t.node.classList.contains("apexcharts-gridlines-horizontal"),
					h = r.config.grid.strokeDashArray,
					d = r.globals.barPadForNumericAxis,
					e = ((0 === s && 0 === n || 0 === i && 0 === a) && (l = !0), s === r.globals.gridHeight && n === r.globals.gridHeight && (l = !0), !r.globals.isBarHorizontal || 0 !== e && e !== o - 1 || (l = !0), new D(this).drawLine(i - (c ? d : 0), s, a + (c ? d : 0), n, r.config.grid.borderColor, h));
				e.node.classList.add("apexcharts-gridline"), (l && r.config.grid.show ? this.elGridBorders : t).add(e)
			}
		}, {
			key: "_drawGridBandRect",
			value: function(t) {
				var e = t.c,
					i = t.x1,
					s = t.y1,
					a = t.x2,
					n = t.y2,
					t = t.type,
					o = this.w,
					r = new D(this.ctx),
					l = o.globals.barPadForNumericAxis;
				"column" === t && "datetime" === o.config.xaxis.type || (e = o.config.grid[t].colors[e], r = r.drawRect(i - ("row" === t ? l : 0), s, a + ("row" === t ? 2 * l : 0), n, 0, e, o.config.grid[t].opacity), this.elg.add(r), r.attr("clip-path", "url(#gridRectMask".concat(o.globals.cuid, ")")), r.node.classList.add("apexcharts-grid-".concat(t)))
			}
		}, {
			key: "_drawXYLines",
			value: function(t) {
				var e, r = this,
					l = t.xCount,
					i = t.tickAmount,
					c = this.w;
				if ((c.config.grid.xaxis.lines.show || c.config.xaxis.axisTicks.show) && (t = c.globals.padHorizontal, e = c.globals.gridHeight, (c.globals.timescaleLabels.length ? function(t) {
						for (var e, i, s = t.xC, a = t.y1, n = t.y2, o = 0; o < s; o++) e = r.xaxisLabels[o].position, i = r.xaxisLabels[o].position, r._drawGridLines({
							i: o,
							x1: e,
							y1: a,
							x2: i,
							y2: n,
							xCount: l,
							parent: r.elgridLinesV
						})
					} : (c.globals.isXNumeric && (l = c.globals.xAxisScale.result.length), function(t) {
						for (var e = t.xC, i = t.x1, s = t.y1, a = t.x2, n = t.y2, o = 0; o < e + (c.globals.isXNumeric ? 0 : 1); o++) 0 === o && 1 === e && 1 === c.globals.dataPoints && (a = i = c.globals.gridWidth / 2), r._drawGridLines({
							i: o,
							x1: i,
							y1: s,
							x2: a,
							y2: n,
							xCount: l,
							parent: r.elgridLinesV
						}), a = i += c.globals.gridWidth / (c.globals.isXNumeric ? e - 1 : e)
					}))({
						xC: l,
						x1: t,
						y1: 0,
						x2: void 0,
						y2: e
					})), c.config.grid.yaxis.lines.show) {
					var s = 0,
						a = 0,
						n = c.globals.gridWidth,
						o = i + 1;
					this.isRangeBar && (o = c.globals.labels.length);
					for (var h = 0; h < o + (this.isRangeBar ? 1 : 0); h++) this._drawGridLine({
						i: h,
						xCount: o + (this.isRangeBar ? 1 : 0),
						x1: 0,
						y1: s,
						x2: n,
						y2: a,
						parent: this.elgridLinesH
					}), a = s += c.globals.gridHeight / (this.isRangeBar ? o : i)
				}
			}
		}, {
			key: "_drawInvertedXYLines",
			value: function(t) {
				var e = t.xCount,
					i = this.w;
				if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show)
					for (var s, a = i.globals.padHorizontal, n = i.globals.gridHeight, o = 0; o < e + 1; o++) i.config.grid.xaxis.lines.show && this._drawGridLine({
						i: o,
						xCount: e + 1,
						x1: a,
						y1: 0,
						x2: s,
						y2: n,
						parent: this.elgridLinesV
					}), new u(this.ctx).drawXaxisTicks(a, 0, i.globals.dom.elGraphical), s = a = a + i.globals.gridWidth / e + .3;
				if (i.config.grid.yaxis.lines.show)
					for (var r = 0, l = 0, c = i.globals.gridWidth, h = 0; h < i.globals.dataPoints + 1; h++) this._drawGridLine({
						i: h,
						xCount: i.globals.dataPoints + 1,
						x1: 0,
						y1: r,
						x2: c,
						y2: l,
						parent: this.elgridLinesH
					}), l = r += i.globals.gridHeight / i.globals.dataPoints
			}
		}, {
			key: "renderGrid",
			value: function() {
				var t = this.w,
					e = new D(this.ctx);
				this.elg = e.group({
					class: "apexcharts-grid"
				}), this.elgridLinesH = e.group({
					class: "apexcharts-gridlines-horizontal"
				}), this.elgridLinesV = e.group({
					class: "apexcharts-gridlines-vertical"
				}), this.elGridBorders = e.group({
					class: "apexcharts-grid-borders"
				}), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
				for (var i, s = t.globals.yAxisScale.length ? t.globals.yAxisScale[0].result.length - 1 : 5, a = 0; a < t.globals.series.length && !(2 < (s = void 0 !== t.globals.yAxisScale[a] ? t.globals.yAxisScale[a].result.length - 1 : s)); a++);
				return !t.globals.isBarHorizontal || this.isRangeBar ? (i = this.xaxisLabels.length, this.isRangeBar && (i--, s = t.globals.labels.length, t.config.xaxis.tickAmount) && t.config.xaxis.labels.formatter && (i = t.config.xaxis.tickAmount), this._drawXYLines({
					xCount: i,
					tickAmount: s
				})) : (i = s, s = t.globals.xTickAmount, this._drawInvertedXYLines({
					xCount: i,
					tickAmount: s
				})), this.drawGridBands(i, s), {
					el: this.elg,
					elGridBorders: this.elGridBorders,
					xAxisTickWidth: t.globals.gridWidth / i
				}
			}
		}, {
			key: "drawGridBands",
			value: function(t, e) {
				var i = this.w;
				if (void 0 !== i.config.grid.row.colors && 0 < i.config.grid.row.colors.length)
					for (var s = 0, a = i.globals.gridHeight / e, n = i.globals.gridWidth, o = 0, r = 0; o < e; o++, r++) r >= i.config.grid.row.colors.length && (r = 0), this._drawGridBandRect({
						c: r,
						x1: 0,
						y1: s,
						x2: n,
						y2: a,
						type: "row"
					}), s += i.globals.gridHeight / e;
				if (void 0 !== i.config.grid.column.colors && 0 < i.config.grid.column.colors.length)
					for (var l = i.globals.isBarHorizontal || "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric ? t : t - 1, c = i.globals.padHorizontal, h = i.globals.padHorizontal + i.globals.gridWidth / l, d = i.globals.gridHeight, u = 0, g = 0; u < t; u++, g++) g >= i.config.grid.column.colors.length && (g = 0), this._drawGridBandRect({
						c: g,
						x1: c,
						y1: 0,
						x2: h,
						y2: d,
						type: "column"
					}), c += i.globals.gridWidth / l
			}
		}]), ze),
		x = (t(De, [{
			key: "niceScale",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10,
					s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
					a = 4 < arguments.length ? arguments[4] : void 0,
					n = this.w,
					o = Math.abs(e - t);
				if ("dataPoints" === (i = this._adjustTicksForSmallRange(i, s, o)) && (i = n.globals.dataPoints - 1), t === Number.MIN_VALUE && 0 === e || !O.isNumber(t) && !O.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE) return e = i, this.linearScale(t = 0, e, i);
				e < t ? (console.warn("axis.min cannot be greater than axis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .5, e = 0 === e ? 2 : e + .5);
				var r = [],
					s = (o < 1 && a && ("candlestick" === n.config.chart.type || "candlestick" === n.config.series[s].type || "boxPlot" === n.config.chart.type || "boxPlot" === n.config.series[s].type || n.globals.isRangeData) && (e *= 1.01), i + 1),
					n = (s < 2 ? s = 2 : 2 < s && (s -= 2), o / s),
					s = Math.floor(O.log10(n)),
					s = Math.pow(10, s),
					n = Math.round(n / s),
					l = (n = n < 1 ? 1 : n) * s,
					n = l * Math.floor(t / l),
					c = l * Math.ceil(e / l),
					h = n;
				if (a && 2 < o)
					for (; r.push(O.stripNumber(h, 7)), !((h += l) > c););
				else {
					var d = t;
					(r = []).push(O.stripNumber(d, 7));
					for (var u = Math.abs(e - t) / i, g = 0; g <= i; g++) r.push(d += u);
					r[r.length - 2] >= e && r.pop()
				}
				return {
					result: r,
					niceMin: r[0],
					niceMax: r[r.length - 1]
				}
			}
		}, {
			key: "linearScale",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10,
					s = 3 < arguments.length ? arguments[3] : void 0,
					e = Math.abs(e - t),
					a = e / (i = "dataPoints" === (i = this._adjustTicksForSmallRange(i, s, e)) ? this.w.globals.dataPoints - 1 : i);
				i === Number.MAX_VALUE && (i = 10, a = 1);
				for (var n = [], o = t; 0 <= i;) n.push(o), o += a, --i;
				return {
					result: n,
					niceMin: n[0],
					niceMax: n[n.length - 1]
				}
			}
		}, {
			key: "logarithmicScaleNice",
			value: function(t, e, i) {
				e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i));
				for (var s = [], a = Math.ceil(Math.log(e) / Math.log(i) + 1), n = Math.floor(Math.log(t) / Math.log(i)); n < a; n++) s.push(Math.pow(i, n));
				return {
					result: s,
					niceMin: s[0],
					niceMax: s[s.length - 1]
				}
			}
		}, {
			key: "logarithmicScale",
			value: function(t, e, i) {
				e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i));
				for (var s = [], a = Math.log(e) / Math.log(i), n = Math.log(t) / Math.log(i), o = a - n, r = Math.round(o), l = o / r, c = 0, h = n; c < r; c++, h += l) s.push(Math.pow(i, h));
				return s.push(Math.pow(i, a)), {
					result: s,
					niceMin: t,
					niceMax: e
				}
			}
		}, {
			key: "_adjustTicksForSmallRange",
			value: function(t, e, i) {
				var s = t;
				return (s = void 0 !== e && this.w.config.yaxis[e].labels.formatter && void 0 === this.w.config.yaxis[e].tickAmount && (e = Number(this.w.config.yaxis[e].labels.formatter(1)), O.isNumber(e)) && 0 === this.w.globals.yValueDecimal ? Math.ceil(i) : s) < t ? s : t
			}
		}, {
			key: "setYScaleForIndex",
			value: function(t, e, i) {
				var s = this.w.globals,
					a = this.w.config,
					n = s.isBarHorizontal ? a.xaxis : a.yaxis[t],
					o = (void 0 === s.yAxisScale[t] && (s.yAxisScale[t] = []), Math.abs(i - e));
				n.logarithmic && o <= 5 && (s.invalidLogScale = !0), n.logarithmic && 5 < o ? (s.allSeriesCollapsed = !1, s.yAxisScale[t] = this.logarithmicScale(e, i, n.logBase), s.yAxisScale[t] = n.forceNiceScale ? this.logarithmicScaleNice(e, i, n.logBase) : this.logarithmicScale(e, i, n.logBase)) : i !== -Number.MAX_VALUE && O.isNumber(i) ? (s.allSeriesCollapsed = !1, void 0 === n.min && void 0 === n.max || n.forceNiceScale ? (a = void 0 === a.yaxis[t].max && void 0 === a.yaxis[t].min || a.yaxis[t].forceNiceScale, s.yAxisScale[t] = this.niceScale(e, i, n.tickAmount || (o < 5 && 1 < o ? o + 1 : 5), t, a)) : s.yAxisScale[t] = this.linearScale(e, i, n.tickAmount, t)) : s.yAxisScale[t] = this.linearScale(0, 5, 5)
			}
		}, {
			key: "setXScale",
			value: function(t, e) {
				var i = this.w,
					s = i.globals,
					i = i.config.xaxis,
					a = Math.abs(e - t);
				return e !== -Number.MAX_VALUE && O.isNumber(e) ? s.xAxisScale = this.linearScale(t, e, i.tickAmount || (a < 5 && 1 < a ? a + 1 : 5), 0) : s.xAxisScale = this.linearScale(0, 5, 5), s.xAxisScale
			}
		}, {
			key: "setMultipleYScales",
			value: function() {
				var n = this,
					t = this.w.globals,
					o = this.w.config,
					r = t.minYArr.concat([]),
					l = t.maxYArr.concat([]),
					c = [];
				o.yaxis.forEach(function(i, s) {
					var a = s,
						t = (o.series.forEach(function(t, e) {
							t.name === i.seriesName && (a = e, c.push(s !== e ? {
								index: e,
								similarIndex: s,
								alreadyExists: !0
							} : {
								index: e
							}))
						}), r[a]),
						e = l[a];
					n.setYScaleForIndex(s, t, e)
				}), this.sameScaleInMultipleAxes(r, l, c)
			}
		}, {
			key: "sameScaleInMultipleAxes",
			value: function(t, a, e) {
				var r = this,
					l = this.w.config,
					c = this.w.globals,
					n = [],
					e = (e.forEach(function(t) {
						t.alreadyExists && (void 0 === n[t.index] && (n[t.index] = []), n[t.index].push(t.index), n[t.index].push(t.similarIndex))
					}), (c.yAxisSameScaleIndices = n).forEach(function(s, a) {
						n.forEach(function(t, e) {
							var i;
							a !== e && (i = t, 0 < s.filter(function(t) {
								return -1 !== i.indexOf(t)
							}).length) && (n[a] = n[a].concat(n[e]))
						})
					}), n.map(function(i) {
						return i.filter(function(t, e) {
							return i.indexOf(t) === e
						})
					}).map(function(t) {
						return t.sort()
					})),
					n = n.filter(function(t) {
						return !!t
					}),
					i = (o = e.slice()).map(function(t) {
						return JSON.stringify(t)
					}),
					o = o.filter(function(t, e) {
						return i.indexOf(JSON.stringify(t)) === e
					}),
					h = [],
					d = [],
					u = (t.forEach(function(i, s) {
						o.forEach(function(t, e) {
							-1 < t.indexOf(s) && (void 0 === h[e] && (h[e] = [], d[e] = []), h[e].push({
								key: s,
								value: i
							}), d[e].push({
								key: s,
								value: a[s]
							}))
						})
					}), Array.apply(null, Array(o.length)).map(Number.prototype.valueOf, Number.MIN_VALUE)),
					g = Array.apply(null, Array(o.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
				h.forEach(function(t, i) {
					t.forEach(function(t, e) {
						u[i] = Math.min(t.value, u[i])
					})
				}), d.forEach(function(t, i) {
					t.forEach(function(t, e) {
						g[i] = Math.max(t.value, g[i])
					})
				}), t.forEach(function(t, o) {
					d.forEach(function(i, s) {
						var a = u[s],
							n = g[s];
						l.chart.stacked && (n = 0, i.forEach(function(t, e) {
							t.value !== -Number.MAX_VALUE && (n += t.value), a !== Number.MIN_VALUE && (a += h[s][e].value)
						})), i.forEach(function(t, e) {
							i[e].key === o && (void 0 !== l.yaxis[o].min && (a = "function" == typeof l.yaxis[o].min ? l.yaxis[o].min(c.minY) : l.yaxis[o].min), void 0 !== l.yaxis[o].max && (n = "function" == typeof l.yaxis[o].max ? l.yaxis[o].max(c.maxY) : l.yaxis[o].max), r.setYScaleForIndex(o, a, n))
						})
					})
				})
			}
		}, {
			key: "autoScaleY",
			value: function(t, h, d) {
				var u, g, p = (t = t || this).w;
				return p.globals.isMultipleYAxis || p.globals.collapsedSeries.length ? console.warn("autoScaleYaxis is not supported in a multi-yaxis chart.") : (u = p.globals.seriesX[0], g = p.config.chart.stacked, h.forEach(function(s, t) {
					for (var a = 0, e = 0; e < u.length; e++)
						if (u[e] >= d.xaxis.min) {
							a = e;
							break
						} var o, r, n = p.globals.minYArr[t],
						l = p.globals.maxYArr[t],
						c = p.globals.stackedSeriesTotals;
					p.globals.series.forEach(function(i, t) {
						var e = i[a];
						g ? (e = c[a], o = r = e, c.forEach(function(t, e) {
							u[e] <= d.xaxis.max && u[e] >= d.xaxis.min && (r < t && null !== t && (r = t), i[e] < o) && null !== i[e] && (o = i[e])
						})) : (o = r = e, i.forEach(function(i, s) {
							var a, n;
							u[s] <= d.xaxis.max && u[s] >= d.xaxis.min && (n = a = i, p.globals.series.forEach(function(t, e) {
								null !== i && (a = Math.min(t[s], a), n = Math.max(t[s], n))
							}), r < n && null !== n && (r = n), a < o) && null !== a && (o = a)
						})), void 0 === o && void 0 === r && (o = n, r = l), r *= r < 0 ? .9 : 1.1, 0 == (o *= o < 0 ? 1.1 : .9) && 0 === r && (o = -1, r = 1), r < 0 && r < l && (r = l), o < 0 && n < o && (o = n), 1 < h.length ? (h[t].min = void 0 === s.min ? o : s.min, h[t].max = void 0 === s.max ? r : s.max) : (h[0].min = void 0 === s.min ? o : s.min, h[0].max = void 0 === s.max ? r : s.max)
					})
				})), h
			}
		}]), De),
		bt = (t(Oe, [{
			key: "init",
			value: function() {
				this.setYRange(), this.setXRange(), this.setZRange()
			}
		}, {
			key: "getMinYMaxY",
			value: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
					i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE,
					s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
					a = this.w.config,
					n = this.w.globals,
					o = -Number.MAX_VALUE,
					r = Number.MIN_VALUE,
					l = (null === s && (s = t + 1), n.series),
					c = l,
					h = l;
				"candlestick" === a.chart.type ? (c = n.seriesCandleL, h = n.seriesCandleH) : "boxPlot" === a.chart.type ? (c = n.seriesCandleO, h = n.seriesCandleC) : n.isRangeData && (c = n.seriesRangeStart, h = n.seriesRangeEnd);
				for (var d = t; d < s; d++) {
					n.dataPoints = Math.max(n.dataPoints, l[d].length), n.categoryLabels.length && (n.dataPoints = n.categoryLabels.filter(function(t) {
						return void 0 !== t
					}).length), n.labels.length && "datetime" !== a.xaxis.type && 0 !== n.series.reduce(function(t, e) {
						return t + e.length
					}, 0) && (n.dataPoints = Math.max(n.dataPoints, n.labels.length));
					for (var u = 0; u < n.series[d].length; u++) {
						var g = l[d][u];
						null !== g && O.isNumber(g) ? (void 0 !== h[d][u] && (o = Math.max(o, h[d][u]), e = Math.min(e, h[d][u])), void 0 !== c[d][u] && (e = Math.min(e, c[d][u]), i = Math.max(i, c[d][u])), "candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type && "rangeArea" === this.w.config.chart.type && "rangeBar" === this.w.config.chart.type || ("candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type || void 0 !== n.seriesCandleC[d][u] && (o = Math.max(o, n.seriesCandleO[d][u]), o = Math.max(o, n.seriesCandleH[d][u]), o = Math.max(o, n.seriesCandleL[d][u]), o = Math.max(o, n.seriesCandleC[d][u]), "boxPlot" === this.w.config.chart.type) && (o = Math.max(o, n.seriesCandleM[d][u])), !a.series[d].type || "candlestick" === a.series[d].type && "boxPlot" === a.series[d].type && "rangeArea" === a.series[d].type && "rangeBar" === a.series[d].type || (o = Math.max(o, n.series[d][u]), e = Math.min(e, n.series[d][u])), i = o), n.seriesGoals[d] && n.seriesGoals[d][u] && Array.isArray(n.seriesGoals[d][u]) && n.seriesGoals[d][u].forEach(function(t) {
							r !== Number.MIN_VALUE && (r = Math.min(r, t.value), e = r), o = Math.max(o, t.value), i = o
						}), O.isFloat(g) && (g = O.noExponents(g), n.yValueDecimal = Math.max(n.yValueDecimal, g.toString().split(".")[1].length)), r > c[d][u] && c[d][u] < 0 && (r = c[d][u])) : n.hasNullValues = !0
					}
				}
				return "rangeBar" === a.chart.type && n.seriesRangeStart.length && n.isBarHorizontal && (r = e), {
					minY: r = "bar" === a.chart.type && (r < 0 && o < 0 && (o = 0), r === Number.MIN_VALUE) ? 0 : r,
					maxY: o,
					lowestY: e,
					highestY: i
				}
			}
		}, {
			key: "setYRange",
			value: function() {
				var i = this.w.globals,
					e = this.w.config,
					t = (i.maxY = -Number.MAX_VALUE, i.minY = Number.MIN_VALUE, Number.MAX_VALUE);
				if (i.isMultipleYAxis)
					for (var s = 0; s < i.series.length; s++) {
						var a = this.getMinYMaxY(s, t, null, s + 1);
						i.minYArr.push(a.minY), i.maxYArr.push(a.maxY), t = a.lowestY
					}
				var n = this.getMinYMaxY(0, t, null, i.series.length);
				return i.minY = n.minY, i.maxY = n.maxY, t = n.lowestY, e.chart.stacked && this._setStackedMinMax(), "line" !== e.chart.type && "area" !== e.chart.type && "candlestick" !== e.chart.type && "boxPlot" !== e.chart.type && ("rangeBar" !== e.chart.type || i.isBarHorizontal) || i.minY !== Number.MIN_VALUE || t === -Number.MAX_VALUE || t === i.maxY || (n = i.maxY - t, (0 <= t && t <= 10 || void 0 !== e.yaxis[0].min || void 0 !== e.yaxis[0].max) && (n = 0), i.minY = t - 5 * n / 100, 0 < t && i.minY < 0 && (i.minY = 0), i.maxY = i.maxY + 5 * n / 100), e.yaxis.forEach(function(t, e) {
					void 0 !== t.max && ("number" == typeof t.max ? i.maxYArr[e] = t.max : "function" == typeof t.max && (i.maxYArr[e] = t.max(i.isMultipleYAxis ? i.maxYArr[e] : i.maxY)), i.maxY = i.maxYArr[e]), void 0 !== t.min && ("number" == typeof t.min ? i.minYArr[e] = t.min : "function" == typeof t.min && (i.minYArr[e] = t.min(i.isMultipleYAxis ? i.minYArr[e] === Number.MIN_VALUE ? 0 : i.minYArr[e] : i.minY)), i.minY = i.minYArr[e])
				}), i.isBarHorizontal && ["min", "max"].forEach(function(t) {
					void 0 !== e.xaxis[t] && "number" == typeof e.xaxis[t] && ("min" === t ? i.minY = e.xaxis[t] : i.maxY = e.xaxis[t])
				}), i.isMultipleYAxis ? (this.scales.setMultipleYScales(), i.minY = t, i.yAxisScale.forEach(function(t, e) {
					i.minYArr[e] = t.niceMin, i.maxYArr[e] = t.niceMax
				})) : (this.scales.setYScaleForIndex(0, i.minY, i.maxY), i.minY = i.yAxisScale[0].niceMin, i.maxY = i.yAxisScale[0].niceMax, i.minYArr[0] = i.yAxisScale[0].niceMin, i.maxYArr[0] = i.yAxisScale[0].niceMax), {
					minY: i.minY,
					maxY: i.maxY,
					minYArr: i.minYArr,
					maxYArr: i.maxYArr,
					yAxisScale: i.yAxisScale
				}
			}
		}, {
			key: "setXRange",
			value: function() {
				var t, e = this.w.globals,
					i = this.w.config,
					s = "numeric" === i.xaxis.type || "datetime" === i.xaxis.type || "category" === i.xaxis.type && !e.noLabelsProvided || e.noLabelsProvided || e.isXNumeric;
				if (e.isXNumeric)
					for (var a = 0; a < e.series.length; a++)
						if (e.labels[a])
							for (var n = 0; n < e.labels[a].length; n++) null !== e.labels[a][n] && O.isNumber(e.labels[a][n]) && (e.maxX = Math.max(e.maxX, e.labels[a][n]), e.initialMaxX = Math.max(e.maxX, e.labels[a][n]), e.minX = Math.min(e.minX, e.labels[a][n]), e.initialMinX = Math.min(e.minX, e.labels[a][n]));
				if (e.noLabelsProvided && 0 === i.xaxis.categories.length && (e.maxX = e.labels[e.labels.length - 1], e.initialMaxX = e.labels[e.labels.length - 1], e.minX = 1, e.initialMinX = 1), e.isXNumeric || e.noLabelsProvided || e.dataFormatXNumeric) {
					if (void 0 === i.xaxis.tickAmount ? (t = Math.round(e.svgWidth / 150), (t = "numeric" === i.xaxis.type && e.dataPoints < 30 ? e.dataPoints - 1 : t) > e.dataPoints && 0 !== e.dataPoints && (t = e.dataPoints - 1)) : "dataPoints" === i.xaxis.tickAmount ? (1 < e.series.length && (t = e.series[e.maxValsInArrayIndex].length - 1), e.isXNumeric && (t = e.maxX - e.minX - 1)) : t = i.xaxis.tickAmount, e.xTickAmount = t, void 0 !== i.xaxis.max && "number" == typeof i.xaxis.max && (e.maxX = i.xaxis.max), void 0 !== i.xaxis.min && "number" == typeof i.xaxis.min && (e.minX = i.xaxis.min), void 0 !== i.xaxis.range && (e.minX = e.maxX - i.xaxis.range), e.minX !== Number.MAX_VALUE && e.maxX !== -Number.MAX_VALUE)
						if (i.xaxis.convertedCatToNumeric && !e.dataFormatXNumeric) {
							for (var o = [], r = e.minX - 1; r < e.maxX; r++) o.push(r + 1);
							e.xAxisScale = {
								result: o,
								niceMin: o[0],
								niceMax: o[o.length - 1]
							}
						} else e.xAxisScale = this.scales.setXScale(e.minX, e.maxX);
					else e.xAxisScale = this.scales.linearScale(1, t, t), e.noLabelsProvided && 0 < e.labels.length && (e.xAxisScale = this.scales.linearScale(1, e.labels.length, t - 1), e.seriesX = e.labels.slice());
					s && (e.labels = e.xAxisScale.result.slice())
				}
				return e.isBarHorizontal && e.labels.length && (e.xTickAmount = e.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), {
					minX: e.minX,
					maxX: e.maxX
				}
			}
		}, {
			key: "setZRange",
			value: function() {
				var t = this.w.globals;
				if (t.isDataXYZ)
					for (var e = 0; e < t.series.length; e++)
						if (void 0 !== t.seriesZ[e])
							for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && O.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]))
			}
		}, {
			key: "_handleSingleDataPoint",
			value: function() {
				var t, e, i = this.w.globals,
					s = this.w.config;
				i.minX === i.maxX && (t = new y(this.ctx), "datetime" === s.xaxis.type ? (e = t.getDate(i.minX), s.xaxis.labels.datetimeUTC ? e.setUTCDate(e.getUTCDate() - 2) : e.setDate(e.getDate() - 2), i.minX = new Date(e).getTime(), e = t.getDate(i.maxX), s.xaxis.labels.datetimeUTC ? e.setUTCDate(e.getUTCDate() + 2) : e.setDate(e.getDate() + 2), i.maxX = new Date(e).getTime()) : "numeric" !== s.xaxis.type && ("category" !== s.xaxis.type || i.noLabelsProvided) || (i.minX = i.minX - 2, i.initialMinX = i.minX, i.maxX = i.maxX + 2, i.initialMaxX = i.maxX))
			}
		}, {
			key: "_getMinXDiff",
			value: function() {
				var s = this.w.globals;
				s.isXNumeric && s.seriesX.forEach(function(t, e) {
					1 === t.length && t.push(s.seriesX[s.maxValsInArrayIndex][s.seriesX[s.maxValsInArrayIndex].length - 1]);
					var i = t.slice();
					i.sort(function(t, e) {
						return t - e
					}), i.forEach(function(t, e) {
						0 < e && 0 < (t = t - i[e - 1]) && (s.minXDiff = Math.min(t, s.minXDiff))
					}), 1 !== s.dataPoints && s.minXDiff !== Number.MAX_VALUE || (s.minXDiff = .5)
				})
			}
		}, {
			key: "_setStackedMinMax",
			value: function() {
				var t, s, a, e = this,
					n = this.w.globals;
				n.series.length && ((t = n.seriesGroups).length || (t = [this.w.config.series.map(function(t) {
					return t.name
				})]), s = {}, a = {}, t.forEach(function(i) {
					s[i] = [], a[i] = [], e.w.config.series.map(function(t, e) {
						return -1 < i.indexOf(t.name) ? e : null
					}).filter(function(t) {
						return null !== t
					}).forEach(function(t) {
						for (var e = 0; e < n.series[n.maxValsInArrayIndex].length; e++) void 0 === s[i][e] && (s[i][e] = 0, a[i][e] = 0), null !== n.series[t][e] && O.isNumber(n.series[t][e]) && (0 < n.series[t][e] ? s[i][e] += parseFloat(n.series[t][e]) + 1e-4 : a[i][e] += parseFloat(n.series[t][e]))
					})
				}), Object.entries(s).forEach(function(t) {
					var i = H(t, 1)[0];
					s[i].forEach(function(t, e) {
						n.maxY = Math.max(n.maxY, s[i][e]), n.minY = Math.min(n.minY, a[i][e])
					})
				}))
			}
		}]), Oe),
		vt = (t(Me, [{
			key: "drawYaxis",
			value: function(t) {
				var e = this,
					i = this.w,
					s = new D(this.ctx),
					a = i.config.yaxis[t].labels.style,
					n = a.fontSize,
					o = a.fontFamily,
					r = a.fontWeight,
					l = s.group({
						class: "apexcharts-yaxis",
						rel: t,
						transform: "translate(" + i.globals.translateYAxisX[t] + ", 0)"
					});
				if (!this.axesUtils.isYAxisHidden(t)) {
					var c, h, d, u, g, p = s.group({
							class: "apexcharts-yaxis-texts-g"
						}),
						f = (l.add(p), i.globals.yAxisScale[t].result.length - 1),
						x = i.globals.gridHeight / f,
						m = i.globals.translateY,
						b = i.globals.yLabelFormatters[t],
						v = i.globals.yAxisScale[t].result.slice(),
						v = this.axesUtils.checkForReversedLabels(t, v),
						y = "";
					if (i.config.yaxis[t].labels.show)
						for (var w = f; 0 <= w; w--) u = d = g = u = d = h = void 0, h = v[c = w], h = b(h, c, i), d = i.config.yaxis[t].labels.padding, i.config.yaxis[t].opposite && 0 !== i.config.yaxis.length && (d *= -1), u = "end", i.config.yaxis[t].opposite && (u = "start"), "left" === i.config.yaxis[t].labels.align ? u = "start" : "center" === i.config.yaxis[t].labels.align ? u = "middle" : "right" === i.config.yaxis[t].labels.align && (u = "end"), g = e.axesUtils.getYAxisForeColor(a.colors, t), d = s.drawText({
							x: d,
							y: m + f / 10 + i.config.yaxis[t].labels.offsetY + 1,
							text: h,
							textAnchor: u,
							fontSize: n,
							fontFamily: o,
							fontWeight: r,
							maxWidth: i.config.yaxis[t].labels.maxWidth,
							foreColor: Array.isArray(g) ? g[c] : g,
							isPlainText: !1,
							cssClass: "apexcharts-yaxis-label " + a.cssClass
						}), c === f && (y = d), p.add(d), (u = document.createElementNS(i.globals.SVGNS, "title")).textContent = Array.isArray(h) ? h.join(" ") : h, d.node.appendChild(u), 0 !== i.config.yaxis[t].labels.rotate && (g = s.rotateAroundCenter(y.node), c = s.rotateAroundCenter(d.node), d.node.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].labels.rotate, " ").concat(g.x, " ").concat(c.y, ")"))), m += x;
					void 0 !== i.config.yaxis[t].title.text && (C = s.group({
						class: "apexcharts-yaxis-title"
					}), A = 0, i.config.yaxis[t].opposite && (A = i.globals.translateYAxisX[t]), A = s.drawText({
						x: A,
						y: i.globals.gridHeight / 2 + i.globals.translateY + i.config.yaxis[t].title.offsetY,
						text: i.config.yaxis[t].title.text,
						textAnchor: "end",
						foreColor: i.config.yaxis[t].title.style.color,
						fontSize: i.config.yaxis[t].title.style.fontSize,
						fontWeight: i.config.yaxis[t].title.style.fontWeight,
						fontFamily: i.config.yaxis[t].title.style.fontFamily,
						cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[t].title.style.cssClass
					}), C.add(A), l.add(C));
					var k, A = i.config.yaxis[t].axisBorder,
						C = 31 + A.offsetX;
					i.config.yaxis[t].opposite && (C = -31 - A.offsetX), A.show && (k = s.drawLine(C, i.globals.translateY + A.offsetY - 2, C, i.globals.gridHeight + i.globals.translateY + A.offsetY + 2, A.color, 0, A.width), l.add(k)), i.config.yaxis[t].axisTicks.show && this.axesUtils.drawYAxisTicks(C, f, A, i.config.yaxis[t].axisTicks, t, x, l)
				}
				return l
			}
		}, {
			key: "drawYaxisInversed",
			value: function(t) {
				var e = this.w,
					i = new D(this.ctx),
					s = i.group({
						class: "apexcharts-xaxis apexcharts-yaxis-inversed"
					}),
					a = i.group({
						class: "apexcharts-xaxis-texts-g",
						transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")")
					}),
					n = (s.add(a), e.globals.yAxisScale[t].result.length - 1),
					o = e.globals.gridWidth / n + .1,
					r = o + e.config.xaxis.labels.offsetX,
					l = e.globals.xLabelFormatter,
					c = e.globals.yAxisScale[t].result.slice(),
					h = e.globals.timescaleLabels,
					d = (0 < h.length && (this.xaxisLabels = h.slice(), n = (c = h.slice()).length), c = this.axesUtils.checkForReversedLabels(t, c), h.length);
				if (e.config.xaxis.labels.show)
					for (var u = d ? 0 : n; d ? u < d : 0 <= u; d ? u++ : u--) {
						var g = c[u],
							p = (g = l(g, u, e), e.globals.gridWidth + e.globals.padHorizontal - (r - o + e.config.xaxis.labels.offsetX)),
							f = (h.length && (p = (f = this.axesUtils.getLabel(c, h, p, u, this.drawnLabels, this.xaxisFontSize)).x, g = f.text, this.drawnLabels.push(f.text), 0 === u && e.globals.skipFirstTimelinelabel && (g = ""), u === c.length - 1) && e.globals.skipLastTimelinelabel && (g = ""), i.drawText({
								x: p,
								y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30 - ("top" === e.config.xaxis.position ? e.globals.xAxisHeight + e.config.xaxis.axisTicks.height - 2 : 0),
								text: g,
								textAnchor: "middle",
								foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
								fontSize: this.xaxisFontSize,
								fontFamily: this.xaxisFontFamily,
								fontWeight: e.config.xaxis.labels.style.fontWeight,
								isPlainText: !1,
								cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
							})),
							p = (a.add(f), f.tspan(g), document.createElementNS(e.globals.SVGNS, "title"));
						p.textContent = g, f.node.appendChild(p), r += o
					}
				return this.inversedYAxisTitleText(s), this.inversedYAxisBorder(s), s
			}
		}, {
			key: "inversedYAxisBorder",
			value: function(t) {
				var e, i = this.w,
					s = new D(this.ctx),
					a = i.config.xaxis.axisBorder;
				a.show && (e = 0, "bar" === i.config.chart.type && i.globals.isXNumeric && (e -= 15), s = s.drawLine(i.globals.padHorizontal + e + a.offsetX, this.xAxisoffX, i.globals.gridWidth, this.xAxisoffX, a.color, 0, a.height), (this.elgrid && this.elgrid.elGridBorders && i.config.grid.show ? this.elgrid.elGridBorders : t).add(s))
			}
		}, {
			key: "inversedYAxisTitleText",
			value: function(t) {
				var e, i = this.w,
					s = new D(this.ctx);
				void 0 !== i.config.xaxis.title.text && (e = s.group({
					class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"
				}), s = s.drawText({
					x: i.globals.gridWidth / 2 + i.config.xaxis.title.offsetX,
					y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(i.config.xaxis.title.style.fontSize) + i.config.xaxis.title.offsetY + 20,
					text: i.config.xaxis.title.text,
					textAnchor: "middle",
					fontSize: i.config.xaxis.title.style.fontSize,
					fontFamily: i.config.xaxis.title.style.fontFamily,
					fontWeight: i.config.xaxis.title.style.fontWeight,
					foreColor: i.config.xaxis.title.style.color,
					cssClass: "apexcharts-xaxis-title-text " + i.config.xaxis.title.style.cssClass
				}), e.add(s), t.add(e))
			}
		}, {
			key: "yAxisTitleRotate",
			value: function(t, e) {
				var i = this.w,
					s = new D(this.ctx),
					a = {
						width: 0,
						height: 0
					},
					n = {
						width: 0,
						height: 0
					},
					o = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g")),
					o = (null !== o && (a = o.getBoundingClientRect()), i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text")));
				null !== o && (n = o.getBoundingClientRect()), null !== o && (a = this.xPaddingForYAxisTitle(t, a, n, e), o.setAttribute("x", a.xPos - (e ? 10 : 0))), null !== o && (n = s.rotateAroundCenter(o), o.setAttribute("transform", "rotate(".concat(e ? -1 * i.config.yaxis[t].title.rotate : i.config.yaxis[t].title.rotate, " ").concat(n.x, " ").concat(n.y, ")")))
			}
		}, {
			key: "xPaddingForYAxisTitle",
			value: function(t, e, i, s) {
				var a = this.w,
					n = 0,
					o = 10;
				return void 0 === a.config.yaxis[t].title.text || t < 0 ? {
					xPos: n,
					padd: 0
				} : (s ? n = e.width + a.config.yaxis[t].title.offsetX + i.width / 2 + o / 2 : (n = -1 * e.width + a.config.yaxis[t].title.offsetX + o / 2 + i.width / 2, a.globals.isBarHorizontal && (n = -1 * e.width - a.config.yaxis[t].title.offsetX - (o = 25))), {
					xPos: n,
					padd: o
				})
			}
		}, {
			key: "setYAxisXPosition",
			value: function(a, n) {
				var o, r = this.w,
					l = 0,
					c = 18,
					h = 1;
				1 < r.config.yaxis.length && (this.multipleYs = !0), r.config.yaxis.map(function(t, e) {
					var i = -1 < r.globals.ignoreYAxisIndexes.indexOf(e) || !t.show || t.floating || 0 === a[e].width,
						s = a[e].width + n[e].width;
					t.opposite ? r.globals.isBarHorizontal ? (l = r.globals.gridWidth + r.globals.translateX - 1, r.globals.translateYAxisX[e] = l - t.labels.offsetX) : (l = r.globals.gridWidth + r.globals.translateX + h, i || (h = h + s + 20), r.globals.translateYAxisX[e] = l - t.labels.offsetX + 20) : (o = r.globals.translateX - c, i || (c = c + s + 20), r.globals.translateYAxisX[e] = o + t.labels.offsetX)
				})
			}
		}, {
			key: "setYAxisTextAlignments",
			value: function() {
				var n = this.w,
					t = n.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
				(t = O.listToArray(t)).forEach(function(t, e) {
					var i, s, a = n.config.yaxis[e];
					a && !a.floating && void 0 !== a.labels.align && (i = n.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-texts-g")), e = n.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-label")), e = O.listToArray(e), s = i.getBoundingClientRect(), "left" === a.labels.align ? (e.forEach(function(t, e) {
						t.setAttribute("text-anchor", "start")
					}), a.opposite || i.setAttribute("transform", "translate(-".concat(s.width, ", 0)"))) : "center" === a.labels.align ? (e.forEach(function(t, e) {
						t.setAttribute("text-anchor", "middle")
					}), i.setAttribute("transform", "translate(".concat(s.width / 2 * (a.opposite ? 1 : -1), ", 0)"))) : "right" === a.labels.align && (e.forEach(function(t, e) {
						t.setAttribute("text-anchor", "end")
					}), a.opposite) && i.setAttribute("transform", "translate(".concat(s.width, ", 0)")))
				})
			}
		}]), Me),
		yt = (t(Ie, [{
			key: "addEventListener",
			value: function(t, e) {
				var i = this.w;
				i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e]
			}
		}, {
			key: "removeEventListener",
			value: function(t, e) {
				var i = this.w;
				i.globals.events.hasOwnProperty(t) && -1 !== (e = i.globals.events[t].indexOf(e)) && i.globals.events[t].splice(e, 1)
			}
		}, {
			key: "fireEvent",
			value: function(t, e) {
				var i = this.w;
				if (i.globals.events.hasOwnProperty(t)) {
					e && e.length || (e = []);
					for (var s = i.globals.events[t], a = s.length, n = 0; n < a; n++) s[n].apply(null, e)
				}
			}
		}, {
			key: "setupEventHandlers",
			value: function() {
				var e = this,
					i = this.w,
					s = this.ctx,
					a = i.globals.dom.baseEl.querySelector(i.globals.chartClass);
				this.ctx.eventList.forEach(function(t) {
					a.addEventListener(t, function(t) {
						var e = Object.assign({}, i, {
							seriesIndex: i.globals.capturedSeriesIndex,
							dataPointIndex: i.globals.capturedDataPointIndex
						});
						"mousemove" === t.type || "touchmove" === t.type ? "function" == typeof i.config.chart.events.mouseMove && i.config.chart.events.mouseMove(t, s, e) : "mouseleave" === t.type || "touchleave" === t.type ? "function" == typeof i.config.chart.events.mouseLeave && i.config.chart.events.mouseLeave(t, s, e) : ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof i.config.chart.events.click && i.config.chart.events.click(t, s, e), s.ctx.events.fireEvent("click", [t, s, e]))
					}, {
						capture: !1,
						passive: !0
					})
				}), this.ctx.eventList.forEach(function(t) {
					i.globals.dom.baseEl.addEventListener(t, e.documentEvent, {
						passive: !0
					})
				}), this.ctx.core.setupBrushHandler()
			}
		}, {
			key: "documentEvent",
			value: function(t) {
				var e, i = this.w,
					s = t.target.className;
				"click" === t.type && (e = i.globals.dom.baseEl.querySelector(".apexcharts-menu")) && e.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== s && e.classList.remove("apexcharts-menu-open"), i.globals.clientX = ("touchmove" === t.type ? t.touches[0] : t).clientX, i.globals.clientY = ("touchmove" === t.type ? t.touches[0] : t).clientY
			}
		}]), Ie),
		wt = (t(_e, [{
			key: "setCurrentLocaleValues",
			value: function(e) {
				var t = this.w.config.chart.locales,
					t = (t = window.Apex.chart && window.Apex.chart.locales && 0 < window.Apex.chart.locales.length ? this.w.config.chart.locales.concat(window.Apex.chart.locales) : t).filter(function(t) {
						return t.name === e
					})[0];
				if (!t) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
				t = O.extend(ht, t);
				this.w.globals.locale = t.options
			}
		}]), _e),
		kt = (t(Pe, [{
			key: "drawAxis",
			value: function(t, e) {
				var i, s, a = this,
					n = this.w.globals,
					o = this.w.config,
					r = new u(this.ctx, e),
					l = new vt(this.ctx, e);
				n.axisCharts && "radar" !== t && (n.isBarHorizontal ? (s = l.drawYaxisInversed(0), i = r.drawXaxisInversed(0), n.dom.elGraphical.add(i), n.dom.elGraphical.add(s)) : (i = r.drawXaxis(), n.dom.elGraphical.add(i), o.yaxis.map(function(t, e) {
					-1 === n.ignoreYAxisIndexes.indexOf(e) && (s = l.drawYaxis(e), n.dom.Paper.add(s), "back" === a.w.config.grid.position) && ((e = n.dom.Paper.children()[1]).remove(), n.dom.Paper.add(e))
				})))
			}
		}]), Pe),
		At = (t(Ee, [{
			key: "drawXCrosshairs",
			value: function() {
				var t = this.w,
					e = new D(this.ctx),
					i = new L(this.ctx),
					s = t.config.xaxis.crosshairs.fill.gradient,
					a = t.config.xaxis.crosshairs.dropShadow,
					n = t.config.xaxis.crosshairs.fill.type,
					o = s.colorFrom,
					r = s.colorTo,
					l = s.opacityFrom,
					c = s.opacityTo,
					s = s.stops,
					h = a.enabled,
					d = a.left,
					u = a.top,
					g = a.blur,
					p = a.color,
					a = a.opacity,
					f = t.config.xaxis.crosshairs.fill.color;
				t.config.xaxis.crosshairs.show && ("gradient" === n && (f = e.drawGradient("vertical", o, r, l, c, null, s, null)), n = e.drawRect(), 1 === t.config.xaxis.crosshairs.width && (n = e.drawLine()), o = t.globals.gridHeight, (!O.isNumber(o) || o < 0) && (o = 0), r = t.config.xaxis.crosshairs.width, (!O.isNumber(r) || r < 0) && (r = 0), n.attr({
					class: "apexcharts-xcrosshairs",
					x: 0,
					y: 0,
					y2: o,
					width: r,
					height: o,
					fill: f,
					filter: "none",
					"fill-opacity": t.config.xaxis.crosshairs.opacity,
					stroke: t.config.xaxis.crosshairs.stroke.color,
					"stroke-width": t.config.xaxis.crosshairs.stroke.width,
					"stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray
				}), h && (n = i.dropShadow(n, {
					left: d,
					top: u,
					blur: g,
					color: p,
					opacity: a
				})), t.globals.dom.elGraphical.add(n))
			}
		}, {
			key: "drawYCrosshairs",
			value: function() {
				var t = this.w,
					e = new D(this.ctx),
					i = t.config.yaxis[0].crosshairs,
					s = t.globals.barPadForNumericAxis,
					a = (t.config.yaxis[0].crosshairs.show && ((a = e.drawLine(-s, 0, t.globals.gridWidth + s, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width)).attr({
						class: "apexcharts-ycrosshairs"
					}), t.globals.dom.elGraphical.add(a)), e.drawLine(-s, 0, t.globals.gridWidth + s, 0, i.stroke.color, 0, 0));
				a.attr({
					class: "apexcharts-ycrosshairs-hidden"
				}), t.globals.dom.elGraphical.add(a)
			}
		}]), Ee),
		Ct = (t(Le, [{
			key: "checkResponsiveConfig",
			value: function(t) {
				var a, n, e, o = this,
					r = this.w,
					i = r.config;
				0 !== i.responsive.length && ((a = i.responsive.slice()).sort(function(t, e) {
					return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0
				}).reverse(), n = new p({}), i = function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
						e = a[0].breakpoint,
						i = 0 < window.innerWidth ? window.innerWidth : screen.width;
					if (e < i) {
						e = I.extendArrayProps(n, r.globals.initialConfig, r), t = O.extend(e, t);
						t = O.extend(r.config, t), o.overrideResponsiveOptions(t)
					} else
						for (var s = 0; s < a.length; s++) i < a[s].breakpoint && (t = I.extendArrayProps(n, a[s].options, r), t = O.extend(r.config, t), o.overrideResponsiveOptions(t))
				}, t ? (e = I.extendArrayProps(n, t, r), e = O.extend(r.config, e), i(e = O.extend(e, t))) : i({}))
			}
		}, {
			key: "overrideResponsiveOptions",
			value: function(t) {
				t = new p(t).init({
					responsiveOverride: !0
				});
				this.w.config = t
			}
		}]), Le),
		St = (t(Te, [{
			key: "init",
			value: function() {
				this.setDefaultColors()
			}
		}, {
			key: "setDefaultColors",
			value: function() {
				var t, s = this,
					a = this.w,
					e = new O;
				if (a.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(a.config.theme.mode)), void 0 === a.config.colors || 0 === (null == (t = a.config.colors) ? void 0 : t.length) ? a.globals.colors = this.predefined() : (a.globals.colors = a.config.colors, Array.isArray(a.config.colors) && 0 < a.config.colors.length && "function" == typeof a.config.colors[0] && (a.globals.colors = a.config.series.map(function(t, e) {
						var i = a.config.colors[e];
						return "function" == typeof(i = i || a.config.colors[0]) ? (s.isColorFn = !0, i({
							value: a.globals.axisCharts ? a.globals.series[e][0] || 0 : a.globals.series[e],
							seriesIndex: e,
							dataPointIndex: e,
							w: a
						})) : i
					}))), a.globals.seriesColors.map(function(t, e) {
						t && (a.globals.colors[e] = t)
					}), a.config.theme.monochrome.enabled) {
					var i = [],
						n = a.globals.series.length;
					(this.isBarDistributed || this.isHeatmapDistributed) && (n = a.globals.series[0].length * a.globals.series.length);
					for (var o = a.config.theme.monochrome.color, r = 1 / (n / a.config.theme.monochrome.shadeIntensity), l = a.config.theme.monochrome.shadeTo, c = 0, h = 0; h < n; h++) {
						var d = void 0,
							d = "dark" === l ? e.shadeColor(-1 * c, o) : e.shadeColor(c, o);
						c += r, i.push(d)
					}
					a.globals.colors = i.slice()
				}
				var u = a.globals.colors.slice();
				this.pushExtraColors(a.globals.colors), ["fill", "stroke"].forEach(function(t) {
					void 0 === a.config[t].colors ? a.globals[t].colors = s.isColorFn ? a.config.colors : u : a.globals[t].colors = a.config[t].colors.slice(), s.pushExtraColors(a.globals[t].colors)
				}), void 0 === a.config.dataLabels.style.colors ? a.globals.dataLabels.style.colors = u : a.globals.dataLabels.style.colors = a.config.dataLabels.style.colors.slice(), this.pushExtraColors(a.globals.dataLabels.style.colors, 50), void 0 === a.config.plotOptions.radar.polygons.fill.colors ? a.globals.radarPolygons.fill.colors = ["dark" === a.config.theme.mode ? "#424242" : "none"] : a.globals.radarPolygons.fill.colors = a.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(a.globals.radarPolygons.fill.colors, 20), void 0 === a.config.markers.colors ? a.globals.markers.colors = u : a.globals.markers.colors = a.config.markers.colors.slice(), this.pushExtraColors(a.globals.markers.colors)
			}
		}, {
			key: "pushExtraColors",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
					s = this.w,
					e = e || s.globals.series.length;
				if ((i = null === i ? this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === s.config.chart.type && s.config.plotOptions.heatmap.colorScale.inverse : i) && s.globals.series.length && (e = s.globals.series[s.globals.maxValsInArrayIndex].length * s.globals.series.length), t.length < e)
					for (var a = e - t.length, n = 0; n < a; n++) t.push(t[n])
			}
		}, {
			key: "updateThemeOptions",
			value: function(t) {
				t.chart = t.chart || {}, t.tooltip = t.tooltip || {};
				var e = t.theme.mode || "light",
					i = t.theme.palette || ("dark" === e ? "palette4" : "palette1"),
					s = t.chart.foreColor || ("dark" === e ? "#f6f7f8" : "#373d3f");
				return t.tooltip.theme = e, t.chart.foreColor = s, t.theme.palette = i, t
			}
		}, {
			key: "predefined",
			value: function() {
				switch (this.w.config.theme.palette) {
					case "palette1":
					default:
						this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
						break;
					case "palette2":
						this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
						break;
					case "palette3":
						this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
						break;
					case "palette4":
						this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
						break;
					case "palette5":
						this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
						break;
					case "palette6":
						this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
						break;
					case "palette7":
						this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
						break;
					case "palette8":
						this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
						break;
					case "palette9":
						this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
						break;
					case "palette10":
						this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"]
				}
				return this.colors
			}
		}]), Te),
		Tt = (t(Se, [{
			key: "draw",
			value: function() {
				this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle")
			}
		}, {
			key: "drawTitleSubtitle",
			value: function(t) {
				var e = this.w,
					i = "title" === t ? e.config.title : e.config.subtitle,
					s = e.globals.svgWidth / 2,
					a = i.offsetY,
					n = "middle";
				"left" === i.align ? (s = 10, n = "start") : "right" === i.align && (s = e.globals.svgWidth - 10, n = "end"), s += i.offsetX, a = a + parseInt(i.style.fontSize, 10) + i.margin / 2, void 0 !== i.text && ((s = new D(this.ctx).drawText({
					x: s,
					y: a,
					text: i.text,
					textAnchor: n,
					fontSize: i.style.fontSize,
					fontFamily: i.style.fontFamily,
					fontWeight: i.style.fontWeight,
					foreColor: i.style.color,
					opacity: 1
				})).node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(s))
			}
		}]), Se),
		Lt = (t(Ce, [{
			key: "getTitleSubtitleCoords",
			value: function(t) {
				var e = this.w,
					i = 0,
					s = 0,
					a = ("title" === t ? e.config.title : e.config.subtitle).floating,
					t = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
				return null === t || a || (i = (a = t.getBoundingClientRect()).width, s = e.globals.axisCharts ? a.height + 5 : a.height), {
					width: i,
					height: s
				}
			}
		}, {
			key: "getLegendsRect",
			value: function() {
				var t = this.w,
					e = t.globals.dom.elLegendWrap,
					i = (t.config.legend.height || "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || (e.style.maxHeight = t.globals.svgHeight / 2 + "px"), Object.assign({}, O.getBoundingClientRect(e)));
				return null !== e && !t.config.legend.floating && t.config.legend.show ? this.dCtx.lgRect = {
					x: i.x,
					y: i.y,
					height: i.height,
					width: 0 === i.height ? 0 : i.width
				} : this.dCtx.lgRect = {
					x: 0,
					y: 0,
					height: 0,
					width: 0
				}, "left" !== t.config.legend.position && "right" !== t.config.legend.position || 1.5 * this.dCtx.lgRect.width > t.globals.svgWidth && (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5), this.dCtx.lgRect
			}
		}, {
			key: "getLargestStringFromMultiArr",
			value: function(t, e) {
				var i, s;
				return this.w.globals.isMultiLineX && (i = e.map(function(t, e) {
					return Array.isArray(t) ? t.length : 1
				}), s = Math.max.apply(Math, b(i)), t = e[i.indexOf(s)]), t
			}
		}]), Ce),
		Et = (t(Ae, [{
			key: "getxAxisLabelsCoords",
			value: function() {
				var t, e, i, s, a, n, o, r = this.w,
					l = r.globals.labels.slice();
				return r.config.xaxis.convertedCatToNumeric && 0 === l.length && (l = r.globals.categoryLabels), 0 < r.globals.timescaleLabels.length ? (t = {
					width: (t = this.getxAxisTimeScaleLabelsCoords()).width,
					height: t.height
				}, r.globals.rotateXLabels = !1) : (this.dCtx.lgWidthForSideLegends = "left" !== r.config.legend.position && "right" !== r.config.legend.position || r.config.legend.floating ? 0 : this.dCtx.lgRect.width, a = r.globals.xLabelFormatter, e = O.getLargestStringFromArr(l), i = this.dCtx.dimHelpers.getLargestStringFromMultiArr(e, l), r.globals.isBarHorizontal && (i = e = r.globals.yAxisScale[0].result.reduce(function(t, e) {
					return t.length > e.length ? t : e
				}, 0)), n = e, e = (o = new f(this.dCtx.ctx)).xLabelFormat(a, e, n, {
					i: void 0,
					dateFormatter: new y(this.dCtx.ctx).formatDate,
					w: r
				}), i = o.xLabelFormat(a, i, n, {
					i: void 0,
					dateFormatter: new y(this.dCtx.ctx).formatDate,
					w: r
				}), (r.config.xaxis.convertedCatToNumeric && void 0 === e || "" === String(e).trim()) && (i = e = "1"), a = o = (s = new D(this.dCtx.ctx)).getTextRects(e, r.config.xaxis.labels.style.fontSize), e !== i && (a = s.getTextRects(i, r.config.xaxis.labels.style.fontSize)), (t = {
					width: (o.width >= a.width ? o : a).width,
					height: (o.height >= a.height ? o : a).height
				}).width * l.length > r.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== r.config.xaxis.labels.rotate || r.config.xaxis.labels.rotateAlways ? r.globals.isBarHorizontal || (r.globals.rotateXLabels = !0, o = (n = function(t) {
					return s.getTextRects(t, r.config.xaxis.labels.style.fontSize, r.config.xaxis.labels.style.fontFamily, "rotate(".concat(r.config.xaxis.labels.rotate, " 0 0)"), !1)
				})(e), e !== i && (a = n(i)), t.height = (o.height > a.height ? o : a).height / 1.5, t.width = (o.width > a.width ? o : a).width) : r.globals.rotateXLabels = !1), {
					width: (t = r.config.xaxis.labels.show ? t : {
						width: 0,
						height: 0
					}).width,
					height: t.height
				}
			}
		}, {
			key: "getxAxisGroupLabelsCoords",
			value: function() {
				var t, e, i, s, a, n, o = this.w;
				return o.globals.hasXaxisGroups ? (t = (null == (t = o.config.xaxis.group.style) ? void 0 : t.fontSize) || o.config.xaxis.labels.style.fontSize, i = o.globals.groups.map(function(t) {
					return t.title
				}), e = O.getLargestStringFromArr(i), i = this.dCtx.dimHelpers.getLargestStringFromMultiArr(e, i), n = a = (s = new D(this.dCtx.ctx)).getTextRects(e, t), e !== i && (n = s.getTextRects(i, t)), e = {
					width: (a.width >= n.width ? a : n).width,
					height: (a.height >= n.height ? a : n).height
				}, {
					width: (e = o.config.xaxis.labels.show ? e : {
						width: 0,
						height: 0
					}).width,
					height: e.height
				}) : {
					width: 0,
					height: 0
				}
			}
		}, {
			key: "getxAxisTitleCoords",
			value: function() {
				var t = this.w,
					e = 0,
					i = 0;
				return void 0 !== t.config.xaxis.title.text && (e = (t = new D(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize)).width, i = t.height), {
					width: e,
					height: i
				}
			}
		}, {
			key: "getxAxisTimeScaleLabelsCoords",
			value: function() {
				var t = this.w,
					e = (this.dCtx.timescaleLabels = t.globals.timescaleLabels.slice(), this.dCtx.timescaleLabels.map(function(t) {
						return t.value
					})),
					i = e.reduce(function(t, e) {
						return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e
					}, 0);
				return 1.05 * (i = new D(this.dCtx.ctx).getTextRects(i, t.config.xaxis.labels.style.fontSize)).width * e.length > t.globals.gridWidth && 0 !== t.config.xaxis.labels.rotate && (t.globals.overlappingXLabels = !0), i
			}
		}, {
			key: "additionalPaddingXLabels",
			value: function(t) {
				var a = this,
					n = this.w,
					o = n.globals,
					r = n.config,
					l = r.xaxis.type,
					c = t.width,
					h = (o.skipLastTimelinelabel = !1, o.skipFirstTimelinelabel = !1, n.config.yaxis[0].opposite && n.globals.isBarHorizontal);
				r.yaxis.forEach(function(t, e) {
					var i, s;
					h ? (a.dCtx.gridPad.left < c && (a.dCtx.xPadLeft = c / 2 + 1), a.dCtx.xPadRight = c / 2 + 1) : (t = t, e = e, 1 < r.yaxis.length && -1 !== o.collapsedSeriesIndices.indexOf(e) || (e = t, a.dCtx.timescaleLabels && a.dCtx.timescaleLabels.length ? (t = a.dCtx.timescaleLabels[0], i = a.dCtx.timescaleLabels[a.dCtx.timescaleLabels.length - 1].position + c / 1.75 - a.dCtx.yAxisWidthRight, t = t.position - c / 1.75 + a.dCtx.yAxisWidthLeft, s = "right" === n.config.legend.position && 0 < a.dCtx.lgRect.width ? a.dCtx.lgRect.width : 0, i > o.svgWidth - o.translateX - s && (o.skipLastTimelinelabel = !0), t < -(e.show && !e.floating || "bar" !== r.chart.type && "candlestick" !== r.chart.type && "rangeBar" !== r.chart.type && "boxPlot" !== r.chart.type ? 10 : c / 1.75) && (o.skipFirstTimelinelabel = !0)) : "datetime" === l ? a.dCtx.gridPad.right < c && !o.rotateXLabels && (o.skipLastTimelinelabel = !0) : "datetime" !== l && a.dCtx.gridPad.right < c / 2 - a.dCtx.yAxisWidthRight && !o.rotateXLabels && !n.config.xaxis.labels.trim && ("between" !== n.config.xaxis.tickPlacement || n.globals.isBarHorizontal) && (a.dCtx.xPadRight = c / 2 + 1)))
				})
			}
		}]), Ae),
		Pt = (t(ke, [{
			key: "getyAxisLabelsCoords",
			value: function() {
				var l = this,
					c = this.w,
					h = [],
					d = 10,
					u = new T(this.dCtx.ctx);
				return c.config.yaxis.map(function(t, e) {
					var i, s, a, n, o = c.globals.yAxisScale[e],
						r = 0;
					!u.isYAxisHidden(e) && t.labels.show && void 0 !== t.labels.minWidth && (r = t.labels.minWidth), !u.isYAxisHidden(e) && t.labels.show && o.result.length ? (s = c.globals.yLabelFormatters[e], a = o.niceMin === Number.MIN_VALUE ? 0 : o.niceMin, void 0 !== (i = o = s(a = String(a).length > String(o.niceMax).length ? a : o.niceMax, {
						seriesIndex: e,
						dataPointIndex: -1,
						w: c
					})) && 0 !== o.length || (o = a), c.globals.isBarHorizontal && (d = 0, a = c.globals.labels.slice(), o = s(o = O.getLargestStringFromArr(a), {
						seriesIndex: e,
						dataPointIndex: -1,
						w: c
					}), i = l.dCtx.dimHelpers.getLargestStringFromMultiArr(o, a)), s = new D(l.dCtx.ctx), e = "rotate(".concat(t.labels.rotate, " 0 0)"), n = a = s.getTextRects(o, t.labels.style.fontSize, t.labels.style.fontFamily, e, !1), o !== i && (n = s.getTextRects(i, t.labels.style.fontSize, t.labels.style.fontFamily, e, !1)), h.push({
						width: (r > n.width || r > a.width ? r : (n.width > a.width ? n : a).width) + d,
						height: (n.height > a.height ? n : a).height
					})) : h.push({
						width: 0,
						height: 0
					})
				}), h
			}
		}, {
			key: "getyAxisTitleCoords",
			value: function() {
				var a = this,
					t = this.w,
					n = [];
				return t.config.yaxis.map(function(t, e) {
					var i, s;
					t.show && void 0 !== t.title.text ? (s = new D(a.dCtx.ctx), i = "rotate(".concat(t.title.rotate, " 0 0)"), s = s.getTextRects(t.title.text, t.title.style.fontSize, t.title.style.fontFamily, i, !1), n.push({
						width: s.width,
						height: s.height
					})) : n.push({
						width: 0,
						height: 0
					})
				}), n
			}
		}, {
			key: "getTotalYAxisWidth",
			value: function() {
				function i(t, e) {
					var i = a.config.yaxis[e].floating,
						s = 0;
					0 < t.width && !i ? (s = t.width + l, -1 < a.globals.ignoreYAxisIndexes.indexOf(e) && (s = s - t.width - l)) : s = i || c.isYAxisHidden(e) ? 0 : 5, a.config.yaxis[e].opposite ? r += s : o += s, n += s
				}
				var a = this.w,
					n = 0,
					o = 0,
					r = 0,
					l = 1 < a.globals.yAxisScale.length ? 10 : 0,
					c = new T(this.dCtx.ctx);
				return a.globals.yLabelsCoords.map(function(t, e) {
					i(t, e)
				}), a.globals.yTitleCoords.map(function(t, e) {
					i(t, e)
				}), a.globals.isBarHorizontal && !a.config.yaxis[0].floating && (n = a.globals.yLabelsCoords[0].width + a.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = o, this.dCtx.yAxisWidthRight = r, n
			}
		}]), ke),
		_t = (t(we, [{
			key: "gridPadForColumnsInNumericAxis",
			value: function(t) {
				var e, i, s, a, n, o = this.w;
				return o.globals.noData || o.globals.allSeriesCollapsed ? 0 : (n = o.config.chart.type, s = (e = function(t) {
					return "bar" === t || "rangeBar" === t || "candlestick" === t || "boxPlot" === t
				})(n) ? o.config.series.length : 1, (i = 0) < o.globals.comboBarCount && (s = o.globals.comboBarCount), o.globals.collapsedSeries.forEach(function(t) {
					e(t.type) && --s
				}), o.config.chart.stacked && (s = 1), (e(n) || 0 < o.globals.comboBarCount) && o.globals.isXNumeric && !o.globals.isBarHorizontal && 0 < s && (n = (n = (n = Math.abs(o.globals.initialMaxX - o.globals.initialMinX)) <= 3 ? o.globals.dataPoints : n) / t, t / 2 < (a = o.globals.minXDiff && 0 < o.globals.minXDiff / n ? o.globals.minXDiff / n : a) && (a /= 2), i = (i = (i = a / s * parseInt(o.config.plotOptions.bar.columnWidth, 10) / 100) < 1 ? 1 : i) / (1 < s ? 1 : 1.5) + 5, o.globals.barPadForNumericAxis = i), i)
			}
		}, {
			key: "gridPadFortitleSubtitle",
			value: function() {
				var e = this,
					i = this.w,
					t = i.globals,
					s = this.dCtx.isSparkline || !i.globals.axisCharts ? 0 : 10,
					a = (["title", "subtitle"].forEach(function(t) {
						void 0 !== i.config[t].text ? s += i.config[t].margin : s += e.dCtx.isSparkline || !i.globals.axisCharts ? 0 : 5
					}), !i.config.legend.show || "bottom" !== i.config.legend.position || i.config.legend.floating || i.globals.axisCharts || (s += 10), this.dCtx.dimHelpers.getTitleSubtitleCoords("title")),
					n = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
				t.gridHeight = t.gridHeight - a.height - n.height - s, t.translateY = t.translateY + a.height + n.height + s
			}
		}, {
			key: "setGridXPosForDualYAxis",
			value: function(i, s) {
				var a = this.w,
					n = new T(this.dCtx.ctx);
				a.config.yaxis.map(function(t, e) {
					-1 !== a.globals.ignoreYAxisIndexes.indexOf(e) || t.floating || n.isYAxisHidden(e) || (t.opposite && (a.globals.translateX = a.globals.translateX - (s[e].width + i[e].width) - parseInt(a.config.yaxis[e].labels.style.fontSize, 10) / 1.2 - 12), a.globals.translateX < 2 && (a.globals.translateX = 2))
				})
			}
		}]), we),
		It = (t(ye, [{
			key: "plotCoords",
			value: function() {
				var i = this,
					t = this.w,
					e = t.globals,
					t = (this.lgRect = this.dimHelpers.getLegendsRect(), this.isSparkline && (0 < t.config.markers.discrete.length || 0 < t.config.markers.size) && Object.entries(this.gridPad).forEach(function(t) {
						var t = H(t, 2),
							e = t[0],
							t = t[1];
						i.gridPad[e] = Math.max(t, i.w.globals.markers.largestSize / 1.5)
					}), e.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), e.gridHeight = e.gridHeight - this.gridPad.top - this.gridPad.bottom, e.gridWidth = e.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft, this.dimGrid.gridPadForColumnsInNumericAxis(e.gridWidth));
				e.gridWidth = e.gridWidth - 2 * t, e.translateX = e.translateX + this.gridPad.left + this.xPadLeft + (0 < t ? t + 4 : 0), e.translateY = e.translateY + this.gridPad.top
			}
		}, {
			key: "setDimensionsForAxisCharts",
			value: function() {
				function t() {
					s.translateX = c, s.gridHeight = s.svgHeight - e.lgRect.height - h - (e.isSparkline || "treemap" === i.config.chart.type ? 0 : i.globals.rotateXLabels ? 10 : 15), s.gridWidth = s.svgWidth - c
				}
				var e = this,
					i = this.w,
					s = i.globals,
					a = this.dimYAxis.getyAxisLabelsCoords(),
					n = this.dimYAxis.getyAxisTitleCoords(),
					o = (i.globals.yLabelsCoords = [], i.globals.yTitleCoords = [], i.config.yaxis.map(function(t, e) {
						i.globals.yLabelsCoords.push({
							width: a[e].width,
							index: e
						}), i.globals.yTitleCoords.push({
							width: n[e].width,
							index: e
						})
					}), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth(), this.dimXAxis.getxAxisLabelsCoords()),
					r = this.dimXAxis.getxAxisGroupLabelsCoords(),
					l = this.dimXAxis.getxAxisTitleCoords(),
					c = (this.conditionalChecksForAxisCoords(o, l, r), s.translateXAxisY = i.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, s.translateXAxisX = i.globals.rotateXLabels && i.globals.isXNumeric && i.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, i.globals.isBarHorizontal && (s.rotateXLabels = !1, s.translateXAxisY = parseInt(i.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), s.translateXAxisY = s.translateXAxisY + i.config.xaxis.labels.offsetY, s.translateXAxisX = s.translateXAxisX + i.config.xaxis.labels.offsetX, this.yAxisWidth),
					h = this.xAxisHeight,
					d = (s.xAxisLabelsHeight = this.xAxisHeight - l.height, s.xAxisGroupLabelsHeight = s.xAxisLabelsHeight - o.height, s.xAxisLabelsWidth = this.xAxisWidth, s.xAxisHeight = this.xAxisHeight, 10);
				"radar" !== i.config.chart.type && !this.isSparkline || (c = 0, h = s.goldenPadding), this.isSparkline && (this.lgRect = {
					height: 0,
					width: 0
				}), !this.isSparkline && "treemap" !== i.config.chart.type || (d = h = c = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(o);
				switch ("top" === i.config.xaxis.position && (d = s.xAxisHeight - i.config.xaxis.axisTicks.height - 5), i.config.legend.position) {
					case "bottom":
						s.translateY = d, t();
						break;
					case "top":
						s.translateY = this.lgRect.height + d, t();
						break;
					case "left":
						s.translateY = d, s.translateX = this.lgRect.width + c, s.gridHeight = s.svgHeight - h - 12, s.gridWidth = s.svgWidth - this.lgRect.width - c;
						break;
					case "right":
						s.translateY = d, s.translateX = c, s.gridHeight = s.svgHeight - h - 12, s.gridWidth = s.svgWidth - this.lgRect.width - c - 5;
						break;
					default:
						throw new Error("Legend position not supported")
				}
				this.dimGrid.setGridXPosForDualYAxis(n, a), new vt(this.ctx).setYAxisXPosition(a, n)
			}
		}, {
			key: "setDimensionsForNonAxisCharts",
			value: function() {
				var t = this.w,
					e = t.globals,
					i = t.config,
					s = 0,
					t = (t.config.legend.show && !t.config.legend.floating && (s = 20), "pie" === i.chart.type || "polarArea" === i.chart.type || "donut" === i.chart.type ? "pie" : "radialBar"),
					a = i.plotOptions[t].offsetY,
					n = i.plotOptions[t].offsetX;
				if (!i.legend.show || i.legend.floating) e.gridHeight = e.svgHeight - i.grid.padding.left + i.grid.padding.right, e.gridWidth = e.gridHeight, e.translateY = a, e.translateX = n + (e.svgWidth - e.gridWidth) / 2;
				else switch (i.legend.position) {
					case "bottom":
						e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = a - 10, e.translateX = n + (e.svgWidth - e.gridWidth) / 2;
						break;
					case "top":
						e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = this.lgRect.height + a + 10, e.translateX = n + (e.svgWidth - e.gridWidth) / 2;
						break;
					case "left":
						e.gridWidth = e.svgWidth - this.lgRect.width - s, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = a, e.translateX = n + this.lgRect.width + s;
						break;
					case "right":
						e.gridWidth = e.svgWidth - this.lgRect.width - s - 5, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = a, e.translateX = n + 10;
						break;
					default:
						throw new Error("Legend position not supported")
				}
			}
		}, {
			key: "conditionalChecksForAxisCoords",
			value: function(t, e, i) {
				var s = this.w,
					a = s.globals.hasXaxisGroups ? 2 : 1,
					i = i.height + t.height + e.height,
					n = s.globals.isMultiLineX ? 1.2 : s.globals.LINE_HEIGHT_RATIO,
					o = s.globals.rotateXLabels ? 22 : 10,
					r = s.globals.rotateXLabels && "bottom" === s.config.legend.position ? 10 : 0,
					l = (this.xAxisHeight = i * n + a * o + r, this.xAxisWidth = t.width, this.xAxisHeight - e.height > s.config.xaxis.labels.maxHeight && (this.xAxisHeight = s.config.xaxis.labels.maxHeight), s.config.xaxis.labels.minHeight && this.xAxisHeight < s.config.xaxis.labels.minHeight && (this.xAxisHeight = s.config.xaxis.labels.minHeight), s.config.xaxis.floating && (this.xAxisHeight = 0), 0),
					c = 0;
				s.config.yaxis.forEach(function(t) {
					l += t.labels.minWidth, c += t.labels.maxWidth
				}), this.yAxisWidth < l && (this.yAxisWidth = l), this.yAxisWidth > c && (this.yAxisWidth = c)
			}
		}]), ye),
		Mt = (t(ve, [{
			key: "getLegendStyles",
			value: function() {
				var t = document.createElement("style"),
					e = (t.setAttribute("type", "text/css"), document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"));
				return t.appendChild(e), t
			}
		}, {
			key: "getLegendBBox",
			value: function() {
				var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),
					e = t.width;
				return {
					clwh: t.height,
					clww: e
				}
			}
		}, {
			key: "appendToForeignObject",
			value: function() {
				this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles())
			}
		}, {
			key: "toggleDataSeries",
			value: function(t, e) {
				var i, s, a = this,
					n = this.w;
				n.globals.axisCharts || "radialBar" === n.config.chart.type ? (n.globals.resized = !0, i = s = null, n.globals.risingSeries = [], i = n.globals.axisCharts ? (s = n.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), parseInt(s.getAttribute("data:realIndex"), 10)) : (s = n.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), parseInt(s.getAttribute("rel"), 10) - 1), e ? [{
					cs: n.globals.collapsedSeries,
					csi: n.globals.collapsedSeriesIndices
				}, {
					cs: n.globals.ancillaryCollapsedSeries,
					csi: n.globals.ancillaryCollapsedSeriesIndices
				}].forEach(function(t) {
					a.riseCollapsedSeries(t.cs, t.csi, i)
				}) : this.hideSeries({
					seriesEl: s,
					realIndex: i
				})) : (e = n.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")), "pie" !== (s = n.config.chart.type) && "polarArea" !== s && "donut" !== s || (t = n.config.plotOptions.pie.donut.labels, new D(this.lgCtx.ctx).pathMouseDown(e.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(e.members[0].node, t)), e.fire("click"))
			}
		}, {
			key: "hideSeries",
			value: function(t) {
				var e, i = t.seriesEl,
					t = t.realIndex,
					s = this.w,
					a = O.clone(s.config.series);
				s.globals.axisCharts ? (e = !1, s.config.yaxis[t] && s.config.yaxis[t].show && s.config.yaxis[t].showAlways && (e = !0, s.globals.ancillaryCollapsedSeriesIndices.indexOf(t) < 0) && (s.globals.ancillaryCollapsedSeries.push({
					index: t,
					data: a[t].data.slice(),
					type: i.parentNode.className.baseVal.split("-")[1]
				}), s.globals.ancillaryCollapsedSeriesIndices.push(t)), e || (s.globals.collapsedSeries.push({
					index: t,
					data: a[t].data.slice(),
					type: i.parentNode.className.baseVal.split("-")[1]
				}), s.globals.collapsedSeriesIndices.push(t), e = s.globals.risingSeries.indexOf(t), s.globals.risingSeries.splice(e, 1))) : (s.globals.collapsedSeries.push({
					index: t,
					data: a[t]
				}), s.globals.collapsedSeriesIndices.push(t));
				for (var n = i.childNodes, o = 0; o < n.length; o++) n[o].classList.contains("apexcharts-series-markers-wrap") && (n[o].classList.contains("apexcharts-hide") ? n[o].classList.remove("apexcharts-hide") : n[o].classList.add("apexcharts-hide"));
				s.globals.allSeriesCollapsed = s.globals.collapsedSeries.length === s.config.series.length, a = this._getSeriesBasedOnCollapsedState(a), this.lgCtx.ctx.updateHelpers._updateSeries(a, s.config.chart.animations.dynamicAnimation.enabled)
			}
		}, {
			key: "riseCollapsedSeries",
			value: function(t, e, i) {
				var s = this.w,
					a = O.clone(s.config.series);
				if (0 < t.length) {
					for (var n = 0; n < t.length; n++) t[n].index === i && (s.globals.axisCharts ? a[i].data = t[n].data.slice() : a[i] = t[n].data, t.splice(n, 1), e.splice(n, 1), s.globals.risingSeries.push(i));
					a = this._getSeriesBasedOnCollapsedState(a), this.lgCtx.ctx.updateHelpers._updateSeries(a, s.config.chart.animations.dynamicAnimation.enabled)
				}
			}
		}, {
			key: "_getSeriesBasedOnCollapsedState",
			value: function(i) {
				var s = this.w;
				return s.globals.axisCharts ? i.forEach(function(t, e) {
					-1 < s.globals.collapsedSeriesIndices.indexOf(e) && (i[e].data = [])
				}) : i.forEach(function(t, e) {
					-1 < s.globals.collapsedSeriesIndices.indexOf(e) && (i[e] = 0)
				}), i
			}
		}]), ve),
		Ot = (t(be, [{
			key: "init",
			value: function() {
				var t = this.w,
					e = t.globals,
					t = t.config;
				if ((t.legend.showForSingleSeries && 1 === e.series.length || this.isBarsDistributed || 1 < e.series.length || !e.axisCharts) && t.legend.show) {
					for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
					this.drawLegends(), O.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), "bottom" === t.legend.position || "top" === t.legend.position ? this.legendAlignHorizontal() : "right" !== t.legend.position && "left" !== t.legend.position || this.legendAlignVertical()
				}
			}
		}, {
			key: "drawLegends",
			value: function() {
				var t, e = this.w,
					i = e.config.legend.fontFamily,
					s = e.globals.seriesNames,
					a = e.globals.colors.slice();
				"heatmap" === e.config.chart.type ? (s = (t = e.config.plotOptions.heatmap.colorScale.ranges).map(function(t) {
					return t.name || t.from + " - " + t.to
				}), a = t.map(function(t) {
					return t.color
				})) : this.isBarsDistributed && (s = e.globals.labels.slice()), e.config.legend.customLegendItems.length && (s = e.config.legend.customLegendItems);
				for (var n = e.globals.legendFormatter, o = e.config.legend.inverseOrder, r = o ? s.length - 1 : 0; o ? 0 <= r : r <= s.length - 1; o ? r-- : r++) {
					var l = n(s[r], {
							seriesIndex: r,
							w: e
						}),
						c = !1,
						h = !1;
					if (0 < e.globals.collapsedSeries.length)
						for (var d = 0; d < e.globals.collapsedSeries.length; d++) e.globals.collapsedSeries[d].index === r && (c = !0);
					if (0 < e.globals.ancillaryCollapsedSeriesIndices.length)
						for (var u = 0; u < e.globals.ancillaryCollapsedSeriesIndices.length; u++) e.globals.ancillaryCollapsedSeriesIndices[u] === r && (h = !0);
					var g = document.createElement("span"),
						p = (g.classList.add("apexcharts-legend-marker"), e.config.legend.markers.offsetX),
						f = e.config.legend.markers.offsetY,
						x = e.config.legend.markers.height,
						m = e.config.legend.markers.width,
						b = e.config.legend.markers.strokeWidth,
						v = e.config.legend.markers.strokeColor,
						y = e.config.legend.markers.radius,
						w = g.style,
						x = (w.background = a[r], w.color = a[r], w.setProperty("background", a[r], "important"), e.config.legend.markers.fillColors && e.config.legend.markers.fillColors[r] && (w.background = e.config.legend.markers.fillColors[r]), void 0 !== e.globals.seriesColors[r] && (w.background = e.globals.seriesColors[r], w.color = e.globals.seriesColors[r]), w.height = Array.isArray(x) ? parseFloat(x[r]) + "px" : parseFloat(x) + "px", w.width = Array.isArray(m) ? parseFloat(m[r]) + "px" : parseFloat(m) + "px", w.left = (Array.isArray(p) ? parseFloat(p[r]) : parseFloat(p)) + "px", w.top = (Array.isArray(f) ? parseFloat(f[r]) : parseFloat(f)) + "px", w.borderWidth = Array.isArray(b) ? b[r] : b, w.borderColor = Array.isArray(v) ? v[r] : v, w.borderRadius = Array.isArray(y) ? parseFloat(y[r]) + "px" : parseFloat(y) + "px", e.config.legend.markers.customHTML && (Array.isArray(e.config.legend.markers.customHTML) ? e.config.legend.markers.customHTML[r] && (g.innerHTML = e.config.legend.markers.customHTML[r]()) : g.innerHTML = e.config.legend.markers.customHTML()), D.setAttrs(g, {
							rel: r + 1,
							"data:collapsed": c || h
						}), (c || h) && g.classList.add("apexcharts-inactive-legend"), document.createElement("div")),
						m = document.createElement("span");
					m.classList.add("apexcharts-legend-text"), m.innerHTML = Array.isArray(l) ? l.join(" ") : l;
					f = (f = e.config.legend.labels.useSeriesColors ? e.globals.colors[r] : Array.isArray(e.config.legend.labels.colors) ? null == (p = e.config.legend.labels.colors) ? void 0 : p[r] : e.config.legend.labels.colors) || e.config.chart.foreColor, b = (m.style.color = f, m.style.fontSize = parseFloat(e.config.legend.fontSize) + "px", m.style.fontWeight = e.config.legend.fontWeight, m.style.fontFamily = i || e.config.chart.fontFamily, D.setAttrs(m, {
						rel: r + 1,
						i: r,
						"data:default-text": encodeURIComponent(l),
						"data:collapsed": c || h
					}), x.appendChild(g), x.appendChild(m), new I(this.ctx));
					e.config.legend.showForZeroSeries || 0 === b.getSeriesTotalByIndex(r) && b.seriesHaveSameValues(r) && !b.isSeriesNull(r) && -1 === e.globals.collapsedSeriesIndices.indexOf(r) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(r) && x.classList.add("apexcharts-hidden-zero-series"), e.config.legend.showForNullSeries || b.isSeriesNull(r) && -1 === e.globals.collapsedSeriesIndices.indexOf(r) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(r) && x.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(x), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e.config.legend.position), x.classList.add("apexcharts-legend-series"), x.style.margin = "".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width = e.config.legend.width ? e.config.legend.width + "px" : "", e.globals.dom.elLegendWrap.style.height = e.config.legend.height ? e.config.legend.height + "px" : "", D.setAttrs(x, {
						rel: r + 1,
						seriesName: O.escapeString(s[r]),
						"data:collapsed": c || h
					}), (c || h) && x.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries || x.classList.add("apexcharts-no-click")
				}
				e.globals.dom.elWrap.addEventListener("click", this.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && 0 === e.config.legend.customLegendItems.length && (e.globals.dom.elWrap.addEventListener("mousemove", this.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", this.onLegendHovered, !0))
			}
		}, {
			key: "setLegendWrapXY",
			value: function(t, e) {
				var i, s = this.w,
					a = s.globals.dom.elLegendWrap,
					n = a.getBoundingClientRect(),
					o = 0;
				"bottom" === s.config.legend.position ? o += s.globals.svgHeight - n.height / 2 : "top" === s.config.legend.position && (o = o + (0 < (i = (n = new It(this.ctx)).dimHelpers.getTitleSubtitleCoords("title").height) ? i - 10 : 0) + (0 < (i = n.dimHelpers.getTitleSubtitleCoords("subtitle").height) ? i - 10 : 0)), a.style.position = "absolute", n = 0 + t + s.config.legend.offsetX, o = o + e + s.config.legend.offsetY, a.style.left = n + "px", a.style.top = o + "px", "bottom" === s.config.legend.position ? (a.style.top = "auto", a.style.bottom = 5 - s.config.legend.offsetY + "px") : "right" === s.config.legend.position && (a.style.left = "auto", a.style.right = 25 + s.config.legend.offsetX + "px"), ["width", "height"].forEach(function(t) {
					a.style[t] && (a.style[t] = parseInt(s.config.legend[t], 10) + "px")
				})
			}
		}, {
			key: "legendAlignHorizontal",
			value: function() {
				var t = this.w,
					e = (t.globals.dom.elLegendWrap.style.right = 0, this.legendHelpers.getLegendBBox()),
					i = new It(this.ctx),
					s = i.dimHelpers.getTitleSubtitleCoords("title"),
					i = i.dimHelpers.getTitleSubtitleCoords("subtitle"),
					a = 0;
				"bottom" === t.config.legend.position ? a = -e.clwh / 1.8 : "top" === t.config.legend.position && (a = s.height + i.height + t.config.title.margin + t.config.subtitle.margin - 10), this.setLegendWrapXY(20, a)
			}
		}, {
			key: "legendAlignVertical",
			value: function() {
				var t = this.w,
					e = this.legendHelpers.getLegendBBox(),
					i = 0;
				"left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20)
			}
		}, {
			key: "onLegendHovered",
			value: function(t) {
				var e = this.w,
					i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
				"heatmap" === e.config.chart.type || this.isBarsDistributed ? i && (e = parseInt(t.target.getAttribute("rel"), 10) - 1, this.ctx.events.fireEvent("legendHover", [this.ctx, e, this.w]), new S(this.ctx).highlightRangeInSeries(t, t.target)) : !t.target.classList.contains("apexcharts-inactive-legend") && i && new S(this.ctx).toggleSeriesOnHover(t, t.target)
			}
		}, {
			key: "onLegendClick",
			value: function(t) {
				var e, i, s, a = this.w;
				a.config.legend.customLegendItems.length || !t.target.classList.contains("apexcharts-legend-text") && !t.target.classList.contains("apexcharts-legend-marker") || (e = parseInt(t.target.getAttribute("rel"), 10) - 1, i = "true" === t.target.getAttribute("data:collapsed"), "function" == typeof(s = this.w.config.chart.events.legendClick) && s(this.ctx, e, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, e, this.w]), "function" == typeof(s = this.w.config.legend.markers.onClick) && t.target.classList.contains("apexcharts-legend-marker") && (s(this.ctx, e, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, e, this.w])), "treemap" !== a.config.chart.type && "heatmap" !== a.config.chart.type && !this.isBarsDistributed && a.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(e, i))
			}
		}]), be),
		Dt = (t(me, [{
			key: "createToolbar",
			value: function() {
				function t() {
					return document.createElement("div")
				}
				var a = this,
					n = this.w,
					e = t();
				if (e.setAttribute("class", "apexcharts-toolbar"), e.style.top = n.config.chart.toolbar.offsetY + "px", e.style.right = 3 - n.config.chart.toolbar.offsetX + "px", n.globals.dom.elWrap.appendChild(e), this.elZoom = t(), this.elZoomIn = t(), this.elZoomOut = t(), this.elPan = t(), this.elSelection = t(), this.elZoomReset = t(), this.elMenuIcon = t(), this.elMenu = t(), this.elCustomIcons = [], this.t = n.config.chart.toolbar.tools, Array.isArray(this.t.customIcons))
					for (var i = 0; i < this.t.customIcons.length; i++) this.elCustomIcons.push(t());

				function s(t, e, i) {
					var s = t.toLowerCase();
					a.t[s] && n.config.chart.zoom.enabled && r.push({
						el: e,
						icon: "string" == typeof a.t[s] ? a.t[s] : i,
						title: a.localeValues[t],
						class: "apexcharts-".concat(s, "-icon")
					})
				}

				function o(t) {
					a.t[t] && n.config.chart[t].enabled && r.push({
						el: "zoom" === t ? a.elZoom : a.elSelection,
						icon: "string" == typeof a.t[t] ? a.t[t] : "zoom" === t ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
						title: a.localeValues["zoom" === t ? "selectionZoom" : "selection"],
						class: n.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(t, "-icon")
					})
				}
				var r = [];
				s("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), s("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
				o("zoom"), o("selection"), this.t.pan && n.config.chart.zoom.enabled && r.push({
					el: this.elPan,
					icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
					title: this.localeValues.pan,
					class: n.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon"
				}), s("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && r.push({
					el: this.elMenuIcon,
					icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
					title: this.localeValues.menu,
					class: "apexcharts-menu-icon"
				});
				for (var l = 0; l < this.elCustomIcons.length; l++) r.push({
					el: this.elCustomIcons[l],
					icon: this.t.customIcons[l].icon,
					title: this.t.customIcons[l].title,
					index: this.t.customIcons[l].index,
					class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l].class
				});
				r.forEach(function(t, e) {
					t.index && O.moveIndexInArray(r, e, t.index)
				});
				for (var c = 0; c < r.length; c++) D.setAttrs(r[c].el, {
					class: r[c].class,
					title: r[c].title
				}), r[c].el.innerHTML = r[c].icon, e.appendChild(r[c].el);
				this._createHamburgerMenu(e), n.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : n.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : n.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners()
			}
		}, {
			key: "_createHamburgerMenu",
			value: function(t) {
				this.elMenuItems = [], t.appendChild(this.elMenu), D.setAttrs(this.elMenu, {
					class: "apexcharts-menu"
				});
				var e = [{
					name: "exportSVG",
					title: this.localeValues.exportToSVG
				}, {
					name: "exportPNG",
					title: this.localeValues.exportToPNG
				}, {
					name: "exportCSV",
					title: this.localeValues.exportToCSV
				}];
				this.w.globals.allSeriesHasEqualX || e.splice(2, 1);
				for (var i = 0; i < e.length; i++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = e[i].title, D.setAttrs(this.elMenuItems[i], {
					class: "apexcharts-menu-item ".concat(e[i].name),
					title: e[i].title
				}), this.elMenu.appendChild(this.elMenuItems[i])
			}
		}, {
			key: "addToolbarEventListeners",
			value: function() {
				var e = this;
				this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(t) {
					t.classList.contains("exportSVG") ? t.addEventListener("click", e.handleDownload.bind(e, "svg")) : t.classList.contains("exportPNG") ? t.addEventListener("click", e.handleDownload.bind(e, "png")) : t.classList.contains("exportCSV") && t.addEventListener("click", e.handleDownload.bind(e, "csv"))
				});
				for (var t = 0; t < this.t.customIcons.length; t++) this.elCustomIcons[t].addEventListener("click", this.t.customIcons[t].click.bind(this, this.ctx, this.ctx.w))
			}
		}, {
			key: "toggleZoomSelection",
			value: function(s) {
				this.ctx.getSyncedCharts().forEach(function(t) {
					t.ctx.toolbar.toggleOtherControls();
					var e = "selection" === s ? t.ctx.toolbar.elSelection : t.ctx.toolbar.elZoom,
						i = "selection" === s ? "selectionEnabled" : "zoomEnabled";
					t.w.globals[i] = !t.w.globals[i], e.classList.contains(t.ctx.toolbar.selectedClass) ? e.classList.remove(t.ctx.toolbar.selectedClass) : e.classList.add(t.ctx.toolbar.selectedClass)
				})
			}
		}, {
			key: "getToolbarIconsReference",
			value: function() {
				var t = this.w;
				this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))
			}
		}, {
			key: "enableZoomPanFromToolbar",
			value: function(t) {
				this.toggleOtherControls(), "pan" === t ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
				var e = "pan" === t ? this.elPan : this.elZoom,
					t = "pan" === t ? this.elZoom : this.elPan;
				e && e.classList.add(this.selectedClass), t && t.classList.remove(this.selectedClass)
			}
		}, {
			key: "togglePanning",
			value: function() {
				this.ctx.getSyncedCharts().forEach(function(t) {
					t.ctx.toolbar.toggleOtherControls(), t.w.globals.panEnabled = !t.w.globals.panEnabled, t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass) ? t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass) : t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)
				})
			}
		}, {
			key: "toggleOtherControls",
			value: function() {
				var e = this,
					t = this.w;
				t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(t) {
					t && t.classList.remove(e.selectedClass)
				})
			}
		}, {
			key: "handleZoomIn",
			value: function() {
				var t = this.w,
					e = (t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY), (this.minX + this.maxX) / 2),
					i = (this.minX + e) / 2,
					e = (this.maxX + e) / 2,
					i = this._getNewMinXMaxX(i, e);
				t.globals.disableZoomIn || this.zoomUpdateOptions(i.minX, i.maxX)
			}
		}, {
			key: "handleZoomOut",
			value: function() {
				var t, e, i = this.w;
				i.globals.isRangeBar && (this.minX = i.globals.minY, this.maxX = i.globals.maxY), "datetime" === i.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3 || (t = (this.minX + this.maxX) / 2, e = this.minX - (t - this.minX), t = this.maxX - (t - this.maxX), e = this._getNewMinXMaxX(e, t), i.globals.disableZoomOut) || this.zoomUpdateOptions(e.minX, e.maxX)
			}
		}, {
			key: "_getNewMinXMaxX",
			value: function(t, e) {
				var i = this.w.config.xaxis.convertedCatToNumeric;
				return {
					minX: i ? Math.floor(t) : t,
					maxX: i ? Math.floor(e) : e
				}
			}
		}, {
			key: "zoomUpdateOptions",
			value: function(t, e) {
				var i, s = this.w;
				void 0 !== t || void 0 !== e ? s.config.xaxis.convertedCatToNumeric && (t < 1 && (t = 1, e = s.globals.dataPoints), e - t < 2) || (e = {
					xaxis: t = (e = this.getBeforeZoomRange(t = {
						min: t,
						max: e
					})) ? e.xaxis : t
				}, i = O.clone(s.globals.initialConfig.yaxis), s.config.chart.zoom.autoScaleYaxis && (i = new x(this.ctx).autoScaleY(this.ctx, i, {
					xaxis: t
				})), s.config.chart.group || (e.yaxis = i), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(e, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(t, i)) : this.handleZoomReset()
			}
		}, {
			key: "zoomCallback",
			value: function(t, e) {
				"function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {
					xaxis: t,
					yaxis: e
				})
			}
		}, {
			key: "getBeforeZoomRange",
			value: function(t, e) {
				var i = null;
				return i = "function" == typeof this.ev.beforeZoom ? this.ev.beforeZoom(this, {
					xaxis: t,
					yaxis: e
				}) : i
			}
		}, {
			key: "toggleMenu",
			value: function() {
				var t = this;
				window.setTimeout(function() {
					t.elMenu.classList.contains("apexcharts-menu-open") ? t.elMenu.classList.remove("apexcharts-menu-open") : t.elMenu.classList.add("apexcharts-menu-open")
				}, 0)
			}
		}, {
			key: "handleDownload",
			value: function(t) {
				var e = this.w,
					i = new xt(this.ctx);
				switch (t) {
					case "svg":
						i.exportToSVG(this.ctx);
						break;
					case "png":
						i.exportToPng(this.ctx);
						break;
					case "csv":
						i.exportToCSV({
							series: e.config.series,
							columnDelimiter: e.config.chart.toolbar.export.csv.columnDelimiter
						})
				}
			}
		}, {
			key: "handleZoomReset",
			value: function(t) {
				this.ctx.getSyncedCharts().forEach(function(t) {
					var e = t.w,
						i = (e.globals.lastXAxis.min = void 0, e.globals.lastXAxis.max = void 0, t.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e.config.chart.events.beforeResetZoom && (i = e.config.chart.events.beforeResetZoom(t, e)) && t.updateHelpers.revertDefaultAxisMinMax(i), "function" == typeof e.config.chart.events.zoomed && t.ctx.toolbar.zoomCallback({
							min: e.config.xaxis.min,
							max: e.config.xaxis.max
						}), e.globals.zoomed = !1, t.ctx.series.emptyCollapsedSeries(O.clone(e.globals.initialSeries)));
					t.updateHelpers._updateSeries(i, e.config.chart.animations.dynamicAnimation.enabled)
				})
			}
		}, {
			key: "destroy",
			value: function() {
				this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null
			}
		}]), me),
		zt = (e(h, Dt), ct = i(h), t(h, [{
			key: "init",
			value: function(t) {
				var e = this,
					i = t.xyRatios,
					t = this.w,
					s = this;
				this.xyRatios = i, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = t.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), t.globals.dom.elGraphical.add(this.zoomRect), t.globals.dom.elGraphical.add(this.selectionRect), "x" === t.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
					minX: 0,
					minY: 0,
					maxX: t.globals.gridWidth,
					maxY: t.globals.gridHeight
				}).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === t.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
					minX: 0,
					maxX: t.globals.gridWidth
				}).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = t.globals.dom.baseEl.querySelector("".concat(t.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(t) {
					e.hoverArea.addEventListener(t, s.svgMouseEvents.bind(s, i), {
						capture: !1,
						passive: !0
					})
				})
			}
		}, {
			key: "destroy",
			value: function() {
				this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null
			}
		}, {
			key: "svgMouseEvents",
			value: function(t, e) {
				var i, s = this.w,
					a = this,
					n = this.ctx.toolbar,
					o = (s.globals.zoomEnabled ? s.config.chart.zoom : s.config.chart.selection).type,
					r = s.config.chart.toolbar.autoSelected;
				e.shiftKey ? (this.shiftWasPressed = !0, n.enableZoomPanFromToolbar("pan" === r ? "zoom" : "pan")) : this.shiftWasPressed && (n.enableZoomPanFromToolbar(r), this.shiftWasPressed = !1), e.target && (n = e.target.classList, e.target.parentNode && null !== e.target.parentNode && (i = e.target.parentNode.classList), n.contains("apexcharts-selection-rect") || n.contains("apexcharts-legend-marker") || n.contains("apexcharts-legend-text") || i && i.contains("apexcharts-toolbar") || (a.clientX = ("touchmove" === e.type || "touchstart" === e.type ? e.touches[0] : "touchend" === e.type ? e.changedTouches[0] : e).clientX, a.clientY = ("touchmove" === e.type || "touchstart" === e.type ? e.touches[0] : "touchend" === e.type ? e.changedTouches[0] : e).clientY, "mousedown" === e.type && 1 === e.which && (r = a.gridRect.getBoundingClientRect(), a.startX = a.clientX - r.left, a.startY = a.clientY - r.top, a.dragged = !1, a.w.globals.mousedown = !0), ("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (a.dragged = !0, s.globals.panEnabled ? (s.globals.selection = null, a.w.globals.mousedown && a.panDragging({
					context: a,
					zoomtype: o,
					xyRatios: t
				})) : (a.w.globals.mousedown && s.globals.zoomEnabled || a.w.globals.mousedown && s.globals.selectionEnabled) && (a.selection = a.selectionDrawing({
					context: a,
					zoomtype: o
				}))), "mouseup" !== e.type && "touchend" !== e.type && "mouseleave" !== e.type || (n = a.gridRect.getBoundingClientRect(), a.w.globals.mousedown && (a.endX = a.clientX - n.left, a.endY = a.clientY - n.top, a.dragX = Math.abs(a.endX - a.startX), a.dragY = Math.abs(a.endY - a.startY), (s.globals.zoomEnabled || s.globals.selectionEnabled) && a.selectionDrawn({
					context: a,
					zoomtype: o
				}), s.globals.panEnabled) && s.config.xaxis.convertedCatToNumeric && a.delayedPanScrolled(), s.globals.zoomEnabled && a.hideSelectionRect(this.selectionRect), a.dragged = !1, a.w.globals.mousedown = !1), this.makeSelectionRectDraggable()))
			}
		}, {
			key: "makeSelectionRectDraggable",
			value: function() {
				var t, e = this.w;
				this.selectionRect && 0 < (t = this.selectionRect.node.getBoundingClientRect()).width && 0 < t.height && this.slDraggableRect.selectize({
					points: "l, r",
					pointSize: 8,
					pointType: "rect"
				}).resize({
					constraint: {
						minX: 0,
						minY: 0,
						maxX: e.globals.gridWidth,
						maxY: e.globals.gridHeight
					}
				}).on("resizing", this.selectionDragging.bind(this, "resizing"))
			}
		}, {
			key: "preselectedSelection",
			value: function() {
				var t, e = this.w,
					i = this.xyRatios;
				e.globals.zoomEnabled || (void 0 !== e.globals.selection && null !== e.globals.selection ? this.drawSelectionRect(e.globals.selection) : void 0 !== e.config.chart.selection.xaxis.min && void 0 !== e.config.chart.selection.xaxis.max && (i = {
					x: t = (e.config.chart.selection.xaxis.min - e.globals.minX) / i.xRatio,
					y: 0,
					width: e.globals.gridWidth - (e.globals.maxX - e.config.chart.selection.xaxis.max) / i.xRatio - t,
					height: e.globals.gridHeight,
					translateX: 0,
					translateY: 0,
					selectionEnabled: !0
				}, this.drawSelectionRect(i), this.makeSelectionRectDraggable(), "function" == typeof e.config.chart.events.selection) && e.config.chart.events.selection(this.ctx, {
					xaxis: {
						min: e.config.chart.selection.xaxis.min,
						max: e.config.chart.selection.xaxis.max
					},
					yaxis: {}
				}))
			}
		}, {
			key: "drawSelectionRect",
			value: function(t) {
				var e = t.x,
					i = t.y,
					s = t.width,
					a = t.height,
					n = t.translateX,
					t = t.translateY,
					o = this.w,
					r = this.zoomRect,
					l = this.selectionRect;
				(this.dragged || null !== o.globals.selection) && (n = {
					transform: "translate(" + (void 0 === n ? 0 : n) + ", " + (void 0 === t ? 0 : t) + ")"
				}, o.globals.zoomEnabled && this.dragged && (r.attr({
					x: e,
					y: i,
					width: s = s < 0 ? 1 : s,
					height: a,
					fill: o.config.chart.zoom.zoomedArea.fill.color,
					"fill-opacity": o.config.chart.zoom.zoomedArea.fill.opacity,
					stroke: o.config.chart.zoom.zoomedArea.stroke.color,
					"stroke-width": o.config.chart.zoom.zoomedArea.stroke.width,
					"stroke-opacity": o.config.chart.zoom.zoomedArea.stroke.opacity
				}), D.setAttrs(r.node, n)), o.globals.selectionEnabled) && (l.attr({
					x: e,
					y: i,
					width: 0 < s ? s : 0,
					height: 0 < a ? a : 0,
					fill: o.config.chart.selection.fill.color,
					"fill-opacity": o.config.chart.selection.fill.opacity,
					stroke: o.config.chart.selection.stroke.color,
					"stroke-width": o.config.chart.selection.stroke.width,
					"stroke-dasharray": o.config.chart.selection.stroke.dashArray,
					"stroke-opacity": o.config.chart.selection.stroke.opacity
				}), D.setAttrs(l.node, n))
			}
		}, {
			key: "hideSelectionRect",
			value: function(t) {
				t && t.attr({
					x: 0,
					y: 0,
					width: 0,
					height: 0
				})
			}
		}, {
			key: "selectionDrawing",
			value: function(t) {
				var e = t.context,
					t = t.zoomtype,
					i = this.w,
					s = this.gridRect.getBoundingClientRect(),
					a = e.startX - 1,
					n = e.startY,
					o = !1,
					r = !1,
					l = e.clientX - s.left - a,
					c = e.clientY - s.top - n;
				return Math.abs(l + a) > i.globals.gridWidth ? l = i.globals.gridWidth - a : e.clientX - s.left < 0 && (l = a), a > e.clientX - s.left && (o = !0, l = Math.abs(l)), n > e.clientY - s.top && (r = !0, c = Math.abs(c)), s = "x" === t ? {
					x: o ? a - l : a,
					y: 0,
					width: l,
					height: i.globals.gridHeight
				} : "y" === t ? {
					x: 0,
					y: r ? n - c : n,
					width: i.globals.gridWidth,
					height: c
				} : {
					x: o ? a - l : a,
					y: r ? n - c : n,
					width: l,
					height: c
				}, e.drawSelectionRect(s), e.selectionDragging("resizing"), s
			}
		}, {
			key: "selectionDragging",
			value: function(t, e) {
				function i(t) {
					return parseFloat(o.node.getAttribute(t))
				}
				var s = this,
					a = this.w,
					n = this.xyRatios,
					o = this.selectionRect,
					r = 0,
					t = ("resizing" === t && (r = 30), {
						x: i("x"),
						y: i("y"),
						width: i("width"),
						height: i("height")
					});
				a.globals.selection = t, "function" == typeof a.config.chart.events.selection && a.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
					var t = s.gridRect.getBoundingClientRect(),
						e = o.node.getBoundingClientRect(),
						e = {
							xaxis: {
								min: a.globals.xAxisScale.niceMin + (e.left - t.left) * n.xRatio,
								max: a.globals.xAxisScale.niceMin + (e.right - t.left) * n.xRatio
							},
							yaxis: {
								min: a.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * n.yRatio[0],
								max: a.globals.yAxisScale[0].niceMax - (e.top - t.top) * n.yRatio[0]
							}
						};
					a.config.chart.events.selection(s.ctx, e), a.config.chart.brush.enabled && void 0 !== a.config.chart.events.brushScrolled && a.config.chart.events.brushScrolled(s.ctx, e)
				}, r))
			}
		}, {
			key: "selectionDrawn",
			value: function(t) {
				var e, i, s, a, n = t.context,
					t = t.zoomtype,
					o = this.w,
					r = n,
					l = this.xyRatios,
					n = this.ctx.toolbar,
					c = (r.startX > r.endX && (c = r.startX, r.startX = r.endX, r.endX = c), r.startY > r.endY && (c = r.startY, r.startY = r.endY, r.endY = c), void 0),
					h = void 0,
					h = o.globals.isRangeBar ? (c = o.globals.yAxisScale[0].niceMin + r.startX * l.invertedYRatio, o.globals.yAxisScale[0].niceMin + r.endX * l.invertedYRatio) : (c = o.globals.xAxisScale.niceMin + r.startX * l.xRatio, o.globals.xAxisScale.niceMin + r.endX * l.xRatio),
					d = [],
					u = [];
				o.config.yaxis.forEach(function(t, e) {
					d.push(o.globals.yAxisScale[e].niceMax - l.yRatio[e] * r.startY), u.push(o.globals.yAxisScale[e].niceMax - l.yRatio[e] * r.endY)
				}), r.dragged && (10 < r.dragX || 10 < r.dragY) && c !== h && (o.globals.zoomEnabled ? (i = O.clone(o.globals.initialConfig.yaxis), e = O.clone(o.globals.initialConfig.xaxis), o.globals.zoomed = !0, o.config.xaxis.convertedCatToNumeric && (c = Math.floor(c), h = Math.floor(h), c < 1 && (c = 1, h = o.globals.dataPoints), h - c < 2) && (h = c + 1), "xy" !== t && "x" !== t || (e = {
					min: c,
					max: h
				}), "xy" !== t && "y" !== t || i.forEach(function(t, e) {
					i[e].min = u[e], i[e].max = d[e]
				}), o.config.chart.zoom.autoScaleYaxis && (i = new x(r.ctx).autoScaleY(r.ctx, i, {
					xaxis: e
				})), n && (a = n.getBeforeZoomRange(e, i)) && (e = a.xaxis || e, i = a.yaxis || i), a = {
					xaxis: e
				}, o.config.chart.group || (a.yaxis = i), r.ctx.updateHelpers._updateOptions(a, !1, r.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof o.config.chart.events.zoomed && n.zoomCallback(e, i)) : o.globals.selectionEnabled && (s = null, a = {
					min: c,
					max: h
				}, "xy" !== t && "y" !== t || (s = O.clone(o.config.yaxis)).forEach(function(t, e) {
					s[e].min = u[e], s[e].max = d[e]
				}), o.globals.selection = r.selection, "function" == typeof o.config.chart.events.selection) && o.config.chart.events.selection(r.ctx, {
					xaxis: a,
					yaxis: s
				}))
			}
		}, {
			key: "panDragging",
			value: function(t) {
				var t = t.context,
					e = this.w,
					i = (void 0 !== e.globals.lastClientPosition.x && (i = e.globals.lastClientPosition.x - t.clientX, s = e.globals.lastClientPosition.y - t.clientY, Math.abs(i) > Math.abs(s) && 0 < i ? this.moveDirection = "left" : Math.abs(i) > Math.abs(s) && i < 0 ? this.moveDirection = "right" : Math.abs(s) > Math.abs(i) && 0 < s ? this.moveDirection = "up" : Math.abs(s) > Math.abs(i) && s < 0 && (this.moveDirection = "down")), e.globals.lastClientPosition = {
						x: t.clientX,
						y: t.clientY
					}, e.globals.isRangeBar ? e.globals.minY : e.globals.minX),
					s = e.globals.isRangeBar ? e.globals.maxY : e.globals.maxX;
				e.config.xaxis.convertedCatToNumeric || t.panScrolled(i, s)
			}
		}, {
			key: "delayedPanScrolled",
			value: function() {
				var t = this.w,
					e = t.globals.minX,
					i = t.globals.maxX,
					s = (t.globals.maxX - t.globals.minX) / 2;
				"left" === this.moveDirection ? (e = t.globals.minX + s, i = t.globals.maxX + s) : "right" === this.moveDirection && (e = t.globals.minX - s, i = t.globals.maxX - s), e = Math.floor(e), i = Math.floor(i), this.updateScrolledChart({
					xaxis: {
						min: e,
						max: i
					}
				}, e, i)
			}
		}, {
			key: "panScrolled",
			value: function(t, e) {
				var i = this.w,
					s = this.xyRatios,
					a = O.clone(i.globals.initialConfig.yaxis),
					n = s.xRatio,
					o = i.globals.minX,
					r = i.globals.maxX,
					s = (i.globals.isRangeBar && (n = s.invertedYRatio, o = i.globals.minY, r = i.globals.maxY), "left" === this.moveDirection ? (t = o + i.globals.gridWidth / 15 * n, e = r + i.globals.gridWidth / 15 * n) : "right" === this.moveDirection && (t = o - i.globals.gridWidth / 15 * n, e = r - i.globals.gridWidth / 15 * n), i.globals.isRangeBar || (t < i.globals.initialMinX || e > i.globals.initialMaxX) && (t = o, e = r), {
						min: t,
						max: e
					}),
					n = (i.config.chart.zoom.autoScaleYaxis && (a = new x(this.ctx).autoScaleY(this.ctx, a, {
						xaxis: s
					})), {
						xaxis: {
							min: t,
							max: e
						}
					});
				i.config.chart.group || (n.yaxis = a), this.updateScrolledChart(n, t, e)
			}
		}, {
			key: "updateScrolledChart",
			value: function(t, e, i) {
				var s = this.w;
				this.ctx.updateHelpers._updateOptions(t, !1, !1), "function" == typeof s.config.chart.events.scrolled && s.config.chart.events.scrolled(this.ctx, {
					xaxis: {
						min: e,
						max: i
					}
				})
			}
		}]), h),
		Xt = (t(xe, [{
			key: "getNearestValues",
			value: function(t) {
				var e = t.hoverArea,
					i = t.elGrid,
					s = t.clientX,
					t = t.clientY,
					a = this.w,
					i = i.getBoundingClientRect(),
					n = i.width,
					o = i.height,
					r = n / (a.globals.dataPoints - 1),
					l = o / a.globals.dataPoints,
					c = this.hasBars(),
					s = (!a.globals.comboCharts && !c || a.config.xaxis.convertedCatToNumeric || (r = n / a.globals.dataPoints), s - i.left - a.globals.barPadForNumericAxis),
					t = t - i.top,
					i = (s < 0 || t < 0 || n < s || o < t ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : a.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : a.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan")), Math.round(s / r)),
					e = Math.floor(t / l),
					l = (c && !a.config.xaxis.convertedCatToNumeric && (i = Math.ceil(s / r), --i), null),
					h = [],
					d = [];
				return a.globals.seriesXvalues.forEach(function(t) {
					h.push([t[0] + 1e-6].concat(t))
				}), a.globals.seriesYvalues.forEach(function(t) {
					d.push([t[0] + 1e-6].concat(t))
				}), h = h.map(function(t) {
					return t.filter(function(t) {
						return O.isNumber(t)
					})
				}), d = d.map(function(t) {
					return t.filter(function(t) {
						return O.isNumber(t)
					})
				}), a.globals.isXNumeric && (r = s * ((c = this.ttCtx.getElGrid().getBoundingClientRect()).width / n), n = t * (c.height / o), l = (c = this.closestInMultiArray(r, n, h, d)).index, i = c.j, null !== l) && (h = a.globals.seriesXvalues[l], i = this.closestInArray(r, h).index), a.globals.capturedSeriesIndex = null === l ? -1 : l, (!i || i < 1) && (i = 0), a.globals.isBarHorizontal ? a.globals.capturedDataPointIndex = e : a.globals.capturedDataPointIndex = i, {
					capturedSeries: l,
					j: a.globals.isBarHorizontal ? e : i,
					hoverX: s,
					hoverY: t
				}
			}
		}, {
			key: "closestInMultiArray",
			value: function(i, s, t, e) {
				var a, n = this.w,
					o = 0,
					r = null,
					l = -1,
					n = (1 < n.globals.series.length ? o = this.getFirstActiveXArray(t) : r = 0, t[o][0]),
					c = Math.abs(i - n);
				return t.forEach(function(t) {
					t.forEach(function(t, e) {
						t = Math.abs(i - t);
						t < c && (c = t, l = e)
					})
				}), -1 !== l && (n = e[o][l], a = Math.abs(s - n), r = o, e.forEach(function(t, e) {
					t = Math.abs(s - t[l]);
					t < a && (a = t, r = e)
				})), {
					index: r,
					j: l
				}
			}
		}, {
			key: "getFirstActiveXArray",
			value: function(t) {
				for (var e = this.w, i = 0, s = t.map(function(t, e) {
						return 0 < t.length ? e : -1
					}), a = 0; a < s.length; a++)
					if (-1 !== s[a] && -1 === e.globals.collapsedSeriesIndices.indexOf(a) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(a)) {
						i = s[a];
						break
					} return i
			}
		}, {
			key: "closestInArray",
			value: function(t, e) {
				for (var i = e[0], s = null, a = Math.abs(t - i), n = 0; n < e.length; n++) {
					var o = Math.abs(t - e[n]);
					o < a && (a = o, s = n)
				}
				return {
					index: s
				}
			}
		}, {
			key: "isXoverlap",
			value: function(t) {
				var e = [],
					i = this.w.globals.seriesX.filter(function(t) {
						return void 0 !== t[0]
					});
				if (0 < i.length)
					for (var s = 0; s < i.length - 1; s++) void 0 !== i[s][t] && void 0 !== i[s + 1][t] && i[s][t] !== i[s + 1][t] && e.push("unEqual");
				return 0 === e.length
			}
		}, {
			key: "isInitialSeriesSameLen",
			value: function() {
				for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
					if (e[i].data.length !== e[i + 1].data.length) {
						t = !1;
						break
					} return t
			}
		}, {
			key: "getBarsHeight",
			value: function(t) {
				return b(t).reduce(function(t, e) {
					return t + e.getBBox().height
				}, 0)
			}
		}, {
			key: "getElMarkers",
			value: function(t) {
				return "number" == typeof t ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *")
			}
		}, {
			key: "getAllMarkers",
			value: function() {
				var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap"),
					e = ((t = b(t)).sort(function(t, e) {
						t = Number(t.getAttribute("data:realIndex")), e = Number(e.getAttribute("data:realIndex"));
						return e < t ? 1 : t < e ? -1 : 0
					}), []);
				return t.forEach(function(t) {
					e.push(t.querySelector(".apexcharts-marker"))
				}), e
			}
		}, {
			key: "hasMarkers",
			value: function(t) {
				return 0 < this.getElMarkers(t).length
			}
		}, {
			key: "getElBars",
			value: function() {
				return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")
			}
		}, {
			key: "hasBars",
			value: function() {
				return 0 < this.getElBars().length
			}
		}, {
			key: "getHoverMarkerSize",
			value: function(t) {
				var e = this.w,
					i = e.config.markers.hover.size;
				return i = void 0 === i ? e.globals.markers.size[t] + e.config.markers.hover.sizeOffset : i
			}
		}, {
			key: "toggleAllTooltipSeriesGroups",
			value: function(t) {
				var e = this.w,
					i = this.ttCtx;
				0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
				for (var s = i.allTooltipSeriesGroups, a = 0; a < s.length; a++) "enable" === t ? (s[a].classList.add("apexcharts-active"), s[a].style.display = e.config.tooltip.items.display) : (s[a].classList.remove("apexcharts-active"), s[a].style.display = "none")
			}
		}]), xe),
		Nt = (t(fe, [{
			key: "drawSeriesTexts",
			value: function(t) {
				var e = t.shared,
					e = void 0 === e || e,
					i = t.ttItems,
					s = t.i,
					s = void 0 === s ? 0 : s,
					a = t.j,
					a = void 0 === a ? null : a,
					n = t.y1,
					o = t.y2,
					t = t.e,
					r = this.w,
					n = (void 0 !== r.config.tooltip.custom ? this.handleCustomTooltip({
						i: s,
						j: a,
						y1: n,
						y2: o,
						w: r
					}) : this.toggleActiveInactiveSeries(e), this.getValuesToPrint({
						i: s,
						j: a
					})),
					o = (this.printLabels({
						i: s,
						j: a,
						values: n,
						ttItems: i,
						shared: e,
						e: t
					}), this.ttCtx.getElTooltip());
				this.ttCtx.tooltipRect.ttWidth = o.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = o.getBoundingClientRect().height
			}
		}, {
			key: "printLabels",
			value: function(t) {
				function a(t) {
					return u.globals.seriesGoals[t] && u.globals.seriesGoals[t][l] && Array.isArray(u.globals.seriesGoals[t][l])
				}
				var n, o = this,
					r = t.i,
					l = t.j,
					e = t.values,
					c = t.ttItems,
					h = t.shared,
					d = t.e,
					u = this.w,
					g = [],
					p = e.xVal,
					f = e.zVal,
					x = e.xAxisTTVal,
					m = "",
					b = u.globals.colors[r];
				null !== l && u.config.plotOptions.bar.distributed && (b = u.globals.colors[l]);
				for (var i = 0, s = u.globals.series.length - 1; i < u.globals.series.length; i++, s--) ! function(t, e) {
					var i = o.getFormatters(r),
						s = (m = o.getSeriesName({
							fn: i.yLbTitleFormatter,
							index: r,
							seriesIndex: r,
							j: l
						}), "treemap" === u.config.chart.type && (m = i.yLbTitleFormatter(String(u.config.series[r].data[l].x), {
							series: u.globals.series,
							seriesIndex: r,
							dataPointIndex: l,
							w: u
						})), u.config.tooltip.inverseOrder ? e : t);
					u.globals.axisCharts && (e = function(t) {
						var e;
						return u.globals.isRangeData ? i.yLbFormatter(null == (e = u.globals.seriesRangeStart) || null == (e = e[t]) ? void 0 : e[l], {
							series: u.globals.seriesRangeStart,
							seriesIndex: t,
							dataPointIndex: l,
							w: u
						}) + " - " + i.yLbFormatter(null == (e = u.globals.seriesRangeEnd) || null == (e = e[t]) ? void 0 : e[l], {
							series: u.globals.seriesRangeEnd,
							seriesIndex: t,
							dataPointIndex: l,
							w: u
						}) : i.yLbFormatter(u.globals.series[t][l], {
							series: u.globals.series,
							seriesIndex: t,
							dataPointIndex: l,
							w: u
						})
					}, h ? (i = o.getFormatters(s), m = o.getSeriesName({
						fn: i.yLbTitleFormatter,
						index: s,
						seriesIndex: r,
						j: l
					}), b = u.globals.colors[s], n = e(s), a(s) && (g = u.globals.seriesGoals[s][l].map(function(t) {
						return {
							attrs: t,
							val: i.yLbFormatter(t.value, {
								seriesIndex: s,
								dataPointIndex: l,
								w: u
							})
						}
					}))) : ((t = null == d || null == (t = d.target) ? void 0 : t.getAttribute("fill")) && (b = -1 !== t.indexOf("url") ? document.querySelector(t.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke") : t), n = e(r), a(r) && Array.isArray(u.globals.seriesGoals[r][l]) && (g = u.globals.seriesGoals[r][l].map(function(t) {
						return {
							attrs: t,
							val: i.yLbFormatter(t.value, {
								seriesIndex: r,
								dataPointIndex: l,
								w: u
							})
						}
					})))), null === l && (n = i.yLbFormatter(u.globals.series[r], P(P({}, u), {}, {
						seriesIndex: r,
						dataPointIndex: r
					}))), o.DOMHandling({
						i: r,
						t: s,
						j: l,
						ttItems: c,
						values: {
							val: n,
							goalVals: g,
							xVal: p,
							xAxisTTVal: x,
							zVal: f
						},
						seriesName: m,
						shared: h,
						pColor: b
					})
				}(i, s)
			}
		}, {
			key: "getFormatters",
			value: function(t) {
				var e, i = this.w,
					s = i.globals.yLabelFormatters[t];
				return void 0 !== i.globals.ttVal ? Array.isArray(i.globals.ttVal) ? (s = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (s = i.globals.ttVal.formatter, "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, {
					yLbFormatter: s = "function" != typeof s ? i.globals.yLabelFormatters[0] || function(t) {
						return t
					} : s,
					yLbTitleFormatter: e = "function" != typeof e ? function(t) {
						return t
					} : e
				}
			}
		}, {
			key: "getSeriesName",
			value: function(t) {
				var e = t.fn,
					i = t.index,
					s = t.seriesIndex,
					t = t.j,
					a = this.w;
				return e(String(a.globals.seriesNames[i]), {
					series: a.globals.series,
					seriesIndex: s,
					dataPointIndex: t,
					w: a
				})
			}
		}, {
			key: "DOMHandling",
			value: function(t) {
				t.i;
				var e = t.t,
					i = t.j,
					s = t.ttItems,
					a = t.values,
					n = t.seriesName,
					o = t.shared,
					t = t.pColor,
					r = this.w,
					l = this.ttCtx,
					c = a.val,
					h = a.goalVals,
					d = a.xVal,
					u = a.xAxisTTVal,
					a = a.zVal,
					g = null,
					g = s[e].children,
					l = (r.config.tooltip.fillSeriesColor && (s[e].style.backgroundColor = t, g[0].style.display = "none"), l.showTooltipTitle && (null === l.tooltipTitle && (l.tooltipTitle = r.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), l.tooltipTitle.innerHTML = d), l.isXAxisTooltipEnabled && (l.xaxisTooltipText.innerHTML = "" !== u ? u : d), s[e].querySelector(".apexcharts-tooltip-text-y-label")),
					u = (l && (l.innerHTML = n || ""), s[e].querySelector(".apexcharts-tooltip-text-y-value")),
					p = (u && (u.innerHTML = void 0 !== c ? c : ""), g[0] && g[0].classList.contains("apexcharts-tooltip-marker") && (r.config.tooltip.marker.fillColors && Array.isArray(r.config.tooltip.marker.fillColors) && (t = r.config.tooltip.marker.fillColors[e]), g[0].style.backgroundColor = t), r.config.tooltip.marker.show || (g[0].style.display = "none"), s[e].querySelector(".apexcharts-tooltip-text-goals-label")),
					f = s[e].querySelector(".apexcharts-tooltip-text-goals-value");
				h.length && r.globals.seriesGoals[e] && (d = function() {
					var i = "<div >",
						s = "<div>";
					h.forEach(function(t, e) {
						i += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(t.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(t.attrs.name, "</div>"), s += "<div>".concat(t.val, "</div>")
					}), p.innerHTML = i + "</div>", f.innerHTML = s + "</div>"
				}, !o || r.globals.seriesGoals[e][i] && Array.isArray(r.globals.seriesGoals[e][i])) ? d() : (p.innerHTML = "", f.innerHTML = ""), null !== a && (s[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = r.config.tooltip.z.title, s[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== a ? a : ""), o && g[0] && (null == c || -1 < r.globals.ancillaryCollapsedSeriesIndices.indexOf(e) || -1 < r.globals.collapsedSeriesIndices.indexOf(e) ? g[0].parentNode.style.display = "none" : g[0].parentNode.style.display = r.config.tooltip.items.display)
			}
		}, {
			key: "toggleActiveInactiveSeries",
			value: function(t) {
				var e = this.w;
				t ? this.tooltipUtil.toggleAllTooltipSeriesGroups("enable") : (this.tooltipUtil.toggleAllTooltipSeriesGroups("disable"), (t = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group")) && (t.classList.add("apexcharts-active"), t.style.display = e.config.tooltip.items.display))
			}
		}, {
			key: "getValuesToPrint",
			value: function(t) {
				var e = t.i,
					t = t.j,
					i = this.w,
					s = this.ctx.series.filteredSeriesX(),
					a = "",
					n = "",
					o = null,
					r = null,
					l = {
						series: i.globals.series,
						seriesIndex: e,
						dataPointIndex: t,
						w: i
					},
					c = i.globals.ttZFormatter,
					s = (null === t ? r = i.globals.series[e] : i.globals.isXNumeric && "treemap" !== i.config.chart.type ? (a = s[e][t], 0 === s[e].length && (a = s[this.tooltipUtil.getFirstActiveXArray(s)][t])) : a = void 0 !== i.globals.labels[t] ? i.globals.labels[t] : "", a),
					a = i.globals.isXNumeric && "datetime" === i.config.xaxis.type ? new f(this.ctx).xLabelFormat(i.globals.ttKeyFormatter, s, s, {
						i: void 0,
						dateFormatter: new y(this.ctx).formatDate,
						w: this.w
					}) : i.globals.isBarHorizontal ? i.globals.yLabelFormatters[0](s, l) : i.globals.xLabelFormatter(s, l);
				return void 0 !== i.config.tooltip.x.formatter && (a = i.globals.ttKeyFormatter(s, l)), 0 < i.globals.seriesZ.length && 0 < i.globals.seriesZ[e].length && (o = c(i.globals.seriesZ[e][t], i)), n = "function" == typeof i.config.xaxis.tooltip.formatter ? i.globals.xaxisTooltipFormatter(s, l) : a, {
					val: Array.isArray(r) ? r.join(" ") : r,
					xVal: Array.isArray(a) ? a.join(" ") : a,
					xAxisTTVal: Array.isArray(n) ? n.join(" ") : n,
					zVal: o
				}
			}
		}, {
			key: "handleCustomTooltip",
			value: function(t) {
				var e = t.i,
					i = t.j,
					s = t.y1,
					a = t.y2,
					t = t.w,
					n = this.ttCtx.getElTooltip(),
					o = t.config.tooltip.custom;
				Array.isArray(o) && o[e] && (o = o[e]), n.innerHTML = o({
					ctx: this.ctx,
					series: t.globals.series,
					seriesIndex: e,
					dataPointIndex: i,
					y1: s,
					y2: a,
					w: t
				})
			}
		}]), fe),
		Ft = (t(pe, [{
			key: "moveXCrosshairs",
			value: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
					i = this.ttCtx,
					s = this.w,
					a = i.getElXCrosshairs(),
					t = t - i.xcrosshairsWidth / 2,
					n = s.globals.labels.slice().length;
				null !== e && (t = s.globals.gridWidth / n * e), null === a || s.globals.isBarHorizontal || (a.setAttribute("x", t), a.setAttribute("x1", t), a.setAttribute("x2", t), a.setAttribute("y2", s.globals.gridHeight), a.classList.add("apexcharts-active")), (t = t < 0 ? 0 : t) > s.globals.gridWidth && (t = s.globals.gridWidth), i.isXAxisTooltipEnabled && (n = t, "tickWidth" !== s.config.xaxis.crosshairs.width && "barWidth" !== s.config.xaxis.crosshairs.width || (n = t + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(n))
			}
		}, {
			key: "moveYCrosshairs",
			value: function(t) {
				var e = this.ttCtx;
				null !== e.ycrosshairs && D.setAttrs(e.ycrosshairs, {
					y1: t,
					y2: t
				}), null !== e.ycrosshairsHidden && D.setAttrs(e.ycrosshairsHidden, {
					y1: t,
					y2: t
				})
			}
		}, {
			key: "moveXAxisTooltip",
			value: function(t) {
				var e, i = this.w,
					s = this.ttCtx;
				null !== s.xaxisTooltip && 0 !== s.xcrosshairsWidth && (s.xaxisTooltip.classList.add("apexcharts-active"), e = s.xaxisOffY + i.config.xaxis.tooltip.offsetY + i.globals.translateY + 1 + i.config.xaxis.offsetY, t -= s.xaxisTooltip.getBoundingClientRect().width / 2, isNaN(t) || (t += i.globals.translateX, i = new D(this.ctx).getTextRects(s.xaxisTooltipText.innerHTML), s.xaxisTooltipText.style.minWidth = i.width + "px", s.xaxisTooltip.style.left = t + "px", s.xaxisTooltip.style.top = e + "px"))
			}
		}, {
			key: "moveYAxisTooltip",
			value: function(t) {
				var e = this.w,
					i = this.ttCtx,
					s = (null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip")), parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10)),
					s = e.globals.translateY + s,
					a = i.yaxisTTEls[t].getBoundingClientRect().height,
					n = e.globals.translateYAxisX[t] - 2;
				e.config.yaxis[t].opposite && (n -= 26), s -= a / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top = s + "px", i.yaxisTTEls[t].style.left = n + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("apexcharts-active")
			}
		}, {
			key: "moveTooltip",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
					s = this.w,
					a = this.ttCtx,
					n = a.getElTooltip(),
					o = a.tooltipRect,
					i = null !== i ? parseFloat(i) : 1,
					t = parseFloat(t) + i + 5,
					e = parseFloat(e) + i / 2;
				(t = (t = t > s.globals.gridWidth / 2 ? t - o.ttWidth - i - 10 : t) > s.globals.gridWidth - o.ttWidth - 10 ? s.globals.gridWidth - o.ttWidth : t) < -20 && (t = -20), s.config.tooltip.followCursor ? (i = a.getElGrid().getBoundingClientRect(), (t = a.e.clientX - i.left) > s.globals.gridWidth / 2 && (t -= a.tooltipRect.ttWidth), (e = a.e.clientY + s.globals.translateY - i.top) > s.globals.gridHeight / 2 && (e -= a.tooltipRect.ttHeight)) : s.globals.isBarHorizontal || o.ttHeight / 2 + e > s.globals.gridHeight && (e = s.globals.gridHeight - o.ttHeight + s.globals.translateY), isNaN(t) || (t += s.globals.translateX, n.style.left = t + "px", n.style.top = e + "px")
			}
		}, {
			key: "moveMarkers",
			value: function(t, e) {
				var i = this.w,
					s = this.ttCtx;
				if (0 < i.globals.markers.size[t])
					for (var a = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), n = 0; n < a.length; n++) parseInt(a[n].getAttribute("rel"), 10) === e && (s.marker.resetPointsSize(), s.marker.enlargeCurrentPoint(e, a[n]));
				else s.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
			}
		}, {
			key: "moveDynamicPointOnHover",
			value: function(t, e) {
				var i = this.w,
					s = this.ttCtx,
					a = i.globals.pointsArray,
					n = s.tooltipUtil.getHoverMarkerSize(e),
					o = i.config.series[e].type;
				o && ("column" === o || "candlestick" === o || "boxPlot" === o) || (o = a[e][t][0], a = a[e][t][1] || 0, (t = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"))) && a < i.globals.gridHeight && 0 < a && (t.setAttribute("r", n), t.setAttribute("cx", o), t.setAttribute("cy", a)), this.moveXCrosshairs(o), s.fixedTooltip) || this.moveTooltip(o, a, n)
			}
		}, {
			key: "moveDynamicPointsOnHover",
			value: function(t) {
				var e = this.ttCtx,
					i = e.w,
					s = 0,
					a = 0,
					n = i.globals.pointsArray,
					o = new S(this.ctx).getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]),
					r = e.tooltipUtil.getHoverMarkerSize(o),
					l = (n[o] && (s = n[o][t][0], a = n[o][t][1]), e.tooltipUtil.getAllMarkers());
				if (null !== l)
					for (var c = 0; c < i.globals.series.length; c++) {
						var h, d, u = n[c];
						i.globals.comboCharts && void 0 === u && l.splice(c, 0, null), u && u.length && (u = n[c][t][1], d = void 0, l[c].setAttribute("cx", s), "rangeArea" !== i.config.chart.type || i.globals.comboCharts || (h = t + i.globals.series[c].length, d = n[c][h][1], u -= Math.abs(u - d) / 2), null !== u && !isNaN(u) && u < i.globals.gridHeight + r && 0 < u + r ? (l[c] && l[c].setAttribute("r", r), l[c] && l[c].setAttribute("cy", u)) : l[c] && l[c].setAttribute("r", 0))
					}
				this.moveXCrosshairs(s), e.fixedTooltip || this.moveTooltip(s, a || i.globals.gridHeight, r)
			}
		}, {
			key: "moveStickyTooltipOverBars",
			value: function(t, e) {
				var i = this.w,
					s = this.ttCtx,
					a = (i.globals.columnSeries || i.globals.series).length,
					n = 2 <= a && a % 2 == 0 ? Math.floor(a / 2) : Math.floor(a / 2) + 1,
					n = (i.globals.isBarHorizontal && (n = new S(this.ctx).getActiveConfigSeriesIndex("desc") + 1), i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(n, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(n, "'] path[j='").concat(t, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(n, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(n, "'] path[j='").concat(t, "']"))),
					e = (n = n || "number" != typeof e ? n : i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e, "'] path[j='").concat(t, "'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(e, "'] path[j='").concat(t, "'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(e, "'] path[j='").concat(t, "'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(e, "'] path[j='").concat(t, "']"))) ? parseFloat(n.getAttribute("cx")) : 0,
					o = n ? parseFloat(n.getAttribute("cy")) : 0,
					r = n ? parseFloat(n.getAttribute("barWidth")) : 0,
					l = s.getElGrid().getBoundingClientRect(),
					c = n && (n.classList.contains("apexcharts-candlestick-area") || n.classList.contains("apexcharts-boxPlot-area"));
				i.globals.isXNumeric ? (n && !c && (e -= a % 2 != 0 ? r / 2 : 0), n && c && i.globals.comboCharts && (e -= r / 2)) : i.globals.isBarHorizontal || (e = s.xAxisTicksPositions[t - 1] + s.dataPointsDividedWidth / 2, isNaN(e) && (e = s.xAxisTicksPositions[t] - s.dataPointsDividedWidth / 2)), i.globals.isBarHorizontal ? o -= s.tooltipRect.ttHeight : i.config.tooltip.followCursor ? o = s.e.clientY - l.top - s.tooltipRect.ttHeight / 2 : o + s.tooltipRect.ttHeight + 15 > i.globals.gridHeight && (o = i.globals.gridHeight), i.globals.isBarHorizontal || this.moveXCrosshairs(e), s.fixedTooltip || this.moveTooltip(e, o || i.globals.gridHeight)
			}
		}]), pe),
		Rt = (t(ge, [{
			key: "drawDynamicPoints",
			value: function() {
				var t = this.w,
					e = new D(this.ctx),
					i = new w(this.ctx),
					s = b(s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"));
				t.config.chart.stacked && s.sort(function(t, e) {
					return parseFloat(t.getAttribute("data:realIndex")) - parseFloat(e.getAttribute("data:realIndex"))
				});
				for (var a = 0; a < s.length; a++) {
					var n, o, r = s[a].querySelector(".apexcharts-series-markers-wrap");
					null !== r && (n = void 0, o = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4)), "line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip.intersect || (o += " no-pointer-events"), o = i.getMarkerConfig({
						cssClass: o,
						seriesIndex: Number(r.getAttribute("data:realIndex"))
					}), (n = e.drawMarker(0, 0, o)).node.setAttribute("default-marker-size", 0), (o = document.createElementNS(t.globals.SVGNS, "g")).classList.add("apexcharts-series-markers"), o.appendChild(n.node), r.appendChild(o))
				}
			}
		}, {
			key: "enlargeCurrentPoint",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
					s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
					a = this.w,
					t = ("bubble" !== a.config.chart.type && this.newPointSize(t, e), e.getAttribute("cx")),
					e = e.getAttribute("cy");
				null !== i && null !== s && (t = i, e = s), this.tooltipPosition.moveXCrosshairs(t), this.fixedTooltip || ("radar" === a.config.chart.type && (i = this.ttCtx.getElGrid().getBoundingClientRect(), t = this.ttCtx.e.clientX - i.left), this.tooltipPosition.moveTooltip(t, e, a.config.markers.hover.size))
			}
		}, {
			key: "enlargePoints",
			value: function(t) {
				for (var e = this.w, i = this.ttCtx, s = t, a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n = e.config.markers.hover.size, o = 0; o < a.length; o++) {
					var r = a[o].getAttribute("rel"),
						l = a[o].getAttribute("index");
					void 0 === n && (n = e.globals.markers.size[l] + e.config.markers.hover.sizeOffset), s === parseInt(r, 10) ? (this.newPointSize(s, a[o]), l = a[o].getAttribute("cx"), r = a[o].getAttribute("cy"), this.tooltipPosition.moveXCrosshairs(l), i.fixedTooltip || this.tooltipPosition.moveTooltip(l, r, n)) : this.oldPointSize(a[o])
				}
			}
		}, {
			key: "newPointSize",
			value: function(t, e) {
				var i = this.w,
					s = i.config.markers.hover.size,
					t = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
				"0" !== t.getAttribute("default-marker-size") && (e = parseInt(t.getAttribute("index"), 10), void 0 === s && (s = i.globals.markers.size[e] + i.config.markers.hover.sizeOffset), t.setAttribute("r", s = s < 0 ? 0 : s))
			}
		}, {
			key: "oldPointSize",
			value: function(t) {
				var e = parseFloat(t.getAttribute("default-marker-size"));
				t.setAttribute("r", e)
			}
		}, {
			key: "resetPointsSize",
			value: function() {
				for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
					var i = parseFloat(t[e].getAttribute("default-marker-size"));
					O.isNumber(i) && 0 <= i ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0)
				}
			}
		}]), ge),
		Ht = (t(ue, [{
			key: "getAttr",
			value: function(t, e) {
				return parseFloat(t.target.getAttribute(e))
			}
		}, {
			key: "handleHeatTreeTooltip",
			value: function(t) {
				var e, i, s, a, n, o = t.e,
					r = t.opt,
					l = t.x,
					c = t.y,
					t = t.type,
					h = this.ttCtx,
					d = this.w;
				return o.target.classList.contains("apexcharts-".concat(t, "-rect")) && (t = this.getAttr(o, "i"), e = this.getAttr(o, "j"), i = this.getAttr(o, "cx"), s = this.getAttr(o, "cy"), a = this.getAttr(o, "width"), n = this.getAttr(o, "height"), h.tooltipLabels.drawSeriesTexts({
					ttItems: r.ttItems,
					i: t,
					j: e,
					shared: !1,
					e: o
				}), d.globals.capturedSeriesIndex = t, d.globals.capturedDataPointIndex = e, l = i + h.tooltipRect.ttWidth / 2 + a, c = s + h.tooltipRect.ttHeight / 2 - n / 2, h.tooltipPosition.moveXCrosshairs(i + a / 2), l > d.globals.gridWidth / 2 && (l = i - h.tooltipRect.ttWidth / 2 + a), h.w.config.tooltip.followCursor) && (r = d.globals.dom.elWrap.getBoundingClientRect(), l = d.globals.clientX - r.left - (l > d.globals.gridWidth / 2 ? h.tooltipRect.ttWidth : 0), c = d.globals.clientY - r.top - (c > d.globals.gridHeight / 2 ? h.tooltipRect.ttHeight : 0)), {
					x: l,
					y: c
				}
			}
		}, {
			key: "handleMarkerTooltip",
			value: function(t) {
				var e, i, s, a, n, o, r = t.e,
					l = t.opt,
					c = t.x,
					t = t.y,
					h = this.w,
					d = this.ttCtx;
				return r.target.classList.contains("apexcharts-marker") && (e = parseInt(l.paths.getAttribute("cx"), 10), i = parseInt(l.paths.getAttribute("cy"), 10), s = parseFloat(l.paths.getAttribute("val")), a = parseInt(l.paths.getAttribute("rel"), 10), n = parseInt(l.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, d.intersect && (o = O.findAncestor(l.paths, "apexcharts-series")) && (n = parseInt(o.getAttribute("data:realIndex"), 10)), d.tooltipLabels.drawSeriesTexts({
					ttItems: l.ttItems,
					i: n,
					j: a,
					shared: !d.showOnIntersect && h.config.tooltip.shared,
					e: r
				}), "mouseup" === r.type && d.markerClick(r, n, a), h.globals.capturedSeriesIndex = n, h.globals.capturedDataPointIndex = a, c = e, t = i + h.globals.translateY - 1.4 * d.tooltipRect.ttHeight, d.w.config.tooltip.followCursor && (o = d.getElGrid().getBoundingClientRect(), t = d.e.clientY + h.globals.translateY - o.top), d.marker.enlargeCurrentPoint(a, l.paths, c, t = s < 0 ? i : t)), {
					x: c,
					y: t
				}
			}
		}, {
			key: "handleBarTooltip",
			value: function(t) {
				var e, i = t.e,
					t = t.opt,
					s = this.w,
					a = this.ttCtx,
					n = a.getElTooltip(),
					o = 0,
					r = 0,
					l = 0,
					i = this.getBarTooltipXY({
						e: i,
						opt: t
					}),
					c = i.i,
					h = i.barHeight,
					d = i.j,
					i = (s.globals.capturedSeriesIndex = c, s.globals.capturedDataPointIndex = d, s.globals.isBarHorizontal && a.tooltipUtil.hasBars() || !s.config.tooltip.shared ? (r = i.x, l = i.y, e = Array.isArray(s.config.stroke.width) ? s.config.stroke.width[c] : s.config.stroke.width, o = r) : s.globals.comboCharts || s.config.tooltip.shared || (o /= 2), isNaN(l) && (l = s.globals.svgHeight - a.tooltipRect.ttHeight), parseInt(t.paths.parentNode.getAttribute("data:realIndex"), 10)),
					t = s.globals.isMultipleYAxis ? s.config.yaxis[i] && s.config.yaxis[i].reversed : s.config.yaxis[0].reversed;
				r + a.tooltipRect.ttWidth > s.globals.gridWidth && !t ? r -= a.tooltipRect.ttWidth : r < 0 && (r = 0), a.w.config.tooltip.followCursor && (i = a.getElGrid().getBoundingClientRect(), l = a.e.clientY - i.top), null === a.tooltip && (a.tooltip = s.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), s.config.tooltip.shared || (0 < s.globals.comboBarCount ? a.tooltipPosition.moveXCrosshairs(o + e / 2) : a.tooltipPosition.moveXCrosshairs(o)), !a.fixedTooltip && (!s.config.tooltip.shared || s.globals.isBarHorizontal && a.tooltipUtil.hasBars()) && (t && (r -= a.tooltipRect.ttWidth) < 0 && (r = 0), l = (l = !t || s.globals.isBarHorizontal && a.tooltipUtil.hasBars() ? l : l + h - 2 * (s.globals.series[c][d] < 0 ? h : 0)) + s.globals.translateY - a.tooltipRect.ttHeight / 2, n.style.left = r + s.globals.translateX + "px", n.style.top = l + "px")
			}
		}, {
			key: "getBarTooltipXY",
			value: function(t) {
				var e, i, s, a, n, o, r, l, c, h = this,
					d = t.e,
					t = t.opt,
					u = this.w,
					g = null,
					p = this.ttCtx,
					f = 0,
					x = 0,
					m = 0,
					b = 0,
					v = 0,
					y = d.target.classList;
				return (y.contains("apexcharts-bar-area") || y.contains("apexcharts-candlestick-area") || y.contains("apexcharts-boxPlot-area") || y.contains("apexcharts-rangebar-area")) && (o = (y = d.target).getBoundingClientRect(), e = t.elGrid.getBoundingClientRect(), i = o.height, v = o.height, s = o.width, a = parseInt(y.getAttribute("cx"), 10), n = parseInt(y.getAttribute("cy"), 10), b = parseFloat(y.getAttribute("barWidth")), o = ("touchmove" === d.type ? d.touches[0] : d).clientX, g = parseInt(y.getAttribute("j"), 10), f = parseInt(y.parentNode.getAttribute("rel"), 10) - 1, r = y.getAttribute("data-range-y1"), l = y.getAttribute("data-range-y2"), u.globals.comboCharts && (f = parseInt(y.parentNode.getAttribute("data:realIndex"), 10)), y = function(t) {
					return u.globals.isXNumeric ? a - s / 2 : h.isVerticalGroupedRangeBar ? a + s / 2 : a - p.dataPointsDividedWidth + s / 2
				}, c = function() {
					return n - p.dataPointsDividedHeight + i / 2 - p.tooltipRect.ttHeight / 2
				}, p.tooltipLabels.drawSeriesTexts({
					ttItems: t.ttItems,
					i: f,
					j: g,
					y1: r ? parseInt(r, 10) : null,
					y2: l ? parseInt(l, 10) : null,
					shared: !p.showOnIntersect && u.config.tooltip.shared,
					e: d
				}), m = u.config.tooltip.followCursor ? u.globals.isBarHorizontal ? (x = o - e.left + 15, c()) : (x = y(), d.clientY - e.top - p.tooltipRect.ttHeight / 2 - 15) : u.globals.isBarHorizontal ? ((x = a) < p.xyRatios.baseLineInvertedY && (x = a - p.tooltipRect.ttWidth), c()) : (x = y(), n)), {
					x: x,
					y: m,
					barHeight: v,
					barWidth: b,
					i: f,
					j: g
				}
			}
		}]), ue),
		Yt = (t(de, [{
			key: "drawXaxisTooltip",
			value: function() {
				var t = this.w,
					e = this.ttCtx,
					i = "bottom" === t.config.xaxis.position,
					i = (e.xaxisOffY = i ? t.globals.gridHeight + 1 : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3, i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top"),
					s = t.globals.dom.elWrap;
				e.isXAxisTooltipEnabled && null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", i + " apexcharts-theme-" + t.config.tooltip.theme), s.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText))
			}
		}, {
			key: "drawYaxisTooltip",
			value: function() {
				for (var a = this.w, e = this.ttCtx, t = 0; t < a.config.yaxis.length; t++) ! function(i) {
					var t = a.config.yaxis[i].opposite || a.config.yaxis[i].crosshairs.opposite,
						s = (e.yaxisOffX = t ? a.globals.gridWidth + 1 : 1, "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, t ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left")),
						t = (a.globals.yAxisSameScaleIndices.map(function(t, e) {
							t.map(function(t, e) {
								e === i && (s += a.config.yaxis[e].show ? " " : " apexcharts-yaxistooltip-hidden")
							})
						}), a.globals.dom.elWrap);
					null === a.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", s + " apexcharts-theme-" + a.config.tooltip.theme), t.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText[i] = document.createElement("div"), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))
				}(t)
			}
		}, {
			key: "setXCrosshairWidth",
			value: function() {
				var t, e = this.w,
					i = this.ttCtx,
					s = i.getElXCrosshairs();
				i.xcrosshairsWidth = parseInt(e.config.xaxis.crosshairs.width, 10), e.globals.comboCharts ? null !== (t = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area")) && "barWidth" === e.config.xaxis.crosshairs.width ? (t = parseFloat(t.getAttribute("barWidth")), i.xcrosshairsWidth = t) : "tickWidth" === e.config.xaxis.crosshairs.width && (t = e.globals.labels.length, i.xcrosshairsWidth = e.globals.gridWidth / t) : "tickWidth" === e.config.xaxis.crosshairs.width ? (t = e.globals.labels.length, i.xcrosshairsWidth = e.globals.gridWidth / t) : "barWidth" === e.config.xaxis.crosshairs.width && (null !== (t = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area")) ? (t = parseFloat(t.getAttribute("barWidth")), i.xcrosshairsWidth = t) : i.xcrosshairsWidth = 1), e.globals.isBarHorizontal && (i.xcrosshairsWidth = 0), null !== s && 0 < i.xcrosshairsWidth && s.setAttribute("width", i.xcrosshairsWidth)
			}
		}, {
			key: "handleYCrosshair",
			value: function() {
				var t = this.w,
					e = this.ttCtx;
				e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")
			}
		}, {
			key: "drawYaxisTooltipText",
			value: function(t, e, i) {
				var s, a, n = this.ttCtx,
					o = this.w,
					r = o.globals.yLabelFormatters[t];
				n.yaxisTooltips[t] && (i = (e - (s = n.getElGrid().getBoundingClientRect()).top) * i.yRatio[t], a = o.globals.maxYArr[t] - o.globals.minYArr[t], o = o.globals.minYArr[t] + (a - i), n.tooltipPosition.moveYCrosshairs(e - s.top), n.yaxisTooltipText[t].innerHTML = r(o), n.tooltipPosition.moveYAxisTooltip(t))
			}
		}]), de),
		Wt = (t(he, [{
			key: "getElTooltip",
			value: function(t) {
				return (t = t || this).w.globals.dom.baseEl ? t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null
			}
		}, {
			key: "getElXCrosshairs",
			value: function() {
				return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")
			}
		}, {
			key: "getElGrid",
			value: function() {
				return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")
			}
		}, {
			key: "drawTooltip",
			value: function(t) {
				var e, i = this.w,
					t = (this.xyRatios = t, this.isXAxisTooltipEnabled = i.config.xaxis.tooltip.enabled && i.globals.axisCharts, this.yaxisTooltips = i.config.yaxis.map(function(t, e) {
						return !!(t.show && t.tooltip.enabled && i.globals.axisCharts)
					}), this.allTooltipSeriesGroups = [], i.globals.axisCharts || (this.showTooltipTitle = !1), document.createElement("div"));
				t.classList.add("apexcharts-tooltip"), i.config.tooltip.cssClass && t.classList.add(i.config.tooltip.cssClass), t.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), i.globals.dom.elWrap.appendChild(t), i.globals.axisCharts && (this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair(), e = new u(this.ctx), this.xAxisTicksPositions = e.getXAxisTicksPositions()), !i.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== i.config.chart.type || this.tConfig.shared || (this.showOnIntersect = !0), 0 !== i.config.markers.size && 0 !== i.globals.markers.largestSize || this.marker.drawDynamicPoints(this), i.globals.collapsedSeries.length !== i.globals.series.length && (this.dataPointsDividedHeight = i.globals.gridHeight / i.globals.dataPoints, this.dataPointsDividedWidth = i.globals.gridWidth / i.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || i.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, t.appendChild(this.tooltipTitle)), e = i.globals.series.length, (i.globals.xyCharts || i.globals.comboCharts) && this.tConfig.shared && (e = this.showOnIntersect ? 1 : i.globals.series.length), this.legendLabels = i.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(e), this.addSVGEvents())
			}
		}, {
			key: "createTTElements",
			value: function(a) {
				for (var n = this, o = this.w, r = [], l = this.getElTooltip(), t = 0; t < a; t++) ! function(t) {
					var e = document.createElement("div"),
						i = (e.classList.add("apexcharts-tooltip-series-group"), e.style.order = o.config.tooltip.inverseOrder ? a - t : t + 1, n.tConfig.shared && n.tConfig.enabledOnSeries && Array.isArray(n.tConfig.enabledOnSeries) && n.tConfig.enabledOnSeries.indexOf(t) < 0 && e.classList.add("apexcharts-tooltip-series-group-hidden"), document.createElement("span")),
						s = (i.classList.add("apexcharts-tooltip-marker"), i.style.backgroundColor = o.globals.colors[t], e.appendChild(i), document.createElement("div"));
					s.classList.add("apexcharts-tooltip-text"), s.style.fontFamily = n.tConfig.style.fontFamily || o.config.chart.fontFamily, s.style.fontSize = n.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(t) {
						var e = document.createElement("div"),
							i = (e.classList.add("apexcharts-tooltip-".concat(t, "-group")), document.createElement("span")),
							i = (i.classList.add("apexcharts-tooltip-text-".concat(t, "-label")), e.appendChild(i), document.createElement("span"));
						i.classList.add("apexcharts-tooltip-text-".concat(t, "-value")), e.appendChild(i), s.appendChild(e)
					}), e.appendChild(s), l.appendChild(e), r.push(e)
				}(t);
				return r
			}
		}, {
			key: "addSVGEvents",
			value: function() {
				var t = this.w,
					e = t.config.chart.type,
					i = this.getElTooltip(),
					s = !("bar" !== e && "candlestick" !== e && "boxPlot" !== e && "rangeBar" !== e),
					a = "area" === e || "line" === e || "scatter" === e || "bubble" === e || "radar" === e,
					n = t.globals.dom.Paper.node,
					o = this.getElGrid();
				o && (this.seriesBound = o.getBoundingClientRect());
				var r, l = [],
					c = [],
					o = {
						hoverArea: n,
						elGrid: o,
						tooltipEl: i,
						tooltipY: l,
						tooltipX: c,
						ttItems: this.ttItems
					};
				if (t.globals.axisCharts && (a ? r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : s ? r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e && "treemap" !== e || (r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), r) && r.length)
					for (var h = 0; h < r.length; h++) l.push(r[h].getAttribute("cy")), c.push(r[h].getAttribute("cx"));
				t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || s && this.tooltipUtil.hasBars() && this.tConfig.shared ? this.addPathsEventListeners([n], o) : s && !t.globals.comboCharts || a && this.showOnIntersect ? this.addDatapointEventsListeners(o) : t.globals.axisCharts && "heatmap" !== e && "treemap" !== e || (i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"), this.addPathsEventListeners(i, o)), this.showOnIntersect && (0 < (n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker")).length && this.addPathsEventListeners(n, o), this.tooltipUtil.hasBars()) && !this.tConfig.shared && this.addDatapointEventsListeners(o)
			}
		}, {
			key: "drawFixedTooltipRect",
			value: function() {
				var t = this.w,
					e = this.getElTooltip(),
					i = e.getBoundingClientRect(),
					s = i.width + 10,
					i = i.height + 10,
					a = this.tConfig.fixed.offsetX,
					n = this.tConfig.fixed.offsetY,
					o = this.tConfig.fixed.position.toLowerCase();
				return -1 < o.indexOf("right") && (a = a + t.globals.svgWidth - s + 10), -1 < o.indexOf("bottom") && (n = n + t.globals.svgHeight - i - 10), e.style.left = a + "px", e.style.top = n + "px", {
					x: a,
					y: n,
					ttWidth: s,
					ttHeight: i
				}
			}
		}, {
			key: "addDatapointEventsListeners",
			value: function(t) {
				var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
				this.addPathsEventListeners(e, t)
			}
		}, {
			key: "addPathsEventListeners",
			value: function(s, t) {
				for (var a = this, e = 0; e < s.length; e++) ! function(e) {
					var i = {
						paths: s[e],
						tooltipEl: t.tooltipEl,
						tooltipY: t.tooltipY,
						tooltipX: t.tooltipX,
						elGrid: t.elGrid,
						hoverArea: t.hoverArea,
						ttItems: t.ttItems
					};
					["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(t) {
						return s[e].addEventListener(t, a.onSeriesHover.bind(a, i), {
							capture: !1,
							passive: !0
						})
					})
				}(e)
			}
		}, {
			key: "onSeriesHover",
			value: function(t, e) {
				var i = this,
					s = Date.now() - this.lastHoverTime;
				100 <= s ? this.seriesHover(t, e) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
					i.seriesHover(t, e)
				}, 100 - s))
			}
		}, {
			key: "seriesHover",
			value: function(i, s) {
				var a = this,
					t = (this.lastHoverTime = Date.now(), []),
					e = this.w;
				e.config.chart.group && (t = this.ctx.getGroupedCharts()), e.globals.axisCharts && (e.globals.minX === -1 / 0 && e.globals.maxX === 1 / 0 || 0 === e.globals.dataPoints) || (t.length ? t.forEach(function(t) {
					var e = a.getElTooltip(t),
						e = {
							paths: i.paths,
							tooltipEl: e,
							tooltipY: i.tooltipY,
							tooltipX: i.tooltipX,
							elGrid: i.elGrid,
							hoverArea: i.hoverArea,
							ttItems: t.w.globals.tooltip.ttItems
						};
					t.w.globals.minX === a.w.globals.minX && t.w.globals.maxX === a.w.globals.maxX && t.w.globals.tooltip.seriesHoverByContext({
						chartCtx: t,
						ttCtx: t.w.globals.tooltip,
						opt: e,
						e: s
					})
				}) : this.seriesHoverByContext({
					chartCtx: this.ctx,
					ttCtx: this.w.globals.tooltip,
					opt: i,
					e: s
				}))
			}
		}, {
			key: "seriesHoverByContext",
			value: function(t) {
				var e = t.chartCtx,
					i = t.ttCtx,
					s = t.opt,
					t = t.e,
					a = e.w,
					n = this.getElTooltip();
				n && (i.tooltipRect = {
					x: 0,
					y: 0,
					ttWidth: n.getBoundingClientRect().width,
					ttHeight: n.getBoundingClientRect().height
				}, i.e = t, !i.tooltipUtil.hasBars() || a.globals.comboCharts || i.isBarShared || this.tConfig.onDatasetHover.highlightDataSeries && new S(e).toggleSeriesOnHover(t, t.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), a.globals.axisCharts ? i.axisChartsTooltips({
					e: t,
					opt: s,
					tooltipRect: i.tooltipRect
				}) : i.nonAxisChartsTooltips({
					e: t,
					opt: s,
					tooltipRect: i.tooltipRect
				}))
			}
		}, {
			key: "axisChartsTooltips",
			value: function(t) {
				var e = t.e,
					t = t.opt,
					i = this.w,
					s = t.elGrid.getBoundingClientRect(),
					a = ("touchmove" === e.type ? e.touches[0] : e).clientX,
					n = ("touchmove" === e.type ? e.touches[0] : e).clientY;
				if (this.clientY = n, this.clientX = a, i.globals.capturedSeriesIndex = -1, i.globals.capturedDataPointIndex = -1, n < s.top || n > s.top + s.height) this.handleMouseOut(t);
				else {
					if (Array.isArray(this.tConfig.enabledOnSeries) && !i.config.tooltip.shared) {
						s = parseInt(t.paths.getAttribute("index"), 10);
						if (this.tConfig.enabledOnSeries.indexOf(s) < 0) return void this.handleMouseOut(t)
					}
					var s = this.getElTooltip(),
						o = this.getElXCrosshairs(),
						r = i.globals.xyCharts || "bar" === i.config.chart.type && !i.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || i.globals.comboCharts && this.tooltipUtil.hasBars();
					if ("mousemove" === e.type || "touchmove" === e.type || "mouseup" === e.type) {
						if (i.globals.collapsedSeries.length + i.globals.ancillaryCollapsedSeries.length !== i.globals.series.length) {
							null !== o && o.classList.add("apexcharts-active");
							var l, c, o = this.yaxisTooltips.filter(function(t) {
								return !0 === t
							});
							if (null !== this.ycrosshairs && o.length && this.ycrosshairs.classList.add("apexcharts-active"), r && !this.showOnIntersect ? this.handleStickyTooltip(e, a, n, t) : "heatmap" === i.config.chart.type || "treemap" === i.config.chart.type ? (l = (o = this.intersect.handleHeatTreeTooltip({
									e: e,
									opt: t,
									x: l,
									y: c,
									type: i.config.chart.type
								})).x, c = o.y, s.style.left = l + "px", s.style.top = c + "px") : (this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({
									e: e,
									opt: t
								}), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({
									e: e,
									opt: t,
									x: l,
									y: c
								})), this.yaxisTooltips.length)
								for (var h = 0; h < i.config.yaxis.length; h++) this.axesTooltip.drawYaxisTooltipText(h, n, this.xyRatios);
							t.tooltipEl.classList.add("apexcharts-active")
						}
					} else "mouseout" !== e.type && "touchend" !== e.type || this.handleMouseOut(t)
				}
			}
		}, {
			key: "nonAxisChartsTooltips",
			value: function(t) {
				var e = t.e,
					i = t.opt,
					t = t.tooltipRect,
					s = this.w,
					a = i.paths.getAttribute("rel"),
					n = this.getElTooltip(),
					o = s.globals.dom.elWrap.getBoundingClientRect();
				"mousemove" === e.type || "touchmove" === e.type ? (n.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({
					ttItems: i.ttItems,
					i: parseInt(a, 10) - 1,
					shared: !1
				}), i = s.globals.clientX - o.left - t.ttWidth / 2, o = s.globals.clientY - o.top - t.ttHeight - 10, n.style.left = i + "px", n.style.top = o + "px", s.config.legend.tooltipHoverFormatter && (i = (0, s.config.legend.tooltipHoverFormatter)(this.legendLabels[t = a - 1].getAttribute("data:default-text"), {
					seriesIndex: t,
					dataPointIndex: t,
					w: s
				}), this.legendLabels[t].innerHTML = i)) : "mouseout" !== e.type && "touchend" !== e.type || (n.classList.remove("apexcharts-active"), s.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t) {
					var e = t.getAttribute("data:default-text");
					t.innerHTML = decodeURIComponent(e)
				}))
			}
		}, {
			key: "handleStickyTooltip",
			value: function(t, e, i, s) {
				var a = this.w,
					e = this.tooltipUtil.getNearestValues({
						context: this,
						hoverArea: s.hoverArea,
						elGrid: s.elGrid,
						clientX: e,
						clientY: i
					}),
					i = e.j,
					n = e.capturedSeries,
					o = (a.globals.collapsedSeriesIndices.includes(n) && (n = null), s.elGrid.getBoundingClientRect());
				e.hoverX < 0 || e.hoverX > o.width ? this.handleMouseOut(s) : null !== n ? this.handleStickyCapturedSeries(t, n, s, i) : (this.tooltipUtil.isXoverlap(i) || a.globals.isBarHorizontal) && (e = a.globals.series.findIndex(function(t, e) {
					return !a.globals.collapsedSeriesIndices.includes(e)
				}), this.create(t, this, e, i, s.ttItems))
			}
		}, {
			key: "handleStickyCapturedSeries",
			value: function(t, e, i, s) {
				var a = this.w;
				this.tConfig.shared || null !== a.globals.series[e][s] ? void 0 !== a.globals.series[e][s] ? this.tConfig.shared && this.tooltipUtil.isXoverlap(s) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t, this, e, s, i.ttItems) : this.create(t, this, e, s, i.ttItems, !1) : this.tooltipUtil.isXoverlap(s) && (e = a.globals.series.findIndex(function(t, e) {
					return !a.globals.collapsedSeriesIndices.includes(e)
				}), this.create(t, this, e, s, i.ttItems)) : this.handleMouseOut(i)
			}
		}, {
			key: "deactivateHoverFilter",
			value: function() {
				for (var t = this.w, e = new D(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), s = 0; s < i.length; s++) e.pathMouseLeave(i[s])
			}
		}, {
			key: "handleMouseOut",
			value: function(t) {
				var e = this.w,
					i = this.getElXCrosshairs();
				if (t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
					null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
					for (var s = 0; s < this.yaxisTTEls.length; s++) this.yaxisTTEls[s].classList.remove("apexcharts-active")
				}
				e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t) {
					var e = t.getAttribute("data:default-text");
					t.innerHTML = decodeURIComponent(e)
				})
			}
		}, {
			key: "markerClick",
			value: function(t, e, i) {
				var s = this.w;
				"function" == typeof s.config.chart.events.markerClick && s.config.chart.events.markerClick(t, this.ctx, {
					seriesIndex: e,
					dataPointIndex: i,
					w: s
				}), this.ctx.events.fireEvent("markerClick", [t, this.ctx, {
					seriesIndex: e,
					dataPointIndex: i,
					w: s
				}])
			}
		}, {
			key: "create",
			value: function(t, e, i, s, a) {
				var n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
					o = this.w,
					t = ("mouseup" === t.type && this.markerClick(t, i, s), null === n && (n = this.tConfig.shared), this.tooltipUtil.hasMarkers(i)),
					r = this.tooltipUtil.getElBars();
				if (o.config.legend.tooltipHoverFormatter) {
					var l = o.config.legend.tooltipHoverFormatter,
						c = Array.from(this.legendLabels);
					c.forEach(function(t) {
						var e = t.getAttribute("data:default-text");
						t.innerHTML = decodeURIComponent(e)
					});
					for (var h = 0; h < c.length; h++) {
						var d = c[h],
							u = parseInt(d.getAttribute("i"), 10),
							g = decodeURIComponent(d.getAttribute("data:default-text")),
							p = l(g, {
								seriesIndex: n ? u : i,
								dataPointIndex: s,
								w: o
							});
						if (n) d.innerHTML = o.globals.collapsedSeriesIndices.indexOf(u) < 0 ? p : g;
						else if (d.innerHTML = u === i ? p : g, i === u) break
					}
				}
				a = P(P({
					ttItems: a,
					i: i,
					j: s
				}, void 0 !== (null == (a = o.globals.seriesRange) || null == (a = a[i]) || null == (a = a[s]) || null == (a = a.y[0]) ? void 0 : a.y1) && {
					y1: null == (a = o.globals.seriesRange) || null == (a = a[i]) || null == (a = a[s]) || null == (a = a.y[0]) ? void 0 : a.y1
				}), void 0 !== (null == (a = o.globals.seriesRange) || null == (a = a[i]) || null == (a = a[s]) || null == (a = a.y[0]) ? void 0 : a.y2) && {
					y2: null == (a = o.globals.seriesRange) || null == (a = a[i]) || null == (a = a[s]) || null == (a = a.y[0]) ? void 0 : a.y2
				});
				if (n) {
					if (e.tooltipLabels.drawSeriesTexts(P(P({}, a), {}, {
							shared: !this.showOnIntersect && this.tConfig.shared
						})), t) 0 < o.globals.markers.largestSize ? e.marker.enlargePoints(s) : e.tooltipPosition.moveDynamicPointsOnHover(s);
					else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(r), 0 < this.barSeriesHeight)) {
						var f = new D(this.ctx),
							x = o.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(s, "']"));
						this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(s, i);
						for (var m = 0; m < x.length; m++) f.pathMouseEnter(x[m])
					}
				} else e.tooltipLabels.drawSeriesTexts(P({
					shared: !1
				}, a)), this.tooltipUtil.hasBars() && e.tooltipPosition.moveStickyTooltipOverBars(s, i), t && e.tooltipPosition.moveMarkers(i, s)
			}
		}]), he),
		Bt = (t(ce, [{
			key: "handleBarDataLabels",
			value: function(t) {
				var e = t.x,
					i = t.y,
					s = t.y1,
					a = t.y2,
					n = t.i,
					o = t.j,
					r = t.realIndex,
					l = t.groupIndex,
					c = t.series,
					h = t.barHeight,
					d = t.barWidth,
					u = t.barXPosition,
					g = t.barYPosition,
					p = t.visibleSeries,
					t = t.renderedPath,
					f = this.w,
					x = new D(this.barCtx.ctx),
					m = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[r] : this.barCtx.strokeWidth,
					b = e + parseFloat(d * p),
					v = i + parseFloat(h * p);
				f.globals.isXNumeric && !f.globals.isBarHorizontal && (b = e + parseFloat(d * (p + 1)), v = i + parseFloat(h * (p + 1)) - m);
				var p = null,
					y = e,
					w = i,
					k = f.config.dataLabels,
					A = this.barCtx.barOptions.dataLabels,
					C = this.barCtx.barOptions.dataLabels.total,
					g = (void 0 !== g && this.barCtx.isRangeBar && (w = v = g), void 0 !== u && this.barCtx.isVerticalGroupedRangeBar && (y = b = u), k.offsetX),
					u = k.offsetY,
					S = {
						width: 0,
						height: 0
					},
					x = (f.config.dataLabels.enabled && (T = this.barCtx.series[n][o], S = x.getTextRects(f.globals.yLabelFormatters[0](T), parseFloat(k.style.fontSize))), {
						x: e,
						y: i,
						i: n,
						j: o,
						realIndex: r,
						groupIndex: l || -1,
						renderedPath: t,
						bcx: b,
						bcy: v,
						barHeight: h,
						barWidth: d,
						textRects: S,
						strokeWidth: m,
						dataLabelsX: y,
						dataLabelsY: w,
						dataLabelsConfig: k,
						barDataLabelsConfig: A,
						barTotalDataLabelsConfig: C,
						offX: g,
						offY: u
					}),
					T = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(x) : this.calculateColumnsDataLabelsPosition(x);
				return t.attr({
					cy: T.bcy,
					cx: T.bcx,
					j: o,
					val: c[n][o],
					barHeight: h,
					barWidth: d
				}), {
					dataLabels: this.drawCalculatedDataLabels({
						x: T.dataLabelsX,
						y: T.dataLabelsY,
						val: this.barCtx.isRangeBar ? [s, a] : c[n][o],
						i: r,
						j: o,
						barWidth: d,
						barHeight: h,
						textRects: S,
						dataLabelsConfig: k
					}),
					totalDataLabels: p = f.config.chart.stacked && C.enabled ? this.drawTotalDataLabels({
						x: T.totalDataLabelsX,
						y: T.totalDataLabelsY,
						realIndex: r,
						textAnchor: T.totalDataLabelsAnchor,
						val: this.getStackedTotalDataLabel({
							realIndex: r,
							j: o
						}),
						dataLabelsConfig: k,
						barTotalDataLabelsConfig: C
					}) : p
				}
			}
		}, {
			key: "getStackedTotalDataLabel",
			value: function(t) {
				var e = t.realIndex,
					t = t.j,
					i = this.w,
					s = this.barCtx.stackedSeriesTotals[t];
				return s = this.totalFormatter ? this.totalFormatter(s, P(P({}, i), {}, {
					seriesIndex: e,
					dataPointIndex: t,
					w: i
				})) : s
			}
		}, {
			key: "calculateColumnsDataLabelsPosition",
			value: function(t) {
				var e, i, s = this.w,
					a = t.i,
					n = t.j,
					o = t.realIndex,
					r = t.groupIndex,
					l = t.y,
					c = t.bcx,
					h = t.barWidth,
					d = t.barHeight,
					u = t.textRects,
					g = t.dataLabelsX,
					p = t.dataLabelsY,
					f = t.dataLabelsConfig,
					x = t.barDataLabelsConfig,
					m = t.barTotalDataLabelsConfig,
					b = t.strokeWidth,
					v = t.offX,
					y = t.offY,
					d = Math.abs(d),
					w = "vertical" === s.config.plotOptions.bar.dataLabels.orientation,
					c = c - b / 2 + (-1 !== r ? r * h : 0),
					t = s.globals.gridWidth / s.globals.dataPoints,
					k = (this.barCtx.isVerticalGroupedRangeBar ? g += h / 2 : g = s.globals.isXNumeric ? c - h / 2 + v : c - t + h / 2 + v, w && (g = g + u.height / 2 - b / 2 - 2), this.barCtx.series[a][n] < 0),
					A = l;
				switch (this.barCtx.isReversed && (A = l - d + (k ? 2 * d : 0), l -= d), x.position) {
					case "center":
						p = w ? k ? A + d / 2 + y : A + d / 2 - y : k ? A - d / 2 + u.height / 2 + y : A + d / 2 + u.height / 2 - y;
						break;
					case "bottom":
						p = w ? k ? A + d + y : A + d - y : k ? A - d + u.height + b + y : A + d - u.height / 2 + b - y;
						break;
					case "top":
						p = w ? k ? A + y : A - y : k ? A - u.height / 2 - y : A + u.height + y
				}
				return this.barCtx.lastActiveBarSerieIndex === o && m.enabled && (r = new D(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({
					realIndex: o,
					j: n
				}), f.fontSize), e = k ? A - r.height / 2 - y - m.offsetY + 18 : A + r.height + y + m.offsetY - 18, i = g + m.offsetX), s.config.chart.stacked || (p < 0 ? p = 0 + b : p + u.height / 3 > s.globals.gridHeight && (p = s.globals.gridHeight - b)), {
					bcx: c,
					bcy: l,
					dataLabelsX: g,
					dataLabelsY: p,
					totalDataLabelsX: i,
					totalDataLabelsY: e,
					totalDataLabelsAnchor: "middle"
				}
			}
		}, {
			key: "calculateBarsDataLabelsPosition",
			value: function(t) {
				var e, i, s = this.w,
					a = t.x,
					n = t.i,
					o = t.j,
					r = t.realIndex,
					l = t.groupIndex,
					c = t.bcy,
					h = t.barHeight,
					d = t.barWidth,
					u = t.textRects,
					g = t.dataLabelsX,
					p = t.strokeWidth,
					f = t.dataLabelsConfig,
					x = t.barDataLabelsConfig,
					m = t.barTotalDataLabelsConfig,
					b = t.offX,
					t = t.offY,
					v = s.globals.gridHeight / s.globals.dataPoints,
					d = Math.abs(d),
					l = (c += -1 !== l ? l * h : 0) - (this.barCtx.isRangeBar ? 0 : v) + h / 2 + u.height / 2 + t - 3,
					v = "start",
					y = this.barCtx.series[n][o] < 0,
					w = a;
				switch (this.barCtx.isReversed && (w = a + d - (y ? 2 * d : 0), a = s.globals.gridWidth - d), x.position) {
					case "center":
						g = y ? w + d / 2 - b : Math.max(u.width / 2, w - d / 2) + b;
						break;
					case "bottom":
						g = y ? w + d - p - Math.round(u.width / 2) - b : w - d + p + Math.round(u.width / 2) + b;
						break;
					case "top":
						g = y ? w - p + Math.round(u.width / 2) - b : w - p - Math.round(u.width / 2) + b
				}
				return this.barCtx.lastActiveBarSerieIndex === r && m.enabled && (h = new D(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({
					realIndex: r,
					j: o
				}), f.fontSize), y ? (e = w - p + Math.round(h.width / 2) - b - m.offsetX - 15, v = "end") : e = w - p - Math.round(h.width / 2) + b + m.offsetX + 15, i = l + m.offsetY), s.config.chart.stacked || (g < 0 ? g = g + u.width + p : g + u.width / 2 > s.globals.gridWidth && (g = s.globals.gridWidth - u.width - p)), {
					bcx: a,
					bcy: c,
					dataLabelsX: g,
					dataLabelsY: l,
					totalDataLabelsX: e,
					totalDataLabelsY: i,
					totalDataLabelsAnchor: v
				}
			}
		}, {
			key: "drawCalculatedDataLabels",
			value: function(t) {
				var e = t.x,
					i = t.y,
					s = t.val,
					a = t.i,
					n = t.j,
					o = t.textRects,
					r = t.barHeight,
					l = t.barWidth,
					t = t.dataLabelsConfig,
					c = this.w,
					h = "rotate(0)",
					d = ("vertical" === c.config.plotOptions.bar.dataLabels.orientation && (h = "rotate(-90, ".concat(e, ", ").concat(i, ")")), new k(this.barCtx.ctx)),
					u = new D(this.barCtx.ctx),
					g = t.formatter,
					p = null,
					f = -1 < c.globals.collapsedSeriesIndices.indexOf(a);
				return t.enabled && !f && (p = u.group({
					class: "apexcharts-data-labels",
					transform: h
				}), f = "", void 0 !== s && (f = g(s, P(P({}, c), {}, {
					seriesIndex: a,
					dataPointIndex: n,
					w: c
				}))), !s && c.config.plotOptions.bar.hideZeroBarsWhenGrouped && (f = ""), h = c.globals.series[a][n] < 0, g = c.config.plotOptions.bar.dataLabels.position, "vertical" === c.config.plotOptions.bar.dataLabels.orientation && ("top" === g && (t.textAnchor = h ? "end" : "start"), "center" === g && (t.textAnchor = "middle"), "bottom" === g) && (t.textAnchor = h ? "end" : "start"), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && l < u.getTextRects(f, parseFloat(t.style.fontSize)).width && (f = ""), c.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o.width / 1.6 > Math.abs(l) && (f = "") : o.height / 1.6 > Math.abs(r) && (f = "")), g = P({}, t), this.barCtx.isHorizontal && s < 0 && ("start" === t.textAnchor ? g.textAnchor = "end" : "end" === t.textAnchor && (g.textAnchor = "start")), d.plotDataLabelsText({
					x: e,
					y: i,
					text: f,
					i: a,
					j: n,
					parent: p,
					dataLabelsConfig: g,
					alwaysDrawDataLabel: !0,
					offsetCorrection: !0
				})), p
			}
		}, {
			key: "drawTotalDataLabels",
			value: function(t) {
				var e, i = t.x,
					s = t.y,
					a = t.val,
					n = t.realIndex,
					o = t.textAnchor,
					t = t.barTotalDataLabelsConfig,
					r = new D(this.barCtx.ctx);
				return e = t.enabled && void 0 !== i && void 0 !== s && this.barCtx.lastActiveBarSerieIndex === n ? r.drawText({
					x: i,
					y: s,
					foreColor: t.style.color,
					text: a,
					textAnchor: o,
					fontFamily: t.style.fontFamily,
					fontSize: t.style.fontSize,
					fontWeight: t.style.fontWeight
				}) : e
			}
		}]), ce),
		jt = (t(le, [{
			key: "initVariables",
			value: function(t) {
				var e = this.w;
				this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
				for (var i = 0; i < t.length; i++)
					if (0 < t[i].length && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric)
						for (var s = 0; s < t[i].length; s++) e.globals.seriesX[i][s] > e.globals.minX && e.globals.seriesX[i][s] < e.globals.maxX && this.barCtx.visibleItems++;
					else this.barCtx.visibleItems = e.globals.dataPoints;
				0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e.globals.comboCharts || this.checkZeroSeries({
					series: t
				})
			}
		}, {
			key: "initialPositions",
			value: function() {
				var t, e, i, s, a, n, o, r, l = this.w,
					c = l.globals.dataPoints,
					h = (this.barCtx.isRangeBar && (c = l.globals.labels.length), this.barCtx.seriesLen);
				return l.config.plotOptions.bar.rangeBarGroupRows && (h = 1), this.barCtx.isHorizontal ? (s = (i = l.globals.gridHeight / c) / h, s = (s = l.globals.isXNumeric ? (i = l.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen : s) * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, -1 === String(this.barCtx.barOptions.barHeight).indexOf("%") && (s = parseInt(this.barCtx.barOptions.barHeight, 10)), n = this.barCtx.baseLineInvertedY + l.globals.padHorizontal + (this.barCtx.isReversed ? l.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (n = l.globals.gridWidth / 2), e = (i - s * this.barCtx.seriesLen) / 2) : (o = l.globals.gridWidth / this.barCtx.visibleItems, r = (o = l.config.xaxis.convertedCatToNumeric ? l.globals.gridWidth / l.globals.dataPoints : o) / h * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l.globals.isXNumeric && (c = this.barCtx.xRatio, l.config.xaxis.convertedCatToNumeric && (c = this.barCtx.initialXRatio), (r = (o = l.globals.minXDiff && .5 !== l.globals.minXDiff && 0 < l.globals.minXDiff / c ? l.globals.minXDiff / c : o) / h * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1) && (r = 1), -1 === String(this.barCtx.barOptions.columnWidth).indexOf("%") && (r = parseInt(this.barCtx.barOptions.columnWidth, 10)), a = l.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? l.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t = l.globals.padHorizontal + (o - r * this.barCtx.seriesLen) / 2), {
					x: t,
					y: e,
					yDivision: i,
					xDivision: o,
					barHeight: s,
					barWidth: r,
					zeroH: a,
					zeroW: n
				}
			}
		}, {
			key: "initializeStackedPrevVars",
			value: function(e) {
				var t = e.w;
				t.globals.hasSeriesGroups ? t.globals.seriesGroups.forEach(function(t) {
					e[t] || (e[t] = {}), e[t].prevY = [], e[t].prevX = [], e[t].prevYF = [], e[t].prevXF = [], e[t].prevYVal = [], e[t].prevXVal = []
				}) : (e.prevY = [], e.prevX = [], e.prevYF = [], e.prevXF = [], e.prevYVal = [], e.prevXVal = [])
			}
		}, {
			key: "initializeStackedXYVars",
			value: function(e) {
				var t = e.w;
				t.globals.hasSeriesGroups ? t.globals.seriesGroups.forEach(function(t) {
					e[t] || (e[t] = {}), e[t].xArrj = [], e[t].xArrjF = [], e[t].xArrjVal = [], e[t].yArrj = [], e[t].yArrjF = [], e[t].yArrjVal = []
				}) : (e.xArrj = [], e.xArrjF = [], e.xArrjVal = [], e.yArrj = [], e.yArrjF = [], e.yArrjVal = [])
			}
		}, {
			key: "getPathFillColor",
			value: function(e, i, s, t) {
				var a = this.w,
					n = new C(this.barCtx.ctx),
					o = null,
					r = this.barCtx.barOptions.distributed ? s : i;
				return 0 < this.barCtx.barOptions.colors.ranges.length && this.barCtx.barOptions.colors.ranges.map(function(t) {
					e[i][s] >= t.from && e[i][s] <= t.to && (o = t.color)
				}), a.config.series[i].data[s] && a.config.series[i].data[s].fillColor && (o = a.config.series[i].data[s].fillColor), n.fillPath({
					seriesNumber: this.barCtx.barOptions.distributed ? r : t,
					dataPointIndex: s,
					color: o,
					value: e[i][s],
					fillConfig: null == (n = a.config.series[i].data[s]) ? void 0 : n.fill,
					fillType: null != (r = a.config.series[i].data[s]) && null != (t = r.fill) && t.type ? null == (n = a.config.series[i].data[s]) ? void 0 : n.fill.type : a.config.fill.type
				})
			}
		}, {
			key: "getStrokeWidth",
			value: function(t, e, i) {
				var s = 0,
					a = this.w;
				return this.barCtx.series[t][e] ? this.barCtx.isNullValue = !1 : this.barCtx.isNullValue = !0, s = !a.config.stroke.show || this.barCtx.isNullValue ? s : Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth
			}
		}, {
			key: "shouldApplyRadius",
			value: function(t) {
				var e = this.w,
					i = !1;
				return i = 0 < e.config.plotOptions.bar.borderRadius && (!e.config.chart.stacked || "last" !== e.config.plotOptions.bar.borderRadiusWhenStacked || this.barCtx.lastActiveBarSerieIndex === t) ? !0 : i
			}
		}, {
			key: "barBackground",
			value: function(t) {
				var e = t.j,
					i = t.i,
					s = t.x1,
					a = t.x2,
					n = t.y1,
					o = t.y2,
					t = t.elSeries,
					r = this.w,
					l = new D(this.barCtx.ctx),
					c = new S(this.barCtx.ctx).getActiveConfigSeriesIndex();
				0 < this.barCtx.barOptions.colors.backgroundBarColors.length && c === i && (e >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e %= this.barCtx.barOptions.colors.backgroundBarColors.length), c = this.barCtx.barOptions.colors.backgroundBarColors[e], i = l.drawRect(void 0 !== s ? s : 0, void 0 !== n ? n : 0, void 0 !== a ? a : r.globals.gridWidth, void 0 !== o ? o : r.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, c, this.barCtx.barOptions.colors.backgroundBarOpacity), t.add(i), i.node.classList.add("apexcharts-backgroundBar"))
			}
		}, {
			key: "getColumnPaths",
			value: function(t) {
				var e = t.barWidth,
					i = t.barXPosition,
					s = t.y1,
					a = t.y2,
					n = t.strokeWidth,
					o = t.seriesGroup,
					r = t.realIndex,
					l = t.i,
					c = t.j,
					t = t.w,
					h = new D(this.barCtx.ctx),
					n = (n = Array.isArray(n) ? n[r] : n) || 0,
					d = e,
					u = i,
					g = (null != (g = t.config.series[r].data[c]) && g.columnWidthOffset && (u = i - t.config.series[r].data[c].columnWidthOffset / 2, d = e + t.config.series[r].data[c].columnWidthOffset), u),
					i = u + d,
					e = (a += .001, h.move(g, s += .001)),
					u = h.move(g, s),
					d = h.line(i - n, s);
				return 0 < t.globals.previousPaths.length && (u = this.barCtx.getPreviousPath(r, c, !1)), e = e + h.line(g, a) + h.line(i - n, a) + h.line(i - n, s) + ("around" === t.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), u = u + h.line(g, s) + d + d + d + d + d + h.line(g, s) + ("around" === t.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), this.shouldApplyRadius(r) && (e = h.roundPathCorners(e, t.config.plotOptions.bar.borderRadius)), t.config.chart.stacked && (i = this.barCtx, (i = t.globals.hasSeriesGroups && o ? this.barCtx[o] : i).yArrj.push(a), i.yArrjF.push(Math.abs(s - a)), i.yArrjVal.push(this.barCtx.series[l][c])), {
					pathTo: e,
					pathFrom: u
				}
			}
		}, {
			key: "getBarpaths",
			value: function(t) {
				var e = t.barYPosition,
					i = t.barHeight,
					s = t.x1,
					a = t.x2,
					n = t.strokeWidth,
					o = t.seriesGroup,
					r = t.realIndex,
					l = t.i,
					c = t.j,
					t = t.w,
					h = new D(this.barCtx.ctx),
					n = (n = Array.isArray(n) ? n[r] : n) || 0,
					d = e,
					u = i,
					g = (null != (g = t.config.series[r].data[c]) && g.barHeightOffset && (d = e - t.config.series[r].data[c].barHeightOffset / 2, u = i + t.config.series[r].data[c].barHeightOffset), d),
					e = d + u,
					i = (a += .001, h.move(s += .001, g)),
					d = h.move(s, g),
					u = (0 < t.globals.previousPaths.length && (d = this.barCtx.getPreviousPath(r, c, !1)), h.line(s, e - n)),
					i = i + h.line(a, g) + h.line(a, e - n) + u + ("around" === t.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"),
					d = d + h.line(s, g) + u + u + u + u + u + h.line(s, g) + ("around" === t.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z");
				return this.shouldApplyRadius(r) && (i = h.roundPathCorners(i, t.config.plotOptions.bar.borderRadius)), t.config.chart.stacked && (e = this.barCtx, (e = t.globals.hasSeriesGroups && o ? this.barCtx[o] : e).xArrj.push(a), e.xArrjF.push(Math.abs(s - a)), e.xArrjVal.push(this.barCtx.series[l][c])), {
					pathTo: i,
					pathFrom: d
				}
			}
		}, {
			key: "checkZeroSeries",
			value: function(t) {
				for (var e = t.series, i = this.w, s = 0; s < e.length; s++) {
					for (var a = 0, n = 0; n < e[i.globals.maxValsInArrayIndex].length; n++) a += e[s][n];
					0 === a && this.barCtx.zeroSerieses.push(s)
				}
			}
		}, {
			key: "getXForValue",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] && !arguments[2] ? null : e;
				return i = null != t ? e + t / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t / this.barCtx.invertedYRatio : 0) : i
			}
		}, {
			key: "getYForValue",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] && !arguments[2] ? null : e;
				return i = null != t ? e - t / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? t / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0) : i
			}
		}, {
			key: "getGoalValues",
			value: function(s, a, n, t, e) {
				function i(t, e) {
					var i;
					h.push((_(i = {}, s, "x" === s ? l.getXForValue(t, a, !1) : l.getYForValue(t, n, !1)), _(i, "attrs", e), i))
				}
				var o, r, l = this,
					c = this.w,
					h = [];
				return c.globals.seriesGoals[t] && c.globals.seriesGoals[t][e] && Array.isArray(c.globals.seriesGoals[t][e]) && c.globals.seriesGoals[t][e].forEach(function(t) {
					i(t.value, t)
				}), this.barCtx.barOptions.isDumbbell && c.globals.seriesRange.length && (o = this.barCtx.barOptions.dumbbellColors || c.globals.colors, r = {
					strokeHeight: "x" === s ? 0 : c.globals.markers.size[t],
					strokeWidth: "x" === s ? c.globals.markers.size[t] : 0,
					strokeDashArray: 0,
					strokeLineCap: "round",
					strokeColor: Array.isArray(o[t]) ? o[t][0] : o[t]
				}, i(c.globals.seriesRangeStart[t][e], r), i(c.globals.seriesRangeEnd[t][e], P(P({}, r), {}, {
					strokeColor: Array.isArray(o[t]) ? o[t][1] : o[t]
				}))), h
			}
		}, {
			key: "drawGoalLine",
			value: function(t) {
				var s = t.barXPosition,
					a = t.barYPosition,
					e = t.goalX,
					i = t.goalY,
					n = t.barWidth,
					o = t.barHeight,
					r = new D(this.barCtx.ctx),
					l = r.group({
						className: "apexcharts-bar-goals-groups"
					}),
					c = (l.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({
						el: l.node
					}), l.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")")), null);
				return this.barCtx.isHorizontal ? Array.isArray(e) && e.forEach(function(t) {
					var e = void 0 !== t.attrs.strokeHeight ? t.attrs.strokeHeight : o / 2,
						i = a + e + o / 2;
					c = r.drawLine(t.x, i - 2 * e, t.x, i, t.attrs.strokeColor || void 0, t.attrs.strokeDashArray, t.attrs.strokeWidth || 2, t.attrs.strokeLineCap), l.add(c)
				}) : Array.isArray(i) && i.forEach(function(t) {
					var e = void 0 !== t.attrs.strokeWidth ? t.attrs.strokeWidth : n / 2,
						i = s + e + n / 2;
					c = r.drawLine(i - 2 * e, t.y, i, t.y, t.attrs.strokeColor || void 0, t.attrs.strokeDashArray, t.attrs.strokeHeight || 2, t.attrs.strokeLineCap), l.add(c)
				}), l
			}
		}, {
			key: "drawBarShadow",
			value: function(t) {
				var e = t.prevPaths,
					i = t.currPaths,
					t = t.color,
					s = this.w,
					a = e.x,
					n = e.x1,
					e = e.barYPosition,
					o = i.x,
					r = i.x1,
					l = i.barYPosition,
					e = e + i.barHeight,
					i = new D(this.barCtx.ctx),
					c = new O,
					a = i.move(n, e) + i.line(a, e) + i.line(o, l) + i.line(r, l) + i.line(n, e) + ("around" === s.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z");
				return i.drawPath({
					d: a,
					fill: c.shadeColor(.5, O.rgb2hex(t)),
					stroke: "none",
					strokeWidth: 0,
					fillOpacity: 1,
					classes: "apexcharts-bar-shadows"
				})
			}
		}]), le),
		E = (t(re, [{
			key: "draw",
			value: function(t, e) {
				var i = this.w,
					s = new D(this.ctx),
					a = new I(this.ctx, i),
					n = (t = a.getLogSeries(t), this.series = t, this.yRatio = a.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t), s.group({
						class: "apexcharts-bar-series apexcharts-plot-series"
					}));
				i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");
				for (var o = 0, r = 0; o < t.length; o++, r++) {
					var l = void 0,
						c = void 0,
						h = [],
						d = [],
						u = i.globals.comboCharts ? e[o] : o,
						g = s.group({
							class: "apexcharts-series",
							rel: o + 1,
							seriesName: O.escapeString(i.globals.seriesNames[u]),
							"data:realIndex": u
						}),
						p = (this.ctx.series.addCollapsedClassToSeries(g, u), 0 < t[o].length && (this.visibleI = this.visibleI + 1), 0),
						f = 0,
						x = (1 < this.yRatio.length && (this.yaxisIndex = u), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed, this.barHelpers.initialPositions()),
						c = x.y,
						p = x.barHeight,
						m = x.yDivision,
						b = x.zeroW,
						l = x.x,
						f = x.barWidth,
						v = x.xDivision,
						y = x.zeroH,
						w = (this.horizontal || d.push(l + f / 2), s.group({
							class: "apexcharts-datalabels",
							"data:realIndex": u
						})),
						k = (i.globals.delayedElements.push({
							el: w.node
						}), w.node.classList.add("apexcharts-element-hidden"), s.group({
							class: "apexcharts-bar-goals-markers"
						})),
						A = s.group({
							class: "apexcharts-bar-shadows"
						});
					i.globals.delayedElements.push({
						el: A.node
					}), A.node.classList.add("apexcharts-element-hidden");
					for (var C = 0; C < i.globals.dataPoints; C++) {
						var S = this.barHelpers.getStrokeWidth(o, C, u),
							T = null,
							L = {
								indexes: {
									i: o,
									j: C,
									realIndex: u,
									bc: r
								},
								x: l,
								y: c,
								strokeWidth: S,
								elSeries: g
							},
							L = (this.isHorizontal ? (T = this.drawBarPaths(P(P({}, L), {}, {
								barHeight: p,
								zeroW: b,
								yDivision: m
							})), f = this.series[o][C] / this.invertedYRatio) : (T = this.drawColumnPaths(P(P({}, L), {}, {
								xDivision: v,
								barWidth: f,
								zeroH: y
							})), p = this.series[o][C] / this.yRatio[this.yaxisIndex]), this.barHelpers.getPathFillColor(t, o, C, u)),
							E = (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && 0 < C && (E = this.barHelpers.drawBarShadow({
								color: "string" == typeof L && -1 === (null == L ? void 0 : L.indexOf("url")) ? L : O.hexToRgba(i.globals.colors[o]),
								prevPaths: this.pathArr[this.pathArr.length - 1],
								currPaths: T
							})) && A.add(E), this.pathArr.push(T), this.barHelpers.drawGoalLine({
								barXPosition: T.barXPosition,
								barYPosition: T.barYPosition,
								goalX: T.goalX,
								goalY: T.goalY,
								barHeight: p,
								barWidth: f
							}));
						E && k.add(E), c = T.y, l = T.x, 0 < C && d.push(l + f / 2), h.push(c), this.renderSeries({
							realIndex: u,
							pathFill: L,
							j: C,
							i: o,
							pathFrom: T.pathFrom,
							pathTo: T.pathTo,
							strokeWidth: S,
							elSeries: g,
							x: l,
							y: c,
							series: t,
							barHeight: T.barHeight || p,
							barWidth: T.barWidth || f,
							elDataLabelsWrap: w,
							elGoalsMarkers: k,
							elBarShadows: A,
							visibleSeries: this.visibleI,
							type: "bar"
						})
					}
					i.globals.seriesXvalues[u] = d, i.globals.seriesYvalues[u] = h, n.add(g)
				}
				return n
			}
		}, {
			key: "renderSeries",
			value: function(t) {
				var e = t.realIndex,
					i = t.pathFill,
					s = t.lineFill,
					a = t.j,
					n = t.i,
					o = t.groupIndex,
					r = t.pathFrom,
					l = t.pathTo,
					c = t.strokeWidth,
					h = t.elSeries,
					d = t.x,
					u = t.y,
					g = t.y1,
					p = t.y2,
					f = t.series,
					x = t.barHeight,
					m = t.barWidth,
					b = t.barXPosition,
					v = t.barYPosition,
					y = t.elDataLabelsWrap,
					w = t.elGoalsMarkers,
					k = t.elBarShadows,
					A = t.visibleSeries,
					t = t.type,
					C = this.w,
					S = new D(this.ctx),
					s = s || (this.barOptions.distributed ? C.globals.stroke.colors[a] : C.globals.stroke.colors[e]),
					T = (C.config.series[n].data[a] && C.config.series[n].data[a].strokeColor && (s = C.config.series[n].data[a].strokeColor), this.isNullValue && (i = "none"), a / C.config.chart.animations.animateGradually.delay * (C.config.chart.animations.speed / C.globals.dataPoints) / 2.4),
					S = S.renderPaths({
						i: n,
						j: a,
						realIndex: e,
						pathFrom: r,
						pathTo: l,
						stroke: s,
						strokeWidth: c,
						strokeLineCap: C.config.stroke.lineCap,
						fill: i,
						animationDelay: T,
						initialSpeed: C.config.chart.animations.speed,
						dataChangeSpeed: C.config.chart.animations.dynamicAnimation.speed,
						className: "apexcharts-".concat(t, "-area")
					}),
					r = (S.attr("clip-path", "url(#gridRectMask".concat(C.globals.cuid, ")")), C.config.forecastDataPoints),
					l = (0 < r.count && a >= C.globals.dataPoints - r.count && (S.node.setAttribute("stroke-dasharray", r.dashArray), S.node.setAttribute("stroke-width", r.strokeWidth), S.node.setAttribute("fill-opacity", r.fillOpacity)), void 0 !== g && void 0 !== p && (S.attr("data-range-y1", g), S.attr("data-range-y2", p)), new L(this.ctx).setSelectionFilter(S, e, a), h.add(S), new Bt(this).handleBarDataLabels({
						x: d,
						y: u,
						y1: g,
						y2: p,
						i: n,
						j: a,
						series: f,
						realIndex: e,
						groupIndex: o,
						barHeight: x,
						barWidth: m,
						barXPosition: b,
						barYPosition: v,
						renderedPath: S,
						visibleSeries: A
					}));
				return null !== l.dataLabels && y.add(l.dataLabels), l.totalDataLabels && y.add(l.totalDataLabels), h.add(y), w && h.add(w), k && h.add(k), h
			}
		}, {
			key: "drawBarPaths",
			value: function(t) {
				var e, i, s, a, n = t.indexes,
					o = t.barHeight,
					r = t.strokeWidth,
					l = t.zeroW,
					c = (t.x, t.y),
					h = t.yDivision,
					t = t.elSeries,
					d = this.w,
					u = n.i,
					g = n.j,
					r = (d.globals.isXNumeric ? e = (c = (d.globals.seriesX[u][g] - d.globals.minX) / this.invertedXRatio - o) + o * this.visibleI : d.config.plotOptions.bar.hideZeroBarsWhenGrouped ? (a = s = 0, d.globals.seriesPercent.forEach(function(t, e) {
						t[g] && s++, e < u && 0 === t[g] && a++
					}), e = c + (o = 0 < s ? this.seriesLen * o / s : o) * this.visibleI, e -= o * a) : e = c + o * this.visibleI, this.isFunnel && (l -= (this.barHelpers.getXForValue(this.series[u][g], l) - l) / 2), i = this.barHelpers.getXForValue(this.series[u][g], l), this.barHelpers.getBarpaths({
						barYPosition: e,
						barHeight: o,
						x1: l,
						x2: i,
						strokeWidth: r,
						series: this.series,
						realIndex: n.realIndex,
						i: u,
						j: g,
						w: d
					}));
				return d.globals.isXNumeric || (c += h), this.barHelpers.barBackground({
					j: g,
					i: u,
					y1: e - o * this.visibleI,
					y2: o * this.seriesLen,
					elSeries: t
				}), {
					pathTo: r.pathTo,
					pathFrom: r.pathFrom,
					x1: l,
					x: i,
					y: c,
					goalX: this.barHelpers.getGoalValues("x", l, null, u, g),
					barYPosition: e,
					barHeight: o
				}
			}
		}, {
			key: "drawColumnPaths",
			value: function(t) {
				var e, i, s, a = t.indexes,
					n = t.x,
					o = (t.y, t.xDivision),
					r = t.barWidth,
					l = t.zeroH,
					c = t.strokeWidth,
					t = t.elSeries,
					h = this.w,
					d = a.realIndex,
					u = a.i,
					g = a.j,
					p = a.bc,
					a = (h.globals.isXNumeric ? (h.globals.seriesX[d = d].length || (d = h.globals.maxValsInArrayIndex), e = (n = h.globals.seriesX[d][g] ? (h.globals.seriesX[d][g] - h.globals.minX) / this.xRatio - r * this.seriesLen / 2 : n) + r * this.visibleI) : h.config.plotOptions.bar.hideZeroBarsWhenGrouped ? (s = i = 0, h.globals.seriesPercent.forEach(function(t, e) {
						t[g] && i++, e < u && 0 === t[g] && s++
					}), e = n + (r = 0 < i ? this.seriesLen * r / i : r) * this.visibleI, e -= r * s) : e = n + r * this.visibleI, d = this.barHelpers.getYForValue(this.series[u][g], l), this.barHelpers.getColumnPaths({
						barXPosition: e,
						barWidth: r,
						y1: l,
						y2: d,
						strokeWidth: c,
						series: this.series,
						realIndex: a.realIndex,
						i: u,
						j: g,
						w: h
					}));
				return h.globals.isXNumeric || (n += o), this.barHelpers.barBackground({
					bc: p,
					j: g,
					i: u,
					x1: e - c / 2 - r * this.visibleI,
					x2: r * this.seriesLen + c / 2,
					elSeries: t
				}), {
					pathTo: a.pathTo,
					pathFrom: a.pathFrom,
					x: n,
					y: d,
					goalY: this.barHelpers.getGoalValues("y", null, l, u, g),
					barXPosition: e,
					barWidth: r
				}
			}
		}, {
			key: "getPreviousPath",
			value: function(t, e) {
				for (var i, s = this.w, a = 0; a < s.globals.previousPaths.length; a++) {
					var n = s.globals.previousPaths[a];
					n.paths && 0 < n.paths.length && parseInt(n.realIndex, 10) === parseInt(t, 10) && void 0 !== s.globals.previousPaths[a].paths[e] && (i = s.globals.previousPaths[a].paths[e].d)
				}
				return i
			}
		}]), re),
		Vt = (e(c, E), lt = i(c), t(c, [{
			key: "draw",
			value: function(y, w) {
				var k = this,
					A = this.w,
					t = (this.graphics = new D(this.ctx), this.bar = new E(this.ctx, this.xyRatios), new I(this.ctx, A));
				y = t.getLogSeries(y), this.yRatio = t.getLogYRatios(this.yRatio), this.barHelpers.initVariables(y), "100%" === A.config.chart.stackType && (y = A.globals.seriesPercent.slice()), this.series = y, this.barHelpers.initializeStackedPrevVars(this);
				for (var C = this.graphics.group({
						class: "apexcharts-bar-series apexcharts-plot-series"
					}), S = 0, T = 0, e = 0, i = 0; e < y.length; e++, i++) ! function(i, t) {
					var e, s, a, n, o = -1,
						r = (k.groupCtx = k, A.globals.seriesGroups.forEach(function(t, e) {
							-1 < t.indexOf(A.config.series[i].name) && (o = e)
						}), -1 !== o && (k.groupCtx = k[A.globals.seriesGroups[o]]), []),
						l = [],
						c = A.globals.comboCharts ? w[i] : i,
						h = (1 < k.yRatio.length && (k.yaxisIndex = c), k.isReversed = A.config.yaxis[k.yaxisIndex] && A.config.yaxis[k.yaxisIndex].reversed, k.graphics.group({
							class: "apexcharts-series",
							seriesName: O.escapeString(A.globals.seriesNames[c]),
							rel: i + 1,
							"data:realIndex": c
						})),
						d = (k.ctx.series.addCollapsedClassToSeries(h, c), k.graphics.group({
							class: "apexcharts-datalabels",
							"data:realIndex": c
						})),
						u = k.graphics.group({
							class: "apexcharts-bar-goals-markers"
						}),
						g = 0,
						p = 0,
						f = k.initialPositions(S, T, void 0, void 0, void 0, void 0);
					T = f.y, g = f.barHeight, s = f.yDivision, n = f.zeroW, S = f.x, p = f.barWidth, e = f.xDivision, a = f.zeroH, k.barHelpers.initializeStackedXYVars(k), 1 === k.groupCtx.prevY.length && k.groupCtx.prevY[0].every(function(t) {
						return isNaN(t)
					}) && (k.groupCtx.prevY[0] = k.groupCtx.prevY[0].map(function(t) {
						return a
					}), k.groupCtx.prevYF[0] = k.groupCtx.prevYF[0].map(function(t) {
						return 0
					}));
					for (var x = 0; x < A.globals.dataPoints; x++) var m = k.barHelpers.getStrokeWidth(i, x, c),
						b = {
							indexes: {
								i: i,
								j: x,
								realIndex: c,
								bc: t
							},
							strokeWidth: m,
							x: S,
							y: T,
							elSeries: h,
							groupIndex: o,
							seriesGroup: A.globals.seriesGroups[o]
						},
						v = null,
						b = (k.isHorizontal ? (v = k.drawStackedBarPaths(P(P({}, b), {}, {
							zeroW: n,
							barHeight: g,
							yDivision: s
						})), p = k.series[i][x] / k.invertedYRatio) : (v = k.drawStackedColumnPaths(P(P({}, b), {}, {
							xDivision: e,
							barWidth: p,
							zeroH: a
						})), g = k.series[i][x] / k.yRatio[k.yaxisIndex]), k.barHelpers.drawGoalLine({
							barXPosition: v.barXPosition,
							barYPosition: v.barYPosition,
							goalX: v.goalX,
							goalY: v.goalY,
							barHeight: g,
							barWidth: p
						})),
						b = (b && u.add(b), T = v.y, S = v.x, r.push(S), l.push(T), k.barHelpers.getPathFillColor(y, i, x, c)),
						h = k.renderSeries({
							realIndex: c,
							pathFill: b,
							j: x,
							i: i,
							groupIndex: o,
							pathFrom: v.pathFrom,
							pathTo: v.pathTo,
							strokeWidth: m,
							elSeries: h,
							x: S,
							y: T,
							series: y,
							barHeight: g,
							barWidth: p,
							elDataLabelsWrap: d,
							elGoalsMarkers: u,
							type: "bar",
							visibleSeries: 0
						});
					A.globals.seriesXvalues[c] = r, A.globals.seriesYvalues[c] = l, k.groupCtx.prevY.push(k.groupCtx.yArrj), k.groupCtx.prevYF.push(k.groupCtx.yArrjF), k.groupCtx.prevYVal.push(k.groupCtx.yArrjVal), k.groupCtx.prevX.push(k.groupCtx.xArrj), k.groupCtx.prevXF.push(k.groupCtx.xArrjF), k.groupCtx.prevXVal.push(k.groupCtx.xArrjVal), C.add(h)
				}(e, i);
				return C
			}
		}, {
			key: "initialPositions",
			value: function(t, e, i, s, a, n) {
				var o, r, l = this.w;
				return this.isHorizontal ? (o = (o = s = l.globals.gridHeight / l.globals.dataPoints) * parseInt(l.config.plotOptions.bar.barHeight, 10) / 100, -1 === String(l.config.plotOptions.bar.barHeight).indexOf("%") && (o = parseInt(l.config.plotOptions.bar.barHeight, 10)), n = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (s - o) / 2) : (r = i = l.globals.gridWidth / l.globals.dataPoints, r = l.globals.isXNumeric && 1 < l.globals.dataPoints ? (i = l.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : r * parseInt(l.config.plotOptions.bar.columnWidth, 10) / 100, -1 === String(l.config.plotOptions.bar.columnWidth).indexOf("%") && (r = parseInt(l.config.plotOptions.bar.columnWidth, 10)), a = l.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? l.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = l.globals.padHorizontal + (i - r) / 2), {
					x: t,
					y: e,
					yDivision: s,
					xDivision: i,
					barHeight: null != (t = l.globals.seriesGroups) && t.length ? o / l.globals.seriesGroups.length : o,
					barWidth: null != (e = l.globals.seriesGroups) && e.length ? r / l.globals.seriesGroups.length : r,
					zeroH: a,
					zeroW: n
				}
			}
		}, {
			key: "drawStackedBarPaths",
			value: function(t) {
				for (var e = t.indexes, i = t.barHeight, s = t.strokeWidth, a = t.zeroW, n = (t.x, t.y), o = t.groupIndex, r = t.seriesGroup, l = t.yDivision, t = t.elSeries, c = this.w, o = n + (-1 !== o ? o * i : 0), h = e.i, d = e.j, u = 0, g = 0; g < this.groupCtx.prevXF.length; g++) u += this.groupCtx.prevXF[g][d];
				var p = h,
					p = 0 < (p = r ? r.indexOf(c.config.series[h].name) : p) ? (f = a, this.groupCtx.prevXVal[p - 1][d] < 0 ? f = 0 <= this.series[h][d] ? this.groupCtx.prevX[p - 1][d] + u - 2 * (this.isReversed ? u : 0) : this.groupCtx.prevX[p - 1][d] : 0 <= this.groupCtx.prevXVal[p - 1][d] && (f = 0 <= this.series[h][d] ? this.groupCtx.prevX[p - 1][d] : this.groupCtx.prevX[p - 1][d] - u + 2 * (this.isReversed ? u : 0)), f) : a,
					f = null === this.series[h][d] ? p : p + this.series[h][d] / this.invertedYRatio - 2 * (this.isReversed ? this.series[h][d] / this.invertedYRatio : 0),
					p = this.barHelpers.getBarpaths({
						barYPosition: o,
						barHeight: i,
						x1: p,
						x2: f,
						strokeWidth: s,
						series: this.series,
						realIndex: e.realIndex,
						seriesGroup: r,
						i: h,
						j: d,
						w: c
					});
				return this.barHelpers.barBackground({
					j: d,
					i: h,
					y1: o,
					y2: i,
					elSeries: t
				}), n += l, {
					pathTo: p.pathTo,
					pathFrom: p.pathFrom,
					goalX: this.barHelpers.getGoalValues("x", a, null, h, d),
					barYPosition: o,
					x: f,
					y: n
				}
			}
		}, {
			key: "drawStackedColumnPaths",
			value: function(t) {
				for (var e = t.indexes, i = t.x, s = (t.y, t.xDivision), a = t.barWidth, n = t.zeroH, o = t.groupIndex, r = t.seriesGroup, t = t.elSeries, l = this.w, c = e.i, h = e.j, d = e.bc, u = (i = l.globals.isXNumeric && (i = ((u = (u = l.globals.seriesX[c][h]) || 0) - l.globals.minX) / this.xRatio - a / 2, l.globals.seriesGroups.length) ? (u - l.globals.minX) / this.xRatio - a / 2 * l.globals.seriesGroups.length : i) + (-1 !== o ? o * a : 0), g = 0, p = 0; p < this.groupCtx.prevYF.length; p++) g += isNaN(this.groupCtx.prevYF[p][h]) ? 0 : this.groupCtx.prevYF[p][h];
				var f = c;
				if (0 < (f = r ? r.indexOf(l.config.series[c].name) : f) && !l.globals.isXNumeric || 0 < f && l.globals.isXNumeric && l.globals.seriesX[c - 1][h] === l.globals.seriesX[c][h]) {
					var x, m, b, v = Math.min(this.yRatio.length + 1, c + 1);
					if (void 0 !== this.groupCtx.prevY[f - 1] && this.groupCtx.prevY[f - 1].length)
						for (var y = 1; y < v; y++)
							if (!isNaN(null == (b = this.groupCtx.prevY[f - y]) ? void 0 : b[h])) {
								m = this.groupCtx.prevY[f - y][h];
								break
							} for (var w, k = 1; k < v; k++) {
						if ((null == (w = this.groupCtx.prevYVal[f - k]) ? void 0 : w[h]) < 0) {
							x = 0 <= this.series[c][h] ? m - g + 2 * (this.isReversed ? g : 0) : m;
							break
						}
						if (0 <= (null == (w = this.groupCtx.prevYVal[f - k]) ? void 0 : w[h])) {
							x = 0 <= this.series[c][h] ? m : m + g - 2 * (this.isReversed ? g : 0);
							break
						}
					}
					void 0 === x && (x = l.globals.gridHeight), A = null != (o = this.groupCtx.prevYF[0]) && o.every(function(t) {
						return 0 === t
					}) && this.groupCtx.prevYF.slice(1, f).every(function(t) {
						return t.every(function(t) {
							return isNaN(t)
						})
					}) ? n : x
				} else A = n;
				var o = this.series[c][h] ? A - this.series[c][h] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[c][h] / this.yRatio[this.yaxisIndex] : 0) : A,
					A = this.barHelpers.getColumnPaths({
						barXPosition: u,
						barWidth: a,
						y1: A,
						y2: o,
						yRatio: this.yRatio[this.yaxisIndex],
						strokeWidth: this.strokeWidth,
						series: this.series,
						seriesGroup: r,
						realIndex: e.realIndex,
						i: c,
						j: h,
						w: l
					});
				return this.barHelpers.barBackground({
					bc: d,
					j: h,
					i: c,
					x1: u,
					x2: a,
					elSeries: t
				}), i += s, {
					pathTo: A.pathTo,
					pathFrom: A.pathFrom,
					goalY: this.barHelpers.getGoalValues("y", null, n, c, h),
					barXPosition: u,
					x: l.globals.isXNumeric ? i - s : i,
					y: o
				}
			}
		}]), c),
		Gt = (e(l, E), rt = i(l), t(l, [{
			key: "draw",
			value: function(b, t, a) {
				var v = this,
					y = this.w,
					n = new D(this.ctx),
					t = y.globals.comboCharts ? t : y.config.chart.type,
					w = new C(this.ctx),
					e = (this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = y.config.plotOptions.bar.horizontal, new I(this.ctx, y));
				b = e.getLogSeries(b), this.series = b, this.yRatio = e.getLogYRatios(this.yRatio), this.barHelpers.initVariables(b);
				for (var k = n.group({
						class: "apexcharts-".concat(t, "-series apexcharts-plot-series")
					}), i = 0; i < b.length; i++) ! function(o) {
					v.isBoxPlot = "boxPlot" === y.config.chart.type || "boxPlot" === y.config.series[o].type;
					var r = void 0,
						l = void 0,
						e = [],
						i = [],
						c = y.globals.comboCharts ? a[o] : o,
						h = n.group({
							class: "apexcharts-series",
							seriesName: O.escapeString(y.globals.seriesNames[c]),
							rel: o + 1,
							"data:realIndex": c
						}),
						t = (v.ctx.series.addCollapsedClassToSeries(h, c), 0 < b[o].length && (v.visibleI = v.visibleI + 1), 1 < v.yRatio.length && (v.yaxisIndex = c), v.barHelpers.initialPositions()),
						l = t.y,
						d = t.barHeight,
						u = t.yDivision,
						g = t.zeroW,
						r = t.x,
						p = t.barWidth,
						f = t.xDivision,
						x = t.zeroH;
					i.push(r + p / 2);
					for (var m = n.group({
							class: "apexcharts-datalabels",
							"data:realIndex": c
						}), s = 0; s < y.globals.dataPoints; s++) ! function(s) {
						var a = v.barHelpers.getStrokeWidth(o, s, c),
							n = null,
							t = {
								indexes: {
									i: o,
									j: s,
									realIndex: c
								},
								x: r,
								y: l,
								strokeWidth: a,
								elSeries: h
							},
							n = v.isHorizontal ? v.drawHorizontalBoxPaths(P(P({}, t), {}, {
								yDivision: u,
								barHeight: d,
								zeroW: g
							})) : v.drawVerticalBoxPaths(P(P({}, t), {}, {
								xDivision: f,
								barWidth: p,
								zeroH: x
							}));
						l = n.y, r = n.x, 0 < s && i.push(r + p / 2), e.push(l), n.pathTo.forEach(function(t, e) {
							var i = !v.isBoxPlot && v.candlestickOptions.wick.useFillColor ? n.color[e] : y.globals.stroke.colors[o],
								e = w.fillPath({
									seriesNumber: c,
									dataPointIndex: s,
									color: n.color[e],
									value: b[o][s]
								});
							v.renderSeries({
								realIndex: c,
								pathFill: e,
								lineFill: i,
								j: s,
								i: o,
								pathFrom: n.pathFrom,
								pathTo: t,
								strokeWidth: a,
								elSeries: h,
								x: r,
								y: l,
								series: b,
								barHeight: d,
								barWidth: p,
								elDataLabelsWrap: m,
								visibleSeries: v.visibleI,
								type: y.config.chart.type
							})
						})
					}(s);
					y.globals.seriesXvalues[c] = i, y.globals.seriesYvalues[c] = e, k.add(h)
				}(i);
				return k
			}
		}, {
			key: "drawVerticalBoxPaths",
			value: function(t) {
				var e = t.indexes,
					i = t.x,
					s = (t.y, t.xDivision),
					a = t.barWidth,
					n = t.zeroH,
					t = t.strokeWidth,
					o = this.w,
					r = new D(this.ctx),
					l = e.i,
					c = e.j,
					h = !0,
					d = o.config.plotOptions.candlestick.colors.upward,
					u = o.config.plotOptions.candlestick.colors.downward,
					g = "",
					p = (this.isBoxPlot && (g = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]), this.yRatio[this.yaxisIndex]),
					e = e.realIndex,
					f = this.getOHLCValue(e, c),
					x = n,
					m = n,
					b = (f.o > f.c && (h = !1), Math.min(f.o, f.c)),
					v = Math.max(f.o, f.c),
					y = f.m,
					w = (i = o.globals.isXNumeric ? (o.globals.seriesX[e][c] - o.globals.minX) / this.xRatio - a / 2 : i) + a * this.visibleI,
					l = (void 0 === this.series[l][c] || null === this.series[l][c] ? v = b = n : (b = n - b / p, v = n - v / p, x = n - f.h / p, m = n - f.l / p, y = n - f.m / p), r.move(w, n), r.move(w + a / 2, b));
				return 0 < o.globals.previousPaths.length && (l = this.getPreviousPath(e, c, !0)), f = this.isBoxPlot ? [r.move(w, b) + r.line(w + a / 2, b) + r.line(w + a / 2, x) + r.line(w + a / 4, x) + r.line(w + a - a / 4, x) + r.line(w + a / 2, x) + r.line(w + a / 2, b) + r.line(w + a, b) + r.line(w + a, y) + r.line(w, y) + r.line(w, b + t / 2), r.move(w, y) + r.line(w + a, y) + r.line(w + a, v) + r.line(w + a / 2, v) + r.line(w + a / 2, m) + r.line(w + a - a / 4, m) + r.line(w + a / 4, m) + r.line(w + a / 2, m) + r.line(w + a / 2, v) + r.line(w, v) + r.line(w, y) + "z"] : [r.move(w, v) + r.line(w + a / 2, v) + r.line(w + a / 2, x) + r.line(w + a / 2, v) + r.line(w + a, v) + r.line(w + a, b) + r.line(w + a / 2, b) + r.line(w + a / 2, m) + r.line(w + a / 2, b) + r.line(w, b) + r.line(w, v - t / 2)], l += r.move(w, b), o.globals.isXNumeric || (i += s), {
					pathTo: f,
					pathFrom: l,
					x: i,
					y: v,
					barXPosition: w,
					color: this.isBoxPlot ? g : h ? [d] : [u]
				}
			}
		}, {
			key: "drawHorizontalBoxPaths",
			value: function(t) {
				var e = t.indexes,
					i = (t.x, t.y),
					s = t.yDivision,
					a = t.barHeight,
					n = t.zeroW,
					t = t.strokeWidth,
					o = this.w,
					r = new D(this.ctx),
					l = e.i,
					c = e.j,
					h = this.boxOptions.colors.lower,
					d = (this.isBoxPlot && (h = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]), this.invertedYRatio),
					e = e.realIndex,
					u = this.getOHLCValue(e, c),
					g = n,
					p = n,
					f = Math.min(u.o, u.c),
					x = Math.max(u.o, u.c),
					m = u.m,
					b = (i = o.globals.isXNumeric ? (o.globals.seriesX[e][c] - o.globals.minX) / this.invertedXRatio - a / 2 : i) + a * this.visibleI,
					l = (void 0 === this.series[l][c] || null === this.series[l][c] ? x = f = n : (f = n + f / d, x = n + x / d, g = n + u.h / d, p = n + u.l / d, m = n + u.m / d), r.move(n, b), r.move(f, b + a / 2));
				return 0 < o.globals.previousPaths.length && (l = this.getPreviousPath(e, c, !0)), u = [r.move(f, b) + r.line(f, b + a / 2) + r.line(g, b + a / 2) + r.line(g, b + a / 2 - a / 4) + r.line(g, b + a / 2 + a / 4) + r.line(g, b + a / 2) + r.line(f, b + a / 2) + r.line(f, b + a) + r.line(m, b + a) + r.line(m, b) + r.line(f + t / 2, b), r.move(m, b) + r.line(m, b + a) + r.line(x, b + a) + r.line(x, b + a / 2) + r.line(p, b + a / 2) + r.line(p, b + a - a / 4) + r.line(p, b + a / 4) + r.line(p, b + a / 2) + r.line(x, b + a / 2) + r.line(x, b) + r.line(m, b) + "z"], l += r.move(f, b), o.globals.isXNumeric || (i += s), {
					pathTo: u,
					pathFrom: l,
					x: x,
					y: i,
					barYPosition: b,
					color: h
				}
			}
		}, {
			key: "getOHLCValue",
			value: function(t, e) {
				var i = this.w;
				return {
					o: (this.isBoxPlot ? i.globals.seriesCandleH : i.globals.seriesCandleO)[t][e],
					h: (this.isBoxPlot ? i.globals.seriesCandleO : i.globals.seriesCandleH)[t][e],
					m: i.globals.seriesCandleM[t][e],
					l: (this.isBoxPlot ? i.globals.seriesCandleC : i.globals.seriesCandleL)[t][e],
					c: (this.isBoxPlot ? i.globals.seriesCandleL : i.globals.seriesCandleC)[t][e]
				}
			}
		}]), l),
		qt = (t(oe, [{
			key: "checkColorRange",
			value: function() {
				var t = this.w,
					i = !1,
					t = t.config.plotOptions[t.config.chart.type];
				return 0 < t.colorScale.ranges.length && t.colorScale.ranges.map(function(t, e) {
					t.from <= 0 && (i = !0)
				}), i
			}
		}, {
			key: "getShadeColor",
			value: function(t, e, i, s) {
				var a = this.w,
					n = 1,
					o = a.config.plotOptions[t].shadeIntensity,
					e = this.determineColor(t, e, i),
					i = (a.globals.hasNegs || s ? n = a.config.plotOptions[t].reverseNegativeShade ? e.percent < 0 ? e.percent / 100 * (1.25 * o) : (1 - e.percent / 100) * (1.25 * o) : e.percent <= 0 ? 1 - (1 + e.percent / 100) * o : (1 - e.percent / 100) * o : (n = 1 - e.percent / 100, "treemap" === t && (n = (1 - e.percent / 100) * (1.25 * o))), e.color),
					s = new O;
				return {
					color: i = a.config.plotOptions[t].enableShades ? "dark" === this.w.config.theme.mode ? O.hexToRgba(s.shadeColor(-1 * n, e.color), a.config.fill.opacity) : O.hexToRgba(s.shadeColor(n, e.color), a.config.fill.opacity) : i,
					colorProps: e
				}
			}
		}, {
			key: "determineColor",
			value: function(t, e, i) {
				var s = this.w,
					a = s.globals.series[e][i],
					n = s.config.plotOptions[t],
					o = n.colorScale.inverse ? i : e,
					r = (n.distributed && "treemap" === s.config.chart.type && (o = i), s.globals.colors[o]),
					l = null,
					c = Math.min.apply(Math, b(s.globals.series[e])),
					h = Math.max.apply(Math, b(s.globals.series[e])),
					i = (n.distributed || "heatmap" !== t || (c = s.globals.minY, h = s.globals.maxY), void 0 !== n.colorScale.min && (c = n.colorScale.min < s.globals.minY ? n.colorScale.min : s.globals.minY, h = n.colorScale.max > s.globals.maxY ? n.colorScale.max : s.globals.maxY), Math.abs(h) + Math.abs(c)),
					d = 100 * a / (0 === i ? i - 1e-6 : i);
				return 0 < n.colorScale.ranges.length && n.colorScale.ranges.map(function(t, e) {
					a >= t.from && a <= t.to && (r = t.color, l = t.foreColor || null, c = t.from, h = t.to, t = Math.abs(h) + Math.abs(c), d = 100 * a / (0 === t ? t - 1e-6 : t))
				}), {
					color: r,
					foreColor: l,
					percent: d
				}
			}
		}, {
			key: "calculateDataLabels",
			value: function(t) {
				var e, i = t.text,
					s = t.x,
					a = t.y,
					n = t.i,
					o = t.j,
					r = t.colorProps,
					t = t.fontSize,
					l = this.w.config.dataLabels,
					c = new D(this.ctx),
					h = new k(this.ctx),
					d = null;
				return l.enabled && (d = c.group({
					class: "apexcharts-data-labels"
				}), c = l.offsetX, e = l.offsetY, s = s + c, c = a + parseFloat(l.style.fontSize) / 3 + e, h.plotDataLabelsText({
					x: s,
					y: c,
					text: i,
					i: n,
					j: o,
					color: r.foreColor,
					parent: d,
					fontSize: t,
					dataLabelsConfig: l
				})), d
			}
		}, {
			key: "addListeners",
			value: function(t) {
				var e = new D(this.ctx);
				t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t))
			}
		}]), oe),
		Ut = (t(ne, [{
			key: "draw",
			value: function(t) {
				var e = this.w,
					i = new D(this.ctx),
					s = i.group({
						class: "apexcharts-heatmap"
					}),
					a = (s.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")")), e.globals.gridWidth / e.globals.dataPoints),
					n = e.globals.gridHeight / e.globals.series.length,
					o = 0,
					r = !1,
					l = (this.negRange = this.helpers.checkColorRange(), t.slice());
				e.config.yaxis[0].reversed && (r = !0, l.reverse());
				for (var c = r ? 0 : l.length - 1; r ? c < l.length : 0 <= c; r ? c++ : c--) {
					var h, d = i.group({
						class: "apexcharts-series apexcharts-heatmap-series",
						seriesName: O.escapeString(e.globals.seriesNames[c]),
						rel: c + 1,
						"data:realIndex": c
					});
					this.ctx.series.addCollapsedClassToSeries(d, c), e.config.chart.dropShadow.enabled && (h = e.config.chart.dropShadow, new L(this.ctx).dropShadow(d, h, c));
					for (var u = 0, g = e.config.plotOptions.heatmap.shadeIntensity, p = 0; p < l[c].length; p++) {
						var f, x = this.helpers.getShadeColor(e.config.chart.type, c, p, this.negRange),
							m = x.color,
							x = x.colorProps,
							b = ("image" === e.config.fill.type && (m = new C(this.ctx).fillPath({
								seriesNumber: c,
								dataPointIndex: p,
								opacity: e.globals.hasNegs ? x.percent < 0 ? 1 - (1 + x.percent / 100) : g + x.percent / 100 : x.percent / 100,
								patternID: O.randomId(),
								width: e.config.fill.image.width || a,
								height: e.config.fill.image.height || n
							})), this.rectRadius),
							b = i.drawRect(u, o, a, n, b),
							b = (b.attr({
								cx: u,
								cy: o
							}), b.node.classList.add("apexcharts-heatmap-rect"), d.add(b), b.attr({
								fill: m,
								i: c,
								index: c,
								j: p,
								val: l[c][p],
								"stroke-width": this.strokeWidth,
								stroke: e.config.plotOptions.heatmap.useFillColorAsStroke ? m : e.globals.stroke.colors[0],
								color: m
							}), this.helpers.addListeners(b), e.config.chart.animations.enabled && !e.globals.dataChanged && (f = 1, e.globals.resized || (f = e.config.chart.animations.speed), this.animateHeatMap(b, u, o, a, n, f)), e.globals.dataChanged && (f = 1, this.dynamicAnim.enabled) && e.globals.shouldAnimate && (f = this.dynamicAnim.speed, v = (v = e.globals.previousPaths[c] && e.globals.previousPaths[c][p] && e.globals.previousPaths[c][p].color) || "rgba(255, 255, 255, 0)", this.animateHeatColor(b, O.isColorHex(v) ? v : O.rgb2hex(v), O.isColorHex(m) ? m : O.rgb2hex(m), f)), (0, e.config.dataLabels.formatter)(e.globals.series[c][p], {
								value: e.globals.series[c][p],
								seriesIndex: c,
								dataPointIndex: p,
								w: e
							})),
							v = this.helpers.calculateDataLabels({
								text: b,
								x: u + a / 2,
								y: o + n / 2,
								i: c,
								j: p,
								colorProps: x,
								series: l
							});
						null !== v && d.add(v), u += a
					}
					o += n, s.add(d)
				}
				t = e.globals.yAxisScale[0].result.slice(), e.config.yaxis[0].reversed ? t.unshift("") : t.push(""), e.globals.yAxisScale[0].result = t, t = e.globals.gridHeight / e.globals.series.length;
				return e.config.yaxis[0].labels.offsetY = -t / 2, s
			}
		}, {
			key: "animateHeatMap",
			value: function(t, e, i, s, a, n) {
				var o = new A(this.ctx);
				o.animateRect(t, {
					x: e + s / 2,
					y: i + a / 2,
					width: 0,
					height: 0
				}, {
					x: e,
					y: i,
					width: s,
					height: a
				}, n, function() {
					o.animationCompleted(t)
				})
			}
		}, {
			key: "animateHeatColor",
			value: function(t, e, i, s) {
				t.attr({
					fill: e
				}).animate(s).attr({
					fill: i
				})
			}
		}]), ne),
		Zt = (t(ae, [{
			key: "drawYAxisTexts",
			value: function(t, e, i, s) {
				var a = this.w,
					n = a.config.yaxis[0],
					a = a.globals.yLabelFormatters[0];
				return new D(this.ctx).drawText({
					x: t + n.labels.offsetX,
					y: e + n.labels.offsetY,
					text: a(s, i),
					textAnchor: "middle",
					fontSize: n.labels.style.fontSize,
					fontFamily: n.labels.style.fontFamily,
					foreColor: Array.isArray(n.labels.style.colors) ? n.labels.style.colors[i] : n.labels.style.colors
				})
			}
		}]), ae),
		$t = (t(se, [{
			key: "draw",
			value: function(t) {
				var e = this,
					i = this.w,
					s = new D(this.ctx);
				if (this.ret = s.group({
						class: "apexcharts-pie"
					}), !i.globals.noData) {
					for (var a = 0, n = 0; n < t.length; n++) a += O.negToZero(t[n]);
					var o = [],
						r = s.group();
					0 === a && (a = 1e-5), t.forEach(function(t) {
						e.maxY = Math.max(e.maxY, t)
					}), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), "back" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret);
					for (var l = 0; l < t.length; l++) {
						var c = this.fullAngle * O.negToZero(t[l]) / a;
						o.push(c), "polarArea" === this.chartType ? (o[l] = this.fullAngle / t.length, this.sliceSizes.push(i.globals.radialSize * t[l] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize)
					}
					if (i.globals.dataChanged) {
						for (var h, d = 0, u = 0; u < i.globals.previousPaths.length; u++) d += O.negToZero(i.globals.previousPaths[u]);
						for (var g = 0; g < i.globals.previousPaths.length; g++) h = this.fullAngle * O.negToZero(i.globals.previousPaths[g]) / d, this.prevSectorAngleArr.push(h)
					}
					this.donutSize < 0 && (this.donutSize = 0);
					var p = i.config.plotOptions.pie.customScale,
						f = i.globals.gridWidth / 2,
						x = i.globals.gridHeight / 2,
						f = f - i.globals.gridWidth / 2 * p,
						x = x - i.globals.gridHeight / 2 * p,
						m = ("donut" === this.chartType && ((s = s.drawCircle(this.donutSize)).attr({
							cx: this.centerX,
							cy: this.centerY,
							fill: i.config.plotOptions.pie.donut.background || "transparent"
						}), r.add(s)), this.drawArcs(o, t));
					this.sliceLabels.forEach(function(t) {
						m.add(t)
					}), r.attr({
						transform: "translate(".concat(f, ", ").concat(x, ") scale(").concat(p, ")")
					}), r.add(m), this.ret.add(r), this.donutDataLabels.show && (s = this.renderInnerDataLabels(this.donutDataLabels, {
						hollowSize: this.donutSize,
						centerX: this.centerX,
						centerY: this.centerY,
						opacity: this.donutDataLabels.show,
						translateX: f,
						translateY: x
					}), this.ret.add(s)), "front" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret)
				}
				return this.ret
			}
		}, {
			key: "drawArcs",
			value: function(t, e) {
				var i = this.w,
					s = new L(this.ctx),
					a = new D(this.ctx),
					n = new C(this.ctx),
					o = a.group({
						class: "apexcharts-slices"
					}),
					r = (this.initialAngle, this.initialAngle, this.initialAngle),
					l = this.initialAngle;
				this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
				for (var c = 0; c < t.length; c++) {
					var h, d, u = a.group({
							class: "apexcharts-series apexcharts-pie-series",
							seriesName: O.escapeString(i.globals.seriesNames[c]),
							rel: c + 1,
							"data:realIndex": c
						}),
						g = (o.add(u), d = l, r = (h = r) + t[c], l = d + this.prevSectorAngleArr[c], r < h ? this.fullAngle + r - h : r - h),
						p = n.fillPath({
							seriesNumber: c,
							size: this.sliceSizes[c],
							value: e[c]
						}),
						f = this.getChangedPath(d, l),
						f = a.drawPath({
							d: f,
							stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[c] : this.lineColorArr,
							strokeWidth: 0,
							fill: p,
							fillOpacity: i.config.fill.opacity,
							classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(c)
						}),
						p = (f.attr({
							index: 0,
							j: c
						}), s.setSelectionFilter(f, 0, c), i.config.chart.dropShadow.enabled && (p = i.config.chart.dropShadow, s.dropShadow(f, p, c)), this.addListeners(f, this.donutDataLabels), D.setAttrs(f.node, {
							"data:angle": g,
							"data:startAngle": h,
							"data:strokeWidth": this.strokeWidth,
							"data:value": e[c]
						}), {
							x: 0,
							y: 0
						}),
						u = ("pie" === this.chartType || "polarArea" === this.chartType ? p = O.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (h + g / 2) % this.fullAngle) : "donut" === this.chartType && (p = O.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (h + g / 2) % this.fullAngle)), u.add(f), 0);
					!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (0 == (u = g / this.fullAngle * i.config.chart.animations.speed) && (u = 1), this.animDur = u + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(f, {
						size: this.sliceSizes[c],
						endAngle: r,
						startAngle: h,
						prevStartAngle: d,
						prevEndAngle: l,
						animateStartingPos: !0,
						i: c,
						animBeginArr: this.animBeginArr,
						shouldSetPrevPaths: !0,
						dur: i.config.chart.animations.dynamicAnimation.speed
					}) : this.animatePaths(f, {
						size: this.sliceSizes[c],
						endAngle: r,
						startAngle: h,
						i: c,
						totalItems: t.length - 1,
						animBeginArr: this.animBeginArr,
						dur: u
					}), i.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && f.click(this.pieClicked.bind(this, c)), void 0 !== i.globals.selectedDataPoints[0] && -1 < i.globals.selectedDataPoints[0].indexOf(c) && this.pieClicked(c), i.config.dataLabels.enabled && (d = p.x, h = p.y, u = 100 * g / this.fullAngle + "%", 0 != g) && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[c] && (void 0 !== (f = i.config.dataLabels.formatter) && (u = f(i.globals.seriesPercent[c][0], {
						seriesIndex: c,
						w: i
					})), p = i.globals.dataLabels.style.colors[c], g = a.group({
						class: "apexcharts-datalabels"
					}), f = a.drawText({
						x: d,
						y: h,
						text: u,
						textAnchor: "middle",
						fontSize: i.config.dataLabels.style.fontSize,
						fontFamily: i.config.dataLabels.style.fontFamily,
						fontWeight: i.config.dataLabels.style.fontWeight,
						foreColor: p
					}), g.add(f), i.config.dataLabels.dropShadow.enabled && (d = i.config.dataLabels.dropShadow, s.dropShadow(f, d)), f.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized && (f.node.classList.add("apexcharts-pie-label-delay"), f.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(g))
				}
				return o
			}
		}, {
			key: "addListeners",
			value: function(t, e) {
				var i = new D(this.ctx);
				t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e)))
			}
		}, {
			key: "animatePaths",
			value: function(t, e) {
				var i = this.w,
					s = e.endAngle < e.startAngle ? this.fullAngle + e.endAngle - e.startAngle : e.endAngle - e.startAngle,
					a = s,
					n = e.startAngle,
					o = e.startAngle;
				void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (n = e.prevEndAngle, a = e.prevEndAngle < e.prevStartAngle ? this.fullAngle + e.prevEndAngle - e.prevStartAngle : e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (s + o > this.fullAngle ? e.endAngle = e.endAngle - (s + o) : s + o < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (s + o)))), s === this.fullAngle && (s = this.fullAngle - .01), this.animateArc(t, n, o, s, a, e)
			}
		}, {
			key: "animateArc",
			value: function(e, i, s, a, n, o) {
				var r, l = this,
					t = this.w,
					c = new A(this.ctx),
					h = o.size,
					d = ((isNaN(i) || isNaN(n)) && (i = s, n = a, o.dur = 0), a),
					u = s,
					g = i < s ? this.fullAngle + i - s : i - s;
				t.globals.dataChanged && o.shouldSetPrevPaths && o.prevEndAngle && (r = l.getPiePath({
					me: l,
					startAngle: o.prevStartAngle,
					angle: o.prevEndAngle < o.prevStartAngle ? this.fullAngle + o.prevEndAngle - o.prevStartAngle : o.prevEndAngle - o.prevStartAngle,
					size: h
				}), e.attr({
					d: r
				})), 0 !== o.dur ? e.animate(o.dur, t.globals.easing, o.animBeginArr[o.i]).afterAll(function() {
					"pie" !== l.chartType && "donut" !== l.chartType && "polarArea" !== l.chartType || this.animate(t.config.chart.animations.dynamicAnimation.speed).attr({
						"stroke-width": l.strokeWidth
					}), o.i === t.config.series.length - 1 && c.animationCompleted(e)
				}).during(function(t) {
					d = g + (a - g) * t, o.animateStartingPos && (d = n + (a - n) * t, u = i - n + (s - (i - n)) * t), r = l.getPiePath({
						me: l,
						startAngle: u,
						angle: d,
						size: h
					}), e.node.setAttribute("data:pathOrig", r), e.attr({
						d: r
					})
				}) : (r = l.getPiePath({
					me: l,
					startAngle: u,
					angle: a,
					size: h
				}), o.isTrack || (t.globals.animationEnded = !0), e.node.setAttribute("data:pathOrig", r), e.attr({
					d: r,
					"stroke-width": l.strokeWidth
				}))
			}
		}, {
			key: "pieClicked",
			value: function(t) {
				var e, i = this.w,
					s = this.sliceSizes[t] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0),
					t = i.globals.dom.Paper.select(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(t)).members[0];
				"true" !== t.attr("data:pieClicked") ? (i = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), Array.prototype.forEach.call(i, function(t) {
					t.setAttribute("data:pieClicked", "false");
					var e = t.getAttribute("data:pathOrig");
					e && t.setAttribute("d", e)
				}), t.attr("data:pieClicked", "true"), i = parseInt(t.attr("data:startAngle"), 10), e = parseInt(t.attr("data:angle"), 10), i = this.getPiePath({
					me: this,
					startAngle: i,
					angle: e,
					size: s
				}), 360 !== e && t.plot(i)) : (t.attr({
					"data:pieClicked": "false"
				}), this.revertDataLabelsInner(t.node, this.donutDataLabels), s = t.attr("data:pathOrig"), t.attr({
					d: s
				}))
			}
		}, {
			key: "getChangedPath",
			value: function(t, e) {
				var i = "";
				return i = this.dynamicAnim && this.w.globals.dataChanged ? this.getPiePath({
					me: this,
					startAngle: t,
					angle: e - t,
					size: this.size
				}) : i
			}
		}, {
			key: "getPiePath",
			value: function(t) {
				var e = t.me,
					i = t.startAngle,
					s = t.angle,
					t = t.size,
					a = i,
					n = Math.PI * (a - 90) / 180,
					i = s + i,
					o = (Math.ceil(i) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (i = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - .01), Math.ceil(i) > this.fullAngle && (i -= this.fullAngle), Math.PI * (i - 90) / 180),
					r = e.centerX + t * Math.cos(n),
					n = e.centerY + t * Math.sin(n),
					l = e.centerX + t * Math.cos(o),
					o = e.centerY + t * Math.sin(o),
					i = O.polarToCartesian(e.centerX, e.centerY, e.donutSize, i),
					a = O.polarToCartesian(e.centerX, e.centerY, e.donutSize, a),
					s = 180 < s ? 1 : 0,
					t = ["M", r, n, "A", t, t, 0, s, 1, l, o];
				return ("donut" === e.chartType ? [].concat(t, ["L", i.x, i.y, "A", e.donutSize, e.donutSize, 0, s, 0, a.x, a.y, "L", r, n, "z"]) : "pie" === e.chartType || "polarArea" === e.chartType ? [].concat(t, ["L", e.centerX, e.centerY, "L", r, n]) : [].concat(t)).join(" ")
			}
		}, {
			key: "drawPolarElements",
			value: function(t) {
				var e = this.w,
					i = new x(this.ctx),
					s = new D(this.ctx),
					a = new Zt(this.ctx),
					n = s.group(),
					o = s.group(),
					i = i.niceScale(0, Math.ceil(this.maxY), e.config.yaxis[0].tickAmount, 0, !0),
					r = i.result.reverse(),
					l = i.result.length;
				this.maxY = i.niceMax;
				for (var c = e.globals.radialSize, h = c / (l - 1), d = 0; d < l - 1; d++) {
					var u, g = s.drawCircle(c);
					g.attr({
						cx: this.centerX,
						cy: this.centerY,
						fill: "none",
						"stroke-width": e.config.plotOptions.polarArea.rings.strokeWidth,
						stroke: e.config.plotOptions.polarArea.rings.strokeColor
					}), e.config.yaxis[0].show && (u = a.drawYAxisTexts(this.centerX, this.centerY - c + parseInt(e.config.yaxis[0].labels.style.fontSize, 10) / 2, d, r[d]), o.add(u)), n.add(g), c -= h
				}
				this.drawSpokes(t), t.add(n), t.add(o)
			}
		}, {
			key: "renderInnerDataLabels",
			value: function(t, e) {
				var i = this.w,
					s = new D(this.ctx),
					a = s.group({
						class: "apexcharts-datalabels-group",
						transform: "translate(".concat(e.translateX || 0, ", ").concat(e.translateY || 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")")
					}),
					n = t.total.show;
				a.node.style.opacity = e.opacity;
				var o = e.centerX,
					e = e.centerY,
					r = void 0 === t.name.color ? i.globals.colors[0] : t.name.color,
					l = t.name.fontSize,
					c = t.name.fontFamily,
					h = t.name.fontWeight,
					d = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color,
					u = t.value.formatter,
					g = "",
					p = "";
				return n ? (r = t.total.color, l = t.total.fontSize, c = t.total.fontFamily, h = t.total.fontWeight, p = t.total.label, g = t.total.formatter(i)) : 1 === i.globals.series.length && (g = u(i.globals.series[0], i), p = i.globals.seriesNames[0]), p = p && t.name.formatter(p, t.total.show, i), t.name.show && ((n = s.drawText({
					x: o,
					y: e + parseFloat(t.name.offsetY),
					text: p,
					textAnchor: "middle",
					foreColor: r,
					fontSize: l,
					fontWeight: h,
					fontFamily: c
				})).node.classList.add("apexcharts-datalabel-label"), a.add(n)), t.value.show && (u = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, (i = s.drawText({
					x: o,
					y: e + u,
					text: g,
					textAnchor: "middle",
					foreColor: d,
					fontWeight: t.value.fontWeight,
					fontSize: t.value.fontSize,
					fontFamily: t.value.fontFamily
				})).node.classList.add("apexcharts-datalabel-value"), a.add(i)), a
			}
		}, {
			key: "printInnerLabels",
			value: function(t, e, i, s) {
				var a, n = this.w,
					o = (s ? a = void 0 === t.name.color ? n.globals.colors[parseInt(s.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : 1 < n.globals.series.length && t.total.show && (a = t.total.color), n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label")),
					r = n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value"),
					s = (i = (0, t.value.formatter)(i, n), s || "function" != typeof t.total.formatter || (i = t.total.formatter(n)), e === t.total.label);
				e = t.name.formatter(e, s, n), null !== o && (o.textContent = e), null !== r && (r.textContent = i), null !== o && (o.style.fill = a)
			}
		}, {
			key: "printDataLabelsInner",
			value: function(t, e) {
				var i = this.w,
					s = t.getAttribute("data:value"),
					a = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1],
					e = (1 < i.globals.series.length && this.printInnerLabels(e, a, s, t), i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"));
				null !== e && (e.style.opacity = 1)
			}
		}, {
			key: "drawSpokes",
			value: function(i) {
				var s = this,
					t = this.w,
					a = new D(this.ctx),
					n = t.config.plotOptions.polarArea.spokes;
				if (0 !== n.strokeWidth) {
					for (var e = [], o = 360 / t.globals.series.length, r = 0; r < t.globals.series.length; r++) e.push(O.polarToCartesian(this.centerX, this.centerY, t.globals.radialSize, t.config.plotOptions.pie.startAngle + o * r));
					e.forEach(function(t, e) {
						t = a.drawLine(t.x, t.y, s.centerX, s.centerY, Array.isArray(n.connectorColors) ? n.connectorColors[e] : n.connectorColors);
						i.add(t)
					})
				}
			}
		}, {
			key: "revertDataLabelsInner",
			value: function(t, s, e) {
				function i(t) {
					var e = t.makeSliceOut,
						i = t.printLabel;
					Array.prototype.forEach.call(c, function(t) {
						"true" === t.getAttribute("data:pieClicked") && (e && (l = !0), i) && n.printDataLabelsInner(t, s)
					})
				}
				var a, n = this,
					o = this.w,
					r = o.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),
					l = !1,
					c = o.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
				i({
					makeSliceOut: !0,
					printLabel: !1
				}), s.total.show && 1 < o.globals.series.length ? l && !s.total.showAlways ? i({
					makeSliceOut: !1,
					printLabel: !0
				}) : this.printInnerLabels(s, s.total.label, s.total.formatter(o)) : (i({
					makeSliceOut: !1,
					printLabel: !0
				}), l || (o.globals.selectedDataPoints.length && 1 < o.globals.series.length ? 0 < o.globals.selectedDataPoints[0].length ? (a = o.globals.selectedDataPoints[0], a = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(a)), this.printDataLabelsInner(a, s)) : r && o.globals.selectedDataPoints.length && 0 === o.globals.selectedDataPoints[0].length && (r.style.opacity = 0) : r && 1 < o.globals.series.length && (r.style.opacity = 0)))
			}
		}]), se),
		Qt = (t(ie, [{
			key: "draw",
			value: function(t) {
				var d, u, g = this,
					p = this.w,
					f = new C(this.ctx),
					x = [],
					m = new k(this.ctx),
					e = (t.length && (this.dataPointsLen = t[p.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen, p.globals.gridWidth / 2),
					i = p.globals.gridHeight / 2,
					e = e + p.config.plotOptions.radar.offsetX,
					i = i + p.config.plotOptions.radar.offsetY,
					s = this.graphics.group({
						class: "apexcharts-radar-series apexcharts-plot-series",
						transform: "translate(".concat(e || 0, ", ").concat(i || 0, ")")
					}),
					b = null;
				return this.yaxisLabels = this.graphics.group({
					class: "apexcharts-yaxis"
				}), t.forEach(function(t, a) {
					var e = t.length === p.globals.dataPoints,
						n = g.graphics.group().attr({
							class: "apexcharts-series",
							"data:longestSeries": e,
							seriesName: O.escapeString(p.globals.seriesNames[a]),
							rel: a + 1,
							"data:realIndex": a
						}),
						i = (g.dataRadiusOfPercent[a] = [], g.dataRadius[a] = [], g.angleArr[a] = [], t.forEach(function(t, e) {
							var i = Math.abs(g.maxValue - g.minValue);
							t += Math.abs(g.minValue), g.isLog && (t = g.coreUtils.getLogVal(t, 0)), g.dataRadiusOfPercent[a][e] = t / i, g.dataRadius[a][e] = g.dataRadiusOfPercent[a][e] * g.size, g.angleArr[a][e] = e * g.disAngle
						}), d = g.getDataPointsPos(g.dataRadius[a], g.angleArr[a]), g.createPaths(d, {
							x: 0,
							y: 0
						})),
						s = (b = g.graphics.group({
							class: "apexcharts-series-markers-wrap apexcharts-element-hidden"
						}), u = g.graphics.group({
							class: "apexcharts-datalabels",
							"data:realIndex": a
						}), p.globals.delayedElements.push({
							el: b.node,
							index: a
						}), {
							i: a,
							realIndex: a,
							animationDelay: a,
							initialSpeed: p.config.chart.animations.speed,
							dataChangeSpeed: p.config.chart.animations.dynamicAnimation.speed,
							className: "apexcharts-radar",
							shouldClipToGrid: !1,
							bindEventsOnPaths: !1,
							stroke: p.globals.stroke.colors[a],
							strokeLineCap: p.config.stroke.lineCap
						}),
						o = null;
					0 < p.globals.previousPaths.length && (o = g.getPreviousPath(a));
					for (var r = 0; r < i.linePathsTo.length; r++) {
						var l, c, h = g.graphics.renderPaths(P(P({}, s), {}, {
								pathFrom: null === o ? i.linePathsFrom[r] : o,
								pathTo: i.linePathsTo[r],
								strokeWidth: Array.isArray(g.strokeWidth) ? g.strokeWidth[a] : g.strokeWidth,
								fill: "none",
								drawShadow: !1
							})),
							h = (n.add(h), f.fillPath({
								seriesNumber: a
							})),
							h = g.graphics.renderPaths(P(P({}, s), {}, {
								pathFrom: null === o ? i.areaPathsFrom[r] : o,
								pathTo: i.areaPathsTo[r],
								strokeWidth: 0,
								fill: h,
								drawShadow: !1
							}));
						p.config.chart.dropShadow.enabled && (l = new L(g.ctx), c = p.config.chart.dropShadow, l.dropShadow(h, Object.assign({}, c, {
							noUserSpaceOnUse: !0
						}), a)), n.add(h)
					}
					t.forEach(function(t, e) {
						var i = new w(g.ctx).getMarkerConfig({
								cssClass: "apexcharts-marker",
								seriesIndex: a,
								dataPointIndex: e
							}),
							s = g.graphics.drawMarker(d[e].x, d[e].y, i),
							i = (s.attr("rel", e), s.attr("j", e), s.attr("index", a), s.node.setAttribute("default-marker-size", i.pSize), g.graphics.group({
								class: "apexcharts-series-markers"
							})),
							s = (i && i.add(s), b.add(i), n.add(b), p.config.dataLabels);
						s.enabled && (i = s.formatter(p.globals.series[a][e], {
							seriesIndex: a,
							dataPointIndex: e,
							w: p
						}), m.plotDataLabelsText({
							x: d[e].x,
							y: d[e].y,
							text: i,
							textAnchor: "middle",
							i: a,
							j: a,
							parent: u,
							offsetCorrection: !1,
							dataLabelsConfig: P({}, s)
						})), n.add(u)
					}), x.push(n)
				}), this.drawPolygons({
					parent: s
				}), p.config.xaxis.labels.show && (e = this.drawXAxisTexts(), s.add(e)), x.forEach(function(t) {
					s.add(t)
				}), s.add(this.yaxisLabels), s
			}
		}, {
			key: "drawPolygons",
			value: function(t) {
				for (var n = this, a = this.w, o = t.parent, i = new Zt(this.ctx), s = a.globals.yAxisScale[0].result.reverse(), e = s.length, r = [], l = this.size / (e - 1), c = 0; c < e; c++) r[c] = l * c;
				r.reverse();
				var h = [],
					d = [];
				r.forEach(function(t, s) {
					var t = O.getPolygonPos(t, n.dataPointsLen),
						a = "";
					t.forEach(function(t, e) {
						var i;
						0 === s && (i = n.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(n.polygons.connectorColors) ? n.polygons.connectorColors[e] : n.polygons.connectorColors), d.push(i)), 0 === e && n.yaxisLabelsTextsPos.push({
							x: t.x,
							y: t.y
						}), a += t.x + "," + t.y + " "
					}), h.push(a)
				}), h.forEach(function(t, e) {
					var i = n.polygons.strokeColors,
						s = n.polygons.strokeWidth,
						t = n.graphics.drawPolygon(t, Array.isArray(i) ? i[e] : i, Array.isArray(s) ? s[e] : s, a.globals.radarPolygons.fill.colors[e]);
					o.add(t)
				}), d.forEach(function(t) {
					o.add(t)
				}), a.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(t, e) {
					t = i.drawYAxisTexts(t.x, t.y, e, s[e]);
					n.yaxisLabels.add(t)
				})
			}
		}, {
			key: "drawXAxisTexts",
			value: function() {
				var n = this,
					o = this.w,
					r = o.config.xaxis.labels,
					l = this.graphics.group({
						class: "apexcharts-xaxis"
					}),
					c = O.getPolygonPos(this.size, this.dataPointsLen);
				return o.globals.labels.forEach(function(t, e) {
					var i, s = o.config.xaxis.labels.formatter,
						a = new k(n.ctx);
					c[e] && (i = n.getTextPos(c[e], n.size), s = s(t, {
						seriesIndex: -1,
						dataPointIndex: e,
						w: o
					}), a.plotDataLabelsText({
						x: i.newX,
						y: i.newY,
						text: s,
						textAnchor: i.textAnchor,
						i: e,
						j: e,
						parent: l,
						color: Array.isArray(r.style.colors) && r.style.colors[e] ? r.style.colors[e] : "#a8a8a8",
						dataLabelsConfig: P({
							textAnchor: i.textAnchor,
							dropShadow: {
								enabled: !1
							}
						}, r),
						offsetCorrection: !1
					}))
				}), l
			}
		}, {
			key: "createPaths",
			value: function(i, t) {
				var s, a, n = this,
					e = [],
					o = [],
					r = [],
					l = [];
				return i.length && (o = [this.graphics.move(t.x, t.y)], l = [this.graphics.move(t.x, t.y)], s = this.graphics.move(i[0].x, i[0].y), a = this.graphics.move(i[0].x, i[0].y), i.forEach(function(t, e) {
					s += n.graphics.line(t.x, t.y), a += n.graphics.line(t.x, t.y), e === i.length - 1 && (s += "Z", a += "Z")
				}), e.push(s), r.push(a)), {
					linePathsFrom: o,
					linePathsTo: e,
					areaPathsFrom: l,
					areaPathsTo: r
				}
			}
		}, {
			key: "getTextPos",
			value: function(t, e) {
				var i = "middle",
					s = t.x,
					a = t.y;
				return 10 <= Math.abs(t.x) ? 0 < t.x ? (i = "start", s += 10) : t.x < 0 && (i = "end", s -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? a -= 10 : 0 < t.y && (a += 10)), {
					textAnchor: i,
					newX: s,
					newY: a
				}
			}
		}, {
			key: "getPreviousPath",
			value: function(t) {
				for (var e = this.w, i = null, s = 0; s < e.globals.previousPaths.length; s++) {
					var a = e.globals.previousPaths[s];
					0 < a.paths.length && parseInt(a.realIndex, 10) === parseInt(t, 10) && void 0 !== e.globals.previousPaths[s].paths[0] && (i = e.globals.previousPaths[s].paths[0].d)
				}
				return i
			}
		}, {
			key: "getDataPointsPos",
			value: function(t, e) {
				var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
				t = t || [], e = e || [];
				for (var s = [], a = 0; a < i; a++) {
					var n = {};
					n.x = t[a] * Math.sin(e[a]), n.y = -t[a] * Math.cos(e[a]), s.push(n)
				}
				return s
			}
		}]), ie),
		Kt = (e(o, $t), ot = i(o), t(o, [{
			key: "draw",
			value: function(t) {
				var e, i, s, a, n, o = this.w,
					r = new D(this.ctx),
					l = r.group({
						class: "apexcharts-radialbar"
					});
				return o.globals.noData || (r = r.group(), a = this.defaultSize / 2, s = o.globals.gridWidth / 2, e = this.defaultSize / 2.05, o.config.chart.sparkline.enabled || (e = e - o.config.stroke.width - o.config.chart.dropShadow.blur), n = o.globals.fill.colors, o.config.plotOptions.radialBar.track.show && (i = this.drawTracks({
					size: e,
					centerX: s,
					centerY: a,
					colorArr: n,
					series: t
				}), r.add(i)), i = this.drawArcs({
					size: e,
					centerX: s,
					centerY: a,
					colorArr: n,
					series: t
				}), a = ((s = 360) - (s = o.config.plotOptions.radialBar.startAngle < 0 ? this.totalAngle : s)) / 360, o.globals.radialSize = e - e * a, this.radialDataLabels.value.show && (n = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY), o.globals.radialSize += n * a), r.add(i.g), "front" === o.config.plotOptions.radialBar.hollow.position && (i.g.add(i.elHollow), i.dataLabels) && i.g.add(i.dataLabels), l.add(r)), l
			}
		}, {
			key: "drawTracks",
			value: function(t) {
				var e = this.w,
					i = new D(this.ctx),
					s = i.group({
						class: "apexcharts-tracks"
					}),
					a = new L(this.ctx),
					n = new C(this.ctx),
					o = this.getStrokeWidth(t);
				t.size = t.size - o / 2;
				for (var r = 0; r < t.series.length; r++) {
					var l = i.group({
							class: "apexcharts-radialbar-track apexcharts-track"
						}),
						c = (s.add(l), l.attr({
							rel: r + 1
						}), t.size = t.size - o - this.margin, e.config.plotOptions.radialBar.track),
						h = n.fillPath({
							seriesNumber: 0,
							size: t.size,
							fillColors: Array.isArray(c.background) ? c.background[r] : c.background,
							solid: !0
						}),
						d = this.trackStartAngle,
						u = this.trackEndAngle,
						h = (360 <= Math.abs(u) + Math.abs(d) && (u = 360 - Math.abs(this.startAngle) - .1), i.drawPath({
							d: "",
							stroke: h,
							strokeWidth: o * parseInt(c.strokeWidth, 10) / 100,
							fill: "none",
							strokeOpacity: c.opacity,
							classes: "apexcharts-radialbar-area"
						}));
					c.dropShadow.enabled && (c = c.dropShadow, a.dropShadow(h, c)), l.add(h), h.attr("id", "apexcharts-radialbarTrack-" + r), this.animatePaths(h, {
						centerX: t.centerX,
						centerY: t.centerY,
						endAngle: u,
						startAngle: d,
						size: t.size,
						i: r,
						totalItems: 2,
						animBeginArr: 0,
						dur: 0,
						isTrack: !0,
						easing: e.globals.easing
					})
				}
				return s
			}
		}, {
			key: "drawArcs",
			value: function(t) {
				for (var e = this.w, i = new D(this.ctx), s = new C(this.ctx), a = new L(this.ctx), n = i.group(), o = this.getStrokeWidth(t), r = (t.size = t.size - o / 2, e.config.plotOptions.radialBar.hollow.background), l = t.size - o * t.series.length - this.margin * t.series.length - o * parseInt(e.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, c = l - e.config.plotOptions.radialBar.hollow.margin, c = (void 0 !== e.config.plotOptions.radialBar.hollow.image && (r = this.drawHollowImage(t, n, l, r)), this.drawHollow({
						size: c,
						centerX: t.centerX,
						centerY: t.centerY,
						fill: r || "transparent"
					})), r = (e.config.plotOptions.radialBar.hollow.dropShadow.enabled && (r = e.config.plotOptions.radialBar.hollow.dropShadow, a.dropShadow(c, r)), 1), h = (!this.radialDataLabels.total.show && 1 < e.globals.series.length && (r = 0), null), d = (this.radialDataLabels.show && (h = this.renderInnerDataLabels(this.radialDataLabels, {
						hollowSize: l,
						centerX: t.centerX,
						centerY: t.centerY,
						opacity: r
					})), "back" === e.config.plotOptions.radialBar.hollow.position && (n.add(c), h) && n.add(h), !1), u = (d = e.config.plotOptions.radialBar.inverseOrder ? !0 : d) ? t.series.length - 1 : 0; d ? 0 <= u : u < t.series.length; d ? u-- : u++) {
					var g = i.group({
							class: "apexcharts-series apexcharts-radial-series",
							seriesName: O.escapeString(e.globals.seriesNames[u])
						}),
						p = (n.add(g), g.attr({
							rel: u + 1,
							"data:realIndex": u
						}), this.ctx.series.addCollapsedClassToSeries(g, u), t.size = t.size - o - this.margin, s.fillPath({
							seriesNumber: u,
							size: t.size,
							value: t.series[u]
						})),
						f = this.startAngle,
						x = void 0,
						m = O.negToZero(100 < t.series[u] ? 100 : t.series[u]) / 100,
						m = Math.round(this.totalAngle * m) + this.startAngle,
						b = void 0,
						v = (e.globals.dataChanged && (x = this.startAngle, b = Math.round(this.totalAngle * O.negToZero(e.globals.previousPaths[u]) / 100) + x), 360 <= Math.abs(m) + Math.abs(f) && (m -= .01), 360 <= Math.abs(b) + Math.abs(x) && (b -= .01), m - f),
						y = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[u] : e.config.stroke.dashArray,
						p = i.drawPath({
							d: "",
							stroke: p,
							strokeWidth: o,
							fill: "none",
							fillOpacity: e.config.fill.opacity,
							classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + u,
							strokeDashArray: y
						}),
						v = (D.setAttrs(p.node, {
							"data:angle": v,
							"data:value": t.series[u]
						}), e.config.chart.dropShadow.enabled && (y = e.config.chart.dropShadow, a.dropShadow(p, y, u)), a.setSelectionFilter(p, 0, u), this.addListeners(p, this.radialDataLabels), g.add(p), p.attr({
							index: 0,
							j: u
						}), 0);
					!this.initialAnim || e.globals.resized || e.globals.dataChanged || (v = e.config.chart.animations.speed), e.globals.dataChanged && (v = e.config.chart.animations.dynamicAnimation.speed), this.animDur = v / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(p, {
						centerX: t.centerX,
						centerY: t.centerY,
						endAngle: m,
						startAngle: f,
						prevEndAngle: b,
						prevStartAngle: x,
						size: t.size,
						i: u,
						totalItems: 2,
						animBeginArr: this.animBeginArr,
						dur: v,
						shouldSetPrevPaths: !0,
						easing: e.globals.easing
					})
				}
				return {
					g: n,
					elHollow: c,
					dataLabels: h
				}
			}
		}, {
			key: "drawHollow",
			value: function(t) {
				var e = new D(this.ctx).drawCircle(2 * t.size);
				return e.attr({
					class: "apexcharts-radialbar-hollow",
					cx: t.centerX,
					cy: t.centerY,
					r: t.size,
					fill: t.fill
				}), e
			}
		}, {
			key: "drawHollowImage",
			value: function(e, t, i, s) {
				var a, n, o = this.w,
					r = new C(this.ctx),
					l = O.randomId(),
					c = o.config.plotOptions.radialBar.hollow.image;
				return o.config.plotOptions.radialBar.hollow.imageClipped ? (r.clippedImgArea({
					width: i,
					height: i,
					image: c,
					patternID: "pattern".concat(o.globals.cuid).concat(l)
				}), s = "url(#pattern".concat(o.globals.cuid).concat(l, ")")) : (a = o.config.plotOptions.radialBar.hollow.imageWidth, n = o.config.plotOptions.radialBar.hollow.imageHeight, void 0 === a && void 0 === n ? (r = o.globals.dom.Paper.image(c).loaded(function(t) {
					this.move(e.centerX - t.width / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - t.height / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY)
				}), t.add(r)) : (i = o.globals.dom.Paper.image(c).loaded(function(t) {
					this.move(e.centerX - a / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - n / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(a, n)
				}), t.add(i))), s
			}
		}, {
			key: "getStrokeWidth",
			value: function(t) {
				var e = this.w;
				return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t.series.length + 1) - this.margin
			}
		}]), o),
		Jt = (e(a, E), nt = i(a), t(a, [{
			key: "draw",
			value: function(t, e) {
				var i = this.w,
					s = new D(this.ctx);
				this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t, this.seriesRangeStart = i.globals.seriesRangeStart, this.seriesRangeEnd = i.globals.seriesRangeEnd, this.barHelpers.initVariables(t);
				for (var a = s.group({
						class: "apexcharts-rangebar-series apexcharts-plot-series"
					}), n = 0; n < t.length; n++) {
					var o = void 0,
						r = void 0,
						l = i.globals.comboCharts ? e[n] : n,
						c = s.group({
							class: "apexcharts-series",
							seriesName: O.escapeString(i.globals.seriesNames[l]),
							rel: n + 1,
							"data:realIndex": l
						}),
						h = (this.ctx.series.addCollapsedClassToSeries(c, l), 0 < t[n].length && (this.visibleI = this.visibleI + 1), 0),
						d = 0,
						u = (1 < this.yRatio.length && (this.yaxisIndex = l), this.barHelpers.initialPositions()),
						r = u.y,
						g = u.zeroW,
						o = u.x;
					d = u.barWidth, h = u.barHeight;
					for (var p = u.xDivision, f = u.yDivision, x = u.zeroH, m = s.group({
							class: "apexcharts-datalabels",
							"data:realIndex": l
						}), b = s.group({
							class: "apexcharts-rangebar-goals-markers"
						}), v = 0; v < i.globals.dataPoints; v++) {
						var y, w = this.barHelpers.getStrokeWidth(n, v, l),
							k = this.seriesRangeStart[n][v],
							A = this.seriesRangeEnd[n][v],
							C = null,
							S = null,
							T = null,
							L = {
								x: o,
								y: r,
								strokeWidth: w,
								elSeries: c
							},
							E = this.seriesLen;
						if (i.config.plotOptions.bar.rangeBarGroupRows && (E = 1), void 0 === i.config.series[n].data[v]) break;
						this.isHorizontal ? (T = r + h * this.visibleI, i.config.series[n].data[v].x && (h = (y = this.detectOverlappingBars({
							i: n,
							j: v,
							barYPosition: T,
							srty: (f - h * E) / 2,
							barHeight: h,
							yDivision: f,
							initPositions: u
						})).barHeight, T = y.barYPosition), d = (C = this.drawRangeBarPaths(P({
							indexes: {
								i: n,
								j: v,
								realIndex: l
							},
							barHeight: h,
							barYPosition: T,
							zeroW: g,
							yDivision: f,
							y1: k,
							y2: A
						}, L))).barWidth) : (S = (o = i.globals.isXNumeric ? (i.globals.seriesX[n][v] - i.globals.minX) / this.xRatio - d / 2 : o) + d * this.visibleI, i.config.series[n].data[v].x && (d = (y = this.detectOverlappingBars({
							i: n,
							j: v,
							barXPosition: S,
							srtx: (p - d * E) / 2,
							barWidth: d,
							xDivision: p,
							initPositions: u
						})).barWidth, S = y.barXPosition), h = (C = this.drawRangeColumnPaths(P({
							indexes: {
								i: n,
								j: v,
								realIndex: l
							},
							barWidth: d,
							barXPosition: S,
							zeroH: x,
							xDivision: p
						}, L))).barHeight);
						var E = this.barHelpers.drawGoalLine({
								barXPosition: C.barXPosition,
								barYPosition: T,
								goalX: C.goalX,
								goalY: C.goalY,
								barHeight: h,
								barWidth: d
							}),
							L = (E && b.add(E), r = C.y, o = C.x, this.barHelpers.getPathFillColor(t, n, v, l)),
							E = i.globals.stroke.colors[l];
						this.renderSeries((_(L = {
							realIndex: l,
							pathFill: L,
							lineFill: E,
							j: v,
							i: n,
							x: o,
							y: r,
							y1: k,
							y2: A,
							pathFrom: C.pathFrom,
							pathTo: C.pathTo,
							strokeWidth: w,
							elSeries: c,
							series: t,
							barHeight: h,
							barWidth: d,
							barXPosition: S,
							barYPosition: T
						}, "barWidth", d), _(L, "elDataLabelsWrap", m), _(L, "elGoalsMarkers", b), _(L, "visibleSeries", this.visibleI), _(L, "type", "rangebar"), L))
					}
					a.add(c)
				}
				return a
			}
		}, {
			key: "detectOverlappingBars",
			value: function(t) {
				var e = t.i,
					i = t.j,
					s = t.barYPosition,
					a = t.barXPosition,
					n = t.srty,
					o = t.srtx,
					r = t.barHeight,
					l = t.barWidth,
					c = t.yDivision,
					h = t.xDivision,
					t = t.initPositions,
					d = this.w,
					u = [],
					g = d.config.series[e].data[i].rangeName,
					i = d.config.series[e].data[i].x,
					p = Array.isArray(i) ? i.join(" ") : i,
					i = d.globals.labels.map(function(t) {
						return Array.isArray(t) ? t.join(" ") : t
					}).indexOf(p),
					f = d.globals.seriesRange[e].findIndex(function(t) {
						return t.x === p && 0 < t.overlaps.length
					});
				return this.isHorizontal ? (s = d.config.plotOptions.bar.rangeBarGroupRows ? n + c * i : n + r * this.visibleI + c * i, -1 < f && !d.config.plotOptions.bar.rangeBarOverlap && -1 < (u = d.globals.seriesRange[e][f].overlaps).indexOf(g) && (s = (r = t.barHeight / u.length) * this.visibleI + c * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + r * (this.visibleI + u.indexOf(g)) + c * i)) : (-1 < i && (a = d.config.plotOptions.bar.rangeBarGroupRows ? o + h * i : o + l * this.visibleI + h * i), -1 < f && !d.config.plotOptions.bar.rangeBarOverlap && -1 < (u = d.globals.seriesRange[e][f].overlaps).indexOf(g) && (a = (l = t.barWidth / u.length) * this.visibleI + h * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + l * (this.visibleI + u.indexOf(g)) + h * i)), {
					barYPosition: s,
					barXPosition: a,
					barHeight: r,
					barWidth: l
				}
			}
		}, {
			key: "drawRangeColumnPaths",
			value: function(t) {
				var e = t.indexes,
					i = t.x,
					s = t.xDivision,
					a = t.barWidth,
					n = t.barXPosition,
					t = t.zeroH,
					o = this.w,
					r = e.i,
					l = e.j,
					c = this.yRatio[this.yaxisIndex],
					h = e.realIndex,
					d = this.getRangeValue(h, l),
					u = Math.min(d.start, d.end),
					d = Math.max(d.start, d.end),
					c = (void 0 === this.series[r][l] || null === this.series[r][l] ? u = t : (u = t - u / c, d = t - d / c), Math.abs(d - u)),
					a = this.barHelpers.getColumnPaths({
						barXPosition: n,
						barWidth: a,
						y1: u,
						y2: d,
						strokeWidth: this.strokeWidth,
						series: this.seriesRangeEnd,
						realIndex: e.realIndex,
						i: h,
						j: l,
						w: o
					});
				return o.globals.isXNumeric || (i += s), {
					pathTo: a.pathTo,
					pathFrom: a.pathFrom,
					barHeight: c,
					x: i,
					y: d,
					goalY: this.barHelpers.getGoalValues("y", null, t, r, l),
					barXPosition: n
				}
			}
		}, {
			key: "drawRangeBarPaths",
			value: function(t) {
				var e = t.indexes,
					i = t.y,
					s = t.y1,
					a = t.y2,
					n = t.yDivision,
					o = t.barHeight,
					r = t.barYPosition,
					t = t.zeroW,
					l = this.w,
					s = t + s / this.invertedYRatio,
					a = t + a / this.invertedYRatio,
					c = Math.abs(a - s),
					r = this.barHelpers.getBarpaths({
						barYPosition: r,
						barHeight: o,
						x1: s,
						x2: a,
						strokeWidth: this.strokeWidth,
						series: this.seriesRangeEnd,
						i: e.realIndex,
						realIndex: e.realIndex,
						j: e.j,
						w: l
					});
				return l.globals.isXNumeric || (i += n), {
					pathTo: r.pathTo,
					pathFrom: r.pathFrom,
					barWidth: c,
					x: a,
					goalX: this.barHelpers.getGoalValues("x", t, null, e.realIndex, e.j),
					y: i
				}
			}
		}, {
			key: "getRangeValue",
			value: function(t, e) {
				var i = this.w;
				return {
					start: i.globals.seriesRangeStart[t][e],
					end: i.globals.seriesRangeEnd[t][e]
				}
			}
		}]), a),
		te = (t(ee, [{
			key: "sameValueSeriesFix",
			value: function(t, e) {
				var i = this.w;
				return "gradient" !== i.config.fill.type && "gradient" !== i.config.fill.type[t] || !new I(this.lineCtx.ctx, i).seriesHaveSameValues(t) || ((i = e[t].slice())[i.length - 1] = i[i.length - 1] + 1e-6, e[t] = i), e
			}
		}, {
			key: "calculatePoints",
			value: function(t) {
				var e, i = t.series,
					s = t.realIndex,
					a = t.x,
					n = t.y,
					o = t.i,
					r = t.j,
					t = t.prevY,
					l = this.w,
					c = [],
					h = [];
				return 0 === r && (e = this.lineCtx.categoryAxisCorrection + l.config.markers.offsetX, l.globals.isXNumeric && (e = (l.globals.seriesX[s][0] - l.globals.minX) / this.lineCtx.xRatio + l.config.markers.offsetX), c.push(e), h.push(O.isNumber(i[o][0]) ? t + l.config.markers.offsetY : null)), c.push(a + l.config.markers.offsetX), h.push(O.isNumber(i[o][r + 1]) ? n + l.config.markers.offsetY : null), {
					x: c,
					y: h
				}
			}
		}, {
			key: "checkPreviousPaths",
			value: function(t) {
				for (var e = t.pathFromLine, i = t.pathFromArea, s = t.realIndex, a = this.w, n = 0; n < a.globals.previousPaths.length; n++) {
					var o = a.globals.previousPaths[n];
					("line" === o.type || "area" === o.type) && 0 < o.paths.length && parseInt(o.realIndex, 10) === parseInt(s, 10) && ("line" === o.type ? (this.lineCtx.appendPathFrom = !1, e = a.globals.previousPaths[n].paths[0].d) : "area" === o.type && (this.lineCtx.appendPathFrom = !1, i = a.globals.previousPaths[n].paths[0].d, a.config.stroke.show) && a.globals.previousPaths[n].paths[1] && (e = a.globals.previousPaths[n].paths[1].d))
				}
				return {
					pathFromLine: e,
					pathFromArea: i
				}
			}
		}, {
			key: "determineFirstPrevY",
			value: function(t) {
				var e, i = t.i,
					s = t.series,
					a = t.prevY,
					n = t.lineYPosition,
					t = this.w;
				if (void 0 !== (null == (e = s[i]) ? void 0 : e[0])) a = (n = t.config.chart.stacked && 0 < i ? this.lineCtx.prevSeriesY[i - 1][0] : this.lineCtx.zeroY) - s[i][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? s[i][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0);
				else if (t.config.chart.stacked && 0 < i && void 0 === s[i][0])
					for (var o = i - 1; 0 <= o; o--)
						if (null !== s[o][0] && void 0 !== s[o][0]) {
							a = n = this.lineCtx.prevSeriesY[o][0];
							break
						} return {
					prevY: a,
					lineYPosition: n
				}
			}
		}]), ee);

	function ee(t) {
		s(this, ee), this.w = t.w, this.lineCtx = t
	}

	function a() {
		return s(this, a), nt.apply(this, arguments)
	}

	function o(t) {
		s(this, o), (e = ot.call(this, t)).ctx = t, e.w = t.w, e.animBeginArr = [0], e.animDur = 0;
		var e, t = e.w;
		return e.startAngle = t.config.plotOptions.radialBar.startAngle, e.endAngle = t.config.plotOptions.radialBar.endAngle, e.totalAngle = Math.abs(t.config.plotOptions.radialBar.endAngle - t.config.plotOptions.radialBar.startAngle), e.trackStartAngle = t.config.plotOptions.radialBar.track.startAngle, e.trackEndAngle = t.config.plotOptions.radialBar.track.endAngle, e.donutDataLabels = e.w.config.plotOptions.radialBar.dataLabels, e.radialDataLabels = e.donutDataLabels, e.trackStartAngle || (e.trackStartAngle = e.startAngle), e.trackEndAngle || (e.trackEndAngle = e.endAngle), 360 === e.endAngle && (e.endAngle = 359.99), e.margin = parseInt(t.config.plotOptions.radialBar.track.margin, 10), e
	}

	function ie(t) {
		s(this, ie), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
		t = this.w;
		this.graphics = new D(this.ctx), this.lineColorArr = (void 0 !== t.globals.stroke.colors ? t.globals.stroke : t.globals).colors, this.defaultSize = t.globals.svgHeight < t.globals.svgWidth ? t.globals.gridHeight + 1.5 * t.globals.goldenPadding : t.globals.gridWidth, this.isLog = t.config.yaxis[0].logarithmic, this.coreUtils = new I(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(t.globals.maxY, 0) : t.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : t.globals.minY, this.polygons = t.config.plotOptions.radar.polygons, this.strokeWidth = t.config.stroke.show ? t.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - t.config.chart.dropShadow.blur, t.config.xaxis.labels.show && (this.size = this.size - t.globals.xAxisLabelsWidth / 1.75), void 0 !== t.config.plotOptions.radar.size && (this.size = t.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = []
	}

	function se(t) {
		s(this, se), this.ctx = t, this.w = t.w;
		t = this.w;
		this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = (void 0 !== t.globals.stroke.colors ? t.globals.stroke : t.globals).colors, this.defaultSize = Math.min(t.globals.gridWidth, t.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = t.globals.gridWidth / 2, "radialBar" === t.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(t.config.plotOptions.pie.endAngle - t.config.plotOptions.pie.startAngle), this.initialAngle = t.config.plotOptions.pie.startAngle % this.fullAngle, t.globals.radialSize = this.defaultSize / 2.05 - t.config.stroke.width - (t.config.chart.sparkline.enabled ? 0 : t.config.chart.dropShadow.blur), this.donutSize = t.globals.radialSize * parseInt(t.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = []
	}

	function ae(t) {
		s(this, ae), this.ctx = t, this.w = t.w
	}

	function ne(t, e) {
		s(this, ne), this.ctx = t, this.w = t.w, this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new qt(t), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0
	}

	function oe(t) {
		s(this, oe), this.ctx = t, this.w = t.w
	}

	function l() {
		return s(this, l), rt.apply(this, arguments)
	}

	function c() {
		return s(this, c), lt.apply(this, arguments)
	}

	function re(t, e) {
		s(this, re), this.ctx = t, this.w = t.w;
		var t = this.w,
			t = (this.barOptions = t.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = t.config.stroke.width, this.isNullValue = !1, this.isRangeBar = t.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !t.globals.isBarHorizontal && t.globals.seriesRange.length && t.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = e, null !== this.xyRatios && (this.xRatio = e.xRatio, this.initialXRatio = e.initialXRatio, this.yRatio = e.yRatio, this.invertedXRatio = e.invertedXRatio, this.invertedYRatio = e.invertedYRatio, this.baseLineY = e.baseLineY, this.baseLineInvertedY = e.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.pathArr = [], new S(this.ctx)),
			i = (this.lastActiveBarSerieIndex = t.getActiveConfigSeriesIndex("desc", ["bar", "column"]), t.getBarSeriesIndices()),
			e = new I(this.ctx);
		this.stackedSeriesTotals = e.getStackedSeriesTotals(this.w.config.series.map(function(t, e) {
			return -1 === i.indexOf(e) ? e : -1
		}).filter(function(t) {
			return -1 !== t
		})), this.barHelpers = new jt(this)
	}

	function le(t) {
		s(this, le), this.w = t.w, this.barCtx = t
	}

	function ce(t) {
		s(this, ce), this.w = t.w, this.barCtx = t, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter)
	}

	function he(t) {
		s(this, he), this.ctx = t, this.w = t.w;
		t = this.w;
		this.tConfig = t.config.tooltip, this.tooltipUtil = new Xt(this), this.tooltipLabels = new Nt(this), this.tooltipPosition = new Ft(this), this.marker = new Rt(this), this.intersect = new Ht(this), this.axesTooltip = new Yt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !t.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now()
	}

	function de(t) {
		s(this, de), this.w = t.w, this.ttCtx = t
	}

	function ue(t) {
		s(this, ue), this.w = t.w;
		var e = this.w;
		this.ttCtx = t, this.isVerticalGroupedRangeBar = !e.globals.isBarHorizontal && "rangeBar" === e.config.chart.type && e.config.plotOptions.bar.rangeBarGroupRows
	}

	function ge(t) {
		s(this, ge), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx, this.tooltipPosition = new Ft(t)
	}

	function pe(t) {
		s(this, pe), this.ttCtx = t, this.ctx = t.ctx, this.w = t.w
	}

	function fe(t) {
		s(this, fe), this.w = t.w, this.ctx = t.ctx, this.ttCtx = t, this.tooltipUtil = new Xt(t)
	}

	function xe(t) {
		s(this, xe), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx
	}

	function h(t) {
		var e;
		return s(this, h), (e = ct.call(this, t)).ctx = t, e.w = t.w, e.dragged = !1, e.graphics = new D(e.ctx), e.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], e.clientX = 0, e.clientY = 0, e.startX = 0, e.endX = 0, e.dragX = 0, e.startY = 0, e.endY = 0, e.dragY = 0, e.moveDirection = "none", e
	}

	function me(t) {
		s(this, me), this.ctx = t, this.w = t.w;
		t = this.w;
		this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = t.globals.minX, this.maxX = t.globals.maxX
	}

	function be(t) {
		s(this, be), this.ctx = t, this.w = t.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new Mt(this)
	}

	function ve(t) {
		s(this, ve), this.w = t.w, this.lgCtx = t
	}

	function ye(t) {
		s(this, ye), this.ctx = t, this.w = t.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new Lt(this), this.dimYAxis = new Pt(this), this.dimXAxis = new Et(this), this.dimGrid = new _t(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0
	}

	function we(t) {
		s(this, we), this.w = t.w, this.dCtx = t
	}

	function ke(t) {
		s(this, ke), this.w = t.w, this.dCtx = t
	}

	function Ae(t) {
		s(this, Ae), this.w = t.w, this.dCtx = t
	}

	function Ce(t) {
		s(this, Ce), this.w = t.w, this.dCtx = t
	}

	function Se(t) {
		s(this, Se), this.ctx = t, this.w = t.w
	}

	function Te(t) {
		s(this, Te), this.ctx = t, this.colors = [], this.w = t.w;
		t = this.w;
		this.isColorFn = !1, this.isHeatmapDistributed = "treemap" === t.config.chart.type && t.config.plotOptions.treemap.distributed || "heatmap" === t.config.chart.type && t.config.plotOptions.heatmap.distributed, this.isBarDistributed = t.config.plotOptions.bar.distributed && ("bar" === t.config.chart.type || "rangeBar" === t.config.chart.type)
	}

	function Le(t) {
		s(this, Le), this.ctx = t, this.w = t.w
	}

	function Ee(t) {
		s(this, Ee), this.ctx = t, this.w = t.w
	}

	function Pe(t) {
		s(this, Pe), this.ctx = t, this.w = t.w
	}

	function _e(t) {
		s(this, _e), this.ctx = t, this.w = t.w
	}

	function Ie(t) {
		s(this, Ie), this.ctx = t, this.w = t.w, this.documentEvent = O.bind(this.documentEvent, this)
	}

	function Me(t, e) {
		s(this, Me), this.ctx = t, this.elgrid = e, this.w = t.w;
		e = this.w;
		this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.axisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === e.config.chart.type && e.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, "bottom" === e.config.xaxis.position && (this.xAxisoffX = e.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new T(t)
	}

	function Oe(t) {
		s(this, Oe), this.ctx = t, this.w = t.w, this.scales = new x(t)
	}

	function De(t) {
		s(this, De), this.ctx = t, this.w = t.w
	}

	function ze(t) {
		s(this, ze), this.ctx = t, this.w = t.w;
		var e = this.w;
		this.xaxisLabels = e.globals.labels.slice(), this.axesUtils = new T(t), this.isRangeBar = e.globals.seriesRange.length && e.globals.isBarHorizontal, 0 < e.globals.timescaleLabels.length && (this.xaxisLabels = e.globals.timescaleLabels.slice())
	}

	function Xe(t, e) {
		s(this, Xe), this.ctx = t, this.elgrid = e, this.w = t.w;
		e = this.w;
		this.axesUtils = new T(t), this.xaxisLabels = e.globals.labels.slice(), 0 < e.globals.timescaleLabels.length && !e.globals.isBarHorizontal && (this.xaxisLabels = e.globals.timescaleLabels.slice()), e.config.xaxis.overwriteCategories && (this.xaxisLabels = e.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === e.config.xaxis.position ? this.offY = 0 : this.offY = e.globals.gridHeight + 1, this.offY = this.offY + e.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === e.config.chart.type && e.config.plotOptions.bar.horizontal, this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.xaxisBorderWidth = e.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = e.config.yaxis[0].axisBorder.width.toString()), -1 < this.xaxisBorderWidth.indexOf("%") ? this.xaxisBorderWidth = e.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = e.config.xaxis.axisBorder.height, this.yaxis = e.config.yaxis[0]
	}

	function Ne(t) {
		s(this, Ne), this.ctx = t, this.w = t.w
	}

	function Fe(t) {
		s(this, Fe), this.ctx = t, this.w = t.w
	}

	function Re(t) {
		s(this, Re), this.ctx = t, this.w = t.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new I(this.ctx)
	}

	function He(t) {
		s(this, He), this.ctx = t, this.w = t.w, this.legendInactiveClass = "legend-mouseover-inactive"
	}

	function Ye(t) {
		s(this, Ye), this.ctx = t, this.w = t.w
	}

	function We(t) {
		s(this, We), this.ctx = t, this.w = t.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled
	}

	function Be(t, e) {
		s(this, Be), this.ctx = t, this.w = t.w
	}

	function je(t) {
		s(this, je), this.ctx = t, this.w = t.w, this.opts = null, this.seriesIndex = 0
	}

	function Ve(t) {
		s(this, Ve), this.opts = t
	}

	function Ge() {
		s(this, Ge)
	}

	function qe(t) {
		s(this, qe), this.opts = t
	}

	function Ue(t) {
		s(this, Ue), this.opts = t
	}

	function Ze(t) {
		s(this, Ze), this.ctx = t, this.w = t.w, this.tooltipKeyFormat = "dd MMM"
	}

	function $e(t) {
		s(this, $e), this.ctx = t, this.w = t.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
	}

	function Qe(t) {
		s(this, Qe), this.ctx = t, this.w = t.w, this.graphics = new D(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new B(this), this.xAxisAnnotations = new j(this), this.yAxisAnnotations = new V(this), this.pointsAnnotations = new G(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints
	}

	function Ke() {
		s(this, Ke), this.yAxis = {
			show: !0,
			showAlways: !1,
			showForNullSeries: !0,
			seriesName: void 0,
			opposite: !1,
			reversed: !1,
			logarithmic: !1,
			logBase: 10,
			tickAmount: void 0,
			forceNiceScale: !1,
			max: void 0,
			min: void 0,
			floating: !1,
			decimalsInFloat: void 0,
			labels: {
				show: !0,
				minWidth: 0,
				maxWidth: 160,
				offsetX: 0,
				offsetY: 0,
				align: void 0,
				rotate: 0,
				padding: 20,
				style: {
					colors: [],
					fontSize: "11px",
					fontWeight: 400,
					fontFamily: void 0,
					cssClass: ""
				},
				formatter: void 0
			},
			axisBorder: {
				show: !1,
				color: "#e0e0e0",
				width: 1,
				offsetX: 0,
				offsetY: 0
			},
			axisTicks: {
				show: !1,
				color: "#e0e0e0",
				width: 6,
				offsetX: 0,
				offsetY: 0
			},
			title: {
				text: void 0,
				rotate: -90,
				offsetY: 0,
				offsetX: 0,
				style: {
					color: void 0,
					fontSize: "11px",
					fontWeight: 900,
					fontFamily: void 0,
					cssClass: ""
				}
			},
			tooltip: {
				enabled: !1,
				offsetX: 0
			},
			crosshairs: {
				show: !0,
				position: "front",
				stroke: {
					color: "#b6b6b6",
					width: 1,
					dashArray: 0
				}
			}
		}, this.pointAnnotation = {
			id: void 0,
			x: 0,
			y: null,
			yAxisIndex: 0,
			seriesIndex: 0,
			mouseEnter: void 0,
			mouseLeave: void 0,
			click: void 0,
			marker: {
				size: 4,
				fillColor: "#fff",
				strokeWidth: 2,
				strokeColor: "#333",
				shape: "circle",
				offsetX: 0,
				offsetY: 0,
				radius: 2,
				cssClass: ""
			},
			label: {
				borderColor: "#c2c2c2",
				borderWidth: 1,
				borderRadius: 2,
				text: void 0,
				textAnchor: "middle",
				offsetX: 0,
				offsetY: 0,
				mouseEnter: void 0,
				mouseLeave: void 0,
				click: void 0,
				style: {
					background: "#fff",
					color: void 0,
					fontSize: "11px",
					fontFamily: void 0,
					fontWeight: 400,
					cssClass: "",
					padding: {
						left: 5,
						right: 5,
						top: 2,
						bottom: 2
					}
				}
			},
			customSVG: {
				SVG: void 0,
				cssClass: void 0,
				offsetX: 0,
				offsetY: 0
			},
			image: {
				path: void 0,
				width: 20,
				height: 20,
				offsetX: 0,
				offsetY: 0
			}
		}, this.yAxisAnnotation = {
			id: void 0,
			y: 0,
			y2: null,
			strokeDashArray: 1,
			fillColor: "#c2c2c2",
			borderColor: "#c2c2c2",
			borderWidth: 1,
			opacity: .3,
			offsetX: 0,
			offsetY: 0,
			width: "100%",
			yAxisIndex: 0,
			label: {
				borderColor: "#c2c2c2",
				borderWidth: 1,
				borderRadius: 2,
				text: void 0,
				textAnchor: "end",
				position: "right",
				offsetX: 0,
				offsetY: -3,
				mouseEnter: void 0,
				mouseLeave: void 0,
				click: void 0,
				style: {
					background: "#fff",
					color: void 0,
					fontSize: "11px",
					fontFamily: void 0,
					fontWeight: 400,
					cssClass: "",
					padding: {
						left: 5,
						right: 5,
						top: 2,
						bottom: 2
					}
				}
			}
		}, this.xAxisAnnotation = {
			id: void 0,
			x: 0,
			x2: null,
			strokeDashArray: 1,
			fillColor: "#c2c2c2",
			borderColor: "#c2c2c2",
			borderWidth: 1,
			opacity: .3,
			offsetX: 0,
			offsetY: 0,
			label: {
				borderColor: "#c2c2c2",
				borderWidth: 1,
				borderRadius: 2,
				text: void 0,
				textAnchor: "middle",
				orientation: "vertical",
				position: "top",
				offsetX: 0,
				offsetY: 0,
				mouseEnter: void 0,
				mouseLeave: void 0,
				click: void 0,
				style: {
					background: "#fff",
					color: void 0,
					fontSize: "11px",
					fontFamily: void 0,
					fontWeight: 400,
					cssClass: "",
					padding: {
						left: 5,
						right: 5,
						top: 2,
						bottom: 2
					}
				}
			}
		}, this.text = {
			x: 0,
			y: 0,
			text: "",
			textAnchor: "start",
			foreColor: void 0,
			fontSize: "13px",
			fontFamily: void 0,
			fontWeight: 400,
			appendTo: ".apexcharts-annotations",
			backgroundColor: "transparent",
			borderColor: "#c2c2c2",
			borderRadius: 0,
			borderWidth: 0,
			paddingLeft: 4,
			paddingRight: 4,
			paddingTop: 2,
			paddingBottom: 2
		}
	}

	function Je(t, e) {
		return (e[1] - t[1]) / (e[0] - t[0])
	}
	t(ei, [{
		key: "draw",
		value: function(t, e, i, s) {
			var a = this.w,
				n = new D(this.ctx),
				o = a.globals.comboCharts ? e : a.config.chart.type,
				r = n.group({
					class: "apexcharts-".concat(o, "-series apexcharts-plot-series")
				}),
				e = new I(this.ctx, a);
			this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t = e.getLogSeries(t), this.yRatio = e.getLogYRatios(this.yRatio);
			for (var l = [], c = 0; c < t.length; c++) {
				t = this.lineHelpers.sameValueSeriesFix(c, t);
				var h = a.globals.comboCharts ? i[c] : c,
					d = (this._initSerieVariables(t, c, h), []),
					u = [],
					g = [],
					p = a.globals.padHorizontal + this.categoryAxisCorrection;
				this.ctx.series.addCollapsedClassToSeries(this.elSeries, h), a.globals.isXNumeric && 0 < a.globals.seriesX.length && (p = (a.globals.seriesX[h][0] - a.globals.minX) / this.xRatio), g.push(p);
				var f, x = p,
					m = void 0,
					b = x,
					v = this.zeroY,
					y = this.zeroY,
					v = this.lineHelpers.determineFirstPrevY({
						i: c,
						series: t,
						prevY: v,
						lineYPosition: 0
					}).prevY,
					p = (d.push(v), f = v, "rangeArea" === o && (m = y = this.lineHelpers.determineFirstPrevY({
						i: c,
						series: s,
						prevY: y,
						lineYPosition: 0
					}).prevY, u.push(y)), {
						type: o,
						series: t,
						realIndex: h,
						i: c,
						x: p,
						y: 1,
						pX: x,
						pY: f,
						pathsFrom: this._calculatePathsFrom({
							type: o,
							series: t,
							i: c,
							realIndex: h,
							prevX: b,
							prevY: v,
							prevY2: y
						}),
						linePaths: [],
						areaPaths: [],
						seriesIndex: i,
						lineYPosition: 0,
						xArrj: g,
						yArrj: d,
						y2Arrj: u,
						seriesRangeEnd: s
					}),
					x = this._iterateOverDataPoints(P(P({}, p), {}, {
						iterations: "rangeArea" === o ? t[c].length - 1 : void 0,
						isRangeStart: !0
					}));
				"rangeArea" === o && (f = this._calculatePathsFrom({
					series: s,
					i: c,
					realIndex: h,
					prevX: b,
					prevY: y
				}), v = this._iterateOverDataPoints(P(P({}, p), {}, {
					series: s,
					pY: m,
					pathsFrom: f,
					iterations: s[c].length - 1,
					isRangeStart: !1
				})), x.linePaths[0] = v.linePath + x.linePath, x.pathFromLine = v.pathFromLine + x.pathFromLine), this._handlePaths({
					type: o,
					realIndex: h,
					i: c,
					paths: x
				}), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), l.push(this.elSeries)
			}
			if (a.config.chart.stacked)
				for (var w = l.length; 0 < w; w--) r.add(l[w - 1]);
			else
				for (var k = 0; k < l.length; k++) r.add(l[k]);
			return r
		}
	}, {
		key: "_initSerieVariables",
		value: function(t, e, i) {
			var s = this.w,
				a = new D(this.ctx),
				a = (this.xDivision = s.globals.gridWidth / (s.globals.dataPoints - ("on" === s.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(s.config.stroke.width) ? s.config.stroke.width[i] : s.config.stroke.width, 1 < this.yRatio.length && (this.yaxisIndex = i), this.isReversed = s.config.yaxis[this.yaxisIndex] && s.config.yaxis[this.yaxisIndex].reversed, this.zeroY = s.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? s.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > s.globals.gridHeight || "end" === s.config.plotOptions.area.fillTo) && (this.areaBottomY = s.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = a.group({
					class: "apexcharts-series",
					seriesName: O.escapeString(s.globals.seriesNames[i])
				}), this.elPointsMain = a.group({
					class: "apexcharts-series-markers-wrap",
					"data:realIndex": i
				}), this.elDataLabelsWrap = a.group({
					class: "apexcharts-datalabels",
					"data:realIndex": i
				}), t[e].length === s.globals.dataPoints);
			this.elSeries.attr({
				"data:longestSeries": a,
				rel: e + 1,
				"data:realIndex": i
			}), this.appendPathFrom = !0
		}
	}, {
		key: "_calculatePathsFrom",
		value: function(t) {
			var e, i, s = t.type,
				a = t.series,
				n = t.i,
				o = t.realIndex,
				r = t.prevX,
				l = t.prevY,
				t = t.prevY2,
				c = this.w,
				h = new D(this.ctx);
			if (null === a[n][0]) {
				for (var d = 0; d < a[n].length; d++)
					if (null !== a[n][d]) {
						r = this.xDivision * d, l = this.zeroY - a[n][d] / this.yRatio[this.yaxisIndex], e = h.move(r, l), i = h.move(r, this.areaBottomY);
						break
					}
			} else e = h.move(r, l), "rangeArea" === s && (e = h.move(r, t) + h.line(r, l)), i = h.move(r, this.areaBottomY) + h.line(r, l);
			return s = h.move(-1, this.zeroY) + h.line(-1, this.zeroY), t = h.move(-1, this.zeroY) + h.line(-1, this.zeroY), 0 < c.globals.previousPaths.length && (s = (c = this.lineHelpers.checkPreviousPaths({
				pathFromLine: s,
				pathFromArea: t,
				realIndex: o
			})).pathFromLine, t = c.pathFromArea), {
				prevX: r,
				prevY: l,
				linePath: e,
				areaPath: i,
				pathFromLine: s,
				pathFromArea: t
			}
		}
	}, {
		key: "_handlePaths",
		value: function(t) {
			var e, i = t.type,
				s = t.realIndex,
				a = t.i,
				n = t.paths,
				o = this.w,
				r = new D(this.ctx),
				l = new C(this.ctx),
				c = (this.prevSeriesY.push(n.yArrj), o.globals.seriesXvalues[s] = n.xArrj, o.globals.seriesYvalues[s] = n.yArrj, o.config.forecastDataPoints),
				h = (0 < c.count && "rangeArea" !== i && (t = o.globals.seriesXvalues[s][o.globals.seriesXvalues[s].length - c.count - 1], e = r.drawRect(t, 0, o.globals.gridWidth, o.globals.gridHeight, 0), o.globals.dom.elForecastMask.appendChild(e.node), e = r.drawRect(0, 0, t, o.globals.gridHeight, 0), o.globals.dom.elNonForecastMask.appendChild(e.node)), this.pointsChart || o.globals.delayedElements.push({
					el: this.elPointsMain.node,
					index: s
				}), {
					i: a,
					realIndex: s,
					animationDelay: a,
					initialSpeed: o.config.chart.animations.speed,
					dataChangeSpeed: o.config.chart.animations.dynamicAnimation.speed,
					className: "apexcharts-".concat(i)
				});
			if ("area" === i)
				for (var d = l.fillPath({
						seriesNumber: s
					}), u = 0; u < n.areaPaths.length; u++) {
					var g = r.renderPaths(P(P({}, h), {}, {
						pathFrom: n.pathFromArea,
						pathTo: n.areaPaths[u],
						stroke: "none",
						strokeWidth: 0,
						strokeLineCap: null,
						fill: d
					}));
					this.elSeries.add(g)
				}
			if (o.config.stroke.show && !this.pointsChart) {
				var p = null;
				"line" === i ? p = l.fillPath({
					seriesNumber: s,
					i: a
				}) : "solid" === o.config.stroke.fill.type ? p = o.globals.stroke.colors[s] : (t = o.config.fill, o.config.fill = o.config.stroke.fill, p = l.fillPath({
					seriesNumber: s,
					i: a
				}), o.config.fill = t);
				for (var f = 0; f < n.linePaths.length; f++) {
					var x = p,
						x = ("rangeArea" === i && (x = l.fillPath({
							seriesNumber: s
						})), P(P({}, h), {}, {
							pathFrom: n.pathFromLine,
							pathTo: n.linePaths[f],
							stroke: p,
							strokeWidth: this.strokeWidth,
							strokeLineCap: o.config.stroke.lineCap,
							fill: "rangeArea" === i ? x : "none"
						})),
						m = r.renderPaths(x);
					this.elSeries.add(m), m.attr("fill-rule", "evenodd"), 0 < c.count && "rangeArea" !== i && ((x = r.renderPaths(x)).node.setAttribute("stroke-dasharray", c.dashArray), c.strokeWidth && x.node.setAttribute("stroke-width", c.strokeWidth), this.elSeries.add(x), x.attr("clip-path", "url(#forecastMask".concat(o.globals.cuid, ")")), m.attr("clip-path", "url(#nonForecastMask".concat(o.globals.cuid, ")")))
				}
			}
		}
	}, {
		key: "_iterateOverDataPoints",
		value: function(t) {
			for (var e = t.type, i = t.series, s = t.iterations, a = t.realIndex, n = t.i, o = t.x, r = t.y, l = t.pX, c = t.pY, h = t.pathsFrom, d = t.linePaths, u = t.areaPaths, g = t.seriesIndex, p = t.lineYPosition, f = t.xArrj, x = t.yArrj, m = t.y2Arrj, b = t.isRangeStart, v = t.seriesRangeEnd, y = this.w, w = new D(this.ctx), k = this.yRatio, A = h.prevY, C = h.linePath, S = h.areaPath, T = h.pathFromLine, L = h.pathFromArea, E = O.isNumber(y.globals.minYArr[a]) ? y.globals.minYArr[a] : y.globals.minY, s = s || (1 < y.globals.dataPoints ? y.globals.dataPoints - 1 : y.globals.dataPoints), P = r, _ = 0; _ < s; _++) {
				var I = void 0 === i[n][_ + 1] || null === i[n][_ + 1],
					M = (y.globals.isXNumeric ? (M = y.globals.seriesX[a][_ + 1], o = ((M = void 0 === y.globals.seriesX[a][_ + 1] ? y.globals.seriesX[a][s - 1] : M) - y.globals.minX) / this.xRatio) : o += this.xDivision, p = y.config.chart.stacked && 0 < n && y.globals.collapsedSeries.length < y.config.series.length - 1 ? this.prevSeriesY[function(t) {
						for (var e = t, i = 0; i < y.globals.series.length; i++)
							if (-1 < y.globals.collapsedSeriesIndices.indexOf(t)) {
								e--;
								break
							} return 0 <= e ? e : 0
					}(n - 1)][_ + 1] : this.zeroY, I ? r = p - E / k[this.yaxisIndex] + 2 * (this.isReversed ? E / k[this.yaxisIndex] : 0) : (r = p - i[n][_ + 1] / k[this.yaxisIndex] + 2 * (this.isReversed ? i[n][_ + 1] / k[this.yaxisIndex] : 0), "rangeArea" === e && (P = p - v[n][_ + 1] / k[this.yaxisIndex] + 2 * (this.isReversed ? v[n][_ + 1] / k[this.yaxisIndex] : 0))), f.push(o), x.push(r), m.push(P), this.lineHelpers.calculatePoints({
						series: i,
						x: o,
						y: r,
						realIndex: a,
						i: n,
						j: _,
						prevY: A
					})),
					I = this._createPaths({
						type: e,
						series: i,
						i: n,
						realIndex: a,
						j: _,
						x: o,
						y: r,
						y2: P,
						xArrj: f,
						yArrj: x,
						y2Arrj: m,
						pX: l,
						pY: c,
						linePath: C,
						areaPath: S,
						linePaths: d,
						areaPaths: u,
						seriesIndex: g,
						isRangeStart: b
					}),
					u = I.areaPaths,
					d = I.linePaths,
					l = I.pX,
					c = I.pY,
					S = I.areaPath,
					C = I.linePath;
				!this.appendPathFrom || "monotoneCubic" === y.config.stroke.curve && "rangeArea" === e || (T += w.line(o, this.zeroY), L += w.line(o, this.zeroY)), this.handleNullDataPoints(i, M, n, _, a), this._handleMarkersAndLabels({
					type: e,
					pointsPos: M,
					i: n,
					j: _,
					realIndex: a,
					isRangeStart: b
				})
			}
			return {
				yArrj: x,
				xArrj: f,
				pathFromArea: L,
				areaPaths: u,
				pathFromLine: T,
				linePaths: d,
				linePath: C,
				areaPath: S
			}
		}
	}, {
		key: "_handleMarkersAndLabels",
		value: function(t) {
			var e = t.type,
				i = t.pointsPos,
				s = t.isRangeStart,
				a = t.i,
				n = t.j,
				t = t.realIndex,
				o = this.w,
				r = new k(this.ctx),
				a = (this.pointsChart ? this.scatter.draw(this.elSeries, n, {
					realIndex: t,
					pointsPos: i,
					zRatio: this.zRatio,
					elParent: this.elPointsMain
				}) : (1 < o.globals.series[a].length && this.elPointsMain.node.classList.add("apexcharts-element-hidden"), null !== (o = this.markers.plotChartMarkers(i, t, n + 1)) && this.elPointsMain.add(o)), r.drawDataLabel({
					type: e,
					isRangeStart: s,
					pos: i,
					i: t,
					j: n + 1
				}));
			null !== a && this.elDataLabelsWrap.add(a)
		}
	}, {
		key: "_createPaths",
		value: function(t) {
			var i, s, e = t.type,
				a = t.series,
				n = t.i,
				o = t.realIndex,
				r = t.j,
				l = t.x,
				c = t.y,
				h = t.xArrj,
				d = t.yArrj,
				u = t.y2,
				g = t.y2Arrj,
				p = t.pX,
				f = t.pY,
				x = t.linePath,
				m = t.areaPath,
				b = t.linePaths,
				v = t.areaPaths,
				y = t.seriesIndex,
				t = t.isRangeStart,
				w = this.w,
				k = new D(this.ctx),
				A = w.config.stroke.curve,
				C = this.areaBottomY;
			return Array.isArray(w.config.stroke.curve) && (A = Array.isArray(y) ? w.config.stroke.curve[y[n]] : w.config.stroke.curve[n]), "smooth" === (A = ("rangeArea" === e && (w.globals.hasNullValues || 0 < w.config.forecastDataPoints.count) || w.globals.hasNullValues) && "monotoneCubic" === A ? "straight" : A) ? (y = .35 * (l - p), w.globals.hasNullValues ? (null !== a[n][r] && (m = null !== a[n][r + 1] ? (x = k.move(p, f) + k.curve(p + y, f, l - y, c, l + 1, c), k.move(p + 1, f) + k.curve(p + y, f, l - y, c, l + 1, c) + k.line(l, C) + k.line(p, C) + "z") : (x = k.move(p, f), k.move(p, f) + "z")), b.push(x), v.push(m)) : (x += k.curve(p + y, f, l - y, c, l, c), m += k.curve(p + y, f, l - y, c, l, c)), p = l, f = c, r === a[n].length - 2 && (m += k.curve(p, f, l, c, l, C) + k.move(l, c) + "z", "rangeArea" === e && t ? x += k.curve(p, f, l, c, l, u) + k.move(l, u) + "z" : w.globals.hasNullValues || (b.push(x), v.push(m)))) : "monotoneCubic" === A ? ("rangeArea" === e ? h.length === w.globals.dataPoints : r === a[n].length - 2) && (y = h.map(function(t, e) {
				return [h[e], d[e]]
			}), y = at(y), x += st(y), m += st(y), p = l, f = c, "rangeArea" === e && t ? (x += k.line(h[h.length - 1], g[g.length - 1]), i = h.slice().reverse(), s = g.slice().reverse(), y = i.map(function(t, e) {
				return [i[e], s[e]]
			}), g = at(y), m = x += st(g)) : m += k.curve(p, f, l, c, l, C) + k.move(l, c) + "z", b.push(x), v.push(m)) : (null === a[n][r + 1] && (x += k.move(l, c), y = w.globals.isXNumeric ? (w.globals.seriesX[o][r] - w.globals.minX) / this.xRatio : l - this.xDivision, m = m + k.line(y, C) + k.move(l, c) + "z"), null === a[n][r] && (x += k.move(l, c), m += k.move(l, C)), "stepline" === A ? (x = x + k.line(l, null, "H") + k.line(null, c, "V"), m = m + k.line(l, null, "H") + k.line(null, c, "V")) : "straight" === A && (x += k.line(l, c), m += k.line(l, c)), r === a[n].length - 2 && (m = m + k.line(l, C) + k.move(l, c) + "z", "rangeArea" === e && t ? x = x + k.line(l, u) + k.move(l, u) + "z" : (b.push(x), v.push(m)))), {
				linePaths: b,
				areaPaths: v,
				pX: p,
				pY: f,
				linePath: x,
				areaPath: m
			}
		}
	}, {
		key: "handleNullDataPoints",
		value: function(t, e, i, s, a) {
			var n = this.w;
			(null === t[i][s] && n.config.markers.showNullDataPoints || 1 === t[i].length) && null !== (t = this.markers.plotChartMarkers(e, a, s + 1, this.strokeWidth - n.config.markers.strokeWidth / 2, !0)) && this.elPointsMain.add(t)
		}
	}]);
	var ti = ei;

	function ei(t, e, i) {
		s(this, ei), this.ctx = t, this.w = t.w, this.xyRatios = e, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || i, this.scatter = new pt(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new te(this), this.markers = new w(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0
	}

	function ii(t, e, i, s) {
		this.xoffset = t, this.yoffset = e, this.height = s, this.width = i, this.shortestEdge = function() {
			return Math.min(this.height, this.width)
		}, this.getCoordinates = function(t) {
			var e, i = [],
				s = this.xoffset,
				a = this.yoffset,
				n = g(t) / this.height,
				o = g(t) / this.width;
			if (this.width >= this.height)
				for (e = 0; e < t.length; e++) i.push([s, a, s + n, a + t[e] / n]), a += t[e] / n;
			else
				for (e = 0; e < t.length; e++) i.push([s, a, s + t[e] / o, a + o]), s += t[e] / o;
			return i
		}, this.cutArea = function(t) {
			var e, i;
			return this.width >= this.height ? (e = t / this.height, i = this.width - e, new ii(this.xoffset + e, this.yoffset, i, this.height)) : (e = t / this.width, i = this.height - e, new ii(this.xoffset, this.yoffset + e, this.width, i))
		}
	}

	function si(t, a, n, e, i) {
		e = void 0 === e ? 0 : e, i = void 0 === i ? 0 : i;
		for (var s, o = function t(e, i, s, a) {
				var n, o;
				if (0 !== e.length) return o = s.shortestEdge(),
					function(t, e, i) {
						var s;
						if (0 === t.length) return 1;
						(s = t.slice()).push(e);
						e = ai(t, i), t = ai(s, i);
						return t <= e
					}(i, n = e[0], o) ? (i.push(n), t(e.slice(1), i, s, a)) : (o = s.cutArea(g(i), a), a.push(s.getCoordinates(i)), t(e, [], o, a)), a;
				a.push(s.getCoordinates(i))
			}(function(t) {
				for (var e = [], i = a * n / g(t), s = 0; s < t.length; s++) e[s] = t[s] * i;
				return e
			}(t), [], new ii(e, i, a, n), []), r = [], l = 0; l < o.length; l++)
			for (s = 0; s < o[l].length; s++) r.push(o[l][s]);
		return r
	}

	function ai(t, e) {
		var i = Math.min.apply(Math, t),
			s = Math.max.apply(Math, t),
			t = g(t);
		return Math.max(Math.pow(e, 2) * s / Math.pow(t, 2), Math.pow(t, 2) / (Math.pow(e, 2) * i))
	}

	function ni(t) {
		return t && t.constructor === Array
	}

	function g(t) {
		for (var e = 0, i = 0; i < t.length; i++) e += t[i];
		return e
	}
	window.TreemapSquared = {}, window.TreemapSquared.generate = function t(e, i, s, a, n) {
		a = void 0 === a ? 0 : a, n = void 0 === n ? 0 : n;
		var o, r, l = [],
			c = [];
		if (ni(e[0])) {
			for (r = 0; r < e.length; r++) l[r] = function t(e) {
				var i, s = 0;
				if (ni(e[0]))
					for (i = 0; i < e.length; i++) s += t(e[i]);
				else s = g(e);
				return s
			}(e[r]);
			for (o = si(l, i, s, a, n), r = 0; r < e.length; r++) c.push(t(e[r], o[r][2] - o[r][0], o[r][3] - o[r][1], o[r][0], o[r][1]))
		} else c = si(e, i, s, a, n);
		return c
	};
	t(gi, [{
		key: "draw",
		value: function(g) {
			var e, p = this,
				f = this.w,
				x = new D(this.ctx),
				m = new C(this.ctx),
				i = x.group({
					class: "apexcharts-treemap"
				});
			return f.globals.noData || (e = [], g.forEach(function(t) {
				t = t.map(function(t) {
					return Math.abs(t)
				});
				e.push(t)
			}), this.negRange = this.helpers.checkColorRange(), f.config.series.forEach(function(t, e) {
				t.data.forEach(function(t) {
					Array.isArray(p.labels[e]) || (p.labels[e] = []), p.labels[e].push(t.x)
				})
			}), window.TreemapSquared.generate(e, f.globals.gridWidth, f.globals.gridHeight).forEach(function(t, d) {
				var u = x.group({
						class: "apexcharts-series apexcharts-treemap-series",
						seriesName: O.escapeString(f.globals.seriesNames[d]),
						rel: d + 1,
						"data:realIndex": d
					}),
					e = (f.config.chart.dropShadow.enabled && (e = f.config.chart.dropShadow, new L(p.ctx).dropShadow(i, e, d)), x.group({
						class: "apexcharts-data-labels"
					}));
				t.forEach(function(t, e) {
					var i = t[0],
						s = t[1],
						a = t[2],
						n = t[3],
						o = x.drawRect(i, s, a - i, n - s, 0, "#fff", 1, p.strokeWidth, f.config.plotOptions.treemap.useFillColorAsStroke ? l : f.globals.stroke.colors[d]),
						r = (o.attr({
							cx: i,
							cy: s,
							index: d,
							i: d,
							j: e,
							width: a - i,
							height: n - s
						}), p.helpers.getShadeColor(f.config.chart.type, d, e, p.negRange)),
						l = r.color,
						l = (void 0 !== f.config.series[d].data[e] && f.config.series[d].data[e].fillColor && (l = f.config.series[d].data[e].fillColor), m.fillPath({
							color: l,
							seriesNumber: d,
							dataPointIndex: e
						})),
						l = (o.node.classList.add("apexcharts-treemap-rect"), o.attr({
							fill: l
						}), p.helpers.addListeners(o), {
							x: i + (a - i) / 2,
							y: s + (n - s) / 2,
							width: 0,
							height: 0
						}),
						c = {
							x: i,
							y: s,
							width: a - i,
							height: n - s
						},
						l = (f.config.chart.animations.enabled && !f.globals.dataChanged && (h = 1, f.globals.resized || (h = f.config.chart.animations.speed), p.animateTreemap(o, l, c, h)), f.globals.dataChanged && (h = 1, p.dynamicAnim.enabled) && f.globals.shouldAnimate && (h = p.dynamicAnim.speed, f.globals.previousPaths[d] && f.globals.previousPaths[d][e] && f.globals.previousPaths[d][e].rect && (l = f.globals.previousPaths[d][e].rect), p.animateTreemap(o, l, c, h)), p.getFontSize(t)),
						c = f.config.dataLabels.formatter(p.labels[d][e], {
							value: f.globals.series[d][e],
							seriesIndex: d,
							dataPointIndex: e,
							w: f
						}),
						h = ("truncate" === f.config.plotOptions.treemap.dataLabels.format && (l = parseInt(f.config.dataLabels.style.fontSize, 10), c = p.truncateLabels(c, l, i, s, a, n)), p.helpers.calculateDataLabels({
							text: c,
							x: (i + a) / 2,
							y: (s + n) / 2 + p.strokeWidth / 2 + l / 3,
							i: d,
							j: e,
							colorProps: r,
							fontSize: l,
							series: g
						}));
					f.config.dataLabels.enabled && h && p.rotateToFitLabel(h, l, c, i, s, a, n), u.add(o), null !== h && u.add(h)
				}), u.add(e), i.add(u)
			})), i
		}
	}, {
		key: "getFontSize",
		value: function(t) {
			var e = this.w,
				i = function t(e) {
					var i, s = 0;
					if (Array.isArray(e[0]))
						for (i = 0; i < e.length; i++) s += t(e[i]);
					else
						for (i = 0; i < e.length; i++) s += e[i].length;
					return s
				}(this.labels) / function t(e) {
					var i, s = 0;
					if (Array.isArray(e[0]))
						for (i = 0; i < e.length; i++) s += t(e[i]);
					else
						for (i = 0; i < e.length; i++) s += 1;
					return s
				}(this.labels),
				s = t[2] - t[0],
				t = t[3] - t[1],
				s = Math.pow(s * t, .5);
			return Math.min(s / i, parseInt(e.config.dataLabels.style.fontSize, 10))
		}
	}, {
		key: "rotateToFitLabel",
		value: function(t, e, i, s, a, n, o) {
			var r = new D(this.ctx),
				i = r.getTextRects(i, e);
			i.width + this.w.config.stroke.width + 5 > n - s && i.width <= o - a && (e = r.rotateAroundCenter(t.node), t.node.setAttribute("transform", "rotate(-90 ".concat(e.x, " ").concat(e.y, ") translate(").concat(i.height / 3, ")")))
		}
	}, {
		key: "truncateLabels",
		value: function(t, e, i, s, a, n) {
			var o = new D(this.ctx),
				n = o.getTextRects(t, e).width + this.w.config.stroke.width + 5 > a - i && a - i < n - s ? n - s : a - i,
				s = o.getTextBasedOnMaxWidth({
					text: t,
					maxWidth: n,
					fontSize: e
				});
			return t.length !== s.length && n / e < 5 ? "" : s
		}
	}, {
		key: "animateTreemap",
		value: function(t, e, i, s) {
			var a = new A(this.ctx);
			a.animateRect(t, {
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			}, {
				x: i.x,
				y: i.y,
				width: i.width,
				height: i.height
			}, s, function() {
				a.animationCompleted(t)
			})
		}
	}]);
	var m, M, oi = gi,
		ri = (t(ui, [{
			key: "calculateTimeScaleTicks",
			value: function(t, e) {
				var o = this,
					r = this.w;
				if (r.globals.allSeriesCollapsed) return r.globals.labels = [], r.globals.timescaleLabels = [], [];
				var i = new y(this.ctx),
					s = (e - t) / 864e5,
					i = (this.determineInterval(s), r.globals.disableZoomIn = !1, r.globals.disableZoomOut = !1, s < .00011574074074074075 ? r.globals.disableZoomIn = !0 : 5e4 < s && (r.globals.disableZoomOut = !0), i.getTimeUnitsfromTimestamp(t, e, this.utc)),
					t = r.globals.gridWidth / s,
					e = t / 24,
					a = e / 60,
					n = a / 60,
					l = Math.floor(24 * s),
					c = Math.floor(1440 * s),
					h = Math.floor(86400 * s),
					d = Math.floor(s),
					u = Math.floor(s / 30),
					s = Math.floor(s / 365),
					i = {
						minMillisecond: i.minMillisecond,
						minSecond: i.minSecond,
						minMinute: i.minMinute,
						minHour: i.minHour,
						minDate: i.minDate,
						minMonth: i.minMonth,
						minYear: i.minYear
					},
					g = {
						firstVal: i,
						currentMillisecond: i.minMillisecond,
						currentSecond: i.minSecond,
						currentMinute: i.minMinute,
						currentHour: i.minHour,
						currentMonthDate: i.minDate,
						currentDate: i.minDate,
						currentMonth: i.minMonth,
						currentYear: i.minYear,
						daysWidthOnXAxis: t,
						hoursWidthOnXAxis: e,
						minutesWidthOnXAxis: a,
						secondsWidthOnXAxis: n,
						numberOfSeconds: h,
						numberOfMinutes: c,
						numberOfHours: l,
						numberOfDays: d,
						numberOfMonths: u,
						numberOfYears: s
					};
				switch (this.tickInterval) {
					case "years":
						this.generateYearScale(g);
						break;
					case "months":
					case "half_year":
						this.generateMonthScale(g);
						break;
					case "months_days":
					case "months_fortnight":
					case "days":
					case "week_days":
						this.generateDayScale(g);
						break;
					case "hours":
						this.generateHourScale(g);
						break;
					case "minutes_fives":
					case "minutes":
						this.generateMinuteScale(g);
						break;
					case "seconds_tens":
					case "seconds_fives":
					case "seconds":
						this.generateSecondScale(g)
				}
				var p = this.timeScaleArray.map(function(t) {
					var e = {
						position: t.position,
						unit: t.unit,
						year: t.year,
						day: t.day || 1,
						hour: t.hour || 0,
						month: t.month + 1
					};
					return "month" === t.unit ? P(P({}, e), {}, {
						day: 1,
						value: t.value + 1
					}) : "day" === t.unit || "hour" === t.unit ? P(P({}, e), {}, {
						value: t.value
					}) : "minute" === t.unit ? P(P({}, e), {}, {
						value: t.value,
						minute: t.value
					}) : "second" === t.unit ? P(P({}, e), {}, {
						value: t.value,
						minute: t.minute,
						second: t.second
					}) : t
				});
				return p.filter(function(t) {
					var e = 1,
						i = Math.ceil(r.globals.gridWidth / 120),
						s = t.value,
						a = (void 0 !== r.config.xaxis.tickAmount && (i = r.config.xaxis.tickAmount), p.length > i && (e = Math.floor(p.length / i)), !1),
						n = !1;
					switch (o.tickInterval) {
						case "years":
							"year" === t.unit && (a = !0);
							break;
						case "half_year":
							e = 7, "year" === t.unit && (a = !0);
							break;
						case "months":
							e = 1, "year" === t.unit && (a = !0);
							break;
						case "months_fortnight":
							e = 15, "year" !== t.unit && "month" !== t.unit || (a = !0), 30 === s && (n = !0);
							break;
						case "months_days":
							e = 10, "month" === t.unit && (a = !0), 30 === s && (n = !0);
							break;
						case "week_days":
							e = 8, "month" === t.unit && (a = !0);
							break;
						case "days":
							e = 1, "month" === t.unit && (a = !0);
							break;
						case "hours":
							"day" === t.unit && (a = !0);
							break;
						case "minutes_fives":
						case "seconds_fives":
							s % 5 != 0 && (n = !0);
							break;
						case "seconds_tens":
							s % 10 != 0 && (n = !0)
					}
					if ("hours" === o.tickInterval || "minutes_fives" === o.tickInterval || "seconds_tens" === o.tickInterval || "seconds_fives" === o.tickInterval) {
						if (!n) return !0
					} else if ((s % e == 0 || a) && !n) return !0
				})
			}
		}, {
			key: "recalcDimensionsBasedOnFormat",
			value: function(t, e) {
				var i = this.w,
					t = this.formatDates(t),
					t = this.removeOverlappingTS(t);
				i.globals.timescaleLabels = t.slice(), new It(this.ctx).plotCoords()
			}
		}, {
			key: "determineInterval",
			value: function(t) {
				var e = 24 * t,
					i = 60 * e;
				switch (!0) {
					case 5 < t / 365:
						this.tickInterval = "years";
						break;
					case 800 < t:
						this.tickInterval = "half_year";
						break;
					case 180 < t:
						this.tickInterval = "months";
						break;
					case 90 < t:
						this.tickInterval = "months_fortnight";
						break;
					case 60 < t:
						this.tickInterval = "months_days";
						break;
					case 30 < t:
						this.tickInterval = "week_days";
						break;
					case 2 < t:
						this.tickInterval = "days";
						break;
					case 2.4 < e:
						this.tickInterval = "hours";
						break;
					case 15 < i:
						this.tickInterval = "minutes_fives";
						break;
					case 5 < i:
						this.tickInterval = "minutes";
						break;
					case 1 < i:
						this.tickInterval = "seconds_tens";
						break;
					case 20 < 60 * i:
						this.tickInterval = "seconds_fives";
						break;
					default:
						this.tickInterval = "seconds"
				}
			}
		}, {
			key: "generateYearScale",
			value: function(t) {
				var e, i = t.firstVal,
					s = t.currentMonth,
					a = t.currentYear,
					n = t.daysWidthOnXAxis,
					o = t.numberOfYears,
					t = i.minYear,
					r = 0,
					l = new y(this.ctx);
				1 < i.minDate || 0 < i.minMonth ? (e = l.determineRemainingDaysOfYear(i.minYear, i.minMonth, i.minDate), r = (l.determineDaysOfYear(i.minYear) - e + 1) * n, t = i.minYear + 1, this.timeScaleArray.push({
					position: r,
					value: t,
					unit: "year",
					year: t,
					month: O.monthMod(s + 1)
				})) : 1 === i.minDate && 0 === i.minMonth && this.timeScaleArray.push({
					position: r,
					value: t,
					unit: "year",
					year: a,
					month: O.monthMod(s + 1)
				});
				for (var c = t, h = r, d = 0; d < o; d++) h = l.determineDaysOfYear(++c - 1) * n + h, this.timeScaleArray.push({
					position: h,
					value: c,
					unit: "year",
					year: c,
					month: 1
				})
			}
		}, {
			key: "generateMonthScale",
			value: function(t) {
				var e, i = t.firstVal,
					s = t.currentMonthDate,
					a = t.currentMonth,
					n = t.currentYear,
					o = t.daysWidthOnXAxis,
					r = t.numberOfMonths,
					t = a,
					l = 0,
					c = new y(this.ctx),
					h = "month",
					d = 0;
				1 < i.minDate ? (l = (c.determineDaysOfMonths(a + 1, i.minYear) - s + 1) * o, t = O.monthMod(a + 1), i = n + d, s = O.monthMod(t), 0 === (e = t) && (h = "year", e = i, i += d += s = 1), this.timeScaleArray.push({
					position: l,
					value: e,
					unit: h,
					year: i,
					month: s
				})) : this.timeScaleArray.push({
					position: l,
					value: t,
					unit: h,
					year: n,
					month: O.monthMod(a)
				});
				for (var u = t + 1, g = l, p = 0; p < r; p++, 0) {
					0 === (u = O.monthMod(u)) ? (h = "year", d += 1) : h = "month";
					var f = this._getYear(n, u, d),
						g = c.determineDaysOfMonths(u, f) * o + g;
					this.timeScaleArray.push({
						position: g,
						value: 0 === u ? f : u,
						unit: h,
						year: f,
						month: 0 === u ? 1 : u
					}), u++
				}
			}
		}, {
			key: "generateDayScale",
			value: function(t) {
				function e(t, e, i) {
					return t > r.determineDaysOfMonths(e + 1, i) && (l = "month", d = e += c = 1), e
				}
				var i = t.firstVal,
					s = t.currentMonth,
					a = t.currentYear,
					n = t.hoursWidthOnXAxis,
					o = t.numberOfDays,
					r = new y(this.ctx),
					l = "day",
					t = i.minDate + 1,
					c = t,
					h = (24 - i.minHour) * n,
					d = t,
					u = e(c, s, a);
				0 === i.minHour && 1 === i.minDate ? (h = 0, d = O.monthMod(i.minMonth), l = "month", c = i.minDate, o++) : 1 !== i.minDate && 0 === i.minHour && 0 === i.minMinute && (h = 0, t = i.minDate, u = e(c = d = t, s, a)), this.timeScaleArray.push({
					position: h,
					value: d,
					unit: l,
					year: this._getYear(a, u, 0),
					month: O.monthMod(u),
					day: c
				});
				for (var g = h, p = 0; p < o; p++) {
					var l = "day",
						u = e(c += 1, u, this._getYear(a, u, 0)),
						f = this._getYear(a, u, 0),
						g = 24 * n + g,
						x = 1 === c ? O.monthMod(u) : c;
					this.timeScaleArray.push({
						position: g,
						value: x,
						unit: l,
						year: f,
						month: O.monthMod(u),
						day: x
					})
				}
			}
		}, {
			key: "generateHourScale",
			value: function(t) {
				function e(t, e) {
					return t > l.determineDaysOfMonths(e + 1, n) ? e + 1 : e
				}
				var i = t.firstVal,
					s = t.currentDate,
					a = t.currentMonth,
					n = t.currentYear,
					o = t.minutesWidthOnXAxis,
					r = t.numberOfHours,
					l = new y(this.ctx),
					c = "hour",
					t = 60 - (i.minMinute + i.minSecond / 60),
					h = t * o,
					d = i.minHour + 1,
					u = d + 1,
					g = (60 == t && (h = 0, u = (d = i.minHour) + 1), s),
					p = e(g, a);
				this.timeScaleArray.push({
					position: h,
					value: d,
					unit: c,
					day: g,
					hour: u,
					year: n,
					month: O.monthMod(p)
				});
				for (var f = h, x = 0; x < r; x++) {
					c = "hour", 24 <= u && (u = 0, c = "day", m = g += 1, b = p, m > l.determineDaysOfMonths(b + 1, n) && (b += g = 1), p = e(g, p = b));
					var m = this._getYear(n, p, 0),
						f = 60 * o + f,
						b = 0 === u ? g : u;
					this.timeScaleArray.push({
						position: f,
						value: b,
						unit: c,
						hour: u,
						day: g,
						year: m,
						month: O.monthMod(p)
					}), u++
				}
			}
		}, {
			key: "generateMinuteScale",
			value: function(t) {
				for (var e = t.currentMillisecond, i = t.currentSecond, s = t.currentMinute, a = t.currentHour, n = t.currentDate, o = t.currentMonth, r = t.currentYear, l = t.minutesWidthOnXAxis, c = t.secondsWidthOnXAxis, h = t.numberOfMinutes, d = s + 1, u = n, g = o, p = r, f = a, x = (60 - i - e / 1e3) * c, m = 0; m < h; m++) 60 <= d && (d = 0, 24 === (f += 1)) && (f = 0), this.timeScaleArray.push({
					position: x,
					value: d,
					unit: "minute",
					hour: f,
					minute: d,
					day: u,
					year: this._getYear(p, g, 0),
					month: O.monthMod(g)
				}), x += l, d++
			}
		}, {
			key: "generateSecondScale",
			value: function(t) {
				for (var e = t.currentMillisecond, i = t.currentSecond, s = t.currentMinute, a = t.currentHour, n = t.currentDate, o = t.currentMonth, r = t.currentYear, l = t.secondsWidthOnXAxis, c = t.numberOfSeconds, h = i + 1, d = s, u = n, g = o, p = r, f = a, x = (1e3 - e) / 1e3 * l, m = 0; m < c; m++) 60 <= h && (h = 0, 60 <= ++d) && (d = 0, 24 == ++f) && (f = 0), this.timeScaleArray.push({
					position: x,
					value: h,
					unit: "second",
					hour: f,
					minute: d,
					second: h,
					day: u,
					year: this._getYear(p, g, 0),
					month: O.monthMod(g)
				}), x += l, h++
			}
		}, {
			key: "createRawDateString",
			value: function(t, e) {
				var i = t.year;
				return 0 === t.month && (t.month = 1), i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day || "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour || "0")).slice(-2), "minute" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":" + (t.minute ? ("0" + t.minute).slice(-2) : "00"), "second" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i
			}
		}, {
			key: "formatDates",
			value: function(t) {
				var r = this,
					l = this.w;
				return t.map(function(t) {
					var e, i, s = t.value.toString(),
						a = new y(r.ctx),
						n = r.createRawDateString(t, s),
						o = a.getDate(a.parseDate(n));
					return r.utc || (o = a.getDate(a.parseDateWithTimezone(n))), s = void 0 === l.config.xaxis.labels.format ? (e = "dd MMM", i = l.config.xaxis.labels.datetimeFormatter, "year" === t.unit && (e = i.year), "month" === t.unit && (e = i.month), "day" === t.unit && (e = i.day), "hour" === t.unit && (e = i.hour), "minute" === t.unit && (e = i.minute), "second" === t.unit && (e = i.second), a.formatDate(o, e)) : a.formatDate(o, l.config.xaxis.labels.format), {
						dateString: n,
						position: t.position,
						value: s,
						unit: t.unit,
						year: t.year,
						month: t.month
					}
				})
			}
		}, {
			key: "removeOverlappingTS",
			value: function(a) {
				var n, o = this,
					r = new D(this.ctx),
					l = !1,
					c = (0 < a.length && a[0].value && a.every(function(t) {
						return t.value.length === a[0].value.length
					}) && (l = !0, n = r.getTextRects(a[0].value).width), 0),
					t = a.map(function(t, e) {
						var i, s;
						return 0 < e && o.w.config.xaxis.labels.hideOverlappingLabels ? (i = l ? n : r.getTextRects(a[c].value).width, s = a[c].position, t.position > s + i + 10 ? (c = e, t) : null) : t
					});
				return t.filter(function(t) {
					return null !== t
				})
			}
		}, {
			key: "_getYear",
			value: function(t, e, i) {
				return t + Math.floor(e / 12) + i
			}
		}]), ui),
		li = (t(di, [{
			key: "setupElements",
			value: function() {
				var t = this.w.globals,
					e = this.w.config,
					i = e.chart.type;
				t.axisCharts = -1 < ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i), t.xyCharts = -1 < ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i), t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type || "boxPlot" === e.chart.type) && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.chartID, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), D.setAttrs(t.dom.elWrap, {
					id: t.chartClass.substring(1),
					class: "apexcharts-canvas " + t.chartClass.substring(1)
				}), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({
					class: "apexcharts-svg",
					"xmlns:data": "ApexChartsNS",
					transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")")
				}), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"), D.setAttrs(t.dom.elLegendForeign, {
					x: 0,
					y: 0,
					width: t.svgWidth,
					height: t.svgHeight
				}), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), t.dom.elLegendForeign.appendChild(t.dom.elLegendWrap), t.dom.Paper.node.appendChild(t.dom.elLegendForeign), t.dom.elGraphical = t.dom.Paper.group().attr({
					class: "apexcharts-inner apexcharts-graphical"
				}), t.dom.elDefs = t.dom.Paper.defs(), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs)
			}
		}, {
			key: "plotChartType",
			value: function(s, t) {
				var e, a = this.w,
					n = a.config,
					o = a.globals,
					r = {
						series: [],
						i: []
					},
					l = {
						series: [],
						i: []
					},
					c = {
						series: [],
						i: []
					},
					h = {
						series: [],
						i: []
					},
					d = {
						series: [],
						i: []
					},
					u = {
						series: [],
						i: []
					},
					g = {
						series: [],
						i: []
					},
					p = {
						series: [],
						i: []
					},
					f = {
						series: [],
						seriesRangeEnd: [],
						i: []
					},
					i = (o.series.map(function(t, e) {
						var i = 0;
						void 0 !== s[e].type ? ("column" === s[e].type || "bar" === s[e].type ? (1 < o.series.length && n.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), d.series.push(t), d.i.push(e), i++, a.globals.columnSeries = d.series) : "area" === s[e].type ? (l.series.push(t), l.i.push(e), i++) : "line" === s[e].type ? (r.series.push(t), r.i.push(e), i++) : "scatter" === s[e].type ? (c.series.push(t), c.i.push(e)) : "bubble" === s[e].type ? (h.series.push(t), h.i.push(e), i++) : "candlestick" === s[e].type ? (u.series.push(t), u.i.push(e), i++) : "boxPlot" === s[e].type ? (g.series.push(t), g.i.push(e), i++) : "rangeBar" === s[e].type ? (p.series.push(t), p.i.push(e), i++) : "rangeArea" === s[e].type ? (f.series.push(o.seriesRangeStart[e]), f.seriesRangeEnd.push(o.seriesRangeEnd[e]), f.i.push(e), i++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble/candlestick/boxPlot/rangeBar/rangeArea"), 1 < i && (o.comboCharts = !0)) : (r.series.push(t), r.i.push(e))
					}), new ti(this.ctx, t)),
					x = new Gt(this.ctx, t),
					m = (this.ctx.pie = new $t(this.ctx), new Kt(this.ctx)),
					b = (this.ctx.rangeBar = new Jt(this.ctx, t), new Qt(this.ctx)),
					v = [];
				if (o.comboCharts) 0 < l.series.length && v.push(i.draw(l.series, "area", l.i)), 0 < d.series.length && (a.config.chart.stacked ? (e = new Vt(this.ctx, t), v.push(e.draw(d.series, d.i))) : (this.ctx.bar = new E(this.ctx, t), v.push(this.ctx.bar.draw(d.series, d.i)))), 0 < f.series.length && v.push(i.draw(f.series, "rangeArea", f.i, f.seriesRangeEnd)), 0 < r.series.length && v.push(i.draw(r.series, "line", r.i)), 0 < u.series.length && v.push(x.draw(u.series, "candlestick", u.i)), 0 < g.series.length && v.push(x.draw(g.series, "boxPlot", g.i)), 0 < p.series.length && v.push(this.ctx.rangeBar.draw(p.series, p.i)), 0 < c.series.length && (e = new ti(this.ctx, t, !0), v.push(e.draw(c.series, "scatter", c.i))), 0 < h.series.length && (x = new ti(this.ctx, t, !0), v.push(x.draw(h.series, "bubble", h.i)));
				else switch (n.chart.type) {
					case "line":
						v = i.draw(o.series, "line");
						break;
					case "area":
						v = i.draw(o.series, "area");
						break;
					case "bar":
						v = (n.chart.stacked ? new Vt(this.ctx, t) : (this.ctx.bar = new E(this.ctx, t), this.ctx.bar)).draw(o.series);
						break;
					case "candlestick":
						v = new Gt(this.ctx, t).draw(o.series, "candlestick");
						break;
					case "boxPlot":
						v = new Gt(this.ctx, t).draw(o.series, n.chart.type);
						break;
					case "rangeBar":
						v = this.ctx.rangeBar.draw(o.series);
						break;
					case "rangeArea":
						v = i.draw(o.seriesRangeStart, "rangeArea", void 0, o.seriesRangeEnd);
						break;
					case "heatmap":
						v = new Ut(this.ctx, t).draw(o.series);
						break;
					case "treemap":
						v = new oi(this.ctx, t).draw(o.series);
						break;
					case "pie":
					case "donut":
					case "polarArea":
						v = this.ctx.pie.draw(o.series);
						break;
					case "radialBar":
						v = m.draw(o.series);
						break;
					case "radar":
						v = b.draw(o.series);
						break;
					default:
						v = i.draw(o.series)
				}
				return v
			}
		}, {
			key: "setSVGDimensions",
			value: function() {
				var t = this.w.globals,
					e = this.w.config,
					i = (t.svgWidth = e.chart.width, t.svgHeight = e.chart.height, O.getDimensions(this.el)),
					s = e.chart.width.toString().split(/[0-9]+/g).pop(),
					i = ("%" === s ? O.isNumber(i[0]) && (0 === i[0].width && (i = O.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : "px" !== s && "" !== s || (t.svgWidth = parseInt(e.chart.width, 10)), e.chart.height.toString().split(/[0-9]+/g).pop());
				"auto" !== t.svgHeight && "" !== t.svgHeight ? "%" === i ? (s = O.getDimensions(this.el.parentNode), t.svgHeight = s[1] * parseInt(e.chart.height, 10) / 100) : t.svgHeight = parseInt(e.chart.height, 10) : t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2, t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), D.setAttrs(t.dom.Paper.node, {
					width: t.svgWidth,
					height: t.svgHeight
				}), "%" !== i && (s = !e.chart.sparkline.enabled && t.axisCharts ? e.chart.parentHeightOffset : 0, t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + s + "px"), t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px"
			}
		}, {
			key: "shiftGraphPosition",
			value: function() {
				var t = this.w.globals,
					e = t.translateY,
					e = {
						transform: "translate(" + t.translateX + ", " + e + ")"
					};
				D.setAttrs(t.dom.elGraphical.node, e)
			}
		}, {
			key: "resizeNonAxisCharts",
			value: function() {
				var t = this.w,
					e = t.globals,
					i = 0,
					s = t.config.chart.sparkline.enabled ? 1 : 15,
					a = (s += t.config.grid.padding.bottom, "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || !t.config.legend.show || t.config.legend.floating || (i = new Ot(this.ctx).legendHelpers.getLegendBBox().clwh + 10), t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie")),
					n = 2.05 * t.globals.radialSize,
					a = (a && !t.config.chart.sparkline.enabled && 0 !== t.config.plotOptions.radialBar.startAngle && (n = (a = O.getBoundingClientRect(a)).bottom, a = a.bottom - a.top, n = Math.max(2.05 * t.globals.radialSize, a)), n + e.translateY + i + s);
				e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", a), t.config.chart.height && 0 < String(t.config.chart.height).indexOf("%") || (e.dom.elWrap.style.height = a + "px", D.setAttrs(e.dom.Paper.node, {
					height: a
				}), e.dom.Paper.node.parentNode.parentNode.style.minHeight = a + "px")
			}
		}, {
			key: "coreCalculations",
			value: function() {
				new bt(this.ctx).init()
			}
		}, {
			key: "resetGlobals",
			value: function() {
				function t() {
					return e.w.config.series.map(function(t) {
						return []
					})
				}
				var e = this,
					i = new ut,
					s = this.w.globals;
				i.initGlobalVars(s), s.seriesXvalues = t(), s.seriesYvalues = t()
			}
		}, {
			key: "isMultipleY",
			value: function() {
				if (this.w.config.yaxis.constructor === Array && 1 < this.w.config.yaxis.length) return this.w.globals.isMultipleYAxis = !0
			}
		}, {
			key: "xySettings",
			value: function() {
				var t, e = null,
					i = this.w;
				return i.globals.axisCharts && ("back" === i.config.xaxis.crosshairs.position && new At(this.ctx).drawXCrosshairs(), "back" === i.config.yaxis[0].crosshairs.position && new At(this.ctx).drawYCrosshairs(), "datetime" === i.config.xaxis.type && void 0 === i.config.xaxis.labels.formatter && (this.ctx.timeScale = new ri(this.ctx), t = [], isFinite(i.globals.minX) && isFinite(i.globals.maxX) && !i.globals.isBarHorizontal ? t = this.ctx.timeScale.calculateTimeScaleTicks(i.globals.minX, i.globals.maxX) : i.globals.isBarHorizontal && (t = this.ctx.timeScale.calculateTimeScaleTicks(i.globals.minY, i.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(t)), e = new I(this.ctx).getCalculatedRatios()), e
			}
		}, {
			key: "updateSourceChart",
			value: function(t) {
				this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({
					chart: {
						selection: {
							xaxis: {
								min: t.w.globals.minX,
								max: t.w.globals.maxX
							}
						}
					}
				}, !1, !1)
			}
		}, {
			key: "setupBrushHandler",
			value: function() {
				var i, s = this,
					n = this.w;
				n.config.chart.brush.enabled && "function" != typeof n.config.chart.events.selection && ((i = Array.isArray(n.config.chart.brush.targets) || [n.config.chart.brush.target]).forEach(function(t) {
					var e = ApexCharts.getChartByID(t);
					e.w.globals.brushSource = s.ctx, "function" != typeof e.w.config.chart.events.zoomed && (e.w.config.chart.events.zoomed = function() {
						s.updateSourceChart(e)
					}), "function" != typeof e.w.config.chart.events.scrolled && (e.w.config.chart.events.scrolled = function() {
						s.updateSourceChart(e)
					})
				}), n.config.chart.events.selection = function(t, e) {
					i.forEach(function(t) {
						var s = ApexCharts.getChartByID(t),
							a = O.clone(n.config.yaxis),
							t = (n.config.chart.brush.autoScaleYaxis && 1 === s.w.globals.series.length && (a = new x(s).autoScaleY(s, a, e)), s.w.config.yaxis.reduce(function(t, e, i) {
								return [].concat(b(t), [P(P({}, s.w.config.yaxis[i]), {}, {
									min: a[0].min,
									max: a[0].max
								})])
							}, []));
						s.ctx.updateHelpers._updateOptions({
							xaxis: {
								min: e.xaxis.min,
								max: e.xaxis.max
							},
							yaxis: t
						}, !1, !1, !1, !1)
					})
				})
			}
		}]), di),
		ci = (t(hi, [{
			key: "_updateOptions",
			value: function(c) {
				var h = this,
					d = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
					u = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
					t = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
					g = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
				return new Promise(function(r) {
					var l = [h.ctx];
					t && (l = h.ctx.getSyncedCharts()), h.ctx.w.globals.isExecCalled && (l = [h.ctx], h.ctx.w.globals.isExecCalled = !1), l.forEach(function(t, e) {
						var i = t.w;
						if (i.globals.shouldAnimate = u, d || (i.globals.resized = !0, i.globals.dataChanged = !0, u && t.series.getPreviousPaths()), c && "object" === v(c) && (t.config = new p(c), c = I.extendArrayProps(t.config, c, i), t.w.globals.chartID !== h.ctx.w.globals.chartID && delete c.series, i.config = O.extend(i.config, c), g) && (i.globals.lastXAxis = c.xaxis ? O.clone(c.xaxis) : [], i.globals.lastYAxis = c.yaxis ? O.clone(c.yaxis) : [], i.globals.initialConfig = O.extend({}, i.config), i.globals.initialSeries = O.clone(i.config.series), c.series)) {
							for (var s = 0; s < i.globals.collapsedSeriesIndices.length; s++) {
								var a = i.config.series[i.globals.collapsedSeriesIndices[s]];
								i.globals.collapsedSeries[s].data = i.globals.axisCharts ? a.data.slice() : a
							}
							for (var n = 0; n < i.globals.ancillaryCollapsedSeriesIndices.length; n++) {
								var o = i.config.series[i.globals.ancillaryCollapsedSeriesIndices[n]];
								i.globals.ancillaryCollapsedSeries[n].data = i.globals.axisCharts ? o.data.slice() : o
							}
							t.series.emptyCollapsedSeries(i.config.series)
						}
						return t.update(c).then(function() {
							e === l.length - 1 && r(t)
						})
					})
				})
			}
		}, {
			key: "_updateSeries",
			value: function(s, a) {
				var n = this,
					o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
				return new Promise(function(t) {
					var e, i = n.w;
					return i.globals.shouldAnimate = a, i.globals.dataChanged = !0, a && n.ctx.series.getPreviousPaths(), i.globals.axisCharts ? (0 === (e = s.map(function(t, e) {
						return n._extendSeries(t, e)
					})).length && (e = [{
						data: []
					}]), i.config.series = e) : i.config.series = s.slice(), o && (i.globals.initialConfig.series = O.clone(i.config.series), i.globals.initialSeries = O.clone(i.config.series)), n.ctx.update().then(function() {
						t(n.ctx)
					})
				})
			}
		}, {
			key: "_extendSeries",
			value: function(t, e) {
				var i = this.w,
					s = i.config.series[e];
				return P(P({}, i.config.series[e]), {}, {
					name: t.name || s && s.name,
					color: t.color || s && s.color,
					type: t.type || s && s.type,
					group: t.group || s && s.group,
					data: t.data || s && s.data
				})
			}
		}, {
			key: "toggleDataPointSelection",
			value: function(t, e) {
				var i = this.w,
					s = null,
					a = ".apexcharts-series[data\\:realIndex='".concat(t, "']");
				return i.globals.axisCharts ? s = i.globals.dom.Paper.select("".concat(a, " path[j='").concat(e, "'], ").concat(a, " circle[j='").concat(e, "'], ").concat(a, " rect[j='").concat(e, "']")).members[0] : void 0 === e && (s = i.globals.dom.Paper.select("".concat(a, " path[j='").concat(t, "']")).members[0], "pie" !== i.config.chart.type && "polarArea" !== i.config.chart.type && "donut" !== i.config.chart.type || this.ctx.pie.pieClicked(t)), s ? (new D(this.ctx).pathMouseDown(s, null), s.node || null) : (console.warn("toggleDataPointSelection: Element not found"), null)
			}
		}, {
			key: "forceXAxisUpdate",
			value: function(e) {
				var t, i = this.w;
				return ["min", "max"].forEach(function(t) {
					void 0 !== e.xaxis[t] && (i.config.xaxis[t] = e.xaxis[t], i.globals.lastXAxis[t] = e.xaxis[t])
				}), e.xaxis.categories && e.xaxis.categories.length && (i.config.xaxis.categories = e.xaxis.categories), i.config.xaxis.convertedCatToNumeric && (t = new r(e), e = t.convertCatToNumericXaxis(e, this.ctx)), e
			}
		}, {
			key: "forceYAxisUpdate",
			value: function(i) {
				return i.chart && i.chart.stacked && "100%" === i.chart.stackType && (Array.isArray(i.yaxis) ? i.yaxis.forEach(function(t, e) {
					i.yaxis[e].min = 0, i.yaxis[e].max = 100
				}) : (i.yaxis.min = 0, i.yaxis.max = 100)), i
			}
		}, {
			key: "revertDefaultAxisMinMax",
			value: function(t) {
				var s = this,
					a = this.w,
					e = a.globals.lastXAxis,
					n = a.globals.lastYAxis;
				t && t.xaxis && (e = t.xaxis), t && t.yaxis && (n = t.yaxis), a.config.xaxis.min = e.min, a.config.xaxis.max = e.max;
				a.config.yaxis.map(function(t, e) {
					var i;
					a.globals.zoomed || void 0 !== n[e] ? void 0 !== n[i = e] && (a.config.yaxis[i].min = n[i].min, a.config.yaxis[i].max = n[i].max) : void 0 !== s.ctx.opts.yaxis[e] && (t.min = s.ctx.opts.yaxis[e].min, t.max = s.ctx.opts.yaxis[e].max)
				})
			}
		}]), hi);

	function hi(t) {
		s(this, hi), this.ctx = t, this.w = t.w
	}

	function di(t, e) {
		s(this, di), this.ctx = e, this.w = e.w, this.el = t
	}

	function ui(t) {
		s(this, ui), this.ctx = t, this.w = t.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC
	}

	function gi(t, e) {
		s(this, gi), this.ctx = t, this.w = t.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new qt(t), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = []
	}

	function z(t) {
		(this.el = t).remember("_selectHandler", this), this.pointSelection = {
			isSelected: !1
		}, this.rectSelection = {
			isSelected: !1
		}, this.pointsList = {
			lt: [0, 0],
			rt: ["width", 0],
			rb: ["width", "height"],
			lb: [0, "height"],
			t: ["width", 0],
			r: ["width", "height"],
			b: ["width", "height"],
			l: [0, "height"]
		}, this.pointCoord = function(t, e, i) {
			e = "string" != typeof t ? t : e[t];
			return i ? e / 2 : e
		}, this.pointCoords = function(t, e) {
			var i = this.pointsList[t];
			return {
				x: this.pointCoord(i[0], e, "t" === t || "b" === t),
				y: this.pointCoord(i[1], e, "r" === t || "l" === t)
			}
		}
	}

	function pi(t) {
		switch (t[0]) {
			case "z":
			case "Z":
				t[0] = "L", t[1] = this.start[0], t[2] = this.start[1];
				break;
			case "H":
				t[0] = "L", t[2] = this.pos[1];
				break;
			case "V":
				t[0] = "L", t[2] = t[1], t[1] = this.pos[0];
				break;
			case "T":
				t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0];
				break;
			case "S":
				t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0]
		}
		return t
	}

	function fi(t) {
		var e = t.length;
		return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t
	}

	function xi(t) {
		var e = [t];
		switch (t[0]) {
			case "M":
				return this.pos = this.start = [t[1], t[2]], e;
			case "L":
				t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1];
				break;
			case "Q":
				t[6] = t[4], t[5] = t[3], t[4] = +t[4] / 3 + 2 * t[2] / 3, t[3] = +t[3] / 3 + 2 * t[1] / 3, t[2] = +this.pos[1] / 3 + 2 * t[2] / 3, t[1] = +this.pos[0] / 3 + 2 * t[1] / 3;
				break;
			case "A":
				t = (e = function(t, e) {
					var i, s, a, n, o, r, l, c, h, d, u, g, p, f, x, m, b, v, y, w = Math.abs(e[1]),
						k = Math.abs(e[2]),
						A = e[3] % 360,
						C = e[4],
						S = e[5],
						T = e[6],
						L = e[7],
						e = new SVG.Point(t),
						t = new SVG.Point(T, L),
						E = [];
					if (0 === w || 0 === k || e.x === t.x && e.y === t.y) return [
						["C", e.x, e.y, t.x, t.y, t.x, t.y]
					];
					for (1 < (o = (o = new SVG.Point((e.x - t.x) / 2, (e.y - t.y) / 2).transform((new SVG.Matrix).rotate(A))).x * o.x / (w * w) + o.y * o.y / (k * k)) && (w *= o = Math.sqrt(o), k *= o), i = (new SVG.Matrix).rotate(A).scale(1 / w, 1 / k).rotate(-A), e = e.transform(i), a = (o = [(t = t.transform(i)).x - e.x, t.y - e.y])[0] * o[0] + o[1] * o[1], n = Math.sqrt(a), o[0] /= n, o[1] /= n, n = a < 4 ? Math.sqrt(1 - a / 4) : 0, C === S && (n *= -1), s = new SVG.Point((t.x + e.x) / 2 + n * -o[1], (t.y + e.y) / 2 + n * o[0]), a = new SVG.Point(e.x - s.x, e.y - s.y), C = new SVG.Point(t.x - s.x, t.y - s.y), n = Math.acos(a.x / Math.sqrt(a.x * a.x + a.y * a.y)), a.y < 0 && (n *= -1), o = Math.acos(C.x / Math.sqrt(C.x * C.x + C.y * C.y)), C.y < 0 && (o *= -1), S && o < n && (o += 2 * Math.PI), !S && n < o && (o -= 2 * Math.PI), h = [], r = (o - (d = n)) / (l = Math.ceil(2 * Math.abs(n - o) / Math.PI)), c = 4 * Math.tan(r / 4) / 3, f = 0; f <= l; f++) g = Math.cos(d), u = Math.sin(d), p = new SVG.Point(s.x + g, s.y + u), h[f] = [new SVG.Point(p.x + c * u, p.y - c * g), p, new SVG.Point(p.x - c * u, p.y + c * g)], d += r;
					for (h[0][0] = h[0][1].clone(), h[h.length - 1][2] = h[h.length - 1][1].clone(), i = (new SVG.Matrix).rotate(A).scale(w, k).rotate(-A), f = 0, x = h.length; f < x; f++) h[f][0] = h[f][0].transform(i), h[f][1] = h[f][1].transform(i), h[f][2] = h[f][2].transform(i);
					for (f = 1, x = h.length; f < x; f++) m = (p = h[f - 1][2]).x, b = p.y, v = (p = h[f][0]).x, y = p.y, T = (p = h[f][1]).x, L = p.y, E.push(["C", m, b, v, y, T, L]);
					return E
				}(this.pos, t))[0]
		}
		return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e
	}

	function mi(t, e) {
		if (!1 !== e)
			for (var i = e, s = t.length; i < s; ++i)
				if ("M" == t[i][0]) return i;
		return !1
	}
	m = "undefined" != typeof window ? window : void 0, M = function(a, n) {
			var c = (void 0 !== this ? this : a).SVG = function(t) {
				if (c.supported) return t = new c.Doc(t), c.parser.draw || c.prepare(), t
			};
			if (c.ns = "http://www.w3.org/2000/svg", c.xmlns = "http://www.w3.org/2000/xmlns/", c.xlink = "http://www.w3.org/1999/xlink", c.svgjs = "http://svgjs.dev", c.supported = !0, !c.supported) return !1;
			c.did = 1e3, c.eid = function(t) {
				return "Svgjs" + r(t) + c.did++
			}, c.create = function(t) {
				var e = n.createElementNS(this.ns, t);
				return e.setAttribute("id", this.eid(t)), e
			}, c.extend = function() {
				for (var t, e = (t = [].slice.call(arguments)).pop(), i = t.length - 1; 0 <= i; i--)
					if (t[i])
						for (var s in e) t[i].prototype[s] = e[s];
				c.Set && c.Set.inherit && c.Set.inherit()
			}, c.invent = function(t) {
				var e = "function" == typeof t.create ? t.create : function() {
					this.constructor.call(this, c.create(t.create))
				};
				return t.inherit && (e.prototype = new t.inherit), t.extend && c.extend(e, t.extend), t.construct && c.extend(t.parent || c.Container, t.construct), e
			}, c.adopt = function(t) {
				return t ? t.instance || ((e = "svg" == t.nodeName ? new(t.parentNode instanceof a.SVGElement ? c.Nested : c.Doc) : "linearGradient" == t.nodeName ? new c.Gradient("linear") : "radialGradient" == t.nodeName ? new c.Gradient("radial") : c[r(t.nodeName)] ? new c[r(t.nodeName)] : new c.Element(t)).type = t.nodeName, ((e.node = t).instance = e) instanceof c.Doc && e.namespace().defs(), e.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), e) : null;
				var e
			}, c.prepare = function() {
				var t = n.getElementsByTagName("body")[0],
					e = (t ? new c.Doc(t) : c.adopt(n.documentElement).nested()).size(2, 0);
				c.parser = {
					body: t || n.documentElement,
					draw: e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
					poly: e.polyline().node,
					path: e.path().node,
					native: c.create("svg")
				}
			}, c.parser = {
				native: c.create("svg")
			}, n.addEventListener("DOMContentLoaded", function() {
				c.parser.draw || c.prepare()
			}, !1), c.regex = {
				numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
				hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
				rgb: /rgb\((\d+),(\d+),(\d+)\)/,
				reference: /#([a-z0-9\-_]+)/i,
				transforms: /\)\s*,?\s*/,
				whitespace: /\s/g,
				isHex: /^#[a-f0-9]{3,6}$/i,
				isRgb: /^rgb\(/,
				isCss: /[^:]+:[^;]+;?/,
				isBlank: /^(\s+)?$/,
				isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
				isPercent: /^-?[\d\.]+%$/,
				isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
				delimiter: /[\s,]+/,
				hyphen: /([^e])\-/gi,
				pathLetters: /[MLHVCSQTAZ]/gi,
				isPathLetter: /[MLHVCSQTAZ]/i,
				numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
				dots: /\./g
			}, c.utils = {
				map: function(t, e) {
					for (var i = t.length, s = [], a = 0; a < i; a++) s.push(e(t[a]));
					return s
				},
				filter: function(t, e) {
					for (var i = t.length, s = [], a = 0; a < i; a++) e(t[a]) && s.push(t[a]);
					return s
				},
				filterSVGElements: function(t) {
					return this.filter(t, function(t) {
						return t instanceof a.SVGElement
					})
				}
			}, c.defaults = {
				attrs: {
					"fill-opacity": 1,
					"stroke-opacity": 1,
					"stroke-width": 0,
					"stroke-linejoin": "miter",
					"stroke-linecap": "butt",
					fill: "#000000",
					stroke: "#000000",
					opacity: 1,
					x: 0,
					y: 0,
					cx: 0,
					cy: 0,
					width: 0,
					height: 0,
					r: 0,
					rx: 0,
					ry: 0,
					offset: 0,
					"stop-opacity": 1,
					"stop-color": "#000000",
					"font-size": 16,
					"font-family": "Helvetica, Arial, sans-serif",
					"text-anchor": "start"
				}
			}, c.Color = function(t) {
				var e, i;
				this.r = 0, this.g = 0, this.b = 0, t && ("string" == typeof t ? c.regex.isRgb.test(t) ? (e = c.regex.rgb.exec(t.replace(c.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : c.regex.isHex.test(t) && (e = c.regex.hex.exec(4 == (i = t).length ? ["#", i.substring(1, 2), i.substring(1, 2), i.substring(2, 3), i.substring(2, 3), i.substring(3, 4), i.substring(3, 4)].join("") : i), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === v(t) && (this.r = t.r, this.g = t.g, this.b = t.b))
			}, c.extend(c.Color, {
				toString: function() {
					return this.toHex()
				},
				toHex: function() {
					return "#" + d(this.r) + d(this.g) + d(this.b)
				},
				toRgb: function() {
					return "rgb(" + [this.r, this.g, this.b].join() + ")"
				},
				brightness: function() {
					return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
				},
				morph: function(t) {
					return this.destination = new c.Color(t), this
				},
				at: function(t) {
					return this.destination ? new c.Color({
						r: ~~(this.r + (this.destination.r - this.r) * (t = t < 0 ? 0 : 1 < t ? 1 : t)),
						g: ~~(this.g + (this.destination.g - this.g) * t),
						b: ~~(this.b + (this.destination.b - this.b) * t)
					}) : this
				}
			}), c.Color.test = function(t) {
				return c.regex.isHex.test(t += "") || c.regex.isRgb.test(t)
			}, c.Color.isRgb = function(t) {
				return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
			}, c.Color.isColor = function(t) {
				return c.Color.isRgb(t) || c.Color.test(t)
			}, c.Array = function(t, e) {
				0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t)
			}, c.extend(c.Array, {
				toString: function() {
					return this.value.join(" ")
				},
				valueOf: function() {
					return this.value
				},
				parse: function(t) {
					return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
				}
			}), c.PointArray = function(t, e) {
				c.Array.call(this, t, e || [
					[0, 0]
				])
			}, c.PointArray.prototype = new c.Array, c.PointArray.prototype.constructor = c.PointArray;
			for (var l = {
					M: function(t, e, i) {
						return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
					},
					L: function(t, e) {
						return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
					},
					H: function(t, e) {
						return e.x = t[0], ["H", t[0]]
					},
					V: function(t, e) {
						return e.y = t[0], ["V", t[0]]
					},
					C: function(t, e) {
						return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
					},
					Q: function(t, e) {
						return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
					},
					S: function(t, e) {
						return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]]
					},
					Z: function(t, e, i) {
						return e.x = i.x, e.y = i.y, ["Z"]
					}
				}, t = "mlhvqtcsaz".split(""), e = 0, i = t.length; e < i; ++e) l[t[e]] = function(n) {
				return function(t, e, i) {
					if ("H" == n) t[0] = t[0] + e.x;
					else if ("V" == n) t[0] = t[0] + e.y;
					else if ("A" == n) t[5] = t[5] + e.x, t[6] = t[6] + e.y;
					else
						for (var s = 0, a = t.length; s < a; ++s) t[s] = t[s] + (s % 2 ? e.y : e.x);
					if (l && "function" == typeof l[n]) return l[n](t, e, i)
				}
			}(t[e].toUpperCase());
			c.PathArray = function(t, e) {
				c.Array.call(this, t, e || [
					["M", 0, 0]
				])
			}, c.PathArray.prototype = new c.Array, c.PathArray.prototype.constructor = c.PathArray, c.extend(c.PathArray, {
				toString: function() {
					for (var t = this.value, e = 0, i = t.length, s = ""; e < i; e++) s += t[e][0], null != t[e][1] && (s += t[e][1], null != t[e][2]) && (s = s + " " + t[e][2], null != t[e][3]) && (s = (s = s + " " + t[e][3]) + " " + t[e][4], null != t[e][5]) && (s = (s = s + " " + t[e][5]) + " " + t[e][6], null != t[e][7]) && (s = s + " " + t[e][7]);
					return s + " "
				},
				move: function(t, e) {
					var i = this.bbox();
					return i.x, i.y, this
				},
				at: function(t) {
					if (!this.destination) return this;
					for (var e = this.value, i = this.destination.value, s = [], a = new c.PathArray, n = 0, o = e.length; n < o; n++) {
						s[n] = [e[n][0]];
						for (var r = 1, l = e[n].length; r < l; r++) s[n][r] = e[n][r] + (i[n][r] - e[n][r]) * t;
						"A" === s[n][0] && (s[n][4] = +(0 != s[n][4]), s[n][5] = +(0 != s[n][5]))
					}
					return a.value = s, a
				},
				parse: function(t) {
					if (t instanceof c.PathArray) return t.valueOf();
					for (var e, i = {
							M: 2,
							L: 2,
							H: 1,
							V: 1,
							C: 6,
							S: 4,
							Q: 4,
							T: 2,
							A: 7,
							Z: 0
						}, s = (t = "string" == typeof t ? t.replace(c.regex.numbersWithDots, h).replace(c.regex.pathLetters, " $& ").replace(c.regex.hyphen, "$1 -").trim().split(c.regex.delimiter) : t.reduce(function(t, e) {
							return [].concat.call(t, e)
						}, []), []), a = new c.Point, n = new c.Point, o = 0, r = t.length; c.regex.isPathLetter.test(t[o]) ? (e = t[o], ++o) : "M" == e ? e = "L" : "m" == e && (e = "l"), s.push(l[e].call(null, t.slice(o, o += i[e.toUpperCase()]).map(parseFloat), a, n)), o < r;);
					return s
				},
				bbox: function() {
					return c.parser.draw || c.prepare(), c.parser.path.setAttribute("d", this.toString()), c.parser.path.getBBox()
				}
			}), c.Number = c.invent({
				create: function(t, e) {
					this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(c.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof c.Number && (this.value = t.valueOf(), this.unit = t.unit)
				},
				extend: {
					toString: function() {
						return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit
					},
					toJSON: function() {
						return this.toString()
					},
					valueOf: function() {
						return this.value
					},
					plus: function(t) {
						return t = new c.Number(t), new c.Number(this + t, this.unit || t.unit)
					},
					minus: function(t) {
						return t = new c.Number(t), new c.Number(this - t, this.unit || t.unit)
					},
					times: function(t) {
						return t = new c.Number(t), new c.Number(this * t, this.unit || t.unit)
					},
					divide: function(t) {
						return t = new c.Number(t), new c.Number(this / t, this.unit || t.unit)
					},
					to: function(t) {
						var e = new c.Number(this);
						return "string" == typeof t && (e.unit = t), e
					},
					morph: function(t) {
						return this.destination = new c.Number(t), t.relative && (this.destination.value += this.value), this
					},
					at: function(t) {
						return this.destination ? new c.Number(this.destination).minus(this).times(t).plus(this) : this
					}
				}
			}), c.Element = c.invent({
				create: function(t) {
					this._stroke = c.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, (this.node.instance = this)._stroke = t.getAttribute("stroke") || this._stroke)
				},
				extend: {
					x: function(t) {
						return this.attr("x", t)
					},
					y: function(t) {
						return this.attr("y", t)
					},
					cx: function(t) {
						return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
					},
					cy: function(t) {
						return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
					},
					move: function(t, e) {
						return this.x(t).y(e)
					},
					center: function(t, e) {
						return this.cx(t).cy(e)
					},
					width: function(t) {
						return this.attr("width", t)
					},
					height: function(t) {
						return this.attr("height", t)
					},
					size: function(t, e) {
						t = u(this, t, e);
						return this.width(new c.Number(t.width)).height(new c.Number(t.height))
					},
					clone: function(t) {
						this.writeDataToDom();
						var e = f(this.node.cloneNode(!0));
						return t ? t.add(e) : this.after(e), e
					},
					remove: function() {
						return this.parent() && this.parent().removeElement(this), this
					},
					replace: function(t) {
						return this.after(t).remove(), t
					},
					addTo: function(t) {
						return t.put(this)
					},
					putIn: function(t) {
						return t.add(this)
					},
					id: function(t) {
						return this.attr("id", t)
					},
					show: function() {
						return this.style("display", "")
					},
					hide: function() {
						return this.style("display", "none")
					},
					visible: function() {
						return "none" != this.style("display")
					},
					toString: function() {
						return this.attr("id")
					},
					classes: function() {
						var t = this.attr("class");
						return null == t ? [] : t.trim().split(c.regex.delimiter)
					},
					hasClass: function(t) {
						return -1 != this.classes().indexOf(t)
					},
					addClass: function(t) {
						var e;
						return this.hasClass(t) || ((e = this.classes()).push(t), this.attr("class", e.join(" "))), this
					},
					removeClass: function(e) {
						return this.hasClass(e) && this.attr("class", this.classes().filter(function(t) {
							return t != e
						}).join(" ")), this
					},
					toggleClass: function(t) {
						return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
					},
					reference: function(t) {
						return c.get(this.attr(t))
					},
					parent: function(t) {
						var e = this;
						if (!e.node.parentNode) return null;
						if (e = c.adopt(e.node.parentNode), !t) return e;
						for (; e && e.node instanceof a.SVGElement;) {
							if ("string" == typeof t ? e.matches(t) : e instanceof t) return e;
							if (!e.node.parentNode || "#document" == e.node.parentNode.nodeName) return null;
							e = c.adopt(e.node.parentNode)
						}
					},
					doc: function() {
						return this instanceof c.Doc ? this : this.parent(c.Doc)
					},
					parents: function(t) {
						for (var e = [], i = this;
							(i = i.parent(t)) && i.node && (e.push(i), i.parent););
						return e
					},
					matches: function(t) {
						return ((e = this.node).matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
						var e
					},
					native: function() {
						return this.node
					},
					svg: function(t) {
						var e = n.createElement("svg");
						if (!(t && this instanceof c.Parent)) return e.appendChild(t = n.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
						e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
						for (var i = 0, s = e.firstChild.childNodes.length; i < s; i++) this.node.appendChild(e.firstChild.firstChild);
						return this
					},
					writeDataToDom: function() {
						return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
							this.writeDataToDom()
						}), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this
					},
					setData: function(t) {
						return this.dom = t, this
					},
					is: function(t) {
						return this instanceof t
					}
				}
			}), c.easing = {
				"-": function(t) {
					return t
				},
				"<>": function(t) {
					return -Math.cos(t * Math.PI) / 2 + .5
				},
				">": function(t) {
					return Math.sin(t * Math.PI / 2)
				},
				"<": function(t) {
					return 1 - Math.cos(t * Math.PI / 2)
				}
			}, c.morph = function(i) {
				return function(t, e) {
					return new c.MorphObj(t, e).at(i)
				}
			}, c.Situation = c.invent({
				create: function(t) {
					this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new c.Number(t.duration).valueOf(), this.delay = new c.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {}
				}
			}), c.FX = c.invent({
				create: function(t) {
					this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1
				},
				extend: {
					animate: function(t, e, i) {
						"object" === v(t) && (e = t.ease, i = t.delay, t = t.duration);
						t = new c.Situation({
							duration: t || 1e3,
							delay: i || 0,
							ease: c.easing[e || "-"] || e
						});
						return this.queue(t), this
					},
					target: function(t) {
						return t && t instanceof c.Element ? (this._target = t, this) : this._target
					},
					timeToAbsPos: function(t) {
						return (t - this.situation.start) / (this.situation.duration / this._speed)
					},
					absPosToTime: function(t) {
						return this.situation.duration / this._speed * t + this.situation.start
					},
					startAnimFrame: function() {
						this.stopAnimFrame(), this.animationFrame = a.requestAnimationFrame(function() {
							this.step()
						}.bind(this))
					},
					stopAnimFrame: function() {
						a.cancelAnimationFrame(this.animationFrame)
					},
					start: function() {
						return !this.active && this.situation && (this.active = !0, this.startCurrent()), this
					},
					startCurrent: function() {
						return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step()
					},
					queue: function(t) {
						return ("function" == typeof t || t instanceof c.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this
					},
					dequeue: function() {
						return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof c.Situation ? this.start() : this.situation.call(this)), this
					},
					initAnimations: function() {
						var t, e = this.situation;
						if (!e.init) {
							for (var i in e.animations) {
								t = this.target()[i](), Array.isArray(t) || (t = [t]), Array.isArray(e.animations[i]) || (e.animations[i] = [e.animations[i]]);
								for (var s = t.length; s--;) e.animations[i][s] instanceof c.Number && (t[s] = new c.Number(t[s])), e.animations[i][s] = t[s].morph(e.animations[i][s])
							}
							for (var i in e.attrs) e.attrs[i] = new c.MorphObj(this.target().attr(i), e.attrs[i]);
							for (var i in e.styles) e.styles[i] = new c.MorphObj(this.target().style(i), e.styles[i]);
							e.initialTransformation = this.target().matrixify(), e.init = !0
						}
						return this
					},
					clearQueue: function() {
						return this.situations = [], this
					},
					clearCurrent: function() {
						return this.situation = null, this
					},
					stop: function(t, e) {
						var i = this.active;
						return this.active = !1, e && this.clearQueue(), t && this.situation && (i || this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent()
					},
					after: function(i) {
						var s = this.last();
						return this.target().on("finished.fx", function t(e) {
							e.detail.situation == s && (i.call(this, s), this.off("finished.fx", t))
						}), this._callStart()
					},
					during: function(e) {
						function t(t) {
							t.detail.situation == i && e.call(this, t.detail.pos, c.morph(t.detail.pos), t.detail.eased, i)
						}
						var i = this.last();
						return this.target().off("during.fx", t).on("during.fx", t), this.after(function() {
							this.off("during.fx", t)
						}), this._callStart()
					},
					afterAll: function(e) {
						function i(t) {
							e.call(this), this.off("allfinished.fx", i)
						}
						return this.target().off("allfinished.fx", i).on("allfinished.fx", i), this._callStart()
					},
					last: function() {
						return this.situations.length ? this.situations[this.situations.length - 1] : this.situation
					},
					add: function(t, e, i) {
						return this.last()[i || "animations"][t] = e, this._callStart()
					},
					step: function(t) {
						t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (t = Math.max(this.absPos, 0), e = Math.floor(t), !0 === this.situation.loops || e < this.situation.loops ? (this.pos = t - e, i = this.situation.loop, this.situation.loop = e) : (this.absPos = this.situation.loops, this.pos = 1, i = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - i) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
						var e, i, s, a = this.situation.ease(this.pos);
						for (s in this.situation.once) s > this.lastPos && s <= a && (this.situation.once[s].call(this.target(), this.pos, a), delete this.situation.once[s]);
						return this.active && this.target().fire("during", {
							pos: this.pos,
							eased: a,
							fx: this,
							situation: this.situation
						}), this.situation && (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
							fx: this,
							situation: this.situation
						}), this.situations.length || (this.target().fire("allfinished"), this.situations.length) || (this.target().off(".fx"), this.active = !1), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = a), this
					},
					eachAt: function() {
						var t, e = this,
							i = this.target(),
							s = this.situation;
						for (t in s.animations) o = [].concat(s.animations[t]).map(function(t) {
							return "string" != typeof t && t.at ? t.at(s.ease(e.pos), e.pos) : t
						}), i[t].apply(i, o);
						for (t in s.attrs) o = [t].concat(s.attrs[t]).map(function(t) {
							return "string" != typeof t && t.at ? t.at(s.ease(e.pos), e.pos) : t
						}), i.attr.apply(i, o);
						for (t in s.styles) o = [t].concat(s.styles[t]).map(function(t) {
							return "string" != typeof t && t.at ? t.at(s.ease(e.pos), e.pos) : t
						}), i.style.apply(i, o);
						if (s.transforms.length) {
							o = s.initialTransformation, t = 0;
							for (var a = s.transforms.length; t < a; t++) var n = s.transforms[t],
								o = n instanceof c.Matrix ? n.relative ? o.multiply((new c.Matrix).morph(n).at(s.ease(this.pos))) : o.morph(n).at(s.ease(this.pos)) : (n.relative || n.undo(o.extract()), o.multiply(n.at(s.ease(this.pos))));
							i.matrix(o)
						}
						return this
					},
					once: function(t, e, i) {
						var s = this.last();
						return i || (t = s.ease(t)), s.once[t] = e, this
					},
					_callStart: function() {
						return setTimeout(function() {
							this.start()
						}.bind(this), 0), this
					}
				},
				parent: c.Element,
				construct: {
					animate: function(t, e, i) {
						return (this.fx || (this.fx = new c.FX(this))).animate(t, e, i)
					},
					delay: function(t) {
						return (this.fx || (this.fx = new c.FX(this))).delay(t)
					},
					stop: function(t, e) {
						return this.fx && this.fx.stop(t, e), this
					},
					finish: function() {
						return this.fx && this.fx.finish(), this
					}
				}
			}), c.MorphObj = c.invent({
				create: function(t, e) {
					return c.Color.isColor(e) ? new c.Color(t).morph(e) : c.regex.delimiter.test(t) ? new(c.regex.pathLetters.test(t) ? c.PathArray : c.Array)(t).morph(e) : c.regex.numberAndUnit.test(e) ? new c.Number(t).morph(e) : (this.value = t, void(this.destination = e))
				},
				extend: {
					at: function(t, e) {
						return e < 1 ? this.value : this.destination
					},
					valueOf: function() {
						return this.value
					}
				}
			}), c.extend(c.FX, {
				attr: function(t, e, i) {
					if ("object" === v(t))
						for (var s in t) this.attr(s, t[s]);
					else this.add(t, e, "attrs");
					return this
				},
				plot: function(t, e, i, s) {
					return 4 == arguments.length ? this.plot([t, e, i, s]) : this.add("plot", new(this.target().morphArray)(t))
				}
			}), c.Box = c.invent({
				create: function(t, e, i, s) {
					if (!("object" !== v(t) || t instanceof c.Element)) return c.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
					4 == arguments.length && (this.x = t, this.y = e, this.width = i, this.height = s), null == (t = this).x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2
				}
			}), c.BBox = c.invent({
				create: function(e) {
					if (c.Box.apply(this, [].slice.call(arguments)), e instanceof c.Element) {
						var i, s;
						try {
							if (!n.documentElement.contains) {
								for (var t = e.node; t.parentNode;) t = t.parentNode;
								if (t != n) throw new Error("Element not in the dom")
							}
							i = e.node.getBBox()
						} catch (t) {
							e instanceof c.Shape ? (c.parser.draw || c.prepare(), (s = e.clone(c.parser.draw.instance).show()) && s.node && "function" == typeof s.node.getBBox && (i = s.node.getBBox()), s && "function" == typeof s.remove && s.remove()) : i = {
								x: e.node.clientLeft,
								y: e.node.clientTop,
								width: e.node.clientWidth,
								height: e.node.clientHeight
							}
						}
						c.Box.call(this, i)
					}
				},
				inherit: c.Box,
				parent: c.Element,
				construct: {
					bbox: function() {
						return new c.BBox(this)
					}
				}
			}), c.BBox.prototype.constructor = c.BBox, c.Matrix = c.invent({
				create: function(t) {
					var e = p([1, 0, 0, 1, 0, 0]);
					t = null === t ? e : t instanceof c.Element ? t.matrixify() : "string" == typeof t ? p(t.split(c.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? p([].slice.call(arguments)) : Array.isArray(t) ? p(t) : t && "object" === v(t) ? t : e;
					for (var i = b.length - 1; 0 <= i; --i) this[b[i]] = (null != t[b[i]] ? t : e)[b[i]]
				},
				extend: {
					extract: function() {
						var t = g(this, 0, 1),
							t = (g(this, 1, 0), 180 / Math.PI * Math.atan2(t.y, t.x) - 90);
						return {
							x: this.e,
							y: this.f,
							transformedX: (this.e * Math.cos(t * Math.PI / 180) + this.f * Math.sin(t * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
							transformedY: (this.f * Math.cos(t * Math.PI / 180) + this.e * Math.sin(-t * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
							rotation: t,
							a: this.a,
							b: this.b,
							c: this.c,
							d: this.d,
							e: this.e,
							f: this.f,
							matrix: new c.Matrix(this)
						}
					},
					clone: function() {
						return new c.Matrix(this)
					},
					morph: function(t) {
						return this.destination = new c.Matrix(t), this
					},
					multiply: function(t) {
						return new c.Matrix(this.native().multiply((t = (t = t) instanceof c.Matrix ? t : new c.Matrix(t)).native()))
					},
					inverse: function() {
						return new c.Matrix(this.native().inverse())
					},
					translate: function(t, e) {
						return new c.Matrix(this.native().translate(t || 0, e || 0))
					},
					native: function() {
						for (var t = c.parser.native.createSVGMatrix(), e = b.length - 1; 0 <= e; e--) t[b[e]] = this[b[e]];
						return t
					},
					toString: function() {
						return "matrix(" + x(this.a) + "," + x(this.b) + "," + x(this.c) + "," + x(this.d) + "," + x(this.e) + "," + x(this.f) + ")"
					}
				},
				parent: c.Element,
				construct: {
					ctm: function() {
						return new c.Matrix(this.node.getCTM())
					},
					screenCTM: function() {
						var t, e;
						return this instanceof c.Nested ? (e = (t = this.rect(1, 1)).node.getScreenCTM(), t.remove(), new c.Matrix(e)) : new c.Matrix(this.node.getScreenCTM())
					}
				}
			}), c.Point = c.invent({
				create: function(t, e) {
					e = Array.isArray(t) ? {
						x: t[0],
						y: t[1]
					} : "object" === v(t) ? {
						x: t.x,
						y: t.y
					} : null != t ? {
						x: t,
						y: null != e ? e : t
					} : {
						x: 0,
						y: 0
					};
					this.x = e.x, this.y = e.y
				},
				extend: {
					clone: function() {
						return new c.Point(this)
					},
					morph: function(t, e) {
						return this.destination = new c.Point(t, e), this
					}
				}
			}), c.extend(c.Element, {
				point: function(t, e) {
					return new c.Point(t, e).transform(this.screenCTM().inverse())
				}
			}), c.extend(c.Element, {
				attr: function(t, e, i) {
					if (null == t) {
						for (t = {}, i = (e = this.node.attributes).length - 1; 0 <= i; i--) t[e[i].nodeName] = c.regex.isNumber.test(e[i].nodeValue) ? parseFloat(e[i].nodeValue) : e[i].nodeValue;
						return t
					}
					if ("object" === v(t))
						for (var s in t) this.attr(s, t[s]);
					else if (null === e) this.node.removeAttribute(t);
					else {
						if (null == e) return null == (e = this.node.getAttribute(t)) ? c.defaults.attrs[t] : c.regex.isNumber.test(e) ? parseFloat(e) : e;
						"stroke-width" == t ? this.attr("stroke", 0 < parseFloat(e) ? this._stroke : null) : "stroke" == t && (this._stroke = e), "fill" != t && "stroke" != t || (e = c.regex.isImage.test(e) ? this.doc().defs().image(e, 0, 0) : e) instanceof c.Image && (e = this.doc().defs().pattern(0, 0, function() {
							this.add(e)
						})), "number" == typeof e ? e = new c.Number(e) : c.Color.isColor(e) ? e = new c.Color(e) : Array.isArray(e) && (e = new c.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e)
					}
					return this
				}
			}), c.extend(c.Element, {
				transform: function(t, e) {
					var i;
					return "object" !== v(t) ? (i = new c.Matrix(this).extract(), "string" == typeof t ? i[t] : i) : (i = new c.Matrix(this), e = !!e || !!t.relative, null != t.a && (i = e ? i.multiply(new c.Matrix(t)) : new c.Matrix(t)), this.attr("transform", i))
				}
			}), c.extend(c.Element, {
				untransform: function() {
					return this.attr("transform", null)
				},
				matrixify: function() {
					return (this.attr("transform") || "").split(c.regex.transforms).slice(0, -1).map(function(t) {
						t = t.trim().split("(");
						return [t[0], t[1].split(c.regex.delimiter).map(function(t) {
							return parseFloat(t)
						})]
					}).reduce(function(t, e) {
						return "matrix" == e[0] ? t.multiply(p(e[1])) : t[e[0]].apply(t, e[1])
					}, new c.Matrix)
				},
				toParent: function(t) {
					var e, i;
					return this != t && (e = this.screenCTM(), i = t.screenCTM().inverse(), this.addTo(t).untransform().transform(i.multiply(e))), this
				},
				toDoc: function() {
					return this.toParent(this.doc())
				}
			}), c.Transformation = c.invent({
				create: function(t, e) {
					if (1 < arguments.length && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(arguments));
					if (Array.isArray(t))
						for (var i = 0, s = this.arguments.length; i < s; ++i) this[this.arguments[i]] = t[i];
					else if (t && "object" === v(t))
						for (i = 0, s = this.arguments.length; i < s; ++i) this[this.arguments[i]] = t[this.arguments[i]];
					!(this.inversed = !1) === e && (this.inversed = !0)
				}
			}), c.Translate = c.invent({
				parent: c.Matrix,
				inherit: c.Transformation,
				create: function(t, e) {
					this.constructor.apply(this, [].slice.call(arguments))
				},
				extend: {
					arguments: ["transformedX", "transformedY"],
					method: "translate"
				}
			}), c.extend(c.Element, {
				style: function(t, e) {
					if (0 == arguments.length) return this.node.style.cssText || "";
					if (arguments.length < 2)
						if ("object" === v(t))
							for (var i in t) this.style(i, t[i]);
						else {
							if (!c.regex.isCss.test(t)) return this.node.style[o(t)];
							for (t = t.split(/\s*;\s*/).filter(function(t) {
									return !!t
								}).map(function(t) {
									return t.split(/\s*:\s*/)
								}); e = t.pop();) this.style(e[0], e[1])
						}
					else this.node.style[o(t)] = null === e || c.regex.isBlank.test(e) ? "" : e;
					return this
				}
			}), c.Parent = c.invent({
				create: function(t) {
					this.constructor.call(this, t)
				},
				inherit: c.Element,
				extend: {
					children: function() {
						return c.utils.map(c.utils.filterSVGElements(this.node.childNodes), function(t) {
							return c.adopt(t)
						})
					},
					add: function(t, e) {
						return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
					},
					put: function(t, e) {
						return this.add(t, e), t
					},
					has: function(t) {
						return 0 <= this.index(t)
					},
					index: function(t) {
						return [].slice.call(this.node.childNodes).indexOf(t.node)
					},
					get: function(t) {
						return c.adopt(this.node.childNodes[t])
					},
					first: function() {
						return this.get(0)
					},
					last: function() {
						return this.get(this.node.childNodes.length - 1)
					},
					each: function(t, e) {
						for (var i = this.children(), s = 0, a = i.length; s < a; s++) i[s] instanceof c.Element && t.apply(i[s], [s, i]), e && i[s] instanceof c.Container && i[s].each(t, e);
						return this
					},
					removeElement: function(t) {
						return this.node.removeChild(t.node), this
					},
					clear: function() {
						for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
						return delete this._defs, this
					},
					defs: function() {
						return this.doc().defs()
					}
				}
			}), c.extend(c.Parent, {
				ungroup: function(t, e) {
					return 0 === e || this instanceof c.Defs || this.node == c.parser.draw || (t = t || (this instanceof c.Doc ? this : this.parent(c.Parent)), e = e || 1 / 0, this.each(function() {
						return this instanceof c.Defs ? this : this instanceof c.Parent ? this.ungroup(t, e - 1) : this.toParent(t)
					}), this.node.firstChild) || this.remove(), this
				},
				flatten: function(t, e) {
					return this.ungroup(t, e)
				}
			}), c.Container = c.invent({
				create: function(t) {
					this.constructor.call(this, t)
				},
				inherit: c.Parent
			}), c.ViewBox = c.invent({
				parent: c.Container,
				construct: {}
			}), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(e) {
				c.Element.prototype[e] = function(t) {
					return c.on(this.node, e, t), this
				}
			}), c.listeners = [], c.handlerMap = [], c.listenerId = 0, c.on = function(t, e, i, s, a) {
				var s = i.bind(s || t.instance || t),
					n = (c.handlerMap.indexOf(t) + 1 || c.handlerMap.push(t)) - 1,
					o = e.split(".")[0],
					e = e.split(".")[1] || "*";
				c.listeners[n] = c.listeners[n] || {}, c.listeners[n][o] = c.listeners[n][o] || {}, c.listeners[n][o][e] = c.listeners[n][o][e] || {}, i._svgjsListenerId || (i._svgjsListenerId = ++c.listenerId), c.listeners[n][o][e][i._svgjsListenerId] = s, t.addEventListener(o, s, a || {
					passive: !0
				})
			}, c.off = function(t, e, i) {
				var s = c.handlerMap.indexOf(t),
					a = e && e.split(".")[0],
					n = e && e.split(".")[1],
					o = "";
				if (-1 != s)
					if (i) !(i = "function" == typeof i ? i._svgjsListenerId : i) || c.listeners[s][a] && c.listeners[s][a][n || "*"] && (t.removeEventListener(a, c.listeners[s][a][n || "*"][i], !1), delete c.listeners[s][a][n || "*"][i]);
					else if (n && a) {
					if (c.listeners[s][a] && c.listeners[s][a][n]) {
						for (var r in c.listeners[s][a][n]) c.off(t, [a, n].join("."), r);
						delete c.listeners[s][a][n]
					}
				} else if (n)
					for (var l in c.listeners[s])
						for (var o in c.listeners[s][l]) n === o && c.off(t, [l, n].join("."));
				else if (a) {
					if (c.listeners[s][a]) {
						for (var o in c.listeners[s][a]) c.off(t, [a, o].join("."));
						delete c.listeners[s][a]
					}
				} else {
					for (var l in c.listeners[s]) c.off(t, l);
					delete c.listeners[s], delete c.handlerMap[s]
				}
			}, c.extend(c.Element, {
				on: function(t, e, i, s) {
					return c.on(this.node, t, e, i, s), this
				},
				off: function(t, e) {
					return c.off(this.node, t, e), this
				},
				fire: function(t, e) {
					return t instanceof a.Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(t = new c.CustomEvent(t, {
						detail: e,
						cancelable: !0
					})), this._event = t, this
				},
				event: function() {
					return this._event
				}
			}), c.Defs = c.invent({
				create: "defs",
				inherit: c.Container
			}), c.G = c.invent({
				create: "g",
				inherit: c.Container,
				extend: {
					x: function(t) {
						return null == t ? this.transform("x") : this.transform({
							x: t - this.x()
						}, !0)
					}
				},
				construct: {
					group: function() {
						return this.put(new c.G)
					}
				}
			}), c.Doc = c.invent({
				create: function(t) {
					t && ("svg" == (t = "string" == typeof t ? n.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, c.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs())
				},
				inherit: c.Container,
				extend: {
					namespace: function() {
						return this.attr({
							xmlns: c.ns,
							version: "1.1"
						}).attr("xmlns:xlink", c.xlink, c.xmlns).attr("xmlns:svgjs", c.svgjs, c.xmlns)
					},
					defs: function() {
						var t;
						return this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = c.adopt(t) : this._defs = new c.Defs, this.node.appendChild(this._defs.node)), this._defs
					},
					parent: function() {
						return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null
					},
					remove: function() {
						return this.parent() && this.parent().removeChild(this.node), this
					},
					clear: function() {
						for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
						return delete this._defs, c.parser.draw && !c.parser.draw.parentNode && this.node.appendChild(c.parser.draw), this
					},
					clone: function(t) {
						this.writeDataToDom();
						var e = this.node,
							i = f(e.cloneNode(!0));
						return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i
					}
				}
			}), c.extend(c.Element, {}), c.Gradient = c.invent({
				create: function(t) {
					this.constructor.call(this, c.create(t + "Gradient")), this.type = t
				},
				inherit: c.Container,
				extend: {
					at: function(t, e, i) {
						return this.put(new c.Stop).update(t, e, i)
					},
					update: function(t) {
						return this.clear(), "function" == typeof t && t.call(this, this), this
					},
					fill: function() {
						return "url(#" + this.id() + ")"
					},
					toString: function() {
						return this.fill()
					},
					attr: function(t, e, i) {
						return c.Container.prototype.attr.call(this, t = "transform" == t ? "gradientTransform" : t, e, i)
					}
				},
				construct: {
					gradient: function(t, e) {
						return this.defs().gradient(t, e)
					}
				}
			}), c.extend(c.Gradient, c.FX, {
				from: function(t, e) {
					return "radial" == (this._target || this).type ? this.attr({
						fx: new c.Number(t),
						fy: new c.Number(e)
					}) : this.attr({
						x1: new c.Number(t),
						y1: new c.Number(e)
					})
				},
				to: function(t, e) {
					return "radial" == (this._target || this).type ? this.attr({
						cx: new c.Number(t),
						cy: new c.Number(e)
					}) : this.attr({
						x2: new c.Number(t),
						y2: new c.Number(e)
					})
				}
			}), c.extend(c.Defs, {
				gradient: function(t, e) {
					return this.put(new c.Gradient(t)).update(e)
				}
			}), c.Stop = c.invent({
				create: "stop",
				inherit: c.Element,
				extend: {
					update: function(t) {
						return null != (t = "number" == typeof t || t instanceof c.Number ? {
							offset: arguments[0],
							color: arguments[1],
							opacity: arguments[2]
						} : t).opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new c.Number(t.offset)), this
					}
				}
			}), c.Pattern = c.invent({
				create: "pattern",
				inherit: c.Container,
				extend: {
					fill: function() {
						return "url(#" + this.id() + ")"
					},
					update: function(t) {
						return this.clear(), "function" == typeof t && t.call(this, this), this
					},
					toString: function() {
						return this.fill()
					},
					attr: function(t, e, i) {
						return c.Container.prototype.attr.call(this, t = "transform" == t ? "patternTransform" : t, e, i)
					}
				},
				construct: {
					pattern: function(t, e, i) {
						return this.defs().pattern(t, e, i)
					}
				}
			}), c.extend(c.Defs, {
				pattern: function(t, e, i) {
					return this.put(new c.Pattern).update(i).attr({
						x: 0,
						y: 0,
						width: t,
						height: e,
						patternUnits: "userSpaceOnUse"
					})
				}
			}), c.Shape = c.invent({
				create: function(t) {
					this.constructor.call(this, t)
				},
				inherit: c.Element
			}), c.Symbol = c.invent({
				create: "symbol",
				inherit: c.Container,
				construct: {
					symbol: function() {
						return this.put(new c.Symbol)
					}
				}
			}), c.Use = c.invent({
				create: "use",
				inherit: c.Shape,
				extend: {
					element: function(t, e) {
						return this.attr("href", (e || "") + "#" + t, c.xlink)
					}
				},
				construct: {
					use: function(t, e) {
						return this.put(new c.Use).element(t, e)
					}
				}
			}), c.Rect = c.invent({
				create: "rect",
				inherit: c.Shape,
				construct: {
					rect: function(t, e) {
						return this.put(new c.Rect).size(t, e)
					}
				}
			}), c.Circle = c.invent({
				create: "circle",
				inherit: c.Shape,
				construct: {
					circle: function(t) {
						return this.put(new c.Circle).rx(new c.Number(t).divide(2)).move(0, 0)
					}
				}
			}), c.extend(c.Circle, c.FX, {
				rx: function(t) {
					return this.attr("r", t)
				},
				ry: function(t) {
					return this.rx(t)
				}
			}), c.Ellipse = c.invent({
				create: "ellipse",
				inherit: c.Shape,
				construct: {
					ellipse: function(t, e) {
						return this.put(new c.Ellipse).size(t, e).move(0, 0)
					}
				}
			}), c.extend(c.Ellipse, c.Rect, c.FX, {
				rx: function(t) {
					return this.attr("rx", t)
				},
				ry: function(t) {
					return this.attr("ry", t)
				}
			}), c.extend(c.Circle, c.Ellipse, {
				x: function(t) {
					return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
				},
				y: function(t) {
					return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
				},
				cx: function(t) {
					return null == t ? this.attr("cx") : this.attr("cx", t)
				},
				cy: function(t) {
					return null == t ? this.attr("cy") : this.attr("cy", t)
				},
				width: function(t) {
					return null == t ? 2 * this.rx() : this.rx(new c.Number(t).divide(2))
				},
				height: function(t) {
					return null == t ? 2 * this.ry() : this.ry(new c.Number(t).divide(2))
				},
				size: function(t, e) {
					t = u(this, t, e);
					return this.rx(new c.Number(t.width).divide(2)).ry(new c.Number(t.height).divide(2))
				}
			}), c.Line = c.invent({
				create: "line",
				inherit: c.Shape,
				extend: {
					array: function() {
						return new c.PointArray([
							[this.attr("x1"), this.attr("y1")],
							[this.attr("x2"), this.attr("y2")]
						])
					},
					plot: function(t, e, i, s) {
						return null == t ? this.array() : (t = void 0 !== e ? {
							x1: t,
							y1: e,
							x2: i,
							y2: s
						} : new c.PointArray(t).toLine(), this.attr(t))
					},
					move: function(t, e) {
						return this.attr(this.array().move(t, e).toLine())
					},
					size: function(t, e) {
						t = u(this, t, e);
						return this.attr(this.array().size(t.width, t.height).toLine())
					}
				},
				construct: {
					line: function(t, e, i, s) {
						return c.Line.prototype.plot.apply(this.put(new c.Line), null != t ? [t, e, i, s] : [0, 0, 0, 0])
					}
				}
			}), c.Polyline = c.invent({
				create: "polyline",
				inherit: c.Shape,
				construct: {
					polyline: function(t) {
						return this.put(new c.Polyline).plot(t || new c.PointArray)
					}
				}
			}), c.Polygon = c.invent({
				create: "polygon",
				inherit: c.Shape,
				construct: {
					polygon: function(t) {
						return this.put(new c.Polygon).plot(t || new c.PointArray)
					}
				}
			}), c.extend(c.Polyline, c.Polygon, {
				array: function() {
					return this._array || (this._array = new c.PointArray(this.attr("points")))
				},
				plot: function(t) {
					return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new c.PointArray(t))
				},
				clear: function() {
					return delete this._array, this
				},
				move: function(t, e) {
					return this.attr("points", this.array().move(t, e))
				},
				size: function(t, e) {
					t = u(this, t, e);
					return this.attr("points", this.array().size(t.width, t.height))
				}
			}), c.extend(c.Line, c.Polyline, c.Polygon, {
				morphArray: c.PointArray,
				x: function(t) {
					return null == t ? this.bbox().x : this.move(t, this.bbox().y)
				},
				y: function(t) {
					return null == t ? this.bbox().y : this.move(this.bbox().x, t)
				},
				width: function(t) {
					var e = this.bbox();
					return null == t ? e.width : this.size(t, e.height)
				},
				height: function(t) {
					var e = this.bbox();
					return null == t ? e.height : this.size(e.width, t)
				}
			}), c.Path = c.invent({
				create: "path",
				inherit: c.Shape,
				extend: {
					morphArray: c.PathArray,
					array: function() {
						return this._array || (this._array = new c.PathArray(this.attr("d")))
					},
					plot: function(t) {
						return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new c.PathArray(t))
					},
					clear: function() {
						return delete this._array, this
					}
				},
				construct: {
					path: function(t) {
						return this.put(new c.Path).plot(t || new c.PathArray)
					}
				}
			}), c.Image = c.invent({
				create: "image",
				inherit: c.Shape,
				extend: {
					load: function(e) {
						var i, s;
						return e ? (i = this, s = new a.Image, c.on(s, "load", function() {
							c.off(s);
							var t = i.parent(c.Pattern);
							null !== t && (0 == i.width() && 0 == i.height() && i.size(s.width, s.height), t && 0 == t.width() && 0 == t.height() && t.size(i.width(), i.height()), "function" == typeof i._loaded) && i._loaded.call(i, {
								width: s.width,
								height: s.height,
								ratio: s.width / s.height,
								url: e
							})
						}), c.on(s, "error", function(t) {
							c.off(s), "function" == typeof i._error && i._error.call(i, t)
						}), this.attr("href", s.src = this.src = e, c.xlink)) : this
					},
					loaded: function(t) {
						return this._loaded = t, this
					},
					error: function(t) {
						return this._error = t, this
					}
				},
				construct: {
					image: function(t, e, i) {
						return this.put(new c.Image).load(t).size(e || 0, i || e || 0)
					}
				}
			}), c.Text = c.invent({
				create: function() {
					this.constructor.call(this, c.create("text")), this.dom.leading = new c.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", c.defaults.attrs["font-family"])
				},
				inherit: c.Shape,
				extend: {
					x: function(t) {
						return null == t ? this.attr("x") : this.attr("x", t)
					},
					text: function(t) {
						if (void 0 === t) {
							t = "";
							for (var e = this.node.childNodes, i = 0, s = e.length; i < s; ++i) 0 != i && 3 != e[i].nodeType && 1 == c.adopt(e[i]).dom.newLined && (t += "\n"), t += e[i].textContent;
							return t
						}
						if (this.clear().build(!0), "function" == typeof t) t.call(this, this);
						else
							for (var i = 0, a = (t = t.split("\n")).length; i < a; i++) this.tspan(t[i]).newLine();
						return this.build(!1).rebuild()
					},
					size: function(t) {
						return this.attr("font-size", t).rebuild()
					},
					leading: function(t) {
						return null == t ? this.dom.leading : (this.dom.leading = new c.Number(t), this.rebuild())
					},
					lines: function() {
						var t = (this.textPath && this.textPath() || this).node,
							t = c.utils.map(c.utils.filterSVGElements(t.childNodes), function(t) {
								return c.adopt(t)
							});
						return new c.Set(t)
					},
					rebuild: function(t) {
						var e, i, s;
						return "boolean" == typeof t && (this._rebuild = t), this._rebuild && (i = 0, s = (e = this).dom.leading * new c.Number(this.attr("font-size")), this.lines().each(function() {
							this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? i += s : (this.attr("dy", s + i), i = 0))
						}), this.fire("rebuild")), this
					},
					build: function(t) {
						return this._build = !!t, this
					},
					setData: function(t) {
						return this.dom = t, this.dom.leading = new c.Number(t.leading || 1.3), this
					}
				},
				construct: {
					text: function(t) {
						return this.put(new c.Text).text(t)
					},
					plain: function(t) {
						return this.put(new c.Text).plain(t)
					}
				}
			}), c.Tspan = c.invent({
				create: "tspan",
				inherit: c.Shape,
				extend: {
					text: function(t) {
						return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this)
					},
					dx: function(t) {
						return this.attr("dx", t)
					},
					dy: function(t) {
						return this.attr("dy", t)
					},
					newLine: function() {
						var t = this.parent(c.Text);
						return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x())
					}
				}
			}), c.extend(c.Text, c.Tspan, {
				plain: function(t) {
					return !1 === this._build && this.clear(), this.node.appendChild(n.createTextNode(t)), this
				},
				tspan: function(t) {
					var e = (this.textPath && this.textPath() || this).node,
						i = new c.Tspan;
					return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t)
				},
				clear: function() {
					for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
					return this
				},
				length: function() {
					return this.node.getComputedTextLength()
				}
			}), c.TextPath = c.invent({
				create: "textPath",
				inherit: c.Parent,
				parent: c.Text,
				construct: {
					morphArray: c.PathArray,
					array: function() {
						var t = this.track();
						return t ? t.array() : null
					},
					plot: function(t) {
						var e = this.track(),
							i = null;
						return e && (i = e.plot(t)), null == t ? i : this
					},
					track: function() {
						var t = this.textPath();
						if (t) return t.reference("href")
					},
					textPath: function() {
						if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return c.adopt(this.node.firstChild)
					}
				}
			}), c.Nested = c.invent({
				create: function() {
					this.constructor.call(this, c.create("svg")), this.style("overflow", "visible")
				},
				inherit: c.Container,
				construct: {
					nested: function() {
						return this.put(new c.Nested)
					}
				}
			});
			var s = {
				stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
				fill: ["color", "opacity", "rule"],
				prefix: function(t, e) {
					return "color" == e ? t : t + "-" + e
				}
			};

			function h(t, e, i, s) {
				return i + s.replace(c.regex.dots, " .")
			}

			function o(t) {
				return t.toLowerCase().replace(/-(.)/g, function(t, e) {
					return e.toUpperCase()
				})
			}

			function r(t) {
				return t.charAt(0).toUpperCase() + t.slice(1)
			}

			function d(t) {
				t = t.toString(16);
				return 1 == t.length ? "0" + t : t
			}

			function u(t, e, i) {
				return null != e && null != i || (t = t.bbox(), null == e ? e = t.width / t.height * i : null == i && (i = t.height / t.width * e)), {
					width: e,
					height: i
				}
			}

			function g(t, e, i) {
				return {
					x: e * t.a + i * t.c,
					y: e * t.b + i * t.d
				}
			}

			function p(t) {
				return {
					a: t[0],
					b: t[1],
					c: t[2],
					d: t[3],
					e: t[4],
					f: t[5]
				}
			}

			function f(t) {
				for (var e = t.childNodes.length - 1; 0 <= e; e--) t.childNodes[e] instanceof a.SVGElement && f(t.childNodes[e]);
				return c.adopt(t).id(c.eid(t.nodeName))
			}

			function x(t) {
				return 1e-37 < Math.abs(t) ? t : 0
			} ["fill", "stroke"].forEach(function(i) {
				var t = {};
				t[i] = function(t) {
					if (void 0 !== t)
						if ("string" == typeof t || c.Color.isRgb(t) || t && "function" == typeof t.fill) this.attr(i, t);
						else
							for (var e = s[i].length - 1; 0 <= e; e--) null != t[s[i][e]] && this.attr(s.prefix(i, s[i][e]), t[s[i][e]]);
					return this
				}, c.extend(c.Element, c.FX, t)
			}), c.extend(c.Element, c.FX, {
				translate: function(t, e) {
					return this.transform({
						x: t,
						y: e
					})
				},
				matrix: function(t) {
					return this.attr("transform", new c.Matrix(6 == arguments.length ? [].slice.call(arguments) : t))
				},
				opacity: function(t) {
					return this.attr("opacity", t)
				},
				dx: function(t) {
					return this.x(new c.Number(t).plus(this instanceof c.FX ? 0 : this.x()), !0)
				},
				dy: function(t) {
					return this.y(new c.Number(t).plus(this instanceof c.FX ? 0 : this.y()), !0)
				}
			}), c.extend(c.Path, {
				length: function() {
					return this.node.getTotalLength()
				},
				pointAt: function(t) {
					return this.node.getPointAtLength(t)
				}
			}), c.Set = c.invent({
				create: function(t) {
					Array.isArray(t) ? this.members = t : this.clear()
				},
				extend: {
					add: function() {
						for (var t = [].slice.call(arguments), e = 0, i = t.length; e < i; e++) this.members.push(t[e]);
						return this
					},
					remove: function(t) {
						t = this.index(t);
						return -1 < t && this.members.splice(t, 1), this
					},
					each: function(t) {
						for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
						return this
					},
					clear: function() {
						return this.members = [], this
					},
					length: function() {
						return this.members.length
					},
					has: function(t) {
						return 0 <= this.index(t)
					},
					index: function(t) {
						return this.members.indexOf(t)
					},
					get: function(t) {
						return this.members[t]
					},
					first: function() {
						return this.get(0)
					},
					last: function() {
						return this.get(this.members.length - 1)
					},
					valueOf: function() {
						return this.members
					}
				},
				construct: {
					set: function(t) {
						return new c.Set(t)
					}
				}
			}), c.FX.Set = c.invent({
				create: function(t) {
					this.set = t
				}
			}), c.Set.inherit = function() {
				var t, e = [];
				for (t in c.Shape.prototype) "function" == typeof c.Shape.prototype[t] && "function" != typeof c.Set.prototype[t] && e.push(t);
				for (t in e.forEach(function(i) {
						c.Set.prototype[i] = function() {
							for (var t = 0, e = this.members.length; t < e; t++) this.members[t] && "function" == typeof this.members[t][i] && this.members[t][i].apply(this.members[t], arguments);
							return "animate" == i ? this.fx || (this.fx = new c.FX.Set(this)) : this
						}
					}), e = [], c.FX.prototype) "function" == typeof c.FX.prototype[t] && "function" != typeof c.FX.Set.prototype[t] && e.push(t);
				e.forEach(function(i) {
					c.FX.Set.prototype[i] = function() {
						for (var t = 0, e = this.set.members.length; t < e; t++) this.set.members[t].fx[i].apply(this.set.members[t].fx, arguments);
						return this
					}
				})
			}, c.extend(c.Element, {}), c.extend(c.Element, {
				remember: function(t, e) {
					if ("object" === v(t))
						for (var i in t) this.remember(i, t[i]);
					else {
						if (1 == arguments.length) return this.memory()[t];
						this.memory()[t] = e
					}
					return this
				},
				forget: function() {
					if (0 == arguments.length) this._memory = {};
					else
						for (var t = arguments.length - 1; 0 <= t; t--) delete this.memory()[arguments[t]];
					return this
				},
				memory: function() {
					return this._memory || (this._memory = {})
				}
			}), c.get = function(e) {
				var t = n.getElementById(function() {
					var t = (e || "").toString().match(c.regex.reference);
					if (t) return t[1]
				}() || e);
				return c.adopt(t)
			}, c.select = function(t, e) {
				return new c.Set(c.utils.map((e || n).querySelectorAll(t), function(t) {
					return c.adopt(t)
				}))
			}, c.extend(c.Parent, {
				select: function(t) {
					return c.select(t, this.node)
				}
			});
			var m, b = "abcdef".split("");
			return "function" != typeof a.CustomEvent ? ((m = function(t, e) {
				e = e || {
					bubbles: !1,
					cancelable: !1,
					detail: void 0
				};
				var i = n.createEvent("CustomEvent");
				return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
			}).prototype = a.Event.prototype, c.CustomEvent = m) : c.CustomEvent = a.CustomEvent, c
		}, "function" == typeof define && define.amd ? define(function() {
			return M(m, m.document)
		}) : "object" === ("undefined" == typeof exports ? "undefined" : v(exports)) && "undefined" != typeof module ? module.exports = m.document ? M(m, m.document) : function(t) {
			return M(t, t.document)
		} : m.SVG = M(m, m.document),
		function() {
			SVG.Filter = SVG.invent({
				create: "filter",
				inherit: SVG.Parent,
				extend: {
					source: "SourceGraphic",
					sourceAlpha: "SourceAlpha",
					background: "BackgroundImage",
					backgroundAlpha: "BackgroundAlpha",
					fill: "FillPaint",
					stroke: "StrokePaint",
					autoSetIn: !0,
					put: function(t, e) {
						return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t
					},
					blend: function(t, e, i) {
						return this.put(new SVG.BlendEffect(t, e, i))
					},
					colorMatrix: function(t, e) {
						return this.put(new SVG.ColorMatrixEffect(t, e))
					},
					convolveMatrix: function(t) {
						return this.put(new SVG.ConvolveMatrixEffect(t))
					},
					componentTransfer: function(t) {
						return this.put(new SVG.ComponentTransferEffect(t))
					},
					composite: function(t, e, i) {
						return this.put(new SVG.CompositeEffect(t, e, i))
					},
					flood: function(t, e) {
						return this.put(new SVG.FloodEffect(t, e))
					},
					offset: function(t, e) {
						return this.put(new SVG.OffsetEffect(t, e))
					},
					image: function(t) {
						return this.put(new SVG.ImageEffect(t))
					},
					merge: function() {
						var t, e = [void 0];
						for (t in arguments) e.push(arguments[t]);
						return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect, e)))
					},
					gaussianBlur: function(t, e) {
						return this.put(new SVG.GaussianBlurEffect(t, e))
					},
					morphology: function(t, e) {
						return this.put(new SVG.MorphologyEffect(t, e))
					},
					diffuseLighting: function(t, e, i) {
						return this.put(new SVG.DiffuseLightingEffect(t, e, i))
					},
					displacementMap: function(t, e, i, s, a) {
						return this.put(new SVG.DisplacementMapEffect(t, e, i, s, a))
					},
					specularLighting: function(t, e, i, s) {
						return this.put(new SVG.SpecularLightingEffect(t, e, i, s))
					},
					tile: function() {
						return this.put(new SVG.TileEffect)
					},
					turbulence: function(t, e, i, s, a) {
						return this.put(new SVG.TurbulenceEffect(t, e, i, s, a))
					},
					toString: function() {
						return "url(#" + this.attr("id") + ")"
					}
				}
			}), SVG.extend(SVG.Defs, {
				filter: function(t) {
					var e = this.put(new SVG.Filter);
					return "function" == typeof t && t.call(e, e), e
				}
			}), SVG.extend(SVG.Container, {
				filter: function(t) {
					return this.defs().filter(t)
				}
			}), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
				filter: function(t) {
					return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
				},
				unfilter: function(t) {
					return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null)
				}
			}), SVG.Effect = SVG.invent({
				create: function() {
					this.constructor.call(this)
				},
				inherit: SVG.Element,
				extend: {
					in: function(t) {
						return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
					},
					result: function(t) {
						return null == t ? this.attr("result") : this.attr("result", t)
					},
					toString: function() {
						return this.result()
					}
				}
			}), SVG.ParentEffect = SVG.invent({
				create: function() {
					this.constructor.call(this)
				},
				inherit: SVG.Parent,
				extend: {
					in: function(t) {
						return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
					},
					result: function(t) {
						return null == t ? this.attr("result") : this.attr("result", t)
					},
					toString: function() {
						return this.result()
					}
				}
			});
			var t = {
					blend: function(t, e) {
						return this.parent() && this.parent().blend(this, t, e)
					},
					colorMatrix: function(t, e) {
						return this.parent() && this.parent().colorMatrix(t, e).in(this)
					},
					convolveMatrix: function(t) {
						return this.parent() && this.parent().convolveMatrix(t).in(this)
					},
					componentTransfer: function(t) {
						return this.parent() && this.parent().componentTransfer(t).in(this)
					},
					composite: function(t, e) {
						return this.parent() && this.parent().composite(this, t, e)
					},
					flood: function(t, e) {
						return this.parent() && this.parent().flood(t, e)
					},
					offset: function(t, e) {
						return this.parent() && this.parent().offset(t, e).in(this)
					},
					image: function(t) {
						return this.parent() && this.parent().image(t)
					},
					merge: function() {
						return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments))
					},
					gaussianBlur: function(t, e) {
						return this.parent() && this.parent().gaussianBlur(t, e).in(this)
					},
					morphology: function(t, e) {
						return this.parent() && this.parent().morphology(t, e).in(this)
					},
					diffuseLighting: function(t, e, i) {
						return this.parent() && this.parent().diffuseLighting(t, e, i).in(this)
					},
					displacementMap: function(t, e, i, s) {
						return this.parent() && this.parent().displacementMap(this, t, e, i, s)
					},
					specularLighting: function(t, e, i, s) {
						return this.parent() && this.parent().specularLighting(t, e, i, s).in(this)
					},
					tile: function() {
						return this.parent() && this.parent().tile().in(this)
					},
					turbulence: function(t, e, i, s, a) {
						return this.parent() && this.parent().turbulence(t, e, i, s, a).in(this)
					}
				},
				t = (SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({
					create: function() {
						this.constructor.call(this)
					},
					inherit: SVG.Element,
					extend: {
						in: function(t) {
							this.attr("in", t)
						}
					}
				}), {
					blend: function(t, e, i) {
						this.attr({
							in: t,
							in2: e,
							mode: i || "normal"
						})
					},
					colorMatrix: function(t, e) {
						"matrix" == t && (e = s(e)), this.attr({
							type: t,
							values: void 0 === e ? null : e
						})
					},
					convolveMatrix: function(t) {
						t = s(t), this.attr({
							order: Math.sqrt(t.split(" ").length),
							kernelMatrix: t
						})
					},
					composite: function(t, e, i) {
						this.attr({
							in: t,
							in2: e,
							operator: i
						})
					},
					flood: function(t, e) {
						this.attr("flood-color", t), null != e && this.attr("flood-opacity", e)
					},
					offset: function(t, e) {
						this.attr({
							dx: t,
							dy: e
						})
					},
					image: function(t) {
						this.attr("href", t, SVG.xlink)
					},
					displacementMap: function(t, e, i, s, a) {
						this.attr({
							in: t,
							in2: e,
							scale: i,
							xChannelSelector: s,
							yChannelSelector: a
						})
					},
					gaussianBlur: function(t, e) {
						null != t || null != e ? this.attr("stdDeviation", function(t) {
							if (!Array.isArray(t)) return t;
							for (var e = 0, i = t.length, s = []; e < i; e++) s.push(t[e]);
							return s.join(" ")
						}(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0")
					},
					morphology: function(t, e) {
						this.attr({
							operator: t,
							radius: e
						})
					},
					tile: function() {},
					turbulence: function(t, e, i, s, a) {
						this.attr({
							numOctaves: e,
							seed: i,
							stitchTiles: s,
							baseFrequency: t,
							type: a
						})
					}
				}),
				e = {
					merge: function() {
						if (arguments[0] instanceof SVG.Set) {
							var e = this;
							arguments[0].each(function(t) {
								this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this))
							})
						} else
							for (var t = Array.isArray(arguments[0]) ? arguments[0] : arguments, i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i]))
					},
					componentTransfer: function(e) {
						if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function(t) {
								this[t] = new SVG["Func" + t.toUpperCase()]("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node)
							}.bind(this)), e)
							for (var t in e.rgb && (["r", "g", "b"].forEach(function(t) {
									this[t].attr(e.rgb)
								}.bind(this)), delete e.rgb), e) this[t].attr(e[t])
					},
					diffuseLighting: function(t, e, i) {
						this.attr({
							surfaceScale: t,
							diffuseConstant: e,
							kernelUnitLength: i
						})
					},
					specularLighting: function(t, e, i, s) {
						this.attr({
							surfaceScale: t,
							diffuseConstant: e,
							specularExponent: i,
							kernelUnitLength: s
						})
					}
				},
				i = {
					distantLight: function(t, e) {
						this.attr({
							azimuth: t,
							elevation: e
						})
					},
					pointLight: function(t, e, i) {
						this.attr({
							x: t,
							y: e,
							z: i
						})
					},
					spotLight: function(t, e, i, s, a, n) {
						this.attr({
							x: t,
							y: e,
							z: i,
							pointsAtX: s,
							pointsAtY: a,
							pointsAtZ: n
						})
					},
					mergeNode: function(t) {
						this.attr("in", t)
					}
				};

			function s(t) {
				return (t = Array.isArray(t) ? new SVG.Array(t) : t).toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ")
			}

			function a() {
				var t, e = function() {};
				for (t in "function" == typeof arguments[arguments.length - 1] && (e = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
					for (var i in arguments[t]) e(arguments[t][i], i, arguments[t])
			} ["r", "g", "b", "a"].forEach(function(t) {
				i["Func" + t.toUpperCase()] = function(t) {
					switch (this.attr("type", t), t) {
						case "table":
							this.attr("tableValues", arguments[1]);
							break;
						case "linear":
							this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
							break;
						case "gamma":
							this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2])
					}
				}
			}), a(t, function(t, e) {
				var i = e.charAt(0).toUpperCase() + e.slice(1);
				SVG[i + "Effect"] = SVG.invent({
					create: function() {
						this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
					},
					inherit: SVG.Effect,
					extend: {}
				})
			}), a(e, function(t, e) {
				var i = e.charAt(0).toUpperCase() + e.slice(1);
				SVG[i + "Effect"] = SVG.invent({
					create: function() {
						this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
					},
					inherit: SVG.ParentEffect,
					extend: {}
				})
			}), a(i, function(t, e) {
				var i = e.charAt(0).toUpperCase() + e.slice(1);
				SVG[i] = SVG.invent({
					create: function() {
						this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments)
					},
					inherit: SVG.ChildEffect,
					extend: {}
				})
			}), SVG.extend(SVG.MergeEffect, {
				in: function(t) {
					return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this
				}
			}), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
				in2: function(t) {
					return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t)
				}
			}), SVG.filter = {
				sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0]
			}
		}.call(void 0), SVG.extend(SVG.PathArray, {
			morph: function(t) {
				for (var e = this.value, i = this.parse(t), s = 0, a = 0; !1 !== s || !1 !== a;) var n, o = mi(e, !1 !== s && s + 1),
					r = mi(i, !1 !== a && a + 1),
					l = (!1 === s && (s = 0 == (n = new SVG.PathArray(l.start).bbox()).height || 0 == n.width ? e.push(e[0]) - 1 : e.push(["M", n.x + n.width / 2, n.y + n.height / 2]) - 1), !1 === a && (a = 0 == (n = new SVG.PathArray(l.dest).bbox()).height || 0 == n.width ? i.push(i[0]) - 1 : i.push(["M", n.x + n.width / 2, n.y + n.height / 2]) - 1), function(t, e, i, s, a, n, o) {
						for (var r = t.slice(e, i || o), l = s.slice(a, n || o), c = 0, h = {
								pos: [0, 0],
								start: [0, 0]
							}, d = {
								pos: [0, 0],
								start: [0, 0]
							}; r[c] = pi.call(h, r[c]), l[c] = pi.call(d, l[c]), r[c][0] != l[c][0] || "M" == r[c][0] || "A" == r[c][0] && (r[c][4] != l[c][4] || r[c][5] != l[c][5]) ? (Array.prototype.splice.apply(r, [c, 1].concat(xi.call(h, r[c]))), Array.prototype.splice.apply(l, [c, 1].concat(xi.call(d, l[c])))) : (r[c] = fi.call(h, r[c]), l[c] = fi.call(d, l[c])), ++c != r.length || c != l.length;) c == r.length && r.push(["C", h.pos[0], h.pos[1], h.pos[0], h.pos[1], h.pos[0], h.pos[1]]), c == l.length && l.push(["C", d.pos[0], d.pos[1], d.pos[0], d.pos[1], d.pos[0], d.pos[1]]);
						return {
							start: r,
							dest: l
						}
					}(e, s, o, i, a, r)),
					e = e.slice(0, s).concat(l.start, !1 === o ? [] : e.slice(o)),
					i = i.slice(0, a).concat(l.dest, !1 === r ? [] : i.slice(r)),
					s = !1 !== o && s + l.start.length,
					a = !1 !== r && a + l.dest.length;
				return this.value = e, this.destination = new SVG.PathArray, this.destination.value = i, this
			}
		}),
		function() {
			function s(t) {
				t.remember("_draggable", this), this.el = t
			}
			s.prototype.init = function(t, e) {
				var i = this;
				this.constraint = t, this.value = e, this.el.on("mousedown.drag", function(t) {
					i.start(t)
				}), this.el.on("touchstart.drag", function(t) {
					i.start(t)
				})
			}, s.prototype.transformPoint = function(t, e) {
				t = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
				return this.p.x = t.clientX - (e || 0), this.p.y = t.clientY, this.p.matrixTransform(this.m)
			}, s.prototype.getBBox = function() {
				var t = this.el.bbox();
				return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t
			}, s.prototype.start = function(t) {
				if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) {
					var e = this;
					if (this.el.fire("beforedrag", {
							event: t,
							handler: this
						}), !this.el.event().defaultPrevented) {
						t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
						var i, s = this.getBBox();
						if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
							case "middle":
								i /= 2;
								break;
							case "start":
								i = 0
						}
						this.startPoints = {
							point: this.transformPoint(t, i),
							box: s,
							transform: this.el.transform()
						}, SVG.on(window, "mousemove.drag", function(t) {
							e.drag(t)
						}), SVG.on(window, "touchmove.drag", function(t) {
							e.drag(t)
						}), SVG.on(window, "mouseup.drag", function(t) {
							e.end(t)
						}), SVG.on(window, "touchend.drag", function(t) {
							e.end(t)
						}), this.el.fire("dragstart", {
							event: t,
							p: this.startPoints.point,
							m: this.m,
							handler: this
						})
					}
				}
			}, s.prototype.drag = function(t) {
				var e = this.getBBox(),
					i = this.transformPoint(t),
					s = this.startPoints.box.x + i.x - this.startPoints.point.x,
					a = this.startPoints.box.y + i.y - this.startPoints.point.y,
					n = this.constraint,
					o = i.x - this.startPoints.point.x,
					r = i.y - this.startPoints.point.y;
				return this.el.fire("dragmove", {
					event: t,
					p: i,
					m: this.m,
					handler: this
				}), this.el.event().defaultPrevented || ("function" == typeof n ? (!0 === (t = "boolean" == typeof(t = n.call(this.el, s, a, this.m)) ? {
					x: t,
					y: t
				} : t).x ? this.el.x(s) : !1 !== t.x && this.el.x(t.x), !0 === t.y ? this.el.y(a) : !1 !== t.y && this.el.y(t.y)) : "object" == typeof n && (null != n.minX && s < n.minX ? o = (s = n.minX) - this.startPoints.box.x : null != n.maxX && s > n.maxX - e.width && (o = (s = n.maxX - e.width) - this.startPoints.box.x), null != n.minY && a < n.minY ? r = (a = n.minY) - this.startPoints.box.y : null != n.maxY && a > n.maxY - e.height && (r = (a = n.maxY - e.height) - this.startPoints.box.y), null != n.snapToGrid && (s -= s % n.snapToGrid, a -= a % n.snapToGrid, o -= o % n.snapToGrid, r -= r % n.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({
					x: o,
					y: r
				}, !0) : this.el.move(s, a))), i
			}, s.prototype.end = function(t) {
				var e = this.drag(t);
				this.el.fire("dragend", {
					event: t,
					p: e,
					m: this.m,
					handler: this
				}), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag")
			}, SVG.extend(SVG.Element, {
				draggable: function(t, e) {
					"function" != typeof t && "object" != typeof t || (e = t, t = !0);
					var i = this.remember("_draggable") || new s(this);
					return (t = void 0 === t || t) ? i.init(e || {}, t) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this
				}
			})
		}.call(void 0), z.prototype.init = function(t, e) {
			var i = this.el.bbox(),
				s = (this.options = {}, this.el.selectize.defaults.points);
			for (a in this.el.selectize.defaults) this.options[a] = this.el.selectize.defaults[a], void 0 !== e[a] && (this.options[a] = e[a]);
			var a, n = ["points", "pointsExclude"];
			for (a in n) {
				var o = this.options[n[a]];
				"string" == typeof o ? o = 0 < o.length ? o.split(/\s*,\s*/i) : [] : "boolean" == typeof o && "points" === n[a] && (o = o ? s : []), this.options[n[a]] = o
			}
			this.options.points = [s, this.options.points].reduce(function(t, e) {
				return t.filter(function(t) {
					return -1 < e.indexOf(t)
				})
			}), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function(t, e) {
				return t.filter(function(t) {
					return e.indexOf(t) < 0
				})
			}), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup()
		}, z.prototype.selectPoints = function(t) {
			return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this
		}, z.prototype.getPointArray = function() {
			var e = this.el.bbox();
			return this.el.array().valueOf().map(function(t) {
				return [t[0] - e.x, t[1] - e.y]
			})
		}, z.prototype.drawPoints = function() {
			for (var a = this, t = this.getPointArray(), e = 0, i = t.length; e < i; ++e) {
				var s = function(s) {
						return function(t) {
							(t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
							var e = t.pageX || t.touches[0].pageX,
								i = t.pageY || t.touches[0].pageY;
							a.el.fire("point", {
								x: e,
								y: i,
								i: s,
								event: t
							})
						}
					}(e),
					s = this.drawPoint(t[e][0], t[e][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s).on("mousedown", s);
				this.pointSelection.set.add(s)
			}
		}, z.prototype.drawPoint = function(t, e) {
			var i = this.options.pointType;
			switch (i) {
				case "circle":
					return this.drawCircle(t, e);
				case "rect":
					return this.drawRect(t, e);
				default:
					if ("function" == typeof i) return i.call(this, t, e);
					throw new Error("Unknown " + i + " point type!")
			}
		}, z.prototype.drawCircle = function(t, e) {
			return this.nested.circle(this.options.pointSize).center(t, e)
		}, z.prototype.drawRect = function(t, e) {
			return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e)
		}, z.prototype.updatePointSelection = function() {
			var e = this.getPointArray();
			this.pointSelection.set.each(function(t) {
				this.cx() === e[t][0] && this.cy() === e[t][1] || this.center(e[t][0], e[t][1])
			})
		}, z.prototype.updateRectSelection = function() {
			var t, i = this,
				s = this.el.bbox();
			this.rectSelection.set.get(0).attr({
				width: s.width,
				height: s.height
			}), this.options.points.length && this.options.points.map(function(t, e) {
				t = i.pointCoords(t, s);
				i.rectSelection.set.get(e + 1).center(t.x, t.y)
			}), this.options.rotationPoint && (t = this.rectSelection.set.length(), this.rectSelection.set.get(t - 1).center(s.width / 2, 20))
		}, z.prototype.selectRect = function(t) {
			var a = this,
				s = this.el.bbox();

			function n(s) {
				return function(t) {
					(t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
					var e = t.pageX || t.touches[0].pageX,
						i = t.pageY || t.touches[0].pageY;
					a.el.fire(s, {
						x: e,
						y: i,
						event: t
					})
				}
			}
			this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(s.width, s.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map(function(t, e) {
				var i = a.pointCoords(t, s),
					i = a.drawPoint(i.x, i.y).attr("class", a.options.classPoints + "_" + t).on("mousedown", n(t)).on("touchstart", n(t));
				a.rectSelection.set.add(i)
			}), this.rectSelection.set.each(function() {
				this.addClass(a.options.classPoints)
			})), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1)) && (t = function(t) {
				(t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
				var e = t.pageX || t.touches[0].pageX,
					i = t.pageY || t.touches[0].pageY;
				a.el.fire("rot", {
					x: e,
					y: i,
					event: t
				})
			}, t = this.drawPoint(s.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", t).on("mousedown", t), this.rectSelection.set.add(t))
		}, z.prototype.handler = function() {
			var t = this.el.bbox();
			this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection()
		}, z.prototype.observe = function() {
			var t = this;
			if (MutationObserver)
				if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function() {
					t.handler()
				}), this.observerInst.observe(this.el.node, {
					attributes: !0
				});
				else try {
					this.observerInst.disconnect(), delete this.observerInst
				} catch (t) {} else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function() {
					t.handler()
				})
		}, z.prototype.cleanup = function() {
			!this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
				this.remove()
			}), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
				this.remove()
			}), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested)
		}, SVG.extend(SVG.Element, {
			selectize: function(t, e) {
				return "object" == typeof t && (e = t, t = !0), (this.remember("_selectHandler") || new z(this)).init(void 0 === t || t, e || {}), this
			}
		}), SVG.Element.prototype.selectize.defaults = {
			points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"],
			pointsExclude: [],
			classRect: "svg_select_boundingRect",
			classPoints: "svg_select_points",
			pointSize: 7,
			rotationPoint: !0,
			deepSelect: !1,
			pointType: "circle"
		},
		function() {
			! function() {
				function e(t) {
					t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint()
				}
				e.prototype.transformPoint = function(t, e, i) {
					return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m)
				}, e.prototype._extractPosition = function(t) {
					return {
						x: (null != t.clientX ? t : t.touches[0]).clientX,
						y: (null != t.clientY ? t : t.touches[0]).clientY
					}
				}, e.prototype.init = function(t) {
					var e = this;
					if (this.stop(), "stop" !== t) {
						for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]);
						this.el.on("lt.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("rt.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("rb.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("lb.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("t.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("r.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("b.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("l.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("rot.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("point.resize", function(t) {
							e.resize(t || window.event)
						}), this.update()
					}
				}, e.prototype.stop = function() {
					return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this
				}, e.prototype.resize = function(t) {
					var e = this,
						i = (this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
							x: window.pageXOffset,
							y: window.pageYOffset
						}, this._extractPosition(t.detail.event));
					switch (this.parameters = {
							type: this.el.type,
							p: this.transformPoint(i.x, i.y),
							x: t.detail.x,
							y: t.detail.y,
							box: this.el.bbox(),
							rotation: this.el.transform().rotation
						}, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i && (i = this.el.array().valueOf(), this.parameters.i = t.detail.i, this.parameters.pointCoords = [i[t.detail.i][0], i[t.detail.i][1]]), t.type) {
						case "lt":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e);
								0 < this.parameters.box.width - t[0] && 0 < this.parameters.box.height - t[1] && ("text" === this.parameters.type ? (this.el.move(this.parameters.box.x + t[0], this.parameters.box.y), this.el.attr("font-size", this.parameters.fontSize - t[0])) : (t = this.checkAspectRatio(t), this.el.move(this.parameters.box.x + t[0], this.parameters.box.y + t[1]).size(this.parameters.box.width - t[0], this.parameters.box.height - t[1])))
							};
							break;
						case "rt":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e, 2);
								0 < this.parameters.box.width + t[0] && 0 < this.parameters.box.height - t[1] && ("text" === this.parameters.type ? (this.el.move(this.parameters.box.x - t[0], this.parameters.box.y), this.el.attr("font-size", this.parameters.fontSize + t[0])) : (t = this.checkAspectRatio(t, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + t[1]).size(this.parameters.box.width + t[0], this.parameters.box.height - t[1])))
							};
							break;
						case "rb":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e, 0);
								0 < this.parameters.box.width + t[0] && 0 < this.parameters.box.height + t[1] && ("text" === this.parameters.type ? (this.el.move(this.parameters.box.x - t[0], this.parameters.box.y), this.el.attr("font-size", this.parameters.fontSize + t[0])) : (t = this.checkAspectRatio(t), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + t[0], this.parameters.box.height + t[1])))
							};
							break;
						case "lb":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e, 1);
								0 < this.parameters.box.width - t[0] && 0 < this.parameters.box.height + t[1] && ("text" === this.parameters.type ? (this.el.move(this.parameters.box.x + t[0], this.parameters.box.y), this.el.attr("font-size", this.parameters.fontSize - t[0])) : (t = this.checkAspectRatio(t, !0), this.el.move(this.parameters.box.x + t[0], this.parameters.box.y).size(this.parameters.box.width - t[0], this.parameters.box.height + t[1])))
							};
							break;
						case "t":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e, 2);
								0 < this.parameters.box.height - t[1] && "text" !== this.parameters.type && this.el.move(this.parameters.box.x, this.parameters.box.y + t[1]).height(this.parameters.box.height - t[1])
							};
							break;
						case "r":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e, 0);
								0 < this.parameters.box.width + t[0] && "text" !== this.parameters.type && this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + t[0])
							};
							break;
						case "b":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e, 0);
								0 < this.parameters.box.height + t[1] && "text" !== this.parameters.type && this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + t[1])
							};
							break;
						case "l":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e, 1);
								0 < this.parameters.box.width - t[0] && "text" !== this.parameters.type && this.el.move(this.parameters.box.x + t[0], this.parameters.box.y).width(this.parameters.box.width - t[0])
							};
							break;
						case "rot":
							this.calc = function(t, e) {
								var t = t + this.parameters.p.x,
									e = e + this.parameters.p.y,
									i = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
									e = Math.atan2(e - this.parameters.box.y - this.parameters.box.height / 2, t - this.parameters.box.x - this.parameters.box.width / 2),
									t = this.parameters.rotation + 180 * (e - i) / Math.PI + this.options.snapToAngle / 2;
								this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(t - t % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy)
							};
							break;
						case "point":
							this.calc = function(t, e) {
								t = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), e = this.el.array().valueOf();
								e[this.parameters.i][0] = this.parameters.pointCoords[0] + t[0], e[this.parameters.i][1] = this.parameters.pointCoords[1] + t[1], this.el.plot(e)
							}
					}
					this.el.fire("resizestart", {
						dx: this.parameters.x,
						dy: this.parameters.y,
						event: t
					}), SVG.on(window, "touchmove.resize", function(t) {
						e.update(t || window.event)
					}), SVG.on(window, "touchend.resize", function() {
						e.done()
					}), SVG.on(window, "mousemove.resize", function(t) {
						e.update(t || window.event)
					}), SVG.on(window, "mouseup.resize", function() {
						e.done()
					})
				}, e.prototype.update = function(t) {
					var e, i;
					t ? (i = this._extractPosition(t), e = (i = this.transformPoint(i.x, i.y)).x - this.parameters.p.x, i = i.y - this.parameters.p.y, this.lastUpdateCall = [e, i], this.calc(e, i), this.el.fire("resizing", {
						dx: e,
						dy: i,
						event: t
					})) : this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
				}, e.prototype.done = function() {
					this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone")
				}, e.prototype.snapToGrid = function(t, e, i, s) {
					var a = void 0 !== s ? [(i + t) % this.options.snapToGrid, (s + e) % this.options.snapToGrid] : [(this.parameters.box.x + t + (1 & (i = null == i ? 3 : i) ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid];
					return t < 0 && (a[0] -= this.options.snapToGrid), e < 0 && (a[1] -= this.options.snapToGrid), t -= Math.abs(a[0]) < this.options.snapToGrid / 2 ? a[0] : a[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(a[1]) < this.options.snapToGrid / 2 ? a[1] : a[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, s)
				}, e.prototype.constraintToBox = function(t, e, i, s) {
					var a, n = this.options.constraint || {},
						s = void 0 !== s ? (a = i, s) : (a = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height));
					return void 0 !== n.minX && a + t < n.minX && (t = n.minX - a), void 0 !== n.maxX && a + t > n.maxX && (t = n.maxX - a), void 0 !== n.minY && s + e < n.minY && (e = n.minY - s), [t, e = void 0 !== n.maxY && s + e > n.maxY ? n.maxY - s : e]
				}, e.prototype.checkAspectRatio = function(t, e) {
					var i, s, a, n, o;
					return this.options.saveAspectRatio ? (i = t.slice(), s = this.parameters.box.width / this.parameters.box.height, (o = (a = this.parameters.box.width + t[0]) / (n = this.parameters.box.height - t[1])) < s ? (i[1] = a / s - this.parameters.box.height, e && (i[1] = -i[1])) : s < o && (i[0] = this.parameters.box.width - n * s, e) && (i[0] = -i[0]), i) : t
				}, SVG.extend(SVG.Element, {
					resize: function(t) {
						return (this.remember("_resizeHandler") || new e(this)).init(t || {}), this
					}
				}), SVG.Element.prototype.resize.defaults = {
					snapToAngle: .1,
					snapToGrid: 1,
					constraint: {},
					saveAspectRatio: !1
				}
			}.call(this)
		}(), void 0 === window.Apex && (window.Apex = {});
	t(ki, [{
		key: "initModules",
		value: function() {
			this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new A(this.ctx), this.ctx.axes = new kt(this.ctx), this.ctx.core = new li(this.ctx.el, this.ctx), this.ctx.config = new p({}), this.ctx.data = new ft(this.ctx), this.ctx.grid = new mt(this.ctx), this.ctx.graphics = new D(this.ctx), this.ctx.coreUtils = new I(this.ctx), this.ctx.crosshairs = new At(this.ctx), this.ctx.events = new yt(this.ctx), this.ctx.exports = new xt(this.ctx), this.ctx.localization = new wt(this.ctx), this.ctx.options = new d, this.ctx.responsive = new Ct(this.ctx), this.ctx.series = new S(this.ctx), this.ctx.theme = new St(this.ctx), this.ctx.formatters = new f(this.ctx), this.ctx.titleSubtitle = new Tt(this.ctx), this.ctx.legend = new Ot(this.ctx), this.ctx.toolbar = new Dt(this.ctx), this.ctx.tooltip = new Wt(this.ctx), this.ctx.dimensions = new It(this.ctx), this.ctx.updateHelpers = new ci(this.ctx), this.ctx.zoomPanSelection = new zt(this.ctx), this.ctx.w.globals.tooltip = new Wt(this.ctx)
		}
	}]);
	var bi = ki,
		vi = (t(wi, [{
			key: "clear",
			value: function(t) {
				t = t.isUpdating;
				this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({
					isUpdating: t
				})
			}
		}, {
			key: "killSVG",
			value: function(t) {
				t.each(function(t, e) {
					this.removeClass("*"), this.off(), this.stop()
				}, !0), t.ungroup(), t.clear()
			}
		}, {
			key: "clearDomElements",
			value: function(t) {
				var e = this,
					t = t.isUpdating,
					i = this.w.globals.dom.Paper.node,
					s = (i.parentNode && i.parentNode.parentNode && !t && (i.parentNode.parentNode.style.minHeight = "unset"), this.w.globals.dom.baseEl),
					t = (s && this.ctx.eventList.forEach(function(t) {
						s.removeEventListener(t, e.ctx.events.documentEvent)
					}), this.w.globals.dom);
				if (null !== this.ctx.el)
					for (; this.ctx.el.firstChild;) this.ctx.el.removeChild(this.ctx.el.firstChild);
				this.killSVG(t.Paper), t.Paper.remove(), t.elWrap = null, t.elGraphical = null, t.elLegendWrap = null, t.elLegendForeign = null, t.baseEl = null, t.elGridRect = null, t.elGridRectMask = null, t.elGridRectMarkerMask = null, t.elForecastMask = null, t.elNonForecastMask = null, t.elDefs = null
			}
		}]), wi),
		yi = new WeakMap;

	function wi(t) {
		s(this, wi), this.ctx = t, this.w = t.w
	}

	function ki(t) {
		s(this, ki), this.ctx = t, this.w = t.w
	}

	function Ai(t, e) {
		s(this, Ai), this.opts = e, (this.ctx = this).w = new gt(e).init(), this.el = t, this.w.globals.cuid = O.randomId(), this.w.globals.chartID = this.w.config.chart.id ? O.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new bi(this).initModules(), this.create = O.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this)
	}
	return t(Ai, [{
		key: "render",
		value: function() {
			var d = this;
			return new Promise(function(t, e) {
				if (null !== d.el) {
					void 0 === Apex._chartInstances && (Apex._chartInstances = []), d.w.config.chart.id && Apex._chartInstances.push({
						id: d.w.globals.chartID,
						group: d.w.config.chart.group,
						chart: d
					}), d.setLocale(d.w.config.chart.defaultLocale);
					var i, s, a, n = d.w.config.chart.events.beforeMount,
						o = ("function" == typeof n && n(d, d.w), d.events.fireEvent("beforeMount", [d, d.w]), window.addEventListener("resize", d.windowResizeHandler), r = d.el.parentNode, l = d.parentResizeHandler, c = !1, r.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && (n = r.getBoundingClientRect(), "none" !== r.style.display && 0 !== n.width || (c = !0)), h = new ResizeObserver(function(t) {
							c && l.call(r, t), c = !0
						}), r.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(r.children).forEach(function(t) {
							return h.observe(t)
						}) : h.observe(r), yi.set(l, h), d.css || (n = d.el.getRootNode && d.el.getRootNode(), i = O.is("ShadowRoot", n), a = (s = d.el.ownerDocument).getElementById("apexcharts-css"), !i && a) || (d.css = document.createElement("style"), d.css.id = "apexcharts-css", d.css.textContent = '@keyframes opaque {\n  0% {\n      opacity: 0\n  }\n\n  to {\n      opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n  0%,to {\n      opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\n.legend-mouseover-inactive {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255,255,255,.96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30,30,30,.8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0,0,0,.7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0!important\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0,0,0,.7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n      opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {\n  opacity: 0\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,.resize-triggers,.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers{\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows{\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers{\n  pointer-events: none\n}', i ? n.prepend(d.css) : s.head.appendChild(d.css)), d.create(d.w.config.series, {}));
					if (!o) return t(d);
					d.mount(o).then(function() {
						"function" == typeof d.w.config.chart.events.mounted && d.w.config.chart.events.mounted(d, d.w), d.events.fireEvent("mounted", [d, d.w]), t(o)
					}).catch(function(t) {
						e(t)
					})
				} else e(new Error("Element not found"));
				var r, l, c, h
			})
		}
	}, {
		key: "create",
		value: function(t, e) {
			var i = this.w,
				s = (new bi(this).initModules(), this.w.globals);
			return s.noData = !1, s.animationEnded = !1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric && new r(i.config).convertCatToNumericXaxis(i.config, this.ctx), null === this.el || (this.core.setupElements(), "treemap" === i.config.chart.type && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), 0 === s.svgWidth) ? (s.animationEnded = !0, null) : (e = I.checkComboSeries(t), s.comboCharts = e.comboCharts, s.comboBarCount = e.comboBarCount, e = t.every(function(t) {
				return t.data && 0 === t.data.length
			}), 0 !== t.length && !e || this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new w(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), s.noData && s.collapsedSeries.length !== s.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), s.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), new I(this).getLargestMarkerSize(), this.dimensions.plotCoords(), e = this.core.xySettings(), this.grid.createGridMask(), s = this.core.plotChartType(t, e), (t = new k(this)).bringForward(), i.config.dataLabels.background.enabled && t.dataLabelsBackground(), this.core.shiftGraphPosition(), {
				elGraph: s,
				xyRatios: e,
				dimensions: {
					plot: {
						left: i.globals.translateX,
						top: i.globals.translateY,
						width: i.globals.gridWidth,
						height: i.globals.gridHeight
					}
				}
			})
		}
	}, {
		key: "mount",
		value: function() {
			var o = this,
				r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
				l = this,
				c = l.w;
			return new Promise(function(t, e) {
				if (null === l.el) return e(new Error("Not enough data to display or target element not found"));
				null !== r && !c.globals.allSeriesCollapsed || l.series.handleNoData(), l.grid = new mt(l);
				e = l.grid.drawGrid();
				if (l.annotations = new dt(l), l.annotations.drawImageAnnos(), l.annotations.drawTextAnnos(), "back" === c.config.grid.position && (e && c.globals.dom.elGraphical.add(e.el), null != e) && null != (a = e.elGridBorders) && a.node && c.globals.dom.elGraphical.add(e.elGridBorders), Array.isArray(r.elGraph))
					for (var i = 0; i < r.elGraph.length; i++) c.globals.dom.elGraphical.add(r.elGraph[i]);
				else c.globals.dom.elGraphical.add(r.elGraph);
				"front" === c.config.grid.position && (e && c.globals.dom.elGraphical.add(e.el), null != e) && null != (a = e.elGridBorders) && a.node && c.globals.dom.elGraphical.add(e.elGridBorders), "front" === c.config.xaxis.crosshairs.position && l.crosshairs.drawXCrosshairs(), "front" === c.config.yaxis[0].crosshairs.position && l.crosshairs.drawYCrosshairs(), "treemap" !== c.config.chart.type && l.axes.drawAxis(c.config.chart.type, e);
				var s, a = new u(o.ctx, e),
					n = new vt(o.ctx, e);
				null !== e && (a.xAxisLabelCorrections(e.xAxisTickWidth), n.setYAxisTextAlignments(), c.config.yaxis.map(function(t, e) {
					-1 === c.globals.ignoreYAxisIndexes.indexOf(e) && n.yAxisTitleRotate(e, t.opposite)
				})), l.annotations.drawAxesAnnotations(), c.globals.noData || (c.config.tooltip.enabled && !c.globals.noData && l.w.globals.tooltip.drawTooltip(r.xyRatios), c.globals.axisCharts && (c.globals.isXNumeric || c.config.xaxis.convertedCatToNumeric || c.globals.isRangeBar) ? (c.config.chart.zoom.enabled || c.config.chart.selection && c.config.chart.selection.enabled || c.config.chart.pan && c.config.chart.pan.enabled) && l.zoomPanSelection.init({
					xyRatios: r.xyRatios
				}) : (s = c.config.chart.toolbar.tools, ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(t) {
					s[t] = !1
				})), c.config.chart.toolbar.show && !c.globals.allSeriesCollapsed && l.toolbar.createToolbar()), 0 < c.globals.memory.methodsToExec.length && c.globals.memory.methodsToExec.forEach(function(t) {
					t.method(t.params, !1, t.context)
				}), c.globals.axisCharts || c.globals.noData || l.core.resizeNonAxisCharts(), t(l)
			})
		}
	}, {
		key: "destroy",
		value: function() {
			window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t = this.parentResizeHandler, (e = yi.get(t)) && (e.disconnect(), yi.delete(t));
			var t, e, i = this.w.config.chart.id;
			i && Apex._chartInstances.forEach(function(t, e) {
				t.id === O.escapeString(i) && Apex._chartInstances.splice(e, 1)
			}), new vi(this.ctx).clear({
				isUpdating: !1
			})
		}
	}, {
		key: "updateOptions",
		value: function(t) {
			var i = this,
				e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
				s = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
				a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
				n = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
				o = this.w;
			return o.globals.selection = void 0, t.series && (this.series.resetSeries(!1, !0, !1), t.series.length && t.series[0].data && (t.series = t.series.map(function(t, e) {
				return i.updateHelpers._extendSeries(t, e)
			})), this.updateHelpers.revertDefaultAxisMinMax()), (t = t.xaxis ? this.updateHelpers.forceXAxisUpdate(t) : t).yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)), 0 < o.globals.collapsedSeriesIndices.length && this.series.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, e, s, a, n)
		}
	}, {
		key: "updateSeries",
		value: function() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
				e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
				i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
			return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t, e, i)
		}
	}, {
		key: "appendSeries",
		value: function(t) {
			var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
				i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
				s = this.w.config.series.slice();
			return s.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(s, e, i)
		}
	}, {
		key: "appendData",
		value: function(t) {
			var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
			this.w.globals.dataChanged = !0, this.series.getPreviousPaths();
			for (var i = this.w.config.series.slice(), s = 0; s < i.length; s++)
				if (null !== t[s] && void 0 !== t[s])
					for (var a = 0; a < t[s].data.length; a++) i[s].data.push(t[s].data[a]);
			return this.w.config.series = i, e && (this.w.globals.initialSeries = O.clone(this.w.config.series)), this.update()
		}
	}, {
		key: "update",
		value: function(s) {
			var a = this;
			return new Promise(function(t, e) {
				new vi(a.ctx).clear({
					isUpdating: !0
				});
				var i = a.create(a.w.config.series, s);
				if (!i) return t(a);
				a.mount(i).then(function() {
					"function" == typeof a.w.config.chart.events.updated && a.w.config.chart.events.updated(a, a.w), a.events.fireEvent("updated", [a, a.w]), a.w.globals.isDirty = !0, t(a)
				}).catch(function(t) {
					e(t)
				})
			})
		}
	}, {
		key: "getSyncedCharts",
		value: function() {
			var t = this.getGroupedCharts(),
				e = [this];
			return t.length && (e = [], t.forEach(function(t) {
				e.push(t)
			})), e
		}
	}, {
		key: "getGroupedCharts",
		value: function() {
			var e = this;
			return Apex._chartInstances.filter(function(t) {
				if (t.group) return !0
			}).map(function(t) {
				return e.w.config.chart.group === t.group ? t.chart : e
			})
		}
	}, {
		key: "toggleSeries",
		value: function(t) {
			return this.series.toggleSeries(t)
		}
	}, {
		key: "highlightSeriesOnLegendHover",
		value: function(t, e) {
			return this.series.toggleSeriesOnHover(t, e)
		}
	}, {
		key: "showSeries",
		value: function(t) {
			this.series.showSeries(t)
		}
	}, {
		key: "hideSeries",
		value: function(t) {
			this.series.hideSeries(t)
		}
	}, {
		key: "resetSeries",
		value: function() {
			this.series.resetSeries(!(0 < arguments.length && void 0 !== arguments[0]) || arguments[0], !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])
		}
	}, {
		key: "addEventListener",
		value: function(t, e) {
			this.events.addEventListener(t, e)
		}
	}, {
		key: "removeEventListener",
		value: function(t, e) {
			this.events.removeEventListener(t, e)
		}
	}, {
		key: "addXaxisAnnotation",
		value: function(t) {
			var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
				i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
				i = i ? i : this;
			i.annotations.addXaxisAnnotationExternal(t, e, i)
		}
	}, {
		key: "addYaxisAnnotation",
		value: function(t) {
			var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
				i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
				i = i ? i : this;
			i.annotations.addYaxisAnnotationExternal(t, e, i)
		}
	}, {
		key: "addPointAnnotation",
		value: function(t) {
			var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
				i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
				i = i ? i : this;
			i.annotations.addPointAnnotationExternal(t, e, i)
		}
	}, {
		key: "clearAnnotations",
		value: function() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0,
				t = t ? t : this;
			t.annotations.clearAnnotations(t)
		}
	}, {
		key: "removeAnnotation",
		value: function(t) {
			var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0,
				e = e ? e : this;
			e.annotations.removeAnnotation(e, t)
		}
	}, {
		key: "getChartArea",
		value: function() {
			return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")
		}
	}, {
		key: "getSeriesTotalXRange",
		value: function(t, e) {
			return this.coreUtils.getSeriesTotalsXRange(t, e)
		}
	}, {
		key: "getHighestValueInSeries",
		value: function() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
			return new bt(this.ctx).getMinYMaxY(t).highestY
		}
	}, {
		key: "getLowestValueInSeries",
		value: function() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
			return new bt(this.ctx).getMinYMaxY(t).lowestY
		}
	}, {
		key: "getSeriesTotal",
		value: function() {
			return this.w.globals.seriesTotals
		}
	}, {
		key: "toggleDataPointSelection",
		value: function(t, e) {
			return this.updateHelpers.toggleDataPointSelection(t, e)
		}
	}, {
		key: "zoomX",
		value: function(t, e) {
			this.ctx.toolbar.zoomUpdateOptions(t, e)
		}
	}, {
		key: "setLocale",
		value: function(t) {
			this.localization.setCurrentLocaleValues(t)
		}
	}, {
		key: "dataURI",
		value: function(t) {
			return new xt(this.ctx).dataURI(t)
		}
	}, {
		key: "exportToCSV",
		value: function() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			return new xt(this.ctx).exportToCSV(t)
		}
	}, {
		key: "paper",
		value: function() {
			return this.w.globals.dom.Paper
		}
	}, {
		key: "_parentResizeCallback",
		value: function() {
			this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize()
		}
	}, {
		key: "_windowResize",
		value: function() {
			var t = this;
			clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
				t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.ctx.update()
			}, 150)
		}
	}, {
		key: "_windowResizeHandler",
		value: function() {
			var t = this.w.config.chart.redrawOnWindowResize;
			(t = "function" == typeof t ? t() : t) && this._windowResize()
		}
	}], [{
		key: "getChartByID",
		value: function(t) {
			var e = O.escapeString(t),
				t = Apex._chartInstances.filter(function(t) {
					return t.id === e
				})[0];
			return t && t.chart
		}
	}, {
		key: "initOnLoad",
		value: function() {
			for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++) new Ai(t[e], JSON.parse(t[e].getAttribute("data-options"))).render()
		}
	}, {
		key: "exec",
		value: function(t, e) {
			t = this.getChartByID(t);
			if (t) {
				t.w.globals.isExecCalled = !0;
				var i = null;
				if (-1 !== t.publicMethods.indexOf(e)) {
					for (var s = arguments.length, a = new Array(2 < s ? s - 2 : 0), n = 2; n < s; n++) a[n - 2] = arguments[n];
					i = t[e].apply(t, a)
				}
				return i
			}
		}
	}, {
		key: "merge",
		value: function(t, e) {
			return O.extend(t, e)
		}
	}]), Ai
}),
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.PureCounter = e() : t.PureCounter = e()
}(self, function() {
	return i = {
		3: function(t, e, i) {
			"use strict";

			function a(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
				return s
			}

			function s(t, e) {
				for (var i = 0; i < e.length; i++) {
					var s = e[i];
					s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
				}
			}
			i.d(e, {
				Z: function() {
					return n
				}
			});
			s((i = o).prototype, [{
				key: "setOptions",
				value: function(t) {
					var e, i, s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
						a = {};
					for (e in t)(0 === Object.keys(s).length || s.hasOwnProperty(e)) && (i = this.parseValue(t[e]), a[e] = i, e.match(/duration|pulse/)) && (a[e] = "boolean" != typeof i ? 1e3 * i : i);
					return Object.assign({}, s, a)
				}
			}, {
				key: "registerEventListeners",
				value: function() {
					var e, i = this.elements;
					0 !== i.length && (this.intersectionSupport ? (e = new IntersectionObserver(this.animateElements.bind(this), {
						root: null,
						rootMargin: "20px",
						threshold: .5
					}), i.forEach(function(t) {
						e.observe(t)
					})) : window.addEventListener && (this.animateLegacy(i), window.addEventListener("scroll", function(t) {
						this.animateLegacy(i)
					}, {
						passive: !0
					})))
				}
			}, {
				key: "animateLegacy",
				value: function(t) {
					var e = this;
					t.forEach(function(t) {
						!0 === e.parseConfig(t).legacy && e.elementIsInView(t) && e.animateElements([t])
					})
				}
			}, {
				key: "animateElements",
				value: function(t, s) {
					var a = this;
					t.forEach(function(t) {
						var e = t.target || t,
							i = a.parseConfig(e);
						return i.duration <= 0 ? e.innerHTML = a.formatNumber(i.end, i) : !s && !a.elementIsInView(t) || s && t.intersectionRatio < .5 ? (t = i.start > i.end ? i.end : i.start, e.innerHTML = a.formatNumber(t, i)) : void setTimeout(function() {
							return a.startCounter(e, i)
						}, i.delay)
					})
				}
			}, {
				key: "startCounter",
				value: function(e, i) {
					var s = this,
						a = (i.end - i.start) / (i.duration / i.delay),
						n = "inc",
						o = (i.start > i.end && (n = "dec", a *= -1), this.parseValue(i.start)),
						r = (e.innerHTML = this.formatNumber(o, i), !0 === i.once && e.setAttribute("data-purecounter-duration", 0), setInterval(function() {
							var t = s.nextNumber(o, a, n);
							e.innerHTML = s.formatNumber(t, i), ((o = t) >= i.end && "inc" === n || o <= i.end && "dec" === n) && (e.innerHTML = s.formatNumber(i.end, i), i.pulse && (e.setAttribute("data-purecounter-duration", 0), setTimeout(function() {
								e.setAttribute("data-purecounter-duration", i.duration / 1e3)
							}, i.pulse)), clearInterval(r))
						}, i.delay))
				}
			}, {
				key: "parseConfig",
				value: function(t) {
					var e, s = this,
						t = [].filter.call(t.attributes, function(t) {
							return /^data-purecounter-/.test(t.name)
						}),
						t = 0 != t.length ? Object.assign.apply(Object, [{}].concat(function(t) {
							if (Array.isArray(t)) return a(t)
						}(e = t.map(function(t) {
							var e, i = t.name,
								t = t.value;
							return e = {}, i = i.replace("data-purecounter-", "").toLowerCase(), t = s.parseValue(t), i in e ? Object.defineProperty(e, i, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[i] = t, e
						})) || function() {
							if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
						}() || function(t) {
							var e;
							if (t) return "string" == typeof t ? a(t, void 0) : "Map" === (e = "Object" === (e = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : e) || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(t, void 0) : void 0
						}(e) || function() {
							throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}())) : {};
					return this.setOptions(t, this.configOptions)
				}
			}, {
				key: "nextNumber",
				value: function(t, e) {
					var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "inc";
					return t = this.parseValue(t), e = this.parseValue(e), parseFloat("inc" === i ? t + e : t - e)
				}
			}, {
				key: "convertNumber",
				value: function(t, e) {
					if (e.filesizing || e.currency) {
						t = Math.abs(Number(t));
						var i = 1e3,
							s = e.currency && "string" == typeof e.currency ? e.currency : "",
							a = e.decimals || 1,
							n = ["", "K", "M", "B", "T"],
							o = "";
						e.filesizing && (i = 1024, n = ["bytes", "KB", "MB", "GB", "TB"]);
						for (var r = 4; 0 <= r; r--)
							if (0 === r && (o = "".concat(t.toFixed(a), " ").concat(n[r])), t >= this.getFilesizeThreshold(i, r)) {
								o = "".concat((t / this.getFilesizeThreshold(i, r)).toFixed(a), " ").concat(n[r]);
								break
							} return s + o
					}
					return parseFloat(t)
				}
			}, {
				key: "getFilesizeThreshold",
				value: function(t, e) {
					return Math.pow(t, e)
				}
			}, {
				key: "applySeparator",
				value: function(t, e) {
					var i, r;
					return !e.formater || (i = e.separator ? "string" == typeof e.separator ? e.separator : "," : "", "en-US" !== e.formater && !0 === e.separator) ? t : (r = i, t.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi, function(t, e, i, s, a) {
						var n = "",
							o = "";
						return void 0 !== e ? (n = e.replace(new RegExp(/,/gi, "gi"), r), o = ",") : void 0 !== i ? n = i.replace(new RegExp(/\./gi, "gi"), r) : void 0 !== s && (n = s.replace(new RegExp(/ /gi, "gi"), r)), void 0 !== a && (e = "," !== o && "," !== r ? "," : ".", n += a.replace(new RegExp(/\.|,/gi, "gi"), e)), n
					}))
				}
			}, {
				key: "formatNumber",
				value: function(t, e) {
					var i = {
							minimumFractionDigits: e.decimals,
							maximumFractionDigits: e.decimals
						},
						s = "string" == typeof e.formater ? e.formater : void 0;
					return t = this.convertNumber(t, e), t = e.formater ? t.toLocaleString(s, i) : parseInt(t).toString(), this.applySeparator(t, e)
				}
			}, {
				key: "getLocaleSeparator",
				value: function() {}
			}, {
				key: "parseValue",
				value: function(t) {
					return /^[0-9]+\.[0-9]+$/.test(t) ? parseFloat(t) : /^[0-9]+$/.test(t) ? parseInt(t) : /^true|false/i.test(t) ? /^true/i.test(t) : t
				}
			}, {
				key: "elementIsInView",
				value: function(t) {
					for (var e = t.offsetTop, i = t.offsetLeft, s = t.offsetWidth, a = t.offsetHeight; t.offsetParent;) e += (t = t.offsetParent).offsetTop, i += t.offsetLeft;
					return e >= window.pageYOffset && i >= window.pageXOffset && e + a <= window.pageYOffset + window.innerHeight && i + s <= window.pageXOffset + window.innerWidth
				}
			}, {
				key: "intersectionListenerSupported",
				value: function() {
					return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype
				}
			}]), Object.defineProperty(i, "prototype", {
				writable: !1
			});
			var n = o;

			function o() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
					e = this,
					i = o;
				if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
				this.defaults = {
					start: 0,
					end: 100,
					duration: 2e3,
					delay: 10,
					once: !0,
					pulse: !1,
					decimals: 0,
					legacy: !0,
					filesizing: !1,
					currency: !1,
					separator: !1,
					formater: "us-US",
					selector: ".purecounter"
				}, this.configOptions = this.setOptions(t, this.defaults), this.elements = document.querySelectorAll(this.configOptions.selector), this.intersectionSupport = this.intersectionListenerSupported(), this.registerEventListeners()
			}
		},
		634: function(t, e, i) {
			i = i(3).Z;
			t.exports = i
		}
	}, a = {}, s.d = function(t, e) {
		for (var i in e) s.o(e, i) && !s.o(t, i) && Object.defineProperty(t, i, {
			enumerable: !0,
			get: e[i]
		})
	}, s.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, s(634);

	function s(t) {
		var e = a[t];
		return void 0 !== e || (e = a[t] = {
			exports: {}
		}, i[t](e, e.exports, s)), e.exports
	}
	var i, a
});