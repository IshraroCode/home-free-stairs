const Homepage = new Proxy({"src":"/_astro/Homepage.DUmhE6Uw.png","width":1440,"height":551,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ocode-2023/FrontendHFS/src/assets/images/Homepage.png";
							}
							
							return target[name];
						}
					});

export { Homepage as default };
