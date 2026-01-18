const heroImage = new Proxy({"src":"/_astro/hero-image.J4rOSOtB.png","width":500,"height":333,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ishrar/home-free-stairs-main/home-free-stairs/src/assets/images/hero-image.png";
							}
							
							return target[name];
						}
					});

export { heroImage as default };
