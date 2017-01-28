/*

 This is a generated file. DO NOT EDIT.

 Copyright (C) 2010-2015 KO GmbH <copyright@kogmbh.com>

 @licstart
 The code in this file is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 The code in this file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute UNMODIFIED VERSIONS OF THIS file without the copy of the GNU AGPL normally
 required by section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it in unmodified form by reference or in-line shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
var webodf_version = "0.5.7";
function Runtime() {
}
Runtime.prototype.getVariable = function (f) {
};
Runtime.prototype.toJson = function (f) {
};
Runtime.prototype.fromJson = function (f) {
};
Runtime.prototype.byteArrayFromString = function (f, l) {
};
Runtime.prototype.byteArrayToString = function (f, l) {
};
Runtime.prototype.read = function (f, l, a, c) {
};
Runtime.prototype.readFile = function (f, l, a) {
};
Runtime.prototype.readFileSync = function (f, l) {
};
Runtime.prototype.loadXML = function (f, l) {
};
Runtime.prototype.writeFile = function (f, l, a) {
};
Runtime.prototype.deleteFile = function (f, l) {
};
Runtime.prototype.log = function (f, l) {
};
Runtime.prototype.setTimeout = function (f, l) {
};
Runtime.prototype.clearTimeout = function (f) {
};
Runtime.prototype.libraryPaths = function () {
};
Runtime.prototype.currentDirectory = function () {
};
Runtime.prototype.setCurrentDirectory = function (f) {
};
Runtime.prototype.type = function () {
};
Runtime.prototype.getDOMImplementation = function () {
};
Runtime.prototype.parseXML = function (f) {
};
Runtime.prototype.exit = function (f) {
};
Runtime.prototype.getWindow = function () {
};
Runtime.prototype.requestAnimationFrame = function (f) {
};
Runtime.prototype.cancelAnimationFrame = function (f) {
};
Runtime.prototype.assert = function (f, l) {
};
var IS_COMPILED_CODE = !0;
Runtime.byteArrayToString = function (f, l) {
    function a(a) {
        var c = "", b, n = a.length;
        for (b = 0; b < n; b += 1)c += String.fromCharCode(a[b] & 255);
        return c
    }

    function c(a) {
        var c = "", b, n = a.length, g = [], h, d, e, s;
        for (b = 3 <= n && 239 === a[0] && 187 === a[1] && 191 === a[2] ? 3 : 0; b < n; b += 1)h = a[b], 128 > h ? g.push(h) : (b += 1, d = a[b], 194 <= h && 224 > h ? g.push((h & 31) << 6 | d & 63) : (b += 1, e = a[b], 224 <= h && 240 > h ? g.push((h & 15) << 12 | (d & 63) << 6 | e & 63) : (b += 1, s = a[b], 240 <= h && 245 > h && (h = (h & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | s & 63, h -= 65536, g.push((h >> 10) + 55296, (h & 1023) + 56320))))), 1E3 <= g.length &&
        (c += String.fromCharCode.apply(null, g), g.length = 0);
        return c + String.fromCharCode.apply(null, g)
    }

    var b;
    "utf8" === l ? b = c(f) : ("binary" !== l && this.log("Unsupported encoding: " + l), b = a(f));
    return b
};
Runtime.getVariable = function (f) {
    try {
        return eval(f)
    } catch (l) {
    }
};
Runtime.toJson = function (f) {
    return JSON.stringify(f)
};
Runtime.fromJson = function (f) {
    return JSON.parse(f)
};
Runtime.getFunctionName = function (f) {
    return void 0 === f.name ? (f = /function\s+(\w+)/.exec(f)) && f[1] : f.name
};
Runtime.assert = function (f, l) {
    if (!f)throw this.log("alert", "ASSERTION FAILED:\n" + l), Error(l);
};
function BrowserRuntime() {
    function f(a) {
        var g = a.length, h, d, e = 0;
        for (h = 0; h < g; h += 1)d = a.charCodeAt(h), e += 1 + (128 < d) + (2048 < d), 55040 < d && 57344 > d && (e += 1, h += 1);
        return e
    }

    function l(a, g, h) {
        var d = a.length, e, s;
        g = new Uint8Array(new ArrayBuffer(g));
        h ? (g[0] = 239, g[1] = 187, g[2] = 191, s = 3) : s = 0;
        for (h = 0; h < d; h += 1)e = a.charCodeAt(h), 128 > e ? (g[s] = e, s += 1) : 2048 > e ? (g[s] = 192 | e >>> 6, g[s + 1] = 128 | e & 63, s += 2) : 55040 >= e || 57344 <= e ? (g[s] = 224 | e >>> 12 & 15, g[s + 1] = 128 | e >>> 6 & 63, g[s + 2] = 128 | e & 63, s += 3) : (h += 1, e = (e - 55296 << 10 | a.charCodeAt(h) - 56320) + 65536,
                        g[s] = 240 | e >>> 18 & 7, g[s + 1] = 128 | e >>> 12 & 63, g[s + 2] = 128 | e >>> 6 & 63, g[s + 3] = 128 | e & 63, s += 4);
        return g
    }

    function a(a) {
        var g = a.length, h = new Uint8Array(new ArrayBuffer(g)), d;
        for (d = 0; d < g; d += 1)h[d] = a.charCodeAt(d) & 255;
        return h
    }

    function c(a, g) {
        var h;
        void 0 !== g ? h = a : g = a;
        console.log(g);
        p.enableAlerts && "alert" === h && alert(g)
    }

    function b(c, g, h) {
        if (0 !== h.status || h.responseText)if (200 === h.status || 0 === h.status) {
            if (h.response && "string" !== typeof h.response) "binary" === g ? (h = h.response, h = new Uint8Array(h)) : h = String(h.response); else if ("binary" ===
                g)if (null !== h.responseBody && "undefined" !== String(typeof VBArray)) {
                h = (new VBArray(h.responseBody)).toArray();
                var d = h.length;
                g = new Uint8Array(new ArrayBuffer(d));
                for (c = 0; c < d; c += 1)g[c] = h[c];
                h = g
            } else {
                (c = h.getResponseHeader("Content-Length")) && (c = parseInt(c, 10));
                if (c && c !== h.responseText.length)a:{
                    d = h.responseText;
                    g = !1;
                    var e = f(d);
                    if ("number" === typeof c) {
                        if (c !== e && c !== e + 3) {
                            d = void 0;
                            break a
                        }
                        g = e + 3 === c;
                        e = c
                    }
                    d = l(d, e, g)
                }
                void 0 === d && (d = a(h.responseText));
                h = d
            } else h = h.responseText;
            h = {err: null, data: h}
        } else h = {
            err: h.responseText ||
            h.statusText, data: null
        }; else h = {err: "File " + c + " is empty.", data: null};
        return h
    }

    function k(a, c, h) {
        var d = new XMLHttpRequest;
        d.open("GET", a, h);
        d.overrideMimeType && ("binary" !== c ? d.overrideMimeType("text/plain; charset=" + c) : d.overrideMimeType("text/plain; charset=x-user-defined"));
        return d
    }

    function q(a, c, h) {
        var d = k(a, c, !0);
        d.onreadystatechange = function () {
            var e;
            4 === d.readyState && (e = b(a, c, d), h(e.err, e.data))
        };
        try {
            d.send(null)
        } catch (e) {
            h(e.message, null)
        }
    }

    var p = this;
    this.byteArrayFromString = function (c, g) {
        var h;
        "utf8" === g ? h = l(c, f(c), !1) : ("binary" !== g && p.log("unknown encoding: " + g), h = a(c));
        return h
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.readFile = q;
    this.read = function (c, a, h, d) {
        q(c, "binary", function (e, s) {
            var m = null;
            if (s) {
                if ("string" === typeof s)throw"This should not happen.";
                m = s.subarray(a, a + h)
            }
            d(e, m)
        })
    };
    this.readFileSync = function (c, a) {
        var h = k(c, a, !1), d;
        try {
            h.send(null);
            d = b(c, a, h);
            if (d.err)throw d.err;
            if (null === d.data)throw"No data read from " + c + ".";
        } catch (e) {
            throw e;
        }
        return d.data
    };
    this.writeFile = function (c, a, h) {
        var d = new XMLHttpRequest, e;
        d.open("PUT", c, !0);
        d.onreadystatechange = function () {
            4 === d.readyState && (0 !== d.status || d.responseText ? 200 <= d.status && 300 > d.status || 0 === d.status ? h(null) : h("Status " + String(d.status) + ": " + d.responseText || d.statusText) : h("File " + c + " is empty."))
        };
        e = a.buffer && !d.sendAsBinary ? a.buffer : p.byteArrayToString(a, "binary");
        try {
            d.sendAsBinary ? d.sendAsBinary(e) : d.send(e)
        } catch (s) {
            p.log("HUH? " +
                s + " " + a), h(s.message)
        }
    };
    this.deleteFile = function (c, a) {
        var h = new XMLHttpRequest;
        h.open("DELETE", c, !0);
        h.onreadystatechange = function () {
            4 === h.readyState && (200 > h.status && 300 <= h.status ? a(h.responseText) : a(null))
        };
        h.send(null)
    };
    this.loadXML = function (c, a) {
        var h = new XMLHttpRequest;
        h.open("GET", c, !0);
        h.overrideMimeType && h.overrideMimeType("text/xml");
        h.onreadystatechange = function () {
            4 === h.readyState && (0 !== h.status || h.responseText ? 200 === h.status || 0 === h.status ? a(null, h.responseXML) : a(h.responseText, null) : a("File " +
                    c + " is empty.", null))
        };
        try {
            h.send(null)
        } catch (d) {
            a(d.message, null)
        }
    };
    this.log = c;
    this.enableAlerts = !0;
    this.assert = Runtime.assert;
    this.setTimeout = function (a, c) {
        return setTimeout(function () {
            a()
        }, c)
    };
    this.clearTimeout = function (a) {
        clearTimeout(a)
    };
    this.libraryPaths = function () {
        return ["lib"]
    };
    this.setCurrentDirectory = function () {
    };
    this.currentDirectory = function () {
        return ""
    };
    this.type = function () {
        return "BrowserRuntime"
    };
    this.getDOMImplementation = function () {
        return window.document.implementation
    };
    this.parseXML =
        function (a) {
            return (new DOMParser).parseFromString(a, "text/xml")
        };
    this.exit = function (a) {
        c("Calling exit with code " + String(a) + ", but exit() is not implemented.")
    };
    this.getWindow = function () {
        return window
    };
    this.requestAnimationFrame = function (a) {
        var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, h = 0;
        if (c) c.bind(window), h = c(a); else return setTimeout(a, 15);
        return h
    };
    this.cancelAnimationFrame = function (a) {
        var c = window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
        c ? (c.bind(window), c(a)) : clearTimeout(a)
    }
}
function NodeJSRuntime() {
    function f(a) {
        var c = a.length, h, d = new Uint8Array(new ArrayBuffer(c));
        for (h = 0; h < c; h += 1)d[h] = a[h];
        return d
    }

    function l(a, g, h) {
        function d(e, d) {
            if (e)return h(e, null);
            if (!d)return h("No data for " + a + ".", null);
            if ("string" === typeof d)return h(e, d);
            h(e, f(d))
        }

        a = b.resolve(k, a);
        "binary" !== g ? c.readFile(a, g, d) : c.readFile(a, null, d)
    }

    var a = this, c = require("fs"), b = require("path"), k = "", q, p;
    this.byteArrayFromString = function (a, c) {
        var h = new Buffer(a, c), d, e = h.length, s = new Uint8Array(new ArrayBuffer(e));
        for (d = 0; d < e; d += 1)s[d] = h[d];
        return s
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.readFile = l;
    this.loadXML = function (c, b) {
        l(c, "utf-8", function (h, d) {
            if (h)return b(h, null);
            if (!d)return b("No data for " + c + ".", null);
            b(null, a.parseXML(d))
        })
    };
    this.writeFile = function (a, g, h) {
        g = new Buffer(g);
        a = b.resolve(k, a);
        c.writeFile(a, g, "binary", function (d) {
            h(d || null)
        })
    };
    this.deleteFile = function (a, g) {
        a = b.resolve(k, a);
        c.unlink(a, g)
    };
    this.read = function (a, g, h, d) {
        a = b.resolve(k, a);
        c.open(a, "r+", 666, function (e, s) {
            if (e) d(e, null); else {
                var m = new Buffer(h);
                c.read(s, m, 0, h, g, function (e) {
                    c.close(s);
                    d(e, f(m))
                })
            }
        })
    };
    this.readFileSync = function (a, b) {
        var h;
        h = c.readFileSync(a, "binary" === b ? null : b);
        if (null === h)throw"File " + a + " could not be read.";
        "binary" === b && (h = f(h));
        return h
    };
    this.log = function (a, c) {
        var h;
        void 0 !== c ? h = a : c = a;
        "alert" === h && process.stderr.write("\n!!!!! ALERT !!!!!\n");
        process.stderr.write(c + "\n");
        "alert" === h && process.stderr.write("!!!!! ALERT !!!!!\n")
    };
    this.assert = Runtime.assert;
    this.setTimeout = function (a, c) {
        return setTimeout(function () {
            a()
        }, c)
    };
    this.clearTimeout = function (a) {
        clearTimeout(a)
    };
    this.libraryPaths = function () {
        return [__dirname]
    };
    this.setCurrentDirectory = function (a) {
        k = a
    };
    this.currentDirectory = function () {
        return k
    };
    this.type = function () {
        return "NodeJSRuntime"
    };
    this.getDOMImplementation = function () {
        return p
    };
    this.parseXML = function (a) {
        return q.parseFromString(a, "text/xml")
    };
    this.exit = process.exit;
    this.getWindow = function () {
        return null
    };
    this.requestAnimationFrame =
        function (a) {
            return setTimeout(a, 15)
        };
    this.cancelAnimationFrame = function (a) {
        clearTimeout(a)
    };
    q = new (require("xmldom").DOMParser);
    p = a.parseXML("<a/>").implementation
}
function RhinoRuntime() {
    var f = this, l = {}, a = l.javax.xml.parsers.DocumentBuilderFactory.newInstance(), c, b, k = "";
    a.setValidating(!1);
    a.setNamespaceAware(!0);
    a.setExpandEntityReferences(!1);
    a.setSchema(null);
    b = l.org.xml.sax.EntityResolver({
        resolveEntity: function (a, c) {
            var b = new l.java.io.FileReader(c);
            return new l.org.xml.sax.InputSource(b)
        }
    });
    c = a.newDocumentBuilder();
    c.setEntityResolver(b);
    this.byteArrayFromString = function (a, c) {
        var b, g = a.length, h = new Uint8Array(new ArrayBuffer(g));
        for (b = 0; b < g; b += 1)h[b] =
            a.charCodeAt(b) & 255;
        return h
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.loadXML = function (a, b) {
        var k = new l.java.io.File(a), g = null;
        try {
            g = c.parse(k)
        } catch (h) {
            return print(h), b(h, null)
        }
        b(null, g)
    };
    this.readFile = function (a, c, b) {
        k && (a = k + "/" + a);
        var g = new l.java.io.File(a), h = "binary" === c ? "latin1" : c;
        g.isFile() ? ((a = readFile(a, h)) && "binary" === c && (a = f.byteArrayFromString(a, "binary")), b(null, a)) : b(a + " is not a file.",
                null)
    };
    this.writeFile = function (a, c, b) {
        k && (a = k + "/" + a);
        a = new l.java.io.FileOutputStream(a);
        var g, h = c.length;
        for (g = 0; g < h; g += 1)a.write(c[g]);
        a.close();
        b(null)
    };
    this.deleteFile = function (a, c) {
        k && (a = k + "/" + a);
        var b = new l.java.io.File(a), g = a + Math.random(), g = new l.java.io.File(g);
        b.rename(g) ? (g.deleteOnExit(), c(null)) : c("Could not delete " + a)
    };
    this.read = function (a, c, b, g) {
        k && (a = k + "/" + a);
        var h;
        h = a;
        var d = "binary";
        (new l.java.io.File(h)).isFile() ? ("binary" === d && (d = "latin1"), h = readFile(h, d)) : h = null;
        h ? g(null, this.byteArrayFromString(h.substring(c,
                c + b), "binary")) : g("Cannot read " + a, null)
    };
    this.readFileSync = function (a, c) {
        if (!c)return "";
        var b = readFile(a, c);
        if (null === b)throw"File could not be read.";
        return b
    };
    this.log = function (a, c) {
        var b;
        void 0 !== c ? b = a : c = a;
        "alert" === b && print("\n!!!!! ALERT !!!!!");
        print(c);
        "alert" === b && print("!!!!! ALERT !!!!!")
    };
    this.assert = Runtime.assert;
    this.setTimeout = function (a) {
        a();
        return 0
    };
    this.clearTimeout = function () {
    };
    this.libraryPaths = function () {
        return ["lib"]
    };
    this.setCurrentDirectory = function (a) {
        k = a
    };
    this.currentDirectory =
        function () {
            return k
        };
    this.type = function () {
        return "RhinoRuntime"
    };
    this.getDOMImplementation = function () {
        return c.getDOMImplementation()
    };
    this.parseXML = function (a) {
        a = new l.java.io.StringReader(a);
        a = new l.org.xml.sax.InputSource(a);
        return c.parse(a)
    };
    this.exit = quit;
    this.getWindow = function () {
        return null
    };
    this.requestAnimationFrame = function (a) {
        a();
        return 0
    };
    this.cancelAnimationFrame = function () {
    }
}
Runtime.create = function () {
    return "undefined" !== String(typeof window) ? new BrowserRuntime : "undefined" !== String(typeof require) ? new NodeJSRuntime : new RhinoRuntime
};
var runtime = Runtime.create(), core = {}, gui = {}, xmldom = {}, odf = {}, ops = {}, webodf = {};
(function () {
    webodf.Version = "undefined" !== String(typeof webodf_version) ? webodf_version : "From Source"
})();
(function () {
    function f(a, c, b) {
        var h = a + "/manifest.json", d, e;
        runtime.log("Loading manifest: " + h);
        try {
            d = runtime.readFileSync(h, "utf-8")
        } catch (s) {
            if (b) runtime.log("No loadable manifest found."); else throw console.log(String(s)), s;
            return
        }
        b = JSON.parse(d);
        for (e in b)b.hasOwnProperty(e) && (c[e] = {dir: a, deps: b[e]})
    }

    function l(a, c, b) {
        function h(m) {
            if (!s[m] && !b(m)) {
                if (e[m])throw"Circular dependency detected for " + m + ".";
                e[m] = !0;
                if (!c[m])throw"Missing dependency information for class " + m + ".";
                var a = c[m], k = a.deps,
                    p, q = k.length;
                for (p = 0; p < q; p += 1)h(k[p]);
                e[m] = !1;
                s[m] = !0;
                d.push(a.dir + "/" + m.replace(".", "/") + ".js")
            }
        }

        var d = [], e = {}, s = {};
        a.forEach(h);
        return d
    }

    function a(a, c) {
        return c + ("\n//# sourceURL=" + a)
    }

    function c(c) {
        var b, g;
        for (b = 0; b < c.length; b += 1)g = runtime.readFileSync(c[b], "utf-8"), g = a(c[b], g), eval(g)
    }

    function b(a) {
        a = a.split(".");
        var c, b = q, h = a.length;
        for (c = 0; c < h; c += 1) {
            if (!b.hasOwnProperty(a[c]))return !1;
            b = b[a[c]]
        }
        return !0
    }

    var k, q = {core: core, gui: gui, xmldom: xmldom, odf: odf, ops: ops};
    runtime.loadClasses = function (a,
                                    q) {
        if (IS_COMPILED_CODE || 0 === a.length)return q && q();
        var g;
        if (!(g = k)) {
            g = [];
            var h = runtime.libraryPaths(), d;
            runtime.currentDirectory() && -1 === h.indexOf(runtime.currentDirectory()) && f(runtime.currentDirectory(), g, !0);
            for (d = 0; d < h.length; d += 1)f(h[d], g)
        }
        k = g;
        a = l(a, k, b);
        if (0 === a.length)return q && q();
        if ("BrowserRuntime" === runtime.type() && q) {
            g = a;
            h = document.currentScript || document.documentElement.lastChild;
            d = document.createDocumentFragment();
            var e, s;
            for (s = 0; s < g.length; s += 1)e = document.createElement("script"), e.type =
                "text/javascript", e.charset = "utf-8", e.async = !1, e.setAttribute("src", g[s]), d.appendChild(e);
            q && (e.onload = q);
            h.parentNode.insertBefore(d, h)
        } else c(a), q && q()
    };
    runtime.loadClass = function (a, c) {
        runtime.loadClasses([a], c)
    }
})();
(function () {
    var f = function (f) {
        return f
    };
    runtime.getTranslator = function () {
        return f
    };
    runtime.setTranslator = function (l) {
        f = l
    };
    runtime.tr = function (l) {
        var a = f(l);
        return a && "string" === String(typeof a) ? a : l
    }
})();
(function (f) {
    function l(a) {
        if (a.length) {
            var c = a[0];
            runtime.readFile(c, "utf8", function (b, k) {
                function q() {
                    var a;
                    (a = eval(f)) && runtime.exit(a)
                }

                var p = "", p = c.lastIndexOf("/"), f = k, p = -1 !== p ? c.substring(0, p) : ".";
                runtime.setCurrentDirectory(p);
                b ? (runtime.log(b), runtime.exit(1)) : null === f ? (runtime.log("No code found for " + c), runtime.exit(1)) : q.apply(null, a)
            })
        }
    }

    f = f ? Array.prototype.slice.call(f) : [];
    "NodeJSRuntime" === runtime.type() ? l(process.argv.slice(2)) : "RhinoRuntime" === runtime.type() ? l(f) : l(f.slice(1))
})("undefined" !==
    String(typeof arguments) && arguments);
(function () {
    core.Async = function () {
        return {
            forEach: function (f, l, a) {
                function c(c) {
                    q !== k && (c ? (q = k, a(c)) : (q += 1, q === k && a(null)))
                }

                var b, k = f.length, q = 0;
                for (b = 0; b < k; b += 1)l(f[b], c)
            }, destroyAll: function (f, l) {
                function a(c, b) {
                    if (b) l(b); else if (c < f.length) f[c](function (b) {
                        a(c + 1, b)
                    }); else l()
                }

                a(0, void 0)
            }
        }
    }()
})();
function makeBase64() {
    function f(e) {
        var d, m = e.length, a = new Uint8Array(new ArrayBuffer(m));
        for (d = 0; d < m; d += 1)a[d] = e.charCodeAt(d) & 255;
        return a
    }

    function l(d) {
        var e, m = "", a, s = d.length - 2;
        for (a = 0; a < s; a += 3)e = d[a] << 16 | d[a + 1] << 8 | d[a + 2], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >>> 18], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >>> 12 & 63], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >>> 6 & 63], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e &
        63];
        a === s + 1 ? (e = d[a] << 4, m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >>> 6], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e & 63], m += "==") : a === s && (e = d[a] << 10 | d[a + 1] << 2, m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >>> 12], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >>> 6 & 63], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e & 63], m += "=");
        return m
    }

    function a(e) {
        e = e.replace(/[^A-Za-z0-9+\/]+/g,
            "");
        var d = e.length, a = new Uint8Array(new ArrayBuffer(3 * d)), s = e.length % 4, c = 0, b, H;
        for (b = 0; b < d; b += 4)H = (m[e.charAt(b)] || 0) << 18 | (m[e.charAt(b + 1)] || 0) << 12 | (m[e.charAt(b + 2)] || 0) << 6 | (m[e.charAt(b + 3)] || 0), a[c] = H >> 16, a[c + 1] = H >> 8 & 255, a[c + 2] = H & 255, c += 3;
        d = 3 * d - [0, 0, 2, 1][s];
        return a.subarray(0, d)
    }

    function c(e) {
        var d, m, a = e.length, s = 0, c = new Uint8Array(new ArrayBuffer(3 * a));
        for (d = 0; d < a; d += 1)m = e[d], 128 > m ? c[s++] = m : (2048 > m ? c[s++] = 192 | m >>> 6 : (c[s++] = 224 | m >>> 12 & 15, c[s++] = 128 | m >>> 6 & 63), c[s++] = 128 | m & 63);
        return c.subarray(0,
            s)
    }

    function b(e) {
        var d, m, a, s, c = e.length, H = new Uint8Array(new ArrayBuffer(c)), b = 0;
        for (d = 0; d < c; d += 1)m = e[d], 128 > m ? H[b++] = m : (d += 1, a = e[d], 224 > m ? H[b++] = (m & 31) << 6 | a & 63 : (d += 1, s = e[d], H[b++] = (m & 15) << 12 | (a & 63) << 6 | s & 63));
        return H.subarray(0, b)
    }

    function k(d) {
        return l(f(d))
    }

    function q(d) {
        return String.fromCharCode.apply(String, a(d))
    }

    function p(d) {
        return b(f(d))
    }

    function n(d) {
        d = b(d);
        for (var e = "", m = 0; m < d.length;)e += String.fromCharCode.apply(String, d.subarray(m, m + 45E3)), m += 45E3;
        return e
    }

    function g(d, e, m) {
        var a, s,
            c, H = "";
        for (c = e; c < m; c += 1)e = d.charCodeAt(c) & 255, 128 > e ? H += String.fromCharCode(e) : (c += 1, a = d.charCodeAt(c) & 255, 224 > e ? H += String.fromCharCode((e & 31) << 6 | a & 63) : (c += 1, s = d.charCodeAt(c) & 255, H += String.fromCharCode((e & 15) << 12 | (a & 63) << 6 | s & 63)));
        return H
    }

    function h(d, e) {
        function m() {
            var c = s + 1E5;
            c > d.length && (c = d.length);
            a += g(d, s, c);
            s = c;
            c = s === d.length;
            e(a, c) && !c && runtime.setTimeout(m, 0)
        }

        var a = "", s = 0;
        1E5 > d.length ? e(g(d, 0, d.length), !0) : ("string" !== typeof d && (d = d.slice()), m())
    }

    function d(d) {
        return c(f(d))
    }

    function e(d) {
        return String.fromCharCode.apply(String,
            c(d))
    }

    function s(d) {
        return String.fromCharCode.apply(String, c(f(d)))
    }

    var m = function (d) {
        var e = {}, m, a;
        m = 0;
        for (a = d.length; m < a; m += 1)e[d.charAt(m)] = m;
        return e
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), x, t, y = runtime.getWindow(), v, r;
    y && y.btoa ? (v = y.btoa, x = function (d) {
            return v(s(d))
        }) : (v = k, x = function (e) {
            return l(d(e))
        });
    y && y.atob ? (r = y.atob, t = function (d) {
            d = r(d);
            return g(d, 0, d.length)
        }) : (r = q, t = function (d) {
            return n(a(d))
        });
    core.Base64 = function () {
        this.convertByteArrayToBase64 = this.convertUTF8ArrayToBase64 =
            l;
        this.convertBase64ToByteArray = this.convertBase64ToUTF8Array = a;
        this.convertUTF16ArrayToByteArray = this.convertUTF16ArrayToUTF8Array = c;
        this.convertByteArrayToUTF16Array = this.convertUTF8ArrayToUTF16Array = b;
        this.convertUTF8StringToBase64 = k;
        this.convertBase64ToUTF8String = q;
        this.convertUTF8StringToUTF16Array = p;
        this.convertByteArrayToUTF16String = this.convertUTF8ArrayToUTF16String = n;
        this.convertUTF8StringToUTF16String = h;
        this.convertUTF16StringToByteArray = this.convertUTF16StringToUTF8Array = d;
        this.convertUTF16ArrayToUTF8String =
            e;
        this.convertUTF16StringToUTF8String = s;
        this.convertUTF16StringToBase64 = x;
        this.convertBase64ToUTF16String = t;
        this.fromBase64 = q;
        this.toBase64 = k;
        this.atob = r;
        this.btoa = v;
        this.utob = s;
        this.btou = h;
        this.encode = x;
        this.encodeURI = function (d) {
            return x(d).replace(/[+\/]/g, function (d) {
                return "+" === d ? "-" : "_"
            }).replace(/\\=+$/, "")
        };
        this.decode = function (d) {
            return t(d.replace(/[\-_]/g, function (d) {
                return "-" === d ? "+" : "/"
            }))
        };
        return this
    };
    return core.Base64
}
core.Base64 = makeBase64();
core.ByteArray = function (f) {
    this.pos = 0;
    this.data = f;
    this.readUInt32LE = function () {
        this.pos += 4;
        var f = this.data, a = this.pos;
        return f[--a] << 24 | f[--a] << 16 | f[--a] << 8 | f[--a]
    };
    this.readUInt16LE = function () {
        this.pos += 2;
        var f = this.data, a = this.pos;
        return f[--a] << 8 | f[--a]
    }
};
core.ByteArrayWriter = function (f) {
    function l(a) {
        a > b - c && (b = Math.max(2 * b, c + a), a = new Uint8Array(new ArrayBuffer(b)), a.set(k), k = a)
    }

    var a = this, c = 0, b = 1024, k = new Uint8Array(new ArrayBuffer(b));
    this.appendByteArrayWriter = function (c) {
        a.appendByteArray(c.getByteArray())
    };
    this.appendByteArray = function (a) {
        var b = a.length;
        l(b);
        k.set(a, c);
        c += b
    };
    this.appendArray = function (a) {
        var b = a.length;
        l(b);
        k.set(a, c);
        c += b
    };
    this.appendUInt16LE = function (c) {
        a.appendArray([c & 255, c >> 8 & 255])
    };
    this.appendUInt32LE = function (c) {
        a.appendArray([c &
        255, c >> 8 & 255, c >> 16 & 255, c >> 24 & 255])
    };
    this.appendString = function (c) {
        a.appendByteArray(runtime.byteArrayFromString(c, f))
    };
    this.getLength = function () {
        return c
    };
    this.getByteArray = function () {
        var a = new Uint8Array(new ArrayBuffer(c));
        a.set(k.subarray(0, c));
        return a
    }
};
core.CSSUnits = function () {
    var f = this, l = {"in": 1, cm: 2.54, mm: 25.4, pt: 72, pc: 12, px: 96};
    this.convert = function (a, c, b) {
        return a * l[b] / l[c]
    };
    this.convertMeasure = function (a, c) {
        var b, k;
        a && c && (b = parseFloat(a), k = a.replace(b.toString(), ""), b = f.convert(b, k, c));
        return b
    };
    this.getUnits = function (a) {
        return a.substr(a.length - 2, a.length)
    }
};
(function () {
    function f() {
        var c, b, k, f, p, l, g, h, d;
        void 0 === a && (b = (c = runtime.getWindow()) && c.document, l = b.documentElement, g = b.body, a = {
            rangeBCRIgnoresElementBCR: !1,
            unscaledRangeClientRects: !1,
            elementBCRIgnoresBodyScroll: !1
        }, b && (f = b.createElement("div"), f.style.position = "absolute", f.style.left = "-99999px", f.style.transform = "scale(2)", f.style["-webkit-transform"] = "scale(2)", p = b.createElement("div"), f.appendChild(p), g.appendChild(f), c = b.createRange(), c.selectNode(p), a.rangeBCRIgnoresElementBCR = 0 === c.getClientRects().length,
            p.appendChild(b.createTextNode("Rect transform test")), b = p.getBoundingClientRect(), k = c.getBoundingClientRect(), a.unscaledRangeClientRects = 2 < Math.abs(b.height - k.height), f.style.transform = "", f.style["-webkit-transform"] = "", b = l.style.overflow, k = g.style.overflow, h = g.style.height, d = g.scrollTop, l.style.overflow = "visible", g.style.overflow = "visible", g.style.height = "200%", g.scrollTop = g.scrollHeight, a.elementBCRIgnoresBodyScroll = c.getBoundingClientRect().top !== p.getBoundingClientRect().top, g.scrollTop = d, g.style.height =
            h, g.style.overflow = k, l.style.overflow = b, c.detach(), g.removeChild(f), c = Object.keys(a).map(function (d) {
            return d + ":" + String(a[d])
        }).join(", "), runtime.log("Detected browser quirks - " + c)));
        return a
    }

    function l(a, b, k) {
        for (a = a ? a.firstElementChild : null; a;) {
            if (a.localName === k && a.namespaceURI === b)return a;
            a = a.nextElementSibling
        }
        return null
    }

    var a;
    core.DomUtilsImpl = function () {
        function a(d, e) {
            for (var c = 0, b; d.parentNode !== e;)runtime.assert(null !== d.parentNode, "parent is null"), d = d.parentNode;
            for (b = e.firstChild; b !==
            d;)c += 1, b = b.nextSibling;
            return c
        }

        function b(d, e) {
            return 0 >= d.compareBoundaryPoints(Range.START_TO_START, e) && 0 <= d.compareBoundaryPoints(Range.END_TO_END, e)
        }

        function k(d, e) {
            return 0 >= d.compareBoundaryPoints(Range.END_TO_START, e) && 0 <= d.compareBoundaryPoints(Range.START_TO_END, e)
        }

        function q(d, e) {
            var a = null;
            d.nodeType === Node.TEXT_NODE && (0 === d.length ? (d.parentNode.removeChild(d), e.nodeType === Node.TEXT_NODE && (a = e)) : (e.nodeType === Node.TEXT_NODE && (d.appendData(e.data), e.parentNode.removeChild(e)), a = d));
            return a
        }

        function p(d) {
            for (var e = d.parentNode; d.firstChild;)e.insertBefore(d.firstChild, d);
            e.removeChild(d);
            return e
        }

        function n(d, e) {
            var a = d.parentNode, c = d.firstChild, b = e(d), h;
            if (b === NodeFilter.FILTER_SKIP)return a;
            for (; c;)h = c.nextSibling, n(c, e), c = h;
            a && b === NodeFilter.FILTER_REJECT && p(d);
            return a
        }

        function g(d, e) {
            return d === e || Boolean(d.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        }

        function h(d, e) {
            return f().unscaledRangeClientRects ? d : d / e
        }

        function d(e, m, a) {
            Object.keys(m).forEach(function (c) {
                var b =
                    c.split(":"), h = b[1], g = a(b[0]), b = m[c], k = typeof b;
                "object" === k ? Object.keys(b).length && (c = g ? e.getElementsByTagNameNS(g, h)[0] || e.ownerDocument.createElementNS(g, c) : e.getElementsByTagName(h)[0] || e.ownerDocument.createElement(c), e.appendChild(c), d(c, b, a)) : g && (runtime.assert("number" === k || "string" === k, "attempting to map unsupported type '" + k + "' (key: " + c + ")"), e.setAttributeNS(g, c, String(b)))
            })
        }

        var e = null;
        this.splitBoundaries = function (d) {
            var e, b = [], h, g, k;
            if (d.startContainer.nodeType === Node.TEXT_NODE || d.endContainer.nodeType ===
                Node.TEXT_NODE) {
                h = d.endContainer;
                g = d.endContainer.nodeType !== Node.TEXT_NODE ? d.endOffset === d.endContainer.childNodes.length : !1;
                k = d.endOffset;
                e = d.endContainer;
                if (k < e.childNodes.length)for (e = e.childNodes.item(k), k = 0; e.firstChild;)e = e.firstChild; else for (; e.lastChild;)e = e.lastChild, k = e.nodeType === Node.TEXT_NODE ? e.textContent.length : e.childNodes.length;
                e === h && (h = null);
                d.setEnd(e, k);
                k = d.endContainer;
                0 !== d.endOffset && k.nodeType === Node.TEXT_NODE && (e = k, d.endOffset !== e.length && (b.push(e.splitText(d.endOffset)),
                    b.push(e)));
                k = d.startContainer;
                0 !== d.startOffset && k.nodeType === Node.TEXT_NODE && (e = k, d.startOffset !== e.length && (k = e.splitText(d.startOffset), b.push(e), b.push(k), d.setStart(k, 0)));
                if (null !== h) {
                    for (k = d.endContainer; k.parentNode && k.parentNode !== h;)k = k.parentNode;
                    g = g ? h.childNodes.length : a(k, h);
                    d.setEnd(h, g)
                }
            }
            return b
        };
        this.containsRange = b;
        this.rangesIntersect = k;
        this.rangeIntersection = function (d, e) {
            var a;
            k(d, e) && (a = d.cloneRange(), -1 === d.compareBoundaryPoints(Range.START_TO_START, e) && a.setStart(e.startContainer,
                e.startOffset), 1 === d.compareBoundaryPoints(Range.END_TO_END, e) && a.setEnd(e.endContainer, e.endOffset));
            return a
        };
        this.getNodesInRange = function (d, e, a) {
            var c = [], b = d.commonAncestorContainer, b = b.nodeType === Node.TEXT_NODE ? b.parentNode : b;
            a = d.startContainer.ownerDocument.createTreeWalker(b, a, e, !1);
            var h, k;
            d.endContainer.childNodes[d.endOffset - 1] ? (h = d.endContainer.childNodes[d.endOffset - 1], k = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY) : (h = d.endContainer, k = Node.DOCUMENT_POSITION_PRECEDING);
            d.startContainer.childNodes[d.startOffset] ? (d = d.startContainer.childNodes[d.startOffset], a.currentNode = d) : d.startOffset === (d.startContainer.nodeType === Node.TEXT_NODE ? d.startContainer.length : d.startContainer.childNodes.length) ? (d = d.startContainer, a.currentNode = d, a.lastChild(), d = a.nextNode()) : (d = d.startContainer, a.currentNode = d);
            if (d) {
                d = a.currentNode;
                if (d !== b)for (d = d.parentNode; d && d !== b;)e(d) === NodeFilter.FILTER_REJECT && (a.currentNode = d), d = d.parentNode;
                d = a.currentNode;
                switch (e(d)) {
                    case NodeFilter.FILTER_REJECT:
                        for (d =
                                 a.nextSibling(); !d && a.parentNode();)d = a.nextSibling();
                        break;
                    case NodeFilter.FILTER_SKIP:
                        d = a.nextNode()
                }
                for (; d;) {
                    e = h.compareDocumentPosition(d);
                    if (0 !== e && 0 === (e & k))break;
                    c.push(d);
                    d = a.nextNode()
                }
            }
            return c
        };
        this.normalizeTextNodes = function (d) {
            d && d.nextSibling && (d = q(d, d.nextSibling));
            d && d.previousSibling && q(d.previousSibling, d)
        };
        this.rangeContainsNode = function (d, e) {
            var a = e.ownerDocument.createRange(), c = e.ownerDocument.createRange(), h;
            a.setStart(d.startContainer, d.startOffset);
            a.setEnd(d.endContainer,
                d.endOffset);
            c.selectNodeContents(e);
            h = b(a, c);
            a.detach();
            c.detach();
            return h
        };
        this.mergeIntoParent = p;
        this.removeUnwantedNodes = n;
        this.removeAllChildNodes = function (d) {
            for (; d.firstChild;)d.removeChild(d.firstChild)
        };
        this.getElementsByTagNameNS = function (d, e, a) {
            var c = [];
            d = d.getElementsByTagNameNS(e, a);
            c.length = a = d.length;
            for (e = 0; e < a; e += 1)c[e] = d.item(e);
            return c
        };
        this.getElementsByTagName = function (d, e) {
            var a = [], c, b, h;
            c = d.getElementsByTagName(e);
            a.length = h = c.length;
            for (b = 0; b < h; b += 1)a[b] = c.item(b);
            return a
        };
        this.containsNode = function (d, e) {
            return d === e || d.contains(e)
        };
        this.comparePoints = function (d, e, b, h) {
            if (d === b)return h - e;
            var k = d.compareDocumentPosition(b);
            2 === k ? k = -1 : 4 === k ? k = 1 : 10 === k ? (e = a(d, b), k = e < h ? 1 : -1) : (h = a(b, d), k = h < e ? -1 : 1);
            return k
        };
        this.adaptRangeDifferenceToZoomLevel = h;
        this.translateRect = function (d, e, a) {
            return {
                top: h(d.top - e.top, a),
                left: h(d.left - e.left, a),
                bottom: h(d.bottom - e.top, a),
                right: h(d.right - e.left, a),
                width: h(d.width, a),
                height: h(d.height, a)
            }
        };
        this.getBoundingClientRect = function (d) {
            var a =
                d.ownerDocument, c = f(), b = a.body;
            if ((!1 === c.unscaledRangeClientRects || c.rangeBCRIgnoresElementBCR) && d.nodeType === Node.ELEMENT_NODE)return d = d.getBoundingClientRect(), c.elementBCRIgnoresBodyScroll ? {
                    left: d.left + b.scrollLeft,
                    right: d.right + b.scrollLeft,
                    top: d.top + b.scrollTop,
                    bottom: d.bottom + b.scrollTop,
                    width: d.width,
                    height: d.height
                } : d;
            var h;
            e ? h = e : e = h = a.createRange();
            c = h;
            c.selectNode(d);
            return c.getBoundingClientRect()
        };
        this.mapKeyValObjOntoNode = function (d, e, a) {
            Object.keys(e).forEach(function (c) {
                var b = c.split(":"),
                    h = b[1], b = a(b[0]), k = e[c];
                b ? (h = d.getElementsByTagNameNS(b, h)[0], h || (h = d.ownerDocument.createElementNS(b, c), d.appendChild(h)), h.textContent = k) : runtime.log("Key ignored: " + c)
            })
        };
        this.removeKeyElementsFromNode = function (d, e, a) {
            e.forEach(function (e) {
                var c = e.split(":"), m = c[1];
                (c = a(c[0])) ? (m = d.getElementsByTagNameNS(c, m)[0]) ? m.parentNode.removeChild(m) : runtime.log("Element for " + e + " not found.") : runtime.log("Property Name ignored: " + e)
            })
        };
        this.getKeyValRepresentationOfNode = function (d, e) {
            for (var a = {}, c = d.firstElementChild,
                     b; c;) {
                if (b = e(c.namespaceURI)) a[b + ":" + c.localName] = c.textContent;
                c = c.nextElementSibling
            }
            return a
        };
        this.mapObjOntoNode = d;
        this.cloneEvent = function (d) {
            var e = Object.create(null);
            Object.keys(d).forEach(function (a) {
                e[a] = d[a]
            });
            e.prototype = d.constructor.prototype;
            return e
        };
        this.getDirectChild = l;
        (function (d) {
            var e, a;
            a = runtime.getWindow();
            null !== a && (e = a.navigator.appVersion.toLowerCase(), a = -1 === e.indexOf("chrome") && (-1 !== e.indexOf("applewebkit") || -1 !== e.indexOf("safari")), e = -1 !== e.indexOf("msie") || -1 !== e.indexOf("trident"),
            a || e) && (d.containsNode = g)
        })(this)
    };
    core.DomUtils = new core.DomUtilsImpl
})();
core.Cursor = function (f, l) {
    function a(d) {
        d.parentNode && (p.push(d.previousSibling), p.push(d.nextSibling), d.parentNode.removeChild(d))
    }

    function c(d, e, a) {
        if (e.nodeType === Node.TEXT_NODE) {
            runtime.assert(Boolean(e), "putCursorIntoTextNode: invalid container");
            var c = e.parentNode;
            runtime.assert(Boolean(c), "putCursorIntoTextNode: container without parent");
            runtime.assert(0 <= a && a <= e.length, "putCursorIntoTextNode: offset is out of bounds");
            0 === a ? c.insertBefore(d, e) : (a !== e.length && e.splitText(a), c.insertBefore(d,
                    e.nextSibling))
        } else e.nodeType === Node.ELEMENT_NODE && e.insertBefore(d, e.childNodes.item(a));
        p.push(d.previousSibling);
        p.push(d.nextSibling)
    }

    var b = f.createElementNS("urn:webodf:names:cursor", "cursor"), k = f.createElementNS("urn:webodf:names:cursor", "anchor"), q, p = [], n = f.createRange(), g, h = core.DomUtils;
    this.getNode = function () {
        return b
    };
    this.getAnchorNode = function () {
        return k.parentNode ? k : b
    };
    this.getSelectedRange = function () {
        g ? (n.setStartBefore(b), n.collapse(!0)) : (n.setStartAfter(q ? k : b), n.setEndBefore(q ?
                b : k));
        return n
    };
    this.setSelectedRange = function (d, e) {
        n && n !== d && n.detach();
        n = d;
        q = !1 !== e;
        (g = d.collapsed) ? (a(k), a(b), c(b, d.startContainer, d.startOffset)) : (a(k), a(b), c(q ? b : k, d.endContainer, d.endOffset), c(q ? k : b, d.startContainer, d.startOffset));
        p.forEach(h.normalizeTextNodes);
        p.length = 0
    };
    this.hasForwardSelection = function () {
        return q
    };
    this.remove = function () {
        a(b);
        p.forEach(h.normalizeTextNodes);
        p.length = 0
    };
    b.setAttributeNS("urn:webodf:names:cursor", "memberId", l);
    k.setAttributeNS("urn:webodf:names:cursor", "memberId",
        l)
};
core.Destroyable = function () {
};
core.Destroyable.prototype.destroy = function (f) {
};
core.EventSource = function () {
};
core.EventSource.prototype.subscribe = function (f, l) {
};
core.EventSource.prototype.unsubscribe = function (f, l) {
};
core.EventNotifier = function (f) {
    function l(c) {
        runtime.assert(!a.hasOwnProperty(c), 'Duplicated event ids: "' + c + '" registered more than once.');
        a[c] = []
    }

    var a = {};
    this.emit = function (c, b) {
        var k, f;
        runtime.assert(a.hasOwnProperty(c), 'unknown event fired "' + c + '"');
        f = a[c];
        for (k = 0; k < f.length; k += 1)f[k](b)
    };
    this.subscribe = function (c, b) {
        runtime.assert(a.hasOwnProperty(c), 'tried to subscribe to unknown event "' + c + '"');
        a[c].push(b)
    };
    this.unsubscribe = function (c, b) {
        var k;
        runtime.assert(a.hasOwnProperty(c), 'tried to unsubscribe from unknown event "' +
            c + '"');
        k = a[c].indexOf(b);
        runtime.assert(-1 !== k, 'tried to unsubscribe unknown callback from event "' + c + '"');
        -1 !== k && a[c].splice(k, 1)
    };
    this.register = l;
    f && f.forEach(l)
};
core.ScheduledTask = function (f, l, a) {
    function c() {
        q && (a(k), q = !1)
    }

    function b() {
        c();
        f.apply(void 0, p);
        p = null
    }

    var k, q = !1, p = [], n = !1;
    this.trigger = function () {
        runtime.assert(!1 === n, "Can't trigger destroyed ScheduledTask instance");
        p = Array.prototype.slice.call(arguments);
        q || (q = !0, k = l(b))
    };
    this.triggerImmediate = function () {
        runtime.assert(!1 === n, "Can't trigger destroyed ScheduledTask instance");
        p = Array.prototype.slice.call(arguments);
        b()
    };
    this.processRequests = function () {
        q && b()
    };
    this.cancel = c;
    this.restart = function () {
        runtime.assert(!1 ===
            n, "Can't trigger destroyed ScheduledTask instance");
        c();
        q = !0;
        k = l(b)
    };
    this.destroy = function (a) {
        c();
        n = !0;
        a()
    }
};
(function () {
    var f;
    core.Task = {};
    core.Task.SUPPRESS_MANUAL_PROCESSING = !1;
    core.Task.processTasks = function () {
        core.Task.SUPPRESS_MANUAL_PROCESSING || f.performRedraw()
    };
    core.Task.createRedrawTask = function (l) {
        return new core.ScheduledTask(l, f.requestRedrawTask, f.cancelRedrawTask)
    };
    core.Task.createTimeoutTask = function (f, a) {
        return new core.ScheduledTask(f, function (c) {
            return runtime.setTimeout(c, a)
        }, runtime.clearTimeout)
    };
    f = new function () {
        var f = {};
        this.requestRedrawTask = function (a) {
            var c = runtime.requestAnimationFrame(function () {
                a();
                delete f[c]
            });
            f[c] = a;
            return c
        };
        this.performRedraw = function () {
            Object.keys(f).forEach(function (a) {
                f[a]();
                runtime.cancelAnimationFrame(parseInt(a, 10))
            });
            f = {}
        };
        this.cancelRedrawTask = function (a) {
            runtime.cancelAnimationFrame(a);
            delete f[a]
        }
    }
})();
core.EventSubscriptions = function () {
    function f(c, b, k) {
        c.subscribe(b, k);
        a.push({eventSource: c, eventid: b, callback: k})
    }

    function l() {
        var k = [];
        a.forEach(function (a) {
            a.eventSource.unsubscribe(a.eventid, a.callback)
        });
        a.length = 0;
        Object.keys(b).forEach(function (a) {
            b[a].forEach(function (a) {
                k.push(a.task.destroy)
            });
            delete b[a]
        });
        core.Async.destroyAll(k, function () {
        });
        c = new core.EventNotifier
    }

    var a = [], c = new core.EventNotifier, b = {}, k = 0;
    this.addSubscription = f;
    this.addFrameSubscription = function (a, p, l) {
        var g, h, d, e;
        b.hasOwnProperty(p) || (b[p] = []);
        d = b[p];
        for (e = 0; e < d.length; e += 1)if (d[e].eventSource === a) {
            g = d[e];
            break
        }
        g || (h = "s" + k, k += 1, c.register(h), g = {
            frameEventId: h,
            eventSource: a,
            task: core.Task.createRedrawTask(function () {
                c.emit(h, void 0)
            })
        }, d.push(g), f(a, p, g.task.trigger));
        c.subscribe(g.frameEventId, l)
    };
    this.unsubscribeAll = l;
    this.destroy = function (a) {
        l();
        a()
    }
};
core.LazyProperty = function (f) {
    var l, a = !1;
    this.value = function () {
        a || (l = f(), a = !0);
        return l
    };
    this.reset = function () {
        a = !1
    }
};
core.LoopWatchDog = function (f, l) {
    var a = Date.now(), c = 0;
    this.check = function () {
        var b;
        if (f && (b = Date.now(), b - a > f))throw runtime.log("alert", "watchdog timeout"), "timeout!";
        if (0 < l && (c += 1, c > l))throw runtime.log("alert", "watchdog loop overflow"), "loop overflow";
    }
};
core.NodeFilterChain = function (f) {
    var l = NodeFilter.FILTER_REJECT, a = NodeFilter.FILTER_ACCEPT;
    this.acceptNode = function (c) {
        var b;
        for (b = 0; b < f.length; b += 1)if (f[b].acceptNode(c) === l)return l;
        return a
    }
};
core.PositionIterator = function (f, l, a, c) {
    function b() {
        this.acceptNode = function (d) {
            return !d || d.nodeType === s && 0 === d.length ? t : x
        }
    }

    function k(d) {
        this.acceptNode = function (e) {
            return !e || e.nodeType === s && 0 === e.length ? t : d.acceptNode(e)
        }
    }

    function q() {
        var e = h.currentNode, a = e.nodeType;
        d = a === s ? e.length - 1 : a === m ? 1 : 0
    }

    function p() {
        if (null === h.previousSibling()) {
            if (!h.parentNode() || h.currentNode === f)return h.firstChild(), !1;
            d = 0
        } else q();
        return !0
    }

    function n() {
        var a = h.currentNode, c;
        c = e(a);
        if (a !== f)for (a = a.parentNode; a &&
        a !== f;)e(a) === t && (h.currentNode = a, c = t), a = a.parentNode;
        c === t ? (d = h.currentNode.nodeType === s ? a.length : 1, a = g.nextPosition()) : a = c === x ? !0 : g.nextPosition();
        a && runtime.assert(e(h.currentNode) === x, "moveToAcceptedNode did not result in walker being on an accepted node");
        return a
    }

    var g = this, h, d, e, s = Node.TEXT_NODE, m = Node.ELEMENT_NODE, x = NodeFilter.FILTER_ACCEPT, t = NodeFilter.FILTER_REJECT;
    this.nextPosition = function () {
        var e = h.currentNode, a = e.nodeType;
        if (e === f)return !1;
        if (0 === d && a === m) null === h.firstChild() && (d = 1);
        else if (a === s && d + 1 < e.length) d += 1; else if (null !== h.nextSibling()) d = 0; else if (h.parentNode()) d = 1; else return !1;
        return !0
    };
    this.previousPosition = function () {
        var e = !0, a = h.currentNode;
        0 === d ? e = p() : a.nodeType === s ? d -= 1 : null !== h.lastChild() ? q() : a === f ? e = !1 : d = 0;
        return e
    };
    this.previousNode = p;
    this.container = function () {
        var e = h.currentNode, a = e.nodeType;
        0 === d && a !== s && (e = e.parentNode);
        return e
    };
    this.rightNode = function () {
        var a = h.currentNode, c = a.nodeType;
        if (c === s && d === a.length)for (a = a.nextSibling; a && e(a) !== x;)a = a.nextSibling;
        else c === m && 1 === d && (a = null);
        return a
    };
    this.leftNode = function () {
        var a = h.currentNode;
        if (0 === d)for (a = a.previousSibling; a && e(a) !== x;)a = a.previousSibling; else if (a.nodeType === m)for (a = a.lastChild; a && e(a) !== x;)a = a.previousSibling;
        return a
    };
    this.getCurrentNode = function () {
        return h.currentNode
    };
    this.unfilteredDomOffset = function () {
        if (h.currentNode.nodeType === s)return d;
        for (var e = 0, a = h.currentNode, a = 1 === d ? a.lastChild : a.previousSibling; a;)e += 1, a = a.previousSibling;
        return e
    };
    this.getPreviousSibling = function () {
        var d =
            h.currentNode, e = h.previousSibling();
        h.currentNode = d;
        return e
    };
    this.getNextSibling = function () {
        var d = h.currentNode, e = h.nextSibling();
        h.currentNode = d;
        return e
    };
    this.setPositionBeforeElement = function (e) {
        runtime.assert(Boolean(e), "setPositionBeforeElement called without element");
        h.currentNode = e;
        d = 0;
        return n()
    };
    this.setUnfilteredPosition = function (e, a) {
        runtime.assert(Boolean(e), "PositionIterator.setUnfilteredPosition called without container");
        h.currentNode = e;
        e.nodeType === s ? (d = a, runtime.assert(a <= e.length,
                "Error in setPosition: " + a + " > " + e.length), runtime.assert(0 <= a, "Error in setPosition: " + a + " < 0"), a === e.length && (h.nextSibling() ? d = 0 : h.parentNode() ? d = 1 : runtime.assert(!1, "Error in setUnfilteredPosition: position not valid."))) : a < e.childNodes.length ? (h.currentNode = e.childNodes.item(a), d = 0) : d = 1;
        return n()
    };
    this.moveToEnd = function () {
        h.currentNode = f;
        d = 1
    };
    this.moveToEndOfNode = function (e) {
        e.nodeType === s ? g.setUnfilteredPosition(e, e.length) : (h.currentNode = e, d = 1)
    };
    this.isBeforeNode = function () {
        return 0 === d
    };
    this.getNodeFilter = function () {
        return e
    };
    e = (a ? new k(a) : new b).acceptNode;
    e.acceptNode = e;
    l = l || NodeFilter.SHOW_ALL;
    runtime.assert(f.nodeType !== Node.TEXT_NODE, "Internet Explorer doesn't allow tree walker roots to be text nodes");
    h = f.ownerDocument.createTreeWalker(f, l, e, c);
    d = 0;
    null === h.firstChild() && (d = 1)
};
core.PositionFilter = function () {
};
core.PositionFilter.FilterResult = {FILTER_ACCEPT: 1, FILTER_REJECT: 2, FILTER_SKIP: 3};
core.PositionFilter.prototype.acceptPosition = function (f) {
};
core.PositionFilterChain = function () {
    var f = [], l = core.PositionFilter.FilterResult.FILTER_ACCEPT, a = core.PositionFilter.FilterResult.FILTER_REJECT;
    this.acceptPosition = function (c) {
        var b;
        for (b = 0; b < f.length; b += 1)if (f[b].acceptPosition(c) === a)return a;
        return l
    };
    this.addFilter = function (a) {
        f.push(a)
    }
};
(function () {
    core.RawInflate = function () {
        var f;
        (function (l) {
            f = l()
        })(function () {
            return function a(c, b, k) {
                function f(p, g) {
                    if (!b[p]) {
                        if (!c[p])throw Error("Cannot find module '" + p + "'");
                        var h = b[p] = {exports: {}};
                        c[p][0].call(h.exports, function (d) {
                            var e = c[p][1][d];
                            return f(e ? e : d)
                        }, h, h.exports, a, c, b, k)
                    }
                    return b[p].exports
                }

                for (var p = 0; p < k.length; p++)f(k[p]);
                return f
            }({
                1: [function (a, c, b) {
                    function k(d, e) {
                        var a = new s(e);
                        a.push(d, !0);
                        if (a.err)throw a.msg;
                        return a.result
                    }

                    var f = a("./zlib/inflate.js"), p = a("./utils/common"),
                        n = a("./utils/strings"), g = a("./zlib/constants"), h = a("./zlib/messages"), d = a("./zlib/zstream"), e = a("./zlib/gzheader"), s = function (a) {
                            var c = this.options = p.assign({chunkSize: 16384, windowBits: 0, to: ""}, a || {});
                            c.raw && 0 <= c.windowBits && 16 > c.windowBits && (c.windowBits = -c.windowBits, 0 === c.windowBits && (c.windowBits = -15));
                            !(0 <= c.windowBits && 16 > c.windowBits) || a && a.windowBits || (c.windowBits += 32);
                            15 < c.windowBits && 48 > c.windowBits && 0 === (c.windowBits & 15) && (c.windowBits |= 15);
                            this.err = 0;
                            this.msg = "";
                            this.ended = !1;
                            this.chunks =
                                [];
                            this.strm = new d;
                            this.strm.avail_out = 0;
                            a = f.inflateInit2(this.strm, c.windowBits);
                            if (a !== g.Z_OK)throw Error(h[a]);
                            this.header = new e;
                            f.inflateGetHeader(this.strm, this.header)
                        };
                    s.prototype.push = function (d, e) {
                        var a = this.strm, c = this.options.chunkSize, b, h, s, k, A;
                        if (this.ended)return !1;
                        h = e === ~~e ? e : !0 === e ? g.Z_FINISH : g.Z_NO_FLUSH;
                        a.input = "string" === typeof d ? n.binstring2buf(d) : d;
                        a.next_in = 0;
                        a.avail_in = a.input.length;
                        do {
                            0 === a.avail_out && (a.output = new p.Buf8(c), a.next_out = 0, a.avail_out = c);
                            b = f.inflate(a, g.Z_NO_FLUSH);
                            if (b !== g.Z_STREAM_END && b !== g.Z_OK)return this.onEnd(b), this.ended = !0, !1;
                            if (a.next_out && (0 === a.avail_out || b === g.Z_STREAM_END || 0 === a.avail_in && h === g.Z_FINISH))if ("string" === this.options.to) s = n.utf8border(a.output, a.next_out), k = a.next_out - s, A = n.buf2string(a.output, s), a.next_out = k, a.avail_out = c - k, k && p.arraySet(a.output, a.output, s, k, 0), this.onData(A); else this.onData(p.shrinkBuf(a.output, a.next_out))
                        } while ((0 < a.avail_in || 0 === a.avail_out) && b !== g.Z_STREAM_END);
                        b === g.Z_STREAM_END && (h = g.Z_FINISH);
                        return h ===
                        g.Z_FINISH ? (b = f.inflateEnd(this.strm), this.onEnd(b), this.ended = !0, b === g.Z_OK) : !0
                    };
                    s.prototype.onData = function (d) {
                        this.chunks.push(d)
                    };
                    s.prototype.onEnd = function (d) {
                        d === g.Z_OK && (this.result = "string" === this.options.to ? this.chunks.join("") : p.flattenChunks(this.chunks));
                        this.chunks = [];
                        this.err = d;
                        this.msg = this.strm.msg
                    };
                    b.Inflate = s;
                    b.inflate = k;
                    b.inflateRaw = function (d, e) {
                        e = e || {};
                        e.raw = !0;
                        return k(d, e)
                    };
                    b.ungzip = k
                }, {
                    "./utils/common": 2,
                    "./utils/strings": 3,
                    "./zlib/constants": 5,
                    "./zlib/gzheader": 7,
                    "./zlib/inflate.js": 9,
                    "./zlib/messages": 11,
                    "./zlib/zstream": 12
                }],
                2: [function (a, c, b) {
                    a = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
                    b.assign = function (a) {
                        for (var c = Array.prototype.slice.call(arguments, 1); c.length;) {
                            var b = c.shift();
                            if (b) {
                                if ("object" !== typeof b)throw new TypeError(b + "must be non-object");
                                for (var h in b)b.hasOwnProperty(h) && (a[h] = b[h])
                            }
                        }
                        return a
                    };
                    b.shrinkBuf = function (a, c) {
                        if (a.length === c)return a;
                        if (a.subarray)return a.subarray(0, c);
                        a.length = c;
                        return a
                    };
                    var k = {
                        arraySet: function (a, c, b, h, d) {
                            if (c.subarray && a.subarray) a.set(c.subarray(b, b + h), d); else for (var e = 0; e < h; e++)a[d + e] = c[b + e]
                        }, flattenChunks: function (a) {
                            var c, b, h, d, e;
                            c = h = 0;
                            for (b = a.length; c < b; c++)h += a[c].length;
                            e = new Uint8Array(h);
                            c = h = 0;
                            for (b = a.length; c < b; c++)d = a[c], e.set(d, h), h += d.length;
                            return e
                        }
                    }, f = {
                        arraySet: function (a, c, b, h, d) {
                            for (var e = 0; e < h; e++)a[d + e] = c[b + e]
                        }, flattenChunks: function (a) {
                            return [].concat.apply([], a)
                        }
                    };
                    b.setTyped = function (a) {
                        a ? (b.Buf8 = Uint8Array, b.Buf16 = Uint16Array, b.Buf32 = Int32Array,
                                b.assign(b, k)) : (b.Buf8 = Array, b.Buf16 = Array, b.Buf32 = Array, b.assign(b, f))
                    };
                    b.setTyped(a)
                }, {}],
                3: [function (a, c, b) {
                    function k(d, a) {
                        if (65537 > a && (d.subarray && n || !d.subarray && p))return String.fromCharCode.apply(null, f.shrinkBuf(d, a));
                        for (var c = "", b = 0; b < a; b++)c += String.fromCharCode(d[b]);
                        return c
                    }

                    var f = a("./common"), p = !0, n = !0;
                    try {
                        String.fromCharCode.apply(null, [0])
                    } catch (g) {
                        p = !1
                    }
                    try {
                        String.fromCharCode.apply(null, new Uint8Array(1))
                    } catch (h) {
                        n = !1
                    }
                    var d = new f.Buf8(256);
                    for (a = 0; 256 > a; a++)d[a] = 252 <= a ? 6 : 248 <=
                        a ? 5 : 240 <= a ? 4 : 224 <= a ? 3 : 192 <= a ? 2 : 1;
                    d[254] = d[254] = 1;
                    b.string2buf = function (d) {
                        var a, c, b, h, k, g = d.length, p = 0;
                        for (h = 0; h < g; h++)c = d.charCodeAt(h), 55296 === (c & 64512) && h + 1 < g && (b = d.charCodeAt(h + 1), 56320 === (b & 64512) && (c = 65536 + (c - 55296 << 10) + (b - 56320), h++)), p += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4;
                        a = new f.Buf8(p);
                        for (h = k = 0; k < p; h++)c = d.charCodeAt(h), 55296 === (c & 64512) && h + 1 < g && (b = d.charCodeAt(h + 1), 56320 === (b & 64512) && (c = 65536 + (c - 55296 << 10) + (b - 56320), h++)), 128 > c ? a[k++] = c : (2048 > c ? a[k++] = 192 | c >>> 6 : (65536 > c ? a[k++] = 224 | c >>> 12 : (a[k++] =
                                        240 | c >>> 18, a[k++] = 128 | c >>> 12 & 63), a[k++] = 128 | c >>> 6 & 63), a[k++] = 128 | c & 63);
                        return a
                    };
                    b.buf2binstring = function (d) {
                        return k(d, d.length)
                    };
                    b.binstring2buf = function (d) {
                        for (var a = new f.Buf8(d.length), c = 0, b = a.length; c < b; c++)a[c] = d.charCodeAt(c);
                        return a
                    };
                    b.buf2string = function (a, c) {
                        var b, h, g, f, p = c || a.length, q = Array(2 * p);
                        for (b = h = 0; b < p;)if (g = a[b++], 128 > g) q[h++] = g; else if (f = d[g], 4 < f) q[h++] = 65533, b += f - 1; else {
                            for (g &= 2 === f ? 31 : 3 === f ? 15 : 7; 1 < f && b < p;)g = g << 6 | a[b++] & 63, f--;
                            1 < f ? q[h++] = 65533 : 65536 > g ? q[h++] = g : (g -= 65536, q[h++] =
                                        55296 | g >> 10 & 1023, q[h++] = 56320 | g & 1023)
                        }
                        return k(q, h)
                    };
                    b.utf8border = function (a, c) {
                        var b;
                        c = c || a.length;
                        c > a.length && (c = a.length);
                        for (b = c - 1; 0 <= b && 128 === (a[b] & 192);)b--;
                        return 0 > b || 0 === b ? c : b + d[a[b]] > c ? b : c
                    }
                }, {"./common": 2}],
                4: [function (a, c, b) {
                    c.exports = function (a, c, b, f) {
                        var g = a & 65535 | 0;
                        a = a >>> 16 & 65535 | 0;
                        for (var h = 0; 0 !== b;) {
                            h = 2E3 < b ? 2E3 : b;
                            b -= h;
                            do g = g + c[f++] | 0, a = a + g | 0; while (--h);
                            g %= 65521;
                            a %= 65521
                        }
                        return g | a << 16 | 0
                    }
                }, {}],
                5: [function (a, c, b) {
                    c.exports = {
                        Z_NO_FLUSH: 0,
                        Z_PARTIAL_FLUSH: 1,
                        Z_SYNC_FLUSH: 2,
                        Z_FULL_FLUSH: 3,
                        Z_FINISH: 4,
                        Z_BLOCK: 5,
                        Z_TREES: 6,
                        Z_OK: 0,
                        Z_STREAM_END: 1,
                        Z_NEED_DICT: 2,
                        Z_ERRNO: -1,
                        Z_STREAM_ERROR: -2,
                        Z_DATA_ERROR: -3,
                        Z_BUF_ERROR: -5,
                        Z_NO_COMPRESSION: 0,
                        Z_BEST_SPEED: 1,
                        Z_BEST_COMPRESSION: 9,
                        Z_DEFAULT_COMPRESSION: -1,
                        Z_FILTERED: 1,
                        Z_HUFFMAN_ONLY: 2,
                        Z_RLE: 3,
                        Z_FIXED: 4,
                        Z_DEFAULT_STRATEGY: 0,
                        Z_BINARY: 0,
                        Z_TEXT: 1,
                        Z_UNKNOWN: 2,
                        Z_DEFLATED: 8
                    }
                }, {}],
                6: [function (a, c, b) {
                    var k = function () {
                        for (var a, c = [], b = 0; 256 > b; b++) {
                            a = b;
                            for (var k = 0; 8 > k; k++)a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
                            c[b] = a
                        }
                        return c
                    }();
                    c.exports = function (a, c, b, g) {
                        b = g + b;
                        for (a ^= -1; g < b; g++)a = a >>> 8 ^ k[(a ^ c[g]) & 255];
                        return a ^ -1
                    }
                }, {}],
                7: [function (a, c, b) {
                    c.exports = function () {
                        this.os = this.xflags = this.time = this.text = 0;
                        this.extra = null;
                        this.extra_len = 0;
                        this.comment = this.name = "";
                        this.hcrc = 0;
                        this.done = !1
                    }
                }, {}],
                8: [function (a, c, b) {
                    c.exports = function (a, c) {
                        var b, f, g, h, d, e, s, m, x, t, y, v, r, w, u, A, F, B, E, H, I, Q, N, z;
                        b = a.state;
                        f = a.next_in;
                        N = a.input;
                        g = f + (a.avail_in - 5);
                        h = a.next_out;
                        z = a.output;
                        d = h - (c - a.avail_out);
                        e = h + (a.avail_out - 257);
                        s = b.dmax;
                        m = b.wsize;
                        x = b.whave;
                        t = b.wnext;
                        y = b.window;
                        v = b.hold;
                        r = b.bits;
                        w = b.lencode;
                        u = b.distcode;
                        A = (1 << b.lenbits) - 1;
                        F = (1 << b.distbits) - 1;
                        a:do b:for (15 > r && (v += N[f++] << r, r += 8, v += N[f++] << r, r += 8), B = w[v & A]; ;) {
                            E = B >>> 24;
                            v >>>= E;
                            r -= E;
                            E = B >>> 16 & 255;
                            if (0 === E) z[h++] = B & 65535; else if (E & 16) {
                                H = B & 65535;
                                if (E &= 15) r < E && (v += N[f++] << r, r += 8), H += v & (1 << E) - 1, v >>>= E, r -= E;
                                15 > r && (v += N[f++] << r, r += 8, v += N[f++] << r, r += 8);
                                B = u[v & F];
                                c:for (; ;) {
                                    E = B >>> 24;
                                    v >>>= E;
                                    r -= E;
                                    E = B >>> 16 & 255;
                                    if (E & 16) {
                                        B &= 65535;
                                        E &= 15;
                                        r < E && (v += N[f++] << r, r += 8, r < E && (v += N[f++] << r, r += 8));
                                        B += v & (1 << E) - 1;
                                        if (B > s) {
                                            a.msg = "invalid distance too far back";
                                            b.mode = 30;
                                            break a
                                        }
                                        v >>>= E;
                                        r -= E;
                                        E = h - d;
                                        if (B > E) {
                                            E = B - E;
                                            if (E > x && b.sane) {
                                                a.msg = "invalid distance too far back";
                                                b.mode = 30;
                                                break a
                                            }
                                            I = 0;
                                            Q = y;
                                            if (0 === t) {
                                                if (I += m - E, E < H) {
                                                    H -= E;
                                                    do z[h++] = y[I++]; while (--E);
                                                    I = h - B;
                                                    Q = z
                                                }
                                            } else if (t < E) {
                                                if (I += m + t - E, E -= t, E < H) {
                                                    H -= E;
                                                    do z[h++] = y[I++]; while (--E);
                                                    I = 0;
                                                    if (t < H) {
                                                        E = t;
                                                        H -= E;
                                                        do z[h++] = y[I++]; while (--E);
                                                        I = h - B;
                                                        Q = z
                                                    }
                                                }
                                            } else if (I += t - E, E < H) {
                                                H -= E;
                                                do z[h++] = y[I++]; while (--E);
                                                I = h - B;
                                                Q = z
                                            }
                                            for (; 2 < H;)z[h++] = Q[I++], z[h++] = Q[I++], z[h++] = Q[I++], H -= 3;
                                            H && (z[h++] = Q[I++], 1 < H && (z[h++] = Q[I++]))
                                        } else {
                                            I = h - B;
                                            do z[h++] =
                                                z[I++], z[h++] = z[I++], z[h++] = z[I++], H -= 3; while (2 < H);
                                            H && (z[h++] = z[I++], 1 < H && (z[h++] = z[I++]))
                                        }
                                    } else if (0 === (E & 64)) {
                                        B = u[(B & 65535) + (v & (1 << E) - 1)];
                                        continue c
                                    } else {
                                        a.msg = "invalid distance code";
                                        b.mode = 30;
                                        break a
                                    }
                                    break
                                }
                            } else if (0 === (E & 64)) {
                                B = w[(B & 65535) + (v & (1 << E) - 1)];
                                continue b
                            } else {
                                E & 32 ? b.mode = 12 : (a.msg = "invalid literal/length code", b.mode = 30);
                                break a
                            }
                            break
                        } while (f < g && h < e);
                        H = r >> 3;
                        f -= H;
                        r -= H << 3;
                        a.next_in = f;
                        a.next_out = h;
                        a.avail_in = f < g ? 5 + (g - f) : 5 - (f - g);
                        a.avail_out = h < e ? 257 + (e - h) : 257 - (h - e);
                        b.hold = v & (1 << r) - 1;
                        b.bits =
                            r
                    }
                }, {}],
                9: [function (a, c, b) {
                    function k(d) {
                        return (d >>> 24 & 255) + (d >>> 8 & 65280) + ((d & 65280) << 8) + ((d & 255) << 24)
                    }

                    function f() {
                        this.mode = 0;
                        this.last = !1;
                        this.wrap = 0;
                        this.havedict = !1;
                        this.total = this.check = this.dmax = this.flags = 0;
                        this.head = null;
                        this.wnext = this.whave = this.wsize = this.wbits = 0;
                        this.window = null;
                        this.extra = this.offset = this.length = this.bits = this.hold = 0;
                        this.distcode = this.lencode = null;
                        this.have = this.ndist = this.nlen = this.ncode = this.distbits = this.lenbits = 0;
                        this.next = null;
                        this.lens = new d.Buf16(320);
                        this.work =
                            new d.Buf16(288);
                        this.distdyn = this.lendyn = null;
                        this.was = this.back = this.sane = 0
                    }

                    function p(a) {
                        var e;
                        if (!a || !a.state)return y;
                        e = a.state;
                        a.total_in = a.total_out = e.total = 0;
                        a.msg = "";
                        e.wrap && (a.adler = e.wrap & 1);
                        e.mode = v;
                        e.last = 0;
                        e.havedict = 0;
                        e.dmax = 32768;
                        e.head = null;
                        e.hold = 0;
                        e.bits = 0;
                        e.lencode = e.lendyn = new d.Buf32(r);
                        e.distcode = e.distdyn = new d.Buf32(w);
                        e.sane = 1;
                        e.back = -1;
                        return t
                    }

                    function n(d) {
                        var a;
                        if (!d || !d.state)return y;
                        a = d.state;
                        a.wsize = 0;
                        a.whave = 0;
                        a.wnext = 0;
                        return p(d)
                    }

                    function g(d, a) {
                        var e, c;
                        if (!d || !d.state)return y;
                        c = d.state;
                        0 > a ? (e = 0, a = -a) : (e = (a >> 4) + 1, 48 > a && (a &= 15));
                        if (a && (8 > a || 15 < a))return y;
                        null !== c.window && c.wbits !== a && (c.window = null);
                        c.wrap = e;
                        c.wbits = a;
                        return n(d)
                    }

                    function h(d, a) {
                        var e;
                        if (!d)return y;
                        e = new f;
                        d.state = e;
                        e.window = null;
                        e = g(d, a);
                        e !== t && (d.state = null);
                        return e
                    }

                    var d = a("../utils/common"), e = a("./adler32"), s = a("./crc32"), m = a("./inffast"), x = a("./inftrees"), t = 0, y = -2, v = 1, r = 852, w = 592, u = !0, A, F;
                    b.inflateReset = n;
                    b.inflateReset2 = g;
                    b.inflateResetKeep = p;
                    b.inflateInit = function (d) {
                        return h(d,
                            15)
                    };
                    b.inflateInit2 = h;
                    b.inflate = function (a, c) {
                        var b, h, f, g, z, p, q, n, r, w, T, D, O, Z;
                        D = 0;
                        var C, V, $, ca, U, W = new d.Buf8(4), P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                        if (!a || !a.state || !a.output || !a.input && 0 !== a.avail_in)return y;
                        b = a.state;
                        12 === b.mode && (b.mode = 13);
                        z = a.next_out;
                        f = a.output;
                        q = a.avail_out;
                        g = a.next_in;
                        h = a.input;
                        p = a.avail_in;
                        n = b.hold;
                        r = b.bits;
                        w = p;
                        T = q;
                        U = t;
                        a:for (; ;)switch (b.mode) {
                            case v:
                                if (0 === b.wrap) {
                                    b.mode = 13;
                                    break
                                }
                                for (; 16 > r;) {
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                if (b.wrap & 2 && 35615 === n) {
                                    b.check =
                                        0;
                                    W[0] = n & 255;
                                    W[1] = n >>> 8 & 255;
                                    b.check = s(b.check, W, 2, 0);
                                    r = n = 0;
                                    b.mode = 2;
                                    break
                                }
                                b.flags = 0;
                                b.head && (b.head.done = !1);
                                if (!(b.wrap & 1) || (((n & 255) << 8) + (n >> 8)) % 31) {
                                    a.msg = "incorrect header check";
                                    b.mode = 30;
                                    break
                                }
                                if (8 !== (n & 15)) {
                                    a.msg = "unknown compression method";
                                    b.mode = 30;
                                    break
                                }
                                n >>>= 4;
                                r -= 4;
                                O = (n & 15) + 8;
                                if (0 === b.wbits) b.wbits = O; else if (O > b.wbits) {
                                    a.msg = "invalid window size";
                                    b.mode = 30;
                                    break
                                }
                                b.dmax = 1 << O;
                                a.adler = b.check = 1;
                                b.mode = n & 512 ? 10 : 12;
                                r = n = 0;
                                break;
                            case 2:
                                for (; 16 > r;) {
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                b.flags =
                                    n;
                                if (8 !== (b.flags & 255)) {
                                    a.msg = "unknown compression method";
                                    b.mode = 30;
                                    break
                                }
                                if (b.flags & 57344) {
                                    a.msg = "unknown header flags set";
                                    b.mode = 30;
                                    break
                                }
                                b.head && (b.head.text = n >> 8 & 1);
                                b.flags & 512 && (W[0] = n & 255, W[1] = n >>> 8 & 255, b.check = s(b.check, W, 2, 0));
                                r = n = 0;
                                b.mode = 3;
                            case 3:
                                for (; 32 > r;) {
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                b.head && (b.head.time = n);
                                b.flags & 512 && (W[0] = n & 255, W[1] = n >>> 8 & 255, W[2] = n >>> 16 & 255, W[3] = n >>> 24 & 255, b.check = s(b.check, W, 4, 0));
                                r = n = 0;
                                b.mode = 4;
                            case 4:
                                for (; 16 > r;) {
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r +=
                                        8
                                }
                                b.head && (b.head.xflags = n & 255, b.head.os = n >> 8);
                                b.flags & 512 && (W[0] = n & 255, W[1] = n >>> 8 & 255, b.check = s(b.check, W, 2, 0));
                                r = n = 0;
                                b.mode = 5;
                            case 5:
                                if (b.flags & 1024) {
                                    for (; 16 > r;) {
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r += 8
                                    }
                                    b.length = n;
                                    b.head && (b.head.extra_len = n);
                                    b.flags & 512 && (W[0] = n & 255, W[1] = n >>> 8 & 255, b.check = s(b.check, W, 2, 0));
                                    r = n = 0
                                } else b.head && (b.head.extra = null);
                                b.mode = 6;
                            case 6:
                                if (b.flags & 1024 && (D = b.length, D > p && (D = p), D && (b.head && (O = b.head.extra_len - b.length, b.head.extra || (b.head.extra = Array(b.head.extra_len)), d.arraySet(b.head.extra,
                                        h, g, D, O)), b.flags & 512 && (b.check = s(b.check, h, D, g)), p -= D, g += D, b.length -= D), b.length))break a;
                                b.length = 0;
                                b.mode = 7;
                            case 7:
                                if (b.flags & 2048) {
                                    if (0 === p)break a;
                                    D = 0;
                                    do O = h[g + D++], b.head && O && 65536 > b.length && (b.head.name += String.fromCharCode(O)); while (O && D < p);
                                    b.flags & 512 && (b.check = s(b.check, h, D, g));
                                    p -= D;
                                    g += D;
                                    if (O)break a
                                } else b.head && (b.head.name = null);
                                b.length = 0;
                                b.mode = 8;
                            case 8:
                                if (b.flags & 4096) {
                                    if (0 === p)break a;
                                    D = 0;
                                    do O = h[g + D++], b.head && O && 65536 > b.length && (b.head.comment += String.fromCharCode(O)); while (O && D <
                                    p);
                                    b.flags & 512 && (b.check = s(b.check, h, D, g));
                                    p -= D;
                                    g += D;
                                    if (O)break a
                                } else b.head && (b.head.comment = null);
                                b.mode = 9;
                            case 9:
                                if (b.flags & 512) {
                                    for (; 16 > r;) {
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r += 8
                                    }
                                    if (n !== (b.check & 65535)) {
                                        a.msg = "header crc mismatch";
                                        b.mode = 30;
                                        break
                                    }
                                    r = n = 0
                                }
                                b.head && (b.head.hcrc = b.flags >> 9 & 1, b.head.done = !0);
                                a.adler = b.check = 0;
                                b.mode = 12;
                                break;
                            case 10:
                                for (; 32 > r;) {
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                a.adler = b.check = k(n);
                                r = n = 0;
                                b.mode = 11;
                            case 11:
                                if (0 === b.havedict)return a.next_out = z, a.avail_out = q, a.next_in =
                                    g, a.avail_in = p, b.hold = n, b.bits = r, 2;
                                a.adler = b.check = 1;
                                b.mode = 12;
                            case 12:
                                if (5 === c || 6 === c)break a;
                            case 13:
                                if (b.last) {
                                    n >>>= r & 7;
                                    r -= r & 7;
                                    b.mode = 27;
                                    break
                                }
                                for (; 3 > r;) {
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                b.last = n & 1;
                                n >>>= 1;
                                r -= 1;
                                switch (n & 3) {
                                    case 0:
                                        b.mode = 14;
                                        break;
                                    case 1:
                                        D = b;
                                        if (u) {
                                            O = void 0;
                                            A = new d.Buf32(512);
                                            F = new d.Buf32(32);
                                            for (O = 0; 144 > O;)D.lens[O++] = 8;
                                            for (; 256 > O;)D.lens[O++] = 9;
                                            for (; 280 > O;)D.lens[O++] = 7;
                                            for (; 288 > O;)D.lens[O++] = 8;
                                            x(1, D.lens, 0, 288, A, 0, D.work, {bits: 9});
                                            for (O = 0; 32 > O;)D.lens[O++] = 5;
                                            x(2, D.lens,
                                                0, 32, F, 0, D.work, {bits: 5});
                                            u = !1
                                        }
                                        D.lencode = A;
                                        D.lenbits = 9;
                                        D.distcode = F;
                                        D.distbits = 5;
                                        b.mode = 20;
                                        if (6 === c) {
                                            n >>>= 2;
                                            r -= 2;
                                            break a
                                        }
                                        break;
                                    case 2:
                                        b.mode = 17;
                                        break;
                                    case 3:
                                        a.msg = "invalid block type", b.mode = 30
                                }
                                n >>>= 2;
                                r -= 2;
                                break;
                            case 14:
                                n >>>= r & 7;
                                for (r -= r & 7; 32 > r;) {
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                if ((n & 65535) !== (n >>> 16 ^ 65535)) {
                                    a.msg = "invalid stored block lengths";
                                    b.mode = 30;
                                    break
                                }
                                b.length = n & 65535;
                                r = n = 0;
                                b.mode = 15;
                                if (6 === c)break a;
                            case 15:
                                b.mode = 16;
                            case 16:
                                if (D = b.length) {
                                    D > p && (D = p);
                                    D > q && (D = q);
                                    if (0 === D)break a;
                                    d.arraySet(f,
                                        h, g, D, z);
                                    p -= D;
                                    g += D;
                                    q -= D;
                                    z += D;
                                    b.length -= D;
                                    break
                                }
                                b.mode = 12;
                                break;
                            case 17:
                                for (; 14 > r;) {
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                b.nlen = (n & 31) + 257;
                                n >>>= 5;
                                r -= 5;
                                b.ndist = (n & 31) + 1;
                                n >>>= 5;
                                r -= 5;
                                b.ncode = (n & 15) + 4;
                                n >>>= 4;
                                r -= 4;
                                if (286 < b.nlen || 30 < b.ndist) {
                                    a.msg = "too many length or distance symbols";
                                    b.mode = 30;
                                    break
                                }
                                b.have = 0;
                                b.mode = 18;
                            case 18:
                                for (; b.have < b.ncode;) {
                                    for (; 3 > r;) {
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r += 8
                                    }
                                    b.lens[P[b.have++]] = n & 7;
                                    n >>>= 3;
                                    r -= 3
                                }
                                for (; 19 > b.have;)b.lens[P[b.have++]] = 0;
                                b.lencode = b.lendyn;
                                b.lenbits = 7;
                                D = {bits: b.lenbits};
                                U = x(0, b.lens, 0, 19, b.lencode, 0, b.work, D);
                                b.lenbits = D.bits;
                                if (U) {
                                    a.msg = "invalid code lengths set";
                                    b.mode = 30;
                                    break
                                }
                                b.have = 0;
                                b.mode = 19;
                            case 19:
                                for (; b.have < b.nlen + b.ndist;) {
                                    for (; ;) {
                                        D = b.lencode[n & (1 << b.lenbits) - 1];
                                        C = D >>> 24;
                                        V = D >>> 16 & 255;
                                        $ = D & 65535;
                                        if (C <= r)break;
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r += 8
                                    }
                                    if (16 > $) n >>>= C, r -= C, b.lens[b.have++] = $; else {
                                        if (16 === $) {
                                            for (D = C + 2; r < D;) {
                                                if (0 === p)break a;
                                                p--;
                                                n += h[g++] << r;
                                                r += 8
                                            }
                                            n >>>= C;
                                            r -= C;
                                            if (0 === b.have) {
                                                a.msg = "invalid bit length repeat";
                                                b.mode = 30;
                                                break
                                            }
                                            O =
                                                b.lens[b.have - 1];
                                            D = 3 + (n & 3);
                                            n >>>= 2;
                                            r -= 2
                                        } else if (17 === $) {
                                            for (D = C + 3; r < D;) {
                                                if (0 === p)break a;
                                                p--;
                                                n += h[g++] << r;
                                                r += 8
                                            }
                                            n >>>= C;
                                            r -= C;
                                            O = 0;
                                            D = 3 + (n & 7);
                                            n >>>= 3;
                                            r -= 3
                                        } else {
                                            for (D = C + 7; r < D;) {
                                                if (0 === p)break a;
                                                p--;
                                                n += h[g++] << r;
                                                r += 8
                                            }
                                            n >>>= C;
                                            r -= C;
                                            O = 0;
                                            D = 11 + (n & 127);
                                            n >>>= 7;
                                            r -= 7
                                        }
                                        if (b.have + D > b.nlen + b.ndist) {
                                            a.msg = "invalid bit length repeat";
                                            b.mode = 30;
                                            break
                                        }
                                        for (; D--;)b.lens[b.have++] = O
                                    }
                                }
                                if (30 === b.mode)break;
                                if (0 === b.lens[256]) {
                                    a.msg = "invalid code -- missing end-of-block";
                                    b.mode = 30;
                                    break
                                }
                                b.lenbits = 9;
                                D = {bits: b.lenbits};
                                U = x(1, b.lens,
                                    0, b.nlen, b.lencode, 0, b.work, D);
                                b.lenbits = D.bits;
                                if (U) {
                                    a.msg = "invalid literal/lengths set";
                                    b.mode = 30;
                                    break
                                }
                                b.distbits = 6;
                                b.distcode = b.distdyn;
                                D = {bits: b.distbits};
                                U = x(2, b.lens, b.nlen, b.ndist, b.distcode, 0, b.work, D);
                                b.distbits = D.bits;
                                if (U) {
                                    a.msg = "invalid distances set";
                                    b.mode = 30;
                                    break
                                }
                                b.mode = 20;
                                if (6 === c)break a;
                            case 20:
                                b.mode = 21;
                            case 21:
                                if (6 <= p && 258 <= q) {
                                    a.next_out = z;
                                    a.avail_out = q;
                                    a.next_in = g;
                                    a.avail_in = p;
                                    b.hold = n;
                                    b.bits = r;
                                    m(a, T);
                                    z = a.next_out;
                                    f = a.output;
                                    q = a.avail_out;
                                    g = a.next_in;
                                    h = a.input;
                                    p = a.avail_in;
                                    n = b.hold;
                                    r = b.bits;
                                    12 === b.mode && (b.back = -1);
                                    break
                                }
                                for (b.back = 0; ;) {
                                    D = b.lencode[n & (1 << b.lenbits) - 1];
                                    C = D >>> 24;
                                    V = D >>> 16 & 255;
                                    $ = D & 65535;
                                    if (C <= r)break;
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                if (V && 0 === (V & 240)) {
                                    O = C;
                                    Z = V;
                                    for (ca = $; ;) {
                                        D = b.lencode[ca + ((n & (1 << O + Z) - 1) >> O)];
                                        C = D >>> 24;
                                        V = D >>> 16 & 255;
                                        $ = D & 65535;
                                        if (O + C <= r)break;
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r += 8
                                    }
                                    n >>>= O;
                                    r -= O;
                                    b.back += O
                                }
                                n >>>= C;
                                r -= C;
                                b.back += C;
                                b.length = $;
                                if (0 === V) {
                                    b.mode = 26;
                                    break
                                }
                                if (V & 32) {
                                    b.back = -1;
                                    b.mode = 12;
                                    break
                                }
                                if (V & 64) {
                                    a.msg = "invalid literal/length code";
                                    b.mode = 30;
                                    break
                                }
                                b.extra = V & 15;
                                b.mode = 22;
                            case 22:
                                if (b.extra) {
                                    for (D = b.extra; r < D;) {
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r += 8
                                    }
                                    b.length += n & (1 << b.extra) - 1;
                                    n >>>= b.extra;
                                    r -= b.extra;
                                    b.back += b.extra
                                }
                                b.was = b.length;
                                b.mode = 23;
                            case 23:
                                for (; ;) {
                                    D = b.distcode[n & (1 << b.distbits) - 1];
                                    C = D >>> 24;
                                    V = D >>> 16 & 255;
                                    $ = D & 65535;
                                    if (C <= r)break;
                                    if (0 === p)break a;
                                    p--;
                                    n += h[g++] << r;
                                    r += 8
                                }
                                if (0 === (V & 240)) {
                                    O = C;
                                    Z = V;
                                    for (ca = $; ;) {
                                        D = b.distcode[ca + ((n & (1 << O + Z) - 1) >> O)];
                                        C = D >>> 24;
                                        V = D >>> 16 & 255;
                                        $ = D & 65535;
                                        if (O + C <= r)break;
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r +=
                                            8
                                    }
                                    n >>>= O;
                                    r -= O;
                                    b.back += O
                                }
                                n >>>= C;
                                r -= C;
                                b.back += C;
                                if (V & 64) {
                                    a.msg = "invalid distance code";
                                    b.mode = 30;
                                    break
                                }
                                b.offset = $;
                                b.extra = V & 15;
                                b.mode = 24;
                            case 24:
                                if (b.extra) {
                                    for (D = b.extra; r < D;) {
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r += 8
                                    }
                                    b.offset += n & (1 << b.extra) - 1;
                                    n >>>= b.extra;
                                    r -= b.extra;
                                    b.back += b.extra
                                }
                                if (b.offset > b.dmax) {
                                    a.msg = "invalid distance too far back";
                                    b.mode = 30;
                                    break
                                }
                                b.mode = 25;
                            case 25:
                                if (0 === q)break a;
                                D = T - q;
                                if (b.offset > D) {
                                    D = b.offset - D;
                                    if (D > b.whave && b.sane) {
                                        a.msg = "invalid distance too far back";
                                        b.mode = 30;
                                        break
                                    }
                                    D >
                                    b.wnext ? (D -= b.wnext, O = b.wsize - D) : O = b.wnext - D;
                                    D > b.length && (D = b.length);
                                    Z = b.window
                                } else Z = f, O = z - b.offset, D = b.length;
                                D > q && (D = q);
                                q -= D;
                                b.length -= D;
                                do f[z++] = Z[O++]; while (--D);
                                0 === b.length && (b.mode = 21);
                                break;
                            case 26:
                                if (0 === q)break a;
                                f[z++] = b.length;
                                q--;
                                b.mode = 21;
                                break;
                            case 27:
                                if (b.wrap) {
                                    for (; 32 > r;) {
                                        if (0 === p)break a;
                                        p--;
                                        n |= h[g++] << r;
                                        r += 8
                                    }
                                    T -= q;
                                    a.total_out += T;
                                    b.total += T;
                                    T && (a.adler = b.check = b.flags ? s(b.check, f, T, z - T) : e(b.check, f, T, z - T));
                                    T = q;
                                    if ((b.flags ? n : k(n)) !== b.check) {
                                        a.msg = "incorrect data check";
                                        b.mode =
                                            30;
                                        break
                                    }
                                    r = n = 0
                                }
                                b.mode = 28;
                            case 28:
                                if (b.wrap && b.flags) {
                                    for (; 32 > r;) {
                                        if (0 === p)break a;
                                        p--;
                                        n += h[g++] << r;
                                        r += 8
                                    }
                                    if (n !== (b.total & 4294967295)) {
                                        a.msg = "incorrect length check";
                                        b.mode = 30;
                                        break
                                    }
                                    r = n = 0
                                }
                                b.mode = 29;
                            case 29:
                                U = 1;
                                break a;
                            case 30:
                                U = -3;
                                break a;
                            case 31:
                                return -4;
                            default:
                                return y
                        }
                        a.next_out = z;
                        a.avail_out = q;
                        a.next_in = g;
                        a.avail_in = p;
                        b.hold = n;
                        b.bits = r;
                        if (b.wsize || T !== a.avail_out && 30 > b.mode && (27 > b.mode || 4 !== c)) h = a.output, g = a.next_out, z = T - a.avail_out, q = a.state, null === q.window && (q.wsize = 1 << q.wbits, q.wnext = 0, q.whave =
                            0, q.window = new d.Buf8(q.wsize)), z >= q.wsize ? (d.arraySet(q.window, h, g - q.wsize, q.wsize, 0), q.wnext = 0, q.whave = q.wsize) : (p = q.wsize - q.wnext, p > z && (p = z), d.arraySet(q.window, h, g - z, p, q.wnext), (z -= p) ? (d.arraySet(q.window, h, g - z, z, 0), q.wnext = z, q.whave = q.wsize) : (q.wnext += p, q.wnext === q.wsize && (q.wnext = 0), q.whave < q.wsize && (q.whave += p)));
                        w -= a.avail_in;
                        T -= a.avail_out;
                        a.total_in += w;
                        a.total_out += T;
                        b.total += T;
                        b.wrap && T && (a.adler = b.check = b.flags ? s(b.check, f, T, a.next_out - T) : e(b.check, f, T, a.next_out - T));
                        a.data_type = b.bits +
                            (b.last ? 64 : 0) + (12 === b.mode ? 128 : 0) + (20 === b.mode || 15 === b.mode ? 256 : 0);
                        (0 === w && 0 === T || 4 === c) && U === t && (U = -5);
                        return U
                    };
                    b.inflateEnd = function (a) {
                        if (!a || !a.state)return y;
                        var d = a.state;
                        d.window && (d.window = null);
                        a.state = null;
                        return t
                    };
                    b.inflateGetHeader = function (a, d) {
                        var b;
                        if (!a || !a.state)return y;
                        b = a.state;
                        if (0 === (b.wrap & 2))return y;
                        b.head = d;
                        d.done = !1;
                        return t
                    };
                    b.inflateInfo = "pako inflate (from Nodeca project)"
                }, {"../utils/common": 2, "./adler32": 4, "./crc32": 6, "./inffast": 8, "./inftrees": 10}],
                10: [function (a,
                               c, b) {
                    var k = a("../utils/common"), f = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], p = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], n = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], g = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                    c.exports = function (a, d, b, c, m, x, t, y) {
                        for (var v = y.bits, r = 0, w =
                            0, u = 0, A = 0, F = 0, B = 0, E = 0, H = 0, I = 0, Q = 0, N, z, Y = null, R = 0, J, G = new k.Buf16(16), B = new k.Buf16(16), ba = null, T = 0, D, O, Z, r = 0; 15 >= r; r++)G[r] = 0;
                        for (w = 0; w < c; w++)G[d[b + w]]++;
                        F = v;
                        for (A = 15; 1 <= A && 0 === G[A]; A--);
                        F > A && (F = A);
                        if (0 === A)return m[x++] = 20971520, m[x++] = 20971520, y.bits = 1, 0;
                        for (u = 1; u < A && 0 === G[u]; u++);
                        F < u && (F = u);
                        for (r = H = 1; 15 >= r; r++)if (H <<= 1, H -= G[r], 0 > H)return -1;
                        if (0 < H && (0 === a || 1 !== A))return -1;
                        B[1] = 0;
                        for (r = 1; 15 > r; r++)B[r + 1] = B[r] + G[r];
                        for (w = 0; w < c; w++)0 !== d[b + w] && (t[B[d[b + w]]++] = w);
                        switch (a) {
                            case 0:
                                Y = ba = t;
                                J = 19;
                                break;
                            case 1:
                                Y =
                                    f;
                                R -= 257;
                                ba = p;
                                T -= 257;
                                J = 256;
                                break;
                            default:
                                Y = n, ba = g, J = -1
                        }
                        w = Q = 0;
                        r = u;
                        v = x;
                        B = F;
                        E = 0;
                        z = -1;
                        I = 1 << F;
                        c = I - 1;
                        if (1 === a && 852 < I || 2 === a && 592 < I)return 1;
                        for (var C = 0; ;) {
                            C++;
                            D = r - E;
                            t[w] < J ? (O = 0, Z = t[w]) : t[w] > J ? (O = ba[T + t[w]], Z = Y[R + t[w]]) : (O = 96, Z = 0);
                            H = 1 << r - E;
                            u = N = 1 << B;
                            do N -= H, m[v + (Q >> E) + N] = D << 24 | O << 16 | Z | 0; while (0 !== N);
                            for (H = 1 << r - 1; Q & H;)H >>= 1;
                            0 !== H ? (Q &= H - 1, Q += H) : Q = 0;
                            w++;
                            if (0 === --G[r]) {
                                if (r === A)break;
                                r = d[b + t[w]]
                            }
                            if (r > F && (Q & c) !== z) {
                                0 === E && (E = F);
                                v += u;
                                B = r - E;
                                for (H = 1 << B; B + E < A;) {
                                    H -= G[B + E];
                                    if (0 >= H)break;
                                    B++;
                                    H <<= 1
                                }
                                I += 1 << B;
                                if (1 === a &&
                                    852 < I || 2 === a && 592 < I)return 1;
                                z = Q & c;
                                m[z] = F << 24 | B << 16 | v - x | 0
                            }
                        }
                        0 !== Q && (m[v + Q] = r - E << 24 | 4194304);
                        y.bits = F;
                        return 0
                    }
                }, {"../utils/common": 2}],
                11: [function (a, c, b) {
                    c.exports = {
                        2: "need dictionary",
                        1: "stream end",
                        0: "",
                        "-1": "file error",
                        "-2": "stream error",
                        "-3": "data error",
                        "-4": "insufficient memory",
                        "-5": "buffer error",
                        "-6": "incompatible version"
                    }
                }, {}],
                12: [function (a, c, b) {
                    c.exports = function () {
                        this.input = null;
                        this.total_in = this.avail_in = this.next_in = 0;
                        this.output = null;
                        this.total_out = this.avail_out = this.next_out =
                            0;
                        this.msg = "";
                        this.state = null;
                        this.data_type = 2;
                        this.adler = 0
                    }
                }, {}]
            }, {}, [1])(1)
        });
        return {
            inflate: function (l, a) {
                return f.inflateRaw(l)
            }
        }
    }()
})();
core.StepDirection = {PREVIOUS: 1, NEXT: 2};
core.StepIterator = function (f, l) {
    function a() {
        d = null;
        s = e = void 0
    }

    function c() {
        void 0 === s && (s = f.acceptPosition(l) === g);
        return s
    }

    function b(d, b) {
        a();
        return l.setUnfilteredPosition(d, b)
    }

    function k() {
        d || (d = l.container());
        return d
    }

    function q() {
        void 0 === e && (e = l.unfilteredDomOffset());
        return e
    }

    function p() {
        for (a(); l.nextPosition();)if (a(), c())return !0;
        return !1
    }

    function n() {
        for (a(); l.previousPosition();)if (a(), c())return !0;
        return !1
    }

    var g = core.PositionFilter.FilterResult.FILTER_ACCEPT, h = core.StepDirection.NEXT,
        d, e, s;
    this.isStep = c;
    this.setPosition = b;
    this.container = k;
    this.offset = q;
    this.nextStep = p;
    this.previousStep = n;
    this.advanceStep = function (a) {
        return a === h ? p() : n()
    };
    this.roundToClosestStep = function () {
        var a, d, e = c();
        e || (a = k(), d = q(), e = n(), e || (b(a, d), e = p()));
        return e
    };
    this.roundToPreviousStep = function () {
        var a = c();
        a || (a = n());
        return a
    };
    this.roundToNextStep = function () {
        var a = c();
        a || (a = p());
        return a
    };
    this.leftNode = function () {
        return l.leftNode()
    };
    this.snapshot = function () {
        return new core.StepIterator.StepSnapshot(k(),
            q())
    };
    this.restore = function (a) {
        b(a.container, a.offset)
    }
};
core.StepIterator.StepSnapshot = function (f, l) {
    this.container = f;
    this.offset = l
};
core.Utils = function () {
    function f(l, a) {
        if (a && Array.isArray(a)) {
            l = l || [];
            if (!Array.isArray(l))throw"Destination is not an array.";
            l = l.concat(a.map(function (a) {
                return f(null, a)
            }))
        } else if (a && "object" === typeof a) {
            l = l || {};
            if ("object" !== typeof l)throw"Destination is not an object.";
            Object.keys(a).forEach(function (c) {
                l[c] = f(l[c], a[c])
            })
        } else l = a;
        return l
    }

    this.hashString = function (f) {
        var a = 0, c, b;
        c = 0;
        for (b = f.length; c < b; c += 1)a = (a << 5) - a + f.charCodeAt(c), a |= 0;
        return a
    };
    this.mergeObjects = function (l, a) {
        Object.keys(a).forEach(function (c) {
            l[c] =
                f(l[c], a[c])
        });
        return l
    }
};
core.Zip = function (f, l) {
    function a(a, d, b) {
        x ? b(null, x.subarray(a, a + d)) : b("File data not loaded", null)
    }

    function c(a) {
        var d = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
            1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878,
            1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068,
            1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842,
            628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896,
            3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], b, e, c = a.length, h = 0, h = 0;
        b = -1;
        for (e = 0; e < c; e += 1)h = (b ^ a[e]) & 255, h = d[h], b = b >>> 8 ^ h;
        return b ^ -1
    }

    function b(a) {
        return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 15,
            a >> 5 & 63, (a & 31) << 1)
    }

    function k(a) {
        var d = a.getFullYear();
        return 1980 > d ? 0 : d - 1980 << 25 | a.getMonth() + 1 << 21 | a.getDate() << 16 | a.getHours() << 11 | a.getMinutes() << 5 | a.getSeconds() >> 1
    }

    function q(d, e) {
        var c, h, m, g, s, f, k, p = this;
        this.load = function (b) {
            if (null !== p.data) b(null, p.data); else {
                var e = s + 34 + h + m + 256;
                e + k > t && (e = t - k);
                a(k, e, function (a, e) {
                    if (a || null === e) b(a, e); else a:{
                        var c = e, h = new core.ByteArray(c), m = h.readUInt32LE(), k;
                        if (67324752 !== m) b("File entry signature is wrong." + m.toString() + " " + c.length.toString(), null);
                        else {
                            h.pos += 22;
                            m = h.readUInt16LE();
                            k = h.readUInt16LE();
                            h.pos += m + k;
                            if (g) {
                                c = c.subarray(h.pos, h.pos + s);
                                if (s !== c.length) {
                                    b("The amount of compressed bytes read was " + c.length.toString() + " instead of " + s.toString() + " for " + p.filename + " in " + d + ".", null);
                                    break a
                                }
                                c = v(c, f)
                            } else c = c.subarray(h.pos, h.pos + f);
                            f !== c.length ? b("The amount of bytes read was " + c.length.toString() + " instead of " + f.toString() + " for " + p.filename + " in " + d + ".", null) : (p.data = c, b(null, c))
                        }
                    }
                })
            }
        };
        this.set = function (a, d, b, e) {
            p.filename = a;
            p.data =
                d;
            p.compressed = b;
            p.date = e
        };
        this.error = null;
        e && (c = e.readUInt32LE(), 33639248 !== c ? this.error = "Central directory entry has wrong signature at position " + (e.pos - 4).toString() + ' for file "' + d + '": ' + e.data.length.toString() : (e.pos += 6, g = e.readUInt16LE(), this.date = b(e.readUInt32LE()), e.readUInt32LE(), s = e.readUInt32LE(), f = e.readUInt32LE(), h = e.readUInt16LE(), m = e.readUInt16LE(), c = e.readUInt16LE(), e.pos += 8, k = e.readUInt32LE(), this.filename = runtime.byteArrayToString(e.data.subarray(e.pos, e.pos + h), "utf8"), this.data =
                null, e.pos += h + m + c))
    }

    function p(d, b) {
        if (22 !== d.length) b("Central directory length should be 22.", r); else {
            var e = new core.ByteArray(d), c;
            c = e.readUInt32LE();
            101010256 !== c ? b("Central directory signature is wrong: " + c.toString(), r) : (c = e.readUInt16LE(), 0 !== c ? b("Zip files with non-zero disk numbers are not supported.", r) : (c = e.readUInt16LE(), 0 !== c ? b("Zip files with non-zero disk numbers are not supported.", r) : (c = e.readUInt16LE(), y = e.readUInt16LE(), c !== y ? b("Number of entries is inconsistent.", r) : (c = e.readUInt32LE(),
                                e = e.readUInt16LE(), e = t - 22 - c, a(e, t - e, function (a, d) {
                                if (a || null === d) b(a, r); else a:{
                                    var e = new core.ByteArray(d), c, h;
                                    m = [];
                                    for (c = 0; c < y; c += 1) {
                                        h = new q(f, e);
                                        if (h.error) {
                                            b(h.error, r);
                                            break a
                                        }
                                        m[m.length] = h
                                    }
                                    b(null, r)
                                }
                            })))))
        }
    }

    function n(a, d) {
        var b = null, e, c;
        for (c = 0; c < m.length; c += 1)if (e = m[c], e.filename === a) {
            b = e;
            break
        }
        b ? b.data ? d(null, b.data) : b.load(d) : d(a + " not found.", null)
    }

    function g(a) {
        var d = new core.ByteArrayWriter("utf8"), b = 0;
        d.appendArray([80, 75, 3, 4, 20, 0, 0, 0, 0, 0]);
        a.data && (b = a.data.length);
        d.appendUInt32LE(k(a.date));
        d.appendUInt32LE(a.data ? c(a.data) : 0);
        d.appendUInt32LE(b);
        d.appendUInt32LE(b);
        d.appendUInt16LE(a.filename.length);
        d.appendUInt16LE(0);
        d.appendString(a.filename);
        a.data && d.appendByteArray(a.data);
        return d
    }

    function h(a, d) {
        var b = new core.ByteArrayWriter("utf8"), e = 0;
        b.appendArray([80, 75, 1, 2, 20, 0, 20, 0, 0, 0, 0, 0]);
        a.data && (e = a.data.length);
        b.appendUInt32LE(k(a.date));
        b.appendUInt32LE(a.data ? c(a.data) : 0);
        b.appendUInt32LE(e);
        b.appendUInt32LE(e);
        b.appendUInt16LE(a.filename.length);
        b.appendArray([0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0]);
        b.appendUInt32LE(d);
        b.appendString(a.filename);
        return b
    }

    function d(a, b) {
        if (a === m.length) b(null); else {
            var e = m[a];
            null !== e.data ? d(a + 1, b) : e.load(function (e) {
                    e ? b(e) : d(a + 1, b)
                })
        }
    }

    function e(a, b) {
        d(0, function (d) {
            if (d) b(d); else {
                var e, c, s = new core.ByteArrayWriter("utf8"), f = [0];
                for (e = 0; e < m.length; e += 1)s.appendByteArrayWriter(g(m[e])), f.push(s.getLength());
                d = s.getLength();
                for (e = 0; e < m.length; e += 1)c = m[e], s.appendByteArrayWriter(h(c, f[e]));
                e = s.getLength() - d;
                s.appendArray([80, 75, 5, 6, 0, 0, 0, 0]);
                s.appendUInt16LE(m.length);
                s.appendUInt16LE(m.length);
                s.appendUInt32LE(e);
                s.appendUInt32LE(d);
                s.appendArray([0, 0]);
                a(s.getByteArray())
            }
        })
    }

    function s(a, d) {
        e(function (b) {
            runtime.writeFile(a, b, function (a) {
                a || (x = b, t = x.length);
                d(a)
            })
        }, d)
    }

    var m, x, t, y, v = core.RawInflate.inflate, r = this, w = new core.Base64;
    this.load = n;
    this.save = function (a, d, b, e) {
        var c, h;
        for (c = 0; c < m.length; c += 1)if (h = m[c], h.filename === a) {
            h.set(a, d, b, e);
            return
        }
        h = new q(f);
        h.set(a, d, b, e);
        m.push(h)
    };
    this.remove = function (a) {
        var d, b;
        for (d = 0; d < m.length; d += 1)if (b = m[d], b.filename ===
            a)return m.splice(d, 1), !0;
        return !1
    };
    this.write = function (a) {
        s(f, a)
    };
    this.writeAs = s;
    this.createByteArray = e;
    this.loadContentXmlAsFragments = function (a, d) {
        r.loadAsString(a, function (a, b) {
            if (a)return d.rootElementReady(a);
            d.rootElementReady(null, b, !0)
        })
    };
    this.loadAsString = function (a, d) {
        n(a, function (a, b) {
            if (a || null === b)return d(a, null);
            var e = runtime.byteArrayToString(b, "utf8");
            d(null, e)
        })
    };
    this.loadAsDOM = function (a, d) {
        r.loadAsString(a, function (a, b) {
            if (a || null === b) d(a, null); else {
                var e = (new DOMParser).parseFromString(b,
                    "text/xml");
                d(null, e)
            }
        })
    };
    this.loadAsDataURL = function (a, d, b) {
        n(a, function (a, e) {
            if (a || !e)return b(a, null);
            var c = 0, h;
            d || (d = 80 === e[1] && 78 === e[2] && 71 === e[3] ? "image/png" : 255 === e[0] && 216 === e[1] && 255 === e[2] ? "image/jpeg" : 71 === e[0] && 73 === e[1] && 70 === e[2] ? "image/gif" : "");
            for (h = "data:" + d + ";base64,"; c < e.length;)h += w.convertUTF8ArrayToBase64(e.subarray(c, Math.min(c + 45E3, e.length))), c += 45E3;
            b(null, h)
        })
    };
    this.getEntries = function () {
        return m.slice()
    };
    t = -1;
    null === l ? m = [] : runtime.readFile(f, "binary", function (d, b) {
            "string" === typeof b && (d = "file was read as a string. Should be Uint8Array.");
            d || !b || 0 === b.length ? l("File '" + f + "' cannot be read. Err: " + (d || "[none]"), r) : (x = b, t = x.length, a(t - 22, 22, function (a, d) {
                    a || null === d ? l(a, r) : p(d, l)
                }))
        })
};
core.SimpleClientRect = null;
gui.CommonConstraints = {EDIT: {ANNOTATIONS: {ONLY_DELETE_OWN: "onlyDeleteOwn"}, REVIEW_MODE: "reviewMode"}};
gui.SessionConstraints = function () {
    function f(c) {
        l.hasOwnProperty(c) || (l[c] = !1, a.register(c))
    }

    var l = {}, a = new core.EventNotifier;
    this.registerConstraint = f;
    this.subscribe = function (c, b) {
        f(c);
        a.subscribe(c, b)
    };
    this.unsubscribe = function (c, b) {
        a.unsubscribe(c, b)
    };
    this.setState = function (c, b) {
        runtime.assert(!0 === l.hasOwnProperty(c), "No such constraint");
        l[c] !== b && (l[c] = b, a.emit(c, b))
    };
    this.getState = function (a) {
        runtime.assert(!0 === l.hasOwnProperty(a), "No such constraint");
        return l[a]
    }
};
gui.BlacklistNamespaceNodeFilter = function (f) {
    var l = {}, a = NodeFilter.FILTER_REJECT, c = NodeFilter.FILTER_ACCEPT;
    this.acceptNode = function (b) {
        return !b || l.hasOwnProperty(b.namespaceURI) ? a : c
    };
    (function () {
        f.forEach(function (a) {
            l[a] = !0
        })
    })()
};
odf.Namespaces = {
    namespaceMap: {
        config: "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
        db: "urn:oasis:names:tc:opendocument:xmlns:database:1.0",
        dc: "http://purl.org/dc/elements/1.1/",
        dr3d: "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
        draw: "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
        chart: "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
        fo: "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
        form: "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
        math: "http://www.w3.org/1998/Math/MathML",
        meta: "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
        number: "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
        office: "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
        presentation: "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
        style: "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
        svg: "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
        table: "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
        text: "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
        xforms: "http://www.w3.org/2002/xforms",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    },
    prefixMap: {},
    configns: "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
    dbns: "urn:oasis:names:tc:opendocument:xmlns:database:1.0",
    dcns: "http://purl.org/dc/elements/1.1/",
    dr3dns: "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
    drawns: "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    chartns: "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
    fons: "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    formns: "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
    mathns: "http://www.w3.org/1998/Math/MathML",
    metans: "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
    numberns: "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    officens: "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    presentationns: "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
    stylens: "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    svgns: "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    tablens: "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    textns: "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    xformsns: "http://www.w3.org/2002/xforms",
    xlinkns: "http://www.w3.org/1999/xlink",
    xmlns: "http://www.w3.org/XML/1998/namespace"
};
(function () {
    var f = odf.Namespaces.namespaceMap, l = odf.Namespaces.prefixMap, a;
    for (a in f)f.hasOwnProperty(a) && (l[f[a]] = a)
})();
odf.Namespaces.forEachPrefix = function (f) {
    var l = odf.Namespaces.namespaceMap, a;
    for (a in l)l.hasOwnProperty(a) && f(a, l[a])
};
odf.Namespaces.lookupNamespaceURI = function (f) {
    var l = null;
    odf.Namespaces.namespaceMap.hasOwnProperty(f) && (l = odf.Namespaces.namespaceMap[f]);
    return l
};
odf.Namespaces.lookupPrefix = function (f) {
    var l = odf.Namespaces.prefixMap;
    return l.hasOwnProperty(f) ? l[f] : null
};
odf.Namespaces.lookupNamespaceURI.lookupNamespaceURI = odf.Namespaces.lookupNamespaceURI;
(function () {
    odf.OdfSchemaImpl = function () {
        var f = [["config:config-item", "uncategorized"], ["form:item", "object"], ["form:option", "uncategorized"], ["math:math", "field"], ["meta:user-defined", "uncategorized"], ["number:currency-symbol", "uncategorized"], ["number:embedded-text", "uncategorized"], ["number:text", "uncategorized"], ["presentation:date-time-decl", "uncategorized"], ["presentation:footer-decl", "uncategorized"], ["presentation:header-decl", "uncategorized"], ["svg:desc", "text"], ["svg:title", "text"], ["table:desc",
            "uncategorized"], ["table:title", "uncategorized"], ["text:a", "text"], ["text:author-initials", "field"], ["text:author-name", "field"], ["text:bibliography-mark", "field"], ["text:bookmark-ref", "field"], ["text:chapter", "field"], ["text:character-count", "field"], ["text:conditional-text", "field"], ["text:creation-date", "field"], ["text:creation-time", "field"], ["text:creator", "field"], ["text:database-display", "field"], ["text:database-name", "field"], ["text:database-row-number", "field"], ["text:date", "field"], ["text:dde-connection",
            "field"], ["text:description", "field"], ["text:editing-cycles", "field"], ["text:editing-duration", "field"], ["text:execute-macro", "uncategorized"], ["text:expression", "uncategorized"], ["text:file-name", "field"], ["text:h", "text"], ["text:hidden-paragraph", "text"], ["text:hidden-text", "text"], ["text:image-count", "field"], ["text:index-entry-span", "uncategorized"], ["text:index-title-template", "uncategorized"], ["text:initial-creator", "field"], ["text:keywords", "field"], ["text:linenumbering-separator", "style"],
            ["text:measure", "uncategorized"], ["text:meta", "uncategorized"], ["text:meta-field", "uncategorized"], ["text:modification-date", "field"], ["text:modification-time", "field"], ["text:note-citation", "field"], ["text:note-continuation-notice-backward", "style"], ["text:note-continuation-notice-forward", "style"], ["text:note-ref", "field"], ["text:object-count", "field"], ["text:p", "text"], ["text:page-continuation", "uncategorized"], ["text:page-count", "field"], ["text:page-number", "field"], ["text:page-variable-get",
                "field"], ["text:page-variable-set", "field"], ["text:paragraph-count", "field"], ["text:placeholder", "field"], ["text:print-date", "field"], ["text:print-time", "field"], ["text:printed-by", "field"], ["text:reference-ref", "field"], ["text:ruby-base", "text"], ["text:ruby-text", "text"], ["text:script", "text"], ["text:sender-city", "field"], ["text:sender-company", "field"], ["text:sender-country", "field"], ["text:sender-email", "field"], ["text:sender-fax", "field"], ["text:sender-firstname", "field"], ["text:sender-initials",
                "field"], ["text:sender-lastname", "field"], ["text:sender-phone-private", "field"], ["text:sender-phone-work", "field"], ["text:sender-position", "field"], ["text:sender-postal-code", "field"], ["text:sender-state-or-province", "field"], ["text:sender-street", "field"], ["text:sender-title", "field"], ["text:sequence", "uncategorized"], ["text:sequence-ref", "uncategorized"], ["text:sheet-name", "uncategorized"], ["text:span", "text"], ["text:subject", "field"], ["text:table-count", "field"], ["text:table-formula", "deprecated"],
            ["text:template-name", "uncategorized"], ["text:text-input", "field"], ["text:time", "field"], ["text:title", "field"], ["text:user-defined", "field"], ["text:user-field-get", "field"], ["text:user-field-input", "field"], ["text:variable-get", "field"], ["text:variable-input", "field"], ["text:variable-set", "field"], ["text:word-count", "field"], ["xforms:model", "uncategorized"]], l = {};
        this.isTextContainer = function (a, c) {
            return "text" === l[a + ":" + c]
        };
        this.isField = function (a, c) {
            return "field" === l[a + ":" + c]
        };
        this.getFields = function () {
            return f.filter(function (a) {
                return "field" ===
                    a[1]
            }).map(function (a) {
                return a[0]
            })
        };
        (function () {
            f.forEach(function (a) {
                var c = a[1], b = a[0].split(":");
                a = b[0];
                var b = b[1], f = odf.Namespaces.lookupNamespaceURI(a);
                f ? l[f + ":" + b] = c : runtime.log("DEBUG: OdfSchema - unknown prefix '" + a + "'")
            })
        })()
    };
    odf.OdfSchema = new odf.OdfSchemaImpl
})();
odf.OdfUtilsImpl = function () {
    function f(a) {
        return "image" === (a && a.localName) && a.namespaceURI === R
    }

    function l(a) {
        return null !== a && a.nodeType === Node.ELEMENT_NODE && "frame" === a.localName && a.namespaceURI === R && "as-char" === a.getAttributeNS(Y, "anchor-type")
    }

    function a(a) {
        var d;
        (d = "annotation" === (a && a.localName) && a.namespaceURI === odf.Namespaces.officens) || (d = "div" === (a && a.localName) && "annotationWrapper" === a.className);
        return d
    }

    function c(a) {
        return "a" === (a && a.localName) && a.namespaceURI === Y
    }

    function b(a) {
        var d =
            a && a.localName;
        return ("p" === d || "h" === d) && a.namespaceURI === Y
    }

    function k(a, d) {
        for (a && void 0 !== d && !b(a) && a.childNodes.item(d) && (a = a.childNodes.item(d)); a && !b(a);)a = a.parentNode;
        return a
    }

    function q(a, d) {
        for (; a && a !== d;) {
            if (a.namespaceURI === odf.Namespaces.officens && "annotation" === a.localName)return a;
            a = a.parentNode
        }
        return null
    }

    function p(a) {
        return /^[ \t\r\n]+$/.test(a)
    }

    function n(a) {
        if (null === a || a.nodeType !== Node.ELEMENT_NODE)return !1;
        var d = a.localName;
        return T.isTextContainer(a.namespaceURI, d) || "span" ===
            d && "webodf-annotationHighlight" === a.className
    }

    function g(a) {
        return null === a || a.nodeType !== Node.ELEMENT_NODE ? !1 : T.isField(a.namespaceURI, a.localName)
    }

    function h(a) {
        var d = a && a.localName, b = !1;
        d && (a = a.namespaceURI, a === Y && (b = "s" === d || "tab" === d || "line-break" === d));
        return b
    }

    function d(d) {
        return h(d) || g(d) || l(d) || a(d)
    }

    function e(a) {
        var d = a && a.localName, b = !1;
        d && (a = a.namespaceURI, a === Y && (b = "s" === d));
        return b
    }

    function s(a) {
        return -1 !== ba.indexOf(a.namespaceURI)
    }

    function m(a) {
        if (h(a) || g(a))return !1;
        if (n(a.parentNode) &&
            a.nodeType === Node.TEXT_NODE)return 0 === a.textContent.length;
        for (a = a.firstChild; a;) {
            if (s(a) || !m(a))return !1;
            a = a.nextSibling
        }
        return !0
    }

    function x(a) {
        for (; null !== a.firstChild && n(a);)a = a.firstChild;
        return a
    }

    function t(a) {
        for (; null !== a.lastChild && n(a);)a = a.lastChild;
        return a
    }

    function y(a) {
        for (; !b(a) && null === a.previousSibling;)a = a.parentNode;
        return b(a) ? null : t(a.previousSibling)
    }

    function v(a) {
        for (; !b(a) && null === a.nextSibling;)a = a.parentNode;
        return b(a) ? null : x(a.nextSibling)
    }

    function r(a) {
        for (var b = !1; a;)if (a.nodeType ===
            Node.TEXT_NODE)if (0 === a.length) a = y(a); else return !p(a.data.substr(a.length - 1, 1)); else d(a) ? (b = !1 === e(a), a = null) : a = y(a);
        return b
    }

    function w(a) {
        var b = !1, e;
        for (a = a && x(a); a;) {
            e = a.nodeType === Node.TEXT_NODE ? a.length : 0;
            if (0 < e && !p(a.data)) {
                b = !0;
                break
            }
            if (d(a)) {
                b = !0;
                break
            }
            a = v(a)
        }
        return b
    }

    function u(a, d) {
        return p(a.data.substr(d)) ? !w(v(a)) : !1
    }

    function A(a, b) {
        var e = a.data, c;
        if (!p(e[b]) || d(a.parentNode))return !1;
        0 < b ? p(e[b - 1]) || (c = !0) : r(y(a)) && (c = !0);
        return !0 === c ? u(a, b) ? !1 : !0 : !1
    }

    function F(a) {
        return (a = /(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px)|(%))/.exec(a)) ?
            {value: parseFloat(a[1]), unit: a[3]} : null
    }

    function B(a) {
        return (a = F(a)) && (0 > a.value || "%" === a.unit) ? null : a
    }

    function E(a) {
        return (a = F(a)) && "%" !== a.unit ? null : a
    }

    function H(a) {
        switch (a.namespaceURI) {
            case odf.Namespaces.drawns:
            case odf.Namespaces.svgns:
            case odf.Namespaces.dr3dns:
                return !1;
            case odf.Namespaces.textns:
                switch (a.localName) {
                    case "note-body":
                    case "ruby-text":
                        return !1
                }
                break;
            case odf.Namespaces.officens:
                switch (a.localName) {
                    case "annotation":
                    case "binary-data":
                    case "event-listeners":
                        return !1
                }
                break;
            default:
                switch (a.localName) {
                    case "cursor":
                    case "editinfo":
                        return !1
                }
        }
        return !0
    }

    function I(a, d) {
        for (; 0 < d.length && !G.rangeContainsNode(a, d[0]);)d.shift();
        for (; 0 < d.length && !G.rangeContainsNode(a, d[d.length - 1]);)d.pop()
    }

    function Q(b, e, c) {
        var m;
        m = G.getNodesInRange(b, function (b) {
                var e = NodeFilter.FILTER_REJECT;
                if (h(b.parentNode) || g(b.parentNode) || a(b)) e = NodeFilter.FILTER_REJECT; else if (b.nodeType === Node.TEXT_NODE) {
                    if (c || Boolean(k(b) && (!p(b.textContent) || A(b, 0)))) e = NodeFilter.FILTER_ACCEPT
                } else if (d(b)) e = NodeFilter.FILTER_ACCEPT; else if (H(b) || n(b)) e = NodeFilter.FILTER_SKIP;
                return e
            },
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        e || I(b, m);
        return m
    }

    function N(d, b, e) {
        for (; d;) {
            if (e(d)) {
                b[0] !== d && b.unshift(d);
                break
            }
            if (a(d))break;
            d = d.parentNode
        }
    }

    function z(a, d) {
        var b = a;
        if (d < b.childNodes.length - 1) b = b.childNodes[d + 1]; else {
            for (; !b.nextSibling;)b = b.parentNode;
            b = b.nextSibling
        }
        for (; b.firstChild;)b = b.firstChild;
        return b
    }

    var Y = odf.Namespaces.textns, R = odf.Namespaces.drawns, J = odf.Namespaces.xlinkns, G = core.DomUtils, ba = [odf.Namespaces.dbns, odf.Namespaces.dcns, odf.Namespaces.dr3dns, odf.Namespaces.drawns,
        odf.Namespaces.chartns, odf.Namespaces.formns, odf.Namespaces.numberns, odf.Namespaces.officens, odf.Namespaces.presentationns, odf.Namespaces.stylens, odf.Namespaces.svgns, odf.Namespaces.tablens, odf.Namespaces.textns], T = odf.OdfSchema;
    this.isImage = f;
    this.isCharacterFrame = l;
    this.isInlineRoot = a;
    this.isTextSpan = function (a) {
        return "span" === (a && a.localName) && a.namespaceURI === Y
    };
    this.isHyperlink = c;
    this.getHyperlinkTarget = function (a) {
        return a.getAttributeNS(J, "href") || ""
    };
    this.isParagraph = b;
    this.getParagraphElement =
        k;
    this.getParentAnnotation = q;
    this.isWithinAnnotation = function (a, d) {
        return Boolean(q(a, d))
    };
    this.getAnnotationCreator = function (a) {
        return a.getElementsByTagNameNS(odf.Namespaces.dcns, "creator")[0].textContent
    };
    this.isListItem = function (a) {
        return "list-item" === (a && a.localName) && a.namespaceURI === Y
    };
    this.isLineBreak = function (a) {
        return "line-break" === (a && a.localName) && a.namespaceURI === Y
    };
    this.isODFWhitespace = p;
    this.isGroupingElement = n;
    this.isFieldElement = g;
    this.isCharacterElement = h;
    this.isAnchoredAsCharacterElement =
        d;
    this.isSpaceElement = e;
    this.isODFNode = s;
    this.hasNoODFContent = m;
    this.firstChild = x;
    this.lastChild = t;
    this.previousNode = y;
    this.nextNode = v;
    this.scanLeftForNonSpace = r;
    this.lookLeftForCharacter = function (a) {
        var b, e = b = 0;
        a.nodeType === Node.TEXT_NODE && (e = a.length);
        0 < e ? (b = a.data, b = p(b.substr(e - 1, 1)) ? 1 === e ? r(y(a)) ? 2 : 0 : p(b.substr(e - 2, 1)) ? 0 : 2 : 1) : d(a) && (b = 1);
        return b
    };
    this.lookRightForCharacter = function (a) {
        var b = !1, e = 0;
        a && a.nodeType === Node.TEXT_NODE && (e = a.length);
        0 < e ? b = !p(a.data.substr(0, 1)) : d(a) && (b = !0);
        return b
    };
    this.scanLeftForAnyCharacter = function (a) {
        var b = !1, e;
        for (a = a && t(a); a;) {
            e = a.nodeType === Node.TEXT_NODE ? a.length : 0;
            if (0 < e && !p(a.data)) {
                b = !0;
                break
            }
            if (d(a)) {
                b = !0;
                break
            }
            a = y(a)
        }
        return b
    };
    this.scanRightForAnyCharacter = w;
    this.isTrailingWhitespace = u;
    this.isSignificantWhitespace = A;
    this.isDowngradableSpaceElement = function (a) {
        return e(a) ? r(y(a)) && w(v(a)) : !1
    };
    this.parseLength = F;
    this.parseNonNegativeLength = B;
    this.parseFoFontSize = function (a) {
        var d;
        d = (d = F(a)) && (0 >= d.value || "%" === d.unit) ? null : d;
        return d || E(a)
    };
    this.parseFoLineHeight =
        function (a) {
            return B(a) || E(a)
        };
    this.isTextContentContainingNode = H;
    this.getTextNodes = function (a, d) {
        var b;
        b = G.getNodesInRange(a, function (a) {
            var d = NodeFilter.FILTER_REJECT;
            a.nodeType === Node.TEXT_NODE ? Boolean(k(a) && (!p(a.textContent) || A(a, 0))) && (d = NodeFilter.FILTER_ACCEPT) : H(a) && (d = NodeFilter.FILTER_SKIP);
            return d
        }, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        d || I(a, b);
        return b
    };
    this.getTextElements = Q;
    this.getParagraphElements = function (a) {
        var d;
        d = G.getNodesInRange(a, function (a) {
            var d = NodeFilter.FILTER_REJECT;
            if (b(a)) d = NodeFilter.FILTER_ACCEPT; else if (H(a) || n(a)) d = NodeFilter.FILTER_SKIP;
            return d
        }, NodeFilter.SHOW_ELEMENT);
        N(a.startContainer, d, b);
        return d
    };
    this.getImageElements = function (a) {
        var d;
        d = G.getNodesInRange(a, function (a) {
            var d = NodeFilter.FILTER_SKIP;
            f(a) && (d = NodeFilter.FILTER_ACCEPT);
            return d
        }, NodeFilter.SHOW_ELEMENT);
        N(a.startContainer, d, f);
        return d
    };
    this.getHyperlinkElements = function (a) {
        var d = [], e = a.cloneRange();
        a.collapsed && a.endContainer.nodeType === Node.ELEMENT_NODE && (a = z(a.endContainer, a.endOffset),
        a.nodeType === Node.TEXT_NODE && e.setEnd(a, 1));
        Q(e, !0, !1).forEach(function (a) {
            for (a = a.parentNode; !b(a);) {
                if (c(a) && -1 === d.indexOf(a)) {
                    d.push(a);
                    break
                }
                a = a.parentNode
            }
        });
        e.detach();
        return d
    };
    this.getNormalizedFontFamilyName = function (a) {
        /^(["'])(?:.|[\n\r])*?\1$/.test(a) || (a = a.replace(/^[ \t\r\n\f]*((?:.|[\n\r])*?)[ \t\r\n\f]*$/, "$1"), /[ \t\r\n\f]/.test(a) && (a = "'" + a.replace(/[ \t\r\n\f]+/g, " ") + "'"));
        return a
    }
};
odf.OdfUtils = new odf.OdfUtilsImpl;
gui.OdfTextBodyNodeFilter = function () {
    var f = odf.OdfUtils, l = Node.TEXT_NODE, a = NodeFilter.FILTER_REJECT, c = NodeFilter.FILTER_ACCEPT, b = odf.Namespaces.textns;
    this.acceptNode = function (k) {
        if (k.nodeType === l) {
            if (!f.isGroupingElement(k.parentNode))return a
        } else if (k.namespaceURI === b && "tracked-changes" === k.localName)return a;
        return c
    }
};
xmldom.LSSerializerFilter = function () {
};
xmldom.LSSerializerFilter.prototype.acceptNode = function (f) {
};
odf.OdfNodeFilter = function () {
    this.acceptNode = function (f) {
        return "http://www.w3.org/1999/xhtml" === f.namespaceURI ? NodeFilter.FILTER_SKIP : f.namespaceURI && f.namespaceURI.match(/^urn:webodf:/) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    }
};
xmldom.XPathIterator = function () {
};
xmldom.XPathIterator.prototype.next = function () {
};
xmldom.XPathIterator.prototype.reset = function () {
};
function createXPathSingleton() {
    function f(a, d, b) {
        return -1 !== a && (a < d || -1 === d) && (a < b || -1 === b)
    }

    function l(a) {
        for (var d = [], b = 0, c = a.length, m; b < c;) {
            var k = a, p = c, n = d, q = "", l = [], w = k.indexOf("[", b), u = k.indexOf("/", b), A = k.indexOf("=", b);
            f(u, w, A) ? (q = k.substring(b, u), b = u + 1) : f(w, u, A) ? (q = k.substring(b, w), b = g(k, w, l)) : f(A, u, w) ? (q = k.substring(b, A), b = A) : (q = k.substring(b, p), b = p);
            n.push({location: q, predicates: l});
            if (b < c && "=" === a[b]) {
                m = a.substring(b + 1, c);
                if (2 < m.length && ("'" === m[0] || '"' === m[0])) m = m.slice(1, m.length - 1);
                else try {
                    m = parseInt(m, 10)
                } catch (F) {
                }
                b = c
            }
        }
        return {steps: d, value: m}
    }

    function a() {
        var a = null, d = !1;
        this.setNode = function (d) {
            a = d
        };
        this.reset = function () {
            d = !1
        };
        this.next = function () {
            var b = d ? null : a;
            d = !0;
            return b
        }
    }

    function c(a, d, b) {
        this.reset = function () {
            a.reset()
        };
        this.next = function () {
            for (var c = a.next(); c;) {
                c.nodeType === Node.ELEMENT_NODE && (c = c.getAttributeNodeNS(d, b));
                if (c)break;
                c = a.next()
            }
            return c
        }
    }

    function b(a, d) {
        var b = a.next(), c = null;
        this.reset = function () {
            a.reset();
            b = a.next();
            c = null
        };
        this.next = function () {
            for (; b;) {
                if (c)if (d &&
                    c.firstChild) c = c.firstChild; else {
                    for (; !c.nextSibling && c !== b;)c = c.parentNode;
                    c === b ? b = a.next() : c = c.nextSibling
                } else {
                    do(c = b.firstChild) || (b = a.next()); while (b && !c)
                }
                if (c && c.nodeType === Node.ELEMENT_NODE)return c
            }
            return null
        }
    }

    function k(a, d) {
        this.reset = function () {
            a.reset()
        };
        this.next = function () {
            for (var b = a.next(); b && !d(b);)b = a.next();
            return b
        }
    }

    function q(a, d, b) {
        d = d.split(":", 2);
        var c = b(d[0]), m = d[1];
        return new k(a, function (a) {
            return a.localName === m && a.namespaceURI === c
        })
    }

    function p(b, d, e) {
        var c = new a, m = n(c,
            d, e), g = d.value;
        return void 0 === g ? new k(b, function (a) {
                c.setNode(a);
                m.reset();
                return null !== m.next()
            }) : new k(b, function (a) {
                c.setNode(a);
                m.reset();
                return (a = m.next()) ? a.nodeValue === g : !1
            })
    }

    var n, g;
    g = function (a, d, b) {
        for (var c = d, m = a.length, g = 0; c < m;)"]" === a[c] ? (g -= 1, 0 >= g && b.push(l(a.substring(d, c)))) : "[" === a[c] && (0 >= g && (d = c + 1), g += 1), c += 1;
        return c
    };
    n = function (a, d, e) {
        var g, m, f, k;
        for (g = 0; g < d.steps.length; g += 1) {
            f = d.steps[g];
            m = f.location;
            if ("" === m) a = new b(a, !1); else if ("@" === m[0]) {
                m = m.substr(1).split(":", 2);
                k =
                    e(m[0]);
                if (!k)throw"No namespace associated with the prefix " + m[0];
                a = new c(a, k, m[1])
            } else"." !== m && (a = new b(a, !1), -1 !== m.indexOf(":") && (a = q(a, m, e)));
            for (m = 0; m < f.predicates.length; m += 1)k = f.predicates[m], a = p(a, k, e)
        }
        return a
    };
    return {
        getODFElementsWithXPath: function (b, d, e) {
            var c = b.ownerDocument, m = [], g = null;
            if (c && "function" === typeof c.evaluate)for (e = c.evaluate(d, b, e, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null), g = e.iterateNext(); null !== g;)g.nodeType === Node.ELEMENT_NODE && m.push(g), g = e.iterateNext(); else {
                m =
                    new a;
                m.setNode(b);
                b = l(d);
                m = n(m, b, e);
                b = [];
                for (e = m.next(); e;)b.push(e), e = m.next();
                m = b
            }
            return m
        }
    }
}
xmldom.XPath = createXPathSingleton();
odf.StyleInfo = function () {
    function f(a, d) {
        var b, e, c, h, m, g = 0;
        if (b = B[a.localName])if (c = b[a.namespaceURI]) g = c.length;
        for (b = 0; b < g; b += 1)e = c[b], h = e.ns, m = e.localname, (e = a.getAttributeNS(h, m)) && a.setAttributeNS(h, A[h] + m, d + e);
        for (c = a.firstElementChild; c;)f(c, d), c = c.nextElementSibling
    }

    function l(a, d) {
        var b, e, c, h, m, g = 0;
        if (b = B[a.localName])if (c = b[a.namespaceURI]) g = c.length;
        for (b = 0; b < g; b += 1)if (e = c[b], h = e.ns, m = e.localname, e = a.getAttributeNS(h, m)) e = e.replace(d, ""), a.setAttributeNS(h, A[h] + m, e);
        for (c = a.firstElementChild; c;)l(c,
            d), c = c.nextElementSibling
    }

    function a(a, b) {
        var d, e, c, h, m, g = 0;
        if (d = B[a.localName])if (c = d[a.namespaceURI]) g = c.length;
        for (d = 0; d < g; d += 1)if (h = c[d], e = h.ns, m = h.localname, e = a.getAttributeNS(e, m)) b = b || {}, h = h.keyname, b.hasOwnProperty(h) ? b[h][e] = 1 : (m = {}, m[e] = 1, b[h] = m);
        return b
    }

    function c(b, d) {
        var e, h;
        a(b, d);
        for (e = b.firstChild; e;)e.nodeType === Node.ELEMENT_NODE && (h = e, c(h, d)), e = e.nextSibling
    }

    function b(a, b, d) {
        this.key = a;
        this.name = b;
        this.family = d;
        this.requires = {}
    }

    function k(a, d, e) {
        var c = a + '"' + d, h = e[c];
        h || (h = e[c] =
            new b(c, a, d));
        return h
    }

    function q(a, d, b) {
        var e, c, h, m, g, f = 0;
        e = a.getAttributeNS(r, "name");
        m = a.getAttributeNS(r, "family");
        e && m && (d = k(e, m, b));
        if (d) {
            if (e = B[a.localName])if (h = e[a.namespaceURI]) f = h.length;
            for (e = 0; e < f; e += 1)if (m = h[e], c = m.ns, g = m.localname, c = a.getAttributeNS(c, g)) m = m.keyname, m = k(c, m, b), d.requires[m.key] = m
        }
        for (a = a.firstElementChild; a;)q(a, d, b), a = a.nextElementSibling;
        return b
    }

    function p(a, d) {
        var b = d[a.family];
        b || (b = d[a.family] = {});
        b[a.name] = 1;
        Object.keys(a.requires).forEach(function (b) {
            p(a.requires[b],
                d)
        })
    }

    function n(a, b) {
        var d = q(a, null, {});
        Object.keys(d).forEach(function (a) {
            a = d[a];
            var e = b[a.family];
            e && e.hasOwnProperty(a.name) && p(a, b)
        })
    }

    function g(a, b) {
        function d(b) {
            (b = h.getAttributeNS(r, b)) && (a[b] = !0)
        }

        var e = ["font-name", "font-name-asian", "font-name-complex"], c, h;
        for (c = b && b.firstElementChild; c;)h = c, e.forEach(d), g(a, h), c = c.nextElementSibling
    }

    function h(a, b) {
        function d(a) {
            var e = m.getAttributeNS(r, a);
            e && b.hasOwnProperty(e) && m.setAttributeNS(r, "style:" + a, b[e])
        }

        var e = ["font-name", "font-name-asian",
            "font-name-complex"], c, m;
        for (c = a && a.firstElementChild; c;)m = c, e.forEach(d), h(m, b), c = c.nextElementSibling
    }

    var d = odf.Namespaces.chartns, e = odf.Namespaces.dbns, s = odf.Namespaces.dr3dns, m = odf.Namespaces.drawns, x = odf.Namespaces.formns, t = odf.Namespaces.numberns, y = odf.Namespaces.officens, v = odf.Namespaces.presentationns, r = odf.Namespaces.stylens, w = odf.Namespaces.tablens, u = odf.Namespaces.textns, A = {
        "urn:oasis:names:tc:opendocument:xmlns:chart:1.0": "chart:",
        "urn:oasis:names:tc:opendocument:xmlns:database:1.0": "db:",
        "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0": "dr3d:",
        "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0": "draw:",
        "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0": "fo:",
        "urn:oasis:names:tc:opendocument:xmlns:form:1.0": "form:",
        "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": "number:",
        "urn:oasis:names:tc:opendocument:xmlns:office:1.0": "office:",
        "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0": "presentation:",
        "urn:oasis:names:tc:opendocument:xmlns:style:1.0": "style:",
        "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0": "svg:",
        "urn:oasis:names:tc:opendocument:xmlns:table:1.0": "table:",
        "urn:oasis:names:tc:opendocument:xmlns:text:1.0": "chart:",
        "http://www.w3.org/XML/1998/namespace": "xml:"
    }, F = {
        text: [{ens: r, en: "tab-stop", ans: r, a: "leader-text-style"}, {
            ens: r,
            en: "drop-cap",
            ans: r,
            a: "style-name"
        }, {ens: u, en: "notes-configuration", ans: u, a: "citation-body-style-name"}, {
            ens: u,
            en: "notes-configuration",
            ans: u,
            a: "citation-style-name"
        }, {ens: u, en: "a", ans: u, a: "style-name"}, {ens: u, en: "alphabetical-index", ans: u, a: "style-name"}, {
            ens: u, en: "linenumbering-configuration",
            ans: u, a: "style-name"
        }, {ens: u, en: "list-level-style-number", ans: u, a: "style-name"}, {
            ens: u,
            en: "ruby-text",
            ans: u,
            a: "style-name"
        }, {ens: u, en: "span", ans: u, a: "style-name"}, {ens: u, en: "a", ans: u, a: "visited-style-name"}, {
            ens: r,
            en: "text-properties",
            ans: r,
            a: "text-line-through-text-style"
        }, {ens: u, en: "alphabetical-index-source", ans: u, a: "main-entry-style-name"}, {
            ens: u,
            en: "index-entry-bibliography",
            ans: u,
            a: "style-name"
        }, {ens: u, en: "index-entry-chapter", ans: u, a: "style-name"}, {
            ens: u,
            en: "index-entry-link-end",
            ans: u,
            a: "style-name"
        },
            {ens: u, en: "index-entry-link-start", ans: u, a: "style-name"}, {
                ens: u,
                en: "index-entry-page-number",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "index-entry-span", ans: u, a: "style-name"}, {
                ens: u,
                en: "index-entry-tab-stop",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "index-entry-text", ans: u, a: "style-name"}, {
                ens: u,
                en: "index-title-template",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "list-level-style-bullet", ans: u, a: "style-name"}, {
                ens: u,
                en: "outline-level-style",
                ans: u,
                a: "style-name"
            }],
        paragraph: [{ens: m, en: "caption", ans: m, a: "text-style-name"}, {
            ens: m,
            en: "circle", ans: m, a: "text-style-name"
        }, {ens: m, en: "connector", ans: m, a: "text-style-name"}, {
            ens: m,
            en: "control",
            ans: m,
            a: "text-style-name"
        }, {ens: m, en: "custom-shape", ans: m, a: "text-style-name"}, {
            ens: m,
            en: "ellipse",
            ans: m,
            a: "text-style-name"
        }, {ens: m, en: "frame", ans: m, a: "text-style-name"}, {
            ens: m,
            en: "line",
            ans: m,
            a: "text-style-name"
        }, {ens: m, en: "measure", ans: m, a: "text-style-name"}, {
            ens: m,
            en: "path",
            ans: m,
            a: "text-style-name"
        }, {ens: m, en: "polygon", ans: m, a: "text-style-name"}, {
            ens: m,
            en: "polyline",
            ans: m,
            a: "text-style-name"
        },
            {ens: m, en: "rect", ans: m, a: "text-style-name"}, {
                ens: m,
                en: "regular-polygon",
                ans: m,
                a: "text-style-name"
            }, {ens: y, en: "annotation", ans: m, a: "text-style-name"}, {
                ens: x,
                en: "column",
                ans: x,
                a: "text-style-name"
            }, {ens: r, en: "style", ans: r, a: "next-style-name"}, {
                ens: w,
                en: "body",
                ans: w,
                a: "paragraph-style-name"
            }, {ens: w, en: "even-columns", ans: w, a: "paragraph-style-name"}, {
                ens: w,
                en: "even-rows",
                ans: w,
                a: "paragraph-style-name"
            }, {ens: w, en: "first-column", ans: w, a: "paragraph-style-name"}, {
                ens: w,
                en: "first-row",
                ans: w,
                a: "paragraph-style-name"
            },
            {ens: w, en: "last-column", ans: w, a: "paragraph-style-name"}, {
                ens: w,
                en: "last-row",
                ans: w,
                a: "paragraph-style-name"
            }, {ens: w, en: "odd-columns", ans: w, a: "paragraph-style-name"}, {
                ens: w,
                en: "odd-rows",
                ans: w,
                a: "paragraph-style-name"
            }, {ens: u, en: "notes-configuration", ans: u, a: "default-style-name"}, {
                ens: u,
                en: "alphabetical-index-entry-template",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "bibliography-entry-template", ans: u, a: "style-name"}, {
                ens: u,
                en: "h",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "illustration-index-entry-template", ans: u, a: "style-name"},
            {ens: u, en: "index-source-style", ans: u, a: "style-name"}, {
                ens: u,
                en: "object-index-entry-template",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "p", ans: u, a: "style-name"}, {
                ens: u,
                en: "table-index-entry-template",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "table-of-content-entry-template", ans: u, a: "style-name"}, {
                ens: u,
                en: "table-index-entry-template",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "user-index-entry-template", ans: u, a: "style-name"}, {
                ens: r,
                en: "page-layout-properties",
                ans: r,
                a: "register-truth-ref-style-name"
            }],
        chart: [{
            ens: d, en: "axis", ans: d,
            a: "style-name"
        }, {ens: d, en: "chart", ans: d, a: "style-name"}, {ens: d, en: "data-label", ans: d, a: "style-name"}, {
            ens: d,
            en: "data-point",
            ans: d,
            a: "style-name"
        }, {ens: d, en: "equation", ans: d, a: "style-name"}, {
            ens: d,
            en: "error-indicator",
            ans: d,
            a: "style-name"
        }, {ens: d, en: "floor", ans: d, a: "style-name"}, {ens: d, en: "footer", ans: d, a: "style-name"}, {
            ens: d,
            en: "grid",
            ans: d,
            a: "style-name"
        }, {ens: d, en: "legend", ans: d, a: "style-name"}, {
            ens: d,
            en: "mean-value",
            ans: d,
            a: "style-name"
        }, {ens: d, en: "plot-area", ans: d, a: "style-name"}, {
            ens: d, en: "regression-curve",
            ans: d, a: "style-name"
        }, {ens: d, en: "series", ans: d, a: "style-name"}, {
            ens: d,
            en: "stock-gain-marker",
            ans: d,
            a: "style-name"
        }, {ens: d, en: "stock-loss-marker", ans: d, a: "style-name"}, {
            ens: d,
            en: "stock-range-line",
            ans: d,
            a: "style-name"
        }, {ens: d, en: "subtitle", ans: d, a: "style-name"}, {ens: d, en: "title", ans: d, a: "style-name"}, {
            ens: d,
            en: "wall",
            ans: d,
            a: "style-name"
        }],
        section: [{ens: u, en: "alphabetical-index", ans: u, a: "style-name"}, {
            ens: u,
            en: "bibliography",
            ans: u,
            a: "style-name"
        }, {ens: u, en: "illustration-index", ans: u, a: "style-name"},
            {ens: u, en: "index-title", ans: u, a: "style-name"}, {
                ens: u,
                en: "object-index",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "section", ans: u, a: "style-name"}, {
                ens: u,
                en: "table-of-content",
                ans: u,
                a: "style-name"
            }, {ens: u, en: "table-index", ans: u, a: "style-name"}, {
                ens: u,
                en: "user-index",
                ans: u,
                a: "style-name"
            }],
        ruby: [{ens: u, en: "ruby", ans: u, a: "style-name"}],
        table: [{ens: e, en: "query", ans: e, a: "style-name"}, {
            ens: e,
            en: "table-representation",
            ans: e,
            a: "style-name"
        }, {ens: w, en: "background", ans: w, a: "style-name"}, {ens: w, en: "table", ans: w, a: "style-name"}],
        "table-column": [{ens: e, en: "column", ans: e, a: "style-name"}, {
            ens: w,
            en: "table-column",
            ans: w,
            a: "style-name"
        }],
        "table-row": [{ens: e, en: "query", ans: e, a: "default-row-style-name"}, {
            ens: e,
            en: "table-representation",
            ans: e,
            a: "default-row-style-name"
        }, {ens: w, en: "table-row", ans: w, a: "style-name"}],
        "table-cell": [{ens: e, en: "column", ans: e, a: "default-cell-style-name"}, {
            ens: w,
            en: "table-column",
            ans: w,
            a: "default-cell-style-name"
        }, {ens: w, en: "table-row", ans: w, a: "default-cell-style-name"}, {
            ens: w,
            en: "body",
            ans: w,
            a: "style-name"
        },
            {ens: w, en: "covered-table-cell", ans: w, a: "style-name"}, {
                ens: w,
                en: "even-columns",
                ans: w,
                a: "style-name"
            }, {ens: w, en: "covered-table-cell", ans: w, a: "style-name"}, {
                ens: w,
                en: "even-columns",
                ans: w,
                a: "style-name"
            }, {ens: w, en: "even-rows", ans: w, a: "style-name"}, {
                ens: w,
                en: "first-column",
                ans: w,
                a: "style-name"
            }, {ens: w, en: "first-row", ans: w, a: "style-name"}, {
                ens: w,
                en: "last-column",
                ans: w,
                a: "style-name"
            }, {ens: w, en: "last-row", ans: w, a: "style-name"}, {
                ens: w,
                en: "odd-columns",
                ans: w,
                a: "style-name"
            }, {ens: w, en: "odd-rows", ans: w, a: "style-name"},
            {ens: w, en: "table-cell", ans: w, a: "style-name"}],
        graphic: [{ens: s, en: "cube", ans: m, a: "style-name"}, {
            ens: s,
            en: "extrude",
            ans: m,
            a: "style-name"
        }, {ens: s, en: "rotate", ans: m, a: "style-name"}, {ens: s, en: "scene", ans: m, a: "style-name"}, {
            ens: s,
            en: "sphere",
            ans: m,
            a: "style-name"
        }, {ens: m, en: "caption", ans: m, a: "style-name"}, {ens: m, en: "circle", ans: m, a: "style-name"}, {
            ens: m,
            en: "connector",
            ans: m,
            a: "style-name"
        }, {ens: m, en: "control", ans: m, a: "style-name"}, {
            ens: m,
            en: "custom-shape",
            ans: m,
            a: "style-name"
        }, {ens: m, en: "ellipse", ans: m, a: "style-name"},
            {ens: m, en: "frame", ans: m, a: "style-name"}, {ens: m, en: "g", ans: m, a: "style-name"}, {
                ens: m,
                en: "line",
                ans: m,
                a: "style-name"
            }, {ens: m, en: "measure", ans: m, a: "style-name"}, {
                ens: m,
                en: "page-thumbnail",
                ans: m,
                a: "style-name"
            }, {ens: m, en: "path", ans: m, a: "style-name"}, {ens: m, en: "polygon", ans: m, a: "style-name"}, {
                ens: m,
                en: "polyline",
                ans: m,
                a: "style-name"
            }, {ens: m, en: "rect", ans: m, a: "style-name"}, {
                ens: m,
                en: "regular-polygon",
                ans: m,
                a: "style-name"
            }, {ens: y, en: "annotation", ans: m, a: "style-name"}],
        presentation: [{
            ens: s, en: "cube", ans: v,
            a: "style-name"
        }, {ens: s, en: "extrude", ans: v, a: "style-name"}, {ens: s, en: "rotate", ans: v, a: "style-name"}, {
            ens: s,
            en: "scene",
            ans: v,
            a: "style-name"
        }, {ens: s, en: "sphere", ans: v, a: "style-name"}, {ens: m, en: "caption", ans: v, a: "style-name"}, {
            ens: m,
            en: "circle",
            ans: v,
            a: "style-name"
        }, {ens: m, en: "connector", ans: v, a: "style-name"}, {
            ens: m,
            en: "control",
            ans: v,
            a: "style-name"
        }, {ens: m, en: "custom-shape", ans: v, a: "style-name"}, {
            ens: m,
            en: "ellipse",
            ans: v,
            a: "style-name"
        }, {ens: m, en: "frame", ans: v, a: "style-name"}, {ens: m, en: "g", ans: v, a: "style-name"},
            {ens: m, en: "line", ans: v, a: "style-name"}, {ens: m, en: "measure", ans: v, a: "style-name"}, {
                ens: m,
                en: "page-thumbnail",
                ans: v,
                a: "style-name"
            }, {ens: m, en: "path", ans: v, a: "style-name"}, {ens: m, en: "polygon", ans: v, a: "style-name"}, {
                ens: m,
                en: "polyline",
                ans: v,
                a: "style-name"
            }, {ens: m, en: "rect", ans: v, a: "style-name"}, {
                ens: m,
                en: "regular-polygon",
                ans: v,
                a: "style-name"
            }, {ens: y, en: "annotation", ans: v, a: "style-name"}],
        "drawing-page": [{ens: m, en: "page", ans: m, a: "style-name"}, {
            ens: v,
            en: "notes",
            ans: m,
            a: "style-name"
        }, {
            ens: r, en: "handout-master",
            ans: m, a: "style-name"
        }, {ens: r, en: "master-page", ans: m, a: "style-name"}],
        "list-style": [{ens: u, en: "list", ans: u, a: "style-name"}, {
            ens: u,
            en: "numbered-paragraph",
            ans: u,
            a: "style-name"
        }, {ens: u, en: "list-item", ans: u, a: "style-override"}, {ens: r, en: "style", ans: r, a: "list-style-name"}],
        data: [{ens: r, en: "style", ans: r, a: "data-style-name"}, {
            ens: r,
            en: "style",
            ans: r,
            a: "percentage-data-style-name"
        }, {ens: v, en: "date-time-decl", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "creation-date",
            ans: r,
            a: "data-style-name"
        }, {
            ens: u, en: "creation-time",
            ans: r, a: "data-style-name"
        }, {ens: u, en: "database-display", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "date",
            ans: r,
            a: "data-style-name"
        }, {ens: u, en: "editing-duration", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "expression",
            ans: r,
            a: "data-style-name"
        }, {ens: u, en: "meta-field", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "modification-date",
            ans: r,
            a: "data-style-name"
        }, {ens: u, en: "modification-time", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "print-date",
            ans: r,
            a: "data-style-name"
        }, {ens: u, en: "print-time", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "table-formula", ans: r, a: "data-style-name"
        }, {ens: u, en: "time", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "user-defined",
            ans: r,
            a: "data-style-name"
        }, {ens: u, en: "user-field-get", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "user-field-input",
            ans: r,
            a: "data-style-name"
        }, {ens: u, en: "variable-get", ans: r, a: "data-style-name"}, {
            ens: u,
            en: "variable-input",
            ans: r,
            a: "data-style-name"
        }, {ens: u, en: "variable-set", ans: r, a: "data-style-name"}],
        "page-layout": [{ens: v, en: "notes", ans: r, a: "page-layout-name"}, {
            ens: r, en: "handout-master", ans: r,
            a: "page-layout-name"
        }, {ens: r, en: "master-page", ans: r, a: "page-layout-name"}]
    }, B, E = xmldom.XPath;
    this.collectUsedFontFaces = g;
    this.changeFontFaceNames = h;
    this.UsedStyleList = function (a, b) {
        var d = {};
        this.uses = function (a) {
            var b = a.localName, e = a.getAttributeNS(m, "name") || a.getAttributeNS(r, "name");
            a = "style" === b ? a.getAttributeNS(r, "family") : a.namespaceURI === t ? "data" : b;
            return (a = d[a]) ? 0 < a[e] : !1
        };
        c(a, d);
        b && n(b, d)
    };
    this.getStyleName = function (a, b) {
        var d, e, c = B[b.localName];
        if (c && (c = c[b.namespaceURI]))for (e = 0; e < c.length; e +=
            1)if (c[e].keyname === a && (c = c[e], b.hasAttributeNS(c.ns, c.localname))) {
            d = b.getAttributeNS(c.ns, c.localname);
            break
        }
        return d
    };
    this.hasDerivedStyles = function (a, b, d) {
        var e = d.getAttributeNS(r, "name");
        d = d.getAttributeNS(r, "family");
        return E.getODFElementsWithXPath(a, '//style:*[@style:parent-style-name="' + e + '"][@style:family="' + d + '"]', b).length ? !0 : !1
    };
    this.prefixStyleNames = function (a, b, d) {
        var e;
        if (a) {
            for (e = a.firstChild; e;) {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var c = e, h = b, g = c.getAttributeNS(m, "name"), k = void 0;
                    g ? k = m : (g = c.getAttributeNS(r, "name")) && (k = r);
                    k && c.setAttributeNS(k, A[k] + "name", h + g)
                }
                e = e.nextSibling
            }
            f(a, b);
            d && f(d, b)
        }
    };
    this.removePrefixFromStyleNames = function (a, b, d) {
        var e = RegExp("^" + b);
        if (a) {
            for (b = a.firstChild; b;) {
                if (b.nodeType === Node.ELEMENT_NODE) {
                    var c = b, h = e, g = c.getAttributeNS(m, "name"), k = void 0;
                    g ? k = m : (g = c.getAttributeNS(r, "name")) && (k = r);
                    k && (g = g.replace(h, ""), c.setAttributeNS(k, A[k] + "name", g))
                }
                b = b.nextSibling
            }
            l(a, e);
            d && l(d, e)
        }
    };
    this.determineStylesForNode = a;
    B = function () {
        var a, b, d, e, c, h = {}, m, g,
            k, f;
        for (d in F)if (F.hasOwnProperty(d))for (e = F[d], b = e.length, a = 0; a < b; a += 1)c = e[a], k = c.en, f = c.ens, h.hasOwnProperty(k) ? m = h[k] : h[k] = m = {}, m.hasOwnProperty(f) ? g = m[f] : m[f] = g = [], g.push({
            ns: c.ans,
            localname: c.a,
            keyname: d
        });
        return h
    }()
};
"function" !== typeof Object.create && (Object.create = function (f) {
    var l = function () {
    };
    l.prototype = f;
    return new l
});
xmldom.LSSerializer = function () {
    function f(a) {
        var c = a || {}, f = function (a) {
            var b = {}, e;
            for (e in a)a.hasOwnProperty(e) && (b[a[e]] = e);
            return b
        }(a), p = [c], n = [f], g = 0;
        this.push = function () {
            g += 1;
            c = p[g] = Object.create(c);
            f = n[g] = Object.create(f)
        };
        this.pop = function () {
            p.pop();
            n.pop();
            g -= 1;
            c = p[g];
            f = n[g]
        };
        this.getLocalNamespaceDefinitions = function () {
            return f
        };
        this.getQName = function (a) {
            var b = a.namespaceURI, e = 0, g;
            if (!b)return a.localName;
            if (g = f[b])return g + ":" + a.localName;
            do {
                g || !a.prefix ? (g = "ns" + e, e += 1) : g = a.prefix;
                if (c[g] ===
                    b)break;
                if (!c[g]) {
                    c[g] = b;
                    f[b] = g;
                    break
                }
                g = null
            } while (null === g);
            return g + ":" + a.localName
        }
    }

    function l(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
    }

    function a(b, f) {
        var q = "", p = c.filter ? c.filter.acceptNode(f) : NodeFilter.FILTER_ACCEPT, n;
        if (p === NodeFilter.FILTER_ACCEPT && f.nodeType === Node.ELEMENT_NODE) {
            b.push();
            n = b.getQName(f);
            var g, h = f.attributes, d, e, s, m = "", x;
            g = "<" + n;
            d = h.length;
            for (e = 0; e < d; e += 1)s = h.item(e), "http://www.w3.org/2000/xmlns/" !==
            s.namespaceURI && (x = c.filter ? c.filter.acceptNode(s) : NodeFilter.FILTER_ACCEPT, x === NodeFilter.FILTER_ACCEPT && (x = b.getQName(s), s = "string" === typeof s.value ? l(s.value) : s.value, m += " " + (x + '="' + s + '"')));
            d = b.getLocalNamespaceDefinitions();
            for (e in d)d.hasOwnProperty(e) && ((h = d[e]) ? "xmlns" !== h && (g += " xmlns:" + d[e] + '="' + e + '"') : g += ' xmlns="' + e + '"');
            q += g + (m + ">")
        }
        if (p === NodeFilter.FILTER_ACCEPT || p === NodeFilter.FILTER_SKIP) {
            for (p = f.firstChild; p;)q += a(b, p), p = p.nextSibling;
            f.nodeValue && (q += l(f.nodeValue))
        }
        n && (q += "</" +
            n + ">", b.pop());
        return q
    }

    var c = this;
    this.filter = null;
    this.writeToString = function (b, c) {
        if (!b)return "";
        var q = new f(c);
        return a(q, b)
    }
};
(function () {
    function f(a) {
        var b, e = p.length;
        for (b = 0; b < e; b += 1)if ("urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && a.localName === p[b])return b;
        return -1
    }

    function l(a, d) {
        var e = new b.UsedStyleList(a, d), c = new odf.OdfNodeFilter;
        this.acceptNode = function (a) {
            var b = c.acceptNode(a);
            b === NodeFilter.FILTER_ACCEPT && a.parentNode === d && a.nodeType === Node.ELEMENT_NODE && (b = e.uses(a) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT);
            return b
        }
    }

    function a(a, b) {
        var e = new l(a, b);
        this.acceptNode = function (a) {
            var b =
                e.acceptNode(a);
            b !== NodeFilter.FILTER_ACCEPT || !a.parentNode || a.parentNode.namespaceURI !== odf.Namespaces.textns || "s" !== a.parentNode.localName && "tab" !== a.parentNode.localName || (b = NodeFilter.FILTER_REJECT);
            return b
        }
    }

    function c(a, b) {
        if (b) {
            var e = f(b), c, m = a.firstChild;
            if (-1 !== e) {
                for (; m;) {
                    c = f(m);
                    if (-1 !== c && c > e)break;
                    m = m.nextSibling
                }
                a.insertBefore(b, m)
            }
        }
    }

    var b = new odf.StyleInfo, k = core.DomUtils, q = odf.Namespaces.stylens, p = "meta settings scripts font-face-decls styles automatic-styles master-styles body".split(" "),
        n = Date.now() + "_webodf_", g = new core.Base64;
    odf.ODFElement = function () {
    };
    odf.ODFDocumentElement = function () {
    };
    odf.ODFDocumentElement.prototype = new odf.ODFElement;
    odf.ODFDocumentElement.prototype.constructor = odf.ODFDocumentElement;
    odf.ODFDocumentElement.prototype.fontFaceDecls = null;
    odf.ODFDocumentElement.prototype.manifest = null;
    odf.ODFDocumentElement.prototype.settings = null;
    odf.ODFDocumentElement.namespaceURI = "urn:oasis:names:tc:opendocument:xmlns:office:1.0";
    odf.ODFDocumentElement.localName = "document";
    odf.AnnotationElement = function () {
    };
    odf.OdfPart = function (a, b, e, c) {
        var m = this;
        this.size = 0;
        this.type = null;
        this.name = a;
        this.container = e;
        this.url = null;
        this.mimetype = b;
        this.onstatereadychange = this.document = null;
        this.EMPTY = 0;
        this.LOADING = 1;
        this.DONE = 2;
        this.state = this.EMPTY;
        this.data = "";
        this.load = function () {
            null !== c && (this.mimetype = b, c.loadAsDataURL(a, b, function (a, b) {
                a && runtime.log(a);
                m.url = b;
                if (m.onchange) m.onchange(m);
                if (m.onstatereadychange) m.onstatereadychange(m)
            }))
        }
    };
    odf.OdfPart.prototype.load = function () {
    };
    odf.OdfPart.prototype.getUrl = function () {
        return this.data ? "data:;base64," + g.toBase64(this.data) : null
    };
    odf.OdfContainer = function d(e, f) {
        function m(a) {
            for (var b = a.firstChild, d; b;)d = b.nextSibling, b.nodeType === Node.ELEMENT_NODE ? m(b) : b.nodeType === Node.PROCESSING_INSTRUCTION_NODE && a.removeChild(b), b = d
        }

        function p(a) {
            var b = {}, d, e, c = a.ownerDocument.createNodeIterator(a, NodeFilter.SHOW_ELEMENT, null, !1);
            for (a = c.nextNode(); a;)"urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && ("annotation" ===
            a.localName ? (d = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "name")) && (b.hasOwnProperty(d) ? runtime.log("Warning: annotation name used more than once with <office:annotation/>: '" + d + "'") : b[d] = a) : "annotation-end" === a.localName && ((d = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "name")) ? b.hasOwnProperty(d) ? (e = b[d], e.annotationEndElement ? runtime.log("Warning: annotation name used more than once with <office:annotation-end/>: '" + d + "'") : e.annotationEndElement =
                                a) : runtime.log("Warning: annotation end without an annotation start, name: '" + d + "'") : runtime.log("Warning: annotation end without a name found"))), a = c.nextNode()
        }

        function t(a, b) {
            for (var d = a && a.firstChild; d;)d.nodeType === Node.ELEMENT_NODE && d.setAttributeNS("urn:webodf:names:scope", "scope", b), d = d.nextSibling
        }

        function y(a, b) {
            for (var d = U.rootElement.meta, d = d && d.firstChild; d && (d.namespaceURI !== a || d.localName !== b);)d = d.nextSibling;
            for (d = d && d.firstChild; d && d.nodeType !== Node.TEXT_NODE;)d = d.nextSibling;
            return d ?
                d.data : null
        }

        function v(a) {
            var b = {}, d;
            for (a = a.firstChild; a;)a.nodeType === Node.ELEMENT_NODE && a.namespaceURI === q && "font-face" === a.localName && (d = a.getAttributeNS(q, "name"), b[d] = a), a = a.nextSibling;
            return b
        }

        function r(a, b) {
            var d = null, e, c, m;
            if (a)for (d = a.cloneNode(!0), e = d.firstElementChild; e;)c = e.nextElementSibling, (m = e.getAttributeNS("urn:webodf:names:scope", "scope")) && m !== b && d.removeChild(e), e = c;
            return d
        }

        function w(a, d) {
            var e, c, m, g = null, f = {};
            if (a)for (d.forEach(function (a) {
                b.collectUsedFontFaces(f, a)
            }),
                           g = a.cloneNode(!0), e = g.firstElementChild; e;)c = e.nextElementSibling, m = e.getAttributeNS(q, "name"), f[m] || g.removeChild(e), e = c;
            return g
        }

        function u(a) {
            var b = U.rootElement.ownerDocument, d;
            if (a) {
                m(a.documentElement);
                try {
                    d = b.importNode(a.documentElement, !0)
                } catch (e) {
                }
            }
            return d
        }

        function A(a) {
            U.state = a;
            if (U.onchange) U.onchange(U);
            if (U.onstatereadychange) U.onstatereadychange(U)
        }

        function F(a) {
            aa = null;
            U.rootElement = a;
            a.fontFaceDecls = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls");
            a.styles = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles");
            a.automaticStyles = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles");
            a.masterStyles = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles");
            a.body = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "body");
            a.meta = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta");
            a.settings = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "settings");
            a.scripts = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "scripts");
            p(a)
        }

        function B(a) {
            var e = u(a), m = U.rootElement, g;
            e && "document-styles" === e.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === e.namespaceURI ? (m.fontFaceDecls = k.getDirectChild(e, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls"), c(m, m.fontFaceDecls), g = k.getDirectChild(e, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles"), m.styles = g || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                        "styles"), c(m, m.styles), g = k.getDirectChild(e, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles"), m.automaticStyles = g || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles"), t(m.automaticStyles, "document-styles"), c(m, m.automaticStyles), e = k.getDirectChild(e, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles"), m.masterStyles = e || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles"), c(m, m.masterStyles),
                    b.prefixStyleNames(m.automaticStyles, n, m.masterStyles)) : A(d.INVALID)
        }

        function E(a) {
            a = u(a);
            var e, m, g, f;
            if (a && "document-content" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI) {
                e = U.rootElement;
                g = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls");
                if (e.fontFaceDecls && g) {
                    f = e.fontFaceDecls;
                    var p, s, n, l, z = {};
                    m = v(f);
                    l = v(g);
                    for (g = g.firstElementChild; g;) {
                        p = g.nextElementSibling;
                        if (g.namespaceURI === q && "font-face" === g.localName)if (s = g.getAttributeNS(q,
                                "name"), m.hasOwnProperty(s)) {
                            if (!g.isEqualNode(m[s])) {
                                n = s;
                                for (var r = m, Q = l, x = 0, Y = void 0, Y = n = n.replace(/\d+$/, ""); r.hasOwnProperty(Y) || Q.hasOwnProperty(Y);)x += 1, Y = n + x;
                                n = Y;
                                g.setAttributeNS(q, "style:name", n);
                                f.appendChild(g);
                                m[n] = g;
                                delete l[s];
                                z[s] = n
                            }
                        } else f.appendChild(g), m[s] = g, delete l[s];
                        g = p
                    }
                    f = z
                } else g && (e.fontFaceDecls = g, c(e, g));
                m = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles");
                t(m, "document-content");
                f && b.changeFontFaceNames(m, f);
                if (e.automaticStyles && m)for (f =
                                                    m.firstChild; f;)e.automaticStyles.appendChild(f), f = m.firstChild; else m && (e.automaticStyles = m, c(e, m));
                a = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "body");
                if (null === a)throw"<office:body/> tag is mising.";
                e.body = a;
                c(e, e.body)
            } else A(d.INVALID)
        }

        function H(a) {
            a = u(a);
            var b;
            a && "document-meta" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && (b = U.rootElement, b.meta = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta"),
                c(b, b.meta))
        }

        function I(a) {
            a = u(a);
            var b;
            a && "document-settings" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && (b = U.rootElement, b.settings = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "settings"), c(b, b.settings))
        }

        function Q(a) {
            a = u(a);
            var b;
            if (a && "manifest" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" === a.namespaceURI)for (b = U.rootElement, b.manifest = a, a = b.manifest.firstElementChild; a;)"file-entry" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" ===
            a.namespaceURI && (P[a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "full-path")] = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "media-type")), a = a.nextElementSibling
        }

        function N(a, b, d) {
            a = k.getElementsByTagName(a, b);
            var e;
            for (e = 0; e < a.length; e += 1)b = a[e], d.hasOwnProperty(b.namespaceURI) || b.parentNode.removeChild(b)
        }

        function z(a) {
            N(a, "script", {
                "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:office:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:table:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:text:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0": !0
            });
            N(a, "style", {
                "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:style:1.0": !0
            })
        }

        function Y(a) {
            var b = a.firstElementChild, d = [], e, c, m, g = a.attributes, f = g.length;
            for (e = 0; e < f; e += 1)m = g.item(e), c = m.localName.substr(0, 2).toLowerCase(), null === m.namespaceURI && "on" === c && d.push(m);
            f = d.length;
            for (e =
                     0; e < f; e += 1)a.removeAttributeNode(d[e]);
            for (; b;)Y(b), b = b.nextElementSibling
        }

        function R(a) {
            var b = a.shift();
            b ? W.loadAsDOM(b.path, function (e, c) {
                    c && (z(c), Y(c.documentElement));
                    b.handler(c);
                    U.state === d.INVALID ? e ? runtime.log("ERROR: Unable to load " + b.path + " - " + e) : runtime.log("ERROR: Unable to load " + b.path) : (e && runtime.log("DEBUG: Unable to load " + b.path + " - " + e), R(a))
                }) : (p(U.rootElement), A(d.DONE))
        }

        function J(a) {
            var b = "";
            odf.Namespaces.forEachPrefix(function (a, d) {
                b += " xmlns:" + a + '="' + d + '"'
            });
            return '<?xml version="1.0" encoding="UTF-8"?><office:' +
                a + " " + b + ' office:version="1.2">'
        }

        function G() {
            var a = new xmldom.LSSerializer, b = J("document-meta");
            a.filter = new odf.OdfNodeFilter;
            b += a.writeToString(U.rootElement.meta, odf.Namespaces.namespaceMap);
            return b + "</office:document-meta>"
        }

        function ba(a, b) {
            var d = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest:file-entry");
            d.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest:full-path", a);
            d.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0",
                "manifest:media-type", b);
            return d
        }

        function T() {
            var a = runtime.parseXML('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2"></manifest:manifest>'), b = a.documentElement, d = new xmldom.LSSerializer, e;
            for (e in P)P.hasOwnProperty(e) && b.appendChild(ba(e, P[e]));
            d.filter = new odf.OdfNodeFilter;
            return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' + d.writeToString(a, odf.Namespaces.namespaceMap)
        }

        function D() {
            var a, d, e, c = odf.Namespaces.namespaceMap,
                m = new xmldom.LSSerializer, g = J("document-styles");
            d = r(U.rootElement.automaticStyles, "document-styles");
            e = U.rootElement.masterStyles.cloneNode(!0);
            a = w(U.rootElement.fontFaceDecls, [e, U.rootElement.styles, d]);
            b.removePrefixFromStyleNames(d, n, e);
            m.filter = new l(e, d);
            g += m.writeToString(a, c);
            g += m.writeToString(U.rootElement.styles, c);
            g += m.writeToString(d, c);
            g += m.writeToString(e, c);
            return g + "</office:document-styles>"
        }

        function O() {
            var b, d, e = odf.Namespaces.namespaceMap, c = new xmldom.LSSerializer, m = J("document-content");
            d = r(U.rootElement.automaticStyles, "document-content");
            b = w(U.rootElement.fontFaceDecls, [d]);
            c.filter = new a(U.rootElement.body, d);
            m += c.writeToString(b, e);
            m += c.writeToString(d, e);
            m += c.writeToString(U.rootElement.body, e);
            return m + "</office:document-content>"
        }

        function Z(a, b) {
            runtime.loadXML(a, function (a, e) {
                if (a) b(a); else if (e) {
                    z(e);
                    Y(e.documentElement);
                    var c = u(e);
                    c && "document" === c.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === c.namespaceURI ? (F(c), A(d.DONE)) : A(d.INVALID)
                } else b("No DOM was loaded.")
            })
        }

        function C(a, b) {
            var d;
            d = U.rootElement;
            var e = d.meta;
            e || (d.meta = e = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta"), c(d, e));
            d = e;
            a && k.mapKeyValObjOntoNode(d, a, odf.Namespaces.lookupNamespaceURI);
            b && k.removeKeyElementsFromNode(d, b, odf.Namespaces.lookupNamespaceURI)
        }

        function V(a, b) {
            function e(a, b) {
                var d;
                b || (b = a);
                d = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", b);
                f[a] = d;
                f.appendChild(d)
            }

            var c = new core.Zip("", null), m = "application/vnd.oasis.opendocument." +
                a + (!0 === b ? "-template" : ""), g = runtime.byteArrayFromString(m, "utf8"), f = U.rootElement, k = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", a);
            c.save("mimetype", g, !1, new Date);
            e("meta");
            e("settings");
            e("scripts");
            e("fontFaceDecls", "font-face-decls");
            e("styles");
            e("automaticStyles", "automatic-styles");
            e("masterStyles", "master-styles");
            e("body");
            f.body.appendChild(k);
            P["/"] = m;
            P["settings.xml"] = "text/xml";
            P["meta.xml"] = "text/xml";
            P["styles.xml"] = "text/xml";
            P["content.xml"] = "text/xml";
            A(d.DONE);
            return c
        }

        function $() {
            var a, b = new Date, d = "";
            U.rootElement.settings && U.rootElement.settings.firstElementChild && (a = new xmldom.LSSerializer, d = J("document-settings"), a.filter = new odf.OdfNodeFilter, d += a.writeToString(U.rootElement.settings, odf.Namespaces.namespaceMap), d += "</office:document-settings>");
            (a = d) ? (a = runtime.byteArrayFromString(a, "utf8"), W.save("settings.xml", a, !0, b)) : W.remove("settings.xml");
            d = runtime.getWindow();
            a = "WebODF/" + webodf.Version;
            d && (a = a + " " + d.navigator.userAgent);
            C({"meta:generator": a},
                null);
            a = runtime.byteArrayFromString(G(), "utf8");
            W.save("meta.xml", a, !0, b);
            a = runtime.byteArrayFromString(D(), "utf8");
            W.save("styles.xml", a, !0, b);
            a = runtime.byteArrayFromString(O(), "utf8");
            W.save("content.xml", a, !0, b);
            a = runtime.byteArrayFromString(T(), "utf8");
            W.save("META-INF/manifest.xml", a, !0, b)
        }

        function ca(a, b) {
            $();
            W.writeAs(a, function (a) {
                b(a)
            })
        }

        var U = this, W, P = {}, aa, S = "";
        this.onstatereadychange = f;
        this.state = this.onchange = null;
        this.getMetadata = y;
        this.setRootElement = F;
        this.getContentElement = function () {
            var a;
            aa || (a = U.rootElement.body, aa = k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "text") || k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "presentation") || k.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "spreadsheet"));
            if (!aa)throw"Could not find content element in <office:body/>.";
            return aa
        };
        this.getDocumentType = function () {
            var a = U.getContentElement();
            return a && a.localName
        };
        this.isTemplate = function () {
            return "-template" === P["/"].substr(-9)
        };
        this.setIsTemplate = function (a) {
            var b = P["/"], d = "-template" === b.substr(-9);
            a !== d && (b = a ? b + "-template" : b.substr(0, b.length - 9), P["/"] = b, a = runtime.byteArrayFromString(b, "utf8"), W.save("mimetype", a, !1, new Date))
        };
        this.getPart = function (a) {
            return new odf.OdfPart(a, P[a], U, W)
        };
        this.getPartData = function (a, b) {
            W.load(a, b)
        };
        this.setMetadata = C;
        this.incrementEditingCycles = function () {
            var a = y(odf.Namespaces.metans, "editing-cycles"), a = a ? parseInt(a, 10) : 0;
            isNaN(a) && (a = 0);
            C({"meta:editing-cycles": a + 1}, null);
            return a + 1
        };
        this.createByteArray = function (a, b) {
            $();
            W.createByteArray(a, b)
        };
        this.saveAs = ca;
        this.save = function (a) {
            ca(S, a)
        };
        this.getUrl = function () {
            return S
        };
        this.setBlob = function (a, b, d) {
            d = g.convertBase64ToByteArray(d);
            W.save(a, d, !1, new Date);
            P.hasOwnProperty(a) && runtime.log(a + " has been overwritten.");
            P[a] = b
        };
        this.removeBlob = function (a) {
            var b = W.remove(a);
            runtime.assert(b, "file is not found: " + a);
            delete P[a]
        };
        this.state = d.LOADING;
        this.rootElement = function (a) {
            var b = document.createElementNS(a.namespaceURI, a.localName),
                d;
            a = new a.Type;
            for (d in a)a.hasOwnProperty(d) && (b[d] = a[d]);
            return b
        }({
            Type: odf.ODFDocumentElement,
            namespaceURI: odf.ODFDocumentElement.namespaceURI,
            localName: odf.ODFDocumentElement.localName
        });
        e === odf.OdfContainer.DocumentType.TEXT ? W = V("text") : e === odf.OdfContainer.DocumentType.TEXT_TEMPLATE ? W = V("text", !0) : e === odf.OdfContainer.DocumentType.PRESENTATION ? W = V("presentation") : e === odf.OdfContainer.DocumentType.PRESENTATION_TEMPLATE ? W = V("presentation", !0) : e === odf.OdfContainer.DocumentType.SPREADSHEET ? W = V("spreadsheet") :
                            e === odf.OdfContainer.DocumentType.SPREADSHEET_TEMPLATE ? W = V("spreadsheet", !0) : (S = e, W = new core.Zip(S, function (a, b) {
                                    W = b;
                                    a ? Z(S, function (b) {
                                            a && (W.error = a + "\n" + b, A(d.INVALID))
                                        }) : R([{path: "styles.xml", handler: B}, {
                                            path: "content.xml",
                                            handler: E
                                        }, {path: "meta.xml", handler: H}, {
                                            path: "settings.xml",
                                            handler: I
                                        }, {path: "META-INF/manifest.xml", handler: Q}])
                                }))
    };
    odf.OdfContainer.EMPTY = 0;
    odf.OdfContainer.LOADING = 1;
    odf.OdfContainer.DONE = 2;
    odf.OdfContainer.INVALID = 3;
    odf.OdfContainer.SAVING = 4;
    odf.OdfContainer.MODIFIED = 5;
    odf.OdfContainer.getContainer =
        function (a) {
            return new odf.OdfContainer(a, null)
        }
})();
odf.OdfContainer.DocumentType = {
    TEXT: 1,
    TEXT_TEMPLATE: 2,
    PRESENTATION: 3,
    PRESENTATION_TEMPLATE: 4,
    SPREADSHEET: 5,
    SPREADSHEET_TEMPLATE: 6
};
gui.AnnotatableCanvas = function () {
};
gui.AnnotatableCanvas.prototype.refreshSize = function () {
};
gui.AnnotatableCanvas.prototype.getZoomLevel = function () {
};
gui.AnnotatableCanvas.prototype.getSizer = function () {
};
gui.AnnotationViewManager = function (f, l, a, c) {
    function b(a) {
        var b = a.annotationEndElement, e = h.createRange(), c = a.getAttributeNS(odf.Namespaces.officens, "name");
        b && (e.setStart(a, a.childNodes.length), e.setEnd(b, 0), a = d.getTextNodes(e, !1), a.forEach(function (a) {
            var b;
            a:{
                for (b = a.parentNode; b.namespaceURI !== odf.Namespaces.officens || "body" !== b.localName;) {
                    if (b.namespaceURI === s && "webodf-annotationHighlight" === b.className && b.getAttribute("annotation") === c) {
                        b = !0;
                        break a
                    }
                    b = b.parentNode
                }
                b = !1
            }
            b || (b = h.createElement("span"),
                b.className = "webodf-annotationHighlight", b.setAttribute("annotation", c), a.parentNode.replaceChild(b, a), b.appendChild(a))
        }));
        e.detach()
    }

    function k(b) {
        var d = f.getSizer();
        b ? (a.style.display = "inline-block", d.style.paddingRight = e.getComputedStyle(a).width) : (a.style.display = "none", d.style.paddingRight = 0);
        f.refreshSize()
    }

    function q() {
        g.sort(function (a, b) {
            return 0 !== (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1
        })
    }

    function p() {
        var b;
        for (b = 0; b < g.length; b += 1) {
            var d = g[b], e = d.parentNode,
                c = e.nextElementSibling, h = c.nextElementSibling, k = e.parentNode, p = 0, p = g[g.indexOf(d) - 1], s = void 0, d = f.getZoomLevel();
            e.style.left = (a.getBoundingClientRect().left - k.getBoundingClientRect().left) / d + "px";
            e.style.width = a.getBoundingClientRect().width / d + "px";
            c.style.width = parseFloat(e.style.left) - 30 + "px";
            p ? (s = p.parentNode.getBoundingClientRect(), 20 >= (k.getBoundingClientRect().top - s.bottom) / d ? e.style.top = Math.abs(k.getBoundingClientRect().top - s.bottom) / d + 20 + "px" : e.style.top = "0px") : e.style.top = "0px";
            h.style.left =
                c.getBoundingClientRect().width / d + "px";
            var c = h.style, k = h.getBoundingClientRect().left / d, p = h.getBoundingClientRect().top / d, s = e.getBoundingClientRect().left / d, n = e.getBoundingClientRect().top / d, q = 0, l = 0, q = s - k, q = q * q, l = n - p, l = l * l, k = Math.sqrt(q + l);
            c.width = k + "px";
            p = Math.asin((e.getBoundingClientRect().top - h.getBoundingClientRect().top) / (d * parseFloat(h.style.width)));
            h.style.transform = "rotate(" + p + "rad)";
            h.style.MozTransform = "rotate(" + p + "rad)";
            h.style.WebkitTransform = "rotate(" + p + "rad)";
            h.style.msTransform = "rotate(" +
                p + "rad)"
        }
    }

    function n(a) {
        var b = g.indexOf(a), d = a.parentNode.parentNode;
        "div" === d.localName && (d.parentNode.insertBefore(a, d), d.parentNode.removeChild(d));
        a = a.getAttributeNS(odf.Namespaces.officens, "name");
        a = h.querySelectorAll('span.webodf-annotationHighlight[annotation="' + a + '"]');
        for (var e, d = 0; d < a.length; d += 1) {
            for (e = a.item(d); e.firstChild;)e.parentNode.insertBefore(e.firstChild, e);
            e.parentNode.removeChild(e)
        }
        -1 !== b && g.splice(b, 1);
        0 === g.length && k(!1)
    }

    var g = [], h = l.ownerDocument, d = odf.OdfUtils, e = runtime.getWindow(),
        s = "http://www.w3.org/1999/xhtml";
    runtime.assert(Boolean(e), "Expected to be run in an environment which has a global window, like a browser.");
    this.rerenderAnnotations = p;
    this.rehighlightAnnotations = function () {
        g.forEach(function (a) {
            b(a)
        })
    };
    this.getMinimumHeightForAnnotationPane = function () {
        return "none" !== a.style.display && 0 < g.length ? (g[g.length - 1].parentNode.getBoundingClientRect().bottom - a.getBoundingClientRect().top) / f.getZoomLevel() + "px" : null
    };
    this.addAnnotations = function (a) {
        0 !== a.length && (k(!0), a.forEach(function (a) {
            g.push(a);
            var e = h.createElement("div"), m = h.createElement("div"), f = h.createElement("div"), k = h.createElement("div"), p;
            e.className = "annotationWrapper";
            e.setAttribute("creator", d.getAnnotationCreator(a));
            a.parentNode.insertBefore(e, a);
            m.className = "annotationNote";
            m.appendChild(a);
            c && (p = h.createElement("div"), p.className = "annotationRemoveButton", m.appendChild(p));
            f.className = "annotationConnector horizontal";
            k.className = "annotationConnector angular";
            e.appendChild(m);
            e.appendChild(f);
            e.appendChild(k);
            a.annotationEndElement &&
            b(a)
        }), q(), p())
    };
    this.forgetAnnotation = n;
    this.forgetAnnotations = function () {
        for (; g.length;)n(g[0])
    }
};
gui.Viewport = function () {
};
gui.Viewport.prototype.scrollIntoView = function (f, l) {
};
gui.SingleScrollViewport = function (f) {
    this.scrollIntoView = function (l, a) {
        var c, b, k, q;
        q = f.offsetHeight - f.clientHeight;
        k = f.offsetWidth - f.clientWidth;
        var p = f.getBoundingClientRect();
        if (l && p) {
            c = p.left + 5;
            b = p.top + 5;
            k = p.right - (k + 5);
            q = p.bottom - (q + 5);
            if (a || l.top < b) f.scrollTop -= b - l.top; else if (l.top > q || l.bottom > q) f.scrollTop = l.bottom - l.top <= q - b ? f.scrollTop + (l.bottom - q) : f.scrollTop + (l.top - b);
            l.left < c ? f.scrollLeft -= c - l.left : l.right > k && (f.scrollLeft = l.right - l.left <= k - c ? f.scrollLeft + (l.right - k) : f.scrollLeft - (c - l.left))
        }
    }
};
(function () {
    function f(a, k, q, p, n) {
        var g, h = 0, d;
        for (d in a)if (a.hasOwnProperty(d)) {
            if (h === q) {
                g = d;
                break
            }
            h += 1
        }
        g ? k.getPartData(a[g].href, function (d, h) {
                if (d) runtime.log(d); else if (h) {
                    var m = "@font-face { font-family: " + (a[g].family || g) + "; src: url(data:application/x-font-ttf;charset=binary;base64," + c.convertUTF8ArrayToBase64(h) + ') format("truetype"); }';
                    try {
                        p.insertRule(m, p.cssRules.length)
                    } catch (l) {
                        runtime.log("Problem inserting rule in CSS: " + runtime.toJson(l) + "\nRule: " + m)
                    }
                } else runtime.log("missing font data for " +
                    a[g].href);
                f(a, k, q + 1, p, n)
            }) : n && n()
    }

    var l = xmldom.XPath, a = odf.OdfUtils, c = new core.Base64;
    odf.FontLoader = function () {
        this.loadFonts = function (b, c) {
            for (var q = b.rootElement.fontFaceDecls; c.cssRules.length;)c.deleteRule(c.cssRules.length - 1);
            if (q) {
                var p = {}, n, g, h, d;
                if (q)for (q = l.getODFElementsWithXPath(q, "style:font-face[svg:font-face-src]", odf.Namespaces.lookupNamespaceURI), n = 0; n < q.length; n += 1)g = q[n], h = g.getAttributeNS(odf.Namespaces.stylens, "name"), d = a.getNormalizedFontFamilyName(g.getAttributeNS(odf.Namespaces.svgns,
                    "font-family")), g = l.getODFElementsWithXPath(g, "svg:font-face-src/svg:font-face-uri", odf.Namespaces.lookupNamespaceURI), 0 < g.length && (g = g[0].getAttributeNS(odf.Namespaces.xlinkns, "href"), p[h] = {
                    href: g,
                    family: d
                });
                f(p, b, 0, c)
            }
        }
    }
})();
odf.Formatting = function () {
    function f(a) {
        return (a = A[a]) ? w.mergeObjects({}, a) : {}
    }

    function l() {
        for (var a = d.rootElement.fontFaceDecls, b = {}, e, c, a = a && a.firstElementChild; a;) {
            if (e = a.getAttributeNS(m, "name"))if ((c = a.getAttributeNS(s, "font-family")) || 0 < a.getElementsByTagNameNS(s, "font-face-uri").length) b[e] = c;
            a = a.nextElementSibling
        }
        return b
    }

    function a(a) {
        for (var b = d.rootElement.styles.firstElementChild; b;) {
            if (b.namespaceURI === m && "default-style" === b.localName && b.getAttributeNS(m, "family") === a)return b;
            b = b.nextElementSibling
        }
        return null
    }

    function c(a, b, e) {
        var c, h, g;
        e = e || [d.rootElement.automaticStyles, d.rootElement.styles];
        for (g = 0; g < e.length; g += 1)for (c = e[g], c = c.firstElementChild; c;) {
            h = c.getAttributeNS(m, "name");
            if (c.namespaceURI === m && "style" === c.localName && c.getAttributeNS(m, "family") === b && h === a || "list-style" === b && c.namespaceURI === x && "list-style" === c.localName && h === a || "data" === b && c.namespaceURI === t && h === a)return c;
            c = c.nextElementSibling
        }
        return null
    }

    function b(a) {
        for (var b, d, e, c, h = {}, g = a.firstElementChild; g;) {
            if (g.namespaceURI === m)for (e =
                                              h[g.nodeName] = {}, d = g.attributes, b = 0; b < d.length; b += 1)c = d.item(b), e[c.name] = c.value;
            g = g.nextElementSibling
        }
        d = a.attributes;
        for (b = 0; b < d.length; b += 1)c = d.item(b), h[c.name] = c.value;
        return h
    }

    function k(e, h) {
        for (var g = d.rootElement.styles, k, p = {}, s = e.getAttributeNS(m, "family"), n = e; n;)k = b(n), p = w.mergeObjects(k, p), n = (k = n.getAttributeNS(m, "parent-style-name")) ? c(k, s, [g]) : null;
        if (n = a(s)) k = b(n), p = w.mergeObjects(k, p);
        !1 !== h && (k = f(s), p = w.mergeObjects(k, p));
        return p
    }

    function q(a, b) {
        function c(a) {
            Object.keys(a).forEach(function (b) {
                Object.keys(a[b]).forEach(function (a) {
                    f +=
                        "|" + b + ":" + a + "|"
                })
            })
        }

        for (var m = a.nodeType === Node.TEXT_NODE ? a.parentNode : a, h, g = [], f = "", k = !1; m && !v.isInlineRoot(m) && m.parentNode !== d.rootElement;)!k && v.isGroupingElement(m) && (k = !0), (h = e.determineStylesForNode(m)) && g.push(h), m = m.parentNode;
        k && (g.forEach(c), b && (b[f] = g));
        return k ? g : void 0
    }

    function p(a) {
        var b = {orderedStyles: [], styleProperties: {}};
        a.forEach(function (a) {
            Object.keys(a).forEach(function (e) {
                var h = Object.keys(a[e])[0], g = {name: h, family: e, displayName: void 0, isCommonStyle: !1}, f;
                (f = c(h, e)) ? (e = k(f),
                        b.styleProperties = w.mergeObjects(e, b.styleProperties), g.displayName = f.getAttributeNS(m, "display-name") || void 0, g.isCommonStyle = f.parentNode === d.rootElement.styles) : runtime.log("No style element found for '" + h + "' of family '" + e + "'");
                b.orderedStyles.push(g)
            })
        });
        return b
    }

    function n(a, b) {
        var d = {}, e = [];
        b || (b = {});
        a.forEach(function (a) {
            q(a, d)
        });
        Object.keys(d).forEach(function (a) {
            b[a] || (b[a] = p(d[a]));
            e.push(b[a])
        });
        return e
    }

    function g(a) {
        for (var b = d.rootElement.masterStyles.firstElementChild; b && (b.namespaceURI !==
        m || "master-page" !== b.localName || b.getAttributeNS(m, "name") !== a);)b = b.nextElementSibling;
        return b
    }

    function h(a, b) {
        var d;
        a && (d = u.convertMeasure(a, "px"));
        void 0 === d && b && (d = u.convertMeasure(b, "px"));
        return d
    }

    var d, e = new odf.StyleInfo, s = odf.Namespaces.svgns, m = odf.Namespaces.stylens, x = odf.Namespaces.textns, t = odf.Namespaces.numberns, y = odf.Namespaces.fons, v = odf.OdfUtils, r = core.DomUtils, w = new core.Utils, u = new core.CSSUnits, A = {paragraph: {"style:paragraph-properties": {"fo:text-align": "left"}}};
    this.getSystemDefaultStyleAttributes =
        f;
    this.setOdfContainer = function (a) {
        d = a
    };
    this.getFontMap = l;
    this.getAvailableParagraphStyles = function () {
        for (var a = d.rootElement.styles, b, e, c = [], a = a && a.firstElementChild; a;)"style" === a.localName && a.namespaceURI === m && (b = a.getAttributeNS(m, "family"), "paragraph" === b && (b = a.getAttributeNS(m, "name"), e = a.getAttributeNS(m, "display-name") || b, b && e && c.push({
            name: b,
            displayName: e
        }))), a = a.nextElementSibling;
        return c
    };
    this.isStyleUsed = function (a) {
        var b, c = d.rootElement;
        b = e.hasDerivedStyles(c, odf.Namespaces.lookupNamespaceURI,
            a);
        a = (new e.UsedStyleList(c.styles)).uses(a) || (new e.UsedStyleList(c.automaticStyles)).uses(a) || (new e.UsedStyleList(c.body)).uses(a);
        return b || a
    };
    this.getDefaultStyleElement = a;
    this.getStyleElement = c;
    this.getStyleAttributes = b;
    this.getInheritedStyleAttributes = k;
    this.getFirstCommonParentStyleNameOrSelf = function (a) {
        var b = d.rootElement.styles, e;
        if (e = c(a, "paragraph", [d.rootElement.automaticStyles]))if (a = e.getAttributeNS(m, "parent-style-name"), !a)return null;
        return (e = c(a, "paragraph", [b])) ? a : null
    };
    this.hasParagraphStyle =
        function (a) {
            return Boolean(c(a, "paragraph"))
        };
    this.getAppliedStyles = n;
    this.getAppliedStylesForElement = function (a, b) {
        return n([a], b)[0]
    };
    this.updateStyle = function (a, b) {
        var e, c;
        r.mapObjOntoNode(a, b, odf.Namespaces.lookupNamespaceURI);
        (e = (e = b["style:text-properties"]) && e["style:font-name"]) && !l().hasOwnProperty(e) && (c = a.ownerDocument.createElementNS(m, "style:font-face"), c.setAttributeNS(m, "style:name", e), c.setAttributeNS(s, "svg:font-family", e), d.rootElement.fontFaceDecls.appendChild(c))
    };
    this.createDerivedStyleObject =
        function (a, e, m) {
            var h = c(a, e);
            runtime.assert(Boolean(h), "No style element found for '" + a + "' of family '" + e + "'");
            a = h.parentNode === d.rootElement.styles ? {"style:parent-style-name": a} : b(h);
            a["style:family"] = e;
            w.mergeObjects(a, m);
            return a
        };
    this.getDefaultTabStopDistance = function () {
        for (var b = a("paragraph"), b = b && b.firstElementChild, d; b;)b.namespaceURI === m && "paragraph-properties" === b.localName && (d = b.getAttributeNS(m, "tab-stop-distance")), b = b.nextElementSibling;
        d || (d = "1.25cm");
        return v.parseNonNegativeLength(d)
    };
    this.getMasterPageElement = g;
    this.getContentSize = function (a, b) {
        var e, f, k, p, n, s, q, l, x, t;
        a:{
            f = c(a, b);
            runtime.assert("paragraph" === b || "table" === b, "styleFamily must be either paragraph or table");
            if (f) {
                if (f = f.getAttributeNS(m, "master-page-name")) (e = g(f)) || runtime.log("WARN: No master page definition found for " + f);
                e || (e = g("Standard"));
                e || (e = d.rootElement.masterStyles.getElementsByTagNameNS(m, "master-page")[0]) || runtime.log("WARN: Document has no master pages defined");
                if (e)for (f = e.getAttributeNS(m, "page-layout-name"),
                               k = d.rootElement.automaticStyles.getElementsByTagNameNS(m, "page-layout"), p = 0; p < k.length; p += 1)if (e = k.item(p), e.getAttributeNS(m, "name") === f)break a
            }
            e = null
        }
        e || (e = r.getDirectChild(d.rootElement.styles, m, "default-page-layout"));
        (e = r.getDirectChild(e, m, "page-layout-properties")) ? ("landscape" === e.getAttributeNS(m, "print-orientation") ? (f = "29.7cm", k = "21.001cm") : (f = "21.001cm", k = "29.7cm"), f = h(e.getAttributeNS(y, "page-width"), f), k = h(e.getAttributeNS(y, "page-height"), k), p = h(e.getAttributeNS(y, "margin")), void 0 ===
            p ? (p = h(e.getAttributeNS(y, "margin-left"), "2cm"), n = h(e.getAttributeNS(y, "margin-right"), "2cm"), s = h(e.getAttributeNS(y, "margin-top"), "2cm"), q = h(e.getAttributeNS(y, "margin-bottom"), "2cm")) : p = n = s = q = p, l = h(e.getAttributeNS(y, "padding")), void 0 === l ? (l = h(e.getAttributeNS(y, "padding-left"), "0cm"), x = h(e.getAttributeNS(y, "padding-right"), "0cm"), t = h(e.getAttributeNS(y, "padding-top"), "0cm"), e = h(e.getAttributeNS(y, "padding-bottom"), "0cm")) : l = x = t = e = l) : (f = h("21.001cm"), k = h("29.7cm"), p = n = s = q = p = h("2cm"), l = x = t = e = l =
                h("0cm"));
        return {width: f - p - n - l - x, height: k - s - q - t - e}
    }
};
(function () {
    var f = odf.Namespaces.stylens, l = odf.Namespaces.textns, a = {
        graphic: "draw",
        "drawing-page": "draw",
        paragraph: "text",
        presentation: "presentation",
        ruby: "text",
        section: "text",
        table: "table",
        "table-cell": "table",
        "table-column": "table",
        "table-row": "table",
        text: "text",
        list: "text",
        page: "office"
    };
    odf.StyleTreeNode = function (a) {
        this.derivedStyles = {};
        this.element = a
    };
    odf.StyleTree = function (c, b) {
        function k(a) {
            var b, e, c, m = {};
            if (!a)return m;
            for (a = a.firstElementChild; a;) {
                if (e = a.namespaceURI !== f || "style" !== a.localName &&
                    "default-style" !== a.localName ? a.namespaceURI === l && "list-style" === a.localName ? "list" : a.namespaceURI !== f || "page-layout" !== a.localName && "default-page-layout" !== a.localName ? void 0 : "page" : a.getAttributeNS(f, "family")) (b = a.getAttributeNS(f, "name")) || (b = ""), m.hasOwnProperty(e) ? c = m[e] : m[e] = c = {}, c[b] = a;
                a = a.nextElementSibling
            }
            return m
        }

        function q(a, b) {
            if (a.hasOwnProperty(b))return a[b];
            var e = null, c = Object.keys(a), m;
            for (m = 0; m < c.length && !(e = q(a[c[m]].derivedStyles, b)); m += 1);
            return e
        }

        function p(a, b, e) {
            var c, m,
                g;
            if (!b.hasOwnProperty(a))return null;
            c = new odf.StyleTreeNode(b[a]);
            m = c.element.getAttributeNS(f, "parent-style-name");
            g = null;
            m && (g = q(e, m) || p(m, b, e));
            g ? g.derivedStyles[a] = c : e[a] = c;
            delete b[a];
            return c
        }

        function n(a, b) {
            a && Object.keys(a).forEach(function (e) {
                p(e, a, b)
            })
        }

        var g = {};
        this.getStyleTree = function () {
            return g
        };
        (function () {
            var h, d, e;
            d = k(c);
            e = k(b);
            Object.keys(a).forEach(function (a) {
                h = g[a] = {};
                n(d[a], h);
                n(e[a], h)
            })
        })()
    }
})();
(function () {
    function f(a, b) {
        try {
            a.insertRule(b, a.cssRules.length)
        } catch (c) {
            runtime.log("cannot load rule: " + b + " - " + c)
        }
    }

    function l(a, b) {
        this.listCounterCount = 0;
        this.contentRules = a;
        this.counterIdStack = [];
        this.continuedCounterIdStack = b
    }

    function a(a) {
        function b(e, c, h, p) {
            var q = c.namespaceURI === k && "list" === c.localName, l = c.namespaceURI === k && "list-item" === c.localName;
            if (q || l) {
                if (q) {
                    var q = h += 1, r, w, u;
                    p.listCounterCount += 1;
                    l = e + "-level" + q + "-" + p.listCounterCount;
                    c.setAttributeNS("urn:webodf:names:helper", "counter-id",
                        l);
                    r = p.continuedCounterIdStack.shift();
                    r || (r = l, d += l + " 1 ", w = 'text|list[webodfhelper|counter-id="' + l + '"] > text|list-item:first-child > :not(text|list):first-child:before', w += "{", w += "counter-increment: " + r + " 0;", w += "}", f(a, w));
                    for (; p.counterIdStack.length >= q;)p.counterIdStack.pop();
                    p.counterIdStack.push(r);
                    u = p.contentRules[q.toString()] || "";
                    for (w = 1; w <= q; w += 1)u = u.replace(w + "webodf-listLevel", p.counterIdStack[w - 1]);
                    w = 'text|list[webodfhelper|counter-id="' + l + '"] > text|list-item > :not(text|list):first-child:before';
                    w += "{";
                    w += u;
                    w += "counter-increment: " + r + ";";
                    w += "}";
                    f(a, w)
                }
                for (c = c.firstElementChild; c;)b(e, c, h, p), c = c.nextElementSibling
            } else p.continuedCounterIdStack = []
        }

        var c = 0, d = "", e = {};
        this.createCounterRules = function (a, d, f) {
            var k = d.getAttributeNS(q, "id"), p = [];
            f && (f = f.getAttributeNS("urn:webodf:names:helper", "counter-id"), p = e[f].slice(0));
            a = new l(a, p);
            k ? k = "Y" + k : (c += 1, k = "X" + c);
            b(k, d, 0, a);
            e[k + "-level1-1"] = a.counterIdStack
        };
        this.initialiseCreatedCounters = function () {
            var b;
            b = "office|document{" + ("counter-reset: " + d +
                ";");
            b += "}";
            f(a, b)
        }
    }

    var c = odf.Namespaces.fons, b = odf.Namespaces.stylens, k = odf.Namespaces.textns, q = odf.Namespaces.xmlns, p = {
        1: "decimal",
        a: "lower-latin",
        A: "upper-latin",
        i: "lower-roman",
        I: "upper-roman"
    };
    odf.ListStyleToCss = function () {
        function n(a) {
            var b = s.parseLength(a);
            return b ? e.convert(b.value, b.unit, "px") : (runtime.log("Could not parse value '" + a + "'."), 0)
        }

        function g(a) {
            return a.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
        }

        function h(a, b) {
            var d;
            a && (d = a.getAttributeNS(k, "style-name"));
            return d === b
        }

        function d(d,
                   e, c) {
            e = e.getElementsByTagNameNS(k, "list");
            d = new a(d);
            var f, n, s, l, u, A, F = {}, B;
            for (B = 0; B < e.length; B += 1)if (f = e.item(B), A = f.getAttributeNS(k, "style-name")) {
                s = f.getAttributeNS(k, "continue-numbering");
                l = f.getAttributeNS(k, "continue-list");
                (u = f.getAttributeNS(q, "id")) && (F[u] = f);
                u = c[A].element.firstElementChild;
                for (var E = void 0, H = {}; u;) {
                    var E = (E = u.getAttributeNS(k, "level")) && parseInt(E, 10), I = H, Q = u, N = "", z = void 0, Y = void 0, R = z = void 0;
                    if ("list-level-style-number" === Q.localName) {
                        var J = Q, N = J.getAttributeNS(b, "num-format"),
                            z = J.getAttributeNS(b, "num-suffix") || "", Y = J.getAttributeNS(b, "num-prefix") || "", G = "", ba = J.getAttributeNS(k, "level"), J = J.getAttributeNS(k, "display-levels");
                        Y && (G += '"' + g(Y) + '"\n');
                        if (p.hasOwnProperty(N))for (ba = ba ? parseInt(ba, 10) : 1, J = J ? parseInt(J, 10) : 1; 0 < J;)G += " counter(" + (ba - J + 1) + "webodf-listLevel," + p[N] + ")", 1 < J && (G += '"."'), J -= 1; else G = N ? G + (' "' + N + '"') : G + ' ""';
                        N = "content:" + G + ' "' + g(z) + '"'
                    } else"list-level-style-image" === Q.localName ? N = "content: none" : "list-level-style-bullet" === Q.localName && (N = Q.getAttributeNS(k,
                            "bullet-char"), N = 'content: "' + g(N) + '"');
                    if (z = Q.getElementsByTagNameNS(b, "list-level-properties")[0]) Y = z.getAttributeNS(k, "list-level-position-and-space-mode"), "label-alignment" === Y && ((z = z.getElementsByTagNameNS(b, "list-level-label-alignment")[0]) && (R = z.getAttributeNS(k, "label-followed-by")), "space" === R && (N += ' "\\a0"'));
                    I[E] = "\n" + N + ";\n";
                    u = u.nextElementSibling
                }
                u = H;
                s && !l && h(n, A) ? d.createCounterRules(u, f, n) : l && h(F[l], A) ? d.createCounterRules(u, f, F[l]) : d.createCounterRules(u, f);
                n = f
            }
            d.initialiseCreatedCounters()
        }

        var e = new core.CSSUnits, s = odf.OdfUtils;
        this.applyListStyles = function (a, e, h) {
            var g, p;
            (g = e.list) && Object.keys(g).forEach(function (d) {
                p = g[d];
                for (var e = p.element.firstElementChild; e;) {
                    if (e.namespaceURI === k) {
                        for (var h = a, s = e, q = 'text|list[text|style-name="' + d + '"]', l = s.getAttributeNS(k, "level"), x = void 0, t = void 0, I = t = void 0, Q = void 0, N = void 0, z = x = void 0, Y = void 0, R = void 0, J = void 0, Q = void 0, I = (t = s.getElementsByTagNameNS(b, "list-level-properties")[0]) && t.getAttributeNS(k, "list-level-position-and-space-mode"),
                                 Q = t && t.getElementsByTagNameNS(b, "list-level-label-alignment")[0], x = l = l && parseInt(l, 10); 1 < x;)q += " > text|list-item > text|list", x -= 1;
                        x = t && t.getAttributeNS(c, "text-align") || "left";
                        switch (x) {
                            case "end":
                                x = "right";
                                break;
                            case "start":
                                x = "left"
                        }
                        "label-alignment" === I ? (N = Q && Q.getAttributeNS(c, "margin-left") || "0px", R = Q && Q.getAttributeNS(c, "text-indent") || "0px", J = Q && Q.getAttributeNS(k, "label-followed-by"), Q = n(N)) : (N = t && t.getAttributeNS(k, "space-before") || "0px", z = t && t.getAttributeNS(k, "min-label-width") || "0px",
                                Y = t && t.getAttributeNS(k, "min-label-distance") || "0px", Q = n(N) + n(z));
                        t = q + " > text|list-item";
                        t += "{";
                        t += "margin-left: " + Q + "px;";
                        t += "}";
                        f(h, t);
                        t = q + " > text|list-item > text|list";
                        t += "{";
                        t += "margin-left: " + -Q + "px;";
                        t += "}";
                        f(h, t);
                        t = q + " > text|list-item > :not(text|list):first-child:before";
                        t += "{";
                        t += "text-align: " + x + ";";
                        t += "display: inline-block;";
                        "label-alignment" === I ? (t += "margin-left: " + R + ";", "listtab" === J && (t += "padding-right: 0.2cm;")) : (t += "min-width: " + z + ";", t += "margin-left: " + (0 === parseFloat(z) ? "" :
                                    "-") + z + ";", t += "padding-right: " + Y + ";");
                        t += "}";
                        f(h, t)
                    }
                    e = e.nextElementSibling
                }
            });
            d(a, h, g)
        }
    }
})();
odf.LazyStyleProperties = function (f, l) {
    var a = {};
    this.value = function (c) {
        var b;
        a.hasOwnProperty(c) ? b = a[c] : (b = l[c](), void 0 === b && f && (b = f.value(c)), a[c] = b);
        return b
    };
    this.reset = function (c) {
        f = c;
        a = {}
    }
};
odf.StyleParseUtils = function () {
    function f(a) {
        var c, b;
        a = (a = /(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px))/.exec(a)) ? {
                value: parseFloat(a[1]),
                unit: a[3]
            } : null;
        b = a && a.unit;
        "px" === b ? c = a.value : "cm" === b ? c = 96 * (a.value / 2.54) : "mm" === b ? c = 96 * (a.value / 25.4) : "in" === b ? c = 96 * a.value : "pt" === b ? c = a.value / 0.75 : "pc" === b && (c = 16 * a.value);
        return c
    }

    var l = odf.Namespaces.stylens;
    this.parseLength = f;
    this.parsePositiveLengthOrPercent = function (a, c, b) {
        var k;
        a && (k = parseFloat(a.substr(0,
            a.indexOf("%"))), isNaN(k) && (k = void 0));
        var q;
        void 0 !== k ? (b && (q = b.value(c)), k = void 0 === q ? void 0 : k * (q / 100)) : k = f(a);
        return k
    };
    this.getPropertiesElement = function (a, c, b) {
        for (c = b ? b.nextElementSibling : c.firstElementChild; null !== c && (c.localName !== a || c.namespaceURI !== l);)c = c.nextElementSibling;
        return c
    };
    this.parseAttributeList = function (a) {
        a && (a = a.replace(/^\s*(.*?)\s*$/g, "$1"));
        return a && 0 < a.length ? a.split(/\s+/) : []
    }
};
odf.Style2CSS = function () {
    function f(a, b, d) {
        var e = [];
        d = d.derivedStyles;
        var c;
        var h = y[a], m;
        void 0 === h ? b = null : (m = b ? "[" + h + '|style-name="' + b + '"]' : "", "presentation" === h && (h = "draw", m = b ? '[presentation|style-name="' + b + '"]' : ""), b = h + "|" + v[a].join(m + "," + h + "|") + m);
        null !== b && e.push(b);
        for (c in d)d.hasOwnProperty(c) && (b = f(a, c, d[c]), e = e.concat(b));
        return e
    }

    function l(a) {
        var b = "", d = "", b = null;
        if ("default-style" === a.localName)return null;
        b = a.getAttributeNS(h, "parent-style-name");
        d = a.getAttributeNS(h, "family");
        return b =
            T.getODFElementsWithXPath(G, b ? "//style:*[@style:name='" + b + "'][@style:family='" + d + "']" : "//style:default-style[@style:family='" + d + "']", odf.Namespaces.lookupNamespaceURI)[0]
    }

    function a(a, b) {
        var d = "", e, c, m;
        for (e = 0; e < b.length; e += 1)if (c = b[e], m = a.getAttributeNS(c[0], c[1])) {
            m = m.trim();
            if (N.hasOwnProperty(c[1])) {
                var g = m, f = g.indexOf(" "), k = void 0;
                m = void 0;
                -1 !== f ? (k = g.substring(0, f), m = g.substring(f)) : (k = g, m = "");
                (k = R.parseLength(k)) && "pt" === k.unit && 0.75 > k.value && (g = "0.75pt" + m);
                m = g
            } else if (z.hasOwnProperty(c[1])) {
                var g =
                    a, f = c[0], k = c[1], p = R.parseLength(m), n = void 0, s = void 0, q = void 0, r = void 0, q = void 0;
                if (p && "%" === p.unit) {
                    n = p.value / 100;
                    s = l(g.parentNode);
                    for (r = "0"; s;) {
                        if (q = x.getDirectChild(s, h, "paragraph-properties"))if (q = R.parseLength(q.getAttributeNS(f, k))) {
                            if ("%" !== q.unit) {
                                r = q.value * n + q.unit;
                                break
                            }
                            n *= q.value / 100
                        }
                        s = l(s)
                    }
                    m = r
                }
            }
            c[2] && (d += c[2] + ":" + m + ";")
        }
        return d
    }

    function c(a, b, d, e) {
        return b + b + d + d + e + e
    }

    function b(a, d) {
        var e = [a], c = d.derivedStyles;
        Object.keys(c).forEach(function (a) {
            a = b(a, c[a]);
            e = e.concat(a)
        });
        return e
    }

    function k(a,
               d, e, c) {
        function g(b, d) {
            var e = [], c;
            b.forEach(function (a) {
                h.forEach(function (b) {
                    e.push('draw|page[webodfhelper|page-style-name="' + b + '"] draw|frame[presentation|class="' + a + '"]')
                })
            });
            0 < e.length && (c = e.join(",") + "{visibility:" + d + ";}", a.insertRule(c, a.cssRules.length))
        }

        var h = b(d, c), f = [], k = [];
        ["page-number", "date-time", "header", "footer"].forEach(function (a) {
            var b;
            b = e.getAttributeNS(m, "display-" + a);
            "true" === b ? f.push(a) : "false" === b && k.push(a)
        });
        g(f, "visible");
        g(k, "hidden")
    }

    function q(b, d, z, N) {
        var v, y;
        if ("page" ===
            d) {
            var G = N.element, T = "", P, aa;
            aa = P = "";
            z = x.getDirectChild(G, h, "page-layout-properties");
            var S;
            if (z)if (S = G.getAttributeNS(h, "name"), T += a(z, I), (P = x.getDirectChild(z, h, "background-image")) && (aa = P.getAttributeNS(s, "href")) && (T = T + ("background-image: url('odfkit:" + aa + "');") + a(P, w)), "presentation" === J)for (G = (G = x.getDirectChild(G.parentNode.parentNode, g, "master-styles")) && G.firstElementChild; G;)G.namespaceURI === h && "master-page" === G.localName && G.getAttributeNS(h, "page-layout-name") === S && (aa = G.getAttributeNS(h,
                "name"), P = 'draw|page[draw|master-page-name="' + aa + '"] {' + T + "}", aa = 'office|body, draw|page[draw|master-page-name="' + aa + '"] {' + a(z, Q) + " }", b.insertRule(P, b.cssRules.length), b.insertRule(aa, b.cssRules.length)), G = G.nextElementSibling; else"text" === J && (P = "office|text {" + T + "}", aa = "office|body {width: " + z.getAttributeNS(n, "page-width") + ";}", b.insertRule(P, b.cssRules.length), b.insertRule(aa, b.cssRules.length))
        } else {
            T = f(d, z, N).join(",");
            S = "";
            if (G = x.getDirectChild(N.element, h, "text-properties")) {
                var L = G, ea = y =
                    "";
                P = "";
                aa = 1;
                G = "" + a(L, r);
                v = L.getAttributeNS(h, "text-underline-style");
                "solid" === v && (y += " underline");
                v = L.getAttributeNS(h, "text-line-through-style");
                "solid" === v && (y += " line-through");
                y.length && (G = G + ("text-decoration:" + y + ";\n") + ("text-decoration-line:" + y + ";\n"), G += "-moz-text-decoration-line:" + y + ";\n");
                v = L.getAttributeNS(h, "text-line-through-type");
                switch (v) {
                    case "double":
                        ea += " double";
                        break;
                    case "single":
                        ea += " single"
                }
                ea && (G += "text-decoration-style:" + ea + ";\n", G += "-moz-text-decoration-style:" + ea + ";\n");
                if (y = L.getAttributeNS(h, "font-name") || L.getAttributeNS(n, "font-family")) v = Y[y], G += "font-family: " + (v || y) + ";";
                if (v = L.getAttributeNS(h, "text-position")) y = t.parseAttributeList(v), v = y[0], y = y[1], G += "vertical-align: " + v + "\n; ", y && (aa = parseFloat(y) / 100);
                if (L.hasAttributeNS(n, "font-size") || 1 !== aa) {
                    for (L = L.parentNode; L;) {
                        if (v = (v = x.getDirectChild(L, h, "text-properties")) ? R.parseFoFontSize(v.getAttributeNS(n, "font-size")) : null) {
                            if ("%" !== v.unit) {
                                P = "font-size: " + v.value * aa + v.unit + ";";
                                break
                            }
                            aa *= v.value / 100
                        }
                        L = l(L)
                    }
                    P ||
                    (P = "font-size: " + parseFloat(ba) * aa + D.getUnits(ba) + ";")
                }
                G += P;
                S += G
            }
            if (G = x.getDirectChild(N.element, h, "paragraph-properties")) P = G, G = "" + a(P, u), (aa = x.getDirectChild(P, h, "background-image")) && (L = aa.getAttributeNS(s, "href")) && (G = G + ("background-image: url('odfkit:" + L + "');") + a(aa, w)), (P = P.getAttributeNS(n, "line-height")) && "normal" !== P && (P = R.parseFoLineHeight(P), G = "%" !== P.unit ? G + ("line-height: " + P.value + P.unit + ";") : G + ("line-height: " + P.value / 100 + ";")), S += G;
            if (G = x.getDirectChild(N.element, h, "graphic-properties")) L =
                G, G = "" + a(L, A), P = L.getAttributeNS(p, "opacity"), aa = L.getAttributeNS(p, "fill"), L = L.getAttributeNS(p, "fill-color"), "solid" === aa || "hatch" === aa ? L && "none" !== L ? (P = isNaN(parseFloat(P)) ? 1 : parseFloat(P) / 100, aa = L.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, c), (L = (aa = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(aa)) ? {
                            r: parseInt(aa[1], 16),
                            g: parseInt(aa[2], 16),
                            b: parseInt(aa[3], 16)
                        } : null) && (G += "background-color: rgba(" + L.r + "," + L.g + "," + L.b + "," + P + ");")) : G += "background: none;" : "none" === aa && (G += "background: none;"),
                S += G;
            if (G = x.getDirectChild(N.element, h, "drawing-page-properties")) P = G, aa = "" + a(P, A), "true" === P.getAttributeNS(m, "background-visible") && (aa += "background: none;"), S += aa, k(b, z, G, N);
            if (G = x.getDirectChild(N.element, h, "table-cell-properties")) z = S, S = "" + a(G, F), S = z + S;
            if (G = x.getDirectChild(N.element, h, "table-row-properties")) z = S, S = "" + a(G, E), S = z + S;
            if (G = x.getDirectChild(N.element, h, "table-column-properties")) z = S, S = "" + a(G, B), S = z + S;
            if (G = x.getDirectChild(N.element, h, "table-properties")) z = S, S = "" + a(G, H), G = G.getAttributeNS(e,
                "border-model"), "collapsing" === G ? S += "border-collapse:collapse;" : "separating" === G && (S += "border-collapse:separate;"), S = z + S;
            0 !== S.length && b.insertRule(T + "{" + S + "}", b.cssRules.length)
        }
        for (var ga in N.derivedStyles)N.derivedStyles.hasOwnProperty(ga) && q(b, d, ga, N.derivedStyles[ga])
    }

    var p = odf.Namespaces.drawns, n = odf.Namespaces.fons, g = odf.Namespaces.officens, h = odf.Namespaces.stylens, d = odf.Namespaces.svgns, e = odf.Namespaces.tablens, s = odf.Namespaces.xlinkns, m = odf.Namespaces.presentationns, x = core.DomUtils, t = new odf.StyleParseUtils,
        y = {
            graphic: "draw",
            "drawing-page": "draw",
            paragraph: "text",
            presentation: "presentation",
            ruby: "text",
            section: "text",
            table: "table",
            "table-cell": "table",
            "table-column": "table",
            "table-row": "table",
            text: "text",
            list: "text",
            page: "office"
        }, v = {
            graphic: "circle connected control custom-shape ellipse frame g line measure page page-thumbnail path polygon polyline rect regular-polygon".split(" "),
            paragraph: "alphabetical-index-entry-template h illustration-index-entry-template index-source-style object-index-entry-template p table-index-entry-template table-of-content-entry-template user-index-entry-template".split(" "),
            presentation: "caption circle connector control custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),
            "drawing-page": "caption circle connector control page custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),
            ruby: ["ruby", "ruby-text"],
            section: "alphabetical-index bibliography illustration-index index-title object-index section table-of-content table-index user-index".split(" "),
            table: ["background",
                "table"],
            "table-cell": "body covered-table-cell even-columns even-rows first-column first-row last-column last-row odd-columns odd-rows table-cell".split(" "),
            "table-column": ["table-column"],
            "table-row": ["table-row"],
            text: "a index-entry-chapter index-entry-link-end index-entry-link-start index-entry-page-number index-entry-span index-entry-tab-stop index-entry-text index-title-template linenumbering-configuration list-level-style-number list-level-style-bullet outline-level-style span".split(" "),
            list: ["list-item"]
        }, r = [[n, "color", "color"], [n, "background-color", "background-color"], [n, "font-weight", "font-weight"], [n, "font-style", "font-style"]], w = [[h, "repeat", "background-repeat"]], u = [[n, "background-color", "background-color"], [n, "text-align", "text-align"], [n, "text-indent", "text-indent"], [n, "padding", "padding"], [n, "padding-left", "padding-left"], [n, "padding-right", "padding-right"], [n, "padding-top", "padding-top"], [n, "padding-bottom", "padding-bottom"], [n, "border-left", "border-left"], [n, "border-right",
            "border-right"], [n, "border-top", "border-top"], [n, "border-bottom", "border-bottom"], [n, "margin", "margin"], [n, "margin-left", "margin-left"], [n, "margin-right", "margin-right"], [n, "margin-top", "margin-top"], [n, "margin-bottom", "margin-bottom"], [n, "border", "border"]], A = [[n, "background-color", "background-color"], [n, "min-height", "min-height"], [p, "stroke", "border"], [d, "stroke-color", "border-color"], [d, "stroke-width", "border-width"], [n, "border", "border"], [n, "border-left", "border-left"], [n, "border-right", "border-right"],
            [n, "border-top", "border-top"], [n, "border-bottom", "border-bottom"]], F = [[n, "background-color", "background-color"], [n, "border-left", "border-left"], [n, "border-right", "border-right"], [n, "border-top", "border-top"], [n, "border-bottom", "border-bottom"], [n, "border", "border"]], B = [[h, "column-width", "width"]], E = [[h, "row-height", "height"], [n, "keep-together", null]], H = [[h, "width", "width"], [n, "margin-left", "margin-left"], [n, "margin-right", "margin-right"], [n, "margin-top", "margin-top"], [n, "margin-bottom", "margin-bottom"]],
        I = [[n, "background-color", "background-color"], [n, "padding", "padding"], [n, "padding-left", "padding-left"], [n, "padding-right", "padding-right"], [n, "padding-top", "padding-top"], [n, "padding-bottom", "padding-bottom"], [n, "border", "border"], [n, "border-left", "border-left"], [n, "border-right", "border-right"], [n, "border-top", "border-top"], [n, "border-bottom", "border-bottom"], [n, "margin", "margin"], [n, "margin-left", "margin-left"], [n, "margin-right", "margin-right"], [n, "margin-top", "margin-top"], [n, "margin-bottom", "margin-bottom"]],
        Q = [[n, "page-width", "width"], [n, "page-height", "height"]], N = {
            border: !0,
            "border-left": !0,
            "border-right": !0,
            "border-top": !0,
            "border-bottom": !0,
            "stroke-width": !0
        }, z = {
            margin: !0,
            "margin-left": !0,
            "margin-right": !0,
            "margin-top": !0,
            "margin-bottom": !0
        }, Y = {}, R = odf.OdfUtils, J, G, ba, T = xmldom.XPath, D = new core.CSSUnits;
    this.style2css = function (a, b, d, e, c) {
        function m(a, b) {
            g = "@namespace " + a + " url(" + b + ");";
            try {
                d.insertRule(g, d.cssRules.length)
            } catch (e) {
            }
        }

        var g, h, f;
        for (G = b; d.cssRules.length;)d.deleteRule(d.cssRules.length -
            1);
        odf.Namespaces.forEachPrefix(m);
        m("webodfhelper", "urn:webodf:names:helper");
        Y = e;
        J = a;
        ba = runtime.getWindow().getComputedStyle(document.body, null).getPropertyValue("font-size") || "12pt";
        for (f in y)if (y.hasOwnProperty(f))for (h in a = c[f], a)a.hasOwnProperty(h) && q(d, f, h, a[h])
    }
};
(function () {
    function f(l, a) {
        var c = this;
        this.getDistance = function (a) {
            var f = c.x - a.x;
            a = c.y - a.y;
            return Math.sqrt(f * f + a * a)
        };
        this.getCenter = function (a) {
            return new f((c.x + a.x) / 2, (c.y + a.y) / 2)
        };
        c.x = l;
        c.y = a
    }

    gui.ZoomHelper = function () {
        function l(a, b, d, c) {
            a = c ? "translate3d(" + a + "px, " + b + "px, 0) scale3d(" + d + ", " + d + ", 1)" : "translate(" + a + "px, " + b + "px) scale(" + d + ")";
            e.style.WebkitTransform = a;
            e.style.MozTransform = a;
            e.style.msTransform = a;
            e.style.OTransform = a;
            e.style.transform = a
        }

        function a(a) {
            a ? l(-s.x, -s.y, t, !0) : (l(0,
                    0, t, !0), l(0, 0, t, !1))
        }

        function c(a) {
            if (r && B) {
                var b = r.style.overflow, d = r.classList.contains("webodf-customScrollbars");
                a && d || !a && !d || (a ? (r.classList.add("webodf-customScrollbars"), r.style.overflow = "hidden", runtime.requestAnimationFrame(function () {
                        r.style.overflow = b
                    })) : r.classList.remove("webodf-customScrollbars"))
            }
        }

        function b() {
            l(-s.x, -s.y, t, !0);
            r.scrollLeft = 0;
            r.scrollTop = 0;
            E = w.style.overflow;
            w.style.overflow = "visible";
            c(!1)
        }

        function k() {
            l(0, 0, t, !0);
            r.scrollLeft = s.x;
            r.scrollTop = s.y;
            w.style.overflow =
                E || "";
            c(!0)
        }

        function q(a) {
            return new f(a.pageX - e.offsetLeft, a.pageY - e.offsetTop)
        }

        function p(a) {
            m && (s.x -= a.x - m.x, s.y -= a.y - m.y, s = new f(Math.min(Math.max(s.x, e.offsetLeft), (e.offsetLeft + e.offsetWidth) * t - r.clientWidth), Math.min(Math.max(s.y, e.offsetTop), (e.offsetTop + e.offsetHeight) * t - r.clientHeight)));
            m = a
        }

        function n(a) {
            var d = a.touches.length, e = 0 < d ? q(a.touches[0]) : null;
            a = 1 < d ? q(a.touches[1]) : null;
            e && a ? (x = e.getDistance(a), y = t, m = e.getCenter(a), b(), F = A.PINCH) : e && (m = e, F = A.SCROLL)
        }

        function g(d) {
            var c = d.touches.length,
                m = 0 < c ? q(d.touches[0]) : null, c = 1 < c ? q(d.touches[1]) : null;
            if (m && c)if (d.preventDefault(), F === A.SCROLL) F = A.PINCH, b(), x = m.getDistance(c); else {
                d = m.getCenter(c);
                m = m.getDistance(c) / x;
                p(d);
                var c = t, h = Math.min(v, e.offsetParent.clientWidth / e.offsetWidth);
                t = y * m;
                t = Math.min(Math.max(t, h), v);
                m = t / c;
                s.x += (m - 1) * (d.x + s.x);
                s.y += (m - 1) * (d.y + s.y);
                a(!0)
            } else m && (F === A.PINCH ? (F = A.SCROLL, k()) : p(m))
        }

        function h() {
            F === A.PINCH && (u.emit(gui.ZoomHelper.signalZoomChanged, t), k(), a(!1));
            F = A.NONE
        }

        function d() {
            r && (r.removeEventListener("touchstart",
                n, !1), r.removeEventListener("touchmove", g, !1), r.removeEventListener("touchend", h, !1))
        }

        var e, s, m, x, t, y, v = 4, r, w, u = new core.EventNotifier([gui.ZoomHelper.signalZoomChanged]), A = {
            NONE: 0,
            SCROLL: 1,
            PINCH: 2
        }, F = A.NONE, B = runtime.getWindow().hasOwnProperty("ontouchstart"), E = "";
        this.subscribe = function (a, b) {
            u.subscribe(a, b)
        };
        this.unsubscribe = function (a, b) {
            u.unsubscribe(a, b)
        };
        this.getZoomLevel = function () {
            return t
        };
        this.setZoomLevel = function (b) {
            e && (t = b, a(!1), u.emit(gui.ZoomHelper.signalZoomChanged, t))
        };
        this.destroy =
            function (a) {
                d();
                c(!1);
                a()
            };
        this.setZoomableElement = function (b) {
            d();
            e = b;
            r = e.offsetParent;
            w = e.parentNode;
            a(!1);
            r && (r.addEventListener("touchstart", n, !1), r.addEventListener("touchmove", g, !1), r.addEventListener("touchend", h, !1));
            c(!0)
        };
        y = t = 1;
        s = new f(0, 0)
    };
    gui.ZoomHelper.signalZoomChanged = "zoomChanged"
})();
ops.Canvas = function () {
};
ops.Canvas.prototype.getZoomLevel = function () {
};
ops.Canvas.prototype.getElement = function () {
};
ops.Canvas.prototype.getSizer = function () {
};
ops.Canvas.prototype.getZoomHelper = function () {
};
(function () {
    function f() {
        function a(e) {
            d = !0;
            runtime.setTimeout(function () {
                try {
                    e()
                } catch (c) {
                    runtime.log(String(c) + "\n" + c.stack)
                }
                d = !1;
                0 < b.length && a(b.pop())
            }, 10)
        }

        var b = [], d = !1;
        this.clearQueue = function () {
            b.length = 0
        };
        this.addToQueue = function (e) {
            if (0 === b.length && !d)return a(e);
            b.push(e)
        }
    }

    function l(a) {
        function b() {
            for (; 0 < d.cssRules.length;)d.deleteRule(0);
            d.insertRule("#shadowContent draw|page {display:none;}", 0);
            d.insertRule("office|presentation draw|page {display:none;}", 1);
            d.insertRule("#shadowContent draw|page:nth-of-type(" +
                e + ") {display:block;}", 2);
            d.insertRule("office|presentation draw|page:nth-of-type(" + e + ") {display:block;}", 3)
        }

        var d = a.sheet, e = 1;
        this.showFirstPage = function () {
            e = 1;
            b()
        };
        this.showNextPage = function () {
            e += 1;
            b()
        };
        this.showPreviousPage = function () {
            1 < e && (e -= 1, b())
        };
        this.showPage = function (a) {
            0 < a && (e = a, b())
        };
        this.css = a;
        this.destroy = function (b) {
            a.parentNode.removeChild(a);
            b()
        }
    }

    function a(a) {
        a = a.sheet;
        for (var b = a.cssRules; b.length;)a.deleteRule(b.length - 1)
    }

    function c(a, b, d) {
        var e = new odf.Style2CSS, c = new odf.ListStyleToCss;
        d = d.sheet;
        var m = (new odf.StyleTree(a.rootElement.styles, a.rootElement.automaticStyles)).getStyleTree();
        e.style2css(a.getDocumentType(), a.rootElement, d, b.getFontMap(), m);
        c.applyListStyles(d, m, a.rootElement.body)
    }

    function b(a, b) {
        (new odf.FontLoader).loadFonts(a, b.sheet)
    }

    function k(a, b, d) {
        var e = null;
        a = a.rootElement.body.getElementsByTagNameNS(E, d + "-decl");
        d = b.getAttributeNS(E, "use-" + d + "-name");
        var c;
        if (d && 0 < a.length)for (b = 0; b < a.length; b += 1)if (c = a[b], c.getAttributeNS(E, "name") === d) {
            e = c.textContent;
            break
        }
        return e
    }

    function q(a, b, d, e) {
        var c = a.ownerDocument;
        b = I.getElementsByTagNameNS(a, b, d);
        for (a = 0; a < b.length; a += 1)I.removeAllChildNodes(b[a]), e && (d = b[a], d.appendChild(c.createTextNode(e)))
    }

    function p(a, b, d) {
        b.setAttributeNS("urn:webodf:names:helper", "styleid", a);
        var e, c = b.getAttributeNS(F, "anchor-type"), m = b.getAttributeNS(u, "x"), h = b.getAttributeNS(u, "y"), g = b.getAttributeNS(u, "width"), f = b.getAttributeNS(u, "height"), k = b.getAttributeNS(v, "min-height"), p = b.getAttributeNS(v, "min-width");
        if ("as-char" === c) e = "display: inline-block;";
        else if (c || m || h) e = "position: absolute;"; else if (g || f || k || p) e = "display: block;";
        m && (e += "left: " + m + ";");
        h && (e += "top: " + h + ";");
        g && (e += "width: " + g + ";");
        f && (e += "height: " + f + ";");
        k && (e += "min-height: " + k + ";");
        p && (e += "min-width: " + p + ";");
        e && (e = "draw|" + b.localName + '[webodfhelper|styleid="' + a + '"] {' + e + "}", d.insertRule(e, d.cssRules.length))
    }

    function n(a) {
        for (a = a.firstChild; a;) {
            if (a.namespaceURI === r && "binary-data" === a.localName)return "data:image/png;base64," + a.textContent.replace(/[\r\n\s]/g, "");
            a = a.nextSibling
        }
        return ""
    }

    function g(a, b, d, e) {
        function c(b) {
            b && (b = 'draw|image[webodfhelper|styleid="' + a + '"] {' + ("background-image: url(" + b + ");") + "}", e.insertRule(b, e.cssRules.length))
        }

        function m(a) {
            c(a.url)
        }

        d.setAttributeNS("urn:webodf:names:helper", "styleid", a);
        var h = d.getAttributeNS(B, "href"), g;
        if (h)try {
            g = b.getPart(h), g.onchange = m, g.load()
        } catch (f) {
            runtime.log("slight problem: " + String(f))
        } else h = n(d), c(h)
    }

    function h(a) {
        var b = a.ownerDocument;
        I.getElementsByTagNameNS(a, F, "line-break").forEach(function (a) {
            a.hasChildNodes() ||
            a.appendChild(b.createElement("br"))
        })
    }

    function d(a) {
        var b = a.ownerDocument;
        I.getElementsByTagNameNS(a, F, "s").forEach(function (a) {
            var d, e;
            I.removeAllChildNodes(a);
            a.appendChild(b.createTextNode(" "));
            e = parseInt(a.getAttributeNS(F, "c"), 10);
            if (1 < e)for (a.removeAttributeNS(F, "c"), d = 1; d < e; d += 1)a.parentNode.insertBefore(a.cloneNode(!0), a)
        })
    }

    function e(a) {
        I.getElementsByTagNameNS(a, F, "tab").forEach(function (a) {
            a.textContent = "\t"
        })
    }

    function s(a, b) {
        function d(a, e) {
            var h = g.documentElement.namespaceURI;
            "video/" ===
            e.substr(0, 6) ? (c = g.createElementNS(h, "video"), c.setAttribute("controls", "controls"), m = g.createElementNS(h, "source"), a && m.setAttribute("src", a), m.setAttribute("type", e), c.appendChild(m), b.parentNode.appendChild(c)) : b.innerHtml = "Unrecognised Plugin"
        }

        function e(a) {
            d(a.url, a.mimetype)
        }

        var c, m, h, g = b.ownerDocument, f;
        if (h = b.getAttributeNS(B, "href"))try {
            f = a.getPart(h), f.onchange = e, f.load()
        } catch (k) {
            runtime.log("slight problem: " + String(k))
        } else runtime.log("using MP4 data fallback"), h = n(b), d(h, "video/mp4")
    }

    function m(a) {
        var b = a.getElementsByTagName("head")[0], d, e;
        d = a.styleSheets.length;
        for (e = b.firstElementChild; e && ("style" !== e.localName || !e.hasAttribute("webodfcss"));)e = e.nextElementSibling;
        if (e)return d = parseInt(e.getAttribute("webodfcss"), 10), e.setAttribute("webodfcss", d + 1), e;
        "string" === String(typeof webodf_css) ? d = webodf_css : (e = "webodf.css", runtime.currentDirectory && (e = runtime.currentDirectory(), 0 < e.length && "/" !== e.substr(-1) && (e += "/"), e += "../webodf.css"), d = runtime.readFileSync(e, "utf-8"));
        e = a.createElementNS(b.namespaceURI,
            "style");
        e.setAttribute("media", "screen, print, handheld, projection");
        e.setAttribute("type", "text/css");
        e.setAttribute("webodfcss", "1");
        e.appendChild(a.createTextNode(d));
        b.appendChild(e);
        return e
    }

    function x(a) {
        var b = parseInt(a.getAttribute("webodfcss"), 10);
        1 === b ? a.parentNode.removeChild(a) : a.setAttribute("count", b - 1)
    }

    function t(a) {
        var b = a.getElementsByTagName("head")[0], d = a.createElementNS(b.namespaceURI, "style"), e = "";
        d.setAttribute("type", "text/css");
        d.setAttribute("media", "screen, print, handheld, projection");
        odf.Namespaces.forEachPrefix(function (a, b) {
            e += "@namespace " + a + " url(" + b + ");\n"
        });
        e += "@namespace webodfhelper url(urn:webodf:names:helper);\n";
        d.appendChild(a.createTextNode(e));
        b.appendChild(d);
        return d
    }

    var y = odf.Namespaces.drawns, v = odf.Namespaces.fons, r = odf.Namespaces.officens, w = odf.Namespaces.stylens, u = odf.Namespaces.svgns, A = odf.Namespaces.tablens, F = odf.Namespaces.textns, B = odf.Namespaces.xlinkns, E = odf.Namespaces.presentationns, H = xmldom.XPath, I = core.DomUtils;
    odf.OdfCanvas = function (n, v) {
        function z(a,
                   b, d) {
            function e(a, b, d, c) {
                ja.addToQueue(function () {
                    g(a, b, d, c)
                })
            }

            var c, m;
            c = b.getElementsByTagNameNS(y, "image");
            for (b = 0; b < c.length; b += 1)m = c.item(b), e("image" + String(b), a, m, d)
        }

        function Y(a, b) {
            function d(a, b) {
                ja.addToQueue(function () {
                    s(a, b)
                })
            }

            var e, c, m;
            c = b.getElementsByTagNameNS(y, "plugin");
            for (e = 0; e < c.length; e += 1)m = c.item(e), d(a, m)
        }

        function u() {
            var a;
            a = $.firstChild;
            var b = fa.getZoomLevel();
            a && ($.style.WebkitTransformOrigin = "0% 0%", $.style.MozTransformOrigin = "0% 0%", $.style.msTransformOrigin = "0% 0%", $.style.OTransformOrigin =
                "0% 0%", $.style.transformOrigin = "0% 0%", P && ((a = P.getMinimumHeightForAnnotationPane()) ? $.style.minHeight = a : $.style.removeProperty("min-height")), n.style.width = Math.round(b * $.offsetWidth) + "px", n.style.height = Math.round(b * $.offsetHeight) + "px", n.style.display = "inline-block")
        }

        function B(a, b) {
            var c = ea.sheet;
            I.removeAllChildNodes(n);
            $ = O.createElementNS(n.namespaceURI, "div");
            $.style.display = "inline-block";
            $.style.background = "white";
            $.style.setProperty("float", "left", "important");
            $.appendChild(b);
            n.appendChild($);
            ca = O.createElementNS(n.namespaceURI, "div");
            ca.id = "annotationsPane";
            ga = O.createElementNS(n.namespaceURI, "div");
            ga.id = "shadowContent";
            ga.style.position = "absolute";
            ga.style.top = 0;
            ga.style.left = 0;
            a.getContentElement().appendChild(ga);
            var m = b.body, g, f = [], s;
            for (g = m.firstElementChild; g && g !== m;)if (g.namespaceURI === y && (f[f.length] = g), g.firstElementChild) g = g.firstElementChild; else {
                for (; g && g !== m && !g.nextElementSibling;)g = g.parentNode;
                g && g.nextElementSibling && (g = g.nextElementSibling)
            }
            for (s = 0; s < f.length; s += 1)g =
                f[s], p("frame" + String(s), g, c);
            f = H.getODFElementsWithXPath(m, ".//*[*[@text:anchor-type='paragraph']]", odf.Namespaces.lookupNamespaceURI);
            for (g = 0; g < f.length; g += 1)m = f[g], m.setAttributeNS && m.setAttributeNS("urn:webodf:names:helper", "containsparagraphanchor", !0);
            m = C;
            g = ga;
            var l, t, x, v, N = 0, u;
            s = a.rootElement.ownerDocument;
            if ((f = b.body.firstElementChild) && f.namespaceURI === r && ("presentation" === f.localName || "drawing" === f.localName))for (f = f.firstElementChild; f;) {
                if (l = (l = f.getAttributeNS(y, "master-page-name")) ?
                        m.getMasterPageElement(l) : null) {
                    t = f.getAttributeNS("urn:webodf:names:helper", "styleid");
                    x = s.createElementNS(y, "draw:page");
                    u = l.firstElementChild;
                    for (N = 0; u;)"true" !== u.getAttributeNS(E, "placeholder") && (v = u.cloneNode(!0), x.appendChild(v)), u = u.nextElementSibling, N += 1;
                    u = v = N = void 0;
                    for (var R = I.getElementsByTagNameNS(x, y, "frame"), N = 0; N < R.length; N += 1)v = R[N], (u = v.getAttributeNS(E, "class")) && !/^(date-time|footer|header|page-number)$/.test(u) && v.parentNode.removeChild(v);
                    v = I.getElementsByTagNameNS(x, y, "*");
                    for (N = 0; N < v.length; N += 1)p(t + "_" + N, v[N], c);
                    g.appendChild(x);
                    N = String(g.getElementsByTagNameNS(y, "page").length);
                    q(x, F, "page-number", N);
                    q(x, E, "header", k(a, f, "header"));
                    q(x, E, "footer", k(a, f, "footer"));
                    p(t, x, c);
                    x.setAttributeNS("urn:webodf:names:helper", "page-style-name", f.getAttributeNS(y, "style-name"));
                    x.setAttributeNS(y, "draw:master-page-name", l.getAttributeNS(w, "name"))
                }
                f = f.nextElementSibling
            }
            m = n.namespaceURI;
            f = I.getElementsByTagNameNS(b.body, A, "table-cell");
            for (g = 0; g < f.length; g += 1)s = f[g], s.hasAttributeNS(A,
                "number-columns-spanned") && s.setAttributeNS(m, "colspan", s.getAttributeNS(A, "number-columns-spanned")), s.hasAttributeNS(A, "number-rows-spanned") && s.setAttributeNS(m, "rowspan", s.getAttributeNS(A, "number-rows-spanned"));
            h(b.body);
            d(b.body);
            e(b.body);
            z(a, b.body, c);
            Y(a, b.body);
            $.insertBefore(ga, $.firstChild);
            fa.setZoomableElement($)
        }

        function G(a) {
            U ? (ca.parentNode || $.appendChild(ca), P && P.forgetAnnotations(), P = new gui.AnnotationViewManager(D, a.body, ca, W), a = I.getElementsByTagNameNS(a.body, r, "annotation"),
                    P.addAnnotations(a), u()) : ca.parentNode && ($.removeChild(ca), P.forgetAnnotations(), u())
        }

        function ba(d) {
            function e() {
                a(S);
                a(L);
                a(ea);
                I.removeAllChildNodes(n);
                n.style.display = "inline-block";
                var m = Z.rootElement;
                n.ownerDocument.importNode(m, !0);
                C.setOdfContainer(Z);
                b(Z, S);
                c(Z, C, L);
                B(Z, m);
                G(m);
                d || ja.addToQueue(function () {
                    var a = [Z];
                    if (da.hasOwnProperty("statereadychange")) {
                        var b = da.statereadychange, d;
                        for (d = 0; d < b.length; d += 1)b[d].apply(null, a)
                    }
                })
            }

            Z.state === odf.OdfContainer.DONE ? e() : (runtime.log("WARNING: refreshOdf called but ODF was not DONE."),
                    ha = runtime.setTimeout(function qa() {
                        Z.state === odf.OdfContainer.DONE ? e() : (runtime.log("will be back later..."), ha = runtime.setTimeout(qa, 500))
                    }, 100))
        }

        function T(a) {
            ja.clearQueue();
            I.removeAllChildNodes(n);
            n.appendChild(n.ownerDocument.createTextNode(runtime.tr("Loading") + a + "..."));
            n.removeAttribute("style");
            Z = new odf.OdfContainer(a, function (a) {
                Z = a;
                ba(!1)
            })
        }

        runtime.assert(null !== n && void 0 !== n, "odf.OdfCanvas constructor needs DOM element");
        runtime.assert(null !== n.ownerDocument && void 0 !== n.ownerDocument,
            "odf.OdfCanvas constructor needs DOM");
        var D = this, O = n.ownerDocument, Z, C = new odf.Formatting, V, $ = null, ca = null, U = !1, W = !1, P = null, aa, S, L, ea, ga, da = {}, ha, ma, la = !1, ia = !1, ja = new f, fa = new gui.ZoomHelper, pa = v || new gui.SingleScrollViewport(n.parentNode);
        this.refreshCSS = function () {
            la = !0;
            ma.trigger()
        };
        this.refreshSize = function () {
            ma.trigger()
        };
        this.odfContainer = function () {
            return Z
        };
        this.setOdfContainer = function (a, b) {
            Z = a;
            ba(!0 === b)
        };
        this.load = this.load = T;
        this.save = function (a) {
            Z.save(a)
        };
        this.addListener = function (a,
                                     b) {
            switch (a) {
                case "click":
                    var d = n, e = a;
                    d.addEventListener ? d.addEventListener(e, b, !1) : d.attachEvent ? d.attachEvent("on" + e, b) : d["on" + e] = b;
                    break;
                default:
                    d = da.hasOwnProperty(a) ? da[a] : da[a] = [], b && -1 === d.indexOf(b) && d.push(b)
            }
        };
        this.getFormatting = function () {
            return C
        };
        this.getAnnotationViewManager = function () {
            return P
        };
        this.refreshAnnotations = function () {
            G(Z.rootElement)
        };
        this.rerenderAnnotations = function () {
            P && (ia = !0, ma.trigger())
        };
        this.getSizer = function () {
            return $
        };
        this.enableAnnotations = function (a, b) {
            a !==
            U && (U = a, W = b, Z && G(Z.rootElement))
        };
        this.addAnnotation = function (a) {
            P && (P.addAnnotations([a]), u())
        };
        this.forgetAnnotation = function (a) {
            P && (P.forgetAnnotation(a), u())
        };
        this.getZoomHelper = function () {
            return fa
        };
        this.setZoomLevel = function (a) {
            fa.setZoomLevel(a)
        };
        this.getZoomLevel = function () {
            return fa.getZoomLevel()
        };
        this.fitToContainingElement = function (a, b) {
            var d = fa.getZoomLevel(), e = n.offsetHeight / d, d = a / (n.offsetWidth / d);
            b / e < d && (d = b / e);
            fa.setZoomLevel(d)
        };
        this.fitToWidth = function (a) {
            var b = n.offsetWidth / fa.getZoomLevel();
            fa.setZoomLevel(a / b)
        };
        this.fitSmart = function (a, b) {
            var d, e;
            e = fa.getZoomLevel();
            d = n.offsetWidth / e;
            e = n.offsetHeight / e;
            d = a / d;
            void 0 !== b && b / e < d && (d = b / e);
            fa.setZoomLevel(Math.min(1, d))
        };
        this.fitToHeight = function (a) {
            var b = n.offsetHeight / fa.getZoomLevel();
            fa.setZoomLevel(a / b)
        };
        this.showFirstPage = function () {
            V.showFirstPage()
        };
        this.showNextPage = function () {
            V.showNextPage()
        };
        this.showPreviousPage = function () {
            V.showPreviousPage()
        };
        this.showPage = function (a) {
            V.showPage(a);
            u()
        };
        this.getElement = function () {
            return n
        };
        this.getViewport = function () {
            return pa
        };
        this.addCssForFrameWithImage = function (a) {
            var b = a.getAttributeNS(y, "name"), d = a.firstElementChild;
            p(b, a, ea.sheet);
            d && g(b + "img", Z, d, ea.sheet)
        };
        this.destroy = function (a) {
            var b = O.getElementsByTagName("head")[0], d = [V.destroy, ma.destroy];
            runtime.clearTimeout(ha);
            ca && ca.parentNode && ca.parentNode.removeChild(ca);
            fa.destroy(function () {
                $ && (n.removeChild($), $ = null)
            });
            x(aa);
            b.removeChild(S);
            b.removeChild(L);
            b.removeChild(ea);
            core.Async.destroyAll(d, a)
        };
        aa = m(O);
        V = new l(t(O));
        S = t(O);
        L = t(O);
        ea = t(O);
        ma = core.Task.createRedrawTask(function () {
            la && (c(Z, C, L), la = !1);
            ia && (P && P.rerenderAnnotations(), ia = !1);
            u()
        });
        fa.subscribe(gui.ZoomHelper.signalZoomChanged, u)
    }
})();
odf.StepUtils = function () {
    this.getContentBounds = function (f) {
        var l = f.container(), a, c;
        runtime.assert(f.isStep(), "Step iterator must be on a step");
        l.nodeType === Node.TEXT_NODE && 0 < f.offset() ? a = f.offset() : (l = f.leftNode()) && l.nodeType === Node.TEXT_NODE && (a = l.length);
        l && (l.nodeType === Node.TEXT_NODE ? (runtime.assert(0 < a, "Empty text node found"), c = {
                container: l,
                startOffset: a - 1,
                endOffset: a
            }) : c = {container: l, startOffset: 0, endOffset: l.childNodes.length});
        return c
    }
};
ops.MemberProperties = function () {
};
ops.Member = function (f, l) {
    var a = new ops.MemberProperties;
    this.getMemberId = function () {
        return f
    };
    this.getProperties = function () {
        return a
    };
    this.setProperties = function (c) {
        Object.keys(c).forEach(function (b) {
            a[b] = c[b]
        })
    };
    this.removeProperties = function (c) {
        Object.keys(c).forEach(function (b) {
            "fullName" !== b && "color" !== b && "imageUrl" !== b && a.hasOwnProperty(b) && delete a[b]
        })
    };
    runtime.assert(Boolean(f), "No memberId was supplied!");
    l.fullName || (l.fullName = runtime.tr("Unknown Author"));
    l.color || (l.color = "black");
    l.imageUrl ||
    (l.imageUrl = "avatar-joe.png");
    a = l
};
ops.Document = function () {
};
ops.Document.prototype.getMemberIds = function () {
};
ops.Document.prototype.removeCursor = function (f) {
};
ops.Document.prototype.getDocumentElement = function () {
};
ops.Document.prototype.getRootNode = function () {
};
ops.Document.prototype.getDOMDocument = function () {
};
ops.Document.prototype.cloneDocumentElement = function () {
};
ops.Document.prototype.setDocumentElement = function (f) {
};
ops.Document.prototype.subscribe = function (f, l) {
};
ops.Document.prototype.unsubscribe = function (f, l) {
};
ops.Document.prototype.getCanvas = function () {
};
ops.Document.prototype.createRootFilter = function (f) {
};
ops.Document.prototype.createPositionIterator = function (f) {
};
ops.Document.signalCursorAdded = "cursor/added";
ops.Document.signalCursorRemoved = "cursor/removed";
ops.Document.signalCursorMoved = "cursor/moved";
ops.Document.signalMemberAdded = "member/added";
ops.Document.signalMemberUpdated = "member/updated";
ops.Document.signalMemberRemoved = "member/removed";
ops.OdtCursor = function (f, l) {
    var a = this, c = {}, b, k, q = new core.EventNotifier([ops.OdtCursor.signalCursorUpdated]);
    this.removeFromDocument = function () {
        k.remove()
    };
    this.subscribe = function (a, b) {
        q.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        q.unsubscribe(a, b)
    };
    this.getMemberId = function () {
        return f
    };
    this.getNode = function () {
        return k.getNode()
    };
    this.getAnchorNode = function () {
        return k.getAnchorNode()
    };
    this.getSelectedRange = function () {
        return k.getSelectedRange()
    };
    this.setSelectedRange = function (b, c) {
        k.setSelectedRange(b,
            c);
        q.emit(ops.OdtCursor.signalCursorUpdated, a)
    };
    this.hasForwardSelection = function () {
        return k.hasForwardSelection()
    };
    this.getDocument = function () {
        return l
    };
    this.getSelectionType = function () {
        return b
    };
    this.setSelectionType = function (a) {
        c.hasOwnProperty(a) ? b = a : runtime.log("Invalid selection type: " + a)
    };
    this.resetSelectionType = function () {
        a.setSelectionType(ops.OdtCursor.RangeSelection)
    };
    k = new core.Cursor(l.getDOMDocument(), f);
    c[ops.OdtCursor.RangeSelection] = !0;
    c[ops.OdtCursor.RegionSelection] = !0;
    a.resetSelectionType()
};
ops.OdtCursor.RangeSelection = "Range";
ops.OdtCursor.RegionSelection = "Region";
ops.OdtCursor.signalCursorUpdated = "cursorUpdated";
(function () {
    var f = 0;
    ops.StepsCache = function (l, a, c) {
        function b(a, b) {
            var d = this;
            this.nodeId = a;
            this.steps = -1;
            this.node = b;
            this.previousBookmark = this.nextBookmark = null;
            this.setIteratorPosition = function (a) {
                a.setPositionBeforeElement(b);
                c(d.steps, a)
            }
        }

        function k(a, b, d) {
            var e = this;
            this.nodeId = a;
            this.steps = b;
            this.node = d;
            this.previousBookmark = this.nextBookmark = null;
            this.setIteratorPosition = function (a) {
                a.setUnfilteredPosition(d, 0);
                c(e.steps, a)
            }
        }

        function q(a, b) {
            var d = "[" + a.nodeId;
            b && (d += " => " + b.nodeId);
            return d +
                "]"
        }

        function p() {
            for (var a = y, b, d, e, c = new core.LoopWatchDog(0, 1E5), g = {}; a;) {
                c.check();
                (b = a.previousBookmark) ? runtime.assert(b.nextBookmark === a, "Broken bookmark link to previous @" + q(b, a)) : (runtime.assert(a === y, "Broken bookmark link @" + q(a)), runtime.assert(void 0 === v || y === y || y.steps <= v, "Base point is damaged @" + q(a)));
                (d = a.nextBookmark) && runtime.assert(d.previousBookmark === a, "Broken bookmark link to next @" + q(a, d));
                if (void 0 === v || a === y || a.steps <= v) runtime.assert(t.containsNode(l, a.node), "Disconnected node is being reported as undamaged @" +
                    q(a)), b && (e = a.node.compareDocumentPosition(b.node), runtime.assert(0 === e || 0 !== (e & w), "Bookmark order with previous does not reflect DOM order @" + q(b, a))), d && t.containsNode(l, d.node) && (e = a.node.compareDocumentPosition(d.node), runtime.assert(0 === e || 0 !== (e & r), "Bookmark order with next does not reflect DOM order @" + q(a, d)));
                a = a.nextBookmark
            }
            Object.keys(m).forEach(function (a) {
                var b = m[a];
                (void 0 === v || a <= v) && runtime.assert(b.steps <= a, "Bookmark step of " + b.steps + " exceeds cached step lookup for " + a + " @" + q(b));
                runtime.assert(!1 === g.hasOwnProperty(b.nodeId), "Bookmark " + q(b) + " appears twice in cached step lookup at steps " + g[b.nodeId] + " and " + a);
                g[b.nodeId] = a
            })
        }

        function n(a) {
            var b = "";
            a.nodeType === Node.ELEMENT_NODE && (b = a.getAttributeNS(s, "nodeId") || "");
            return b
        }

        function g(a) {
            var b = f.toString();
            a.setAttributeNS(s, "nodeId", b);
            f += 1;
            return b
        }

        function h(b) {
            var d, e, c = new core.LoopWatchDog(0, 1E4);
            void 0 !== v && b > v && (b = v);
            for (d = Math.floor(b / a) * a; !e && 0 <= d;)e = m[d], d -= a;
            for (e = e || y; e.nextBookmark && e.nextBookmark.steps <=
            b;)c.check(), e = e.nextBookmark;
            runtime.assert(-1 === b || e.steps <= b, "Bookmark @" + q(e) + " at step " + e.steps + " exceeds requested step of " + b);
            return e
        }

        function d(a) {
            a.previousBookmark && (a.previousBookmark.nextBookmark = a.nextBookmark);
            a.nextBookmark && (a.nextBookmark.previousBookmark = a.previousBookmark)
        }

        function e(a) {
            for (var b, d = null; !d && a && a !== l;)(b = n(a)) && (d = x[b]) && d.node !== a && (runtime.log("Cloned node detected. Creating new bookmark"), d = null, a.removeAttributeNS(s, "nodeId")), a = a.parentNode;
            return d
        }

        var s =
            "urn:webodf:names:steps", m = {}, x = {}, t = core.DomUtils, y, v, r = Node.DOCUMENT_POSITION_FOLLOWING, w = Node.DOCUMENT_POSITION_PRECEDING, u;
        this.updateBookmark = function (e, c) {
            var f, k = Math.ceil(e / a) * a, p, s, q;
            if (void 0 !== v && v < e) {
                p = h(v);
                for (s = p.nextBookmark; s && s.steps <= e;)f = s.nextBookmark, q = Math.ceil(s.steps / a) * a, m[q] === s && delete m[q], t.containsNode(l, s.node) ? s.steps = e + 1 : (d(s), delete x[s.nodeId]), s = f;
                v = e
            } else p = h(e);
            s = n(c) || g(c);
            f = x[s];
            f ? f.node !== c && (runtime.log("Cloned node detected. Creating new bookmark"), s = g(c),
                    f = x[s] = new b(s, c)) : f = x[s] = new b(s, c);
            s = f;
            s.steps !== e && (f = Math.ceil(s.steps / a) * a, f !== k && m[f] === s && delete m[f], s.steps = e);
            if (p !== s && p.nextBookmark !== s) {
                if (p.steps === s.steps)for (; 0 !== (s.node.compareDocumentPosition(p.node) & r) && p !== y;)p = p.previousBookmark;
                p !== s && p.nextBookmark !== s && (d(s), f = p.nextBookmark, s.nextBookmark = p.nextBookmark, s.previousBookmark = p, p.nextBookmark = s, f && (f.previousBookmark = s))
            }
            p = m[k];
            if (!p || s.steps > p.steps) m[k] = s;
            u()
        };
        this.setToClosestStep = function (a, b) {
            var d;
            u();
            d = h(a);
            d.setIteratorPosition(b);
            return d.steps
        };
        this.setToClosestDomPoint = function (a, b, d) {
            var c, g;
            u();
            if (a === l && 0 === b) c = y; else if (a === l && b === l.childNodes.length)for (g in c = y, m)m.hasOwnProperty(g) && (a = m[g], a.steps > c.steps && (c = a)); else if (c = e(a.childNodes.item(b) || a), !c)for (d.setUnfilteredPosition(a, b); !c && d.previousNode();)c = e(d.getCurrentNode());
            c = c || y;
            void 0 !== v && c.steps > v && (c = h(v));
            c.setIteratorPosition(d);
            return c.steps
        };
        this.damageCacheAfterStep = function (a) {
            0 > a && (a = -1);
            void 0 === v ? v = a : a < v && (v = a);
            u()
        };
        (function () {
            var a = n(l) ||
                g(l);
            y = new k(a, 0, l);
            u = ops.StepsCache.ENABLE_CACHE_VERIFICATION ? p : function () {
                }
        })()
    };
    ops.StepsCache.ENABLE_CACHE_VERIFICATION = !1;
    ops.StepsCache.Bookmark = function () {
    };
    ops.StepsCache.Bookmark.prototype.setIteratorPosition = function (f) {
    }
})();
(function () {
    ops.OdtStepsTranslator = function (f, l, a, c) {
        function b(a, b, d) {
            var c = b.getCurrentNode();
            b.isBeforeNode() && p.isParagraph(c) && (d || (a += 1), q.updateBookmark(a, c))
        }

        function k(b, c) {
            if (!c || a.acceptPosition(b) === g)return !0;
            for (; b.previousPosition();)if (a.acceptPosition(b) === g) {
                if (c(h, b.container(), b.unfilteredDomOffset()))return !0;
                break
            }
            for (; b.nextPosition();)if (a.acceptPosition(b) === g) {
                if (c(d, b.container(), b.unfilteredDomOffset()))return !0;
                break
            }
            return !1
        }

        var q, p = odf.OdfUtils, n = core.DomUtils, g = core.PositionFilter.FilterResult.FILTER_ACCEPT,
            h = core.StepDirection.PREVIOUS, d = core.StepDirection.NEXT;
        this.convertStepsToDomPoint = function (d) {
            var c, m;
            if (isNaN(d))throw new TypeError("Requested steps is not numeric (" + d + ")");
            if (0 > d)throw new RangeError("Requested steps is negative (" + d + ")");
            for (c = q.setToClosestStep(d, l); c < d && l.nextPosition();)(m = a.acceptPosition(l) === g) && (c += 1), b(c, l, m);
            if (c !== d)throw new RangeError("Requested steps (" + d + ") exceeds available steps (" + c + ")");
            return {node: l.container(), offset: l.unfilteredDomOffset()}
        };
        this.convertDomPointToSteps =
            function (d, c, m) {
                var h;
                n.containsNode(f, d) || (c = 0 > n.comparePoints(f, 0, d, c), d = f, c = c ? 0 : f.childNodes.length);
                l.setUnfilteredPosition(d, c);
                k(l, m) || l.setUnfilteredPosition(d, c);
                m = l.container();
                c = l.unfilteredDomOffset();
                d = q.setToClosestDomPoint(m, c, l);
                if (0 > n.comparePoints(l.container(), l.unfilteredDomOffset(), m, c))return 0 < d ? d - 1 : d;
                for (; (l.container() !== m || l.unfilteredDomOffset() !== c) && l.nextPosition();)(h = a.acceptPosition(l) === g) && (d += 1), b(d, l, h);
                return d + 0
            };
        this.prime = function () {
            var d, c;
            for (d = q.setToClosestStep(0,
                l); l.nextPosition();)(c = a.acceptPosition(l) === g) && (d += 1), b(d, l, c)
        };
        this.handleStepsInserted = function (a) {
            q.damageCacheAfterStep(a.position)
        };
        this.handleStepsRemoved = function (a) {
            q.damageCacheAfterStep(a.position - 1)
        };
        q = new ops.StepsCache(f, c, function (d, c) {
            do {
                if (a.acceptPosition(c) === g) {
                    b(d, c, !0);
                    break
                }
                b(d - 1, c, !1)
            } while (c.nextPosition())
        })
    }
})();
ops.Operation = function () {
};
ops.Operation.prototype.init = function (f) {
};
ops.Operation.prototype.execute = function (f) {
};
ops.Operation.prototype.spec = function () {
};
ops.TextPositionFilter = function () {
    function f(a, b) {
        for (; a && b(a) !== k;)a = a.previousSibling;
        return a
    }

    function l(b, c, g, h) {
        var d;
        if (c) {
            if (a.isInlineRoot(c) && a.isGroupingElement(g))return q;
            h = a.lookLeftForCharacter(c);
            if (1 === h || 2 === h && (a.scanRightForAnyCharacter(g) || a.scanRightForAnyCharacter(a.nextNode(b))))return k
        } else if (a.isGroupingElement(b) && a.isInlineRoot(f(b.previousSibling, h)))return k;
        h = null === c && a.isParagraph(b);
        d = a.lookRightForCharacter(g);
        if (h)return d ? k : a.scanRightForAnyCharacter(g) ? q : k;
        if (!d)return q;
        c = c || a.previousNode(b);
        return a.scanLeftForAnyCharacter(c) ? q : k
    }

    var a = odf.OdfUtils, c = Node.ELEMENT_NODE, b = Node.TEXT_NODE, k = core.PositionFilter.FilterResult.FILTER_ACCEPT, q = core.PositionFilter.FilterResult.FILTER_REJECT;
    this.acceptPosition = function (f) {
        var n = f.container(), g = n.nodeType, h, d, e;
        if (g !== c && g !== b)return q;
        if (g === b) {
            g = f.unfilteredDomOffset();
            h = n.data;
            runtime.assert(g !== h.length, "Unexpected offset.");
            if (0 < g) {
                f = h[g - 1];
                if (!a.isODFWhitespace(f))return k;
                if (1 < g)if (f = h[g - 2], !a.isODFWhitespace(f)) e =
                    k; else {
                    if (!a.isODFWhitespace(h.substr(0, g)))return q
                } else d = a.previousNode(n), a.scanLeftForNonSpace(d) && (e = k);
                if (e === k)return a.isTrailingWhitespace(n, g) ? q : k;
                f = h[g];
                return a.isODFWhitespace(f) ? q : a.scanLeftForAnyCharacter(a.previousNode(n)) ? q : k
            }
            d = f.leftNode();
            e = n;
            n = n.parentNode;
            e = l(n, d, e, f.getNodeFilter())
        } else a.isGroupingElement(n) ? (d = f.leftNode(), e = f.rightNode(), e = l(n, d, e, f.getNodeFilter())) : e = q;
        return e
    }
};
ops.OdtDocument = function (f) {
    function l(a) {
        return new core.PositionIterator(a, H, N, !1)
    }

    function a() {
        var a = f.odfContainer().getContentElement(), b = a && a.localName;
        runtime.assert("text" === b, "Unsupported content element type '" + b + "' for OdtDocument");
        return a
    }

    function c() {
        return e.getDocumentElement().ownerDocument
    }

    function b(a) {
        for (; a && !(a.namespaceURI === odf.Namespaces.officens && "text" === a.localName || a.namespaceURI === odf.Namespaces.officens && "annotation" === a.localName);)a = a.parentNode;
        return a
    }

    function k(a) {
        this.acceptPosition =
            function (d) {
                d = d.container();
                var e;
                e = "string" === typeof a ? t[a].getNode() : a;
                return b(d) === b(e) ? r : w
            }
    }

    function q(a, b, d, e) {
        e = l(e);
        var c;
        1 === d.length ? c = d[0] : (c = new core.PositionFilterChain, d.forEach(c.addFilter));
        d = new core.StepIterator(c, e);
        d.setPosition(a, b);
        return d
    }

    function p(b) {
        var d = l(a());
        b = F.convertStepsToDomPoint(b);
        d.setUnfilteredPosition(b.node, b.offset);
        return d
    }

    function n(a) {
        return a === u
    }

    function g(a) {
        var b = a.spec(), d = b.memberid, c = (new Date(b.timestamp)).toISOString(), b = f.odfContainer();
        a.isEdit &&
        (d = e.getMember(d).getProperties().fullName, b.setMetadata({
            "dc:creator": d,
            "dc:date": c
        }, null), d = {
            setProperties: {"dc:creator": d, "dc:date": c},
            removedProperties: []
        }, B || (d.setProperties["meta:editing-cycles"] = b.incrementEditingCycles(), E || b.setMetadata(null, ["meta:editing-duration", "meta:document-statistic"])), B = a, e.emit(ops.OdtDocument.signalMetadataUpdated, d))
    }

    function h(a) {
        var b, d = [], e, c = 2;
        runtime.assert(a.isStep(), "positionIterator is not at a step");
        do {
            if (b = s.getContentBounds(a))if (b = b.container, m.isDowngradableSpaceElement(b)) {
                for (e =
                         b.lastChild; b.firstChild;)d.push(b.firstChild), b.parentNode.insertBefore(b.firstChild, b);
                b.parentNode.removeChild(b);
                a.setPosition(e, e.nodeType === Node.TEXT_NODE ? e.length : e.childNodes.length);
                a.roundToPreviousStep()
            }
            c -= 1
        } while (0 < c && a.nextStep());
        d.forEach(x.normalizeTextNodes)
    }

    function d(a, b, d) {
        a = a.childNodes.item(b) || a;
        return (a = m.getParagraphElement(a)) && x.containsNode(d, a) ? a : d
    }

    var e = this, s, m = odf.OdfUtils, x = core.DomUtils, t = {}, y = {}, v = new core.EventNotifier([ops.Document.signalMemberAdded, ops.Document.signalMemberUpdated,
        ops.Document.signalMemberRemoved, ops.Document.signalCursorAdded, ops.Document.signalCursorRemoved, ops.Document.signalCursorMoved, ops.OdtDocument.signalParagraphChanged, ops.OdtDocument.signalParagraphStyleModified, ops.OdtDocument.signalCommonStyleCreated, ops.OdtDocument.signalCommonStyleDeleted, ops.OdtDocument.signalTableAdded, ops.OdtDocument.signalOperationStart, ops.OdtDocument.signalOperationEnd, ops.OdtDocument.signalProcessingBatchStart, ops.OdtDocument.signalProcessingBatchEnd, ops.OdtDocument.signalUndoStackChanged,
        ops.OdtDocument.signalStepsInserted, ops.OdtDocument.signalStepsRemoved, ops.OdtDocument.signalMetadataUpdated, ops.OdtDocument.signalAnnotationAdded]), r = core.PositionFilter.FilterResult.FILTER_ACCEPT, w = core.PositionFilter.FilterResult.FILTER_REJECT, u = core.StepDirection.NEXT, A, F, B, E = !1, H = NodeFilter.SHOW_ALL, I = new gui.BlacklistNamespaceNodeFilter(["urn:webodf:names:cursor", "urn:webodf:names:editinfo"]), Q = new gui.OdfTextBodyNodeFilter, N = new core.NodeFilterChain([I, Q]);
    this.createPositionIterator = l;
    this.getDocumentElement =
        function () {
            return f.odfContainer().rootElement
        };
    this.cloneDocumentElement = function () {
        var a = e.getDocumentElement(), b = f.getAnnotationViewManager();
        b && b.forgetAnnotations();
        a = a.cloneNode(!0);
        f.refreshAnnotations();
        e.fixCursorPositions();
        return a
    };
    this.setDocumentElement = function (b) {
        var d = f.odfContainer();
        v.unsubscribe(ops.OdtDocument.signalStepsInserted, F.handleStepsInserted);
        v.unsubscribe(ops.OdtDocument.signalStepsRemoved, F.handleStepsRemoved);
        d.setRootElement(b);
        f.setOdfContainer(d, !0);
        f.refreshCSS();
        b = a();
        F = new ops.OdtStepsTranslator(b, l(b), A, 500);
        v.subscribe(ops.OdtDocument.signalStepsInserted, F.handleStepsInserted);
        v.subscribe(ops.OdtDocument.signalStepsRemoved, F.handleStepsRemoved)
    };
    this.getDOMDocument = c;
    this.getRootElement = b;
    this.createStepIterator = q;
    this.getIteratorAtPosition = p;
    this.convertCursorStepToDomPoint = function (a) {
        return F.convertStepsToDomPoint(a)
    };
    this.convertDomPointToCursorStep = function (a, b, d) {
        var e;
        d === u && (e = n);
        return F.convertDomPointToSteps(a, b, e)
    };
    this.convertDomToCursorRange =
        function (a) {
            var b;
            b = F.convertDomPointToSteps(a.anchorNode, a.anchorOffset);
            a = a.anchorNode === a.focusNode && a.anchorOffset === a.focusOffset ? b : F.convertDomPointToSteps(a.focusNode, a.focusOffset);
            return {position: b, length: a - b}
        };
    this.convertCursorToDomRange = function (a, b) {
        var d = c().createRange(), e, m;
        e = F.convertStepsToDomPoint(a);
        b ? (m = F.convertStepsToDomPoint(a + b), 0 < b ? (d.setStart(e.node, e.offset), d.setEnd(m.node, m.offset)) : (d.setStart(m.node, m.offset), d.setEnd(e.node, e.offset))) : d.setStart(e.node, e.offset);
        return d
    };
    this.upgradeWhitespacesAtPosition = function (a) {
        var b = p(a), b = new core.StepIterator(A, b), d, e = 2;
        runtime.assert(b.isStep(), "positionIterator is not at a step (requested step: " + a + ")");
        do {
            if (d = s.getContentBounds(b))if (a = d.container, d = d.startOffset, a.nodeType === Node.TEXT_NODE && m.isSignificantWhitespace(a, d)) {
                runtime.assert(" " === a.data[d], "upgradeWhitespaceToElement: textNode.data[offset] should be a literal space");
                var c = a.ownerDocument.createElementNS(odf.Namespaces.textns, "text:s"), g = a.parentNode,
                    f = a;
                c.appendChild(a.ownerDocument.createTextNode(" "));
                1 === a.length ? g.replaceChild(c, a) : (a.deleteData(d, 1), 0 < d && (d < a.length && a.splitText(d), f = a.nextSibling), g.insertBefore(c, f));
                a = c;
                b.setPosition(a, a.childNodes.length);
                b.roundToPreviousStep()
            }
            e -= 1
        } while (0 < e && b.nextStep())
    };
    this.downgradeWhitespaces = h;
    this.downgradeWhitespacesAtPosition = function (a) {
        a = p(a);
        a = new core.StepIterator(A, a);
        h(a)
    };
    this.getTextNodeAtStep = function (a, b) {
        var d = p(a), m = d.container(), g, f = 0, h = null;
        m.nodeType === Node.TEXT_NODE ? (g = m,
                f = d.unfilteredDomOffset(), 0 < g.length && (0 < f && (g = g.splitText(f)), g.parentNode.insertBefore(c().createTextNode(""), g), g = g.previousSibling, f = 0)) : (g = c().createTextNode(""), f = 0, m.insertBefore(g, d.rightNode()));
        if (b) {
            if (t[b] && e.getCursorPosition(b) === a) {
                for (h = t[b].getNode(); h.nextSibling && "cursor" === h.nextSibling.localName;)h.parentNode.insertBefore(h.nextSibling, h);
                0 < g.length && g.nextSibling !== h && (g = c().createTextNode(""), f = 0);
                h.parentNode.insertBefore(g, h)
            }
        } else for (; g.nextSibling && "cursor" === g.nextSibling.localName;)g.parentNode.insertBefore(g.nextSibling,
            g);
        for (; g.previousSibling && g.previousSibling.nodeType === Node.TEXT_NODE;)d = g.previousSibling, d.appendData(g.data), f = d.length, g = d, g.parentNode.removeChild(g.nextSibling);
        for (; g.nextSibling && g.nextSibling.nodeType === Node.TEXT_NODE;)d = g.nextSibling, g.appendData(d.data), g.parentNode.removeChild(d);
        return {textNode: g, offset: f}
    };
    this.fixCursorPositions = function () {
        Object.keys(t).forEach(function (a) {
            var c = t[a], g = b(c.getNode()), m = e.createRootFilter(g), f, h, k, p = !1;
            k = c.getSelectedRange();
            f = d(k.startContainer, k.startOffset,
                g);
            h = q(k.startContainer, k.startOffset, [A, m], f);
            k.collapsed ? g = h : (f = d(k.endContainer, k.endOffset, g), g = q(k.endContainer, k.endOffset, [A, m], f));
            h.isStep() && g.isStep() ? h.container() !== g.container() || h.offset() !== g.offset() || k.collapsed && c.getAnchorNode() === c.getNode() || (p = !0, k.setStart(h.container(), h.offset()), k.collapse(!0)) : (p = !0, runtime.assert(h.roundToClosestStep(), "No walkable step found for cursor owned by " + a), k.setStart(h.container(), h.offset()), runtime.assert(g.roundToClosestStep(), "No walkable step found for cursor owned by " +
                    a), k.setEnd(g.container(), g.offset()));
            p && (c.setSelectedRange(k, c.hasForwardSelection()), e.emit(ops.Document.signalCursorMoved, c))
        })
    };
    this.getCursorPosition = function (a) {
        return (a = t[a]) ? F.convertDomPointToSteps(a.getNode(), 0) : 0
    };
    this.getCursorSelection = function (a) {
        a = t[a];
        var b = 0, d = 0;
        a && (b = F.convertDomPointToSteps(a.getNode(), 0), d = F.convertDomPointToSteps(a.getAnchorNode(), 0));
        return {position: d, length: b - d}
    };
    this.getPositionFilter = function () {
        return A
    };
    this.getOdfCanvas = function () {
        return f
    };
    this.getCanvas =
        function () {
            return f
        };
    this.getRootNode = a;
    this.addMember = function (a) {
        runtime.assert(void 0 === y[a.getMemberId()], "This member already exists");
        y[a.getMemberId()] = a
    };
    this.getMember = function (a) {
        return y.hasOwnProperty(a) ? y[a] : null
    };
    this.removeMember = function (a) {
        delete y[a]
    };
    this.getCursor = function (a) {
        return t[a]
    };
    this.getMemberIds = function () {
        var a = [], b;
        for (b in t)t.hasOwnProperty(b) && a.push(t[b].getMemberId());
        return a
    };
    this.addCursor = function (a) {
        runtime.assert(Boolean(a), "OdtDocument::addCursor without cursor");
        var b = a.getMemberId(), d = e.convertCursorToDomRange(0, 0);
        runtime.assert("string" === typeof b, "OdtDocument::addCursor has cursor without memberid");
        runtime.assert(!t[b], "OdtDocument::addCursor is adding a duplicate cursor with memberid " + b);
        a.setSelectedRange(d, !0);
        t[b] = a
    };
    this.removeCursor = function (a) {
        var b = t[a];
        return b ? (b.removeFromDocument(), delete t[a], e.emit(ops.Document.signalCursorRemoved, a), !0) : !1
    };
    this.moveCursor = function (a, b, d, c) {
        a = t[a];
        b = e.convertCursorToDomRange(b, d);
        a && (a.setSelectedRange(b,
            0 <= d), a.setSelectionType(c || ops.OdtCursor.RangeSelection))
    };
    this.getFormatting = function () {
        return f.getFormatting()
    };
    this.emit = function (a, b) {
        v.emit(a, b)
    };
    this.subscribe = function (a, b) {
        v.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        v.unsubscribe(a, b)
    };
    this.createRootFilter = function (a) {
        return new k(a)
    };
    this.close = function (a) {
        a()
    };
    this.destroy = function (a) {
        a()
    };
    (function () {
        var b = a();
        A = new ops.TextPositionFilter;
        s = new odf.StepUtils;
        F = new ops.OdtStepsTranslator(b, l(b), A, 500);
        v.subscribe(ops.OdtDocument.signalStepsInserted,
            F.handleStepsInserted);
        v.subscribe(ops.OdtDocument.signalStepsRemoved, F.handleStepsRemoved);
        v.subscribe(ops.OdtDocument.signalOperationEnd, g);
        v.subscribe(ops.OdtDocument.signalProcessingBatchEnd, core.Task.processTasks)
    })()
};
ops.OdtDocument.signalParagraphChanged = "paragraph/changed";
ops.OdtDocument.signalTableAdded = "table/added";
ops.OdtDocument.signalCommonStyleCreated = "style/created";
ops.OdtDocument.signalCommonStyleDeleted = "style/deleted";
ops.OdtDocument.signalParagraphStyleModified = "paragraphstyle/modified";
ops.OdtDocument.signalOperationStart = "operation/start";
ops.OdtDocument.signalOperationEnd = "operation/end";
ops.OdtDocument.signalProcessingBatchStart = "router/batchstart";
ops.OdtDocument.signalProcessingBatchEnd = "router/batchend";
ops.OdtDocument.signalUndoStackChanged = "undo/changed";
ops.OdtDocument.signalStepsInserted = "steps/inserted";
ops.OdtDocument.signalStepsRemoved = "steps/removed";
ops.OdtDocument.signalMetadataUpdated = "metadata/updated";
ops.OdtDocument.signalAnnotationAdded = "annotation/added";
ops.OpAddAnnotation = function () {
    function f(a, b, c) {
        var h = a.getTextNodeAtStep(c, l);
        h && (a = h.textNode, c = a.parentNode, h.offset !== a.length && a.splitText(h.offset), c.insertBefore(b, a.nextSibling), 0 === a.length && c.removeChild(a))
    }

    var l, a, c, b, k, q;
    this.init = function (f) {
        l = f.memberid;
        a = parseInt(f.timestamp, 10);
        c = parseInt(f.position, 10);
        b = void 0 !== f.length ? parseInt(f.length, 10) || 0 : void 0;
        k = f.name
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (p) {
        var n = p.getCursor(l), g, h;
        q = p.getDOMDocument();
        var d = new Date(a),
            e, s, m;
        e = q.createElementNS(odf.Namespaces.officens, "office:annotation");
        e.setAttributeNS(odf.Namespaces.officens, "office:name", k);
        g = q.createElementNS(odf.Namespaces.dcns, "dc:creator");
        g.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", l);
        g.textContent = p.getMember(l).getProperties().fullName;
        h = q.createElementNS(odf.Namespaces.dcns, "dc:date");
        h.appendChild(q.createTextNode(d.toISOString()));
        d = q.createElementNS(odf.Namespaces.textns, "text:list");
        s = q.createElementNS(odf.Namespaces.textns,
            "text:list-item");
        m = q.createElementNS(odf.Namespaces.textns, "text:p");
        s.appendChild(m);
        d.appendChild(s);
        e.appendChild(g);
        e.appendChild(h);
        e.appendChild(d);
        void 0 !== b && (g = q.createElementNS(odf.Namespaces.officens, "office:annotation-end"), g.setAttributeNS(odf.Namespaces.officens, "office:name", k), e.annotationEndElement = g, f(p, g, c + b));
        f(p, e, c);
        p.emit(ops.OdtDocument.signalStepsInserted, {position: c});
        n && (g = q.createRange(), h = e.getElementsByTagNameNS(odf.Namespaces.textns, "p")[0], g.selectNodeContents(h),
            n.setSelectedRange(g, !1), n.setSelectionType(ops.OdtCursor.RangeSelection), p.emit(ops.Document.signalCursorMoved, n));
        p.getOdfCanvas().addAnnotation(e);
        p.fixCursorPositions();
        p.emit(ops.OdtDocument.signalAnnotationAdded, {memberId: l, annotation: e});
        return !0
    };
    this.spec = function () {
        return {optype: "AddAnnotation", memberid: l, timestamp: a, position: c, length: b, name: k}
    }
};
ops.OpAddCursor = function () {
    var f, l;
    this.init = function (a) {
        f = a.memberid;
        l = a.timestamp
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (a) {
        var c = a.getCursor(f);
        if (c)return !1;
        c = new ops.OdtCursor(f, a);
        a.addCursor(c);
        a.emit(ops.Document.signalCursorAdded, c);
        return !0
    };
    this.spec = function () {
        return {optype: "AddCursor", memberid: f, timestamp: l}
    }
};
ops.OpAddMember = function () {
    var f, l, a;
    this.init = function (c) {
        f = c.memberid;
        l = parseInt(c.timestamp, 10);
        a = c.setProperties
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (c) {
        var b;
        if (c.getMember(f))return !1;
        b = new ops.Member(f, a);
        c.addMember(b);
        c.emit(ops.Document.signalMemberAdded, b);
        return !0
    };
    this.spec = function () {
        return {optype: "AddMember", memberid: f, timestamp: l, setProperties: a}
    }
};
ops.OpAddStyle = function () {
    var f, l, a, c, b, k, q = odf.Namespaces.stylens;
    this.init = function (p) {
        f = p.memberid;
        l = p.timestamp;
        a = p.styleName;
        c = p.styleFamily;
        b = "true" === p.isAutomaticStyle || !0 === p.isAutomaticStyle;
        k = p.setProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (f) {
        var n = f.getOdfCanvas().odfContainer(), g = f.getFormatting(), h = f.getDOMDocument().createElementNS(q, "style:style");
        if (!h)return !1;
        k && g.updateStyle(h, k);
        h.setAttributeNS(q, "style:family", c);
        h.setAttributeNS(q, "style:name", a);
        b ?
            n.rootElement.automaticStyles.appendChild(h) : n.rootElement.styles.appendChild(h);
        f.getOdfCanvas().refreshCSS();
        b || f.emit(ops.OdtDocument.signalCommonStyleCreated, {name: a, family: c});
        return !0
    };
    this.spec = function () {
        return {
            optype: "AddStyle",
            memberid: f,
            timestamp: l,
            styleName: a,
            styleFamily: c,
            isAutomaticStyle: b,
            setProperties: k
        }
    }
};
odf.ObjectNameGenerator = function (f, l) {
    function a(a, b) {
        var d = {};
        this.generateName = function () {
            var e = b(), c = 0, g;
            do g = a + c, c += 1; while (d[g] || e[g]);
            d[g] = !0;
            return g
        }
    }

    function c() {
        var a = {};
        [f.rootElement.automaticStyles, f.rootElement.styles].forEach(function (d) {
            for (d = d.firstElementChild; d;)d.namespaceURI === b && "style" === d.localName && (a[d.getAttributeNS(b, "name")] = !0), d = d.nextElementSibling
        });
        return a
    }

    var b = odf.Namespaces.stylens, k = odf.Namespaces.drawns, q = odf.Namespaces.xlinkns, p = (new core.Utils).hashString(l),
        n = null, g = null, h = null, d = {}, e = {};
    this.generateStyleName = function () {
        null === n && (n = new a("auto" + p + "_", function () {
            return c()
        }));
        return n.generateName()
    };
    this.generateFrameName = function () {
        var b, e, c;
        if (null === g) {
            e = f.rootElement.body.getElementsByTagNameNS(k, "frame");
            for (b = 0; b < e.length; b += 1)c = e.item(b), d[c.getAttributeNS(k, "name")] = !0;
            g = new a("fr" + p + "_", function () {
                return d
            })
        }
        return g.generateName()
    };
    this.generateImageName = function () {
        var b, d, c;
        if (null === h) {
            c = f.rootElement.body.getElementsByTagNameNS(k, "image");
            for (b = 0; b < c.length; b += 1)d = c.item(b), d = d.getAttributeNS(q, "href"), d = d.substring(9, d.lastIndexOf(".")), e[d] = !0;
            h = new a("img" + p + "_", function () {
                return e
            })
        }
        return h.generateName()
    }
};
odf.TextStyleApplicator = function (f, l, a) {
    function c(a) {
        function b(a, d) {
            return "object" === typeof a && "object" === typeof d ? Object.keys(a).every(function (c) {
                    return b(a[c], d[c])
                }) : a === d
        }

        var d = {};
        this.isStyleApplied = function (e) {
            e = l.getAppliedStylesForElement(e, d).styleProperties;
            return b(a, e)
        }
    }

    function b(b) {
        var c = {};
        this.applyStyleToContainer = function (d) {
            var e;
            e = d.getAttributeNS(p, "style-name");
            var k = d.ownerDocument;
            e = e || "";
            if (!c.hasOwnProperty(e)) {
                var m = e, q;
                q = e ? l.createDerivedStyleObject(e, "text", b) : b;
                k =
                    k.createElementNS(n, "style:style");
                l.updateStyle(k, q);
                k.setAttributeNS(n, "style:name", f.generateStyleName());
                k.setAttributeNS(n, "style:family", "text");
                k.setAttributeNS("urn:webodf:names:scope", "scope", "document-content");
                a.appendChild(k);
                c[m] = k
            }
            e = c[e].getAttributeNS(n, "name");
            d.setAttributeNS(p, "text:style-name", e)
        }
    }

    function k(a, b) {
        var d = a.ownerDocument, e = a.parentNode, c, f, k, n = new core.LoopWatchDog(1E4);
        f = [];
        f.push(a);
        for (k = a.nextSibling; k && q.rangeContainsNode(b, k);)n.check(), f.push(k), k = k.nextSibling;
        "span" !== e.localName || e.namespaceURI !== p ? (c = d.createElementNS(p, "text:span"), e.insertBefore(c, a), d = !1) : (a.previousSibling && !q.rangeContainsNode(b, e.firstChild) ? (c = e.cloneNode(!1), e.parentNode.insertBefore(c, e.nextSibling)) : c = e, d = !0);
        f.forEach(function (a) {
            a.parentNode !== c && c.appendChild(a)
        });
        if (k && d)for (f = c.cloneNode(!1), c.parentNode.insertBefore(f, c.nextSibling); k;)n.check(), d = k.nextSibling, f.appendChild(k), k = d;
        return c
    }

    var q = core.DomUtils, p = odf.Namespaces.textns, n = odf.Namespaces.stylens;
    this.applyStyle =
        function (a, f, d) {
            var e = {}, p, m, n, q;
            runtime.assert(d && d.hasOwnProperty("style:text-properties"), "applyStyle without any text properties");
            e["style:text-properties"] = d["style:text-properties"];
            n = new b(e);
            q = new c(e);
            a.forEach(function (a) {
                p = q.isStyleApplied(a);
                !1 === p && (m = k(a, f), n.applyStyleToContainer(m))
            })
        }
};
ops.OpApplyDirectStyling = function () {
    function f(a, b, c) {
        var d = a.getOdfCanvas().odfContainer(), e = p.splitBoundaries(b), f = q.getTextNodes(b, !1);
        (new odf.TextStyleApplicator(new odf.ObjectNameGenerator(d, l), a.getFormatting(), d.rootElement.automaticStyles)).applyStyle(f, b, c);
        e.forEach(p.normalizeTextNodes)
    }

    var l, a, c, b, k, q = odf.OdfUtils, p = core.DomUtils;
    this.init = function (f) {
        l = f.memberid;
        a = f.timestamp;
        c = parseInt(f.position, 10);
        b = parseInt(f.length, 10);
        k = f.setProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute =
        function (p) {
            var g = p.convertCursorToDomRange(c, b), h = q.getParagraphElements(g);
            f(p, g, k);
            g.detach();
            p.getOdfCanvas().refreshCSS();
            p.fixCursorPositions();
            h.forEach(function (b) {
                p.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: b, memberId: l, timeStamp: a})
            });
            p.getOdfCanvas().rerenderAnnotations();
            return !0
        };
    this.spec = function () {
        return {optype: "ApplyDirectStyling", memberid: l, timestamp: a, position: c, length: b, setProperties: k}
    }
};
ops.OpApplyHyperlink = function () {
    function f(a) {
        for (; a;) {
            if (p.isHyperlink(a))return !0;
            a = a.parentNode
        }
        return !1
    }

    var l, a, c, b, k, q = core.DomUtils, p = odf.OdfUtils;
    this.init = function (f) {
        l = f.memberid;
        a = f.timestamp;
        c = f.position;
        b = f.length;
        k = f.hyperlink
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (n) {
        var g = n.getDOMDocument(), h = n.convertCursorToDomRange(c, b), d = q.splitBoundaries(h), e = [], s = p.getTextNodes(h, !1);
        if (0 === s.length)return !1;
        s.forEach(function (a) {
            var b = p.getParagraphElement(a);
            runtime.assert(!1 ===
                f(a), "The given range should not contain any link.");
            var d = k, c = g.createElementNS(odf.Namespaces.textns, "text:a");
            c.setAttributeNS(odf.Namespaces.xlinkns, "xlink:type", "simple");
            c.setAttributeNS(odf.Namespaces.xlinkns, "xlink:href", d);
            a.parentNode.insertBefore(c, a);
            c.appendChild(a);
            -1 === e.indexOf(b) && e.push(b)
        });
        d.forEach(q.normalizeTextNodes);
        h.detach();
        n.fixCursorPositions();
        n.getOdfCanvas().refreshSize();
        n.getOdfCanvas().rerenderAnnotations();
        e.forEach(function (b) {
            n.emit(ops.OdtDocument.signalParagraphChanged,
                {paragraphElement: b, memberId: l, timeStamp: a})
        });
        return !0
    };
    this.spec = function () {
        return {optype: "ApplyHyperlink", memberid: l, timestamp: a, position: c, length: b, hyperlink: k}
    }
};
ops.OpInsertImage = function () {
    var f, l, a, c, b, k, q, p, n = odf.Namespaces.drawns, g = odf.Namespaces.svgns, h = odf.Namespaces.textns, d = odf.Namespaces.xlinkns, e = odf.OdfUtils;
    this.init = function (d) {
        f = d.memberid;
        l = d.timestamp;
        a = d.position;
        c = d.filename;
        b = d.frameWidth;
        k = d.frameHeight;
        q = d.frameStyleName;
        p = d.frameName
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (s) {
        var m = s.getOdfCanvas(), x = s.getTextNodeAtStep(a, f), t, y;
        if (!x)return !1;
        t = x.textNode;
        y = e.getParagraphElement(t);
        var x = x.offset !== t.length ? t.splitText(x.offset) :
            t.nextSibling, v = s.getDOMDocument(), r = v.createElementNS(n, "draw:image"), v = v.createElementNS(n, "draw:frame");
        r.setAttributeNS(d, "xlink:href", c);
        r.setAttributeNS(d, "xlink:type", "simple");
        r.setAttributeNS(d, "xlink:show", "embed");
        r.setAttributeNS(d, "xlink:actuate", "onLoad");
        v.setAttributeNS(n, "draw:style-name", q);
        v.setAttributeNS(n, "draw:name", p);
        v.setAttributeNS(h, "text:anchor-type", "as-char");
        v.setAttributeNS(g, "svg:width", b);
        v.setAttributeNS(g, "svg:height", k);
        v.appendChild(r);
        t.parentNode.insertBefore(v,
            x);
        s.emit(ops.OdtDocument.signalStepsInserted, {position: a});
        0 === t.length && t.parentNode.removeChild(t);
        m.addCssForFrameWithImage(v);
        m.refreshCSS();
        s.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: y, memberId: f, timeStamp: l});
        m.rerenderAnnotations();
        return !0
    };
    this.spec = function () {
        return {
            optype: "InsertImage",
            memberid: f,
            timestamp: l,
            filename: c,
            position: a,
            frameWidth: b,
            frameHeight: k,
            frameStyleName: q,
            frameName: p
        }
    }
};
ops.OpInsertTable = function () {
    function f(a, e) {
        var f;
        if (1 === g.length) f = g[0]; else if (3 === g.length)switch (a) {
            case 0:
                f = g[0];
                break;
            case c - 1:
                f = g[2];
                break;
            default:
                f = g[1]
        } else f = g[a];
        if (1 === f.length)return f[0];
        if (3 === f.length)switch (e) {
            case 0:
                return f[0];
            case b - 1:
                return f[2];
            default:
                return f[1]
        }
        return f[e]
    }

    var l, a, c, b, k, q, p, n, g, h = odf.OdfUtils;
    this.init = function (d) {
        l = d.memberid;
        a = d.timestamp;
        k = d.position;
        c = d.initialRows;
        b = d.initialColumns;
        q = d.tableName;
        p = d.tableStyleName;
        n = d.tableColumnStyleName;
        g = d.tableCellStyleMatrix
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (d) {
        var e = d.getTextNodeAtStep(k), g = d.getRootNode();
        if (e) {
            var m = d.getDOMDocument(), x = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table"), t = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-column"), y, v, r, w;
            p && x.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", p);
            q && x.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:name", q);
            t.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "table:number-columns-repeated", b);
            n && t.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", n);
            x.appendChild(t);
            for (r = 0; r < c; r += 1) {
                t = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-row");
                for (w = 0; w < b; w += 1)y = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-cell"), (v = f(r, w)) && y.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", v), v = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                    "text:p"), y.appendChild(v), t.appendChild(y);
                x.appendChild(t)
            }
            e = h.getParagraphElement(e.textNode);
            g.insertBefore(x, e.nextSibling);
            d.emit(ops.OdtDocument.signalStepsInserted, {position: k});
            d.getOdfCanvas().refreshSize();
            d.emit(ops.OdtDocument.signalTableAdded, {tableElement: x, memberId: l, timeStamp: a});
            d.getOdfCanvas().rerenderAnnotations();
            return !0
        }
        return !1
    };
    this.spec = function () {
        return {
            optype: "InsertTable",
            memberid: l,
            timestamp: a,
            position: k,
            initialRows: c,
            initialColumns: b,
            tableName: q,
            tableStyleName: p,
            tableColumnStyleName: n,
            tableCellStyleMatrix: g
        }
    }
};
ops.OpInsertText = function () {
    var f, l, a, c, b, k = odf.OdfUtils;
    this.init = function (k) {
        f = k.memberid;
        l = k.timestamp;
        a = k.position;
        b = k.text;
        c = "true" === k.moveCursor || !0 === k.moveCursor
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (q) {
        var p, n, g, h = null, d = q.getDOMDocument(), e, s = 0, m, x = q.getCursor(f), t;
        q.upgradeWhitespacesAtPosition(a);
        if (p = q.getTextNodeAtStep(a)) {
            n = p.textNode;
            h = n.nextSibling;
            g = n.parentNode;
            e = k.getParagraphElement(n);
            for (t = 0; t < b.length; t += 1)if ("\t" === b[t] || "\t" !== b[t] && k.isODFWhitespace(b[t]) &&
                (0 === t || t === b.length - 1 || "\t" !== b[t - 1] && k.isODFWhitespace(b[t - 1]))) 0 === s ? (p.offset !== n.length && (h = n.splitText(p.offset)), 0 < t && n.appendData(b.substring(0, t))) : s < t && (s = b.substring(s, t), g.insertBefore(d.createTextNode(s), h)), s = t + 1, "\t" === b[t] ? (m = d.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:tab"), m.appendChild(d.createTextNode("\t"))) : (" " !== b[t] && runtime.log("WARN: InsertText operation contains non-tab, non-space whitespace character (character code " + b.charCodeAt(t) + ")"),
                    m = d.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:s"), m.appendChild(d.createTextNode(" "))), g.insertBefore(m, h);
            0 === s ? n.insertData(p.offset, b) : s < b.length && (p = b.substring(s), g.insertBefore(d.createTextNode(p), h));
            g = n.parentNode;
            h = n.nextSibling;
            g.removeChild(n);
            g.insertBefore(n, h);
            0 === n.length && n.parentNode.removeChild(n);
            q.emit(ops.OdtDocument.signalStepsInserted, {position: a});
            x && c && (q.moveCursor(f, a + b.length, 0), q.emit(ops.Document.signalCursorMoved, x));
            q.downgradeWhitespacesAtPosition(a);
            q.downgradeWhitespacesAtPosition(a + b.length);
            q.getOdfCanvas().refreshSize();
            q.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: e, memberId: f, timeStamp: l});
            q.getOdfCanvas().rerenderAnnotations();
            return !0
        }
        return !1
    };
    this.spec = function () {
        return {optype: "InsertText", memberid: f, timestamp: l, position: a, text: b, moveCursor: c}
    }
};
odf.CollapsingRules = function (f) {
    function l(a) {
        return c.isODFNode(a) || "br" === a.localName && c.isLineBreak(a.parentNode) || a.nodeType === Node.TEXT_NODE && c.isODFNode(a.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    }

    function a(k) {
        var q;
        k.nodeType === Node.TEXT_NODE ? (q = k.parentNode, q.removeChild(k)) : q = b.removeUnwantedNodes(k, l);
        return q && !c.isParagraph(q) && q !== f && c.hasNoODFContent(q) ? a(q) : q
    }

    var c = odf.OdfUtils, b = core.DomUtils;
    this.mergeChildrenIntoParent = a
};
ops.OpMergeParagraph = function () {
    function f(a) {
        return odf.OdfUtils.isInlineRoot(a) ? NodeFilter.FILTER_SKIP : h.isGroupingElement(a) && h.hasNoODFContent(a) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    }

    function l(a) {
        if (a.nodeType === Node.TEXT_NODE) {
            if (0 === a.length)return runtime.log("WARN: Empty text node found during merge operation"), !0;
            if (h.isODFWhitespace(a.data) && !1 === h.isSignificantWhitespace(a, 0))return !0;
            a = "#text"
        } else a = (a.prefix ? a.prefix + ":" : "") + a.localName;
        runtime.log("WARN: Unexpected text element found near paragraph boundary [" +
            a + "]");
        return !1
    }

    function a(a) {
        a.collapsed || (d.splitBoundaries(a), a = h.getTextElements(a, !1, !0).filter(l), a.forEach(function (a) {
            a.parentNode.removeChild(a)
        }))
    }

    function c(a, b, d) {
        a = a.convertCursorStepToDomPoint(b);
        var e = h.getParagraphElement(a.node, a.offset);
        runtime.assert(Boolean(e), "Paragraph not found at step " + b);
        d && d.setPosition(a.node, a.offset);
        return e
    }

    var b, k, q, p, n, g, h = odf.OdfUtils, d = core.DomUtils, e = odf.Namespaces.textns;
    this.init = function (a) {
        b = a.memberid;
        k = a.timestamp;
        q = a.moveCursor;
        p = a.paragraphStyleName;
        n = parseInt(a.sourceStartPosition, 10);
        g = parseInt(a.destinationStartPosition, 10)
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (h) {
        var m, l, t = h.getCursor(b);
        m = h.getRootNode();
        var y = new odf.CollapsingRules(m), v = h.createStepIterator(m, 0, [h.getPositionFilter()], m), r;
        runtime.assert(g < n, "Destination paragraph (" + g + ") must be before source paragraph (" + n + ")");
        l = c(h, g);
        m = c(h, n, v);
        v.previousStep();
        runtime.assert(d.containsNode(l, v.container()), "Destination paragraph must be adjacent to the source paragraph");
        r = l.ownerDocument.createRange();
        v.setPosition(l, l.childNodes.length);
        v.roundToPreviousStep();
        r.setStart(v.container(), v.offset());
        r.setEnd(l, l.childNodes.length);
        a(r);
        r = l.childNodes.length;
        var w = m.ownerDocument.createRange();
        v.setPosition(m, 0);
        v.roundToNextStep();
        w.setStart(m, 0);
        w.setEnd(v.container(), v.offset());
        a(w);
        for (w = m.firstChild; w;)"editinfo" === w.localName ? m.removeChild(w) : (l.appendChild(w), d.removeUnwantedNodes(w, f)), w = m.firstChild;
        runtime.assert(0 === m.childNodes.length, "Source paragraph should be empty before it is removed");
        y.mergeChildrenIntoParent(m);
        h.emit(ops.OdtDocument.signalStepsRemoved, {position: n - 1});
        v.setPosition(l, r);
        v.roundToClosestStep();
        v.previousStep() || v.roundToNextStep();
        h.downgradeWhitespaces(v);
        p ? l.setAttributeNS(e, "text:style-name", p) : l.removeAttributeNS(e, "style-name");
        t && q && (h.moveCursor(b, n - 1, 0), h.emit(ops.Document.signalCursorMoved, t));
        h.fixCursorPositions();
        h.getOdfCanvas().refreshSize();
        h.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: l, memberId: b, timeStamp: k});
        h.getOdfCanvas().rerenderAnnotations();
        return !0
    };
    this.spec = function () {
        return {
            optype: "MergeParagraph",
            memberid: b,
            timestamp: k,
            moveCursor: q,
            paragraphStyleName: p,
            sourceStartPosition: n,
            destinationStartPosition: g
        }
    }
};
ops.OpMoveCursor = function () {
    var f, l, a, c, b;
    this.init = function (k) {
        f = k.memberid;
        l = k.timestamp;
        a = k.position;
        c = k.length || 0;
        b = k.selectionType || ops.OdtCursor.RangeSelection
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (k) {
        var q = k.getCursor(f), p;
        if (!q)return !1;
        p = k.convertCursorToDomRange(a, c);
        q.setSelectedRange(p, 0 <= c);
        q.setSelectionType(b);
        k.emit(ops.Document.signalCursorMoved, q);
        return !0
    };
    this.spec = function () {
        return {optype: "MoveCursor", memberid: f, timestamp: l, position: a, length: c, selectionType: b}
    }
};
ops.OpRemoveAnnotation = function () {
    var f, l, a, c, b = core.DomUtils;
    this.init = function (b) {
        f = b.memberid;
        l = b.timestamp;
        a = parseInt(b.position, 10);
        c = parseInt(b.length, 10)
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (c) {
        function f(a) {
            n.parentNode.insertBefore(a, n)
        }

        for (var p = c.getIteratorAtPosition(a).container(), n; p.namespaceURI !== odf.Namespaces.officens || "annotation" !== p.localName;)p = p.parentNode;
        if (null === p)return !1;
        n = p;
        p = n.annotationEndElement;
        c.getOdfCanvas().forgetAnnotation(n);
        b.getElementsByTagNameNS(n,
            "urn:webodf:names:cursor", "cursor").forEach(f);
        b.getElementsByTagNameNS(n, "urn:webodf:names:cursor", "anchor").forEach(f);
        n.parentNode.removeChild(n);
        p && p.parentNode.removeChild(p);
        c.emit(ops.OdtDocument.signalStepsRemoved, {position: 0 < a ? a - 1 : a});
        c.getOdfCanvas().rerenderAnnotations();
        c.fixCursorPositions();
        return !0
    };
    this.spec = function () {
        return {optype: "RemoveAnnotation", memberid: f, timestamp: l, position: a, length: c}
    }
};
ops.OpRemoveBlob = function () {
    var f, l, a;
    this.init = function (c) {
        f = c.memberid;
        l = c.timestamp;
        a = c.filename
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (c) {
        c.getOdfCanvas().odfContainer().removeBlob(a);
        return !0
    };
    this.spec = function () {
        return {optype: "RemoveBlob", memberid: f, timestamp: l, filename: a}
    }
};
ops.OpRemoveCursor = function () {
    var f, l;
    this.init = function (a) {
        f = a.memberid;
        l = a.timestamp
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (a) {
        return a.removeCursor(f) ? !0 : !1
    };
    this.spec = function () {
        return {optype: "RemoveCursor", memberid: f, timestamp: l}
    }
};
ops.OpRemoveHyperlink = function () {
    var f, l, a, c, b = core.DomUtils, k = odf.OdfUtils;
    this.init = function (b) {
        f = b.memberid;
        l = b.timestamp;
        a = b.position;
        c = b.length
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (q) {
        var p = q.convertCursorToDomRange(a, c), n = k.getHyperlinkElements(p);
        runtime.assert(1 === n.length, "The given range should only contain a single link.");
        n = b.mergeIntoParent(n[0]);
        p.detach();
        q.fixCursorPositions();
        q.getOdfCanvas().refreshSize();
        q.getOdfCanvas().rerenderAnnotations();
        q.emit(ops.OdtDocument.signalParagraphChanged,
            {paragraphElement: k.getParagraphElement(n), memberId: f, timeStamp: l});
        return !0
    };
    this.spec = function () {
        return {optype: "RemoveHyperlink", memberid: f, timestamp: l, position: a, length: c}
    }
};
ops.OpRemoveMember = function () {
    var f, l;
    this.init = function (a) {
        f = a.memberid;
        l = parseInt(a.timestamp, 10)
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (a) {
        if (!a.getMember(f))return !1;
        a.removeMember(f);
        a.emit(ops.Document.signalMemberRemoved, f);
        return !0
    };
    this.spec = function () {
        return {optype: "RemoveMember", memberid: f, timestamp: l}
    }
};
ops.OpRemoveStyle = function () {
    var f, l, a, c;
    this.init = function (b) {
        f = b.memberid;
        l = b.timestamp;
        a = b.styleName;
        c = b.styleFamily
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (b) {
        var f = b.getFormatting().getStyleElement(a, c);
        if (!f)return !1;
        f.parentNode.removeChild(f);
        b.getOdfCanvas().refreshCSS();
        b.emit(ops.OdtDocument.signalCommonStyleDeleted, {name: a, family: c});
        return !0
    };
    this.spec = function () {
        return {optype: "RemoveStyle", memberid: f, timestamp: l, styleName: a, styleFamily: c}
    }
};
ops.OpRemoveText = function () {
    var f, l, a, c, b = odf.OdfUtils, k = core.DomUtils;
    this.init = function (b) {
        runtime.assert(0 <= b.length, "OpRemoveText only supports positive lengths");
        f = b.memberid;
        l = b.timestamp;
        a = parseInt(b.position, 10);
        c = parseInt(b.length, 10)
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (q) {
        var p, n, g, h = q.getCursor(f), d = new odf.CollapsingRules(q.getRootNode());
        q.upgradeWhitespacesAtPosition(a);
        q.upgradeWhitespacesAtPosition(a + c);
        p = q.convertCursorToDomRange(a, c);
        k.splitBoundaries(p);
        n = b.getTextElements(p,
            !1, !0);
        g = b.getParagraphElement(p.startContainer, p.startOffset);
        runtime.assert(void 0 !== g, "Attempting to remove text outside a paragraph element");
        p.detach();
        n.forEach(function (a) {
            a.parentNode ? (runtime.assert(k.containsNode(g, a), "RemoveText only supports removing elements within the same paragraph"), d.mergeChildrenIntoParent(a)) : runtime.log("WARN: text element has already been removed from it's container")
        });
        q.emit(ops.OdtDocument.signalStepsRemoved, {position: a});
        q.downgradeWhitespacesAtPosition(a);
        q.fixCursorPositions();
        q.getOdfCanvas().refreshSize();
        q.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: g, memberId: f, timeStamp: l});
        h && (h.resetSelectionType(), q.emit(ops.Document.signalCursorMoved, h));
        q.getOdfCanvas().rerenderAnnotations();
        return !0
    };
    this.spec = function () {
        return {optype: "RemoveText", memberid: f, timestamp: l, position: a, length: c}
    }
};
ops.OpSetBlob = function () {
    var f, l, a, c, b;
    this.init = function (k) {
        f = k.memberid;
        l = k.timestamp;
        a = k.filename;
        c = k.mimetype;
        b = k.content
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (f) {
        f.getOdfCanvas().odfContainer().setBlob(a, c, b);
        return !0
    };
    this.spec = function () {
        return {optype: "SetBlob", memberid: f, timestamp: l, filename: a, mimetype: c, content: b}
    }
};
ops.OpSetParagraphStyle = function () {
    function f(a, b, c) {
        var f = [a.getPositionFilter()], h = c.container();
        c = c.unfilteredDomOffset();
        return !1 === a.createStepIterator(h, c, f, b).previousStep()
    }

    var l, a, c, b, k = odf.OdfUtils;
    this.init = function (f) {
        l = f.memberid;
        a = f.timestamp;
        c = f.position;
        b = f.styleName
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (q) {
        var p, n;
        p = q.getIteratorAtPosition(c);
        return (n = k.getParagraphElement(p.container())) ? (runtime.assert(f(q, n, p), "SetParagraphStyle position should be the first position in the paragraph"),
                b ? n.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:style-name", b) : n.removeAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "style-name"), q.getOdfCanvas().refreshSize(), q.emit(ops.OdtDocument.signalParagraphChanged, {
                paragraphElement: n,
                timeStamp: a,
                memberId: l
            }), q.getOdfCanvas().rerenderAnnotations(), !0) : !1
    };
    this.spec = function () {
        return {optype: "SetParagraphStyle", memberid: l, timestamp: a, position: c, styleName: b}
    }
};
ops.OpSplitParagraph = function () {
    var f, l, a, c, b, k, q = odf.OdfUtils, p = odf.Namespaces.textns;
    this.init = function (p) {
        f = p.memberid;
        l = p.timestamp;
        c = p.position;
        a = p.sourceParagraphPosition;
        k = p.paragraphStyleName;
        b = "true" === p.moveCursor || !0 === p.moveCursor
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (a) {
        var g, h, d, e, s, m, x, t = a.getCursor(f);
        a.upgradeWhitespacesAtPosition(c);
        g = a.getTextNodeAtStep(c);
        if (!g)return !1;
        h = q.getParagraphElement(g.textNode);
        if (!h)return !1;
        d = q.isListItem(h.parentNode) ? h.parentNode :
            h;
        0 === g.offset ? (x = g.textNode.previousSibling, m = null) : (x = g.textNode, m = g.offset >= g.textNode.length ? null : g.textNode.splitText(g.offset));
        for (e = g.textNode; e !== d;) {
            e = e.parentNode;
            s = e.cloneNode(!1);
            m && s.appendChild(m);
            if (x)for (; x && x.nextSibling;)s.appendChild(x.nextSibling); else for (; e.firstChild;)s.appendChild(e.firstChild);
            e.parentNode.insertBefore(s, e.nextSibling);
            x = e;
            m = s
        }
        q.isListItem(m) && (m = m.childNodes.item(0));
        k ? m.setAttributeNS(p, "text:style-name", k) : m.removeAttributeNS(p, "style-name");
        0 === g.textNode.length &&
        g.textNode.parentNode.removeChild(g.textNode);
        a.emit(ops.OdtDocument.signalStepsInserted, {position: c});
        t && b && (a.moveCursor(f, c + 1, 0), a.emit(ops.Document.signalCursorMoved, t));
        a.fixCursorPositions();
        a.getOdfCanvas().refreshSize();
        a.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: h, memberId: f, timeStamp: l});
        a.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: m, memberId: f, timeStamp: l});
        a.getOdfCanvas().rerenderAnnotations();
        return !0
    };
    this.spec = function () {
        return {
            optype: "SplitParagraph",
            memberid: f, timestamp: l, position: c, sourceParagraphPosition: a, paragraphStyleName: k, moveCursor: b
        }
    }
};
ops.OpUpdateMember = function () {
    function f(a) {
        var b = "//dc:creator[@editinfo:memberid='" + l + "']";
        a = xmldom.XPath.getODFElementsWithXPath(a.getRootNode(), b, function (a) {
            return "editinfo" === a ? "urn:webodf:names:editinfo" : odf.Namespaces.lookupNamespaceURI(a)
        });
        for (b = 0; b < a.length; b += 1)a[b].textContent = c.fullName
    }

    var l, a, c, b;
    this.init = function (f) {
        l = f.memberid;
        a = parseInt(f.timestamp, 10);
        c = f.setProperties;
        b = f.removedProperties
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (a) {
        var q = a.getMember(l);
        if (!q)return !1;
        b && q.removeProperties(b);
        c && (q.setProperties(c), c.fullName && f(a));
        a.emit(ops.Document.signalMemberUpdated, q);
        return !0
    };
    this.spec = function () {
        return {optype: "UpdateMember", memberid: l, timestamp: a, setProperties: c, removedProperties: b}
    }
};
ops.OpUpdateMetadata = function () {
    var f, l, a, c;
    this.init = function (b) {
        f = b.memberid;
        l = parseInt(b.timestamp, 10);
        a = b.setProperties;
        c = b.removedProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (b) {
        var f = b.getOdfCanvas().odfContainer(), l = null;
        c && (l = c.attributes.split(","));
        f.setMetadata(a, l);
        b.emit(ops.OdtDocument.signalMetadataUpdated, {
            setProperties: null !== a ? a : {},
            removedProperties: null !== l ? l : []
        });
        return !0
    };
    this.spec = function () {
        return {
            optype: "UpdateMetadata", memberid: f, timestamp: l, setProperties: a,
            removedProperties: c
        }
    }
};
ops.OpUpdateParagraphStyle = function () {
    function f(a, b) {
        var c, f, d = b ? b.split(",") : [];
        for (c = 0; c < d.length; c += 1)f = d[c].split(":"), a.removeAttributeNS(odf.Namespaces.lookupNamespaceURI(f[0]), f[1])
    }

    var l, a, c, b, k, q = odf.Namespaces.stylens;
    this.init = function (f) {
        l = f.memberid;
        a = f.timestamp;
        c = f.styleName;
        b = f.setProperties;
        k = f.removedProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (a) {
        var l = a.getFormatting(), g, h, d;
        return (g = "" !== c ? l.getStyleElement(c, "paragraph") : l.getDefaultStyleElement("paragraph")) ?
            (h = g.getElementsByTagNameNS(q, "paragraph-properties").item(0), d = g.getElementsByTagNameNS(q, "text-properties").item(0), b && l.updateStyle(g, b), k && (l = k["style:paragraph-properties"], h && l && (f(h, l.attributes), 0 === h.attributes.length && g.removeChild(h)), l = k["style:text-properties"], d && l && (f(d, l.attributes), 0 === d.attributes.length && g.removeChild(d)), f(g, k.attributes)), a.getOdfCanvas().refreshCSS(), a.emit(ops.OdtDocument.signalParagraphStyleModified, c), a.getOdfCanvas().rerenderAnnotations(), !0) : !1
    };
    this.spec =
        function () {
            return {
                optype: "UpdateParagraphStyle",
                memberid: l,
                timestamp: a,
                styleName: c,
                setProperties: b,
                removedProperties: k
            }
        }
};
ops.OperationFactory = function () {
    function f(a) {
        return function (c) {
            return new a
        }
    }

    var l;
    this.register = function (a, c) {
        l[a] = c
    };
    this.create = function (a) {
        var c = null, b = l[a.optype];
        b && (c = b(a), c.init(a));
        return c
    };
    l = {
        AddMember: f(ops.OpAddMember),
        UpdateMember: f(ops.OpUpdateMember),
        RemoveMember: f(ops.OpRemoveMember),
        AddCursor: f(ops.OpAddCursor),
        ApplyDirectStyling: f(ops.OpApplyDirectStyling),
        SetBlob: f(ops.OpSetBlob),
        RemoveBlob: f(ops.OpRemoveBlob),
        InsertImage: f(ops.OpInsertImage),
        InsertTable: f(ops.OpInsertTable),
        InsertText: f(ops.OpInsertText),
        RemoveText: f(ops.OpRemoveText),
        MergeParagraph: f(ops.OpMergeParagraph),
        SplitParagraph: f(ops.OpSplitParagraph),
        SetParagraphStyle: f(ops.OpSetParagraphStyle),
        UpdateParagraphStyle: f(ops.OpUpdateParagraphStyle),
        AddStyle: f(ops.OpAddStyle),
        RemoveStyle: f(ops.OpRemoveStyle),
        MoveCursor: f(ops.OpMoveCursor),
        RemoveCursor: f(ops.OpRemoveCursor),
        AddAnnotation: f(ops.OpAddAnnotation),
        RemoveAnnotation: f(ops.OpRemoveAnnotation),
        UpdateMetadata: f(ops.OpUpdateMetadata),
        ApplyHyperlink: f(ops.OpApplyHyperlink),
        RemoveHyperlink: f(ops.OpRemoveHyperlink)
    }
};
ops.OperationRouter = function () {
};
ops.OperationRouter.prototype.setOperationFactory = function (f) {
};
ops.OperationRouter.prototype.setPlaybackFunction = function (f) {
};
ops.OperationRouter.prototype.push = function (f) {
};
ops.OperationRouter.prototype.close = function (f) {
};
ops.OperationRouter.prototype.subscribe = function (f, l) {
};
ops.OperationRouter.prototype.unsubscribe = function (f, l) {
};
ops.OperationRouter.prototype.hasLocalUnsyncedOps = function () {
};
ops.OperationRouter.prototype.hasSessionHostConnection = function () {
};
ops.OperationRouter.signalProcessingBatchStart = "router/batchstart";
ops.OperationRouter.signalProcessingBatchEnd = "router/batchend";
ops.TrivialOperationRouter = function () {
    var f = new core.EventNotifier([ops.OperationRouter.signalProcessingBatchStart, ops.OperationRouter.signalProcessingBatchEnd]), l, a, c = 0;
    this.setOperationFactory = function (a) {
        l = a
    };
    this.setPlaybackFunction = function (b) {
        a = b
    };
    this.push = function (b) {
        c += 1;
        f.emit(ops.OperationRouter.signalProcessingBatchStart, {});
        b.forEach(function (b) {
            b = b.spec();
            b.timestamp = Date.now();
            b = l.create(b);
            b.group = "g" + c;
            a(b)
        });
        f.emit(ops.OperationRouter.signalProcessingBatchEnd, {})
    };
    this.close = function (a) {
        a()
    };
    this.subscribe = function (a, c) {
        f.subscribe(a, c)
    };
    this.unsubscribe = function (a, c) {
        f.unsubscribe(a, c)
    };
    this.hasLocalUnsyncedOps = function () {
        return !1
    };
    this.hasSessionHostConnection = function () {
        return !0
    }
};
ops.Session = function (f) {
    function l(a) {
        b.emit(ops.OdtDocument.signalProcessingBatchStart, a)
    }

    function a(a) {
        b.emit(ops.OdtDocument.signalProcessingBatchEnd, a)
    }

    var c = new ops.OperationFactory, b = new ops.OdtDocument(f), k = null;
    this.setOperationFactory = function (a) {
        c = a;
        k && k.setOperationFactory(c)
    };
    this.setOperationRouter = function (f) {
        k && (k.unsubscribe(ops.OperationRouter.signalProcessingBatchStart, l), k.unsubscribe(ops.OperationRouter.signalProcessingBatchEnd, a));
        k = f;
        k.subscribe(ops.OperationRouter.signalProcessingBatchStart,
            l);
        k.subscribe(ops.OperationRouter.signalProcessingBatchEnd, a);
        f.setPlaybackFunction(function (a) {
            b.emit(ops.OdtDocument.signalOperationStart, a);
            return a.execute(b) ? (b.emit(ops.OdtDocument.signalOperationEnd, a), !0) : !1
        });
        f.setOperationFactory(c)
    };
    this.getOperationFactory = function () {
        return c
    };
    this.getOdtDocument = function () {
        return b
    };
    this.enqueue = function (a) {
        k.push(a)
    };
    this.close = function (a) {
        k.close(function (c) {
            c ? a(c) : b.close(a)
        })
    };
    this.destroy = function (a) {
        b.destroy(a)
    };
    this.setOperationRouter(new ops.TrivialOperationRouter)
};
gui.AnnotationController = function (f, l, a) {
    function c() {
        var b = p.getCursor(a), b = b && b.getNode(), d = !1;
        b && (d = !h.isWithinAnnotation(b, p.getRootNode()));
        d !== n && (n = d, g.emit(gui.AnnotationController.annotatableChanged, n))
    }

    function b(b) {
        b.getMemberId() === a && c()
    }

    function k(b) {
        b === a && c()
    }

    function q(b) {
        b.getMemberId() === a && c()
    }

    var p = f.getOdtDocument(), n = !1, g = new core.EventNotifier([gui.AnnotationController.annotatableChanged]), h = odf.OdfUtils, d = core.StepDirection.NEXT;
    this.isAnnotatable = function () {
        return n
    };
    this.addAnnotation =
        function () {
            var b = new ops.OpAddAnnotation, d = p.getCursorSelection(a), c = d.length, d = d.position;
            n && (0 === c ? c = void 0 : (d = 0 <= c ? d : d + c, c = Math.abs(c)), b.init({
                memberid: a,
                position: d,
                length: c,
                name: a + Date.now()
            }), f.enqueue([b]))
        };
    this.removeAnnotation = function (b) {
        var c, g;
        c = p.getMember(a).getProperties().fullName;
        if (!0 !== l.getState(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN) || c === h.getAnnotationCreator(b)) c = p.convertDomPointToCursorStep(b, 0, d), g = p.convertDomPointToCursorStep(b, b.childNodes.length), b =
            new ops.OpRemoveAnnotation, b.init({
            memberid: a,
            position: c,
            length: g - c
        }), g = new ops.OpMoveCursor, g.init({memberid: a, position: 0 < c ? c - 1 : c, length: 0}), f.enqueue([b, g])
    };
    this.subscribe = function (a, b) {
        g.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        g.unsubscribe(a, b)
    };
    this.destroy = function (a) {
        p.unsubscribe(ops.Document.signalCursorAdded, b);
        p.unsubscribe(ops.Document.signalCursorRemoved, k);
        p.unsubscribe(ops.Document.signalCursorMoved, q);
        a()
    };
    l.registerConstraint(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN);
    p.subscribe(ops.Document.signalCursorAdded, b);
    p.subscribe(ops.Document.signalCursorRemoved, k);
    p.subscribe(ops.Document.signalCursorMoved, q);
    c()
};
gui.AnnotationController.annotatableChanged = "annotatable/changed";
gui.Avatar = function (f, l) {
    var a = this, c, b, k;
    this.setColor = function (a) {
        b.style.borderColor = a
    };
    this.setImageUrl = function (c) {
        a.isVisible() ? b.src = c : k = c
    };
    this.isVisible = function () {
        return "block" === c.style.display
    };
    this.show = function () {
        k && (b.src = k, k = void 0);
        c.style.display = "block"
    };
    this.hide = function () {
        c.style.display = "none"
    };
    this.markAsFocussed = function (a) {
        a ? c.classList.add("active") : c.classList.remove("active")
    };
    this.destroy = function (a) {
        f.removeChild(c);
        a()
    };
    (function () {
        var a = f.ownerDocument;
        c = a.createElement("div");
        b = a.createElement("img");
        c.appendChild(b);
        c.style.display = l ? "block" : "none";
        c.className = "handle";
        f.appendChild(c)
    })()
};
gui.StepInfo = function () {
};
gui.StepInfo.VisualDirection = {LEFT_TO_RIGHT: 0, RIGHT_TO_LEFT: 1};
gui.StepInfo.prototype.container = function () {
};
gui.StepInfo.prototype.offset = function () {
};
gui.VisualStepScanner = function () {
};
gui.VisualStepScanner.prototype.process = function (f, l, a) {
};
gui.GuiStepUtils = function () {
    function f(b) {
        b = a.getContentBounds(b);
        var f, g = null;
        if (b)if (b.container.nodeType === Node.TEXT_NODE) f = b.container.ownerDocument.createRange(), f.setStart(b.container, b.startOffset), f.setEnd(b.container, b.endOffset), (g = 0 < f.getClientRects().length ? f.getBoundingClientRect() : null) && " " === b.container.data.substring(b.startOffset, b.endOffset) && 1 >= g.width && (g = null), f.detach(); else if (l.isCharacterElement(b.container) || l.isCharacterFrame(b.container)) g = c.getBoundingClientRect(b.container);
        return g
    }

    var l = odf.OdfUtils, a = new odf.StepUtils, c = core.DomUtils, b = core.StepDirection.NEXT, k = gui.StepInfo.VisualDirection.LEFT_TO_RIGHT, q = gui.StepInfo.VisualDirection.RIGHT_TO_LEFT;
    this.getContentRect = f;
    this.moveToFilteredStep = function (a, c, g) {
        function h(a, b) {
            b.process(v, m, x) && (a = !0, !t && b.token && (t = b.token));
            return a
        }

        var d = c === b, e, l, m, x, t, y = a.snapshot();
        e = !1;
        var v;
        do e = f(a), v = {
            token: a.snapshot(),
            container: a.container,
            offset: a.offset,
            direction: c,
            visualDirection: c === b ? k : q
        }, l = a.nextStep() ? f(a) : null, a.restore(v.token),
            d ? (m = e, x = l) : (m = l, x = e), e = g.reduce(h, !1); while (!e && a.advanceStep(c));
        e || g.forEach(function (a) {
            !t && a.token && (t = a.token)
        });
        a.restore(t || y);
        return Boolean(t)
    }
};
gui.Caret = function (f, l, a, c) {
    function b() {
        h.style.opacity = "0" === h.style.opacity ? "1" : "0";
        w.trigger()
    }

    function k() {
        m.selectNodeContents(s);
        return m.getBoundingClientRect()
    }

    function q() {
        Object.keys(B).forEach(function (a) {
            E[a] = B[a]
        })
    }

    function p() {
        if (!1 === B.isShown || f.getSelectionType() !== ops.OdtCursor.RangeSelection || !c && !f.getSelectedRange().collapsed) B.visibility = "hidden", h.style.visibility = "hidden", w.cancel(); else if (B.visibility = "visible", h.style.visibility = "visible", !1 === B.isFocused) h.style.opacity =
            "1", w.cancel(); else {
            if (u || E.visibility !== B.visibility) h.style.opacity = "1", w.cancel();
            w.trigger()
        }
        if (F || A) {
            var a;
            a = f.getNode();
            var b, m, p = t.getBoundingClientRect(x.getSizer()), n = !1, s = 0;
            a.removeAttributeNS("urn:webodf:names:cursor", "caret-sizer-active");
            if (0 < a.getClientRects().length) m = k(), s = m.left - t.getBoundingClientRect(a).left, n = !0; else if (v.setPosition(a, 0), m = y.getContentRect(v), !m && v.nextStep() && (b = y.getContentRect(v)) && (m = b, n = !0), m || (a.setAttributeNS("urn:webodf:names:cursor", "caret-sizer-active",
                    "true"), m = k(), n = !0), !m)for (runtime.log("WARN: No suitable client rectangle found for visual caret for " + f.getMemberId()); a;) {
                if (0 < a.getClientRects().length) {
                    m = t.getBoundingClientRect(a);
                    n = !0;
                    break
                }
                a = a.parentNode
            }
            m = t.translateRect(m, p, x.getZoomLevel());
            a = {
                top: m.top,
                height: m.height,
                right: n ? m.left : m.right,
                width: t.adaptRangeDifferenceToZoomLevel(s, x.getZoomLevel())
            };
            8 > a.height && (a = {top: a.top - (8 - a.height) / 2, height: 8, right: a.right});
            g.style.height = a.height + "px";
            g.style.top = a.top + "px";
            g.style.left = a.right -
                a.width + "px";
            g.style.width = a.width ? a.width + "px" : "";
            e && (a = runtime.getWindow().getComputedStyle(f.getNode(), null), a.font ? e.style.font = a.font : (e.style.fontStyle = a.fontStyle, e.style.fontVariant = a.fontVariant, e.style.fontWeight = a.fontWeight, e.style.fontSize = a.fontSize, e.style.lineHeight = a.lineHeight, e.style.fontFamily = a.fontFamily))
        }
        B.isShown && A && l.scrollIntoView(h.getBoundingClientRect());
        E.isFocused !== B.isFocused && d.markAsFocussed(B.isFocused);
        q();
        F = A = u = !1
    }

    function n(a) {
        g.parentNode.removeChild(g);
        s.parentNode.removeChild(s);
        a()
    }

    var g, h, d, e, s, m, x = f.getDocument().getCanvas(), t = core.DomUtils, y = new gui.GuiStepUtils, v, r, w, u = !1, A = !1, F = !1, B = {
        isFocused: !1,
        isShown: !0,
        visibility: "hidden"
    }, E = {isFocused: !B.isFocused, isShown: !B.isShown, visibility: "hidden"};
    this.handleUpdate = function () {
        F = !0;
        r.trigger()
    };
    this.refreshCursorBlinking = function () {
        u = !0;
        r.trigger()
    };
    this.setFocus = function () {
        B.isFocused = !0;
        r.trigger()
    };
    this.removeFocus = function () {
        B.isFocused = !1;
        r.trigger()
    };
    this.show = function () {
        B.isShown = !0;
        r.trigger()
    };
    this.hide = function () {
        B.isShown = !1;
        r.trigger()
    };
    this.setAvatarImageUrl = function (a) {
        d.setImageUrl(a)
    };
    this.setColor = function (a) {
        h.style.borderColor = a;
        d.setColor(a)
    };
    this.getCursor = function () {
        return f
    };
    this.getFocusElement = function () {
        return h
    };
    this.toggleHandleVisibility = function () {
        d.isVisible() ? d.hide() : d.show()
    };
    this.showHandle = function () {
        d.show()
    };
    this.hideHandle = function () {
        d.hide()
    };
    this.setOverlayElement = function (a) {
        e = a;
        g.appendChild(a);
        F = !0;
        r.trigger()
    };
    this.ensureVisible = function () {
        A = !0;
        r.trigger()
    };
    this.getBoundingClientRect =
        function () {
            return t.getBoundingClientRect(g)
        };
    this.destroy = function (a) {
        core.Async.destroyAll([r.destroy, w.destroy, d.destroy, n], a)
    };
    (function () {
        var e = f.getDocument(), c = [e.createRootFilter(f.getMemberId()), e.getPositionFilter()], k = e.getDOMDocument();
        m = k.createRange();
        s = k.createElement("span");
        s.className = "webodf-caretSizer";
        s.textContent = "|";
        f.getNode().appendChild(s);
        g = k.createElement("div");
        g.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", f.getMemberId());
        g.className = "webodf-caretOverlay";
        h = k.createElement("div");
        h.className = "caret";
        g.appendChild(h);
        d = new gui.Avatar(g, a);
        x.getSizer().appendChild(g);
        v = e.createStepIterator(f.getNode(), 0, c, e.getRootNode());
        r = core.Task.createRedrawTask(p);
        w = core.Task.createTimeoutTask(b, 500);
        r.triggerImmediate()
    })()
};
odf.TextSerializer = function () {
    function f(c) {
        var b = "", k = l.filter ? l.filter.acceptNode(c) : NodeFilter.FILTER_ACCEPT, q = c.nodeType, p;
        if ((k === NodeFilter.FILTER_ACCEPT || k === NodeFilter.FILTER_SKIP) && a.isTextContentContainingNode(c))for (p = c.firstChild; p;)b += f(p), p = p.nextSibling;
        k === NodeFilter.FILTER_ACCEPT && (q === Node.ELEMENT_NODE && a.isParagraph(c) ? b += "\n" : q === Node.TEXT_NODE && c.textContent && (b += c.textContent));
        return b
    }

    var l = this, a = odf.OdfUtils;
    this.filter = null;
    this.writeToString = function (a) {
        if (!a)return "";
        a = f(a);
        "\n" === a[a.length - 1] && (a = a.substr(0, a.length - 1));
        return a
    }
};
gui.MimeDataExporter = function () {
    var f;
    this.exportRangeToDataTransfer = function (l, a) {
        var c;
        c = a.startContainer.ownerDocument.createElement("span");
        c.appendChild(a.cloneContents());
        c = f.writeToString(c);
        try {
            l.setData("text/plain", c)
        } catch (b) {
            l.setData("Text", c)
        }
    };
    f = new odf.TextSerializer;
    f.filter = new odf.OdfNodeFilter
};
gui.Clipboard = function (f) {
    this.setDataFromRange = function (l, a) {
        var c, b = l.clipboardData;
        c = runtime.getWindow();
        !b && c && (b = c.clipboardData);
        b ? (c = !0, f.exportRangeToDataTransfer(b, a), l.preventDefault()) : c = !1;
        return c
    }
};
gui.SessionContext = function (f, l) {
    var a = f.getOdtDocument(), c = odf.OdfUtils;
    this.isLocalCursorWithinOwnAnnotation = function () {
        var b = a.getCursor(l), f;
        if (!b)return !1;
        f = b && b.getNode();
        b = a.getMember(l).getProperties().fullName;
        return (f = c.getParentAnnotation(f, a.getRootNode())) && c.getAnnotationCreator(f) === b ? !0 : !1
    }
};
gui.StyleSummary = function (f) {
    function l(a, c) {
        var p = a + "|" + c, l;
        b.hasOwnProperty(p) || (l = [], f.forEach(function (b) {
            b = (b = b.styleProperties[a]) && b[c];
            -1 === l.indexOf(b) && l.push(b)
        }), b[p] = l);
        return b[p]
    }

    function a(a, b, c) {
        return function () {
            var f = l(a, b);
            return c.length >= f.length && f.every(function (a) {
                    return -1 !== c.indexOf(a)
                })
        }
    }

    function c(a, b) {
        var c = l(a, b);
        return 1 === c.length ? c[0] : void 0
    }

    var b = {};
    this.getPropertyValues = l;
    this.getCommonValue = c;
    this.isBold = a("style:text-properties", "fo:font-weight", ["bold"]);
    this.isItalic =
        a("style:text-properties", "fo:font-style", ["italic"]);
    this.hasUnderline = a("style:text-properties", "style:text-underline-style", ["solid"]);
    this.hasStrikeThrough = a("style:text-properties", "style:text-line-through-style", ["solid"]);
    this.fontSize = function () {
        var a = c("style:text-properties", "fo:font-size");
        return a && parseFloat(a)
    };
    this.fontName = function () {
        return c("style:text-properties", "style:font-name")
    };
    this.isAlignedLeft = a("style:paragraph-properties", "fo:text-align", ["left", "start"]);
    this.isAlignedCenter =
        a("style:paragraph-properties", "fo:text-align", ["center"]);
    this.isAlignedRight = a("style:paragraph-properties", "fo:text-align", ["right", "end"]);
    this.isAlignedJustified = a("style:paragraph-properties", "fo:text-align", ["justify"]);
    this.text = {
        isBold: this.isBold,
        isItalic: this.isItalic,
        hasUnderline: this.hasUnderline,
        hasStrikeThrough: this.hasStrikeThrough,
        fontSize: this.fontSize,
        fontName: this.fontName
    };
    this.paragraph = {
        isAlignedLeft: this.isAlignedLeft, isAlignedCenter: this.isAlignedCenter, isAlignedRight: this.isAlignedRight,
        isAlignedJustified: this.isAlignedJustified
    }
};
gui.DirectFormattingController = function (f, l, a, c, b, k, q) {
    function p() {
        return V.value().styleSummary
    }

    function n() {
        return V.value().enabledFeatures
    }

    function g(a) {
        var b;
        a.collapsed ? (b = a.startContainer, b.hasChildNodes() && a.startOffset < b.childNodes.length && (b = b.childNodes.item(a.startOffset)), a = [b]) : a = ba.getTextElements(a, !0, !1);
        return a
    }

    function h() {
        var b = J.getCursor(c), d = b && b.getSelectedRange(), e = [], e = [], f = !0, h = {
            directTextStyling: !0,
            directParagraphStyling: !0
        };
        d && (e = g(d), 0 === e.length && (e = [d.startContainer,
            d.endContainer], f = !1), e = J.getFormatting().getAppliedStyles(e));
        void 0 !== e[0] && Z && (e[0].styleProperties = G.mergeObjects(e[0].styleProperties, Z));
        !0 === l.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (h.directTextStyling = h.directParagraphStyling = a.isLocalCursorWithinOwnAnnotation());
        h.directTextStyling && (h.directTextStyling = f && void 0 !== b && b.getSelectionType() === ops.OdtCursor.RangeSelection);
        return {enabledFeatures: h, appliedStyles: e, styleSummary: new gui.StyleSummary(e)}
    }

    function d(a, b) {
        var d = {};
        Object.keys(a).forEach(function (e) {
            var c =
                a[e](), f = b[e]();
            c !== f && (d[e] = f)
        });
        return d
    }

    function e() {
        var a, b;
        b = C.styleSummary;
        var e = V.value(), c = e.styleSummary, f = C.enabledFeatures, g = e.enabledFeatures;
        a = d(b.text, c.text);
        b = d(b.paragraph, c.paragraph);
        f = !(g.directTextStyling === f.directTextStyling && g.directParagraphStyling === f.directParagraphStyling);
        C = e;
        f && T.emit(gui.DirectFormattingController.enabledChanged, g);
        0 < Object.keys(a).length && T.emit(gui.DirectFormattingController.textStylingChanged, a);
        0 < Object.keys(b).length && T.emit(gui.DirectFormattingController.paragraphStylingChanged,
            b)
    }

    function s() {
        V.reset();
        e()
    }

    function m(a) {
        ("string" === typeof a ? a : a.getMemberId()) === c && V.reset()
    }

    function x() {
        V.reset()
    }

    function t(a) {
        var b = J.getCursor(c);
        a = a.paragraphElement;
        b && ba.getParagraphElement(b.getNode()) === a && V.reset()
    }

    function y(a, b) {
        b(!a());
        return !0
    }

    function v(a) {
        if (n().directTextStyling) {
            var b = J.getCursorSelection(c), d = {"style:text-properties": a};
            0 !== b.length ? (a = new ops.OpApplyDirectStyling, a.init({
                    memberid: c,
                    position: b.position,
                    length: b.length,
                    setProperties: d
                }), f.enqueue([a])) : (Z =
                    G.mergeObjects(Z || {}, d), V.reset())
        }
    }

    function r(a, b) {
        var d = {};
        d[a] = b;
        v(d)
    }

    function w(a) {
        a = a.spec();
        Z && a.memberid === c && "SplitParagraph" !== a.optype && (Z = null, V.reset())
    }

    function u(a) {
        r("fo:font-weight", a ? "bold" : "normal")
    }

    function A(a) {
        r("fo:font-style", a ? "italic" : "normal")
    }

    function F(a) {
        r("style:text-underline-style", a ? "solid" : "none")
    }

    function B(a) {
        r("style:text-line-through-style", a ? "solid" : "none")
    }

    function E(a) {
        if (n().directParagraphStyling) {
            var d = J.getCursor(c).getSelectedRange(), d = ba.getParagraphElements(d),
                e = J.getFormatting(), g = [], h = {}, m;
            d.forEach(function (d) {
                var f = J.convertDomPointToCursorStep(d, 0, O), k = d.getAttributeNS(odf.Namespaces.textns, "style-name"), l;
                d = k ? h.hasOwnProperty(k) ? h[k] : void 0 : m;
                d || (d = b.generateStyleName(), k ? (h[k] = d, l = e.createDerivedStyleObject(k, "paragraph", {})) : (m = d, l = {}), l = a(l), k = new ops.OpAddStyle, k.init({
                    memberid: c,
                    styleName: d.toString(),
                    styleFamily: "paragraph",
                    isAutomaticStyle: !0,
                    setProperties: l
                }), g.push(k));
                k = new ops.OpSetParagraphStyle;
                k.init({
                    memberid: c, styleName: d.toString(),
                    position: f
                });
                g.push(k)
            });
            f.enqueue(g)
        }
    }

    function H(a) {
        E(function (b) {
            return G.mergeObjects(b, a)
        })
    }

    function I(a) {
        H({"style:paragraph-properties": {"fo:text-align": a}})
    }

    function Q(a, b) {
        var d = J.getFormatting().getDefaultTabStopDistance(), e = b["style:paragraph-properties"], c;
        e && (e = e["fo:margin-left"], c = ba.parseLength(e));
        return G.mergeObjects(b, {"style:paragraph-properties": {"fo:margin-left": c && c.unit === d.unit ? c.value + a * d.value + c.unit : a * d.value + d.unit}})
    }

    function N(a, b) {
        var d = g(a), d = 0 === d.length ? [a.startContainer] :
            d, d = J.getFormatting().getAppliedStyles(d), e = 0 < d.length ? d[0].styleProperties : void 0, c = J.getFormatting().getAppliedStylesForElement(b).styleProperties;
        if (!e || "text" !== e["style:family"] || !e["style:text-properties"])return !1;
        if (!c || !c["style:text-properties"])return !0;
        e = e["style:text-properties"];
        c = c["style:text-properties"];
        return !Object.keys(e).every(function (a) {
            return e[a] === c[a]
        })
    }

    function z() {
    }

    function Y() {
        return !1
    }

    var R = this, J = f.getOdtDocument(), G = new core.Utils, ba = odf.OdfUtils, T = new core.EventNotifier([gui.DirectFormattingController.enabledChanged,
        gui.DirectFormattingController.textStylingChanged, gui.DirectFormattingController.paragraphStylingChanged]), D = odf.Namespaces.textns, O = core.StepDirection.NEXT, Z = null, C, V;
    this.enabledFeatures = n;
    this.formatTextSelection = v;
    this.createCursorStyleOp = function (a, b, d) {
        var e = null, f = Z;
        d && (f = (d = V.value().appliedStyles[0]) && d.styleProperties);
        f && f["style:text-properties"] && (e = new ops.OpApplyDirectStyling, e.init({
            memberid: c,
            position: a,
            length: b,
            setProperties: {"style:text-properties": f["style:text-properties"]}
        }),
            Z = null, V.reset());
        return e
    };
    this.setBold = u;
    this.setItalic = A;
    this.setHasUnderline = F;
    this.setHasStrikethrough = B;
    this.setFontSize = function (a) {
        r("fo:font-size", a + "pt")
    };
    this.setFontName = function (a) {
        r("style:font-name", a)
    };
    this.getAppliedStyles = function () {
        return V.value().appliedStyles
    };
    this.toggleBold = y.bind(R, function () {
        return p().isBold()
    }, u);
    this.toggleItalic = y.bind(R, function () {
        return p().isItalic()
    }, A);
    this.toggleUnderline = y.bind(R, function () {
        return p().hasUnderline()
    }, F);
    this.toggleStrikethrough =
        y.bind(R, function () {
            return p().hasStrikeThrough()
        }, B);
    this.isBold = function () {
        return p().isBold()
    };
    this.isItalic = function () {
        return p().isItalic()
    };
    this.hasUnderline = function () {
        return p().hasUnderline()
    };
    this.hasStrikeThrough = function () {
        return p().hasStrikeThrough()
    };
    this.fontSize = function () {
        return p().fontSize()
    };
    this.fontName = function () {
        return p().fontName()
    };
    this.isAlignedLeft = function () {
        return p().isAlignedLeft()
    };
    this.isAlignedCenter = function () {
        return p().isAlignedCenter()
    };
    this.isAlignedRight =
        function () {
            return p().isAlignedRight()
        };
    this.isAlignedJustified = function () {
        return p().isAlignedJustified()
    };
    this.alignParagraphLeft = function () {
        I("left");
        return !0
    };
    this.alignParagraphCenter = function () {
        I("center");
        return !0
    };
    this.alignParagraphRight = function () {
        I("right");
        return !0
    };
    this.alignParagraphJustified = function () {
        I("justify");
        return !0
    };
    this.indent = function () {
        E(Q.bind(null, 1));
        return !0
    };
    this.outdent = function () {
        E(Q.bind(null, -1));
        return !0
    };
    this.createParagraphStyleOps = function (a) {
        if (!n().directParagraphStyling)return [];
        var d = J.getCursor(c), e = d.getSelectedRange(), f = [], g, h;
        d.hasForwardSelection() ? (g = d.getAnchorNode(), h = d.getNode()) : (g = d.getNode(), h = d.getAnchorNode());
        d = ba.getParagraphElement(h);
        runtime.assert(Boolean(d), "DirectFormattingController: Cursor outside paragraph");
        var m = d, k = [J.getPositionFilter(), J.createRootFilter(c)];
        if (!1 !== J.createStepIterator(e.endContainer, e.endOffset, k, m).nextStep())return f;
        h !== g && (d = ba.getParagraphElement(g));
        if (!Z && !N(e, d))return f;
        e = (e = V.value().appliedStyles[0]) && e.styleProperties;
        if (!e)return f;
        if (d = d.getAttributeNS(D, "style-name")) e = {"style:text-properties": e["style:text-properties"]}, e = J.getFormatting().createDerivedStyleObject(d, "paragraph", e);
        g = b.generateStyleName();
        d = new ops.OpAddStyle;
        d.init({memberid: c, styleName: g, styleFamily: "paragraph", isAutomaticStyle: !0, setProperties: e});
        f.push(d);
        d = new ops.OpSetParagraphStyle;
        d.init({memberid: c, styleName: g, position: a});
        f.push(d);
        return f
    };
    this.subscribe = function (a, b) {
        T.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        T.unsubscribe(a,
            b)
    };
    this.destroy = function (a) {
        J.unsubscribe(ops.Document.signalCursorAdded, m);
        J.unsubscribe(ops.Document.signalCursorRemoved, m);
        J.unsubscribe(ops.Document.signalCursorMoved, m);
        J.unsubscribe(ops.OdtDocument.signalParagraphStyleModified, x);
        J.unsubscribe(ops.OdtDocument.signalParagraphChanged, t);
        J.unsubscribe(ops.OdtDocument.signalOperationEnd, w);
        J.unsubscribe(ops.OdtDocument.signalProcessingBatchEnd, e);
        l.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, s);
        a()
    };
    (function () {
        J.subscribe(ops.Document.signalCursorAdded,
            m);
        J.subscribe(ops.Document.signalCursorRemoved, m);
        J.subscribe(ops.Document.signalCursorMoved, m);
        J.subscribe(ops.OdtDocument.signalParagraphStyleModified, x);
        J.subscribe(ops.OdtDocument.signalParagraphChanged, t);
        J.subscribe(ops.OdtDocument.signalOperationEnd, w);
        J.subscribe(ops.OdtDocument.signalProcessingBatchEnd, e);
        l.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, s);
        V = new core.LazyProperty(h);
        C = V.value();
        k || (R.formatTextSelection = z, R.setBold = z, R.setItalic = z, R.setHasUnderline = z, R.setHasStrikethrough =
            z, R.setFontSize = z, R.setFontName = z, R.toggleBold = Y, R.toggleItalic = Y, R.toggleUnderline = Y, R.toggleStrikethrough = Y);
        q || (R.alignParagraphCenter = z, R.alignParagraphJustified = z, R.alignParagraphLeft = z, R.alignParagraphRight = z, R.createParagraphStyleOps = function () {
            return []
        }, R.indent = z, R.outdent = z)
    })()
};
gui.DirectFormattingController.enabledChanged = "enabled/changed";
gui.DirectFormattingController.textStylingChanged = "textStyling/changed";
gui.DirectFormattingController.paragraphStylingChanged = "paragraphStyling/changed";
gui.DirectFormattingController.SelectionInfo = function () {
};
gui.KeyboardHandler = function () {
    function f(a, c) {
        c || (c = l.None);
        switch (a) {
            case gui.KeyboardHandler.KeyCode.LeftMeta:
            case gui.KeyboardHandler.KeyCode.RightMeta:
            case gui.KeyboardHandler.KeyCode.MetaInMozilla:
                c |= l.Meta;
                break;
            case gui.KeyboardHandler.KeyCode.Ctrl:
                c |= l.Ctrl;
                break;
            case gui.KeyboardHandler.KeyCode.Alt:
                c |= l.Alt;
                break;
            case gui.KeyboardHandler.KeyCode.Shift:
                c |= l.Shift
        }
        return a + ":" + c
    }

    var l = gui.KeyboardHandler.Modifier, a = null, c = {};
    this.setDefault = function (b) {
        a = b
    };
    this.bind = function (a, k, l, p) {
        a = f(a,
            k);
        runtime.assert(p || !1 === c.hasOwnProperty(a), "tried to overwrite the callback handler of key combo: " + a);
        c[a] = l
    };
    this.unbind = function (a, k) {
        var l = f(a, k);
        delete c[l]
    };
    this.reset = function () {
        a = null;
        c = {}
    };
    this.handleEvent = function (b) {
        var k = b.keyCode, q = l.None;
        b.metaKey && (q |= l.Meta);
        b.ctrlKey && (q |= l.Ctrl);
        b.altKey && (q |= l.Alt);
        b.shiftKey && (q |= l.Shift);
        k = f(k, q);
        k = c[k];
        q = !1;
        k ? q = k() : null !== a && (q = a(b));
        q && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
    }
};
gui.KeyboardHandler.Modifier = {
    None: 0,
    Meta: 1,
    Ctrl: 2,
    Alt: 4,
    CtrlAlt: 6,
    Shift: 8,
    MetaShift: 9,
    CtrlShift: 10,
    AltShift: 12
};
gui.KeyboardHandler.KeyCode = {
    Backspace: 8,
    Tab: 9,
    Clear: 12,
    Enter: 13,
    Shift: 16,
    Ctrl: 17,
    Alt: 18,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Delete: 46,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    LeftMeta: 91,
    RightMeta: 93,
    MetaInMozilla: 224
};
gui.HyperlinkClickHandler = function (f, l, a) {
    function c() {
        var a = f();
        runtime.assert(Boolean(a.classList), "Document container has no classList element");
        a.classList.remove("webodf-inactiveLinks")
    }

    function b() {
        var a = f();
        runtime.assert(Boolean(a.classList), "Document container has no classList element");
        a.classList.add("webodf-inactiveLinks")
    }

    function k() {
        d.removeEventListener("focus", b, !1);
        s.forEach(function (b) {
            l.unbind(b.keyCode, b.modifier);
            a.unbind(b.keyCode, b.modifier)
        });
        s.length = 0
    }

    function q(e) {
        k();
        if (e !== p.None) {
            d.addEventListener("focus", b, !1);
            switch (e) {
                case p.Ctrl:
                    s.push({keyCode: n.Ctrl, modifier: p.None});
                    break;
                case p.Meta:
                    s.push({keyCode: n.LeftMeta, modifier: p.None}), s.push({
                        keyCode: n.RightMeta,
                        modifier: p.None
                    }), s.push({keyCode: n.MetaInMozilla, modifier: p.None})
            }
            s.forEach(function (d) {
                l.bind(d.keyCode, d.modifier, c);
                a.bind(d.keyCode, d.modifier, b)
            })
        }
    }

    var p = gui.KeyboardHandler.Modifier, n = gui.KeyboardHandler.KeyCode, g = xmldom.XPath, h = odf.OdfUtils, d = runtime.getWindow(), e = p.None, s = [];
    runtime.assert(null !==
        d, "Expected to be run in an environment which has a global window, like a browser.");
    this.handleClick = function (a) {
        var b = a.target || a.srcElement, c, k;
        a.ctrlKey ? c = p.Ctrl : a.metaKey && (c = p.Meta);
        if (e === p.None || e === c) {
            a:{
                for (; null !== b;) {
                    if (h.isHyperlink(b))break a;
                    if (h.isParagraph(b))break;
                    b = b.parentNode
                }
                b = null
            }
            b && (b = h.getHyperlinkTarget(b), "" !== b && ("#" === b[0] ? (b = b.substring(1), c = f(), k = g.getODFElementsWithXPath(c, "//text:bookmark-start[@text:name='" + b + "']", odf.Namespaces.lookupNamespaceURI), 0 === k.length &&
                (k = g.getODFElementsWithXPath(c, "//text:bookmark[@text:name='" + b + "']", odf.Namespaces.lookupNamespaceURI)), 0 < k.length && k[0].scrollIntoView(!0)) : /^\s*(javascript|data):/.test(b) ? runtime.log("WARN:", "potentially malicious URL ignored") : d.open(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };
    this.setModifier = function (a) {
        e !== a && (runtime.assert(a === p.None || a === p.Ctrl || a === p.Meta, "Unsupported KeyboardHandler.Modifier value: " + a), e = a, e !== p.None ? b() : c(), q(e))
    };
    this.getModifier = function () {
        return e
    };
    this.destroy = function (a) {
        b();
        k();
        a()
    }
};
gui.EventManager = function (f) {
    function l(a) {
        function b(a, d, e) {
            var c, f = !1;
            c = "on" + d;
            a.attachEvent && (a.attachEvent(c, e), f = !0);
            !f && a.addEventListener && (a.addEventListener(d, e, !1), f = !0);
            f && !w[d] || !a.hasOwnProperty(c) || (a[c] = e)
        }

        function d(a, b, e) {
            var c = "on" + b;
            a.detachEvent && a.detachEvent(c, e);
            a.removeEventListener && a.removeEventListener(b, e, !1);
            a[c] === e && (a[c] = null)
        }

        function e(b) {
            if (-1 === f.indexOf(b)) {
                f.push(b);
                if (c.filters.every(function (a) {
                        return a(b)
                    }))try {
                    g.emit(a, b)
                } catch (d) {
                    runtime.log("Error occurred while processing " +
                        a + ":\n" + d.message + "\n" + d.stack)
                }
                runtime.setTimeout(function () {
                    f.splice(f.indexOf(b), 1)
                }, 0)
            }
        }

        var c = this, f = [], g = new core.EventNotifier([a]);
        this.filters = [];
        this.subscribe = function (b) {
            g.subscribe(a, b)
        };
        this.unsubscribe = function (b) {
            g.unsubscribe(a, b)
        };
        this.destroy = function () {
            d(r, a, e);
            d(B, a, e);
            d(E, a, e)
        };
        u[a] && b(r, a, e);
        b(B, a, e);
        b(E, a, e)
    }

    function a(a, b, d) {
        function e(b) {
            d(b, c, function (b) {
                b.type = a;
                f.emit(a, b)
            })
        }

        var c = {}, f = new core.EventNotifier([a]);
        this.subscribe = function (b) {
            f.subscribe(a, b)
        };
        this.unsubscribe =
            function (b) {
                f.unsubscribe(a, b)
            };
        this.destroy = function () {
            b.forEach(function (a) {
                H.unsubscribe(a, e)
            })
        };
        (function () {
            b.forEach(function (a) {
                H.subscribe(a, e)
            })
        })()
    }

    function c(a) {
        runtime.clearTimeout(a);
        delete I[a]
    }

    function b(a, b) {
        var d = runtime.setTimeout(function () {
            a();
            c(d)
        }, b);
        I[d] = !0;
        return d
    }

    function k(a, d, e) {
        var f = a.touches.length, g = a.touches[0], h = d.timer;
        "touchmove" === a.type || "touchend" === a.type ? h && c(h) : "touchstart" === a.type && (1 !== f ? runtime.clearTimeout(h) : h = b(function () {
                    e({
                        clientX: g.clientX, clientY: g.clientY,
                        pageX: g.pageX, pageY: g.pageY, target: a.target || a.srcElement || null, detail: 1
                    })
                }, 400));
        d.timer = h
    }

    function q(a, b, d) {
        var e = a.touches[0], c = a.target || a.srcElement || null, f = b.target;
        1 !== a.touches.length || "touchend" === a.type ? f = null : "touchstart" === a.type && "webodf-draggable" === c.getAttribute("class") ? f = c : "touchmove" === a.type && f && (a.preventDefault(), a.stopPropagation(), d({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    target: f,
                    detail: 1
                }));
        b.target = f
    }

    function p(a, b, d) {
        var e = a.target || a.srcElement ||
            null, c = b.dragging;
        "drag" === a.type ? c = !0 : "touchend" === a.type && c && (c = !1, a = a.changedTouches[0], d({
                clientX: a.clientX,
                clientY: a.clientY,
                pageX: a.pageX,
                pageY: a.pageY,
                target: e,
                detail: 1
            }));
        b.dragging = c
    }

    function n() {
        E.classList.add("webodf-touchEnabled");
        H.unsubscribe("touchstart", n)
    }

    function g(a) {
        var b = a.scrollX, d = a.scrollY;
        this.restore = function () {
            a.scrollX === b && a.scrollY === d || a.scrollTo(b, d)
        }
    }

    function h(a) {
        var b = a.scrollTop, d = a.scrollLeft;
        this.restore = function () {
            if (a.scrollTop !== b || a.scrollLeft !== d) a.scrollTop =
                b, a.scrollLeft = d
        }
    }

    function d(a, b) {
        var d = F[a] || A[a] || null;
        !d && b && (d = F[a] = new l(a));
        return d
    }

    function e(a, b) {
        d(a, !0).subscribe(b)
    }

    function s(a, b) {
        var e = d(a, !1);
        e && e.unsubscribe(b)
    }

    function m() {
        return f.getDOMDocument().activeElement === B
    }

    function x() {
        m() && B.blur();
        B.setAttribute("disabled", "true")
    }

    function t() {
        B.removeAttribute("disabled")
    }

    function y(a) {
        for (var b = []; a;)(a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight) && b.push(new h(a)), a = a.parentNode;
        b.push(new g(r));
        return b
    }

    function v() {
        var a;
        m() || (a = y(B), t(), B.focus(), a.forEach(function (a) {
            a.restore()
        }))
    }

    var r = runtime.getWindow(), w = {
        beforecut: !0,
        beforepaste: !0,
        longpress: !0,
        drag: !0,
        dragstop: !0
    }, u = {mousedown: !0, mouseup: !0, focus: !0}, A = {}, F = {}, B, E = f.getCanvas().getElement(), H = this, I = {};
    this.addFilter = function (a, b) {
        d(a, !0).filters.push(b)
    };
    this.removeFilter = function (a, b) {
        var e = d(a, !0), c = e.filters.indexOf(b);
        -1 !== c && e.filters.splice(c, 1)
    };
    this.subscribe = e;
    this.unsubscribe = s;
    this.hasFocus = m;
    this.focus = v;
    this.getEventTrap = function () {
        return B
    };
    this.setEditing = function (a) {
        var b = m();
        b && B.blur();
        a ? B.removeAttribute("readOnly") : B.setAttribute("readOnly", "true");
        b && v()
    };
    this.destroy = function (a) {
        s("touchstart", n);
        Object.keys(I).forEach(function (a) {
            c(parseInt(a, 10))
        });
        I.length = 0;
        Object.keys(A).forEach(function (a) {
            A[a].destroy()
        });
        A = {};
        s("mousedown", x);
        s("mouseup", t);
        s("contextmenu", t);
        Object.keys(F).forEach(function (a) {
            F[a].destroy()
        });
        F = {};
        B.parentNode.removeChild(B);
        a()
    };
    (function () {
        var b = f.getOdfCanvas().getSizer(), d = b.ownerDocument;
        runtime.assert(Boolean(r),
            "EventManager requires a window object to operate correctly");
        B = d.createElement("textarea");
        B.id = "eventTrap";
        B.setAttribute("tabindex", "-1");
        B.setAttribute("readOnly", "true");
        B.setAttribute("rows", "1");
        b.appendChild(B);
        e("mousedown", x);
        e("mouseup", t);
        e("contextmenu", t);
        A.longpress = new a("longpress", ["touchstart", "touchmove", "touchend"], k);
        A.drag = new a("drag", ["touchstart", "touchmove", "touchend"], q);
        A.dragstop = new a("dragstop", ["drag", "touchend"], p);
        e("touchstart", n)
    })()
};
gui.IOSSafariSupport = function (f) {
    function l() {
        a.innerHeight !== a.outerHeight && (c.style.display = "none", runtime.requestAnimationFrame(function () {
            c.style.display = "block"
        }))
    }

    var a = runtime.getWindow(), c = f.getEventTrap();
    this.destroy = function (a) {
        f.unsubscribe("focus", l);
        c.removeAttribute("autocapitalize");
        c.style.WebkitTransform = "";
        a()
    };
    f.subscribe("focus", l);
    c.setAttribute("autocapitalize", "off");
    c.style.WebkitTransform = "translateX(-10000px)"
};
gui.HyperlinkController = function (f, l, a, c) {
    function b() {
        var b = !0;
        !0 === l.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (b = a.isLocalCursorWithinOwnAnnotation());
        b !== g && (g = b, n.emit(gui.HyperlinkController.enabledChanged, g))
    }

    function k(a) {
        a.getMemberId() === c && b()
    }

    var q = odf.OdfUtils, p = f.getOdtDocument(), n = new core.EventNotifier([gui.HyperlinkController.enabledChanged]), g = !1;
    this.isEnabled = function () {
        return g
    };
    this.subscribe = function (a, b) {
        n.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        n.unsubscribe(a,
            b)
    };
    this.addHyperlink = function (a, b) {
        if (g) {
            var e = p.getCursorSelection(c), k = new ops.OpApplyHyperlink, m = [];
            if (0 === e.length || b) b = b || a, k = new ops.OpInsertText, k.init({
                memberid: c,
                position: e.position,
                text: b
            }), e.length = b.length, m.push(k);
            k = new ops.OpApplyHyperlink;
            k.init({memberid: c, position: e.position, length: e.length, hyperlink: a});
            m.push(k);
            f.enqueue(m)
        }
    };
    this.removeHyperlinks = function () {
        if (g) {
            var a = p.createPositionIterator(p.getRootNode()), b = p.getCursor(c).getSelectedRange(), e = q.getHyperlinkElements(b),
                k = b.collapsed && 1 === e.length, m = p.getDOMDocument().createRange(), l = [], n, y;
            0 !== e.length && (e.forEach(function (a) {
                m.selectNodeContents(a);
                n = p.convertDomToCursorRange({
                    anchorNode: m.startContainer,
                    anchorOffset: m.startOffset,
                    focusNode: m.endContainer,
                    focusOffset: m.endOffset
                });
                y = new ops.OpRemoveHyperlink;
                y.init({memberid: c, position: n.position, length: n.length});
                l.push(y)
            }), k || (k = e[0], -1 === b.comparePoint(k, 0) && (m.setStart(k, 0), m.setEnd(b.startContainer, b.startOffset), n = p.convertDomToCursorRange({
                anchorNode: m.startContainer,
                anchorOffset: m.startOffset, focusNode: m.endContainer, focusOffset: m.endOffset
            }), 0 < n.length && (y = new ops.OpApplyHyperlink, y.init({
                memberid: c,
                position: n.position,
                length: n.length,
                hyperlink: q.getHyperlinkTarget(k)
            }), l.push(y))), e = e[e.length - 1], a.moveToEndOfNode(e), a = a.unfilteredDomOffset(), 1 === b.comparePoint(e, a) && (m.setStart(b.endContainer, b.endOffset), m.setEnd(e, a), n = p.convertDomToCursorRange({
                anchorNode: m.startContainer,
                anchorOffset: m.startOffset,
                focusNode: m.endContainer,
                focusOffset: m.endOffset
            }), 0 < n.length &&
            (y = new ops.OpApplyHyperlink, y.init({
                memberid: c,
                position: n.position,
                length: n.length,
                hyperlink: q.getHyperlinkTarget(e)
            }), l.push(y)))), f.enqueue(l), m.detach())
        }
    };
    this.destroy = function (a) {
        p.unsubscribe(ops.Document.signalCursorMoved, k);
        l.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, b);
        a()
    };
    p.subscribe(ops.Document.signalCursorMoved, k);
    l.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, b);
    b()
};
gui.HyperlinkController.enabledChanged = "enabled/changed";
gui.ImageController = function (f, l, a, c, b) {
    function k() {
        var b = !0;
        !0 === l.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (b = a.isLocalCursorWithinOwnAnnotation());
        b !== s && (s = b, e.emit(gui.ImageController.enabledChanged, s))
    }

    function q(a) {
        a.getMemberId() === c && k()
    }

    var p = {
        "image/gif": ".gif",
        "image/jpeg": ".jpg",
        "image/png": ".png"
    }, n = odf.Namespaces.textns, g = f.getOdtDocument(), h = odf.OdfUtils, d = g.getFormatting(), e = new core.EventNotifier([gui.HyperlinkController.enabledChanged]), s = !1;
    this.isEnabled = function () {
        return s
    };
    this.subscribe = function (a, b) {
        e.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        e.unsubscribe(a, b)
    };
    this.insertImage = function (a, e, k, l) {
        if (s) {
            runtime.assert(0 < k && 0 < l, "Both width and height of the image should be greater than 0px.");
            l = {width: k, height: l};
            if (k = h.getParagraphElement(g.getCursor(c).getNode()).getAttributeNS(n, "style-name")) {
                k = d.getContentSize(k, "paragraph");
                var q = 1, r = 1;
                l.width > k.width && (q = k.width / l.width);
                l.height > k.height && (r = k.height / l.height);
                k = Math.min(q, r);
                l = {
                    width: l.width * k, height: l.height *
                    k
                }
            }
            k = l.width + "px";
            l = l.height + "px";
            var w = g.getOdfCanvas().odfContainer().rootElement.styles, q = a.toLowerCase(), r = p.hasOwnProperty(q) ? p[q] : null, u, q = [];
            runtime.assert(null !== r, "Image type is not supported: " + a);
            r = "Pictures/" + b.generateImageName() + r;
            u = new ops.OpSetBlob;
            u.init({memberid: c, filename: r, mimetype: a, content: e});
            q.push(u);
            d.getStyleElement("Graphics", "graphic", [w]) || (a = new ops.OpAddStyle, a.init({
                memberid: c, styleName: "Graphics", styleFamily: "graphic", isAutomaticStyle: !1, setProperties: {
                    "style:graphic-properties": {
                        "text:anchor-type": "paragraph",
                        "svg:x": "0cm",
                        "svg:y": "0cm",
                        "style:wrap": "dynamic",
                        "style:number-wrapped-paragraphs": "no-limit",
                        "style:wrap-contour": "false",
                        "style:vertical-pos": "top",
                        "style:vertical-rel": "paragraph",
                        "style:horizontal-pos": "center",
                        "style:horizontal-rel": "paragraph"
                    }
                }
            }), q.push(a));
            a = b.generateStyleName();
            e = new ops.OpAddStyle;
            e.init({
                memberid: c, styleName: a, styleFamily: "graphic", isAutomaticStyle: !0, setProperties: {
                    "style:parent-style-name": "Graphics", "style:graphic-properties": {
                        "style:vertical-pos": "top",
                        "style:vertical-rel": "baseline",
                        "style:horizontal-pos": "center",
                        "style:horizontal-rel": "paragraph",
                        "fo:background-color": "transparent",
                        "style:background-transparency": "100%",
                        "style:shadow": "none",
                        "style:mirror": "none",
                        "fo:clip": "rect(0cm, 0cm, 0cm, 0cm)",
                        "draw:luminance": "0%",
                        "draw:contrast": "0%",
                        "draw:red": "0%",
                        "draw:green": "0%",
                        "draw:blue": "0%",
                        "draw:gamma": "100%",
                        "draw:color-inversion": "false",
                        "draw:image-opacity": "100%",
                        "draw:color-mode": "standard"
                    }
                }
            });
            q.push(e);
            u = new ops.OpInsertImage;
            u.init({
                memberid: c, position: g.getCursorPosition(c),
                filename: r, frameWidth: k, frameHeight: l, frameStyleName: a, frameName: b.generateFrameName()
            });
            q.push(u);
            f.enqueue(q)
        }
    };
    this.destroy = function (a) {
        g.unsubscribe(ops.Document.signalCursorMoved, q);
        l.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, k);
        a()
    };
    g.subscribe(ops.Document.signalCursorMoved, q);
    l.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, k);
    k()
};
gui.ImageController.enabledChanged = "enabled/changed";
gui.ImageSelector = function (f) {
    function l() {
        var a = f.getSizer(), k = b.createElement("div");
        k.id = "imageSelector";
        k.style.borderWidth = "1px";
        a.appendChild(k);
        c.forEach(function (a) {
            var c = b.createElement("div");
            c.className = a;
            k.appendChild(c)
        });
        return k
    }

    var a = odf.Namespaces.svgns, c = "topLeft topRight bottomRight bottomLeft topMiddle rightMiddle bottomMiddle leftMiddle".split(" "), b = f.getElement().ownerDocument, k = !1;
    this.select = function (c) {
        var p, n, g = b.getElementById("imageSelector");
        g || (g = l());
        k = !0;
        p = g.parentNode;
        n = c.getBoundingClientRect();
        var h = p.getBoundingClientRect(), d = f.getZoomLevel();
        p = (n.left - h.left) / d - 1;
        n = (n.top - h.top) / d - 1;
        g.style.display = "block";
        g.style.left = p + "px";
        g.style.top = n + "px";
        g.style.width = c.getAttributeNS(a, "width");
        g.style.height = c.getAttributeNS(a, "height")
    };
    this.clearSelection = function () {
        var a;
        k && (a = b.getElementById("imageSelector")) && (a.style.display = "none");
        k = !1
    };
    this.isSelectorElement = function (a) {
        var c = b.getElementById("imageSelector");
        return c ? a === c || a.parentNode === c : !1
    }
};
(function () {
    function f(f) {
        function a(a) {
            q = a.which && String.fromCharCode(a.which) === k;
            k = void 0;
            return !1 === q
        }

        function c() {
            q = !1
        }

        function b(a) {
            k = a.data;
            q = !1
        }

        var k, q = !1;
        this.destroy = function (k) {
            f.unsubscribe("textInput", c);
            f.unsubscribe("compositionend", b);
            f.removeFilter("keypress", a);
            k()
        };
        f.subscribe("textInput", c);
        f.subscribe("compositionend", b);
        f.addFilter("keypress", a)
    }

    gui.InputMethodEditor = function (l, a) {
        function c(a) {
            e && (a ? e.getNode().setAttributeNS(d, "composing", "true") : (e.getNode().removeAttributeNS(d,
                    "composing"), x.textContent = ""))
        }

        function b() {
            y && (y = !1, c(!1), r.emit(gui.InputMethodEditor.signalCompositionEnd, {data: v}), v = "")
        }

        function k() {
            B || (B = !0, b(), e && e.getSelectedRange().collapsed ? s.value = "" : s.value = u.writeToString(e.getSelectedRange().cloneContents()), s.setSelectionRange(0, s.value.length), B = !1)
        }

        function q() {
            a.hasFocus() && t.trigger()
        }

        function p() {
            w = void 0;
            t.cancel();
            c(!0);
            y || r.emit(gui.InputMethodEditor.signalCompositionStart, {data: ""})
        }

        function n(a) {
            a = w = a.data;
            y = !0;
            v += a;
            t.trigger()
        }

        function g(a) {
            a.data !==
            w && (a = a.data, y = !0, v += a, t.trigger());
            w = void 0
        }

        function h() {
            x.textContent = s.value
        }

        var d = "urn:webodf:names:cursor", e = null, s = a.getEventTrap(), m = s.ownerDocument, x, t, y = !1, v = "", r = new core.EventNotifier([gui.InputMethodEditor.signalCompositionStart, gui.InputMethodEditor.signalCompositionEnd]), w, u, A = [], F, B = !1;
        this.subscribe = r.subscribe;
        this.unsubscribe = r.unsubscribe;
        this.registerCursor = function (b) {
            b.getMemberId() === l && (e = b, e.getNode().appendChild(x), b.subscribe(ops.OdtCursor.signalCursorUpdated, q), a.subscribe("input",
                h), a.subscribe("compositionupdate", h))
        };
        this.removeCursor = function (b) {
            e && b === l && (e.getNode().removeChild(x), e.unsubscribe(ops.OdtCursor.signalCursorUpdated, q), a.unsubscribe("input", h), a.unsubscribe("compositionupdate", h), e = null)
        };
        this.destroy = function (d) {
            a.unsubscribe("compositionstart", p);
            a.unsubscribe("compositionend", n);
            a.unsubscribe("textInput", g);
            a.unsubscribe("keypress", b);
            a.unsubscribe("focus", k);
            core.Async.destroyAll(F, d)
        };
        (function () {
            u = new odf.TextSerializer;
            u.filter = new odf.OdfNodeFilter;
            a.subscribe("compositionstart", p);
            a.subscribe("compositionend", n);
            a.subscribe("textInput", g);
            a.subscribe("keypress", b);
            a.subscribe("focus", k);
            A.push(new f(a));
            F = A.map(function (a) {
                return a.destroy
            });
            x = m.createElement("span");
            x.setAttribute("id", "composer");
            t = core.Task.createTimeoutTask(k, 1);
            F.push(t.destroy)
        })()
    };
    gui.InputMethodEditor.signalCompositionStart = "input/compositionstart";
    gui.InputMethodEditor.signalCompositionEnd = "input/compositionend"
})();
gui.MetadataController = function (f, l) {
    function a(a) {
        k.emit(gui.MetadataController.signalMetadataChanged, a)
    }

    function c(a) {
        var b = -1 === q.indexOf(a);
        b || runtime.log("Setting " + a + " is restricted.");
        return b
    }

    var b = f.getOdtDocument(), k = new core.EventNotifier([gui.MetadataController.signalMetadataChanged]), q = ["dc:creator", "dc:date", "meta:editing-cycles", "meta:editing-duration", "meta:document-statistic"];
    this.setMetadata = function (a, b) {
        var g = {}, h = "", d;
        a && Object.keys(a).filter(c).forEach(function (b) {
            g[b] = a[b]
        });
        b && (h = b.filter(c).join(","));
        if (0 < h.length || 0 < Object.keys(g).length) d = new ops.OpUpdateMetadata, d.init({
            memberid: l,
            setProperties: g,
            removedProperties: 0 < h.length ? {attributes: h} : null
        }), f.enqueue([d])
    };
    this.getMetadata = function (a) {
        var c;
        runtime.assert("string" === typeof a, "Property must be a string");
        c = a.split(":");
        runtime.assert(2 === c.length, "Property must be a namespace-prefixed string");
        a = odf.Namespaces.lookupNamespaceURI(c[0]);
        runtime.assert(Boolean(a), "Prefix must be for an ODF namespace.");
        return b.getOdfCanvas().odfContainer().getMetadata(a,
            c[1])
    };
    this.subscribe = function (a, b) {
        k.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        k.unsubscribe(a, b)
    };
    this.destroy = function (c) {
        b.unsubscribe(ops.OdtDocument.signalMetadataUpdated, a);
        c()
    };
    b.subscribe(ops.OdtDocument.signalMetadataUpdated, a)
};
gui.MetadataController.signalMetadataChanged = "metadata/changed";
gui.PasteController = function (f, l, a, c) {
    function b() {
        p = !0 === l.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) ? a.isLocalCursorWithinOwnAnnotation() : !0
    }

    function k(a) {
        a.getMemberId() === c && b()
    }

    var q = f.getOdtDocument(), p = !1, n = odf.Namespaces.textns, g = core.StepDirection.NEXT, h = odf.OdfUtils;
    this.isEnabled = function () {
        return p
    };
    this.paste = function (a) {
        if (p) {
            var b = q.getCursorPosition(c), k = q.getCursor(c).getNode(), k = h.getParagraphElement(k), m = k.getAttributeNS(n, "style-name") || "", l = b, t = [], y = q.convertDomPointToCursorStep(k,
                0, g);
            a.replace(/\r/g, "").split("\n").forEach(function (a) {
                var b = new ops.OpInsertText, d = new ops.OpSplitParagraph;
                b.init({memberid: c, position: l, text: a, moveCursor: !0});
                t.push(b);
                l += a.length;
                d.init({memberid: c, position: l, paragraphStyleName: m, sourceParagraphPosition: y, moveCursor: !0});
                t.push(d);
                y = l += 1
            });
            t.pop();
            f.enqueue(t)
        }
    };
    this.destroy = function (a) {
        q.unsubscribe(ops.Document.signalCursorMoved, k);
        l.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, b);
        a()
    };
    q.subscribe(ops.Document.signalCursorMoved, k);
    l.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, b);
    b()
};
gui.ClosestXOffsetScanner = function (f) {
    function l(a) {
        return null !== a && void 0 !== b ? Math.abs(a - f) > b : !1
    }

    function a(a) {
        null !== a && !1 === l(a) && (b = Math.abs(a - f))
    }

    var c = this, b, k = gui.StepInfo.VisualDirection.LEFT_TO_RIGHT;
    this.token = void 0;
    this.process = function (b, f, n) {
        var g, h;
        b.visualDirection === k ? (g = f && f.right, h = n && n.left) : (g = f && f.left, h = n && n.right);
        if (l(g) || l(h))return !0;
        if (f || n) a(g), a(h), c.token = b.token;
        return !1
    }
};
gui.LineBoundaryScanner = function () {
    var f = this, l = null;
    this.token = void 0;
    this.process = function (a, c, b) {
        var k;
        if (k = b)if (l) {
            var q = l;
            k = Math.min(q.bottom - q.top, b.bottom - b.top);
            var p = Math.max(q.top, b.top), q = Math.min(q.bottom, b.bottom) - p;
            k = 0.4 >= (0 < k ? q / k : 0)
        } else k = !1;
        !c || b && !k || (f.token = a.token);
        if (k)return !0;
        l = (a = l) && c ? {
                left: Math.min(a.left, c.left),
                right: Math.max(a.right, c.right),
                top: Math.min(a.top, c.top),
                bottom: Math.min(a.bottom, c.bottom)
            } : a || c;
        return !1
    }
};
gui.ParagraphBoundaryScanner = function () {
    var f = this, l = !1, a, c = odf.OdfUtils;
    this.token = void 0;
    this.process = function (b) {
        var k = c.getParagraphElement(b.container());
        l || (a = k, l = !0);
        if (a !== k)return !0;
        f.token = b.token;
        return !1
    }
};
odf.WordBoundaryFilter = function (f, l) {
    function a(a, b, d) {
        for (var e = null, c = f.getRootNode(), g; a !== c && null !== a && null === e;)g = 0 > b ? a.previousSibling : a.nextSibling, d(g) === NodeFilter.FILTER_ACCEPT && (e = g), a = a.parentNode;
        return e
    }

    function c(a, d) {
        var e;
        return null === a ? s.NO_NEIGHBOUR : q.isCharacterElement(a) ? s.SPACE_CHAR : a.nodeType === b || q.isTextSpan(a) || q.isHyperlink(a) ? (e = a.textContent.charAt(d()), n.test(e) ? s.SPACE_CHAR : p.test(e) ? s.PUNCTUATION_CHAR : s.WORD_CHAR) : s.OTHER
    }

    var b = Node.TEXT_NODE, k = Node.ELEMENT_NODE,
        q = odf.OdfUtils, p = /[!-#%-*,-\/:-;?-@\[-\]_{}\u00a1\u00ab\u00b7\u00bb\u00bf;\u00b7\u055a-\u055f\u0589-\u058a\u05be\u05c0\u05c3\u05c6\u05f3-\u05f4\u0609-\u060a\u060c-\u060d\u061b\u061e-\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0964-\u0965\u0970\u0df4\u0e4f\u0e5a-\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u104a-\u104f\u10fb\u1361-\u1368\u166d-\u166e\u169b-\u169c\u16eb-\u16ed\u1735-\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944-\u1945\u19de-\u19df\u1a1e-\u1a1f\u1b5a-\u1b60\u1c3b-\u1c3f\u1c7e-\u1c7f\u2000-\u206e\u207d-\u207e\u208d-\u208e\u3008-\u3009\u2768-\u2775\u27c5-\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2cf9-\u2cfc\u2cfe-\u2cff\u2e00-\u2e7e\u3000-\u303f\u30a0\u30fb\ua60d-\ua60f\ua673\ua67e\ua874-\ua877\ua8ce-\ua8cf\ua92e-\ua92f\ua95f\uaa5c-\uaa5f\ufd3e-\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a-\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a-\uff1b\uff1f-\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]|\ud800[\udd00-\udd01\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc00-\udc7e]/,
        n = /\s/, g = core.PositionFilter.FilterResult.FILTER_ACCEPT, h = core.PositionFilter.FilterResult.FILTER_REJECT, d = odf.WordBoundaryFilter.IncludeWhitespace.TRAILING, e = odf.WordBoundaryFilter.IncludeWhitespace.LEADING, s = {
            NO_NEIGHBOUR: 0,
            SPACE_CHAR: 1,
            PUNCTUATION_CHAR: 2,
            WORD_CHAR: 3,
            OTHER: 4
        };
    this.acceptPosition = function (b) {
        var f = b.container(), p = b.leftNode(), n = b.rightNode(), q = b.unfilteredDomOffset, r = function () {
            return b.unfilteredDomOffset() - 1
        };
        f.nodeType === k && (null === n && (n = a(f, 1, b.getNodeFilter())), null === p && (p =
            a(f, -1, b.getNodeFilter())));
        f !== n && (q = function () {
            return 0
        });
        f !== p && null !== p && (r = function () {
            return p.textContent.length - 1
        });
        f = c(p, r);
        n = c(n, q);
        return f === s.WORD_CHAR && n === s.WORD_CHAR || f === s.PUNCTUATION_CHAR && n === s.PUNCTUATION_CHAR || l === d && f !== s.NO_NEIGHBOUR && n === s.SPACE_CHAR || l === e && f === s.SPACE_CHAR && n !== s.NO_NEIGHBOUR ? h : g
    }
};
odf.WordBoundaryFilter.IncludeWhitespace = {None: 0, TRAILING: 1, LEADING: 2};
gui.SelectionController = function (f, l) {
    function a(a) {
        var b = a.spec();
        if (a.isEdit || b.memberid === l) F = void 0, B.cancel()
    }

    function c() {
        var a = t.getCursor(l).getNode();
        return t.createStepIterator(a, 0, [r, u], t.getRootElement(a))
    }

    function b(a, b, d) {
        d = new odf.WordBoundaryFilter(t, d);
        var e = t.getRootElement(a) || t.getRootNode(), c = t.createRootFilter(e);
        return t.createStepIterator(a, b, [r, c, d], e)
    }

    function k(a, b) {
        return b ? {
                anchorNode: a.startContainer,
                anchorOffset: a.startOffset,
                focusNode: a.endContainer,
                focusOffset: a.endOffset
            } :
            {
                anchorNode: a.endContainer,
                anchorOffset: a.endOffset,
                focusNode: a.startContainer,
                focusOffset: a.startOffset
            }
    }

    function q(a, b, d) {
        var e = new ops.OpMoveCursor;
        e.init({memberid: l, position: a, length: b || 0, selectionType: d});
        return e
    }

    function p(a, b, d) {
        var e;
        e = t.getCursor(l);
        e = k(e.getSelectedRange(), e.hasForwardSelection());
        e.focusNode = a;
        e.focusOffset = b;
        d || (e.anchorNode = e.focusNode, e.anchorOffset = e.focusOffset);
        a = t.convertDomToCursorRange(e);
        f.enqueue([q(a.position, a.length)])
    }

    function n(a) {
        var d;
        d = b(a.startContainer,
            a.startOffset, E);
        d.roundToPreviousStep() && a.setStart(d.container(), d.offset());
        d = b(a.endContainer, a.endOffset, H);
        d.roundToNextStep() && a.setEnd(d.container(), d.offset())
    }

    function g(a) {
        var b = v.getParagraphElements(a), d = b[0], b = b[b.length - 1];
        d && a.setStart(d, 0);
        b && (v.isParagraph(a.endContainer) && 0 === a.endOffset ? a.setEndBefore(b) : a.setEnd(b, b.childNodes.length))
    }

    function h(a, b, d, e) {
        var c, f;
        e ? (c = d.startContainer, f = d.startOffset) : (c = d.endContainer, f = d.endOffset);
        y.containsNode(a, c) || (f = 0 > y.comparePoints(a,
            0, c, f) ? 0 : a.childNodes.length, c = a);
        a = t.createStepIterator(c, f, b, v.getParagraphElement(c) || a);
        a.roundToClosestStep() || runtime.assert(!1, "No step found in requested range");
        e ? d.setStart(a.container(), a.offset()) : d.setEnd(a.container(), a.offset())
    }

    function d(a, b) {
        var d = c();
        d.advanceStep(a) && p(d.container(), d.offset(), b)
    }

    function e(a, b) {
        var d, e = F, f = [new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner];
        void 0 === e && A && (e = A());
        isNaN(e) || (d = c(), w.moveToFilteredStep(d, a, f) && d.advanceStep(a) && (f = [new gui.ClosestXOffsetScanner(e),
            new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner], w.moveToFilteredStep(d, a, f) && (p(d.container(), d.offset(), b), F = e, B.restart())))
    }

    function s(a, b) {
        var d = c(), e = [new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner];
        w.moveToFilteredStep(d, a, e) && p(d.container(), d.offset(), b)
    }

    function m(a, d) {
        var e = t.getCursor(l), e = k(e.getSelectedRange(), e.hasForwardSelection()), e = b(e.focusNode, e.focusOffset, E);
        e.advanceStep(a) && p(e.container(), e.offset(), d)
    }

    function x(a, b, d) {
        var e = !1, c = t.getCursor(l),
            c = k(c.getSelectedRange(), c.hasForwardSelection()), e = t.getRootElement(c.focusNode);
        runtime.assert(Boolean(e), "SelectionController: Cursor outside root");
        c = t.createStepIterator(c.focusNode, c.focusOffset, [r, u], e);
        c.roundToClosestStep();
        c.advanceStep(a) && (d = d(c.container())) && (a === I ? (c.setPosition(d, 0), e = c.roundToNextStep()) : (c.setPosition(d, d.childNodes.length), e = c.roundToPreviousStep()), e && p(c.container(), c.offset(), b))
    }

    var t = f.getOdtDocument(), y = core.DomUtils, v = odf.OdfUtils, r = t.getPositionFilter(),
        w = new gui.GuiStepUtils, u = t.createRootFilter(l), A = null, F, B, E = odf.WordBoundaryFilter.IncludeWhitespace.TRAILING, H = odf.WordBoundaryFilter.IncludeWhitespace.LEADING, I = core.StepDirection.PREVIOUS, Q = core.StepDirection.NEXT;
    this.selectionToRange = function (a) {
        var b = 0 <= y.comparePoints(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset), d = a.focusNode.ownerDocument.createRange();
        b ? (d.setStart(a.anchorNode, a.anchorOffset), d.setEnd(a.focusNode, a.focusOffset)) : (d.setStart(a.focusNode, a.focusOffset), d.setEnd(a.anchorNode,
                a.anchorOffset));
        return {range: d, hasForwardSelection: b}
    };
    this.rangeToSelection = k;
    this.selectImage = function (a) {
        var b = t.getRootElement(a), d = t.createRootFilter(b), b = t.createStepIterator(a, 0, [d, t.getPositionFilter()], b), e;
        b.roundToPreviousStep() || runtime.assert(!1, "No walkable position before frame");
        d = b.container();
        e = b.offset();
        b.setPosition(a, a.childNodes.length);
        b.roundToNextStep() || runtime.assert(!1, "No walkable position after frame");
        a = t.convertDomToCursorRange({
            anchorNode: d, anchorOffset: e, focusNode: b.container(),
            focusOffset: b.offset()
        });
        a = q(a.position, a.length, ops.OdtCursor.RegionSelection);
        f.enqueue([a])
    };
    this.expandToWordBoundaries = n;
    this.expandToParagraphBoundaries = g;
    this.selectRange = function (a, b, d) {
        var e = t.getOdfCanvas().getElement(), c, m = [r];
        c = y.containsNode(e, a.startContainer);
        e = y.containsNode(e, a.endContainer);
        if (c || e)if (c && e && (2 === d ? n(a) : 3 <= d && g(a)), (d = b ? t.getRootElement(a.startContainer) : t.getRootElement(a.endContainer)) || (d = t.getRootNode()), m.push(t.createRootFilter(d)), h(d, m, a, !0), h(d, m, a, !1), a =
                k(a, b), b = t.convertDomToCursorRange(a), a = t.getCursorSelection(l), b.position !== a.position || b.length !== a.length) a = q(b.position, b.length, ops.OdtCursor.RangeSelection), f.enqueue([a])
    };
    this.moveCursorToLeft = function () {
        d(I, !1);
        return !0
    };
    this.moveCursorToRight = function () {
        d(Q, !1);
        return !0
    };
    this.extendSelectionToLeft = function () {
        d(I, !0);
        return !0
    };
    this.extendSelectionToRight = function () {
        d(Q, !0);
        return !0
    };
    this.setCaretXPositionLocator = function (a) {
        A = a
    };
    this.moveCursorUp = function () {
        e(I, !1);
        return !0
    };
    this.moveCursorDown =
        function () {
            e(Q, !1);
            return !0
        };
    this.extendSelectionUp = function () {
        e(I, !0);
        return !0
    };
    this.extendSelectionDown = function () {
        e(Q, !0);
        return !0
    };
    this.moveCursorBeforeWord = function () {
        m(I, !1);
        return !0
    };
    this.moveCursorPastWord = function () {
        m(Q, !1);
        return !0
    };
    this.extendSelectionBeforeWord = function () {
        m(I, !0);
        return !0
    };
    this.extendSelectionPastWord = function () {
        m(Q, !0);
        return !0
    };
    this.moveCursorToLineStart = function () {
        s(I, !1);
        return !0
    };
    this.moveCursorToLineEnd = function () {
        s(Q, !1);
        return !0
    };
    this.extendSelectionToLineStart =
        function () {
            s(I, !0);
            return !0
        };
    this.extendSelectionToLineEnd = function () {
        s(Q, !0);
        return !0
    };
    this.extendSelectionToParagraphStart = function () {
        x(I, !0, v.getParagraphElement);
        return !0
    };
    this.extendSelectionToParagraphEnd = function () {
        x(Q, !0, v.getParagraphElement);
        return !0
    };
    this.moveCursorToParagraphStart = function () {
        x(I, !1, v.getParagraphElement);
        return !0
    };
    this.moveCursorToParagraphEnd = function () {
        x(Q, !1, v.getParagraphElement);
        return !0
    };
    this.moveCursorToDocumentStart = function () {
        x(I, !1, t.getRootElement);
        return !0
    };
    this.moveCursorToDocumentEnd = function () {
        x(Q, !1, t.getRootElement);
        return !0
    };
    this.extendSelectionToDocumentStart = function () {
        x(I, !0, t.getRootElement);
        return !0
    };
    this.extendSelectionToDocumentEnd = function () {
        x(Q, !0, t.getRootElement);
        return !0
    };
    this.extendSelectionToEntireDocument = function () {
        var a = t.getCursor(l), a = t.getRootElement(a.getNode()), b, d, e;
        runtime.assert(Boolean(a), "SelectionController: Cursor outside root");
        e = t.createStepIterator(a, 0, [r, u], a);
        e.roundToClosestStep();
        b = e.container();
        d = e.offset();
        e.setPosition(a, a.childNodes.length);
        e.roundToClosestStep();
        a = t.convertDomToCursorRange({
            anchorNode: b,
            anchorOffset: d,
            focusNode: e.container(),
            focusOffset: e.offset()
        });
        f.enqueue([q(a.position, a.length)]);
        return !0
    };
    this.destroy = function (b) {
        t.unsubscribe(ops.OdtDocument.signalOperationStart, a);
        core.Async.destroyAll([B.destroy], b)
    };
    (function () {
        B = core.Task.createTimeoutTask(function () {
            F = void 0
        }, 2E3);
        t.subscribe(ops.OdtDocument.signalOperationStart, a)
    })()
};
gui.TextController = function (f, l, a, c, b, k) {
    function q() {
        x = !0 === l.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) ? a.isLocalCursorWithinOwnAnnotation() : !0
    }

    function p(a) {
        a.getMemberId() === c && q()
    }

    function n(a, b, d) {
        var c = [e.getPositionFilter()];
        d && c.push(e.createRootFilter(a.startContainer));
        d = e.createStepIterator(a.startContainer, a.startOffset, c, b);
        d.roundToClosestStep() || runtime.assert(!1, "No walkable step found in paragraph element at range start");
        b = e.convertDomPointToCursorStep(d.container(), d.offset());
        a.collapsed ? a = b : (d.setPosition(a.endContainer, a.endOffset), d.roundToClosestStep() || runtime.assert(!1, "No walkable step found in paragraph element at range end"), a = e.convertDomPointToCursorStep(d.container(), d.offset()));
        return {position: b, length: a - b}
    }

    function g(a) {
        var b, d, e, f = s.getParagraphElements(a), g = a.cloneRange(), h = [];
        b = f[0];
        1 < f.length && (s.hasNoODFContent(b) && (b = f[f.length - 1]), d = b.getAttributeNS(odf.Namespaces.textns, "style-name") || "");
        f.forEach(function (b, f) {
            var k, l;
            g.setStart(b, 0);
            g.collapse(!0);
            k = n(g, b, !1).position;
            0 < f && (l = new ops.OpMergeParagraph, l.init({
                memberid: c,
                paragraphStyleName: d,
                destinationStartPosition: e,
                sourceStartPosition: k,
                moveCursor: 1 === f
            }), h.unshift(l));
            e = k;
            g.selectNodeContents(b);
            if (k = m.rangeIntersection(g, a)) k = n(k, b, !0), 0 < k.length && (l = new ops.OpRemoveText, l.init({
                memberid: c,
                position: k.position,
                length: k.length
            }), h.unshift(l))
        });
        return h
    }

    function h(a) {
        0 > a.length && (a.position += a.length, a.length = -a.length);
        return a
    }

    function d(a) {
        if (!x)return !1;
        var b, d = e.getCursor(c).getSelectedRange().cloneRange(),
            m = h(e.getCursorSelection(c)), k;
        if (0 === m.length) {
            m = void 0;
            b = e.getCursor(c).getNode();
            k = e.getRootElement(b);
            var l = [e.getPositionFilter(), e.createRootFilter(k)];
            k = e.createStepIterator(b, 0, l, k);
            k.roundToClosestStep() && (a ? k.nextStep() : k.previousStep()) && (m = h(e.convertDomToCursorRange({
                anchorNode: b,
                anchorOffset: 0,
                focusNode: k.container(),
                focusOffset: k.offset()
            })), a ? (d.setStart(b, 0), d.setEnd(k.container(), k.offset())) : (d.setStart(k.container(), k.offset()), d.setEnd(b, 0)))
        }
        m && f.enqueue(g(d));
        return void 0 !==
            m
    }

    var e = f.getOdtDocument(), s = odf.OdfUtils, m = core.DomUtils, x = !1, t = odf.Namespaces.textns, y = core.StepDirection.NEXT;
    this.isEnabled = function () {
        return x
    };
    this.enqueueParagraphSplittingOps = function () {
        if (!x)return !1;
        var a = e.getCursor(c), b = a.getSelectedRange(), d = h(e.getCursorSelection(c)), m = [], a = s.getParagraphElement(a.getNode()), l = a.getAttributeNS(t, "style-name") || "";
        0 < d.length && (m = m.concat(g(b)));
        b = new ops.OpSplitParagraph;
        b.init({
            memberid: c,
            position: d.position,
            paragraphStyleName: l,
            sourceParagraphPosition: e.convertDomPointToCursorStep(a,
                0, y),
            moveCursor: !0
        });
        m.push(b);
        k && (d = k(d.position + 1), m = m.concat(d));
        f.enqueue(m);
        return !0
    };
    this.removeTextByBackspaceKey = function () {
        return d(!1)
    };
    this.removeTextByDeleteKey = function () {
        return d(!0)
    };
    this.removeCurrentSelection = function () {
        if (!x)return !1;
        var a = e.getCursor(c).getSelectedRange();
        f.enqueue(g(a));
        return !0
    };
    this.insertText = function (a) {
        if (x) {
            var d = e.getCursor(c).getSelectedRange(), m = h(e.getCursorSelection(c)), k = [], l = !1;
            0 < m.length && (k = k.concat(g(d)), l = !0);
            d = new ops.OpInsertText;
            d.init({
                memberid: c,
                position: m.position, text: a, moveCursor: !0
            });
            k.push(d);
            b && (a = b(m.position, a.length, l)) && k.push(a);
            f.enqueue(k)
        }
    };
    this.destroy = function (a) {
        e.unsubscribe(ops.Document.signalCursorMoved, p);
        l.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, q);
        a()
    };
    e.subscribe(ops.Document.signalCursorMoved, p);
    l.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, q);
    q()
};
gui.UndoManager = function () {
};
gui.UndoManager.prototype.subscribe = function (f, l) {
};
gui.UndoManager.prototype.unsubscribe = function (f, l) {
};
gui.UndoManager.prototype.setDocument = function (f) {
};
gui.UndoManager.prototype.setInitialState = function () {
};
gui.UndoManager.prototype.initialize = function () {
};
gui.UndoManager.prototype.purgeInitialState = function () {
};
gui.UndoManager.prototype.setPlaybackFunction = function (f) {
};
gui.UndoManager.prototype.hasUndoStates = function () {
};
gui.UndoManager.prototype.hasRedoStates = function () {
};
gui.UndoManager.prototype.moveForward = function (f) {
};
gui.UndoManager.prototype.moveBackward = function (f) {
};
gui.UndoManager.prototype.onOperationExecuted = function (f) {
};
gui.UndoManager.prototype.isDocumentModified = function () {
};
gui.UndoManager.prototype.setDocumentModified = function (f) {
};
gui.UndoManager.signalUndoStackChanged = "undoStackChanged";
gui.UndoManager.signalUndoStateCreated = "undoStateCreated";
gui.UndoManager.signalUndoStateModified = "undoStateModified";
gui.UndoManager.signalDocumentModifiedChanged = "documentModifiedChanged";
gui.SessionControllerOptions = function () {
    this.annotationsEnabled = this.directParagraphStylingEnabled = this.directTextStylingEnabled = !1
};
(function () {
    var f = core.PositionFilter.FilterResult.FILTER_ACCEPT;
    gui.SessionController = function (l, a, c, b) {
        function k(a) {
            return a.target || a.srcElement || null
        }

        function q(a, b) {
            var d = J.getDOMDocument(), e = null;
            d.caretRangeFromPoint ? (d = d.caretRangeFromPoint(a, b), e = {
                    container: d.startContainer,
                    offset: d.startOffset
                }) : d.caretPositionFromPoint && (d = d.caretPositionFromPoint(a, b)) && d.offsetNode && (e = {
                    container: d.offsetNode,
                    offset: d.offset
                });
            return e
        }

        function p(b) {
            var d = J.getCursor(a).getSelectedRange();
            d.collapsed ?
                b.preventDefault() : Z.setDataFromRange(b, d) ? ha.removeCurrentSelection() : runtime.log("Cut operation failed")
        }

        function n() {
            return !1 !== J.getCursor(a).getSelectedRange().collapsed
        }

        function g(b) {
            var d = J.getCursor(a).getSelectedRange();
            d.collapsed ? b.preventDefault() : Z.setDataFromRange(b, d) || runtime.log("Copy operation failed")
        }

        function h(a) {
            var b;
            R.clipboardData && R.clipboardData.getData ? b = R.clipboardData.getData("Text") : a.clipboardData && a.clipboardData.getData && (b = a.clipboardData.getData("text/plain"));
            b && (ha.removeCurrentSelection(), pa.paste(b));
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }

        function d() {
            return !1
        }

        function e(a) {
            if (S) S.onOperationExecuted(a)
        }

        function s(a) {
            J.emit(ops.OdtDocument.signalUndoStackChanged, a)
        }

        function m() {
            var a;
            return S ? (a = L.hasFocus(), S.moveBackward(1), a && L.focus(), !0) : !1
        }

        function x() {
            var a;
            return S ? (a = L.hasFocus(), S.moveForward(1), a && L.focus(), !0) : !1
        }

        function t(b) {
            var d = J.getCursor(a).getSelectedRange(), e = k(b).getAttribute("end");
            d && e && (b = q(b.clientX, b.clientY)) &&
            (ia.setUnfilteredPosition(b.container, b.offset), P.acceptPosition(ia) === f && (d = d.cloneRange(), "left" === e ? d.setStart(ia.container(), ia.unfilteredDomOffset()) : d.setEnd(ia.container(), ia.unfilteredDomOffset()), c.setSelectedRange(d, "right" === e), J.emit(ops.Document.signalCursorMoved, c)))
        }

        function y() {
            X.selectRange(c.getSelectedRange(), c.hasForwardSelection(), 1)
        }

        function v() {
            var a = R.getSelection(), b = 0 < a.rangeCount && X.selectionToRange(a);
            ca && b && (W = !0, la.clearSelection(), ia.setUnfilteredPosition(a.focusNode,
                a.focusOffset), P.acceptPosition(ia) === f && (2 === na ? X.expandToWordBoundaries(b.range) : 3 <= na && X.expandToParagraphBoundaries(b.range), c.setSelectedRange(b.range, b.hasForwardSelection), J.emit(ops.Document.signalCursorMoved, c)))
        }

        function r(b) {
            var d = k(b), e = J.getCursor(a);
            if (ca = null !== d && T.containsNode(J.getOdfCanvas().getElement(), d)) W = !1, d = J.getRootElement(d) || J.getRootNode(), P = J.createRootFilter(d), na = 0 === b.button ? b.detail : 0, e && b.shiftKey ? R.getSelection().collapse(e.getAnchorNode(), 0) : (b = R.getSelection(),
                    d = e.getSelectedRange(), b.extend ? e.hasForwardSelection() ? (b.collapse(d.startContainer, d.startOffset), b.extend(d.endContainer, d.endOffset)) : (b.collapse(d.endContainer, d.endOffset), b.extend(d.startContainer, d.startOffset)) : (b.removeAllRanges(), b.addRange(d.cloneRange()))), 1 < na && v()
        }

        function w(a) {
            var b = J.getRootElement(a), d = J.createRootFilter(b), b = J.createStepIterator(a, 0, [d, J.getPositionFilter()], b);
            b.setPosition(a, a.childNodes.length);
            return b.roundToNextStep() ? {container: b.container(), offset: b.offset()} :
                null
        }

        function u(a) {
            var b;
            b = (b = R.getSelection()) ? {
                    anchorNode: b.anchorNode,
                    anchorOffset: b.anchorOffset,
                    focusNode: b.focusNode,
                    focusOffset: b.focusOffset
                } : null;
            var d = R.getSelection().isCollapsed, e, c;
            b.anchorNode || b.focusNode || !(e = q(a.clientX, a.clientY)) || (b.anchorNode = e.container, b.anchorOffset = e.offset, b.focusNode = b.anchorNode, b.focusOffset = b.anchorOffset);
            if (D.isImage(b.focusNode) && 0 === b.focusOffset && D.isCharacterFrame(b.focusNode.parentNode)) {
                if (c = b.focusNode.parentNode, e = c.getBoundingClientRect(),
                    a.clientX > e.left && (e = w(c))) b.focusNode = e.container, b.focusOffset = e.offset, d && (b.anchorNode = b.focusNode, b.anchorOffset = b.focusOffset)
            } else D.isImage(b.focusNode.firstChild) && 1 === b.focusOffset && D.isCharacterFrame(b.focusNode) && (e = w(b.focusNode)) && (b.anchorNode = b.focusNode = e.container, b.anchorOffset = b.focusOffset = e.offset);
            b.anchorNode && b.focusNode && (b = X.selectionToRange(b), X.selectRange(b.range, b.hasForwardSelection, 0 === a.button ? a.detail : 0));
            L.focus()
        }

        function A(a) {
            var b;
            if (b = q(a.clientX, a.clientY)) a =
                b.container, b = b.offset, a = {
                anchorNode: a,
                anchorOffset: b,
                focusNode: a,
                focusOffset: b
            }, a = X.selectionToRange(a), X.selectRange(a.range, a.hasForwardSelection, 2), L.focus()
        }

        function F(a) {
            var b = k(a), d, e, f;
            ja.processRequests();
            ca && (D.isImage(b) && D.isCharacterFrame(b.parentNode) && R.getSelection().isCollapsed ? (X.selectImage(b.parentNode), L.focus()) : la.isSelectorElement(b) ? L.focus() : W ? (b = c.getSelectedRange(), e = b.collapsed, D.isImage(b.endContainer) && 0 === b.endOffset && D.isCharacterFrame(b.endContainer.parentNode) &&
                        (f = b.endContainer.parentNode, f = w(f)) && (b.setEnd(f.container, f.offset), e && b.collapse(!1)), X.selectRange(b, c.hasForwardSelection(), 0 === a.button ? a.detail : 0), L.focus()) : ta ? u(a) : (d = T.cloneEvent(a), aa = runtime.setTimeout(function () {
                                u(d)
                            }, 0)), na = 0, W = ca = !1)
        }

        function B(b) {
            var d = J.getCursor(a).getSelectedRange();
            d.collapsed || O.exportRangeToDataTransfer(b.dataTransfer, d)
        }

        function E() {
            ca && L.focus();
            na = 0;
            W = ca = !1
        }

        function H(a) {
            F(a)
        }

        function I(a) {
            var b = k(a), d = null;
            "annotationRemoveButton" === b.className ? (runtime.assert(ea,
                    "Remove buttons are displayed on annotations while annotation editing is disabled in the controller."), d = b.parentNode.getElementsByTagNameNS(odf.Namespaces.officens, "annotation").item(0), ga.removeAnnotation(d), L.focus()) : "webodf-draggable" !== b.getAttribute("class") && F(a)
        }

        function Q(a) {
            (a = a.data) && (-1 === a.indexOf("\n") ? ha.insertText(a) : pa.paste(a))
        }

        function N(a) {
            return function () {
                a();
                return !0
            }
        }

        function z(b) {
            return function (d) {
                return J.getCursor(a).getSelectionType() === ops.OdtCursor.RangeSelection ?
                    b(d) : !0
            }
        }

        function Y(a) {
            L.unsubscribe("keydown", C.handleEvent);
            L.unsubscribe("keypress", V.handleEvent);
            L.unsubscribe("keyup", $.handleEvent);
            L.unsubscribe("copy", g);
            L.unsubscribe("mousedown", r);
            L.unsubscribe("mousemove", ja.trigger);
            L.unsubscribe("mouseup", I);
            L.unsubscribe("contextmenu", H);
            L.unsubscribe("dragstart", B);
            L.unsubscribe("dragend", E);
            L.unsubscribe("click", oa.handleClick);
            L.unsubscribe("longpress", A);
            L.unsubscribe("drag", t);
            L.unsubscribe("dragstop", y);
            J.unsubscribe(ops.OdtDocument.signalOperationEnd,
                fa.trigger);
            J.unsubscribe(ops.Document.signalCursorAdded, ka.registerCursor);
            J.unsubscribe(ops.Document.signalCursorRemoved, ka.removeCursor);
            J.unsubscribe(ops.OdtDocument.signalOperationEnd, e);
            a()
        }

        var R = runtime.getWindow(), J = l.getOdtDocument(), G = new gui.SessionConstraints, ba = new gui.SessionContext(l, a), T = core.DomUtils, D = odf.OdfUtils, O = new gui.MimeDataExporter, Z = new gui.Clipboard(O), C = new gui.KeyboardHandler, V = new gui.KeyboardHandler, $ = new gui.KeyboardHandler, ca = !1, U = new odf.ObjectNameGenerator(J.getOdfCanvas().odfContainer(),
            a), W = !1, P = null, aa, S = null, L = new gui.EventManager(J), ea = b.annotationsEnabled, ga = new gui.AnnotationController(l, G, a), da = new gui.DirectFormattingController(l, G, ba, a, U, b.directTextStylingEnabled, b.directParagraphStylingEnabled), ha = new gui.TextController(l, G, ba, a, da.createCursorStyleOp, da.createParagraphStyleOps), ma = new gui.ImageController(l, G, ba, a, U), la = new gui.ImageSelector(J.getOdfCanvas()), ia = J.createPositionIterator(J.getRootNode()), ja, fa, pa = new gui.PasteController(l, G, ba, a), ka = new gui.InputMethodEditor(a,
            L), na = 0, oa = new gui.HyperlinkClickHandler(J.getOdfCanvas().getElement, C, $), qa = new gui.HyperlinkController(l, G, ba, a), X = new gui.SelectionController(l, a), ua = new gui.MetadataController(l, a), K = gui.KeyboardHandler.Modifier, M = gui.KeyboardHandler.KeyCode, ra = -1 !== R.navigator.appVersion.toLowerCase().indexOf("mac"), ta = -1 !== ["iPad", "iPod", "iPhone"].indexOf(R.navigator.platform), sa;
        runtime.assert(null !== R, "Expected to be run in an environment which has a global window, like a browser.");
        this.undo = m;
        this.redo =
            x;
        this.insertLocalCursor = function () {
            runtime.assert(void 0 === l.getOdtDocument().getCursor(a), "Inserting local cursor a second time.");
            var b = new ops.OpAddCursor;
            b.init({memberid: a});
            l.enqueue([b]);
            L.focus()
        };
        this.removeLocalCursor = function () {
            runtime.assert(void 0 !== l.getOdtDocument().getCursor(a), "Removing local cursor without inserting before.");
            var b = new ops.OpRemoveCursor;
            b.init({memberid: a});
            l.enqueue([b])
        };
        this.startEditing = function () {
            ka.subscribe(gui.InputMethodEditor.signalCompositionStart, ha.removeCurrentSelection);
            ka.subscribe(gui.InputMethodEditor.signalCompositionEnd, Q);
            L.subscribe("beforecut", n);
            L.subscribe("cut", p);
            L.subscribe("beforepaste", d);
            L.subscribe("paste", h);
            S && S.initialize();
            L.setEditing(!0);
            oa.setModifier(ra ? K.Meta : K.Ctrl);
            C.bind(M.Backspace, K.None, N(ha.removeTextByBackspaceKey), !0);
            C.bind(M.Delete, K.None, ha.removeTextByDeleteKey);
            C.bind(M.Tab, K.None, z(function () {
                ha.insertText("\t");
                return !0
            }));
            ra ? (C.bind(M.Clear, K.None, ha.removeCurrentSelection), C.bind(M.B, K.Meta, z(da.toggleBold)), C.bind(M.I,
                    K.Meta, z(da.toggleItalic)), C.bind(M.U, K.Meta, z(da.toggleUnderline)), C.bind(M.L, K.MetaShift, z(da.alignParagraphLeft)), C.bind(M.E, K.MetaShift, z(da.alignParagraphCenter)), C.bind(M.R, K.MetaShift, z(da.alignParagraphRight)), C.bind(M.J, K.MetaShift, z(da.alignParagraphJustified)), ea && C.bind(M.C, K.MetaShift, ga.addAnnotation), C.bind(M.Z, K.Meta, m), C.bind(M.Z, K.MetaShift, x)) : (C.bind(M.B, K.Ctrl, z(da.toggleBold)), C.bind(M.I, K.Ctrl, z(da.toggleItalic)), C.bind(M.U, K.Ctrl, z(da.toggleUnderline)), C.bind(M.L, K.CtrlShift,
                    z(da.alignParagraphLeft)), C.bind(M.E, K.CtrlShift, z(da.alignParagraphCenter)), C.bind(M.R, K.CtrlShift, z(da.alignParagraphRight)), C.bind(M.J, K.CtrlShift, z(da.alignParagraphJustified)), ea && C.bind(M.C, K.CtrlAlt, ga.addAnnotation), C.bind(M.Z, K.Ctrl, m), C.bind(M.Z, K.CtrlShift, x));
            V.setDefault(z(function (a) {
                var b;
                b = null === a.which || void 0 === a.which ? String.fromCharCode(a.keyCode) : 0 !== a.which && 0 !== a.charCode ? String.fromCharCode(a.which) : null;
                return !b || a.altKey || a.ctrlKey || a.metaKey ? !1 : (ha.insertText(b), !0)
            }));
            V.bind(M.Enter, K.None, z(ha.enqueueParagraphSplittingOps))
        };
        this.endEditing = function () {
            ka.unsubscribe(gui.InputMethodEditor.signalCompositionStart, ha.removeCurrentSelection);
            ka.unsubscribe(gui.InputMethodEditor.signalCompositionEnd, Q);
            L.unsubscribe("cut", p);
            L.unsubscribe("beforecut", n);
            L.unsubscribe("paste", h);
            L.unsubscribe("beforepaste", d);
            L.setEditing(!1);
            oa.setModifier(K.None);
            C.bind(M.Backspace, K.None, function () {
                return !0
            }, !0);
            C.unbind(M.Delete, K.None);
            C.unbind(M.Tab, K.None);
            ra ? (C.unbind(M.Clear,
                    K.None), C.unbind(M.B, K.Meta), C.unbind(M.I, K.Meta), C.unbind(M.U, K.Meta), C.unbind(M.L, K.MetaShift), C.unbind(M.E, K.MetaShift), C.unbind(M.R, K.MetaShift), C.unbind(M.J, K.MetaShift), ea && C.unbind(M.C, K.MetaShift), C.unbind(M.Z, K.Meta), C.unbind(M.Z, K.MetaShift)) : (C.unbind(M.B, K.Ctrl), C.unbind(M.I, K.Ctrl), C.unbind(M.U, K.Ctrl), C.unbind(M.L, K.CtrlShift), C.unbind(M.E, K.CtrlShift), C.unbind(M.R, K.CtrlShift), C.unbind(M.J, K.CtrlShift), ea && C.unbind(M.C, K.CtrlAlt), C.unbind(M.Z, K.Ctrl), C.unbind(M.Z, K.CtrlShift));
            V.setDefault(null);
            V.unbind(M.Enter, K.None)
        };
        this.getInputMemberId = function () {
            return a
        };
        this.getSession = function () {
            return l
        };
        this.getSessionConstraints = function () {
            return G
        };
        this.setUndoManager = function (a) {
            S && S.unsubscribe(gui.UndoManager.signalUndoStackChanged, s);
            if (S = a) S.setDocument(J), S.setPlaybackFunction(l.enqueue), S.subscribe(gui.UndoManager.signalUndoStackChanged, s)
        };
        this.getUndoManager = function () {
            return S
        };
        this.getMetadataController = function () {
            return ua
        };
        this.getAnnotationController = function () {
            return ga
        };
        this.getDirectFormattingController =
            function () {
                return da
            };
        this.getHyperlinkClickHandler = function () {
            return oa
        };
        this.getHyperlinkController = function () {
            return qa
        };
        this.getImageController = function () {
            return ma
        };
        this.getSelectionController = function () {
            return X
        };
        this.getTextController = function () {
            return ha
        };
        this.getEventManager = function () {
            return L
        };
        this.getKeyboardHandlers = function () {
            return {keydown: C, keypress: V}
        };
        this.destroy = function (a) {
            var b = [ja.destroy, fa.destroy, da.destroy, ka.destroy, L.destroy, oa.destroy, qa.destroy, ua.destroy, X.destroy,
                ha.destroy, Y];
            sa && b.unshift(sa.destroy);
            runtime.clearTimeout(aa);
            core.Async.destroyAll(b, a)
        };
        ja = core.Task.createRedrawTask(v);
        fa = core.Task.createRedrawTask(function () {
            var b = J.getCursor(a);
            if (b && b.getSelectionType() === ops.OdtCursor.RegionSelection && (b = D.getImageElements(b.getSelectedRange())[0])) {
                la.select(b.parentNode);
                return
            }
            la.clearSelection()
        });
        C.bind(M.Left, K.None, z(X.moveCursorToLeft));
        C.bind(M.Right, K.None, z(X.moveCursorToRight));
        C.bind(M.Up, K.None, z(X.moveCursorUp));
        C.bind(M.Down, K.None, z(X.moveCursorDown));
        C.bind(M.Left, K.Shift, z(X.extendSelectionToLeft));
        C.bind(M.Right, K.Shift, z(X.extendSelectionToRight));
        C.bind(M.Up, K.Shift, z(X.extendSelectionUp));
        C.bind(M.Down, K.Shift, z(X.extendSelectionDown));
        C.bind(M.Home, K.None, z(X.moveCursorToLineStart));
        C.bind(M.End, K.None, z(X.moveCursorToLineEnd));
        C.bind(M.Home, K.Ctrl, z(X.moveCursorToDocumentStart));
        C.bind(M.End, K.Ctrl, z(X.moveCursorToDocumentEnd));
        C.bind(M.Home, K.Shift, z(X.extendSelectionToLineStart));
        C.bind(M.End, K.Shift, z(X.extendSelectionToLineEnd));
        C.bind(M.Up,
            K.CtrlShift, z(X.extendSelectionToParagraphStart));
        C.bind(M.Down, K.CtrlShift, z(X.extendSelectionToParagraphEnd));
        C.bind(M.Home, K.CtrlShift, z(X.extendSelectionToDocumentStart));
        C.bind(M.End, K.CtrlShift, z(X.extendSelectionToDocumentEnd));
        ra ? (C.bind(M.Left, K.Alt, z(X.moveCursorBeforeWord)), C.bind(M.Right, K.Alt, z(X.moveCursorPastWord)), C.bind(M.Left, K.Meta, z(X.moveCursorToLineStart)), C.bind(M.Right, K.Meta, z(X.moveCursorToLineEnd)), C.bind(M.Home, K.Meta, z(X.moveCursorToDocumentStart)), C.bind(M.End, K.Meta,
                z(X.moveCursorToDocumentEnd)), C.bind(M.Left, K.AltShift, z(X.extendSelectionBeforeWord)), C.bind(M.Right, K.AltShift, z(X.extendSelectionPastWord)), C.bind(M.Left, K.MetaShift, z(X.extendSelectionToLineStart)), C.bind(M.Right, K.MetaShift, z(X.extendSelectionToLineEnd)), C.bind(M.Up, K.AltShift, z(X.extendSelectionToParagraphStart)), C.bind(M.Down, K.AltShift, z(X.extendSelectionToParagraphEnd)), C.bind(M.Up, K.MetaShift, z(X.extendSelectionToDocumentStart)), C.bind(M.Down, K.MetaShift, z(X.extendSelectionToDocumentEnd)),
                C.bind(M.A, K.Meta, z(X.extendSelectionToEntireDocument))) : (C.bind(M.Left, K.Ctrl, z(X.moveCursorBeforeWord)), C.bind(M.Right, K.Ctrl, z(X.moveCursorPastWord)), C.bind(M.Left, K.CtrlShift, z(X.extendSelectionBeforeWord)), C.bind(M.Right, K.CtrlShift, z(X.extendSelectionPastWord)), C.bind(M.A, K.Ctrl, z(X.extendSelectionToEntireDocument)));
        ta && (sa = new gui.IOSSafariSupport(L));
        L.subscribe("keydown", C.handleEvent);
        L.subscribe("keypress", V.handleEvent);
        L.subscribe("keyup", $.handleEvent);
        L.subscribe("copy", g);
        L.subscribe("mousedown",
            r);
        L.subscribe("mousemove", ja.trigger);
        L.subscribe("mouseup", I);
        L.subscribe("contextmenu", H);
        L.subscribe("dragstart", B);
        L.subscribe("dragend", E);
        L.subscribe("click", oa.handleClick);
        L.subscribe("longpress", A);
        L.subscribe("drag", t);
        L.subscribe("dragstop", y);
        J.subscribe(ops.OdtDocument.signalOperationEnd, fa.trigger);
        J.subscribe(ops.Document.signalCursorAdded, ka.registerCursor);
        J.subscribe(ops.Document.signalCursorRemoved, ka.removeCursor);
        J.subscribe(ops.OdtDocument.signalOperationEnd, e)
    }
})();
gui.CaretManager = function (f, l) {
    function a(a) {
        return k.hasOwnProperty(a) ? k[a] : null
    }

    function c() {
        return Object.keys(k).map(function (a) {
            return k[a]
        })
    }

    function b(a) {
        var b = k[a];
        b && (delete k[a], a === f.getInputMemberId() ? (p.unsubscribe(ops.OdtDocument.signalProcessingBatchEnd, b.ensureVisible), p.unsubscribe(ops.Document.signalCursorMoved, b.refreshCursorBlinking), n.unsubscribe("compositionupdate", b.handleUpdate), n.unsubscribe("compositionend", b.handleUpdate), n.unsubscribe("focus", b.setFocus), n.unsubscribe("blur",
                b.removeFocus), q.removeEventListener("focus", b.show, !1), q.removeEventListener("blur", b.hide, !1)) : p.unsubscribe(ops.OdtDocument.signalProcessingBatchEnd, b.handleUpdate), b.destroy(function () {
        }))
    }

    var k = {}, q = runtime.getWindow(), p = f.getSession().getOdtDocument(), n = f.getEventManager();
    this.registerCursor = function (a, b, d) {
        var e = a.getMemberId();
        a = new gui.Caret(a, l, b, d);
        k[e] = a;
        e === f.getInputMemberId() ? (runtime.log("Starting to track input on new cursor of " + e), p.subscribe(ops.OdtDocument.signalProcessingBatchEnd,
                a.ensureVisible), p.subscribe(ops.Document.signalCursorMoved, a.refreshCursorBlinking), n.subscribe("compositionupdate", a.handleUpdate), n.subscribe("compositionend", a.handleUpdate), n.subscribe("focus", a.setFocus), n.subscribe("blur", a.removeFocus), q.addEventListener("focus", a.show, !1), q.addEventListener("blur", a.hide, !1), a.setOverlayElement(n.getEventTrap())) : p.subscribe(ops.OdtDocument.signalProcessingBatchEnd, a.handleUpdate);
        return a
    };
    this.getCaret = a;
    this.getCarets = c;
    this.destroy = function (a) {
        var h =
            c().map(function (a) {
                return a.destroy
            });
        f.getSelectionController().setCaretXPositionLocator(null);
        p.unsubscribe(ops.Document.signalCursorRemoved, b);
        k = {};
        core.Async.destroyAll(h, a)
    };
    f.getSelectionController().setCaretXPositionLocator(function () {
        var b = a(f.getInputMemberId()), c;
        b && (c = b.getBoundingClientRect());
        return c ? c.right : void 0
    });
    p.subscribe(ops.Document.signalCursorRemoved, b)
};
gui.EditInfoHandle = function (f) {
    var l = [], a, c = f.ownerDocument, b = c.documentElement.namespaceURI;
    this.setEdits = function (f) {
        l = f;
        var q, p, n, g;
        core.DomUtils.removeAllChildNodes(a);
        for (f = 0; f < l.length; f += 1)q = c.createElementNS(b, "div"), q.className = "editInfo", p = c.createElementNS(b, "span"), p.className = "editInfoColor", p.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", l[f].memberid), n = c.createElementNS(b, "span"), n.className = "editInfoAuthor", n.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid",
            l[f].memberid), g = c.createElementNS(b, "span"), g.className = "editInfoTime", g.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", l[f].memberid), g.appendChild(c.createTextNode(l[f].time.toString())), q.appendChild(p), q.appendChild(n), q.appendChild(g), a.appendChild(q)
    };
    this.show = function () {
        a.style.display = "block"
    };
    this.hide = function () {
        a.style.display = "none"
    };
    this.destroy = function (b) {
        f.removeChild(a);
        b()
    };
    a = c.createElementNS(b, "div");
    a.setAttribute("class", "editInfoHandle");
    a.style.display = "none";
    f.appendChild(a)
};
ops.EditInfo = function (f, l) {
    function a() {
        var a = [], c;
        for (c in b)b.hasOwnProperty(c) && a.push({memberid: c, time: b[c].time});
        a.sort(function (a, b) {
            return a.time - b.time
        });
        return a
    }

    var c, b = {};
    this.getNode = function () {
        return c
    };
    this.getOdtDocument = function () {
        return l
    };
    this.getEdits = function () {
        return b
    };
    this.getSortedEdits = function () {
        return a()
    };
    this.addEdit = function (a, c) {
        b[a] = {time: c}
    };
    this.clearEdits = function () {
        b = {}
    };
    this.destroy = function (a) {
        f.parentNode && f.removeChild(c);
        a()
    };
    c = l.getDOMDocument().createElementNS("urn:webodf:names:editinfo",
        "editinfo");
    f.insertBefore(c, f.firstChild)
};
gui.EditInfoMarker = function (f, l) {
    function a(a, b) {
        return runtime.setTimeout(function () {
            q.style.opacity = a
        }, b)
    }

    var c = this, b, k, q, p, n, g;
    this.addEdit = function (b, d) {
        var e = Date.now() - d;
        f.addEdit(b, d);
        k.setEdits(f.getSortedEdits());
        q.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", b);
        runtime.clearTimeout(n);
        runtime.clearTimeout(g);
        1E4 > e ? (p = a(1, 0), n = a(0.5, 1E4 - e), g = a(0.2, 2E4 - e)) : 1E4 <= e && 2E4 > e ? (p = a(0.5, 0), g = a(0.2, 2E4 - e)) : p = a(0.2, 0)
    };
    this.getEdits = function () {
        return f.getEdits()
    };
    this.clearEdits =
        function () {
            f.clearEdits();
            k.setEdits([]);
            q.hasAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid") && q.removeAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid")
        };
    this.getEditInfo = function () {
        return f
    };
    this.show = function () {
        q.style.display = "block"
    };
    this.hide = function () {
        c.hideHandle();
        q.style.display = "none"
    };
    this.showHandle = function () {
        k.show()
    };
    this.hideHandle = function () {
        k.hide()
    };
    this.destroy = function (a) {
        runtime.clearTimeout(p);
        runtime.clearTimeout(n);
        runtime.clearTimeout(g);
        b.removeChild(q);
        k.destroy(function (b) {
            b ? a(b) : f.destroy(a)
        })
    };
    (function () {
        var a = f.getOdtDocument().getDOMDocument();
        q = a.createElementNS(a.documentElement.namespaceURI, "div");
        q.setAttribute("class", "editInfoMarker");
        q.onmouseover = function () {
            c.showHandle()
        };
        q.onmouseout = function () {
            c.hideHandle()
        };
        b = f.getNode();
        b.appendChild(q);
        k = new gui.EditInfoHandle(b);
        l || c.hide()
    })()
};
gui.HyperlinkTooltipView = function (f, l) {
    var a = core.DomUtils, c = odf.OdfUtils, b = runtime.getWindow(), k, q, p;
    runtime.assert(null !== b, "Expected to be run in an environment which has a global window, like a browser.");
    this.showTooltip = function (n) {
        var g = n.target || n.srcElement, h = f.getSizer(), d = f.getZoomLevel(), e;
        a:{
            for (; g;) {
                if (c.isHyperlink(g))break a;
                if (c.isParagraph(g) || c.isInlineRoot(g))break;
                g = g.parentNode
            }
            g = null
        }
        if (g) {
            a.containsNode(h, p) || h.appendChild(p);
            e = q;
            var s;
            switch (l()) {
                case gui.KeyboardHandler.Modifier.Ctrl:
                    s =
                        runtime.tr("Ctrl-click to follow link");
                    break;
                case gui.KeyboardHandler.Modifier.Meta:
                    s = runtime.tr("\u2318-click to follow link");
                    break;
                default:
                    s = ""
            }
            e.textContent = s;
            k.textContent = c.getHyperlinkTarget(g);
            p.style.display = "block";
            e = b.innerWidth - p.offsetWidth - 15;
            g = n.clientX > e ? e : n.clientX + 15;
            e = b.innerHeight - p.offsetHeight - 10;
            n = n.clientY > e ? e : n.clientY + 10;
            h = h.getBoundingClientRect();
            g = (g - h.left) / d;
            n = (n - h.top) / d;
            p.style.left = g + "px";
            p.style.top = n + "px"
        }
    };
    this.hideTooltip = function () {
        p.style.display = "none"
    };
    this.destroy =
        function (a) {
            p.parentNode && p.parentNode.removeChild(p);
            a()
        };
    (function () {
        var a = f.getElement().ownerDocument;
        k = a.createElement("span");
        q = a.createElement("span");
        k.className = "webodf-hyperlinkTooltipLink";
        q.className = "webodf-hyperlinkTooltipText";
        p = a.createElement("div");
        p.className = "webodf-hyperlinkTooltip";
        p.appendChild(k);
        p.appendChild(q);
        f.getElement().appendChild(p)
    })()
};
gui.OdfFieldView = function (f) {
    function l() {
        var a = odf.OdfSchema.getFields().map(function (a) {
            return a.replace(":", "|")
        }), c = a.join(",\n") + "\n{ background-color: #D0D0D0; }\n", a = a.map(function (a) {
                return a + ":empty::after"
            }).join(",\n") + "\n{ content:' '; white-space: pre; }\n";
        return c + "\n" + a
    }

    var a, c = f.getElement().ownerDocument;
    this.showFieldHighlight = function () {
        a.appendChild(c.createTextNode(l()))
    };
    this.hideFieldHighlight = function () {
        for (var b = a.sheet, c = b.cssRules; c.length;)b.deleteRule(c.length - 1)
    };
    this.destroy =
        function (b) {
            a.parentNode && a.parentNode.removeChild(a);
            b()
        };
    a = function () {
        var a = c.getElementsByTagName("head").item(0), f = c.createElement("style"), l = "";
        f.type = "text/css";
        f.media = "screen, print, handheld, projection";
        odf.Namespaces.forEachPrefix(function (a, b) {
            l += "@namespace " + a + " url(" + b + ");\n"
        });
        f.appendChild(c.createTextNode(l));
        a.appendChild(f);
        return f
    }()
};
gui.ShadowCursor = function (f) {
    var l = f.getDOMDocument().createRange(), a = !0;
    this.removeFromDocument = function () {
    };
    this.getMemberId = function () {
        return gui.ShadowCursor.ShadowCursorMemberId
    };
    this.getSelectedRange = function () {
        return l
    };
    this.setSelectedRange = function (c, b) {
        l = c;
        a = !1 !== b
    };
    this.hasForwardSelection = function () {
        return a
    };
    this.getDocument = function () {
        return f
    };
    this.getSelectionType = function () {
        return ops.OdtCursor.RangeSelection
    };
    l.setStart(f.getRootNode(), 0)
};
gui.ShadowCursor.ShadowCursorMemberId = "";
gui.SelectionView = function (f) {
};
gui.SelectionView.prototype.rerender = function () {
};
gui.SelectionView.prototype.show = function () {
};
gui.SelectionView.prototype.hide = function () {
};
gui.SelectionView.prototype.destroy = function (f) {
};
gui.SelectionViewManager = function (f) {
    function l() {
        return Object.keys(a).map(function (c) {
            return a[c]
        })
    }

    var a = {};
    this.getSelectionView = function (c) {
        return a.hasOwnProperty(c) ? a[c] : null
    };
    this.getSelectionViews = l;
    this.removeSelectionView = function (c) {
        a.hasOwnProperty(c) && (a[c].destroy(function () {
        }), delete a[c])
    };
    this.hideSelectionView = function (c) {
        a.hasOwnProperty(c) && a[c].hide()
    };
    this.showSelectionView = function (c) {
        a.hasOwnProperty(c) && a[c].show()
    };
    this.rerenderSelectionViews = function () {
        Object.keys(a).forEach(function (c) {
            a[c].rerender()
        })
    };
    this.registerCursor = function (c, b) {
        var k = c.getMemberId(), l = new f(c);
        b ? l.show() : l.hide();
        return a[k] = l
    };
    this.destroy = function (a) {
        function b(l, p) {
            p ? a(p) : l < f.length ? f[l].destroy(function (a) {
                        b(l + 1, a)
                    }) : a()
        }

        var f = l();
        b(0, void 0)
    }
};
gui.SessionViewOptions = function () {
    this.caretBlinksOnRangeSelect = this.caretAvatarsInitiallyVisible = this.editInfoMarkersInitiallyVisible = !0
};
(function () {
    gui.SessionView = function (f, l, a, c, b, k) {
        function q(a) {
            a.memberId === l && F.getViewport().scrollIntoView(a.annotation.getBoundingClientRect())
        }

        function p() {
            var a = document.getElementsByTagName("head").item(0), b = document.createElement("style");
            b.type = "text/css";
            b.media = "screen, print, handheld, projection";
            a.appendChild(b);
            return b
        }

        function n(a, b, d) {
            function e(b, d, c) {
                d = b + '[editinfo|memberid="' + a + '"]' + c + d;
                a:{
                    var f = v.firstChild;
                    for (b = b + '[editinfo|memberid="' + a + '"]' + c + "{"; f;) {
                        if (f.nodeType === Node.TEXT_NODE &&
                            0 === f.data.indexOf(b)) {
                            b = f;
                            break a
                        }
                        f = f.nextSibling
                    }
                    b = null
                }
                b ? b.data = d : v.appendChild(document.createTextNode(d))
            }

            e("div.editInfoMarker", "{ background-color: " + d + "; }", "");
            e("span.editInfoColor", "{ background-color: " + d + "; }", "");
            e("span.editInfoAuthor", '{ content: "' + b + '"; }', ":before");
            e("dc|creator", "{ background-color: " + d + "; }", "");
            e(".webodf-selectionOverlay", "{ fill: " + d + "; stroke: " + d + ";}", "");
            a === l && (e(".webodf-touchEnabled .webodf-selectionOverlay", "{ display: block; }", " > .webodf-draggable"),
                a = gui.ShadowCursor.ShadowCursorMemberId, e(".webodf-selectionOverlay", "{ fill: " + d + "; stroke: " + d + ";}", ""), e(".webodf-touchEnabled .webodf-selectionOverlay", "{ display: block; }", " > .webodf-draggable"))
        }

        function g(a) {
            var b, d;
            for (d in u)u.hasOwnProperty(d) && (b = u[d], a ? b.show() : b.hide())
        }

        function h(a) {
            b.getCarets().forEach(function (b) {
                a ? b.showHandle() : b.hideHandle()
            })
        }

        function d(a) {
            var b = a.getMemberId();
            a = a.getProperties();
            n(b, a.fullName, a.color)
        }

        function e(d) {
            var e = d.getMemberId(), c = a.getOdtDocument().getMember(e).getProperties();
            b.registerCursor(d, H, I);
            k.registerCursor(d, !0);
            if (d = b.getCaret(e)) d.setAvatarImageUrl(c.imageUrl), d.setColor(c.color);
            runtime.log("+++ View here +++ eagerly created an Caret for '" + e + "'! +++")
        }

        function s(a) {
            a = a.getMemberId();
            var d = k.getSelectionView(l), e = k.getSelectionView(gui.ShadowCursor.ShadowCursorMemberId), c = b.getCaret(l);
            a === l ? (e.hide(), d && d.show(), c && c.show()) : a === gui.ShadowCursor.ShadowCursorMemberId && (e.show(), d && d.hide(), c && c.hide())
        }

        function m(a) {
            k.removeSelectionView(a)
        }

        function x(b) {
            var d =
                b.paragraphElement, e = b.memberId;
            b = b.timeStamp;
            var c, f = "", g = d.getElementsByTagNameNS(w, "editinfo").item(0);
            g ? (f = g.getAttributeNS(w, "id"), c = u[f]) : (f = Math.random().toString(), c = new ops.EditInfo(d, a.getOdtDocument()), c = new gui.EditInfoMarker(c, E), g = d.getElementsByTagNameNS(w, "editinfo").item(0), g.setAttributeNS(w, "id", f), u[f] = c);
            c.addEdit(e, new Date(b));
            B.trigger()
        }

        function t() {
            var b;
            r.hasChildNodes() && core.DomUtils.removeAllChildNodes(r);
            !0 === c.getState(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN) &&
            (b = a.getOdtDocument().getMember(l)) && (b = b.getProperties().fullName, r.appendChild(document.createTextNode(".annotationWrapper:not([creator = '" + b + "']) .annotationRemoveButton { display: none; }")))
        }

        function y(a) {
            var b = Object.keys(u).map(function (a) {
                return u[a]
            });
            A.unsubscribe(ops.Document.signalMemberAdded, d);
            A.unsubscribe(ops.Document.signalMemberUpdated, d);
            A.unsubscribe(ops.Document.signalCursorAdded, e);
            A.unsubscribe(ops.Document.signalCursorRemoved, m);
            A.unsubscribe(ops.OdtDocument.signalParagraphChanged,
                x);
            A.unsubscribe(ops.Document.signalCursorMoved, s);
            A.unsubscribe(ops.OdtDocument.signalParagraphChanged, k.rerenderSelectionViews);
            A.unsubscribe(ops.OdtDocument.signalTableAdded, k.rerenderSelectionViews);
            A.unsubscribe(ops.OdtDocument.signalParagraphStyleModified, k.rerenderSelectionViews);
            c.unsubscribe(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN, t);
            A.unsubscribe(ops.Document.signalMemberAdded, t);
            A.unsubscribe(ops.Document.signalMemberUpdated, t);
            v.parentNode.removeChild(v);
            r.parentNode.removeChild(r);
            (function Y(d, e) {
                e ? a(e) : d < b.length ? b[d].destroy(function (a) {
                            Y(d + 1, a)
                        }) : a()
            })(0, void 0)
        }

        var v, r, w = "urn:webodf:names:editinfo", u = {}, A, F, B, E = void 0 !== f.editInfoMarkersInitiallyVisible ? Boolean(f.editInfoMarkersInitiallyVisible) : !0, H = void 0 !== f.caretAvatarsInitiallyVisible ? Boolean(f.caretAvatarsInitiallyVisible) : !0, I = void 0 !== f.caretBlinksOnRangeSelect ? Boolean(f.caretBlinksOnRangeSelect) : !0;
        this.showEditInfoMarkers = function () {
            E || (E = !0, g(E))
        };
        this.hideEditInfoMarkers = function () {
            E && (E = !1, g(E))
        };
        this.showCaretAvatars =
            function () {
                H || (H = !0, h(H))
            };
        this.hideCaretAvatars = function () {
            H && (H = !1, h(H))
        };
        this.getSession = function () {
            return a
        };
        this.getCaret = function (a) {
            return b.getCaret(a)
        };
        this.destroy = function (a) {
            var b = [B.destroy, y];
            A.unsubscribe(ops.OdtDocument.signalAnnotationAdded, q);
            core.Async.destroyAll(b, a)
        };
        A = a.getOdtDocument();
        F = A.getOdfCanvas();
        A.subscribe(ops.OdtDocument.signalAnnotationAdded, q);
        A.subscribe(ops.Document.signalMemberAdded, d);
        A.subscribe(ops.Document.signalMemberUpdated, d);
        A.subscribe(ops.Document.signalCursorAdded,
            e);
        A.subscribe(ops.Document.signalCursorRemoved, m);
        A.subscribe(ops.OdtDocument.signalParagraphChanged, x);
        A.subscribe(ops.Document.signalCursorMoved, s);
        A.subscribe(ops.OdtDocument.signalParagraphChanged, k.rerenderSelectionViews);
        A.subscribe(ops.OdtDocument.signalTableAdded, k.rerenderSelectionViews);
        A.subscribe(ops.OdtDocument.signalParagraphStyleModified, k.rerenderSelectionViews);
        c.subscribe(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN, t);
        A.subscribe(ops.Document.signalMemberAdded, t);
        A.subscribe(ops.Document.signalMemberUpdated,
            t);
        v = p();
        v.appendChild(document.createTextNode("@namespace editinfo url(urn:webodf:names:editinfo);"));
        v.appendChild(document.createTextNode("@namespace dc url(http://purl.org/dc/elements/1.1/);"));
        r = p();
        t();
        B = core.Task.createRedrawTask(function () {
            var a = F.getAnnotationViewManager();
            a && (a.rehighlightAnnotations(), A.fixCursorPositions())
        })
    }
})();
gui.SvgSelectionView = function (f) {
    function l() {
        var a = e.getRootNode();
        s !== a && (s = a, m = e.getCanvas().getSizer(), m.appendChild(t), t.setAttribute("class", "webodf-selectionOverlay"), v.setAttribute("class", "webodf-draggable"), r.setAttribute("class", "webodf-draggable"), v.setAttribute("end", "left"), r.setAttribute("end", "right"), v.setAttribute("r", 8), r.setAttribute("r", 8), t.appendChild(y), t.appendChild(v), t.appendChild(r))
    }

    function a(a) {
        a = a.getBoundingClientRect();
        return Boolean(a && 0 !== a.height)
    }

    function c(b) {
        var d =
            w.getTextElements(b, !0, !1), e = b.cloneRange(), c = b.cloneRange();
        b = b.cloneRange();
        if (!d.length)return null;
        var f;
        a:{
            f = 0;
            var g = d[f], h = e.startContainer === g ? e.startOffset : 0, m = h;
            e.setStart(g, h);
            for (e.setEnd(g, m); !a(e);) {
                if (g.nodeType === Node.ELEMENT_NODE && m < g.childNodes.length) m = g.childNodes.length; else if (g.nodeType === Node.TEXT_NODE && m < g.length) m += 1; else if (d[f]) g = d[f], f += 1, h = m = 0; else {
                    f = !1;
                    break a
                }
                e.setStart(g, h);
                e.setEnd(g, m)
            }
            f = !0
        }
        if (!f)return null;
        a:{
            f = d.length - 1;
            g = d[f];
            m = h = c.endContainer === g ? c.endOffset :
                g.nodeType === Node.TEXT_NODE ? g.length : g.childNodes.length;
            c.setStart(g, h);
            for (c.setEnd(g, m); !a(c);) {
                if (g.nodeType === Node.ELEMENT_NODE && 0 < h) h = 0; else if (g.nodeType === Node.TEXT_NODE && 0 < h) h -= 1; else if (d[f]) g = d[f], f -= 1, h = m = g.length || g.childNodes.length; else {
                    d = !1;
                    break a
                }
                c.setStart(g, h);
                c.setEnd(g, m)
            }
            d = !0
        }
        if (!d)return null;
        b.setStart(e.startContainer, e.startOffset);
        b.setEnd(c.endContainer, c.endOffset);
        return {firstRange: e, lastRange: c, fillerRange: b}
    }

    function b(a, b) {
        var d = {};
        d.top = Math.min(a.top, b.top);
        d.left =
            Math.min(a.left, b.left);
        d.right = Math.max(a.right, b.right);
        d.bottom = Math.max(a.bottom, b.bottom);
        d.width = d.right - d.left;
        d.height = d.bottom - d.top;
        return d
    }

    function k(a, d) {
        d && 0 < d.width && 0 < d.height && (a = a ? b(a, d) : d);
        return a
    }

    function q(a) {
        function b(a) {
            B.setUnfilteredPosition(a, 0);
            return t.acceptNode(a) === E && r.acceptPosition(B) === E ? E : H
        }

        function d(a) {
            var e = null;
            b(a) === E && (e = u.getBoundingClientRect(a));
            return e
        }

        var c = a.commonAncestorContainer, f = a.startContainer, g = a.endContainer, h = a.startOffset, m = a.endOffset,
            l, p, n = null, q, s = x.createRange(), r, t = new odf.OdfNodeFilter, v;
        if (f === c || g === c)return s = a.cloneRange(), n = s.getBoundingClientRect(), s.detach(), n;
        for (a = f; a.parentNode !== c;)a = a.parentNode;
        for (p = g; p.parentNode !== c;)p = p.parentNode;
        r = e.createRootFilter(f);
        for (c = a.nextSibling; c && c !== p;)q = d(c), n = k(n, q), c = c.nextSibling;
        if (w.isParagraph(a)) n = k(n, u.getBoundingClientRect(a)); else if (a.nodeType === Node.TEXT_NODE) c = a, s.setStart(c, h), s.setEnd(c, c === p ? m : c.length), q = s.getBoundingClientRect(), n = k(n, q); else for (v = x.createTreeWalker(a,
            NodeFilter.SHOW_TEXT, b, !1), c = v.currentNode = f; c && c !== g;)s.setStart(c, h), s.setEnd(c, c.length), q = s.getBoundingClientRect(), n = k(n, q), l = c, h = 0, c = v.nextNode();
        l || (l = f);
        if (w.isParagraph(p)) n = k(n, u.getBoundingClientRect(p)); else if (p.nodeType === Node.TEXT_NODE) c = p, s.setStart(c, c === a ? h : 0), s.setEnd(c, m), q = s.getBoundingClientRect(), n = k(n, q); else for (v = x.createTreeWalker(p, NodeFilter.SHOW_TEXT, b, !1), c = v.currentNode = g; c && c !== l;)if (s.setStart(c, 0), s.setEnd(c, m), q = s.getBoundingClientRect(), n = k(n, q), c = v.previousNode()) m =
            c.length;
        return n
    }

    function p(a, b) {
        var d = a.getBoundingClientRect(), e = {width: 0};
        e.top = d.top;
        e.bottom = d.bottom;
        e.height = d.height;
        e.left = e.right = b ? d.right : d.left;
        return e
    }

    function n() {
        var a = f.getSelectedRange(), d;
        if (d = F && f.getSelectionType() === ops.OdtCursor.RangeSelection && !a.collapsed) {
            l();
            var e = u.getBoundingClientRect(m), g = A.getZoomLevel(), a = c(a), h, k, n, s, x, w;
            if (a) {
                d = a.firstRange;
                h = a.lastRange;
                k = a.fillerRange;
                n = u.translateRect(p(d, !1), e, g);
                x = u.translateRect(p(h, !0), e, g);
                s = (s = q(k)) ? u.translateRect(s,
                        e, g) : b(n, x);
                w = s.left;
                s = n.left + Math.max(0, s.width - (n.left - s.left));
                e = Math.min(n.top, x.top);
                g = x.top + x.height;
                w = [{x: n.left, y: e + n.height}, {x: n.left, y: e}, {x: s, y: e}, {
                    x: s,
                    y: g - x.height
                }, {x: x.right, y: g - x.height}, {x: x.right, y: g}, {x: w, y: g}, {x: w, y: e + n.height}, {
                    x: n.left,
                    y: e + n.height
                }];
                s = "";
                var B;
                for (B = 0; B < w.length; B += 1)s += w[B].x + "," + w[B].y + " ";
                y.setAttribute("points", s);
                v.setAttribute("cx", n.left);
                v.setAttribute("cy", e + n.height / 2);
                r.setAttribute("cx", x.right);
                r.setAttribute("cy", g - x.height / 2);
                d.detach();
                h.detach();
                k.detach()
            }
            d = Boolean(a)
        }
        t.style.display = d ? "block" : "none"
    }

    function g(a) {
        F && a === f && I.trigger()
    }

    function h(a) {
        a = 8 / a;
        v.setAttribute("r", a);
        r.setAttribute("r", a)
    }

    function d(a) {
        m.removeChild(t);
        m.classList.remove("webodf-virtualSelections");
        f.getDocument().unsubscribe(ops.Document.signalCursorMoved, g);
        A.unsubscribe(gui.ZoomHelper.signalZoomChanged, h);
        a()
    }

    var e = f.getDocument(), s, m, x = e.getDOMDocument(), t = x.createElementNS("http://www.w3.org/2000/svg", "svg"), y = x.createElementNS("http://www.w3.org/2000/svg",
        "polygon"), v = x.createElementNS("http://www.w3.org/2000/svg", "circle"), r = x.createElementNS("http://www.w3.org/2000/svg", "circle"), w = odf.OdfUtils, u = core.DomUtils, A = e.getCanvas().getZoomHelper(), F = !0, B = f.getDocument().createPositionIterator(e.getRootNode()), E = NodeFilter.FILTER_ACCEPT, H = NodeFilter.FILTER_REJECT, I;
    this.rerender = function () {
        F && I.trigger()
    };
    this.show = function () {
        F = !0;
        I.trigger()
    };
    this.hide = function () {
        F = !1;
        I.trigger()
    };
    this.destroy = function (a) {
        core.Async.destroyAll([I.destroy, d], a)
    };
    (function () {
        var a =
            f.getMemberId();
        I = core.Task.createRedrawTask(n);
        l();
        t.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", a);
        m.classList.add("webodf-virtualSelections");
        f.getDocument().subscribe(ops.Document.signalCursorMoved, g);
        A.subscribe(gui.ZoomHelper.signalZoomChanged, h);
        h(A.getZoomLevel())
    })()
};
gui.UndoStateRules = function () {
    function f(a, c) {
        var f = a.length;
        this.previous = function () {
            for (f -= 1; 0 <= f; f -= 1)if (c(a[f]))return a[f];
            return null
        }
    }

    function l(a) {
        a = a.spec();
        var c;
        a.hasOwnProperty("position") && (c = a.position);
        return c
    }

    function a(a) {
        return a.isEdit
    }

    function c(a, c, f) {
        if (!f)return f = l(a) - l(c), 0 === f || 1 === Math.abs(f);
        a = l(a);
        c = l(c);
        f = l(f);
        return a - c === c - f
    }

    this.isEditOperation = a;
    this.isPartOfOperationSet = function (b, k) {
        var l = void 0 !== b.group, p;
        if (!b.isEdit || 0 === k.length)return !0;
        p = k[k.length - 1];
        if (l &&
            b.group === p.group)return !0;
        a:switch (b.spec().optype) {
            case "RemoveText":
            case "InsertText":
                p = !0;
                break a;
            default:
                p = !1
        }
        if (p && k.some(a)) {
            if (l) {
                var n;
                l = b.spec().optype;
                p = new f(k, a);
                var g = p.previous(), h = null, d, e;
                runtime.assert(Boolean(g), "No edit operations found in state");
                e = g.group;
                runtime.assert(void 0 !== e, "Operation has no group");
                for (d = 1; g && g.group === e;) {
                    if (l === g.spec().optype) {
                        n = g;
                        break
                    }
                    g = p.previous()
                }
                if (n) {
                    for (g = p.previous(); g;) {
                        if (g.group !== e) {
                            if (2 === d)break;
                            e = g.group;
                            d += 1
                        }
                        if (l === g.spec().optype) {
                            h =
                                g;
                            break
                        }
                        g = p.previous()
                    }
                    n = c(b, n, h)
                } else n = !1;
                return n
            }
            n = b.spec().optype;
            l = new f(k, a);
            p = l.previous();
            runtime.assert(Boolean(p), "No edit operations found in state");
            n = n === p.spec().optype ? c(b, p, l.previous()) : !1;
            return n
        }
        return !1
    }
};
(function () {
    function f(a, b) {
        this.mainId = void 0 !== a ? a : -1;
        this.subId = void 0 !== b ? b : -1
    }

    function l(c, b, k) {
        function l(a, b) {
            return a + (c.isEditOperation(b) ? 1 : 0)
        }

        var p, n, g;
        this.addOperation = function (a) {
            c.isEditOperation(a) && (g += 1);
            n.push(a)
        };
        this.isNextStateId = function (a) {
            return a.mainId === p && a.subId === g
        };
        this.getNextStateId = function () {
            return new f(p, g)
        };
        this.getOperations = function () {
            return n
        };
        p = a += 1;
        n = b || [];
        g = b && k ? b.reduce(l, 0) : 0
    }

    var a = 0;
    gui.TrivialUndoManager = function (a) {
        function b() {
            return !0 !== u.isNextStateId(w)
        }

        function k(a) {
            a = a.getOperations();
            0 < a.length && (H = !0, v(a), H = !1)
        }

        function q() {
            B.emit(gui.UndoManager.signalUndoStackChanged, {
                undoAvailable: s.hasUndoStates(),
                redoAvailable: s.hasRedoStates()
            })
        }

        function p(a) {
            var d = b();
            a !== d && B.emit(gui.UndoManager.signalDocumentModifiedChanged, d)
        }

        function n() {
            u !== y && u !== A[A.length - 1] && A.push(u)
        }

        function g(a) {
            var b = a.previousSibling || a.nextSibling;
            a.parentNode.removeChild(a);
            x.normalizeTextNodes(b)
        }

        function h(a) {
            return Object.keys(a).map(function (b) {
                return a[b]
            })
        }

        function d(a) {
            function b(a) {
                var g =
                    a.spec();
                if (c[g.memberid])switch (g.optype) {
                    case "AddCursor":
                        d[g.memberid] || (d[g.memberid] = a, delete c[g.memberid], f -= 1);
                        break;
                    case "MoveCursor":
                        e[g.memberid] || (e[g.memberid] = a)
                }
            }

            var d = {}, e = {}, c = {}, f, g;
            g = a.pop();
            r.getMemberIds().forEach(function (a) {
                c[a] = !0
            });
            for (f = Object.keys(c).length; g && 0 < f;)g = g.getOperations(), g.reverse(), g.forEach(b), g = a.pop();
            return new l(E, h(d).concat(h(e)))
        }

        function e() {
            var a = b(), e = t = r.cloneDocumentElement();
            x.getElementsByTagNameNS(e, m, "cursor").forEach(g);
            x.getElementsByTagNameNS(e,
                m, "anchor").forEach(g);
            n();
            u = y = d([y].concat(A));
            A.length = 0;
            F.length = 0;
            a || (w = u.getNextStateId());
            q();
            p(a)
        }

        var s = this, m = "urn:webodf:names:cursor", x = core.DomUtils, t, y, v, r, w, u, A = [], F = [], B = new core.EventNotifier([gui.UndoManager.signalUndoStackChanged, gui.UndoManager.signalUndoStateCreated, gui.UndoManager.signalUndoStateModified, gui.UndoManager.signalDocumentModifiedChanged, gui.TrivialUndoManager.signalDocumentRootReplaced]), E = a || new gui.UndoStateRules, H = !1;
        this.subscribe = function (a, b) {
            B.subscribe(a, b)
        };
        this.unsubscribe = function (a, b) {
            B.unsubscribe(a, b)
        };
        this.isDocumentModified = b;
        this.setDocumentModified = function (a) {
            b() !== a && (w = a ? new f : u.getNextStateId(), B.emit(gui.UndoManager.signalDocumentModifiedChanged, a))
        };
        this.hasUndoStates = function () {
            return 0 < A.length
        };
        this.hasRedoStates = function () {
            return 0 < F.length
        };
        this.setDocument = function (a) {
            r = a
        };
        this.purgeInitialState = function () {
            var a = b();
            A.length = 0;
            F.length = 0;
            u = y = new l(E);
            w = u.getNextStateId();
            t = null;
            q();
            p(a)
        };
        this.setInitialState = e;
        this.initialize = function () {
            t ||
            e()
        };
        this.setPlaybackFunction = function (a) {
            v = a
        };
        this.onOperationExecuted = function (a) {
            if (!H) {
                var d = b();
                E.isEditOperation(a) && (u === y || 0 < F.length) || !E.isPartOfOperationSet(a, u.getOperations()) ? (F.length = 0, n(), u = new l(E, [a], !0), A.push(u), B.emit(gui.UndoManager.signalUndoStateCreated, {operations: u.getOperations()}), q()) : (u.addOperation(a), B.emit(gui.UndoManager.signalUndoStateModified, {operations: u.getOperations()}));
                p(d)
            }
        };
        this.moveForward = function (a) {
            for (var d = 0, e = b(), c; a && F.length;)c = F.pop(), A.push(c),
                k(c), a -= 1, d += 1;
            d && (u = A[A.length - 1], q(), p(e));
            return d
        };
        this.moveBackward = function (a) {
            for (var d = 0, e = b(); a && A.length;)F.push(A.pop()), a -= 1, d += 1;
            d && (r.getMemberIds().forEach(function (a) {
                r.removeCursor(a)
            }), r.setDocumentElement(t.cloneNode(!0)), B.emit(gui.TrivialUndoManager.signalDocumentRootReplaced, {}), k(y), A.forEach(k), u = A[A.length - 1] || y, q(), p(e));
            return d
        };
        u = y = new l(E);
        w = u.getNextStateId()
    };
    gui.TrivialUndoManager.signalDocumentRootReplaced = "documentRootReplaced"
})();
odf.GraphicProperties = function (f, l, a) {
    var c = this, b = odf.Namespaces.stylens, k = odf.Namespaces.svgns;
    this.verticalPos = function () {
        return c.data.value("verticalPos")
    };
    this.verticalRel = function () {
        return c.data.value("verticalRel")
    };
    this.horizontalPos = function () {
        return c.data.value("horizontalPos")
    };
    this.horizontalRel = function () {
        return c.data.value("horizontalRel")
    };
    this.strokeWidth = function () {
        return c.data.value("strokeWidth")
    };
    c.data = new odf.LazyStyleProperties(void 0 === a ? void 0 : a.data, {
        verticalPos: function () {
            var a =
                f.getAttributeNS(b, "vertical-pos");
            return "" === a ? void 0 : a
        }, verticalRel: function () {
            var a = f.getAttributeNS(b, "vertical-rel");
            return "" === a ? void 0 : a
        }, horizontalPos: function () {
            var a = f.getAttributeNS(b, "horizontal-pos");
            return "" === a ? void 0 : a
        }, horizontalRel: function () {
            var a = f.getAttributeNS(b, "horizontal-rel");
            return "" === a ? void 0 : a
        }, strokeWidth: function () {
            var a = f.getAttributeNS(k, "stroke-width");
            return l.parseLength(a)
        }
    })
};
odf.ComputedGraphicProperties = function () {
    var f;
    this.setGraphicProperties = function (l) {
        f = l
    };
    this.verticalPos = function () {
        return f && f.verticalPos() || "from-top"
    };
    this.verticalRel = function () {
        return f && f.verticalRel() || "page"
    };
    this.horizontalPos = function () {
        return f && f.horizontalPos() || "from-left"
    };
    this.horizontalRel = function () {
        return f && f.horizontalRel() || "page"
    }
};
odf.PageLayoutProperties = function (f, l, a) {
    var c = this, b = odf.Namespaces.fons;
    this.pageHeight = function () {
        return c.data.value("pageHeight") || 1123
    };
    this.pageWidth = function () {
        return c.data.value("pageWidth") || 794
    };
    c.data = new odf.LazyStyleProperties(void 0 === a ? void 0 : a.data, {
        pageHeight: function () {
            var a;
            f && (a = f.getAttributeNS(b, "page-height"), a = l.parseLength(a));
            return a
        }, pageWidth: function () {
            var a;
            f && (a = f.getAttributeNS(b, "page-width"), a = l.parseLength(a));
            return a
        }
    })
};
odf.PageLayout = function (f, l, a) {
    var c = null;
    f && (c = l.getPropertiesElement("page-layout-properties", f));
    this.pageLayout = new odf.PageLayoutProperties(c, l, a && a.pageLayout)
};
odf.PageLayoutCache = function () {
};
odf.PageLayoutCache.prototype.getPageLayout = function (f) {
};
odf.PageLayoutCache.prototype.getDefaultPageLayout = function () {
};
odf.ParagraphProperties = function (f, l, a) {
    var c = this, b = odf.Namespaces.fons;
    this.marginTop = function () {
        return c.data.value("marginTop")
    };
    c.data = new odf.LazyStyleProperties(void 0 === a ? void 0 : a.data, {
        marginTop: function () {
            var c = f.getAttributeNS(b, "margin-top");
            return l.parsePositiveLengthOrPercent(c, "marginTop", a && a.data)
        }
    })
};
odf.ComputedParagraphProperties = function () {
    var f = {}, l = [];
    this.setStyleChain = function (a) {
        l = a;
        f = {}
    };
    this.marginTop = function () {
        var a, c;
        if (f.hasOwnProperty("marginTop")) a = f.marginTop; else {
            for (c = 0; void 0 === a && c < l.length; c += 1)a = l[c].marginTop();
            f.marginTop = a
        }
        return a || 0
    }
};
odf.TextProperties = function (f, l, a) {
    var c = this, b = odf.Namespaces.fons;
    this.fontSize = function () {
        return c.data.value("fontSize")
    };
    c.data = new odf.LazyStyleProperties(void 0 === a ? void 0 : a.data, {
        fontSize: function () {
            var c = f.getAttributeNS(b, "font-size");
            return l.parsePositiveLengthOrPercent(c, "fontSize", a && a.data)
        }
    })
};
odf.ComputedTextProperties = function () {
    var f = {}, l = [];
    this.setStyleChain = function (a) {
        l = a;
        f = {}
    };
    this.fontSize = function () {
        var a, c;
        if (f.hasOwnProperty("fontSize")) a = f.fontSize; else {
            for (c = 0; void 0 === a && c < l.length; c += 1)a = l[c].fontSize();
            f.fontSize = a
        }
        return a || 12
    }
};
odf.MasterPage = function (f, l) {
    var a;
    f ? (a = f.getAttributeNS(odf.Namespaces.stylens, "page-layout-name"), this.pageLayout = l.getPageLayout(a)) : this.pageLayout = l.getDefaultPageLayout()
};
odf.MasterPageCache = function () {
};
odf.MasterPageCache.prototype.getMasterPage = function (f) {
};
odf.StylePileEntry = function (f, l, a, c) {
    this.masterPage = function () {
        var b = f.getAttributeNS(odf.Namespaces.stylens, "master-page-name"), c = null;
        b && (c = a.getMasterPage(b));
        return c
    };
    (function (a) {
        var k = f.getAttributeNS(odf.Namespaces.stylens, "family"), q = null;
        if ("graphic" === k || "chart" === k) a.graphic = void 0 === c ? void 0 : c.graphic, q = l.getPropertiesElement("graphic-properties", f, q), null !== q && (a.graphic = new odf.GraphicProperties(q, l, a.graphic));
        if ("paragraph" === k || "table-cell" === k || "graphic" === k || "presentation" ===
            k || "chart" === k) a.paragraph = void 0 === c ? void 0 : c.paragraph, q = l.getPropertiesElement("paragraph-properties", f, q), null !== q && (a.paragraph = new odf.ParagraphProperties(q, l, a.paragraph));
        if ("text" === k || "paragraph" === k || "table-cell" === k || "graphic" === k || "presentation" === k || "chart" === k) a.text = void 0 === c ? void 0 : c.text, q = l.getPropertiesElement("text-properties", f, q), null !== q && (a.text = new odf.TextProperties(q, l, a.text))
    })(this)
};
odf.StylePile = function (f, l) {
    function a(a, b) {
        var e, k;
        a.hasAttributeNS(c, "parent-style-name") && (k = a.getAttributeNS(c, "parent-style-name"), -1 === b.indexOf(k) && (e = g(k, b)));
        return new odf.StylePileEntry(a, f, l, e)
    }

    var c = odf.Namespaces.stylens, b = {}, k = {}, q, p = {}, n = {}, g;
    g = function (c, d) {
        var e = p[c], f;
        !e && (f = b[c]) && (d.push(c), e = a(f, d), p[c] = e);
        return e
    };
    this.getStyle = function (c) {
        var d = n[c] || p[c], e, f = [];
        d || (e = k[c], e || (e = b[c]) && f.push(c), e && (d = a(e, f)));
        return d
    };
    this.addCommonStyle = function (a) {
        var d;
        a.hasAttributeNS(c,
            "name") && (d = a.getAttributeNS(c, "name"), b.hasOwnProperty(d) || (b[d] = a))
    };
    this.addAutomaticStyle = function (a) {
        var b;
        a.hasAttributeNS(c, "name") && (b = a.getAttributeNS(c, "name"), k.hasOwnProperty(b) || (k[b] = a))
    };
    this.setDefaultStyle = function (b) {
        void 0 === q && (q = a(b, []))
    };
    this.getDefaultStyle = function () {
        return q
    }
};
odf.ComputedGraphicStyle = function () {
    this.text = new odf.ComputedTextProperties;
    this.paragraph = new odf.ComputedParagraphProperties;
    this.graphic = new odf.ComputedGraphicProperties
};
odf.ComputedParagraphStyle = function () {
    this.text = new odf.ComputedTextProperties;
    this.paragraph = new odf.ComputedParagraphProperties
};
odf.ComputedTextStyle = function () {
    this.text = new odf.ComputedTextProperties
};
odf.StyleCache = function (f) {
    function l(a, b, d, e) {
        b = d.getAttributeNS(b, "class-names");
        var c;
        if (b)for (b = b.split(" "), c = 0; c < b.length; c += 1)if (d = b[c]) e.push(a), e.push(d)
    }

    function a(a, b) {
        var d = t.getStyleName("paragraph", a);
        void 0 !== d && (b.push("paragraph"), b.push(d));
        a.namespaceURI !== m || "h" !== a.localName && "p" !== a.localName || l("paragraph", m, a, b);
        return b
    }

    function c(a, b, d) {
        var e = [], c, f, g, h;
        for (c = 0; c < a.length; c += 2)g = a[c], h = a[c + 1], g = p[g], h = g.getStyle(h), void 0 !== h && (h = h[b], void 0 !== h && h !== f && (e.push(h), f = h));
        g = p[d];
        if (h = g.getDefaultStyle()) h = h[b], void 0 !== h && h !== f && e.push(h);
        return e
    }

    function b(d, e) {
        var c = t.getStyleName("text", d), g = d.parentNode;
        void 0 !== c && (e.push("text"), e.push(c));
        "span" === d.localName && d.namespaceURI === m && l("text", m, d, e);
        if (!g || g === f)return e;
        g.namespaceURI !== m || "p" !== g.localName && "h" !== g.localName ? b(g, e) : a(g, e);
        return e
    }

    function k(a) {
        a = a.getAttributeNS(x, "family");
        return p[a]
    }

    var q = this, p, n, g, h, d, e, s, m = odf.Namespaces.textns, x = odf.Namespaces.stylens, t = new odf.StyleInfo, y = new odf.StyleParseUtils,
        v, r, w, u, A, F;
    this.getComputedGraphicStyle = function (a) {
        var b = [];
        a = t.getStyleName("graphic", a);
        void 0 !== a && (b.push("graphic"), b.push(a));
        a = b.join("/");
        var d = h[a];
        runtime.assert(0 === b.length % 2, "Invalid style chain.");
        void 0 === d && (d = new odf.ComputedGraphicStyle, d.graphic.setGraphicProperties(c(b, "graphic", "graphic")[0]), d.text.setStyleChain(c(b, "text", "graphic")), d.paragraph.setStyleChain(c(b, "paragraph", "graphic")), h[a] = d);
        return d
    };
    this.getComputedParagraphStyle = function (b) {
        b = a(b, []);
        var d = b.join("/"),
            e = g[d];
        runtime.assert(0 === b.length % 2, "Invalid style chain.");
        void 0 === e && (e = new odf.ComputedParagraphStyle, e.text.setStyleChain(c(b, "text", "paragraph")), e.paragraph.setStyleChain(c(b, "paragraph", "paragraph")), g[d] = e);
        return e
    };
    this.getComputedTextStyle = function (a) {
        a = b(a, []);
        var d = a.join("/"), e = n[d];
        runtime.assert(0 === a.length % 2, "Invalid style chain.");
        void 0 === e && (e = new odf.ComputedTextStyle, e.text.setStyleChain(c(a, "text", "text")), n[d] = e);
        return e
    };
    this.getPageLayout = function (a) {
        var b = F[a];
        b || ((b =
            A[a]) ? (b = new odf.PageLayout(b, y, u), F[a] = b) : b = u);
        return b
    };
    this.getDefaultPageLayout = function () {
        return u
    };
    this.getMasterPage = function (a) {
        var b = r[a];
        void 0 === b && ((b = v[a]) ? (b = new odf.MasterPage(b, q), r[a] = b) : b = null);
        return b
    };
    this.getDefaultMasterPage = function () {
        return w
    };
    this.update = function () {
        var a, b, c = null, m = null;
        n = {};
        g = {};
        h = {};
        v = {};
        r = {};
        F = {};
        A = {};
        d = new odf.StylePile(y, q);
        e = new odf.StylePile(y, q);
        s = new odf.StylePile(y, q);
        p = {text: d, paragraph: e, graphic: s};
        for (a = f.styles.firstElementChild; a;)a.namespaceURI ===
        x && ((b = k(a)) ? "style" === a.localName ? b.addCommonStyle(a) : "default-style" === a.localName && b.setDefaultStyle(a) : "default-page-layout" === a.localName && (c = a)), a = a.nextElementSibling;
        u = new odf.PageLayout(c, y);
        for (a = f.automaticStyles.firstElementChild; a;)a.namespaceURI === x && ((b = k(a)) && "style" === a.localName ? b.addAutomaticStyle(a) : "page-layout" === a.localName && (A[a.getAttributeNS(x, "name")] = a)), a = a.nextElementSibling;
        for (a = f.masterStyles.firstElementChild; a;)a.namespaceURI === x && "master-page" === a.localName && (m =
            m || a, b = a, c = b.getAttributeNS(x, "name"), 0 < c.length && !v.hasOwnProperty(c) && (v[c] = b)), a = a.nextElementSibling;
        w = new odf.MasterPage(m, q)
    }
};
ops.OperationTransformMatrix = function () {
    function f(a) {
        a.position += a.length;
        a.length *= -1
    }

    function l(a) {
        var b = 0 > a.length;
        b && f(a);
        return b
    }

    function a(a, b) {
        function c(g) {
            a[g] === b && f.push(g)
        }

        var f = [];
        a && ["style:parent-style-name", "style:next-style-name"].forEach(c);
        return f
    }

    function c(a, b) {
        function c(f) {
            a[f] === b && delete a[f]
        }

        a && ["style:parent-style-name", "style:next-style-name"].forEach(c)
    }

    function b(a) {
        var e = {};
        Object.keys(a).forEach(function (c) {
            e[c] = "object" === typeof a[c] ? b(a[c]) : a[c]
        });
        return e
    }

    function k(a,
               b, c, f) {
        var g, h = !1, k = !1, l, n = [];
        f && f.attributes && (n = f.attributes.split(","));
        a && (c || 0 < n.length) && Object.keys(a).forEach(function (b) {
            var e = a[b], f;
            "object" !== typeof e && (c && (f = c[b]), void 0 !== f ? (delete a[b], k = !0, f === e && (delete c[b], h = !0)) : -1 !== n.indexOf(b) && (delete a[b], k = !0))
        });
        if (b && b.attributes && (c || 0 < n.length)) {
            l = b.attributes.split(",");
            for (f = 0; f < l.length; f += 1)if (g = l[f], c && void 0 !== c[g] || n && -1 !== n.indexOf(g)) l.splice(f, 1), f -= 1, k = !0;
            0 < l.length ? b.attributes = l.join(",") : delete b.attributes
        }
        return {
            majorChanged: h,
            minorChanged: k
        }
    }

    function q(a) {
        for (var b in a)if (a.hasOwnProperty(b))return !0;
        return !1
    }

    function p(a) {
        for (var b in a)if (a.hasOwnProperty(b) && ("attributes" !== b || 0 < a.attributes.length))return !0;
        return !1
    }

    function n(a, b, c, f, g) {
        var h = a ? a[g] : null, l = b ? b[g] : null, n = c ? c[g] : null, r = f ? f[g] : null, w;
        w = k(h, l, n, r);
        h && !q(h) && delete a[g];
        l && !p(l) && delete b[g];
        n && !q(n) && delete c[g];
        r && !p(r) && delete f[g];
        return w
    }

    function g(a, b) {
        return {opSpecsA: [a], opSpecsB: [b]}
    }

    var h;
    h = {
        AddCursor: {
            AddCursor: g,
            AddMember: g,
            AddStyle: g,
            ApplyDirectStyling: g,
            InsertText: g,
            MergeParagraph: g,
            MoveCursor: g,
            RemoveCursor: g,
            RemoveMember: g,
            RemoveStyle: g,
            RemoveText: g,
            SetParagraphStyle: g,
            SplitParagraph: g,
            UpdateMember: g,
            UpdateMetadata: g,
            UpdateParagraphStyle: g
        },
        AddMember: {
            AddStyle: g,
            ApplyDirectStyling: g,
            InsertText: g,
            MergeParagraph: g,
            MoveCursor: g,
            RemoveCursor: g,
            RemoveStyle: g,
            RemoveText: g,
            SetParagraphStyle: g,
            SplitParagraph: g,
            UpdateMetadata: g,
            UpdateParagraphStyle: g
        },
        AddStyle: {
            AddStyle: g,
            ApplyDirectStyling: g,
            InsertText: g,
            MergeParagraph: g,
            MoveCursor: g,
            RemoveCursor: g,
            RemoveMember: g,
            RemoveStyle: function (b, e) {
                var f, g = [b], h = [e];
                b.styleFamily === e.styleFamily && (f = a(b.setProperties, e.styleName), 0 < f.length && (f = {
                    optype: "UpdateParagraphStyle",
                    memberid: e.memberid,
                    timestamp: e.timestamp,
                    styleName: b.styleName,
                    removedProperties: {attributes: f.join(",")}
                }, h.unshift(f)), c(b.setProperties, e.styleName));
                return {opSpecsA: g, opSpecsB: h}
            },
            RemoveText: g,
            SetParagraphStyle: g,
            SplitParagraph: g,
            UpdateMember: g,
            UpdateMetadata: g,
            UpdateParagraphStyle: g
        },
        ApplyDirectStyling: {
            ApplyDirectStyling: function (a, e, c) {
                var f,
                    g, h, k, l, p, w, u;
                k = [a];
                h = [e];
                if (!(a.position + a.length <= e.position || a.position >= e.position + e.length)) {
                    f = c ? a : e;
                    g = c ? e : a;
                    if (a.position !== e.position || a.length !== e.length) p = b(f), w = b(g);
                    e = n(g.setProperties, null, f.setProperties, null, "style:text-properties");
                    if (e.majorChanged || e.minorChanged) h = [], a = [], k = f.position + f.length, l = g.position + g.length, g.position < f.position ? e.minorChanged && (u = b(w), u.length = f.position - g.position, a.push(u), g.position = f.position, g.length = l - g.position) : f.position < g.position && e.majorChanged &&
                        (u = b(p), u.length = g.position - f.position, h.push(u), f.position = g.position, f.length = k - f.position), l > k ? e.minorChanged && (p = w, p.position = k, p.length = l - k, a.push(p), g.length = k - g.position) : k > l && e.majorChanged && (p.position = l, p.length = k - l, h.push(p), f.length = l - f.position), f.setProperties && q(f.setProperties) && h.push(f), g.setProperties && q(g.setProperties) && a.push(g), c ? (k = h, h = a) : k = a
                }
                return {opSpecsA: k, opSpecsB: h}
            }, InsertText: function (a, b) {
                b.position <= a.position ? a.position += b.text.length : b.position <= a.position + a.length &&
                    (a.length += b.text.length);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, MergeParagraph: function (a, b) {
                var c = a.position, f = a.position + a.length;
                c >= b.sourceStartPosition && (c -= 1);
                f >= b.sourceStartPosition && (f -= 1);
                a.position = c;
                a.length = f - c;
                return {opSpecsA: [a], opSpecsB: [b]}
            }, MoveCursor: g, RemoveCursor: g, RemoveMember: g, RemoveStyle: g, RemoveText: function (a, b) {
                var c = a.position + a.length, f = b.position + b.length, g = [a], h = [b];
                f <= a.position ? a.position -= b.length : b.position < c && (a.position < b.position ? a.length = f < c ? a.length - b.length :
                            b.position - a.position : (a.position = b.position, f < c ? a.length = c - f : g = []));
                return {opSpecsA: g, opSpecsB: h}
            }, SetParagraphStyle: g, SplitParagraph: function (a, b) {
                b.position < a.position ? a.position += 1 : b.position < a.position + a.length && (a.length += 1);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, UpdateMember: g, UpdateMetadata: g, UpdateParagraphStyle: g
        },
        InsertText: {
            InsertText: function (a, b, c) {
                a.position < b.position ? b.position += a.text.length : a.position > b.position ? a.position += b.text.length : c ? b.position += a.text.length : a.position += b.text.length;
                return {opSpecsA: [a], opSpecsB: [b]}
            }, MergeParagraph: function (a, b) {
                a.position >= b.sourceStartPosition ? a.position -= 1 : (a.position < b.sourceStartPosition && (b.sourceStartPosition += a.text.length), a.position < b.destinationStartPosition && (b.destinationStartPosition += a.text.length));
                return {opSpecsA: [a], opSpecsB: [b]}
            }, MoveCursor: function (a, b) {
                var c = l(b);
                a.position < b.position ? b.position += a.text.length : a.position < b.position + b.length && (b.length += a.text.length);
                c && f(b);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, RemoveCursor: g,
            RemoveMember: g, RemoveStyle: g, RemoveText: function (a, b) {
                var c;
                c = b.position + b.length;
                var f = [a], g = [b];
                c <= a.position ? a.position -= b.length : a.position <= b.position ? b.position += a.text.length : (b.length = a.position - b.position, c = {
                            optype: "RemoveText",
                            memberid: b.memberid,
                            timestamp: b.timestamp,
                            position: a.position + a.text.length,
                            length: c - a.position
                        }, g.unshift(c), a.position = b.position);
                return {opSpecsA: f, opSpecsB: g}
            }, SetParagraphStyle: function (a, b) {
                b.position > a.position && (b.position += a.text.length);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            }, SplitParagraph: function (a, b) {
                a.position < b.sourceParagraphPosition && (b.sourceParagraphPosition += a.text.length);
                a.position <= b.position ? b.position += a.text.length : a.position += 1;
                return {opSpecsA: [a], opSpecsB: [b]}
            }, UpdateMember: g, UpdateMetadata: g, UpdateParagraphStyle: g
        },
        MergeParagraph: {
            MergeParagraph: function (a, b, c) {
                var f = [a], g = [b], h;
                a.destinationStartPosition === b.destinationStartPosition ? (f = [], g = [], a.moveCursor && (h = {
                        optype: "MoveCursor",
                        memberid: a.memberid,
                        timestamp: a.timestamp,
                        position: a.sourceStartPosition -
                        1
                    }, f.push(h)), b.moveCursor && (h = {
                        optype: "MoveCursor",
                        memberid: b.memberid,
                        timestamp: b.timestamp,
                        position: b.sourceStartPosition - 1
                    }, g.push(h)), a = c ? a : b, a = {
                        optype: "SetParagraphStyle",
                        memberid: a.memberid,
                        timestamp: a.timestamp,
                        position: a.destinationStartPosition,
                        styleName: a.paragraphStyleName
                    }, c ? f.push(a) : g.push(a)) : b.sourceStartPosition === a.destinationStartPosition ? (a.destinationStartPosition = b.destinationStartPosition, a.sourceStartPosition -= 1, a.paragraphStyleName = b.paragraphStyleName) : a.sourceStartPosition ===
                        b.destinationStartPosition ? (b.destinationStartPosition = a.destinationStartPosition, b.sourceStartPosition -= 1, b.paragraphStyleName = a.paragraphStyleName) : a.destinationStartPosition < b.destinationStartPosition ? (b.destinationStartPosition -= 1, b.sourceStartPosition -= 1) : (a.destinationStartPosition -= 1, a.sourceStartPosition -= 1);
                return {opSpecsA: f, opSpecsB: g}
            }, MoveCursor: function (a, b) {
                var c = b.position, f = b.position + b.length, g = Math.min(c, f), c = Math.max(c, f);
                g >= a.sourceStartPosition && (g -= 1);
                c >= a.sourceStartPosition &&
                (c -= 1);
                0 <= b.length ? (b.position = g, b.length = c - g) : (b.position = c, b.length = g - c);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, RemoveCursor: g, RemoveMember: g, RemoveStyle: g, RemoveText: function (a, b) {
                b.position >= a.sourceStartPosition ? b.position -= 1 : (b.position < a.destinationStartPosition && (a.destinationStartPosition -= b.length), b.position < a.sourceStartPosition && (a.sourceStartPosition -= b.length));
                return {opSpecsA: [a], opSpecsB: [b]}
            }, SetParagraphStyle: function (a, b) {
                var c = [a], f = [b];
                if (b.position > a.sourceStartPosition) b.position -=
                    1; else if (b.position === a.destinationStartPosition || b.position === a.sourceStartPosition) b.position = a.destinationStartPosition, a.paragraphStyleName = b.styleName;
                return {opSpecsA: c, opSpecsB: f}
            }, SplitParagraph: function (a, b) {
                var c, f = [a], g = [b];
                b.position < a.destinationStartPosition ? (a.destinationStartPosition += 1, a.sourceStartPosition += 1) : b.position >= a.destinationStartPosition && b.position < a.sourceStartPosition ? (b.paragraphStyleName = a.paragraphStyleName, c = {
                            optype: "SetParagraphStyle", memberid: a.memberid, timestamp: a.timestamp,
                            position: a.destinationStartPosition, styleName: a.paragraphStyleName
                        }, f.push(c), b.position === a.sourceStartPosition - 1 && a.moveCursor && (c = {
                            optype: "MoveCursor",
                            memberid: a.memberid,
                            timestamp: a.timestamp,
                            position: b.position,
                            length: 0
                        }, f.push(c)), a.destinationStartPosition = b.position + 1, a.sourceStartPosition += 1) : b.position >= a.sourceStartPosition && (b.position -= 1, b.sourceParagraphPosition -= 1);
                return {opSpecsA: f, opSpecsB: g}
            }, UpdateMember: g, UpdateMetadata: g, UpdateParagraphStyle: g
        },
        MoveCursor: {
            MoveCursor: g, RemoveCursor: function (a,
                                                   b) {
                return {opSpecsA: a.memberid === b.memberid ? [] : [a], opSpecsB: [b]}
            }, RemoveMember: g, RemoveStyle: g, RemoveText: function (a, b) {
                var c = l(a), g = a.position + a.length, h = b.position + b.length;
                h <= a.position ? a.position -= b.length : b.position < g && (a.position < b.position ? a.length = h < g ? a.length - b.length : b.position - a.position : (a.position = b.position, a.length = h < g ? g - h : 0));
                c && f(a);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, SetParagraphStyle: g, SplitParagraph: function (a, b) {
                var c = l(a);
                b.position < a.position ? a.position += 1 : b.position < a.position +
                    a.length && (a.length += 1);
                c && f(a);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, UpdateMember: g, UpdateMetadata: g, UpdateParagraphStyle: g
        },
        RemoveCursor: {
            RemoveCursor: function (a, b) {
                var c = a.memberid === b.memberid;
                return {opSpecsA: c ? [] : [a], opSpecsB: c ? [] : [b]}
            },
            RemoveMember: g,
            RemoveStyle: g,
            RemoveText: g,
            SetParagraphStyle: g,
            SplitParagraph: g,
            UpdateMember: g,
            UpdateMetadata: g,
            UpdateParagraphStyle: g
        },
        RemoveMember: {
            RemoveStyle: g,
            RemoveText: g,
            SetParagraphStyle: g,
            SplitParagraph: g,
            UpdateMetadata: g,
            UpdateParagraphStyle: g
        },
        RemoveStyle: {
            RemoveStyle: function (a,
                                   b) {
                var c = a.styleName === b.styleName && a.styleFamily === b.styleFamily;
                return {opSpecsA: c ? [] : [a], opSpecsB: c ? [] : [b]}
            }, RemoveText: g, SetParagraphStyle: function (a, b) {
                var c, f = [a], g = [b];
                "paragraph" === a.styleFamily && a.styleName === b.styleName && (c = {
                    optype: "SetParagraphStyle",
                    memberid: a.memberid,
                    timestamp: a.timestamp,
                    position: b.position,
                    styleName: ""
                }, f.unshift(c), b.styleName = "");
                return {opSpecsA: f, opSpecsB: g}
            }, SplitParagraph: g, UpdateMember: g, UpdateMetadata: g, UpdateParagraphStyle: function (b, e) {
                var f, g = [b], h = [e];
                "paragraph" ===
                b.styleFamily && (f = a(e.setProperties, b.styleName), 0 < f.length && (f = {
                    optype: "UpdateParagraphStyle",
                    memberid: b.memberid,
                    timestamp: b.timestamp,
                    styleName: e.styleName,
                    removedProperties: {attributes: f.join(",")}
                }, g.unshift(f)), b.styleName === e.styleName ? h = [] : c(e.setProperties, b.styleName));
                return {opSpecsA: g, opSpecsB: h}
            }
        },
        RemoveText: {
            RemoveText: function (a, b) {
                var c = a.position + a.length, f = b.position + b.length, g = [a], h = [b];
                f <= a.position ? a.position -= b.length : c <= b.position ? b.position -= a.length : b.position < c && (a.position <
                        b.position ? (a.length = f < c ? a.length - b.length : b.position - a.position, c < f ? (b.position = a.position, b.length = f - c) : h = []) : (c < f ? b.length -= a.length : b.position < a.position ? b.length = a.position - b.position : h = [], f < c ? (a.position = b.position, a.length = c - f) : g = []));
                return {opSpecsA: g, opSpecsB: h}
            }, SetParagraphStyle: function (a, b) {
                a.position < b.position && (b.position -= a.length);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, SplitParagraph: function (a, b) {
                var c = a.position + a.length, f = [a], g = [b];
                b.position <= a.position ? a.position += 1 : b.position <
                    c && (a.length = b.position - a.position, c = {
                        optype: "RemoveText",
                        memberid: a.memberid,
                        timestamp: a.timestamp,
                        position: b.position + 1,
                        length: c - b.position
                    }, f.unshift(c));
                a.position + a.length <= b.position ? b.position -= a.length : a.position < b.position && (b.position = a.position);
                a.position + a.length < b.sourceParagraphPosition && (b.sourceParagraphPosition -= a.length);
                return {opSpecsA: f, opSpecsB: g}
            }, UpdateMember: g, UpdateMetadata: g, UpdateParagraphStyle: g
        },
        SetParagraphStyle: {
            SetParagraphStyle: function (a, b, c) {
                a.position === b.position &&
                (c ? b.styleName = a.styleName : a.styleName = b.styleName);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, SplitParagraph: function (a, c) {
                var f = [a], g = [c], h;
                a.position > c.position ? a.position += 1 : a.position === c.sourceParagraphPosition && (c.paragraphStyleName = a.styleName, h = b(a), h.position = c.position + 1, f.push(h));
                return {opSpecsA: f, opSpecsB: g}
            }, UpdateMember: g, UpdateMetadata: g, UpdateParagraphStyle: g
        },
        SplitParagraph: {
            SplitParagraph: function (a, b, c) {
                var f, g;
                a.position < b.position ? f = !0 : b.position < a.position ? g = !0 : a.position === b.position &&
                        (c ? f = !0 : g = !0);
                f ? (b.position += 1, b.sourceParagraphPosition = a.position < b.sourceParagraphPosition ? b.sourceParagraphPosition + 1 : a.position + 1) : g && (a.position += 1, a.sourceParagraphPosition = b.position < b.sourceParagraphPosition ? a.sourceParagraphPosition + 1 : b.position + 1);
                return {opSpecsA: [a], opSpecsB: [b]}
            }, UpdateMember: g, UpdateMetadata: g, UpdateParagraphStyle: g
        },
        UpdateMember: {UpdateMetadata: g, UpdateParagraphStyle: g},
        UpdateMetadata: {
            UpdateMetadata: function (a, b, c) {
                var f, g = [a], h = [b];
                f = c ? a : b;
                a = c ? b : a;
                k(a.setProperties ||
                    null, a.removedProperties || null, f.setProperties || null, f.removedProperties || null);
                f.setProperties && q(f.setProperties) || f.removedProperties && p(f.removedProperties) || (c ? g = [] : h = []);
                a.setProperties && q(a.setProperties) || a.removedProperties && p(a.removedProperties) || (c ? h = [] : g = []);
                return {opSpecsA: g, opSpecsB: h}
            }, UpdateParagraphStyle: g
        },
        UpdateParagraphStyle: {
            UpdateParagraphStyle: function (a, b, c) {
                var f, g = [a], h = [b];
                a.styleName === b.styleName && (f = c ? a : b, a = c ? b : a, n(a.setProperties, a.removedProperties, f.setProperties,
                    f.removedProperties, "style:paragraph-properties"), n(a.setProperties, a.removedProperties, f.setProperties, f.removedProperties, "style:text-properties"), k(a.setProperties || null, a.removedProperties || null, f.setProperties || null, f.removedProperties || null), f.setProperties && q(f.setProperties) || f.removedProperties && p(f.removedProperties) || (c ? g = [] : h = []), a.setProperties && q(a.setProperties) || a.removedProperties && p(a.removedProperties) || (c ? h = [] : g = []));
                return {opSpecsA: g, opSpecsB: h}
            }
        }
    };
    this.passUnchanged = g;
    this.extendTransformations =
        function (a) {
            Object.keys(a).forEach(function (b) {
                var c = a[b], f, g = h.hasOwnProperty(b);
                runtime.log((g ? "Extending" : "Adding") + " map for optypeA: " + b);
                g || (h[b] = {});
                f = h[b];
                Object.keys(c).forEach(function (a) {
                    var d = f.hasOwnProperty(a);
                    runtime.assert(b <= a, "Wrong order:" + b + ", " + a);
                    runtime.log("  " + (d ? "Overwriting" : "Adding") + " entry for optypeB: " + a);
                    f[a] = c[a]
                })
            })
        };
    this.transformOpspecVsOpspec = function (a, b) {
        var c = a.optype <= b.optype, f;
        runtime.log("Crosstransforming:");
        runtime.log(runtime.toJson(a));
        runtime.log(runtime.toJson(b));
        c || (f = a, a = b, b = f);
        (f = (f = h[a.optype]) && f[b.optype]) ? (f = f(a, b, !c), c || null === f || (f = {
                opSpecsA: f.opSpecsB,
                opSpecsB: f.opSpecsA
            })) : f = null;
        runtime.log("result:");
        f ? (runtime.log(runtime.toJson(f.opSpecsA)), runtime.log(runtime.toJson(f.opSpecsB))) : runtime.log("null");
        return f
    }
};
ops.OperationTransformer = function () {
    function f(a, c) {
        for (var b, k, q = [], p = []; 0 < a.length && c;) {
            b = a.shift();
            b = l.transformOpspecVsOpspec(b, c);
            if (!b)return null;
            q = q.concat(b.opSpecsA);
            if (0 === b.opSpecsB.length) {
                q = q.concat(a);
                c = null;
                break
            }
            for (; 1 < b.opSpecsB.length;) {
                k = f(a, b.opSpecsB.shift());
                if (!k)return null;
                p = p.concat(k.opSpecsB);
                a = k.opSpecsA
            }
            c = b.opSpecsB.pop()
        }
        c && p.push(c);
        return {opSpecsA: q, opSpecsB: p}
    }

    var l = new ops.OperationTransformMatrix;
    this.getOperationTransformMatrix = function () {
        return l
    };
    this.transform =
        function (a, c) {
            for (var b, k = []; 0 < c.length;) {
                b = f(a, c.shift());
                if (!b)return null;
                a = b.opSpecsA;
                k = k.concat(b.opSpecsB)
            }
            return {opSpecsA: a, opSpecsB: k}
        }
};
var webodf_css = '@namespace draw url(urn:oasis:names:tc:opendocument:xmlns:drawing:1.0);@namespace fo url(urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0);@namespace office url(urn:oasis:names:tc:opendocument:xmlns:office:1.0);@namespace presentation url(urn:oasis:names:tc:opendocument:xmlns:presentation:1.0);@namespace style url(urn:oasis:names:tc:opendocument:xmlns:style:1.0);@namespace svg url(urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0);@namespace table url(urn:oasis:names:tc:opendocument:xmlns:table:1.0);@namespace text url(urn:oasis:names:tc:opendocument:xmlns:text:1.0);@namespace webodfhelper url(urn:webodf:names:helper);@namespace cursor url(urn:webodf:names:cursor);@namespace editinfo url(urn:webodf:names:editinfo);@namespace annotation url(urn:webodf:names:annotation);@namespace dc url(http://purl.org/dc/elements/1.1/);@namespace svgns url(http://www.w3.org/2000/svg);office|document > *, office|document-content > * {display: none;}office|body, office|document {display: inline-block;position: relative;}text|p, text|h {display: block;padding: 0;margin: 0;line-height: normal;position: relative;}text|p::after, text|h::after {content: "\\200B";white-space: pre;}*[webodfhelper|containsparagraphanchor] {position: relative;}text|s {white-space: pre;}text|tab {display: inline;white-space: pre;}text|tracked-changes {display: none;}office|binary-data {display: none;}office|text {display: block;text-align: left;overflow: visible;word-wrap: break-word;}office|text::selection {background: transparent;}.webodf-virtualSelections *::selection {background: transparent;}.webodf-virtualSelections *::-moz-selection {background: transparent;}office|text * draw|text-box {display: block;border: 1px solid #d3d3d3;}office|text draw|frame {z-index: 1;}office|spreadsheet {display: block;border-collapse: collapse;empty-cells: show;font-family: sans-serif;font-size: 10pt;text-align: left;page-break-inside: avoid;overflow: hidden;}office|presentation {display: inline-block;text-align: left;}#shadowContent {display: inline-block;text-align: left;}draw|page {display: block;position: relative;overflow: hidden;}presentation|notes, presentation|footer-decl, presentation|date-time-decl {display: none;}@media print {draw|page {border: 1pt solid black;page-break-inside: avoid;}presentation|notes {}}office|spreadsheet text|p {border: 0px;padding: 1px;margin: 0px;}office|spreadsheet table|table {margin: 3px;}office|spreadsheet table|table:after {}office|spreadsheet table|table-row {counter-increment: row;}office|spreadsheet table|table-row:before {width: 3em;background: #cccccc;border: 1px solid black;text-align: center;content: counter(row);display: table-cell;}office|spreadsheet table|table-cell {border: 1px solid #cccccc;}table|table {display: table;}draw|frame table|table {width: 100%;height: 100%;background: white;}table|table-header-rows {display: table-header-group;}table|table-row {display: table-row;}table|table-column {display: table-column;}table|table-cell {width: 0.889in;display: table-cell;word-break: break-all;}draw|frame {display: block;}draw|image {display: block;width: 100%;height: 100%;top: 0px;left: 0px;background-repeat: no-repeat;background-size: 100% 100%;-moz-background-size: 100% 100%;}draw|frame > draw|image:nth-of-type(n+2) {display: none;}text|list:before {display: none;content:"";}text|list {display: block;}text|list-item {display: block;}text|number {display:none;}text|a {color: blue;text-decoration: underline;cursor: pointer;}.webodf-inactiveLinks text|a {cursor: text;}text|note-citation {vertical-align: super;font-size: smaller;}text|note-body {display: none;}text|note:hover text|note-citation {background: #dddddd;}text|note:hover text|note-body {display: block;left:1em;max-width: 80%;position: absolute;background: #ffffaa;}text|bibliography-source {display: none;}svg|title, svg|desc {display: none;}video {width: 100%;height: 100%}cursor|anchor {display: none;}cursor|cursor {display: none;}.webodf-caretOverlay {position: absolute;top: 5%;height: 1em;z-index: 10;padding-left: 1px;pointer-events: none;}.webodf-caretOverlay .caret {position: absolute;border-left: 2px solid black;top: 0;bottom: 0;right: 0;}.webodf-caretOverlay .handle {position: absolute;margin-top: 5px;padding-top: 3px;margin-left: auto;margin-right: auto;width: 64px;height: 68px;border-radius: 5px;opacity: 0.3;text-align: center;background-color: black;box-shadow: 0px 0px 5px rgb(90, 90, 90);border: 1px solid black;top: -85px;right: -32px;}.webodf-caretOverlay .handle > img {box-shadow: 0px 0px 5px rgb(90, 90, 90) inset;background-color: rgb(200, 200, 200);border-radius: 5px;border: 2px solid;height: 60px;width: 60px;display: block;margin: auto;}.webodf-caretOverlay .handle.active {opacity: 0.8;}.webodf-caretOverlay .handle:after {content: " ";position: absolute;width: 0px;height: 0px;border-style: solid;border-width: 8.7px 5px 0 5px;border-color: black transparent transparent transparent;top: 100%;left: 43%;}.webodf-caretSizer {display: inline-block;width: 0;visibility: hidden;}#eventTrap {display: block;position: absolute;bottom: 0;left: 0;outline: none;opacity: 0;color: rgba(255, 255, 255, 0);pointer-events: none;white-space: pre;overflow: hidden;}cursor|cursor > #composer {text-decoration: underline;}cursor|cursor[cursor|caret-sizer-active="true"],cursor|cursor[cursor|composing="true"] {display: inline;}editinfo|editinfo {display: inline-block;}.editInfoMarker {position: absolute;width: 10px;height: 100%;left: -20px;opacity: 0.8;top: 0;border-radius: 5px;background-color: transparent;box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);}.editInfoMarker:hover {box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);}.editInfoHandle {position: absolute;background-color: black;padding: 5px;border-radius: 5px;opacity: 0.8;box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);bottom: 100%;margin-bottom: 10px;z-index: 3;left: -25px;}.editInfoHandle:after {content: " ";position: absolute;width: 0px;height: 0px;border-style: solid;border-width: 8.7px 5px 0 5px;border-color: black transparent transparent transparent;top: 100%;left: 5px;}.editInfo {font-family: sans-serif;font-weight: normal;font-style: normal;text-decoration: none;color: white;width: 100%;height: 12pt;}.editInfoColor {float: left;width: 10pt;height: 10pt;border: 1px solid white;}.editInfoAuthor {float: left;margin-left: 5pt;font-size: 10pt;text-align: left;height: 12pt;line-height: 12pt;}.editInfoTime {float: right;margin-left: 30pt;font-size: 8pt;font-style: italic;color: yellow;height: 12pt;line-height: 12pt;}.annotationWrapper {display: inline;position: relative;}.annotationRemoveButton:before {content: "\u00d7";color: white;padding: 5px;line-height: 1em;}.annotationRemoveButton {width: 20px;height: 20px;border-radius: 10px;background-color: black;box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);position: absolute;top: -10px;left: -10px;z-index: 3;text-align: center;font-family: sans-serif;font-style: normal;font-weight: normal;text-decoration: none;font-size: 15px;}.annotationRemoveButton:hover {cursor: pointer;box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);}.annotationNote {width: 4cm;position: absolute;display: inline;z-index: 10;top: 0;}.annotationNote > office|annotation {display: block;text-align: left;}.annotationConnector {position: absolute;display: inline;top: 0;z-index: 2;border-top: 1px dashed brown;}.annotationConnector.angular {-moz-transform-origin: left top;-webkit-transform-origin: left top;-ms-transform-origin: left top;transform-origin: left top;}.annotationConnector.horizontal {left: 0;}.annotationConnector.horizontal:before {content: "";display: inline;position: absolute;width: 0px;height: 0px;border-style: solid;border-width: 8.7px 5px 0 5px;border-color: brown transparent transparent transparent;top: -1px;left: -5px;}office|annotation {width: 100%;height: 100%;display: none;background: rgb(198, 238, 184);background: -moz-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);background: -webkit-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);background: -o-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);background: -ms-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);background: linear-gradient(180deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);box-shadow: 0 3px 4px -3px #ccc;}office|annotation > dc|creator {display: block;font-size: 10pt;font-weight: normal;font-style: normal;font-family: sans-serif;color: white;background-color: brown;padding: 4px;}office|annotation > dc|date {display: block;font-size: 10pt;font-weight: normal;font-style: normal;font-family: sans-serif;border: 4px solid transparent;color: black;}office|annotation > text|list {display: block;padding: 5px;}office|annotation text|p {font-size: 10pt;color: black;font-weight: normal;font-style: normal;text-decoration: none;font-family: sans-serif;}#annotationsPane {background-color: #EAEAEA;width: 4cm;height: 100%;display: none;position: absolute;outline: 1px solid #ccc;}.webodf-annotationHighlight {background-color: yellow;position: relative;}.webodf-selectionOverlay {position: absolute;pointer-events: none;top: 0;left: 0;top: 0;left: 0;width: 100%;height: 100%;z-index: 15;}.webodf-selectionOverlay > polygon {fill-opacity: 0.3;stroke-opacity: 0.8;stroke-width: 1;fill-rule: evenodd;}.webodf-selectionOverlay > .webodf-draggable {fill-opacity: 0.8;stroke-opacity: 0;stroke-width: 8;pointer-events: all;display: none;-moz-transform-origin: center center;-webkit-transform-origin: center center;-ms-transform-origin: center center;transform-origin: center center;}#imageSelector {display: none;position: absolute;border-style: solid;border-color: black;}#imageSelector > div {width: 5px;height: 5px;display: block;position: absolute;border: 1px solid black;background-color: #ffffff;}#imageSelector > .topLeft {top: -4px;left: -4px;}#imageSelector > .topRight {top: -4px;right: -4px;}#imageSelector > .bottomRight {right: -4px;bottom: -4px;}#imageSelector > .bottomLeft {bottom: -4px;left: -4px;}#imageSelector > .topMiddle {top: -4px;left: 50%;margin-left: -2.5px;}#imageSelector > .rightMiddle {top: 50%;right: -4px;margin-top: -2.5px;}#imageSelector > .bottomMiddle {bottom: -4px;left: 50%;margin-left: -2.5px;}#imageSelector > .leftMiddle {top: 50%;left: -4px;margin-top: -2.5px;}div.webodf-customScrollbars::-webkit-scrollbar{width: 8px;height: 8px;background-color: transparent;}div.webodf-customScrollbars::-webkit-scrollbar-track{background-color: transparent;}div.webodf-customScrollbars::-webkit-scrollbar-thumb{background-color: #444;border-radius: 4px;}.webodf-hyperlinkTooltip {display: none;color: white;background-color: black;border-radius: 5px;box-shadow: 2px 2px 5px gray;padding: 3px;position: absolute;max-width: 210px;text-align: left;word-break: break-all;z-index: 16;}.webodf-hyperlinkTooltipText {display: block;font-weight: bold;}';