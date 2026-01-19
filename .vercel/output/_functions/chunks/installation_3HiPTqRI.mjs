const installation = new Proxy({"src":"/_astro/installation.BBrLDhH2.png","width":437,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ocode-2023/FrontendHFS/src/assets/images/installation.png";
							}
							
							return target[name];
						}
					});

export { installation as default };
