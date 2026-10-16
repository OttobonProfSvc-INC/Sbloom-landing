import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Navigate, Outlet, Scripts, ServerRouter, UNSAFE_withComponentProps, useLocation, useNavigate, useSearchParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Award, BarChart3, BookOpen, Bot, Briefcase, Building2, Camera, Check, CheckCircle2, ChevronDown, ChevronUp, Eye, FileEdit, FileText, Film, Gift, Globe, GraduationCap, Heart, Layers, LayoutGrid, Lightbulb, LineChart, Link2, Mail, MapPin, Megaphone, Menu, MessageCircle, MessageSquare, Monitor, MonitorSmartphone, PenTool, Phone, PhoneCall, Play, PlayCircle, Rocket, Search, Share2, ShieldCheck, Sparkles, Target, TrendingUp, User, Users, Video, Volume2, VolumeX, Wallet, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region src/components/layout/Navbar.tsx
var Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const location = useLocation();
	const handleMobileClick = () => {
		setMobileMenuOpen(false);
		setDropdownOpen(false);
	};
	return /* @__PURE__ */ jsx("header", {
		className: "navbar",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container nav-container",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "logo-container",
					"aria-label": "sBLOOM Home",
					onClick: handleMobileClick,
					children: /* @__PURE__ */ jsx("img", {
						src: "/sbloom-logo-transparent.png",
						alt: "sBLOOM Logo",
						className: "logo-img"
					})
				}),
				/* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", {
					className: `nav-links ${mobileMenuOpen ? "mobile-open" : ""}`,
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: `nav-link ${location.pathname === "/" ? "active" : ""}`,
							"aria-current": location.pathname === "/" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "Home"
						}) }),
						/* @__PURE__ */ jsxs("li", {
							className: "nav-dropdown-wrapper",
							onMouseEnter: () => !mobileMenuOpen && setDropdownOpen(true),
							onMouseLeave: () => !mobileMenuOpen && setDropdownOpen(false),
							children: [/* @__PURE__ */ jsxs("button", {
								className: `nav-link nav-dropdown-btn ${location.pathname.includes("/industries") ? "active" : ""}`,
								onClick: () => mobileMenuOpen && setDropdownOpen(!dropdownOpen),
								children: ["Industries ", /* @__PURE__ */ jsx(ChevronDown, {
									size: 16,
									className: `dropdown-chevron ${dropdownOpen ? "rotated" : ""}`
								})]
							}), /* @__PURE__ */ jsx(AnimatePresence, { children: dropdownOpen && /* @__PURE__ */ jsx(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: 5
								},
								transition: { duration: .2 },
								className: "nav-dropdown",
								style: mobileMenuOpen ? {
									transform: "none",
									left: 0
								} : {
									transform: "translateX(-50%)",
									left: "50%"
								},
								children: [
									{
										name: "Education",
										href: "/industries/education"
									},
									{
										name: "Healthcare",
										href: "/industries/healthcare"
									},
									{
										name: "Professional Services",
										href: "/industries/professional-services"
									}
								].map((ind) => /* @__PURE__ */ jsx(Link, {
									to: ind.href,
									className: `dropdown-item ${location.pathname === ind.href ? "active" : ""}`,
									"aria-current": location.pathname === ind.href ? "page" : void 0,
									onClick: handleMobileClick,
									children: /* @__PURE__ */ jsx("span", {
										className: "dropdown-item-title",
										children: ind.name
									})
								}, ind.name))
							}) })]
						}),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/solutions",
							className: `nav-link ${location.pathname.includes("/solutions") ? "active" : ""}`,
							"aria-current": location.pathname === "/solutions" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "Solutions"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/how-it-works",
							className: `nav-link ${location.pathname === "/how-it-works" ? "active" : ""}`,
							"aria-current": location.pathname === "/how-it-works" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "How It Works"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: `nav-link ${location.pathname === "/about" ? "active" : ""}`,
							"aria-current": location.pathname === "/about" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "About"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/proof-of-work",
							className: `nav-link ${location.pathname === "/proof-of-work" ? "active" : ""}`,
							"aria-current": location.pathname === "/proof-of-work" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "Proof of Work"
						}) }),
						/* @__PURE__ */ jsx("li", {
							className: "nav-workspace-item",
							style: {
								marginLeft: "10px",
								borderLeft: "1px solid rgba(229, 169, 60, 0.25)",
								paddingLeft: "16px"
							},
							children: /* @__PURE__ */ jsx(Link, {
								to: "/creative-workspace",
								className: `nav-link ${location.pathname === "/creative-workspace" ? "active" : ""}`,
								style: {
									fontSize: "0.78rem",
									textTransform: "uppercase",
									letterSpacing: "0.8px"
								},
								onClick: handleMobileClick,
								children: "Creative Workspace"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							className: "nav-cta-item",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "btn btn-primary btn-nav",
								onClick: handleMobileClick,
								children: "Talk to sBLOOM"
							})
						})
					]
				}) }),
				/* @__PURE__ */ jsx("button", {
					className: "mobile-toggle",
					onClick: () => setMobileMenuOpen(!mobileMenuOpen),
					"aria-label": "Toggle navigation menu",
					children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
				})
			]
		})
	});
};
//#endregion
//#region src/components/layout/Footer.tsx
var Footer = () => {
	if (useLocation().pathname === "/contact") return null;
	return /* @__PURE__ */ jsx(motion.footer, {
		className: "footer-premium",
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "footer-main",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "footer-brand",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							"aria-label": "sBLOOM Home",
							className: "footer-logo-link",
							children: /* @__PURE__ */ jsx("img", {
								src: "/sbloom-logo-v2.jpg",
								alt: "sBLOOM Logo",
								className: "footer-logo"
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "footer-desc",
							children: "S-Bloom is a specialized digital growth partner for expertise-led organizations in healthcare, education, and professional services."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "footer-cta-link",
							children: ["Talk to sBLOOM ", /* @__PURE__ */ jsx("span", {
								className: "arrow",
								children: "→"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "footer-links-grid",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "INDUSTRIES"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/education",
									className: "footer-nav-link",
									children: "Education"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/healthcare",
									className: "footer-nav-link",
									children: "Healthcare"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/professional-services",
									className: "footer-nav-link",
									children: "Consulting & Professional Services"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "SOLUTIONS"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/build",
									className: "footer-nav-link",
									children: "Build"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/create",
									className: "footer-nav-link",
									children: "Create"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/promote",
									className: "footer-nav-link",
									children: "Promote"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "COMPANY"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/about",
									className: "footer-nav-link",
									children: "About"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/how-it-works",
									className: "footer-nav-link",
									children: "How It Works"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "footer-nav-link",
									children: "Contact"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/creative-workspace",
									className: "footer-nav-link",
									children: "Creative Workspace"
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "footer-bottom-bar",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "footer-bottom-left",
						children: /* @__PURE__ */ jsxs("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" S-Bloom. All rights reserved."
						] })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-bottom-center",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/healthcare",
								children: "Healthcare"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "dot",
								children: "•"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/education",
								children: "Education"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "dot",
								children: "•"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/professional-services",
								children: "Consulting"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "footer-bottom-right",
						children: /* @__PURE__ */ jsxs("div", {
							className: "contact-tiles-wrapper",
							children: [
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "C",
									label: "Instagram",
									icon: /* @__PURE__ */ jsx(Camera, { size: 16 }),
									href: "https://instagram.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "O",
									label: "WhatsApp",
									icon: /* @__PURE__ */ jsx(MessageCircle, { size: 16 }),
									href: "https://wa.me/",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "N",
									label: "LinkedIn",
									icon: /* @__PURE__ */ jsx(Briefcase, { size: 16 }),
									href: "https://linkedin.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "T",
									label: "Email",
									icon: /* @__PURE__ */ jsx(Mail, { size: 16 }),
									href: "mailto:hello@s-bloom.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "A",
									label: "Phone",
									icon: /* @__PURE__ */ jsx(Phone, { size: 16 }),
									href: "tel:+1234567890",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "C",
									label: "Website",
									icon: /* @__PURE__ */ jsx(Globe, { size: 16 }),
									href: "/",
									external: false
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "T",
									label: "Contact",
									icon: /* @__PURE__ */ jsx(ArrowRight, { size: 16 }),
									href: "/contact",
									external: false
								})
							]
						})
					})
				]
			})]
		})
	});
};
var ContactTile = ({ letter, label, icon, href, external }) => {
	const isInternal = !external;
	const content = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "tile-letter",
		children: letter
	}), /* @__PURE__ */ jsxs("div", {
		className: "tile-reveal",
		children: [/* @__PURE__ */ jsx("span", {
			className: "tile-icon",
			children: icon
		}), /* @__PURE__ */ jsx("span", {
			className: "tile-label",
			children: label
		})]
	})] });
	if (isInternal) return /* @__PURE__ */ jsx(Link, {
		to: href,
		className: "contact-tile",
		children: content
	});
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "contact-tile",
		children: content
	});
};
//#endregion
//#region src/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	Layout: () => Layout,
	default: () => root_default
});
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx(ScrollToTop, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "app-layout",
				children: [
					/* @__PURE__ */ jsx(Navbar, {}),
					/* @__PURE__ */ jsx("main", {
						style: { flex: 1 },
						children
					}),
					/* @__PURE__ */ jsx(Footer, {})
				]
			}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
