(function () {
    var ba = encodeURIComponent, ca = window, da = setTimeout, m = Math, aa = decodeURIComponent; function Bd(a, b) { return a.href = b } function ha(a, b) { return a.name = b }
    var Cd = "replace", r = "data", ma = "charAt", h = "match", jd = "send", ka = "port", la = "createElement", ce = "setAttribute", oa = "getTime", u = "host", y = "split", z = "location", Qd = "hasOwnProperty", qa = "hostname", fa = "search", B = "protocol", Sb = "href", ee = "action", D = "apply", n = "push", g = "hash", p = "test", q = "slice", ia = "cookie", K = "indexOf", ja = "defaultValue", na = "name", w = "length", wa = "sendBeacon", x = "prototype", pa = "clientWidth", de = "target", A = "call", ra = "clientHeight", C = "substring", sa = "navigator", sc = "parentNode", E = "join", ta = "unshift", ua = "toLowerCase"; var ec = function (a) { this.B = a || [] }; ec[x].set = function (a) { this.B[a] = !0 }; var Ne = new ec; function F(a) { Ne.set(a) } var bf = function (a, b) { var c = new ec($e(a)); c.set(b); a.set(af, c.B) }, cf = function (a) { a = $e(a); a = new ec(a); for (var b = Ne.B[q](), c = 0; c < a.B[w]; c++) b[c] = b[c] || a.B[c]; a = new ec(b); b = []; for (c = 0; c < a.B[w]; c++) a.B[c] && (b[m.floor(c / 6)] = b[m.floor(c / 6)] ^ 1 << c % 6); for (c = 0; c < b[w]; c++) b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[ma](b[c] || 0); return b[E]("") + "~" }, $e = function (a) { a = a.get(af); ga(a) || (a = []); return a }; var t = function (a) { return "function" == typeof a }, ga = function (a) { return "[object Array]" == Object[x].toString[A](Object(a)) }, G = function (a) { return void 0 != a && -1 < (a.constructor + "")[K]("String") }, H = function (a, b) { return 0 == a[K](b) }, xa = function (a) { return a ? a[Cd](/^[\s\xa0]+|[\s\xa0]+$/g, "") : "" }, za = function (a) { var b = I[la]("img"); b.width = 1; b.height = 1; b.src = a; return b }, Aa = function () { }, P = function (a) { if (ba instanceof Function) return ba(a); F(28); return a }, Ba = function (a) {
        a = a[y]("+")[E](" "); if (aa instanceof Function) try { return aa(a) } catch (b) { F(18) } F(28);
        return a
    }, Ca = function (a, b, c, d) { try { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) } catch (e) { F(27) } }, Da = function (a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) }, Ea = function (a, b) { if (a) { N("Loading script: %s", a); var c = I[la]("script"); c.type = "text/javascript"; c.async = !0; c.src = a; b && (c.id = b); var d = I.getElementsByTagName("script")[0]; d[sc].insertBefore(c, d) } }, df = function () { return "https:" == I[z][B] }, Wb = function () {
        var a =
        "" + I[z][qa]; return 0 == a[K]("www.") ? a[C](4) : a
    }, Xb = function (a) { var b = I.referrer; if (/^https?:\/\//i[p](b)) { if (a) return b; a = "//" + I[z][qa]; var c = b[K](a); if (5 == c || 6 == c) if (a = b[ma](c + a[w]), "/" == a || "?" == a || "" == a || ":" == a) return; return b } }, Yb = function (a, b) { if (1 == b[w] && null != b[0] && "object" === typeof b[0]) return b[0]; for (var c = {}, d = m.min(a[w] + 1, b[w]), e = 0; e < d; e++) if ("object" === typeof b[e]) { for (var f in b[e]) b[e][Qd](f) && (c[f] = b[e][f]); break } else e < a[w] ? c[a[e]] = b[e] : J("Unrecognized positional argument: " + b[e]); return c },
    Zb = function (a, b) { for (var c = 0; c < a[w]; c++) if (b == a[c]) return !0; return !1 }; var ef = function () { this.keys = []; this.values = {}; this.u = {}; this.debug = !1 }; ef[x].set = function (a, b, c) { this.debug && L("  " + a + "=" + Fa(b) + (c ? " (temp)" : "")); this.keys[n](a); c ? this.u[":" + a] = b : this.values[":" + a] = b }; ef[x].get = function (a) { return this.u[Qd](":" + a) ? this.u[":" + a] : this.values[":" + a] }; ef[x].map = function (a) { for (var b = 0; b < this.keys[w]; b++) { var c = this.keys[b], d = this.get(c); d && a(c, d) } }; var Rd = [{ V: "pa", W: "ec:action" }, { V: "ti", W: "ec:id" }, { V: "ta", W: "ec:affiliation" }, { V: "tr", W: "ec:revenue" }, { V: "tt", W: "ec:tax" }, { V: "ts", W: "ec:shipping" }, { V: "tcc", W: "ec:coupon" }, { V: "cos", W: "ec:step" }, { V: "col", W: "ec:label" }, { V: "pal", W: "ec:product action list" }, { V: "promoa", W: "ec:promo action" }, { V: /^pr(\d+)id$/, W: "ec:product %s id" }, { V: /^pr(\d+)nm$/, W: "ec:product %s name" }, { V: /^pr(\d+)br$/, W: "ec:product %s brand" }, { V: /^pr(\d+)ca$/, W: "ec:product %s category" }, { V: /^pr(\d+)va$/, W: "ec:product %s variant" }, {
        V: /^pr(\d+)ps$/,
        W: "ec:product %s position"
    }, { V: /^pr(\d+)pr$/, W: "ec:product %s price" }, { V: /^pr(\d+)qt$/, W: "ec:product %s quantity" }, { V: /^pr(\d+)cc$/, W: "ec:product %s coupon" }, { V: /^pr(\d+)cd(\d+)$/, W: "ec:product %s dimension %s" }, { V: /^pr(\d+)cm(\d+)$/, W: "ec:product %s metric %s" }, { V: /^promo(\d+)id$/, W: "ec:promo %s id" }, { V: /^promo(\d+)nm$/, W: "ec:promo %s name" }, { V: /^promo(\d+)cr$/, W: "ec:promo %s creative" }, { V: /^promo(\d+)ps$/, W: "ec:promo %s position" }, { V: /^il(\d+)nm$/, W: "ec:impression list %s name" }, {
        V: /^il(\d+)ls$/,
        W: "ec:impression list %s source"
    }, { V: /^il(\d+)pi(\d+)id$/, W: "ec:impression list %s product %s id" }, { V: /^il(\d+)pi(\d+)nm$/, W: "ec:impression list %s product %s name" }, { V: /^il(\d+)pi(\d+)br$/, W: "ec:impression list %s product %s brand" }, { V: /^il(\d+)pi(\d+)ca$/, W: "ec:impression list %s product %s category" }, { V: /^il(\d+)pi(\d+)va$/, W: "ec:impression list %s product %s variant" }, { V: /^il(\d+)pi(\d+)ps$/, W: "ec:impression list %s product %s position" }, { V: /^il(\d+)pi(\d+)pr$/, W: "ec:impression list %s product %s price" },
    { V: /^il(\d+)pi(\d+)cd(\d+)$/, W: "ec:impression list %s product %s dimension %s" }, { V: /^il(\d+)pi(\d+)cm(\d+)$/, W: "ec:impression list %s product %s metric %s" }, { V: "linkid", W: "linkid:linkId" }, { V: "ic", W: "ec:item code" }, { V: "in", W: "ec:item name" }, { V: "iv", W: "ec:item variation" }, { V: "ip", W: "ec:item price" }, { V: "iq", W: "ec:item quantity" }, { V: "cu", W: "ec:item currency" }], Sd = function (a) {
        "&" == a[ma](0) && (a = a[C](1)); for (var b = 0; b < Rd[w]; b++) {
            var c = Rd[b].V, d = Rd[b].W; if (G(c)) { if (c == a) return d } else if (c = a[h](c)) return c[0] =
            d, Ha[D](void 0, c)
        } return ""
    }; function Ga(a, b) { var c = [][q][A](arguments); c[ta]("log"); M.log[D](M, c) } function N(a, b) { var c = [][q][A](arguments); c[ta]("info"); M.log[D](M, c) } function J(a, b) { var c = [][q][A](arguments); c[ta]("warn"); M.log[D](M, c) } function O(a, b) { var c = [][q][A](arguments); c[ta]("error"); M.log[D](M, c) } function L(a, b) { var c = Q.ga_debug; c && c.trace && (c = [][q][A](arguments), c[ta]("log"), M.log[D](M, c)) } function dd(a, b) { var c = [][q][A](arguments); c[ta]("group"); M.log[D](M, c) } function ge() { M.log[D](M, ["groupEnd"]) }
    var M = new function () { var a = ca.console, b = a && "Firebug Lite" == a.provider; this.log = function (c, d, e) { if (a) { var f = Ha[D](ca, [][q][A](arguments, 1)); if (b) for (var f = f[y]("\n"), ea = 0; ea < f[w]; ea++) a[c](f[ea]); else if (a[c]) a[c](f); else "group" == c && a.log(f) } } };
    function Ia(a) { N("\nSent beacon:\n" + a + "\n\n"); var b = []; a = a[y]("&"); for (var c = 0; c < a[w]; c++) { var d = a[c][y]("="), e = d[0], d = d[1]; if ("_" != e[ma](0)) { var f = kd(e); f && 0 == f[K]("&") && (f = Sd(f) || f); f && ("&" + e == f && (f = "<unknown>"), b[n]([f, "(&" + e + ")", Ba(d)])) } } b.sort(); Xd(b) }
    function Xd(a) { for (var b = [], c = 0; c < a[w]; c++) for (var d = 0; d < a[c][w] - 1; d++) a[c][d] && (b[d] = b[d] || 0, b[d] = a[c][d][w] > b[d] ? a[c][d][w] : b[d]); for (c = 0; c < a[w]; c++) { for (var e = [], d = 0; d < a[c][w]; d++) { var f = he(0) + a[c][d]; e[n](f + he((b[d] || 0) - f[w])) } N(e[E](" ")) } } function Ja(a) { var b = []; Ka.map(function (c, d) { var ea = a.get(c); void 0 != ea && "_" != c[0] && b[n](c + (d.i ? " (" + d.i + ")" : "") + " = " + Fa(ea)) }); for (var c = b.sort(), d = 0; d < c[w]; d++) N("  " + c[d]) }
    function Td(a) { for (var b in a) a[Qd](b) && (Zb(ac, b) || (yc(b) ? J('This field cannot be set in a create method. Please use ga("set", %s, %s);', b, a[b]) : J("Create config had an unknown parameter: %s", b)), La(b, a[b])) }
    function Fa(a, b) { var c = b || 0; if (void 0 == a) return "" + a; if (G(a)) return '"' + a + '"'; if (t(a)) return "[function]"; if (ga(a)) { if (3 < b) return "[...]"; for (var d = [], e = 0; e < a[w]; e++) d[n](Fa(a[e], c + 1)); return "[" + d[E](", ") + "]" } if (a.constructor == Object) { if (3 < b) return "{...}"; d = []; for (e in a) d[n](e + ": " + Fa(a[e], c + 1)); return "{" + d[E](", ") + "}" } return "" + a } function Ha(a, b) { if (!G(a)) return ""; for (var c = a[y]("%s"), d = 1; d < arguments[w]; d++) c.splice(2 * d - 1, 0, Fa(arguments[d])); return c[E]("") }
    function he(a) { return 0 < a ? Array(a + 1)[E](" ") : "" }
    function La(a, b) {
        if (void 0 == b) switch (a) { case U: case Ma: case Gc: J("Expected a value for required field: %s", a) } else {
            switch (a) {
                case Ma: case Na: case Oa: case Pa: case Qa: case Ra: case Sa: case Ta: case Ua: case Va: case Wa: case Xa: case Ya: case Za: case R: case $a: case ab: case bb: case cb: case db: case eb: case fb: case gb: case hb: case ib: case jb: case kb: case lb: case mb: case nb: case pb: case qb: case rb: case sb: case tb: case ub: case S: case vb: case wb: case xb: case Pd: G(b) || J("Expected a string value for field: %s. but found: %s.",
                a, typeof b); break; case yb: case zb: case Ab: case Bb: case Cb: case Db: case Eb: !isNaN(parseFloat(b)) && isFinite(b) || J("Expected a number value for the field: %s. but found: %s.", a, typeof b); break; case Fb: case Gb: case Hb: case Ib: case Jb: case "forceSSL": case Kb: case Lb: case Mb: !0 !== b && !1 !== b && 1 !== b && 0 !== b && J("Expected a boolean value for the field: %s. but found: %s.", a, typeof b); break; case Nb: case Ob: case Pb: case Qb: case Rb: case Tb: case Ub: case Vb: t(b) || J("Expected a function for the field value: %s. but found: %s.",
                a, typeof b); break; case T: /^[a-zA-Z0-9_]+$/[p](b) || O("Tracker name should only consist of alphanumeric characters."); break; case U: va[p](b) || J("The tracking Id should only be of the format UA-NNNNNN-N.")
            } !/^contentGroup[0-9]+$/[p](a) && !/^dimension[0-9]+$/[p](a) || G(b) || J("Expected a string value for field: %s. but found: %s.", a, typeof b); !/^metric[0-9]+$/[p](a) || !isNaN(parseFloat(b)) && isFinite(b) || J("Expected a number value for field: %s. but found: %s.", a, typeof b)
        }
    }
    function Ec(a) { function b(b) { G(a.get(b)) || O("Missing required field '%s' for hit of type '%s'", b, c) } var c = V(a, Ma); switch (c) { case "pageview": b(Pa); break; case "event": b(fb); b(gb); break; case "social": b(ib); b(jb); b(kb); break; case "exception": b(tb); break; case "timing": if (a.get(Ic)) break; b(lb); b(mb); break; case "appview": b(pb) } } function od(a, b) { N("\nSent beacon:\n" + b + "\n\n"); var c = []; a.map(function (a, b) { if ("_" != a[ma](0)) { var f = [], ea = kd(a); ea && (f[n](ea), f[n]("(&" + a + ")"), f[n](b), c[n](f)) } }); Xd(c) }
    var tc = ["__utma", "__utmb", "__utmz", "__utmv"]; function Dc(a, b) { for (var c = "", d = b[y](".")[0], e = fd(), f = 0; f < e[w]; f++) { if (d == ic(e[f])) { c = e[f]; break } if (d == ic("." + e[f])) { c = e[f]; break } } return [a, c, "/", b] }; var Q = ca, I = document, $c = function (a) { da(a, 100) }, yd = function () { for (var a = Q[sa].userAgent + (I[ia] ? I[ia] : "") + (I.referrer ? I.referrer : ""), b = a[w], c = Q.history[w]; 0 < c;) a += c-- ^ b++; return ic(a) }; var ld = function (a) { var b = Q._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === Q["ga-disable-" + a]) return !0; try { var c = Q.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (d) { } return !1 }; var Md = function (a) { var b = [], c = I[ia][y](";"); a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"); for (var d = 0; d < c[w]; d++) { var e = c[d][h](a); e && b[n](e[1]) } return b }, pe = function (a, b, c, d, e, f) {
        ld(e) ? (N("Aborting cookie write: User has opted out of tracking."), e = !1) : Wd[p](I[z][qa]) || "/" == c && fe[p](d) ? (N("Aborting cookie write: Prohibited domain."), e = !1) : e = !0; if (!e) return !1; b && 1200 < b[w] && (b = b[C](0, 1200), F(24)); c = a + "=" + b + "; path=" + c + "; "; f && (c += "expires=" + (new Date((new Date)[oa]() + f)).toGMTString() + "; "); d && "none" !=
        d && (c += "domain=" + d + ";"); d = I[ia]; I.cookie = c; return d != I[ia] || Zb(Md(a), b)
    }, Ae = function (a) { return P(a)[Cd](/\(/g, "%28")[Cd](/\)/g, "%29") }, fe = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Wd = /(^|\.)doubleclick\.net$/i; var hd = function () { return ($b || df() ? "https:" : "http:") + "//www.google-analytics.com" }, bc = function (a) { ha(this, "len"); this.message = a + "-8192" }, cc = function (a) { ha(this, "ff2post"); this.message = a + "-2036" }, id = function (a, b, c) { var d = za(a + "?" + b); d.onload = d.onerror = function () { d.onload = null; d.onerror = null; c() } }, ue = function (a, b, c) { var d; d = Q.XDomainRequest; if (!d) return !1; d = new d; d.open("POST", a); d.onerror = function () { c() }; d.onload = c; d[jd](b); return !0 }, te = function (a, b, c) {
        var d = Q.XMLHttpRequest; if (!d) return !1; var e = new d;
        if (!("withCredentials" in e)) return !1; e.open("POST", a, !0); e.withCredentials = !0; e.setRequestHeader("Content-Type", "text/plain"); e.onreadystatechange = function () { 4 == e.readyState && (c(), e = null) }; e[jd](b); return !0
    }, dc = function (a, b) {
        if (!I.body) return $c(function () { dc(a, b) }), !0; a = ba(a); try { var c = I[la]('<iframe name="' + a + '"></iframe>') } catch (d) { c = I[la]("iframe"), ha(c, a) } c.height = "0"; c.width = "0"; c.style.display = "none"; c.style.visibility = "hidden"; var e = I[z], e = hd() + "/analytics_iframe.html#" + ba(e[B] + "//" + e[u] +
        "/favicon.ico"), f = function () { c.src = ""; c[sc] && c[sc].removeChild(c) }; Ca(Q, "beforeunload", f); var ea = !1, l = 0, k = function () { if (!ea) { try { if (9 < l || c.contentWindow[z][u] == I[z][u]) { ea = !0; f(); Da(Q, "beforeunload", f); b(); return } } catch (a) { } l++; da(k, 200) } }; Ca(c, "load", k); I.body.appendChild(c); c.src = e; return !0
    }, fc = function (a, b, c) {
        O("Error: type=%s method=%s message=%s account=%s", arguments); if (!(1 <= 100 * m.random() || ld("?"))) {
            var d = ["t=error", "_e=" + a, "_v=j32d", "sr=1"]; b && d[n]("_f=" + b); c && d[n]("_m=" + P(c[C](0, 100))); d[n]("aip=1");
            d[n]("z=" + Yd()); id(hd() + "/collect", d[E]("&"), Aa)
        }
    }; var gc = function () { this.m = [] }; gc[x].add = function (a) { this.m[n](a) }; gc[x].H = function (a) { L("\nExecuting " + this.m[w] + " filters:"); try { for (var b = 0; b < this.m[w]; b++) { L("  filter[" + b + "]: " + this.m[b]); var c = a.get(this.m[b]); c && t(c) ? c[A](Q, a) : L("  Skipping (no function found.)") } } catch (d) { L("Aborted execution due to exception: " + d) } b = a.get(Nb); b != Aa && t(b) && (L("Manually firing callback"), a.set(Nb, Aa, !0), da(b, 10)) };
    function hc(a) { if (100 != a.get(Db) && ic(V(a, R)) % 1E4 >= 100 * jc(a, Db)) throw N("User has been sampled out. Aborting hit."), "abort"; } function kc(a) { if (ld(V(a, U))) throw N("User has opted out of tracking. Aborting hit."), "abort"; } function lc() { var a = I[z][B]; if ("http:" != a && "https:" != a) throw N("Unallowed document protocol. Aborting hit."), "abort"; }
    function mc(a) { try { Q.XMLHttpRequest && "withCredentials" in new Q.XMLHttpRequest ? F(40) : Q.XDomainRequest && F(41), Q[sa][wa] && F(42) } catch (b) { } a.set(oc, cf(a), !0); a.set(md, jc(a, md) + 1); var c = []; Ka.map(function (b, e) { if (e.i) { var f = a.get(b); void 0 != f && f != e[ja] && ("boolean" == typeof f && (f *= 1), c[n](e.i + "=" + P("" + f))) } }); c[n]("z=" + be()); a.set(Na, c[E]("&"), !0) }
    function pc(a) { var b = V(a, ob) || hd() + "/collect", c = V(a, Na), d = a.get(Nb), e = a.get(Oe), d = d || Aa; e && (e = d, Q[sa][wa] ? Q[sa][wa](b, c) ? (e(), e = !0) : e = !1 : e = !1); if (e) Ia(c); else if (2036 >= c[w]) id(b, c, d), Ia(c); else if (8192 >= c[w]) { if (0 <= Q[sa].userAgent[K]("Firefox") && ![].reduce) throw new cc(c[w]); te(b, c, d) || ue(b, c, d) || (ye(new Ie) ? id(b, c, d) : dc(c, d) || d()); Ia(c) } else throw fc("len", c[w]), new bc(c[w]); a.set(Nb, Aa, !0) } function td(a) { var b = Q.gaData; b && (b.expId && a.set(zd, b.expId), b.expVar && a.set(Ad, b.expVar)) }
    function nc(a) { Ec(a) } function Ud() { if (Q[sa] && "preview" == Q[sa].loadPurpose) throw N("Navigator in preview mode. Aborting hit."), "abort"; } function ve(a) { var b = Q.gaDevIds; ga(b) && 0 != b[w] && a.set("&did", b[E](","), !0) } function ya(a) { if (!a.get(U)) throw O("Tracking ID not set. Aborting hit."), "abort"; }; var ae = function () { return m.round(2147483647 * m.random()) }, be = function () { try { var a = new Uint32Array(1); Q.crypto.getRandomValues(a); return a[0] & 2147483647 } catch (b) { return ae() } }, Yd = ae; function qc(a) { var b = jc(a, rc); 500 <= b && (F(15), N("Exceeded maximum number of hits for this page. Try reducing the number of hits being sent.")); var c = V(a, Ma); if ("transaction" != c && "item" != c) { var c = jc(a, uc), d = (new Date)[oa](), e = jc(a, vc); 0 == e && a.set(vc, d); e = m.round(2 * (d - e) / 1E3); 0 < e && (c = m.min(c + e, 20), a.set(vc, d)); if (0 >= c) throw N("Exceeded rate limit for sending hits. Aborting hit."), "abort"; a.set(uc, --c) } a.set(rc, ++b) }; var wc = function () { this.data = new ef; this[r].debug = !0 }, Ka = new ef, xc = []; wc[x].get = function (a) { var b = yc(a), c = this[r].get(a); b && void 0 == c && (c = t(b[ja]) ? b[ja]() : b[ja]); return b && b.v ? b.v(this, a, c) : c }; var V = function (a, b) { var c = a.get(b); return void 0 == c ? "" : "" + c }, jc = function (a, b) { var c = a.get(b); return void 0 == c || "" === c ? 0 : 1 * c }; wc[x].set = function (a, b, c) { if (a) if ("object" == typeof a) for (var d in a) a[Qd](d) && zc(this, d, a[d], c); else zc(this, a, b, c) };
    var zc = function (a, b, c, d) { La(b, c); var e = yc(b); e && e.w ? e.w(a, b, c, d) : a[r].set(b, c, d); e || N("Set called on unknown field: %s.", b) }, Ac = function (a, b, c, d, e) { ha(this, a); this.i = b; this.v = d; this.w = e; this.defaultValue = c }, yc = function (a) { var b = Ka.get(a); if (!b) for (var c = 0; c < xc[w]; c++) { var d = xc[c], e = d[0].exec(a); if (e) { L("Generating new model field for name: " + a); b = d[1](e); Ka.set(b[na], b); break } } return b }, kd = function (a) { var b; Ka.map(function (c, d) { d.i == a && (b = d) }); return b && b[na] }, W = function (a, b, c, d, e) {
        a = new Ac(a, b, c,
        d, e); Ka.set(a[na], a); return a[na]
    }, Bc = function (a, b) { xc[n]([new RegExp("^" + a + "$"), b]) }, X = function (a, b, c) { return W(a, b, c, void 0, Cc) }, Cc = function (a, b) { O("Ignored attempt to update read-only property: " + b) }; var Fc = G(ca.GoogleAnalyticsObject) && xa(ca.GoogleAnalyticsObject) || "ga", $b = !1, ff = W("_br"), Gc = X("apiVersion", "v"), Hc = X("clientVersion", "_v"), Fb = W("anonymizeIp", "aip"), yb = W("adSenseId", "a"), Ma = W("hitType", "t"), Nb = W("hitCallback"), Na = W("hitPayload"), Gb = W("nonInteraction", "ni"), Pd = W("currencyCode", "cu"), Oe = W("useBeacon", void 0, !1); W("dataSource", "ds"); var Hb = W("sessionControl", "sc", ""); W("sessionGroup", "sg");
    var zb = W("queueTime", "qt"), md = W("_s", "_s"), Oa = W("screenName", "cd"), Pa = W("location", "dl", ""), Qa = W("referrer", "dr"), Ra = W("page", "dp", ""), Sa = W("hostname", "dh"), Ta = W("language", "ul"), Ua = W("encoding", "de"), Va = W("title", "dt", function () { return I.title || void 0 }); Bc("contentGroup([0-9]+)", function (a) { return new Ac(a[0], "cg" + a[1]) });
    var Wa = W("screenColors", "sd"), Xa = W("screenResolution", "sr"), Ya = W("viewportSize", "vp"), Ib = W("javaEnabled", "je"), Za = W("flashVersion", "fl"), $a = W("campaignId", "ci"), ab = W("campaignName", "cn"), bb = W("campaignSource", "cs"), cb = W("campaignMedium", "cm"), db = W("campaignKeyword", "ck"), eb = W("campaignContent", "cc"), fb = W("eventCategory", "ec"), gb = W("eventAction", "ea"), hb = W("eventLabel", "el"), Ab = W("eventValue", "ev"), ib = W("socialNetwork", "sn"), jb = W("socialAction", "sa"), kb = W("socialTarget", "st"), Ic = W("l1", "plt"), Jc = W("l2",
    "pdt"), Kc = W("l3", "dns"), Lc = W("l4", "rrt"), Mc = W("l5", "srt"), Nc = W("l6", "tcp"), Oc = W("l7", "dit"), Pc = W("l8", "clt"), lb = W("timingCategory", "utc"), mb = W("timingVar", "utv"), nb = W("timingLabel", "utl"), Bb = W("timingValue", "utt"), pb = W("appName", "an"), qb = W("appVersion", "av", ""), rb = W("appId", "aid", ""), sb = W("appInstallerId", "aiid", ""), tb = W("exDescription", "exd"), Jb = W("exFatal", "exf"), zd = W("expId", "xid"), Ad = W("expVar", "xvar"), Dd = W("_utma", "_utma"), Ed = W("_utmz", "_utmz"), Fd = W("_utmht", "_utmht"), rc = W("_hc", void 0, 0), vc =
    W("_ti", void 0, 0), uc = W("_to", void 0, 20); Bc("dimension([0-9]+)", function (a) { return new Ac(a[0], "cd" + a[1]) }); Bc("metric([0-9]+)", function (a) { return new Ac(a[0], "cm" + a[1]) }); W("linkerParam", void 0, void 0, nd, Cc); var oc = W("usage", "_u"), af = W("_um"); W("forceSSL", void 0, void 0, function () { return $b }, function (a, b, c) { F(34); $b = !!c }); var Zd = W("_j1", "jid"), Be = W("_j2", "gjid");
    Bc("\\&(.*)", function (a) { var b = new Ac(a[0], a[1]), c = kd(a[0][C](1)); c && (L("Alias created: " + a[0] + " -> " + c), b.v = function (a) { return a.get(c) }, b.w = function (a, b, f, ea) { a.set(c, f, ea) }, b.i = void 0); return b });
    var Ob = X("_oot"), Vd = W("previewTask"), Pb = W("checkProtocolTask"), xd = W("validationTask"), Qb = W("checkStorageTask"), Gd = W("historyImportTask"), Rb = W("samplerTask"), Tb = X("_rlt"), Ub = W("buildHitTask"), Vb = W("sendHitTask"), Hd = W("ceTask"), we = W("devIdTask"), oe = W("timingTask"), Ce = W("displayFeaturesTask"), T = X("name"), R = X("clientId", "cid"), xe = W("userId", "uid"), U = X("trackingId", "tid"), ub = X("cookieName", void 0, "_ga"), S = X("cookieDomain"), vb = X("cookiePath", void 0, "/"), Cb = X("cookieExpires", void 0, 63072E3), wb = X("legacyCookieDomain"),
    Id = X("legacyHistoryImport", void 0, !0), xb = X("storage", void 0, "cookie"), Kb = X("allowLinker", void 0, !1), Lb = X("allowAnchor", void 0, !0), Db = X("sampleRate", "sf", 100), Eb = X("siteSpeedSampleRate", void 0, 1), Mb = X("alwaysSendReferrer", void 0, !1), ac = [T, U, R, xe, ub, S, vb, Cb, wb, Id, Kb, Lb, Db, Eb, Mb, xb], ob = W("transportUrl"), De = W("_r", "_r"); function Y(a, b, c, d) { b[a] = function () { try { return d && F(d), c[D](this, arguments) } catch (b) { throw fc("exc", a, b && b[na]), b; } } }; var Ie = function (a, b, c) { this.Z = 1E4; this.ja = a; this.fa = !1; this.F = b; this.ia = c || 1 }, ye = function (a, b) { var c; if (a.ja && a.fa) return 0; a.fa = !0; if (b) { if (a.F && jc(b, a.F)) return jc(b, a.F); if (0 == b.get(Eb)) return 0 } if (0 == a.Z) return 0; void 0 === c && (c = be()); return 0 == c % a.Z ? m.floor(c / a.Z) % a.ia + 1 : 0 }; var gf = new Ie(!0, ff, 5), hf = function (a) { if (!df() && !$b) { var b = ye(gf, a); if (b && (Q[sa][wa] || !(4 <= b))) { var c = (new Date).getHours(), d = [be(), be(), be()][E]("."); a = (3 == b || 5 == b ? "https:" : "http:") + "//www.google-analytics.com/collect?z=br."; a += [b, "A", c, d][E]("."); var e = 1 != b && 4 != b ? "https:" : "http:", e = e + "//www.google-analytics.com/collect?z=br.", e = e + [b, "B", c, d][E]("."), c = function () { 4 <= b ? Q[sa][wa](e, "") : za(e) }; be() % 2 ? (za(a), c()) : (c(), za(a)) } } }; function Qc() {
        var a, b, c; if ((c = (c = Q[sa]) ? c.plugins : null) && c[w]) for (var d = 0; d < c[w] && !b; d++) { var e = c[d]; -1 < e[na][K]("Shockwave Flash") && (b = e.description) } if (!b) try { a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version") } catch (f) { } if (!b) try { a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", b = a.GetVariable("$version") } catch (ea) { } if (!b) try { a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version") } catch (l) { } b &&
        (a = b[h](/[\d]+/g)) && 3 <= a[w] && (b = a[0] + "." + a[1] + " r" + a[2]); return b || void 0
    }; var Sc = function (a, b) { var c = m.min(jc(a, Eb), 100); if (ic(V(a, R)) % 100 >= c) L("Site speed data not sent - visitor sampled out"); else if (c = {}, qd(c) || rd(c)) { var d = c[Ic]; void 0 == d || Infinity == d || isNaN(d) ? L("Site speed data not sent - unsupported browser") : 0 < d ? (Rc(c, Kc), Rc(c, Nc), Rc(c, Mc), Rc(c, Jc), Rc(c, Lc), Rc(c, Oc), Rc(c, Pc), b(c)) : (L("Site speed data not available - waiting for onload"), Ca(Q, "load", function () { Sc(a, b) }, !1)) } else L("Site speed data not sent - unsupported browser") }, qd = function (a) {
        var b = Q.performance ||
        Q.webkitPerformance, b = b && b.timing; if (!b) return !1; var c = b.navigationStart; if (0 == c) return !1; a[Ic] = b.loadEventStart - c; a[Kc] = b.domainLookupEnd - b.domainLookupStart; a[Nc] = b.connectEnd - b.connectStart; a[Mc] = b.responseStart - b.requestStart; a[Jc] = b.responseEnd - b.responseStart; a[Lc] = b.fetchStart - c; a[Oc] = b.domInteractive - c; a[Pc] = b.domContentLoadedEventStart - c; return !0
    }, rd = function (a) {
        if (Q.top != Q) return !1; var b = Q.external, c = b && b.onloadT; b && !b.isValidLoadTime && (c = void 0); 2147483648 < c && (c = void 0); 0 < c && b.setPageReadyTime();
        if (void 0 == c) return !1; a[Ic] = c; return !0
    }, Rc = function (a, b) { var c = a[b]; if (isNaN(c) || Infinity == c || 0 > c) a[b] = void 0 }, ze = function (a) { return function (b) { "pageview" != b.get(Ma) || a.L || (a.L = !0, Sc(b, function (b) { a[jd]("timing", b) })) } }; var Tc = !1, Yc = function (a) { if ("cookie" == V(a, xb)) { var b = V(a, ub), c = ie(a), d = Wc(V(a, vb)), e = Xc(V(a, S)), f = 1E3 * jc(a, Cb), ea = V(a, U); if ("auto" != e) pe(b, c, d, e, ea, f) && (Tc = !0); else { F(32); for (var l = fd(), k = 0; k < l[w]; k++) if (e = l[k], a[r].set(S, e), c = ie(a), pe(b, c, d, e, ea, f)) { N("Auto cookieDomain found: %s", e); Tc = !0; return } O("Cookie write failed."); a[r].set(S, "auto") } } }, Zc = function (a) { if ("cookie" == V(a, xb) && !Tc && (Yc(a), !Tc)) throw N("Storage not available. Aborting hit."), "abort"; }, Kd = function (a) {
        if (a.get(Id)) {
            var b = V(a, S),
            c = V(a, wb) || Wb(), d = Jd("__utma", c, b); d && (F(19), a.set(Fd, (new Date)[oa](), !0), a.set(Dd, d.T), (b = Jd("__utmz", c, b)) && d[g] == b[g] && a.set(Ed, b.T))
        }
    }, ie = function (a) { var b = Ae(V(a, R)), c = Uc(V(a, S)); a = Vc(V(a, vb)); 1 < a && (c += "-" + a); return ["GA1", c, b][E](".") }, sd = function (a, b, c) { for (var d = [], e = [], f, ea = 0; ea < a[w]; ea++) { var l = a[ea]; if (l.k[c] == b) d[n](l); else void 0 == f || l.k[c] < f ? (e = [l], f = l.k[c]) : l.k[c] == f && e[n](l) } return 0 < d[w] ? d : e }, Xc = function (a) { return 0 == a[K](".") ? a.substr(1) : a }, Uc = function (a) { return Xc(a)[y](".")[w] },
    fd = function () { var a = [], b = Wb()[y]("."); if (4 == b[w]) { var c = b[b[w] - 1]; if (parseInt(c, 10) == c) return ["none"] } for (c = b[w] - 2; 0 <= c; c--) a[n](b[q](c)[E](".")); a[n]("none"); return a }, Wc = function (a) { if (!a) return "/"; 1 < a[w] && a.lastIndexOf("/") == a[w] - 1 && (a = a.substr(0, a[w] - 1)); 0 != a[K]("/") && (a = "/" + a); return a }, Vc = function (a) { a = Wc(a); return "/" == a ? 1 : a[y]("/")[w] }; function Jd(a, b, c) { "none" == b && (b = ""); var d = [], e = Md(a); a = "__utma" == a ? 6 : 2; for (var f = 0; f < e[w]; f++) { var ea = ("" + e[f])[y]("."); ea[w] >= a && d[n]({ hash: ea[0], T: e[f], Q: ea }) } return 0 == d[w] ? void 0 : 1 == d[w] ? d[0] : Ld(b, d) || Ld(c, d) || Ld(null, d) || d[0] } function Ld(a, b) { var c, d; null == a ? c = d = 1 : (c = ic(a), d = ic(H(a, ".") ? a[C](1) : "." + a)); for (var e = 0; e < b[w]; e++) if (b[e][g] == c || b[e][g] == d) return b[e] }; var je = new RegExp(/^https?:\/\/([^\/:]+)/), ke = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/; function nd(a) { a = a.get(R); var b = ud(a, 0); return "_ga=1." + P(b + "." + a) } function ud(a, b) { for (var c = new Date, d = Q[sa], e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e[w]; ++d) c[n](e[d].description); return ic(c[E](".")) } var pd = function (a) { F(48); this.target = a; this.X = !1 };
    pd[x].S = function (a, b) { if (a.tagName) { if ("a" == a.tagName[ua]()) { a[Sb] && Bd(a, le(this, a[Sb], b)); return } if ("form" == a.tagName[ua]()) return me(this, a) } if ("string" == typeof a) return le(this, a, b); O("Unknown Object passed to linker:decorate %s", a) };
    var le = function (a, b, c) { var d = ke.exec(b); d && 3 <= d[w] && (b = d[1] + (d[3] ? d[2] + d[3] : "")); a = a[de].get("linkerParam"); var e = b[K]("?"), d = b[K]("#"); c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b[C](0, d) + c + a + b[C](d)); return b }, me = function (a, b) {
        if (b) if (b[ee]) {
            N("Linker decorating form: %s", b); var c = a[de].get("linkerParam")[y]("=")[1]; if ("get" == b.method[ua]()) {
                for (var d = b.childNodes || [], e = 0; e < d[w]; e++) if ("_ga" == d[e][na]) { d[e][ce]("value", c); return } d = I[la]("input"); d[ce]("type", "hidden"); d[ce]("name",
                "_ga"); d[ce]("value", c); b.appendChild(d)
            } else "post" == b.method[ua]() ? b.action = le(a, b[ee]) : O("Unknown form method %s on %s", b.method, b)
        } else O("An action is required for the linker to work.")
    };
    pd[x].U = function (a, b, c) {
        function d(c) { try { c = c || Q.event; var d; e: { var f = c[de] || c.srcElement; for (c = 100; f && 0 < c;) { if (f[Sb] && f.nodeName[h](/^a(?:rea)?$/i)) { d = f; break e } f = f[sc]; c-- } d = {} } "http:" != d[B] && "https:" != d[B] || !ne(a, d[qa] || "") || (d[Sb] && Bd(d, le(e, d[Sb], b)), N("Link decorated: " + d[Sb])) } catch (v) { F(26) } } var e = this; this.X || (this.X = !0, Ca(I, "mousedown", d, !1), Ca(I, "touchstart", d, !1), Ca(I, "keyup", d, !1)); if (c) {
            c = function (b) {
                b = b || Q.event; if ((b = b[de] || b.srcElement) && b[ee]) {
                    var c = b[ee][h](je); c && ne(a, c[1]) && me(e,
                    b)
                }
            }; for (var f = 0; f < I.forms[w]; f++) Ca(I.forms[f], "submit", c)
        }
    }; function ne(a, b) { if (b == I[z][qa]) return !1; for (var c = 0; c < a[w]; c++) if (a[c] instanceof RegExp) { if (a[c][p](b)) return !0 } else if (0 <= b[K](a[c])) return !0; return !1 }; var Fe = function (a, b, c, d) { this.Y = b; this.ca = c; (b = d) || (b = (b = V(a, T)) && "t0" != b ? Pe[p](b) ? "_gat_" + Ae(V(a, U)) : "_gat_" + Ae(b) : "_gat"); this.aa = b }, Le = function (a, b) { var c = b.get(Ub); b.set(Ub, function (b) { Je(a, b); var d = c(b); Ke(a, b); return d }); var d = b.get(Vb); b.set(Vb, function (b) { var c = d(b); Ee(a, b); return c }) }, Je = function (a, b) { b.get(a.Y) ? J("Join id already set") : "1" == Md(a.aa)[0] ? b.set(a.Y, "", !0) : b.set(a.Y, "" + Yd(), !0) }, Ke = function (a, b) {
        b.get(a.Y) && (N("Setting throttling cookie: %s", a.aa), pe(a.aa, "1", b.get(vb), b.get(S),
        b.get(U), 6E5))
    }, Ee = function (a, b) { if (b.get(a.Y)) { var c = new ef, d = function (a) { c.set(yc(a).i, b.get(a)) }; d(Gc); d(Hc); d(U); d(R); d(a.Y); c.set(yc(oc).i, cf(b)); var e = a.ca; c.map(function (a, b) { e += P(a) + "="; e += P("" + b) + "&" }); e += "z=" + Yd(); od(c, e); za(e); b.set(a.Y, "", !0) } }, Pe = /^gtm\d+$/; var $d = function (a, b) { var c = a.a; if (!c.get("dcLoaded")) { bf(c, 29); b = b || {}; var d; b[ub] && (d = Ae(b[ub])); d = new Fe(c, Zd, "https://stats.g.doubleclick.net/collect?t=dc&aip=1&", d); Le(d, c); c.set("dcLoaded", !0) } }; var Me = function (a) { var b; b = a.get("dcLoaded") ? !1 : "cookie" != a.get(xb) ? !1 : !0; b && (bf(a, 51), b = new Fe(a, Zd), Je(b, a), Ke(b, a), a.get(b.Y) && (a.set(De, 1, !0), a.set(ob, hd() + "/r/collect", !0))) }; var Ge = function (a, b) { var c = a.a; if (!c.get("_rlsaLoaded")) { bf(c, 38); b = b || {}; if (b[ub]) var d = Ae(b[ub]); d = new Fe(c, Be, "https://www.google.com/ads/ga-audiences?t=sr&aip=1&", d); Le(d, c); c.set("_rlsaLoaded", !0); ed("displayfeatures", a, b) } }; var He = function () { var a = Q.gaGlobal = Q.gaGlobal || {}; return a.hid = a.hid || Yd() }; var Nd, Od = function (a, b, c) { if (!Nd) { var d; d = I[z][g]; var e = Q[na], f = /^#?gaso=([^&]*)/; if (e = (d = (d = d && d[h](f) || e && e[h](f)) ? d[1] : Md("GASO")[0] || "") && d[h](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) pe("GASO", "" + d, c, b, a, 0), ca._udo || (ca._udo = b), ca._utcp || (ca._utcp = c), a = e[1], Ea("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + Yd(), "_gasojs"); Nd = !0 } }; var va = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/, ad = function (a) {
        function b(a, b) { d.a[r].set(a, b) } function c(a, c) { b(a, c); d.filters.add(a) } var d = this; this.a = new wc; this.filters = new gc; L("Initializing tracker"); b(T, a[T]); b(U, xa(a[U])); b(ub, a[ub]); b(S, a[S] || Wb()); b(vb, a[vb]); b(Cb, a[Cb]); b(wb, a[wb]); b(Id, a[Id]); b(Kb, a[Kb]); b(Lb, a[Lb]); b(Db, a[Db]); b(Eb, a[Eb]); b(Mb, a[Mb]); b(xb, a[xb]); b(xe, a[xe]); b(Gc, 1); b(Hc, "j32d"); c(Ob, kc); c(Vd, Ud); c(Pb, lc); c(xd, ya); c(Qb, Zc); c(Gd, Kd); c(Rb, hc); c(Tb, qc); c(Hd, td); c(we, ve); c(Ce, Me); c(Ub,
        mc); c("_dt", nc); c(Vb, pc); c(oe, ze(this)); vd(this.a, a[R]); wd(this.a); this.a.set(yb, He()); Od(this.a.get(U), this.a.get(S), this.a.get(vb)); Td(a); L("Initialization complete\n\n")
    }, vd = function (a, b) {
        if ("cookie" == V(a, xb)) {
            Tc = !1; var c; i: {
                var d = Md(V(a, ub)); if (d && !(1 > d[w])) {
                    c = []; for (var e = 0; e < d[w]; e++) { var f; f = d[e][y]("."); var ea = f.shift(); ("GA1" == ea || "1" == ea) && 1 < f[w] ? (ea = f.shift()[y]("-"), 1 == ea[w] && (ea[1] = "1"), ea[0] *= 1, ea[1] *= 1, f = { k: ea, n: f[E](".") }) : (J("Unknown cookie version: " + ea), f = void 0); f && c[n](f) } if (1 ==
                    c[w]) { F(13); c = c[0].n; break i } if (0 == c[w]) F(12); else { F(14); d = Uc(V(a, S)); c = sd(c, d, 0); if (1 == c[w]) { c = c[0].n; break i } d = Vc(V(a, vb)); c = sd(c, d, 1); c = c[0] && c[0].n; break i }
                } c = void 0
            } !c && (c = V(a, S), d = V(a, wb) || Wb(), c = Jd("__utma", d, c), c = void 0 == c ? void 0 : c.Q[1] + "." + c.Q[2]) && (Ga("Using legacy visitor id"), F(10)); c && (a[r].set(R, c), Tc = !0)
        } c = a.get(Lb); if (c = (c = I[z][c ? "href" : "search"][h]("(?:&|#|\\?)" + P("_ga")[Cd](/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c[w] ? c[1] : "") a.get(Kb) ? (e = c[K]("."), -1 == e ? (J("Invalid linker parameter format: " +
        c), F(22)) : (f = c[C](e + 1), "1" != c[C](0, e) ? (J("Unrecognized linker parameter version: " + c), F(22)) : (e = f[K]("."), -1 == e ? (J("Invalid linker parameter v1 payload: " + c), F(22)) : (d = f[C](0, e), e = f[C](e + 1), d != ud(e, 0) && d != ud(e, -1) && d != ud(e, -2) ? (J("Bad or expired linker parameter hash: " + c), F(23)) : (Ga("Loaded linker parameter: " + c), F(11), a[r].set(R, e)))))) : (J("Linker disabled. Ignoring linker parameter: " + c), F(21)); b && (Ga("Used client Id from constructor."), F(9), a[r].set(R, P(b))); a.get(R) || ((c = (c = Q.gaGlobal && Q.gaGlobal.vid) &&
        -1 != c[fa](/^(?:utma\.)?\d+\.\d+$/) ? c : void 0) ? (Ga("New visitor. Copying new clientId"), F(17), a[r].set(R, c)) : (Ga("New visitor. Generating new clientId"), F(8), a[r].set(R, [Yd() ^ yd() & 2147483647, m.round((new Date)[oa]() / 1E3)][E](".")))); Yc(a)
    }, wd = function (a) {
        var b = Q[sa], c = Q.screen, d = I[z]; a.set(Qa, Xb(a.get(Mb))); if (d) { var e = d.pathname || ""; "/" != e[ma](0) && (F(31), e = "/" + e); a.set(Pa, d[B] + "//" + d[qa] + e + d[fa]) } c && a.set(Xa, c.width + "x" + c.height); c && a.set(Wa, c.colorDepth + "-bit"); var c = I.documentElement, f = (e = I.body) &&
        e[pa] && e[ra], ea = []; c && c[pa] && c[ra] && ("CSS1Compat" === I.compatMode || !f) ? ea = [c[pa], c[ra]] : f && (ea = [e[pa], e[ra]]); c = 0 >= ea[0] || 0 >= ea[1] ? "" : ea[E]("x"); a.set(Ya, c); a.set(Za, Qc()); a.set(Ua, I.characterSet || I.charset); a.set(Ib, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1); a.set(Ta, (b && (b.language || b.browserLanguage) || "")[ua]()); if (d && a.get(Lb) && (b = I[z][g])) {
            b = b[y](/[?&#]+/); d = []; for (c = 0; c < b[w]; ++c) (H(b[c], "utm_id") || H(b[c], "utm_campaign") || H(b[c], "utm_source") || H(b[c], "utm_medium") || H(b[c], "utm_term") ||
            H(b[c], "utm_content") || H(b[c], "gclid") || H(b[c], "dclid") || H(b[c], "gclsrc")) && d[n](b[c]); 0 < d[w] && (b = "#" + d[E]("&"), a.set(Pa, a.get(Pa) + b))
        }
    }; ad[x].get = function (a) { G(a) || O("Please specify a field name to get it's value."); return this.a.get(a) }; ad[x].set = function (a, b) { this.a.set(a, b) }; var bd = { pageview: [Ra], event: [fb, gb, hb, Ab], social: [ib, jb, kb], timing: [lb, mb, Bb, nb] };
    ad[x].send = function (a) { L("Send start: " + (0 == Z.h ? -1 : (new Date)[oa]() - Z.h)); if (1 > arguments[w]) O("No hit type specified. Aborting hit."); else { var b, c; "string" === typeof arguments[0] ? (b = arguments[0], c = [][q][A](arguments, 1)) : (b = arguments[0] && arguments[0][Ma], c = arguments); b ? (c = Yb(bd[b] || [], c), c[Ma] = b, this.a.set(c, void 0, !0), this.filters.H(this.a), L("Send finished: " + (0 == Z.h ? -1 : (new Date)[oa]() - Z.h)), this.a[r].u = {}, F(44), hf(this.a)) : O("No hit type specified. Aborting hit.") } }; var cd = function (a) { if ("prerender" == I.visibilityState) return !1; a(); return !0 }; var qe = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/, se = function (a) {
        this.r = a; if (t(a[0])) this.s = a[0]; else {
            var b = qe.exec(a[0]); null != b && 4 == b[w] && (this.c = b[1] || "t0", this.e = b[2] || "", this.d = b[3], this.b = [][q][A](a, 1), this.e || (this.D = "create" == this.d, this.g = "require" == this.d, this.f = "provide" == this.d, this.$ = "remove" == this.d), this.g && (3 <= this.b[w] ? (this.da = this.b[1], this.ba = this.b[2]) : this.b[1] && (G(this.b[1]) ? this.da = this.b[1] : this.ba = this.b[1]))); var b = a[1], c = a[2]; if (!this.d) throw O("Invalid command: " + a), "abort"; if (this.g &&
            (!G(b) || "" == b)) throw O("Invalid require command.", a), "abort"; if (this.f && (!G(b) || "" == b || !t(c))) throw O("Invalid provide command.", a), "abort"; if (re(this.c) || re(this.e)) throw O('Target name and plugin names should not contain "." or ":"'), "abort"; if (this.f && "t0" != this.c) throw O("Provide command should not be preceeded by a tracker name."), "abort";
        }
    }; function re(a) { return 0 <= a[K](".") || 0 <= a[K](":") }; var Re, Se, Te; Re = new ef; Te = new ef; Se = { ec: 45, ecommerce: 46, linkid: 47 };
    var ed = function (a, b, c) { if (b == Z) { F(35); var d = Fc } else d = b.get(T); var e = Re.get(a); if (!t(e)) return N("Waiting on require of %s to be fulfilled.", a), !1; b.plugins_ = b.plugins_ || new ef; if (b.plugins_.get(a)) return O("Command ignored. Plugin %s has already been required on tracker %s.", a, d), !0; b.plugins_.set(a, new e(b, c || {})); N("Plugin %s intialized on tracker %s.", a, d); return !0 }, Ue = function (a) {
        function b(a) {
            var b = (a[qa] || "")[y](":")[0][ua](), c = (a[B] || "")[ua](), c = 1 * a[ka] || ("http:" == c ? 80 : "https:" == c ? 443 : "");
            a = a.pathname || ""; H(a, "/") || (a = "/" + a); return [b, "" + c, a]
        } var c = I[la]("a"); Bd(c, I[z][Sb]); var d = (c[B] || "")[ua](), e = b(c), f = c[fa] || "", ea = d + "//" + e[0] + (e[1] ? ":" + e[1] : ""); H(a, "//") ? a = d + a : H(a, "/") ? a = ea + a : !a || H(a, "?") ? a = ea + e[2] + (a || f) : 0 > a[y]("/")[0][K](":") && (a = ea + e[2][C](0, e[2].lastIndexOf("/")) + "/" + a); Bd(c, a); d = b(c); return { protocol: (c[B] || "")[ua](), host: d[0], port: d[1], path: d[2], J: c[fa] || "", url: a || "" }
    }; var jf = { ka: function () { jf.j = [] } }; jf.ka(); jf.H = function (a) { var b = jf.N[D](jf, arguments), b = jf.j.concat(b); for (jf.j = []; 0 < b[w];) { var c; c = b[0]; if (c.s) c = "ga(Function)"; else { for (var d = [], e = 0; c.r && e < c.r[w]; e++) d[n](Fa(c.r[e])); c = "ga(" + d[E](", ") + ")" } dd("Running command: " + c); c = jf.R(b[0]); ge(); if (c) break; b.shift(); if (0 < jf.j[w]) break } jf.j = jf.j.concat(b) };
    jf.N = function (a) {
        for (var b = [], c = 0; c < arguments[w]; c++) try {
            var d = new se(arguments[c]); if (d.f) Re.set(d.b[0], d.b[1]), N("Registered new plugin: ga(provide, %s, Function)", d.b[0]); else {
                if (d.g) {
                    var e = d, f = e.b[0]; if (!t(Re.get(f)) && !Te.get(f)) {
                        Se[Qd](f) && F(Se[f]); var ea = e.da; !ea && Se[Qd](f) ? (F(39), ea = f + ".js") : F(43); if (ea) {
                            ea && 0 <= ea[K]("/") || (ea = ($b || df() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + ea); var l = Ue(ea), e = void 0; var k = l[B], v = I[z][B], e = "https:" == k || k == v ? !0 : "http:" != k ? !1 : "http:" == v; var Qe;
                            if (Qe = e) { var e = l, Ve = Ue(I[z][Sb]); if (e.J || 0 <= e.url[K]("?") || 0 <= e.path[K]("://")) Qe = !1; else if (e[u] == Ve[u] && e[ka] == Ve[ka]) Qe = !0; else { var We = "http:" == e[B] ? 80 : 443; Qe = "www.google-analytics.com" == e[u] && (e[ka] || We) == We && H(e.path, "/plugins/") ? !0 : !1 } } Qe ? (N("Loading resource for plugin: " + f), Ea(l.url), Te.set(f, !0)) : O("Error loading resource for plugin %s: Refusing to load url: %s", f, l.url)
                        } else N("No plugin url set for %s.", f)
                    }
                } b[n](d)
            }
        } catch (Ze) {
            var e = arguments[c], Xe = d, Ye = Ze; ga(e) || t(e) ? ga(e) && !G(e[0]) ? O("First element of command array is not a string: %s",
            e) : Xe && Xe.g ? O("Invalid require command: %s", e) : O("Command failure: %s", Ye) : O("Command is not an array or function: %s", Ye)
        } return b
    };
    jf.R = function (a) {
        try {
            if (a.s) a.s[A](Q, Z.p("t0")); else {
                var b = a.c == Fc ? Z : Z.p(a.c); if (a.D) "t0" != a.c ? J('Command ignored. Use "create" instead of "%s.create"', a.c) : Z.create[D](Z, a.b); else if (a.$) Z.remove(a.c); else if (b) if (a.g) { if (!ed(a.b[0], b, a.ba)) return !0 } else if (a.e) { var c = a.e, d = a.d, e = a.b, f; b.plugins_ || O("Tracker does not have any plugins."); b.plugins_.get(c) || O("Tracker does not have %s plugin required.", c); f = b.plugins_.get(c); f[d] || O("Plugin %s does not have method %s.", c, d); f[d][D](f, e) } else b[a.d][D](b,
                a.b); else N("Command ignored. Unknown target: " + b)
            }
        } catch (ea) { a.s ? O("Exception thrown from pushed function: %s", ea) : a.g ? O("Error creating a plugin instance: %s", a.r) : a.f ? O("Error registering a plugin: %s", a.r) : a.$ ? O("Error removing tracker: %s", a.r) : a.e ? O("Error calling a plugin method: %s", a.r) : O('Called method "%s" threw exception: %s', a.d, ea) }
    }; var Z = function (a) { dd("Executing Google Analytics commands."); F(1); jf.H[D](jf, [arguments]); ge() }; Z.o = {}; Z.C = []; Z.h = 0; Z.answer = 42; var gd = [U, S, T]; Z.create = function (a) { var b = Yb(gd, [][q][A](arguments)); b[T] || (b[T] = "t0"); var c = "" + b[T]; if (Z.o[c]) return J("Ignoring create request for duplicate tracking name."), Z.o[c]; N("Creating new tracker: " + c); b = new ad(b); Z.o[c] = b; Z.C[n](b); return b };
    Z.remove = function (a) { for (var b = 0; b < Z.C[w]; b++) if (Z.C[b].get(T) == a) { N("Removing tracker: " + a); Z.C.splice(b, 1); Z.o[a] = null; return } O("Tracker does not exist.") }; Z.p = function (a) { return Z.o[a] }; Z.A = function () { return Z.C[q](0) };
    Z.P = function () {
        dd("Initializing Google Analytics."); "ga" != Fc && F(49); var a = Q[Fc]; if (a && 42 == a.answer) J("Tracking script already loaded. Abandoning initialization."); else {
            Z.h = a && a.l; Z.loaded = !0; var b = Q[Fc] = Z; Y("create", b, b.create, 3); Y("remove", b, b.remove); Y("getByName", b, b.p, 5); Y("getAll", b, b.A, 6); Y("dump", b, b.dump); b = ad[x]; Y("get", b, b.get, 7); Y("set", b, b.set, 4); Y("send", b, b[jd], 2); b = wc[x]; Y("get", b, b.get); Y("set", b, b.set); if (!df() && !$b) {
                e: {
                    for (var b = I.getElementsByTagName("script"), c = 0; c < b[w] && 100 > c; c++) {
                        var d =
                        b[c].src; if (d && 0 == d[K]("https://www.google-analytics.com/analytics")) { F(33); b = !0; break e }
                    } b = !1
                } b && (L("Analytics.js is secure, forcing SSL for all hits."), $b = !0)
            } df() || $b || !ye(new Ie) || (L("Sending all Hits by SSL"), F(36), $b = !0); (Q.gaplugins = Q.gaplugins || {}).Linker = pd; b = pd[x]; Re.set("linker", pd); Y("decorate", b, b.S, 20); Y("autoLink", b, b.U, 25); Re.set("displayfeatures", $d); Re.set("adfeatures", Ge); a = a && a.q; ga(a) ? jf.H[D](Z, a) : F(50)
        } ge()
    };
    Z.t = function () { for (var a = Z.A(), b = 0; b < a[w]; b++) dd("Tracker: " + a[b].get(T)), Ja(a[b].a), ge(); a = I[ia]; dd("Cookie Information"); for (var a = a[y]("; "), b = [["Name", "Domain", "Path", "Value"]], c = 0; c < a[w]; c++) { var d = a[c][y]("="), e = d[0], d = d[1] || ""; if (Zb(tc, e)) b[n](Dc(e, d)); else if ("_ga" == e) { var f = "", ea = "/", l = d[y](".")[1]; l && (l = l[y]("-"), f = Q[z][qa][y]("."), f = f[q](f[w] - l[0])[E]("."), ea += Q[z].pathname[y]("/")[q](1, l[1] || 1)[E]("/")); b[n]([e, f, ea, d]) } else /^((__utmt)|(_gat))/[p](e) && b[n]([e, "", "", d]) } Xd(b); ge() };
    Z.dump = Z.t; (function () { var a = Z.P; if (!cd(a)) { F(16); var b = !1, c = function () { !b && cd(a) && (b = !0, Da(I, "visibilitychange", c)) }; Ca(I, "visibilitychange", c) } })(); function ic(a) { var b = 1, c = 0, d; if (a) for (b = 0, d = a[w] - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b; return b };
})(window);

	// Temporary storage for _gaq pushes
	var _gar = _gar || [];
	
	// Associated array of authorized tracker objects
	var _roit = _roit || {};

	// Main Tracker class, replaces _uat._getTrackerByName
	var ROITracker = ROITracker || undefined;

	// Prevent duplicate loading of library.
	if (typeof ROITracker !== "function") {
		/**
		 * @constructor Creates a new tracker object and assigns it the given name. If no name is give, one will be generated.
		 * Tracker objects are stored under their names so they can be retrieved via _getTrackerByName.
		 * If two trackers are created with the same name, the second will overwrite the first and the first will no longer be retrieveable via _getTrackerByName.
		 * @param {String} opt_account The full web property ID (e.g. UA-XXXXX-X) for the tracker object.
		 * @param {String} opt_name Optional name to store the tracker under. You should specify a name for all tracker objects except the global tracking object. DON'T USE UNDERSCORES IN NAME.
		 */
        ROITracker = function (opt_account, opt_name, opt_domainName) {
			var preferences = {
				// Whether or not debugging is turned on
				isDebug: false,

				// Whether or not this is a global tracker object.
				isGlobal: false,

				// Array of children tracker names;
				children: [],
				
				pluginsLoaded: [],

				// Associated Array of methods that should only be used once
				isMethodUsed: {
					_setDomainName: false,
					_setAllowHash: false
				},

				// Optional name space, usually used for alternate attribution models.
				nameSpace: null,

				// List of pending transactions
				transactions: [],

				// Call back function to be called on _trackTrans
				transCallBack: null
			};
			
			var helper = {				
				/**
				* Disables methods to prevent external method call from corrupting cookies.
				*/
				disableMethods: function() {
					for (methodName in preferences.isMethodUsed) {
						preferences.isMethodUsed[methodName] = true;
					}
				},

				/**
				* Store the id and value of the transaction for callback purposes
				* @param {String[]} transArray is an array containing the transaction information. It's assumed that the id is in slot 1 and the value is in slot 3.
				*/
				storeTransaction: function(transArray) {
					preferences.transactions.push({
						id: transArray[1],
						value: transArray[3]
					});
				},

				/**
				* Parses the utmForm to find transaction lines and store the information.
				*/
				handleUtmForm: function() {
					var utmTrans;
					var utmLines;
					var transArray;
					var i;
					var j;

					try {
						utmTrans = document.getElementById("utmtrans");
						utmLines = utmTrans.innerHTML.split("UTM:");

						for (i = 0; i < utmLines.length; i += 1) {
							if (utmLines[i]) {
								var utmFields = utmLines[i].split("|");
								if (utmFields[0] === "T") {
									helper.storeTransaction(utmFields);
								}
							}
						}
					} catch (e) { }
				},

				/**
				* Runs callBack function on all pending transactions.
				*/
				executeTransCallBack: function() {
					var i;
					var transaction;

					for (i = 0; i < preferences.transactions.length; i += 1) {
						transaction = preferences.transactions[i];
						preferences.transCallBack(transaction.value, transaction.id);
					}

					preferences.transactions = [];
				},
				
				/**
				 * Handles attribution models that require an alternate namespace.
				 * @param {String} opt_nameSpace Namespace of the tracker.
				 */
				handleNameSpace: function(opt_nameSpace) {
					// NameSpace specific cookies
					if (opt_nameSpace) {

						// store nameSpace with tracker object.
						preferences.nameSpace = opt_nameSpace;
					}
				},

				/**
				 * Provides means for alternative attribution models.
				 * @param {Boolean} opt_cpcTrump CPC trumps other sources.
				 * @param {Boolean} opt_firstTouch Report first source instead of last source.
				 * @param {String} opt_paidQueryRegex Optional alternate regular expression for paid based on query string. Default is gclid=|utm_medium=(cpc|ppc)
				 * @param {String} opt_paidCookieRegex Optional alternate regular expression for paid based on __utmz cookie. Default is utmgclid=|utmcmd=(cpc|ppc)
				 */
				handleAttribution: function(opt_cpcTrump, opt_firstTouch, opt_paidQueryRegex, opt_paidCookieRegex) {
					var isCPCCookie;
					var isCPCQuery;
					var isOverwrite = true;

					// Don't change attribution for first visit or direct visit.
					if (!helper.isFirstVisit() && !helper.isDirectCookie()) {

						// CPC Trump
						if (opt_cpcTrump) {
							isCPCCookie = helper.isCPCCookie(opt_paidCookieRegex);
							isCPCQuery = helper.isCPCQuery(opt_paidQueryRegex);

							// First Touch
							if (opt_firstTouch) {
								if (isCPCCookie || !isCPCQuery) {
									isOverwrite = false;
								}

							// Last touch
							} else if (isCPCCookie && !isCPCQuery) {
								isOverwrite = false;
							}

						// No trump
						} else if (opt_firstTouch) {
							isOverwrite = false;
						}
					}

					// Don't isOverwrite existing cookies.
					if (!isOverwrite) {
						ga(opt_name + 'set', 'referrer');
						ga(opt_name + 'set', 'campaignName');
						ga(opt_name + 'set', 'campaignMedium');
						ga(opt_name + 'set', 'campaignSource');
						ga(opt_name + 'set', 'campaignContent');
						ga(opt_name + 'set', 'campaignKeyword');
					}
				},

				/**
				 * Whether or not the query string is for paid traffic.
				 * @param {String} opt_paidQueryRegex Optional alternate regular expression for paid based on query string. Default is gclid=|utm_medium=(cpc|ppc)
				 * @return {Boolean} Query string is for paid traffic.
				 */
				isCPCQuery: function(opt_paidQueryRegex) {
					var paidQueryRegex = opt_paidQueryRegex || "gclid=|utm_medium=(cpc|ppc)";
					var cpcRegex = new RegExp("[?&#](" + paidQueryRegex + ")");

					return cpcRegex.test(location.href);
				},

				/**
				 * Whether or not this is the visitors first visit.
				 * @return {Boolean} First visit.
				 */
				isFirstVisit: function() {
					var firstRegex;

					if (preferences.nameSpace) {

						// alternate regex for namespace cookie.
						firstRegex = RegExp("(^|; )2__utmz=[^;]*\\^" + preferences.nameSpace);

					} else {
						firstRegex = /(^|; )__utmz=/;
					}

					return !firstRegex.test(document.cookie);
				},

				/**
				 * Whether or not the current referral information for the visitor is Direct.
				 * @return {Boolean} Direct visit.
				 */
				isDirectCookie: function() {
					var directRegex;

					if (preferences.nameSpace) {

						// alternate regex for namespace cookie.
						directRegex = RegExp("(^|; )2__utmz=[^;]*\\^" + preferences.nameSpace + "[^^;]*utmcsr=\\(direct\\)");

					} else {
						directRegex = /(^|; )__utmz=[^;]*utmcsr=\(direct\)/;
					}

					return directRegex.test(document.cookie);
				},

				/**
				 * Whether or not the current referral information for the visitor is a CPC referral.
				 * @param {String} opt_paidCookieRegex Optional alternate regular expression for paid based on __utmz cookie. Default is utmgclid=|utmcmd=(cpc|ppc)
				 * @return {Boolean} CPC referral.
				 */
				isCPCCookie: function(opt_paidCookieRegex) {
					var paidCookieRegex = opt_paidCookieRegex || "utmgclid=|utmcmd=(cpc|ppc)";
					var cpcRegex;

					if (preferences.nameSpace) {

						// alternate regex for namespace cookie.
						cpcRegex = RegExp("(^|; )2__utmz=[^;]*\\^" + preferences.nameSpace + "[^^;]*(" + paidCookieRegex + ")");

					} else {
						cpcRegex = RegExp("(^|; )__utmz=[^;]*(" + paidCookieRegex + ")");
					}

					return cpcRegex.test(document.cookie);
				},
			};

			/**
			* Returns whether or not a particular method call is allowed.
			* Disables "once-use" methods in the case of a _trackPageview call.
			* @param {String} methodCall The method being called.
			*/
			this.isMethodAllowed = function(methodCall) {
				var methodName;
				var isMethodUsed;

				try {
					// extract method
					methodName = "_" + methodCall.split("_")[1];

					// check whether method is one of the "once-use" methods
					// and whether or not it has been used.
					isMethodUsed = preferences.isMethodUsed[methodName];

					// A _trackPageview call disables "once-use" methods
					if (methodName === "_trackPageview") {
						helper.disableMethods();
					}

					// If method is not used, then it's allowed.
					return !isMethodUsed;
				} catch (e) {

					// The above should work, but if for some reason it doesn't,
					// It's probably best to just let the call through and hope for the best.
					return true;
				}
			};

			/**
			 * Sets the attribution model for the tracker.
			 * @param {Boolean} opt_cpcTrump Whether or not cpc trumps other sources. Default is false.
			 * @param {Boolean} opt_firstTouch Whether or not it does first touch attribution. Default is false.
			 * @param {String} opt_nameSpace Optional separate names space for cookies. DOES NOT SUPPORT MULTIPLE DOMAINS.
			 * @param {String} opt_paidQueryRegex Optional alternate regular expression for paid based on query string. Default is gclid=|utm_medium=(cpc|ppc)
			 * @param {String} opt_paidCookieRegex Optional alternate regular expression for paid based on __utmz cookie. Default is utmgclid=|utmcmd=(cpc|ppc)
			 */
			this.setAttributionModel = function(opt_cpcTrump, opt_firstTouch, opt_nameSpace, opt_paidQueryRegex, opt_paidCookieRegex) {
				helper.handleNameSpace(opt_nameSpace);
				helper.handleAttribution(opt_cpcTrump, opt_firstTouch, opt_paidQueryRegex, opt_paidCookieRegex);
			};

			this.disableMethod = function(method) {
				preferences[method] = true;
			}

			/**
			 * Adds a Tracker Object so that function calls can apply to all Trackers.
			 * @param {ROITracker} tracker The Tracker Object being added.
			 */
			this.addTracker = function(tracker) {
				preferences.children.push(tracker.getName());
			};

			/***
			*
			* Standard Google Analytics Tracker Methods
			*
			***/

			/**
			* Sets the domain name for cookies. There are three modes to this method: ("auto" | "none" | [[]domain]).
			* By default, the method is set to auto, which attempts to resolve the domain name based on the location object in the DOM.
			*
			* Set this method explicitly to your domain name if you want to track visitor behavior across sub-domains in the same profile.
			* @param {String} newDomainName New default domain name to set.
			*/
			this._setDomainName = function(newDomainName) {

				// for Google Website Optimizer
				window._udn = newDomainName;
			};

			/**
			* Overwrites the ._setSampleRate method to do nothing.
			*
			*/
			this._setSampleRate = function() { };

			/**
			* Sets the linker functionality flag as part of enabling cross-domain user tracking. By default, this method is set to false and linking is disabled. See also _link(), _linkByPost(), and _setDomainName() methods to enable cross-domain tracking. Use the _setAllowLinker method on the target site, so that the target site uses the cookie data in the URL parameter, instead of the standard session logic.
			* @param {Boolean} bool
			*/
			this._setAllowLinker = function(bool) {
				if (bool) {
					ga(opt_name + "require", "linker");
				}
			};

			/**
			* Sets the allow domain hash flag. By default, this value is set to true. The domain hashing functionality in Google Analytics creates a hash value from your domain, and uses this number to check cookie integrity for visitors. If you have multiple sub-domains, such as example1.example.com and example2.example.com, and you want to track user behavior across both of these sub-domains, you would turn off domain hashing so that the cookie integrity check will not reject a user cookie coming from one domain to another. Additionally, you can turn this feature off to optimize per-page tracking performance.
			* @param {Boolean} bool
			*/
			this._setAllowHash = function(bool) {
				//This method is deprecated and no longer required for cross-domain tracking.
				//_gaq.push([opt_name + '_setAllowHash', bool]);
			};

			/**
			* Activate Site Speed Report Metrics for measuring page latency.
			*/
			this._trackPageLoadTime = function() {
                //In Universal Analytics, tracking the page load time is done by default, with no need to make a call to "_trackPageLoadTime" as was the case in "Classic" Analytics. By default, tracking of the page load time is done on a sample of one per cent of the pageviews.
				//http://blog-en.openalfa.com/how-to-upgrade-to-the-google-universal-analytics-tracking-code
				//_gaq.push([opt_name + '_trackPageLoadTime']);
			};

			/**
			* Main logic for GATC (Google Analytic Tracker Code). If linker functionalities are enabled,
			* it attempts to extract cookie values from the URL. Otherwise, it tries to extract cookie values from document.cookie.
			* It also updates or creates cookies as necessary, then writes them back to the document object.
			* Gathers all the appropriate metrics to send to the UCFE (Urchin Collector Front-end).
			* @param {String} opt_pageURL Optional parameter to indicate what page URL to track metrics under.
			* When using this option, use a beginning slash (/) to indicate the page URL.
			*/
			this._trackPageview = function(opt_pageURL) {
				var tempHash;

				// handle gclid/utm conflicts
				if (/[?&#]gclid=/.test(location.search + location.hash)) {			
					ga(opt_name + 'set', 'campaignName');
					ga(opt_name + 'set', 'campaignMedium');
					ga(opt_name + 'set', 'campaignSource');
					ga(opt_name + 'set', 'campaignContent');
					ga(opt_name + 'set', 'campaignKeyword');
				}

				ga(opt_name + 'send', 'pageview');

				// remove anchor
				if (location.hash) {
					tempHash = location.hash;

					// remove gclid, utm_, ga_ and linking parameters
					tempHash = tempHash.replace(/[#&]utm_.*/, "");
					tempHash = tempHash.replace(/[#&]gclid=.*/, "");
					tempHash = tempHash.replace(/[#&]__utm.*/, "");
					tempHash = tempHash.replace(/[#&]ga_.*/, "");

					// Default hash value
					if (tempHash === "") {
						tempHash = "#_";
					}

					// Change it immediately for costmetic reasons.
					location.replace(location.protocol + "//" + location.hostname + location.pathname + location.search + tempHash);

					// Change it again after page load to activate any real anchors
					ga(function() {
						location.replace(location.protocol + "//" + location.hostname + location.pathname + location.search + tempHash);
					});
				}
			};

			/**
			 * Sets a custom variable with the supplied name, value, and scope for the variable.
			 * There is a 64-byte character limit for the name and value combined.
			 * @param {Int} index Required. The slot used for the custom variable.
			 * Possible values are 1-5, inclusive.
			 * @param {String} name Required. The name for the custom variable.
			 * @param {String} value Required. The value for the custom variable.
			 * @param {Int} opt_scope Optional. The scope used for the custom variable.
			 * Possible values are 1 for visitor-level, 2 for session-level, and 3 for page-level.
			 */
			this._setCustomVar = function(index, name, value, opt_scope) {
				ga(opt_name + 'set', 'dimension' + index, value);
			};

			/**
			 * Helper method to track social features. This assumes all the social
			 * scripts / apis are loaded synchronously. If they are loaded async,
			 * you might need to add the nextwork specific tracking call to the
			 * a callback once the network's script has loaded.
			 * @param {string} opt_pageUrl An optional URL to associate the social
			 *     tracking with a particular page.
			 */
			this.trackSocial = function(opt_pageUrl) {
				this.trackFacebook(opt_pageUrl);
				this.trackTwitter(opt_pageUrl);
			};

			/**
			 * Tracks Facebook likes, unlikes and sends by suscribing to the Facebook
			 * JSAPI event model. Note: This will not track facebook buttons using the
			 * iFrame method.
			 * @param {String} opt_pageUrl An optional URL to associate the social tracking with a particular page.
			 */
			this.trackFacebook = function(opt_pageUrl) {
				ga(function() {
					window.facebookTried = true;
					try {
						FB.Event.subscribe('edge.create', function(targetUrl) {
							window.myFBlike = true;
							ga(opt_name + 'send', 'social', {
								socialNetwork: 'facebook',
								socialAction: 'like',
								socialTarget: targetUrl
							});
						});

						FB.Event.subscribe('edge.remove', function(targetUrl) {
							window.myFBunlike = true;
							ga(opt_name + 'send', 'social', {
								socialNetwork: 'facebook',
								socialAction: 'unlike',
								socialTarget: targetUrl
							});
						});

						FB.Event.subscribe('message.send', function(targetUrl) {
	//						window.myFBsend = true;
							ga(opt_name + 'send', 'social', {
								socialNetwork: 'facebook',
								socialAction: 'send',
								socialTarget: targetUrl
							});
						});

						window.facebookTracked = true;
						window.myFB = FB;
					} catch (e) {}
				});
			};

			/**
			 * Tracks everytime a user clicks on a tweet button from Twitter.
			 * This subscribes to the Twitter JS API event mechanism to listen for
			 * clicks coming from this page. Details here:
			 * http://dev.twitter.com/pages/intents-events#click
			 * This method should be called once the twitter API has loaded.
			 * @param {String} opt_pageUrl An optional URL to associate the social tracking with a particular page.
			 */
			this.trackTwitter = function(opt_pageUrl) {
				ga(function(){
					try {
						twttr.events.bind('tweet', function(event) {
							if (event) {
								var targetUrl; // Default value is undefined.
								if (event.target && event.target.nodeName == 'IFRAME') {
									targetUrl = this.extractParamFromUri_(event.target.src, 'url');
								}
								ga(opt_name + 'send', 'social', {
									socialNetwork: 'twitter',
									socialAction: 'tweet',
									socialTarget: targetUrl
								});
							}
						});
					} catch (e) {}
				});
			};

			/**
			 * Extracts a query parameter value from a URI.
			 * @param {String} uri The URI from which to extract the parameter.
			 * @param {String} paramName The name of the query paramater to extract.
			 * @return {String} The un-encoded value of the query paramater. underfined if there is no URI parameter.
			 * @private
			 */
			this.extractParamFromUri_ = function(uri, paramName) {
				if (!uri) {
					return;
				}
				var parts = uri.split('#'); // Check for query params.
				//if (parts.length == 1) {
				// return;
				// }
				var query = decodeURI(parts[1]);

				// Find url param.
				paramName += '=';
				var params = query.split('&');
				for (var i = 0, param; param = params[i]; ++i) {
					if (param.indexOf(paramName) === 0) {
						return unescape(param.split('=')[1]);
					}
				}
			};
			
			function loadPluginIfNeeded(pluginName) {
				if(preferences.pluginsLoaded.indexOf(pluginName) < 0) {
					preferences.pluginsLoaded.push(pluginName);
					ga(opt_name + 'require', pluginName);
				}
			};

			/**
			 * Creates a transaction object with the given values. As with _addItem(),
			 * this method handles only transaction tracking and provides no additional
			 * ecommerce functionality. Therefore, if the transaction is a duplicate of
			 * an existing transaction for that session, the old transaction values are
			 * over-written with the new transaction values. Arguments for this method
			 * are matched by position, so be sure to supply all parameters, even if some
			 * of them have an empty value.
			 * @param {String} orderId Required. Internal unique order id number for this transaction.
			 * @param {String} affiliation Optional. Partner or store affiliation (undefined if absent).
			 * @param {String} total Required. Total dollar amount of the transaction.
			 * @param {String} tax Optional. Tax amount of the transaction.
			 * @param {String} shipping Optional. Shipping charge for the transaction.
			 * @param {String} city Optional. City to associate with transaction.
			 * @param {String} state Optional. State to associate with transaction.
			 * @param {String} country Optional. Country to associate with transaction.
			 */
			this._addTrans = function(orderId, affiliation, total, tax, shipping, city, state, country) {
				loadPluginIfNeeded('ecommerce');
				ga(opt_name + 'ecommerce:addTransaction', {
							 id: orderId,     
					affiliation: affiliation, 
						revenue: total,       
					   shipping: shipping,    
							tax: tax         
				});
			};

			/**
			 * Use this method to track items purchased by visitors to your ecommerce site.
			 * This method tracks individual items by their SKU. This means that the sku
			 * parameter is required. This method then associates the item to the parent
			 * transaction object via the orderId argument.
			 * @param {String} orderId Optional Order ID of the transaction to associate with item.
			 * @param {String} orderId sku Required. Item's SKU code.
			 * @param {String} orderId name REQUIRED. Product name. Required to see data in the product detail report.
			 * @param {String} orderId category Optional. Product category.
			 * @param {String} orderId price Required. Product price.
			 * @param {String} orderId quantity Required. Purchase quantity.
			 */
			this._addItem = function(orderId, sku, name, category, price, quantity) {
				loadPluginIfNeeded('ecommerce');
				ga(opt_name + 'ecommerce:addItem', {
						  id: orderId,
						 sku: sku,
						name: name,
					category: category,
					   price: price,
					quantity: quantity
				});
			};

			/**
			 * Sends both the transaction and item data to the Google Analytics server.
			 * This method should be called after _trackPageview(), and used in conjunction
			 * with the _addItem() and addTrans() methods. It should be called after items
			 * and transaction elements have been set up.
			 */
			this._trackTrans = function() {
				loadPluginIfNeeded('ecommerce');
				ga(opt_name + 'ecommerce:send');
			};

			/**
			 * Constructs and sends the event tracking call to the Google Analytics Tracking Code.
			 * Use this to track visitor behavior on your website that is not related to a web page
			 * visit, such as interaction with a Flash video movie control or any user event that
			 * does not trigger a page request. For more information on Event Tracking, see the
			 * Event Tracking Guide. (Note: the documentation mentions a boolean return value
			 * indicating whether the event was successfully sent. This is not implemented below,
			 * but we can add it if someone actually wants to use it).
			 * @param {String} category The general event category (e.g. "Videos").
			 * @param {String} action The action for the event (e.g. "Play").
			 * @param {String} opt_label An optional descriptor for the event.
			 * @param {Int} opt_value An optional value associated with the event.
			 */
			this._trackEvent = function(category, action, opt_label, opt_value) {
				ga(opt_name + 'send', 'event', {
					eventCategory: category,
					  eventAction: action
				});
			};

			/**
			 * Temporarily push _gaq pushes on _gar instead.
			 */
			// ga = function() {
				// _gar.push(arguments);
			// };

			/**
			* Return whether or not the Tracker object is global.
			* @return {Boolean} Global state
			*/
			this.isGlobal = function() {
				return preferences.isGlobal;
			};

			/**
			* Provides debug output to console.log.
			* @param {String} message Out to log.
			*/
			function debug(message) {
				var e;

				try {
					// Make sure console.log is defined.
					if (typeof console === "object" && console.log) {
						console.log(message);
					}
				} catch (e) { }
			}
			
			/**
			* Provides debug output to console.log.
			* @param {String} message Output to log.
			*/
			this.debug = function(message) {
				if (preferences.isDebug) {
					debug(message);
				}
			};
			
			/**
			 * Adds method debugging to an object.
			 * @param {Object} methodObject Object to add debugging to.
			 */
			function addMethodDebugging(methodObject) {
				var oldMethod;

				for (i in methodObject) {

					// save old method
					oldMethod = methodObject[i];

					// Make sure method is a valid object function
					if (methodObject.hasOwnProperty(i) && typeof methodObject[i] === "function" && i.indexOf("debug") === -1) {

						// Add debugging
						methodObject[i] = addDebug(methodObject, oldMethod, i);
					}
				}
			};

			/**
			* Set the callback function that will be called on _trackTrans.
			* @param {Function} transCallBack is a callBack function to run on trackTrans. This function will be passed revenue and order_id information from _addTrans or _setTrans
			*/
			this.setTransCallBack = function(transCallBack) {
				preferences.transCallBack = transCallBack;
			};

			/**
			* Determine whether or not a callback function has been set.
			* @return {Boolean} Whether or not callBack is set.
			*/
			this.hasTransCallBack = function() {
				return typeof preferences.transCallBack === "function";
			};

			/**
			* Handles transaction related method calls when a callback has been set.
			* @param {String[]} transArray is the transaction method call to be handled.
			*/
			this.handleTrans = function(transArray) {

				if (/_addTrans$/.test(transArray[0])) {
					helper.storeTransaction(transArray);
				} else if (/_setTrans$/.test(transArray[0])) {
					helper.handleUtmForm();
				} else if (/_trackTrans$/.test(transArray[0])) {
					helper.executeTransCallBack();
				}
			};

			/**
			* Return Tracker object names added to this object.
			* @return {String[]} Array of tracker object names.
			*/
			this.getChildren = function() {
				return preferences.children;
			};

			/**
			* Return the optional name of the Tracker Object.
			* @return {String} name of Tracker Object.
			*/
			this.getName = function() {
				return opt_name;
			};

			// Optional debugging
			if (preferences.isDebug) {

				// Add debugging to helper methods.
				addMethodDebugging(helper);

				// Add debugging to Tracker methods.
				addMethodDebugging(this);
			}

			// If there's an optional name, add a period so method calls will work correctly.
			if (opt_name) {
				opt_name = opt_name + ".";
			}
			else {
				opt_name = "";
			}

			// add to associated array of authorized tracker objects.
			_roit[opt_name] = this;

			// If there's an account, call _setAccount,
			// otherwise this a global tracker.
			if (opt_account) {
				// set account				
				var optNameTrimmed = opt_name.split('.').join('');
				if(opt_domainName && opt_domainName != '') {
					ga('create', opt_account, {
						cookieDomain: opt_domainName,
						name: optNameTrimmed
					});
				} else {
					ga('create', opt_account, 'auto', optNameTrimmed);
				}
			} else {
				preferences.isGlobal = true;

				// This prevents the _setAccount call from going through.
				preferences.isMethodUsed._setAccount = true;
			}
		}

		ROITracker.truncateCustomVar = function(key, value) {
			value = escape(value).substring(0, 64 - key.length);
			value = value.replace(/%[A-F0-9]?$/, "");
			return unescape(value);
		};

		// This overrides the default definition of the _gaq.push and adds
		// or removes pushes based on tracking object definitions.
		ga(function() {
			var i;

			// store old _gaq.push
			var oldGaFunction = ga;

			/**
			 * Retrieves the tracker object referenced by the method.
			 * @param {String} methodCall The method being called.
			 * @return {ROITracker} The retrieved tracker object.
			 */
			function getTrackerbyMethod(methodCall) {
				if(methodCall.indexOf('.') < 0) {
					return _roit[''];
				}
				
				var trackerName = methodCall.split(".")[0];
				if(trackerName != '') {
					trackerName += '.';
				}
				return _roit[trackerName];
			}

			/**
			 * The new _gaq.push parses pushes according to the following rules:
			 * 		1. All function pushes are accepted.
			 * 		2. Array calls are only accepted if they come from an authorized tracker.
			 * 		3. Calls from parent trackers generate additional calls to children trackers.
			 * 		4. Global trackers only generate calls for their children.
			 * 		5. Only the first _setAccount call from an authorized, non-global object is accepted.
			 */
			ga = function() {
				var i;
				var j;
				var tracker;
				var children;

				// Handle pushing multiple commands
				var argumentsArray = Array.prototype.slice.call(arguments);
				if(argumentsArray[0] == 'provide') {
					oldGaFunction.apply(this, argumentsArray);
				} else if(argumentsArray[0] == 'create') {
					var trackerId = argumentsArray[1];
					var trackerName = argumentsArray[3];
					var trackerNameWithDot = '';
					if(typeof trackerName !== 'undefined' && trackerName[trackerName.length-1] !== ".")
						trackerNameWithDot = trackerName + '.';
	
					var tracker = getTrackerbyMethod(trackerNameWithDot);
					if(typeof tracker === 'undefined'){
						new window.ROITracker(trackerId, trackerName);
					} else {
						oldGaFunction.apply(this, argumentsArray);
					}
				} else if(typeof(argumentsArray[0]) == "function") {
					oldGaFunction(argumentsArray[0]);
				} else {
					// retrieve tracker referenced by method
					tracker = getTrackerbyMethod(argumentsArray[0]);

					// make sure tracker is an authorized tracker object
					// and that the method call is not a _setAccount call
					if (tracker && (tracker.isMethodAllowed(argumentsArray[0]) || (/_trackPageview$/.test(argumentsArray[0]) && argumentsArray[1]))) {

						// Don't push call for global tracker object
						if (!tracker.isGlobal()) {
							// ***This is the standard push***
							// ***All array pushes end here***
							tracker.debug(argumentsArray);
							oldGaFunction.apply(this, argumentsArray);
						}

						// Handle transactions with call backs.
						if (tracker.hasTransCallBack() && /Trans$/.test(argumentsArray[0])) {
							tracker.handleTrans(argumentsArray);
						}

						// push call for all children
						children = tracker.getChildren();
						if (children && children.length && children.length > 0) {
							for (j = 0; j < children.length; j += 1) {

								var childCall = argumentsArray.slice(0);
								// Change the object of the call to the child tracker
								var trackerName = tracker.getName();
								if(trackerName == '') {
									childCall[0] = children[j] + childCall[0];
								} else {
									childCall[0] = childCall[0].replace(trackerName + '.', children[j]);
								}
								
								// Child tracker call
								ga.apply(this, childCall);
							}
						}
					}

				// push all function calls via document.ready
				}
			};

			// Apply pushes temporarily stored in _gar.
			for (i = 0; i < _gar.length; i += 1) {
				ga.apply(undefined, _gar[i]);
			}
		});	
	}
	

var _gat = _gat || {};
/**
 * Overrides existing _getTracker method to prevent legacy code from disrupting V3 functionality.
 * @return {ROITracker} Modified ROITracker object instead of traditional pageTracker object.
 */
ROITracker._getTracker = _gat._getTracker = function (opt_account) {
	var oldTrackPageview;

	if (opt_account.indexOf("UA-3370374") === 0) {

		// Store old _trackPageview function
		oldTrackPageview = pageTracker._trackPageview;

		// This prevents these methods (in their native form) from being called by the legacy code.
		pageTracker._setDomainName = function () {};
		pageTracker._initData = function () {};
		pageTracker._setReferrerOverride = function () {};
		pageTracker._setCampNameKey = function () {};
		pageTracker._setCampMediumKey = function () {};
		pageTracker._setCampSourceKey = function () {};
		pageTracker._setCampTermKey = function () {};
		pageTracker._setCampContentKey = function () {};
		pageTracker._setCampCIdKey = function () {};
		pageTracker._setCustomVar = function () {};

		/**
		 * Overrides existing _trackpageview method to only allow virtual pageviews.
		 * @param {String} opt_pageURL Optional parameter to indicate what page URL to track metrics under.
		 */
		pageTracker._trackPageview = function (opt_pageURL) {

			// Only fire pageview if it's a virtual pageview. Ignore standard _trackPageview call.
			if (opt_pageURL) {
				oldTrackPageview(opt_pageURL);
			}
		};

		return pageTracker;
	} else {
		ga('create', opt_account, 'auto', 't6');
		extraTracker._initData = function () {};
		return extraTracker;
	}
};

	// Initialize Tracker Objects
var pageTracker = new window.ROITracker("", "");
var globalTracker = new window.ROITracker("", "t5");
var traditionalTracker = new window.ROITracker("UA-3370374-5", "t2");
var firstCPCTracker = new window.ROITracker("UA-3370374-6", "t3");
var extraTracker = new window.ROITracker("UA-1-1", "t6");

	// Add trackers to global tracking object.
	globalTracker.addTracker(pageTracker);
	globalTracker.addTracker(extraTracker);
	pageTracker.addTracker(traditionalTracker);
	pageTracker.addTracker(firstCPCTracker);

	// Tracker Method calls
	firstCPCTracker.setAttributionModel(true, true, "first_cpc");

	//Sets Custom Variables, tracks pageview, and runs _trackLoadTime method.
	(function(){
		var pageName = location.pathname + location.search;
		var queryChar = "?"

		if (/\?/.test(pageName)){
			queryChar = "&";
		}

		var Cafepress = window.Cafepress || window.cafepress || {};

		if (typeof Cafepress === "object" && Cafepress.tracking){
			pageName = pageName + queryChar;
			var pageType = Cafepress.tracking.pageType || Cafepress.tracking.pageLandingType;
			if (pageType){
				pageTracker._setCustomVar(1,  'pageType',  pageType, 3);
				pageName = pageName + "pageType=" + pageType + "&";
			}
			if (Cafepress.tracking.productFamily){
				pageTracker._setCustomVar(2,  'productFamily',  Cafepress.tracking.productFamily, 3);
				pageName = pageName + "productFamily=" + Cafepress.tracking.productFamily + "&";
			}
			if (Cafepress.tracking.salesChannel){
				pageTracker._setCustomVar(3,  'salesChannel',  Cafepress.tracking.salesChannel, 3);
				pageName = pageName + "salesChannel=" + Cafepress.tracking.salesChannel + "&";
			}
			if (Cafepress.tracking.abTestString){
                pageTracker._setCustomVar(4,  'abTestString',  window.ROITracker.truncateCustomVar('abTestString', Cafepress.tracking.abTestString), 2);
				pageName = pageName + "abTestString=" + Cafepress.tracking.abTestString + "&";
			}
			if (Cafepress.tracking.businessUnit){
				pageTracker._setCustomVar(5,  'businessUnit',  Cafepress.tracking.businessUnit, 3);
				pageName = pageName + "businessUnit=" + Cafepress.tracking.businessUnit + "&";
			}
			pageName = pageName.substring(0, pageName.length - 1);
		}

		(function () {
			var c = 'Unknown';
			try {
				var b = document.cookie,
					a = b.indexOf('SL_Audience=');
				if (a != -1) {
					a = a + 11 + 1;
					var d = b.indexOf(';', a);
					if (d == -1) d = b.length;
					c = unescape(b.substring(a, d)).split('|')[1]
				}
			} catch (e) {}
			pageTracker._setCustomVar(6, 'audience', c, 3);
		})();

		pageTracker._trackPageview(pageName);
		pageTracker._trackPageLoadTime();

		pageTracker.disableMethod("_setCustomVar");
		extraTracker.disableMethod("_setCustomVar");
		
		pageTracker.trackSocial();
	}());
