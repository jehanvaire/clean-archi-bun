export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Karefour",
	description: "C'est carrefour, mais en mieux",
	navItems: [
		{
			label: "Accueil",
			href: "/",
		},
		{
			label: "Factures",
			href: "/factures",
		},
		{
			label: "Produits",
			href: "/produits",
		},
		{
			label: "Clients",
			href: "/clients",
		}
	],
};
