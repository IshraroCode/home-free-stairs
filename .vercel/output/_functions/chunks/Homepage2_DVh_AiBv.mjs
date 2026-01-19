const heroBackgournd = new Proxy({"src":"/_astro/Homepage2.B2z30Ije.png","width":1440,"height":551,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ocode-2023/FrontendHFS/src/assets/images/Homepage2.png";
							}
							
							return target[name];
						}
					});

export { heroBackgournd as default };
