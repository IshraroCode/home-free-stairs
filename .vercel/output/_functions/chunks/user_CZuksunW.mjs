const user = new Proxy({"src":"/_astro/user.Cjxu169C.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ocode-2023/FrontendHFS/src/assets/images/user.png";
							}
							
							return target[name];
						}
					});

export { user as default };