//#endregion
//#region src/components/ScrollReveal.tsx
var ScrollReveal = ({ children, delay = 0, className = "", threshold = .1, style: userStyle = {} }) => {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef(null);
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setIsVisible(true);
			return;
		}
		if (domRef.current) {
			if (domRef.current.getBoundingClientRect().top <= window.innerHeight) {
				setIsVisible(true);
				return;
			}
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (domRef.current) observer.unobserve(domRef.current);
				}
			});
		}, {
			threshold,
			rootMargin: "0px 0px 20px 0px"
		});
		const currentRef = domRef.current;
		if (currentRef) observer.observe(currentRef);
		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, [threshold]);
	const style = _objectSpread2({ transitionDelay: `${delay}ms` }, userStyle);
	return /* @__PURE__ */ jsx("div", {
		ref: domRef,
		className: `reveal-wrapper ${isVisible ? "reveal-visible" : "reveal-hidden"} ${className}`,
		style,
		children
	});
};
//#endregion
//#region src/components/home/DigitalGrowthSystem.tsx
var DigitalGrowthSystem = () => {
	const [hoveredStage, setHoveredStage] = useState(null);
	useNavigate();
	const stages = [
		{
			id: "build",
			num: "01",
			label: "BUILD",
			headline: "Be easier to find.",
			link: "/solutions#build"
		},
		{
			id: "create",
			num: "02",
			label: "CREATE",
			headline: "Be easier to understand.",
			link: "/solutions#create"
		},
		{
			id: "promote",
			num: "03",
			label: "PROMOTE",
			headline: "Be easier to reach the people who matter.",
			link: "/solutions#promote"
		},
		{
			id: "grow",
			num: "04",
			label: "GROW",
			headline: "Be easier to drive sustainable growth.",
			link: "/solutions#grow"
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: "dgs-section section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx(ScrollReveal, {
				delay: 0,
				children: /* @__PURE__ */ jsxs("div", {
					className: "dgs-intro",
					children: [/* @__PURE__ */ jsx("span", {
						className: "dgs-label",
						children: "WHAT SBLOOM CHANGES"
					}), /* @__PURE__ */ jsx("h2", {
						className: "dgs-main-heading",
						children: "We turn what you do well into something people can see, understand and act on."
					})]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "dgs-stream-wrapper",
				children: [/* @__PURE__ */ jsx("div", {
					className: "dgs-stream-track",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "dgs-stream-grid",
					children: stages.map((stage, idx) => {
						const isHovered = hoveredStage === stage.id;
						return /* @__PURE__ */ jsxs("div", {
							className: `dgs-stream-item ${isHovered ? "active" : ""}`,
							onMouseEnter: () => setHoveredStage(stage.id),
							onMouseLeave: () => setHoveredStage(null),
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "dgs-stream-header",
									children: [/* @__PURE__ */ jsx("span", {
										className: "dgs-stream-num",
										children: stage.num
									}), /* @__PURE__ */ jsx("span", {
										className: "dgs-stream-label",
										children: stage.label
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "dgs-stream-headline",
									children: stage.headline
								}),
								/* @__PURE__ */ jsx("div", {
									className: "dgs-stream-action",
									children: /* @__PURE__ */ jsx(Link, {
										to: stage.link,
										className: "dgs-circle-arrow-btn",
										"aria-label": `Go to ${stage.label}`,
										onClick: (e) => {
											e.stopPropagation();
										},
										children: /* @__PURE__ */ jsx(ArrowRight, {
											className: "dgs-btn-arrow-icon",
											size: 20,
											strokeWidth: 2.4
										})
									})
								}),
								idx < stages.length - 1 && /* @__PURE__ */ jsxs("div", {
									className: "dgs-stream-arrow-divider",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ jsx("span", { className: "dgs-divider-line" }), /* @__PURE__ */ jsx(ArrowRight, {
										size: 14,
										className: "dgs-divider-icon"
									})]
								})
							]
						}, stage.id);
					})
				})]
			})]
		})
	});
};
//#endregion
//#region src/components/home/HeroFloatingIcons.tsx
var HeroFloatingIcons = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "hero-floating-icons-container",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("div", { className: "hero-icons-ambient-glow" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-1" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-2" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-3" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-4" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-5" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-star" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-google" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-diamond" }),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-pen anim-float-focal",
				style: {
					top: "35%",
					left: "38%",
					zIndex: 20
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "92",
					height: "92",
					viewBox: "0 0 92 92",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "penNibGrad",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#4A372E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#2E201A"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#1E1410"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "goldNibTip",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "40%",
										stopColor: "#E7BD62"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "85%",
										stopColor: "#C9952E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#8F6216"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "saturnRing",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "0%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#C9952E",
										stopOpacity: "0.2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "35%",
										stopColor: "#E7BD62",
										stopOpacity: "0.95"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "70%",
										stopColor: "#FFF2B2",
										stopOpacity: "1"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#C9952E",
										stopOpacity: "0.2"
									})
								]
							})
						] }),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "46",
							cy: "48",
							rx: "42",
							ry: "14",
							stroke: "url(#saturnRing)",
							strokeWidth: "2",
							fill: "none",
							opacity: "0.6",
							strokeDasharray: "65 140"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 12 L 64 36 L 56 68 L 36 68 L 28 36 Z",
							fill: "url(#penNibGrad)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 16 L 46 44",
							stroke: "#C9952E",
							strokeWidth: "1.8",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "46",
							cy: "44",
							r: "3",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 12 L 54 26 L 38 26 Z",
							fill: "url(#goldNibTip)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 33 66 L 59 66 L 57 74 L 35 74 Z",
							fill: "url(#goldNibTip)"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "46",
							cy: "48",
							rx: "42",
							ry: "14",
							stroke: "url(#saturnRing)",
							strokeWidth: "2.4",
							fill: "none",
							strokeDasharray: "130 90",
							strokeDashoffset: "-70"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "20",
							cy: "54",
							r: "3.5",
							fill: "#E7BD62"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-web anim-float-2",
				style: {
					top: "8%",
					left: "54%",
					zIndex: 14
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "86",
					height: "74",
					viewBox: "0 0 86 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "browserBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#D9C7B2"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "browserHeader",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "0%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#4A372E"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#2E201A"
							})]
						})] }),
						/* @__PURE__ */ jsx("rect", {
							x: "4",
							y: "4",
							width: "78",
							height: "64",
							rx: "10",
							fill: "url(#browserBody)",
							stroke: "rgba(120, 90, 70, 0.25)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 4 14 Q 4 4 14 4 L 72 4 Q 82 4 82 14 L 82 20 L 4 20 Z",
							fill: "url(#browserHeader)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "14",
							cy: "12",
							r: "2.4",
							fill: "#C9952E"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "22",
							cy: "12",
							r: "2.4",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "30",
							cy: "12",
							r: "2.4",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "28",
							width: "30",
							height: "22",
							rx: "4",
							fill: "#785A46",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "17,45 23,37 29,45",
							fill: "#FBF8F2",
							opacity: "0.9"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "26,45 32,39 38,45",
							fill: "#E7BD62",
							opacity: "0.9"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "34",
							cy: "34",
							r: "2.5",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "29",
							width: "26",
							height: "3.5",
							rx: "1.5",
							fill: "#4A372E",
							opacity: "0.75"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "37",
							width: "22",
							height: "3",
							rx: "1.5",
							fill: "#785A46",
							opacity: "0.6"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "44",
							width: "18",
							height: "3",
							rx: "1.5",
							fill: "#785A46",
							opacity: "0.45"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "55",
							width: "62",
							height: "6",
							rx: "3",
							fill: "#C9952E",
							opacity: "0.85"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-seo anim-float-1",
				style: {
					top: "10%",
					left: "16%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "76",
					height: "76",
					viewBox: "0 0 76 76",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "lensRim",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#C9952E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#63440F"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "lensGlass",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#2E201A"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "70%",
										stopColor: "#1E1410"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#120A07"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "handleGrad",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#785A46"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#35251F"
								})]
							})
						] }),
						/* @__PURE__ */ jsx("rect", {
							x: "46",
							y: "46",
							width: "12",
							height: "24",
							rx: "4",
							transform: "rotate(-45 46 46)",
							fill: "url(#handleGrad)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "32",
							cy: "32",
							r: "22",
							fill: "url(#lensRim)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "32",
							cy: "32",
							r: "17",
							fill: "url(#lensGlass)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 23 38 L 30 31 L 34 35 L 41 26",
							stroke: "#E7BD62",
							strokeWidth: "2.4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 36 26 L 41 26 L 41 31",
							fill: "none",
							stroke: "#E7BD62",
							strokeWidth: "2.4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-analytics anim-float-3",
				style: {
					top: "22%",
					left: "32%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar1",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#785A46"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#35251F"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar2",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#211C1A"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar3",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#2E201A"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#140D09"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "goldCap",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "0%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#E7BD62"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#C9952E"
									})
								]
							})
						] }),
						/* @__PURE__ */ jsx("rect", {
							x: "14",
							y: "40",
							width: "12",
							height: "22",
							rx: "3",
							fill: "url(#bar1)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "14",
							y: "38",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "31",
							y: "26",
							width: "12",
							height: "36",
							rx: "3",
							fill: "url(#bar2)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "31",
							y: "24",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "14",
							width: "12",
							height: "48",
							rx: "3",
							fill: "url(#bar3)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "12",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 10 46 C 22 42, 36 28, 58 10",
							stroke: "#E7BD62",
							strokeWidth: "2",
							strokeDasharray: "3 3",
							fill: "none",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "58",
							cy: "10",
							r: "3",
							fill: "#FFF2B2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-pin anim-float-5",
				style: {
					top: "25%",
					left: "74%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "78",
					height: "82",
					viewBox: "0 0 78 82",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "pinBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#785A46"
								})
							]
						}), /* @__PURE__ */ jsxs("radialGradient", {
							id: "pinGoldCenter",
							cx: "40%",
							cy: "40%",
							r: "60%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#8F6216"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "39",
							cy: "74",
							rx: "20",
							ry: "6",
							fill: "#35251F",
							opacity: "0.2"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "39",
							cy: "74",
							rx: "26",
							ry: "7",
							stroke: "#C9952E",
							strokeWidth: "1",
							strokeDasharray: "4 4",
							fill: "none",
							opacity: "0.45"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 39 8 C 24 8, 14 18, 14 33 C 14 48, 35 68, 39 72 C 43 68, 64 48, 64 33 C 64 18, 54 8, 39 8 Z",
							fill: "url(#pinBody)",
							stroke: "rgba(120, 90, 70, 0.3)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "39",
							cy: "32",
							r: "11",
							fill: "url(#pinGoldCenter)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 39 25 L 41 29 L 45 30 L 42 33 L 43 37 L 39 35 L 35 37 L 36 33 L 33 30 L 37 29 Z",
							fill: "#FFFFFF",
							opacity: "0.9"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-video anim-float-4",
				style: {
					top: "33%",
					left: "7%",
					zIndex: 11
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "clapperBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#35251F"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#211C1A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#120A07"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "playTriGrad",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#C9952E"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "10",
							width: "58",
							height: "15",
							rx: "3.5",
							fill: "url(#clapperBody)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "18,10 24,10 18,25 12,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "32,10 38,10 32,25 26,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "46,10 52,10 46,25 40,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "23",
							width: "58",
							height: "42",
							rx: "4",
							fill: "url(#clapperBody)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "30,34 30,54 48,44",
							fill: "url(#playTriGrad)"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-chat anim-float-4",
				style: {
					top: "56%",
					left: "17%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "76",
					height: "74",
					viewBox: "0 0 76 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "bubbleBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#785A46"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 10 Q 12 4 22 4 L 54 4 Q 64 4 64 14 L 64 42 Q 64 52 54 52 L 28 52 L 14 66 L 16 52 Q 12 50 12 42 Z",
							fill: "url(#bubbleBody)",
							stroke: "rgba(120, 90, 70, 0.3)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "27",
							cy: "28",
							r: "4",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "38",
							cy: "28",
							r: "4",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "49",
							cy: "28",
							r: "4",
							fill: "#C9952E"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-campaign anim-float-2",
				style: {
					top: "51%",
					left: "68%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "78",
					height: "78",
					viewBox: "0 0 78 78",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "planeBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#2E201A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#1E1410"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "planeFold",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#8F6216"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 16,40 38,50",
							fill: "url(#planeBody)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 38,50 44,66",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 44,66 52,48",
							fill: "url(#planeFold)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 38,50 68,14",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 56 C 20 54, 30 52, 38 50",
							stroke: "#E7BD62",
							strokeWidth: "1.5",
							strokeDasharray: "3 3",
							opacity: "0.75"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-team anim-float-1",
				style: {
					top: "66%",
					left: "46%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "82",
					height: "76",
					viewBox: "0 0 82 76",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "teamCenter",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#4A372E"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#211C1A"
							})]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "teamSide",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#785A46"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#35251F"
							})]
						})] }),
						/* @__PURE__ */ jsx("circle", {
							cx: "23",
							cy: "24",
							r: "7",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 48 C 12 38, 17 34, 23 34 C 29 34, 34 38, 34 48 Z",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "59",
							cy: "24",
							r: "7",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 48 48 C 48 38, 53 34, 59 34 C 65 34, 70 38, 70 48 Z",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "41",
							cy: "18",
							r: "9",
							fill: "url(#teamCenter)",
							stroke: "#C9952E",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 27 50 C 27 38, 33 32, 41 32 C 49 32, 55 38, 55 50 Z",
							fill: "url(#teamCenter)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 23 24 L 41 18 L 59 24",
							stroke: "#E7BD62",
							strokeWidth: "1.2",
							opacity: "0.65",
							strokeDasharray: "2 2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-growth anim-float-5",
				style: {
					top: "71%",
					left: "78%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "growthGrad",
							x1: "0%",
							y1: "100%",
							x2: "100%",
							y2: "0%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#35251F"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#785A46"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "85%",
									stopColor: "#C9952E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#FFF2B2"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "52",
							width: "10",
							height: "14",
							rx: "2",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "26",
							y: "42",
							width: "10",
							height: "24",
							rx: "2",
							fill: "#4A372E"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "40",
							y: "32",
							width: "10",
							height: "34",
							rx: "2",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "54",
							y: "22",
							width: "10",
							height: "44",
							rx: "2",
							fill: "#C9952E"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 46 L 28 34 L 40 40 L 62 16",
							stroke: "url(#growthGrad)",
							strokeWidth: "3",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "56,14 65,14 65,23",
							fill: "#FFF2B2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-reels anim-float-3",
				style: {
					top: "42%",
					left: "91%",
					zIndex: 10
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "68",
					height: "68",
					viewBox: "0 0 68 68",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "reelsBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#2E201A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#1E1410"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "8",
							width: "52",
							height: "52",
							rx: "14",
							fill: "url(#reelsBody)",
							stroke: "#C9952E",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "34",
							cy: "34",
							r: "14",
							stroke: "#E7BD62",
							strokeWidth: "2.2"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "31,27 31,41 42,34",
							fill: "#FFF2B2"
						})
					]
				})
			})
		]
	});
};
//#endregion
//#region src/components/home/HeroSubtleCurves.tsx
var HeroSubtleCurves = () => {
	const curve1 = "M -40,190 C 240,150 480,320 740,290 C 1000,260 1220,150 1480,180";
	const curve2 = "M -30,470 C 260,430 540,500 790,420 C 1030,340 1260,490 1480,430";
	const curve3 = "M 480,120 C 680,85 920,130 1120,190 C 1300,240 1400,190 1480,160";
	return /* @__PURE__ */ jsx("div", {
		className: "hero-subtle-curves-layer",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsxs("svg", {
			className: "hero-subtle-curves-svg",
			viewBox: "0 0 1440 600",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			preserveAspectRatio: "none",
			children: [
				/* @__PURE__ */ jsxs("defs", { children: [
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "subtleGoldLine",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "0%",
						children: [
							/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#C9952E",
								stopOpacity: "0.08"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "25%",
								stopColor: "#C9952E",
								stopOpacity: "0.38"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "55%",
								stopColor: "#E7BD62",
								stopOpacity: "0.55"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "80%",
								stopColor: "#C9952E",
								stopOpacity: "0.4"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#C9952E",
								stopOpacity: "0.08"
							})
						]
					}),
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "delicateStream",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "0%",
						children: [
							/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#C9952E",
								stopOpacity: "0"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "60%",
								stopColor: "#E7BD62",
								stopOpacity: "0.45"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#FFFFFF",
								stopOpacity: "0.75"
							})
						]
					}),
					/* @__PURE__ */ jsxs("filter", {
						id: "tinySparkleGlow",
						x: "-30%",
						y: "-30%",
						width: "160%",
						height: "160%",
						children: [/* @__PURE__ */ jsx("feGaussianBlur", {
							in: "SourceGraphic",
							stdDeviation: "1.5",
							result: "blur"
						}), /* @__PURE__ */ jsxs("feMerge", { children: [/* @__PURE__ */ jsx("feMergeNode", { in: "blur" }), /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })] })]
					})
				] }),
				/* @__PURE__ */ jsx("path", {
					d: curve1,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve2,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve3,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "0.85"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve1,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.3",
					className: "subtle-curve-pulse pulse-1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve2,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.2",
					className: "subtle-curve-pulse pulse-2"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve3,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.1",
					className: "subtle-curve-pulse pulse-3"
				}),
				/* @__PURE__ */ jsxs("g", {
					filter: "url(#tinySparkleGlow)",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M 0,-4.5 L 1.2,-1 L 4.5,0 L 1.2,1 L 0,4.5 L -1.2,1 L -4.5,0 L -1.2,-1 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							repeatCount: "indefinite"
						})
					}), /* @__PURE__ */ jsx("circle", {
						r: "1.5",
						fill: "#E7BD62",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							repeatCount: "indefinite"
						})
					})]
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("path", {
						d: "M 0,-3 L 0.8,-0.8 L 3,0 L 0.8,0.8 L 0,3 L -0.8,0.8 L -3,0 L -0.8,-0.8 Z",
						fill: "#FFEBB0",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							begin: "5.5s",
							repeatCount: "indefinite"
						})
					})
				}),
				/* @__PURE__ */ jsxs("g", {
					filter: "url(#tinySparkleGlow)",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M 0,-5 L 1.3,-1.2 L 5,0 L 1.3,1.2 L 0,5 L -1.3,1.2 L -5,0 L -1.3,-1.2 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							repeatCount: "indefinite"
						})
					}), /* @__PURE__ */ jsx("circle", {
						r: "1.8",
						fill: "#E7BD62",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							repeatCount: "indefinite"
						})
					})]
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("circle", {
						r: "1.6",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							begin: "7s",
							repeatCount: "indefinite"
						})
					})
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("path", {
						d: "M 0,-3.8 L 1,-1 L 3.8,0 L 1,1 L 0,3.8 L -1,1 L -3.8,0 L -1,-1 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve3,
							dur: "12s",
							repeatCount: "indefinite"
						})
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/home/DualPathCards.tsx
var DualPathCards = () => {
	return /* @__PURE__ */ jsxs("section", {
		className: "dual-path-section",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "dual-path-ambient-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "dual-path-curves-layer",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsxs("svg", {
					className: "dual-path-curves-svg",
					viewBox: "0 0 1440 900",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					preserveAspectRatio: "none",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "dpWave1",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.45"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#EDE0CA",
									stopOpacity: "0.25"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.38"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "dpWave2",
							x1: "0%",
							y1: "100%",
							x2: "100%",
							y2: "0%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#DFCDAE",
									stopOpacity: "0.35"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EAD8BD",
									stopOpacity: "0.2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.3"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,160 C320,80 800,280 1480,140",
							stroke: "url(#dpWave1)",
							strokeWidth: "1.2",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,240 C380,160 840,360 1480,220",
							stroke: "url(#dpWave2)",
							strokeWidth: "0.9",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,740 C440,640 920,810 1480,690",
							stroke: "url(#dpWave1)",
							strokeWidth: "1.1",
							strokeLinecap: "round"
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "dual-path-sparkles-layer",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "dual-path-sparkle-star dp-sparkle-top-left-main",
						children: "✦"
					}),
					/* @__PURE__ */ jsx("span", { className: "dual-path-sparkle-dot dp-sparkle-top-left-dot" }),
					/* @__PURE__ */ jsx("span", {
						className: "dual-path-sparkle-star dp-sparkle-right-main",
						children: "✦"
					}),
					/* @__PURE__ */ jsx("span", { className: "dual-path-sparkle-dot dp-sparkle-right-dot" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "dual-path-container",
				children: [/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 0,
					children: /* @__PURE__ */ jsxs("div", {
						className: "dual-path-header",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "dual-path-title",
							children: [
								"How can ",
								/* @__PURE__ */ jsx("span", {
									className: "title-highlight-gold",
									children: "S-Bloom"
								}),
								" help you grow?"
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "dual-path-subtitle",
							children: "Different goals. Tailored digital strategies."
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "dual-path-grid",
					children: [/* @__PURE__ */ jsx(ScrollReveal, {
						delay: 100,
						className: "dual-path-reveal-wrap",
						style: {
							height: "100%",
							display: "flex",
							flexDirection: "column"
						},
						children: /* @__PURE__ */ jsxs("div", {
							className: "dual-path-card dual-path-card-business",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "dual-path-card-body",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "dual-path-card-header",
										children: [/* @__PURE__ */ jsx("div", {
											className: "dual-path-icon-box dual-path-icon-business",
											children: /* @__PURE__ */ jsx(BookOpen, {
												size: 20,
												strokeWidth: 2
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "dual-path-header-text",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "dual-path-card-title",
												children: "sBLOOM for Business"
											}), /* @__PURE__ */ jsx("p", {
												className: "dual-path-card-tagline",
												children: "For organizations & brands"
											})]
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "dual-path-card-headline",
										children: "Grow your business. Build your brand."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "dual-path-card-desc",
										children: "Build your online presence, strengthen credibility, and reach the right audience with strategic digital solutions."
									}),
									/* @__PURE__ */ jsx("hr", { className: "dual-path-card-divider" }),
									/* @__PURE__ */ jsxs("ul", {
										className: "dual-path-feature-list",
										children: [
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-business"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "SEO and Google visibility"
												})]
											}),
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-business"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Websites and social media"
												})]
											}),
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-business"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Digital marketing and ads"
												})]
											})
										]
									})
								]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "dual-path-card-btn",
								children: /* @__PURE__ */ jsx("span", { children: "Grow Your Business →" })
							})]
						})
					}), /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 200,
						className: "dual-path-reveal-wrap",
						style: {
							height: "100%",
							display: "flex",
							flexDirection: "column"
						},
						children: /* @__PURE__ */ jsxs("div", {
							className: "dual-path-card dual-path-card-creative",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "dual-path-card-body",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "dual-path-card-header",
										children: [/* @__PURE__ */ jsx("div", {
											className: "dual-path-icon-box dual-path-icon-creative",
											children: /* @__PURE__ */ jsx(Users, {
												size: 20,
												strokeWidth: 2
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "dual-path-header-text",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "dual-path-card-title",
												children: "Creative Workspace"
											}), /* @__PURE__ */ jsx("p", {
												className: "dual-path-card-tagline",
												children: "Join our creative network"
											})]
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "dual-path-card-headline",
										children: "Create with S-Bloom. Grow with us."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "dual-path-card-desc",
										children: "Work with S-Bloom on creative projects, digital content, and ideas that help businesses grow. We're looking to connect with talented people who want to create meaningful work together."
									}),
									/* @__PURE__ */ jsx("hr", { className: "dual-path-card-divider" }),
									/* @__PURE__ */ jsxs("ul", {
										className: "dual-path-feature-list",
										children: [
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-creative"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Creative projects and collaboration"
												})]
											}),
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-creative"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Opportunities to work with our team"
												})]
											}),
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-creative"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Share your skills and portfolio"
												})]
											})
										]
									})
								]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/creative-workspace",
								className: "dual-path-card-btn",
								children: /* @__PURE__ */ jsx("span", { children: "Explore Opportunities →" })
							})]
						})
					})]
				})]
			})
		]
	});
};
//#endregion
//#region src/components/home/HomePricingSection.tsx
var SocialMediaIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "23",
	height: "23",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "#BA7C3D",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "2",
			y: "2",
			width: "20",
			height: "20",
			rx: "5",
			ry: "5"
		}),
		/* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
		/* @__PURE__ */ jsx("circle", {
			cx: "17.5",
			cy: "6.5",
			r: "1.5",
			fill: "#BA7C3D"
		})
	]
});
var GbpIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: [/* @__PURE__ */ jsx("path", {
		d: "M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z",
		stroke: "#BA7C3D",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ jsx("path", {
		d: "M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z",
		fill: "#BA7C3D"
	})]
});
var CurvedArrowSvg = () => /* @__PURE__ */ jsxs("svg", {
	className: "home-pricing-promo-arrow",
	width: "54",
	height: "32",
	viewBox: "0 0 54 32",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: [/* @__PURE__ */ jsx("path", {
		d: "M4 28C14 28 28 24 46 8",
		stroke: "#BA7C3D",
		strokeWidth: "2.2",
		strokeLinecap: "round"
	}), /* @__PURE__ */ jsx("path", {
		d: "M36 6L47 7.5L46 18",
		stroke: "#BA7C3D",
		strokeWidth: "2.2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
});
var SunburstSparks = () => /* @__PURE__ */ jsxs("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 20 20",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: [
		/* @__PURE__ */ jsx("line", {
			x1: "10",
			y1: "2",
			x2: "10",
			y2: "7",
			stroke: "#BA7C3D",
			strokeWidth: "2",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "3.5",
			y1: "4.5",
			x2: "7.5",
			y2: "8.5",
			stroke: "#BA7C3D",
			strokeWidth: "2",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "16.5",
			y1: "4.5",
			x2: "12.5",
			y2: "8.5",
			stroke: "#BA7C3D",
			strokeWidth: "2",
			strokeLinecap: "round"
		})
	]
});
var HomePricingSection = () => {
	return /* @__PURE__ */ jsx("section", {
		className: "home-pricing-section",
		id: "pricing",
		children: /* @__PURE__ */ jsxs("div", {
			className: "home-pricing-container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "home-pricing-hero-row",
					children: [/* @__PURE__ */ jsx("div", {
						className: "home-pricing-hero-text",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "home-pricing-eyebrow-row",
									children: [/* @__PURE__ */ jsx("span", {
										className: "home-pricing-eyebrow",
										children: "BUDGET-FRIENDLY & AI-POWERED"
									}), /* @__PURE__ */ jsxs(Link, {
										to: "/proof-of-work",
										className: "home-pricing-proof-pill",
										children: [
											/* @__PURE__ */ jsx(Sparkles, { size: 13 }),
											/* @__PURE__ */ jsx("span", { children: "See Verified Proof of Work" }),
											/* @__PURE__ */ jsx(ArrowRight, { size: 13 })
										]
									})]
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "home-pricing-title",
									children: [
										"Simple Plans.",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "home-pricing-title-italic",
											children: "Real "
										}),
										/* @__PURE__ */ jsx("span", {
											className: "home-pricing-title-serif",
											children: "Business Growth."
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "home-pricing-desc",
									children: "High-performance digital growth built for Healthcare, Education, and Professional Services. Powered by AI to cut your agency costs in half while delivering more patients, admissions, and clients."
								})
							]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "home-pricing-visual-wrap",
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 150,
							children: /* @__PURE__ */ jsx("div", {
								className: "home-pricing-visual-card",
								children: /* @__PURE__ */ jsx("img", {
									src: "/pricing-laptop-growth.jpg",
									alt: "Business Growth Dashboard and Strategy",
									className: "home-pricing-hero-img"
								})
							})
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "home-pricing-cards-grid",
					children: [
						{
							id: "gbp",
							name: "Google Business Profile (GBP)",
							badge: "✦ Automation",
							icon: /* @__PURE__ */ jsx(GbpIcon, {}),
							isDualPrice: false,
							startsLabel: "Starts at",
							price: "₹2,000",
							period: "/month",
							features: [
								"Profile setup & complete local verification",
								"Weekly updates (geo-tagged photos, posts, offers)",
								"Local SEO ranking to reach Top 3 on Google Maps",
								"Direct phone calls, directions & local patient/student inquiries"
							],
							footnote: null,
							proofLink: "/proof-of-work?service=gbp",
							actionLabel: "View Proof of Work"
						},
						{
							id: "website-seo",
							name: "Website + SEO",
							badge: "✦ AI-Powered",
							icon: /* @__PURE__ */ jsx(Monitor, {
								size: 22,
								strokeWidth: 2.2
							}),
							isDualPrice: false,
							startsLabel: "Starts at",
							price: "₹5,000",
							period: "/month",
							features: [
								"AI-native high speed website design & architecture",
								"End-to-end technical & local SEO keyword optimization",
								"Mobile-first sub-1s loading for higher conversions",
								"Predictable inbound inquiries for clinics, schools & firms"
							],
							footnote: null,
							proofLink: "/proof-of-work?service=website",
							actionLabel: "View Proof of Work"
						},
						{
							id: "social-media",
							name: "Social Media Management",
							badge: "Meta Business Suite",
							icon: /* @__PURE__ */ jsx(SocialMediaIcon, {}),
							isDualPrice: false,
							startsLabel: "Starts at",
							price: "₹10,000",
							period: "/month",
							features: [
								"8 High-Impact Reels + 20 Branded Posts monthly",
								"Managed directly via Meta Business Suite (Instagram & Facebook)",
								"Content strategy, scriptwriting, hooks & caption optimization",
								"Targeted community engagement & direct lead pipeline"
							],
							footnote: "* Note: Motion post pricing may vary based on animation scope",
							proofLink: "/proof-of-work?service=social",
							actionLabel: "View Proof of Work"
						},
						{
							id: "ads",
							name: "Meta & Google Ads",
							badge: "High-Intent Leads",
							icon: /* @__PURE__ */ jsx(Megaphone, {
								size: 22,
								strokeWidth: 2.2
							}),
							isDualPrice: true,
							startsLabel: "Starts at",
							tier1Price: "₹2,000",
							tier1Note: "Management (If ad account exists)",
							tier2Price: "₹3,000",
							tier2Note: "One-time setup (If no ad account)",
							features: [
								"Hyper-targeted Meta (Insta/FB) & Google Search campaigns",
								"Custom lead-filtering funnels for patients, admissions & clients",
								"Continuous conversion rate & negative keyword optimization",
								"Transparent weekly analytics & ROAS tracking dashboard"
							],
							footnote: "* Note: Ad spend funds vary from client to client based on goals",
							proofLink: "/proof-of-work?service=ads",
							actionLabel: "View Proof of Work"
						}
					].map((plan, idx) => /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 100 + idx * 80,
						className: "home-pricing-card-reveal",
						children: /* @__PURE__ */ jsxs("div", {
							className: "home-pricing-card",
							children: [
								plan.badge && /* @__PURE__ */ jsx("div", {
									className: "home-pricing-card-top-badge",
									children: plan.badge
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "home-pricing-card-header",
									children: [/* @__PURE__ */ jsx("div", {
										className: "home-pricing-icon-box",
										children: plan.icon
									}), /* @__PURE__ */ jsx("h3", {
										className: "home-pricing-card-title",
										children: plan.name
									})]
								}),
								plan.isDualPrice ? /* @__PURE__ */ jsxs("div", {
									className: "home-pricing-dual-container",
									children: [/* @__PURE__ */ jsx("div", {
										className: "home-pricing-starts-label",
										children: plan.startsLabel
									}), /* @__PURE__ */ jsxs("div", {
										className: "home-pricing-dual-wrap",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "home-pricing-dual-pill",
											children: [/* @__PURE__ */ jsx("div", {
												className: "home-pricing-dual-amount",
												children: plan.tier1Price
											}), /* @__PURE__ */ jsx("div", {
												className: "home-pricing-dual-note",
												children: plan.tier1Note
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "home-pricing-dual-pill",
											children: [/* @__PURE__ */ jsx("div", {
												className: "home-pricing-dual-amount",
												children: plan.tier2Price
											}), /* @__PURE__ */ jsx("div", {
												className: "home-pricing-dual-note",
												children: plan.tier2Note
											})]
										})]
									})]
								}) : /* @__PURE__ */ jsxs("div", {
									className: "home-pricing-price-wrap",
									children: [/* @__PURE__ */ jsx("div", {
										className: "home-pricing-starts-label",
										children: plan.startsLabel
									}), /* @__PURE__ */ jsxs("div", {
										className: "home-pricing-amount-row",
										children: [/* @__PURE__ */ jsx("span", {
											className: "home-pricing-amount",
											children: plan.price
										}), /* @__PURE__ */ jsx("span", {
											className: "home-pricing-period",
											children: plan.period
										})]
									})]
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "home-pricing-features-list",
									children: plan.features.map((feat, fIdx) => /* @__PURE__ */ jsxs("li", {
										className: "home-pricing-feature-item",
										children: [/* @__PURE__ */ jsx(Check, {
											className: "home-pricing-check-icon",
											size: 16,
											strokeWidth: 2.8
										}), /* @__PURE__ */ jsx("span", { children: feat })]
									}, fIdx))
								}),
								plan.footnote && /* @__PURE__ */ jsx("div", {
									className: "home-pricing-card-footnote",
									children: plan.footnote
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-pricing-card-footer",
									children: /* @__PURE__ */ jsxs(Link, {
										to: plan.proofLink,
										className: "home-pricing-action-btn",
										"aria-label": `Open proof of work for ${plan.name}`,
										children: [/* @__PURE__ */ jsx("span", { children: plan.actionLabel }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 16,
											strokeWidth: 2.4
										})]
									})
								})
							]
						})
					}, plan.id))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "home-pricing-transparency-note",
					children: /* @__PURE__ */ jsxs("span", { children: [
						"💡 ",
						/* @__PURE__ */ jsx("strong", { children: "Full Transparency:" }),
						" All ad campaign spends and creative motion requirements are customized to your exact admission or patient targets. No hidden retainers or surprises."
					] })
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 350,
					children: /* @__PURE__ */ jsxs("div", {
						className: "home-pricing-promo-banner",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "home-pricing-promo-left",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "home-pricing-gift-box",
									children: /* @__PURE__ */ jsx(Gift, {
										size: 28,
										strokeWidth: 2.1
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-pricing-promo-divider",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "home-pricing-promo-text",
									children: [
										"Google Business Profile (GBP) is",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "home-pricing-promo-free",
											children: "FREE"
										}),
										" when Social Media Management is chosen."
									]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "home-pricing-promo-right",
							children: [/* @__PURE__ */ jsx(CurvedArrowSvg, {}), /* @__PURE__ */ jsxs("div", {
								className: "home-pricing-promo-note-wrap",
								children: [/* @__PURE__ */ jsx("span", {
									className: "home-pricing-promo-note",
									children: "More visibility at no extra cost!"
								}), /* @__PURE__ */ jsx("span", {
									className: "home-pricing-promo-sparks",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsx(SunburstSparks, {})
								})]
							})]
						})]
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/home/WhyBetter.tsx
var WhyBetter = () => {
	return /* @__PURE__ */ jsx("section", {
		className: "why-better-section",
		id: "why-sbloom",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container why-better-container",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "why-better-header",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "why-better-eyebrow",
								children: [/* @__PURE__ */ jsx("span", {
									className: "why-badge-glow",
									children: "✦ THE S-BLOOM ADVANTAGE"
								}), /* @__PURE__ */ jsx("span", {
									className: "why-eyebrow-sub",
									children: "WHY OUR WORK IS BEST"
								})]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "why-better-title",
								children: [
									"Why We Beat Every Other ",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "why-title-serif",
										children: "Digital Marketing Agency."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "why-better-lead",
								children: "You don't need vanity metrics. You need real patients walking through your clinic doors, parents enrolling their children in your classrooms, and high-value clients seeking your professional counsel."
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "why-better-grid",
					children: [
						{
							id: "ai-native",
							icon: /* @__PURE__ */ jsx(Bot, { size: 26 }),
							tag: "TECH INNOVATION",
							title: "AI-Native Efficiency, Zero Agency Bloat",
							desc: "Traditional agencies bill you for 10-person overheads and slow manual delivery. We leverage modern AI tools to build high-converting websites, conduct medical & institutional SEO, and edit retention-hooked Reels in half the time.",
							bullets: [
								"Websites that load in under 1 second",
								"AI-driven keyword analysis for local dominance",
								"Automated lead qualification funnels"
							],
							badge: "Up to 70% Less Cost"
						},
						{
							id: "targeted-industries",
							icon: /* @__PURE__ */ jsx(Target, { size: 26 }),
							tag: "LASER FOCUS",
							title: "Built Exclusively for 3 High-Trust Sectors",
							desc: "We do not market e-commerce clothes or fast food. We specialize strictly in Healthcare, Education, and Professional Services — solving the exact crises you face: empty appointment books, declining student admissions, and invisible professional authority.",
							bullets: [
								"Healthcare: More local clinic & hospital patients",
								"Education: Predictable admission inquiries every season",
								"Professional Services: High-value corporate clients"
							],
							badge: "Domain Expertise"
						},
						{
							id: "budget-friendly",
							icon: /* @__PURE__ */ jsx(Wallet, { size: 26 }),
							tag: "RADICAL AFFORDABILITY",
							title: "Genuinely Budget-Friendly & Transparent",
							desc: "Starting from just ₹2,000/month, every plan delivers measurable business outcomes rather than vanity follower counts. Complete transparency on ad spend with zero hidden retainers or surprise agency invoices.",
							bullets: [
								"Full GBP optimization from ₹2,000/month",
								"AI Website + SEO from ₹5,000/month",
								"8 Reels + 20 Posts via Meta Suite from ₹10,000/mo"
							],
							badge: "Starts at ₹2,000/mo"
						}
					].map((pillar, index) => /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 120 + index * 90,
						className: "why-better-card-reveal",
						children: /* @__PURE__ */ jsxs("div", {
							className: "why-better-card",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "why-card-top",
									children: [/* @__PURE__ */ jsx("div", {
										className: "why-card-icon-wrap",
										children: pillar.icon
									}), /* @__PURE__ */ jsx("span", {
										className: "why-card-badge",
										children: pillar.badge
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "why-card-tag",
									children: pillar.tag
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "why-card-title",
									children: pillar.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "why-card-desc",
									children: pillar.desc
								}),
								/* @__PURE__ */ jsx("div", {
									className: "why-card-bullets",
									children: pillar.bullets.map((bullet, bIdx) => /* @__PURE__ */ jsxs("div", {
										className: "why-bullet-item",
										children: [/* @__PURE__ */ jsx(CheckCircle2, {
											size: 15,
											className: "why-bullet-icon"
										}), /* @__PURE__ */ jsx("span", { children: bullet })]
									}, bIdx))
								})
							]
						})
					}, pillar.id))
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 280,
					children: /* @__PURE__ */ jsxs("div", {
						className: "why-better-proof-banner",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "why-proof-banner-left",
							children: [/* @__PURE__ */ jsx("div", {
								className: "why-proof-icon-box",
								children: /* @__PURE__ */ jsx(ShieldCheck, { size: 26 })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "why-proof-banner-title",
								children: "Don't take our word for it. Inspect our real client dashboards."
							}), /* @__PURE__ */ jsx("p", {
								className: "why-proof-banner-desc",
								children: "Browse before-and-after performance metrics for Google Business Profile, websites, and Meta Business Suite campaigns."
							})] })]
						}), /* @__PURE__ */ jsx("div", {
							className: "why-proof-banner-right",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/proof-of-work",
								className: "why-proof-cta-btn",
								children: [/* @__PURE__ */ jsx("span", { children: "Explore Proof of Work" }), /* @__PURE__ */ jsx(ArrowRight, { size: 17 })]
							})
						})]
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/home/BottomCornerScrollShowcase.tsx
var STAGES$1 = [
	{
		id: 0,
		key: "camera",
		label: "Camera",
		icon: Camera
	},
	{
		id: 1,
		key: "reel",
		label: "Reel",
		icon: Film
	},
	{
		id: 2,
		key: "post",
		label: "Post",
		icon: FileText
	},
	{
		id: 3,
		key: "ad",
		label: "Ad",
		icon: Megaphone
	},
	{
		id: 4,
		key: "website",
		label: "Website",
		icon: Globe
	},
	{
		id: 5,
		key: "video",
		label: "Video",
		icon: Play
	}
];
var BottomCornerScrollShowcase = () => {
	const [activeStage, setActiveStage] = useState(0);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isMuted, setIsMuted] = useState(true);
	const [manualOverride, setManualOverride] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const videoRef = useRef(null);
	const widgetRef = useRef(null);
	const overrideTimerRef = useRef(null);
	const circleRadius = 44;
	const circumference = 2 * Math.PI * circleRadius;
	const strokeDashoffset = circumference - scrollProgress * circumference;
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (widgetRef.current && !widgetRef.current.contains(event.target)) setIsMenuOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (scrollHeight <= 0) return;
			const progress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));
			setScrollProgress(progress);
			if (!manualOverride) {
				if (progress < .18) setActiveStage(0);
				else if (progress < .36) setActiveStage(1);
				else if (progress < .54) setActiveStage(2);
				else if (progress < .72) setActiveStage(3);
				else if (progress < .88) setActiveStage(4);
				else setActiveStage(5);
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [manualOverride]);
	useEffect(() => {
		if (activeStage === 5 && videoRef.current) videoRef.current.play().catch(() => {});
		else if (videoRef.current) videoRef.current.pause();
	}, [activeStage]);
	const handleSelectStage = (stageId) => {
		setActiveStage(stageId);
		setManualOverride(true);
		setIsMenuOpen(false);
		if (overrideTimerRef.current) clearTimeout(overrideTimerRef.current);
		overrideTimerRef.current = setTimeout(() => {
			setManualOverride(false);
		}, 12e3);
	};
	const handleCircleClick = () => {
		setIsMenuOpen((prev) => !prev);
	};
	const toggleSound = (e) => {
		e.stopPropagation();
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setIsMuted(videoRef.current.muted);
		}
	};
	const currentStageInfo = STAGES$1[activeStage];
	const IconComponent = currentStageInfo.icon;
	return /* @__PURE__ */ jsxs("div", {
		className: "corner-circle-widget-wrapper",
		ref: widgetRef,
		"aria-label": "S-Bloom Small Circular Pipeline",
		children: [
			/* @__PURE__ */ jsx(AnimatePresence, { children: isMenuOpen && /* @__PURE__ */ jsxs(motion.div, {
				className: "corner-circle-options-menu",
				initial: {
					opacity: 0,
					y: 10,
					scale: .95
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					y: 10,
					scale: .95
				},
				transition: { duration: .2 },
				children: [/* @__PURE__ */ jsxs("div", {
					className: "corner-circle-options-header",
					children: [/* @__PURE__ */ jsx("span", { children: "EXPLORE PIPELINE" }), /* @__PURE__ */ jsx("button", {
						className: "corner-circle-options-close",
						onClick: (e) => {
							e.stopPropagation();
							setIsMenuOpen(false);
						},
						"aria-label": "Close options",
						children: /* @__PURE__ */ jsx(X, { size: 13 })
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "corner-circle-options-list",
					children: STAGES$1.map((stage) => {
						const StageIcon = stage.icon;
						const isSelected = activeStage === stage.id;
						return /* @__PURE__ */ jsxs("button", {
							className: `corner-circle-option-btn ${isSelected ? "active" : ""}`,
							onClick: (e) => {
								e.stopPropagation();
								handleSelectStage(stage.id);
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "corner-option-icon",
									children: /* @__PURE__ */ jsx(StageIcon, { size: 14 })
								}),
								/* @__PURE__ */ jsx("span", {
									className: "corner-option-name",
									children: stage.label
								}),
								isSelected && /* @__PURE__ */ jsx("span", {
									className: "corner-option-indicator",
									children: "●"
								})
							]
						}, stage.key);
					})
				})]
			}) }),
			/* @__PURE__ */ jsxs("div", {
				className: "corner-circle-label-pill",
				onClick: () => setIsMenuOpen((prev) => !prev),
				title: "Click to view all pipeline options",
				children: [
					activeStage === 0 && /* @__PURE__ */ jsx("span", { className: "circle-rec-dot" }),
					/* @__PURE__ */ jsx(IconComponent, {
						size: 13,
						color: "#D9A52E"
					}),
					/* @__PURE__ */ jsx("span", { children: currentStageInfo.label }),
					isMenuOpen ? /* @__PURE__ */ jsx(ChevronDown, {
						size: 12,
						color: "#785A46",
						style: { marginLeft: 2 }
					}) : /* @__PURE__ */ jsx(ChevronUp, {
						size: 12,
						color: "#785A46",
						style: { marginLeft: 2 }
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "corner-circle-orb",
				onClick: handleCircleClick,
				title: `Click to view options (Currently: ${currentStageInfo.label})`,
				children: [
					/* @__PURE__ */ jsxs("svg", {
						className: "corner-circle-svg-ring",
						viewBox: "0 0 96 96",
						children: [
							/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
								id: "goldRingGradient",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFE0A3"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#D9A52E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#8F6216"
									})
								]
							}) }),
							/* @__PURE__ */ jsx("circle", {
								className: "circle-ring-bg",
								cx: "48",
								cy: "48",
								r: circleRadius
							}),
							/* @__PURE__ */ jsx("circle", {
								className: "circle-ring-progress",
								cx: "48",
								cy: "48",
								r: circleRadius,
								style: {
									strokeDasharray: circumference,
									strokeDashoffset
								}
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "corner-circle-lens-frame",
						children: [/* @__PURE__ */ jsx("div", { className: "corner-circle-lens-glare" }), /* @__PURE__ */ jsxs(AnimatePresence, {
							mode: "wait",
							children: [
								activeStage === 0 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-camera",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("img", {
										src: "/camera-studio-bloom.jpg",
										alt: "Cinema Camera",
										className: "circle-camera-img"
									}), /* @__PURE__ */ jsx("div", {
										className: "circle-camera-hud-badge",
										children: /* @__PURE__ */ jsx("span", { children: "● REC" })
									})]
								}, "circle-stage-camera"),
								activeStage === 1 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-reel",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("img", {
										src: "/about-studio-stage.jpg",
										alt: "Social Reel Stage",
										className: "circle-reel-img"
									}), /* @__PURE__ */ jsxs("div", {
										className: "circle-reel-center-icon",
										children: [/* @__PURE__ */ jsx("div", {
											className: "circle-reel-glyph",
											children: /* @__PURE__ */ jsx(Film, { size: 15 })
										}), /* @__PURE__ */ jsx("span", {
											className: "circle-reel-sub",
											children: "REEL"
										})]
									})]
								}, "circle-stage-reel"),
								activeStage === 2 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-post",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "circle-post-avatar",
											children: "🌸"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "circle-post-text",
											children: "POST"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "circle-post-likes",
											children: "👍 1.8K"
										})
									]
								}, "circle-stage-post"),
								activeStage === 3 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-ad",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("div", {
										className: "circle-ad-icon-box",
										children: /* @__PURE__ */ jsx(Megaphone, { size: 16 })
									}), /* @__PURE__ */ jsx("div", {
										className: "circle-ad-tag",
										children: "AD"
									})]
								}, "circle-stage-ad"),
								activeStage === 4 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-web",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("div", {
										className: "circle-web-icon-box",
										children: /* @__PURE__ */ jsx(Globe, { size: 16 })
									}), /* @__PURE__ */ jsx("div", {
										className: "circle-web-url",
										children: "sbloom.co"
									})]
								}, "circle-stage-web"),
								activeStage === 5 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-video",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("video", {
										ref: videoRef,
										src: "/hero-studio-video.mp4",
										playsInline: true,
										loop: true,
										muted: isMuted,
										className: "circle-playing-video"
									}), /* @__PURE__ */ jsx("div", {
										className: "circle-video-badge-overlay",
										children: /* @__PURE__ */ jsx("span", { children: "● VIDEO" })
									})]
								}, "circle-stage-video")
							]
						})]
					}),
					activeStage === 5 && /* @__PURE__ */ jsx("button", {
						className: "circle-sound-toggle-btn",
						onClick: toggleSound,
						title: isMuted ? "Unmute S-Bloom video" : "Mute video",
						"aria-label": "Toggle audio",
						children: isMuted ? /* @__PURE__ */ jsx(VolumeX, { size: 13 }) : /* @__PURE__ */ jsx(Volume2, { size: 13 })
					})
				]
			})
		]
	});
};
//#endregion
//#region src/pages/HomePage.tsx
var HomePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "home-page",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "hero-final-section",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "hero-bottom-silk-wrapper",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsxs("svg", {
							viewBox: "0 0 1440 180",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							preserveAspectRatio: "none",
							className: "hero-bottom-silk-svg",
							children: [
								/* @__PURE__ */ jsxs("defs", { children: [
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkFlow1",
										x1: "0%",
										y1: "0%",
										x2: "100%",
										y2: "100%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#F5ECE0",
												stopOpacity: "0.45"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "35%",
												stopColor: "#EADBCC",
												stopOpacity: "0.75"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "70%",
												stopColor: "#F8F3EC",
												stopOpacity: "0.55"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#E6D5C3",
												stopOpacity: "0.8"
											})
										]
									}),
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkFlow2",
										x1: "100%",
										y1: "0%",
										x2: "0%",
										y2: "100%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#EDE2D3",
												stopOpacity: "0.4"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "50%",
												stopColor: "#FBF8F2",
												stopOpacity: "0.85"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#DFCDB8",
												stopOpacity: "0.7"
											})
										]
									}),
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkSheen",
										x1: "0%",
										y1: "0%",
										x2: "100%",
										y2: "0%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#FFFFFF",
												stopOpacity: "0"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "45%",
												stopColor: "#FFFFFF",
												stopOpacity: "0.6"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "55%",
												stopColor: "#FFFFFF",
												stopOpacity: "0.6"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#FFFFFF",
												stopOpacity: "0"
											})
										]
									})
								] }),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,60 Q 360,140 720,70 T 1440,90 L 1440,180 L 0,180 Z",
									fill: "url(#silkFlow1)"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,95 Q 380,40 760,110 T 1440,65 L 1440,180 L 0,180 Z",
									fill: "url(#silkFlow2)"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,95 Q 380,40 760,110 T 1440,65",
									stroke: "url(#silkSheen)",
									strokeWidth: "2",
									fill: "none"
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(HeroSubtleCurves, {}),
					/* @__PURE__ */ jsxs("div", {
						className: "hero-final-container",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "hero-final-content",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "hero-final-eyebrow",
									children: [/* @__PURE__ */ jsx("span", {
										className: "eyebrow-text",
										children: "YOUR AI DIGITAL GROWTH PARTNER"
									}), /* @__PURE__ */ jsx("span", { className: "eyebrow-line" })]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "hero-final-title",
									children: [
										"We will help you",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "hero-mocha-gold",
											children: "bloom socially."
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "hero-final-desc",
									children: "Build digital authority, trust, and growth for a growing community of expertise-led businesses."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "hero-final-buttons",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "btn-final-primary",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM" }), /* @__PURE__ */ jsx("svg", {
											className: "btn-arrow-icon",
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.4",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
										})]
									}), /* @__PURE__ */ jsx(Link, {
										to: "/solutions",
										className: "btn-final-secondary",
										children: "See How We Help"
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "hero-final-showcase",
							children: /* @__PURE__ */ jsx(HeroFloatingIcons, {})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(DualPathCards, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "home-lower-silk-wrapper",
				children: [
					/* @__PURE__ */ jsx(DigitalGrowthSystem, {}),
					/* @__PURE__ */ jsx(WhyBetter, {}),
					/* @__PURE__ */ jsx(HomePricingSection, {}),
					/* @__PURE__ */ jsx("section", {
						className: "home-final-cta-section",
						children: /* @__PURE__ */ jsx("div", {
							className: "container",
							children: /* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 0,
								children: [/* @__PURE__ */ jsx("h2", {
									className: "home-final-cta-title",
									children: "Your business has potential. Let’s help the right people see it."
								}), /* @__PURE__ */ jsx("div", {
									className: "home-final-cta-btn-wrap",
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "home-final-cta-btn",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM" }), /* @__PURE__ */ jsx("span", {
											className: "cta-arrow",
											children: "→"
										})]
									})
								})]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(BottomCornerScrollShowcase, {})
		]
	});
};
//#endregion
//#region src/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$12
});
var meta$12 = () => {
	return [
		{ title: "sBLOOM | AI Digital Growth Partner" },
		{
			name: "description",
			content: "S-Bloom is a specialized AI digital growth partner for expertise-led organizations."
		},
		{
			property: "og:title",
			content: "sBLOOM | AI Digital Growth Partner"
		},
		{
			property: "og:description",
			content: "S-Bloom is a specialized AI digital growth partner for expertise-led organizations."
		}
	];
};
var home_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HomePage, {});
});
//#endregion
//#region src/pages/industries/EducationPage.tsx
var EDUCATION_SERVICES = [
	{
		id: "web-dev",
		title: "Website Development",
		description: "Showcase your courses, facilities, achievements, and admission details clearly.",
		icon: Monitor
	},
	{
		id: "gbp",
		title: "Google Business Profile",
		description: "Help students and parents find your institution on Google Search and Maps.",
		icon: MapPin
	},
	{
		id: "seo",
		title: "SEO",
		description: "Improve your visibility when people search for educational institutions and courses.",
		icon: TrendingUp
	},
	{
		id: "smm",
		title: "Social Media Management",
		description: "Share campus activities, achievements, events, and educational content.",
		icon: Users
	},
	{
		id: "ads",
		title: "Digital Advertising",
		description: "Promote courses and admissions to relevant students and parents.",
		icon: Megaphone
	}
];
var EducationPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "industry-page edu-page-container",
		children: [/* @__PURE__ */ jsx("div", {
			className: "industry-bg-curve",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 1440 640",
				fill: "none",
				preserveAspectRatio: "none",
				children: [/* @__PURE__ */ jsx("path", {
					d: "M-40,80 C260,180 420,-30 840,40 C1180,100 1340,30 1520,70 L1520,0 L-40,0 Z",
					fill: "#F6EFE5",
					opacity: "0.6"
				}), /* @__PURE__ */ jsx("path", {
					d: "M-20,240 C340,320 620,110 1020,180 C1280,225 1420,130 1500,160",
					stroke: "#EFE3D3",
					strokeWidth: "38",
					strokeLinecap: "round",
					fill: "none",
					opacity: "0.5"
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "industry-container",
			children: [
				/* @__PURE__ */ jsx("section", {
					className: "industry-hero-section",
					children: /* @__PURE__ */ jsxs("div", {
						className: "industry-hero-grid",
						children: [/* @__PURE__ */ jsx("div", {
							className: "industry-hero-left",
							children: /* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 0,
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "industry-eyebrow",
										children: "S-BLOOM — EDUCATION"
									}),
									/* @__PURE__ */ jsxs("h1", {
										className: "industry-hero-title",
										children: [
											"Help More Students",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "industry-gold-title",
												children: "Discover Your"
											}),
											/* @__PURE__ */ jsx("br", {}),
											"Institution."
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "industry-hero-desc",
										children: "We help schools, colleges, coaching centres, and training institutes improve their online presence, reach students and parents, and generate more admission enquiries."
									}),
									/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "industry-hero-cta-btn",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to S-BLOOM" }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 17,
											strokeWidth: 2.4
										})]
									})
								]
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "industry-hero-right",
							children: /* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 150,
								style: {
									position: "relative",
									width: "100%",
									maxWidth: "610px"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									className: "industry-floating-script",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "script-text",
											children: "More Students."
										}),
										/* @__PURE__ */ jsx("span", {
											className: "script-subtext",
											children: "Brighter Futures."
										}),
										/* @__PURE__ */ jsx("svg", {
											className: "script-accent-arc",
											viewBox: "0 0 100 20",
											fill: "none",
											children: /* @__PURE__ */ jsx("path", {
												d: "M 5,14 Q 50,4 95,16",
												stroke: "#B87B2E",
												strokeWidth: "2.5",
												strokeLinecap: "round"
											})
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "industry-photo-wrapper",
									children: /* @__PURE__ */ jsx("img", {
										src: "/edu-hero-students.jpg",
										alt: "Students collaborating on campus with laptop",
										className: "industry-photo-img"
									})
								})]
							})
						})]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					className: "industry-problem-solution-section",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 50,
						children: /* @__PURE__ */ jsxs("div", {
							className: "industry-prob-sol-card",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "industry-prob-col",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "industry-prob-tag",
											children: "THE PROBLEM YOU FACE"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "industry-prob-title",
											children: "Declining Student Admission Enquiries"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "industry-prob-desc",
											children: "Schools and colleges face intense competition every academic cycle. When parents and students cannot discover your campus, courses, and fee structure quickly on mobile, they enroll with competitors."
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { className: "industry-prob-divider" }),
								/* @__PURE__ */ jsxs("div", {
									className: "industry-sol-col",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "industry-sol-tag",
											children: "✦ THE S-BLOOM AI SOLUTION"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "industry-sol-title",
											children: "AI-Optimized Portals & Meta Reels Campaigns"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "industry-sol-desc",
											children: "Sub-1s mobile admission pages, high-retention student showcase Reels via Meta Business Suite, and local SEO dominance. Result: 3.4x surge in admission inquiries without expensive agency retainers."
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/proof-of-work?service=website",
											className: "industry-sol-proof-btn",
											children: [/* @__PURE__ */ jsx("span", { children: "See Education Proof of Work" }), /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
										})
									]
								})
							]
						})
					})
				}),
				/* @__PURE__ */ jsx("section", {
					className: "industry-services-section",
					children: /* @__PURE__ */ jsx("div", {
						className: "industry-services-grid",
						children: EDUCATION_SERVICES.map((service, idx) => {
							const IconComp = service.icon;
							return /* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100 + idx * 70,
								children: /* @__PURE__ */ jsxs("div", {
									className: "industry-service-card",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "service-card-top",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "service-card-badge",
												children: /* @__PURE__ */ jsx(IconComp, {
													size: 24,
													strokeWidth: 1.9
												})
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "service-card-title",
												children: service.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "service-card-desc",
												children: service.description
											})
										]
									}), /* @__PURE__ */ jsx("div", {
										className: "service-card-bottom",
										children: /* @__PURE__ */ jsx(Link, {
											to: "/contact",
											className: "service-card-btn",
											"aria-label": `Get started with ${service.title}`,
											children: /* @__PURE__ */ jsx(ArrowRight, {
												size: 16,
												strokeWidth: 2.4
											})
										})
									})]
								})
							}, service.id);
						})
					})
				})
			]
		})]
	});
};
//#endregion
//#region src/routes/education.tsx
var education_exports = /* @__PURE__ */ __exportAll({
	default: () => education_default,
	meta: () => meta$11
});
var meta$11 = () => {
	return [
		{ title: "Education Industry Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Digital growth solutions for schools, colleges, and education brands."
		},
		{
			property: "og:title",
			content: "Education Industry Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Digital growth solutions for schools, colleges, and education brands."
		}
	];
};
var education_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(EducationPage, {});
});
//#endregion
//#region src/pages/industries/HealthcarePage.tsx
var HEALTHCARE_SERVICES = [
	{
		id: "web-dev",
		title: "Website Development",
		description: "Showcase your doctors, services, facilities, and expertise through a professional, easy-to-use website.",
		icon: Monitor
	},
	{
		id: "gbp",
		title: "Google Business Profile",
		description: "Help patients find your hospital or clinic on Google Search and Maps with accurate details, timings, and updates.",
		icon: MapPin
	},
	{
		id: "seo",
		title: "SEO",
		description: "Improve your visibility when people search for relevant healthcare services in your area.",
		icon: TrendingUp
	},
	{
		id: "smm",
		title: "Social Media Management",
		description: "Share useful health information, introduce your services, and build trust with your community.",
		icon: Users
	},
	{
		id: "ads",
		title: "Digital Advertising",
		description: "Reach people looking for your healthcare services and generate more patient enquiries.",
		icon: Megaphone
	}
];
var HealthcarePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "industry-page health-page-container",
		children: [/* @__PURE__ */ jsx("div", {
			className: "industry-bg-curve",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 1440 640",
				fill: "none",
				preserveAspectRatio: "none",
				children: [/* @__PURE__ */ jsx("path", {
					d: "M-40,80 C260,180 420,-30 840,40 C1180,100 1340,30 1520,70 L1520,0 L-40,0 Z",
					fill: "#F6EFE5",
					opacity: "0.6"
				}), /* @__PURE__ */ jsx("path", {
					d: "M-20,240 C340,320 620,110 1020,180 C1280,225 1420,130 1500,160",
					stroke: "#EFE3D3",
					strokeWidth: "38",
					strokeLinecap: "round",
					fill: "none",
					opacity: "0.5"
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "industry-container",
			children: [
				/* @__PURE__ */ jsx("section", {
					className: "industry-hero-section",
					children: /* @__PURE__ */ jsxs("div", {
						className: "industry-hero-grid",
						children: [/* @__PURE__ */ jsx("div", {
							className: "industry-hero-left",
							children: /* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 0,
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "industry-eyebrow",
										children: "S-BLOOM — HEALTHCARE"
									}),
									/* @__PURE__ */ jsxs("h1", {
										className: "industry-hero-title",
										children: [
											"Help More Patients",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "industry-gold-title",
												children: "Find and Choose You."
											})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "industry-hero-desc",
										children: "We help hospitals, clinics, and healthcare professionals build a strong online presence, clearly communicate their services, and receive more relevant patient enquiries to increase patient flow."
									}),
									/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "industry-hero-cta-btn",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to S-BLOOM" }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 17,
											strokeWidth: 2.4
										})]
									})
								]
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "industry-hero-right",
							children: /* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 150,
								style: {
									position: "relative",
									width: "100%",
									maxWidth: "610px"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									className: "industry-floating-script",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "script-text",
											children: "More Patients."
										}),
										/* @__PURE__ */ jsx("span", {
											className: "script-subtext",
											children: "Healthier Communities."
										}),
										/* @__PURE__ */ jsx("svg", {
											className: "script-accent-arc",
											viewBox: "0 0 100 20",
											fill: "none",
											children: /* @__PURE__ */ jsx("path", {
												d: "M 5,14 Q 50,4 95,16",
												stroke: "#B87B2E",
												strokeWidth: "2.5",
												strokeLinecap: "round"
											})
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "industry-photo-wrapper",
									children: /* @__PURE__ */ jsx("img", {
										src: "/health-hero-doctor.jpg",
										alt: "Doctor smiling warmly in clinic reception lobby",
										className: "industry-photo-img"
									})
								})]
							})
						})]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					className: "industry-problem-solution-section",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 50,
						children: /* @__PURE__ */ jsxs("div", {
							className: "industry-prob-sol-card",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "industry-prob-col",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "industry-prob-tag",
											children: "THE PROBLEM YOU FACE"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "industry-prob-title",
											children: "Losing Patients to Competitors Online"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "industry-prob-desc",
											children: "Clinics and hospitals frequently face empty consultation slots and invisible search rankings. Nearby patients search on Google Maps and choose competing clinics simply because those clinics appear first."
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { className: "industry-prob-divider" }),
								/* @__PURE__ */ jsxs("div", {
									className: "industry-sol-col",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "industry-sol-tag",
											children: "✦ THE S-BLOOM AI SOLUTION"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "industry-sol-title",
											children: "AI-Native Website, SEO & Top 3 Maps Ranking"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "industry-sol-desc",
											children: "We deploy lightning-fast AI medical websites, automated review capture, and localized patient acquisition funnels. Result: +284% organic patient calls and reliable appointment bookings at budget-friendly rates."
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/proof-of-work?service=gbp",
											className: "industry-sol-proof-btn",
											children: [/* @__PURE__ */ jsx("span", { children: "See Healthcare Proof of Work" }), /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
										})
									]
								})
							]
						})
					})
				}),
				/* @__PURE__ */ jsx("section", {
					className: "industry-services-section",
					children: /* @__PURE__ */ jsx("div", {
						className: "industry-services-grid",
						children: HEALTHCARE_SERVICES.map((service, idx) => {
							const IconComp = service.icon;
							return /* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100 + idx * 70,
								children: /* @__PURE__ */ jsxs("div", {
									className: "industry-service-card",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "service-card-top",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "service-card-badge",
												children: /* @__PURE__ */ jsx(IconComp, {
													size: 24,
													strokeWidth: 1.9
												})
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "service-card-title",
												children: service.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "service-card-desc",
												children: service.description
											})
										]
									}), /* @__PURE__ */ jsx("div", {
										className: "service-card-bottom",
										children: /* @__PURE__ */ jsx(Link, {
											to: "/contact",
											className: "service-card-btn",
											"aria-label": `Get started with ${service.title}`,
											children: /* @__PURE__ */ jsx(ArrowRight, {
												size: 16,
												strokeWidth: 2.4
											})
										})
									})]
								})
							}, service.id);
						})
					})
				})
			]
		})]
	});
};
//#endregion
//#region src/routes/healthcare.tsx
var healthcare_exports = /* @__PURE__ */ __exportAll({
	default: () => healthcare_default,
	meta: () => meta$10
});
var meta$10 = () => {
	return [
		{ title: "Healthcare Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Build trust and visibility for hospitals, clinics, and healthcare brands."
		},
		{
			property: "og:title",
			content: "Healthcare Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Build trust and visibility for hospitals, clinics, and healthcare brands."
		}
	];
};
var healthcare_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HealthcarePage, {});
});
//#endregion
//#region src/pages/industries/ProfessionalServicesPage.tsx
var ConsultingProfessionalServicesPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page ps-page-wrapper",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "ind-hero ps-hero-visual",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 0,
						children: /* @__PURE__ */ jsxs("div", {
							className: "ps-editorial-header",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "ind-hero-label",
									children: "SBLOOM — PROFESSIONAL SERVICES"
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "ind-hero-title",
									children: "Digital growth for consulting and professional services."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "ind-hero-desc",
									children: "We help IT consultancies, independent experts, and professional firms close the gap between their complex expertise and what their B2B clients actually understand."
								})
							]
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-journey ps-journey",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "ps-editorial-columns",
						children: [/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 100,
							className: "ps-col",
							children: /* @__PURE__ */ jsx("h2", { children: "B2B decisions focus on risk mitigation and authority." })
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							className: "ps-col",
							children: /* @__PURE__ */ jsx("p", { children: "Corporate clients and procurement teams do not make impulse purchases. They evaluate your firm based on proven methodologies, deep industry understanding, and past success. Whether you are an independent consultant or a large IT firm, our approach focuses on proving your capability before the first conversation even happens." })
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-challenge ps-challenge",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx("div", {
						className: "ps-editorial-box",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							children: [/* @__PURE__ */ jsx("h2", { children: "Making invisible expertise visible." }), /* @__PURE__ */ jsx("p", { children: "The biggest challenge for professional services is differentiation. Jargon-heavy websites and generic B2B marketing obscure your true value. You don't just need local visibility; you need to establish thought leadership and build authority in a crowded, competitive market." })]
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-approach ps-approach",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, {
						delay: 0,
						children: /* @__PURE__ */ jsx("div", {
							className: "ind-approach-header border-top",
							children: /* @__PURE__ */ jsx("h2", { children: "Our Approach applied to Professional Services" })
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "ps-approach-grid ind-approach-grid",
						children: [
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100,
								children: /* @__PURE__ */ jsxs("div", {
									className: "ps-approach-card ind-approach-card",
									children: [/* @__PURE__ */ jsx("h3", { children: "BUILD" }), /* @__PURE__ */ jsx("p", { children: "We develop a technical SEO architecture centered around the complex business problems your firm solves." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								children: /* @__PURE__ */ jsxs("div", {
									className: "ps-approach-card ind-approach-card",
									children: [/* @__PURE__ */ jsx("h3", { children: "CREATE" }), /* @__PURE__ */ jsx("p", { children: "We produce authoritative digital content, including long-form articles and optimized LinkedIn posts, that showcase your methodology." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								children: /* @__PURE__ */ jsxs("div", {
									className: "ps-approach-card ind-approach-card",
									children: [/* @__PURE__ */ jsx("h3", { children: "PROMOTE" }), /* @__PURE__ */ jsx("p", { children: "We utilize targeted LinkedIn B2B advertising and Account-Based Marketing (ABM) strategies to reach specific decision-makers." })]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "final-cta",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [/* @__PURE__ */ jsx("h2", { children: "Ready to grow your digital presence?" }), /* @__PURE__ */ jsx("div", {
							className: "hero-buttons",
							style: {
								marginTop: "40px",
								justifyContent: "center"
							},
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "btn btn-primary",
								children: "Request a Professional Services Strategy Consultation"
							})
						})]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/professional-services.tsx
var professional_services_exports = /* @__PURE__ */ __exportAll({
	default: () => professional_services_default,
	meta: () => meta$9
});
var meta$9 = () => {
	return [
		{ title: "Consulting & IT Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Digital presence for consulting and professional services."
		},
		{
			property: "og:title",
			content: "Consulting & IT Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Digital presence for consulting and professional services."
		}
	];
};
var professional_services_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(ConsultingProfessionalServicesPage, {});
});
//#endregion
//#region src/pages/solutions/SolutionsOverviewPage.tsx
var STAGES = [
	{
		id: "build",
		num: "01",
		label: "BUILD",
		headline: "Help people find your business",
		lead: "We create a strong online foundation so people can find your business, understand your services, and contact you.",
		ctaText: "Start Building Your Foundation",
		ctaLink: "/contact?interest=build",
		services: [
			{
				title: "Website Design & Development",
				desc: "Create a professional, mobile-friendly website that explains your services clearly.",
				icon: Globe
			},
			{
				title: "Google Business Profile",
				desc: "Set up and improve your profile so local customers can find your business on Google Search and Maps.",
				icon: MapPin
			},
			{
				title: "SEO & Search Visibility",
				desc: "Help your website appear when people search for services like yours.",
				icon: Search
			},
			{
				title: "Brand Presence",
				desc: "Keep your business information and branding consistent across relevant online platforms.",
				icon: ShieldCheck
			}
		]
	},
	{
		id: "create",
		num: "02",
		label: "CREATE",
		headline: "Help people understand your value",
		lead: "We create useful, engaging content that explains what makes your business valuable and helps people build trust in your brand.",
		ctaText: "Create Meaningful Content",
		ctaLink: "/contact?interest=create",
		services: [
			{
				title: "Social Media Management & Posts",
				desc: "Consistent, professional posting that keeps your audience informed, engaged, and connected.",
				icon: Share2
			},
			{
				title: "Photo & Video Content",
				desc: "High-quality visual production including reels, short-form video, and expert photography.",
				icon: Camera
			},
			{
				title: "Captions, Copy & Digital Content",
				desc: "Clear, compelling messaging that communicates your expertise and value in everyday language.",
				icon: FileText
			}
		]
	},
	{
		id: "promote",
		num: "03",
		label: "PROMOTE",
		headline: "Reach the right audience",
		lead: "We help your business reach relevant people through targeted advertising and marketing campaigns.",
		ctaText: "Promote Your Business",
		ctaLink: "/contact?interest=promote",
		services: [
			{
				title: "Meta Ads",
				desc: "Targeted Instagram and Facebook campaigns reaching clients and decision-makers in your target geography.",
				icon: Megaphone
			},
			{
				title: "Google Ads",
				desc: "Search and local service ads positioned when high-intent prospects search for your solutions.",
				icon: Search
			},
			{
				title: "Campaign Planning & Management",
				desc: "Strategic audience targeting, creative testing, and budget allocation to maximize return.",
				icon: Target
			},
			{
				title: "Performance Monitoring & Improvement",
				desc: "Ongoing campaign optimization to refine cost-per-enquiry and reach quality prospects.",
				icon: LineChart
			}
		]
	},
	{
		id: "grow",
		num: "04",
		label: "GROW",
		headline: "Turn your online presence into opportunities",
		lead: "GROW is the intended business outcome of BUILD, CREATE, and PROMOTE — not a separate standalone service. When your foundation is solid, your value is clear, and your promotions reach the right people, sustainable growth happens naturally.",
		ctaText: "Talk to sBLOOM About Growth",
		ctaLink: "/contact",
		services: [
			{
				title: "Better Online Visibility",
				desc: "A recognized, discoverable digital presence across search engines, maps, and social platforms.",
				icon: Eye
			},
			{
				title: "More Relevant Enquiries & Opportunities",
				desc: "Connect with prospective clients, students, or patients who are genuinely seeking your expertise.",
				icon: Users
			},
			{
				title: "Stronger Brand Trust",
				desc: "Consistent messaging and verified quality that give prospective clients confidence in choosing you.",
				icon: Award
			},
			{
				title: "Support for Long-Term Business Growth",
				desc: "A durable digital asset that works continuously to sustain and expand your business reputation.",
				icon: TrendingUp
			}
		]
	}
];
var SolutionsOverviewPage = ({ initialSection }) => {
	const location = useLocation();
	const [activeIdx, setActiveIdx] = useState(0);
	const [direction, setDirection] = useState(1);
	const trackRef = useRef(null);
	const isProgrammaticScroll = useRef(false);
	const activeStage = STAGES[activeIdx];
	const goToStage = (newIdx, scrollIntoTrack = true) => {
		if (newIdx < 0 || newIdx >= STAGES.length) return;
		setDirection(newIdx > activeIdx ? 1 : -1);
		setActiveIdx(newIdx);
		const stageId = STAGES[newIdx].id;
		if (window.location.hash !== `#${stageId}`) window.history.replaceState(null, "", `#${stageId}`);
		if (scrollIntoTrack && trackRef.current) {
			isProgrammaticScroll.current = true;
			const trackTop = trackRef.current.offsetTop - 85;
			const trackHeight = trackRef.current.offsetHeight - window.innerHeight;
			const targetScroll = trackTop + newIdx / (STAGES.length - 1) * trackHeight;
			window.scrollTo({
				top: Math.max(0, targetScroll),
				behavior: "smooth"
			});
			setTimeout(() => {
				isProgrammaticScroll.current = false;
			}, 700);
		}
	};
	useEffect(() => {
		const hash = (initialSection || location.hash.replace("#", "")).toLowerCase();
		const foundIdx = STAGES.findIndex((s) => s.id === hash);
		if (foundIdx !== -1) goToStage(foundIdx, true);
	}, [initialSection, location.hash]);
	useEffect(() => {
		const handleScroll = () => {
			if (isProgrammaticScroll.current || !trackRef.current) return;
			const track = trackRef.current;
			const rect = track.getBoundingClientRect();
			const trackTop = window.pageYOffset + rect.top;
			const trackHeight = track.offsetHeight - window.innerHeight;
			if (trackHeight <= 0) return;
			const currentScroll = window.pageYOffset - trackTop;
			const progress = Math.min(1, Math.max(0, currentScroll / trackHeight));
			let nextIdx = 0;
			if (progress < .28) nextIdx = 0;
			else if (progress < .58) nextIdx = 1;
			else if (progress < .88) nextIdx = 2;
			else nextIdx = 3;
			if (nextIdx !== activeIdx) {
				setDirection(nextIdx > activeIdx ? 1 : -1);
				setActiveIdx(nextIdx);
				window.history.replaceState(null, "", `#${STAGES[nextIdx].id}`);
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [activeIdx]);
	return /* @__PURE__ */ jsxs("div", {
		className: "sol-page",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "sol-bg-mesh",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("section", {
				className: "sol-hero-intro",
				children: /* @__PURE__ */ jsx("div", {
					className: "sol-container",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "sol-eyebrow",
								children: "OUR SOLUTIONS"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "sol-hero-title",
								children: [
									"From Foundational Setup to",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "sol-title-accent",
										children: "Sustainable Growth."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "sol-hero-desc",
								children: "We help good businesses become discoverable, trusted, and chosen through a structured, four-phase digital process."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				ref: trackRef,
				className: "sol-scroll-track",
				id: "solutions-track",
				children: /* @__PURE__ */ jsx("div", {
					className: "sol-pinned-viewport",
					children: /* @__PURE__ */ jsxs("div", {
						className: "sol-container",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "sol-single-line-nav",
								role: "tablist",
								"aria-label": "Solutions Stages",
								children: STAGES.map((stg, idx) => {
									const isActive = activeIdx === idx;
									const isPassed = activeIdx > idx;
									return /* @__PURE__ */ jsxs(React.Fragment, { children: [/* @__PURE__ */ jsxs("button", {
										type: "button",
										role: "tab",
										"aria-selected": isActive,
										className: `sol-line-tab-btn ${isActive ? "active" : ""}`,
										onClick: () => goToStage(idx, true),
										children: [/* @__PURE__ */ jsx("span", {
											className: "sol-line-num",
											children: stg.num
										}), /* @__PURE__ */ jsx("span", { children: stg.label })]
									}), idx < STAGES.length - 1 && /* @__PURE__ */ jsx("div", {
										className: "sol-line-connector",
										"aria-hidden": "true",
										children: /* @__PURE__ */ jsx("div", {
											className: "sol-line-connector-fill",
											style: { width: isPassed ? "100%" : "0%" }
										})
									})] }, stg.id);
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "sol-page-card-wrapper",
								children: /* @__PURE__ */ jsx(AnimatePresence, {
									mode: "wait",
									custom: direction,
									children: /* @__PURE__ */ jsxs(motion.div, {
										custom: direction,
										variants: {
											enter: (dir) => ({
												x: dir > 0 ? 50 : -50,
												opacity: 0,
												rotateY: dir > 0 ? -6 : 6,
												scale: .98
											}),
											center: {
												x: 0,
												opacity: 1,
												rotateY: 0,
												scale: 1,
												transition: {
													duration: .42,
													ease: [
														.16,
														1,
														.3,
														1
													]
												}
											},
											exit: (dir) => ({
												x: dir > 0 ? -50 : 50,
												opacity: 0,
												rotateY: dir > 0 ? 6 : -6,
												scale: .98,
												transition: {
													duration: .3,
													ease: [
														.16,
														1,
														.3,
														1
													]
												}
											})
										},
										initial: "enter",
										animate: "center",
										exit: "exit",
										className: "sol-page-card",
										children: [/* @__PURE__ */ jsx("div", {
											className: "sol-card-top-bar",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsxs("div", {
											className: "sol-card-grid",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "sol-card-content",
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "sol-card-badge-row",
														children: [/* @__PURE__ */ jsx("div", {
															className: "sol-card-step-num",
															children: activeStage.num
														}), /* @__PURE__ */ jsx("span", {
															className: "sol-card-tag",
															children: activeStage.label
														})]
													}),
													/* @__PURE__ */ jsx("h2", {
														className: "sol-card-headline",
														children: activeStage.headline
													}),
													/* @__PURE__ */ jsx("p", {
														className: "sol-card-lead",
														children: activeStage.lead
													}),
													/* @__PURE__ */ jsx("div", {
														className: "sol-service-list",
														children: activeStage.services.map((svc, i) => {
															const IconComp = svc.icon;
															return /* @__PURE__ */ jsxs("div", {
																className: "sol-service-item",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "sol-service-icon-box",
																	children: /* @__PURE__ */ jsx(IconComp, {
																		size: 17,
																		strokeWidth: 2.2
																	})
																}), /* @__PURE__ */ jsxs("div", {
																	className: "sol-service-text-wrap",
																	children: [/* @__PURE__ */ jsx("h3", {
																		className: "sol-service-title",
																		children: svc.title
																	}), /* @__PURE__ */ jsx("p", {
																		className: "sol-service-desc",
																		children: svc.desc
																	})]
																})]
															}, i);
														})
													}),
													activeStage.id !== "grow" && /* @__PURE__ */ jsxs(Link, {
														to: activeStage.ctaLink,
														className: "sol-card-cta-btn",
														children: [/* @__PURE__ */ jsx("span", { children: activeStage.ctaText }), /* @__PURE__ */ jsx(ArrowRight, {
															size: 17,
															strokeWidth: 2.2
														})]
													})
												]
											}), /* @__PURE__ */ jsxs("div", {
												className: "sol-card-visual-wrap",
												children: [
													activeStage.id === "build" && /* @__PURE__ */ jsxs("div", {
														className: "sol-visual-build",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "sol-gbp-preview",
															children: [
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-gbp-top",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "sol-gbp-verified",
																		children: [/* @__PURE__ */ jsx("span", { children: "Your Business Profile" }), /* @__PURE__ */ jsx(ShieldCheck, {
																			size: 16,
																			className: "sol-verified-badge"
																		})]
																	}), /* @__PURE__ */ jsxs("div", {
																		className: "sol-gbp-rating",
																		children: [/* @__PURE__ */ jsx("span", {
																			className: "sol-stars",
																			children: "★★★★★"
																		}), " 4.9 (120+ Reviews)"]
																	})]
																}),
																/* @__PURE__ */ jsx("div", {
																	className: "sol-gbp-meta",
																	children: "Local Health / Education / Professional Firm · Open Now"
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-gbp-actions",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "sol-gbp-action-chip",
																			children: "Call Now"
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "sol-gbp-action-chip",
																			children: "Directions"
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "sol-gbp-action-chip",
																			children: "Website"
																		})
																	]
																})
															]
														}), /* @__PURE__ */ jsxs("div", {
															className: "sol-web-preview",
															children: [/* @__PURE__ */ jsxs("div", {
																className: "sol-browser-header",
																children: [
																	/* @__PURE__ */ jsx("span", { className: "sol-browser-dot" }),
																	/* @__PURE__ */ jsx("span", { className: "sol-browser-dot" }),
																	/* @__PURE__ */ jsx("span", { className: "sol-browser-dot" }),
																	/* @__PURE__ */ jsx("span", {
																		className: "sol-browser-url",
																		children: "https://yourbusiness.com"
																	})
																]
															}), /* @__PURE__ */ jsxs("div", {
																className: "sol-seo-tags",
																children: [
																	/* @__PURE__ */ jsx("span", {
																		className: "sol-seo-tag",
																		children: "Mobile Responsive"
																	}),
																	/* @__PURE__ */ jsx("span", {
																		className: "sol-seo-tag",
																		children: "Fast Loading"
																	}),
																	/* @__PURE__ */ jsx("span", {
																		className: "sol-seo-tag",
																		children: "Local SEO #1"
																	})
																]
															})]
														})]
													}),
													activeStage.id === "create" && /* @__PURE__ */ jsx("div", {
														className: "sol-visual-create",
														children: /* @__PURE__ */ jsxs("div", {
															className: "sol-reel-card",
															children: [
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-reel-header",
																	children: [/* @__PURE__ */ jsx("div", {
																		className: "sol-reel-avatar",
																		children: "sB"
																	}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
																		className: "sol-reel-user",
																		children: "sBLOOM Creative Suite"
																	}), /* @__PURE__ */ jsx("div", {
																		style: {
																			fontSize: "0.74rem",
																			color: "#785A46"
																		},
																		children: "High-Impact Content"
																	})] })]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-reel-frame",
																	children: [/* @__PURE__ */ jsx("div", {
																		className: "sol-reel-play-btn",
																		children: /* @__PURE__ */ jsx(Play, {
																			size: 18,
																			fill: "#FFFCF7",
																			strokeWidth: 0
																		})
																	}), /* @__PURE__ */ jsx("span", {
																		className: "sol-reel-badge",
																		children: "0:45 Reel"
																	})]
																}),
																/* @__PURE__ */ jsx("p", {
																	className: "sol-reel-caption",
																	children: "Showcasing your real expertise, workplace, and genuine client stories with clear storytelling."
																})
															]
														})
													}),
													activeStage.id === "promote" && /* @__PURE__ */ jsx("div", {
														className: "sol-visual-promote",
														children: /* @__PURE__ */ jsxs("div", {
															className: "sol-ad-box",
															children: [
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-ad-tag-row",
																	children: [/* @__PURE__ */ jsx("span", {
																		className: "sol-ad-sponsored",
																		children: "Sponsored Campaign"
																	}), /* @__PURE__ */ jsxs("span", {
																		className: "sol-ad-status",
																		children: [/* @__PURE__ */ jsx("span", { className: "sol-status-dot" }), " Active & Optimized"]
																	})]
																}),
																/* @__PURE__ */ jsx("h4", {
																	className: "sol-ad-title",
																	children: "Expert-Led Healthcare & Professional Services"
																}),
																/* @__PURE__ */ jsx("p", {
																	className: "sol-ad-copy",
																	children: "Trusted care and tailored solutions. Direct consultations with specialized professionals."
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-ad-targeting",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "sol-targeting-pill",
																			children: "Radius: 15 km"
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "sol-targeting-pill",
																			children: "High Search Intent"
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "sol-targeting-pill",
																			children: "Verified Audience"
																		})
																	]
																})
															]
														})
													}),
													activeStage.id === "grow" && /* @__PURE__ */ jsxs("div", {
														className: "sol-visual-grow",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "sol-outcome-grid",
															children: [
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-outcome-card",
																	children: [
																		/* @__PURE__ */ jsx("div", {
																			className: "sol-outcome-icon",
																			children: /* @__PURE__ */ jsx(Eye, { size: 15 })
																		}),
																		/* @__PURE__ */ jsx("div", {
																			className: "sol-outcome-title",
																			children: "Discoverability"
																		}),
																		/* @__PURE__ */ jsx("p", {
																			className: "sol-outcome-sub",
																			children: "Easy to find on Google and Maps"
																		})
																	]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-outcome-card",
																	children: [
																		/* @__PURE__ */ jsx("div", {
																			className: "sol-outcome-icon",
																			children: /* @__PURE__ */ jsx(Users, { size: 15 })
																		}),
																		/* @__PURE__ */ jsx("div", {
																			className: "sol-outcome-title",
																			children: "Enquiries"
																		}),
																		/* @__PURE__ */ jsx("p", {
																			className: "sol-outcome-sub",
																			children: "Qualified, high-intent interest"
																		})
																	]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-outcome-card",
																	children: [
																		/* @__PURE__ */ jsx("div", {
																			className: "sol-outcome-icon",
																			children: /* @__PURE__ */ jsx(Award, { size: 15 })
																		}),
																		/* @__PURE__ */ jsx("div", {
																			className: "sol-outcome-title",
																			children: "Brand Trust"
																		}),
																		/* @__PURE__ */ jsx("p", {
																			className: "sol-outcome-sub",
																			children: "Verified credibility & reviews"
																		})
																	]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-outcome-card",
																	children: [
																		/* @__PURE__ */ jsx("div", {
																			className: "sol-outcome-icon",
																			children: /* @__PURE__ */ jsx(TrendingUp, { size: 15 })
																		}),
																		/* @__PURE__ */ jsx("div", {
																			className: "sol-outcome-title",
																			children: "Long-Term Value"
																		}),
																		/* @__PURE__ */ jsx("p", {
																			className: "sol-outcome-sub",
																			children: "Sustainable market presence"
																		})
																	]
																})
															]
														}), /* @__PURE__ */ jsxs("div", {
															className: "sol-grow-note-box",
															children: [/* @__PURE__ */ jsx("strong", { children: "Coordinated Outcome:" }), " We focus on sustainable, long-term digital strength rather than short-lived gimmicks or unrealistic guarantees."]
														})]
													})
												]
											})]
										})]
									}, activeStage.id)
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sol-page-controls-bar",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "sol-page-indicator",
									children: [/* @__PURE__ */ jsxs("span", { children: [
										"Page ",
										/* @__PURE__ */ jsx("strong", { children: activeIdx + 1 }),
										" of ",
										/* @__PURE__ */ jsx("strong", { children: "4" }),
										":"
									] }), /* @__PURE__ */ jsx("span", {
										style: { color: "#C9952E" },
										children: activeStage.label
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "sol-page-arrows",
									children: [/* @__PURE__ */ jsxs("button", {
										type: "button",
										className: "sol-page-arrow-btn",
										onClick: () => goToStage(activeIdx - 1, true),
										disabled: activeIdx === 0,
										"aria-label": "Previous Page",
										children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 15 }), /* @__PURE__ */ jsx("span", { children: "Previous" })]
									}), /* @__PURE__ */ jsxs("button", {
										type: "button",
										className: "sol-page-arrow-btn",
										onClick: () => goToStage(activeIdx + 1, true),
										disabled: activeIdx === STAGES.length - 1,
										"aria-label": "Next Page",
										children: [/* @__PURE__ */ jsx("span", { children: "Next" }), /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
									})]
								})]
							})
						]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/solutions.tsx
