const heroImage = new Proxy({"src":"/_astro/hero-image.J4rOSOtB.png","width":500,"height":333,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ocode-2023/FrontendHFS/src/assets/images/hero-image.png";
							}
							
							return target[name];
						}
					});

export { heroImage as default };
