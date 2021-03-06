/* zuck.js - https://github.com/ramon82/zuck.js - MIT License */
"use strict";
(function(b) {
    "use strict";
    var c = function() {
        var f = window,
            g = function(j, k) {
                var l = document,
                    m = this;
                "string" == typeof j && (j = l.getElementById(j));
                var n = function(R) {
                        return l.querySelectorAll(R)[0]
                    },
                    o = function(R, S) {
                        return R ? R[S] || "" : ""
                    },
                    p = function(R, S) {
                        if (R)
                            for (var T = R.length, U = 0; U < T; U++) S(U, R[U])
                    },
                    q = function(R, S, T) {
                        var U = [S.toLowerCase(), "webkit" + S, "MS" + S, "o" + S];
                        p(U, function(V, W) {
                            R[W] = T
                        })
                    },
                    r = function(R, S, T) {
                        var U = [T.toLowerCase(), "webkit" + T, "MS" + T, "o" + T];
                        p(U, function(W, X) {
                            R.addEventListener(X, S, !1)
                        })
                    },
                    s = function(R, S) {
                        r(R, S, "AnimationEnd")
                    },
                    t = function(R, S) {
                        R.transitionEndEvent || (R.transitionEndEvent = !0, r(R, S, "TransitionEnd"))
                    },
                    u = function(R, S) {
                        R.firstChild ? R.insertBefore(S, R.firstChild) : R.appendChild(S)
                    },
                    x = function(R, S) {
                        var T = "RequestFullScreen",
                            U = "requestFullScreen";
                        if (S) document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
                        else try {
                            R[U] ? R[U]() : R["ms" + T] ? R["ms" + T]() : R["moz" + T] ? R["moz" + T]() : R["webkit" + T] && R["webkit" + T]()
                        } catch (V) {}
                    },
                    y = function(R, S, T, U) {
                        var V = 0 < S ? 1 : -1,
                            W = 90 * (Math.abs(S) / n("#zuck-modal").offsetWidth) * V;
                        if (D("cubeEffect")) {
                            var X = 0 == W ? "scale(0.95)" : "scale(0.930,0.930)";
                            if (q(n("#zuck-modal-content").style, "Transform", X), -90 > W || 90 < W) return !1
                        }
                        var Y = D("cubeEffect") ? "rotateY(" + W + "deg)" : "translate3d(" + S + "px, 0, 0)";
                        R && (q(R.style, "TransitionTimingFunction", U), q(R.style, "TransitionDuration", T + "ms"), q(R.style, "Transform", Y))
                    },
                    z = function(R, S, T, U) {
                        var V = 0,
                            W = 0;
                        if (R) {
                            if (R.offsetParent)
                                do
                                    if (V += R.offsetLeft, W += R.offsetTop, R == U) break; while (R = R.offsetParent);
                            S && (W -= S), T && (V -= T)
                        }
                        return [V, W]
                    },
                    A = function(R) {
                        R = 1e3 * +R;
                        var S = new Date(R),
                            T = S.getTime(),
                            U = (new Date().getTime() - T) / 1e3,
                            V = D("language", "time"),
                            W = [
                                [60, " " + V.seconds, 1],
                                [120, "1 " + V.minute, ""],
                                [3600, " " + V.minutes, 60],
                                [7200, "1 " + V.hour, ""],
                                [86400, " " + V.hours, 3600],
                                [172800, " " + V.yesterday, ""],
                                [604800, " " + V.days, 86400]
                            ],
                            X = 1;
                        0 > U && (U = Math.abs(U), X = 2);
                        for (var Z, Y = 0; Z = W[Y++];)
                            if (U < Z[0]) return "string" == typeof Z[2] ? Z[X] : Math.floor(U / Z[2]) + Z[1];
                        var $ = S.getDate(),
                            _ = S.getMonth(),
                            aa = S.getFullYear();
                        return $ + "/" + (_ + 1) + "/" + aa
                    },
                    B = j.id,
                    C = {
                        skin: "snapgram",
                        avatars: !0,
                        stories: [],
                        backButton: !0,
                        backNative: !1,
                        previousTap: !0,
                        autoFullScreen: !1,
                        openEffect: !0,
                        cubeEffect: !1,
                        list: !1,
                        localStorage: !0,
                        callbacks: {
                            onOpen: function(R, S) {
                                S()
                            },
                            onView: function() {},
                            onEnd: function(R, S) {
                                S()
                            },
                            onClose: function(R, S) {
                                S()
                            },
                            onNextItem: function(R, S, T) {
                                T()
                            },
                            onNavigateItem: function(R, S, T) {
                                T()
                            }
                        },
                        language: {
                            unmute: "Touch to unmute",
                            keyboardTip: "Press space to see next",
                            visitLink: "Visit link",
                            time: {
                                ago: "ago",
                                hour: "hour ago",
                                hours: "hours ago",
                                minute: "minute ago",
                                minutes: "minutes ago",
                                fromnow: "from now",
                                seconds: "seconds ago",
                                yesterday: "yesterday",
                                tomorrow: "tomorrow",
                                days: "days ago"
                            }
                        }
                    },
                    D = function(R, S) {
                        var T = function(V) {
                            return "undefined" != typeof V
                        };
                        return S ? T(k[R]) ? T(k[R][S]) ? k[R][S] : C[R][S] : C[R][S] : T(k[R]) ? k[R] : C[R]
                    },
                    F = new function() {
                        var S = n("#zuck-modal");
                        S || f.Zuck.hasModal || (f.Zuck.hasModal = !0, S = l.createElement("div"), S.id = "zuck-modal", D("cubeEffect") && (S.className = "with-cube"), S.innerHTML = "<div id=\"zuck-modal-content\"></div>", S.style.display = "none", S.setAttribute("tabIndex", "1"), S.onkeyup = function(X) {
                            var Y = X.keyCode;
                            27 == Y ? F.close() : (13 == Y || 32 == Y) && F.next()
                        }, D("openEffect") && S.classList.add("with-effects"), t(S, function() {
                            S.classList.contains("closed") && (T.innerHTML = "", S.style.display = "none", S.classList.remove("closed"), S.classList.remove("animated"))
                        }), l.body.appendChild(S));
                        var T = n("#zuck-modal-content"),
                            U = function(Y) {
                                var Z = n("#zuck-modal"),
                                    $ = "",
                                    _ = "",
                                    aa = "0",
                                    ba = n("#zuck-modal-slider-" + B),
                                    ca = {
                                        previous: n("#zuck-modal .story-viewer.previous"),
                                        next: n("#zuck-modal .story-viewer.next"),
                                        viewing: n("#zuck-modal .story-viewer.viewing")
                                    };
                                if (!ca.previous && !Y || !ca.next && Y) return !1;
                                Y ? ($ = "next", _ = "previous") : ($ = "previous", _ = "next");
                                var da = 600;
                                D("cubeEffect") ? "previous" == $ ? aa = Z.slideWidth : "next" == $ && (aa = -1 * Z.slideWidth) : (aa = z(ca[$]), aa = -1 * aa[0]), y(ba, aa, da, null), setTimeout(function() {
                                    if ("" != $ && ca[$] && "" != _) {
                                        var ea = ca[$].getAttribute("data-story-id");
                                        m.internalData.currentStory = ea;
                                        var fa = n("#zuck-modal .story-viewer." + _);
                                        fa && fa.parentNode.removeChild(fa), ca.viewing && (ca.viewing.classList.add("stopped"), ca.viewing.classList.add(_), ca.viewing.classList.remove("viewing")), ca[$] && (ca[$].classList.remove("stopped"), ca[$].classList.remove($), ca[$].classList.add("viewing"));
                                        var ga = I($);
                                        ga && V(ga, $);
                                        var ha = m.internalData.currentStory,
                                            ia = n("#zuck-modal [data-story-id=\"" + ha + "\"]");
                                        if (ia) {
                                            ia = ia.querySelectorAll("[data-index].active");
                                            var ja = ia[0].firstElementChild;
                                            m.data[ha].currentItem = parseInt(ia[0].getAttribute("data-index"), 10), ia[0].innerHTML = "<b style=\"" + ja.style.cssText + "\"></b>", s(ia[0].firstElementChild, function() {
                                                m.nextItem(!1)
                                            })
                                        }
                                        y(ba, "0", 0, null), ia && K([ia[0], ia[1]], !0), D("callbacks", "onView")(m.internalData.currentStory)
                                    }
                                }, da + 50)
                            },
                            V = function(Y, Z, $) {
                                var _ = n("#zuck-modal"),
                                    aa = n("#zuck-modal-slider-" + B),
                                    ba = "",
                                    ca = "",
                                    da = o(Y, "id"),
                                    ea = l.createElement("div"),
                                    fa = o(Y, "currentItem") || 0,
                                    ga = n("#zuck-modal .story-viewer[data-story-id=\"" + da + "\"]"),
                                    ha = "";
                                if (ga) return !1;
                                ea.className = "slides", p(o(Y, "items"), function(ma, na) {
                                    fa > ma && (Y.items[ma].seen = !0, na.seen = !0);
                                    var oa = o(na, "length"),
                                        pa = o(na, "linkText"),
                                        qa = !0 === o(na, "seen") ? "seen" : "",
                                        ra = "data-index=\"" + ma + "\" data-item-id=\"" + o(na, "id") + "\"";
                                    fa === ma && (ha = A(o(na, "time"))), ca += "<span " + ra + " class=\"" + (fa === ma ? "active" : "") + " " + qa + "\"><b style=\"animation-duration:" + ("" === oa ? "3" : oa) + "s\"></b></span>", ba += "<div data-time=\"" + o(na, "time") + "\" data-type=\"" + o(na, "type") + "\"" + ra + " class=\"item " + qa + " " + (fa === ma ? "active" : "") + "\">" + ("video" === o(na, "type") ? "<video class=\"media\" muted webkit-playsinline playsinline preload=\"auto\" src=\"" + o(na, "src") + "\" " + o(na, "type") + "></video><b class=\"tip muted\">" + D("language", "unmute") + "</b>" : "<img class=\"media\" src=\"" + o(na, "src") + "\" " + o(na, "type") + ">") + (o(na, "link") ? "<a class=\"tip link\" href=\"" + o(na, "link") + "\" rel=\"noopener\" target=\"_blank\">" + ("" != pa && pa ? pa : D("language", "visitLink")) + "</a>" : "") + "</div>"
                                }), ea.innerHTML = ba;
                                var ia = ea.querySelector("video"),
                                    ja = function(na) {
                                        na.muted ? ka.classList.add("muted") : ka.classList.remove("muted")
                                    };
                                ia && (ia.onwaiting = function() {
                                    ia.paused && (ka.classList.add("paused"), ka.classList.add("loading"))
                                }, ia.onplay = function() {
                                    ja(ia), ka.classList.remove("stopped"), ka.classList.remove("paused"), ka.classList.remove("loading")
                                }, ia.onready = ia.onload = ia.onplaying = ia.oncanplay = function() {
                                    ja(ia), ka.classList.remove("loading")
                                }, ia.onvolumechange = function() {
                                    ja(ia)
                                });
                                var ka = l.createElement("div");
                                ka.className = "story-viewer muted " + Z + " " + ($ ? "" : "stopped") + " " + (D("backButton") ? "with-back-button" : ""), ka.setAttribute("data-story-id", da);
                                var la = "<div class=\"head\"><div class=\"left\">" + (D("backButton") ? "<a class=\"back\">&lsaquo;</a>" : "") + "<u class=\"img\" style=\"background-image:url(" + o(Y, "photo") + ");\"></u><div><strong>" + o(Y, "name") + "</strong><span class=\"time\">" + ha + "</span></div></div><div class=\"right\"><span class=\"time\">" + ha + "</span><span class=\"loading\"></span><a class=\"close\" tabIndex=\"2\">&times;</a></div></div><div class=\"slides-pointers\"><div>" + ca + "</div></div>";
                                ka.innerHTML = la, p(ka.querySelectorAll(".close, .back"), function(ma, na) {
                                    na.onclick = function(oa) {
                                        oa.preventDefault(), F.close()
                                    }
                                }), ka.appendChild(ea), "viewing" == Z && K(ka.querySelectorAll("[data-index=\"" + fa + "\"].active"), !1), p(ka.querySelectorAll(".slides-pointers [data-index] > b"), function(ma, na) {
                                    s(na, function() {
                                        m.nextItem(!1)
                                    })
                                }), "previous" == Z ? u(aa, ka) : aa.appendChild(ka)
                            },
                            W = function(Y) {
                                var ba, ca, da, ea, fa, Z = n("#zuck-modal"),
                                    _ = Y,
                                    aa = {},
                                    ga = function(ka) {
                                        var la = n("#zuck-modal .viewing");
                                        if ("A" == ka.target.nodeName) return !0;
                                        ka.preventDefault();
                                        var ma = ka.touches ? ka.touches[0] : ka,
                                            na = z(n("#zuck-modal .story-viewer.viewing"));
                                        Z.slideWidth = n("#zuck-modal .story-viewer").offsetWidth, aa = {
                                            x: na[0],
                                            y: na[1]
                                        };
                                        var oa = ma.pageX,
                                            pa = ma.pageY;
                                        ba = {
                                            x: oa,
                                            y: pa,
                                            time: Date.now()
                                        }, ca = void 0, da = {}, _.addEventListener("mousemove", ha), _.addEventListener("mouseup", ia), _.addEventListener("mouseleave", ia), _.addEventListener("touchmove", ha), _.addEventListener("touchend", ia), la && la.classList.add("paused"), L(), ea = setTimeout(function() {
                                            la.classList.add("longPress")
                                        }, 600), fa = setTimeout(function() {
                                            clearInterval(fa), fa = !1
                                        }, 250)
                                    },
                                    ha = function(ka) {
                                        var la = ka.touches ? ka.touches[0] : ka,
                                            ma = la.pageX,
                                            na = la.pageY;
                                        ba && (da = {
                                            x: ma - ba.x,
                                            y: na - ba.y
                                        }, "undefined" == typeof ca && (ca = !!(ca || Math.abs(da.x) < Math.abs(da.y))), !ca && ba && (ka.preventDefault(), y(_, aa.x + da.x, 0, null)))
                                    },
                                    ia = function ja(ka) {
                                        var la = n("#zuck-modal .viewing"),
                                            ma = ba;
                                        if (da) {
                                            var na = l.querySelectorAll("#zuck-modal .story-viewer").length,
                                                oa = ba ? Date.now() - ba.time : void 0,
                                                pa = 300 > +oa && 25 < Math.abs(da.x) || Math.abs(da.x) > Z.slideWidth / 3,
                                                qa = 0 > da.x,
                                                ra = qa ? n("#zuck-modal .story-viewer.next") : n("#zuck-modal .story-viewer.previous");
                                            ca || (pa && !(qa && !ra || !qa && !ra) ? U(qa, !0) : y(_, aa.x, 300)), ba = void 0, _.removeEventListener("mousemove", ha), _.removeEventListener("mouseup", ja), _.removeEventListener("mouseleave", ja), _.removeEventListener("touchmove", ha), _.removeEventListener("touchend", ja)
                                        }
                                        var ta = m.internalData.currentVideoElement;
                                        if (ea && clearInterval(ea), la && (la.classList.remove("longPress"), la.classList.remove("paused")), fa) {
                                            clearInterval(fa), fa = !1;
                                            var ua = function() {
                                                    ma.x > f.screen.width / 3 || !D("previousTap") ? m.navigateItem("next", ka) : m.navigateItem("previous", ka)
                                                },
                                                va = n("#zuck-modal .viewing");
                                            if (va && ta) va.classList.contains("muted") ? M(ta, va) : ua();
                                            else return ua(), !1
                                        }
                                    };
                                _.addEventListener("touchstart", ga), _.addEventListener("mousedown", ga)
                            };
                        return {
                            show: function(Y) {
                                var $ = n("#zuck-modal");
                                D("callbacks", "onOpen")(Y, function() {
                                    T.innerHTML = "<div id=\"zuck-modal-slider-" + B + "\" class=\"slider\"></div>";
                                    var ba = m.data[Y],
                                        ca = ba.currentItem || 0,
                                        da = n("#zuck-modal-slider-" + B);
                                    W(da), m.internalData.currentStory = Y, ba.currentItem = ca, D("backNative") && (location.hash = "#!" + B);
                                    var ea = I("previous");
                                    ea && V(ea, "previous"), V(ba, "viewing", !0);
                                    var fa = I("next");
                                    fa && V(fa, "next"), D("autoFullScreen") && $.classList.add("fullscreen");
                                    var ga = function() {
                                        $.classList.contains("fullscreen") && D("autoFullScreen") && 1024 >= f.screen.width && x($), $.focus()
                                    };
                                    if (D("openEffect")) {
                                        var ha = n("#" + B + " [data-id=\"" + Y + "\"] .img"),
                                            ia = z(ha);
                                        $.style.marginLeft = ia[0] + ha.offsetWidth / 2 + "px", $.style.marginTop = ia[1] + ha.offsetHeight / 2 + "px", $.style.display = "block", $.slideWidth = n("#zuck-modal .story-viewer").offsetWidth, setTimeout(function() {
                                            $.classList.add("animated")
                                        }, 10), setTimeout(function() {
                                            ga()
                                        }, 300)
                                    } else $.style.display = "block", $.slideWidth = n("#zuck-modal .story-viewer").offsetWidth, ga();
                                    D("callbacks", "onView")(Y)
                                })
                            },
                            next: function() {
                                var Z = n("#zuck-modal");
                                D("callbacks", "onEnd")(m.internalData.currentStory, function() {
                                    var aa = m.internalData.currentStory,
                                        ba = n("#" + B + " [data-id=\"" + aa + "\"]");
                                    ba && (ba.classList.add("seen"), m.data[aa].seen = !0, m.internalData.seenItems[aa] = !0, N("seenItems", m.internalData.seenItems), J());
                                    var ca = n("#zuck-modal .story-viewer.next");
                                    ca ? U(!0) : F.close()
                                })
                            },
                            close: function() {
                                var Y = n("#zuck-modal");
                                D("callbacks", "onClose")(m.internalData.currentStory, function() {
                                    D("backNative") && (location.hash = ""), x(Y, !0), D("openEffect") ? Y.classList.add("closed") : (T.innerHTML = "", Y.style.display = "none")
                                })
                            }
                        }
                    },
                    G = function(R) {
                        var S = R.getAttribute("data-id"),
                            T = l.querySelectorAll("#" + B + " [data-id=\"" + S + "\"] .items > li"),
                            U = [];
                        p(T, function(V, W) {
                            var X = W.firstElementChild,
                                Y = X.firstElementChild;
                            U.push({
                                src: X.getAttribute("href"),
                                length: X.getAttribute("data-length"),
                                type: X.getAttribute("data-type"),
                                time: X.getAttribute("data-time"),
                                link: X.getAttribute("data-link"),
                                linkText: X.getAttribute("data-linkText"),
                                preview: Y.getAttribute("src")
                            })
                        }), m.data[S].items = U
                    },
                    H = function(R) {
                        var S = R.getAttribute("data-id"),
                            T = !1;
                        m.internalData.seenItems[S] && (T = !0), T ? R.classList.add("seen") : R.classList.remove("seen");
                        try {
                            m.data[S] = {
                                id: S,
                                photo: R.getAttribute("data-photo"),
                                name: R.firstElementChild.lastElementChild.firstChild.innerText,
                                link: R.firstElementChild.getAttribute("href"),
                                lastUpdated: R.getAttribute("data-last-updated"),
                                seen: T,
                                items: []
                            }
                        } catch (U) {
                            m.data[S] = {
                                items: []
                            }
                        }
                        R.onclick = function(U) {
                            U.preventDefault(), F.show(S)
                        }
                    },
                    I = function(R) {
                        var S = m.internalData.currentStory;
                        if (S) {
                            var U = n("#" + B + " [data-id=\"" + S + "\"]")[R + "ElementSibling"];
                            if (U) {
                                var V = U.getAttribute("data-id"),
                                    W = m.data[V] || !1;
                                return W
                            }
                        }
                        return !1
                    },
                    J = function() {
                        p(l.querySelectorAll("#" + B + " .story.seen"), function(R, S) {
                            var T = m.data[S.getAttribute("data-id")],
                                U = S.parentNode;
                            U.removeChild(S), m.add(T, !0)
                        })
                    },
                    K = function(R, S) {
                        var T = R[1],
                            U = R[0],
                            V = U.parentNode.parentNode.parentNode;
                        if (!T || !U) return !1;
                        var W = m.internalData.currentVideoElement;
                        if (W && W.pause(), "video" == T.getAttribute("data-type")) {
                            var X = T.getElementsByTagName("video")[0];
                            if (!X) return m.internalData.currentVideoElement = !1, !1;
                            var Y = function() {
                                X.duration && q(U.getElementsByTagName("b")[0].style, "AnimationDuration", X.duration + "s")
                            };
                            Y(), X.addEventListener("loadedmetadata", Y), m.internalData.currentVideoElement = X, X.currentTime = 0, X.play(), S.target && M(X, V)
                        } else m.internalData.currentVideoElement = !1
                    },
                    L = function() {
                        var R = m.internalData.currentVideoElement;
                        if (R) try {
                            R.pause()
                        } catch (S) {}
                    },
                    M = function(R, S) {
                        R.muted = !1, R.volume = 1, R.removeAttribute("muted"), R.play(), R.paused && (R.muted = !0, R.play()), S && S.classList.remove("paused")
                    },
                    N = function(R, S) {
                        try {
                            if (D("localStorage")) {
                                f.localStorage["zuck-" + B + "-" + R] = JSON.stringify(S)
                            }
                        } catch (U) {}
                    };
                m.data = {}, m.internalData = {}, m.internalData.seenItems = function(R) {
                    if (D("localStorage")) {
                        var S = "zuck-" + B + "-" + R;
                        return !!f.localStorage[S] && JSON.parse(f.localStorage[S])
                    }
                    return !1
                }("seenItems") || {}, m.add = m.update = function(Q, R) {
                    var S = o(Q, "id"),
                        T = n("#" + B + " [data-id=\"" + S + "\"]"),
                        U = "",
                        V = o(Q, "items"),
                        W = !1;
                    m.data[S] = {}, T ? W = T : (W = l.createElement("div"), W.className = "story"), !1 === Q.seen && (m.internalData.seenItems[S] = !1, N("seenItems", m.internalData.seenItems)), W.setAttribute("data-id", S), W.setAttribute("data-photo", o(Q, "photo")), W.setAttribute("data-last-updated", o(Q, "lastUpdated"));
                    var X = !1;
                    V[0] && (X = V[0].preview || ""), U = "<a href=\"" + o(Q, "link") + "\"><span class=\"img\"><u style=\"background-image:url(" + (D("avatars") || !X || "" == X ? o(Q, "photo") : X) + ")\"></u></span><span class=\"info\"><strong>" + o(Q, "name") + "</strong><span class=\"time\">" + A(o(Q, "lastUpdated")) + "</span></span></a><ul class=\"items\"></ul>", W.innerHTML = U, H(W), T || (R ? j.appendChild(W) : u(j, W)), p(V, function(Y, Z) {
                        m.addItem(S, Z, R)
                    }), R || J()
                }, m.next = function() {
                    F.next()
                }, m.remove = function(Q) {
                    var R = n("#" + B + " > [data-id=\"" + Q + "\"]");
                    R.parentNode.removeChild(R)
                }, m.addItem = function(Q, R, S) {
                    var T = n("#" + B + " > [data-id=\"" + Q + "\"]"),
                        U = l.createElement("li");
                    U.className = o(R, "seen") ? "seen" : "", U.setAttribute("data-id", o(R, "id")), U.innerHTML = "<a href=\"" + o(R, "src") + "\" data-link=\"" + o(R, "link") + "\" data-linkText=\"" + o(R, "linkText") + "\" data-time=\"" + o(R, "time") + "\" data-type=\"" + o(R, "type") + "\" data-length=\"" + o(R, "length") + "\"><img src=\"" + o(R, "preview") + "\"></a>";
                    var V = T.querySelectorAll(".items")[0];
                    S ? V.appendChild(U) : u(V, U), G(T)
                }, m.removeItem = function(Q, R) {
                    var S = n("#" + B + " > [data-id=\"" + Q + "\"] [data-id=\"" + R + "\"]");
                    j.parentNode.removeChild(S)
                }, m.navigateItem = m.nextItem = function(Q, R) {
                    var S = m.internalData.currentStory,
                        T = m.data[S].currentItem,
                        U = n("#zuck-modal .story-viewer[data-story-id=\"" + S + "\"]"),
                        V = "previous" == Q ? -1 : 1;
                    if (!U || 1 == U.touchMove) return !1;
                    var W = U.querySelectorAll("[data-index=\"" + T + "\"]"),
                        X = W[0],
                        Y = W[1],
                        $ = U.querySelectorAll("[data-index=\"" + (T + V) + "\"]"),
                        _ = $[0],
                        aa = $[1];
                    if (U && _ && aa) {
                        var ba = function() {
                                "previous" == Q ? (X.classList.remove("seen"), Y.classList.remove("seen")) : (X.classList.add("seen"), Y.classList.add("seen")), X.classList.remove("active"), Y.classList.remove("active"), _.classList.remove("seen"), _.classList.add("active"), aa.classList.remove("seen"), aa.classList.add("active"), p(U.querySelectorAll(".time"), function(ea, fa) {
                                    fa.innerText = A(aa.getAttribute("data-time"))
                                }), m.data[S].currentItem += V, K($, R)
                            },
                            ca = D("callbacks", "onNavigateItem");
                        ca = ca ? D("callbacks", "onNavigateItem") : D("callbacks", "onNextItem"), ca(S, aa.getAttribute("data-story-id"), ba)
                    } else U && "previous" != Q && F.next(R)
                };
                return function() {
                    location.hash == "#!" + B && (location.hash = ""), n("#" + B + " .story") && p(j.querySelectorAll(".story"), function(T, U) {
                        H(U, !0)
                    }), D("backNative") && f.addEventListener("popstate", function() {
                        location.hash != "#!" + B && (location.hash = "")
                    }, !1), p(D("stories"), function(T, U) {
                        m.add(U, !0)
                    }), J();
                    var R = D("avatars") ? "user-icon" : "story-preview",
                        S = D("list") ? "list" : "carousel";
                    return j.className = "stories " + R + " " + S + " " + (D("skin") + "").toLowerCase(), m
                }()
            };
        return g.buildItem = function(h, j, k, l, m, n, o, p, q) {
            return {
                id: h,
                type: j,
                length: k,
                src: l,
                preview: m,
                link: n,
                linkText: o,
                seen: p,
                time: q
            }
        }, f.ZuckitaDaGalera = f.Zuck = g, g
    }();
    "function" == typeof define && define.amd ? define(function() {
        return c
    }) : "undefined" == typeof exports ? b.ZuckJS = c : ("undefined" != typeof module && module.exports && (exports = module.exports = c), exports.ZuckJS = c)
})(void 0);
