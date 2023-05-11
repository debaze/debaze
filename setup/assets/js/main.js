import {Brand} from "./Brand.js";
import {Component} from "./Component.js";
import {Link} from "./Link.js";
import {Price} from "./Price.js";
import {Sell} from "./Sell.js";
import {Setup} from "./Setup.js";
import {Type} from "./Type.js";

const setup = new Setup([
	new Component({
		type: Type.CPU,
		brand: Brand.INTEL,
		model: "Core i7-13700K 3.4GHz",
		description: "LGA 1700 • 16 cores",
		image: "https://m.media-amazon.com/images/I/31Byi3U8YDL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(419.89, 4.61),
				link: new Link("https://www.amazon.es/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(440.90, 4.61),
				link: new Link("https://www.amazon.de/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(460.49, 0),
				link: new Link("https://www.amazon.fr/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(499.0, 0),
				link: new Link("https://www.amazon.es/dp/B0BCF57FL5"),
			}),
			new Sell({
				price: new Price(529.27, 0),
				link: new Link("https://www.amazon.fr/dp/B0BS9CXQZQ"),
			}),
		],
		bestPrice: new Price(419.89, 4.61),
		target: 424.50,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.MOTHERBOARD,
		brand: Brand.ASUS,
		model: "ROG Strix Z790-F Gaming",
		description: "ATX • LGA 1700 • Wi-Fi",
		image: "https://m.media-amazon.com/images/I/41Er4p78RML._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(425.57, 7.77),
				link: new Link("https://www.amazon.de/dp/B0BH94RXPC"),
			}),
			new Sell({
				price: new Price(457.34, 11.66),
				link: new Link("https://www.amazon.fr/dp/B0BH94RXPC"),
			}),
			new Sell({
				price: new Price(474.46, 9.90),
				link: new Link("https://www.amazon.es/dp/B0BH94RXPC"),
			}),
			new Sell({
				price: new Price(509.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_cm_1700_puis_ref_est_in20014869.html"),
			}),
		],
		bestPrice: new Price(422.66, 7.77),
		target: 430.43,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.WATERCOOLING,
		brand: Brand.CORSAIR,
		model: "iCUE H150i ELITE LCD",
		description: "360mm • 3x120mm • LGA 1700",
		image: "https://m.media-amazon.com/images/I/31dLDYygqUL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(299.00, 11.79),
				link: new Link("https://www.amazon.fr/dp/B09HDWQKV8"),
			}),
			new Sell({
				price: new Price(329.00, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_reliq_puis_ref_est_in20011451.html"),
			}),
			new Sell({
				price: new Price(353.67, 1.50),
				link: new Link("https://www.amazon.es/dp/B09HDWQKV8"),
			}),
			new Sell({
				price: new Price(389.07, 0),
				link: new Link("https://www.amazon.de/dp/B09HDWQKV8"),
			}),
		],
		bestPrice: new Price(299.00, 11.79),
		target: 310,
	}),
	new Component({
		type: Type.RAM,
		brand: Brand.CORSAIR,
		model: "Vengeance 32Gb (2x16Gb)",
		description: "DDR5 6400MHz • CL32 • Black",
		image: "https://m.media-amazon.com/images/I/31s6I6ymzwL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(134.89, 4.65),
				link: new Link("https://www.amazon.de/dp/B0BPL9VYPW"),
			}),
			new Sell({
				price: new Price(153.88, 0),
				link: new Link("https://www.amazon.fr/dp/B0BPL9VYPW"),
			}),
			new Sell({
				price: new Price(181.77, 4.65),
				link: new Link("https://www.amazon.es/dp/B0BPL9VYPW"),
			}),
		],
		bestPrice: new Price(134.89, 4.65),
		target: 140,
	}),
	new Component({
		type: Type.GPU,
		brand: Brand.AMD,
		model: "Radeon RX 7900 XTX",
		description: "24Gb GDDR6 • 4K",
		image: "https://m.media-amazon.com/images/I/31q7quYSDvL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(1092.00, 0),
				link: new Link("https://shop-eu-fr.amd.com/amd-radeon-rx-7900-xtx-graphics"),
			}),
		],
		bestPrice: new Price(1069.00, 0),
		target: 1087,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO XT 1Tb M.2 NVMe",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 5800Mb",
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(93.99, 4.82),
				link: new Link("https://www.amazon.de/dp/B09F5Z6BJ6"),
			}),
			new Sell({
				price: new Price(103.98, 4.82),
				link: new Link("https://www.amazon.es/dp/B09F5Z6BJ6"),
			}),
			new Sell({
				price: new Price(110.86, 0),
				link: new Link("https://www.amazon.fr/dp/B09F5Z6BJ6"),
			}),
			new Sell({
				price: new Price(124.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ssd_puis_ref_est_in20010807.html"),
			}),
		],
		bestPrice: new Price(93.99, 0),
		target: 98.81,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO XT 2Tb M.2 NVMe",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 6800Mb",
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(172.85, 4.66),
				link: new Link("https://www.amazon.de/dp/B09F5X8ZMY"),
			}),
			new Sell({
				price: new Price(182.88, 0),
				link: new Link("https://www.amazon.fr/dp/B09F5X8ZMY"),
			}),
			new Sell({
				price: new Price(189.80, 4.66),
				link: new Link("https://www.amazon.es/dp/B09F5X8ZMY"),
			}),
			new Sell({
				price: new Price(219.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ssd_puis_ref_est_in20010806.html"),
			}),
		],
		bestPrice: new Price(172.85, 4.66),
		target: 177.51,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.SAMSUNG,
		model: "980 500Gb M.2 NVMe",
		description: "PCIe 3.0 • Read 3100Mb • Write 2600Mb",
		image: "https://m.media-amazon.com/images/I/31XnYpheJbL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(36.00, 4.59),
				link: new Link("https://www.amazon.de/dp/B08THW4S3T"),
			}),
			new Sell({
				price: new Price(43.14, 0),
				link: new Link("https://www.amazon.fr/dp/B08THW4S3T"),
			}),
			new Sell({
				price: new Price(49.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ssd_puis_ref_est_in20007749.html"),
			}),
			new Sell({
				price: new Price(52.95, 1.50),
				link: new Link("https://www.amazon.fr/dp/B08V7GT6F3"),
			}),
			new Sell({
				price: new Price(50.00, 4.59),
				link: new Link("https://www.amazon.es/dp/B08THW4S3T"),
			}),
			new Sell({
				price: new Price(58.77, 0),
				link: new Link("https://www.amazon.de/dp/B09G3DM8VF"),
			}),
			new Sell({
				price: new Price(55.52, 12.08),
				link: new Link("https://www.amazon.es/dp/B09G3DM8VF"),
			}),
		],
		bestPrice: new Price(36.00, 4.59),
		target: 40,
		certainty: true,
	}),
	new Component({
		type: Type.HDD,
		brand: Brand.SEAGATE,
		model: "Barracuda 4Tb",
		description: "SATA III • 5400 RPM • 3.5\"",
		image: "https://m.media-amazon.com/images/I/41Z-sFIFVOL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(75.74, 5.23),
				link: new Link("https://www.amazon.es/dp/B0713R3Y6F"),
			}),
			new Sell({
				price: new Price(85.20, 0),
				link: new Link("https://www.amazon.fr/dp/B0713R3Y6F"),
			}),
			new Sell({
				price: new Price(79.89, 5.40),
				link: new Link("https://www.amazon.de/dp/B07D9C7SQH"),
			}),
			new Sell({
				price: new Price(85.30, 0),
				link: new Link("https://www.amazon.fr/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(77.04, 12.56),
				link: new Link("https://www.amazon.es/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(89.72, 0),
				link: new Link("https://www.amazon.fr/dp/B07D9C7SQH"),
			}),
			new Sell({
				price: new Price(89.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wdi_sata_puis_ref_est_in10106812.html"),
			}),
			new Sell({
				price: new Price(84.98, 5.22),
				link: new Link("https://www.amazon.de/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(94.99, 5.40),
				link: new Link("https://www.amazon.es/dp/B07D9C7SQH"),
			}),
		],
		bestPrice: new Price(72.90, 5.40),
		target: 80,
		certainty: true,
	}),
	new Component({
		type: Type.PSU,
		brand: Brand.BE_QUIET,
		model: "Straight Power 11 1000W",
		description: "Modular • 80+ Platinum",
		image: "https://m.media-amazon.com/images/I/41UDBwjuXmL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(193.02, 9.90),
				link: new Link("https://www.amazon.de/dp/B083SVLLCQ"),
			}),
			new Sell({
				price: new Price(195.40, 9.90),
				link: new Link("https://www.amazon.de/dp/B078WZSN2W"),
			}),
			new Sell({
				price: new Price(199.14, 9.90),
				link: new Link("https://www.amazon.fr/dp/B078WZSN2W"),
			}),
			new Sell({
				price: new Price(209.99, 0),
				link: new Link("https://www.amazon.fr/dp/B083SVLLCQ"),
			}),
			new Sell({
				price: new Price(209.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ali_puis_ref_est_in20000189.html"),
			}),
			new Sell({
				price: new Price(200.41, 9.90),
				link: new Link("https://www.amazon.es/dp/B078WZSN2W"),
			}),
			new Sell({
				price: new Price(201.53, 9.90),
				link: new Link("https://www.amazon.es/dp/B083SVLLCQ"),
			}),
		],
		bestPrice: new Price(193.02, 6.00),
		target: 200,
		certainty: true,
	}),
	new Component({
		type: Type.CASE,
		brand: Brand.CORSAIR,
		model: "Obsidian 500D RGB SE",
		description: "50.01 x 23.7 x 50.7cm • 3 LL120 RGB fans included",
		image: "https://m.media-amazon.com/images/I/41y8mm4LplL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(243.35, 23.16),
				link: new Link("https://www.amazon.de/dp/B07C46L1D8"),
			}),
			new Sell({
				price: new Price(249.00, 45.52),
				link: new Link("https://www.amazon.fr/dp/B07C46L1D8"),
			}),
			new Sell({
				price: new Price(249.00, 61.29),
				link: new Link("https://www.amazon.es/dp/B07C46L1D8"),
			}),
		],
		bestPrice: new Price(216.41, 19.61),
		target: 240,
		certainty: true,
	}),
	new Component({
		type: Type.KEYBOARD,
		brand: Brand.LOGITECH,
		model: "G815 LIGHTSYNC RGB",
		description: "AZERTY • GL Tactile switches",
		image: "https://m.media-amazon.com/images/I/4117+8ARx3L._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(162.13, 0),
				link: new Link("https://www.amazon.fr/dp/B07VV8R58C"),
			}),
			new Sell({
				price: new Price(184.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_gaming_puis_rubrique_est_wg_pccla_puis_ref_est_in20000200.html"),
			}),
			new Sell({
				price: new Price(218.63, 6.84),
				link: new Link("https://www.amazon.de/dp/B07VV8R58C"),
			}),
		],
		bestPrice: new Price(162.13, 0),
		target: 160,
		certainty: true,
	}),
]);

setup.populate(table, total, template);