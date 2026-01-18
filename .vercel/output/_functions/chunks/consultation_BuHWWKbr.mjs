const consultation = new Proxy({"src":"/_astro/consultation.Dn1l5i5X.png","width":436,"height":371,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ishrar/home-free-stairs-main/home-free-stairs/src/assets/images/consultation.png";
							}
							
							return target[name];
						}
					});

export { consultation as default };
