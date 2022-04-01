/*
* adonisjs-mailerlite
*
* (c) Gizem Sever <gizemsever68@gmail.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

declare module '@ioc:Adonis/Addons/MailerLite' {
	import {default as MailerLitePackage} from 'mailerlite-api-v2-node'
	import {Options} from 'mailerlite-api-v2-node/dist/@types'

	export interface MailerLiteConfig {
		apiKey: string,
		options?: Options
	}

	const MailerLite = MailerLitePackage('')

	export default MailerLite
}
