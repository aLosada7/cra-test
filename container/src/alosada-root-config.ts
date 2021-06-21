import { registerApplication, start } from "single-spa";

registerApplication({
	name: "@alosada/al-header",
	app: () => System.import("@alosada/al-header"),
	activeWhen: ["/"],
});

registerApplication({
	name: "@alosada/al-landing",
	app: () => System.import("@alosada/al-landing"),
	activeWhen: ["/"],
});

registerApplication({
	name: "@alosada/al-price-plan",
	app: () => System.import("@alosada/al-price-plan"),
	activeWhen: ["/"],
});

start({
	urlRerouteOnly: true,
});
