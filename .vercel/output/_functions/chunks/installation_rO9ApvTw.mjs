const installation = new Proxy({"src":"/_astro/installation.BBrLDhH2.png","width":437,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ishrar/home-free-stairs-main/home-free-stairs/src/assets/images/installation.png";
							}
							
							return target[name];
						}
					});

export { installation as default };
