const assessment = new Proxy({"src":"/_astro/assessment.D8bJTmN7.png","width":435,"height":379,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ishrar/home-free-stairs-main/home-free-stairs/src/assets/images/assessment.png";
							}
							
							return target[name];
						}
					});

export { assessment as default };
