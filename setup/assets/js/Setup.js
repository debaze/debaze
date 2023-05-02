import {Component} from "./Component.js";
import {Price} from "./Price.js";

export class Setup {
	/**
	 * @private
	 * @type {Component[]}
	 */
	#components;

	/** @param {Component[]} components */
	constructor(components) {
		this.#components = components;
	}

	/** @returns {Component[]} */
	getComponents() {
		return this.#components;
	}

	/** @param {Component[]} components */
	setComponents(components) {
		this.#components = components;
	}

	/**
	 * @param {HTMLTableElement} table
	 * @param {HTMLDivElement} total
	 * @param {HTMLTemplateElement} template
	 */
	populate(table, total, template) {
		const body = table.lastElementChild;
		const totalPrice = new Price(0, 0), bestTotalPrice = new Price(0, 0);

		for (const component of this.#components) {
			const tr = template.content.querySelector("tr").cloneNode(true);

			tr.querySelector(".type").textContent = component.getType();
			tr.querySelector(".image img").src = component.getImage();
			tr.querySelector(".model .name").textContent = `${component.getBrand()} ${component.getModel()}`;
			tr.querySelector(".model .description").textContent = component.getDescription();

			const bestSell = component.getBestSell();

			for (const sell of component.getSells()) {
				const price = sell.getPrice();
				const link = sell.getLink();
				const website = link.getWebsite();
				const a = template.content.querySelector(".sell").cloneNode(true);

				a.href = link.getURL();
				a.querySelector("img").src = website.getLogo();
				a.querySelector("img").alt = website.getName();
				a.querySelector(".total").textContent = `${price.getTotalAmount().toFixed(2)}€`;

				if (price.getDeliveryAmount() !== 0) {
					a.querySelector(".delivery").textContent = `including ${price.getDeliveryAmount().toFixed(2)}€ delivery`;
				}

				if (sell === bestSell) a.classList.add("best");

				tr.querySelector(".sells div").appendChild(a);
			}

			const bestPrice = component.getBestPrice();

			tr.querySelector(".summary .total").textContent = `${bestPrice.getTotalAmount().toFixed(2)}€`;

			if (bestPrice.getDeliveryAmount() !== 0) {
				tr.querySelector(".summary .delivery").textContent = `including ${bestPrice.getDeliveryAmount().toFixed(2)}€ delivery`;
			}

			tr.querySelector(".summary .target").textContent = `Target: ${component.getTarget().toFixed(2)}€`;

			body.appendChild(tr);

			totalPrice.setAmount(totalPrice.getAmount() + bestSell.getPrice().getAmount());
			totalPrice.setDeliveryAmount(totalPrice.getDeliveryAmount() + bestSell.getPrice().getDeliveryAmount());
			bestTotalPrice.setAmount(bestTotalPrice.getAmount() + bestPrice.getAmount());
			bestTotalPrice.setDeliveryAmount(bestTotalPrice.getDeliveryAmount() + bestPrice.getDeliveryAmount());
		}

		total.querySelector(".current-amount").textContent = `Current best total: ${totalPrice.getTotalAmount().toFixed(2)}€`;
		total.querySelector(".current-delivery").textContent = `including ${totalPrice.getDeliveryAmount().toFixed(2)}€ delivery`;
		total.querySelector(".best-amount").textContent = `Best total: ${bestTotalPrice.getTotalAmount().toFixed(2)}€`;
		total.querySelector(".best-delivery").textContent = `including ${bestTotalPrice.getDeliveryAmount().toFixed(2)}€ delivery`;
	}
}