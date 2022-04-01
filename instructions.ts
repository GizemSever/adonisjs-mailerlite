/*
* adonisjs-mailerlite
*
* (c) Gizem Sever <gizemsever68@gmail.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import {ApplicationContract} from '@ioc:Adonis/Core/Application'
import * as sinkStatic from '@adonisjs/sink'
import {join} from 'path'

function getStub(...relativePaths: string[]) {
	return join(__dirname, 'templates', ...relativePaths)
}

export default async function instructions(projectRoot: string, app: ApplicationContract, sink: typeof sinkStatic) {
	// Config
	const configPath = app.configPath('mailerlite.ts')
	const mailerLiteConfig = new sink.files.TemplateLiteralFile(
		projectRoot,
		configPath,
		getStub('mailerlite.txt')
	)
	mailerLiteConfig.apply().commit()
	const configDir = app.directoriesMap.get('config') || 'config'
	sink.logger.action('create').succeeded(`${configDir}/mailerlite.ts`)

	// .env
	const env = new sink.files.EnvFile(projectRoot)
	env.set('MAILERLITE_API_KEY', '')
	env.commit()
	sink.logger.action('update').succeeded('.env,.env.example')
}
