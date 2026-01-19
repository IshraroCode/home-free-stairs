const aboutImage = new Proxy({"src":"/_astro/aboutSection.CtjLX9rq.png","width":632,"height":632,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ocode-2023/FrontendHFS/src/assets/images/aboutSection.png";
							}
							
							return target[name];
						}
					});

export { aboutImage as default };
