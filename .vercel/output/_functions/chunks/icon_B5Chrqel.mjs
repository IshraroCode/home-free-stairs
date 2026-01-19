const icon = new Proxy({"src":"/_astro/icon.D8Thc9_O.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ocode-2023/FrontendHFS/src/assets/images/icon.png";
							}
							
							return target[name];
						}
					});

export { icon as default };
