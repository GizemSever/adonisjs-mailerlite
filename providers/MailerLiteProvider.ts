/*
 * adonisjs-mailerlite
 *
 * (c) Gizem Sever <gizemsever68@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ApplicationContract} from '@ioc:Adonis/Core/Application'
import MailerLite from 'mailerlite-api-v2-node'

export default class MailerLiteProvider {
	public static needApplication = true

	constructor(protected app: ApplicationContract) {
	}

	public register(): void {
		this.app.container.singleton('Adonis/Addons/MailerLite', () => {
			const config = this.app.container
				.resolveBinding('Adonis/Core/Config')
				.get('mailerlite', {})
			return MailerLite(config.apiKey, config.options)
		})
	}
}