var solutions_exports = /* @__PURE__ */ __exportAll({
	default: () => solutions_default,
	meta: () => meta$8
});
var meta$8 = () => {
	return [
		{ title: "Our Solutions | sBLOOM" },
		{
			name: "description",
			content: "Discover how we help organizations build, create, and promote."
		},
		{
			property: "og:title",
			content: "Our Solutions | sBLOOM"
		},
		{
			property: "og:description",
			content: "Discover how we help organizations build, create, and promote."
		}
	];
};
var solutions_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, {});
});
//#endregion
//#region src/routes/build.tsx
var build_exports = /* @__PURE__ */ __exportAll({
	default: () => build_default,
	meta: () => meta$7
});
var meta$7 = () => {
	return [
		{ title: "BUILD — Help People Find Your Business | sBLOOM Solutions" },
		{
			name: "description",
			content: "Website design, Google Business Profile, and SEO solutions."
		},
		{
			property: "og:title",
			content: "BUILD — Help People Find Your Business | sBLOOM Solutions"
		},
		{
			property: "og:description",
			content: "Website design, Google Business Profile, and SEO solutions."
		}
	];
};
var build_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, { initialSection: "build" });
});
//#endregion
//#region src/routes/create.tsx
var create_exports = /* @__PURE__ */ __exportAll({
	default: () => create_default,
	meta: () => meta$6
});
var meta$6 = () => {
	return [
		{ title: "CREATE — Help People Understand Your Value | sBLOOM Solutions" },
		{
			name: "description",
			content: "Social media management, photo, and video content solutions."
		},
		{
			property: "og:title",
			content: "CREATE — Help People Understand Your Value | sBLOOM Solutions"
		},
		{
			property: "og:description",
			content: "Social media management, photo, and video content solutions."
		}
	];
};
var create_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, { initialSection: "create" });
});
//#endregion
//#region src/routes/promote.tsx
var promote_exports = /* @__PURE__ */ __exportAll({
	default: () => promote_default,
	meta: () => meta$5
});
var meta$5 = () => {
	return [
		{ title: "PROMOTE — Reach The Right Audience | sBLOOM Solutions" },
		{
			name: "description",
			content: "Targeted advertising and marketing campaigns."
		},
		{
			property: "og:title",
			content: "PROMOTE — Reach The Right Audience | sBLOOM Solutions"
		},
		{
			property: "og:description",
			content: "Targeted advertising and marketing campaigns."
		}
	];
};
var promote_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, { initialSection: "promote" });
});
//#endregion
//#region src/pages/AboutPage.tsx
var AboutPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "about-page",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "about-bg-glow about-glow-top",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "about-bg-glow about-glow-bottom",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "about-bg-waves",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsxs("svg", {
					viewBox: "0 0 1440 900",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M-100 240C200 180 380 340 520 480C680 640 920 720 1200 680C1340 660 1480 580 1580 500",
						stroke: "#EDE1D1",
						strokeWidth: "32",
						opacity: "0.4"
					}), /* @__PURE__ */ jsx("path", {
						d: "M-50 160C250 120 450 260 600 420C750 580 980 660 1280 600",
						stroke: "#F5ECE0",
						strokeWidth: "24",
						opacity: "0.6"
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container about-container",
				children: [/* @__PURE__ */ jsxs("section", {
					className: "about-hero-grid",
					children: [/* @__PURE__ */ jsx("div", {
						className: "about-hero-text",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "about-eyebrow",
									children: "ABOUT S-BLOOM"
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "about-hero-title",
									children: "We help good businesses get noticed and chosen."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "about-hero-desc",
									children: "S-Bloom helps organizations in healthcare, education, and professional services explain what they do, reach the right people, and build trust online."
								})
							]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "about-hero-visual-wrap",
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 150,
							children: /* @__PURE__ */ jsxs("div", {
								className: "about-visual-scene",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "about-arches-cluster",
									children: [
										/* @__PURE__ */ jsxs(Link, {
											to: "/industries/healthcare",
											className: "about-arch-card about-arch-healthcare",
											children: [/* @__PURE__ */ jsx("div", {
												className: "about-arch-img-wrap",
												children: /* @__PURE__ */ jsx("img", {
													src: "/about-healthcare-doctor.jpg",
													alt: "S-Bloom Healthcare Partner",
													className: "about-arch-img"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "about-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "about-badge-icon-box",
													children: /* @__PURE__ */ jsx(Heart, {
														size: 14,
														strokeWidth: 2.4
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "about-badge-text",
													children: "Healthcare"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/industries/education",
											className: "about-arch-card about-arch-education",
											children: [/* @__PURE__ */ jsx("div", {
												className: "about-arch-img-wrap",
												children: /* @__PURE__ */ jsx("img", {
													src: "/about-education-teacher.jpg",
													alt: "S-Bloom Education Partner",
													className: "about-arch-img"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "about-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "about-badge-icon-box",
													children: /* @__PURE__ */ jsx(GraduationCap, {
														size: 15,
														strokeWidth: 2.2
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "about-badge-text",
													children: "Education"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/industries/professional-services",
											className: "about-arch-card about-arch-pro",
											children: [/* @__PURE__ */ jsx("div", {
												className: "about-arch-img-wrap",
												children: /* @__PURE__ */ jsx("img", {
													src: "/about-professional-exec.jpg",
													alt: "S-Bloom Professional Services Partner",
													className: "about-arch-img"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "about-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "about-badge-icon-box",
													children: /* @__PURE__ */ jsx(Briefcase, {
														size: 14,
														strokeWidth: 2.4
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "about-badge-text",
													children: "Professional Services"
												})]
											})]
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "about-desk-foreground",
									children: /* @__PURE__ */ jsxs("div", {
										className: "about-laptop-mockup",
										children: [/* @__PURE__ */ jsx("div", {
											className: "about-laptop-lid",
											children: /* @__PURE__ */ jsx("div", {
												className: "about-laptop-screen",
												children: /* @__PURE__ */ jsxs("div", {
													className: "about-chart-display",
													children: [/* @__PURE__ */ jsx(TrendingUp, {
														size: 20,
														className: "about-chart-icon",
														strokeWidth: 2.4
													}), /* @__PURE__ */ jsxs("div", {
														className: "about-chart-bars",
														children: [
															/* @__PURE__ */ jsx("span", {
																className: "about-bar",
																style: { height: "35%" }
															}),
															/* @__PURE__ */ jsx("span", {
																className: "about-bar",
																style: { height: "55%" }
															}),
															/* @__PURE__ */ jsx("span", {
																className: "about-bar",
																style: { height: "75%" }
															}),
															/* @__PURE__ */ jsx("span", {
																className: "about-bar is-active",
																style: { height: "100%" }
															})
														]
													})]
												})
											})
										}), /* @__PURE__ */ jsx("div", { className: "about-laptop-base" })]
									})
								})]
							})
						})
					})]
				}), /* @__PURE__ */ jsx("section", {
					className: "about-pillars-section",
					children: /* @__PURE__ */ jsxs("div", {
						className: "about-pillars-grid",
						children: [/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							className: "h-full",
							children: /* @__PURE__ */ jsxs("div", {
								className: "about-pillar-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "about-pillar-icon-box",
									children: /* @__PURE__ */ jsx(Target, {
										size: 26,
										strokeWidth: 1.8,
										className: "about-pillar-icon"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "about-pillar-content",
									children: [
										/* @__PURE__ */ jsx("h2", {
											className: "about-pillar-title",
											children: "Our Approach"
										}),
										/* @__PURE__ */ jsx("div", { className: "about-pillar-underline" }),
										/* @__PURE__ */ jsx("p", {
											className: "about-pillar-text",
											children: "We first understand your business and audience. Then we create a clear digital strategy that helps people find you, understand your value, and trust your services."
										})
									]
								})]
							})
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 300,
							className: "h-full",
							children: /* @__PURE__ */ jsxs("div", {
								className: "about-pillar-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "about-pillar-icon-box",
									children: /* @__PURE__ */ jsx(Users, {
										size: 26,
										strokeWidth: 1.8,
										className: "about-pillar-icon"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "about-pillar-content",
									children: [
										/* @__PURE__ */ jsx("h2", {
											className: "about-pillar-title",
											children: "How We Work"
										}),
										/* @__PURE__ */ jsx("div", { className: "about-pillar-underline" }),
										/* @__PURE__ */ jsx("p", {
											className: "about-pillar-text",
											children: "Our core team plans the strategy and works with skilled creative partners to deliver the right content, design, website, and digital marketing support."
										})
									]
								})]
							})
						})]
					})
				})]
			})
		]
	});
};
//#endregion
//#region src/routes/about.tsx
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => about_default,
	meta: () => meta$4
});
var meta$4 = () => {
	return [
		{ title: "About sBLOOM | Our Story" },
		{
			name: "description",
			content: "Learn about sBLOOM, our methodology, and our team."
		},
		{
			property: "og:title",
			content: "About sBLOOM | Our Story"
		},
		{
			property: "og:description",
			content: "Learn about sBLOOM, our methodology, and our team."
		}
	];
};
var about_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(AboutPage, {});
});
//#endregion
//#region src/pages/HowItWorksPage.tsx
var STEPS_DATA = [
	{
		num: "01",
		icon: Search,
		tint: "lavender",
		title: "Understand your business",
		desc: "We learn about your services, audience, goals and current online presence to understand where you stand today."
	},
	{
		num: "02",
		icon: FileEdit,
		tint: "peach",
		title: "Find opportunities",
		desc: "We analyze what's working, identify gaps, and find opportunities to help more people discover and choose you."
	},
	{
		num: "03",
		icon: Lightbulb,
		tint: "lavender",
		title: "Create the right plan",
		desc: "We build a clear, customized strategy with the right messaging, content and channels based on your goals."
	},
	{
		num: "04",
		icon: Rocket,
		tint: "peach",
		title: "Put the plan into action",
		desc: "We create content, improve your online presence and run targeted campaigns across the right platforms."
	},
	{
		num: "05",
		icon: BarChart3,
		tint: "lavender",
		title: "Track and grow",
		desc: "We monitor performance, see what's working, and keep improving to bring you better visibility, enquiries and long-term growth."
	}
];
var HowItWorksPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "hiw-page",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "hiw-bg-glow hiw-glow-top",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "hiw-bg-glow hiw-glow-bottom",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "hiw-bg-waves",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsxs("svg", {
					viewBox: "0 0 1440 900",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M-80 200C180 120 400 280 580 440C760 600 1020 680 1280 620C1380 600 1480 540 1560 480",
						stroke: "#EDE1D1",
						strokeWidth: "32",
						opacity: "0.38"
					}), /* @__PURE__ */ jsx("path", {
						d: "M-40 120C220 80 440 220 620 380C800 540 1060 620 1340 560",
						stroke: "#F5ECE0",
						strokeWidth: "22",
						opacity: "0.55"
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container hiw-container",
				children: [/* @__PURE__ */ jsxs("section", {
					className: "hiw-hero-grid",
					children: [/* @__PURE__ */ jsx("div", {
						className: "hiw-hero-text",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "hiw-eyebrow",
									children: "HOW IT WORKS"
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "hiw-hero-title",
									children: [
										"From understanding",
										/* @__PURE__ */ jsx("br", {}),
										"to ",
										/* @__PURE__ */ jsx("span", {
											className: "hiw-gold-italic",
											children: "real growth."
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "hiw-title-underline",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "hiw-hero-desc",
									children: "We follow a simple, structured process to understand your business, create the right strategy, and help you reach the right people with consistent execution."
								})
							]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "hiw-hero-visual-wrap",
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 150,
							children: /* @__PURE__ */ jsxs("div", {
								className: "hiw-visual-scene",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "hiw-arches-cluster",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "hiw-arch-card hiw-arch-1",
											children: [/* @__PURE__ */ jsx("img", {
												src: "/hiw-understand.jpg",
												alt: "Understand your business",
												className: "hiw-arch-img"
											}), /* @__PURE__ */ jsxs("div", {
												className: "hiw-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "hiw-badge-icon-box",
													children: /* @__PURE__ */ jsx(Search, {
														size: 13,
														strokeWidth: 2.4
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "hiw-badge-text",
													children: "Understand"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "hiw-arch-card hiw-arch-2",
											children: [/* @__PURE__ */ jsx("img", {
												src: "/hiw-plan.jpg",
												alt: "Plan strategy",
												className: "hiw-arch-img"
											}), /* @__PURE__ */ jsxs("div", {
												className: "hiw-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "hiw-badge-icon-box",
													children: /* @__PURE__ */ jsx(FileEdit, {
														size: 13,
														strokeWidth: 2.4
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "hiw-badge-text",
													children: "Plan"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "hiw-arch-card hiw-arch-3",
											children: [/* @__PURE__ */ jsx("img", {
												src: "/hiw-create-promote.jpg",
												alt: "Create and promote",
												className: "hiw-arch-img"
											}), /* @__PURE__ */ jsxs("div", {
												className: "hiw-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "hiw-badge-icon-box",
													children: /* @__PURE__ */ jsx(Rocket, {
														size: 13,
														strokeWidth: 2.4
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "hiw-badge-text",
													children: "Create & Promote"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "hiw-arch-card hiw-arch-4",
											children: [/* @__PURE__ */ jsx("img", {
												src: "/hiw-track-grow.jpg",
												alt: "Track and grow analytics",
												className: "hiw-arch-img"
											}), /* @__PURE__ */ jsxs("div", {
												className: "hiw-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "hiw-badge-icon-box",
													children: /* @__PURE__ */ jsx(BarChart3, {
														size: 13,
														strokeWidth: 2.4
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "hiw-badge-text",
													children: "Track & Grow"
												})]
											})]
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "hiw-desk-scene",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "hiw-laptop-mockup",
										children: [/* @__PURE__ */ jsx("div", {
											className: "hiw-laptop-lid",
											children: /* @__PURE__ */ jsx("div", {
												className: "hiw-laptop-screen",
												children: /* @__PURE__ */ jsxs("div", {
													className: "hiw-screen-content",
													children: [
														/* @__PURE__ */ jsx("span", {
															className: "hiw-screen-heading",
															children: "Your Growth Journey"
														}),
														/* @__PURE__ */ jsx("div", { className: "hiw-screen-underline" }),
														/* @__PURE__ */ jsxs("div", {
															className: "hiw-chart-wrap",
															children: [/* @__PURE__ */ jsx(TrendingUp, {
																size: 16,
																className: "hiw-chart-arrow",
																strokeWidth: 2.5
															}), /* @__PURE__ */ jsxs("div", {
																className: "hiw-chart-bars",
																children: [
																	/* @__PURE__ */ jsx("span", {
																		className: "hiw-bar",
																		style: { height: "30%" }
																	}),
																	/* @__PURE__ */ jsx("span", {
																		className: "hiw-bar",
																		style: { height: "50%" }
																	}),
																	/* @__PURE__ */ jsx("span", {
																		className: "hiw-bar",
																		style: { height: "70%" }
																	}),
																	/* @__PURE__ */ jsx("span", {
																		className: "hiw-bar",
																		style: { height: "88%" }
																	}),
																	/* @__PURE__ */ jsx("span", {
																		className: "hiw-bar is-top",
																		style: { height: "100%" }
																	})
																]
															})]
														})
													]
												})
											})
										}), /* @__PURE__ */ jsx("div", { className: "hiw-laptop-base" })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "hiw-book-stack",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "hiw-book hiw-book-1",
												children: /* @__PURE__ */ jsx("span", {
													className: "hiw-book-spine",
													children: "Strategy"
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: "hiw-book hiw-book-2",
												children: /* @__PURE__ */ jsx("span", {
													className: "hiw-book-spine",
													children: "Content"
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: "hiw-book hiw-book-3",
												children: /* @__PURE__ */ jsx("span", {
													className: "hiw-book-spine",
													children: "Visibility"
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: "hiw-book hiw-book-4",
												children: /* @__PURE__ */ jsx("span", {
													className: "hiw-book-spine",
													children: "Growth"
												})
											})
										]
									})]
								})]
							})
						})
					})]
				}), /* @__PURE__ */ jsxs("section", {
					className: "hiw-steps-section",
					children: [/* @__PURE__ */ jsx("div", {
						className: "hiw-connecting-wave",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsx("svg", {
							viewBox: "0 0 1200 120",
							preserveAspectRatio: "none",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: /* @__PURE__ */ jsx("path", {
								d: "M30 60 C 130 20, 170 100, 270 60 C 370 20, 410 100, 510 60 C 610 20, 650 100, 750 60 C 850 20, 890 100, 990 60 C 1090 20, 1130 90, 1180 60",
								stroke: "#DECDB8",
								strokeWidth: "2.5",
								strokeDasharray: "4 4"
							})
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "hiw-steps-grid",
						children: STEPS_DATA.map((step, idx) => {
							const IconComp = step.icon;
							return /* @__PURE__ */ jsx(ScrollReveal, {
								delay: 120 + idx * 80,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "hiw-step-card-wrap",
									children: [/* @__PURE__ */ jsx("div", {
										className: "hiw-step-num-badge",
										children: /* @__PURE__ */ jsx("span", { children: step.num })
									}), /* @__PURE__ */ jsxs("div", {
										className: "hiw-step-card",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: `hiw-step-icon-circle hiw-tint-${step.tint}`,
												children: /* @__PURE__ */ jsx(IconComp, {
													size: 20,
													strokeWidth: 1.9
												})
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "hiw-step-title",
												children: step.title
											}),
											/* @__PURE__ */ jsx("div", {
												className: "hiw-step-underline",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "hiw-step-desc",
												children: step.desc
											})
										]
									})]
								})
							}, step.num);
						})
					})]
				})]
			})
		]
	});
};
//#endregion
//#region src/routes/how-it-works.tsx
var how_it_works_exports = /* @__PURE__ */ __exportAll({
	default: () => how_it_works_default,
	meta: () => meta$3
});
var meta$3 = () => {
	return [
		{ title: "How It Works | sBLOOM Methodology" },
		{
			name: "description",
			content: "Our diagnose-first approach to digital growth."
		},
		{
			property: "og:title",
			content: "How It Works | sBLOOM Methodology"
		},
		{
			property: "og:description",
			content: "Our diagnose-first approach to digital growth."
		}
	];
};
var how_it_works_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HowItWorksPage, {});
});
//#endregion
//#region src/components/CreativeOrbit.tsx
var CreativeOrbit = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "co-wrapper",
		children: [
			/* @__PURE__ */ jsx("div", { className: "co-radial-glow" }),
			/* @__PURE__ */ jsxs("div", {
				className: "co-outer-ring",
				children: [/* @__PURE__ */ jsx("div", {
					className: "co-node co-node-top",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content co-counter-cw-slow",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(PenTool, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "DESIGN"
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "co-node co-node-bottom",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content co-counter-cw-slow",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(Film, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "VIDEO"
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "co-inner-ring",
				children: [/* @__PURE__ */ jsx("div", {
					className: "co-node co-node-left",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content co-counter-ccw-fast",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(FileText, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "CONTENT"
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "co-node co-node-right",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content co-counter-ccw-fast",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(MonitorSmartphone, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "DIGITAL"
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "co-center-element",
				children: /* @__PURE__ */ jsx("span", {
					className: "co-center-text",
					children: "sBLOOM"
				})
			})
		]
	});
};
//#endregion
//#region src/pages/CreativeWorkspacePage.tsx
var VideoEditorBadgeIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "30",
	height: "30",
	viewBox: "0 0 30 30",
	fill: "none",
	stroke: "#3B261D",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "3.5",
			y: "3.5",
			width: "19",
			height: "13.5",
			rx: "3",
			stroke: "#3B261D",
			strokeWidth: "2"
		}),
		/* @__PURE__ */ jsx("polygon", {
			points: "11,7.5 15.5,10.25 11,13",
			fill: "#3B261D",
			stroke: "none"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "16.5",
			cy: "23.5",
			r: "2.2",
			stroke: "#3B261D",
			strokeWidth: "1.9"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "23.5",
			cy: "23.5",
			r: "2.2",
			stroke: "#3B261D",
			strokeWidth: "1.9"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "18",
			y1: "22",
			x2: "23",
			y2: "16.5",
			stroke: "#3B261D",
			strokeWidth: "1.9",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "22",
			y1: "22",
			x2: "17",
			y2: "16.5",
			stroke: "#3B261D",
			strokeWidth: "1.9",
			strokeLinecap: "round"
		})
	]
});
var ContentWriterBadgeIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "30",
	height: "30",
	viewBox: "0 0 30 30",
	fill: "none",
	stroke: "#3B261D",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", {
			d: "M7 4C7 3.45 7.45 3 8 3H18L24 9V26C24 26.55 23.55 27 23 27H8C7.45 27 7 26.55 7 26V4Z",
			stroke: "#3B261D",
			strokeWidth: "2",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M18 3V9H24",
			stroke: "#3B261D",
			strokeWidth: "2",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "11",
			y1: "12",
			x2: "16",
			y2: "12",
			stroke: "#3B261D",
			strokeWidth: "1.9",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "11",
			y1: "16",
			x2: "15",
			y2: "16",
			stroke: "#3B261D",
			strokeWidth: "1.9",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M20.5 16.5L24 20L22 22L18.5 18.5L20.5 16.5ZM18.5 18.5L17 23.5L22 22L18.5 18.5Z",
			fill: "#FCEFE1",
			stroke: "#3B261D",
			strokeWidth: "1.7",
			strokeLinejoin: "round"
		})
	]
});
var CREATIVE_ROLES = [{
	id: "video-editors",
	title: "Video Editors",
	icon: VideoEditorBadgeIcon,
	description: "Edit reels, promotional videos, and short videos for brands. Turn ideas into creative videos with smooth cuts and clear storytelling."
}, {
	id: "content-writers",
	title: "Content Writers",
	icon: ContentWriterBadgeIcon,
	description: "Write engaging video scripts, social media captions, articles, and brand stories that are easy to understand and help your business reach more people."
}];
var CreativeWorkspacePage = () => {
	const [flippedRoles, setFlippedRoles] = useState({});
	const [formHighlight, setFormHighlight] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		role: "",
		portfolioUrl: "",
		experience: "",
		skills: "",
		notes: ""
	});
	const formRef = useRef(null);
	useEffect(() => {
		if (window.location.hash === "#creative-apply" || window.location.pathname.includes("/apply")) setTimeout(() => {
			var _formRef$current;
			(_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.scrollIntoView({ behavior: "smooth" });
			setFormHighlight(true);
			setTimeout(() => setFormHighlight(false), 1800);
		}, 250);
	}, []);
	const scrollToRoles = () => {
		const rolesSection = document.getElementById("roles");
		if (rolesSection) rolesSection.scrollIntoView({ behavior: "smooth" });
	};
	const scrollToApply = (prefillRole) => {
		var _formRef$current2;
		if (prefillRole) setFormData((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { role: prefillRole }));
		setFormHighlight(true);
		(_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 || _formRef$current2.scrollIntoView({ behavior: "smooth" });
		setTimeout(() => {
			setFormHighlight(false);
		}, 1800);
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitted(true);
		}, 600);
	};
	const handleResetForm = () => {
		setSubmitted(false);
		setFormData({
			fullName: "",
			email: "",
			phone: "",
			role: "",
			portfolioUrl: "",
			experience: "",
			skills: "",
			notes: ""
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "cw-page",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "cw-hero",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container cw-hero-grid",
					children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "cw-eyebrow-wrap",
								children: [/* @__PURE__ */ jsx("span", {
									className: "cw-eyebrow",
									children: "CREATIVE WORKSPACE"
								}), /* @__PURE__ */ jsx("span", { className: "cw-eyebrow-line" })]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "cw-hero-title",
								children: [
									"Create with S-Bloom.",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "cw-gold-text",
										children: "Grow with us."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "cw-hero-lead",
								children: "Join our creative network."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "cw-hero-desc",
								children: "Work with S-Bloom on creative projects, digital content, and ideas that help businesses grow. We're looking to connect with talented people who want to create meaningful work together."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "cw-hero-actions",
								children: [/* @__PURE__ */ jsxs("button", {
									onClick: scrollToRoles,
									className: "cw-btn-primary",
									children: [/* @__PURE__ */ jsx("span", { children: "Explore Opportunities" }), /* @__PURE__ */ jsx(ArrowRight, {
										size: 18,
										strokeWidth: 2.2,
										className: "cw-btn-arrow"
									})]
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => scrollToApply(),
									className: "cw-btn-secondary",
									children: "Apply Now"
								})]
							})
						]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "cw-visual",
						style: { zIndex: 10 },
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							className: "w-full h-full",
							style: {
								position: "relative",
								width: "100%",
								height: "100%"
							},
							children: /* @__PURE__ */ jsx(CreativeOrbit, {})
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "collaboration-process",
				className: "cw-process-section",
				children: [/* @__PURE__ */ jsx("div", { className: "cw-radial-highlight" }), /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "cw-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							children: [/* @__PURE__ */ jsx("h2", { children: "How We Work Together" }), /* @__PURE__ */ jsx("p", { children: "A clear process from project brief to final delivery." })]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "cw-process-grid",
						children: [
							/* @__PURE__ */ jsx("div", { className: "cw-process-line" }),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-process-card",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "cw-process-bg-num",
											children: "01"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-process-header",
											children: [/* @__PURE__ */ jsx(Target, {
												className: "cw-process-icon",
												size: 28
											}), /* @__PURE__ */ jsx("h3", { children: "S-Bloom Strategy" })]
										}),
										/* @__PURE__ */ jsx("p", { children: "We secure the client and prepare the brief, script, or technical requirements." })
									]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-process-card",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "cw-process-bg-num",
											children: "02"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-process-header",
											children: [/* @__PURE__ */ jsx(PlayCircle, {
												className: "cw-process-icon",
												size: 28
											}), /* @__PURE__ */ jsx("h3", { children: "Partner Execution" })]
										}),
										/* @__PURE__ */ jsx("p", { children: "You take on the assigned project and deliver your specialized work." })
									]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 400,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-process-card",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "cw-process-bg-num",
											children: "03"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-process-header",
											children: [/* @__PURE__ */ jsx(Rocket, {
												className: "cw-process-icon",
												size: 28
											}), /* @__PURE__ */ jsx("h3", { children: "S-Bloom Deployment" })]
										}),
										/* @__PURE__ */ jsx("p", { children: "We coordinate final deployment, campaign management, and client feedback." })
									]
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "roles",
				className: "cw-roles-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "cw-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							children: [/* @__PURE__ */ jsx("h2", { children: "Your Expertise Has a Place Here" }), /* @__PURE__ */ jsx("p", { children: "Explore opportunities to collaborate with S-Bloom on impactful client projects." })]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "cw-roles-grid",
						children: CREATIVE_ROLES.map((role, idx) => {
							const IconComponent = role.icon;
							return /* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100 + idx * 80,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-role-card",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "cw-role-icon-box",
											children: /* @__PURE__ */ jsx(IconComponent, {
												size: 28,
												strokeWidth: 1.9,
												className: "cw-role-icon"
											})
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "cw-role-title",
											children: role.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "cw-role-desc",
											children: role.description
										}),
										/* @__PURE__ */ jsxs("button", {
											type: "button",
											className: "cw-role-apply-btn",
											onClick: () => scrollToApply(role.title),
											children: [/* @__PURE__ */ jsx("span", { children: "Apply Now" }), /* @__PURE__ */ jsx(ArrowRight, {
												size: 15,
												strokeWidth: 2.4
											})]
										})
									]
								})
							}, role.id);
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "creative-apply",
				ref: formRef,
				className: "cw-apply-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "cw-apply-container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, {
						delay: 100,
						children: /* @__PURE__ */ jsxs("div", {
							className: "cw-apply-header",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "cw-apply-eyebrow",
									children: [/* @__PURE__ */ jsx("span", {
										className: "cw-apply-eyebrow-text",
										children: "QUICK APPLICATION"
									}), /* @__PURE__ */ jsx("span", { className: "cw-apply-eyebrow-line" })]
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "cw-apply-title",
									children: "Join the S-Bloom Creative Network"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "cw-apply-subtitle",
									children: "Submit your portfolio and contact details below. We'll reach out with matching projects."
								})
							]
						})
					}), /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 200,
						children: /* @__PURE__ */ jsx("div", {
							className: `cw-apply-card ${formHighlight ? "highlight-focus" : ""}`,
							children: submitted ? /* @__PURE__ */ jsxs("div", {
								className: "cw-apply-success",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "cw-success-icon-wrap",
										children: /* @__PURE__ */ jsx(CheckCircle2, {
											size: 32,
											strokeWidth: 2.2
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "cw-success-title",
										children: "Creative Application Received!"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "cw-success-msg",
										children: [
											"Thank you, ",
											/* @__PURE__ */ jsx("strong", { children: formData.fullName || "Creator" }),
											". We have received your portfolio details for the ",
											/* @__PURE__ */ jsx("strong", { children: formData.role || "Creative Network" }),
											" role. Our team will review your work and contact you with matching projects."
										]
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										className: "cw-reset-btn",
										onClick: handleResetForm,
										children: "Submit Another Application"
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								className: "cw-apply-form",
								onSubmit: handleSubmit,
								children: [/* @__PURE__ */ jsxs("div", {
									className: "cw-apply-form-grid",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "cw-form-group",
											children: [/* @__PURE__ */ jsxs("label", {
												htmlFor: "cw-fullName",
												className: "cw-form-label",
												children: ["Full Name ", /* @__PURE__ */ jsx("span", {
													className: "cw-req-star",
													children: "*"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "cw-input-wrap",
												children: [/* @__PURE__ */ jsx(User, {
													size: 15,
													strokeWidth: 1.8,
													className: "cw-input-icon"
												}), /* @__PURE__ */ jsx("input", {
													type: "text",
													id: "cw-fullName",
													name: "fullName",
													required: true,
													placeholder: "Your full name",
													className: "cw-input",
													value: formData.fullName,
													onChange: handleInputChange
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-form-group",
											children: [/* @__PURE__ */ jsxs("label", {
												htmlFor: "cw-email",
												className: "cw-form-label",
												children: ["Email Address ", /* @__PURE__ */ jsx("span", {
													className: "cw-req-star",
													children: "*"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "cw-input-wrap",
												children: [/* @__PURE__ */ jsx(Mail, {
													size: 15,
													strokeWidth: 1.8,
													className: "cw-input-icon"
												}), /* @__PURE__ */ jsx("input", {
													type: "email",
													id: "cw-email",
													name: "email",
													required: true,
													placeholder: "you@domain.com",
													className: "cw-input",
													value: formData.email,
													onChange: handleInputChange
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-form-group",
											children: [/* @__PURE__ */ jsxs("label", {
												htmlFor: "cw-phone",
												className: "cw-form-label",
												children: ["Phone / WhatsApp ", /* @__PURE__ */ jsx("span", {
													className: "cw-req-star",
													children: "*"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "cw-input-wrap",
												children: [/* @__PURE__ */ jsx(Phone, {
													size: 15,
													strokeWidth: 1.8,
													className: "cw-input-icon"
												}), /* @__PURE__ */ jsx("input", {
													type: "tel",
													id: "cw-phone",
													name: "phone",
													required: true,
													placeholder: "+91 98765 43210",
													className: "cw-input",
													value: formData.phone,
													onChange: handleInputChange
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-form-group",
											children: [/* @__PURE__ */ jsxs("label", {
												htmlFor: "cw-role",
												className: "cw-form-label",
												children: ["Creative Role ", /* @__PURE__ */ jsx("span", {
													className: "cw-req-star",
													children: "*"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "cw-input-wrap",
												children: [/* @__PURE__ */ jsx(Briefcase, {
													size: 15,
													strokeWidth: 1.8,
													className: "cw-input-icon"
												}), /* @__PURE__ */ jsxs("select", {
													id: "cw-role",
													name: "role",
													required: true,
													className: "cw-select",
													value: formData.role,
													onChange: handleInputChange,
													children: [
														/* @__PURE__ */ jsx("option", {
															value: "",
															children: "Select your discipline..."
														}),
														/* @__PURE__ */ jsx("option", {
															value: "Video Editors",
															children: "Video Editors"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "Content Writers",
															children: "Content Writers"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "Other Creative Role",
															children: "Other Creative Role"
														})
													]
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-form-group cw-apply-full-width",
											children: [/* @__PURE__ */ jsxs("label", {
												htmlFor: "cw-portfolioUrl",
												className: "cw-form-label",
												children: ["Portfolio / Reel Link ", /* @__PURE__ */ jsx("span", {
													className: "cw-req-star",
													children: "*"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "cw-input-wrap",
												children: [/* @__PURE__ */ jsx(Link2, {
													size: 15,
													strokeWidth: 1.8,
													className: "cw-input-icon"
												}), /* @__PURE__ */ jsx("input", {
													type: "url",
													id: "cw-portfolioUrl",
													name: "portfolioUrl",
													required: true,
													placeholder: "Behance, Google Drive, YouTube, Vimeo, Instagram, or portfolio URL",
													className: "cw-input",
													value: formData.portfolioUrl,
													onChange: handleInputChange
												})]
											})]
										})
									]
								}), /* @__PURE__ */ jsxs("button", {
									type: "submit",
									className: "cw-apply-submit-btn",
									disabled: isSubmitting,
									children: [/* @__PURE__ */ jsx("span", { children: isSubmitting ? "Submitting Application..." : "Submit Application" }), /* @__PURE__ */ jsx(ArrowRight, {
										size: 16,
										strokeWidth: 2.4
									})]
								})]
							})
						})
					})]
				})
			})
		]
	});
};
//#endregion
//#region src/routes/creative-workspace.tsx
var creative_workspace_exports = /* @__PURE__ */ __exportAll({
	default: () => creative_workspace_default,
	meta: () => meta$2
});
var meta$2 = () => {
	return [
		{ title: "Creative Workspace | sBLOOM" },
		{
			name: "description",
			content: "Inside our creative process and workspace."
		},
		{
			property: "og:title",
			content: "Creative Workspace | sBLOOM"
		},
		{
			property: "og:description",
			content: "Inside our creative process and workspace."
		}
	];
};
var creative_workspace_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(CreativeWorkspacePage, {});
});
//#endregion
//#region src/routes/apply.tsx
var apply_exports = /* @__PURE__ */ __exportAll({ default: () => apply_default });
var apply_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(Navigate, {
		to: "/creative-workspace#creative-apply",
		replace: true
	});
});
//#endregion
//#region src/pages/ContactPage.tsx
var ContactPage = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		organization: "",
		email: "",
		phone: "",
		industry: "",
		improve: ""
	});
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitted(true);
		}, 600);
	};
	const handleReset = () => {
		setSubmitted(false);
		setFormData({
			fullName: "",
			organization: "",
			email: "",
			phone: "",
			industry: "",
			improve: ""
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "contact-page-wrapper",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "contact-bg-backdrop",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("img", {
				src: "/contact-desk-bg.jpg",
				alt: "sBLOOM Workspace",
				className: "contact-bg-image"
			}), /* @__PURE__ */ jsx("div", { className: "contact-bg-light-tint" })]
		}), /* @__PURE__ */ jsx("div", {
			className: "contact-master-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "contact-split-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "contact-left-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "contact-eyebrow",
							children: [/* @__PURE__ */ jsx("span", {
								className: "contact-eyebrow-text",
								children: "GET IN TOUCH"
							}), /* @__PURE__ */ jsx("span", { className: "contact-eyebrow-line" })]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "contact-hero-title",
							children: [
								"Let’s discuss",
								/* @__PURE__ */ jsx("br", {}),
								"your digital",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "title-gold-text",
									children: "growth."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "contact-hero-desc",
							children: "Tell us about your organization and what you are trying to achieve. We’ll help you identify the right opportunities and next steps."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "contact-process-list",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(MessageSquare, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "contact-process-title",
											children: "Understand"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We listen to your goals and challenges."
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(Lightbulb, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "contact-process-title",
											children: "Strategize"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We identify the right opportunities."
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(BarChart3, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "contact-process-title",
											children: "Grow Together"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We build a clear plan for measurable results."
										})]
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "contact-right-col",
					children: /* @__PURE__ */ jsxs("div", {
						className: "contact-card",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "contact-card-badge",
								children: [/* @__PURE__ */ jsx("span", {
									className: "contact-card-badge-text",
									children: "CONTACT sBLOOM"
								}), /* @__PURE__ */ jsx("span", { className: "contact-card-badge-line" })]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "contact-card-title",
								children: "Share a few details"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "contact-card-subtitle",
								children: "We'll get back to you with the right next steps."
							}),
							submitted ? /* @__PURE__ */ jsxs("div", {
								className: "contact-success-card",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "contact-success-icon-wrap",
										children: /* @__PURE__ */ jsx(CheckCircle2, {
											size: 32,
											strokeWidth: 2
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "contact-success-title",
										children: "Message Received!"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "contact-success-msg",
										children: "Thank you for reaching out. We have received your details and our team will get back to you with tailored strategic recommendations within 24 hours."
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										className: "contact-reset-btn",
										onClick: handleReset,
										children: "Send Another Response"
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								className: "contact-form",
								onSubmit: handleSubmit,
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "fullName",
											className: "contact-field-label",
											children: ["Full Name ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(User, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												id: "fullName",
												name: "fullName",
												required: true,
												placeholder: "Enter your full name",
												className: "contact-input",
												value: formData.fullName,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "organization",
											className: "contact-field-label",
											children: ["Organization Name ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Building2, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												id: "organization",
												name: "organization",
												required: true,
												placeholder: "Enter your organization name",
												className: "contact-input",
												value: formData.organization,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "email",
											className: "contact-field-label",
											children: ["Email Address ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Mail, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "email",
												id: "email",
												name: "email",
												required: true,
												placeholder: "you@company.com",
												className: "contact-input",
												value: formData.email,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "phone",
											className: "contact-field-label",
											children: ["Phone Number ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Phone, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "tel",
												id: "phone",
												name: "phone",
												required: true,
												placeholder: "+91 98765 43210",
												className: "contact-input",
												value: formData.phone,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "industry",
											className: "contact-field-label",
											children: ["Industry ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(LayoutGrid, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsxs("select", {
												id: "industry",
												name: "industry",
												required: true,
												className: "contact-select",
												value: formData.industry,
												onChange: handleChange,
												children: [
													/* @__PURE__ */ jsx("option", {
														value: "",
														children: "Select an industry..."
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Education",
														children: "Education"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Healthcare",
														children: "Healthcare"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Consulting & Professional Services",
														children: "Consulting & Professional Services"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Technology & Software",
														children: "Technology & Software"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "E-Commerce & Retail",
														children: "E-Commerce & Retail"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Financial Services",
														children: "Financial Services"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Other",
														children: "Other"
													})
												]
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "improve",
											className: "contact-field-label",
											children: ["What would you like to improve? ", /* @__PURE__ */ jsx("span", {
												className: "contact-opt-tag",
												children: "(Optional)"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap contact-textarea-wrap",
											children: [/* @__PURE__ */ jsx(FileText, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon contact-textarea-icon"
											}), /* @__PURE__ */ jsx("textarea", {
												id: "improve",
												name: "improve",
												rows: 2,
												placeholder: "Tell us about your goals, challenges, or what you'd like to improve...",
												className: "contact-textarea",
												value: formData.improve,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: "contact-submit-btn",
										disabled: isSubmitting,
										children: [/* @__PURE__ */ jsx("span", { children: isSubmitting ? "Planning Next Step..." : "Plan My Next Step" }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 15,
											strokeWidth: 2.4,
											className: "btn-arrow-icon"
										})]
									})
								]
							})
						]
					})
				})]
			})
		})]
	});
};
//#endregion
//#region src/routes/contact.tsx
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => contact_default,
	meta: () => meta$1
});
var meta$1 = () => {
	return [
		{ title: "Contact sBLOOM | Let's Talk" },
		{
			name: "description",
			content: "Get in touch to discuss your digital growth goals."
		},
		{
			property: "og:title",
			content: "Contact sBLOOM | Let's Talk"
		},
		{
			property: "og:description",
			content: "Get in touch to discuss your digital growth goals."
		}
	];
};
var contact_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(ContactPage, {});
});
//#endregion
//#region src/pages/ProofOfWorkPage.tsx
var ProofOfWorkPage = () => {
	const [searchParams] = useSearchParams();
	const initialCategory = searchParams.get("service") || "all";
	const [activeTab, setActiveTab] = useState([
		"all",
		"gbp",
		"website",
		"social",
		"ads"
	].includes(initialCategory) ? initialCategory : "all");
	useEffect(() => {
		const service = searchParams.get("service");
		if (service && [
			"all",
			"gbp",
			"website",
			"social",
			"ads"
		].includes(service)) setActiveTab(service);
	}, [searchParams]);
	return /* @__PURE__ */ jsxs("div", {
		className: "proof-page",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "proof-hero-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container proof-hero-container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "proof-hero-eyebrow",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "proof-badge-ai",
									children: "✦ AI-NATIVE PROOF OF WORK"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "proof-eyebrow-divider",
									children: "/"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "proof-eyebrow-text",
									children: "TRANSPARENT CLIENT RESULTS"
								})
							]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "proof-hero-title",
							children: [
								"Real Proof. ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "proof-title-accent",
									children: "Real Business Growth."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "proof-hero-desc",
							children: "Explore authentic before-and-after dashboards across Healthcare, Education, and Professional Services. We replace traditional agency overhead with AI-assisted precision — delivering more patients, more admissions, and higher revenue at genuinely budget-friendly costs."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "proof-filter-tabs",
							children: [
								/* @__PURE__ */ jsx("button", {
									className: `proof-filter-btn ${activeTab === "all" ? "active" : ""}`,
									onClick: () => setActiveTab("all"),
									children: "All Work"
								}),
								/* @__PURE__ */ jsx("button", {
									className: `proof-filter-btn ${activeTab === "gbp" ? "active" : ""}`,
									onClick: () => setActiveTab("gbp"),
									children: "Google Business Profile (GBP)"
								}),
								/* @__PURE__ */ jsx("button", {
									className: `proof-filter-btn ${activeTab === "website" ? "active" : ""}`,
									onClick: () => setActiveTab("website"),
									children: "AI Website + SEO"
								}),
								/* @__PURE__ */ jsx("button", {
									className: `proof-filter-btn ${activeTab === "social" ? "active" : ""}`,
									onClick: () => setActiveTab("social"),
									children: "Social Media (Meta Suite)"
								}),
								/* @__PURE__ */ jsx("button", {
									className: `proof-filter-btn ${activeTab === "ads" ? "active" : ""}`,
									onClick: () => setActiveTab("ads"),
									children: "Meta & Google Ads"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "proof-cases-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						(activeTab === "all" || activeTab === "gbp") && /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 50,
							children: /* @__PURE__ */ jsxs("div", {
								className: "proof-card-block",
								id: "case-gbp",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "proof-card-header",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-card-tag",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-tag-pill",
													children: "HEALTHCARE & CLINIC FOCUS"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-tag-service",
													children: "Google Business Profile (Starts at ₹2,000/mo)"
												})]
											}),
											/* @__PURE__ */ jsxs("h2", {
												className: "proof-case-title",
												children: [
													"Multi-Speciality Hospital & Clinic: ",
													/* @__PURE__ */ jsx("br", {}),
													"From Invisible to Top 3 Local Google Maps Pack"
												]
											}),
											/* @__PURE__ */ jsx("p", {
												className: "proof-case-lead",
												children: "The hospital was struggling to gain patient footfall from Google Maps searches in their local 10km radius. Their listing had inaccurate categories, missing doctor profiles, and zero regular updates."
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-comparison-grid",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "proof-box proof-box-before",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "proof-box-badge badge-before",
													children: "BEFORE S-BLOOM"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-metrics",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Local Map Rank:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value red-text",
																children: "#18 (Page 2)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Monthly Phone Calls:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value",
																children: "14 calls/mo"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Direction Requests:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value",
																children: "22 / mo"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Profile Views:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value",
																children: "340 views"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-mockup-frame",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mockup-header",
														children: [
															/* @__PURE__ */ jsx("span", { className: "mockup-dot" }),
															/* @__PURE__ */ jsx("span", { className: "mockup-dot" }),
															/* @__PURE__ */ jsx("span", { className: "mockup-dot" }),
															/* @__PURE__ */ jsx("span", {
																className: "mockup-title",
																children: "Unoptimized GBP Listing (Old State)"
															})
														]
													}), /* @__PURE__ */ jsxs("div", {
														className: "mockup-body mockup-dimmed",
														children: [
															/* @__PURE__ */ jsx("div", { className: "mockup-fake-line w-70" }),
															/* @__PURE__ */ jsx("div", { className: "mockup-fake-line w-40" }),
															/* @__PURE__ */ jsx("div", {
																className: "mockup-alert-box red-alert",
																children: "⚠️ \"Profile incomplete · Missing doctor timings · 0 photo updates in 90 days\""
															})
														]
													})]
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "proof-box proof-box-after",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-badge badge-after",
													children: [/* @__PURE__ */ jsx(Sparkles, { size: 14 }), "AFTER S-BLOOM (60 DAYS)"]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-metrics",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Local Map Rank:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "#1 in 12km Radius"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Monthly Phone Calls:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "148 calls/mo (+957%)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Direction Requests:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "194 / mo (+780%)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Profile Views:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "4,820 views (+1,317%)"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-mockup-frame mockup-highlight",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mockup-header",
														children: [/* @__PURE__ */ jsx("span", { className: "mockup-dot green" }), /* @__PURE__ */ jsx("span", {
															className: "mockup-title",
															children: "Verified Google Business Dashboard"
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "mockup-dashboard-preview",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "stat-pill-row",
															children: [/* @__PURE__ */ jsxs("div", {
																className: "stat-pill",
																children: [/* @__PURE__ */ jsx(PhoneCall, { size: 16 }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "148 Calls" }), /* @__PURE__ */ jsx("span", { children: "Direct patient inquiries" })] })]
															}), /* @__PURE__ */ jsxs("div", {
																className: "stat-pill",
																children: [/* @__PURE__ */ jsx(TrendingUp, { size: 16 }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "+284%" }), /* @__PURE__ */ jsx("span", { children: "Search discovery" })] })]
															})]
														}), /* @__PURE__ */ jsxs("div", {
															className: "verified-badge-row",
															children: [/* @__PURE__ */ jsx(CheckCircle2, {
																size: 16,
																className: "text-gold"
															}), /* @__PURE__ */ jsx("span", { children: "AI geo-targeted keyword posts & automated 5-star review collection" })]
														})]
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-outcome-bar",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "+284%"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Increase in organic patient inquiries"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "₹2,000"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Starting budget/month (Full local optimization)"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "#1 Rank"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Top 3 local Google Maps pack guaranteed visibility"
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "proof-outcome-action",
												children: /* @__PURE__ */ jsxs(Link, {
													to: "/contact?plan=Google-Business-Profile",
													className: "proof-action-btn",
													children: [/* @__PURE__ */ jsx("span", { children: "Get This for Your Business" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
												})
											})
										]
									})
								]
							})
						}),
						(activeTab === "all" || activeTab === "website") && /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 100,
							children: /* @__PURE__ */ jsxs("div", {
								className: "proof-card-block",
								id: "case-website",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "proof-card-header",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-card-tag",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-tag-pill",
													children: "EDUCATION & INSTITUTES"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-tag-service",
													children: "AI-Native Website + SEO (Starts at ₹5,000/mo)"
												})]
											}),
											/* @__PURE__ */ jsxs("h2", {
												className: "proof-case-title",
												children: [
													"Premier Higher Education Institute: ",
													/* @__PURE__ */ jsx("br", {}),
													"Sub-1s Mobile Experience & 3.4x Online Admission Forms"
												]
											}),
											/* @__PURE__ */ jsx("p", {
												className: "proof-case-lead",
												children: "Old WordPress website took 6.2 seconds to load on mobile. Parents and students were bouncing off the admission page. Zero keywords ranked on Page 1 of Google for degree admissions in their state."
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-comparison-grid",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "proof-box proof-box-before",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "proof-box-badge badge-before",
													children: "OLD WEBSITE & SEO"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-metrics",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Mobile Load Speed:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value red-text",
																children: "6.2 seconds (Poor)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Keywords on Page 1:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value red-text",
																children: "0 keywords"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Admission Enquiries:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value",
																children: "8 forms / month"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Bounce Rate:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value red-text",
																children: "78% bounce"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-mockup-frame",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mockup-header",
														children: [/* @__PURE__ */ jsx("span", { className: "mockup-dot" }), /* @__PURE__ */ jsx("span", {
															className: "mockup-title",
															children: "Lighthouse Audit: Score 34/100"
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "mockup-body mockup-dimmed",
														children: [
															/* @__PURE__ */ jsx("div", { className: "mockup-fake-line w-80" }),
															/* @__PURE__ */ jsx("div", { className: "mockup-fake-line w-50" }),
															/* @__PURE__ */ jsx("div", {
																className: "mockup-alert-box red-alert",
																children: "❌ Heavy scripts, no responsive layout, zero structured metadata for admissions."
															})
														]
													})]
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "proof-box proof-box-after",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-badge badge-after",
													children: [/* @__PURE__ */ jsx(Sparkles, { size: 14 }), "AI-NATIVE ARCHITECTURE + SEO"]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-metrics",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Mobile Load Speed:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "0.8 seconds (99/100)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Keywords on Page 1:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "32 high-intent terms"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Admission Enquiries:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "46 forms / month (+475%)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Bounce Rate:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "24% (Industry-best)"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-mockup-frame mockup-highlight",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mockup-header",
														children: [/* @__PURE__ */ jsx("span", { className: "mockup-dot green" }), /* @__PURE__ */ jsx("span", {
															className: "mockup-title",
															children: "Google Search Console & Admission Analytics"
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "mockup-dashboard-preview",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "stat-pill-row",
															children: [/* @__PURE__ */ jsxs("div", {
																className: "stat-pill",
																children: [/* @__PURE__ */ jsx(Zap, { size: 16 }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "0.8s Load" }), /* @__PURE__ */ jsx("span", { children: "Next-gen AI code" })] })]
															}), /* @__PURE__ */ jsxs("div", {
																className: "stat-pill",
																children: [/* @__PURE__ */ jsx(Search, { size: 16 }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "32 on Page 1" }), /* @__PURE__ */ jsx("span", { children: "Organic Google rank" })] })]
															})]
														}), /* @__PURE__ */ jsxs("div", {
															className: "verified-badge-row",
															children: [/* @__PURE__ */ jsx(ShieldCheck, {
																size: 16,
																className: "text-gold"
															}), /* @__PURE__ */ jsx("span", { children: "AI schema markup for courses, eligibility & direct inquiry capture" })]
														})]
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-outcome-bar",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "3.4x"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Total admission inquiries surge in Season 1"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "₹5,000"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Starts at / month (Includes website + technical SEO)"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "✦ AI Edge"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Zero maintenance headaches, fully managed deployment"
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "proof-outcome-action",
												children: /* @__PURE__ */ jsxs(Link, {
													to: "/contact?plan=Website-SEO",
													className: "proof-action-btn",
													children: [/* @__PURE__ */ jsx("span", { children: "Get an AI Website + SEO" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
												})
											})
										]
									})
								]
							})
						}),
						(activeTab === "all" || activeTab === "social") && /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 150,
							children: /* @__PURE__ */ jsxs("div", {
								className: "proof-card-block",
								id: "case-social",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "proof-card-header",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-card-tag",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-tag-pill",
													children: "META BUSINESS SUITE (INSTAGRAM & FB)"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-tag-service",
													children: "Social Media Management (Starts at ₹10,000/mo)"
												})]
											}),
											/* @__PURE__ */ jsxs("h2", {
												className: "proof-case-title",
												children: [
													"Professional Services & Advisory Firm: ",
													/* @__PURE__ */ jsx("br", {}),
													"8 High-Impact Reels + 20 Branded Posts Monthly"
												]
											}),
											/* @__PURE__ */ jsx("p", {
												className: "proof-case-lead",
												children: "Before S-Bloom, the firm posted sporadic low-resolution flyers with no clear branding or video content. Engagement was under 1%, with zero leads coming through Instagram or Facebook."
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-comparison-grid",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "proof-box proof-box-before",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "proof-box-badge badge-before",
													children: "SPORADIC POSTING"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-metrics",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Monthly Content:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value",
																children: "3 static generic flyers"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Reel Views:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value red-text",
																children: "0 (No video strategy)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Organic Accounts Reached:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value",
																children: "310 / month"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Direct Client Inquiries:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value red-text",
																children: "0 inquiries"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-mockup-frame",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mockup-header",
														children: [/* @__PURE__ */ jsx("span", { className: "mockup-dot" }), /* @__PURE__ */ jsx("span", {
															className: "mockup-title",
															children: "Unplanned Feed (Low Retention)"
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "mockup-body mockup-dimmed",
														children: [/* @__PURE__ */ jsx("div", { className: "mockup-fake-line w-60" }), /* @__PURE__ */ jsx("div", {
															className: "mockup-alert-box red-alert",
															children: "⚠️ \"No visual hierarchy · Inconsistent brand palette · Missing Reels algorithm hooks\""
														})]
													})]
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "proof-box proof-box-after",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-badge badge-after",
													children: [/* @__PURE__ */ jsx(Sparkles, { size: 14 }), "S-BLOOM META BUSINESS SUITE ENGINE"]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-metrics",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Monthly Deliverables:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "8 Reels + 20 Branded Posts"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Average Reel Views:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "14,800+ organic views"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Organic Accounts Reached:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "38,400+ / mo (+1,238%)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Direct Inquiries:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "19 qualified leads/mo"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-mockup-frame mockup-highlight",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mockup-header",
														children: [/* @__PURE__ */ jsx("span", { className: "mockup-dot green" }), /* @__PURE__ */ jsx("span", {
															className: "mockup-title",
															children: "Meta Business Suite Verified Analytics"
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "mockup-dashboard-preview",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "stat-pill-row",
															children: [/* @__PURE__ */ jsxs("div", {
																className: "stat-pill",
																children: [/* @__PURE__ */ jsx(Video, { size: 16 }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "8 Reels" }), /* @__PURE__ */ jsx("span", { children: "Retention-hooked video" })] })]
															}), /* @__PURE__ */ jsxs("div", {
																className: "stat-pill",
																children: [/* @__PURE__ */ jsx(Layers, { size: 16 }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "20 Posts" }), /* @__PURE__ */ jsx("span", { children: "Carousels & educational graphics" })] })]
															})]
														}), /* @__PURE__ */ jsxs("div", {
															className: "verified-badge-row",
															children: [/* @__PURE__ */ jsx(CheckCircle2, {
																size: 16,
																className: "text-gold"
															}), /* @__PURE__ */ jsx("span", { children: "Professional scriptwriting, video editing, captions & scheduled via Meta Suite" })]
														})]
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-outcome-bar",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "8 Reels + 20 Posts"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Consistent monthly content pipeline (Starts at ₹10,000/mo)"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "10.4x"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Increase in qualified audience reach & DM enquiries"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "Note"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Motion post pricing may vary based on 3D/VFX complexity"
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "proof-outcome-action",
												children: /* @__PURE__ */ jsxs(Link, {
													to: "/contact?plan=Social-Media-Management",
													className: "proof-action-btn",
													children: [/* @__PURE__ */ jsx("span", { children: "Launch Your Social Growth" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
												})
											})
										]
									})
								]
							})
						}),
						(activeTab === "all" || activeTab === "ads") && /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							children: /* @__PURE__ */ jsxs("div", {
								className: "proof-card-block",
								id: "case-ads",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "proof-card-header",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-card-tag",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-tag-pill",
													children: "PERFORMANCE CAMPAIGNS"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-tag-service",
													children: "Meta & Google Ads (Starts at ₹2,000/mo Management)"
												})]
											}),
											/* @__PURE__ */ jsxs("h2", {
												className: "proof-case-title",
												children: [
													"Specialized Healthcare & Education Campaign: ",
													/* @__PURE__ */ jsx("br", {}),
													"Hyper-Targeted High-Converting Patient & Admission Ads"
												]
											}),
											/* @__PURE__ */ jsx("p", {
												className: "proof-case-lead",
												children: "Previous campaigns were run through random \"boost post\" clicks without proper pixel tracking, resulting in ₹450+ cost per lead with 80% spam inquiries."
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-comparison-grid",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "proof-box proof-box-before",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "proof-box-badge badge-before",
													children: "UNOPTIMIZED BOOST POSTS"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-metrics",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Cost Per Lead (CPL):"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value red-text",
																children: "₹465 / lead"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Lead Qualification Rate:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value red-text",
																children: "20% (Mostly junk leads)"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Ad Return (ROAS):"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value",
																children: "1.1x"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-mockup-frame",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mockup-header",
														children: [/* @__PURE__ */ jsx("span", { className: "mockup-dot" }), /* @__PURE__ */ jsx("span", {
															className: "mockup-title",
															children: "Broad Non-Targeted Ad Spend"
														})]
													}), /* @__PURE__ */ jsx("div", {
														className: "mockup-body mockup-dimmed",
														children: /* @__PURE__ */ jsx("div", {
															className: "mockup-alert-box red-alert",
															children: "❌ No custom conversions · Missing lead filtering questions · Budget burned on wrong age brackets."
														})
													})]
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "proof-box proof-box-after",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-badge badge-after",
													children: [/* @__PURE__ */ jsx(Sparkles, { size: 14 }), "S-BLOOM HIGH-INTENT FUNNELS"]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-box-metrics",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Cost Per Lead (CPL):"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "₹82 / verified inquiry"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Lead Qualification Rate:"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "86% genuine appointments"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "proof-metric-row",
															children: [/* @__PURE__ */ jsx("span", {
																className: "metric-label",
																children: "Ad Return (ROAS):"
															}), /* @__PURE__ */ jsx("span", {
																className: "metric-value green-text",
																children: "4.4x verified return"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "proof-mockup-frame mockup-highlight",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mockup-header",
														children: [/* @__PURE__ */ jsx("span", { className: "mockup-dot green" }), /* @__PURE__ */ jsx("span", {
															className: "mockup-title",
															children: "Google & Meta Ads Manager Dashboard"
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "mockup-dashboard-preview",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "stat-pill-row",
															children: [/* @__PURE__ */ jsxs("div", {
																className: "stat-pill",
																children: [/* @__PURE__ */ jsx(BarChart3, { size: 16 }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "₹82 CPL" }), /* @__PURE__ */ jsx("span", { children: "82% cost reduction" })] })]
															}), /* @__PURE__ */ jsxs("div", {
																className: "stat-pill",
																children: [/* @__PURE__ */ jsx(TrendingUp, { size: 16 }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "4.4x ROAS" }), /* @__PURE__ */ jsx("span", { children: "Positive pipeline ROI" })] })]
															})]
														}), /* @__PURE__ */ jsxs("div", {
															className: "verified-badge-row",
															children: [/* @__PURE__ */ jsx(CheckCircle2, {
																size: 16,
																className: "text-gold"
															}), /* @__PURE__ */ jsx("span", { children: "Ad spend funds vary client to client based on specific goals & target reach" })]
														})]
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-outcome-bar",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "₹2,000 / mo"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Management fee (₹3,000 one-time setup if no ad account exists)"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "Tailored Funds"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Ad budget funds vary per client — 100% transparent reporting"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-outcome-item",
												children: [/* @__PURE__ */ jsx("span", {
													className: "proof-outcome-number",
													children: "Targeted"
												}), /* @__PURE__ */ jsx("span", {
													className: "proof-outcome-desc",
													children: "Zero wasted budget on irrelevant audiences"
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "proof-outcome-action",
												children: /* @__PURE__ */ jsxs(Link, {
													to: "/contact?plan=Meta-Google-Ads",
													className: "proof-action-btn",
													children: [/* @__PURE__ */ jsx("span", { children: "Scale Your Ads with Us" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
												})
											})
										]
									})
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "proof-why-different-section",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "proof-why-box",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "proof-why-left",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "proof-why-eyebrow",
									children: "WHY OUR WORK BEATS EVERY AGENCY"
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "proof-why-title",
									children: [
										"Budget-Friendly Services. ",
										/* @__PURE__ */ jsx("br", {}),
										"Powered by AI. Verified by Data."
									]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "proof-why-desc",
									children: [
										"Most agencies charge ₹30,000–₹1,00,000+ per month because they rely on bloated teams and outdated manual workflows. At ",
										/* @__PURE__ */ jsx("strong", { children: "sBLOOM" }),
										", we harness proprietary AI workflows to produce institutional-grade websites, high-retention Reels, and algorithmic SEO in a fraction of the time — passing all the cost savings directly to you."
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "proof-why-checklist",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "proof-check-item",
											children: [/* @__PURE__ */ jsx(CheckCircle2, {
												size: 18,
												className: "text-gold"
											}), /* @__PURE__ */ jsx("span", { children: "Purpose-built for Healthcare, Education & Professional Services" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "proof-check-item",
											children: [/* @__PURE__ */ jsx(CheckCircle2, {
												size: 18,
												className: "text-gold"
											}), /* @__PURE__ */ jsx("span", { children: "Transparent weekly dashboard updates with zero hidden markups" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "proof-check-item",
											children: [/* @__PURE__ */ jsx(CheckCircle2, {
												size: 18,
												className: "text-gold"
											}), /* @__PURE__ */ jsx("span", { children: "Plans starting as low as ₹2,000/month" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "proof-why-right",
							children: /* @__PURE__ */ jsxs("div", {
								className: "proof-why-cta-card",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "proof-cta-card-title",
										children: "Ready to see these numbers for your business?"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "proof-cta-card-desc",
										children: "Tell us about your organization and get a tailored AI growth audit within 24 hours."
									}),
									/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "btn-proof-primary",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM" }), /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/#pricing",
										className: "btn-proof-secondary",
										children: /* @__PURE__ */ jsx("span", { children: "View All Pricing Plans" })
									})
								]
							})
						})]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/proof-of-work.tsx
var proof_of_work_exports = /* @__PURE__ */ __exportAll({
	default: () => proof_of_work_default,
	meta: () => meta
});
var meta = () => {
	return [
		{ title: "Proof of Work | sBLOOM - Real Client Results" },
		{
			name: "description",
			content: "Explore verified before-and-after dashboards for Healthcare, Education, and Professional Services powered by sBLOOM AI-native digital marketing."
		},
		{
			property: "og:title",
			content: "Proof of Work | sBLOOM - Real Client Results"
		},
		{
			property: "og:description",
			content: "Explore verified before-and-after dashboards for Healthcare, Education, and Professional Services."
		}
	];
};
var proof_of_work_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(ProofOfWorkPage, {});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-55VPP4AO.js",
		"imports": ["/assets/jsx-runtime-BsyjEvTb.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-Cu0au376.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/briefcase-C-mYWWl7.js",
				"/assets/proxy-ST7B0mD5.js",
				"/assets/x-CUrlOrHV.js",
				"/assets/phone-BVAH-4Jp.js"
			],
			"css": ["/assets/root-BzZL1K_O.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-D1PCze8x.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/proxy-ST7B0mD5.js",
				"/assets/x-CUrlOrHV.js",
				"/assets/circle-check-CH-gujLG.js",
				"/assets/file-text-Burlk_f5.js",
				"/assets/film-UP_0_Rum.js",
				"/assets/megaphone-CuRaGHmu.js",
				"/assets/monitor-DYPScnuF.js",
				"/assets/play-DrBcmWZN.js",
				"/assets/shield-check-DMuVmhW2.js",
				"/assets/sparkles-2Q9aahuk.js",
				"/assets/target-ZJMD494F.js",
				"/assets/users-C2my3pE2.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/home-DBBr3dqz.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/education": {
			"id": "routes/education",
			"parentId": "root",
			"path": "industries/education",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/education-C7QYFV1R.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/map-pin-BIDWhrwv.js",
				"/assets/megaphone-CuRaGHmu.js",
				"/assets/monitor-DYPScnuF.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/users-C2my3pE2.js",
				"/assets/ScrollReveal-CXAisqc7.js",
				"/assets/createLucideIcon-CwdIbnKb.js"
			],
			"css": ["/assets/IndustryPage-CognUMiH.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/healthcare": {
			"id": "routes/healthcare",
			"parentId": "root",
			"path": "industries/healthcare",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/healthcare-CUTppuPv.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/map-pin-BIDWhrwv.js",
				"/assets/megaphone-CuRaGHmu.js",
				"/assets/monitor-DYPScnuF.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/users-C2my3pE2.js",
				"/assets/ScrollReveal-CXAisqc7.js",
				"/assets/createLucideIcon-CwdIbnKb.js"
			],
			"css": ["/assets/IndustryPage-CognUMiH.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/professional-services": {
			"id": "routes/professional-services",
			"parentId": "root",
			"path": "industries/professional-services",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/professional-services-Be3B6FtS.js",
			"imports": ["/assets/jsx-runtime-BsyjEvTb.js", "/assets/ScrollReveal-CXAisqc7.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/solutions": {
			"id": "routes/solutions",
			"parentId": "root",
			"path": "solutions",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/solutions-uhnpiHKD.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/SolutionsOverviewPage-k0WREw1P.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/proxy-ST7B0mD5.js",
				"/assets/file-text-Burlk_f5.js",
				"/assets/map-pin-BIDWhrwv.js",
				"/assets/megaphone-CuRaGHmu.js",
				"/assets/play-DrBcmWZN.js",
				"/assets/search-D5LEcq4c.js",
				"/assets/shield-check-DMuVmhW2.js",
				"/assets/target-ZJMD494F.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/users-C2my3pE2.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/SolutionsOverviewPage-CCmpwlVE.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/build": {
			"id": "routes/build",
			"parentId": "root",
			"path": "solutions/build",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/build-IG5dE8OY.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/SolutionsOverviewPage-k0WREw1P.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/proxy-ST7B0mD5.js",
				"/assets/file-text-Burlk_f5.js",
				"/assets/map-pin-BIDWhrwv.js",
				"/assets/megaphone-CuRaGHmu.js",
				"/assets/play-DrBcmWZN.js",
				"/assets/search-D5LEcq4c.js",
				"/assets/shield-check-DMuVmhW2.js",
				"/assets/target-ZJMD494F.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/users-C2my3pE2.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/SolutionsOverviewPage-CCmpwlVE.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/create": {
			"id": "routes/create",
			"parentId": "root",
			"path": "solutions/create",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/create-DOXqTeRc.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/SolutionsOverviewPage-k0WREw1P.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/proxy-ST7B0mD5.js",
				"/assets/file-text-Burlk_f5.js",
				"/assets/map-pin-BIDWhrwv.js",
				"/assets/megaphone-CuRaGHmu.js",
				"/assets/play-DrBcmWZN.js",
				"/assets/search-D5LEcq4c.js",
				"/assets/shield-check-DMuVmhW2.js",
				"/assets/target-ZJMD494F.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/users-C2my3pE2.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/SolutionsOverviewPage-CCmpwlVE.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/promote": {
			"id": "routes/promote",
			"parentId": "root",
			"path": "solutions/promote",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/promote-eaEcb9r3.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/SolutionsOverviewPage-k0WREw1P.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/proxy-ST7B0mD5.js",
				"/assets/file-text-Burlk_f5.js",
				"/assets/map-pin-BIDWhrwv.js",
				"/assets/megaphone-CuRaGHmu.js",
				"/assets/play-DrBcmWZN.js",
				"/assets/search-D5LEcq4c.js",
				"/assets/shield-check-DMuVmhW2.js",
				"/assets/target-ZJMD494F.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/users-C2my3pE2.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/SolutionsOverviewPage-CCmpwlVE.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/about": {
			"id": "routes/about",
			"parentId": "root",
			"path": "about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/about-V0W4qtp4.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/briefcase-C-mYWWl7.js",
				"/assets/target-ZJMD494F.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/users-C2my3pE2.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/about-5IYE-Zsv.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/how-it-works": {
			"id": "routes/how-it-works",
			"parentId": "root",
			"path": "how-it-works",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/how-it-works-B2Cxq7Rr.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/chart-column-CkOwwm5a.js",
				"/assets/lightbulb-CPfvZZEL.js",
				"/assets/rocket-DS-d3Amh.js",
				"/assets/search-D5LEcq4c.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/how-it-works-CLU59gNz.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/creative-workspace": {
			"id": "routes/creative-workspace",
			"parentId": "root",
			"path": "creative-workspace",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/creative-workspace-DpAZF2YQ.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/briefcase-C-mYWWl7.js",
				"/assets/circle-check-CH-gujLG.js",
				"/assets/file-text-Burlk_f5.js",
				"/assets/film-UP_0_Rum.js",
				"/assets/phone-BVAH-4Jp.js",
				"/assets/rocket-DS-d3Amh.js",
				"/assets/target-ZJMD494F.js",
				"/assets/user-DHGRb9qL.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/creative-workspace-DHEOdfjN.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/apply": {
			"id": "routes/apply",
			"parentId": "root",
			"path": "apply",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/apply-BtdK-Xzp.js",
			"imports": ["/assets/jsx-runtime-BsyjEvTb.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/contact": {
			"id": "routes/contact",
			"parentId": "root",
			"path": "contact",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/contact-Dop--lko.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/chart-column-CkOwwm5a.js",
				"/assets/circle-check-CH-gujLG.js",
				"/assets/file-text-Burlk_f5.js",
				"/assets/lightbulb-CPfvZZEL.js",
				"/assets/phone-BVAH-4Jp.js",
				"/assets/user-DHGRb9qL.js"
			],
			"css": ["/assets/contact-6JLp--au.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/proof-of-work": {
			"id": "routes/proof-of-work",
			"parentId": "root",
			"path": "proof-of-work",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/proof-of-work-BEbjgHSS.js",
			"imports": [
				"/assets/jsx-runtime-BsyjEvTb.js",
				"/assets/createLucideIcon-CwdIbnKb.js",
				"/assets/arrow-right-15U-iPYb.js",
				"/assets/chart-column-CkOwwm5a.js",
				"/assets/circle-check-CH-gujLG.js",
				"/assets/search-D5LEcq4c.js",
				"/assets/shield-check-DMuVmhW2.js",
				"/assets/sparkles-2Q9aahuk.js",
				"/assets/trending-up-P5GqPifz.js",
				"/assets/ScrollReveal-CXAisqc7.js"
			],
			"css": ["/assets/proof-of-work-BXOfu75J.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-ff0ebe5f.js",
	"version": "ff0ebe5f",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"v8_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [
	"/",
	"/solutions",
	"/solutions/build",
	"/solutions/create",
	"/solutions/promote",
	"/industries/education",
	"/industries/healthcare",
	"/industries/professional-services",
	"/about",
	"/contact",
	"/creative-workspace",
	"/how-it-works"
];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/education": {
		id: "routes/education",
		parentId: "root",
		path: "industries/education",
		index: void 0,
		caseSensitive: void 0,
		module: education_exports
	},
	"routes/healthcare": {
		id: "routes/healthcare",
		parentId: "root",
		path: "industries/healthcare",
		index: void 0,
		caseSensitive: void 0,
		module: healthcare_exports
	},
	"routes/professional-services": {
		id: "routes/professional-services",
		parentId: "root",
		path: "industries/professional-services",
		index: void 0,
		caseSensitive: void 0,
		module: professional_services_exports
	},
	"routes/solutions": {
		id: "routes/solutions",
		parentId: "root",
		path: "solutions",
		index: void 0,
		caseSensitive: void 0,
		module: solutions_exports
	},
	"routes/build": {
		id: "routes/build",
		parentId: "root",
		path: "solutions/build",
		index: void 0,
		caseSensitive: void 0,
		module: build_exports
	},
	"routes/create": {
		id: "routes/create",
		parentId: "root",
		path: "solutions/create",
		index: void 0,
		caseSensitive: void 0,
		module: create_exports
	},
	"routes/promote": {
		id: "routes/promote",
		parentId: "root",
		path: "solutions/promote",
		index: void 0,
		caseSensitive: void 0,
		module: promote_exports
	},
	"routes/about": {
		id: "routes/about",
		parentId: "root",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: about_exports
	},
	"routes/how-it-works": {
		id: "routes/how-it-works",
		parentId: "root",
		path: "how-it-works",
		index: void 0,
		caseSensitive: void 0,
		module: how_it_works_exports
	},
	"routes/creative-workspace": {
		id: "routes/creative-workspace",
		parentId: "root",
		path: "creative-workspace",
		index: void 0,
		caseSensitive: void 0,
		module: creative_workspace_exports
	},
	"routes/apply": {
		id: "routes/apply",
		parentId: "root",
		path: "apply",
		index: void 0,
		caseSensitive: void 0,
		module: apply_exports
	},
	"routes/contact": {
		id: "routes/contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: contact_exports
	},
	"routes/proof-of-work": {
		id: "routes/proof-of-work",
		parentId: "root",
		path: "proof-of-work",
		index: void 0,
		caseSensitive: void 0,
		module: proof_of_work_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
